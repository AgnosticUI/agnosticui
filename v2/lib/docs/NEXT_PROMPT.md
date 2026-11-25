# Session Continuity & Roadmap — `@rlevin/uirig` Dogfooding (`v2/lib`)

- **Phase 1 Tracking Issue:** [AgnosticUI/agnosticui#528](https://github.com) *(Closed)*
- **Merged Pull Request:** [AgnosticUI/agnosticui#529](https://github.com) *(Merged into `master` at `d6a0eab42`)*
- **Active Branch:** `master`
- **Governing PRD:** `v2/lib/docs/uirig-dogfooding-prd.md`
- **Last Checkpoint:** November 24, 2026 — **Phase 1, Gate 1, & Upstream `#54`–`#58` Complete; Phase 2 Unblocked**

---

## Status Legend
- ✅ **Completed** — Verified, audited, patched, and merged
- 🎯 **In Focus / Active** — Current work in progress / unblocked next target
- 🔜 **Next on Deck** — Immediate follow-up phase
- 📥 **Backlog / Upcoming** — Deferred / conditional phase

---

## Multi-Phase Rollout Status (Aligned with PRD Section 3.1)

| Rollout Phase | Status | Scope & Targets | Milestone & Evidence |
| :--- | :--- | :--- | :--- |
| **Phase 1 (MVP v1): FACE (Form-Associated Custom Elements) & Core Form Controls** | ✅ **Completed** *(PR `#529`)* | `14` components (`12` registry templates): `Button`, `IconButton`, `Input`, `Checkbox`, `Radio`, `Select`, `Combobox`, `Slider`, `Toggle`, `Fieldset`, `SelectionButton`, `SelectionButtonGroup`, `SelectionCard`, `SelectionCardGroup` | Audited across `light`/`dark` themes and `mobile`/`desktop` viewports; shipped WCAG 2.5.8 target size fixes (`Combobox`, `Slider`) and `+30%` text-expansion overflow fixes (`Select`, `Combobox`), verified via `--dist` and `v2/site` manual sanity check. |
| **Gate 1: Quantitative ROI & Post-Mortem** | ✅ **Completed** *(GO)* | Evaluates Phase 1 metrics against PRD Section 3.2 thresholds | **GO:** `4` confirmed defects fixed, `< 45s` incremental CI overhead (`~10.6s/component`), `100%` auditable coverage. |
| **Upstream `@rlevin/uirig` Enhancements (`#54`–`#58`)** | ✅ **Completed** *(Closed Upstream)* | [`AgnosticUI/uirig#54`](https://github.com), [`#55`](https://github.com), [`#56`](https://github.com), [`#57`](https://github.com), [`#58`](https://github.com) | Closed upstream in `AgnosticUI/uirig` (`<slot>` surface background resolution, IPv4 URL normalization, `1px × 1px` SR-only skipping, `opacity: 0` / `visibility: hidden` skipping, and `--scope` / `--exclude`). Next: bump `@rlevin/uirig` in `v2/lib`, adopt `--scope="#uirig-stage"`, and simplify `v2/lib/tests/uirig/triage.ts`. |
| **Phase 2: Layout, Feedback, & Navigation** | 🎯 **In Focus / Active** | `14` components (`11` existing + `3` new templates: `Tooltip`, `Sidebar`, `Table`): `Card`, `Alert`, `Badge`, `Dialog`, `Drawer`, `Tabs`, `Menu`, `Popover`, `Tooltip`, `Toast`, `Header`, `Sidebar`, `Pagination`, `Table` | Unblocked by upstream `#54`–`#58` closure; overlays (`Dialog`, `Drawer`, `Toast`, `Popover`, `Menu`, `Tooltip`) run strictly in isolated single-component runs. |
| **Phase 3 (Conditional): Decorative & `*Fx` Variants** | 📥 **Backlog / Upcoming** | Remaining catalog components & `*Fx` variants | Optional polish pass only if Phase 2 demonstrates positive ROI. |

---

## Phase 1 Execution Ledger (Steps 1–8 — 100% Complete)

| PRD Step | Status | Milestone & Evidence |
| :--- | :--- | :--- |
| **Step 1: Go/No-Go Gate & `Button` PoC** | ✅ **Completed** | Installed `@rlevin/uirig` + Chromium (`chromium_headless_shell-1255`); validated `tests/uirig/poc-button.html` across all 6 engines (`8.16s`, well under `< 45s` CI budget); logged upstream issues and workarounds (`localhost:4174`, `.uirig/ag-tokens-combined.css`). |
| **Step 2: Shared Component Registry** | ✅ **Completed** | Extracted all **50** Lit component preview templates into `tests/shared/component-registry.ts` (`4/4` DOM-render specs passing) and re-exported in `tests/visual/preview/registry.ts`. |
| **Step 3: Harness, Triage, Planner & `vite preview` Runner** | ✅ **Completed** | Built isolated source (`index.html` + `source-main.ts`) and built-artifact (`dist.html` + `dist-main.ts` -> `.uirig/preview-dist/` via `vite preview`) harnesses, mode-matched light/dark token loader (`token-scale.ts`), deduplicating classifier (`triage.ts`), `--changed --base=<ref>` planner (`planner.ts`), and `npm run uirig:audit` runner (`55/55` unit specs passing). |
| **Step 4: Calibration & Triage Noise Filtering** | ✅ **Completed** | Upgraded to `@rlevin/uirig@0.3.1` (verifying `UTB-001` dark-mode token drift fixed), filed upstream issues ([`#54`](https://github.com)–[`#58`](https://github.com), now closed upstream), and calibrated `triage.ts` (`8/8` specs passing). |
| **Step 5: Phase 1 FACE Component Audit & Fixes** | ✅ **Completed** | Audited all 14 Phase 1 FACE controls (`12` registry templates), verified 6 clean out of the box (`Input`, `Checkbox`, `Radio`, `Fieldset`, `SelectionButtonGroup`, `SelectionCardGroup`), and shipped surgical WCAG 2.5.8 target-size & `+30%` text-expansion layout fixes for `Select`, `Combobox`, and `Slider`, verified via `npm run build:no-sync` + `npm run uirig:audit -- --dist`. |
| **Step 6: Non-Blocking CI Spike Workflow** | ✅ **Completed** | Added read-only `.github/workflows/uirig-spike.yml` (`ubuntu-24.04`, `Node 22`, `permissions: contents: read`, `continue-on-error: true`, Playwright Chromium cache, diff-scoped `npm run uirig:audit -- --changed --base=${{ github.event.pull_request.base.sha }}`, and `.uirig/audit-report.json` artifact upload). |
| **Step 7: Gate 1 Post-Mortem & Issue #528 Closeout** | ✅ **Completed** | Recorded the full Gate 1 quantitative evaluation below (also mirrored locally in gitignored `v2/lib/.uirig/dogfood-log.md`), verified `82/82` test suites (`1,901` tests) + `tsc --noEmit` + `npm run build`, and closed [AgnosticUI/agnosticui#528](https://github.com). |
| **Step 8: Human-in-the-Loop (`v2/site`) Manual Sanity Check** | ✅ **Completed** | Packed `agnosticui-core-2.0.0-alpha.33.tgz`, installed into `v2/site`, and manually verified all **14 / 14** Phase 1 FACE component docs pages in the browser (`Button`, `IconButton`, `Input`, `Checkbox`, `Radio`, `Select`, `Combobox`, `Slider`, `Toggle`, `Fieldset`, `SelectionButton`, `SelectionButtonGroup`, `SelectionCard`, `SelectionCardGroup`). |

---

## Gate 1 Quantitative Post-Mortem Record (PRD Section 3.2 — November 24, 2026)

- **Gate 1 Decision:** **GO** — High-value WCAG 2.5.8 target size and `+30%` text-expansion layout bugs were caught and verified, and upstream `@rlevin/uirig` issues `#54`–`#58` are now closed upstream.

| PRD Metric | Measured Result | Gate 1 Threshold | Status |
| :--- | :--- | :--- | :--- |
| **1. Actionable Confirmed Yield** | **4 net-new confirmed defects fixed** across 3 Phase 1 components (`Select` `+38.61px` horizontal overflow; `Combobox` `20px -> 24px` small toggle target + `+89.61px` horizontal overflow; `Slider` `20px -> 24px` small thumb target). | `>= 2` confirmed `component-defect` findings (`>= 1` `net-new`) | **PASS** |
| **2. Tool Signal-to-Noise Precision** | `100%` post-triage precision (`45.7%` raw on `0.3.1` prior to upstream `#54`–`#58` fixes). | `>= 70%` | **PASS** *(upstream `#54`–`#58` closed)* |
| **3. Execution Disposition Coverage** | `12 / 12` Phase 1 registry templates (`14 / 14` target FACE controls) reached terminal triaged outcomes (`0` silent skips or runtime crashes). | `100%` | **PASS** |
| **4. Auditable Coverage** | `14 / 14` Phase 1 FACE controls (`100%`) audited across `mobile (375x812)` + `desktop (1440x900)` × `light` + `dark`. | `>= 90%` | **PASS** |
| **5. Result-Level Reproducibility** | Re-running `Select` (`0` defects) and `Combobox` (`24px` toggle + `0` overflow) across identical builds produced deterministic outcomes (`100%`). | `>= 95%` | **PASS** |
| **6. Changed-Component Selector Accuracy** | `planner.spec.ts` (`12/12` tests) + live `--changed --base=master` verification (`33` non-component files -> `0` false sweeps). | `>= 95%` | **PASS** |
| **7. Wall-Clock Execution Overhead** | Single-component incremental audit: `~10.6s`; 2-component PR diff (`Select,Combobox`): `21.4s`; 12-template Phase 1 sweep: `~2m10s`. | Incremental CI `< 45s`; Full local `< 5 min` | **PASS** |

---

## Copy-Pasteable Prompt for Next Session

> Phase 1 (`#528` / PR `#529`), Gate 1, and upstream `@rlevin/uirig` issues [`#54`](https://github.com)–[`#58`](https://github.com) are complete! Read `v2/lib/docs/NEXT_PROMPT.md` and `v2/lib/docs/uirig-dogfooding-prd.md` first, then execute the Phase 2 kickoff in micro-increments:
> 1. **Adopt Latest `@rlevin/uirig` (`#54`–`#58` Fixes):** Check the latest published `@rlevin/uirig` version (`npm view @rlevin/uirig version`), upgrade `@rlevin/uirig` in `v2/lib`, pass `--scope="#uirig-stage"` in `v2/lib/tests/uirig/runner.ts`, and prune obsolete `UTB-*` workarounds from `v2/lib/tests/uirig/triage.ts` + `triage.spec.ts`.
> 2. **Phase 2 Component Audit (`Layout, Feedback, & Navigation`):** Add the 3 missing registry templates (`Tooltip`, `Sidebar`, `Table`) in `v2/lib/tests/shared/component-registry.ts`, run `npm run build:no-sync` + `npm run uirig:audit -- --dist` across the 14 Phase 2 components (`Card`, `Alert`, `Badge`, `Dialog`, `Drawer`, `Tabs`, `Menu`, `Popover`, `Tooltip`, `Toast`, `Header`, `Sidebar`, `Pagination`, `Table`), fix confirmed defects, and execute the Step 8 HITL `v2/site` tarball sanity check before opening a PR.
>
> Work in micro-increments, emit complete blocks only, update `v2/lib/docs/NEXT_PROMPT.md` after every completed step, and wrap all CLI commands in subshells outputting to `~/Downloads/cat.txt`.
