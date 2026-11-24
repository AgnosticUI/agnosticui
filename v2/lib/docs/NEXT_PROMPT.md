# Session Continuity & Roadmap — Issue #528 (`v2/lib` × `@rlevin/uirig@0.3.0`)

- **Tracking Issue:** [AgnosticUI/agnosticui#528](https://github.com) (*Dogfood `@rlevin/uirig` on `v2/lib` — Rollout Phase 1: FACE Components*)
- **Branch:** `feat/uirig-dogfooding`
- **Governing PRD:** `v2/lib/docs/uirig-dogfooding-prd.md`
- **Last Checkpoint:** 2026-11-24

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

---

## Issue #528 End-to-End Roadmap

| PRD Step | Status | Milestone & Evidence |
| :--- | :--- | :--- |
| **Step 1: Go/No-Go Gate & `Button` PoC** | ✅ **Completed** | Installed `@rlevin/uirig@0.3.0` + Chromium (`chromium_headless_shell-1255`); validated `tests/uirig/poc-button.html` across all 6 engines (`8.16s`, well under `< 45s` CI budget); logged upstream issues `UTB-001`–`UTB-003` and workarounds (`localhost:4174`, `.uirig/ag-tokens-combined.css`). |
| **Step 2: Shared Component Registry** | ✅ **Completed** | Extracted all **50** Lit component preview templates into `tests/shared/component-registry.ts` (`4/4` specs passing) and re-exported in `tests/visual/preview/registry.ts`. *(Optional sanity check: confirm `npm run test:visual` has `0` diffs.)* |
| **Step 3: Harness, Triage, Planner & `vite preview` Runner** | ✅ **Completed** | Built isolated source (`index.html`) + built-artifact (`dist.html` + `dist-main.ts` -> `.uirig/preview-dist/` via `vite preview`) harnesses, combined light/dark token loader (`token-scale.ts`), deduplicating classifier (`triage.ts`), `--changed --base=<ref>` planner (`planner.ts`), and `npm run uirig:audit` runner (`34/34` unit specs passing). |
| **Step 4: Calibration & Triage Noise Filtering** | 🎯 **In Focus / Active** | Full 50-component baseline sweep completed (`429` raw-triaged findings: `366 component-defect`, `63 upstream-tool-bug`). Aggregate review identified **100+ misclassified harness/SR-only findings** that must be filtered in `triage.ts` (plus fixing `--changed` + `--components` interaction in `audit-scope.ts`) before touching component source code. |
| **Step 5: Phase 1 FACE Component Audit & Fixes** | 🔜 **Next on Deck** | Re-run triage on the **14 Phase 1 FACE components** (`Button`, `IconButton`, `Input`, `Checkbox`, `Radio`, `Select`, `Combobox`, `Slider`, `Toggle`, `Fieldset`, `SelectionButton`, `SelectionButtonGroup`, `SelectionCard`, `SelectionCardGroup`), patch genuine `component-defect` issues in `src/components/*`, and verify `0` regressions. |
| **Step 6: Non-Blocking CI Spike Workflow** | 📥 **Backlog / Upcoming** | Add read-only `.github/workflows/uirig-spike.yml` (`permissions: contents: read`, `continue-on-error: true`, `pull_request` trigger) running diff-scoped `npm run uirig:audit` and recording cold vs. warm timings (`< 45s` target). |
| **Step 7: Gate 1 Post-Mortem & Issue #528 Closeout** | 📥 **Backlog / Upcoming** | Evaluate all 7 PRD Section 3.2 quantitative thresholds (`>= 2` confirmed defects, `>= 70%` signal-to-noise precision, `< 45s` CI overhead, `>= 95%` reproducibility), record formal **Go / Narrow / Stop** decision in `.uirig/dogfood-log.md`, and check off Issue #528. |

---

## 🎯 Active Focus: Baseline Triage Findings to Filter in `triage.ts`

The 50-component baseline sweep (`629,886 ms`, ~10m30s) produced **429 deduplicated findings** (`366 component-defect`, `63 upstream-tool-bug`, `0 harness-artifact`, `0 false-positive`). Inspecting the `366` `component-defect` entries revealed four recurring non-component patterns:

1. **Light-DOM preview harness headings (`47` findings across 23 components):**
   - `h3` section headers (`24x token_drift`, `23x contrast_drop`) in `tests/shared/component-registry.ts` (`!inShadowDom`) were labeled `component-defect` because `HARNESS_SELECTORS` in `triage.ts` only checks `document`, `body`, and `main#uirig-stage`.
2. **Document & light-DOM wrapper elements (`28+` findings):**
   - `document.documentElement` (`9x horizontal_scrollbar`), plus light-DOM wrapper `div` (`10x`), `input` (`8x`), and `p` (`4x`) nodes inside preview templates (`!inShadowDom`).
3. **Visually-hidden screen-reader-only elements (`34+` findings):**
   - `span.selection-button__label-sr` (`10x`), `span.selection-card__label-sr` (`4x`), `span.visually-hidden` (`3x`), and `1px × 1px` visually-hidden native inputs (`input.selection-button__input` `4x`, `input.selection-card__input` `4x`, `input#ag-radio-*` `9x`).
4. **Random `generateUniqueId()` suffixes inflating fingerprint counts:**
   - Selectors like `button#accordion-item-0cv3q6j2a-button` (`3x`) and `input#ag-radio-cvst1j7xn-input` (`3x`) split identical violations across multiple instances of the same component into separate findings.

**Also to check in this step:**
- In `tests/uirig/audit-scope.ts`, passing `--changed --base=master --components=Button` resulted in `0` components selected because `--changed` found `0` relevant paths. Verify whether `--components` should act as an explicit override or union rather than being zeroed out by `--changed`.

---

## Carry-Forward Constraints
- Use `http://localhost:4174/...`, not `127.0.0.1`, due to the `@rlevin/uirig@0.3.0` dotted IPv4 host parsing bug (`UTB-003`).
- `--only=<engine>` accepts a single engine name; omitting it runs all 6 engines (`tokens`, `contrast`, `dark-mode`, `stress`, `cls`, `dom`).
- Combined light + dark tokens are generated at `v2/lib/.uirig/ag-tokens-combined.css`.
- `--changed` requires an explicit `--base=<ref>`; use `master` or `origin/master` (not `origin/main`).
- Full 50-component sweeps take ~10m30s; prefer `--components=<Name>` or `--dist --components=<Name>` (`~8–11s`) during iterative triage tuning, and back up `.uirig/audit-report.json` before running single-component checks.
- Always inspect current file contents before editing, work in micro-increments, and run relevant Vitest specs + `npm run typecheck` after each change.

---

## Copy-Pasteable Prompt for Next Session

> We are continuing the `@rlevin/uirig@0.3.0` integration for [Issue #528](https://github.com) in `AgnosticUI/v2/lib`. Read `v2/lib/docs/NEXT_PROMPT.md` first and resume from **Step 4 (Active Focus)**. First, inspect `v2/lib/tests/uirig/triage.ts`, `v2/lib/tests/uirig/triage.spec.ts`, and `v2/lib/tests/uirig/audit-scope.ts` (writing shell output to `~/Downloads/cat.txt`). Then refine `triage.ts` (with Vitest unit tests) in a micro-increment to: (1) classify light-DOM harness nodes (`h3`, `document.documentElement`, and non-custom-element wrapper tags when `!inShadowDom`) as `harness-artifact`, (2) classify visually-hidden screen-reader-only spans/inputs as `false-positive`, and (3) normalize random `generateUniqueId()` selector suffixes during deduplication so identical multi-instance violations collapse cleanly. Work in micro-increments, explain the rationale and diagram changes before writing code, and wrap all CLI commands in subshells outputting to `~/Downloads/cat.txt`.
