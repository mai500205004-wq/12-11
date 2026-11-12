# FX2 — Frontend Experience & Integration Blueprint

**Version:** 1.2  
**Date:** 2026-11-05  
**Repository:** `mai500205002-ctrl/FX2`  
**Reviewed branch:** `fix/fx2-foundation`  
**Reviewed baseline commit:** `710e2c3b176d646566db952c8133a04145a6588b` — `Publish frontend assets and cleanup`  
**Document status:** Product/UX decisions, frontend integration plan, and provisional design-reference audit. This document is not evidence that the redesign has been implemented.

---

## 1. Purpose and governing idea

FX2 is not a chatbot dressed as an advertising agency, a generic SaaS dashboard, or a collection of visual themes. It is one creative intelligence environment that helps a brief discover its story, challenge its assumptions, turn into a concept, and reach a production-ready script.

> **THE BRIEF IS THE HERO.**  
> **FX2 is the world that brings its story to life.**

The user brings the brief. FX2 should reveal its human tension, purpose, ambition, means, and moment of wonder. These are lenses for discovery, not mandatory form fields that turn the brief into a questionnaire.

The experience must feel exceptional before it feels complicated. Every visual effect must serve meaning, orientation, feedback, or creative focus. No decorative simulation may imply that the system performed work it did not perform.

### Product principles

1. One coherent creative mind; multiple ways to enter, challenge, and develop an idea.
2. The brief remains the anchor throughout the complete journey.
3. The four production stages remain explicit and understandable.
4. Creative decisions are preserved; changing the interaction mode must not erase or silently regenerate work.
5. Real backend capability takes precedence over visual theatre.
6. Human review, evidence provenance, and uncertainty remain visible where they matter.
7. Arabic RTL and English LTR are first-class layouts, not mirrored afterthoughts.
8. Preserve the current working backend and its contracts during the frontend migration.

---

## 2. Product experience architecture

The product has three distinct layers. Do not collapse them into one navigation list.

### 2.1 Four production stages

| Stage | Role in the experience | Primary user outcome |
|---|---|---|
| **Brief** | The source of the story and its tension | A clear, usable creative starting point |
| **Insight** | The discovery chamber | A sharp reframing of the human or strategic truth |
| **Concept** | The invention space | A distinctive creative idea with a device and emotional arc |
| **Script** | The production room | A script that can be reviewed, refined, and exported |

Insight is the centre of discovery. Concept is the centre of invention. Script is the centre of production. The Brief is always available as a persistent anchor, but it does not need to dominate every screen with a large repeated form.

### 2.2 Four interaction identities — not pages

These are interaction modes that can be applied to the active creative stage:

- **المواجهة — Confrontation:** challenge assumptions, expose contradictions, and test weak logic.
- **الاحتمالات — Possibilities:** open alternative routes, variants, and combinations without losing the current leading direction.
- **المسرح — Theatre:** express the idea as a scene, situation, metaphor, or dramatic experience.
- **التحرير — Editing:** refine the selected direction while retaining its origin and decision history.

Switching an identity changes how the user works with the current artifact. It must not create a new unrelated project or reset accepted decisions.

### 2.3 Three thinking worlds

These are three named creative environments, not ordinary application sections:

1. **بطن الرغبة**
2. **كوكب الجاذبية الكاذبة**
3. **متحف الغد الضائع**

They are intended to give the user distinct ways to examine the same brief or idea. Their final interaction rules and visual metaphors are to be designed against the existing creative data before implementation. They must not be represented as independent AI agents or as factual simulations of people or the future.

### 2.4 Three dramatic experience concepts

These are experience concepts within the creative product, not additional production stages and not a reason to add more top-level navigation:

1. **ليلة العزاء — «الله يرحمه… بس»**: uncover the truth hidden beneath polite approval; the “بس” counter, wreath of ideas, legacy of the old method, the stranger who remembers a specific detail, and the transformation toward a new naming/celebration moment.
2. **على جنب يا أسطى**: test a decision under pressure; ideas and people become passengers, overlooked traces on seats become an Insight entry point, a changing fare records transformation, and the driver makes a decision.
3. **احكيها تاني**: test whether an idea can survive retelling and move between people; the child’s questions, repeated versions, the silence after “ليه؟”, and the version that reaches the nursery become the dramatic structure.

These experiences should be prototyped after the core stages are stable. Do not add new dramatic worlds without an explicit product decision.

---

## 3. Locked Brief Box specification

**Decision status: LOCKED. Do not reopen or redesign this component unless the product owner explicitly asks to.**

The Brief Box is the primary focal point of the opening workspace.

### Visual construction

- Near-black/charcoal surface; not a bright generic input card.
- A restrained inner light source from the upper inner-right corner, moving from red into orange before dissolving into charcoal and black.
- A very fine light filament travels around only part of the perimeter. It is not a complete animated border.
- The luminous segment occupies approximately **22–25% of the box perimeter**.
- The filament is visually thinner than 1 px at normal display scale; it must remain subtle rather than become a neon frame.
- The inner spotlight and the perimeter filament are separate visual layers.
- The motion is slow and soft. **18–22 seconds per cycle** is an initial tuning range, not a fixed acceptance value.

### State-driven motion

- Motion is associated with a real interaction state: active writing/focus or a real generation-in-progress state.
- Stop the motion after success, failure, or cancellation.
- Do not run a permanent idle animation merely to decorate the page.
- Respect `prefers-reduced-motion`.
- Never show fake progress or imply generation activity before the backend request has actually started.

### Input and controls

- The red primary action starts generation.
- The adjacent `+`/provider control opens provider/model selection; it is not a file upload control.
- Files, folders, and images have a separate upload/attachment entry point. Do not conflate it with provider selection.
- Enter inserts a new line. `Ctrl+Enter` / `Cmd+Enter` may be offered as an explicit submit shortcut.

### Initial visual tokens

| Token | Initial value | Use |
|---|---|---|
| Canvas | `#08090B` | Main workspace background |
| Secondary surface | `#171719` | Brief and supporting surfaces |
| Primary red | `#F23827` | Main generation action and restrained accents |
| Warm white | `#E8E5E1` | Main text and high-contrast content |
| Charcoal/black | Near-black range | Depth, separation, and negative space |

Treat these as the current design direction, not as an instruction to apply red to every control. Preserve hierarchy and restraint.

---

## 4. Visual language and interaction quality

The intended character is a premium creative agency, an AI creative director, a cinematic writers’ room, and an experimental design lab — combined into one recognisable visual identity.

### Direction

- Cinematic, editorial, tactile, and confident.
- Strong typography and deliberate composition; use negative space as part of the design.
- Red/orange light is a focused signal, not a page-wide gradient.
- Use surfaces and lines to establish hierarchy. Avoid excessive rounded rectangles and generic cards everywhere.
- Avoid blue SaaS gradients, template dashboards, and corporate enterprise styling.
- Motion should communicate a transition, a reveal, a real system state, or a user action. It should not compete with the brief or creative output.
- Mobile and desktop must both feel designed, not merely responsive after the fact.

### Existing implementation baseline

The current `Fxfx-main/app/src/styles.css` uses a black/cream/gold/rust system with Fraunces, Syne, and DM Mono font stacks. It already contains responsive layout rules and support for RTL marquee motion. That is the as-built visual baseline, not the final approved FX2 visual system. The redesign may evolve the token set while keeping accessible contrast, useful typography, and working responsiveness.

---

## 5. Current frontend: verified repository baseline

The reviewed branch currently has a small React/Vite frontend. Under `Fxfx-main/app/src/`, the tracked source set is:

```text
App.tsx
backend-fetch.ts
main.tsx
styles.css
vite-env.d.ts
components/
  AgentSaaSPanel.tsx
  BrowserAgentPanel.tsx
  GatewayMetricsPanel.tsx
```

There is no existing extracted workspace/stage component architecture in this source set. The proposed component names later in this document are future structure, not files already present.

### 5.1 `app/src/App.tsx` — current composition and state owner

`App.tsx` is approximately 795 lines and currently owns:

- The `Brief`, `Insight`, `Concept`, and `Script` result types.
- UI language and theme state, including persistence in `localStorage`.
- The brief, provider selection, archetype, and three brand-voice sliders.
- Insight, concept, script, loading, and error state.
- Browser attachment state.
- The ten-item iteration archive, saved in `localStorage`.
- The three generation handlers and PDF export/copy behavior.
- The page navigation, pipeline indicator, hero, all four production sections, and lower utility panels.

Current generation calls:

| Handler | Request | Current payload shape |
|---|---|---|
| `doGenerateInsight` | `POST /api/insight` | `{ brief, archetype, language, brandVoice, provider }` |
| `doConvertConcept` | `POST /api/concept` | `{ insight, archetype, language, brandVoice, provider }` |
| `doWriteScript` | `POST /api/script` | `{ concept, archetype, language, brandVoice, provider }` |

The handlers preserve a simple sequential workflow. A new Insight clears the existing Concept and Script; a new Concept clears the existing Script. A completed Script creates an archive entry. The archive is bounded to ten entries and can restore the saved brief and stage outputs, but it is not a full revision/decision history.

The current UI is a long scrolling page with a fixed navigation bar and anchor-based stage navigation. It renders an introductory hero and marquee, pipeline strip, archetype and voice settings, then the Brief, Insight, Concept, Script, Browser, Agent/SaaS, Gateway metrics, and archive sections. The archetype/voice controls currently appear before the Brief. The new experience should put the Brief first and move these controls into a contextual/optional creative-settings area without silently removing them from the request behavior.

### 5.2 Existing standalone components

| Current file | Verified current responsibility | Intended place in the redesigned experience |
|---|---|---|
| `components/BrowserAgentPanel.tsx` | Read-only research from supplied URLs; token, goal, up to three HTTPS URLs, restore/delete snapshot, JSON export, and optional attachment | **Research & Evidence** workspace, contextual to the active project |
| `components/AgentSaaSPanel.tsx` | Agent run and SaaS tenant/plan controls; status, plan, run result, evaluation, and trace | Advanced **Agent Workbench** / system area; not part of the main four-stage journey |
| `components/GatewayMetricsPanel.tsx` | Fetches `/api/metrics` every 15 seconds and displays gateway request/cache/concurrency/budget telemetry plus Gemini status | **System Diagnostics**; compact summary may be surfaced in the shell |
| `backend-fetch.ts` | Electron bridge-aware backend fetch helper | Preserve as compatibility code until its actual runtime use is verified; do not make it a new UX dependency by assumption |
| `styles.css` | Current global theme, typography, navigation, stage, component, and responsive rules | Gradually migrate into the new FX2 visual tokens and component styling |

### 5.3 Backend integration boundaries

The primary stage endpoints are already present and must remain the foundation of the first UI migration:

- `POST /api/insight`
- `POST /api/concept`
- `POST /api/script`
- `POST /api/full-pipeline`

Other existing routes used by the current panels include `/api/browser/*`, `/api/agent/*`, `/api/saas/*`, and `GET /api/metrics`. The backend also exposes health/key/system information routes. The redesign must consume these existing capabilities honestly rather than inventing new endpoint behavior in the frontend.

---

## 6. Capability truth: what the UI may and may not claim

This section protects the product from impressive-looking but misleading controls.

### 6.1 Provider selection

- The current frontend offers `auto`, `openrouter`, `openai`, `gemini`, and `grok` in its provider picker and includes `provider` in the three stage request payloads.
- In the reviewed `backend/src/index.ts`, the `/api/insight`, `/api/concept`, and `/api/script` handlers destructure `brief`/`insight`/`concept`, `archetype`, `brandVoice`, and `language`; the provider field is not part of those destructured inputs.
- Therefore, the UI control exists, but actual provider routing for the three main stage calls is **not verified by this route implementation**. Do not display those providers as connected or imply that a selected model is definitely being used.
- The agreed current operating state is **Gemini connected for the experimental phase**. Other providers are future/planned until their key state and route-level behavior are proven.
- “Auto” is a routing mode, not a fifth model. A configured fallback sequence is not evidence that every provider is usable or that it represents a quality ranking.

### 6.2 Three perspectives

The current Insight shape can display three named perspectives (Creative Rebel, Strategy Master, Picky Client). The current implementation does not establish three independent live agents negotiating in multiple rounds. Label this surface **Three Perspectives / ثلاثة أصوات**, and do not call it a live multi-agent debate.

### 6.3 Browser research

The Browser component is a restricted read-only research tool. It reads user-supplied URLs from server-allowed hosts, supports up to three URLs in the current panel, keeps a local access token in component memory, and can restore or delete a stored snapshot. The snapshot can be attached to the next Agent run through `browserResearchId` and the browser token.

It is not autonomous web search, general browsing, clicking, login, publication, or automatic truth verification. Browser evidence is untrusted and requires human review. The current Browser attachment path is for the Agent run; the three basic `/api/insight`, `/api/concept`, and `/api/script` calls do not currently accept that attachment as a direct evidence reference. The redesigned UI must state this boundary plainly.

### 6.4 Agent and SaaS

`AgentSaaSPanel.tsx` calls `/api/agent/status`, `/api/saas/status`, `/api/saas/register`, and `/api/agent/run`. It combines agent execution and tenant/plan provisioning in one panel. Its current Agent payload hard-codes English, the `The Creator` archetype, and fixed voice values rather than inheriting the main creative workspace settings. This is a real integration seam to resolve at the frontend level; do not silently imply that it is already the same session as the main stage pipeline.

SaaS scaffolding/readiness must not be represented as completed billing, authenticated tenant isolation, or production multi-tenancy unless the server proves those capabilities.

### 6.5 Runtime status versus product completion

Keep separate concepts separate:

- **Runtime state:** running, unavailable, healthy, configured, or error — based only on an endpoint that actually reports that state.
- **Product completion:** a project-management assessment of implemented scope. It is not inferred from a green health dot.

The existing Gateway panel reports gateway metrics and Gemini state; it is not a comprehensive status endpoint for every subsystem. Do not display a global “Everything Ready” badge from that partial signal. Put detailed health and telemetry in System Diagnostics.

### 6.6 Script production

The current Script response contains a script string and supporting fields such as beats, camera language, narrative strategy, and emotional turning. It does not provide a structured scene-timing model in the current frontend contract. The first Production Room should therefore prioritize a strong script editor and its supporting creative notes. A timeline/storyboard may be introduced only when real structured scene and timing data are available.

### 6.7 Creative memory and decision history

The current frontend archive is a ten-entry `localStorage` list created after Script completion. It is useful as a simple iteration archive; it is not a complete project database, revision graph, or durable record of every decision. The new interface may design a richer Memory experience, but it must not claim those records are persisted unless the corresponding storage contract exists.

---

## 7. Target workspace shell

The redesigned application should use a persistent workspace shell rather than a long landing page followed by a stack of unrelated sections.

```text
FX2 Workspace
├── Top Bar
│   ├── FX2 identity
│   ├── active project / session label
│   ├── compact runtime summary (truthful, partial if necessary)
│   ├── language and appearance controls
│   └── provider selector / connection state
├── Navigation Rail
│   ├── Brief
│   ├── Insight
│   ├── Concept
│   └── Script
├── Main Stage
│   └── the active production stage
├── Contextual Tools
│   ├── brief anchor / stage context
│   ├── creative settings
│   ├── interaction identity
│   └── evidence / decision controls when available
└── Secondary Workspaces
    ├── Research & Evidence
    ├── Memory & History
    ├── Agent Workbench
    └── System Diagnostics
```

This is a conceptual layout. The navigation rail is a way to move through the four production stages; the four interaction identities and three thinking worlds must not be duplicated as more top-level production stages.

### Persistent Brief Anchor

After the user leaves the Brief stage, show a compact, expandable Brief Anchor containing the original brief and its active version. It should remain easy to open without taking over the current workspace. Editing the brief after downstream work exists must trigger an explicit consequence: preserve the previous branch/version and show which downstream results may now be stale. Never silently overwrite or discard them.

---

## 8. Stage experience blueprint

### 8.1 Brief — the opening scene

- The Brief Box is the first and dominant interaction; use the locked specification in Section 3.
- Keep the initial experience focused: a single strong brief input with a clear primary action.
- Optional creative controls (archetype and voice sliders) live in a contextual drawer or secondary panel, not as a wall of mandatory setup before the brief.
- Provider/model selection is separate from uploads.
- File/image/folder attachments are a distinct capability and must only be displayed when the corresponding upload path exists.
- Show real submission state, validation, and failure recovery. Do not simulate progress.

### 8.2 Insight — the discovery chamber

Prioritise the data actually returned by Insight:

1. Main Insight as the central discovery statement.
2. The human/strategic tension and relevant emotional truth when present in the response.
3. The five thinking engines: Provocation, Analogies, Random Stimulus, Opposite Thinking, and Constraint Reversal.
4. Three Perspectives as labelled model-generated lenses, not independent agents.
5. A clear action to evolve the selected insight into a Concept.

The five engines should feel like five ways of looking through one creative mind, not five unrelated cards competing for attention. The user should be able to focus, compare, challenge, or preserve an angle without losing the main Insight.

### 8.3 Concept — the invention space

Present the returned concept as a coherent creative proposition:

- Title and tagline.
- Core idea / central reframing.
- Creative device.
- Emotional arc.
- Visual notes.
- Target paradox.

The concept should be experienced as a creative world with a recognisable device and emotional movement. Do not fabricate campaign assets, visual mockups, or audience reactions when the backend has returned only text fields.

### 8.4 Script — the Production Room

- Make the script itself the primary editable surface.
- Keep emotional beats, camera language, narrative strategy, and turning point visible as supporting production intelligence.
- Make copy/export actions discoverable but secondary to writing and revision.
- Do not render a fake timeline from a plain script string. Add shot timing, scene rows, or storyboard data only after a real structured scene contract is available.
- Keep the original brief, insight, and concept accessible for continuity.

---

## 9. Creative decisions and Memory experience

The intended decision vocabulary is:

- **Accept** — select a direction without deleting alternatives.
- **Refine** — improve a chosen direction while keeping its parent/version.
- **Challenge** — record a challenge or counterargument.
- **Reject** — mark a direction as not selected and record why; do not delete it.
- **Restore** — bring a rejected or prior direction back into consideration.
- **Compare** — compare two or more preserved versions with their origin visible.

These actions are product requirements for the future Memory/Decision layer. They are not claims that a complete persistent decision ledger already exists in the current UI. Until storage and API contracts support them, keep any prototype local and visibly provisional, or defer the controls.

The future Memory workspace should distinguish:

1. Projects and creative artifacts.
2. Revisions and parent/child lineage.
3. Accepted, challenged, and rejected decisions.
4. Research snapshots and their review state.
5. Exported deliverables.

Do not silently equate a browser snapshot, a frontend localStorage entry, and a backend Creative Memory lesson. They are different kinds of records.

---

## 10. Frontend integration map

### 10.1 What to preserve

- Keep the existing three stage-generation request shapes and endpoint paths unchanged in the first migration.
- Keep the current response types and error/timeout behavior until they are extracted and covered by regression checks.
- Preserve Arabic/English support, document `dir`/`lang`, keyboard accessibility, theme preference, PDF export, script copy, and the existing archive during the shell migration.
- Preserve the Browser, Agent, SaaS, and Gateway panels as functional integrations while relocating them into appropriate secondary workspaces.
- Keep the backend as the source of generation and system truth.

### 10.2 Proposed extraction boundaries

The following is a proposed frontend structure. These files do not yet exist in the reviewed baseline:

```text
Fxfx-main/app/src/
├── App.tsx                         # thin composition/root
├── domain/
│   ├── creative-types.ts            # current Brief/Insight/Concept/Script types
│   └── workspace-types.ts           # proposed UI session state only
├── services/
│   └── creative-api.ts              # wraps existing requests; no new endpoints
├── workspace/
│   ├── WorkspaceShell.tsx
│   ├── WorkspaceHeader.tsx
│   ├── NavigationRail.tsx
│   ├── StageNavigation.tsx
│   ├── BriefAnchor.tsx
│   ├── ContextPanel.tsx
│   └── WorkspaceRouter.tsx          # simple internal stage switch; no new router dependency by default
├── stages/
│   ├── brief/BriefWorkspace.tsx
│   ├── insight/InsightWorkspace.tsx
│   ├── insight/ThinkingEngines.tsx
│   ├── insight/CreativePerspectives.tsx
│   ├── concept/ConceptWorkspace.tsx
│   └── script/ScriptWorkspace.tsx
├── research/
│   └── ResearchWorkspace.tsx        # composes existing BrowserAgentPanel
├── agent/
│   └── AgentWorkbench.tsx           # composes/refines existing AgentSaaSPanel
├── system/
│   ├── SystemDiagnostics.tsx        # composes existing GatewayMetricsPanel
│   └── ProviderStatus.tsx           # truthful connection state; no simulated availability
├── memory/
│   ├── ProjectHistory.tsx
│   ├── RevisionTimeline.tsx         # only when lineage data exists
│   └── DecisionHistory.tsx          # only when persistence contract exists
└── styles.css
```

### 10.3 State ownership

Start with a single workspace state owner at the application/workspace boundary. Do not add Redux, Zustand, a database, or a routing framework merely to make the file tree look modern.

The proposed state should conceptually track:

- active stage;
- original and current brief versions;
- current Insight, Concept, and Script outputs;
- selected provider preference and verified connection state separately;
- creative settings;
- generation status/error for the active request;
- browser attachment and evidence review state;
- local archive and, in a future step, persisted revision/decision records.

The UI must distinguish **user preference** (for example, selected provider) from **runtime fact** (provider actually configured/used). Do not represent a local UI value as a confirmed backend execution result.

---

## 11. Safe migration sequence

The redesign should be incremental. The present application remains the working baseline until each step is verified.

### Phase 0 — reference selection and baseline freeze

1. Review the candidate design exports under `Fxfx-main/froontend1/isolated_projects/` and the associated screenshot/reference assets.
2. Select **one** base direction based on the complete experience, Brief-first hierarchy, quality of stage transitions, responsive behavior, Arabic/RTL quality, accessibility, and ability to bind to the existing response data.
3. Borrow only specific components or interaction details from other references. Do not merge whole templates or choose the base solely because one screenshot is dramatic.
4. Record the selected reference and the reason for selection in this document before implementation.
5. Capture the current request/response and interaction behavior as a regression baseline.

**Status:** Candidate assets exist in the repository; the final base reference has not been recorded in this blueprint.

### Phase 1 — extract without redesigning behavior

1. Move shared TypeScript response types out of `App.tsx`.
2. Move the three generation requests into a small API service while preserving endpoint paths and payload fields exactly.
3. Extract the Brief, Insight, Concept, and Script render surfaces into stage components.
4. Keep the existing `App.tsx` as composition until all extracted components work against the same state.
5. Do not change backend routes, prompt logic, provider routing, or generation policy.

### Phase 2 — install the workspace shell

1. Add the top bar, stage navigation, main stage, contextual tools, and persistent Brief Anchor.
2. Replace scroll-only stage navigation with a simple internal active-stage switch, preserving state in the workspace owner.
3. Put Brief first and move archetype/voice controls into the contextual settings area.
4. Implement the locked Brief Box exactly as specified; do not reopen its design.

### Phase 3 — stage-specific experience

1. Build Insight around the actual five-engine response and Three Perspectives.
2. Build Concept around the current typed concept response.
3. Build the Script Production Room around the current script string and supporting fields.
4. Preserve loading, error, retry, copy, export, and archive behavior.

### Phase 4 — secondary workspaces

1. Move Browser into Research & Evidence without expanding its server capability.
2. Move Agent/SaaS controls out of the core creative flow and make the current integration boundary explicit.
3. Move Gateway metrics into System Diagnostics; keep a compact shell signal only if it reflects a real endpoint.
4. Revisit provider presentation only after route-level behavior and key status have been verified.

### Phase 5 — Memory and creative interaction layer

1. Prototype the four interaction identities over the same active artifact.
2. Prototype the three thinking worlds and the three agreed dramatic experience concepts.
3. Define explicit artifact/version/decision persistence before making Accept/Reject/Restore/Compare look permanent.
4. Preserve rejected ideas and their rationale when persistent storage is available.

### Phase 6 — verification and release hardening

1. Test stage transitions and confirm that changing screens does not discard state.
2. Verify request payloads remain compatible with the backend.
3. Verify no duplicate requests are triggered by mounting/unmounting workspaces.
4. Verify Arabic RTL, English LTR, keyboard behavior, mobile layout, screen-reader labels, reduced motion, and real error states.
5. Run the existing frontend build and backend test suite in a dependency-complete environment. Do not claim success until commands have actually passed.

---

## 12. Acceptance criteria

The redesigned frontend is not accepted merely because it looks impressive in a screenshot.

### Product experience

- The Brief is the first and strongest entry point.
- The four production stages are obvious and consistently named.
- The Brief Anchor remains accessible throughout the journey.
- The four interaction identities are modes, not duplicate stages.
- The three thinking worlds and three dramatic experiences do not fragment the product into unrelated mini-apps.
- The Script workspace focuses on actual script data and does not invent a timeline.

### Functional integrity

- The existing three core API contracts remain compatible in the first migration.
- A new generation request clears only the downstream data that is genuinely invalidated, consistent with the current behavior unless a new versioning model explicitly replaces it.
- Navigating between stages preserves current outputs and user edits.
- Archive restore, copy, export, retry, loading, and error handling remain functional.
- Browser, Agent, and Metrics functions still call their existing endpoints and display their limitations honestly.
- No provider, global health, audience, future, or multi-agent capability is shown as real without evidence.

### Quality

- Arabic and English layouts are both authored and tested.
- Desktop and mobile layouts are both deliberate.
- Motion is state-driven and respects reduced-motion settings.
- No fake progress, placeholder-ready states, or fabricated activity.
- No backend contract changes are hidden inside a visual refactor.
- All significant product decisions and implementation deltas are recorded in this document and the appropriate changelog/progress report.

---

## 13. Change-control and documentation rule

This document is the product/UX integration record. Update it whenever one of the following changes:

- a product principle or locked decision;
- the selected base reference or borrowed component;
- a stage/workspace interaction;
- a frontend-to-backend contract assumption;
- a capability limitation or provider status;
- a migration phase or acceptance criterion.

For each update, append a dated entry to the decision log below. Keep implementation outcomes separate from design intentions. A planned item must not be marked complete because a component file exists; a feature is complete only after its actual behavior is verified.

### Decision log

| Date | Decision / observation | Status |
|---|---|---|
| 2026-11-04 | FX2 is one creative intelligence workspace, not a chatbot, template gallery, or generic SaaS dashboard. | Locked direction |
| 2026-11-04 | “The Brief is the Hero”; FX2 is the world that brings its story to life. | Locked direction |
| 2026-11-04 | Brief Box visual and motion specification in Section 3. | Locked; do not reopen |
| 2026-11-04 | Four production stages: Brief → Insight → Concept → Script. | Locked architecture |
| 2026-11-04 | Four interaction identities are modes, not pages. | Locked architecture |
| 2026-11-04 | Three named thinking worlds and three named dramatic experiences are retained; no new worlds are added in this phase. | Locked scope |
| 2026-11-04 | Gemini is the currently connected experimental provider; other providers remain planned/not verified. | Current capability boundary |
| 2026-11-04 | Browser stays read-only and separate from the main stage pipeline; current attachment is for the Agent run. | Current capability boundary |
| 2026-11-04 | Three Perspectives is not a live multi-agent debate. | Current capability boundary |
| 2026-11-04 | Script timeline waits for structured scene/timing data. | Integration rule |
| 2026-11-04 | Existing generation contracts are preserved during the first frontend migration. | Engineering constraint |
| 2026-11-04 | The selected base among the repository's candidate design exports is not yet recorded. | Open decision; Phase 0 |

---

## 14. Source files reviewed for this blueprint

The following source files were read on branch `fix/fx2-foundation` at baseline commit `710e2c3b176d646566db952c8133a04145a6588b`:

- `Fxfx-main/app/src/App.tsx`
- `Fxfx-main/app/src/backend-fetch.ts`
- `Fxfx-main/app/src/components/BrowserAgentPanel.tsx`
- `Fxfx-main/app/src/components/AgentSaaSPanel.tsx`
- `Fxfx-main/app/src/components/GatewayMetricsPanel.tsx`
- `Fxfx-main/app/src/styles.css`
- `Fxfx-main/backend/src/index.ts`
- `Fxfx-main/README.md`
- `Fxfx-main/ROADMAP.md`
- `Fxfx-main/CREATIVE_CORE_PROGRESS.md`
- `Fxfx-main/CHANGELOG.md`
- `Fxfx-main/docs/CREATIVE_CORE_ROADMAP.md`
- `Fxfx-main/docs/IMPLEMENTATION_SUMMARY.md`
- `Fxfx-main/REPORT-INCREMENT27.md`

The design-candidate inventory was also inspected under `Fxfx-main/froontend1/isolated_projects/`; the final base design has not yet been selected in this document.

**Implementation note:** This blueprint was prepared from repository inspection. No application source, backend route, prompt, dependency, test, branch, commit, or pull request was changed as part of preparing it.

---

# Addendum — Visual Reference Audit & Experience Composition

**Version update:** 1.1  
**Date:** 2026-11-05  
**Scope:** Reference inventory, provisional visual foundation, screen composition, state ownership, and safe implementation sequence.  
**Status:** Design-family recommendation is provisional. Pixel-level reference scoring is blocked by unavailable image targets in the connected repository view; this is recorded explicitly below.

## 15. Design reference inventory — what is actually in the repository

The candidate inventory was read from `Fxfx-main/froontend1/isolated_projects/projects.csv` on `fix/fx2-foundation`. It lists **49 project records**, with **1,366 listed files**, **1,318 per-record unique files**, and approximately **167.54 MB** of summed per-record unique sizes. These totals describe the inventory rows; nested packages and copied variants can overlap, so they must not be interpreted as 49 independent designs or a globally deduplicated asset total.

### Main design families

| Reference family | Inventory size | Intended role in the evaluation | Initial assessment from repository metadata |
|---|---:|---|---|
| `new2/stitch_fx_2026_ai_studio_redesign` | 73 files / 25.11 MB | Main visual foundation candidate | Broadest named Stitch redesign family with dedicated Brief, Concept, Script, cinematic production, governance, metrics, and master-pipeline screens. Strongest provisional source family for a coherent stage system. |
| `new3/stitch_fx_2026_ai_studio_redesign` | 74 files / 25.12 MB | Variant comparison | Almost the same footprint as the `new2` family. Treat as a revision/variant until file-level differences are checked; do not count it as a separate independent design direction yet. |
| `stitch_fx_2026_ai_studio_redesign` | 73 files / 25.11 MB | Earlier/parallel Stitch family | Same reported footprint as `new2`; requires asset/hash comparison before choosing between copies. |
| `new2/FX-AI-Creative-Lab-Complete` | 261 files / 252 unique / 10.15 MB | Functional and flow reference | A composite package that includes several nested reference projects. Useful for flows and reusable interaction ideas; not automatically a single coherent visual base. |
| `stitch_fx_ai_creative_lab` | 28 files / 8.39 MB | Product-flow and stage-detail reference | Potential source for creative-lab patterns and refinement states. |
| `stitch_fx_creative_intelligence_workspace` | 9 files / 1.75 MB | Workspace shell reference | Small, focused reference set; useful for testing how the creative workbench is framed. |
| `New/DesignFXAICreative-figma` | 35 files / 0.16 MB | Figma UX comparison | A compact Figma-origin reference, to be evaluated for interaction clarity and information hierarchy rather than assumed to be the primary visual direction. |
| `New/FX-Creative-vo` | 44 files / 0.27 MB | v0 implementation comparison | Useful as a frontend implementation/structure reference after checking actual code and data binding. |
| `New/fx-creative-lovable` | 85 files / 0.52 MB | Lovable flow comparison | Useful for end-to-end flow and interaction coverage; must not override the product architecture or invent backend behavior. |
| `new1/fx-director-suite` | 25 files / 0.05 MB | Alternate suite reference | Smaller alternative; retain for comparison, not as an assumed winner. |
| `New/atelier-fx` | 25 files / 3.36 MB | Cinematic/art-direction reference | Potentially valuable for a focused production-room treatment; avoid importing simulation claims or fake operational UI. |

### Named Stitch 2026 screens inside the leading family

The repository index identifies a deliberately related screen set, including:

- `fx_2026_creative_inception_lateral_thinking_engine_app_brief`
- `fx_2026_creative_inception_lateral_thinking_engine_radical_inception_app_brief`
- `fx_2026_concept_engine_visual_ideation_studio_app_concept`
- `fx_2026_concept_engine_expanded_moodboard_latent_ideation`
- `fx_2026_neural_screenplay_narrative_engine_app_script`
- `fx_2026_neural_screenplay_chronos_reborn_app_script`
- `fx_2026_cinematic_production_studio`
- `fx_2026_core_creative_pipeline_full_master_export_app_master_pipeline`
- `fx_2026_neural_screenplay_ip_governance_engine_app_script_app_governance`
- `fx_2026_high_performance_neural_metrics_cluster_telemetry_app_metrics`
- `fx_2026_imax_auditorium_1_live_theater_projection_qc_viewport`

The naming and coverage indicate a suite rather than one isolated landing page. That is useful because the FX2 redesign needs a consistent shell with distinct stage-specific workspaces. It does **not** establish that every screen in the suite should be implemented.

## 16. Reference-access limitation — visual scoring is not yet honest to claim

The connected repository view exposes many design-reference entries under `froontend1/isolated_projects/` and `froontend1/classified_assets/`, but several of those entries are Git symlink blobs. The `screen.png` entries inspected in the classified asset index are short pointer blobs (roughly 99–192 bytes), not the rendered PNG bytes. Their expected `all_isolated_projects/...` targets are not present in the recursive Git tree returned for the reviewed commit. The Figma Make `.mht` export is listed at approximately 6.46 MB, but the connected file reader returned no readable body for that artifact.

Therefore:

1. The inventory, names, counts, grouping, and file relationships are verified from repository metadata.
2. The actual visual pixels of the referenced screens were **not** available through this inspection path.
3. No one should describe the Stitch, Figma, v0, or Lovable screens as visually inspected or pixel-scored in this pass.
4. The visual foundation selection below is a **provisional family-level recommendation**, not a final approval of an exact screen or component.
5. A final visual lock requires the actual screenshot/source assets to be available as ordinary readable files or a directly accessible design export.

This is a deliberate quality gate. Choosing a visual system from filenames alone and presenting that choice as a completed visual review would be misleading.

## 17. Provisional visual foundation recommendation

### Lead candidate: Stitch FX 2026 AI Studio Redesign

Use `new2/stitch_fx_2026_ai_studio_redesign` as the **lead visual-reference family** for the next review pass. The reasons are:

- It appears to cover the whole creative journey, not only a marketing hero or dashboard.
- Its named screens map naturally to the Brief, Concept, Script, production, governance, and diagnostics responsibilities already present in FX2.
- It aligns with the previously established product direction: Stitch supplies the visual DNA, while interaction behavior and implementation are adapted to the existing application rather than copied blindly.
- The `new2` and `new3` packages provide a clear candidate revision comparison; we can choose the better source after checking their actual asset differences.

**What this recommendation means:** take the Stitch family as the lead source for visual language, composition, art direction, and stage-specific inspiration.

**What it does not mean:** copy the entire application, adopt every screen, import a separate backend, add simulated rendering/AI providers, or treat cinematic telemetry as real FX2 capabilities.

### Supporting references — not competing base applications

- **Figma Make:** inspect for interaction choreography, control placement, accessibility, and task completion clarity.
- **v0:** inspect for React component boundaries, responsive implementation patterns, and maintainable component composition.
- **Lovable:** inspect for end-to-end flow continuity, onboarding, and state transitions.
- **Atelier / cinematic simulation:** inspect only for restrained production-room art direction, scene presentation, and export composition. Do not import fake render queues or pretend video-generation capability.
- **FX-AI-Creative-Lab-Complete:** use as a reference archive, not as a monolithic source to merge wholesale.

The outcome must be **one FX2 design system**, not a mash-up of multiple generated products.

## 18. Design selection rubric — required before visual lock

When the rendered assets are available, assess each candidate with the following weighted rubric. The weights prioritize product fit and functional integration over spectacle.

| Criterion | Weight | Evidence required |
|---|---:|---|
| Creative-product coherence | 25% | Does the design make the Brief → Insight → Concept → Script journey feel like one continuous creative process? |
| Integration compatibility | 25% | Can its information hierarchy map to the existing React app and current API responses without fake data or backend rewrites? |
| Visual hierarchy and originality | 15% | Does it create a recognizable FX identity without generic SaaS cards or visual noise? |
| Stage coverage | 15% | Are Brief, Insight, Concept, and Script all represented as distinct but related workspaces? |
| Arabic RTL and mobile quality | 10% | Does it remain legible and intentional in Arabic, English, narrow viewports, and keyboard navigation? |
| Implementation economy | 10% | Can the useful patterns be implemented incrementally without importing an unnecessary stack or duplicating state? |

Do not issue a numeric final ranking until screenshots/code are actually inspected. A visually spectacular cinematic playback screen cannot compensate for weak Brief/Insight interaction or unsupported functionality.

### Disqualifiers

A candidate is not eligible as the base if it depends on any of the following to create its effect:

- fake live model activity, fabricated audience reactions, or invented production status;
- unsupported multi-agent/provider behavior;
- timeline, shot, render, or export controls that have no matching data or service;
- a new backend contract or database merely to reproduce a visual mockup;
- an inaccessible or unusable Arabic/mobile adaptation;
- a generic dashboard layout that demotes the Brief.

## 19. FX2 experience composition — proposed target shell

The redesigned UI should use a persistent creative workspace shell with one primary stage at a time. It is not a collection of pages that independently repeat the same header and cards.

### Global shell

1. **Top Bar:** FX2 identity, active project/brief label, language and theme controls, and a small honest runtime signal. Do not put a global green “Ready” indicator here unless all relevant subsystems have been checked.
2. **Stage Navigation:** Brief, Insight, Concept, Script. Show current stage and genuine completion state; never infer a stage is complete from navigation alone.
3. **Main Stage:** the active stage owns the visual focus and the majority of the canvas.
4. **Contextual Rail:** stage-specific support such as idea history, evidence, decisions, provider information, or export. On mobile, this becomes a drawer or bottom sheet rather than a squeezed permanent column.
5. **Persistent Brief Anchor:** a compact, reopenable summary once the user leaves the initial Brief view. The anchor preserves context without recreating the full Brief Box on every stage.

### What must disappear from the primary journey

The current app has a large introductory hero, a scrolling marquee, a separate archetype/voice stage, an extra pipeline strip, and the research, Agent/SaaS, and gateway panels rendered in the same vertical page. These may contain reusable elements, but they should not all remain in the main production sequence.

- Brand archetype and voice controls become a compact creative-direction control, available where relevant; they are not a mandatory stage before the Brief.
- The pipeline becomes persistent stage navigation, not a second redundant progress section.
- Browser becomes Research & Evidence, separate from the Brief → Script path.
- Agent/SaaS operations move to a separate operations/control workspace, not into the creative sequence.
- Gateway metrics move to System Diagnostics, with only verified compact status surfaced in the global shell.
- The marquee is not a core interaction; remove it from the new shell unless it proves to communicate useful system identity without stealing attention.

## 20. Stage composition tied to current data — no invented capabilities

### Brief Workspace

- The locked Brief Box remains the primary visual object.
- Keep the provider control separate from file attachment.
- Keep the actual current inputs available: brief, archetype, language, and brand voice values.
- File/folder/image attachment UI must remain hidden or clearly unavailable until there is a real upload path and contract. The existing Browser research form is not a general-purpose file upload system.
- A generation filament/loading state may animate only from the real request lifecycle.

### Insight Workspace

Bind the screen to the actual `InsightData` response:

- `mainInsight` is the main reveal.
- `lateralThinkingBreakdown` supplies the five techniques: provocation, analogies, random stimulus, opposite thinking, and constraint reversal through the existing constraints/opportunities fields.
- `agentDebate.voices` currently yields three generated perspectives in one response. Label this **Three Perspectives / ثلاثة أصوات**, not three independent live agents.
- `metaphoricFraming`, `emotionalTruth`, `creativeMethod`, constraints, and opportunities are supporting evidence/context.
- Do not add a live debate timeline, multiple model identities, audience voting, or real-time reaction meters until corresponding backend behavior exists.

### Concept Workspace

Bind to the current `ConceptData` fields:

- title and tagline;
- core idea;
- creative device;
- emotional arc;
- visual notes;
- target paradox.

The design can express these as an editorial concept board, but it must not require a persistent moodboard, generated image gallery, or multi-variant archive unless those capabilities are implemented.

### Script Production Room

Bind to the current `ScriptData` fields:

- `script`;
- `beats`;
- `cameraLanguage`;
- `narrativeStrategy`;
- `emotionalTurning`.

Make the script/editorial content the hero. A structured shot matrix, scene timeline, storyboard editor, duration ruler, or render monitor is a later capability. Do not infer scene timing from a plain script string or beats array.

### Research & Evidence

Keep the existing `BrowserAgentPanel` behavior and honest limitations:

- user-supplied HTTPS URLs only, within the server allowlist;
- maximum three URLs in the current component;
- token required for browser routes;
- local saved snapshot, restore, export, and delete;
- untrusted/unreviewed source labels;
- attachment currently flows to the Agent run, not the separate `/api/insight`, `/api/concept`, or `/api/script` calls.

A future evidence-to-creative-stage integration requires a deliberately designed and reviewed contract. Do not simulate it in the frontend.

## 21. Frontend state ownership and extraction plan

The current `App.tsx` owns the brief, provider selection, insight, concept, script, browser attachment, loading/error state, archive, theme, language, archetype, and voice sliders. It also owns the HTTP generation functions and rendering for all four production stages. Extracting visual components before defining who owns this state risks duplicate requests and lost user work.

### Proposed ownership boundary

- **Workspace controller (existing `App` initially):** owns the active project/session state, current outputs, generation lifecycle, error/retry behavior, language, theme, and selected creative direction.
- **Stage components:** receive typed data and callbacks; they do not make direct generation requests in the first extraction pass.
- **Service layer:** centralizes request functions only after endpoint payloads and response types are copied from the current code and tested for equivalence. Do not silently switch transport behavior during UI extraction.
- **Secondary workspace components:** Browser, Agent/SaaS, and Metrics keep their existing endpoint behavior while being relocated in the shell.
- **Archive/history:** retains existing localStorage behavior during the first migration. Persistent version lineage and rejected-idea restoration are separate product capabilities, not assumptions about the current archive.

### Extraction order

1. Add a visual shell around the existing `App` state without changing generation behavior.
2. Extract navigation and Brief Anchor as presentational components.
3. Extract Brief UI while leaving `doGenerateInsight` and payload construction in the controller.
4. Extract Insight UI while leaving `doConvertConcept` in the controller.
5. Extract Concept UI and Script UI with the same rule.
6. Relocate Browser, Agent/SaaS, and Metrics after their route use and props have regression coverage.
7. Only after the first shell is stable, introduce stage-specific state modules or a reducer if an observed state-management problem justifies it.

Do not move all state into a new store, add routing libraries, or introduce a new data-fetching framework solely for the redesign.

## 22. Updated implementation roadmap and gates

| Phase | Deliverable | Exit gate |
|---|---|---|
| 0 — Reference recovery | Obtain readable screenshots or source exports for the leading Stitch family and key alternatives | Pixel-level review is possible; variant differences are known |
| 1 — Foundation shell | Workspace shell, stage navigation, responsive layout, RTL/LTR foundation | Existing app behavior and API payloads remain unchanged |
| 2 — Brief experience | Apply the locked Brief Box design and real generation states | Input, provider selection, focus, keyboard, loading, failure, and reduced motion work |
| 3 — Insight and Concept | Stage-specific editorial workspaces mapped to existing response types | All current output fields remain visible and downstream actions work |
| 4 — Script production | Script-first production room with real copy/export behavior | No fake timeline/shot metadata; responsive editor works |
| 5 — Research and operations | Move Browser, Agent/SaaS, Metrics to their own contextual areas | Existing endpoints, token boundaries, and truthful status retained |
| 6 — Creative evolution | Add interaction identities, worlds, decisions, and version lineage only where state contracts support them | Accept/refine/challenge/reject/restore/compare never lose provenance |
| 7 — Validation | Build, tests, RTL, mobile, accessibility, request lifecycle, regression checks | All executed checks are reported with exact commands and results |

### Required evidence for acceptance

- Before/after screenshots at desktop and mobile breakpoints, in both Arabic and English.
- A screen-to-data map for every stage, proving that visible values originate from current response fields or explicitly labelled local UI state.
- Request-payload comparison proving the first migration did not alter backend contracts.
- Regression checks for loading, retry, failure, archive restore, copy, and PDF export.
- Confirmation that navigating between stages does not discard current output or trigger duplicate generation.
- A capability audit confirming that provider status, browser evidence, agent debate, metrics, and production controls are not overstated.

## 23. Decision log — addendum

| Date | Decision / observation | Status |
|---|---|---|
| 2026-11-05 | Inventory confirms 49 design project records, including Stitch, Figma, v0, Lovable, and Atelier families; nested records can overlap. | Verified inventory metadata |
| 2026-11-05 | `new2/stitch_fx_2026_ai_studio_redesign` is the lead visual-reference family for the next comparison pass because it covers multiple named FX2 stages and supporting workspaces. | Provisional recommendation; not visually locked |
| 2026-11-05 | `new3/stitch_fx_2026_ai_studio_redesign` is treated as a likely revision/variant, not an independent design direction, until file-level comparison. | Open verification |
| 2026-11-05 | The indexed preview assets are symlink pointer blobs whose expected targets are not visible in the reviewed Git tree; pixel-level scoring is therefore deferred. | Verified limitation |
| 2026-11-05 | Stitch provides the lead visual DNA; Figma Make, v0, and Lovable are supporting references for UX, implementation, and flow respectively. | Provisional composition strategy |
| 2026-11-05 | FX2 will use one persistent workspace shell with four production stages, a persistent Brief Anchor, and separate contextual workspaces for Research, Operations, and Diagnostics. | Proposed experience architecture |
| 2026-11-05 | The first redesign pass is a frontend-only extraction around existing state and API contracts. | Engineering constraint |

## 24. Source inventory reviewed for this addendum

- `Fxfx-main/froontend1/isolated_projects/projects.csv`
- `Fxfx-main/froontend1/classified_assets/classification_manifest.csv`
- Recursive Git tree for baseline commit `710e2c3b176d646566db952c8133a04145a6588b`
- Existing `App.tsx`, `styles.css`, Browser/Agent/Metrics components, and backend route definitions listed in Section 14

**Implementation status:** This addendum records inventory findings and a provisional design recommendation. No frontend source, backend route, dependency, test, branch, commit, or pull request was changed. The document remains a local deliverable until it can be added to the repository through an authorized write path.


---

## 25. Expanded reference-library investigation — 2026-11-05

### 25.1 Scope and repository baseline

Second repository-level inventory:

- Repository: `mai500205002-ctrl/FX2`
- Branch: `fix/fx2-foundation`
- Baseline commit: `710e2c3b176d646566db952c8133a04145a6588b`
- Reference root: `Fxfx-main/froontend1/`

The active GitHub connection reports `pull: true` and `push: false`. Repository contents can be inspected, but changes cannot be committed or pushed through this connection. This version is therefore a locally generated deliverable attached in the conversation, not a claim of an already-pushed repository update.

### 25.2 What was found

`froontend1/` contains four distinct layers:

1. `Design FX AI Creative Lab – Figma Make.mht` — standalone MHTML export, 6,462,275 bytes (~6.16 MiB).
2. `isolated_projects/` — 49 indexed project entries, represented in the current Git tree by symlink-like entries into the classified project corpus.
3. `classified_assets/` — categorized and deduplicated asset library.
4. `all_extracted_images/` — extracted image material separated from project source trees.

The index is `froontend1/isolated_projects/projects.csv`. It records 49 project rows with file counts, unique file counts, and unique sizes. The rows include multiple generations and project families, not just the first shortlist.

### 25.3 Additional project families confirmed

| Family / artifact | Indexed size | Potential contribution |
|---|---:|---|
| `FX-Visual-Foundation-Package` | 5.18 MB | Design tokens, visual rules, reference packaging |
| `fx-director-suite` | 0.05 MB | Creative-director interaction and workflow concepts |
| `fx-unified` | 0.32 MB | Unified workspace candidate |
| `fx-unified-p7` | 0.15 MB | Alternate unified variant |
| `FX-AI-Creative-Lab-Complete` | 10.15 MB | Integrated reference with nested projects |
| `FX-Creative-vo` | 0.27 MB | Frontend implementation reference |
| `fx-creative-lovable` | 0.52 MB | Frontend/product-flow implementation reference |
| `DesignFXAICreative-figma` | 0.16 MB | Figma-derived design reference |
| `atelier-fx` | 3.36 MB | Cinematic simulation / production-room reference |
| `atelier-fx — cinematic simulation` | 0.13 MB | Smaller simulation-focused reference |
| `stitch_fx_ai_creative_studio` | 3.66 MB | Core creative-studio screens |
| `stitch_fx_creative_intelligence_workspace` | 1.75 MB | Workspace-oriented visual reference |
| `stitch_fx_2026_ai_studio_redesign` | 25.11 MB | Broad redesign family |
| `stitch_fx_ai_creative_lab` | 8.39 MB | Earlier creative-lab family |
| `stitch_textfx_theme_showcase_platform` | 2.34 MB | Multi-realm / editorial-workbench ideas |

The index also contains generic entries such as `project`, `project-bolt-sb1-na71zfse`, `new3-project`, plus 3D spatial asset workspaces, cinema viewports, governance/audit workspaces, neural screenplay variants, and batch-pipeline matrices. They must not be excluded only because their names are generic.

### 25.4 Duplicates and generations

Several large families appear in multiple generations:

- `new2` and `new3` contain parallel `stitch_fx_2026_ai_studio_redesign` trees.
- Older root-level copies of the same redesign also exist.
- The project index reports 73 files / 25.11 MB for `new2` and 74 files / 25.12 MB for `new3`.
- The extra file in `new3` means it is not safe to call it an exact duplicate without a file-level diff.
- `FX-AI-Creative-Lab-Complete` contains nested references that also exist as standalone projects. Some are packaged dependencies or copies, not necessarily independent design directions.

**Decision:** use project indexes and hashes to identify duplicate payloads, but retain distinct versions until a content-level comparison proves equivalence. Do not delete a version because its folder name resembles another.

### 25.5 Classified asset inventory

`classified_assets/classification_manifest.csv` contains 429 lines including its header (428 records). It classifies assets into:

- `group_50_core`
- `group_20_secondary`
- `structured_sequences`
- `cocktail_misc`

The manifest records source paths, SHA-256 hashes, indexed paths, sizes, and duplicate relationships. It is a useful map for locating assets without downloading every project archive.

`group_50_core` includes core creative-lab, creative-intelligence workspace, cinematic production, concept, brief, script, metrics, and governance screen assets. `structured_sequences` includes storyboard, scene, export, and production-sequence references. `group_20_secondary` includes supporting material such as icons, logos, and 3D assets. `cocktail_misc` is a catch-all and should be reviewed rather than assumed irrelevant.

### 25.6 Figma Make MHTML limitation

The Figma Make export exists at:

`Fxfx-main/froontend1/Design FX AI Creative Lab – Figma Make.mht`

Its size is 6,462,275 bytes. The GitHub file-reading connector identified its metadata but did not return its contents; the available raw-download path also rejected retrieval. Therefore:

- File existence is confirmed.
- Contents have **not** yet been inspected.
- No visual or implementation judgment should be attributed to this MHTML export.
- It remains a priority for local extraction (MHTML MIME parsing, embedded-resource inventory, screenshot capture).

### 25.7 “Multiple designs” and “Frontend training” discovery status

The repository confirms the multi-project design corpus under `froontend1/isolated_projects/` and its categorized counterpart under `froontend1/classified_assets/`.

An exact folder named `Frontend Training` (or an unambiguous equivalent) was not found in the current branch tree. However, implementation-oriented frontend candidates exist: `FX-Creative-vo`, `fx-creative-lovable`, and `DesignFXAICreative-figma`. Generic projects such as `project`, `project-bolt-sb1-na71zfse`, and `new3-project` still need source inspection before their purpose can be established. It would be inaccurate to claim a separately named training folder has already been found.

### 25.8 Revised review strategy

**Pass A — inventory and integrity**
- Enumerate all 49 project-index rows.
- Resolve each project entry to its target directory.
- Compare `new1`, `new2`, and `new3` versions using file lists and hashes.
- Separate exact duplicates from meaningful revisions.

**Pass B — implementation candidates**
- Inspect `FX-Creative-vo`, `fx-creative-lovable`, `DesignFXAICreative-figma`, `fx-unified`, and `FX-AI-Creative-Lab-Complete`.
- Record framework, component structure, page coverage, RTL, responsiveness, and integration feasibility.
- Treat source-code reuse as a separate decision from visual inspiration.

**Pass C — visual and cinematic references**
- Inspect core Stitch screens, Atelier, cinema viewport, storyboard, and production-room assets.
- Evaluate each against Brief-first, the four-stage journey, three creative worlds, and actual backend data.
- Reject visuals implying unavailable rendering, live multi-agent debate, autonomous browser actions, or unsupported provider routing.

**Pass D — Figma Make and unclassified assets**
- Extract the MHTML export locally when available.
- Review `cocktail_misc` and generic project folders rather than excluding them.
- Add newly discovered sources to the comparison register with provenance paths.

### 25.9 Updated conclusions

1. The previous provisional preference for the Stitch 2026 redesign remains a candidate, not a final visual selection.
2. `FX-Visual-Foundation-Package`, `fx-unified`, `fx-director-suite`, and implementation-oriented frontend projects are now explicit comparison candidates.
3. The Figma Make MHTML file exists but remains uninspected.
4. The current branch contains a larger and more varied reference corpus than the first shortlist suggested.
5. No source project has been merged into the working frontend.
6. No backend contract, provider routing, browser capability, or runtime behavior was changed during this investigation.

### 25.10 Next concrete action

Perform a content-level comparison of the project source trees and the `new2` versus `new3` Stitch redesigns, then extract the Figma Make MHTML. Only after those steps should a final visual foundation be approved and component migration begin.


---

# FX2 FRONTEND EXPERIENCE BLUEPRINT — v1.3

## 26. Historical source recovery and repository clarification — 2026-11-05

### 26.1 Important correction to the previous inventory

The previous section reported that a separately named `Frontend Training` folder had not been found in the current branch. A deeper read-only inspection of Git history resolved the ambiguity:

- The historical source directory is named **`Fxfx-main/frontend-trials/`** (not `Frontend Training`).
- It is present in the earlier commit `eff79feb1c65f8809ffac6ef4bd780b9eb84fb0d`.
- The later cleanup baseline `710e2c3b176d646566db952c8133a04145a6588b` no longer contains that source directory.
- The earlier commit still exposes the source trees and project files for the key frontend candidates. This is a history/revision difference, not evidence that those projects were incomplete.

**Conclusion:** the original trial projects were located in Git history and inspected read-only. They were not restored into the working branch, copied into the active app, or modified.

### 26.2 Historical source roots confirmed

The parent revision contains the following implementation and design roots under `Fxfx-main/frontend-trials/`:

- `مجلد ١/مجلد ١/FX-Visual-Foundation-Package/`
- `مجلد ١/مجلد ١/fx-director-suite/`
- `مجلد ١/مجلد ١/fx-unified-p7/`
- `مجلد ٢/FX-AI-Creative-Lab-Complete/`
- `New Folder/New Folder/FX-Creative-vo/`
- `New Folder/New Folder/fx-creative-lovable/`
- `New Folder/New Folder/DesignFXAICreative-figma/`
- Stitch families including `stitch_fx_2026_ai_studio_redesign`, `stitch_fx_ai_creative_studio`, and `stitch_fx_creative_intelligence_workspace`
- Atelier/cinematic production references

The review used source files from historical commit `eff79feb1c65f8809ffac6ef4bd780b9eb84fb0d` and current FX2 files at `fix/fx2-foundation`. It did not assume the historical trial projects were already present in the active branch.

### 26.3 Scope and evidence boundary

This was source-level reverse engineering: package manifests, application entry points, page components, reducers, service adapters, API calls, design tokens, CSS, and project documentation were inspected. Binary images were not decoded into a rendered visual review in this pass. The separate MHTML export `Design FX AI Creative Lab – Figma Make.mht` remains unparsed; its existence and size were already verified in v1.2. Therefore, this report distinguishes source/code findings from pixel-level visual judgments.

---

## 27. Reverse-engineering results by candidate

### 27.1 Active FX2 frontend — the runtime base to preserve

**Current source:** `Fxfx-main/app/src/App.tsx`, `Fxfx-main/app/src/styles.css`, `Fxfx-main/app/package.json`.

Verified package baseline:

- React / React DOM `18.3.1`
- Vite `5.3.1`
- TypeScript `5.4.5`
- `jspdf` for PDF export
- Capacitor dependencies are present in the package manifest, but the current experience under review remains the web frontend.

The active app already calls the actual FX2 backend directly:

- `POST /api/insight` with `brief`, `archetype`, `language`, `brandVoice`, and `provider`
- `POST /api/concept` with `insight`, `archetype`, `language`, `brandVoice`, and `provider`
- `POST /api/script` with `concept`, `archetype`, `language`, `brandVoice`, and `provider`

It has an abortable request helper, retry handling, error presentation, local persistence for language/theme and recent iterations, and existing Browser, Agent/SaaS, and Gateway Metrics components. The current `App.tsx` is an expanded evolution of the older `FX-AI-Creative-Lab-Complete` app source, not a blank frontend requiring a new backend connection.

**Strength:** it is already on the active product's runtime stack and uses the real API contract. It is the lowest-risk base for the next frontend phase.

**Weakness:** the main application remains concentrated in a large `App.tsx`, and the current visual language still reflects the older black/cream/gold/rust palette. This calls for controlled component extraction and a new visual system—not replacing the working app with another framework.

**Decision:** preserve the current app as the runtime and integration base. No rollback to the older `Complete` copy.

### 27.2 `fx-unified-p7` — strongest API-compatible service reference

**Source roots:**

- `.../fx-unified-p7/src/App.tsx`
- `.../fx-unified-p7/src/services/fx.ts`
- `.../fx-unified-p7/src/services/scenes.ts`
- `.../fx-unified-p7/src/components/Stage1Brief.tsx`
- `.../fx-unified-p7/src/components/Stage3Concept.tsx`
- `.../fx-unified-p7/src/components/Stage4Script.tsx`

Package stack: React `19.0.1`, Vite `8.3.0`, TypeScript `7.0.2`, Tailwind 4, plus `@google/genai` and Express dependencies.

Its `runPipeline` service uses the same three core FX2 routes and compatible payload concepts:

1. `/api/insight` receives the brief and the archetype/brand-voice/language context.
2. `/api/concept` receives the full Insight response object.
3. `/api/script` receives the full Concept response object.

It maps the API results into its own `Work` model, records whether the source was `api` or `local`, and can generate an optional mirrored concept through an additional `/api/concept` request.

Important boundaries:

- `VITE_FX_BACKEND=1` is required to select the HTTP path; otherwise the service uses a local fallback.
- Its local fallback is template-based and must never be mistaken for a Gemini/backend result.
- The mirror operation can make another paid generation request; it was inspected but not executed.
- The app includes a fifth camera/simulation stage, localStorage state, and audio/simulation features. Those are not part of FX2's four-stage core flow.
- It does not provide the current FX2 provider selector/management behavior.
- React/Vite major versions differ from the active FX2 package, so direct dependency replacement is not justified.

**Decision:** this is the best reference for a typed/isolated generation-service adapter and cinematic scene data. Reuse the integration pattern only after mapping it to the active API and current runtime. Do not copy its fifth stage into the production pipeline or silently fall back to local content after a real API failure.

### 27.3 `FX-Creative-vo` — strongest modular interaction architecture

**Source roots:**

- `.../FX-Creative-vo/components/fx/app-shell.tsx`
- `.../FX-Creative-vo/components/fx/workspace-provider.tsx`
- `.../FX-Creative-vo/components/fx/stages/brief-stage.tsx`
- `.../FX-Creative-vo/components/fx/stages/idea-stage.tsx`
- `.../FX-Creative-vo/components/fx/stages/script-stage.tsx`
- `.../FX-Creative-vo/lib/fx/service/contract.ts`
- `.../FX-Creative-vo/lib/fx/service/http-service.ts`
- `.../FX-Creative-vo/lib/fx/service/mock-service.ts`

Package stack: Next `16.4.0`, React `19`, Tailwind 4, TypeScript `5.7.3`.

Strong implementation patterns:

- A central workspace provider and reducer own stage, brief, strategy, ideas, selected idea, comparison state, script scenes, errors, and generation state.
- Stage UI is separated into focused components.
- Idea cards can be edited, refined, regenerated, selected, and compared.
- Script scenes have editable fields and a structured duration-based timeline.
- AbortController cancellation is supported.
- Accessibility labels, responsive stage navigation, locale state, and contextual panels are considered.

Compatibility warnings:

- Its HTTP adapter expects `/strategy`, `/ideas`, `/ideas/regenerate`, `/ideas/refine`, `/script`, and `/projects/:id`, with a `{ data, usage: { tokens } }` response wrapper.
- The active FX2 backend currently exposes `/api/insight`, `/api/concept`, `/api/script`, and `/api/full-pipeline`; it does not expose the v0-specific strategy/ideas/refinement/project routes in that contract.
- The v0 service simulates visible progress steps with a timer while the HTTP request is in flight; the existing backend does not stream those intermediate stages. This must not be copied as real backend progress.
- When `NEXT_PUBLIC_FX_API_URL` is absent, its service selects a local mock implementation. That is useful for isolated design work, but dangerous if an operator mistakes the mock for live generation.
- The Next/React/Tailwind stack differs from the active React/Vite application.

**Decision:** adopt its separation of UI, state, and service responsibilities as a refactoring pattern. Do not transplant the Next.js app or its HTTP adapter unchanged.

### 27.4 `DesignFXAICreative-figma` — strongest editorial narrative and screenplay reference

**Source roots:**

- `.../DesignFXAICreative-figma/src/App.tsx`
- `.../DesignFXAICreative-figma/src/content.ts`
- `.../DesignFXAICreative-figma/src/components/Shell.tsx`
- `.../DesignFXAICreative-figma/src/views/Brief.tsx`
- `.../DesignFXAICreative-figma/src/views/Insight.tsx`
- `.../DesignFXAICreative-figma/src/views/Concept.tsx`
- `.../DesignFXAICreative-figma/src/views/Script.tsx`

Package stack: React `19`, Vite `8`, Tailwind `4`, TypeScript `5.7`.

Strong design/interaction ideas:

- Editorial stage headers and an explicit content lineage/trace.
- Selectable and editable Insight statements.
- Multiple concept routes with a visual treatment, title, line, and manifesto.
- A screenplay presentation with scene selection, editable action/dialogue/voice-over, and a duration strip.
- Strong language-direction handling at the document level.

Prototype limitations observed in source:

- `content.ts` contains pre-authored bilingual sample content and `initialWork` initializes from those samples.
- Insight completion is driven by a client-side timer and cycles through predefined strings; no active backend HTTP service is present in the inspected flow.
- Navigation includes six views (`brief`, `engines`, `insight`, `concept`, `script`, `output`), while FX2's approved production flow has four primary stages.
- The Output view itself explicitly describes its actions as prototype-only in its copy.

**Decision:** use its editorial treatment, visible reasoning lineage, concept presentation, and screenplay editing patterns. Keep Engines inside the appropriate production context rather than adding a fifth primary stage, and bind all content to real FX2 state instead of the static sample corpus.

### 27.5 `fx-creative-lovable` — useful project-flow reference, not a live AI base

**Source roots:**

- `.../fx-creative-lovable/src/components/fx/Shell.tsx`
- `.../fx-creative-lovable/src/components/fx/Screens.tsx`
- `.../fx-creative-lovable/src/lib/fx/store.tsx`
- `.../fx-creative-lovable/src/lib/fx/generators.ts`
- `.../fx-creative-lovable/src/lib/fx/types.ts`

Package stack: React `19.2`, TanStack Start/Router, Vite `8.1.5`, Tailwind 4, TypeScript `5.8.3`.

Useful patterns include project lists, project continuation, editable output, scene expansion/rewrite controls, Markdown/JSON export, and a compact workspace header.

However, the inspected `store.tsx` saves data to `localStorage`; its `run` helper uses timeouts; and `generators.ts` uses seeded deterministic text pools. Token counts are estimates. The app therefore provides a coherent local prototype flow, not a live AI/backend integration.

**Decision:** take project-history, export, and editing ideas only. Do not use its token meters, generation states, or local generator as evidence of real backend activity.

### 27.6 `fx-director-suite` — useful isolated modules, simulated operations

Package stack: Next `14.2.15`, React `18.3.1`, Tailwind `3.4.14`.

Its README says the main `/brief`, `/strategy`, `/concept`, and `/script` routes are placeholders and that the optional backend is not used by the screens yet. The Engines page uses a timeout and alert for execution. The Governance page seeds static debate messages and advances an illustrative score using a timeout.

**Decision:** do not use this as the base runtime or as evidence of real engine/governance behavior. Only reuse a visual pattern after verifying the component and replacing mock state with actual product state.

### 27.7 `FX-Visual-Foundation-Package` — prior synthesis document and standalone preview

Inspected:

- `FX-Visual-Foundation/DESIGN_DECISIONS_AR.md`
- `FX-Visual-Foundation/FX_VISUAL_FOUNDATION_PREVIEW.html`

The existing synthesis chooses **Cinematic Editorial Workspace** and combines:

- Stitch visual DNA
- Figma Make editorial hierarchy
- v0 workspace/state patterns
- Lovable's unified project flow
- Atelier's production details selectively inside Script

It already argues for four primary stages, responsive desktop/mobile layout, native RTL/LTR, restrained borders, no invented metrics, and no indiscriminate use of cards. It explicitly describes the HTML preview as a standalone visual prototype, not as a working backend-connected app.

Its older preview uses gold/bronze accents (`#D4AF37`, etc.). That accent choice is not the current FX2 direction and must not override the locked red/orange Brief Box decision.

**Decision:** retain its product/UX synthesis, update its accent system to the current FX2 red/orange direction, and keep its prototype status explicit.

### 27.8 Stitch FX 2026 AI Studio Redesign — strongest visual DNA source

Inspected HTML/design sources include:

- `fx_2026_ai_studio_main_dashboard/code.html`
- `fx_2026_cinematic_production_studio/code.html`
- `fx_2026_concept_engine_visual_ideation_studio_app_concept/code.html`
- `fx_2026_creative_inception_lateral_thinking_engine_app_brief/code.html`
- `fx_2026_neural_screenplay_chronos_reborn_app_script/code.html`
- `fx_2026_studio_intelligence/DESIGN.md`

The family exposes a consistent charcoal/red/orange design language. Verified tokens include:

- Canvas/surface around `#131313`, with deeper surface `#0E0E0E`
- Red primary container `#E50914`
- Warm red primary `#FFB4AA`
- Orange secondary container `#D73B00`
- Warm off-white foreground around `#E5E2E1`
- Restrained warm outlines and deep layered surfaces

The Concept Engine source includes controlled red/orange spotlight treatment and `prefers-reduced-motion` handling for its motion classes. The design system describes a cinematic workspace with precision-oriented controls, restrained accents, and responsive behavior.

The files are generated HTML/Tailwind design references with external fonts/assets and no connection to the live FX2 endpoints. They are not a production React implementation and should not be pasted wholesale into the app.

**Decision:** select this family as the primary visual reference set, not as the runtime codebase. Use it to inform the workspace's visual tokens and high-level screen language, while preserving the previously approved Brief Box design exactly.

### 27.9 Atelier / cinematic production references

Atelier and `fx-unified-p7` contain specialized ideas for production metadata, scene lists, camera language, sound, shot details, and timing. These are valuable only where Script has real structured scene data. They should not create a camera/rendering promise across the rest of the product or force a permanent timeline into stages that do not produce timed scenes.

**Decision:** keep production instrumentation contextual to Script and to actual scene fields. No fabricated camera telemetry or render controls.

---

## 28. Comparative decision matrix

| Candidate | Best contribution | Runtime/API fit with active FX2 | Main limitation | Decision |
|---|---|---|---|---|
| Active FX2 frontend | Existing real integration, error handling, browser/agent/metrics panels | **High** | Large App component; older visual language | **Keep as runtime base** |
| `fx-unified-p7` | Service mapping to `/api/insight`, `/api/concept`, `/api/script`; cinematic scene data | **High at route/payload level** | React 19/Vite 8; local fallback; extra Stage 5 | Port patterns selectively |
| `FX-Creative-vo` | Modular reducer/provider, editing/refinement/comparison, cancellation | **Low without adapter** | Different route contract and mock default | UX/state architecture reference |
| Figma Make source | Editorial hierarchy, editable insight/concept/script, screenplay presentation | **Low** | Static sample data and timer-based demo | Editorial/script reference |
| Lovable | Project continuity, local editing, exports | **Low** | Deterministic local generators and localStorage-only persistence | Project-flow reference |
| Director's Suite | Separate Engines/Governance/metrics concepts | **Low** | README placeholders; simulated operations | Select isolated visual elements only |
| FX Visual Foundation | Prior synthesis across design candidates | Not an app runtime | Preview is not connected; older gold palette | Product/UX design specification reference |
| Stitch FX 2026 | Unified red/orange cinematic design system and page references | Not an app runtime | Generated static HTML with external assets | **Primary visual DNA** |
| Atelier | Cinematic production vocabulary and scene-level controls | Not a full pipeline | Specialized production focus | Script-only inspiration |

---

## 29. Active FX2 API contract compatibility findings

### 29.1 Current active frontend/backend pairing

The active frontend directly calls `POST /api/insight`, `POST /api/concept`, and `POST /api/script`. The current backend defines matching handlers for those paths and also exposes `/api/full-pipeline`. The current UI in the inspected `App.tsx` does not use `/api/full-pipeline`; it advances through the three individual calls.

### 29.2 Provider field caveat

The frontend includes `provider` in the request bodies. The inspected backend handlers destructure `brief`, `archetype`, `brandVoice`, and `language` for Insight; `insight`, `archetype`, `brandVoice`, and `language` for Concept; and `concept`, `archetype`, `brandVoice`, and `language` for Script. The provider field is not consumed in those handler destructuring statements.

This is a source-level confirmation of the existing limitation: a provider choice visible in the frontend does not, by itself, establish provider-specific backend routing. This document does not recommend changing that contract in the frontend-only phase.

### 29.3 Integration guidance

- Preserve the working active API calls during UI refactoring.
- Keep request payloads and backend response shapes unchanged in the first frontend extraction.
- Do not copy v0's custom route contract directly.
- Use `fx-unified-p7` only as a reference for mapping the current endpoint responses into stage-specific view models.
- A local mock must be visibly labelled and must never silently replace a failed live request.
- Simulated progress must not be represented as streamed backend progress.
- Any future multi-idea/refinement workflow must first be mapped to currently supported endpoints; do not invent backend capabilities.

---

## 30. Recommended FX2 frontend composition

### 30.1 Single foundation

**Runtime foundation:** the active FX2 React/Vite frontend and its existing API connection.

**Visual foundation:** Stitch FX 2026 AI Studio Redesign, synthesized under the prior Cinematic Editorial Workspace rules, updated to the approved FX2 red/orange accents.

This is a deliberate composition, not a merge of entire codebases.

### 30.2 What to adopt

- A focused, responsive workspace shell that keeps the Brief as the narrative anchor.
- Four and only four primary production stages: Brief, Insight, Concept, Script.
- Modular stage components and a clear state/service seam, inspired by FX-Creative-vo.
- Typed API response mapping and the existing three-route flow, informed by `fx-unified-p7`.
- Editable Insight/Concept content, explicit provenance, comparisons, and controlled refinement patterns where current state can support them.
- A screenplay-first Script workspace with real structured scenes, editable action/dialogue/visual/audio/camera fields, and a duration-aware timeline only when those values actually exist.
- Project continuation and export patterns informed by Lovable/Figma without inheriting their demo generators.
- Browser/Research, Agent/SaaS, and Metrics/Diagnostics remain contextual workspaces; they are not deleted or mixed into the production stages.

### 30.3 What must not be imported

- No replacement of the live FX2 backend with a local generator.
- No silent mock fallback in a live environment.
- No fake progress ticker presented as real model progress.
- No simulated governance scores, agent activity, or provider readiness.
- No additional primary stage for Engines, Camera Simulation, or Output.
- No hard-coded sample Brief/Insight/Concept/Script presented as the user's live result.
- No broad migration from React/Vite to Next.js or TanStack Start solely to copy a prototype.
- No changes to the locked Brief Box design.

---

## 31. Next implementation gate

The next engineering phase, once explicitly authorized, should proceed in this order:

1. Produce a component map from the current `App.tsx` and `styles.css` into stage/shell/context components without changing request payloads.
2. Translate Stitch 2026 visual tokens into the active CSS system, retaining the approved Brief Box as a fixed design constraint.
3. Introduce modular state boundaries around the existing React state; do not replace the current state owner in the first extraction.
4. Build Insight, Concept, and Script views from actual FX2 response fields.
5. Place Browser, Agent/SaaS, and Metrics into separate contextual workspaces while preserving their existing calls and auth boundaries.
6. Run build/typecheck/tests only after explicit approval; report exact commands and results.

### Evidence still required before pixel-level sign-off

- Rendered desktop and mobile captures of the key Stitch 2026 screens and the active FX2 baseline.
- Arabic RTL and English LTR visual comparison.
- Exact review of the two `new2`/`new3` Stitch variants by file/hash and screen capture.
- Local parsing/rendering of the Figma Make MHTML export.

These are visual validation tasks, not evidence that the underlying project source is incomplete.

---

## 32. Decision log — v1.3 addendum

| Date | Finding / decision | Status |
|---|---|---|
| 2026-11-05 | Located `frontend-trials/` source trees in historical commit `eff79feb1c65f8809ffac6ef4bd780b9eb84fb0d`; the later cleanup baseline does not contain that directory. | Verified by Git tree/source reads |
| 2026-11-05 | Active FX2 app uses React 18.3.1 + Vite 5.3.1 and directly calls the current `/api/insight`, `/api/concept`, and `/api/script` endpoints. | Verified source |
| 2026-11-05 | `fx-unified-p7` contains an API adapter using those same three route names and compatible request concepts. | Verified source; no requests executed |
| 2026-11-05 | `FX-Creative-vo` has the strongest modular state/UI architecture but expects a different service contract and defaults to a mock when its API URL is absent. | Verified source |
| 2026-11-05 | Figma Make source is an editorial prototype with hard-coded content and timer-driven demo insight; it is not a live backend integration. | Verified source |
| 2026-11-05 | Lovable source uses deterministic local generation and localStorage; it is a project-flow reference, not a live AI runtime. | Verified source |
| 2026-11-05 | Director's Suite README and inspected pages confirm placeholders/simulated engine and governance interactions. | Verified source |
| 2026-11-05 | Stitch FX 2026 is selected as the primary visual DNA reference; active FX2 remains the runtime foundation. | Engineering recommendation |
| 2026-11-05 | Four-stage production flow remains fixed; scene/timeline instrumentation is restricted to Script and actual structured data. | Product constraint retained |

**Implementation status:** This version adds source-level reverse-engineering findings and a concrete frontend composition recommendation. No source files, dependencies, backend routes, API contracts, tests, branches, commits, or pull requests were changed. No tests or paid AI calls were run. GitHub inspection was read-only; v1.3 is a local documentation deliverable and has not been pushed to the repository.
