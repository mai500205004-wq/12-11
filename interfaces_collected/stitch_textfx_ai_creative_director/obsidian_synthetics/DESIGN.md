---
name: Obsidian Synthetics
colors:
  surface: '#0f131c'
  surface-dim: '#0f131c'
  surface-bright: '#353942'
  surface-container-lowest: '#0a0e16'
  surface-container-low: '#181c24'
  surface-container: '#1c2028'
  surface-container-high: '#262a33'
  surface-container-highest: '#31353e'
  on-surface: '#dfe2ee'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#dfe2ee'
  inverse-on-surface: '#2c3039'
  outline: '#849495'
  outline-variant: '#3b494b'
  surface-tint: '#00dbe9'
  primary: '#dbfcff'
  on-primary: '#00363a'
  primary-container: '#00f0ff'
  on-primary-container: '#006970'
  inverse-primary: '#006970'
  secondary: '#c0c1ff'
  on-secondary: '#1000a9'
  secondary-container: '#3131c0'
  on-secondary-container: '#b0b2ff'
  tertiary: '#fff3ea'
  on-tertiary: '#472a00'
  tertiary-container: '#ffd19c'
  on-tertiary-container: '#855300'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#7df4ff'
  primary-fixed-dim: '#00dbe9'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#e1e0ff'
  secondary-fixed-dim: '#c0c1ff'
  on-secondary-fixed: '#07006c'
  on-secondary-fixed-variant: '#2f2ebe'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#0f131c'
  on-background: '#dfe2ee'
  surface-variant: '#31353e'
typography:
  display-hero:
    fontFamily: Inter
    fontSize: 44px
    fontWeight: '600'
    lineHeight: 52px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
  code-stream:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: -0.01em
  telemetry-label:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.04em
  badge-micro:
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
  gutter: 1rem
  gutter-lg: 1.5rem
  margin: 1rem
  margin-md: 1.5rem
  margin-lg: 2.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1.25rem
  space-xl: 2rem
---

## Brand & Style

This design system establishes a high-performance, studio-grade aesthetic tailored for creative directors, generative AI engineers, and brand strategists operating at the frontier of automated conceptualization. The visual signature bridges the stark, machined precision of hardware audio workstations (Teenage Engineering) with the fluid, hyper-responsive utility of world-class developer platforms (Linear, Vercel, Runway).

### Visual Language
- **Technical Minimalism & Precision Utility:** Strict structural discipline, micro-hairlines, monospaced metadata streams, and tight visual cadence.
- **Atmospheric Depth:** Layered translucent obsidian panels over pitch-black voids, punctuated by targeted kinetic photonic glows indicating active synthetic inference.
- **Tactile Density:** High-density control clusters, parametric slider tracks, matrix grids, and modular node connectors designed for high-throughput creative exploration.

## Colors

The palette operates in strict dark-mode primacy, relying on deep spectral attenuation to maintain contrast and eliminate eye fatigue during extensive creative sessions.

### Functional Roles
- **Base Canvas (`#06080C` to `#0B0F17`):** Non-reflective obsidian backdrops grounding the viewports.
- **Surface Elevation (`#0F141C`, `#161D29`, `#1E2638`):** Layered tinted slate containers with ultra-subtle border luminance (`rgba(255, 255, 255, 0.08)`).
- **Primary Accent — Electric Cyan (`#00F0FF`):** Active generation nodes, focused states, execution pathways, and synthetic synthesis output highlights.
- **Secondary Accent — Indigo Ray (`#6366F1`):** Vector embeddings, conceptual node clusters, and structural navigational states.
- **Tertiary Accent — Solar Amber (`#F59E0B`):** Lateral-thinking friction alerts, token budget consumption, and exploratory temperature metrics.
- **Telemetry Indicators:** Emerald (`#10B981`) for completed inferences; Crimson (`#EF4444`) for pipeline stalls or model context overflows.

## Typography

The typographic hierarchy enforces immediate cognitive sorting between synthetic output, human-authored copy, and system telemetry:

- **Executive & Display Copy (`Inter`):** Tightly tracked display weights create a crisp, engineered posture in interface headers, node titles, and narrative output cards.
- **Telemetry, System Traces & Mathematical Labels (`JetBrains Mono`):** All token costs, latency readouts, model tags, prompt injection tokens, and lateral matrix coordinates are rendered strictly in fixed-pitch typography to support vertical optical scanning.
- **Micro-Scale Legibility:** Monospaced tags utilize uppercase tracking (`letter-spacing: 0.04em` to `0.08em`) to guarantee absolute clarity at sub-12px sizes against luminous or glass backgrounds.

## Layout & Spacing

The layout system employs an analytical 12-column modular fluid grid anchored by persistent viewport boundary gutters.

### Form Factor Behavior
- **Desktop (1440px+):** Tri-panel architecture with a persistent structural stage navigation rail (64px fixed), a collapsible pipeline canvas (minimum 380px), an expansive interactive lateral matrix viewport (flexible fluid), and a dedicated inspector/telemetry dock (340px fixed).
- **Tablet (768px - 1439px):** Inspector and node rails transform into overlay sheets triggered via quick-access command chords. Primary canvas fluidly preserves node connectivity.
- **Mobile (< 768px):** Reflows into a single-column stacked view with horizontal swipe stages for lateral-thinking axes and card matrices.

### Spacing Cadence
Density is calibrated to maintain high visual throughput without clutter. Component internals scale in 4px and 8px step increments: 4px (`space-xs`) for inline indicator chips, 8px (`space-sm`) for button content padding and node connectors, and 12px (`space-md`) to 20px (`space-lg`) for structural card internals.

## Elevation & Depth

Visual hierarchy does not rely on heavy drop shadows, instead using precise photonic luminance stacking and spectral backdrops.

### Stacking Model
- **Level 0 (Canvas Base):** Deep void (`#06080C`). Solid, non-distracting background for node routing paths and matrix backplanes.
- **Level 1 (Sub-Panels & Structural Grid):** `#0F141C` with a 1px border of `rgba(255, 255, 255, 0.05)`.
- **Level 2 (Active Cards & Tool Modules):** Frosted composite: `rgba(22, 29, 41, 0.72)` background with `backdrop-filter: blur(16px)` and a directional hairline rim light (`border-top: 1px solid rgba(255, 255, 255, 0.12)`, `border-bottom: 1px solid rgba(0, 0, 0, 0.5)`).
- **Level 3 (Floating Inspectors, Popovers & Chords):** `rgba(15, 20, 28, 0.92)` backdrop blur (24px) paired with an ambient diffuse shadow (`box-shadow: 0 16px 40px -8px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(0, 240, 255, 0.15)`).
- **Active State Radiance:** Active or generating elements radiate a localized, saturated underglow: `box-shadow: 0 0 24px -4px rgba(0, 240, 255, 0.25)`.

## Shapes

The interface embraces a low-radius, machined structural profile (`roundedness: 1`), evoking high-end optical equipment, modular synthesizer faceplates, and technical computing consoles:

- **Micro Tokens & Status Badges:** `rounded` (4px) to retain structural rigidity while preventing harsh corners.
- **Interactive Inputs, Cards & Canvas Tiles:** `rounded-lg` (8px) for balanced framing of text fragments, prompt vectors, and image generations.
- **Flyout Modals & Overlay Workspaces:** `rounded-xl` (12px) for exterior perimeter boundaries.
- **Pill Exceptions:** Operational status rings, model badge indicators, and telemetry pulse pills are explicitly set to fully rounded capsule forms (`border-radius: 9999px`) to establish deliberate visual contrast against rectangular matrix cards.

## Components

### Buttons & Interactive Controls
- **Primary Synthetic Trigger:** Background in cyan-to-indigo gradient with high-contrast obsidian typography (`#06080C`, weight 600). Hover triggers a subtle outer cyan bloom.
- **Secondary Ghost:** Transparent slate background with a 1px hairline border (`rgba(255, 255, 255, 0.1)`), shifting to `rgba(255, 255, 255, 0.2)` on interaction.
- **Icon / Macro Buttons:** 32x32px squircle targets with centered monochrome iconography that shifts to `#00F0FF` on hover.

### Modular Pipeline Stage Badges
- Pill-shaped status indicators (`rounded: 9999px`) featuring a dual structure: a leading 6px pulsing LED indicator (Emerald: idle/complete, Cyan: computing, Amber: queued, Crimson: bottleneck) accompanied by monospaced pipeline metadata (`STAGE 03 // SYNTHESIS`).

### Interactive Lateral Thinking Matrix
- A Cartesian 2D coordinate grid with customizable axes (e.g., *Absurdity vs. Utility* or *Metaphoric Density vs. Literal Clarity*). Nodes sit on intersection points as interactive glass pucks with coordinates displayed in `telemetry-label` font.
- Dragging nodes alters lateral temperature parameters and dispatches re-prompt events with zero UI hitching.

### Telemetry & Cost Readouts
- Compact, monospaced HUD modules situated in corner toolbars. Displays real-time model throughput:
  - Token burn velocity (e.g., `42.4 t/s`)
  - Running compute cost (e.g., `$0.0412 / run`)
  - Inference latency bar (dynamic micro sparkline rendered in amber/cyan).

### High-Fidelity Output Cards
- Glassmorphic panels featuring a 1px top highlight and a modular action header (branching, pin, critique, clone).
- Narrative concepts are displayed in `Inter` (body-lg) alongside a segmented monospaced collapsible drawer detailing the rationale, seed vector, temperature, and lateral prompt injections.

### Input Fields & Prompt Consoles
- Monospaced multi-line command fields styled as edge-to-edge dark slabs (`#090D14`) with an inset focus ring (`1px solid #00F0FF`).
- Integrated parameter chips (`@temperature:0.85`, `#brand-tone:subversive`) dynamically parse into interactive micro-tokens within the input stream.