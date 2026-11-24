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
- Created `v2/lib/vite.uirig.config.ts` (Vite server/preview on `http://localhost:4174`, `host: true`, `strictPort: true`, `headers: { 'X-Frame-Options': 'SAMEORIGIN' }`, `css.devSourcemap: true`, `build.sourcemap: true`, `resolve.dedupe: ['lit']`).
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

### Step 4: Changed-File Scope Planner & `vite preview` Built-Artifact Verification — **COMPLETE**
- **Step 4A (`tests/uirig/planner.ts` + `planner.spec.ts`, `11/11` passing):** Maps Git-changed file paths to affected components or triggers a full registry sweep when shared source/token files change.
- **Step 4B (`cli-args.ts`, `audit-scope.ts`, `harness-url.ts`, `dist-artifacts.ts` + specs, `34/34` passing):**
  - Added `--components`, `--changed`, `--base=<ref>`, and `--dist` flags to `runner.ts`.
  - Built static dist harness (`tests/uirig/harness/dist.html` + `dist-main.ts` importing `dist/index.js`) into `.uirig/preview-dist/` via `vite build --config vite.uirig.config.ts` and verified end-to-end serving through `vite preview` (`npm run uirig:audit -- --dist --components=Button` completed in `11.1s`).
  - Verified `--changed --base=master` against `master` (`33` changed docs/test/config files -> `0 relevant path(s); targeted sweep`).

---

## Current Checkpoint — 2026-11-24

### Full 50-Component Baseline Sweep — Aggregate Triage Breakdown
- Generated on 2026-11-24 in `629,886 ms` (~10m30s) across all 50 components: **429 total findings** (`366 component-defect`, `63 upstream-tool-bug`, `0 harness-artifact`, `0 false-positive`).
- **Aggregate review of the 366 `component-defect` classifications revealed major harness/tool noise that must be filtered in `triage.ts` before fixing components:**
  1. **Light-DOM preview harness headings (`47` findings across 23 components):** `h3` section titles (`24x token_drift`, `23x contrast_drop`) in `component-registry.ts` (`!inShadowDom`) were classified as `component-defect` because `HARNESS_SELECTORS` only listed `document`, `body`, and `main#uirig-stage`.
  2. **Document/wrapper light-DOM selectors (`28+` findings):** `document.documentElement` (`9x horizontal_scrollbar`), plus light-DOM wrapper `div` (`10x`), `input` (`8x`), and `p` (`4x`) elements inside preview templates (`!inShadowDom`).
  3. **Visually-hidden screen-reader-only elements (`34+` findings):** `span.selection-button__label-sr` (`10x`), `span.selection-card__label-sr` (`4x`), `span.visually-hidden` (`3x`), and `1px × 1px` visually-hidden native inputs (`input.selection-button__input` `4x`, `input.selection-card__input` `4x`, `input#ag-radio-*` `9x`).
  4. **Random ID inflation in fingerprint deduplication:** `generateUniqueId()` embeds random suffixes in selectors (e.g., `button#accordion-item-0cv3q6j2a-button`, `input#ag-radio-cvst1j7xn-input`), splitting identical violations on repeated template instances into separate findings.

---

## Next Work

1. **Refine `tests/uirig/triage.ts` (and `triage.spec.ts`) to eliminate harness & SR-only noise:**
   - Classify light-DOM harness selectors (`!inShadowDom` elements outside `<ag-*>` custom elements, `document.documentElement`, and preview `h3` headings) as `harness-artifact`.
   - Classify visually-hidden SR-only selectors (`*.visually-hidden`, `*__label-sr`) as `false-positive` (or `upstream-tool-bug`).
   - Normalize random `generateUniqueId()` suffixes in `deduplicateViolations` fingerprints so identical violations across multiple instances collapse into a single finding with accurate `totalOccurrences`.
2. **Verify `tests/uirig/audit-scope.ts` interaction when both `--changed` and `--components` are passed** (currently `0 relevant path(s)` from `--changed` resulted in `0` selected components even with `--components=Button`).
3. **Re-run a targeted audit (or full 50-component sweep if desired)** with the updated triage rules to isolate genuine component defects before editing any `src/components/*` files.
4. Run relevant Vitest specs and `npm run typecheck` after each implementation increment.

## Carry-Forward Constraints
- Use `http://localhost:4174/...`, not dotted IPv4 hostnames, due to the known `uirig` host parsing issue (`UTB-003`).
- `--only=<engine>` accepts one engine; omitting it runs all six engines.
- Combined light/dark tokens are generated at `.uirig/ag-tokens-combined.css`.
- `--changed` requires an explicit `--base=<ref>`; use `master` or `origin/master` (not `origin/main`).
- The full 50-component sweep takes approximately 10m30s in this environment.
- Before editing, inspect the exact current contents of the files involved. Work in micro-increments and include tests for new logic.

## Copy-Pasteable Prompt for Next Session

> We are continuing the `@rlevin/uirig@0.3.0` integration in `AgnosticUI/v2/lib`. Read `v2/lib/docs/NEXT_PROMPT.md` first and resume from its current checkpoint. Step 4 (`--changed` scope planner and `vite preview` built-artifact verification) is complete and committed. Next, inspect `v2/lib/tests/uirig/triage.ts`, `v2/lib/tests/uirig/triage.spec.ts`, and `v2/lib/tests/uirig/audit-scope.ts` before editing, then refine `triage.ts` in a micro-increment (with Vitest specs) to filter light-DOM harness artifacts (`h3`, `document.documentElement`, wrapper divs), SR-only false positives, and random `generateUniqueId()` selector suffixes before re-evaluating genuine component findings. Work in micro-increments, explain the rationale and diagram new concepts before code, and wrap CLI commands in subshells writing to `~/Downloads/cat.txt`.
