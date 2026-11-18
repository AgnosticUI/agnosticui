# Implementation Tracking Plan: AgnosticUI A2UI v1.0 Refactor

- **Branch:** `master` (Phases 1–6 merged via PR #517)
- **Architecture Spec:** `v2/a2ui/docs/PRD-A2UI-REFACTOR.md`
- **Session Boot Capsule:** `v2/a2ui/docs/NEXT_PROMPT.md`
- **Overall Status:** Phases 1–9 ✅ (35-Component Catalog Live on npm `2.0.0-alpha.2` & Studio v2.1 Upgraded) | Phase 10 📋 (Planned)
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

## File Generation & Output Integrity Rule (STRICT)

1. **Full-File Output Only:** Whenever modifying or generating a file, you MUST output the **entire, complete, copy-pasteable file** from line 1 to EOF with all new integrations, types, and logic cleanly injected.
2. **Zero Truncation / Zero Placeholders:** You are strictly forbidden from using lazy ellipsis comments or placeholders such as `// ... existing code ...`, `/* rest of file */`, `# unchanged`, or `...`. Every line of the target file must be present and syntactically valid.
3. **Chunking Large Files (Widget Escape Prevention):** If a complete file exceeds ~300 lines (or risks truncating/escaping the markdown code block), split the output sequentially into clearly labeled, contiguous parts (e.g., **Part 1 of 2: Lines 1–250**, **Part 2 of 2: Lines 251–EOF**). Each part MUST be wrapped in its own self-contained fenced code block (with language tag) so it renders a clean Copy-to-Clipboard button, with zero overlap or omitted lines between parts.
4. **Narrow Exceptions:** You may omit the rest of the file **only** when:
   - Appending 1–3 standalone test specs (`it(...)` / `test(...)`) strictly to the very bottom of an existing test file, **OR**
   - Adding 1–3 top-level `import` statements strictly to the very top of a file.
   - In both exception cases, state the exact anchor line (e.g., *"Append after the final `});` at EOF"* or *"Insert after line 4"*).

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

## Phase 7: Upstream A2UI Core Contributions, Studio v2 ("Wow Factor") & Homepage Positioning ✅

* **Task 7.1 — Permanent `a2ui-project/a2ui` Dev Setup & Upstream Core Bugfix/Docs PRs** ✅
  * **Micro-Chunk 7.1a:** Configured `~/workspace/a2ui` (`origin` -> `roblevintennis/a2ui`, `upstream` -> `a2ui-project/a2ui`), verified `@a2ui/web_core` build/test pipelines, and mapped `schema_loader.ts` JSON Schema-to-Zod conversion.
  * **Micro-Chunk 7.1b:** Implemented JSON Schema Draft 2020-12 keyword parity in `@a2ui/web_core` (`minProperties`, `maxProperties`, `dependentRequired`, conditional `if`/`then`/`else` subschemas, typeless schema constraints, top-level `not`, and `allOf`/`oneOf`/`anyOf` function argument combinators) with 13 new unit tests (`1,660/1,660` passing + Prettier clean), updated `CHANGELOG.md`, and submitted upstream PR [`a2ui-project/a2ui#4285`](https://github.com) (fixing Issue [#3998](https://github.com)).
* **Task 7.2 — Support Center Studio v2 ("Wow Factor") & Public Netlify Hosting** ✅
  * **Micro-Chunk 7.2a:** Upgrade `v2/a2ui/demos/support-center/shared/` with progressive token/JSONL component streaming (skeleton -> bubble typing -> incremental field arrival) and live `@path` JSON diff highlights in the Inspector drawer.
  * **Micro-Chunk 7.2b:** Add multi-turn agentic round-trips (`a2uiaction` validated payload -> dynamic follow-up A2UI confirmation/next-step surface) so users experience a true stateful agent loop.
  * **Micro-Chunk 7.2c:** Configure and deploy a single canonical public Netlify demo (`Local Compiler` default = `$0` token cost + optional BYOK Gemini key with `MAX_SESSION_CALLS = 5` cap) and link it in `v2/a2ui/README.md` and `v2/site/docs/docs/a2ui.md`.
* **Task 7.3 — Elevate A2UI `v1.0` on the AgnosticUI Homepage & Sidebar Navigation**✅
  * **Micro-Chunk 7.3a:** Update `v2/site/docs/index.md` so **CLI Local Components** and **A2UI v1.0 Generative UI** lead the core value proposition (positioning schema-enforced A2UI `v1.0` renderers & 22 skins ahead of probabilistic Playbooks) with direct links to `/docs/a2ui` and the live Studio. ✅
  * **Micro-Chunk 7.3b:** Elevate A2UI `v1.0` in the VitePress left sidebar navigation (`v2/site/docs/.vitepress/config.mts`). Move `{ text: 'Generative UI (A2UI)', link: '/docs/a2ui' }` out from the bottom of the Documentation section into its own top-level `A2UI v1.0` sidebar group positioned directly above `AI Playbooks`. Also, move `getComponents()` above `AI Playbooks. ✅

---

## Phase 8: 35-Component Catalog Expansion (~65% Coverage) ✅

* **Task 8.1 — Expand Catalog from 25 to 35 Components** ✅
  * **Micro-Chunk 8.1a:** Inspected `v2/lib/src/components/*/core/_*.ts` for 10 new additions (`AgSlider`, `AgSkeletonLoader`, `AgBreadcrumb`, `AgPagination`, `AgIcon`, `AgImage`, `AgLink`, `AgKbd`, `AgMark`, `AgIntlFormatter`), configured complex prop overrides (`AgSlider.value`, `AgBreadcrumb.items`, `AgImage.sources`, `AgIntlFormatter.value`) and `AgIcon` slot rendering in `codegen.config.ts`, registered `AgSlider` in `TWO_WAY_BINDINGS` in `generate-catalog.ts`, and regenerated synchronized `agnosticui-catalog.json` + `SKILL.md`.
  * **Micro-Chunk 8.1b:** Expanded `v2/a2ui/renderers/lit/src/catalog.spec.ts` with count-agnostic assertions covering all 35 catalog components + `AgSlider` two-way `@path` binding across all 8 interactive controls, and verified Lit (`test`/`typecheck`/`build`), React, Vue, and `v2/mcp-server` test suites pass.

---

## Phase 9: Studio Streaming & 35-Component Showcase Polish ✅

* **Task 9.1 — Sequential DataModel Streaming, `<ag-skeleton-loader>` Shimmers & Replay Pacing** ✅
  * **Micro-Chunk 9.1a:** Updated `expandToGranularStream()` in `v2/a2ui/demos/support-center/shared/stream-player.ts` to expand root `updateDataModel` (`path: "/"`) payloads into sequential leaf `@path` envelopes so the Live DataModel inspector highlights keys arriving in real time; added unit tests in `stream-player.spec.ts`.
  * **Micro-Chunk 9.1b:** Replaced raw shimmer divs in `v2/a2ui/demos/support-center/lit/src/main.ts` with `<ag-skeleton-loader>` elements and added a `1x Stream / 0.5x Slow-Mo` + `Replay` control in the Agent Prompt Composer bar.
* **Task 9.2 — 4th Quick-Prompt Chip: "Enterprise SLA & Credit Cap"** ✅
  * **Micro-Chunk 9.2a:** Added the 4th chip to `QUICK_PROMPT_CHIPS` in `support-scenarios.ts` and implemented `buildSlaCreditCapSurface()` in `live-gemini.ts` showcasing `AgBreadcrumb`, two-way bound `AgSlider` (`@path: "/policy/maxCredit"`), live reactive `AgIntlFormatter` (`type="currency"`), and `AgMark`.
  * **Micro-Chunk 9.2b:** Expanded `v2/a2ui/renderers/lit/src/demos-smoke.spec.ts` to cover all 4 quick prompt chips and verified `AgSlider` two-way `@path` updates propagate live to `/policy/maxCredit`.
* **Task 9.3 — Composer Micro-Polish (`AgKbd` Shortcut & Copy A2UI JSONL)** ✅
  * **Micro-Chunk 9.3a:** Added `<ag-kbd>⌘ Enter</ag-kbd>` keyboard submission on `#live-prompt-input` and a one-click **Copy JSONL** button in the Live DataModel inspector header.

---

## Phase 10: Multi-Page Surface Flows, Turn-3 Audit & 45-Component Catalog Expansion 📋

* **Task 10.1 — Stateful Multi-Page Queue Drill-Down (`AgBreadcrumb` + `AgPagination`)**
  * Upgrade the *"High-Intent Caller Spike"* scenario to render an interactive caller queue with `AgPagination` at the bottom and `AgBreadcrumb` at the top, dispatching A2UI `action` events that page through callers inside `<a2ui-surface>`.
* **Task 10.2 — Enriched Turn-3 Verification Audit (`AgTimeline` + `AgIntlFormatter` + `AgLink`)**
  * Enhance `buildTurnThreeComponents()` in `agent-roundtrip.ts` to display a timestamped `AgTimeline` audit trail formatted with `AgIntlFormatter` and a trace `AgLink`.
* **Task 10.3 — Expand A2UI v1.0 Catalog to ~45 Components (~80% Coverage)**
  * Port 10 additional AgnosticUI v2 components (`Loader`, `Tooltip`, `Popover`, `Drawer`, `Dialog`, `ButtonGroup`, `InputNumber`, `Textarea`, `CopyButton`, `AspectRatio`) into `generate-catalog.ts`, regenerate `agnosticui-catalog.json` + `SKILL.md`, and publish `2.0.0-alpha.3`.

---

## Side Track: Runtime Skin Curation (Over-Generate 45 -> Curate Best 21) 🎨

* **Goal:** Replace underperforming themes in `v2/skins/` by generating 40–50 cohesive `--ag-*` token palettes (testing light & dark contrast ratios, surface elevation, and accent harmony inside the live Studio) and curating the strongest 21 skins to keep in `skins-bundle.css`.
