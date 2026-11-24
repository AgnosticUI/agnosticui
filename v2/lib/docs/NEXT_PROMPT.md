# Session Continuity & Roadmap — Issue #528 (`v2/lib` × `@rlevin/uirig@0.3.1`)

- **Tracking Issue:** [AgnosticUI/agnosticui#528](https://github.com) (*Dogfood `@rlevin/uirig` on `v2/lib` — Rollout Phase 1: FACE Components*)
- **Branch:** `feat/uirig-dogfooding`
- **Governing PRD:** `v2/lib/docs/uirig-dogfooding-prd.md`
- **Last Checkpoint:** 2026-11-24 (`716866eea`)

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
| **Step 5: Phase 1 FACE Component Audit & Fixes** | 🎯 **In Focus / Active** | Re-triaged Phase 1 audit across all 14 FACE controls (`12` registry templates): **6 templates clean (`0` defects)** (`Input`, `Checkbox`, `Radio`, `Fieldset`, `SelectionButtonGroup`, `SelectionCardGroup`) and **32 calibrated findings** across `Button`, `IconButton`, `Select`, `Combobox`, `Slider`, and `Toggle`. Next: inspect and patch confirmed defects in `src/components/*` with Vitest specs and `npm run build:no-sync` + `--dist` verification. |
| **Step 6: Non-Blocking CI Spike Workflow** | 🔜 **Next on Deck** | Add read-only `.github/workflows/uirig-spike.yml` (`permissions: contents: read`, `continue-on-error: true`, `pull_request` trigger) running diff-scoped `npm run uirig:audit` and recording cold vs. warm timings (`< 45s` target). |
| **Step 7: Gate 1 Post-Mortem & Issue #528 Closeout** | 📥 **Backlog / Upcoming** | Evaluate all 7 PRD Section 3.2 quantitative thresholds (`>= 2` confirmed defects, `>= 70%` signal-to-noise precision, `< 45s` CI overhead, `>= 95%` reproducibility), record formal **Go / Narrow / Stop** decision in `.uirig/dogfood-log.md`, and check off Issue #528. |

---

## 🎯 Active Focus: Step 5 — Phase 1 FACE Component Findings (`32` Calibrated Items)

### Clean Phase 1 Templates (`0` Component Defects)
- `Input`, `Checkbox` *(live-classified as `UTB-004`)*, `Radio` *(live-classified as `UTB-004`)*, `Fieldset`, `SelectionButtonGroup`, `SelectionCardGroup`

### Remaining Phase 1 Findings to Inspect & Fix (`src/components/*`)
1. **`Combobox` (`src/components/Combobox/core/_Combobox.ts`) — High-Value A11y & Layout Fixes:**
   - `[stress] undersized_touch_target`: `button.ag-combobox__toggle.combobox-toggle-button` is `20px × 20px` (`delta="+4px"` short of WCAG 2.5.8 `24×24px` minimum).
   - `[stress] container_overflow`: `div.combobox-wrapper` overflows `div.ag-form-control--horizontal` by `+89.61px` under `+30%` text expansion.
   - `[tokens] token_drift`: hardcoded `paddingRight: 64px` / `72px` / `80px` on `div.combobox-input-wrapper` (plus UA `13.3333px` on toggle button / SVG).
2. **`Select` (`src/components/Select/core/_Select.ts`) — Layout Overflow Fix:**
   - `[stress] container_overflow`: `select#select-<id>-input` overflows `div.ag-form-control--horizontal` by `+38.61px` under `+30%` text expansion.
3. **`Slider` (`src/components/Slider/core/_Slider.ts`) — Tick Label & Thumb Layout:**
   - `[stress] container_overflow`: `div.ag-slider__tick-label` overflows `div.ag-slider__tick` by `+19.97px`–`+26.53px` under `+30%` text expansion; `input#slider-<id>-input-min` overflows `div.ag-slider__container` by `+52.5px`.
   - `[stress] touch_target_collision` & `undersized_touch_target` (`+8px` on native range `<input>`).
4. **`Button` (`src/components/Button/core/_Button.ts`) & `IconButton` (`src/components/IconButton/core/_IconButton.ts`) — Token Drift:**
   - `Button`: hardcoded `fontSize: 10px` (`x-sm` size) and `borderRadius: 50%` (`shape="circle"`).
   - `IconButton`: hardcoded `paddingLeft: 6px` / `paddingRight: 6px`.
5. **`Toggle` (`src/components/Toggle/core/_Toggle.ts`) — Token Drift:**
   - `borderRadius: 50%` on `span.ag-toggle__handle` and inherited UA `fontSize: 13.3333px`.

---

## Carry-Forward Constraints
- Tool version is `@rlevin/uirig@0.3.1` (do not downgrade to `0.3.0`).
- Use `http://localhost:4174/...`, not `127.0.0.1`, due to [`AgnosticUI/uirig#55`](https://github.com).
- Combined light + dark tokens are generated at `v2/lib/.uirig/ag-tokens-combined.css`.
- `--changed` requires an explicit `--base=<ref>`; use `master` or `origin/master` (not `origin/main`).
- When auditing `--dist` after editing `src/components/*`, rebuild `dist/` first via `npm run build:no-sync`, then run `npm run uirig:audit -- --dist --components=<ComponentName>`.
- Never distort AgnosticUI component code to appease upstream tool bugs (`#54`–`#57`) or browser UA defaults (`fontSize: 13.3333px` on non-text `<input>`/`<svg>` elements).

---

## Copy-Pasteable Prompt for Next Session

> We are continuing the `@rlevin/uirig@0.3.1` integration for [Issue #528](https://github.com) in `AgnosticUI/v2/lib`. Read `v2/lib/docs/NEXT_PROMPT.md` first and resume from **Step 5 (Active Focus: Phase 1 FACE Component Fixes)**. Step 4 is complete and committed (`716866eea`). First, run a read-only inspection (outputting to `~/Downloads/cat.txt`) of `v2/lib/src/styles/ag-tokens.css` (space/font-size/radius tokens) and the relevant CSS/template sections in `v2/lib/src/components/Combobox/core/_Combobox.ts` and `v2/lib/src/components/Select/core/_Select.ts`. Then fix one component per micro-increment (starting with `Combobox`'s `20px -> 24px` toggle button touch target and horizontal `+30%` text-expansion overflow), run its Vitest spec + `npm run typecheck`, rebuild with `npm run build:no-sync`, verify with `npm run uirig:audit -- --dist --components=<Name>`, and update `v2/lib/docs/NEXT_PROMPT.md` after completing the step. Work in micro-increments, explain the rationale and diagram changes before writing code, and wrap all CLI commands in subshells outputting to `~/Downloads/cat.txt`.
