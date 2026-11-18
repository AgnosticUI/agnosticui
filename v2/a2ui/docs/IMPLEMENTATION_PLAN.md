# Implementation Tracking Plan: AgnosticUI A2UI v1.0 Refactor

- **Branch:** `master` (Phases 1–6 merged via PR #517)
- **Upstream Ecosystem PRs:**
  - Catalog Showcase PR: `https://github.com`
  - Core `@a2ui/web_core` Keyword Parity PR (Issue #3998): `https://github.com`
- **Architecture Spec:** `v2/a2ui/docs/PRD-A2UI-REFACTOR.md`
- **Session Boot Capsule:** `v2/a2ui/docs/NEXT_PROMPT.md`
- **Overall Status:** Phases 1–6 ✅ (100% Complete) | Phase 7 🔄 (Task 7.1 ✅, Next: Task 7.2) | Phase 8 ⬜
- **Maintenance Rule:** Update both `IMPLEMENTATION_PLAN.md` and `NEXT_PROMPT.md` at the completion of every task before committing the checkpoint.

---

## Table of Contents

- [Phase 1: Scaffold, Mock Harness & Reference Components](#phase-1-scaffold-mock-harness--reference-components)
- [Phase 2: Deterministic AST Codegen & MVP Component Suite](#phase-2-deterministic-ast-codegen--mvp-component-suite)
- [Phase 3: FACE Validation Function, Two-Way Form Specs & 21-Skin Demo](#phase-3-face-validation-function-two-way-form-specs--21-skin-demo)
- [Phase 4: Full Component Catalog, Skill Generation, `v2/sdui` Sweep & VitePress Docs](#phase-4-full-component-catalog-skill-generation-v2sdui-sweep--vitepress-docs)
- [Phase 5: Multi-Framework Renderers, `MessageBubble` Tri-Framework Demos & `a2ui.org` PR](#phase-5-multi-framework-renderers-messagebubble-tri-framework-demos--a2uiorg-pr)
- [Phase 6: Pre-Publish Quality Hardening, npm Release & Official `a2ui-project/a2ui` PR (`v1.0`)](#phase-6-pre-publish-quality-hardening-npm-release--official-a2ui-projecta2ui-pr-v10)
- [Phase 7: Upstream A2UI Core Contributions, Studio v2 ("Wow Factor") & Homepage Positioning](#phase-7-upstream-a2ui-core-contributions-studio-v2-wow-factor--homepage-positioning)
- [Phase 8: 35-Component Catalog Expansion (~65% Coverage)](#phase-8-35-component-catalog-expansion-65-coverage)

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
  * Expanded component generator to 25 curated components (`AgText` + 24 `Ag*`), generated `v2/a2ui/catalog/SKILL.md`, and added CI drift check (`check-codegen.ts`).
* **Task 4.2 — Sweep `v2/sdui` & Migrate VitePress Docs** ✅
  * Created `v2/site/docs/docs/a2ui.md` (A2UI Protocol Version `v1.0`), updated sidebar and setup/installation docs, and retired `v2/sdui/`.

---

## Phase 5: Multi-Framework Renderers, `MessageBubble` Tri-Framework Demos & `a2ui.org` PR

* **Task 5.1 — `@agnosticui/a2ui-react` Renderer Package & Shared Vitest** ✅
  * Created `@agnosticui/a2ui-react` (`<AgA2uiSurface>` + `useA2uiSurface`) with shared Lit/React Vitest deduplication (`v2/a2ui/vitest.shared.mts`).
* **Task 5.2 — Restructure Support Center Demo & Tri-Framework Support** ✅
  * Modularized Support Center demos across `lit/`, `react/`, and `shared/` with 4-turn `AgMessageBubble` threads, `AgEmptyState` boot, collapsible Inspector, and `Evergreen` skin.
* **Task 5.3 — `@agnosticui/a2ui-vue` Renderer Package & Vue 3 Demo** ✅
  * Implemented `@agnosticui/a2ui-vue` (`<AgA2uiSurface>` + `useA2uiSurface`) and matching Vue 3 Support Center demo.

---

## Phase 6: Pre-Publish Quality Hardening, npm Release & Official `a2ui-project/a2ui` PR (`v1.0`) ✅

* **Task 6.1 — Versioned `catalogId` & Static Hosting Sync** ✅
  * Standardized `AGNOSTICUI_CATALOG_ID` to `https://agnosticui.com` and synchronized `agnosticui-catalog.json` and `SKILL.md` across `catalog/`, `renderers/lit/`, and `v2/site/docs/public/a2ui/v1/catalog.json`.
* **Task 6.2 — Port MCP Server Validator & Codebase Audit** ✅
  * Upgraded `v2/mcp-server` `generate_streamed_layout` to validate A2UI `v1.0` wire streams and graphs (`10/10` passing) and purged legacy `v2/sdui` files.
* **Task 6.3 — Comprehensive 25-Component Catalog & Hook Test Suite** ✅
  * Verified all 25 catalog components and two-way `@path` bindings across Lit (`6/6`), React (`3/3`), and Vue (`3/3`) Vitest suites plus demo smoke tests.
* **Task 6.4 — npm Package Metadata & Public Release** ✅
  * Published `@agnosticui/a2ui-lit@2.0.0-alpha.1`, `@agnosticui/a2ui-react@2.0.0-alpha.1`, and `@agnosticui/a2ui-vue@2.0.0-alpha.1` to npm (`alpha` and `latest` dist-tags).
* **Task 6.5 — AgnosticUI PR Merge, VitePress Deployment & Official `a2ui-project/a2ui` PR** ✅
  * Merged PR #517 + multi-framework docs hotfix into `master`, deployed VitePress docs, verified live HTTP `200` endpoints, and opened upstream PR [`a2ui-project/a2ui#4272`](https://github.com).

---

## Phase 7: Upstream A2UI Core Contributions, Studio v2 ("Wow Factor") & Homepage Positioning 🔄

* **Task 7.1 — Permanent `a2ui-project/a2ui` Dev Setup & Upstream Core Bugfix/Docs PRs** ✅
  * **Micro-Chunk 7.1a:** Configured `~/workspace/a2ui` (`origin` -> `roblevintennis/a2ui`, `upstream` -> `a2ui-project/a2ui`), verified `@a2ui/web_core` build/test pipelines, and mapped `schema_loader.ts` JSON Schema-to-Zod conversion.
  * **Micro-Chunk 7.1b:** Implemented JSON Schema Draft 2020-12 keyword parity in `@a2ui/web_core` (`minProperties`, `maxProperties`, `dependentRequired`, conditional `if`/`then`/`else` subschemas, typeless schema constraints, top-level `not`, and `allOf`/`oneOf`/`anyOf` function argument combinators) with 13 new unit tests (`1,660/1,660` passing + Prettier clean), updated `CHANGELOG.md`, and submitted upstream PR [`a2ui-project/a2ui#4285`](https://github.com) (fixing Issue [#3998](https://github.com)).
* **Task 7.2 — Support Center Studio v2 ("Wow Factor") & Public Netlify Hosting** 🔄
  * **Micro-Chunk 7.2a:** Upgrade `v2/a2ui/demos/support-center/shared/` with progressive token/JSONL component streaming (skeleton -> bubble typing -> incremental field arrival) and live `@path` JSON diff highlights in the Inspector drawer. ✅
  * **Micro-Chunk 7.2b:** Add multi-turn agentic round-trips (`a2uiaction` validated payload -> dynamic follow-up A2UI confirmation/next-step surface) so users experience a true stateful agent loop. ✅
  * **Micro-Chunk 7.2c:** Configure and deploy a single canonical public Netlify demo (`Local Compiler` default = `$0` token cost + optional BYOK Gemini key with `MAX_SESSION_CALLS = 5` cap) and link it in `v2/a2ui/README.md` and `v2/site/docs/docs/a2ui.md`. ✅
* **Task 7.3 — Elevate A2UI `v1.0` on the AgnosticUI Homepage (`v2/site/docs/index.md`)** ⬜
  * **Micro-Chunk 7.3a:** Update `v2/site/docs/index.md` so **CLI Local Components** and **A2UI v1.0 Generative UI** lead the core value proposition (positioning schema-enforced A2UI `v1.0` renderers & 22 skins ahead of probabilistic Playbooks) with direct links to `/docs/a2ui` and the live Studio.

---

## Phase 8: 35-Component Catalog Expansion (~65% Coverage) ⬜

* **Task 8.1 — Expand Catalog from 25 to 35 Components** ⬜
  * **Micro-Chunk 8.1a:** Inspect `v2/lib/src/components/*/core/_*.ts` for 10 high-value additions (`AgSlider`, `AgSkeletonLoader`, `AgBreadcrumb`, `AgPagination`, `AgCollapsible`, `AgImage`, `AgKbd`, `AgMark`, `AgToast`, `AgIntlFormatter`), add them to `CATALOG_COMPONENTS` and `TWO_WAY_BINDINGS` (`AgSlider.value`) in `v2/a2ui/catalog/scripts/generate-catalog.ts`, and regenerate `agnosticui-catalog.json` + `SKILL.md`.
  * **Micro-Chunk 8.1b:** Expand `v2/a2ui/renderers/lit/src/catalog.spec.ts` to test all 35 components + `AgSlider` two-way `@path` binding, verify `npm run check` and `v2/mcp-server` tests pass, and bump minor/alpha release if desired.
