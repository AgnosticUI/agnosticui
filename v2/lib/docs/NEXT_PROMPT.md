# Session Continuity & Roadmap — Issue #528 (`v2/lib` × `@rlevin/uirig@0.3.1`)

- **Tracking Issue:** [AgnosticUI/agnosticui#528](https://github.com) (*Dogfood `@rlevin/uirig` on `v2/lib` — Rollout Phase 1: FACE Components*)
- **Branch:** `feat/uirig-dogfooding`
- **Governing PRD:** `v2/lib/docs/uirig-dogfooding-prd.md`
- **Last Checkpoint:** 2026-11-24 — **All Steps 1–7 Completed**

---

## Status Legend
- ✅ **Completed** — Verified, tested, and committed
- 🎯 **In Focus / Active** — Current work in progress
- 🔜 **Next on Deck** — Immediate follow-up once the active item finishes
- 📥 **Backlog / Upcoming** — Remaining roadmap milestones

---

## Issue #528 End-to-End Roadmap (100% Complete)

| PRD Step | Status | Milestone & Evidence |
| :--- | :--- | :--- |
| **Step 1: Go/No-Go Gate & `Button` PoC** | ✅ **Completed** | Installed `@rlevin/uirig` + Chromium (`chromium_headless_shell-1255`); validated `tests/uirig/poc-button.html` across all 6 engines (`8.16s`, well under `< 45s` CI budget); logged upstream issues and workarounds (`localhost:4174`, `.uirig/ag-tokens-combined.css`). |
| **Step 2: Shared Component Registry** | ✅ **Completed** | Extracted all **50** Lit component preview templates into `tests/shared/component-registry.ts` (`4/4` specs passing) and re-exported in `tests/visual/preview/registry.ts`. |
| **Step 3: Harness, Triage, Planner & `vite preview` Runner** | ✅ **Completed** | Built isolated source (`index.html`) + built-artifact (`dist.html` + `dist-main.ts` -> `.uirig/preview-dist/` via `vite preview`) harnesses, combined light/dark token loader (`token-scale.ts`), deduplicating classifier (`triage.ts`), `--changed --base=<ref>` planner (`planner.ts`), and `npm run uirig:audit` runner (`34/34` unit specs passing). |
| **Step 4: Calibration & Triage Noise Filtering** | ✅ **Completed** | Upgraded to `@rlevin/uirig@0.3.1` (verifying `UTB-001` dark-mode token drift fixed), filed remaining upstream issues ([`#54`](https://github.com), [`#55`](https://github.com), [`#56`](https://github.com), [`#57`](https://github.com)), and calibrated `triage.ts` (`8/8` specs passing, `716866eea`) to filter light-DOM wrappers, sibling demo collisions (`gap: 16px`), `1px × 1px` SR-only inputs/spans, hidden `1.00:1` overlays, and 8–9 char `generateUniqueId()` suffixes. |
| **Step 5: Phase 1 FACE Component Audit & Fixes** | ✅ **Completed** | Audited all 14 Phase 1 FACE controls (`12` registry templates), verified 6 clean out of the box (`Input`, `Checkbox`, `Radio`, `Fieldset`, `SelectionButtonGroup`, `SelectionCardGroup`), and shipped surgical WCAG 2.5.8 target-size & `+30%` text-expansion layout fixes (`9ebce1056`, `571de4419`) for `Select`, `Combobox`, and `Slider`, verified via `npm run build:no-sync` + `npm run uirig:audit -- --dist`. |
| **Step 6: Non-Blocking CI Spike Workflow** | ✅ **Completed** | Added read-only `.github/workflows/uirig-spike.yml` (`ubuntu-24.04`, `Node 22`, `permissions: contents: read`, `continue-on-error: true`, Playwright Chromium cache, diff-scoped `npm run uirig:audit -- --changed --base=${{ github.event.pull_request.base.sha }}`, and `.uirig/audit-report.json` artifact upload, `67826f142`). |
| **Step 7: Gate 1 Post-Mortem & Issue #528 Closeout** | ✅ **Completed** | Evaluated all 7 PRD Section 3.2 quantitative thresholds in `v2/lib/.uirig/dogfood-log.md`, verified `54/54` unit specs + `tsc --noEmit`, and closed out [AgnosticUI/agnosticui#528](https://github.com). |

---

## Follow-Up Backlog (Post-Issue #528)
1. **Upstream `@rlevin/uirig@0.3.2` Enhancements:** Implement [`AgnosticUI/uirig#54`](https://github.com) (`<slot>` surface background resolution), [`#55`](https://github.com) (IPv4 URL normalization), [`#56`](https://github.com) (skip `1px × 1px` SR-only nodes), [`#57`](https://github.com) (skip `opacity: 0` / `visibility: hidden` nodes), and `--scope` / `--exclude` audit boundaries, then simplify `v2/lib/tests/uirig/triage.ts`.
2. **Optional Polish:** Evaluate `.ag-slider__tick` `--ag-text-secondary` contrast (`3.66:1`) and Phase 2 rollout (`Card`, `Alert`, `Badge`, `Dialog`, `Drawer`, `Tabs`, `Menu`, `Popover`, `Tooltip`, `Toast`, `Header`, `Sidebar`, `Pagination`, `Table`).
