================================================================================
       AGNOSTICUI-A2UI : Chronological Session Continuity Bridge Capsule              
================================================================================
 TIMESTAMP BASELINE : 2026-11-15T20:35:00Z (Anchored to Sunday, Nov 15, 2026 Timeline)
 ACTIVE WORKSPACE   : Phase 5 Task 5.2 (Micro-Chunk 5.2c: React 19 Support Center Studio in `v2/a2ui/demos/support-center/react/`)
 STRATEGIC PIVOT    :
   - Positioning: "Spec-compliant A2UI v1.0 Component Catalog & Multi-Framework Web Renderer suite (`@agnosticui/a2ui-lit`, `@agnosticui/a2ui-react`, `@agnosticui/a2ui-vue`) bringing AgnosticUI's 22 runtime skins and FACE form validation to conversational generative UI surfaces."
   - Core Architecture: `v2/a2ui/catalog` (ts-morph AST codegen -> 25 components in `agnosticui-catalog.json` + `SKILL.md` + `check-codegen.ts`), `v2/a2ui/renderers/{lit,react,vue}`, `v2/a2ui/demos/support-center/{shared,lit,react,vue}` (Conversational `AgMessageBubble` Support Center Studio with tactile motion, Evergreen skin, collapsible Inspector drawer, and 22 runtime skins).
   - Primary Entrypoints:
       * Lit Demo:   `(cd v2/a2ui/demos/support-center/lit && npm run build && npm run dev)`
       * React Demo: `(cd v2/a2ui/demos/support-center/react && npm run build && npm run dev)`
       * Vue Demo:   `(cd v2/a2ui/demos/support-center/vue && npm run build && npm run dev)`

 COMPLETED PHASES   :
   - Phase 1 (Milestone 1 — 100% Complete & Passing):
       * Task 1.1: `v2/a2ui/renderers/lit/package.json` & `vitest.config.ts` (Pinned `zod@^3.25.76` and configured Vite `resolve.dedupe` for `lit` and `zod` under `jsdom`).
       * Task 1.2: `v2/a2ui/renderers/lit/src/harness/mock-stream.ts` (Zero-LLM async generator `createMockA2uiStream` emitting A2UI v1.0 wire fixtures).
   - Phase 2 (Milestone 2 — 100% Complete & Passing):
       * Task 2.1: `v2/a2ui/catalog/scripts/generate-catalog.ts` & `codegen.config.ts` (Deterministic `ts-morph` AST codegen reading `v2/lib/src/components/*/core/_*.ts` to emit `AgText` + `Ag*` wrappers with `ifDefined` reflected prop guards and two-way `@path` handlers, plus `agnosticui-catalog.json` via `AgnosticUICatalog.toJson()`).
       * Task 2.2: `v2/a2ui/renderers/lit/src/catalog.ts` & `src/catalog.spec.ts` (Explicit `'1.0'` catalog registration via `registerUniversalElement` and Light-DOM `<a2ui-surface>` rendering verified green in Vitest + `tsc`).
   - Phase 3 (Milestone 3 — 100% Complete & Passing):
       * Task 3.1: `v2/a2ui/renderers/lit/src/functions/validate-surface.ts`, `src/test-setup.ts`, & `src/catalog.spec.ts` (Implemented `validateSurface` client function using `AG_FACE_SELECTOR` + `reportValidity()`, shimmed `attachInternals` for JSDOM, and verified two-way `@path` binding + FACE validation across 3/3 passing Vitest suites).
       * Task 3.2 & 3.3: Built Support Center studio with 21+ runtime skins, Light/Dark toggle, FACE validation, and Local vs. Live Gemini 3.8 Flash prompt compiler.
   - Phase 4 (Milestone 4 — 100% Complete & Passing):
       * Task 4.1: Expanded `v2/a2ui/catalog/scripts/generate-catalog.ts` to 25 curated components (`AgText` + 24 `Ag*` components including `AgCombobox`, `AgMessageBubble`, `AgRating`, `AgTimeline`, `AgProgress`, `AgProgressRing`, `AgSpinner`, `AgEmptyState`, `AgAccordion`, `AgToggle`), emitted `v2/a2ui/catalog/SKILL.md`, and added `v2/a2ui/catalog/scripts/check-codegen.ts` CI drift check.
       * Task 4.2: Swept `v2/sdui`, `v2/cli`, and `v2/site`; migrated VitePress docs to `v2/site/docs/docs/a2ui.md` (A2UI Protocol Version `v1.0`), updated `installation.md`, `setup.md`, and `.vitepress/config.mts`, preserved `PUBLISH.md` in `v2/a2ui/docs/PUBLISH.md`, and retired `v2/sdui/`.
   - Phase 5 Task 5.1 (Complete & Passing):
       * Built `@agnosticui/a2ui-react` (`v2/a2ui/renderers/react/`) wrapping `<a2ui-surface>` via `@lit/react` + `React.forwardRef` (`<AgA2uiSurface>`) and `useA2uiSurface()` hook with automatic FACE validation (`vitest run` 2/2 passing, `tsc` clean), extracted `v2/a2ui/vitest.shared.mts` (`sharedA2uiResolve`), and added workflow `README.md` guides.
   - Phase 5 Task 5.2 Micro-Chunks 5.2a & 5.2b (Complete & Passing):
       * Relocated Lit demo to `v2/a2ui/demos/support-center/lit/`, extracted `shared/` (`support-scenarios.ts`, `studio.css`, `live-gemini.ts`, `evergreen-skin.css`), enabled `DynamicStringSchema` on `AgCombobox.value`, wired A2UI v1.0 `processor.model.onAction.subscribe(...)` for 4-turn `me -> them -> me -> them` `AgMessageBubble` conversations, added `AgEmptyState` idle boot with `:has(ag-empty-state)` zero-padding styling, collapsible `Inspector` drawer, `scrollbar-gutter: stable` zero-CLS layout, directional `400-480ms` ease-out quint motion, and custom `Evergreen` skin.

 ROADMAP DELTAS     :
   - Phase 5 Remaining Tasks (Tracked in `v2/a2ui/docs/IMPLEMENTATION_PLAN.md`):
       * Task 5.2 Micro-Chunk 5.2c: Build matching React 19 Support Center demo in `v2/a2ui/demos/support-center/react/` consuming `@agnosticui/a2ui-react` and `shared/`.
       * Task 5.3: Build `@agnosticui/a2ui-vue` (`v2/a2ui/renderers/vue`) + matching Vue 3 Support Center demo (`v2/a2ui/demos/support-center/vue/`).
       * Task 5.4: Publish `@agnosticui/a2ui-{lit,react,vue}` to npm and open the official `a2ui-project/a2ui` ecosystem PR (`v1.0`).

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

--- TARGET RUNTIME DELTA ---
 EXACT NEXT TASK    : Phase 5 Task 5.2 (Micro-Chunk 5.2c) — Build the matching React 19 Support Center Studio in `v2/a2ui/demos/support-center/react/` consuming `@agnosticui/a2ui-react` and `shared/`
 ENGINEERING "WHY"  :
   1. Note from Micro-Chunk 5.2b: A2UI v1.0 (`@a2ui/web_core/v1_0`) dispatches button actions through `processor.model.onAction.subscribe(...)` rather than legacy v0.8 DOM `a2uiaction` events; verify `v2/a2ui/renderers/react/src/index.tsx` subscribes to `processor.model.onAction.subscribe(...)` before packing `@agnosticui/a2ui-react`.
   2. Reusing `../../shared/{studio.css,evergreen-skin.css,support-scenarios.ts,live-gemini.ts}` and `../../../../../skins/skin-switcher-core.js` ensures the React 19 demo has 100% visual and behavioral parity with the Lit demo.
 CODE BOUNDARIES    :
   - Micro-Chunk 5.2c: Update `renderers/react/src/index.tsx` `onAction` subscription, pack `@agnosticui/a2ui-react`, scaffold `demos/support-center/react/` (`package.json`, `tsconfig.json`, `vite.config.ts`, `index.html`, `src/main.tsx`), and verify `(cd v2/a2ui/demos/support-center/react && npm run build)`.

--- SYSTEM BOOT TRIGGER COMMAND ---
::: SYSTEM INITIALIZED. STOP BEFORE WRITING ANY CODE.
Ask the user to:
1. Upload `v2/a2ui/renderers/react/src/index.tsx` and `v2/a2ui/renderers/react/package.json` into the chat window (or confirm ready to inspect).
2. Confirm readiness to begin Phase 5 Task 5.2 Micro-Chunk 5.2c (React 19 Support Center Studio).
Wait for confirmation before writing any code. :::
================================================================================
