---
name: FX2 Crimson Spatial Discovery
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#e9bcb9'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#b08784'
  outline-variant: '#5f3e3d'
  surface-tint: '#ffb3af'
  primary: '#ffb3af'
  on-primary: '#68000e'
  primary-container: '#ff5357'
  on-primary-container: '#5c000b'
  inverse-primary: '#bf0024'
  secondary: '#ffb3af'
  on-secondary: '#68000e'
  secondary-container: '#9b021b'
  on-secondary-container: '#ffa39f'
  tertiary: '#ffb3b6'
  on-tertiary: '#591a22'
  tertiary-container: '#cf787d'
  on-tertiary-container: '#50131b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad8'
  primary-fixed-dim: '#ffb3af'
  on-primary-fixed: '#410006'
  on-primary-fixed-variant: '#930019'
  secondary-fixed: '#ffdad8'
  secondary-fixed-dim: '#ffb3af'
  on-secondary-fixed: '#410006'
  on-secondary-fixed-variant: '#930018'
  tertiary-fixed: '#ffdada'
  tertiary-fixed-dim: '#ffb3b6'
  on-tertiary-fixed: '#3d050e'
  on-tertiary-fixed-variant: '#763037'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-hero:
    fontFamily: Inter
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 26px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
  label-hud:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.08em
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 14px
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
  gutter-sm: 1rem
  gutter-lg: 2.5rem
  margin: 3rem
  margin-sm: 1.25rem
  margin-md: 2rem
  margin-lg: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
---

## Brand & Style
The design system manifests an ultra-luxurious, cinematic, and authoritative spatial AI environment tailored for advanced creative exploration. Rooted in high-contrast minimalism, dark cybernetics, and precision instrumentation, the visual atmosphere balances sheer void with deliberate kinetic energy.

### Aesthetic Persona & Tonal Tenets
- **Obsidian Monolith:** Deep, true pitch-black surfaces form an infinite canvas that isolates and magnifies focal points.
- **Controlled Luminescence:** Neon crimson and laser-sharp ruby accents pierce through pure darkness, signaling active spatial nodes, operational state, and critical vectors.
- **Cinematic Precision:** Evokes high-end futuristic aerospace HUDs and luxury concept vehicle interfaces—restrained, tactical, whisper-quiet, yet immensely powerful.
- **Color Discipline:** Strict elimination of secondary cyan, emerald, amber, or cobalt hues to maintain total emotional gravity and uncompromising brand tension.

## Colors
The palette strictly enforces a deep void anchored by surgical crimson frequencies. No extraneous hues are permitted.

### Core Architecture
- **Primary (`#FF0033` / `#FF0000`):** Vivid neon crimson. Reserved for active cursor trajectories, core kinetic indicators, prominent focus rings, critical spatial axes, and interactive apexes.
- **Secondary (`#99001A` / `#CC0000`):** Smoldering ruby. Used for structural states, interactive hovers, secondary nodes, and muted energetic boundaries.
- **Tertiary (`#330008`):** Deep abyssal garnet. Powering backdrop luminescent bleeds, structural grid underlays, and soft inner glows.
- **Neutral Canvas (`#000000`, `#050505`, `#0D0D0E`):** Pure lightless space. Tiered into tonal shades to establish floating layers without relying on opaque borders.

### Surface System & Glow Matrix
- **Obsidian Base:** `#000000` (Infinite canvas).
- **Surface Layer 1 (Slate Card):** `rgba(18, 18, 20, 0.65)` layered with 24px backdrop blur.
- **Surface Layer 2 (Floating HUD Module):** `rgba(28, 10, 14, 0.45)` layered with 32px backdrop blur.
- **Glow & Rim Luminescence:** Multi-stop red emissions: `radial-gradient(ellipse at top, rgba(255, 0, 51, 0.12) 0%, rgba(5, 5, 5, 0) 70%)`.
- **Text Hierarchy:**
  - High Contrast: `#FFFFFF` (Headings, primary values, active indices).
  - Mid Contrast: `rgba(255, 255, 255, 0.64)` (Body, standard controls).
  - Subtle Technical: `rgba(255, 0, 51, 0.70)` (Monospace telemetry, sub-labels).
  - Muted: `rgba(255, 255, 255, 0.28)` (Inactive markers, grid references).

## Typography
Typographic treatment prioritizes surgical optical clarity, balanced between the pristine neutrality of geometric grotesques and the technical rigors of monospaced telemetry.

### Font Allocation
- **Inter:** Drives all primary display, headlines, interaction surfaces, and editorial body narrative. Rendered with tight tracking and deliberate optical kerning to achieve a cold, refined, high-density digital aesthetic.
- **JetBrains Mono:** Dedicated exclusively to spatial coordinates, HUD telemetry, temporal markers, AI parameter configurations, and data stamps. Set in uppercase with expanded letter-spacing to reinforce precision instrumentation.

### Rules of Engagement
- Avoid heavy text blocks; rely on stark scannability and modular breakdowns.
- Crimson color is only applied typographically to active status codes, vital HUD trackers, or accented leading numerals—never long-form body copy.

## Layout & Spacing
The layout operates as a fluid spatial coordinate matrix rather than a conventional rigid grid.

### Spatial Architecture
- **Fluid Structural Canvas:** A baseline 12-column dynamic framework spanning up to a maximum constrained view of 1800px, flanked by absolute black negative margins.
- **HUD Viewport Overlay:** Peripheral controls, spatial timelines, and floating instruments pin directly to the viewport edges with dynamic margins (`margin-sm` on mobile up to `margin-lg` on wide spatial displays).
- **Rhythmic Stacking:** Spacing between interdependent components strictly follows an 8-point harmonic multiplier (`space-xs` = 4px, `space-sm` = 8px, `space-md` = 16px, `space-lg` = 24px, `space-xl` = 40px, `space-2xl` = 64px).

### Form Factor Behavior
- **Mobile (< 768px):** Navigation condenses into a monolithic floating bottom HUD bar. Side panels shift to drawer trays with edge rim-lighting.
- **Tablet (768px - 1024px):** Dual-split layout with interactive canvas upper-half and docked timeline matrix below.
- **Desktop / Ultra-Wide (> 1024px):** Completely decoupled floating windows: a persistent floating top control array, an expansive full-bleed central discovery canvas, and an anchored bottom scrubber timeline.

## Elevation & Depth
Elevation is achieved through light emission, refraction, and optical layering rather than physical dropped shadows.

### Atmospheric Glassmorphism
- **Base Surfaces:** Semitransparent slate cards (`rgba(10, 10, 12, 0.7)`) backed by heavy hardware-accelerated Gaussian blurs (`backdrop-filter: blur(28px) saturate(160%)`).
- **Glow & Rim Lighting:** Surfaces feature a razor-thin top-and-left micro-border (`1px solid rgba(255, 0, 51, 0.35)`) tapering off into pure translucent obsidian (`rgba(255, 255, 255, 0.04)` on trailing edges).
- **Sub-Surface Crimson Scattering:** Elevated elements cast volumetric ambient glows: `box-shadow: 0 0 40px -10px rgba(255, 0, 51, 0.18), 0 20px 40px -15px rgba(0, 0, 0, 0.9)`.
- **Laser Edge Definition:** Active and hovered states ignite focused rim lights: `box-shadow: 0 0 1px 1px rgba(255, 0, 51, 0.8), 0 0 24px rgba(255, 0, 51, 0.35)`.
- **Z-Index Layering:**
  - `Level 0`: Void Canvas (`#000000`).
  - `Level 1`: Spatial Grid & Vector Traces.
  - `Level 2`: Floating Slate Content Cards.
  - `Level 3`: Ambient HUD Docks & Scrubber Timelines.
  - `Level 4`: Overlays, Laser Reticles, and Real-time Modal Diagnostics.

## Shapes
Geometry is disciplined, sharp, and architectural. Soft pill forms are rejected in favor of calculated bevels and tight precision radii that mirror aerospace displays.

### Radius Schema
- **Base Components (`roundedness: 1`):** 4px (`0.25rem`) corner radius applied across buttons, HUD tiles, input containers, and telemetry indicators.
- **Mid Surfaces (`rounded-lg`):** 8px (`0.5rem`) for primary slate cards, contextual popovers, and discovery nodes.
- **Structural Windows (`rounded-xl`):** 12px (`0.75rem`) maximum corner curvature for main viewport modals and primary canvas containers.
- **Chamfered & Clipped Geometry:** Select HUD elements utilize 45-degree angled corner cutouts (via CSS `clip-path: polygon(...)`) to denote active targeting nodes and sensor modules.

## Components

### Buttons & Interactive Triggers
- **Primary Kinetic Action:** Pure jet black core surrounded by a 1px intense crimson rim border (`#FF0033`). Text rendered in `#FFFFFF` with `label-hud` styling. On hover: rapid fill gradient transition to `rgba(255, 0, 51, 0.2)` with a soft external crimson bloom (`0 0 20px rgba(255, 0, 51, 0.45)`).
- **Secondary Ghost Control:** Translucent fill (`rgba(255, 255, 255, 0.03)`), hairline border (`rgba(255, 255, 255, 0.1)`), shifting to crimson outline on interaction.
- **HUD Reticle Button:** Minimal icon-only trigger with pulsing 1px laser targeting ticks on each cardinal corner.

### Chips & Metric Pills
- Monospaced numerical readouts wrapped in `rgba(18, 18, 20, 0.8)` containers.
- Left-aligned indicator pip: 4px glowing neon square emitting continuous `#FF0033` laser light for active nodes, and muted `#330008` for dormant states.

### Floating Slate Cards
- Built using dark glassmorphic layers with variable edge lighting.
- Top-edge micro-bevel features an inner gradient highlight reflecting the crimson atmosphere.
- Internal padding matches `space-lg`, organizing content with distinct separation lines made of `1px solid rgba(255, 0, 51, 0.12)`.

### Inputs & Spatial Prompts
- Deep obsidian container (`rgba(0, 0, 0, 0.85)`) with an inset subtle shadow.
- Bottom hairline accent that intensifies from `rgba(255, 255, 255, 0.12)` to pure `#FF0033` upon focus.
- Blinking block-style terminal caret rendered in solid crimson.

### HUD Discovery Timeline
- Horizontal tracking conduit featuring monospaced keyframe stamps.
- Discovery nodes sit directly on a glowing 1px horizontal laser rail.
- Active scrub head: Vertical crimson light guide projecting faint ambient beams upward into the canvas space.
- Hovered nodes expand outward with concentric circular targeting pulses.

### Switches, Checkboxes & Selectors
- **Selection Boxes:** Square-profile frames with crisp 2px internal offsets. Selected states glow with centered solid crimson cores.
- **Linear Switches:** Segmented slider channel with an ultra-thin laser thumb that leaves a brief incandescent motion trail during movement.