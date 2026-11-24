# Session Continuity & Roadmap — Issue #528 (`v2/lib` × `@rlevin/uirig@0.3.1`)

- **Tracking Issue:** [AgnosticUI/agnosticui#528](https://github.com) (*Dogfood `@rlevin/uirig` on `v2/lib` — Rollout Phase 1: FACE Components*)
- **Branch:** `feat/uirig-dogfooding`
- **Governing PRD:** `v2/lib/docs/uirig-dogfooding-prd.md`
- **Last Checkpoint:** 2026-11-24 (`571de4419`)

---

## Status Legend
- ✅ **Completed** — Verified, tested, and committed
- 🎯 **In Focus / Active** — Current work in progress
- 🔜 **Next on Deck** — Immediate follow-up once the active item finishes
- 📥 **Backlog / Upcoming** — Remaining roadmap milestones to close Issue #528

---

## Session Operating Rules (Carry Forward)
1. **Work in Micro-Increments:** One logical file or module per turn.
2. **Co-Develop Logic & Specs:** Every new logic module includes a runnable Vitest `.spec.ts` file.
3. **Explain "Why" First + Diagram New Concepts:** Plain-language rationale and ASCII diagram before code.
4. **Zero Placeholders & Complete Blocks Only:** Always emit complete functions, types, or files—never `// ... existing code`.
5. **Subshell-Wrapped CLI Commands:** Always wrap shell commands in `( [ -d v2/lib ] && cd v2/lib ... ) > ~/Downloads/cat.txt 2>&1` so the working directory returns to the repo root automatically and output can be inspected cleanly.
6. **Abbreviation Rule:** Expand acronyms on first use in each response.
7. **Update `NEXT_PROMPT.md` After Every Step:** Immediately update roadmap statuses and evidence in `v2/lib/docs/NEXT_PROMPT.md` as soon as any step completes.

---

## Issue #528 End-to-End Roadmap

| PRD Step | Status | Milestone & Evidence |
| :--- | :--- | :--- |
| **Step 1: Go/No-Go Gate & `Button` PoC** | ✅ **Completed** | Installed `@rlevin/uirig` + Chromium (`chromium_headless_shell-1255`); validated `tests/uirig/poc-button.html` across all 6 engines (`8.16s`, well under `< 45s` CI budget); logged upstream issues and workarounds (`localhost:4174`, `.uirig/ag-tokens-combined.css`). |
| **Step 2: Shared Component Registry** | ✅ **Completed** | Extracted all **50** Lit component preview templates into `tests/shared/component-registry.ts` (`4/4` specs passing) and re-exported in `tests/visual/preview/registry.ts`. |
| **Step 3: Harness, Triage, Planner & `vite preview` Runner** | ✅ **Completed** | Built isolated source (`index.html`) + built-artifact (`dist.html` + `dist-main.ts` -> `.uirig/preview-dist/` via `vite preview`) harnesses, combined light/dark token loader (`token-scale.ts`), deduplicating classifier (`triage.ts`), `--changed --base=<ref>` planner (`planner.ts`), and `npm run uirig:audit` runner (`34/34` unit specs passing). |
| **Step 4: Calibration & Triage Noise Filtering** | ✅ **Completed** | Upgraded to `@rlevin/uirig@0.3.1` (verifying `UTB-001` dark-mode token drift fixed), filed remaining upstream issues ([`#54`](https://github.com), [`#55`](https://github.com), [`#56`](https://github.com), [`#57`](https://github.com)), and calibrated `triage.ts` (`8/8` specs passing, `716866eea`) to filter light-DOM wrappers, sibling demo collisions (`gap: 16px`), `1px × 1px` SR-only inputs/spans, hidden `1.00:1` overlays, and 8–9 char `generateUniqueId()` suffixes. |
| **Step 5: Phase 1 FACE Component Audit & Fixes** | ✅ **Completed** | Audited all 14 Phase 1 FACE controls (`12` registry templates), verified 6 clean out of the box (`Input`, `Checkbox`, `Radio`, `Fieldset`, `SelectionButtonGroup`, `SelectionCardGroup`), and shipped three surgical accessibility & layout fixes (`9ebce1056`, `571de4419`) verified via `npm run build:no-sync` + `npm run uirig:audit -- --dist`:<br>1. **`Select` (`src/shared/form-control-styles.ts`):** Eliminated `+38.61px` horizontal flex overflow under `+30%` text expansion (`0` defects remaining).<br>2. **`Combobox` (`src/components/Combobox/core/_Combobox.ts`):** Raised `size="small"` toggle button from `20px × 20px` to `24px × 24px` (WCAG 2.5.8) and eliminated `+89.61px` horizontal flex overflow (`180/180` unit tests passing).<br>3. **`Slider` (`src/components/Slider/core/_Slider.ts`):** Raised `size="small"` thumb target from `20px × 20px` to `24px × 24px` (WCAG 2.5.8; `33/33` unit tests passing). *(Optional follow-up polish: `.ag-slider__tick` uses `--ag-text-secondary` at `3.66:1` contrast.)* |
| **Step 6: Non-Blocking CI Spike Workflow** | 🎯 **In Focus / Active** | Add read-only `.github/workflows/uirig-spike.yml` (`permissions: contents: read`, `continue-on-error: true`, `pull_request` trigger) running diff-scoped `npm run uirig:audit` and recording cold vs. warm timings (`< 45s` target). |
| **Step 7: Gate 1 Post-Mortem & Issue #528 Closeout** | 📥 **Backlog / Upcoming** | Evaluate all 7 PRD Section 3.2 quantitative thresholds (`>= 2` confirmed defects, `>= 70%` signal-to-noise precision, `< 45s` CI overhead, `>= 95%` reproducibility), record formal **Go / Narrow / Stop** decision in `.uirig/dogfood-log.md`, and check off Issue #528. |

---

## 🎯 Active Focus: Step 6 — Non-Blocking CI Spike Workflow

### Goal
Create a read-only, non-blocking GitHub Actions workflow (`.github/workflows/uirig-spike.yml`) that runs diff-scoped `@rlevin/uirig` audits on `pull_request` events touching `v2/lib/**` without gating merges (`continue-on-error: true`).

### Key Implementation Details to Inspect First
1. Inspect existing workflows under `.github/workflows/` (e.g. Playwright / Vitest / build workflows) so `.github/workflows/uirig-spike.yml` matches repo Node.js version, working directory (`v2/lib`), `npm ci` caching, and Playwright Chromium installation conventions.
2. Verify how `--changed --base=${{ github.event.pull_request.base.sha }}` (or `origin/${{ github.base_ref }}`) behaves when `actions/checkout` fetches PR history (`fetch-depth: 0`).
3. Ensure `package.json` has a clean CI script (`uirig:audit:ci` or `npm run uirig:audit -- --changed --base=...`) if referenced by PRD Section 4.1 Step 6.

---

## Carry-Forward Constraints
- Tool version is `@rlevin/uirig@0.3.1` (do not downgrade to `0.3.0`).
- Use `http://localhost:4174/...`, not `127.0.0.1`, due to [`AgnosticUI/uirig#55`](https://github.com).
- Combined light + dark tokens are generated at `v2/lib/.uirig/ag-tokens-combined.css`.
- `--changed` requires an explicit `--base=<ref>`; use `master` or `origin/master` (not `origin/main`).
- Always inspect current file contents before editing, work in micro-increments, and update `v2/lib/docs/NEXT_PROMPT.md` after every completed step.

---

## Copy-Pasteable Prompt for Next Session

> We are continuing the `@rlevin/uirig@0.3.1` integration for [Issue #528](https://github.com) in `AgnosticUI/v2/lib`. Read `v2/lib/docs/NEXT_PROMPT.md` first and resume from **Step 6 (Active Focus: Non-Blocking CI Spike Workflow)**. Steps 1–5 are complete and committed (`571de4419`). First, run a read-only inspection (outputting to `~/Downloads/cat.txt`) of `.github/workflows/` and `v2/lib/package.json` scripts so `.github/workflows/uirig-spike.yml` matches existing Node.js, `npm ci`, and Playwright Chromium conventions. Then create `.github/workflows/uirig-spike.yml` (`permissions: contents: read`, `continue-on-error: true`, `fetch-depth: 0`, diff-scoped `npm run uirig:audit -- --changed --base=...`), commit it, and update `v2/lib/docs/NEXT_PROMPT.md` to mark Step 6 complete before moving to Step 7 (Gate 1 Post-Mortem & Issue #528 Closeout). Work in micro-increments, explain the rationale and diagram new concepts before writing code, and wrap all CLI commands in subshells outputting to `~/Downloads/cat.txt`.
