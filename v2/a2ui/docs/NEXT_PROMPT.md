================================================================================
       AGNOSTICUI-A2UI : Chronological Session Continuity Bridge Capsule              
================================================================================
 TIMESTAMP BASELINE : 2026-11-14T20:03:00Z (Anchored to Saturday, Nov 14, 2026 Timeline)
 ACTIVE WORKSPACE   : Phase 3 Task 3.2 (Milestone 3: FACE Validation & 20-Skin Demo) / 20-Skin Support Center Offline Demo
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
   - Phase 3 Completed Tasks (All Passing & Committed):
       * Task 3.1: `v2/a2ui/renderers/lit/src/functions/validate-surface.ts`, `src/test-setup.ts`, & `src/catalog.spec.ts` (Implemented `validateSurface` client function using `AG_FACE_SELECTOR` + `reportValidity()`, shimmed `attachInternals` for JSDOM, and verified two-way `@path` binding + FACE validation across 3/3 passing Vitest suites).

 ROADMAP DELTAS     :
   - Phase 3 Remaining Tasks (Tracked in `v2/a2ui/docs/IMPLEMENTATION_PLAN.md`):
       * Task 3.2: 20-Skin Support Center Offline Demo (`v2/a2ui/demos/support-center/`) wired to `createMockA2uiStream`, `v2/skins/skins-bundle.css`, and live DataModel JSON inspector.
       * Task 3.3: Free-tier Google AI Studio (Gemini) smoke test (strictly capped at 3–5 calls on `gemini-2.5-flash` to preserve daily quota for Monday's Invoca Head of Design interview) + optional "Live Prompt" mode in `support-center`.
   - Post-Milestone Backlog (Phase 4 — Tracked in `v2/a2ui/docs/IMPLEMENTATION_PLAN.md`):
       * Generate `SKILL.md`, publish `@agnosticui/a2ui-lit` & `agnosticui-catalog.json`, add `/docs/a2ui` to `v2/site`, and submit listing PR to `://github.com`.

--- MANDATORY WORKFLOW & MENTOR RULES (ENFORCE STRICTLY) ---
1. Pacing & Scope: Plan before coding. Break tasks into small, cohesive micro-chunks across separate turns. Never build an entire feature or multiple unrelated files at once.
2. Co-Develop Behavior & 1-to-1 Specs: Every implementation file must have a corresponding test file covering happy paths, edge cases, and expected errors without `any` or `@ts-ignore`.
3. Motive First, Syntax Second: Always explain the engineering "WHY" in plain language before showing code.
4. Verbose Commenting & Walkthroughs: Over-explain WHAT the code is doing, HOW it works, and WHY inline, followed by a plain-English walkthrough. Preserve all existing JSDoc and inline comment headers when modifying files.
5. Explanatory Logging: Inject descriptive telemetry/logging in both production code and tests.
6. No Code Placeholders & Small Widget Blocks: Never use "// ... rest of code". Keep each code block under ~110 lines (splitting files into numbered parts and avoiding nested triple backticks) so copy-paste widgets never break or escape.
7. Ground-Truth Inspection First: Never guess `@a2ui/*@0.15.0` or `agnosticui-core` internal signatures—inspect `node_modules/` `.d.ts`/`.js` files via `> ~/Downloads/cat.txt` before writing glue code.
8. Mandatory End-of-Task Doc Updates: At the end of EVERY completed task, provide updated `v2/a2ui/docs/NEXT_PROMPT.md` and `v2/a2ui/docs/IMPLEMENTATION_PLAN.md` files alongside the git commit checkpoint.
9. Verification & Git Checkpoint: Stop at the end of every chunk, provide the exact local verification command (`cd v2/a2ui/renderers/lit && npm test && npm run build`), suggest a conventional git commit message, and wait for user permission before advancing.

--- TARGET RUNTIME DELTA ---
 EXACT NEXT TASK    : Phase 3 Task 3.2 (Micro-Chunk 3.2a) — Inspect `v2/skins/` and `v2/sdui/demo-support-center/` to scaffold the 20-skin A2UI Support Center demo in `v2/a2ui/demos/support-center/`
 ENGINEERING "WHY"  :
   1. Demonstrating A2UI v1.0 surfaces switching across 20+ AgnosticUI themes and Light/Dark mode in real time proves how design systems govern generative UI without altering agent JSON payloads.
   2. Running on the Zero-LLM Mock Stream Harness guarantees instant, deterministic playback with zero Wi-Fi or API quota risk during Monday's live design interview.
 CODE BOUNDARIES    :
   - Micro-Chunk 3.2a: Inspect `v2/skins/skin-switcher-core.js` and `v2/sdui/demo-support-center/` via `~/Downloads/cat.txt` to confirm exact CSS bundle paths and theme attributes.
   - Micro-Chunk 3.2b: Scaffold `v2/a2ui/demos/support-center/` (`package.json`, `vite.config.ts` with `resolve.dedupe`, `index.html`, and multi-surface A2UI v1.0 fixtures).
   - Micro-Chunk 3.2c: Wire the 20-skin theme switcher, Light/Dark toggle, FACE validation submit handler, and live DataModel JSON inspector.

--- SYSTEM BOOT TRIGGER COMMAND ---
::: SYSTEM INITIALIZED. STOP BEFORE WRITING ANY CODE.
Ask the user to:
1. Upload `v2/a2ui/docs/PRD-A2UI-REFACTOR.md` and `v2/a2ui/docs/IMPLEMENTATION_PLAN.md` into the chat window.
2. Run `ls -la v2/skins v2/sdui/demo-support-center > ~/Downloads/cat.txt && head -n 100 v2/skins/skin-switcher-core.js v2/sdui/demo-support-center/index.html v2/sdui/demo-support-center/package.json >> ~/Downloads/cat.txt` from the repo root and upload `~/Downloads/cat.txt` into the chat window.
Wait for these files before beginning Phase 3 Task 3.2 Micro-Chunk 3.2a. :::
================================================================================
