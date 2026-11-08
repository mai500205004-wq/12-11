---
name: FX2 Creative Operating System
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
  secondary: '#ffb59a'
  on-secondary: '#5b1b00'
  secondary-container: '#cd4700'
  on-secondary-container: '#fffbff'
  tertiary: '#88ceff'
  on-tertiary: '#00344d'
  tertiary-container: '#2b99d3'
  on-tertiary-container: '#002d43'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad4'
  primary-fixed-dim: '#ffb4a8'
  on-primary-fixed: '#410000'
  on-primary-fixed-variant: '#930000'
  secondary-fixed: '#ffdbcf'
  secondary-fixed-dim: '#ffb59a'
  on-secondary-fixed: '#380d00'
  on-secondary-fixed-variant: '#802a00'
  tertiary-fixed: '#c8e6ff'
  tertiary-fixed-dim: '#88ceff'
  on-tertiary-fixed: '#001e2e'
  on-tertiary-fixed-variant: '#004c6d'
  background: '#121315'
  on-background: '#e3e2e5'
  surface-variant: '#343537'
typography:
  headline-xl:
    fontFamily: Syne
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  headline-xl-mobile:
    fontFamily: Syne
    fontSize: 38px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Syne
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Syne
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Syne
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.02em
  title-lg:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  title-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: 0em
  body-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  label-lg:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.04em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.06em
  label-xs:
    fontFamily: JetBrains Mono
    fontSize: 9px
    fontWeight: '600'
    lineHeight: 12px
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
  gutter-mobile: 0.75rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system embodies a cinematic creative operating system engineered for executive creative directors, master visualists, and high-end production studios. It fuses the tactile precision of luxury editorial publishing with high-octane speculative studio computing (inspired by rapid generative interfaces and industrial design control rooms).

The aesthetic marries **High-Contrast Dark Studio Minimalism** with **Atmospheric Volumetric Glass**:
- **Atmospheric Glow & Noir Precision:** An ink-dense canvas punctured by controlled bursts of crimson and searing amber luminescence.
- **Editorial Haute Horlogerie:** Expressive, sweeping typography balanced against monospaced computational telemetry, creating an aura of commanding authority, technical mastery, and curated creative tension.
- **Surface Depth:** Semi-translucent panels edged with hairline photon borders, simulating optical glass suspended over an infinite black studio stage.

## Colors

The palette is tuned for high-contrast darkroom environments, balancing deep obsidian foundations with radiant spectral energy.

- **Primary (`#F23827`)**: Kinetic Crimson. Used for high-priority actions, destructive triggers, primary interactive highlights, and focal focal-point glows.
- **Secondary (`#FF6A2A`)**: Radiant Amber. Used for active generation status, secondary telemetry indicators, secondary buttons, and thermal accents.
- **Neutral Base (`#08090B`)**: Void Black. The structural canvas baseline representing negative space.
- **Surface Elevation Layers**:
  - `surface-base`: `#08090B` (Canvas)
  - `surface-container`: `#121316` (Low deck panels)
  - `surface-elevated`: `#171719` (Standard cards, floating palettes, modal panes)
  - `surface-overlay`: `rgba(23, 23, 25, 0.72)` (Backdrop-filtered glass panels)
- **Border & Hairline Gradients**:
  - `border-subtle`: `rgba(255, 255, 255, 0.08)`
  - `border-glow`: Linear gradient `rgba(242, 56, 39, 0.45)` down to `rgba(255, 106, 42, 0.1)`
- **Typography Tones**:
  - `text-primary`: `#F6F6F7` (Pristine, 96% contrast)
  - `text-secondary`: `#8C8E96` (Neutral metallic, 55% contrast)
  - `text-tertiary`: `#52535A` (Muted technical metadata)
  - `text-accent`: `#FF6A2A`

## Typography

The typographic hierarchy creates visceral polarity between luxury editorial display forms and clinical computational precision.

- **Display & Headlines (`Syne`)**: Avant-garde, sculptural, and expressive. Used for hero titling, system view manifests, and project titles. The letterforms exude editorial confidence.
- **Body & Core Interface (`Geist`)**: Ultra-refined, cold, and razor-sharp. Designed for effortless scanning in dense workspaces, documentation, narrative script panels, and parameter matrices.
- **Telemetry & Labels (`JetBrains Mono`)**: Strict, technical, and tabular. Reserved for coordinate data, generation seed tags, FPS counters, status tags, and machine parameters. Always rendered in tabular figures (`tnum`) with upper-case tracking.

## Layout & Spacing

The layout philosophy follows a **Studio Grid Architecture** based on modular docks, toolrails, and dynamic canvas viewports:
- **Baseline Rhythm**: Built upon a strict 4px sub-grid, with standard component units operating in 8px increments (`space-sm` = 8px, `space-md` = 16px, `space-lg` = 24px, `space-xl` = 40px).
- **Desktop (>= 1280px)**: 12-column variable dock model. Fixed 64px macro navigation rail on the far left, collapsible 280px tool docks on the right, and fluid center work surfaces. Section margins maintain 32px (`2rem`) with internal grid gutters of 20px (`1.25rem`).
- **Tablet (768px - 1279px)**: 8-column configuration. Auxiliary side panels collapse into sliding edge overlays. Canvas maintains minimum margins of 24px (`1.5rem`).
- **Mobile (< 768px)**: 4-column single-stream workflow. Sidebars collapse into glass bottom sheets with `margin-mobile` (16px) and tight 12px gutters (`gutter-mobile`).

## Elevation & Depth

Visual hierarchy is maintained through dark room optics: stacked obsidian strata and tinted crimson/amber luminance rather than muddy diffuse shadows.

- **Level 0 (Stage/Canvas)**: `#08090B` flat backdrop.
- **Level 1 (Dock & Shelves)**: `#121316` surface, bounded by 1px stroke `rgba(255, 255, 255, 0.05)`.
- **Level 2 (Active Studio Cards & Inspectors)**: `#171719` with a subtle top-lit directional highlight: `inset 0 1px 0 0 rgba(255, 255, 255, 0.08)`. Shadow: `0 12px 32px -4px rgba(0, 0, 0, 0.7)`.
- **Level 3 (Focused Modals & Command Bars)**: Semi-translucent `rgba(23, 23, 25, 0.85)` augmented with `backdrop-filter: blur(24px) saturate(140%)`. Border is wrapped with a dual gradient: `linear-gradient(135deg, rgba(242, 56, 39, 0.4), rgba(255, 106, 42, 0.1) 40%, rgba(255, 255, 255, 0.05))`.
- **Atmospheric Glow Effects**:
  - *Crimson Core Glow*: `0 0 28px -4px rgba(242, 56, 39, 0.35)` applied to active triggers, critical state indicators, and generating beacons.
  - *Amber Ambient Halos*: `0 0 40px 2px rgba(255, 106, 42, 0.15)` used underneath high-tier viewport nodes.

## Shapes

The design system uses **Soft Sharp Geometry** (`roundedness: 1`), embodying hardware-grade apparatus and precision optical machinery:
- Base elements (inputs, tool chips, buttons): `0.25rem` (4px).
- Panel containers and floating cards: `0.5rem` (8px).
- Large viewports and modal overlays: `0.75rem` (12px).
- Pill shapes are strictly forbidden except for circular micro-indicators and status pips (≤ 8px diameter). Clean, subtle chamfered corners emphasize structural discipline.

## Components

### Buttons
- **Primary Kinetic**: Background `#F23827` transitioning to `#E02919` on hover. Text `#FFFFFF` (`label-lg`). Border: 1px solid `rgba(255, 255, 255, 0.2)`. Box-shadow: `0 0 20px rgba(242, 56, 39, 0.4)`. Active states compress subtly (`transform: scale(0.98)`).
- **Secondary Glass**: Background `rgba(23, 23, 25, 0.6)` with backdrop blur (12px). Border: 1px solid `rgba(255, 255, 255, 0.1)`. Text `#F6F6F7`. Hover initiates an amber rim glow: `border-color: rgba(255, 106, 42, 0.5)` and `box-shadow: 0 0 16px rgba(255, 106, 42, 0.2)`.
- **Ghost/Studio Tool**: No background. Text `#8C8E96`. Hover sets text to `#F6F6F7` and background to `rgba(255, 255, 255, 0.04)`.

### Chips & Metadata Badges
- Compact height (24px), font `label-md`.
- Background `rgba(18, 19, 22, 0.8)`, border `1px solid rgba(255, 255, 255, 0.07)`.
- Active state: Features a glowing micro-pip (`#FF6A2A`) with `box-shadow: 0 0 8px #FF6A2A`.

### Lists & Matrix Rows
- Dividers use hairline borders (`1px solid rgba(255, 255, 255, 0.04)`).
- Hover state: Background subtly shifts to `rgba(255, 255, 255, 0.02)` with a 2px Crimson accent edge along the left border.
- Integrated monospace columns (`JetBrains Mono`) for frame rates, file weights, and execution times.

### Checkboxes & Radio Selectors
- Dimensions: 16px × 16px. Sharp radius (2px).
- Surface: `#121316` with a `1px solid rgba(255, 255, 255, 0.15)` border.
- Checked: Background `#F23827` with an internal crisp geometric checkmark, emitting a crimson radial bloom.

### Input Fields & Parameter Controls
- Background `#0E0F12`, border `1px solid rgba(255, 255, 255, 0.08)`. Text `#F6F6F7` (`body-md`).
- Focus state: Border transitions to `#FF6A2A`, with an interior subtle reflection: `box-shadow: inset 0 0 0 1px #FF6A2A, 0 0 16px rgba(255, 106, 42, 0.25)`.
- Numeric scrubbing inputs embed right-aligned unit tags using `label-md` in `#52535A`.

### Cards & Viewport Nodes
- Background: Surface elevated `#171719` layered with a linear top-border accent.
- Selected state: The standard hairline stroke is replaced by a glowing dual gradient border (`#F23827` to `#FF6A2A`) coupled with an atmospheric backdrop blur.
- Header bars feature tracking-spaced metadata titles and micro command triggers.

### Additional Components: Scrubbable Timeline & Parameter Dials
- **Studio Timeline**: `#08090B` channel floor with hairline second increments. Playhead rendered as a 1px neon line (`#F23827`) topped with an inverted geometric pointer with full drop shadow glow.
- **Spectral Audio/Render Meters**: Vertical segmented meters transitioning dynamically from desaturated gray through `#FF6A2A` into peak `#F23827`.