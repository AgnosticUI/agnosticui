================================================================================
       AGNOSTICUI-A2UI : Chronological Session Continuity Bridge Capsule              
================================================================================
 TIMESTAMP BASELINE : 2026-11-17T03:50:00Z (Anchored to Monday, Nov 16, 2026 — 9:50 PM CST)
 ACTIVE WORKSPACE   : Phase 6 Task 6.4 (Micro-Chunk 6.4a: npm Package Metadata Hygiene, Tarball Audit & Public Release of `@agnosticui/a2ui-{lit,react,vue}`)
 STRATEGIC PIVOT    :
   - Positioning: "Spec-compliant A2UI v1.0 Component Catalog & Multi-Framework Web Renderer suite (`@agnosticui/a2ui-lit`, `@agnosticui/a2ui-react`, `@agnosticui/a2ui-vue`) bringing AgnosticUI's 22 runtime skins and FACE form validation to conversational generative UI surfaces."
   - Core Architecture: `v2/a2ui/catalog` (ts-morph AST codegen -> 25 components in `agnosticui-catalog.json` + `SKILL.md` + `check-codegen.ts` synced across `catalog/`, `renderers/lit/`, and `v2/site/docs/public/a2ui/v1/catalog.json`), `v2/a2ui/renderers/{lit,react,vue}`, `v2/a2ui/demos/support-center/{shared,lit,react,vue}` (Conversational `AgMessageBubble` Support Center Studio with tactile motion, Evergreen skin, collapsible Inspector drawer, and 22 runtime skins), `v2/mcp-server` (A2UI `v1.0` pre-flight wire stream & graph validator).
   - Primary Entrypoints (All 3 Demo-Ready):
       * Lit Demo:   `(cd v2/a2ui/demos/support-center/lit && npm run typecheck && npm run build && npm run dev)`
       * React Demo: `(cd v2/a2ui/demos/support-center/react && npm run typecheck && npm run build && npm run dev)`
       * Vue Demo:   `(cd v2/a2ui/demos/support-center/vue && npm run typecheck && npm run build && npm run dev)`

 COMPLETED PHASES   :
   - Phase 1 (Milestone 1 — 100% Complete & Passing):
       * Task 1.1: `v2/a2ui/renderers/lit/package.json` & `vitest.config.ts` (Pinned `zod@^3.25.76` and configured Vite `resolve.dedupe` for `lit` and `zod` under `jsdom`).
       * Task 1.2: `v2/a2ui/renderers/lit/src/harness/mock-stream.ts` (Zero-LLM async generator `createMockA2uiStream` emitting A2UI v1.0 wire fixtures).
   - Phase 2 (Milestone 2 — 100% Complete & Passing):
       * Task 2.1: `v2/a2ui/catalog/scripts/generate-catalog.ts` & `codegen.config.ts` (Deterministic `ts-morph` AST codegen reading `v2/lib/src/components/*/core/_*.ts` to emit `AgText` + `Ag*` wrappers with `ifDefined` reflected prop guards and two-way `@path` handlers, plus `agnosticui-catalog.json` via `AgnosticUICatalog.toJson()`).
       * Task 2.2: `v2/a2ui/renderers/lit/src/catalog.ts` & `src/catalog.spec.ts` (Explicit `'1.0'` catalog registration via `registerUniversalElement` and Light-DOM `<a2ui-surface>` rendering verified green in Vitest + `tsc`).
   - Phase 3 (Milestone 3 — 100% Complete & Passing):
       * Task 3.1: `v2/a2ui/renderers/lit/src/functions/validate-surface.ts`, `src/test-setup.ts`, & `src/catalog.spec.ts` (Implemented `validateSurface` client function using `AG_FACE_SELECTOR` + `reportValidity()`, shimmed `attachInternals` for JSDOM, and verified two-way `@path` binding + FACE validation across Vitest suites).
       * Task 3.2 & 3.3: Built Support Center studio with 21+ runtime skins, Light/Dark toggle, FACE validation, and Local vs. Live Gemini 3.8 Flash prompt compiler.
   - Phase 4 (Milestone 4 — 100% Complete & Passing):
       * Task 4.1: Expanded `v2/a2ui/catalog/scripts/generate-catalog.ts` to 25 curated components (`AgText` + 24 `Ag*` components including `AgCombobox`, `AgMessageBubble`, `AgRating`, `AgTimeline`, `AgProgress`, `AgProgressRing`, `AgSpinner`, `AgEmptyState`, `AgAccordion`, `AgToggle`), emitted `v2/a2ui/catalog/SKILL.md`, and added `v2/a2ui/catalog/scripts/check-codegen.ts` CI drift check.
       * Task 4.2: Swept `v2/sdui`, `v2/cli`, and `v2/site`; migrated VitePress docs to `v2/site/docs/docs/a2ui.md` (A2UI Protocol Version `v1.0`), updated `installation.md`, `setup.md`, and `.vitepress/config.mts`, preserved `PUBLISH.md` in `v2/a2ui/docs/PUBLISH.md`, and retired `v2/sdui/`.
   - Phase 5 (Milestone 5 — 100% Complete & Demo-Ready across Lit, React 19 & Vue 3):
       * Task 5.1: Built `@agnosticui/a2ui-react` (`v2/a2ui/renderers/react/`) wrapping `<a2ui-surface>` via `@lit/react` + `React.forwardRef` (`<AgA2uiSurface>`) and `useA2uiSurface()` hook with automatic FACE validation, extracted `v2/a2ui/vitest.shared.mts` (`sharedA2uiResolve`), and added workflow `README.md` guides.
       * Task 5.2: Relocated Lit demo to `v2/a2ui/demos/support-center/lit/`, extracted `shared/` (`support-scenarios.ts`, `studio.css`, `live-gemini.ts`, `evergreen-skin.css`), enabled `DynamicStringSchema` on `AgCombobox.value`, wired A2UI v1.0 `processor.model.onAction.subscribe(...)` for 4-turn `me -> them -> me -> them` `AgMessageBubble` conversations (`Jordan Taylor • Growth Marketing` + `Campaign Concierge`), added `AgEmptyState` idle boot with `:has(ag-empty-state)` zero-padding styling, collapsible `Inspector` drawer, `scrollbar-gutter: stable` zero-CLS layout, directional `400-480ms` ease-out quint motion, custom `Evergreen` skin, and built the matching React 19 Support Center Studio (`v2/a2ui/demos/support-center/react/`) with StrictMode-safe `createSurface` handling in `@agnosticui/a2ui-react`.
       * Task 5.3: Built `@agnosticui/a2ui-vue` (`v2/a2ui/renderers/vue/`) with `defineComponent` `<AgA2uiSurface>` wrapper, `useA2uiSurface` composable, `README.md`, and Vitest + `@vue/test-utils` specs, built the matching Vue 3 Support Center Studio (`v2/a2ui/demos/support-center/vue/`) verified clean with `vue-tsc --noEmit` and `vite build`, and created `v2/a2ui/README.md` master runbook.
   - Phase 6 Tasks 6.1, 6.2 & 6.3 (Complete):
       * Task 6.1: Standardized `AGNOSTICUI_CATALOG_ID = 'https://agnosticui.com'` across `generate-catalog.ts`, emitted byte-for-byte synced copies of `agnosticui-catalog.json` to `v2/a2ui/catalog/agnosticui-catalog.json`, `v2/a2ui/renderers/lit/agnosticui-catalog.json`, and `v2/site/docs/public/a2ui/v1/catalog.json`, emitted `SKILL.md` to `v2/a2ui/catalog/SKILL.md` and `v2/a2ui/renderers/lit/SKILL.md`, upgraded `check-codegen.ts` to assert byte-for-byte parity + zero git drift, and updated `a2ui.md`, `setup.md`, and `installation.md`.
       * Task 6.2: Ported `v2/mcp-server/src/tools/streamed-layout.ts` (`generate_streamed_layout`) and `tests/mcp-server.test.ts` (10/10 passing) to validate A2UI `v1.0` wire streams (`messages`) and adjacency lists (`nodes`) against `v2/a2ui/catalog/agnosticui-catalog.json` (`common_types.json` `$defs`, UAX #31 IDs, dead child pointers, DFS cycles, and `root` reachability); updated MCP docs (`v2/mcp-server/README.md`, `package.json`, `docs/NEXT_PROMPT.md`, `v2/site/docs/docs/mcp-server.md`); updated `.github/workflows/check-codegen.yml`; and purged leftover retired `v2/sdui` files/workflows.
       * Task 6.3: Expanded `v2/a2ui/renderers/lit/src/catalog.spec.ts` to cover all 25 catalog components + two-way `@path` bindings on all 7 interactive controls (`AgInput`, `AgCheckbox`, `AgToggle`, `AgSelect`, `AgCombobox`, `AgRadio`, `AgRating`) using exact `agnosticui-core` native event names (`input`, `change`, `rating-change`, `toggle-change`); expanded `react/src/index.spec.tsx` (3/3 passing) and `vue/src/index.spec.ts` (3/3 passing) to cover `streamMessages`, `resetSurface`, `getDataModel`, and `deleteSurface` lifecycle cleanup; added `renderers/lit/src/demos-smoke.spec.ts` (3/3 passing; 6/6 total Lit specs passing); added `"typecheck": "tsc --noEmit"` across `renderers/{lit,react,vue}/package.json`; and verified `test`, `typecheck`, and `build` pass across all 3 renderers and all 3 Support Center demos.
 ROADMAP DELTAS     :
   - Phase 6 Remaining Tasks (Tracked in `v2/a2ui/docs/IMPLEMENTATION_PLAN.md`):
       * Task 6.4 (Micro-Chunk 6.4a): Add `license`, `repository`, `homepage`, `keywords`, `"files"` whitelists, and `./catalog.json` + `./SKILL.md` exports to `renderers/{lit,react,vue}/package.json`, swap `devDependencies` `file:` paths to published semvers (`^2.0.0-alpha.31`, `^2.0.0-alpha.1`), verify via `npm pack --dry-run`, and publish `@agnosticui/a2ui-{lit,react,vue}` to npm (`--access public`).
       * Task 6.5 (Micro-Chunk 6.5a): Fork `a2ui-project/a2ui`, register AgnosticUI (`v1.0`) in the official community catalogs/renderers directory referencing `@agnosticui/a2ui-{lit,react,vue}` and `https://agnosticui.com`, and open the upstream PR.

--- MANDATORY WORKFLOW & MENTOR RULES (ENFORCE STRICTLY) ---
1. Pacing & Scope: Plan before coding. Break tasks into small, cohesive micro-chunks across separate turns. Never build an entire feature or multiple unrelated files at once.
2. Co-Develop Behavior & 1-to-1 Specs: Every implementation file must have a corresponding test file covering happy paths, edge cases, and expected errors without `any` or `@ts-ignore`.
3. Motive First, Syntax Second: Always explain the engineering "WHY" in plain language before showing code.
4. Verbose Commenting & Walkthroughs: Over-explain WHAT the code is doing, HOW it works, and WHY inline, followed by a plain-English walkthrough. Preserve all existing JSDoc and inline comment headers when modifying files.
5. Explanatory Logging: Inject descriptive telemetry/logging in both production code and tests.
6. No Code Placeholders & Small Widget Blocks: Never use "// ... rest of code". Keep each code block under ~110 lines (splitting files into numbered parts and avoiding nested triple backticks) so copy-paste widgets never break or escape.
7. Ground-Truth Inspection First: Never guess `@a2ui/*@0.15.0` or `agnosticui-core` internal signatures—inspect `node_modules/` `.d.ts`/`.js` files via `> ~/Downloads/cat.txt` before writing glue code.
8. Mandatory End-of-Task Doc Updates: At the end of EVERY completed task, provide updated `v2/a2ui/docs/NEXT_PROMPT.md` and `v2/a2ui/docs/IMPLEMENTATION_PLAN.md` files alongside the git commit checkpoint.
9. Verification & Git Checkpoint: Stop at the end of every chunk, provide the exact local verification command, suggest a conventional git commit message, and wait for user permission before advancing.
10. Full Integrated Files Rule: Always provide full, integrated copy-pasteable files (split into numbered parts if large) with copy-to-clipboard blocks—never partial diff snippets.

--- TARGET RUNTIME DELTA ---
 EXACT NEXT TASK    : Phase 6 Task 6.4 (Micro-Chunk 6.4a) — npm Package Metadata Hygiene, Tarball Audit & Public Release (`@agnosticui/a2ui-{lit,react,vue}`)
 ENGINEERING "WHY"  :
   1. Before publishing `@agnosticui/a2ui-lit`, `@agnosticui/a2ui-react`, and `@agnosticui/a2ui-vue` to npm, each package needs complete registry metadata (`license`, `repository`, `homepage`, `keywords`), strict `"files"` whitelists (so tests and local `.tgz` files are never bundled), `./catalog.json` and `./SKILL.md` subpath exports on `@agnosticui/a2ui-lit`, and published semver ranges (`^2.0.0-alpha.31`, `^2.0.0-alpha.1`) instead of local `file:` tarball paths in `devDependencies`.
 CODE BOUNDARIES    :
   - Micro-Chunk 6.4a: Inspect `v2/lib/package.json` and `v2/a2ui/docs/PUBLISH.md` via `> ~/Downloads/cat.txt` to match AgnosticUI's exact npm registry metadata conventions, update `v2/a2ui/renderers/{lit,react,vue}/package.json`, audit with `npm pack --dry-run`, and publish to npm (`--access public`).

--- SYSTEM BOOT TRIGGER COMMAND ---
{
  echo "=== v2/lib/package.json ==="
  cat v2/lib/package.json
  echo "=== v2/a2ui/docs/PUBLISH.md ==="
  cat v2/a2ui/docs/PUBLISH.md
  echo "=== renderers/{lit,react,vue}/package.json ==="
  cat v2/a2ui/renderers/lit/package.json v2/a2ui/renderers/react/package.json v2/a2ui/renderers/vue/package.json
} > ~/Downloads/cat.txt
