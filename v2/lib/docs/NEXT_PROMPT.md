# Session Continuity & Roadmap — `@rlevin/uirig` Dogfooding (`v2/lib`)

- **Phase 1 Tracking Issue:** [AgnosticUI/agnosticui#528](https://github.com) *(Closed)*
- **Merged Phase 1 PR:** [AgnosticUI/agnosticui#529](https://github.com) *(Merged into `master` at `d6a0eab42`)*
- **Active Branch:** `feat/uirig-phase2-0.4.2`
- **Governing PRD:** `v2/lib/docs/uirig-dogfooding-prd.md`
- **Last Checkpoint:** November 25, 2026 — **Completed Phase 2 (`Layout, Feedback, & Navigation`) `--dist` audit, fixed `Badge`, `Pagination`, and `Sidebar` defects (`126/126` unit specs passing), and verified via `--dist` re-audit.**

---

## Status Legend
- ✅ **Completed** — Verified, audited, patched, and verified in `dist`
- 🎯 **In Focus / Active** — Immediate next step
- 🔜 **Next on Deck** — Immediate follow-up phase
- 📥 **Backlog / Upcoming** — Deferred / conditional phase

---

## Multi-Phase Rollout Status (Aligned with PRD Section 3.1)

| Rollout Phase | Status | Scope & Targets | Milestone & Evidence |
| :--- | :--- | :--- | :--- |
| **Phase 1 (MVP v1): FACE & Core Form Controls** | ✅ **Completed** *(PR `#529`)* | `14` components (`12` registry templates): `Button`, `IconButton`, `Input`, `Checkbox`, `Radio`, `Select`, `Combobox`, `Slider`, `Toggle`, `Fieldset`, `SelectionButton`, `SelectionButtonGroup`, `SelectionCard`, `SelectionCardGroup` | Audited across `light`/`dark` themes and `mobile`/`desktop` viewports; shipped WCAG 2.5.8 target size fixes (`Combobox`, `Slider`) and `+30%` text-expansion overflow fixes (`Select`, `Combobox`), verified via `--dist` and `v2/site` manual sanity check. |
| **Gate 1: Quantitative ROI & Post-Mortem** | ✅ **Completed** *(GO)* | Evaluates Phase 1 metrics against PRD Section 3.2 thresholds | **GO:** `4` confirmed defects fixed, `< 45s` incremental CI overhead (`~10.6s/component`), `100%` auditable coverage. |
| **Upgrade `@rlevin/uirig` to `^0.4.2` (`#54`–`#60`)** | ✅ **Completed** *(Branch `feat/uirig-phase2-0.4.2`)* | [`AgnosticUI/uirig#54`](https://github.com)–[`#60`](https://github.com) | Published `@rlevin/uirig@0.4.2`, bumped `v2/lib` (`playwright@1.64.1 deduped`), added `--scope=#uirig-stage` in `runner.ts` (`runner.spec.ts`), and simplified `triage.ts` (`0` upstream false positives across Phase 2). |
| **Phase 2: Layout, Feedback, & Navigation** | ✅ **Completed** *(Branch `feat/uirig-phase2-0.4.2`)* | `13` v2 components (`11` existing + `2` new templates: `Sidebar`, `Tooltip`; `Table` not yet in `v2/lib`): `Card`, `Alert`, `Badge`, `Dialog`, `Drawer`, `Tabs`, `Menu`, `Popover`, `Tooltip`, `Toast`, `Header`, `Sidebar`, `Pagination` | Audited all `13` components in `--dist` (`0` upstream tool bugs); shipped fixes for `Badge` (`min-width`/`min-height: var(--ag-space-6, 1.5rem)` on `interactive`), `Pagination` (`--ag-space-6` target size + `flex-wrap: wrap` eliminating mobile overflow), and `Sidebar` (`:focus-visible` rings + `display: none` on inactive mobile toggle), re-verified in `--dist` (`126/126` unit specs passing). |
| **Step 8 HITL & PR Merge (`feat/uirig-phase2-0.4.2`)** | 🎯 **In Focus / Active** | Pack `agnosticui-core` tarball into `v2/site` for final manual sanity check & open PR | Optional tarball check (`npm pack` in `v2/lib` -> install in `v2/site`) before opening PR against `master` and evaluating Phase 3 (`*Fx` variants). |
| **Phase 3 (Conditional): Decorative & `*Fx` Variants** | 📥 **Backlog / Upcoming** | Remaining catalog components & `*Fx` variants (`ButtonFx`, `BadgeFx`, `TooltipFx`, `AvatarFx`, `TagFx`, `IconButtonFx`) | Optional polish pass after Phase 2 PR merges. |

---

## Copy-Pasteable Prompt for Next Session

> Read `v2/lib/docs/NEXT_PROMPT.md` and `v2/lib/docs/uirig-dogfooding-prd.md` first.
> Phase 2 (`Layout, Feedback, & Navigation`) is implemented and verified on branch `feat/uirig-phase2-0.4.2` (`@rlevin/uirig@^0.4.2`, `52` registry templates, fixes for `Badge`, `Pagination`, and `Sidebar` verified in `--dist` with `126/126` unit specs passing).
> **Immediate Next Step:**
> 1. Run a final tarball sanity check in `v2/site` (or open the Phase 2 PR from `feat/uirig-phase2-0.4.2` to `master`).
> 2. Decide whether to proceed to **Phase 3 (Conditional): Decorative & `*Fx` Variants** (`ButtonFx`, `BadgeFx`, `TooltipFx`, `AvatarFx`, `TagFx`, `IconButtonFx`).
