# Session Continuity & Next Prompt — AgnosticUI (`v2/lib`) × `@rlevin/uirig` Integration

## Session Operating Rules (Carry Forward)
1. **Work in Micro-Increments:** One logical file or module per turn.
2. **Co-Develop Logic & Specs:** Every new logic module includes a runnable Vitest `.spec.ts` file.
3. **Explain "Why" First + Diagram New Concepts:** Plain-language rationale and ASCII diagram before code.
4. **Zero Placeholders & Complete Blocks Only:** Always emit complete functions, types, or files—never `// ... existing code`.
5. **Subshell-Wrapped CLI Commands:** Always wrap shell commands in `( [ -d v2/lib ] && cd v2/lib ... )` so the user's working directory returns to the repository root automatically.
6. **Abbreviation Rule:** Expand acronyms on first use in each response.

---

## Completed Steps (Verified & Committed)

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

## Immediate Next Step (Resume Here)

### Step 4: Implement Git-Diff Scope Planner & Build-Time Verification
1. **Step 4A — Git-Diff Scope Planner (`v2/lib/tests/uirig/planner.ts` + `v2/lib/tests/uirig/planner.spec.ts`):**
   - Implement `planAuditScope(changedPaths)` and `getGitChangedFiles(baseRef)` to map modified `src/components/<Name>/**` files to targeted `ComponentName` audits, escalate `src/styles/**` / `v2/theme-registry/**` / `src/shared/**` / `src/utils/**` changes to a full 50-component sweep, and ignore non-UI docs/site changes.
2. **Step 4B — Wire `--changed` / `--base` into `runner.ts` + Built-Artifact Verification (`dist/`):**
   - Add `--changed` and `--base=<ref>` CLI flags to `v2/lib/tests/uirig/runner.ts` (with a unit-tested CLI arg parser) and add a `--mode=build` / `vite preview` verification path for built `dist/` artifacts.
3. **Step 5 (After Step 4):** Execute the full 50-component baseline sweep (`npm run uirig:audit`), inspect `.uirig/audit-report.json`, and triage every finding before opening component fix PRs or upstream `AgnosticUI/uirig` issues.

---

## Copy-Pasteable Prompt to Start Next Session

> We are continuing the `@rlevin/uirig` (`0.3.0`) integration in `AgnosticUI/v2/lib`. Please review `NEXT_PROMPT.md` and begin **Step 4A: Implement Git-Diff Scope Planner (`v2/lib/tests/uirig/planner.ts` + `v2/lib/tests/uirig/planner.spec.ts`)**. First output a single consolidated, read-only CLI block (`{ ...; } > ~/Downloads/step4-context.txt`) to inspect `v2/lib/tests/uirig/runner.ts`, `v2/lib/tests/shared/component-registry.ts`, and `v2/lib/vite.uirig.config.ts` so you have exact file contents before writing code.
