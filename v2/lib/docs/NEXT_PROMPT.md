# Session Continuity & Roadmap — `@rlevin/uirig` Dogfooding (`v2/lib`)

- **Phase 1 Tracking Issue:** [AgnosticUI/agnosticui#528](https://github.com) *(Closed)*
- **Merged Pull Request:** [AgnosticUI/agnosticui#529](https://github.com) *(Merged into `master` at `d6a0eab42`)*
- **Active Branch:** `feat/uirig-phase2-0.4.2`
- **Governing PRD:** `v2/lib/docs/uirig-dogfooding-prd.md`
- **Last Checkpoint:** November 25, 2026 — **Upgraded `@rlevin/uirig` to `^0.4.2` (`#54`–`#60`), scoped runner to `#uirig-stage`, and pruned obsolete `triage.ts` workarounds; Phase 2 (`Layout, Feedback, & Navigation`) now active.**

---

## Status Legend
- ✅ **Completed** — Verified, audited, patched, and merged
- 🎯 **In Focus / Active** — Immediate next step
- 🔜 **Next on Deck** — Immediate follow-up phase
- 📥 **Backlog / Upcoming** — Deferred / conditional phase

---

## Multi-Phase Rollout Status (Aligned with PRD Section 3.1)

| Rollout Phase | Status | Scope & Targets | Milestone & Evidence |
| :--- | :--- | :--- | :--- |
| **Phase 1 (MVP v1): FACE (Form-Associated Custom Elements) & Core Form Controls** | ✅ **Completed** *(PR `#529`)* | `14` components (`12` registry templates): `Button`, `IconButton`, `Input`, `Checkbox`, `Radio`, `Select`, `Combobox`, `Slider`, `Toggle`, `Fieldset`, `SelectionButton`, `SelectionButtonGroup`, `SelectionCard`, `SelectionCardGroup` | Audited across `light`/`dark` themes and `mobile`/`desktop` viewports; shipped WCAG 2.5.8 target size fixes (`Combobox`, `Slider`) and `+30%` text-expansion overflow fixes (`Select`, `Combobox`), verified via `--dist` and `v2/site` manual sanity check. |
| **Gate 1: Quantitative ROI & Post-Mortem** | ✅ **Completed** *(GO)* | Evaluates Phase 1 metrics against PRD Section 3.2 thresholds | **GO:** `4` confirmed defects fixed, `< 45s` incremental CI overhead (`~10.6s/component`), `100%` auditable coverage. |
| **Upgrade `@rlevin/uirig` to `^0.4.2` (`#54`–`#60`)** | ✅ **Completed** *(Branch `feat/uirig-phase2-0.4.2`)* | [`AgnosticUI/uirig#54`](https://github.com)–[`#60`](https://github.com) | Published `@rlevin/uirig@0.4.2`, bumped `v2/lib` (`playwright@1.64.1 deduped`), added `--scope=#uirig-stage` in `runner.ts` (`runner.spec.ts`), and simplified `triage.ts` (`49/49` unit specs passing). |
| **Phase 2: Layout, Feedback, & Navigation** | 🎯 **In Focus / Active** | `14` components (`11` existing + `3` new templates: `Tooltip`, `Sidebar`, `Table`): `Card`, `Alert`, `Badge`, `Dialog`, `Drawer`, `Tabs`, `Menu`, `Popover`, `Tooltip`, `Toast`, `Header`, `Sidebar`, `Pagination`, `Table` | Add the 3 missing registry templates (`Tooltip`, `Sidebar`, `Table`) in `v2/lib/tests/shared/component-registry.ts`, run `npm run build:no-sync` + `npm run uirig:audit -- --dist`, triage & fix confirmed defects, and run Step 8 HITL `v2/site` verification. |
| **Phase 3 (Conditional): Decorative & `*Fx` Variants** | 📥 **Backlog / Upcoming** | Remaining catalog components & `*Fx` variants | Optional polish pass only if Phase 2 demonstrates positive ROI. |

---

## Copy-Pasteable Prompt for Next Session

> Read `v2/lib/docs/NEXT_PROMPT.md` and `v2/lib/docs/uirig-dogfooding-prd.md` first.
> `@rlevin/uirig@^0.4.2` is installed on branch `feat/uirig-phase2-0.4.2` with `--scope=#uirig-stage` in `runner.ts` and simplified `triage.ts` (`49/49` specs passing).
> **Immediate Next Step — Phase 2 (`Layout, Feedback, & Navigation`):**
> 1. Inspect `v2/lib/tests/shared/component-registry.ts` and the core implementations for `Tooltip`, `Sidebar`, and `Table` (`v2/lib/src/components/{Tooltip,Sidebar,Table}/core/**`), then add those 3 preview templates to `COMPONENT_REGISTRY` (plus companion DOM-render assertions in `component-registry.spec.ts`).
> 2. Run `npm run build:no-sync` and `npm run uirig:audit -- --dist` across the 14 Phase 2 components (`Card`, `Alert`, `Badge`, `Dialog`, `Drawer`, `Tabs`, `Menu`, `Popover`, `Tooltip`, `Toast`, `Header`, `Sidebar`, `Pagination`, `Table`), running overlays (`Dialog`, `Drawer`, `Toast`, `Popover`, `Menu`, `Tooltip`) in isolated single-component runs.
> 3. Triage findings, fix confirmed `component-defect` issues, and run the Step 8 HITL `v2/site` tarball sanity check before opening a PR.
>
> Work in micro-increments, emit complete blocks only, update `v2/lib/docs/NEXT_PROMPT.md` after every completed step, and wrap all CLI commands in subshells outputting to `~/Downloads/cat.txt`.
