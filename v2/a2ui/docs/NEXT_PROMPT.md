================================================================================
       AGNOSTICUI-A2UI : Chronological Session Continuity Bridge Capsule              
================================================================================
 TIMESTAMP BASELINE : 2026-11-14T19:31:00Z (Anchored to Saturday, Nov 14, 2026 Timeline)
 ACTIVE WORKSPACE   : Phase 3 Task 3.1 (Milestone 3: FACE Validation & 20-Skin Demo) / Custom Client Function `validateSurface` & Form Binding Specs
 STRATEGIC PIVOT    :
   - Positioning: "Spec-compliant A2UI v1.0 Component Catalog & Web Renderer bringing AgnosticUI's 20+ runtime skins and FACE form validation to generative UI surfaces."
   - Core Architecture: `v2/a2ui/catalog` (ts-morph AST codegen -> `agnosticui-catalog.json` + `A2uiLitElement` wrappers), `v2/a2ui/renderers/lit` (`@agnosticui/a2ui-lit` on `@a2ui/lit@0.15.0` & `@a2ui/web_core@0.15.0`), `v2/a2ui/demos/support-center` (Zero-LLM Mock Stream Harness + `v2/skins/skins-bundle.css`).
   - Primary Entrypoint: `cd v2/a2ui/catalog && npm run generate && cd ../renderers/lit && npm test && npm run build`

 COMPLETED PHASES   :
   - Phase 1 (Milestone 1 — 100% Complete & Passing):
       * Task 1.1: `v2/a2ui/renderers/lit/package.json` & `vitest.config.ts` (Pinned `zod@^3.25.76` and configured Vite `resolve.dedupe` for `lit` and `zod` under `jsdom`).
       * Task 1.2: `v2/a2ui/renderers/lit/src/harness/mock-stream.ts` (Zero-LLM async generator `createMockA2uiStream` emitting A2UI v1.0 wire fixtures).
   - Phase 2 (Milestone 2 — 100% Complete & Passing):
       * Task 2.1: `v2/a2ui/catalog/scripts/generate-catalog.ts` & `codegen.config.ts` (Deterministic `ts-morph` AST codegen reading `v2/lib/src/components/*/core/_*.ts` to emit `AgText` + 14 MVP `Ag*` wrappers with `ifDefined` reflected prop guards and two-way `setValue`/`setChecked` handlers, plus `agnosticui-catalog.json` via `AgnosticUICatalog.toJson()`).
       * Task 2.2: `v2/a2ui/renderers/lit/src/catalog.ts` & `src/catalog.spec.ts` (Explicit `'1.0'` catalog registration via `registerUniversalElement` and Light-DOM `<a2ui-surface>` rendering verified green in Vitest + `tsc`).

 ROADMAP DELTAS     :
   - Phase 3 Remaining Tasks (Tracked in `v2/a2ui/docs/PRD-A2UI-REFACTOR.md`):
       * Task 3.1: Custom Client Function `validateSurface` (`v2/a2ui/renderers/lit/src/functions/validate-surface.ts`, `v2/a2ui/catalog/scripts/generate-catalog.ts`, `v2/a2ui/renderers/lit/src/catalog.spec.ts`)
       * Task 3.2: 20-Skin Support Center Offline Demo (`v2/a2ui/demos/support-center/`) wired to `createMockA2uiStream` and `v2/skins/skins-bundle.css`
       * Task 3.3: Free-tier Google AI Studio (Gemini) smoke test for live prompt-to-AgnosticUI compilation
   - Post-Milestone Backlog (Milestone 4 — Tracked in `v2/a2ui/docs/PRD-A2UI-REFACTOR.md`):
       * Generate `SKILL.md`, publish `@agnosticui/a2ui-lit` & `agnosticui-catalog.json`, add `/docs/a2ui` to `v2/site`, and submit listing PR to `://github.com`.

--- MANDATORY WORKFLOW & MENTOR RULES (ENFORCE STRICTLY) ---
1. Pacing & Scope: Plan before coding. Break tasks into small, cohesive micro-chunks across separate turns. Never build an entire feature or multiple unrelated files at once.
2. Co-Develop Behavior & 1-to-1 Specs: Every implementation file must have a corresponding test file covering happy paths, edge cases, and expected errors without `any` or `@ts-ignore`.
3. Motive First, Syntax Second: Always explain the engineering "WHY" in plain language before showing code.
4. Verbose Commenting & Walkthroughs: Over-explain WHAT the code is doing, HOW it works, and WHY inline, followed by a plain-English walkthrough. Preserve all existing JSDoc and inline comment headers when modifying files.
5. Explanatory Logging: Inject descriptive telemetry/logging in both production code and tests.
6. No Code Placeholders & Small Widget Blocks: Never use "// ... rest of code". Keep each code block under ~110 lines (splitting files into numbered parts and avoiding nested triple backticks) so copy-paste widgets never break or escape.
7. Ground-Truth Inspection First: Never guess `@a2ui/*@0.15.0` or `agnosticui-core` internal signatures—inspect `node_modules/` `.d.ts`/`.js` files via `> ~/Downloads/cat.txt` before writing glue code.
8. Verification & Git Checkpoint: Stop at the end of every chunk, provide the exact local verification command (`cd v2/a2ui/renderers/lit && npm test && npm run build`), suggest a conventional git commit message, and wait for user permission before advancing.

--- TARGET RUNTIME DELTA ---
 EXACT NEXT TASK    : Phase 3 Task 3.1 (Micro-Chunk 1) — Inspect `@a2ui/web_core` `FunctionImplementation` contract (`node_modules/@a2ui/web_core/src/catalogs/basic/v1/functions/*.d.ts`) and implement `validateSurface` in `v2/a2ui/renderers/lit/src/functions/validate-surface.ts` & `v2/a2ui/renderers/lit/src/catalog.spec.ts`
 ENGINEERING "WHY"  :
   1. A2UI v1.0 surfaces need client-side form validation before dispatching submit actions without round-tripping to an LLM agent.
   2. Because `<a2ui-surface>` renders into Light DOM (`createRenderRoot() { return this; }`), `validateSurface` can query AgnosticUI Form-Associated Custom Elements (`AG_FACE_SELECTOR`) and invoke `reportValidity()` directly inside the browser.
 CODE BOUNDARIES    :
   - Micro-Chunk 1: Inspect `node_modules/@a2ui/web_core/src/catalogs/basic/v1/functions/*.d.ts` + `v2/sdui/renderers/lit/src/` via `~/Downloads/cat.txt` to confirm exact `FunctionImplementation` and `AG_FACE_SELECTOR` signatures.
   - Micro-Chunk 2: Implement `v2/a2ui/renderers/lit/src/functions/validate-surface.ts`, register it in `generate-catalog.ts` / `catalog.ts`, and add two-way `@path` + FACE validation specs in `src/catalog.spec.ts`.

--- SYSTEM BOOT TRIGGER COMMAND ---
::: SYSTEM INITIALIZED. STOP BEFORE WRITING ANY CODE.
Ask the user to:
1. Upload `v2/a2ui/docs/PRD-A2UI-REFACTOR.md` into the chat window.
2. Run `cd v2/a2ui/renderers/lit && head -n 80 node_modules/@a2ui/web_core/src/catalogs/basic/v1/functions/*.d.ts ../../../sdui/renderers/lit/src/*.ts > ~/Downloads/cat.txt` and upload `~/Downloads/cat.txt` into the chat window.
Wait for both files before beginning Phase 3 Task 3.1 Micro-Chunk 1. :::
================================================================================
