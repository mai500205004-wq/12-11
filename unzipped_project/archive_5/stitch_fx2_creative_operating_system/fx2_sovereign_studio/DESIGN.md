---
name: FX2 Sovereign Studio
colors:
  surface: '#131315'
  surface-dim: '#131315'
  surface-bright: '#39393b'
  surface-container-lowest: '#0e0e10'
  surface-container-low: '#1c1b1d'
  surface-container: '#201f21'
  surface-container-high: '#2a2a2c'
  surface-container-highest: '#353437'
  on-surface: '#e5e1e4'
  on-surface-variant: '#cec5b9'
  inverse-surface: '#e5e1e4'
  inverse-on-surface: '#313032'
  outline: '#979084'
  outline-variant: '#4b463d'
  surface-tint: '#d6c5a3'
  primary: '#f5e3c0'
  on-primary: '#392f17'
  primary-container: '#d8c7a5'
  on-primary-container: '#5f5338'
  inverse-primary: '#6a5d41'
  secondary: '#ffb4a6'
  on-secondary: '#660700'
  secondary-container: '#8d1607'
  on-secondary-container: '#ff9a88'
  tertiary: '#ece4d5'
  on-tertiary: '#343026'
  tertiary-container: '#d0c8b9'
  on-tertiary-container: '#585448'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#f3e1bd'
  primary-fixed-dim: '#d6c5a3'
  on-primary-fixed: '#231a05'
  on-primary-fixed-variant: '#51452c'
  secondary-fixed: '#ffdad4'
  secondary-fixed-dim: '#ffb4a6'
  on-secondary-fixed: '#3f0300'
  on-secondary-fixed-variant: '#8d1607'
  tertiary-fixed: '#eae2d2'
  tertiary-fixed-dim: '#cdc6b7'
  on-tertiary-fixed: '#1f1b12'
  on-tertiary-fixed-variant: '#4b463b'
  background: '#131315'
  on-background: '#e5e1e4'
  surface-variant: '#353437'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '600'
    lineHeight: 68px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 52px
    letterSpacing: -0.015em
  headline-xl-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 30px
    fontWeight: '500'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 30px
    letterSpacing: 0em
  body-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 2rem
  margin: 3.5rem
  space-xs: 0.375rem
  space-sm: 0.75rem
  space-md: 1.5rem
  space-lg: 2.5rem
  space-xl: 4rem
---

## Brand & Style
The design system delivers an architectural, quiet-luxury environment engineered for executive creative directors and bespoke studio operators. The design posture rejects decorative noise, garish neon glows, and claustrophobic SaaS utility. Instead, it balances haute-couture editorial grace with disciplined technical exactitude.

The aesthetic philosophy draws on:
- **Architectural Minimalism:** Expansive, gallery-scale negative space that commands calm focus and removes visual fatigue.
- **Tonal Monasticism:** An ultra-dark obsidian canvas that allows fine typography, deliberate ember warmth, and champagnes to feel like museum artifacts illuminated under precise pin-spots.
- **Precision Modernism:** High-contrast serif headlines possessing weight and substance paired with geometric sans-serif metadata for clear creative direction.

## Colors
The color architecture rests on three tonal tiers:
- **Obsidian Foundations:** `#0A0A0C` (Canvas/Base) and `#111215` (Elevated Panels). Surface variations are achieved through micro-tonal shifts rather than aggressive lighting shifts.
- **Champagne Amber (`#D8C7A5`):** The primary intellectual brand signal, deployed for primary actions, executive serif treatments, focus rings, and high-tier status elements.
- **Soft Ember Glow (`#E0533C`):** Reserved for energetic markers, live render states, and refined points of tension. Harsh neon halos are forbidden; use soft atmospheric radiance capped at `rgba(224, 83, 60, 0.08)` to `rgba(224, 83, 60, 0.14)`.
- **Architectural Borders & Muted Metal:** Hairline boundaries use `#1E2026` with hover highlights elevating to `#2E323B`. Subtle secondary text utilizes `#8A8477` to maintain low glare.

## Typography
Typographic rhythm sets structural poise and emotional quietude across the creative OS:
- **Headlines:** Set in `Playfair Display` with deliberate weight (`500` to `600`) to avoid spindly fragility on high-DPI displays. Headings should feel cut from raw stone, with slightly cinched kerning.
- **Body & Metadata:** Set in `Plus Jakarta Sans`. Its geometric clarity pairs cleanly with the display serif, offering exceptional legibility for asset IDs, camera vectors, and timeline tracks without adding visual clutter.
- **Case Conventions:** Small functional labels and status indicators should be set in uppercase with `0.08em` tracking. Long-form commentary and production notes remain strictly sentence-case.

## Layout & Spacing
The layout follows a 12-column architectural grid with generous breathing boundaries designed to prevent creative decision fatigue.

- **Desktop Scale (1440px+):** Outer canvas margins expand to `3.5rem` (`56px`) with `2rem` (`32px`) gutters. Large panoramic workspaces reserve uninterrupted vertical voids.
- **Card and Modal Interior Spacing:** Component internal padding uses generous thresholds—never compress content into cramped borders. Standard module interiors require `space-lg` (`2.5rem`) on desktop.
- **Responsive Adaptation:** On viewports below `768px`, margins contract gracefully to `1.25rem` and gutters collapse to `1rem`. Secondary inspector panels stack into sliding bottom sheets, preserving primary artboards without dense overlap.

## Elevation & Depth
Depth is constructed through disciplined architectural surfaces and subtle edge light rather than high-contrast drops:

- **Tonal Layers:** The workspace builds upward from Canvas (`#0A0A0C`), to Workstation Panes (`#111215`), to Overlays & Context Menus (`#16181D`).
- **Hairline Boundaries:** Surface separation relies on razor-thin `1px` borders using `rgba(255, 255, 255, 0.05)` or warm obsidian-tinted strokes (`#1E2026`).
- **Atmospheric Glow:** Elevating an active timeline or selected artifact utilizes a warm ambient field: `box-shadow: 0 16px 40px -8px rgba(0, 0, 0, 0.7), 0 0 32px 0 rgba(224, 83, 60, 0.06)`. This keeps glowing highlights soft and non-intrusive.

## Shapes
The structural visual language features soft, micro-beveled corners (`0.25rem` base, up to `0.5rem` on expansive canvas panels). 

Corners remain intentionally taut and restrained, avoiding bubbly or playful silhouettes. The silhouette communicates calibrated precision, echoing bespoke audio equipment and high-end atelier workbenches.

## Components

### Buttons & Interactive Triggers
- **Primary Studio Action:** Champagne-amber background (`#D8C7A5`) with deep obsidian typography (`#0A0A0C`), set in medium-weight sans-serif. Height: `44px`, horizontal padding: `space-lg`.
- **Secondary / Ghost:** Transparent base with hairline border (`#2E323B`) and warm stone text (`#D8C7A5`). Hover triggers a delicate background wash of `rgba(216, 199, 165, 0.04)`.
- **Critical / State Indicator:** Bound with a discreet `rgba(224, 83, 60, 0.4)` border and text in `#E0533C`. Hover invokes a whisper-soft ember aura (`rgba(224, 83, 60, 0.08)`).

### Input Fields & Controls
- **Fields:** Single-tone background (`#111215`), bordered in `1px solid #1E2026`. Typography is set at `13px` with subtle champagne placeholders (`#636058`). Focus shifts the border to `#D8C7A5` with zero aggressive outer bloom.
- **Checkboxes & Radios:** Sharp, understated geometric vessels (`16px`). Checked states fill with `#D8C7A5` displaying dark obsidian glyphs.

### Cards & Work Containers
- **Gallery & Inspector Cards:** Background `#111215` with `space-md` or `space-lg` interior padding. Header dividers use hairline `rgba(255, 255, 255, 0.04)`. Hover transitions are restrained: borders elevate subtly from `#1E2026` to `#2E323B` over `240ms` linear motion.

### Studio Chips & Metadata Badges
- **Status Badges:** Compact tags with `space-xs` vertical and `space-sm` horizontal padding. Built with muted backgrounds (`rgba(255, 255, 255, 0.02)`) and tracked-out uppercase `label-sm` text. Active production tags introduce a soft micro-dot of ember `#E0533C`.

### Timeline & Asset Nodes
- Minimal rail lines (`1px solid #1E2026`) carrying scrub heads accented in champagne amber. Tooltips hover as dark obsidian panels (`#16181D`) bordered in soft metallic gold, delivering asset resolutions, color profiles, and timecodes with calm, uninterrupted clarity.