# AGENT.md — Kriya Marketing Platform

> **For AI coding agents**: Read this file in full before making any edits to this codebase.  
> This document captures architecture, conventions, and known patterns critical for safe and accurate editing.

---

## 1. Project Overview

**Kriya** is a premium web architecture agency. This repository is the **Kriya Marketing Platform** — a static marketing site built with Astro and Tailwind CSS inside a pnpm monorepo managed by Turborepo.

- **Brand tagline**: "Everything web. we do."
- **Brand colors**: Graphite (`#3c3c3c`) and Electric Sulfur (`#fcfd95`)
- **Deployment**: Static site generation (`output: "static"`)

---

## 2. Monorepo Structure

```
kriya-digital-platform/
├── apps/
│   └── kriya-marketing/       ← Main Astro application (THIS project)
├── packages/
│   ├── ui/                    ← Shared UI package (unused by marketing app directly)
│   ├── eslint-config/
│   └── typescript-config/
├── turbo.json                 ← Turborepo pipeline config
├── pnpm-workspace.yaml
└── package.json
```

### Running commands
```bash
# Start dev server (runs all packages via turbo)
pnpm run dev

# Build all packages
pnpm run build

# Run just the marketing app
cd apps/kriya-marketing && pnpm run dev
```

---

## 3. Application Architecture (`apps/kriya-marketing`)

```
src/
├── layouts/
│   └── Layout.astro            ← Root HTML shell (fonts, meta, global CSS import)
├── components/
│   ├── BentoGrid.astro         ← Homepage hero + solutions + case studies grid
│   ├── DesktopNav.astro        ← Fixed top navigation with Solutions dropdown
│   ├── MobileCanvas.tsx        ← React component for 4-slide mobile layout
│   ├── Footer.astro            ← Site-wide footer with social links
│   ├── ServiceCard.astro       ← Reusable card component with optional logoMode
│   └── SliderWrapper.astro     ← Horizontal scroll carousel with arrow controls
├── pages/
│   ├── index.astro             ← Homepage (BentoGrid + Footer)
│   ├── contact.astro           ← Contact form with WhatsApp deep-link CTA
│   ├── solutions/
│   │   ├── index.astro         ← Solutions overview (all three pillars)
│   │   ├── build.astro         ← Build pillar (Web, App, UI/UX)
│   │   ├── scale.astro         ← Scale pillar (SEO, Ads, Brand)
│   │   └── automate.astro      ← Automate pillar (AI, WhatsApp)
│   └── casestudies/
│       ├── index.astro         ← Case studies landing (Zomato, Uber, Notion, Netflix)
│       ├── zomato.astro        ← Zomato case study detail
│       ├── uber.astro          ← Uber case study detail
│       ├── notion.astro        ← Notion case study detail
│       └── netflix.astro       ← Netflix case study detail
├── assets/                     ← SVG logos (imported by Astro at build time)
└── styles/
    └── global.css              ← Tailwind directives + custom CSS tokens
```

### Active Static Routes (11 total)
| Route | File |
|-------|------|
| `/` | `pages/index.astro` |
| `/contact` | `pages/contact.astro` |
| `/solutions` | `pages/solutions/index.astro` |
| `/solutions/build` | `pages/solutions/build.astro` |
| `/solutions/scale` | `pages/solutions/scale.astro` |
| `/solutions/automate` | `pages/solutions/automate.astro` |
| `/casestudies` | `pages/casestudies/index.astro` |
| `/casestudies/zomato` | `pages/casestudies/zomato.astro` |
| `/casestudies/uber` | `pages/casestudies/uber.astro` |
| `/casestudies/notion` | `pages/casestudies/notion.astro` |
| `/casestudies/netflix` | `pages/casestudies/netflix.astro` |

> ⚠️ **Removed routes** (no longer exist, do NOT link to these):
> - `/work` — deleted, replaced by `/casestudies`
> - `/insights` — deleted entirely

---

## 4. Design System

### Color Tokens (defined in `global.css` / Tailwind config)
| Token | Value | Usage |
|-------|-------|-------|
| `electric-sulfur` | `#fcfd95` | Primary accent: CTAs, highlights, icons |
| `on-surface-variant` | `rgba(255,255,255,0.55)` | Muted text / descriptions |
| `bg-primary` | `#131313` | Deep background panels |
| `bg-surface` | `#0e0e0e` | Footer / base dark surface |
| `graphite` | `#3c3c3c` | Dark card backgrounds |

### Typography Tokens
| Token | Font | Usage |
|-------|------|-------|
| `font-headline-lg` | Space Grotesk, bold | Hero headings (`h1`) |
| `font-headline-md` | Space Grotesk | Section headings (`h2`/`h3`) |
| `font-body-lg` | Inter | Body text, descriptions |
| `font-label-sm` | Public Sans | Labels, badges, nav items |

### Standard Card Style (apply consistently)
```html
bg-[#131313]/5 backdrop-blur-md border border-white/10 rounded-[24px] p-6 md:p-8
```

### Standard Inner Card (nested grid items)
```html
bg-white/5 border border-white/5 hover:border-electric-sulfur/50 hover:bg-white/[0.08] hover:-translate-y-1 transition-all rounded-2xl
```

---

## 5. Component Reference

### `BentoGrid.astro`
The homepage layout. Three-block structure:

1. **Hero Block** (`col-span-full`, `min-h-[60vh]`): "Everything web. we do." with floating brand icons on the right side.
   - Imports: React, Tailwind, Astro, NextJS, Figma, Flutter, Framer, Meta logos from `cdn.simpleicons.org`
   - Custom Antigravity icon (inline SVG, electric sulfur orbital sphere)
   - Background glow: `bg-electric-sulfur/5 blur-[130px]` (deliberately subtle)
   - Float animations: `animate-float-slow` (8s), `animate-float-medium` (6s), `animate-float-fast` (5s) — defined in `<style>` block at bottom of component

2. **Solutions Block** (`col-span-2`, `min-h-[290px]`): Our Solutions heading + 3-column grid for Build / Scale / Automate with tech logo previews. Imports logos from `../assets/`.

3. **Case Studies Block** (`col-span-2`, `min-h-[290px]`): Case Studies heading + 4-column grid for Zomato / Uber / Notion / Netflix with white logo plates and key metrics.

### `ServiceCard.astro`
Reusable card for service or case study items used in SliderWrapper contexts.

Props:
- `title: string` — card headline
- `techStack: string` — subtitle/description
- `imageContent?: any` — Astro image import
- `altText?: string` — image alt text
- `href?: string` — makes the card a link
- `logoMode?: boolean` — if true: white background plate (`bg-white p-12`), else dark panel

### `MobileCanvas.tsx`
React client-side component (`client:load`) for the mobile-only slide layout.

**Pages (4 slides)**:
1. **Home** — Kriya logo + hero headline
2. **Solutions** — Build / Scale / Automate as linked glassmorphic cards with descriptions
3. **Case Studies** — Zomato, Uber, Notion, Netflix cards with brand logos and metrics
4. **Contact** — Simple email CTA

Navigation: Bottom pill button that advances pages forward; left/right chevron buttons also enabled.

> ⚠️ The old 5-slide layout (with Insights) is gone. There are exactly 4 slides and 4 page entries in the `pages` array.

### `DesktopNav.astro`
Fixed top nav (`z-50`). Contains:
- Logo (left)
- Center: Solutions dropdown (links to Build/Scale/Automate), Case Studies, Contact
- Right: "Start Building" CTA pill → `/solutions`

Dropdown behavior: JS click-to-toggle (not hover) for accessibility. Close on outside click.

### `SliderWrapper.astro`
Horizontal scroll container with snap behavior and chevron navigation buttons. Buttons appear on group-hover. Cards inside must have `snap-start shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)]` sizing wrappers.

### `Footer.astro`
4-column footer with:
- Kriya logo + tagline + social links (X, Instagram, YouTube, GitHub)
- Kriya Hubs: Solutions, Case Studies, Contact
- Kriya Legal: Terms, Privacy, Refund & Cancellation
- Connect: Contact Portal

---

## 6. Asset Inventory (`src/assets/`)

### Technology Logos (for Solutions section)
| File | Used For |
|------|---------|
| `react.svg` | Web Development card |
| `flutter.svg` | App Development card |
| `figma.svg` | UI/UX Engineering card |
| `googleads.svg` | Digital Marketing card |
| `googlesearchconsole.svg` | SEO Optimization card |
| `meta.svg` | Meta Ads card |
| `adobeillustrator.svg` | Brand Building card |
| `openai.svg` | Automation Solution card |
| `whatsapp.svg` | WhatsApp Automation card |

### Brand Logos (for Case Studies section)
| File | Case Study |
|------|-----------|
| `zomato-brand-logo.svg` | Zomato |
| `uber-brand-logo.svg` | Uber |
| `notion-brand-logo.svg` | Notion |
| `netflix-brand-logo.svg` | Netflix |

### Image Assets (legacy / other pages)
`app-dev.png`, `automation.png`, `brand.png`, `growth.png`, `seo.png`, `social.png`, `ui-ux.png`, `web-dev.png`, `whatsapp.png`

### Floating Hero Icons
Sourced from `cdn.simpleicons.org` at runtime (CDN, not local): React, Tailwind, Astro, Next.js, Figma, Flutter, Framer, Meta.

---

## 7. Stale Link Audit (FIXED)

These links were previously broken and have been corrected:

| Old Link | Fixed To |
|----------|----------|
| `/work` (Footer) | `/casestudies` |
| `/insights` (Footer) | `/contact` |
| `Featured Work` (MobileCanvas) | `Case Studies` → `/casestudies/*` |
| Insights slide (MobileCanvas) | Removed entirely |

---

## 8. Known Patterns & Conventions

### Image Imports in Astro
All SVG/PNG assets are imported via Astro's `import` statement in the frontmatter and passed to `ServiceCard` or `BentoGrid` components:
```astro
---
import reactLogo from "../assets/react.svg";
---
<img src={reactLogo.src} ... />
```
Do NOT use `<Image>` from `astro:assets` for SVGs passed as props — use raw `img` with `.src`.

### Dual Layout Pattern
Every page has two layout branches:
- `<div class="hidden md:block">` → Desktop (DesktopNav + page content + Footer)
- `<MobileCanvas client:load />` → Mobile (the React slide canvas)

When adding new desktop content, always also check whether the mobile canvas needs updating.

### Logo Mode in ServiceCard
When using `ServiceCard` with a brand logo (e.g. case studies, solutions pillars), always set `logoMode={true}` to get the white background plate and proper sizing.

### Adding New Routes
1. Create the `.astro` file inside `src/pages/`
2. Add `DesktopNav`, `MobileCanvas client:load`, and `Footer` imports
3. Add the route as a link in `DesktopNav.astro` (center nav) and `Footer.astro` (Hubs section)
4. If it's a case study, add a card to `casestudies/index.astro` and `BentoGrid.astro`
5. Run `pnpm run build` to verify the static route generates cleanly

### Colors — DO NOT
- Do not apply color filters (CSS `filter: hue-rotate`) to SVG logos — logos must be in their default brand colors
- Do not use plain red, blue, or green — use the design token palette
- The glow effect on the hero is intentionally `bg-electric-sulfur/5` (5% opacity) — do not increase it beyond `/8`

---

## 9. Build & Verification

```bash
# Full build check (verify all 11 routes compile)
pnpm run build

# Expected output:
# 11 page(s) built in ~X.XXs
# Build Complete!
```

No TypeScript errors or Astro compilation warnings should be present after any change. If a new route is added, verify it appears in the build output route list.

---

## 10. Social / Contact Links

| Platform | URL |
|----------|-----|
| X (Twitter) | `https://x.com/kriyaggu` |
| Instagram | `https://www.instagram.com/kriya.ggu/` |
| YouTube | `https://www.youtube.com/@ytkriya` |
| GitHub | `https://github.com/kriya-digital` |
| Email | `hello@kriya.digital` |
