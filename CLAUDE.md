# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static marketing website for [WhatWhen](https://github.com/markmork/whatwhen), hosted at `whatwhen.uk` via GitHub Pages. No build step, no framework, no npm. Plain HTML/CSS/JS — matching the minimalist ethos of the app it advertises.

## Development

Open `index.html` directly in a browser. There is no dev server, no bundler, and no install step. Changes to `style.css` and `app.js` take effect on page reload.

To verify SEO metadata:
- JSON-LD: https://search.google.com/test/rich-results
- OG tags: https://www.opengraph.xyz

## File structure

```
index.html        Single-page marketing site
style.css         All styles — CSS variables, layout, responsive
app.js            Theme toggle + copy-to-clipboard (no framework)
CNAME             whatwhen.uk — required for GitHub Pages custom domain
robots.txt
sitemap.xml
assets/           Screenshots and OG image (provided by repo owner)
  screenshot-light.png   1200×750, light mode UI
  screenshot-dark.png    1200×750, dark mode UI
  og-image.png           1200×630, social sharing card
```

## Design conventions

The site mirrors the WhatWhen app's theme system exactly:

- **CSS variables** in `:root` (light) and `[data-theme="dark"]`. Use `var(--bg)`, `var(--surface)`, `var(--text)`, `var(--text-muted)`, `var(--accent)`, `var(--border)` consistently — never hardcode colours.
- **Theme is set via `data-theme` attribute** on `<html>`. An inline `<script>` in `<head>` applies the saved theme before first paint (avoids flash). The toggle in `app.js` reads/writes `localStorage` key `whatwhen-theme` — the same key the app uses.
- **No external fonts or icon libraries.** All icons are inline SVGs. Font stack is `system-ui` / `-apple-system`.
- **No external JS dependencies.** `app.js` is vanilla JS wrapped in an IIFE.

## GitHub Pages deployment

The `CNAME` file contains `whatwhen.uk`. After pushing, enable Pages in repo Settings → Pages → Source: branch `main`, folder `/`.

DNS records required on `whatwhen.uk` (owner-managed, outside this repo):
- `A` records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- `CNAME` for `www` → `markmork.github.io`

## SEO notes

`index.html` contains: `<title>`, `<meta name="description">`, `<link rel="canonical">`, Open Graph tags, Twitter card tags, and a `SoftwareApplication` JSON-LD block. Keep all of these in sync when updating page content. Target description length is ≤155 characters.
