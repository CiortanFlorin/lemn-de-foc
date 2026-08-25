# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Marketing/e-commerce-lite website for "Lemn și Flăcări", a firewood seller delivering to Galați, Brăila and Tulcea counties (Romania). Next.js 14 (App Router), plain JS (no TypeScript), Tailwind CSS. Content is entirely in Romanian.

## Commands

Runs on **Node.js 24.x** (pinned in `.nvmrc`, enforced by `engines` + `engine-strict=true` in `.npmrc`).

```bash
npm run dev     # start dev server (localhost:3000)
npm run build   # production build
npm run start   # run production build
npm run lint    # next lint
```

There is no test suite in this repo.

## Architecture

- Path alias `@/*` → `src/*` (see `jsconfig.json`).
- `src/app/layout.js` is the root layout: loads two weights of the Rubik font via `next/font/google` as CSS variables (`--font-rubik`, `--font-rubik-bold`, used through the `font-rubik` / `font-rubik-bold` Tailwind classes), wraps every page in `Header`/`Footer`, and mounts `@vercel/analytics`. Site-wide `<title>`/description and Google Search Console verification live in this file's `metadata` export.
- Tailwind theme (`tailwind.config.js`) defines the brand palette (`fireBlack`, `fireRed`, `fireOrange`, `fireYellow`), custom breakpoints (`sm/md/lg/xl` at non-default widths), and background-image utilities for the hero/logo/wave art assets in `public/`.

### Content model — two different patterns for dynamic routes

- **Products** (`src/app/produse/[slug]/page.js`): thin route that looks up `params.slug` in the plain-object data store `src/data/productsData.js` (keys: `salcie`, `fag`, `scandura`) and passes the fields into the shared `src/templates/productPageTemplate.js` presentational component. `generateMetadata` also reads title/description straight from the same data object (`metaTitle`/`metaDescription` fields). **To add a new product, add a new key to `productsData.js`** — no new route file or template change needed. There is no `generateStaticParams`, so these render as on-demand dynamic segments.
- **Locations** (`src/app/locatii/[slug]/page.js`): the JSX content itself is hardcoded in the page and interpolates `params.slug` directly (e.g. "Lemn de Foc {oras}") — there is no `locationsData.js` equivalent. Currently only linked for `Galati`, `Braila`, `Tulcea` (see `src/components/navbar.js`), but the route will render (with the raw slug string dropped into the copy) for any slug since there's no static param list or validation.
- **Articles** (`src/app/articole/<slug>/page.js`): fully static, one hand-written page per article, no shared template.

### SEO-relevant wiring

- Each page sets its own `metadata` (static pages) or `generateMetadata` (dynamic `produse`/`locatii` routes) — there is no shared SEO helper/component, so metadata is duplicated per page by convention rather than abstracted.
- `public/sitemap.xml` and `public/robots.txt` are static, hand-maintained files, not generated from the route tree — any new route must be added to `sitemap.xml` manually.
- `src/components/navbar.js` hardcodes the full nav tree (products, locations, articles dropdowns) in both a desktop and a separate mobile markup block — links to new products/locations/articles must be added in both places.

## Conventions

- Prettier is configured with `prettier-plugin-tailwindcss` (see `package.json` `prettier` field) for automatic Tailwind class sorting — run through Prettier rather than hand-ordering classes.
- Client interactivity (e.g. `src/components/navbar.js`, `src/components/image-gallery.js`) is marked with `"use client"`; everything else defaults to server components.
