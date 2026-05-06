# Design

## Theme

Light — warm cream paper. The ambient scene: a visitor on their phone, standing on a sunny Cedofeita street, or curled up at home on a laptop browsing cafés. Warm light, warm screen.

## Colors

```
--color-cream: oklch(0.94 0.02 80)        /* #F5EDE0 — background, dominant */
--color-cream-dark: oklch(0.91 0.02 80)    /* #EDE3D3 — subtle contrast */
--color-crimson: oklch(0.50 0.18 25)       /* #C8302C — headers, CTAs, primary borders */
--color-crimson-dark: oklch(0.44 0.16 25)  /* #A82824 — hover states */
--color-cobalt: oklch(0.42 0.18 265)       /* #1E47B8 — accents, secondary highlights */
--color-cobalt-dark: oklch(0.38 0.16 265)  /* #183A96 — hover states */
--color-text: oklch(0.22 0.02 60)          /* #2A2118 — body text */
--color-text-light: oklch(0.40 0.02 60)    /* #5C4F42 — secondary text */
--color-text-muted: oklch(0.58 0.02 60)    /* #8A7D70 — captions, muted */
```

**Color strategy:** Restrained-to-Committed. Cream dominates (80%+). Crimson carries headers and primary UI (15%). Cobalt as rare accent (5%).

## Typography

| Role | Font | Weight | Size |
|---|---|---|---|
| Display / H1 | Alfa Slab One | 400 (only weight) | clamp(2.5rem, 1.6rem + 4.5vw, 5rem) |
| H2 | Alfa Slab One | 400 | clamp(2rem, 1.4rem + 3vw, 3.5rem) |
| H3 | Alfa Slab One | 400 | clamp(1.5rem, 1.1rem + 2vw, 2.5rem) |
| Body | Lora | 400, 500, 600, 700 | clamp(1rem, 0.9rem + 0.5vw, 1.125rem) |
| Japanese accents | Shippori Mincho | 400, 500 | 0.75em of companion heading |
| Captions | Lora italic | 400 | clamp(0.875rem, 0.8rem + 0.35vw, 1rem) |

Line length capped at 60ch for body, 50ch for pull-quotes.

## Borders & Decoration

Primary decorative device. Three styles:
- **Thin rules:** 1px solid, crimson or cobalt. Section dividers.
- **Double-line:** 2px solid top + bottom with 3px gap. Used for emphasis (blurb section).
- **Dashed:** 1px dashed. Used for included/complementary items.

Corner ornaments: L-shaped 2px strokes in cobalt at hero corners.

## Motion

Energy: **low**. Calm, considered.

- Scroll reveal: fade + 1.5rem translateY, 500ms ease-out
- Hover: 2px translateY on buttons, 150ms
- Link underline: width 0→100%, 300ms ease-out
- Respect `prefers-reduced-motion`

## Layout

- Mobile-first, single column
- Desktop: asymmetric, editorial. Elements offset from grid for hand-placed feel.
- Max content width: 72rem
- Section padding: clamp(4rem, 2rem + 10vw, 10rem)

## Components

### Navigation
- Desktop: Book-style tabs on right viewport edge (fixed)
- Mobile: Hanko stamp FAB in bottom-right corner, expanding to scattered links

### Language Toggle
- Fixed top-right
- "PT | EN" with active language circled in hand-drawn red border-radius

### Buttons
- Primary: crimson bg, cream text, 2px solid border
- Secondary: transparent bg, crimson text, 2px crimson border
- Hover: 2px lift

### Cards (Pricing)
- 2px solid crimson border, no border-radius
- VIP: 3px border, slight Y offset on desktop
- Drop-in: dashed border
