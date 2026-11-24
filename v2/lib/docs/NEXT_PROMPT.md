# Session Continuity & Next Prompt — AgnosticUI (`v2/lib`) × `@rlevin/uirig` Integration

## Session Operating Rules (Carry Forward)
1. **Work in Micro-Increments:** One logical file or module per turn.
2. **Co-Develop Logic & Specs:** Every new logic module includes a runnable Vitest `.spec.ts` file.
3. **Explain "Why" First + Diagram New Concepts:** Plain-language rationale and ASCII diagram before code.
4. **Zero Placeholders & Complete Blocks Only:** Always emit complete functions, types, or files—never `// ... existing code`.
5. **Subshell-Wrapped CLI Commands:** Always wrap shell commands in `( [ -d v2/lib ] && cd v2/lib ... )` so the user's working directory returns to the repository root automatically.
6. **Abbreviation Rule:** Expand acronyms on first use in each response.

---

## Completed Steps (Verified & Committed) ✅ 

### Step 1: Go/No-Go Compatibility Gate & `Button` PoC (`@rlevin/uirig@0.3.0`) — **COMPLETE (GO)**
- Installed `@rlevin/uirig@0.3.0` in `v2/lib/package.json` (`devDependencies`) and local Playwright Chromium (`chromium_headless_shell-1255`).
- Created `v2/lib/vite.uirig.config.ts` (Vite server on `http://localhost:4174`, `host: true`, `strictPort: true`, `headers: { 'X-Frame-Options': 'SAMEORIGIN' }`, `css.devSourcemap: true`, `build.sourcemap: true`, `resolve.dedupe: ['lit']`).
- Created `v2/lib/tests/uirig/poc-button.html` (4 `<ag-button>` variants spaced with `gap: 24px`).
- Scaffolded `v2/lib/uirig.config.json` and logged empirical findings + 3 upstream GitHub issues (`UTB-001`, `UTB-002`, `UTB-003` at `https://github.com`).
- **Empirical Gate Metric:** Full 6-engine audit (`tokens`, `contrast`, `dark-mode`, `stress`, `cls`, `dom`) across `mobile (375x812)` + `desktop (1440x900)` × `light` + `dark` completed in **`8.16s`** (well under the `< 45s` budget).

### Step 2: Extract Shared Component Registry — **COMPLETE**
- Created `v2/lib/tests/shared/component-registry.ts` as the single source of truth for all **50** Lit component preview templates (`COMPONENT_REGISTRY`, `COMPONENT_NAMES`, `hasComponentTemplate`, `ComponentName`).
- Updated `v2/lib/tests/visual/preview/registry.ts` to re-export from `../../shared/component-registry`.
- Added companion unit test `v2/lib/tests/shared/component-registry.spec.ts` (`4/4` passing).

### Step 3: Isolated `uirig` Harness Sandbox, Triage Engine, Combined Token Scale & CLI Runner — **COMPLETE**
- **Harness (`v2/lib/tests/uirig/harness/`):**
  - `index.html`, `main.ts`, `query-params.ts`, and `query-params.spec.ts` (`5/5` passing).
  - Mounts any of the 50 registered components via `?component=<Name>&theme=light|dark` inside a `gap: 32px` flex stage and waits for `customElements.whenDefined` + `el.updateComplete` before setting `window.__uirigReady = true`.
- **Triage & Deduplication (`v2/lib/tests/uirig/triage.ts` + `triage.spec.ts`, `5/5` passing):**
  - Groups violations by `(component, engine, violationType, selector, measuredDelta)` across viewports/themes and classifies each finding into `component-defect` | `upstream-tool-bug` (`UTB-001`, `UTB-002`) | `harness-artifact` | `false-positive`.
- **Combined Light/Dark Token Loader (`v2/lib/tests/uirig/token-scale.ts` + `token-scale.spec.ts`, `3/3` passing):**
  - Concatenates `src/styles/ag-tokens.css` + `src/styles/ag-tokens-dark.css` into `v2/lib/.uirig/ag-tokens-combined.css` so `@rlevin/uirig` validates dark-mode CSS custom properties directly.
- **Multi-Engine Runner (`v2/lib/tests/uirig/runner.ts` + `npm run uirig:audit`):**
  - Verified on `Button`: `raw=0 | defects=0 | upstream=0` in `8164ms`.

---

## Key Empirical Constraints & Upstream Tracking (`AgnosticUI/uirig`)
1. **Always use `http://localhost:4174/...`** (never `http://127.0.0...`): `@rlevin/uirig@0.3.0` truncates dotted IPv4 hostnames to `http://127.0.0` (`UTB-003` / `AgnosticUI/uirig#53`).
2. **`--only=<engine>` accepts a single engine name** (e.g., `--only=dom`), whereas omitting `--only` runs all 6 engines concurrently.
3. **Combined tokens workaround (`UTB-001` / `AgnosticUI/uirig#51`):** Passing `--tokens-path=.uirig/ag-tokens-combined.css` gives `@rlevin/uirig@0.3.0` both light and dark tokens in one stylesheet.
4. **Shadow DOM `<slot>` / `[disabled]` contrast (`UTB-002` / `AgnosticUI/uirig#52`):** `triage.ts` automatically tags `ag-button >> shadow-root >> slot` contrast hits as `cause: 'upstream-tool-bug'`.

---

## Current Checkpoint — 2026-11-24

### Step 4 status

**Step 4A — Git-diff scope planner: COMPLETE**
- `tests/uirig/planner.ts` and `planner.spec.ts` implement and test changed-path planning and Git diff retrieval.
- Planner tests passed: 11 tests.

**Step 4B — CLI changed-file scope: IMPLEMENTED; build verification remains**
- Added `tests/uirig/cli-args.ts` and its Vitest spec for `--components`, `--changed`, and `--base=<ref>`.
- Added `tests/uirig/audit-scope.ts` and its spec to resolve explicit component choices alongside changed-path scope.
- Wired CLI parsing, Git diff retrieval, and scope selection into `runner.ts`.
- Focused tests passed: 29 total (`cli-args` 10, `planner` 11, `audit-scope` 8); `npm run typecheck` passed.
- A changed-scope run against `origin/feat/uirig-dogfooding` completed, but found zero relevant paths. That only means the selected comparison produced no relevant component/shared-source paths; confirm the correct base branch before relying on changed-file coverage.
- **Still to implement:** built-artifact verification using `vite preview` to audit `dist/`.

### Full baseline sweep — COMPLETE
- Ran the full 50-component audit with `npx tsx tests/uirig/runner.ts`.
- Completed in `379830ms` (about 6 minutes 20 seconds).
- Report: `v2/lib/.uirig/audit-report.json`.
- Counts: 84 `component-defect`; 0 `upstream-tool-bug`; 0 `harness-artifact`; 0 `false-positive`.
- Findings are not yet individually reviewed or triaged. Treat these as audit classifications pending human review, not confirmed product defects.
- The audit’s repeated sample-harness `h3` findings may be shared harness noise; inspect the harness and report evidence before filing component fixes.

## Next Work (Recommended Order)

1. **Review the 84 baseline findings.** Summarize by component, engine, violation type, and selector; identify repeated harness-generated findings versus component-specific findings. Do not modify component code until the findings are validated.
2. **Implement built-artifact verification.** Inspect the current runner, Vite configuration, package scripts, and build output before designing the mode. Use `vite preview` to serve built output, ensure the harness resolves components from `dist/` rather than source, and test startup/cleanup and artifact prerequisites.
3. **Validate `--changed` with the correct base.** Use the pull request target branch or actual divergence base, not the feature branch itself. Confirm that a known changed component path selects that component and a shared-source change triggers a full sweep.
4. Re-run relevant Vitest specs and `npm run typecheck` after each implementation increment.

## Carry-Forward Constraints
- Use `http://localhost:4174/...`, not dotted IPv4 hostnames, due to the known `uirig` host parsing issue.
- `--only=<engine>` accepts one engine; omitting it runs all six engines.
- Combined light/dark tokens are generated at `.uirig/ag-tokens-combined.css`.
- The `--changed` option requires an explicit `--base=<ref>`. The earlier `origin/main` attempt failed because that ref was unavailable in the checkout.
- The 50-component sweep takes approximately 6 minutes 20 seconds in this environment.

## Copy-Pasteable Prompt for Next Session

> We are continuing the `@rlevin/uirig@0.3.0` integration in `AgnosticUI/v2/lib`. Read `v2/lib/docs/NEXT_PROMPT.md` first and resume from its current checkpoint. Work in micro-increments, explain the rationale before code, and include Vitest specs for new logic. The full 50-component baseline completed in about 6m20s and produced 84 findings classified as `component-defect`; review and validate these before proposing component fixes. Step 4B's `--changed` / `--base` parser and runner wiring are implemented and focused tests/typecheck passed; built-artifact (`dist/`) verification with `vite preview` remains outstanding. First tell me the status and proposed next micro-step. Before editing any file, request or inspect its exact current contents. Do not repeat the full baseline unless needed.