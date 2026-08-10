# AGENTS.md

Guidance for AI coding agents working in this repository.

## What this repo is

Personal blog of 顾佳凯 (Jiakai), served at https://blog.gujiakai.top.
Plain Hugo static site — no package.json, no Node toolchain; first-party
scripts are TypeScript compiled by Hugo's embedded esbuild. Bilingual:
Chinese is the default language at the site root, English lives under
/en/. Built and hosted on Netlify (`hugo --gc --minify`, publish dir
`public/`, Hugo pinned to 0.164.0 in netlify.toml). The theme is
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
- assets/ts/ — first-party TypeScript (no jQuery/lightbox2: theme-init
  + theme-toggle, site-controls, sidebar-toc, back-to-top, copy-code,
  image-viewer = native <dialog> lightbox, utterances-init, analytics,
  footer-year, search), compiled per-entry to /js/<name>.<hash>.js by
  layouts/_partials/script-url.html (js.Build + fingerprint)
- tsconfig.json — editor/type-check config only; the build ignores it
- static/ — css/ (self-hosted bootstrap.min.css + custom.css), js/
  (only the vendored, patched emaction reactions bundle), xslt/
  (styled RSS)
- data/ — tag_translations.yaml (zh/en tag pairs for hreflang/switcher)
- .github/workflows/hugo-ci.yml — CI check (checks out the theme
  submodule, type-checks assets/ts/ with pinned TypeScript, and runs
  the production Hugo build on push / PR)

## Commands

No package.json or Makefile; Hugo CLI only (Netlify uses 0.164.0):

- `git submodule update --init` — fetch the theme (required once)
- `hugo server` — local dev at http://localhost:1313
- `hugo --gc --minify` — production build (what Netlify runs)
- `npx --yes --package typescript@5.9.3 tsc -p tsconfig.json` — TS type
  check (CI runs this same pinned command; a bare `npx tsc` would fetch
  npm's unrelated `tsc` squatter package, not TypeScript)

## Architecture & conventions

- Post pairing: every blog post has `slug` and `translationKey` in
  front matter; both must be equal, and identical across the zh/en
  versions of a post. English filename = slug; Chinese filenames are
  Chinese. hreflang tags in head.html rely on this linkage.
- Permalinks: blog section uses /:year/:month/:slug.
- New posts go in content/<lang>/blog/<year>/; archetypes/blog.md
  pre-fills translationKey from the filename (correct for en; for zh
  posts set it manually to the English slug).
- New-post checklist: create the zh/en pair with matching
  slug/translationKey; if a zh/en tag pair uses different names, add
  it to data/tag_translations.yaml. llms.txt updates itself.
- Site search: `/search/` + `/en/search/` query a self-hosted
  Meilisearch (search.gujiakai.top) straight over its REST API — no
  SDK. The searchable corpus is built by Hugo: the `SearchIndex`
  output format on `home` renders layouts/home.searchindex.json to
  /search-index.json and /en/search-index.json (81 docs each, full
  body, code blocks stripped). The VPS clones this repo, runs the
  pinned Hugo, and pushes those files into the `blog_zh` / `blog_en`
  indexes, so the Meilisearch admin key never leaves that box and
  never enters GitHub Secrets. Two indexes, never merged: the zh/en
  posts are 1:1 translations, so a merged index returns every post
  twice for shared tokens like `docker`. Meilisearch document ids only
  accept [a-zA-Z0-9_-], which is why the template emits a sanitized
  `id` field instead of using RelPermalink. Endpoint and the public
  search-only key live in `params.search` in config.yaml; leaving
  either blank degrades /search/ to a disabled "not enabled" state
  rather than breaking the build.
- MarkdownRaw output: blog posts also emit their raw Markdown at
  /:year/:month/:slug.md (global `uglyURLs: true` + `noUgly` on
  HTML/RSS + cascade in content/*/blog/_index.md). Only blog posts get
  this — about/til stay HTML-only.
- Taxonomies: tags only; categories are deliberately disabled.
- RSS: latest 20 posts only, styled via static/xslt.
- llms.txt: generated at build time per language from
  layouts/home.llms.txt (→ /llms.txt and /en/llms.txt, LLMS output
  format on home). It lists every post with its front-matter summary —
  never hand-edit a static copy.
- Commit messages: Conventional Commits in English (repo README carries
  the commitizen badge), e.g. `feat(security): ...`, `fix(a11y): ...`.
- Config comments are in Chinese and explain non-obvious decisions —
  read them before changing config.yaml or netlify.toml.

## Validation

- `hugo --gc --minify` must finish with zero WARN/ERROR output.
- `hugo server`: check both / (zh) and /en/, plus /archive/ and a post
  page in each language; verify the "View as Markdown" .md URL works.
- CSP in netlify.toml whitelists every third party in use. The
  utterances loader (compiled from assets/ts/) and the emaction
  reactions bundle (vendored in static/js/) are both served
  first-party, so script-src no longer lists any CDN; external
  origins are Clarity, GA (googletagmanager), umami, asciinema in
  script-src, with utteranc.es (frame) and api-emaction.gujiakai.top
  plus search.gujiakai.top (connect) for the self-hosted widgets and
  Meilisearch. Any new external script/iframe/connect target must be
  added to the matching directive or browsers will block it.
- `hugo server` fast render does NOT rebuild the home-kind
  /search-index.json when you edit a post — it keeps serving the old
  one. Use `hugo server --disableFastRender` for any search work, or
  you will chase a phantom "search can't find the post I just wrote".
- The production build command adds `--panicOnWarning`, so a custom
  output format without its template is a failed deploy, not a
  warning. `--printPathWarnings` and `--printI18nWarnings` are worth
  passing locally: the first turns a silent same-path collision (two
  outputs clobbering each other) into a WARN, the second catches
  missing i18n keys, which otherwise render as empty strings with no
  build signal at all.

## Gotchas

- The theme is mounted through `module.imports` in config.yaml instead
  of the `theme:` key, so the mounts' `files` setting can drop theme
  static files the site replaces or never uses (jquery + lightbox2,
  bootstrap bundle JS, theme copy-code.js/custom.js, lightbox chrome
  images). Negated globs need the `! ` prefix — the space is required.
  Declaring mounts disables the theme's default mounts, which is why
  i18n is mounted explicitly; css/style.css and images/favicon.ico
  intentionally come from the theme. Do not "simplify" back to
  `theme:`.
- A fresh clone has an empty themes/hugo-theme-simple until you run
  `git submodule update --init`; builds fail without it.
- content/*/blog/_index.md needs its own `outputs: [HTML]` next to the
  cascade — removing it makes Hugo warn about a missing MarkdownRaw
  template for the archive page.
- The footer's `{Year}` placeholder is rendered at build time (see
  _partials/footer.html) and then corrected client-side by
  assets/ts/footer-year.ts on every page load, so the copyright year
  stays current without a scheduled redeploy. The build-time value is
  the no-JS fallback; keep both in sync if you touch either.
- Each assets/ts/ entry compiles standalone as a global script (IIFE,
  target es2018, no imports/exports); Hugo's esbuild does strip types
  but performs no type checking, so the pinned tsc command in CI is
  the only type gate. Scripts are minified in every environment except
  development (Netlify previews must not ship sourcemap debug bundles).
  The fingerprinted /js/<name>.<hash>.js URL replaces the old ?v=
  query-string cache busting for scripts (asset-url.html still handles
  css/images/the emaction vendor file).
- public/ is gitignored build output; never edit or commit it.
