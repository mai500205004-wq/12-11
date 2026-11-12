---
name: FX2 / The Descent
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
  on-surface-variant: '#e6bdb7'
  inverse-surface: '#e3e2e5'
  inverse-on-surface: '#303033'
  outline: '#ad8882'
  outline-variant: '#5d403b'
  surface-tint: '#ffb4a8'
  primary: '#ffb4a8'
  on-primary: '#690000'
  primary-container: '#ff5541'
  on-primary-container: '#5c0000'
  inverse-primary: '#bf0904'
  secondary: '#ffb4a1'
  on-secondary: '#611300'
  secondary-container: '#912100'
  on-secondary-container: '#ffa58d'
  tertiary: '#c9c6c0'
  on-tertiary: '#31312c'
  tertiary-container: '#92918b'
  on-tertiary-container: '#2a2a25'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad4'
  primary-fixed-dim: '#ffb4a8'
  on-primary-fixed: '#410000'
  on-primary-fixed-variant: '#930000'
  secondary-fixed: '#ffdbd2'
  secondary-fixed-dim: '#ffb4a1'
  on-secondary-fixed: '#3c0800'
  on-secondary-fixed-variant: '#881f00'
  tertiary-fixed: '#e5e2db'
  tertiary-fixed-dim: '#c9c6c0'
  on-tertiary-fixed: '#1c1c18'
  on-tertiary-fixed-variant: '#474742'
  background: '#121315'
  on-background: '#e3e2e5'
  surface-variant: '#343537'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 44px
    letterSpacing: -0.01em
  display-md:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: -0.015em
  display-md-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
    letterSpacing: 0em
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: 0em
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
    letterSpacing: 0.01em
  label-lg:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.06em
  code-timecode:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.25rem
  gutter-sm: 0.75rem
  gutter-lg: 2rem
  margin: 2rem
  margin-sm: 1rem
  margin-lg: 3.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system delivers a luxury, high-craft editorial operating system tailored for high-end film production, direction, and spatial composition. The visual personality embodies the tension between a cinematic editing suite and an avant-garde auteur studio: severe, restrained, luminous, and tactile.

Drawing from a hybrid movement of **Editorial Tactility and Spatial Glassmorphism**, the design system strips away typical desktop clutter in favor of three-dimensional depth planes, calibrated translucency, and bespoke material surfaces. The emotional atmosphere evokes late-night master control rooms, pristine light tables, celluloid exposure, and printed shooting drafts. Every control feels weighted and intentional, treating every shot, cut, and prompt as a permanent artistic decision.

## Colors

The palette is tuned for light-controlled studio spaces and color-critical workflows, pairing deep absorbing obsidian with incisive cinematic signals:

- **Deep Obsidian (`#08090B`)**: Base canvas for spatial plane Z-0. Absorbs glare and produces pure contrast without absolute pitch-black clipping.
- **Dark Charcoal (`#111318`)**: Primary container surface for midground workspaces, clip trays, and spatial canvas panes.
- **Smoked Graphite (`#191B20`)**: Elevated panels, active inspectors, dialogs, and floating command heads.
- **Cinematic Red (`#F23827`)**: Tally indicators, record states, active cuts, primary interactive focal points, and scrubhead anchors.
- **Warm Ember (`#FF704A`)**: Secondary status, keyframe cues, playback speed anomalies, and active spatial transforms.
- **Warm Ivory (`#EAE7E0`)**: Editorial titling, high-fidelity script readings, and primary typographical contrast. Avoids the cold clinical sheen of pure digital white.
- **Muted Ash (`#92939A`)**: Secondary metadata, timecode delimiters, track lane dividing rules, and quiescent controls.

### Functional Application Rules
1. Never flood large structural surfaces with `#F23827`. Primary red is strictly reserved for live feedback, active tool states, and deliberate interactive triggers.
2. Ivory `#EAE7E0` drives high-contrast typography, while `#92939A` handles all peripheral telemetry to preserve dark adaptation during review.

## Typography

The typographic hierarchy balances narrative gravitas with surgical execution:

- **Playfair Display (Headline & Display Levels)**: Acts as the artistic voice of the auteur. Deployed for scene titles, narrative territory declarations, project naming, and film analysis insights. Gives the digital workspace the authority of an exhibition program.
- **Inter (Interface & Body Levels)**: Operates as the structural architecture. Used for running dialogue, properties, parameter descriptions, dock labels, and system notifications. Neutral, legible, and uncolored by decorative mannerisms.
- **JetBrains Mono (Metadata & Spatial Signals)**: Houses the technical nervous system—SMPTE timecodes (00:00:00:00), lens focal lengths, camera shutter angles, sample rates, spatial coordinate offsets (X, Y, Z), and terminal commands. All uppercase with expanded tracking for instantaneous telemetry reading.

## Layout & Spacing

This design system utilizes a dynamic viewport architecture: a multi-tiered spatial canvas anchored by persistent peripheral tool ribbons and dynamic floating inspect tables.

- **Desktop (1440px and above)**: 16-column fluid canvas with `margin-lg` (3.5rem) and `gutter-lg` (2rem). Supports multi-pane light table splits, simultaneous script-and-node graphs, and timeline sequences spanning the lower third.
- **Tablet / Pro Consoles (768px - 1439px)**: 12-column adaptive layout with `margin` (2rem) and `gutter` (1.25rem). Collapses secondary node inspectors into slide-over smoked glass drawers; maintains primary viewport aspect ratios intact.
- **Mobile / Field Monitor (Below 768px)**: 4-column compact stack with `margin-sm` (1rem) and `gutter-sm` (0.75rem). The timeline shifts to a single-scrub dial; metadata shifts to bottom sheet overlays.

Spacing increments (`space-xs` through `space-xl`) define exact functional proximities between lens dials, scrub bars, and metadata headers. Vertical rhythm adheres rigidly to multiples of 4px.

## Elevation & Depth

Spatial layering is organized along three distinct Z-depth planes to preserve context without visual clutter:

### 1. Plane Z-0: The Background Void
- **Color**: `#08090B` (Deep Obsidian).
- **Surface**: Light-absorbent, matte. Houses infinity canvas grids, unrendered canvas voids, and primary spatial backdrop. No borders or shadows.

### 2. Plane Z-10: The Midground Creative Field
- **Surface**: Smoked Glass (`#111318` at 82% opacity with a `16px` backdrop blur).
- **Tactile Material**: Light table luminescence. Subtle inner top-edge glow (`1px inset 0 1px 0 rgba(234, 231, 224, 0.08)`) simulating an illuminated drafting glass.
- **Border**: Low-contrast outline (`1px solid rgba(146, 147, 154, 0.12)`).
- **Content**: Timeline tracks, script draft sheets, spatial stage layouts, and node graph assemblies.

### 3. Plane Z-20: The Foreground Focus Field
- **Surface**: Smoked Graphite (`#191B20` at 94% opacity with a `24px` backdrop blur).
- **Tactile Material**: Filmstrip Celluloid & Dark Glass.
- **Border**: Razor-edge definition (`1px solid rgba(242, 56, 39, 0.35)` when focused or active; `1px solid rgba(234, 231, 224, 0.18)` when idle).
- **Shadow**: Deep diffuse ambient falloff (`0 20px 48px -8px rgba(0, 0, 0, 0.75), 0 0 1px 1px rgba(255, 112, 74, 0.05)`).
- **Content**: Color wheels, spatial transform dials, modal script revisions, and render output monitors.

## Shapes

The shape architecture relies on architectural precision (`roundedness: 1` / Soft). 

- Base inputs, buttons, and status tags employ a compact `4px` (`0.25rem`) radius.
- Cards, timeline panes, and floating light table modules employ `8px` (`0.5rem`, `rounded-lg`).
- Overlays, focus modals, and contextual menus employ `12px` (`0.75rem`, `rounded-xl`).

Roundness is kept tight and mechanical to reference precision cinematic instrumentation, optics cages, and physical light-table framing. Pill and bubble shapes are prohibited, preserving a calibrated, editorial tone.

## Components

### Buttons
- **Primary (Cinematic Cue)**: `#F23827` background, `#08090B` bold typography (`label-lg`), 4px corner radius. On hover, transitions to Warm Ember (`#FF704A`) with an ambient red glow (`0 0 16px rgba(242, 56, 39, 0.4)`).
- **Secondary (Smoked Glass)**: Background `#191B20` at 60% opacity with `1px` border of `rgba(234, 231, 224, 0.15)`. Text in `#EAE7E0`. On hover, border color shifts to `#EAE7E0`.
- **Tertiary (Ghost / Metadata)**: Transparent background, text in `#92939A` using `label-md` (`JetBrains Mono`). On hover, text brightens to `#EAE7E0`.

### Chips & Badges
- **Status Badges**: Ultra-compact, 4px radius, padded with `space-xs` and `space-sm`. JetBrains Mono (`label-sm`).
- **Live / Record Badge**: `#08090B` fill, `1px solid #F23827`, featuring a pulsing 6px `#F23827` dot.
- **Scene / Take Chips**: `#111318` background, `1px solid rgba(146, 147, 154, 0.2)`, text in `#EAE7E0`.

### Lists & Tables
- **Metadata Tables**: Alternating subtle rows between `#08090B` and `#111318`. Row borders are hairline `1px solid rgba(146, 147, 154, 0.08)`. Columns display timecode and telemetry right-aligned in JetBrains Mono.
- **Script Cue Lists**: Left-aligned high-contrast Ivory body, indented dialogue blocks, with scene number margin slugs fixed in Ash `#92939A`.

### Checkboxes & Radio Buttons
- **Boxes/Toggles**: Square with 2px bevel (`roundedness: 1`), border `1px solid rgba(146, 147, 154, 0.35)`. Active fill snaps to `#F23827` with a razor-thin checkmark in `#08090B`.
- **Radio Buttons**: Concentric squares with an inset point to maintain architectural alignment with cinematic reticles rather than generic consumer circles.

### Input Fields & Parameter Steppers
- **Text & Number Inputs**: Inset dark fill (`#08090B`), subtle inner shadow, border `1px solid rgba(146, 147, 154, 0.2)`. Focus triggers a border shift to `#FF704A` with zero outer blur. Monospace numeric inputs support click-drag spatial scrubbing.

### Cards & Spatial Nodes
- **Script Cards**: Matte Textured Paper finish using `#111318` with micro-noise texture, top border highlighted with a 1px ivory filament. Playfair Display headlines.
- **Celluloid Clip Card**: Smoked border housing a 16:9 thumbnail preview with embedded SMPTE timecode chips floating in the lower-right foreground.

### Specialized OS Components
- **The Scrubhead / Spatial Cursors**: A 1px hairline in `#F23827` with a diamond head, casting a vertical laser glow over underlying midground assets.
- **Light Table Tray**: Horizontal dock anchored to bottom edge, featuring a 24px backdrop blur, containing asset slides with backlit illumination.