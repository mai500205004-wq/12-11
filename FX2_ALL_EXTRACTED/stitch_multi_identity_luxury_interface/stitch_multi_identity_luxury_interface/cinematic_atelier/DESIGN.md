---
name: Cinematic Atelier
colors:
  surface: '#171210'
  surface-dim: '#171210'
  surface-bright: '#3e3835'
  surface-container-lowest: '#110d0b'
  surface-container-low: '#1f1b18'
  surface-container: '#231f1c'
  surface-container-high: '#2e2927'
  surface-container-highest: '#393431'
  on-surface: '#eae0dc'
  on-surface-variant: '#d4c4b0'
  inverse-surface: '#eae0dc'
  inverse-on-surface: '#352f2d'
  outline: '#9d8f7c'
  outline-variant: '#504535'
  surface-tint: '#fabc4d'
  primary: '#ffc665'
  on-primary: '#432c00'
  primary-container: '#e5a93c'
  on-primary-container: '#5e4000'
  inverse-primary: '#7e5700'
  secondary: '#ffb597'
  on-secondary: '#581d00'
  secondary-container: '#7a2f08'
  on-secondary-container: '#ff9c71'
  tertiary: '#d5cec4'
  on-tertiary: '#333029'
  tertiary-container: '#b9b3a9'
  on-tertiary-container: '#49453d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdead'
  primary-fixed-dim: '#fabc4d'
  on-primary-fixed: '#281900'
  on-primary-fixed-variant: '#604100'
  secondary-fixed: '#ffdbcd'
  secondary-fixed-dim: '#ffb597'
  on-secondary-fixed: '#360f00'
  on-secondary-fixed-variant: '#7a2f08'
  tertiary-fixed: '#e8e2d7'
  tertiary-fixed-dim: '#ccc6bb'
  on-tertiary-fixed: '#1e1b15'
  on-tertiary-fixed-variant: '#4a463f'
  background: '#171210'
  on-background: '#eae0dc'
  surface-variant: '#393431'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  title-scene:
    fontFamily: Courier Prime
    fontSize: 15px
    fontWeight: '700'
    lineHeight: 22px
    letterSpacing: 0.08em
  body-script:
    fontFamily: Courier Prime
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-dialogue:
    fontFamily: Courier Prime
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0.01em
  body-notes:
    fontFamily: Playfair Display
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  label-camera:
    fontFamily: Courier Prime
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.12em
  label-metadata:
    fontFamily: Courier Prime
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.04em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 0.75rem
  margin: 2.5rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system channels the tactile prestige of a master screenwriter's workshop and 35mm film editing room. It unites high-end editorial sophistication with the industrial utility of pre-production filmmaking: Courier dialogue slugs, tungsten warmth, rich sepia-black depth, and brass-trimmed card stock.

### Aesthetic Persona
- **Vintage Screenplay Meets Arthouse Production:** Deep mahogany surfaces, unbleached script paper card stock, warm amber backlight, and cinematic widescreen ratios.
- **Atmospheric & Tactile:** Film-cell framing, subtle vignette gradients, mechanical monospaced metadata, and literary title typography that creates a focused, late-night writers' room immersion.
- **Functional Dramatic Architecture:** Purpose-built for scene breakdown boards, character dialogue revisions, shot-list mapping, and narrative tension graphs.

## Colors

The color palette establishes an intimate, late-night screening room ambiance lit by tungsten lamps (3200K) and projector beams.

- **Primary (`#E5A93C` — Tungsten Amber):** Emulates projector filament glow and warm brass accents. Used for active focus states, call-to-actions, camera direction highlights, and major beat markers.
- **Secondary (`#8A3B14` — Deep Mahogany / Cinnabar):** Grounded leather and dark lacquer red. Used for scene conflict tags, tension indicators, and structural rule dividers.
- **Tertiary (`#F4EDE2` — Unbleached Script Parchment):** The color of vintage 20lb typewriter bond. Used for body text, dialogue blocks, and high-legibility screenplay elements.
- **Neutral (`#130F0D` — 35mm Sepia-Nitrate Black):** A warm, dense carbon-sepia substrate. Serves as the deep canvas upon which tonal card surfaces (`#1C1613`, `#261F1B`, `#362C27`) layer.
- **Semantic Accents:**
  - Script slug/header: Light muted sepia parchment (`#D1C4B2`)
  - Production note highlight: Vintage archival cyan-slate (`#4A6B74`)
  - Critical dramatic tension: Burnt ochre-crimson (`#9E2A2B`)

## Typography

The type system stages a dialogue between cinematic editorial gravity and standard screenplay notation.

- **Editorial Titles & Story Arc Labels (`Playfair Display`):** High-contrast transitional serifs provide dramatic weight to act titles, film treatments, director's notes, and emotional themes.
- **Screenplay Engine (`Courier Prime`):** Authentic, monospaced standard font for all scene headings (`INT./EXT.`), character speech, camera angles (`WIDE SHOT`, `CLOSE ON`), and timecodes. It ensures strict vertical rhythmic alignment for reading flow.
- **Hierarchy Rules:**
  - Screenplay headings must always use uppercase styling (`title-scene`) with increased tracking.
  - Character dialogue cues are centered or indented proportionally relative to parent slug blocks.
  - Technical metadata (lenses, lighting temperature, roll numbers) uses small-caps styled `label-camera`.

## Layout & Spacing

The layout is grounded in classic film framing ratios (2.39:1 anamorphic and 1.85:1 academy standard) combined with an asymmetric screenplay margin system.

### Grid Architecture
- **Desktop (12 Columns):** Fluid grid anchored by a minimum 2.5rem safe margin. Utilizes an asymmetric split: a 7-column main screenplay script feed paired with a 5-column production atelier panel (shot lists, camera movements, moodboards, beat sheets).
- **Tablet (8 Columns):** Collapses into a tabbed treatment view with script pinned alongside an expandable drawer for scene breakdowns.
- **Mobile (4 Columns):** Single vertical reel view prioritizing full script legibility with sticky mini-control reels for scene navigation and character markers.

### Spacing Rhythm
Screenplay elements observe standard line spacing (1.5rem / `space-lg` between dialogue blocks; `space-xl` between scenes). Margin gutters emulate standard paper bindings with larger left gutters to evoke screenplay 3-hole brass-brad punch clearance.

## Elevation & Depth

Visual hierarchy does not use cold drop shadows; instead, it relies on tungsten lighting dissipation, sepia surface layering, and physical paper-stock borders.

### Surface Tiers
- **Canvas (Floor 0 - `#130F0D`):** Base deep mahogany-sepia backdrop featuring an optional CSS noise overlay imitating 35mm ISO 800 grain.
- **Surface Level 1 (`#1C1613`):** Sidebar containers, breakdown tracks, and script binder sheets. Defined with a 1px border of `rgba(229, 169, 60, 0.12)`.
- **Surface Level 2 (`#261F1B`):** Scene cards, dialogue revision callouts, and camera direction drawers.
- **Surface Level 3 (`#362C27`):** Overlays, timecode dropdowns, lens pickers, and active modals.

### Lighting & Atmospheric Shadows
- **Projector Falloff:** Layered floating elements cast soft, warm-tinted shadows: `0 12px 36px -4px rgba(0, 0, 0, 0.7), 0 2px 8px rgba(229, 169, 60, 0.05)`.
- **Brass Trim Outlines:** In place of stark white borders, surfaces use hairline amber-gold rules (`rgba(229, 169, 60, 0.2)`) to mimic antique drafting tools and camera brass fittings.

## Shapes

The interface embraces a disciplined, vintage tactile character (`roundedness: 1`).

- **Corners:** Crisp, architectural micro-radii (0.25rem / 4px). Avoid bubbly, soft roundness; elements should evoke cut paper cards, film slate clapboards, and machined viewfinders.
- **Viewport Windows:** Video previews and moodboard frames use an exact 2px inner border inset with sharp corners, evoking 35mm slide frames and contact sheets.
- **Notches & Perforations:** Optional structural motifs feature chamfered card edges or subtle circular film-sprocket cutouts on divider borders.

## Components

### Buttons & Production Triggers
- **Primary Action (Call to Action / Record Beat):** Tungsten amber fill (`#E5A93C`) with deep sepia text (`#130F0D`), set in `label-camera`. Hover state introduces a warm tungsten bloom (`box-shadow: 0 0 16px rgba(229, 169, 60, 0.4)`).
- **Secondary (Clapboard / Take):** Outlined with 1px brass stroke (`rgba(229, 169, 60, 0.35)`), transparent surface, parchment text (`#F4EDE2`).
- **Icon Actions:** Framed in square brass-wire frames (32x32px) with subtle mechanical depression states on active click.

### Screenplay Script Blocks & Scene Cards
- **Scene Header Slugline:** Left-bordered with a 3px solid strip of secondary mahogany (`#8A3B14`), using `title-scene` typography in full uppercase.
- **Dialogue Block:** Centered layout within the script canvas. Character name centered in `Courier Prime` bold; parenthetical direction in muted gold italics; speech lines set at a crisp 34-character max width.
- **Tension & Arc Cards:** Dark textured card (`#1C1613`) featuring an inline sparkline graph indicating dramatic tension (from simmering amber to boiling mahogany-crimson).

### Chips & Metadata Slugs
- Monospaced badges for camera shots (`[EXT. NIGHT]`, `[50MM ANAMORPHIC]`, `[TRACKING SHOT]`).
- Styled with dark sepia background (`#261F1B`), hairline border (`rgba(244, 237, 226, 0.15)`), and 0.25rem radius.

### Input Fields & Notes
- Understated ledger styling: Flat dark background (`#161210`) with a bottom-only brass underline that shifts to glowing tungsten amber on focus.
- Monospaced caret resembling a blinking vintage terminal/typewriter block.

### Lists & Scene Outliners
- Numbered index based on master slate notations (`001-A`, `001-B`).
- Alternating row backgrounds using micro-tonal variations of dark mahogany-sepia with hairline divider rules.