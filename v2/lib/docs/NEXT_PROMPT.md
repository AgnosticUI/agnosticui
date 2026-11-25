# Session Continuity & Roadmap — Issue #528 (`v2/lib` × `@rlevin/uirig@0.3.1`)

- **Tracking Issue:** [AgnosticUI/agnosticui#528](https://github.com) (*Dogfood `@rlevin/uirig` on `v2/lib` — Rollout Phase 1: FACE Components*)
- **Pull Request:** [AgnosticUI/agnosticui#529](https://github.com)
- **Branch:** `feat/uirig-dogfooding`
- **Governing PRD:** `v2/lib/docs/uirig-dogfooding-prd.md`
- **Last Checkpoint:** 2026-11-24 — **Steps 1–7 Completed; Step 8 (HITL `v2/site` Sanity Check) Active**

---

## Status Legend
- ✅ **Completed** — Verified, tested, and committed
- 🎯 **In Focus / Active** — Current work in progress
- 🔜 **Next on Deck** — Immediate follow-up once the active item finishes
- 📥 **Backlog / Upcoming** — Remaining roadmap milestones

---

## Issue #528 End-to-End Roadmap

| PRD Step | Status | Milestone & Evidence |
| :--- | :--- | :--- |
| **Step 1: Go/No-Go Gate & `Button` PoC** | ✅ **Completed** | Installed `@rlevin/uirig` + Chromium (`chromium_headless_shell-1255`); validated `tests/uirig/poc-button.html` across all 6 engines (`8.16s`, well under `< 45s` CI budget); logged upstream issues and workarounds (`localhost:4174`, `.uirig/ag-tokens-combined.css`). |
| **Step 2: Shared Component Registry** | ✅ **Completed** | Extracted all **50** Lit component preview templates into `tests/shared/component-registry.ts` (`4/4` DOM-render specs passing) and re-exported in `tests/visual/preview/registry.ts`. |
| **Step 3: Harness, Triage, Planner & `vite preview` Runner** | ✅ **Completed** | Built isolated source (`index.html` + `source-main.ts`) and built-artifact (`dist.html` + `dist-main.ts` -> `.uirig/preview-dist/` via `vite preview`) harnesses, mode-matched light/dark token loader (`token-scale.ts`), deduplicating classifier (`triage.ts`), `--changed --base=<ref>` planner (`planner.ts`), and `npm run uirig:audit` runner (`35/35` unit specs passing). |
| **Step 4: Calibration & Triage Noise Filtering** | ✅ **Completed** | Upgraded to `@rlevin/uirig@0.3.1` (verifying `UTB-001` dark-mode token drift fixed), filed remaining upstream issues ([`#54`](https://github.com), [`#55`](https://github.com), [`#56`](https://github.com), [`#57`](https://github.com), [`#58`](https://github.com)), and calibrated `triage.ts` (`8/8` specs passing) to filter light-DOM wrappers, sibling demo collisions (`gap: 16px`), `1px × 1px` SR-only inputs/spans, hidden `1.00:1` overlays, and 8–9 char `generateUniqueId()` suffixes. |
| **Step 5: Phase 1 FACE Component Audit & Fixes** | ✅ **Completed** | Audited all 14 Phase 1 FACE controls (`12` registry templates), verified 6 clean out of the box (`Input`, `Checkbox`, `Radio`, `Fieldset`, `SelectionButtonGroup`, `SelectionCardGroup`), and shipped surgical WCAG 2.5.8 target-size & `+30%` text-expansion layout fixes (`9ebce1056`, `646f15b5f`) for `Select`, `Combobox`, and `Slider`, verified via `npm run build:no-sync` + `npm run uirig:audit -- --dist`. |
| **Step 6: Non-Blocking CI Spike Workflow** | ✅ **Completed** | Added read-only `.github/workflows/uirig-spike.yml` (`ubuntu-24.04`, `Node 22`, `permissions: contents: read`, `continue-on-error: true`, Playwright Chromium cache, diff-scoped `npm run uirig:audit -- --changed --base=${{ github.event.pull_request.base.sha }}`, and `.uirig/audit-report.json` artifact upload, `67826f142`). |
| **Step 7: Gate 1 Post-Mortem & Issue #528 Closeout** | ✅ **Completed** | Recorded the full Gate 1 quantitative evaluation below (also mirrored locally in gitignored `v2/lib/.uirig/dogfood-log.md`), verified `55/55` unit specs + `tsc --noEmit`, and closed [AgnosticUI/agnosticui#528](https://github.com). |
| **Step 8: Human-in-the-Loop (`v2/site`) Manual Sanity Check** | 🎯 **In Focus / Active** | Pack `v2/lib`, reinstall the local tarball into `v2/site`, and manually verify all 14 Phase 1 FACE component docs pages in the browser (especially `Select`, `Combobox`, and `Slider` across light/dark modes and mobile/desktop viewports) before merging [PR #529](https://github.com). |

---

## 🎯 Active Focus: Human-in-the-Loop (`v2/site`) Manual Verification Protocol

Whenever a rollout phase modifies component code in `v2/lib/src/`, run this two-tab verification workflow from the repository root before merging:

### Tab 1 — Validate & Pack `v2/lib` Tarball
```bash
# Tab 1 -- from <root> of project
(cd v2/lib && npm run lint && npm run typecheck && npm run test && npm run build && npm pack)
```

### Tab 2 — Reinstall Local Tarball in `v2/site` & Launch Docs Dev Server
Once all checks pass and `npm pack` builds the `.tgz` tarball in `v2/lib/`:
```bash
# Tab 2 -- from <root> of project
(cd v2/site && npm run reinstall:lib && npm run docs:dev)
```

### Phase 1 Component Docs Checklist (`14 / 14` Controls)
Manually inspect each component page in `v2/site` (checking light/dark theme toggle, desktop + narrow mobile width, and keyboard/pointer interaction):
- [ ] `Button` (`ag-button`)
- [ ] `IconButton` (`ag-icon-button`)
- [ ] `Input` (`ag-input`)
- [ ] `Checkbox` (`ag-checkbox`)
- [ ] `Radio` (`ag-radio`)
- [ ] `Select` (`ag-select`) — verify horizontal label layout (`label-position="start"` / `"end"`) does not overflow narrow viewports
- [ ] `Combobox` (`ag-combobox`) — verify `size="small"` toggle button (`24px × 24px`) and horizontal label layout at narrow widths
- [ ] `Slider` (`ag-slider`) — verify `size="small"` thumb (`24px × 24px`), keyboard focus tooltip, ticks, and live-region announcements
- [ ] `Toggle` (`ag-toggle`)
- [ ] `Fieldset` (`ag-fieldset`)
- [ ] `SelectionButton` & `SelectionButtonGroup`
- [ ] `SelectionCard` & `SelectionCardGroup`

---

## Gate 1 Quantitative Post-Mortem Record (PRD Section 3.2 — 2026-11-24)

- **Gate 1 Decision:** **GO — Narrowed Scope Until Upstream `#54`–`#58` Ship** (Keep non-blocking diff-scoped CI spike active for Phase 1 FACE controls; batch upstream `uirig` fixes into `@rlevin/uirig@0.3.2` before Phase 2 expansion).

| PRD Metric | Measured Result | Gate 1 Threshold | Status |
| :--- | :--- | :--- | :--- |
| **1. Actionable Confirmed Yield** | **4 net-new confirmed defects fixed** across 3 Phase 1 components (`Select` `+38.61px` horizontal overflow; `Combobox` `20px -> 24px` small toggle target + `+89.61px` horizontal overflow; `Slider` `20px -> 24px` small thumb target). | `>= 2` confirmed `component-defect` findings (`>= 1` `net-new`) | **PASS** |
| **2. Tool Signal-to-Noise Precision** | Raw `0.3.1` Phase 1 sweep yielded `32` post-harness items vs. `38` upstream false positives (`45.7%` raw precision before `triage.ts`; `100%` after `triage.ts` classification). | `>= 70%` (`<= 30%` raw upstream false-positive rate) | **CONDITIONAL** (requires upstream `#54`–`#58` before Phase 2) |
| **3. Execution Disposition Coverage** | `12 / 12` Phase 1 registry templates (`14 / 14` target FACE controls) reached terminal triaged outcomes (`0` silent skips or runtime crashes). | `100%` | **PASS** |
| **4. Auditable Coverage** | `14 / 14` Phase 1 FACE controls (`100%`) audited across `mobile (375x812)` + `desktop (1440x900)` × `light` + `dark`. | `>= 90%` | **PASS** |
| **5. Result-Level Reproducibility** | Re-running `Select` (`0` defects) and `Combobox` (`24px` toggle + `0` overflow) across identical builds produced deterministic outcomes (`100%`). | `>= 95%` | **PASS** |
| **6. Changed-Component Selector Accuracy** | `planner.spec.ts` (`12/12` tests) + live `--changed --base=master` verification (`33` non-component files -> `0` false sweeps). | `>= 95%` | **PASS** |
| **7. Wall-Clock Execution Overhead** | Single-component incremental audit: `~10.6s`; 2-component PR diff (`Select,Combobox`): `21.4s`; 12-template Phase 1 sweep: `~2m10s`. | Incremental CI `< 45s`; Full local `< 5 min` | **PASS** |

---

## Follow-Up Backlog (Post-Issue #528)
1. **Upstream `@rlevin/uirig@0.3.2` Enhancements:** Implement [`AgnosticUI/uirig#54`](https://github.com), [`#55`](https://github.com), [`#56`](https://github.com), [`#57`](https://github.com), and [`#58`](https://github.com), then simplify `v2/lib/tests/uirig/triage.ts`.
2. **Optional Polish & Phase 2 Rollout:** Evaluate `.ag-slider__tick` `--ag-text-muted` contrast and Phase 2 rollout (`Card`, `Alert`, `Badge`, `Dialog`, `Drawer`, `Tabs`, `Menu`, `Popover`, `Tooltip`, `Toast`, `Header`, `Sidebar`, `Pagination`, `Table`), including the mandatory HITL `v2/site` tarball sanity check before merging.
