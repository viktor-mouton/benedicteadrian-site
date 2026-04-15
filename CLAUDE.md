# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Vite dev server
npm run build    # Production build
npm run lint     # ESLint
```

No tests configured.

## Architecture

Static React SPA (React 19, Vite 8, Tailwind CSS 4, Framer Motion 12, React Router 7). Portfolio site for a Norwegian singer — deployed to Azure Static Web Apps via GitHub Actions on push to `main`.

**Routing** uses Norwegian slugs: `/om`, `/musikk`, `/sangtimer`, `/galleri`, `/kontakt`.

**Key patterns:**
- Every page is wrapped in `PageTransition` (Framer Motion `AnimatePresence`)
- `AnimatedSection` handles scroll-triggered reveals (`react-intersection-observer`)
- `SEOHead` must be on every page (JSON-LD, Open Graph, canonical URLs)
- All static content (discography, gallery, nav, SEO metadata) is in `src/data/`

**Design tokens** (palette, fonts, animation easing) are defined in `src/index.css` as a Tailwind v4 theme.
