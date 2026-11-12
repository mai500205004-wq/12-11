---
name: Syntactic Studio Light
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#3f4850'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#707881'
  outline-variant: '#bfc7d2'
  surface-tint: '#006398'
  primary: '#006194'
  on-primary: '#ffffff'
  primary-container: '#007bb9'
  on-primary-container: '#fdfcff'
  inverse-primary: '#93ccff'
  secondary: '#0051d5'
  on-secondary: '#ffffff'
  secondary-container: '#316bf3'
  on-secondary-container: '#fefcff'
  tertiary: '#006948'
  on-tertiary: '#ffffff'
  tertiary-container: '#00855d'
  on-tertiary-container: '#f5fff7'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cce5ff'
  primary-fixed-dim: '#93ccff'
  on-primary-fixed: '#001d31'
  on-primary-fixed-variant: '#004b73'
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b4c5ff'
  on-secondary-fixed: '#00174b'
  on-secondary-fixed-variant: '#003ea8'
  tertiary-fixed: '#85f8c4'
  tertiary-fixed-dim: '#68dba9'
  on-tertiary-fixed: '#002114'
  on-tertiary-fixed-variant: '#005137'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  headline-xl:
    fontFamily: Geist
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.03em
  headline-xl-mobile:
    fontFamily: Geist
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: -0.01em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.02em
  label-xs:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 12px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-mobile: 0.75rem
  margin: 1.5rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1rem
  space-xl: 1.5rem
---

## Brand & Style

This design system establishes a high-performance, studio-grade creative workbench engineered for creative directors, copywriters, and generative prompt engineers. The aesthetic fuses the meticulous utility of Linear and Raycast with the tactile, industrial discipline of Teenage Engineering, rendered entirely in a high-contrast, luminous daylight spectrum.

The interface prioritizes dense, structured workspaces that balance rapid typographic exploration with strict technical utility. White, warm paper, and chalk surfaces provide a neutral bedrock, allowing electric cobalt, cyan, and emerald data signals to command visual focus with optical clarity. Every element conveys mechanical precision, responsive feedback, and the calculated elegance of a premier digital atelier.

## Colors

The palette is engineered around an architectural hierarchy of neutral chalks, deep carbon ink, and vibrant electric status accents:

- **Canvas & Surfaces:**
  - `surface-base`: `#F8F9FA` (Warm chalk canvas)
  - `surface-subtle`: `#F1F3F5` (Segmented control wells, tool trays, sidebar foundations)
  - `surface-card`: `#FFFFFF` (Elevated modules, inspector panels, prompt cards)
  - `surface-glass`: `rgba(255, 255, 255, 0.82)` with `backdrop-filter: blur(12px)`
- **Borders & Structural Lines:**
  - `border-subtle`: `#E2E6EB` (Module separation, interior cell dividers)
  - `border-strong`: `#CBD2D9` (Active panel frames, input bounds, splitters)
- **Ink & Typography:**
  - `text-primary`: `#0F172A` (Deep carbon; maximum legibility for copy generation)
  - `text-secondary`: `#334155` (Graphite; labels, parameters, metadata)
  - `text-muted`: `#64748B` (Keybindings, disabled states, inactive icons)
- **Signal & Interaction:**
  - `accent-primary`: `#0284C7` (Electric cyan; active tools, selection bounding boxes, primary cursor)
  - `accent-secondary`: `#2563EB` (Cobalt; major commits, batch generation triggers, links)
  - `accent-highlight`: `#00A3BF` (High-octane cyan; prompt tokens, variable chips)
  - `status-success`: `#059669` / `#10B981` (Luminous emerald; model online, validation badges, latency indicators)
  - `status-warning`: `#D97706` (Amber; token exhaustion warnings)
  - `status-error`: `#DC2626` (Crimson; syntax errors, API failures)

## Typography

The typographic hierarchy pairs the hyper-clean, proportional neutral geometry of `Geist` for structured workspace layouts and creative content with `JetBrains Mono` for technical instrumentation, metadata, parameters, and shortcut tags.

- **Headline Roles:** Kept lean and disciplined. No ornamental display types; bold, tight-tracking weights convey industrial confidence without consuming editor space.
- **Body Text:** Standardized on `Geist` at 14px for general application shell states and 16px for creative text rendering to ensure effortless proofreading and variant evaluation.
- **Monospaced Utility (`JetBrains Mono`):** Applied to token counts, temperature/top-p dial readouts, latency meters, prompt parameter tags, and system keyboard chords (`⌘K`, `⌥↵`). Uppercase tracking is slightly opened for ultra-compact tags (`label-xs`).

## Layout & Spacing

Layout conforms to a high-density, multi-pane workbench framework using a strictly divisible 4px/8px micro-grid. The studio utilizes collapsible tool columns, persistent header command bars, and split-screen document evaluation viewports.

- **Grid & Multi-Pane Model:**
  - **Desktop (≥ 1280px):** 3-pane layout comprising a 240px collapsable structural tree/asset rail, a flexible dynamic editor canvas (min. 600px), and a 320px persistent inspector/parameter sidebar.
  - **Tablet (768px – 1279px):** Two-pane layout with the inspector panel toggled as a floating right sheet over the central workspace.
  - **Mobile (< 768px):** Single-column stacked canvas with persistent bottom floating action triggers and modal drawers for parameter controls.
- **Density Rhythms:**
  - Micro-gaps (`space-xs`, `space-sm`) are reserved for parameter dials, control strip buttons, and tag groupings to retain spatial cohesion.
  - Interior card and panel paddings strictly employ `space-lg` (16px) or `space-xl` (24px) to preserve clarity amidst dense technical information.

## Elevation & Depth

Depth is established primarily via crisp, hair-thin boundaries, tone changes, and diffuse optical ambient shadows rather than stark structural drop shadows:

- **Level 0 (Base Canvas):** Plain `#F8F9FA` foundation; completely flat, non-elevated.
- **Level 1 (Panels & Tool Strips):** `#FFFFFF` surface bounded by a crisp 1px solid `#E2E6EB` border. Shadow: `0 1px 2px rgba(15, 23, 42, 0.04)`.
- **Level 2 (Active Cards & Floating Inspectors):** Glassmorphic base `rgba(255, 255, 255, 0.86)` with `backdrop-filter: blur(16px)` and a 1px solid `#CBD2D9` border. Shadow: `0 4px 12px -2px rgba(15, 23, 42, 0.06), 0 2px 4px -1px rgba(15, 23, 42, 0.03)`.
- **Level 3 (Command Palette & Overlays):** `rgba(255, 255, 255, 0.94)` with `backdrop-filter: blur(20px)` framed by a high-precision ring `0 0 0 1px rgba(15, 23, 42, 0.08)`. Shadow: `0 20px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04)`.
- **Active Focus & Selection:** Inset double-stroke simulation using an accent ring: `0 0 0 1px #0284C7, 0 0 0 4px rgba(2, 132, 199, 0.12)`.

## Shapes

The design system maintains a refined, low-radius silhouette reminiscent of precision hardware and engineered software tools:

- **Base Radius (`rounded-md`, 4px):** Applied to buttons, inputs, segmented tool pills, chips, and table row selections. Provides sharp, surgical containment without being brutalist.
- **Structural Radius (`rounded-lg`, 8px):** Applied to secondary panels, flyout cards, dropdown menus, and nested workflow blocks.
- **Outer Radius (`rounded-xl`, 12px):** Reserved solely for global modal envelopes, floating command palettes (Raycast-style), and detached floating dock bars.
- **Pill Radius (`rounded-full`):** Strictly reserved for dynamic token pills, online/offline status dots, and live audio/generation indicators.

## Components

### Buttons
- **Primary:** Background `#0284C7`, text `#FFFFFF`, 1px border `rgba(0,0,0,0.06)`. Hover: `#0369A1`. Height: 32px (standard) or 28px (compact). Monospaced shortcut key badge styled in soft cyan at the trailing edge.
- **Secondary (Raycast Style):** Surface `#FFFFFF`, border 1px solid `#E2E6EB`, text `#0F172A`. Hover: `#F1F3F5` with border `#CBD2D9`.
- **Ghost / Minimalist:** Transparent background, text `#334155`. Hover: background `#F1F3F5`, text `#0F172A`.

### Chips & Variable Badges
- **Prompt Token Chip:** Background `#F1F3F5`, border 1px solid `#E2E6EB`, text `#0F172A`, font `JetBrains Mono` at 11px. Hover reveals parameter handles and cyan accent highlight (`#0284C7`).
- **Luminous Status Badge:** Background `rgba(16, 185, 129, 0.08)`, border 1px solid `rgba(16, 185, 129, 0.25)`, text `#059669`. Contains a 6px pulse dot indicating generation/ready state.

### Lists & Navigation
- Flat, dense item rows (height: 32px). Hover fills with `#F1F3F5` edge-to-edge. Selected state applies `#FFFFFF` background, a 1px border `#CBD2D9`, and an inset left 2px electric cyan edge marker.

### Input Fields & Prompt Editors
- Background `#FFFFFF`, 1px solid `#CBD2D9`, text `#0F172A`, placeholder `#94A3B8`.
- Focus state instantly trades the border for `#0284C7` with a 3px soft cyan ring (`rgba(2, 132, 199, 0.12)`).
- Large multi-line generation canvas displays subtle vertical line rules at 80-character and 120-character margins.

### Checkboxes & Segmented Controls
- **Segmented Control:** Recessed chassis in `#F1F3F5` with 2px interior padding. Active thumb is `#FFFFFF` with a 1px solid `#CBD2D9` border and crisp drop shadow `0 1px 2px rgba(0,0,0,0.05)`.
- **Checkbox:** Square 14px box, 2px corner radius. Inactive: `#FFFFFF` with `#CBD2D9` outline. Active: `#0284C7` fill with white checkmark glyph.

### Cards & Workflow Nodes
- Multi-variant cards with `#FFFFFF` background, 1px `#E2E6EB` border, and an actionable utility header strip containing model provenance, token counter, and copy/export icons.