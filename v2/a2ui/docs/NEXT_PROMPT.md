================================================================================
       AGNOSTICUI-A2UI : Chronological Session Continuity Bridge Capsule              
================================================================================
 TIMESTAMP BASELINE : 2026-11-17T04:36:00Z (Anchored to Monday, Nov 16, 2026 — 10:36 PM CST)
 ACTIVE WORKSPACE   : Phase 6 Task 6.5 — Sub-step 6.5a (Open PR from `A2UI-experiment` -> `master`, address CodeRabbit review, merge to `master`) -> Sub-step 6.5b (`bash v2/site/deploy.sh` + `curl -sI` `200 OK` verification) -> Sub-step 6.5c (Google CLA + `a2ui-project/a2ui` `ecosystem/renderers.mdx` PR)
 STRATEGIC PIVOT    :
   - Positioning: "Spec-compliant A2UI v1.0 Component Catalog & Multi-Framework Web Renderer suite (`@agnosticui/a2ui-lit`, `@agnosticui/a2ui-react`, `@agnosticui/a2ui-vue`) bringing AgnosticUI's 22 runtime skins and FACE form validation to conversational generative UI surfaces."
   - Live Published npm Packages (v2.0.0-alpha.1, dist-tags `latest` & `alpha`):
       * `@agnosticui/a2ui-lit@2.0.0-alpha.1` (exports `.`, `./catalog.json`, `./SKILL.md`)
       * `@agnosticui/a2ui-react@2.0.0-alpha.1` (exports `.`)
       * `@agnosticui/a2ui-vue@2.0.0-alpha.1` (exports `.`)
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
       * Task 5.2: Relocated Lit demo to `v2/a2ui/demos/support-center/lit/`, extracted `shared/` (`support-scenarios.ts`, `studio.css`, `live-gemini.ts`, `evergreen-skin.css`), enabled `DynamicStringSchema` on `AgCombobox.value`, wired A2UI v1.0 `processor.model.onAction.subscribe(...)` for 4-turn `me -> them -> me -> them` `AgMessageBubble` conversations, added `AgEmptyState` idle boot, collapsible `Inspector` drawer, `scrollbar-gutter: stable` zero-CLS layout, directional motion, custom `Evergreen` skin, and built the matching React 19 Support Center Studio (`v2/a2ui/demos/support-center/react/`).
       * Task 5.3: Built `@agnosticui/a2ui-vue` (`v2/a2ui/renderers/vue/`) with `defineComponent` `<AgA2uiSurface>` wrapper, `useA2uiSurface` composable, `README.md`, and Vitest specs, built the matching Vue 3 Support Center Studio (`v2/a2ui/demos/support-center/vue/`), and created `v2/a2ui/README.md` master runbook.
   - Phase 6 Tasks 6.1, 6.2, 6.3 & 6.4 (Complete):
       * Task 6.1: Standardized `AGNOSTICUI_CATALOG_ID = 'https://agnosticui.com'`, synced `agnosticui-catalog.json` and `SKILL.md` across `catalog/`, `renderers/lit/`, and `v2/site/docs/public/a2ui/v1/catalog.json`, upgraded `check-codegen.ts`, and updated `a2ui.md`, `setup.md`, and `installation.md`.
       * Task 6.2: Ported `v2/mcp-server` `generate_streamed_layout` validator (10/10 passing) to A2UI `v1.0`, updated MCP docs and `.github/workflows/check-codegen.yml`, and purged leftover retired `v2/sdui` files.
       * Task 6.3: Verified all 25 catalog components and 7 two-way `@path` controls in Lit (`6/6` specs), React (`3/3` specs), and Vue (`3/3` specs), added `demos-smoke.spec.ts` and `"typecheck"` scripts, and verified all 3 renderers + 3 demos pass `test`, `typecheck`, and `build`.
       * Task 6.4: Added npm metadata, `"files"` whitelists, `./catalog.json` + `./SKILL.md` exports, and published semver `devDependencies` across `renderers/{lit,react,vue}/package.json`, excluded `src/test-setup.ts` from `tsconfig.json`, updated `PUBLISH.md`, and published `@agnosticui/a2ui-lit@2.0.0-alpha.1`, `@agnosticui/a2ui-react@2.0.0-alpha.1`, and `@agnosticui/a2ui-vue@2.0.0-alpha.1` to npm (`alpha` and `latest` dist-tags).

 ROADMAP DELTAS     :
   - Phase 6 Remaining Task (Tracked in `v2/a2ui/docs/IMPLEMENTATION_PLAN.md`):
       * Task 6.5 (Ordered Safety Gate):
           - 6.5a: Push `A2UI-experiment` and open a PR against `AgnosticUI/agnosticui` `master`, address any useful CodeRabbit / CI feedback, and merge into `master`.
           - 6.5b: Run `bash v2/site/deploy.sh` to publish VitePress docs, then verify via `curl -sI` and `npm info` that the hosted `catalog.json`, `/docs/a2ui`, GitHub `master/v2/a2ui`, and all three npm packages (`@agnosticui/a2ui-{lit,react,vue}`) return `200 OK`.
           - 6.5c: Confirm Google CLA (`cla.developers.google.com`) is signed, fork `a2ui-project/a2ui`, add AgnosticUI (`v1.0`) to `docs/site/src/content/docs/ecosystem/renderers.mdx` under `Catalogs and component libraries`, run Prettier, and submit the upstream PR.

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
 EXACT NEXT TASK    : Phase 6 Task 6.5a -> 6.5b -> 6.5c (PR `A2UI-experiment` -> `master`, CodeRabbit review, VitePress deploy, `200 OK` verification, then Google CLA + `a2ui-project/a2ui` ecosystem PR)
 ENGINEERING "WHY"  :
   1. External links inside an upstream `a2ui-project/a2ui` PR (`docs/site/src/content/docs/ecosystem/renderers.mdx`) must all resolve live (`200 OK`) before submission. Merging `A2UI-experiment` via a reviewed PR into `master` and deploying VitePress (`bash v2/site/deploy.sh`) first ensures automated link checkers and upstream maintainers see live docs, a live `catalog.json` schema, and live GitHub source links.
 CODE BOUNDARIES    :
   - 6.5a: `git push origin A2UI-experiment && gh pr create --base master --head A2UI-experiment` -> review CodeRabbit suggestions -> merge PR.
   - 6.5b: `bash v2/site/deploy.sh` -> verify `curl -sI` `200 OK` on `/a2ui/v1/catalog.json`, `/docs/a2ui`, GitHub `master/v2/a2ui`, and `npm info @agnosticui/a2ui-{lit,react,vue}`.
   - 6.5c: Sign Google CLA (`cla.developers.google.com`) -> fork `a2ui-project/a2ui` -> edit `docs/site/src/content/docs/ecosystem/renderers.mdx` -> `npx prettier --write` -> `gh pr create --repo a2ui-project/a2ui`.

--- SYSTEM BOOT TRIGGER COMMAND ---
{
  git status -s
  git branch -vv
  cat v2/site/deploy.sh
} > ~/Downloads/cat.txt
