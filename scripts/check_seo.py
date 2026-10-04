#!/usr/bin/env python3
"""Validate the indexing metadata in a production Hugo build, without network access."""

import argparse
from collections import defaultdict
from html.parser import HTMLParser
from pathlib import Path
import re
import shlex
from urllib.parse import quote, unquote, urlsplit
import xml.etree.ElementTree as ET


ROOT = Path(__file__).resolve().parents[1]
SITEMAP = "{http://www.sitemaps.org/schemas/sitemap/0.9}"
XHTML = "{http://www.w3.org/1999/xhtml}"


def production_base_url():
    # Read this repository's single top-level YAML scalar without a YAML package.
    values = re.findall(
        r"^baseURL:[ \t]*(.+)$", (ROOT / "config.yaml").read_text(encoding="utf-8"), re.M)
    tokens = shlex.split(values[0], comments=True) if len(values) == 1 else []
    if len(tokens) != 1:
        raise ValueError("config.yaml must contain one top-level baseURL URL")
    parsed = urlsplit(tokens[0])
    if (parsed.scheme != "https" or not parsed.netloc or parsed.username
            or parsed.password or parsed.query or parsed.fragment):
        raise ValueError("config.yaml baseURL must be an absolute HTTPS site URL")
    return tokens[0].rstrip("/") + "/"


def normalized_url(value):
    """Compare UTF-8 URL paths consistently, including percent-encoded Chinese."""
    parsed = urlsplit(value)
    path = quote(unquote(parsed.path, encoding="utf-8", errors="strict"), safe="/-._~")
    return parsed._replace(path=path).geturl()


class Page(HTMLParser):
    def __init__(self, file, url):
        super().__init__()
        self.file, self.url = file, url
        self.lang = ""
        self.titles, self.descriptions, self.headings = [], [], []
        self.canonicals, self.alternates = [], []
        self.noindex = self.alias = self.in_head = False
        self.capture = None

    @property
    def indexable(self):
        return not (self.noindex or self.alias)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "html":
            self.lang = (attrs.get("lang") or "").strip().lower()
        if tag == "head":
            self.in_head = True
        if tag == "h1" or (tag == "title" and self.in_head):
            self.capture = self.headings if tag == "h1" else self.titles
            self.capture.append("")
        if not self.in_head:
            return
        if tag == "meta":
            name = (attrs.get("name") or "").lower()
            content = attrs.get("content") or ""
            if name == "description":
                self.descriptions.append(content)
            if name in ("robots", "googlebot", "bingbot"):
                if {"noindex", "none"}.intersection(re.split(r"[\s,]+", content.lower())):
                    self.noindex = True
            if (attrs.get("http-equiv") or "").lower() == "refresh":
                self.alias = True
        if tag == "link":
            rel = (attrs.get("rel") or "").lower().split()
            href = attrs.get("href") or ""
            if "canonical" in rel:
                self.canonicals.append(normalized_url(href))
            if "alternate" in rel and "hreflang" in attrs:
                self.alternates.append(((attrs.get("hreflang") or "").lower(), normalized_url(href)))

    def handle_endtag(self, tag):
        if tag == "h1" or (tag == "title" and self.in_head):
            self.capture = None
        if tag == "head":
            self.in_head = False

    def handle_data(self, data):
        if self.capture is not None:
            self.capture[-1] += data


def read_sitemaps(public_dir, base_url):
    pending, visited, entries = [public_dir / "sitemap.xml"], set(), []
    while pending:
        file = pending.pop()
        if file in visited:
            raise ValueError(f"{file}: repeated sitemap reference or cycle")
        visited.add(file)
        tree = ET.parse(file).getroot()
        if tree.tag not in (SITEMAP + "sitemapindex", SITEMAP + "urlset"):
            raise ValueError(f"{file}: expected a sitemap index or URL set")
        for entry in tree:
            locations = entry.findall(SITEMAP + "loc")
            if len(locations) != 1 or not locations[0].text:
                raise ValueError(f"{file}: sitemap entry needs exactly one nonempty loc")
            url = normalized_url(locations[0].text.strip())
            if tree.tag == SITEMAP + "sitemapindex":
                parsed = urlsplit(url)
                if not url.startswith(base_url) or parsed.query or parsed.fragment:
                    raise ValueError(f"{file}: sitemap must be on the configured site: {url}")
                relative = unquote(url[len(base_url):], errors="strict")
                if (not relative or "\\" in relative
                        or any(part in (".", "..") for part in relative.split("/"))):
                    raise ValueError(f"{file}: invalid sitemap path: {url}")
                pending.append(public_dir / relative)
            else:
                alternates = [
                    ((link.get("hreflang") or "").lower(), normalized_url(link.get("href") or ""))
                    for link in entry.findall(XHTML + "link")
                    if link.get("rel") == "alternate"
                ]
                entries.append((url, alternates, file))
    return entries, len(visited)


def check_seo(public_dir):
    base_url = production_base_url()
    pages = {}
    for file in sorted(public_dir.rglob("*.html")):
        relative = file.relative_to(public_dir).as_posix()
        # HTML copied verbatim from static/ (a search engine verification file,
        # a standalone demo) is not a Hugo page and carries no page metadata.
        if (ROOT / "static" / relative).is_file():
            continue
        path = relative[:-len("index.html")] if relative.endswith("/index.html") or relative == "index.html" else relative
        url = base_url + quote(path, safe="/-._~")
        page = Page(file, url)
        page.feed(file.read_text(encoding="utf-8"))
        pages[url] = page
    indexable = [page for page in pages.values() if page.indexable]
    if not indexable:
        raise ValueError(f"{public_dir}: no indexable HTML pages; build the production site first")

    errors, groups = [], defaultdict(list)
    for page in indexable:
        if not page.lang:
            errors.append(f"{page.file}: missing HTML lang")
        for label, values in (("title", page.titles), ("description", page.descriptions), ("h1", page.headings)):
            values = [" ".join(value.split()) for value in values]
            if len(values) != 1 or not values[0]:
                errors.append(f"{page.file}: expected one nonempty {label}, found {values!r}")
            elif label != "h1":
                # Translated technical titles may legitimately be identical.
                groups[(page.lang, label, values[0])].append(page.file)
        if page.canonicals != [page.url]:
            errors.append(f"{page.file}: canonical must be {page.url!r}, found {page.canonicals!r}")
    for (lang, label, value), files in groups.items():
        if len(files) > 1:
            errors.append(f"Duplicate {label} in {lang}: {value!r} in {', '.join(map(str, files))}")

    entries, sitemap_count = read_sitemaps(public_dir, base_url)
    if not entries:
        errors.append("Sitemaps contain no page URLs")
    seen, alternate_sets = set(), []
    for url, alternates, file in entries:
        if url in seen:
            errors.append(f"{file}: duplicate sitemap URL: {url}")
        seen.add(url)
        page = pages.get(url)
        if page is None or not page.indexable:
            errors.append(f"{file}: sitemap URL must be existing, indexable HTML: {url}")
        elif page.canonicals != [url]:
            errors.append(f"{file}: sitemap URL does not match its canonical: {url}")
        alternate_sets.append((url, alternates, str(file)))
    alternate_sets.extend((page.url, page.alternates, str(page.file)) for page in pages.values())
    # Hreflang may be declared in HTML, sitemaps, or both. Check return links
    # across both supported forms instead of requiring duplicate declarations.
    all_alternates = defaultdict(set)
    for source, alternates, _ in alternate_sets:
        all_alternates[source].update(target for lang, target in alternates if lang != "x-default")
    for source, alternates, context in alternate_sets:
        languages = set()
        for lang, target in alternates:
            if not lang or lang in languages:
                errors.append(f"{context}: empty or duplicate hreflang {lang!r} for {source}")
            languages.add(lang)
            page = pages.get(target)
            if page is None or not page.indexable:
                errors.append(f"{context}: hreflang target must be existing, indexable HTML: {target}")
                continue
            # x-default is a fallback rather than a language code. It need not
            # add another return-link requirement to a valid translated pair.
            if lang == "x-default":
                continue
            if lang != page.lang:
                errors.append(f"{context}: hreflang {lang!r} differs from {target} HTML lang {page.lang!r}")
            if source not in all_alternates[target]:
                errors.append(f"{context}: hreflang has no return link: {source} -> {target}")
    if errors:
        raise ValueError("\n".join(errors))
    return len(indexable), len(pages) - len(indexable), len(entries), sitemap_count


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--public-dir", type=Path, default=ROOT / "public",
        help="Hugo output directory (default: repository public/)",
    )
    args = parser.parse_args()
    try:
        pages, excluded, urls, sitemaps = check_seo(args.public_dir)
    except (OSError, ValueError, ET.ParseError) as error:
        parser.exit(1, f"SEO check failed:\n{error}\n")
    print(f"Validated {pages} indexable HTML pages and {urls} URLs in {sitemaps} sitemaps; "
          f"excluded {excluded} noindex/redirect pages.")


if __name__ == "__main__":
    main()
