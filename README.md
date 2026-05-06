# Manga Café Porto

Landing page for Manga Café Porto, a manga café and creative community space at R. de Cedofeita 170, Porto. Built with Astro, statically generated, bilingual (Portuguese and English).

The site does one thing: get someone standing on a sunny Cedofeita street to walk through the door. If a visitor understands what the space is within three seconds and wants to go, the site works.

## Who visits

Manga fans, remote workers, students, and creative types in Porto. Most arrive on their phone, searching for cafés or following a link from Instagram. Some are regulars checking hours or sharing the site with a friend.

## Brand

Cozy, handmade, neighborhood-scale. Warm and welcoming, like a friend inviting you over. Quiet confidence — the space speaks for itself.

Three words: warm, indie, handmade.

### What this site avoids

- Corporate SaaS patterns: feature grids, testimonial carousels, logo strips, Inter/Helvetica.
- Old-web kitsch: GIFs, marquees, visitor counters, table layouts.
- Stock Japanese motifs: cherry blossoms, torii gates, Mt. Fuji clip art. The Japanese feel comes from typography, color, and kanji labels.
- Cold modernism: sterile white, minimal-to-anonymous.
- "Tokyo cool": slick nightlife aesthetic. This is closer to a local izakaya or a handmade zine.

### Design principles

1. Every element should feel hand-placed. Asymmetry and imperfection are features.
2. Show the space through typography, color, and layout — not marketing copy.
3. Old-Japanese-web charm lives in type, color, and borders — not in old-web techniques.
4. Generous cream space. Resist the urge to fill every pixel.
5. No flashy animations, no parallax. Calm and considered.

## Design system

### Colors

```
--color-cream:        #F5EDE0    (background, dominant)
--color-cream-dark:   #EDE3D3    (subtle contrast)
--color-crimson:      #C8302C    (headers, CTAs, primary borders)
--color-crimson-dark: #A82824    (hover states)
--color-cobalt:       #2E5399    (accents, secondary highlights)
--color-cobalt-dark:  #243F7A    (hover states)
--color-text:         #2A2118    (body text)
--color-text-light:   #5C4F42    (secondary text)
--color-text-muted:   #5A4D40    (captions, muted)
```

Cream dominates (80%+). Crimson carries headers and primary UI (15%). Cobalt as rare accent (5%).

### Typography

| Role               | Font            | Weight             | Size                                                                              |
| ------------------ | --------------- | ------------------ | --------------------------------------------------------------------------------- |
| Display / headings | Alfa Slab One   | 400                | clamp(2.5rem, 1.6rem + 4.5vw, 5rem) down to clamp(1.25rem, 1rem + 1.2vw, 1.75rem) |
| Body               | Lora            | 400, 500, 600, 700 | clamp(1rem, 0.9rem + 0.5vw, 1.125rem)                                             |
| Japanese accents   | Shippori Mincho | 400, 500, 600      | 1.2em of companion element                                                        |
| Captions           | Lora italic     | 400                | clamp(0.875rem, 0.8rem + 0.35vw, 1rem)                                            |

Body text line length capped at 60ch, pull-quotes at 50ch.

### Borders and decoration

The primary decorative device. Three styles:

- Thin rules: 1px solid, crimson or cobalt. Section dividers.
- Double-line: 1px solid top + bottom with 2px gap. Used for the editorial blurb.
- Dashed: 1px dashed. Used for included/complementary items (drop-in pricing, included menu items).

Corner ornaments: L-shaped 2px strokes in cobalt at hero corners.

### Motion

Low energy. Calm.

- Scroll reveal: fade + 1.5rem translateY, 500ms ease-out, triggered by IntersectionObserver
- Hover: 2px translateY lift on buttons, 150ms
- Link underline: width 0 to 100%, 300ms ease-out
- `prefers-reduced-motion` respected — all animations disabled

### Layout

Mobile-first, single column. Desktop gets asymmetric, editorial offsets for a hand-placed feel. Max content width: 72rem. Section padding: clamp(5rem, 3rem + 10vw, 10rem).

## Components

### Navigation

Desktop: book-style tabs fixed to the right viewport edge, mostly hidden, sliding out on hover. Active section tracked via scroll position. Adjacent tabs peek out near the active one.

Mobile: a hanko stamp FAB (floating action button) in the bottom-right corner with a 漫 kanji. Tapping it fans out scattered navigation links with slight rotations.

### Language toggle

Fixed top-right. "PT | EN" with the active language circled in a hand-drawn-looking crimson border (achieved with asymmetric border-radius and a slight rotation).

### Buttons

Primary: crimson background, cream text, 2px border. Secondary: transparent background, crimson text, 2px crimson border. Both lift 2px on hover.

### Pricing cards

Three tiers: Drop-in (dashed border), Nomad (2px solid), VIP (3px solid, offset on desktop for a zine feel).

### Gallery

Mobile: 2-column grid. Tablet: 3-column. Desktop: scattered collage with absolute positioning and overlapping edges. Photos rotate slightly and scale up on hover.

### Scattered illustrations

Decorative SVG icons (coffee mugs, onigiri, daruma, torii, books, etc.) positioned absolutely across the full page height at 10% opacity. Only visible on screens wider than 48rem.

## Accessibility

- WCAG AA target
- Keyboard navigable with visible focus outlines (2px solid cobalt)
- Skip-to-content link
- Semantic HTML throughout (sections with aria-labelledby, address elements, proper headings)
- `prefers-reduced-motion` disables all animation
- Decorative elements marked `aria-hidden="true"`

## Internationalization

Bilingual: Portuguese (default) and English. Astro's built-in i18n routing with prefix for both locales (`/pt/`, `/en/`). Translation strings in `src/i18n/pt.json` and `src/i18n/en.json`. Scroll position is preserved when switching languages.

## Development

Requires Node.js >= 22.12.0.

```
npm install
npm run dev        # localhost:4321
npm run build      # static output to ./dist/
npm run preview    # preview the build locally
```

## Project structure

```
src/
  components/     Astro components (Hero, Pricing, Menu, Gallery, etc.)
  i18n/           Translation strings and helpers
  layouts/        BaseLayout with head, nav, footer, scroll reveal
  pages/          Route pages (index redirect, /pt/, /en/)
  styles/         Global CSS design system
public/
  images/         Photos, illustrations, logo, favicon
```
