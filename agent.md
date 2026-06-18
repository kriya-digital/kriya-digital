# Kriya Digital Platform — Agent Directives

> **For AI coding agents**: Read this file **in full** before making any edits.  
> This is the ground-truth operational document for the Kriya digital platform.  
> For deeper component-level detail, also read [`apps/kriya-marketing/AGENT.md`](./kriya-digital-platform/apps/kriya-marketing/AGENT.md).

---

## 1. Brand Identity

**Tagline**: "Everything web. we do."  
**Positioning**: Premium web architecture agency. Not a SaaS company. Do not re-introduce "Products" hubs.

### Tone of Voice
- **Authoritative & Technical** — speak with the confidence of senior engineers
- **Visionary & Energetic** — communicate momentum and possibility
- **Direct & Uncluttered** — sharp, impactful sentences, zero fluff

**Example:**
- ❌ "We build really good websites that help you grow."
- ✅ "We engineer high-performance digital infrastructure designed to scale."

### Service Lines (The Three Pillars)
1. **Build** — Web Development, App Development, UI/UX Engineering
2. **Scale** — Digital Marketing, SEO, Social Media, Brand Building, Meta Ads
3. **Automate** — AI/ML Integration, WhatsApp Automation, Workflow Intelligence

---

## 2. Chromatic Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Electric Sulfur | `#fcfd95` | Primary accent — CTAs, highlights, active states, icon glows |
| Deep Onyx | `#181818` / `#131313` | Primary background, card bases |
| Surface Dark | `#0e0e0e` | Footer, deepest surfaces |
| True White | `#FFFFFF` | Primary heading text |
| On-Surface Variant | `rgba(255,255,255,0.55)` | Muted / secondary body text |
| Deep Cobalt | `#4c64c0` | Creative accent (use sparingly) |
| Cerulean Blue | `#5fa8d3` | Technical accent (use sparingly) |

### Glassmorphism Tokens
```css
background: rgba(255, 255, 255, 0.05);   /* Light Base Glass */
background: rgba(255, 255, 255, 0.10);   /* Elevated Glass */
border: 1px solid rgba(255, 255, 255, 0.12);
backdrop-filter: blur(16px);
```

### Hyperdrive Gradient
```css
linear-gradient(135deg, #fcfd95 0%, #5fa8d3 50%, #4c64c0 100%)
```

### Rules
- **Never** use plain red, green, or blue — always use palette tokens
- **Never** apply CSS `filter: hue-rotate()` to SVG brand logos
- The hero glow blob is `bg-electric-sulfur/5` (5% opacity) — do not exceed `/8`

---

## 3. Typography

| Role | Font | Tailwind Token | Tracking |
|------|------|----------------|---------|
| Headings / Display | Space Grotesk | `font-headline-lg` | `tracking-tight` or `-0.03em` |
| Section Headings | Space Grotesk | `font-headline-md` | `tracking-tight` |
| Body / Descriptions | Inter | `font-body-lg` | default, `leading-relaxed` |
| Labels / Tags / Microcopy | Public Sans | `font-label-sm` | `uppercase tracking-widest` |

### Size Scale (base 16px)
| Element | Size |
|---------|------|
| Hero H1 | `4.5rem` (72px), Bold |
| Section H2 | `3.0rem` (48px), Semi-Bold |
| Card H3 | `1.5rem` (24px), Medium |
| Body | `1rem` (16px), Regular |
| Micro / Labels | `0.75rem` (12px), Medium |

---

## 4. Spatial System (Bento Grid)

| Property | Value |
|----------|-------|
| Base unit | 8px |
| Desktop gutter | 24px |
| Mobile gutter | 16px |
| Small card padding | 16px |
| Standard card padding | 24px |
| Hero/feature card padding | 40px (`p-10`) |

### Border Radius Rules
| Element | Radius |
|---------|--------|
| Buttons, inputs, tags | `12px` (`rounded-xl`) |
| Standard bento cards | `16px` (`rounded-2xl`) |
| Hero blocks / large panels | `24px` (`rounded-[24px]`) |

> ⚠️ Do NOT use pill-shaped (`rounded-full` / `9999px`) buttons except for standalone CTAs and nav pills. All other components must use 12–24px radii.

---

## 5. Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | **Astro** (marketing site) — static site generation |
| Interactive UI | **React** (client-side via `client:load`) |
| Styling | **Tailwind CSS** with custom utility tokens |
| Language | **TypeScript** — strict typing required |
| Monorepo | **Turborepo** managed via **pnpm** |
| CMS | **Sanity CMS** (not yet integrated in marketing app) |
| Icons | **Material Symbols Outlined** (Google Fonts CDN) |

---

## 6. Repository Structure

```
kriya-digital/                          ← Git root
├── agent.md                            ← THIS FILE (repo-level agent directives)
├── kriya_brand_bible.md                ← Full brand design system
├── kriya_sitemap.md                    ← Original IA planning doc (partially outdated — see §7)
├── kriya_mobile_app_view.html          ← Legacy prototype (reference only)
├── kriya_stitch_homepage.html          ← Legacy prototype (reference only)
├── logos/                              ← Brand logo assets
└── kriya-digital-platform/             ← Turborepo monorepo
    ├── apps/
    │   └── kriya-marketing/            ← Main Astro application
    │       └── AGENT.md                ← Component-level agent directives
    └── packages/
        ├── ui/
        ├── eslint-config/
        └── typescript-config/
```

---

## 7. Actual Live Sitemap (Source of Truth)

> ⚠️ `kriya_sitemap.md` is **outdated**. The table below reflects the **actual deployed routes** in the live codebase.

### Currently Live (11 routes)
| Route | Purpose |
|-------|---------|
| `/` | Homepage (BentoGrid hero + Solutions + Case Studies) |
| `/contact` | Contact form with WhatsApp CTA |
| `/solutions` | Solutions overview (all three pillars) |
| `/solutions/build` | Build pillar (Web, App, UI/UX) |
| `/solutions/scale` | Scale pillar (SEO, Ads, Brand) |
| `/solutions/automate` | Automate pillar (AI, WhatsApp) |
| `/casestudies` | Case studies landing page |
| `/casestudies/zomato` | Zomato case study (food delivery perf) |
| `/casestudies/uber` | Uber case study (maps rendering) |
| `/casestudies/notion` | Notion case study (offline CRDT sync) |
| `/casestudies/netflix` | Netflix case study (video buffering) |

### Removed Routes (do NOT link to these)
| Old Route | Status | Replaced By |
|-----------|--------|------------|
| `/work` | ❌ Deleted | `/casestudies` |
| `/work/casestudy` | ❌ Deleted | `/casestudies/*` |
| `/insights` | ❌ Deleted | Not replaced |
| `/insights/blog` | ❌ Never built | — |
| `/solutions/ai` | ❌ Renamed | `/solutions/automate` |

---

## 8. Mobile Architecture

Mobile layout is entirely handled by a full-screen React component (`MobileCanvas.tsx`) with 4 slides:

| Slide # | Label | Content |
|---------|-------|---------|
| 1 | Home | Kriya logo + "Everything web. we do." hero |
| 2 | Solutions | Build / Scale / Automate glassmorphic cards |
| 3 | Case Studies | Zomato / Uber / Notion / Netflix cards with logos |
| 4 | Contact | Email/WhatsApp CTA |

### Mobile Rules
- **Navigation**: Bottom sticky bar with glassmorphism (`backdrop-blur-md`)
- **Canvas**: Horizontal swipeable (`snap-x snap-mandatory`)
- **Icons**: Material Symbols Outlined for bottom nav icons
- `<MobileCanvas client:load />` must appear in **every page** alongside the desktop `hidden md:block` wrapper
- The old **5-slide layout** (with Insights) is gone — there are exactly **4 slides** and **4 page entries**

---

## 9. Component Patterns

### Dual Layout Pattern (MANDATORY on every page)
```astro
<!-- Desktop -->
<div class="hidden md:block">
  <DesktopNav />
  <!-- page content -->
  <Footer />
</div>

<!-- Mobile -->
<MobileCanvas client:load />
```

### Standard Glassmorphic Card
```html
<div class="bg-[#131313]/5 backdrop-blur-md border border-white/10 rounded-[24px] p-6 md:p-8">
```

### Hover Interactive Card (inner grid items)
```html
<a class="bg-white/5 border border-white/5 hover:border-electric-sulfur/50 hover:bg-white/[0.08] hover:-translate-y-1 transition-all rounded-2xl p-4">
```

### Adding a New Page
1. Create `src/pages/[section]/[slug].astro`
2. Import and use `Layout`, `DesktopNav`, `MobileCanvas`, `Footer`
3. Add to `DesktopNav.astro` center nav links
4. Add to `Footer.astro` Hubs section
5. If case study: add card to `casestudies/index.astro` and `BentoGrid.astro`
6. Run `pnpm run build` to verify

### Adding a New Case Study
- Add a file at `src/pages/casestudies/[client].astro`
- Follow the structure: back link → hero → metrics grid (4 stats) → 2-col content (challenge + strategy) → sidebar (tech stack + takeaways)
- Add the client brand logo SVG to `src/assets/`
- Register the card in `BentoGrid.astro` (Case Studies block) and `casestudies/index.astro`

---

## 10. Logo Guidelines

- **On dark backgrounds**: True White `#FFFFFF` or white PNG
- **On light backgrounds**: Void Obsidian `#0F172A`
- **Never** skew, rotate, stretch, or apply shadows/glows to the logo
- Minimum clearance: equal to the height of the "k" letterform
- Responsive: `120px` desktop → `96px` tablet → `80px` mobile

---

## 11. Development Commands

```bash
# From kriya-digital-platform/ root:
pnpm run dev        # Start all dev servers
pnpm run build      # Build all apps (verify 11 routes)
pnpm run lint       # Lint check

# Expected successful build output:
# 11 page(s) built in ~Xs
```

---

## 12. Social & Contact Links

| Platform | URL |
|----------|-----|
| X (Twitter) | `https://x.com/kriyaggu` |
| Instagram | `https://www.instagram.com/kriya.ggu/` |
| YouTube | `https://www.youtube.com/@ytkriya` |
| GitHub | `https://github.com/kriya-digital` |

---

## 13. Non-Negotiable Rules

1. **Never re-introduce SaaS "Products" hub** — Kriya is an agency, not a SaaS company
2. **Never link to removed routes** — `/work`, `/insights`, `/solutions/ai` are gone
3. **Always maintain dual layout** — every page needs both desktop and `MobileCanvas`
4. **Logos use native colors in brand contexts** — do not apply CSS filters to SVGs
5. **Paragraph text under hero** — currently `text-sm md:text-base` (small, refined); do not upsize beyond `text-base md:text-lg`
6. **Hero glow intensity** — max `bg-electric-sulfur/8` opacity; it is intentionally subtle
7. **Border radii** — strictly 12px / 16px / 24px; no exceptions except pill nav buttons
8. **Always run `pnpm run build`** after adding new routes to verify static generation
