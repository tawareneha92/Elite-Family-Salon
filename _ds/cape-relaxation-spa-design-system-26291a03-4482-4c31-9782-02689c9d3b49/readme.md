# Cape Relaxation Spa — Design System

A dark editorial design system for a luxury spa / wellness studio: deep charcoal page, champagne-gold
accent, cream contrast cards, Cormorant Garamond over Montserrat, cinematic treatment photography.
The intended feeling is an exclusive private spa, not a conventional wellness website.

## Sources

The only source supplied was a written brand specification ("Dark Luxury Spa — Website Design System",
pasted into chat) covering colour, type, spacing, components, layout and design rules. **No codebase,
Figma file, slide deck, logo files, icon set or photography were provided.** Every value in
`tokens/` is taken verbatim from that spec; nothing was rounded or snapped to a grid.

Consequences, all flagged for the user:
- **No logo.** The wordmark renders the spa name in Cormorant Garamond with a Lucide flower glyph beside it. Nothing was drawn or reconstructed. `assets/` is empty by design — drop the real mark there.
- **No fonts as files.** Cormorant Garamond and Montserrat (the spec's own first choice) load from Google Fonts in `tokens/fonts.css`. There are therefore no `@font-face` rules or vendor binaries; swap in self-hosted files if licensed copies exist.
- **No icon set.** Substituted **Lucide** (lucide-static, CDN, 2px stroke, no fills) as the closest match to the spec's "thin gold outline, ornamental" description.
- **No photography.** `ImageFrame` renders labelled placeholders at the specified ratios.
- **One product.** The spec describes a website, so there is one UI kit. No slide template was supplied, so there are no sample slides.

## Index

| Path | What it is |
| --- | --- |
| `styles.css` | Global entry point — `@import` list only |
| `tokens/` | `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `motion.css` |
| `guidelines/` | 16 foundation specimen cards (Colors, Type, Spacing, Brand) |
| `components/core/` | Button, IconButton, Icon, OrnamentIcon, Eyebrow, SectionHeading, GoldRule, NavLink, Badge |
| `components/cards/` | InfoCard, ServiceCard, ImageFrame |
| `components/forms/` | Input, Select, Checkbox, Switch |
| `ui_kits/website/` | Interactive spa website — Home, Services, Packages, About, Booking |
| `templates/spa-landing/` | Starting-point template — hero, intro, cream card trio, service row |
| `assets/` | Empty — no brand assets were supplied |
| `SKILL.md` | Agent-skill entry point |

### Components

Every component ships `<Name>.jsx`, `<Name>.d.ts` and `<Name>.prompt.md`.

- **Core** — `Button`, `IconButton`, `Icon`, `OrnamentIcon`, `Eyebrow`, `SectionHeading`, `GoldRule`, `NavLink`, `Badge`
- **Cards** — `InfoCard`, `ServiceCard`, `ImageFrame`
- **Forms** — `Input`, `Select`, `Checkbox`, `Switch`

#### Intentional additions

The spec is prose, not a component inventory, so the set above is derived from the elements it
describes. Three items are wrappers rather than things the spec names directly:
`Icon` / `OrnamentIcon` (the gold-circle ornament motif, over the substituted Lucide set),
`GoldRule` (the signature curve / rule / dot family, called out as a brand element), and
`ImageFrame` (carries the mandated overlay + vignette photography treatment and the ratio table).

## Content fundamentals

**Voice.** Calm, factual, unhurried. The brand states what happens and lets restraint do the selling.
It never oversells, never exclaims, and never uses wellness jargon ("holistic journey", "me-time",
"self-care ritual" — all out).

**Person.** Second person for the guest, first-person plural for the spa. "Everything here is arranged
so the hour belongs to you." "We opened with two rooms and one rule."

**Sentence shape.** Short declaratives with concrete detail — a duration, a room count, a year.
"Six treatment rooms, six therapists, and a single appointment at a time." Specifics carry the luxury;
adjectives do not. One idea per sentence, two sentences per paragraph maximum in body copy.

**Casing.**
- Eyebrows: ALL CAPS, 1–3 words, wide tracking — `WELCOME`, `OUR SERVICES`, `THIS SEASON`.
- Headings: uppercase serif, 1–3 words, often broken over two lines — `REDEFINE / RELAXATION`, `INDULGE IN / SERENITY`, `REFINED CARE`.
- Buttons and nav: uppercase, 1–3 words — `BOOK NOW`, `VIEW PACKAGES`.
- Body: sentence case.

**Numbers.** Durations as "90 min", prices as "$140", spans written plainly ("Tuesday to Sunday,
09:00 – 20:00"). Prices are set in the serif so they read as editorial detail, not as a price tag.

**Punctuation.** No exclamation marks. Middot separators in metadata ("Half day · 3 hrs").
Em dashes sparingly. **No emoji, ever** — the icon vocabulary is thin gold line glyphs only.

**Copy lengths.** Eyebrow ≤ 3 words · heading ≤ 4 words · intro paragraph ≤ 2 lines (max ~620px wide) ·
card description ≤ 2 lines · card bullets 3–4 items of 2–4 words · button ≤ 3 words.

## Visual foundations

**Colour.** The page is charcoal `#1C1C1B`; headers, footers and alternating sections drop to
`#151514`. Champagne gold `#D7A95E` is the signature and never a field — it appears as button fills,
1px rules, 3–4px dots, icon strokes and active states, and should occupy a small fraction of any
screen. Cream `#F2E4C9` and ivory `#F7EEDC` exist only as card surfaces; they are the sole
light-on-dark contrast in the system and appear in groups of three. At most two background colours per
page. No second accent hue, no neon, no bright yellow gold.

**Type.** Cormorant Garamond 300–500 for anything display: hero, section headings, card titles, spa
name, prices, large numbers — always at weight 400–500, never bold, always uppercase at heading sizes
with line-height 0.92–1.0. Montserrat 300–600 for everything functional: nav (10px/.05em), body
(12–13px/1.8, weight 300), buttons (10px/600/.05em), eyebrows (10px/.22em), footer (9px/.04em).
Body copy stays small and airy; the size contrast between a 54px serif hero and 12px sans body is
the layout's main drama.

**Spacing & layout.** 6 / 12 / 20 / 32 / 48 / 72 / 100 scale. Sections take 90px vertical padding and
5% horizontal, with roughly 95px between them. Content sits in a 1180px container, centred; intro copy
narrows to 620px. Compositions are centred and compact rather than edge-to-edge wide. Generous
whitespace is the primary luxury signal. The header is the only fixed/absolute element — transparent,
overlaying the hero, no background even on scroll.

**Backgrounds.** Flat charcoal fields. No repeating patterns, no textures, no decorative gradients —
the only gradients allowed are the warm dark image overlay (`--overlay-image`) and the soft vignette
(`--overlay-vignette`) that sit over photography. Photography is the atmosphere: warm candlelight,
neutral towels, natural skin tones, slightly reduced saturation, strong contrast, soft vignette. Never
clinical white rooms, cool blue light or saturated stock.

**Borders & hairlines.** Everything is 1px. Translucent gold `rgba(215,169,94,.28)` for visible
divisions, `rgba(215,169,94,.14)` for service-card edges, `rgba(255,255,255,.08)` on cream cards,
`rgba(40,37,31,.14)` for rules inside cream. Form fields are underline-only — there are no boxed
inputs in this system.

**Cards.** Two kinds, deliberately different. Cream information cards: `#F2E4C9`, 5px radius, 30px
padding, hairline white border, `0 12px 30px rgba(0,0,0,.20)` — the shadow separates them from the
dark page without drama. Dark service cards: `#242422`, 3px radius, 22px padding, gold hairline
border, no shadow, gold ornament circle at the top. Radii stay small (3 / 5 / 6px); only buttons round
fully (20px pill). Nothing else is a card — sections themselves are never boxed.

**Shadows.** Two, both warm and soft: `--shadow-card` for cream cards, `--shadow-soft` for anything
lifted lightly. No inner shadows, no glows, no heavy drops.

**Transparency & blur.** Transparency yes (borders, overlays, the transparent header); blur no. No
glassmorphism, no backdrop-filter panels. Contrast between dark and cream does the separating work
that blur would otherwise do.

**Motion.** 200ms for colour and border changes, 400ms for card lifts and button inversion, 700ms for
hero fades and the gold-line draw. Easing is calm — `cubic-bezier(.25,.1,.25,1)`. Permitted:
hero fade-in, text reveal, gentle image zoom, card fade-up, gold line draw. Forbidden: bounce,
parallax, flashing, fast snaps, animated backgrounds.

**States.** Hover on the primary button inverts it — gold fill becomes transparent with a gold outline
and gold label (the secondary button inverts the other way). Links and nav shift to gold; active nav
adds a 1px gold underline. Cards lift 2px and their border brightens from `.14` to `.28` gold.
Press states darken to `--color-gold-dark` `#B88943` rather than shrinking. Disabled drops to 40%
opacity. No colour-shift beyond the gold family.

**Ornament.** A small, repeated vocabulary: the flowing 1px gold curve (once per page, below the hero),
straight gold rules, three-dot clusters, 38–42px gold circles around line icons, and tiny eyebrow
labels. Ornament is used in a handful of places per page, not in every section.

## Iconography

No icon set was supplied. **Substituted Lucide** (`lucide-static@0.414.0` via unpkg CDN) — stroke-only,
2px, no fills, closest available match to the spec's "thin gold outline / ornamental" instruction.
**Please supply the real icon set if one exists.**

- Glyphs are loaded as SVG through a CSS `mask`, so every icon takes its colour from a token — always `--color-gold`, occasionally `--ivory`, never multi-colour.
- The `Icon` component renders a bare glyph at 10–18px (inline, in buttons, in lists). `OrnamentIcon` wraps one in a 38–42px circle with a gold hairline border — the service-card and confirmation motif.
- Preferred vocabulary, all botanical or wellness: `flower`, `leaf`, `sprout`, `droplets`, `flame`, `moon`, `sparkles`, `hand-heart`. Utility glyphs: `arrow-right`, `check`, `phone`, `mail`, `instagram`, `facebook`.
- No emoji anywhere. No unicode characters as icons except the middot `·` used as a metadata separator. No PNG icons, no icon font, no coloured or cartoon icons.
