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
  * **Micro-Chunk 5.1a:** ✅ Re-exported `A2uiSurface`, `MessageProcessor`, `SurfaceModel`, and `LitComponentApi` from `@agnosticui/a2ui-lit`; created `v2/a2ui/vitest.shared.mts` (`sharedA2uiResolve`) and aligned `renderers/lit/vitest.config.ts` and `renderers/react/vitest.config.ts` with single-instance `lit` & `@lit-labs/signals` deduplication plus package-local `src/test-setup.ts`.
  * **Micro-Chunk 5.1b:** ✅ Implemented `<AgA2uiSurface>` (`@lit/react` + `React.forwardRef` `.surface` sync) and `useA2uiSurface` hook in `v2/a2ui/renderers/react/src/index.tsx`, added Vitest specs in `src/index.spec.tsx` (2/2 passing, `tsc` clean), and added local workflow `README.md` guides to both `renderers/lit` and `renderers/react`.
* **Task 5.2 — Restructure Support Center Demo (`lit/` & `react/`), Design Craft Polish & `AgMessageBubble` Chat Thread** ✅
  * **Micro-Chunk 5.2a:** ✅ Relocated the Lit Support Center demo into `v2/a2ui/demos/support-center/lit/`, extracted shared fixtures (`support-scenarios.ts`), styles (`studio.css`), and compiler (`live-gemini.ts`) into `v2/a2ui/demos/support-center/shared/`, updated `AgCombobox.value` in `codegen.config.ts` to support `DynamicStringSchema` (`@path`), and updated `demos/support-center/README.md`.
  * **Micro-Chunk 5.2b:** ✅ Completed executive UI & motion craft polish: built 4-turn `me -> them -> me -> them` `AgMessageBubble` conversations (`Jordan Taylor • Growth Marketing` + `Campaign Concierge` / `CX Insights Agent`), `AgEmptyState` initial load with `:has(ag-empty-state)` zero-padding framing, 3 mutually-exclusive one-click prompt chips, collapsible `Inspector` drawer (`has-inspector`), `scrollbar-gutter: stable` zero-CLS layout, directional `400–480ms` ease-out quint streaming choreography (`prefers-reduced-motion`-safe), and custom `Evergreen` skin (`shared/evergreen-skin.css`).
  * **Micro-Chunk 5.2c:** ✅ Built the matching React 19 Support Center demo in `v2/a2ui/demos/support-center/react/` consuming `@agnosticui/a2ui-react` (`<AgA2uiSurface>` + `useA2uiSurface` with `model.onAction.subscribe` and React 19 StrictMode-safe `createSurface` handling), `agnosticui-core/*/react` wrappers, and `shared/`.
* **Task 5.3 — `@agnosticui/a2ui-vue` Renderer Package & Vue 3 Support Center Demo** ✅
  * **Micro-Chunk 5.3a:** ✅ Scaffolded and implemented `@agnosticui/a2ui-vue` (`v2/a2ui/renderers/vue/`) with `defineComponent` `<AgA2uiSurface>` wrapper, `useA2uiSurface` composable (`model.onAction.subscribe` + StrictMode/re-stream `createSurface` reset), `README.md`, and Vitest + `@vue/test-utils` specs (2/2 passing, `tsc` clean, packed `.tgz`).
  * **Micro-Chunk 5.3b:** ✅ Built the matching Vue 3 Support Center demo in `v2/a2ui/demos/support-center/vue/` consuming `@agnosticui/a2ui-vue`, `agnosticui-core/*/vue` wrappers, and `shared/`, verified clean with `vue-tsc --noEmit`, `vite build`, and live Vite dev server.

---

## Phase 6: Pre-Publish Quality Hardening, npm Release & Official `a2ui-project/a2ui` PR (`v1.0`) ⬜ *(Planned)*

* **Task 6.1 — Versioned, Resolvable `catalogId` and Static Hosting Sync (VitePress `/public/`)** ⬜
  * **Micro-Chunk 6.1a — Update Catalog ID and Synchronize Generated Artifacts**
    * Update `AGNOSTICUI_CATALOG_ID` in `v2/a2ui/catalog/scripts/generate-catalog.ts` to `'(https://agnosticui.com/a2ui/v1/catalog.json'`.
    * Emit a synchronized copy to:
      * `https://agnosticui.com/v2/site/docs/public/a2ui/v1/catalog.json`
      * `v2/a2ui/renderers/lit/agnosticui-catalog.json`
      * `SKILL.md`
    * Update `check-codegen.ts` to enforce synchronization across all destinations.
    * Sweep `v2/a2ui/` and `v2/site/` for any remaining bare `https://agnosticui.com` strings.
  * **Micro-Chunk 6.1b — Update VitePress Documentation**
    * Update the VitePress documentation page [a2ui.md](https://github.com/AgnosticUI/agnosticui/blob/master/v2/site/docs/docs/a2ui.md) in the repository.
  * **Micro-Chunk 6.1c — Verify Static Site Public File Location**
    * Verify the static site public file location for [catalog.json](https://github.com/AgnosticUI/agnosticui/blob/master/v2/site/docs/public/a2ui/v1/catalog.json) in the repository.
* **Task 6.2 — Comprehensive 25-Component Catalog & Multi-Framework Hook Test Suite** ⬜
  * **Micro-Chunk 6.2a:** Expand `v2/a2ui/renderers/lit/src/catalog.spec.ts` to verify mounting, prop reflection, and `@path` resolution across all 25 catalog components (`AgText` + 24 `Ag*` wrappers), plus two-way `@path` binding specs on `AgInput`, `AgCheckbox`, `AgToggle`, `AgSelect`, `AgCombobox`, `AgRadio`, and `AgRating`.
  * **Micro-Chunk 6.2b:** Expand `v2/a2ui/renderers/react/src/index.spec.tsx` and `v2/a2ui/renderers/vue/src/index.spec.ts` to cover `streamMessages`, `resetSurface`, `getDataModel`, and `deleteSurface` / `onSurfaceDeleted` lifecycle cleanup.
  * **Micro-Chunk 6.2c:** Add automated end-to-end smoke checks across `v2/a2ui/demos/support-center/{lit,react,vue}` verifying clean boot, prompt chip streaming, FACE validation, and multi-turn action confirmation.
* **Task 6.3 — npm Package Metadata Hygiene, Tarball Audit & Public Release (`@agnosticui/a2ui-{lit,react,vue}`)** ⬜
  * **Micro-Chunk 6.3a:** Add `"license": "MIT"`, `"repository"`, `"homepage"`, `"keywords": ["a2ui", "a2ui-v1", "agnosticui", ...]`, `"files"` whitelists, and `"./catalog.json"` / `"./SKILL.md"` exports to `v2/a2ui/renderers/{lit,react,vue}/package.json`. Swap `devDependencies` `"file:..."` tarball references (`agnosticui-core`, `@agnosticui/a2ui-lit`) to published semver ranges (`^2.0.0-alpha.31`, `^2.0.0-alpha.1`) prior to release, verify exact tarball contents with `npm pack --dry-run`, and publish `@agnosticui/a2ui-{lit,react,vue}` to npm (`--access public`).
* **Task 6.4 — Official `a2ui-project/a2ui` Ecosystem PR (`v1.0`)** ⬜
  * **Micro-Chunk 6.4a:** Fork `a2ui-project/a2ui`, register AgnosticUI (`v1.0`) in the official community catalogs/renderers directory referencing `@agnosticui/a2ui-{lit,react,vue}` and `https://agnosticui.com`, and open the upstream PR.
