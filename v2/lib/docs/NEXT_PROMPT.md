# Session Continuity & Roadmap — `@rlevin/uirig` Dogfooding (`v2/lib`)

- **Phase 1 Tracking Issue:** `AgnosticUI/agnosticui#528` (`https://github.com`, Closed)
- **Merged Phase 1 PR:** `AgnosticUI/agnosticui#529` (`https://github.com`, Merged into `master` at `d6a0eab42`)
- **Merged Phase 2 PR:** `AgnosticUI/agnosticui#530` (`https://github.com`, Merged into `master` at `f3c87d06b`)
- **Active Branch:** `feat/uirig-phase3`
- **Governing PRD:** `v2/lib/docs/uirig-dogfooding-prd.md`
- **Last Checkpoint:** November 25, 2026 — **Completed Phase 3 (`Decorative & *Fx Variants`) `--dist` audit across all 32 remaining components (`57` total registry templates, `0` upstream bugs), fixed `CopyButton`, `EmptyState`, `Tag`, `Breadcrumb`, and `Divider` defects, and verified in `--dist`.**

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
| **Upgrade `@rlevin/uirig` to `^0.4.2` & Phase 2: Layout, Feedback, & Navigation** | ✅ **Completed** *(PR `#530`)* | Upstream `https://github.com`–`60` + `13` v2 components (`Card`, `Alert`, `Badge`, `Dialog`, `Drawer`, `Tabs`, `Menu`, `Popover`, `Tooltip`, `Toast`, `Header`, `Sidebar`, `Pagination`) | Upgraded `@rlevin/uirig@^0.4.2` (`playwright@1.64.1 deduped`), scoped runner to `#uirig-stage`, shipped `Badge`, `Pagination`, and `Sidebar` fixes, updated Linux Docker visual baselines, and merged PR `#530`. |
| **Phase 3: Remaining Catalog & `*Fx` Variants** | ✅ **Completed** *(Branch `feat/uirig-phase3`)* | `32` components (`27` existing + `5` new templates: `AspectRatio`, `Loader`, `ScrollToButton`, `Spinner`, `TooltipFx` = `57` total templates): `Accordion`, `AspectRatio`, `Avatar`, `AvatarFx`, `BadgeFx`, `Breadcrumb`, `ButtonFx`, `Collapsible`, `CopyButton`, `Divider`, `EmptyState`, `Flex`, `Icon`, `IconButtonFx`, `Image`, `IntlFormatter`, `Kbd`, `Link`, `Loader`, `Mark`, `MessageBubble`, `Progress`, `ProgressRing`, `Rating`, `ScrollProgress`, `ScrollToButton`, `SkeletonLoader`, `Spinner`, `Tag`, `TagFx`, `Timeline`, `TooltipFx` | Audited all `32` components in `--dist` (`0` upstream bugs); shipped fixes for `CopyButton` (`visibility: hidden` on inactive slots), `EmptyState` (`--ag-space-6` WCAG 2.5.8 target size on fallback button), `Tag` (`--ag-space-6` target size on `.tag-remove-button`), `Breadcrumb` (removing `white-space: nowrap`), and `Divider` (`white-space: normal` on vertical divider content), re-verified via `--dist`. |
| **Step 8 HITL & Phase 3 PR Merge (`feat/uirig-phase3`)** | 🎯 **In Focus / Active** | Mandatory `v2/site` tarball sanity check across `light`/`dark` themes and `desktop`/`mobile` viewports before merging PR | Run `npm pack` in `v2/lib`, install tarball into `v2/site`, verify audited Phase 3 components (`CopyButton`, `EmptyState`, `Tag`, `Breadcrumb`, `Divider`, etc.) across `light`/`dark` themes and `desktop`/`mobile` viewports, and confirm CI checks pass before merging PR. |

---

## Copy-Pasteable Prompt for Next Session

> Read `v2/lib/docs/NEXT_PROMPT.md` and `v2/lib/docs/uirig-dogfooding-prd.md` first.
> All `57` visual components in `v2/lib` are now covered in `COMPONENT_REGISTRY` and audited across Phases 1 (`#529`), 2 (`#530`), and 3 (`feat/uirig-phase3`).
> **Immediate Next Step (Mandatory Step 8 Verification Before Merge):**
> 1. Run `npm pack` in `v2/lib`, install the tarball into `v2/site`, and manually verify the audited Phase 3 components (`CopyButton`, `EmptyState`, `Tag`, `Breadcrumb`, `Divider`, etc.) across both `light` and `dark` themes and `desktop` and `mobile` viewports.
> 2. Confirm all GitHub Actions CI checks (`visual-regression.yml`, unit tests, build) are green on the Phase 3 PR (`feat/uirig-phase3` -> `master`), update any Linux Docker visual baselines if needed, and merge the PR.
