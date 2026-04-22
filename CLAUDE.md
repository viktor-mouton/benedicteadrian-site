# CLAUDE.md

## Commands

```bash
npm run dev      # Vite dev server
npm run build    # Production build
npm run lint     # ESLint
```

No tests configured.

## Architecture

Static React SPA (React 19, Vite 8, Tailwind CSS 4, Framer Motion 12, React Router 7). Portfolio site for Norwegian singer Benedicte Adrian — deployed to Azure Static Web Apps via GitHub Actions on push to `main`.

**Routes:** `/` `/om` `/musikk` `/sangtimer` `/galleri` `/tv` `/kontakt`

## File Structure

```
src/pages/          Home, About, Music, Lessons, Gallery, TV, Contact, NotFound
src/components/ui/  AnimatedSection, Card, ContactForm, HeroSection, ImageGallery,
                    InstagramFeed, Lightbox, PlaceholderImage, SectionHeading,
                    SocialIcons, Timeline, CursorGlow, LoadingScreen
src/components/layout/  Navbar, Footer, PageTransition
src/components/seo/     SEOHead
src/data/           discography.js, gallery.js, navigation.js, seo.js, tvshows.js
src/hooks/          useMousePosition, useScrollToTop
src/utils/          goldInitials.jsx
public/images/      gallery/, hero/, discography/, tv/
```

## Page Pattern

Every page: `<PageTransition>` → `<SEOHead>` → `<HeroSection>` → sections. Sections use `py-24 md:py-32`, `mx-auto max-w-7xl px-6`.

## Key Components

- **Card** — image, title, subtitle, description, href, tag, `actions` (array of `{label, href, primary, external}` for buttons)
- **Lightbox** — standalone modal: `images`, `initialIndex`, `onClose`. Used by ImageGallery and TV page.
- **InstagramFeed** — Behold widget (`feedId` prop). Auto-updates from Instagram.
- **ImageGallery** — masonry grid + Lightbox. Data from `gallery.js`.

## Design System

- **Colors:** bg `#0a0a0a`, card `#1a1a1a`, gold `#c9a84c`, rose `#8b2252`, text `#f5f0eb`/`#a8a29e`/`#78716c`, border `#2a2a2a`
- **Fonts:** headings = Cormorant Garamond (serif), body = Inter (sans)
- **Gold CTA button:** `rounded-lg bg-gradient-to-r from-accent-gold-dark via-accent-gold to-accent-gold-light px-8 py-3 text-sm font-semibold uppercase tracking-wider text-bg`
- **Gold text link:** `text-sm font-semibold uppercase tracking-wider text-accent-gold hover:text-accent-gold-light`
- **Card style:** `rounded-xl border border-border bg-bg-card hover:border-border-light hover:bg-bg-card-hover`
- **Hover lift:** `whileHover={{ y: -4 }}` (Framer Motion)
