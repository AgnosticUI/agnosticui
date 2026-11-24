# Session Continuity & Roadmap — Issue #528 (`v2/lib` × `@rlevin/uirig@0.3.1`)

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
7. **Update `NEXT_PROMPT.md` After Every Step:** Immediately update roadmap statuses and evidence in `v2/lib/docs/NEXT_PROMPT.md` as soon as any step completes.

---

## Issue #528 End-to-End Roadmap

| PRD Step | Status | Milestone & Evidence |
| :--- | :--- | :--- |
| **Step 1: Go/No-Go Gate & `Button` PoC** | ✅ **Completed** | Installed `@rlevin/uirig` + Chromium (`chromium_headless_shell-1255`); validated `tests/uirig/poc-button.html` across all 6 engines (`8.16s`, well under `< 45s` CI budget); logged upstream issues and workarounds (`localhost:4174`, `.uirig/ag-tokens-combined.css`). |
| **Step 2: Shared Component Registry** | ✅ **Completed** | Extracted all **50** Lit component preview templates into `tests/shared/component-registry.ts` (`4/4` specs passing) and re-exported in `tests/visual/preview/registry.ts`. |
| **Step 3: Harness, Triage, Planner & `vite preview` Runner** | ✅ **Completed** | Built isolated source (`index.html`) + built-artifact (`dist.html` + `dist-main.ts` -> `.uirig/preview-dist/` via `vite preview`) harnesses, combined light/dark token loader (`token-scale.ts`), deduplicating classifier (`triage.ts`), `--changed --base=<ref>` planner (`planner.ts`), and `npm run uirig:audit` runner (`34/34` unit specs passing). |
| **Step 4: Calibration & Triage Noise Filtering** | ✅ **Completed** | Upgraded to `@rlevin/uirig@0.3.1` (verifying `UTB-001` dark-mode token drift fixed), filed remaining upstream issues ([`#54`](https://github.com), [`#55`](https://github.com), [`#56`](https://github.com), [`#57`](https://github.com)), and calibrated `triage.ts` (`8/8` specs passing, `716866eea`) to filter light-DOM wrappers, sibling demo collisions (`gap: 16px`), `1px × 1px` SR-only inputs/spans, hidden `1.00:1` overlays, and 8–9 char `generateUniqueId()` suffixes. |
| **Step 5: Phase 1 FACE Component Audit & Fixes** | ✅ **Completed** | Audited all 14 Phase 1 FACE controls (`12` registry templates), verified 6 clean out of the box (`Input`, `Checkbox`, `Radio`, `Fieldset`, `SelectionButtonGroup`, `SelectionCardGroup`), and shipped three surgical accessibility & layout fixes (`9ebce1056`, `571de4419`) verified via `npm run build:no-sync` + `npm run uirig:audit -- --dist`:<br>1. **`Select` (`src/shared/form-control-styles.ts`):** Eliminated `+38.61px` horizontal flex overflow under `+30%` text expansion (`0` defects remaining).<br>2. **`Combobox` (`src/components/Combobox/core/_Combobox.ts`):** Raised `size="small"` toggle button from `20px × 20px` to `24px × 24px` (WCAG 2.5.8) and eliminated `+89.61px` horizontal flex overflow (`180/180` unit tests passing).<br>3. **`Slider` (`src/components/Slider/core/_Slider.ts`):** Raised `size="small"` thumb target from `20px × 20px` to `24px × 24px` (WCAG 2.5.8; `33/33` unit tests passing). |
| **Step 6: Non-Blocking CI Spike Workflow** | ✅ **Completed** | Added read-only `.github/workflows/uirig-spike.yml` (`ubuntu-24.04`, `Node 22`, `permissions: contents: read`, `continue-on-error: true`, Playwright Chromium cache, diff-scoped `npm run uirig:audit -- --changed --base=${{ github.event.pull_request.base.sha }}`, and `.uirig/audit-report.json` artifact upload). |
| **Step 7: Gate 1 Post-Mortem & Issue #528 Closeout** | 🎯 **In Focus / Active** | Record formal **Gate 1 Go / Narrow / Stop** evaluation against all 7 PRD Section 3.2 quantitative thresholds in `v2/lib/.uirig/dogfood-log.md`, run final verification (`vitest`, `typecheck`, `build:no-sync`), and post the Phase 1 summary + Gate 1 post-mortem to close [Issue #528](https://github.com). |

---

## 🎯 Active Focus: Step 7 — Gate 1 Post-Mortem & Issue #528 Closeout

### Gate 1 Quantitative Scorecard (PRD Section 3.2)
1. **Confirmed Component Defects (`>= 2` required):** **3 confirmed defects fixed & verified** (`Select` horizontal overflow, `Combobox` 20px -> 24px toggle target + horizontal overflow, `Slider` 20px -> 24px small thumb target).
2. **Incremental PR Runtime (`< 45s` budget):** **~10.6s per component** (~21.4s for `Select,Combobox` combined; diff-scoped `--changed` skips unchanged PRs in `< 1s`).
3. **Zero Blocking CI Failures:** `.github/workflows/uirig-spike.yml` runs with `permissions: contents: read` and `continue-on-error: true`.
4. **Upstream Tool Bugs Logged (`AgnosticUI/uirig`):** `UTB-001` fixed in `@rlevin/uirig@0.3.1`; `UTB-002`–`UTB-005` tracked in [`#54`](https://github.com), [`#55`](https://github.com), [`#56`](https://github.com), and [`#57`](https://github.com).
5. **Recommended Gate 1 Decision:** **GO (Conditional on Upstream `#54`–`#57` + `--scope`):** Keep diff-scoped CI spike active for Phase 1 FACE controls while batching upstream `uirig` improvements before Phase 2 expansion.

---

## Carry-Forward Constraints
- Tool version is `@rlevin/uirig@0.3.1`.
- Use `http://localhost:4174/...`, not `127.0.0.1`, due to [`AgnosticUI/uirig#55`](https://github.com).
- `--changed` requires an explicit `--base=<ref>`; use `master` or `origin/master` (not `origin/main`).
- Always inspect current file contents before editing, work in micro-increments, and update `v2/lib/docs/NEXT_PROMPT.md` after every completed step.

---

## Copy-Pasteable Prompt for Next Session

> We are completing **Step 7 (Gate 1 Post-Mortem & Issue #528 Closeout)** for [Issue #528](https://github.com) in `AgnosticUI/v2/lib`. Read `v2/lib/docs/NEXT_PROMPT.md` first. Steps 1–6 are complete and committed. Inspect `v2/lib/.uirig/dogfood-log.md` and `v2/lib/docs/uirig-dogfooding-prd.md` (Section 3.2), append the formal Gate 1 Post-Mortem scorecard to `.uirig/dogfood-log.md`, run the full `tests/uirig` + `tests/shared` Vitest suite and `npm run typecheck`, and prepare the final checklist/post-mortem summary for [Issue #528](https://github.com). Wrap all CLI commands in subshells outputting to `~/Downloads/cat.txt`.
