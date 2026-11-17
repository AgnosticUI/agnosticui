# Implementation Tracking Plan: AgnosticUI A2UI v1.0 Refactor

- **Branch:** `master` (merged via PR #517)
- **Upstream Ecosystem PR:** `https://github.com/a2ui-project/a2ui/pull/4272`
- **Architecture Spec:** `v2/a2ui/docs/PRD-A2UI-REFACTOR.md`
- **Session Boot Capsule:** `v2/a2ui/docs/NEXT_PROMPT.md`
- **Overall Status:** Phase 1 ✅ | Phase 2 ✅ | Phase 3 ✅ | Phase 4 ✅ | Phase 5 ✅ | Phase 6 ✅ (100% Complete)
- **Maintenance Rule:** Update both `IMPLEMENTATION_PLAN.md` and `NEXT_PROMPT.md` at the completion of every task before committing the checkpoint.

---

## Table of Contents

- [Phase 1: Scaffold, Mock Harness & Reference Components](#phase-1-scaffold-mock-harness--reference-components)
- [Phase 2: Deterministic AST Codegen & MVP Component Suite](#phase-2-deterministic-ast-codegen--mvp-component-suite)
- [Phase 3: FACE Validation Function, Two-Way Form Specs & 21-Skin Demo](#phase-3-face-validation-function-two-way-form-specs--21-skin-demo)
- [Phase 4: Full Component Catalog, Skill Generation, `v2/sdui` Sweep & VitePress Docs](#phase-4-full-component-catalog-skill-generation-v2sdui-sweep--vitepress-docs)
- [Phase 5: Multi-Framework Renderers, `MessageBubble` Tri-Framework Demos & `a2ui.org` PR](#phase-5-multi-framework-renderers-messagebubble-tri-framework-demos--a2uiorg-pr)
- [Phase 6: Pre-Publish Quality Hardening, npm Release & Official `a2ui-project/a2ui` PR (`v1.0`)](#phase-6-pre-publish-quality-hardening-npm-release--official-a2ui-projecta2ui-pr-v10)

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
  * **Micro-Chunk 2.2b:** Verified `npm run generate`, `npm test`, and `npm run build` pass with zero errors and committed checkpoint.

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

* **Task 4.1 — Expand Catalog (25 Components) & Emit `SKILL.md`** ✅
  * Expanded component generator to 25 curated components (including `AgCombobox`, `AgMessageBubble`, `AgRating`, and more), generated `v2/a2ui/catalog/SKILL.md`, and added CI drift checking.
* **Task 4.2 — Sweep `v2/sdui` & Migrate VitePress Docs** ✅
  * Audited legacy `v2/sdui` components, created A2UI v1.0 documentation in `v2/site/docs/docs/a2ui.md`, updated sidebar navigation, and retired `v2/sdui`.

---

## Phase 5: Multi-Framework Renderers, `MessageBubble` Tri-Framework Demos & `a2ui.org` PR

* **Task 5.1 — `@agnosticui/a2ui-react` Renderer Package & Shared Vitest** ✅
  * Created `@agnosticui/a2ui-react` with `AgA2uiSurface` and `useA2uiSurface`, configuring shared Vitest deduplication for Lit and React.
* **Task 5.2 — Restructure Support Center Demo & Tri-Framework Support** ✅
  * Modularized Support Center demos across Lit, React 19, and Vue 3 with shared fixtures, custom UI motion, and 4-turn `AgMessageBubble` conversational threads.
* **Task 5.3 — `@agnosticui/a2ui-vue` Renderer Package & Vue 3 Demo** ✅
  * Implemented `@agnosticui/a2ui-vue` with Vue composition hooks, Vitest specs, and a matching Vue 3 Support Center demo.

---

## Phase 6: Pre-Publish Quality Hardening, npm Release & Official `a2ui-project/a2ui` PR (`v1.0`) ✅

* **Task 6.1 — Versioned `catalogId` & Static Hosting Sync** ✅
  * Standardized `AGNOSTICUI_CATALOG_ID` to `https://agnosticui.com` and synchronized static catalog JSON and `SKILL.md` assets across public documentation paths.
* **Task 6.2 — Port MCP Server Validator & Codebase Audit** ✅
  * Upgraded `v2/mcp-server` stream validation for A2UI v1.0 wire streams and purged legacy code.
* **Task 6.3 — Comprehensive 25-Component Catalog & Hook Test Suite** ✅
  * Verified all 25 catalog components and two-way binding specs across Lit, React, and Vue test suites.
* **Task 6.4 — npm Package Metadata & Public Release** ✅
  * Configured package exports, dependency ranges, and published `@agnosticui/a2ui-lit`, `@agnosticui/a2ui-react`, and `@agnosticui/a2ui-vue` (`2.0.0-alpha.1`) to npm.
* **Task 6.5 — AgnosticUI PR Merge, VitePress Deployment & Official `a2ui-project/a2ui` PR** ✅
  * Merged upstream documentation hotfixes, deployed VitePress docs, and opened official PR [`a2ui-project/a2ui#4272`](https://github.com/a2ui-project/a2ui/pull/4272).
