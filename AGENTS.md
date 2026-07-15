# AGENTS.md

Guidance for AI coding agents working in this repository.

## What this repo is

Personal blog of 顾佳凯 (Jiakai), served at https://blog.gujiakai.top.
Plain Hugo static site — no package.json, no Node toolchain. Bilingual:
Chinese is the default language at the site root, English lives under
/en/. Built and hosted on Netlify (`hugo --gc --minify`, publish dir
`public/`, Hugo pinned to 0.154.2 in netlify.toml). The theme is
Hugo-Theme-Simple, a git submodule at themes/hugo-theme-simple (not
vendored), heavily overridden by repo-level layouts/.

## File map

- config.yaml — all site config: languages, menus, permalinks, output
  formats, markup; theme is mounted via `module.imports` (see Gotchas)
- netlify.toml — build command, HUGO_VERSION, security headers (CSP),
  per-language 404 redirects
- content/zh/, content/en/ — mirrored trees: blog/<year>/*.md posts,
  blog/_index.md (archive page + cascade), about.md, til.md
- archetypes/blog.md — front matter template for new posts
- layouts/ — site templates (Hugo 0.146+ structure: baseof.html at the
  root, partials in layouts/_partials/), single.markdownraw.md renders
  the raw-.md output format
- i18n/zh.yaml, i18n/en.yaml — UI strings
- static/ — css/ (self-hosted bootstrap.min.css + custom.css), js/
  (self-hosted vanilla scripts, no jQuery/lightbox2: theme-init +
  theme-toggle, site-controls, sidebar-toc, back-to-top, copy-code,
  image-viewer = native <dialog> lightbox, utterances-init, emaction
  reactions, analytics, footer-year), data/image_dimensions.json +
  tag_translations.yaml, llms.txt + en/llms.txt, xslt/ (styled RSS)
- tools/ — one-off Python scraper (blog_scraper.py) that produced
  blog_posts.md; not part of the build
- .github/workflows/hugo-ci.yml — CI build check (checks out the theme
  submodule and runs the production Hugo build on push / PR)

## Commands

No package.json or Makefile; Hugo CLI only (Netlify uses 0.154.2):

- `git submodule update --init` — fetch the theme (required once)
- `hugo server` — local dev at http://localhost:1313
- `hugo --gc --minify` — production build (what Netlify runs)

## Architecture & conventions

- Post pairing: every blog post has `slug` and `translationKey` in
  front matter; both must be equal, and identical across the zh/en
  versions of a post. English filename = slug; Chinese filenames are
  Chinese. hreflang tags in head.html rely on this linkage.
- Permalinks: blog section uses /:year/:month/:slug.
- New posts go in content/<lang>/blog/<year>/; archetypes/blog.md
  pre-fills translationKey from the filename (correct for en; for zh
  posts set it manually to the English slug).
- MarkdownRaw output: blog posts also emit their raw Markdown at
  /:year/:month/:slug.md (global `uglyURLs: true` + `noUgly` on
  HTML/RSS + cascade in content/*/blog/_index.md). Only blog posts get
  this — about/til stay HTML-only.
- Taxonomies: tags only; categories are deliberately disabled.
- RSS: latest 20 posts only, styled via static/xslt.
- Commit messages: Conventional Commits in English (repo README carries
  the commitizen badge), e.g. `feat(security): ...`, `fix(a11y): ...`.
- Config comments are in Chinese and explain non-obvious decisions —
  read them before changing config.yaml or netlify.toml.

## Validation

- `hugo --gc --minify` must finish with zero WARN/ERROR output.
- `hugo server`: check both / (zh) and /en/, plus /archive/ and a post
  page in each language; verify the "View as Markdown" .md URL works.
- CSP in netlify.toml whitelists every third party in use. The
  utterances loader and the emaction reactions bundle are self-hosted
  under static/js/, so script-src no longer lists any CDN; external
  origins are Clarity, GA (googletagmanager), umami, and asciinema in
  script-src, with utteranc.es (frame) and api-emaction.gujiakai.top
  (connect) for the self-hosted widgets. Any new external
  script/iframe/connect target must be added to the matching directive
  or browsers will block it.

## Gotchas

- The theme is mounted through `module.imports` in config.yaml instead
  of the `theme:` key, specifically so `excludeFiles` can drop theme
  static files the site overrides or never uses (an 8.5MB README gif,
  the lightbox+jquery bundle, the theme's bootstrap bundle JS, and the
  theme copy-code.js / custom.js / lightbox.min.css). Do not "simplify"
  back to `theme:`.
- A fresh clone has an empty themes/hugo-theme-simple until you run
  `git submodule update --init`; builds fail without it.
- content/*/blog/_index.md needs its own `outputs: [HTML]` next to the
  cascade — removing it makes Hugo warn about a missing MarkdownRaw
  template for the archive page.
- The footer's `{Year}` placeholder is rendered at build time (see
  _partials/footer.html) and then corrected client-side by
  static/js/footer-year.js on every page load, so the copyright year
  stays current without a scheduled redeploy. The build-time value is
  the no-JS fallback; keep both in sync if you touch either.
- public/ is gitignored build output; never edit or commit it.
