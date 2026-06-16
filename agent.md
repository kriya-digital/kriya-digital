# Kriya Digital Platform - Agent Directives

This document contains the core technical, architectural, and design constraints for the Kriya digital platform. Any AI agent working on this repository MUST read and adhere to these rules before making modifications.

## 1. Brand & Design System

### Colors
- **Primary Backgrounds**: Graphite (`#3c3c3c`) and deep darks (`#131313`).
- **Primary Accent**: Electric Sulfur (`#fcfd95`). Used strictly for active states, CTA buttons, highlighted metrics, and primary accents.

### Typography
- **Headings (H1-H3)**: Space Grotesk (`font-headline-lg`, `font-headline-md`). Tracking should generally be tight (e.g. `tracking-tight` or `tracking-tighter`).
- **Body & Subcopy**: Inter (`font-body-lg`).
- **Labels/Tags/Microcopy**: Public Sans (`font-label-sm`), often uppercase with wide tracking (`tracking-widest`).

### Glassmorphism ("Tinted Light")
- Standard component backgrounds should use a tinted light glass effect.
- **Tokens**: `bg-[#131313]/5 backdrop-blur-md border border-white/10` (or similar opacity layers like `/10`, `/20`, or `/40` for elevated elements).

### Spatial Constraints (Bento Grid)
- All grid layouts MUST strictly use a 16px or 24px border radius.
  - E.g., `rounded-[16px]` for standard 1x1 or 2x1 grid cards.
  - E.g., `rounded-[24px]` for large 2x2 anchor/hero blocks.

## 2. Information Architecture & Sitemap

The platform is strictly an **agency-first, service-led** business model. We do not promote SaaS products.
The primary hubs are:
1. **Solutions (Services Ecosystem)**: Build (Web/App/UI), Scale (Growth/SEO/Social/Brand), Automate (AI).
2. **Work (Proof of Capability)**: Case Studies, Live Demos.
3. **Insights (Knowledge Hub)**: Engineering Blog, Whitepapers.
4. **Corporate (Company & Legal)**: Contact, Privacy Notice, Vendor DPAs, Grievance Redressal.

*Do not re-introduce the "Products" (SaaS) hub.*

## 3. Tech Stack

- **Frameworks**: Astro (for marketing pages), Next.js (for complex interactive hubs).
- **Styling**: Tailwind CSS (Strictly utilizing the custom utility classes defined above).
- **Language**: TypeScript (Strict typing required for all components).
- **CMS**: Sanity CMS.
- **Monorepo**: Turborepo, using `pnpm`.

## 4. Mobile Architecture (App-Like Paradigm)

Mobile layouts strictly abandon traditional vertical web scrolling in favor of native app paradigms:
- **Navigation**: Fixed bottom sticky bar with glassmorphism (`backdrop-filter: blur(16px)`).
- **Canvas**: Horizontal swipeable slider (`snap-x snap-mandatory h-screen overflow-x-auto`).
- **Interaction**: Haptic feedback on tab changes, swipe indicators, and active-state iconography using Material Symbols Outlined.

## 5. Development Workflow

- Always ensure Astro and React components are properly integrated. Use `client:load` or `client:idle` when mounting React components in Astro pages (e.g., `<MobileCanvas client:load />`).
- Run the dev server using `pnpm run dev` from the `kriya-digital-platform` root.
