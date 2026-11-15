# Implementation Tracking Plan: AgnosticUI A2UI v1.0 Refactor

- **Branch:** `A2UI-experiment`
- **Architecture Spec:** `v2/a2ui/docs/PRD-A2UI-REFACTOR.md`
- **Session Boot Capsule:** `v2/a2ui/docs/NEXT_PROMPT.md`
- **Overall Status:** Phase 1 ✅ | Phase 2 ✅ | Phase 3 ✅ | Phase 4 ✅ | Phase 5 ⏳ (Task 5.1 ✅, Next: Task 5.2)
- **Maintenance Rule:** Update both `IMPLEMENTATION_PLAN.md` and `NEXT_PROMPT.md` at the completion of every task before committing the checkpoint.

---

## Table of Contents

- [Phase 1: Scaffold, Mock Harness & Reference Components](#phase-1-scaffold-mock-harness--reference-components)
- [Phase 2: Deterministic AST Codegen & MVP Component Suite](#phase-2-deterministic-ast-codegen--mvp-component-suite)
- [Phase 3: FACE Validation Function, Two-Way Form Specs & 21-Skin Demo](#phase-3-face-validation-function-two-way-form-specs--21-skin-demo)
- [Phase 4: Full Component Catalog, Skill Generation, `v2/sdui` Sweep & VitePress Docs](#phase-4-full-component-catalog-skill-generation-v2sdui-sweep--vitepress-docs)
- [Phase 5: Multi-Framework Renderers, `MessageBubble` Tri-Framework Demos & `a2ui.org` PR](#phase-5-multi-framework-renderers-messagebubble-tri-framework-demos--a2uiorg-pr)

---

## Phase 1: Scaffold, Mock Harness & Reference Components

* **Task 1.1 — Workspace Scaffold & Dependency Alignment** ✅
  * **Micro-Chunk 1.1a:** Created `v2/a2ui/renderers/lit/package.json` pinned to `@a2ui/lit@0.15.0`, `@a2ui/web_core@0.15.0`, and `zod@^3.25.76`.
  * **Micro-Chunk 1.1b:** Configured `v2/a2ui/renderers/lit/vitest.config.ts` with `jsdom` and `resolve.dedupe` for `lit` and `zod`.
* **Task 1.2 — Zero-LLM Mock Stream Harness & Surface Proof** ✅
  * **Micro-Chunk 1.2a:** Implemented `v2/a2ui/renderers/lit/src/harness/mock-stream.ts` (`createMockA2uiStream`).
  * **Micro-Chunk 1.2b:** Verified `<a2ui-surface>` Light-DOM rendering with `MessageProcessor` in `v2/a2ui/renderers/lit/src/catalog.spec.ts`.

---

## Phase 2: Deterministic AST Codegen & MVP Component Suite

* **Task 2.1 — `ts-morph` Catalog & Wrapper Generator** ✅
  * **Micro-Chunk 2.1a:** Ported `v2/sdui/schema/scripts/codegen.config.ts` to `v2/a2ui/catalog/scripts/codegen.config.ts`.
  * **Micro-Chunk 2.1b:** Built `v2/a2ui/catalog/scripts/generate-catalog.ts` emitting `AgText` + initial MVP `Ag*` wrappers with `ifDefined` reflected prop guards and two-way `setValue`/`setChecked` handlers.
* **Task 2.2 — A2UI v1.0 JSON Schema Emission & Build Verification** ✅
  * **Micro-Chunk 2.2a:** Generated `v2/a2ui/catalog/agnosticui-catalog.json` via `AgnosticUICatalog.toJson()`.
  * **Micro-Chunk 2.2b:** Verified `npm run generate`, `npm test`, and `npm run build` pass with zero errors and committed checkpoint on `A2UI-experiment`.

---

## Phase 3: FACE Validation Function, Two-Way Form Specs & 21-Skin Demo

* **Task 3.1 — Custom Client Function `validateSurface` & Form Binding Specs** ✅
  * **Micro-Chunk 3.1a:** Inspected `@a2ui/web_core` `FunctionImplementation` contract and `v2/sdui/renderers/lit/src/test-setup.ts`.
  * **Micro-Chunk 3.1b:** Implemented `v2/a2ui/renderers/lit/src/functions/validate-surface.ts` (`AG_FACE_SELECTOR` + `reportValidity()`), added JSDOM `attachInternals` shim in `src/test-setup.ts`, and registered `ValidateSurfaceImplementation` in `generate-catalog.ts` / `catalog.ts`.
  * **Micro-Chunk 3.1c:** Added Vitest specs in `v2/a2ui/renderers/lit/src/catalog.spec.ts` verifying two-way `@path` updates (`AgInput`, `AgCheckbox`) and `validateSurface` pass/fail behavior (3/3 passing, `tsc` clean, committed).
* **Task 3.2 — 21-Skin Support Center Offline Demo** ✅
  * **Micro-Chunk 3.2a:** Inspected `v2/skins/skin-switcher-core.js` and `v2/sdui/demo-support-center/`.
  * **Micro-Chunk 3.2b:** Scaffolded `v2/a2ui/demos/support-center/` (`package.json`, `tsconfig.json`, `vite.config.ts`, `README.md`, and A2UI v1.0 Support Center fixtures).
  * **Micro-Chunk 3.2c:** Built declarative Lit `<ag-a2ui-studio>` (`src/main.ts`, `src/studio.css`) with `agnosticui-core/styles/tokens.css`, `tokens-dark.css`, `v2/skins/skins-bundle.css`, 21 `<ag-button>` skin pills, live `DataModel` JSON inspector (`dataModel.get('')`), FACE validation, and native DOM Lucide `CircleSlash2` `<ag-icon-button>` clear log control.
* **Task 3.3 — Local & Cloud Prompt Compiler + Responsive Studio Layout** ✅
  * **Micro-Chunk 3.3a:** Created `v2/a2ui/demos/support-center/src/live-gemini.ts` with deterministic local A2UI v1.0 prompt compiler (`generateLocalA2uiSurface`) + optional `gemini-3.8-flash` REST compiler (`x-goog-api-key` header auth, `thinkingConfig: { thinkingBudget: 0 }`, `AbortSignal.timeout(15000)`, UAX #31 ID validation, and `MAX_SESSION_CALLS = 5`).
  * **Micro-Chunk 3.3b:** Added `<ag-radio>` Local/Live mode toggle, 3 -> 2 -> 1 column responsive breakpoints in `src/studio.css`, and inline `<ag-alert>` diagnostics in `src/main.ts`.

---

## Phase 4: Full Component Catalog, Skill Generation, `v2/sdui` Sweep & VitePress Docs

* **Task 4.1 — Expand Catalog (25 Components incl. `MessageBubble`, `Combobox`, `Rating`), Emit `SKILL.md` & Add CI Drift Check** ✅
  * **Micro-Chunk 4.1a:** Expanded `v2/a2ui/catalog/scripts/generate-catalog.ts` (`CATALOG_COMPONENTS`) to 25 curated components (`AgText` + 24 `Ag*` components including `AgCombobox`, `AgMessageBubble`, `AgRating`, `AgTimeline`, `AgProgress`, `AgProgressRing`, `AgSpinner`, `AgEmptyState`, `AgAccordion`, `AgToggle`) with two-way `@path` bindings and guarded optional `action` invocations; verified `npm run generate`, `vitest run` (3/3 passing), and `tsc` clean.
  * **Micro-Chunk 4.1b:** Added `generateSkillMarkdown()` emitting `v2/a2ui/catalog/SKILL.md`, created `v2/a2ui/catalog/scripts/check-codegen.ts` CI drift check, and configured `v2/a2ui/catalog/tsconfig.json`.
* **Task 4.2 — Sweep `v2/sdui` & `v2/cli`, Migrate VitePress Docs (`/docs/a2ui`) & Retire `v2/sdui`** ✅
  * **Micro-Chunk 4.2a:** Audited `v2/sdui/`, `v2/cli/`, and `v2/site/` (`sdui.json` playbook intent preserved; `PUBLISH.md` archived to `v2/a2ui/docs/PUBLISH.md`).
  * **Micro-Chunk 4.2b:** Created `v2/site/docs/docs/a2ui.md` (explicitly stating A2UI Protocol Version `v1.0`), updated `v2/site/docs/installation.md` and `v2/site/docs/docs/setup.md`, updated VitePress sidebar (`Generative UI` -> `/docs/a2ui`), removed `v2/site/docs/docs/sdui.md`, and retired `v2/sdui/`.

---

## Phase 5: Multi-Framework Renderers, `MessageBubble` Tri-Framework Demos & `a2ui.org` PR

* **Task 5.1 — `@agnosticui/a2ui-react` Renderer Package, Shared Vitest Deduplication & Dev READMEs** ✅
  * **Micro-Chunk 5.1a:** Re-exported `A2uiSurface`, `MessageProcessor`, `SurfaceModel`, and `LitComponentApi` from `@agnosticui/a2ui-lit`; created `v2/a2ui/vitest.shared.mts` (`sharedA2uiResolve`) and aligned `renderers/lit/vitest.config.ts` and `renderers/react/vitest.config.ts` with single-instance `lit` & `@lit-labs/signals` deduplication plus package-local `src/test-setup.ts`.
  * **Micro-Chunk 5.1b:** Implemented `<AgA2uiSurface>` (`@lit/react` + `React.forwardRef` `.surface` sync) and `useA2uiSurface` hook in `v2/a2ui/renderers/react/src/index.tsx`, added Vitest specs in `src/index.spec.tsx` (2/2 passing, `tsc` clean), and added local workflow `README.md` guides to both `renderers/lit` and `renderers/react`.
* **Task 5.2 — Restructure Support Center Demo (`lit/` & `react/`), Design Craft Polish & `AgMessageBubble` Chat Thread** ⏳ *(Next)*
  * **Micro-Chunk 5.2a:** Relocate the existing Lit Support Center demo into `v2/a2ui/demos/support-center/lit/`, extract shared fixtures (`support-scenarios.ts`), styles (`studio.css`), and compiler (`live-gemini.ts`) into `v2/a2ui/demos/support-center/shared/`, and verify `(cd v2/a2ui/demos/support-center/lit && npm run build)` passes cleanly.
  * **Micro-Chunk 5.2b:** Add Design Craft & Motion Polish (`shared/`): elevate conversational agentic UX using `AgMessageBubble` + `AgCombobox` / `AgTimeline` scenarios, add smooth `prefers-reduced-motion`-safe streaming entrance transitions, refine spacing/typography/elevation in `shared/studio.css`, and add a temporary `Invoca Brand` skin (`shared/invoca-skin.css`) tailored to Invoca's visual identity for executive design review.
  * **Micro-Chunk 5.2c:** Build the matching React 19 Support Center demo in `v2/a2ui/demos/support-center/react/` consuming `@agnosticui/a2ui-react` (`<AgA2uiSurface>` + `useA2uiSurface`) and `shared/`.
* **Task 5.3 — `@agnosticui/a2ui-vue` Renderer Package & Vue Support Center Demo (`vue/`)** ⬜
  * **Micro-Chunk 5.3a:** Scaffold and implement `v2/a2ui/renderers/vue` (`@agnosticui/a2ui-vue` with `<AgA2uiSurface>`, `useA2uiSurface()`, `README.md`, and Vitest specs).
  * **Micro-Chunk 5.3b:** Build the matching Vue 3 Support Center demo in `v2/a2ui/demos/support-center/vue/` consuming `@agnosticui/a2ui-vue` and `shared/`.
* **Task 5.4 — npm Publish & Official `a2ui.org` Ecosystem Listing PR** ⬜
  * **Micro-Chunk 5.4a:** Publish `@agnosticui/a2ui-lit`, `@agnosticui/a2ui-react`, and `@agnosticui/a2ui-vue` (with `agnosticui-catalog.json` and `SKILL.md`) to npm.
  * **Micro-Chunk 5.4b:** Fork `a2ui-project/a2ui`, sign the Google CLA, and open the PR adding AgnosticUI (`v1.0`, Lit/React/Vue) to `docs/site/src/content/docs/ecosystem/renderers.mdx`.
