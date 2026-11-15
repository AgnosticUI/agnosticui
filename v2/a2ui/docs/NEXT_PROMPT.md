================================================================================
       AGNOSTICUI-A2UI : Chronological Session Continuity Bridge Capsule              
================================================================================
 TIMESTAMP BASELINE : 2026-11-15T01:55:00Z (Anchored to Saturday, Nov 14, 2026 Timeline)
 ACTIVE WORKSPACE   : Phase 4 Task 4.2 (Sweep `v2/sdui` & `v2/cli`, Migrate VitePress Docs `/docs/a2ui`, & Retire `v2/sdui`)
 STRATEGIC PIVOT    :
   - Positioning: "Spec-compliant A2UI v1.0 Component Catalog & Multi-Framework Web Renderer suite (`@agnosticui/a2ui-lit`, `@agnosticui/a2ui-react`, `@agnosticui/a2ui-vue`) bringing AgnosticUI's 21 runtime skins and FACE form validation to generative UI surfaces."
   - Core Architecture: `v2/a2ui/catalog` (ts-morph AST codegen -> 25 components in `agnosticui-catalog.json` + `SKILL.md` + `check-codegen.ts`), `v2/a2ui/renderers/{lit,react,vue}`, `v2/a2ui/demos/support-center` (Zero-LLM Mock Stream Harness + Local A2UI Compiler + optional Live Gemini 3.8 Flash mode + `v2/skins/skins-bundle.css`).
   - Primary Entrypoint: `cd v2/a2ui/demos/support-center && npm run build && npm run dev`

 COMPLETED PHASES   :
   - Phase 1 (Milestone 1 — 100% Complete & Passing):
       * Task 1.1: `v2/a2ui/renderers/lit/package.json` & `vitest.config.ts` (Pinned `zod@^3.25.76` and configured Vite `resolve.dedupe` for `lit` and `zod` under `jsdom`).
       * Task 1.2: `v2/a2ui/renderers/lit/src/harness/mock-stream.ts` (Zero-LLM async generator `createMockA2uiStream` emitting A2UI v1.0 wire fixtures).
   - Phase 2 (Milestone 2 — 100% Complete & Passing):
       * Task 2.1: `v2/a2ui/catalog/scripts/generate-catalog.ts` & `codegen.config.ts` (Deterministic `ts-morph` AST codegen reading `v2/lib/src/components/*/core/_*.ts` to emit `AgText` + `Ag*` wrappers with `ifDefined` reflected prop guards and two-way `@path` handlers, plus `agnosticui-catalog.json` via `AgnosticUICatalog.toJson()`).
       * Task 2.2: `v2/a2ui/renderers/lit/src/catalog.ts` & `src/catalog.spec.ts` (Explicit `'1.0'` catalog registration via `registerUniversalElement` and Light-DOM `<a2ui-surface>` rendering verified green in Vitest + `tsc`).
   - Phase 3 (Milestone 3 — 100% Complete & Passing):
       * Task 3.1: `v2/a2ui/renderers/lit/src/functions/validate-surface.ts`, `src/test-setup.ts`, & `src/catalog.spec.ts` (Implemented `validateSurface` client function using `AG_FACE_SELECTOR` + `reportValidity()`, shimmed `attachInternals` for JSDOM, and verified two-way `@path` binding + FACE validation across 3/3 passing Vitest suites).
       * Task 3.2: `v2/a2ui/demos/support-center/` (`index.html`, `src/main.ts`, `src/studio.css`, `src/fixtures/support-scenarios.ts`, `README.md`) — Built declarative Lit `<ag-a2ui-studio>` with 21 `<ag-button>` runtime skins, Light/Dark toggle, pure `var(--ag-*)` tokens, live `DataModel` JSON inspector (`dataModel.get('')`), FACE validation, and native DOM Lucide `CircleSlash2` `<ag-icon-button>` clear log control.
       * Task 3.3: `v2/a2ui/demos/support-center/src/live-gemini.ts`, `src/main.ts`, & `src/studio.css` — Added `<ag-radio>` Local Deterministic vs. Live Gemini 3.8 Flash mode toggle (`generateLocalA2uiSurface` + `generateLiveA2uiSurface` with `x-goog-api-key` auth, `thinkingConfig: { thinkingBudget: 0 }`, `AbortSignal.timeout(15000)`, UAX #31 ID validation, and `MAX_SESSION_CALLS = 5`) plus 3 -> 2 -> 1 column responsive layout.
   - Phase 4 Task 4.1 (Complete & Passing):
       * Expanded `v2/a2ui/catalog/scripts/generate-catalog.ts` to 25 curated components (`AgText` + 24 `Ag*` components including `AgCombobox`, `AgMessageBubble`, `AgRating`, `AgTimeline`, `AgProgress`, `AgProgressRing`, `AgSpinner`, `AgEmptyState`, `AgAccordion`, `AgToggle`), emitted `v2/a2ui/catalog/SKILL.md`, and added `v2/a2ui/catalog/scripts/check-codegen.ts` CI drift check (`vitest run` 3/3 passing, `tsc` clean).

 ROADMAP DELTAS     :
   - Phase 4 Remaining Tasks (Tracked in `v2/a2ui/docs/IMPLEMENTATION_PLAN.md`):
       * Task 4.2: Sweep `v2/sdui` and `v2/cli` for reusable nuggets, migrate VitePress docs (`/docs/a2ui`, `/installation`, `/docs/setup`), and retire `v2/sdui`.
   - Phase 5 Remaining Tasks (Tracked in `v2/a2ui/docs/IMPLEMENTATION_PLAN.md`):
       * Task 5.1: Build `@agnosticui/a2ui-react` renderer package + Vitest specs.
       * Task 5.2: Build `@agnosticui/a2ui-vue` renderer package + Vitest specs.
       * Task 5.3: Publish `@agnosticui/a2ui-{lit,react,vue}` to npm and open the official `a2ui-project/a2ui` ecosystem PR (`v1.0`).

--- MANDATORY WORKFLOW & MENTOR RULES (ENFORCE STRICTLY) ---
1. Pacing & Scope: Plan before coding. Break tasks into small, cohesive micro-chunks across separate turns. Never build an entire feature or multiple unrelated files at once.
2. Co-Develop Behavior & 1-to-1 Specs: Every implementation file must have a corresponding test file covering happy paths, edge cases, and expected errors without `any` or `@ts-ignore`.
3. Motive First, Syntax Second: Always explain the engineering "WHY" in plain language before showing code.
4. Verbose Commenting & Walkthroughs: Over-explain WHAT the code is doing, HOW it works, and WHY inline, followed by a plain-English walkthrough. Preserve all existing JSDoc and inline comment headers when modifying files.
5. Explanatory Logging: Inject descriptive telemetry/logging in both production code and tests.
6. No Code Placeholders & Small Widget Blocks: Never use "// ... rest of code". Keep each code block under ~110 lines (splitting files into numbered parts and avoiding nested triple backticks) so copy-paste widgets never break or escape.
7. Ground-Truth Inspection First: Never guess `@a2ui/*@0.15.0` or `agnosticui-core` internal signatures—inspect `node_modules/` `.d.ts`/`.js` files via `> ~/Downloads/cat.txt` before writing glue code.
8. Mandatory End-of-Task Doc Updates: At the end of EVERY completed task, provide updated `v2/a2ui/docs/NEXT_PROMPT.md` and `v2/a2ui/docs/IMPLEMENTATION_PLAN.md` files alongside the git commit checkpoint.
9. Verification & Git Checkpoint: Stop at the end of every chunk, provide the exact local verification command (`cd v2/a2ui/catalog && npx tsx scripts/check-codegen.ts`), suggest a conventional git commit message, and wait for user permission before advancing.

--- TARGET RUNTIME DELTA ---
 EXACT NEXT TASK    : Phase 4 Task 4.2 (Micro-Chunk 4.2a) — Sweep `v2/sdui` and `v2/cli` for reusable nuggets (`setCustomValidity` helpers, `--sdui` CLI references) and inspect VitePress docs (`v2/site/docs/docs/sdui.md`, `v2/site/docs/installation.md`, `v2/site/docs/docs/setup.md`, `v2/site/.vitepress/`)
 ENGINEERING "WHY"  :
   1. Auditing `v2/sdui/` and `v2/cli/` ensures zero valuable validation helpers or CLI integrations are lost before retiring `v2/sdui/`.
   2. Migrating `/docs/sdui` to `/docs/a2ui` (explicitly documenting A2UI Protocol Version `v1.0`) satisfies Google's `a2ui.org` directory listing criteria and keeps AgnosticUI's public documentation aligned with the A2UI v1.0 architecture.
 CODE BOUNDARIES    :
   - Micro-Chunk 4.2a: Run a targeted `grep` / directory inventory across `v2/sdui/`, `v2/cli/`, and `v2/site/` so we can migrate docs and retire `v2/sdui/` cleanly.

--- SYSTEM BOOT TRIGGER COMMAND ---
::: SYSTEM INITIALIZED. STOP BEFORE WRITING ANY CODE.
Ask the user to:
1. Run `grep -rn "sdui" v2/cli v2/site` (and list `v2/sdui/`) and share the output plus `v2/site/docs/docs/sdui.md` into the chat window.
2. Confirm readiness to begin Phase 4 Task 4.2 Micro-Chunk 4.2a (`v2/sdui` & `v2/cli` sweep + VitePress `/docs/a2ui` migration).
Wait for confirmation before writing any code. :::
================================================================================
