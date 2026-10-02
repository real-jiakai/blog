#!/usr/bin/env python3
"""Check the published legacy URL redirects against Hugo's canonical HTML pages."""

import argparse
from html.parser import HTMLParser
from pathlib import Path
import re
import shlex
from urllib.parse import quote, unquote, urljoin, urlsplit


ROOT = Path(__file__).resolve().parents[1]


class CanonicalParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.urls = []

    def handle_starttag(self, tag, attrs):
        attributes = dict(attrs)
        if tag == "link" and "canonical" in (attributes.get("rel") or "").lower().split():
            self.urls.append(attributes.get("href"))


def production_base_url():
    # The repository keeps baseURL as one top-level YAML scalar. Read that scalar
    # without adding a YAML dependency or duplicating the production domain in CI.
    values = re.findall(r"^baseURL:[ \t]*(.+)$", (ROOT / "config.yaml").read_text(), re.M)
    if len(values) != 1:
        raise ValueError("config.yaml must contain one top-level baseURL scalar")
    tokens = shlex.split(values[0], comments=True)
    if len(tokens) != 1:
        raise ValueError("config.yaml baseURL must be a single URL")
    base_url = tokens[0]
    parsed = urlsplit(base_url)
    if (parsed.scheme != "https" or not parsed.netloc or parsed.username
            or parsed.password or parsed.query or parsed.fragment):
        raise ValueError("config.yaml baseURL must be an absolute HTTPS site URL")
    return base_url


def check_path(path, location):
    parsed = urlsplit(path)
    if (not path.startswith("/") or path.startswith("//") or parsed.scheme
            or parsed.netloc or parsed.query or parsed.fragment):
        raise ValueError(f"{location}: expected an explicit site-relative path: {path}")
    decoded = unquote(path, encoding="utf-8", errors="strict")
    if (any(character in decoded for character in "*:\\")
            or any(part in (".", "..") for part in decoded.split("/"))
            or re.search(r"[\x00-\x20\x7f]", decoded)):
        raise ValueError(f"{location}: wildcard, placeholder or unsafe path: {path}")
    # Require one consistent encoding: UTF-8, uppercase escapes, and literal
    # separators. This also rejects malformed escapes and encoded path traversal.
    if quote(decoded, safe="/-._~") != path:
        raise ValueError(f"{location}: path must use canonical UTF-8 URL encoding: {path}")
    if decoded.rstrip("/").endswith("/404.html"):
        raise ValueError(f"{location}: a 404 page must not be a redirect source or target")
    return decoded


def check_redirects(public_dir):
    source = ROOT / "static" / "_redirects"
    published = public_dir / "_redirects"
    if source.read_bytes() != published.read_bytes():
        raise ValueError(f"{published}: does not match static/_redirects; rebuild the site")
    base_url = production_base_url()
    rules = {}
    for line_number, line in enumerate(source.read_text().splitlines(), 1):
        line = line.split("#", 1)[0].strip()
        if not line:
            continue
        location = f"static/_redirects:{line_number}"
        fields = line.split()
        if len(fields) != 3 or fields[2] not in ("301", "301!"):
            raise ValueError(f"{location}: expected SOURCE TARGET 301 or 301!")
        old, new, _ = fields
        old_path = check_path(old, location)
        new_path = check_path(new, location)
        if not old_path.endswith(".html"):
            raise ValueError(f"{location}: only historical .html sources are allowed: {old}")
        if not (new_path.endswith("/") or new_path.endswith(".html")):
            raise ValueError(f"{location}: target must be an HTML page, not an asset: {new}")
        if old.rstrip("/") == new.rstrip("/"):
            raise ValueError(f"{location}: redirect points to itself: {old}")
        if old in rules:
            raise ValueError(f"{location}: duplicate source: {old}")
        rules[old] = (new, new_path, location)
    if not rules:
        raise ValueError("static/_redirects contains no legacy URL redirects")

    for old, (new, new_path, location) in rules.items():
        if new.rstrip("/") in rules:
            raise ValueError(f"{location}: redirect chain: {old} -> {new}")
        target = public_dir / new_path.lstrip("/")
        if new_path.endswith("/"):
            target /= "index.html"
        if not target.is_file():
            raise ValueError(f"{location}: redirect target was not built: {target}")
        parser = CanonicalParser()
        parser.feed(target.read_text(encoding="utf-8"))
        expected = urljoin(base_url, new)
        if parser.urls != [expected]:
            raise ValueError(
                f"{location}: {target} must have exactly one canonical {expected!r}; "
                f"found {parser.urls!r}"
            )
    return len(rules)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--public-dir", type=Path, default=ROOT / "public",
        help="Hugo output directory (default: repository public/)",
    )
    args = parser.parse_args()
    try:
        count = check_redirects(args.public_dir)
    except (OSError, ValueError) as error:
        parser.exit(1, f"Legacy redirects check failed: {error}\n")
    print(f"Validated {count} published legacy redirects and their canonical HTML targets.")


if __name__ == "__main__":
    main()
