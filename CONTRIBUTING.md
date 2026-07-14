# Contributing to the Eidos website

Thank you for helping improve the public home of Eidos. This repository is for
the website, its tests, deployment configuration, and public brand assets.
Compiler, language, standard-library, and CLI changes belong in
[`dlqw/Eidosc`](https://github.com/dlqw/Eidosc).

## Before opening a change

1. Search existing issues and pull requests for related work.
2. Create a short-lived branch from the latest `main` using one of these
   prefixes: `feat/`, `fix/`, `chore/`, `docs/`, `perf/`, `refactor/`, or
   `test/`.
3. Keep claims about language support, installation, and project maturity
   consistent with the current public compiler and tutorial repositories.
4. Update English and Simplified Chinese content together when the meaning is
   shared across locales.

## Development workflow

```bash
npm install
npm run brand
npm run dev
```

Before submitting a pull request, run:

```bash
npm run brand
npm run check
git diff --exit-code -- public/brand
```

## Quality expectations

- Use semantic HTML and preserve complete keyboard operation.
- Check layouts from 320 px wide through large desktop viewports.
- Respect `prefers-reduced-motion` and visible focus indicators.
- Keep public copy direct, factual, and suitable for people encountering Eidos
  for the first time.
- Do not add unpublished roadmaps, private project material, generated process
  notes, or claims that cannot be verified from public sources.
- Avoid unnecessary runtime dependencies and network requests.
- Add or update tests for interactive behavior.

## Brand changes

Read [`BRAND.md`](BRAND.md) before modifying the mark or palette. Editable SVG
files are the source of truth. Run `npm run brand` after an SVG change and
commit the corresponding PNG output.

## Pull requests

Use a clear Conventional Commit-style title, explain the public impact, list
the checks you ran, and include screenshots for visual changes when possible.
Pull requests target `main` and are merged only after required checks pass.
