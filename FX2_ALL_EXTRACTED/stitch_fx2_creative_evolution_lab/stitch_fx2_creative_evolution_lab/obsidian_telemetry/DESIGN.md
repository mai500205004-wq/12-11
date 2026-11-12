---
name: Obsidian Telemetry
colors:
  surface: '#121315'
  surface-dim: '#121315'
  surface-bright: '#38393b'
  surface-container-lowest: '#0d0e10'
  surface-container-low: '#1b1c1e'
  surface-container: '#1f2022'
  surface-container-high: '#292a2c'
  surface-container-highest: '#343537'
  on-surface: '#e3e2e5'
  on-surface-variant: '#e5bdb8'
  inverse-surface: '#e3e2e5'
  inverse-on-surface: '#303033'
  outline: '#ac8884'
  outline-variant: '#5c403c'
  surface-tint: '#ffb4aa'
  primary: '#ffb4aa'
  on-primary: '#690004'
  primary-container: '#ff5447'
  on-primary-container: '#5c0003'
  inverse-primary: '#bd0e12'
  secondary: '#ffb4a3'
  on-secondary: '#630f00'
  secondary-container: '#8f1b01'
  on-secondary-container: '#ffa08a'
  tertiary: '#fabc4d'
  on-tertiary: '#432c00'
  tertiary-container: '#bd8718'
  on-tertiary-container: '#3a2600'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad5'
  primary-fixed-dim: '#ffb4aa'
  on-primary-fixed: '#410001'
  on-primary-fixed-variant: '#930007'
  secondary-fixed: '#ffdad2'
  secondary-fixed-dim: '#ffb4a3'
  on-secondary-fixed: '#3d0600'
  on-secondary-fixed-variant: '#8c1900'
  tertiary-fixed: '#ffdead'
  tertiary-fixed-dim: '#fabc4d'
  on-tertiary-fixed: '#281900'
  on-tertiary-fixed-variant: '#604100'
  background: '#121315'
  on-background: '#e3e2e5'
  surface-variant: '#343537'
typography:
  display-hero:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 20px
  specimen-meta:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.06em
  specimen-dense:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '400'
    lineHeight: 14px
    letterSpacing: 0.08em
  label-action:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-desktop: 2.5rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
---

## Brand & Style

This design system embodies a cinematic laboratory environment: an ultra-refined, high-focus instrument engineered for creative directors, cinematographers, and strategic authors executing complex briefs. It eliminates typical SaaS patterns—such as toy-like pill badges, dense utility toolbars, and noisy card grids—in favor of an immersive obsidian void punctuated by surgical telemetry data and warm optical lighting.

The visual direction merges three distinct aesthetics:
- **Cinematic Specimen Architecture:** Expansive dark canvas regions resembling darkened production suites, grading monitors, and optical benches.
- **Atmospheric Warm Spotlighting:** Intentional amber and ember gradients casting soft radial falloffs over deep matte backgrounds, evocative of precision laser calibrations and warm analog indicators.
- **Editorial Archival Rigor:** Dramatic contrast between classical editorial serif display weights and monospaced diagnostic notation, balancing poetic concept work with laboratory-grade control.

## Colors

The palette is tuned specifically for low-light, high-end production suites:

- **Canvas & Surface Tiering:**
  - Base Obsidian Canvas: `#08090B` (pure absorbing black with minute cool tint).
  - Charcoal Surface / Panels: `#121316` (recessed workspaces and trays).
  - Elevated Console Layer: `#171719` (floating decks, inspector panes, split panels).
  - Active Surface / Focus Layer: `#202126` (interacted state surfaces).

- **Chromatic Accents & Telemetry:**
  - **Primary Ember (`#FF453A`):** Critical status indicators, active live-recording states, destructive confirmations, and primary kinetic triggers.
  - **Secondary Thermal Glow (`#FF6B4A`):** Hover states, highlighted vectors, dynamic waveform readouts.
  - **Tertiary Warm Amber (`#E5A93C`):** Calibrated status lights, optical focal guides, metadata tagging, and soft optical spotlight cones.

- **Monochrome & Neutral Tiers:**
  - Ghost Edge / Hairline Border: `rgba(255, 255, 255, 0.07)`.
  - Grid Telemetry Rules: `rgba(255, 255, 255, 0.03)`.
  - Type High-Key: `#F4F4F6` (lead headings and core prose).
  - Type Mid-Tone: `#989AA0` (telemetry labels, body annotations).
  - Type Muted: `#4E5058` (timestamps, index coordinates, dormant guides).

## Typography

The typographical landscape relies on high stylistic tension:
- **Playfair Display (Editorial Display):** Deployed for overarching brief titles, creative manifesto treatments, and chapter markers. Must always be typeset in generous line height with gentle negative tracking.
- **Inter (Prose Engine):** Clean, neutral, high-legibility sans-serif for working document copy, production notes, and commentary.
- **JetBrains Mono (Diagnostic Telemetry):** Strict technical register for indices, optical readings, timecodes, revision tags, and axis markings. Always styled in uppercase when serving as metadata labels.

## Layout & Spacing

The layout is structured around an asymmetrical laboratory workbench model:

- **Grid Architecture:** Desktop views employ a 12-column layout flanked by fixed diagnostic side-rails (minimum 64px width for metadata instruments). Center regions prioritize continuous vertical storytelling and wide asset specimens.
- **Breakpoints:**
  - Mobile (`< 768px`): Single-column continuous document view with stacked metadata trays and collapsible calibration bars. Margin defaults to `1rem`.
  - Tablet (`768px - 1199px`): Dual-pane split (8-column workspace, 4-column reference deck). Margin expands to `2rem`.
  - Desktop (`≥ 1200px`): Full 12-column dynamic canvas with floating telemetry ribbons and a maximum inner content width of `1600px`. Margin fixed at `4rem`.
- **Rhythm & Empty Space:** Components avoid dense block packing. Wide vertical pauses (`space-2xl`) separate operational sections to allow focused conceptual consumption without visual exhaustion.

## Elevation & Depth

Visual hierarchy is maintained without heavy dropped shadows or simulated plastic layering. Elevation relies exclusively on physical optical techniques:

1. **Surface Luminance Stacking:**
   - Base canvas sits at `#08090B`.
   - Secondary tools and recessed boards lift to `#121316`.
   - Active modals, inspector ribbons, and specimen cards reside at `#171719`.

2. **Low-Contrast Ghost Hairlines:**
   - Panels and surface dividers use precise 1px borders colored with `rgba(255, 255, 255, 0.06)`. High-focus cards elevate using `rgba(255, 255, 255, 0.12)`.

3. **Optical Amber Spotlight Blurs:**
   - Floating focus planes cast an ultra-diffused, atmospheric glow underneath: `box-shadow: 0 24px 64px -12px rgba(229, 169, 60, 0.08), 0 8px 24px -4px rgba(255, 69, 58, 0.04)`.
   - Active cursor states or focal anchors may trigger subtle ambient radial gradients behind the panel: `radial-gradient(circle at 50% 0%, rgba(255, 107, 74, 0.07) 0%, transparent 70%)`.

## Shapes

The interface employs a disciplined, surgical contour system (`roundedness: 1`):
- Standard interactive elements (buttons, inputs, telemetry chips) feature a tight 4px radius (`0.25rem`).
- Cards, workspace panels, and specimen viewports utilize 8px (`0.5rem`).
- Floating overlay panels, deep modals, and master inspectors cap at 12px (`0.75rem`).

Pill-shaped radii and purely circular avatars are prohibited to preserve the architectural, laboratory-grade tone. Precision indicators (status diodes, indexing markers) remain square or clipped at 45-degree chamfers.

## Components

### Buttons & Interactive Triggers
- **Primary Kinetic Trigger:** Charcoal base (`#1E1F24`) framed by a 1px border of `rgba(255, 69, 58, 0.4)`. Text set in `label-action` (Inter Medium, `#F4F4F6`). Left edge features a 2px ember pip (`#FF453A`). On hover, the border transitions to solid `#FF453A` with an ambient glow (`box-shadow: 0 0 16px rgba(255, 69, 58, 0.25)`).
- **Secondary Ghost Action:** Transparent background with `rgba(255, 255, 255, 0.08)` border. Text in `specimen-meta` (JetBrains Mono). Transitions to `#171719` fill on hover.

### Telemetry Chips & Specimen Tags
- Compact, non-pill containers with 4px corner radius.
- Background: `#121316` paired with a 1px hairline border `rgba(255, 255, 255, 0.06)`.
- Typography: `specimen-dense` (JetBrains Mono uppercase, `#989AA0`).
- Status chips include a 4px square LED indicator tinted in Ember (`#FF453A`), Thermal (`#FF6B4A`), or Amber (`#E5A93C`).

### Text Entry & Brief Editor
- **Inputs & Prompts:** Surface fill of `#0D0E11` with a bottom-only or fine ghost border (`rgba(255, 255, 255, 0.08)`). Placeholder text set in Inter Regular at `#4E5058`. On focus, the hairline transitions to amber (`#E5A93C`), accompanied by a soft top-edge optical glow.
- **Editorial Writing Canvas:** Borderless, uninterrupted dark canvas. Playfair Display headlines flanked by monospaced paragraph coordinates (e.g., `§ 01.04`) pinned to the left margin.

### Checkboxes & Toggle Switches
- Checkboxes are 14x14px sharp squares (`roundedness: 1` / 2px radius) with `rgba(255, 255, 255, 0.15)` border and obsidian fill. Checked state renders a solid ember core (`#FF453A`) with an amber center reticle.
- Switches operate as linear rails (horizontal telemetry track) with a square sliding indicator rather than rounded capsules.

### Specimen Cards & Workspace Panels
- Background: Charcoal `#171719` overlaid with a subtle linear noise texture or faint gradient falloff.
- Framing: Hairline border `rgba(255, 255, 255, 0.06)`.
- Header Rail: Height-restricted bar housing JetBrains Mono specimen IDs (`[SPEC-091]`), file metadata, and amber status diodes.

### Auxiliary Instrument: Optical Focal Loupe
- Floating magnification/detail widget anchored in workspace viewports for asset inspection, rendered with a backdrop blur (`backdrop-filter: blur(12px)`), ember edge accents, and real-time cursor coordinate telemetry.