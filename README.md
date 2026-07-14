<p align="center">
  <img src="public/brand/eidos-mark.svg" width="104" alt="Eidos logo" />
</p>

<h1 align="center">Eidos website</h1>

<p align="center">
  The bilingual public home of the Eidos programming language.
</p>

<p align="center">
  <a href="README.zh-CN.md">简体中文</a> ·
  <a href="https://dlqw.github.io/eidos-website/">Website</a> ·
  <a href="https://github.com/dlqw/Eidosc">Compiler</a> ·
  <a href="https://github.com/dlqw/eidos-tutorial">Tutorial</a>
</p>

## About

This repository contains the official Eidos language website and its public
brand assets. The site introduces the language, compiler pipeline, first-party
toolchain, learning resources, installation path, project maturity, and ways
to contribute. English and Simplified Chinese are published as separate,
linkable pages.

The site is intentionally static: React provides focused interactions such as
theme selection, keyboard-accessible code tabs, mobile navigation, and copy
feedback, while Vite produces a GitHub Pages-ready artifact.

## Repository structure

```text
.
├── public/
│   ├── brand/              # SVG sources and generated PNG brand assets
│   ├── site.webmanifest    # Installable-site metadata
│   ├── robots.txt
│   └── sitemap.xml
├── scripts/
│   └── generate-brand-assets.mjs
├── src/
│   ├── components/         # Accessible interactive components
│   ├── test/               # Shared test setup
│   ├── App.tsx             # Page composition
│   ├── content.ts          # English and Simplified Chinese content
│   ├── main.tsx            # Browser entry point
│   └── styles.css          # Responsive brand system and layouts
├── zh-CN/index.html        # Simplified Chinese document metadata and entry
├── index.html              # English document metadata and entry
├── 404.html                # GitHub Pages fallback
└── BRAND.md                # Public logo usage guide
```

## Local development

### Requirements

- Node.js 22.12 or newer;
- npm 10 or newer.

### Start the development server

```bash
npm install
npm run brand
npm run dev
```

Vite prints the local address. The English page is served at `/`; the
Simplified Chinese page is served at `/zh-CN/`.

### Validate a change

```bash
npm run brand
npm run check
```

`npm run check` runs linting, TypeScript checks, interaction and accessibility
tests, and a production build. Generated brand PNGs are committed so metadata
consumers and social previews do not depend on an SVG renderer.

## Deployment

The Pages workflow builds the site from `main` with
`VITE_BASE_PATH=/eidos-website/`, uploads the static `dist/` directory, and
deploys it through GitHub Pages. Pull requests run the same quality gates but
do not publish the site.

For another base path, set `VITE_BASE_PATH` before building:

```bash
VITE_BASE_PATH=/your-base/ npm run build
```

## Contributing

Focused improvements to content, accessibility, responsive behavior, tests,
and public brand assets are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md)
before opening a pull request. Language and compiler changes belong in the
[Eidosc repository](https://github.com/dlqw/Eidosc).

Security reports should follow [SECURITY.md](SECURITY.md).

## License

The website source and brand assets are available under the
[MIT License](LICENSE).
