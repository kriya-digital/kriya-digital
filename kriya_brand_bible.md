# Kriya Brand Bible: The Definitive Source of Truth

> **Operational Mandate:** *"Everything web. we do."*
> **Core Focus:** Web & App Development, AI/ML Integration, Social Media Management, Digital Marketing, SEO, UI/UX, Brand Building, and SaaS Provisioning.

This document serves as the absolute foundational truth for all engineering, design, and product decisions within the Kriya ecosystem. It is designed to bridge the gap between clinical technical precision and vibrant creative capability.

---

## 1. Brand Identity & Tone of Voice

Kriya operates at the intersection of rigorous engineering and breathtaking aesthetics. Our identity must consistently reflect multidimensionality—we are not just a dev shop; we are architects of the digital future.

### Core Values
- **Clinical Precision:** Flawless code, zero-tolerance for latency, and mathematically perfect UI.
- **Vibrant Capability:** Unbounded creativity, pushing the limits of what a browser can render.
- **Omnipresence:** A holistic approach covering the entire digital lifecycle ("Everything web. we do.").

### Tone of Voice
- **Authoritative & Technical:** Speak with the confidence of senior engineers. Use precise, industry-standard terminology without resorting to confusing jargon.
- **Visionary & Energetic:** Communicate momentum and possibility. We do not just build tools; we build the future.
- **Direct & Uncluttered:** Sentences should be sharp, impactful, and devoid of fluff.

**Example Copy:**
* *Instead of:* "We build really good websites that help you grow."
* *Use:* "We engineer high-performance digital infrastructure designed to scale."

---

## 2. Logo Usage Guidelines

The Kriya logo is our ultimate signature. Its integrity must be protected across all viewport sizes and mediums.

### Safe-Space Constraints
- **Clearance:** The minimum exact padding around the logo must be equal to the height of the letter "k" in the primary Kriya wordmark. No UI elements, typography, or edges may breach this boundary.

### Responsive Scaling Rules
- **Desktop Viewport (>1024px):** Minimum width of `120px`.
- **Tablet Viewport (768px - 1024px):** Minimum width of `96px`.
- **Mobile Viewport (<768px):** Minimum width of `80px`.

### Color & Monochromatic Variations
- **Primary:** The logo should be rendered in True White (`#FFFFFF`) on dark backgrounds, or Void Obsidian (`#0F172A`) on light backgrounds.
- **Monochromatic:** For specific print or subtle UI requirements, use `True Black` (`#000000`) or `True White` (`#FFFFFF`). Never use greyscale or low-opacity versions of the logo.

### Do's and Don'ts
- **DO:** Ensure high contrast against the background.
- **DO:** Use the transparent PNG/SVG format to allow background gradients to shine around the safe space.
- **DON'T:** Skew, stretch, or rotate the logo under any circumstances.
- **DON'T:** Add drop shadows, glows, or bevels to the logo itself.

---

## 3. Nomenclature Framework

To maintain absolute consistency across our ecosystem, all Kriya products, services, and SaaS platforms must adhere to this structured naming framework.

### The Ecosystem Architecture
- **Master Brand:** Kriya
- **Proprietary SaaS Products:** `Kriya-[Noun]` (e.g., *Kriya-Pulse* for analytics, *Kriya-Nexus* for CRM). Must use a hyphen to denote software-as-a-service.
- **Core Agency Services:** `Kriya [Service Area]` (e.g., *Kriya Web*, *Kriya AI*, *Kriya Social*). No hyphen; denotes a human-driven service.

### Secondary Service & Subscription Tiers
To avoid generic industry standards (Basic/Pro), we utilize an upward-mobility tiering system:
1. **Tier 1 (Base):** `Kriya Core`
2. **Tier 2 (Professional):** `Kriya Elevate`
3. **Tier 3 (Enterprise):** `Kriya Apex`

---

## 4. Chromatic Palette (Color Psychology)

Our color system is built to support modern "Glassmorphism" and "Frosted Glass" UI techniques. The palette balances the high-end technical depth of an industrial tech environment with high-voltage digital energy.

### Primary Brand & Background Colors
- **Deep Onyx (Primary Background/Base Dark):** `#181818`
  *Psychology:* Industrial precision, stealth development environment, high-end technical depth.
- **Electric Sulfur / Neon Lemon (Primary Brand Color):** `#fcfd95`
  *Psychology:* High-voltage digital energy, uncompromising clarity, immediate visibility.

### Text & Typography Colors
- **True White (Primary Text Color):** `#FFFFFF`
  *Usage:* Massive Space Grotesk headings and primary readability.
- **Soft Lilac White (Secondary Text Color):** `#fff5ff`
  *Usage:* Body copy and snackable information zones.

### High-Contrast Accents
- **Deep Cobalt (Accent 1 - Creative/Action):** `#4c64c0`
  *Psychology:* Human creative touch, vibrant imagination, energetic counter-balance.
- **Cerulean Blue (Accent 2 - Technical/Data):** `#5fa8d3`
  *Psychology:* Technical precision, crisp digital focus, calculated intelligence.

### Glassmorphism / Frosted Glass UI Tokens
Redefined glass panels using a tinted light base over the `#181818` background.
- **Light Base Glass (Low Opacity):** `#ffffff0d` (5% white opacity / `rgba(255, 255, 255, 0.05)`)
- **Light Base Glass (High Opacity):** `#ffffff1a` (10% white opacity / `rgba(255, 255, 255, 0.1)`)
- **Glass Border:** `1px solid #ffffff1f` (12% white opacity / `rgba(255, 255, 255, 0.12)`)
- **Backdrop Filter Rule:** `backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);`

### The "Hyperdrive" Gradient
Used for primary interactions, background glows, and defining brand moments.
- **CSS:** `linear-gradient(135deg, #fcfd95 0%, #5fa8d3 50%, #4c64c0 100%)`

---

## 5. Typographic Architecture

Our typography is split into two distinct roles: massive, architectural headings to seize attention instantly, and clinical, highly readable body copy for "snackable" information zones.

### Primary Font Family (Headings & Display)
- **Font:** `Space Grotesk` (Google Fonts)
- **Role:** H1, H2, large metric displays, and primary CTAs.
- **Characteristics:** Geometric, tech-forward, instantly commanding.
- **Rules:** Letter-spacing (tracking) should be set tightly at `-0.03em` for a cohesive, blocky appearance.

### Secondary Font Family (Body Copy & UI Data)
- **Font:** `Inter` (Google Fonts)
- **Role:** Paragraphs, SaaS data tables, secondary UI elements, and metadata.
- **Characteristics:** Neutral, highly legible, specifically designed for computer screens.
- **Rules:** Line-height for body copy must always be `1.6` to ensure optimal readability.

### Sizing Scale (Base 16px)
- **Display / Hero H1:** `4.5rem` (72px) / Bold (700)
- **H2 (Section Headers):** `3.0rem` (48px) / Semi-Bold (600)
- **H3 (Bento Card Titles):** `1.5rem` (24px) / Medium (500)
- **Body / Snackable Info:** `1rem` (16px) / Regular (400)
- **Micro UI (Tags, Labels):** `0.75rem` (12px) / Medium (500)

---

## 6. Spatial Constraints & Thematic Engineering

Kriya UI architecture strictly adheres to a **Bento Grid** layout. To unify asymmetric blocks into a cohesive interface, we rely on the Gestalt Law of Similarity via rigid mathematical spacing and standardized border radii.

### The Modular Bento Grid
- **Base Unit:** `8px`
- **Standard Gap (Gutter):** All spaces between Bento modules must strictly adhere to a `24px` gap on Desktop, reducing to `16px` on Mobile. No exceptions.

### Padding Constraints (Inner Spacing)
Inside every Bento Grid card, padding must follow a consistent multiple of the base unit:
- **Small Card Padding:** `16px`
- **Standard Card Padding:** `24px`
- **Hero/Feature Card Padding:** `40px`

### Border Radius Architecture (Law of Similarity)
To maintain harmony across various component sizes, border radii are explicitly standardized within the 12px to 24px constraint:
- **Interactive Elements (Buttons, Inputs, Tags):** `12px` (Soft enough to be inviting, sharp enough for technical precision).
- **Standard Bento Cards:** `16px` (The universal container radius).
- **Massive Structural Blocks (Hero sections, App wrappers):** `24px` (Provides structural framing).

*Note: Never use perfectly rounded (pill-shaped / 9999px) buttons unless specifically isolated as a floating action button (FAB). All other elements must adhere to the 12px-24px standard.*
