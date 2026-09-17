# Tanush Group of Companies — Website Specification (v2, Modern/Advanced Direction)

> This revision keeps every confirmed fact from the original brief (businesses, contact info, locations, content rules) but rewrites the **design and interaction direction** to feel like a premium, awwwards-tier site rather than a standard corporate template. Placeholder rules, "do not fabricate" rules, and phase priorities from the original still apply — this document only elevates *how* the site looks, moves, and feels.

---

## 1. Project Overview (unchanged facts, new ambition)

**Tanush Group of Companies** — founded by **Tanush Raju**, headquartered in **Vellore, Tamil Nadu, India**. Six verticals: Agro Traders, Cafe, Resort, Restaurant, Electricals, Logistics. Corporate showcase, not e-commerce.

**New ambition:** the site shouldn't read as "six business cards on a homepage." It should feel like a **living group identity** — cinematic, editorial, tactile — closer to a design studio's portfolio or a boutique holding-company site than a typical SME website. Think: confident whitespace, kinetic type, layered depth, and motion that feels earned rather than decorative.

---

## 2. Design Philosophy — "Grounded Futurism"

A tension between two ideas, held on purpose:

- **Grounded** — village roots, farmers, real produce, real rooms, real roads. Warm, tactile, human.
- **Futurism** — the *presentation* of that reality is modern: sharp type, fluid motion, depth, precision grids.

The site should never feel like it's trying to disguise a local business group as a Silicon Valley startup. It should feel like a **well-designed group** that happens to be rooted in Vellore/Odugathur — confidence without cosplay.

Avoid (unchanged from original, reinforced):
- Generic stock photography
- Gradient soup / glassmorphism-for-its-own-sake
- Bouncy, cartoonish motion
- Dashboard-style crowding
- E-commerce card patterns

Add (new):
- **Editorial asymmetry** — not everything centered in a 1200px column
- **Depth through layering**, not literal 3D gimmicks
- **Motion with purpose** — reveals that guide attention, not decorate

---

## 3. Signature Visual Language

### 3.1 Bento-grid business portfolio
Replace six identical cards with an **asymmetric bento grid** — Agro Traders and Resort get larger tiles (richest imagery), Cafe/Restaurant/Electricals/Logistics sit in smaller tiles. Mirrors how a group actually weighs its ventures instead of pretending they're all equal-sized boxes.

### 3.2 Kinetic typography hero
Hero headline ("Building Businesses. Creating Value.") is split into individual words/characters and animated in on load — staggered rise + slight blur-to-focus, not a bounce. Optional: one word per line cross-fades through the four verticals (Agriculture → Hospitality → Energy → Logistics) using a text-swap animation, so the hero feels alive without needing video.

### 3.3 Scroll-driven storytelling ("Our Story")
Instead of a static numbered list (01–06), the group's journey becomes a **pinned scroll sequence**: the viewport stays fixed while a vertical progress line draws itself and each chapter (Beginning → Agriculture → Hospitality → Solar → Logistics → Road Ahead) crossfades in sync with scroll position. This is the section most worth investing real animation budget in.

### 3.4 Cursor-aware interactions (desktop only)
- Business tiles get a **magnetic hover**: the "Explore →" arrow subtly follows the cursor within the tile bounds.
- A custom cursor (small dot + trailing ring) that expands over clickable elements.
- Disabled entirely on touch devices — no faux cursors on mobile.

### 3.5 Layered parallax, not flat scroll
Hero and Resort/Cafe sections use 2–3 depth layers (background image, midground texture/foliage, foreground type) moving at slightly different scroll speeds. Subtle — a few percent difference, not a theme-park effect.

### 3.6 Texture & grain
A very faint noise/grain overlay across the site (2–3% opacity) to avoid the "flat vector SaaS" look and give photography a warmer, more premium print-like feel.

### 3.7 Dark-mode-first consideration
Because the brand palette isn't locked yet, design the theme system so **dark mode is a first-class option**, not an afterthought — many premium/boutique group sites default to a deep charcoal/black base with warm accent tones (works especially well with resort/farm photography at night, cafe ambience shots).

---

## 4. Brand System (theme-agnostic, same as original, extended)

Still no hardcoded final colors — centralized token system. Extend the original token set to support dark mode and depth:

```css
:root {
  --color-primary: ...;
  --color-secondary: ...;
  --color-accent: ...;
  --color-background: ...;
  --color-surface: ...;
  --color-surface-elevated: ...;   /* for cards/bento tiles */
  --color-text: ...;
  --color-text-muted: ...;
  --color-border: ...;
  --color-overlay: ...;            /* image overlays */
}

[data-theme="dark"] {
  --color-background: ...;
  --color-surface: ...;
  --color-text: ...;
  /* etc. */
}
```

Typography direction unchanged (Inter / Geist / Manrope), but add:
- A **display-weight cut** (e.g. Geist's heaviest weight or a paired display font) reserved *only* for the hero headline and section titles — this is what makes editorial type feel intentional rather than "just bold Inter everywhere."
- Fluid type scale (`clamp()`) instead of fixed breakpoints for headings, so large headlines scale smoothly rather than jumping at breakpoints.

---

## 5. Technology Stack (extended)

Keep: React, TypeScript, Vite, Tailwind CSS.

**Upgrade animation stack** for the scroll-storytelling and pinned sections — Framer Motion alone is fine for simple reveals, but for the "Our Story" scroll sequence and layered parallax, recommend adding:

- **GSAP + ScrollTrigger** — the standard for pinned/scrubbed scroll sequences; handles the "Our Story" chapter-crossfade far more reliably than Framer Motion's scroll hooks.
- **Lenis** (or similar) — smooth-scroll library so scroll-linked animation feels buttery rather than jittery on trackpads/mice.
- Keep **Framer Motion** for component-level reveals, hover states, page-level transitions — it's still the right tool there.
- **Lucide React** — icons (unchanged).
- **React Router** — routing (unchanged).

Do not introduce a 3D/WebGL library (Three.js/R3F) unless real photography and time budget support it — a fake 3D hero with placeholder imagery will look worse than a well-executed 2D layered one. Flag as a **Phase 3 stretch goal**, not Phase 1.

---

## 6. Website Architecture (unchanged)

```text
/
├── Home
├── About
├── Businesses
│   ├── Tanush Agro Traders
│   ├── Tanush Cafe
│   ├── Tanush Resort
│   ├── Tanush Restaurant
│   ├── Tanush Electricals
│   └── Tanush Logistics
├── Our Work
├── Gallery
└── Contact
```

First release still prioritizes the homepage; business detail pages use a shared template.

---

## 7. Navigation — refined

Desktop nav stays minimal, but add:
- A **scroll-aware navbar**: transparent/overlay on hero, then crossfades to a solid surface with a subtle blur (backdrop-filter) once the user scrolls past the hero — common on premium sites, keeps the hero visually clean while staying usable.
- The Businesses mega-menu shows a **small thumbnail image** per business on hover instead of plain text links — turns the dropdown itself into a taste of the visual identity.

Mobile menu: full-screen overlay with the same kinetic-type stagger used in the hero (links animate in one by one), rather than a plain slide-down list.

---

## 8. Homepage — Section-by-Section (design direction only; copy unchanged from original brief unless noted)

### 8.1 Hero
- Full-viewport, kinetic-type headline reveal (see 3.2).
- Layered parallax background (see 3.5).
- Primary CTA "Explore Our Businesses" uses a **magnetic button** (cursor pulls it slightly toward center on hover, desktop only).
- Scroll-cue indicator (thin animated line or chevron) bottom-center, fades out after first scroll.

### 8.2 Introduction — "One Group. Multiple Businesses."
- Asymmetric two-column layout: text block offset left, a **stacked photo collage** (3–4 overlapping images, slight rotation) on the right instead of a single hero image.
- Founder/location line treated as a small "signature" element — understated, not a headline.

### 8.3 Our Businesses (bento grid — see 3.1)
- Six tiles in an asymmetric grid (e.g. Agro Traders 2×2, Resort 2×2, remaining four at 1×1 or 2×1).
- Hover: image scale (1.03–1.05×), overlay gradient darkens slightly, arrow does the magnetic-follow.
- Mobile: horizontal snap-scroll carousel, largest businesses first.

### 8.4 Our Work
- Filterable showcase (All / Agriculture / Hospitality / Solar / Logistics) with an **animated filter pill bar** — active filter has a sliding background indicator (like a tab underline that glides between options) rather than an abrupt state change.
- Masonry grid for the images themselves once real photography exists; placeholder blocks keep the same grid rhythm.

### 8.5 Our Story (pinned scroll sequence — see 3.3)
- The single most "advanced" section on the site. Budget real dev time here.
- Fallback for reduced-motion users / low-power devices: same six chapters shown as a normal stacked vertical timeline, no pinning — respect `prefers-reduced-motion`.

### 8.6 Founder
- Large portrait (when available) with a **subtle image-reveal-on-scroll** (mask wipes open rather than simple fade).
- Pull-quote styling for the founder copy — larger serif or display-weight sans, set apart from body text.

### 8.7 Our Reach / Locations
- Animated map treatment: instead of a static text diagram, an SVG map of Tamil Nadu with **pulsing location markers** for Vellore and Odugathur, connected by an animated dashed line that draws in on scroll.
- Google Maps embed swapped in later once addresses are confirmed (unchanged from original).

### 8.8 Gallery
- Masonry/grid layout (unchanged intent), but add a **lightbox with shared-element transition** — clicking a thumbnail should feel like it expands into the full view, not just pop a modal.
- Category filters use the same sliding-pill pattern as Our Work for consistency.

### 8.9 Contact — "Let's Connect"
- Keep it simple and fast — this is a conversion section, not a place for heavy motion.
- Three CTAs (Call / WhatsApp / Enquiry) as large tactile buttons with a light press/scale-down microinteraction on click, not elaborate hover states.

### 8.10 Footer
- Same information architecture as original (Businesses / Company / Connect columns), styled as a **dark, editorial footer** even if the rest of the site is light — a common premium-site pattern that gives the page a confident "close."
- Dynamically generated year (unchanged).

---

## 9. Business Detail Pages

Keep the original reusable template (Hero → Introduction → What We Do → Products/Services → Capabilities → Gallery → Location → Contact CTA), with two additions:

- **Business hero transition**: when navigating from a bento tile to its detail page, the tile's image should visually "expand" into the detail hero (shared-element / view-transition), so it doesn't feel like a hard page cut.
- **Sticky in-page sub-nav** for longer business pages (Resort, Agro Traders) — a slim sticky bar that jumps between "Rooms / Facilities / Gallery / Location" style sub-sections, since those pages will accumulate the most content over time.

---

## 10. Animation Principles (replaces original section 27)

| Trigger | Motion | Duration |
|---|---|---|
| Page load | Logo fade, kinetic hero text stagger, background layer fade-in | 400–900ms |
| Scroll reveal | Fade + rise (8–16px), staggered by 60–100ms per item | 300–600ms |
| Pinned story section | Scroll-scrubbed chapter crossfade (GSAP ScrollTrigger) | tied to scroll, not time |
| Hover (bento tile) | Image scale 1.03–1.05×, magnetic arrow, overlay darken | 250–400ms |
| Hover (button) | Magnetic pull + subtle background fill wipe | 200–300ms |
| Navbar scroll state | Background/blur crossfade | 300ms |
| Page/route transition | Cross-fade + slight vertical offset | 300–500ms |

Rules carried over from original, still binding:
- No excessive bouncing, no long spinner-style loaders, nothing that delays content access.
- **New rule**: every scroll-driven or cursor-driven effect must have a static, no-motion fallback for `prefers-reduced-motion` and touch devices — this is non-negotiable for the pinned "Our Story" section in particular.

---

## 11. Responsive Design

Mobile-first, same breakpoint philosophy as original, with explicit notes for the new patterns:
- Bento grid → horizontal snap-carousel on mobile.
- Cursor-aware/magnetic effects → fully disabled below the desktop breakpoint (no partial/faux versions).
- Pinned scroll storytelling → linear stacked timeline on mobile/tablet (no pinning — pinning on mobile scroll is unreliable and often feels broken).
- Custom cursor → desktop only, `pointer: fine` media query gate.

---

## 12. Performance Guardrails

Advanced motion must not come at the cost of the original performance targets:
- Lazy-load all imagery below the fold, including bento tiles beyond the first row.
- GSAP/ScrollTrigger and Lenis are lightweight, but audit total JS bundle size — don't add a 3D library "just in case."
- Respect `prefers-reduced-motion` everywhere, not just the story section.
- Target the same strong Lighthouse scores called out in the original brief; motion-heavy sites are the most common place performance regresses, so treat this as a hard constraint, not a nice-to-have.

---

## 13. What Stays Exactly As-Is From the Original Brief

To avoid re-litigating settled decisions, these carry over unchanged:
- Target audiences (Section 3 of original)
- Business content, product lists, current verified company info (Sections 11–16, 44)
- Content placeholder rules / "do not fabricate" list (Section 41)
- Tone of voice and forbidden superlatives (Section 42)
- SEO titles/descriptions structure (Section 34)
- Contact functionality phasing — no contact form until backend is chosen (Section 38)
- Development priority phases 1–3 (Section 45), with the note that WebGL/3D hero work and cursor-follow business preview panels are explicitly **Phase 3 stretch**, not Phase 1
- Definition of Done (Section 46) — all criteria still apply; add one criterion: **"All scroll- and cursor-driven motion has a working reduced-motion fallback."**

---

## 14. Open Questions / Things to Confirm Before Build

- Dark mode as default theme, or light-default with a dark toggle?
- Is real photography likely for Phase 1, or should the bento grid and parallax sections be designed to look intentional with placeholder imagery first?
- Any appetite for the Phase 3 WebGL/3D hero, or should that be dropped entirely rather than left as a maybe?
- Preferred display typeface for headlines only (separate from the Inter/Geist/Manrope body font)?