// v2/lib/docs/uirig-dogfooding-prd.md

# PRD: Dogfooding `@rlevin/uirig` on AgnosticUI (`v2/lib`)

- **Document Status:** Phase 1 (MVP v1) & Gate 1 Complete (`#528` / PR `#529`) — Phase 2 Next on Deck
- **Date:** November 23, 2026 (Updated November 24, 2026)
- **Target Workspace:** `v2/lib` (`agnosticui-core` Lit Web Components)
- **Upstream Tooling:** `@rlevin/uirig` (`0.3.1`, repository `AgnosticUI/uirig`)
- **Harness Base URL:** `http://localhost:4174/tests/uirig/harness/index.html`

---

## 1. Executive Summary, Governance, & Provisionality Clause

### 1.1 Strategic Outcome
This initiative establishes an isolated, VitePress-free ("naked page") component verification harness inside `v2/lib` to empirically evaluate `@rlevin/uirig` (`0.3.0`) against AgnosticUI's core Lit Web Components. Rather than coupling to `v2/site` documentation examples or duplicating component templates, the harness reuses `v2/lib`'s existing pure-Lit visual baseline registry (`COMPONENT_REGISTRY`) on a dedicated Vite server (`http://127.0.0.1:4174`) to answer three engineering questions on every component change:

1. **Is the component genuinely broken?** (Confirmed WCAG [Web Content Accessibility Guidelines] 2.2 AA [Level AA], layout, token, or runtime defect.)
2. **Is the auditing engine accurately interpreting Shadow DOM (Document Object Model) components?** (Accurate slot projection, CSS [Cascading Style Sheets] custom property resolution, and selector attribution without false positives.)
3. **Can regressions be detected automatically within an acceptable CI (Continuous Integration) budget?** (Deterministic diff-scoped verification under `< 45 seconds` total CI audit-stage overhead.)

### 1.2 Provisionality & Architectural Authority Clause
**All planner (`audit-plan.ts`), runner (`run-audit.ts`), configuration (`uirig.config.json`), source-attribution, and CI diff-routing designs in this document are provisional hypotheses until Step 1 empirically validates `@rlevin/uirig` (`0.3.0`).** Because public documentation for `0.3.0` is unverified, Step 1 acts as an authoritative **Go/No-Go compatibility gate** empowered to revise, narrow, or replace any proposed contract before shared registry extraction or full harness scaffolding begins.

### 1.3 Ownership & Decision Authority Matrix

| Role / Responsibility | Designated Owner | Scope of Authority |
| :--- | :--- | :--- |
| **Harness & Fixture Maintainer** | AgnosticUI Core Maintainer | Owns `v2/lib/tests/shared/**`, `v2/lib/tests/uirig/**`, and Docker Playwright visual baseline updates. |
| **Finding Triage & Upstream Filing Owner** | AgnosticUI & `uirig` Maintainer | Classifies deduplicated findings, patches in-scope defects, and files deduplicated upstream issues in `rlevin/uirig`. |
| **High-Risk / Breaking Deferral Approver** | AgnosticUI Core Maintainer | Sole authority to approve `status: deferred-high-risk` when fixing a confirmed defect requires a breaking public API or CEM (Custom Elements Manifest) change. |
| **Gate 1 Go / Narrow / Stop Decision Maker** | AgnosticUI Core Maintainer | Evaluates Phase 1 post-mortem evidence against Section 3.2 quantitative thresholds. |

### 1.4 Non-Goals (Out of Scope for MVP [Minimum Viable Product] v1)
- Auditing AgnosticUI through the `v2/site` VitePress documentation shell or importing `v2/site/docs/examples/*LitExamples.js`.
- Auditing all 60+ catalog components in a single undifferentiated pass.
- React (`*React*.tsx`), Vue (`*Vue*.vue`), and Svelte (`*.svelte`) wrapper harnesses (deferred until Lit MVP v1 ROI [Return on Investment] passes Gate 1).
- Claiming full WCAG 2.2 AA conformance solely from automated DOM/AX (Accessibility) audits without manual keyboard and screen-reader verification.

---

## 2. User Personas & Workflow Mapping

| Persona / Actor | Primary Goal | User Flow -> Technical Harness Mapping |
| :--- | :--- | :--- |
| **AgnosticUI & `uirig` Maintainer (Human)** | Validate `@rlevin/uirig` (`0.3.0`) capabilities first, audit Phase 1 controls incrementally, separate genuine component defects from tool/harness noise, and file high-signal upstream issues. | Runs Step 1 `Button` PoC (Proof of Concept) at
`http://127.0.0.1:4174/tests/uirig/poc-button.html` -> extracts shared registry -> executes scoped `AuditCase` matrices -> triages into orthogonal fields -> updates Docker visual baselines (`npm run test:visual:update`) only for inspected fixes. |
| **AI Coding Agent (Claude Code / Cursor / Codex)** | Diagnose and patch defects using verified source attribution and deterministic artifact paths without guessing unsupported CLI (Command-Line Interface) flags. | Reads Step 1-verified `v2/lib/.uirig/SKILL.md` -> runs documented local audit commands or MCP (Model Context Protocol) tools -> patches `v2/lib/src/components/<Component>/core/**` -> verifies `0` regressions. |
| **CI PR (Pull Request) Spike Workflow** | Measure incremental regression detection accuracy and cold vs. warm wall-clock overhead on PRs without blocking merges or exposing secrets. | Executes read-only `.github/workflows/uirig-spike.yml` (`permissions: contents: read`, `continue-on-error: true`) -> runs Step 1-verified changed-component routing -> emits `spike-status.json` and report artifacts even on early failure. |

---

## 3. Phased Rollout, Coverage Taxonomy, & Gate 1 Quantitative ROI

### 3.1 Explicit Coverage Taxonomy & Arithmetic
1. **Target Component:** A distinct public AgnosticUI component in `v2/lib/src/components/<Component>` (`SelectionButton` and `SelectionButtonGroup` count as **2** target components).
2. **Registry Template:** A named `TemplateResult` factory entry in `COMPONENT_REGISTRY` (one template may render multiple target components).
3. **Rendered Custom Element:** An active `ag-*` element instance connected in the DOM or open Shadow DOM during execution.
4. **AuditCase:** A single deterministic execution unit defined by `(TargetComponent, StateFixture, Theme, Viewport, ExpansionLevel)`.
5. **Eligibility & Dual Coverage Metrics:** An **Eligible Component** belongs to an enabled `rolloutPhase` with an `implemented fixture` (`COMPONENT_REGISTRY` template + typed `IStateFixture`). Any `(Component, State)` blocked by an upstream limitation is recorded as `status: unsupported` with a tracking issue. Gate 1 tracks both **Execution Disposition Coverage** (`100%` of planned cases reach `passed`, `failed`, or `unsupported`) and **Auditable Coverage** (`>= 90%` of planned cases actually audited by `@rlevin/uirig` rather than `unsupported`).

**Phase Status Legend:**
- ✅ **Completed** — Verified, audited, patched, and merged
- 🎯 **In Focus / Active** — Current work in progress
- 🔜 **Next on Deck** — Immediate follow-up phase
- 📥 **Backlog / Upcoming** — Deferred / conditional phase

| Rollout Phase | Status | Target Components (`Count`) | Registry Templates (`Count`) | Coverage & Isolation Rules |
| :--- | :--- | :--- | :--- | :--- |
| **Phase 1 (MVP v1): FACE (Form-Associated Custom Elements) & Core Form Controls** | ✅ **Completed** *(PR `#529`)* | `14` (`Button`, `IconButton`, `Input`, `Checkbox`, `Radio`, `Select`, `Combobox`, `Slider`, `Toggle`, `Fieldset`, `SelectionButton`, `SelectionButtonGroup`, `SelectionCard`, `SelectionCardGroup`) | `12` existing `COMPONENT_REGISTRY` entries (`Button`, `IconButton`, `Input`, `Checkbox`, `Radio`, `Select`, `Combobox`, `Slider`, `Toggle`, `Fieldset`, `SelectionButtonGroup`, `SelectionCardGroup`) | Completed across `light` & `dark` themes and `mobile` (`375x812`) & `desktop` (`1440x900`) viewports; shipped WCAG 2.5.8 target size fixes (`Combobox`, `Slider`) and `+30%` text-expansion overflow fixes (`Select`, `Combobox`), verified via `--dist` and `v2/site` manual sanity check. |
| **Gate 1: Quantitative ROI & Post-Mortem** | ✅ **Completed** *(GO — Narrowed Scope)* | Evaluates Phase 1 metrics | N/A | **GO (Narrowed Scope):** `4` confirmed defects fixed, `< 45s` incremental CI overhead (`~10.6s/component`), `100%` auditable coverage; upstream `@rlevin/uirig` fixes (`#54`–`#58`) batched before Phase 2 expansion. |
| **Phase 2 (Conditional): Layout, Feedback, & Navigation** | 🔜 **Next on Deck** | `14` (`Card`, `Alert`, `Badge`, `Dialog`, `Drawer`, `Tabs`, `Menu`, `Popover`, `Tooltip`, `Toast`, `Header`, `Sidebar`, `Pagination`, `Table`) | `11` existing + `3` new (`Tooltip`, `Sidebar`, `Table`) = `14` total templates | Contingent on `@rlevin/uirig@0.3.2` upstream fixes (`#54`–`#58`); overlays (`Dialog`, `Drawer`, `Toast`, `Popover`, `Menu`, `Tooltip`) run strictly in isolated single-component runs. |
| **Phase 3 (Conditional): Decorative & `*Fx` Variants** | 📥 **Backlog / Upcoming** | Remaining catalog components & `*Fx` variants | Existing templates in `COMPONENT_REGISTRY` | Optional polish pass only if Phase 2 demonstrates positive ROI. |

### 3.2 Gate 1 Quantitative ROI Definitions & Decision Matrix
All production finding metrics **strictly exclude** seeded canary fixtures (`origin: 'canary'`) and operate on **deduplicated Unique Finding Records** (Section 4.1). Each run logs the exact `@rlevin/uirig` version (`0.3.0`), lockfile integrity hash, and `uirig.config.json` SHA-256 hash.

| Metric | Explicit Formula / Operational Definition | Gate 1 Go Threshold |
| :--- | :--- | :--- |
| **1. Actionable Confirmed Yield** | Count of unique, non-canary findings with `cause: 'component-defect'` discovered in Phase 1 (`net-new` bugs missed by Vitest/Playwright vs. `previously-known`) | `>= 2` confirmed `component-defect` findings (including `>= 1` `net-new` defect) |
| **2. Tool Signal-to-Noise Precision** | `Count(cause == 'component-defect') / [Count(cause == 'component-defect') + Count(cause == 'upstream-tool-bug')]` (with `harness-artifact` and `design-nit` totals reported separately for full transparency) | `>= 70%` (`<= 30%` upstream false-positive rate) |
| **3. Execution Disposition Coverage** | `Count(AuditCases reaching terminal passed, failed-triaged, or documented unsupported) / Count(Total planned Phase 1 AuditCases)` | `100%` (`0` silent skips or `infrastructure-error` runs) |
| **4. Auditable Coverage** | `Count(AuditCases evaluated by @rlevin/uirig [passed + failed-triaged]) / Count(Total planned Phase 1 AuditCases)` | `>= 90%` (`<= 10%` `unsupported` rate) |
| **5. Result-Level Reproducibility** | Re-run a stratified sample of `20 AuditCases` (`100%` of finding-producing cases + random passing cases up to `20`) on the same commit; `Count(Cases with identical pass/fail outcome and finding fingerprints) / 20` | `>= 95%` |
| **6. Changed-Component Selector Accuracy** | `Count(Modified Phase 1 files mapped to exact custom-element tags) / Count(Tested Phase 1 file-change scenarios)` | `>= 95%` |
| **7. Wall-Clock Execution Overhead** | Total `uirig` CI (Continuous Integration) job overhead (Vite startup + Chromium launch + `4–8` diff-scoped cases + report write, excluding checkout/`npm ci`) and full local matrix runtime | Incremental CI audit `< 45s` total overhead; Full local matrix `< 5 min` |

- **Gate 1 Decision Rules:** **Go** (all 7 thresholds met -> proceed to Phase 2 and PR [Pull Request] comment reporting); **Narrow** (yield, precision, and coverage pass, but CI overhead `> 45s` or Lit `css` [Cascading Style Sheets] source attribution limited -> keep local/pre-release workflow and lightweight CI smoke checks); **Stop** (`0` net-new yield, `< 90%` auditable coverage, or `> 30%` upstream false-positive rate -> pause rollout and fix `@rlevin/uirig` upstream first).

---

## 4. Deduplication, Orthogonal Finding Schema, & Engine Calibration

### 4.1 Deduplication & Orthogonal Finding Fields
1. **Canonical Fingerprint Deduplication:** Raw findings sharing the identical tuple `(targetComponent, stateName, ruleId, piercedSelector, sourceLocation)` across repeated runs or across `light`/`dark` or `mobile`/`desktop` views collapse into one **Unique Finding Record** (retaining all triggering `AuditCase` IDs as metadata).
2. **Canary Isolation:** Deliberately defective canary fixtures (`canary-*`) carry `origin: 'canary'` and are strictly excluded from all production Gate 1 numerators and denominators.
3. **Orthogonal Finding Fields (Replacing Overloaded Classifications):** Rather than mixing root cause and severity into one label, every deduplicated Unique Finding Record captures four independent fields:
   - `cause`: `'component-defect'` (genuine defect in `v2/lib/src/components/**` or `v2/lib/src/styles/**`) | `'harness-artifact'` (demo/fixture setup noise in `v2/lib/tests/**`) | `'upstream-tool-bug'` (false positive, Shadow DOM [Document Object Model] traversal bug, or selector misattribution in `@rlevin/uirig@0.3.0`) | `'design-nit'` (low-severity stylistic observation outside WCAG [Web Content Accessibility Guidelines] 2.2 AA [Level AA] and core functional specs).
   - `severity`: `'critical' | 'major' | 'minor' | 'nit'`
   - `status`: `'open' | 'fixed' | 'deferred-high-risk' | 'fixture-resolved'`
   - `verification`: `'pending' | 'passed'`
4. **Metric Denominator Transparency & Review Protocol:** Every `component-defect` or `upstream-tool-bug` requires reproducible evidence logged in `v2/lib/.uirig/dogfood-log.md` (computed CSS values, contrast math, or AX [Accessibility] tree dump) plus a second-pass verification check before entering Gate 1 metrics. Gate 1 reports total reviewed unique findings across all four `cause` values, computing **Tool Signal-to-Noise Precision** strictly over `'component-defect'` vs. `'upstream-tool-bug'` while displaying `'harness-artifact'` and `'design-nit'` counts alongside.
5. **Deduplicated Upstream Filing Policy:** Never distort AgnosticUI component code to appease an `'upstream-tool-bug'`. File issues via `gh` (GitHub CLI [Command-Line Interface]) in `rlevin/uirig` **only** for distinct, reproducible upstream root causes; append duplicate symptoms across components to the existing tracking issue.

### 4.2 Authoritative Engine Inventory & Seeded Canary Calibration Matrix
Step 1 inventories every engine bundled in `@rlevin/uirig@0.3.0` and binds **one authoritative engine per acceptance domain**. In Step 4, **5 hand-crafted seeded canary fixtures (`origin: 'canary'`)** calibrate rule wiring and pipeline plumbing (`5/5` detection confirms wiring for those exact fault patterns; it is a calibration smoke check rather than a measure of broad statistical recall):

| Acceptance Domain | Authoritative Engine / Mechanism | Seeded Canary Specification (`origin: 'canary'`) & Expected Rule |
| :--- | :--- | :--- |
| **DOM / ARIA (Accessible Rich Internet Applications) & AX Tree** | `@rlevin/uirig` Accessibility / AX Engine | **Canary 1:** `<ag-icon-button>` rendered with no `label` or `aria-label` -> triggers AX missing accessible name rule. |
| **Color Contrast & Token Resolution** | `@rlevin/uirig` Computed Contrast & Token Engine | **Canary 2:** `14px` normal-weight text (`< 18.66px` bold / `< 24px` regular) rendered at `2.5:1` contrast via `var(--ag-nonexistent-token)` -> triggers WCAG 1.4.3 normal-text contrast (`< 4.5:1`) and missing-token check. |
| **Text-Expansion Differential** | `@rlevin/uirig` Layout Geometry Engine | **Canary 3:** Fixed-width `120px` `<ag-button>` where the `0%` baseline (`"Save Changes"`) fits with `0px` horizontal overflow, while the paired `+30%` label (`"Save Configuration"`) overflows by `> 2px` -> triggers differential expansion overflow. |
| **Target Size Spacing** | `@rlevin/uirig` Geometry Engine + SC (Success Criterion) 2.5.8 Circle Test | **Canary 4:** Two adjacent `18 x 18 CSS px` icon buttons separated by `2px` (`24px` bounding-box circles intersect) -> triggers WCAG 2.2 SC 2.5.8 spacing check. |
| **CLS (Cumulative Layout Shift) & Runtime Errors** | Harness `PerformanceObserver` + Playwright `pageerror` / `console.error` | **Canary 5:** Fixture injecting a `60px` banner `200ms` after `ready` (`CLS > 0.15`) and throwing an uncaught `TypeError` on focus -> triggers post-settle CLS heuristic and `pageerror` listener. |

---

## 5. Technical Architecture & Standardized File Tree

### 5.1 Repository File Tree & Module Responsibilities
- `v2/lib/docs/uirig-dogfooding-prd.md` — Refined PRD & Gate 1 Investigation Plan.
- `v2/lib/package.json` — Exact pin `"@rlevin/uirig": "0.3.0"` devDependency + `uirig:poc`, `uirig:plan`, `uirig:audit:full`, and `uirig:audit:ci` scripts.
- `v2/lib/vite.config.ts` — Existing library build configuration (remains untouched).
- `v2/lib/vite.uirig.config.ts` — Dedicated Vite server (`host: '127.0.0.1'`, `port: 4174`, `strictPort: true`, `css.devSourcemap: true`, `build.sourcemap: true`, `resolve.dedupe: ['lit']`).
- `v2/lib/uirig.config.json` — Provisional `@rlevin/uirig` configuration (locked after Step 1 schema verification; SHA-256 [Secure Hash Algorithm 256-bit] hashed in run logs).
- `v2/lib/.uirig/session.json` & `v2/lib/.uirig/SKILL.md` — Scaffolded via `npx uirig init` and updated post-Step 1 with verified CLI/MCP (Model Context Protocol) flags.
- `v2/lib/.uirig/github_pr_comment.md` & `v2/lib/.uirig/dogfood-log.md` — Auto-generated PR summary report and canonical deduplicated finding / Gate 1 decision ledger.
- `v2/lib/tests/shared/component-registry.ts` & `v2/lib/tests/visual/preview/registry.ts` — Extracted single source of truth (`COMPONENT_REGISTRY` + `COMPONENT_AUDIT_METADATA`) and thin re-export preserving Playwright snapshot paths (`npm run test:visual` must pass with `0` diffs in Step 2).
- `v2/lib/tests/uirig/poc-button.html` & `v2/lib/tests/uirig/uirig-harness.html` — Step 1 single-button PoC (`http://127.0.0.1:4174/tests/uirig/poc-button.html`) and full naked harness (`http://127.0.0.1:4174/tests/uirig/uirig-harness.html`).
- `v2/lib/tests/uirig/harness-entry.ts`, `state-fixtures.ts`, `expansion-fixtures.ts`, `canary-fixtures.ts`, `audit-plan.ts`, `run-audit.ts`, & `.github/workflows/uirig-spike.yml` — Bounded readiness controller (`maxPasses: 10`, `5000ms` per-case / `15000ms` page budget, fresh URL navigation per case), typed `IStateFixture` registry, paired expansion/canary fixtures, planner/runner, and read-only CI workflow.

---

## 6. Normative WCAG 2.2 AA Criteria vs. Design-System Heuristics

### 6.1 Normative WCAG (Web Content Accessibility Guidelines) 2.2 Level AA Checks (`cause: 'component-defect'` When Violated)
1. **Text Contrast (WCAG 1.4.3):** Minimum `4.5:1` for normal text and `3.0:1` for large text (`>= 24px` regular or `>= 18.66px` bold), excluding inactive/disabled controls (`[disabled]`, `aria-disabled="true"`).
   - *Opaque vs. Complex Surface Boundary:* Automated contrast evaluation applies strictly to **resolved opaque background colors**. Text rendered over CSS (Cascading Style Sheets) gradients, translucent layers (`opacity < 1` or `rgba` alpha `< 1`), or background images is flagged as `status: requires-manual-contrast-review` rather than making brittle pixel-sampling pass/fail claims. Transient `:hover`/`:focus-visible` states are evaluated in settled active state fixtures rather than mid-transition frames.
2. **Non-Text Contrast (WCAG 1.4.11):** Minimum `3.0:1` contrast against adjacent colors **only** for visual boundaries/indicators **required to identify** an interactive control or its state (focus rings, checkbox/radio indicators, switch thumbs, input borders lacking other visual affordance). Decorative card/divider borders are excluded.
3. **Target Size (Minimum) (WCAG 2.2 SC [Success Criterion] 2.5.8 — W3C [World Wide Web Consortium] Understanding Doc: `https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum`):** Pointer targets smaller than `24 x 24 CSS px` are evaluated under the **Spacing Exception** by centering an imaginary **`24 CSS px`-diameter circle** on the target's minimum bounding box and verifying that this circle does **not** intersect another target or the `24 CSS px` circle of any other undersized target.
   - *Applicable Exceptions & Automated Boundary:* Exclude targets meeting **Inline**, **Equivalent**, **User Agent Control**, or **Essential** exceptions. Because geometry engines cannot auto-verify *Equivalent* or *Essential* exceptions, flagged targets require human triage confirmation before `component-defect` classification.
4. **Normative Keyboard & Focus Visibility (WCAG 2.1.1, 2.4.7, 2.4.11):** Keyboard operability without unintended focus traps (`dialog-trap` restricted to open modal dialogs) and visible, unobscured focus indicators.
   - *Component-Specific Interaction Contracts (Separate from Universal WCAG):* `Escape` dismissal and focus restoration to the invoking trigger are asserted via typed `IStateFixture.postInteractionChecks` **only** on components whose ARIA (Accessible Rich Internet Applications) pattern specifies that behavior (modal `Dialog`, `Drawer`, `Popover`, `Menu`, `Combobox`), never as a blanket rule across all controls.

### 6.2 Non-Normative Design-System Heuristics & Dual-Window CLS (Reported Separately)
1. **Dark-Mode Surface Luminance Ceiling (`darkModeMaxSurfaceLuminance: 0.85`):** Design-system heuristic catching un-themed light surfaces stranded in `[data-theme="dark"]` (classified as `cause: 'component-defect'` when caused by missing dark token mapping, distinct from WCAG 1.4.3).
2. **Enhanced Touch-Target Spacing (`touchTargetMinSpacingPx`):** Any spacing preference beyond SC 2.5.8's `24px` circle test is reported under a `ds-heuristic` rule ID.
3. **Dual-Window CLS (Cumulative Layout Shift) Budget (`<= 0.1` UX [User Experience] / Core Web Vitals Heuristic):** Evaluated **independently** across two separate observation windows (not summed across windows): **(a) Initial Load Window** (from `<head>` `PerformanceObserver` registration through `window.__uirigHarness.ready`) and **(b) Post-Settle Observation Window** (`1000ms` window *after* `IStateFixture` mutations and `settle()` complete, explicitly excluding layout shifts occurring *during* synchronous fixture setup or within `500ms` of synthetic user input).

### 6.3 Paired `+30%` Text-Expansion Protocol (`v2/lib/tests/uirig/expansion-fixtures.ts`)
- **Paired Baseline Construction:** Every expanded fixture pairs a `0%` baseline string with a domain-realistic localized string targeting `+30%` (`+25%` to `+35%`) Unicode grapheme length and verified in Step 4 to increase rendered text width/wrapping.
- **Regression Criterion:** Flagged only when the `+30%` fixture introduces **new** horizontal overflow (`> 2px`), clipped/truncated text without accessible overflow handling, overlapping controls, or clipped focus rings absent from the paired `0%` baseline on the same viewport (`375x812` mobile or `1440x900` desktop).

---

## 7. Matrix Calculation, CI Timing Budget, & Fork Safety

### 7.1 Provisional Phase 1 Matrix Calculation & `< 45s` CI (Continuous Integration) Routing
- **Provisional Full Local Matrix (`npm run uirig:audit:full`, target `< 5 min`):**
  - *Base State Matrix (Provisional Estimate Pending Step 3 Fixture Inventory):* `14 target components x 3.5 average states (49 component-state pairs) x 2 themes (light, dark) x 2 viewports (375x812, 1440x900) = 196 base AuditCases`.
  - *Text-Expansion Matrix:* `+30%` expansion applies strictly to text-bearing states (`~28 component-state pairs x 2 themes x 2 viewports = 112 expansion AuditCases`), yielding **`308` provisional Phase 1 `AuditCases`** (exact count emitted by `audit-plan.ts` once `state-fixtures.ts` and `expansion-fixtures.ts` are populated in Step 3).
- **Incremental CI PR (Pull Request) Diff Audit (`npm run uirig:audit:ci`, target `< 45s` total audit-stage overhead):**
  - *Measurement Scope:* Measures total `uirig` CI job overhead (Vite startup + Chromium launch + `AuditCase` execution + artifact write, excluding checkout and `npm ci`), calibrated in Step 1 via a single-component vertical slice.
  - *Routing Tiers:* (1) **Modified Phase 1 Component(s) (1–2 components):** `4–8` diff-scoped cases (`default` + `invalid`/`open` across `light`/`dark` on `desktop` + `+30%` `mobile`, target `< 35s`); (2) **Modified Shared Tokens/Utilities (`src/styles/ag-tokens*.css`, `src/shared/**`):** `8`-case Representative Token Smoke Suite (`Button`, `Input`, `Checkbox`, `Select` across `light`/`dark`, target `< 35s`); (3) **Modified Phase 2/3 Component(s) or Unmapped Paths:** immediate status notice in `< 5s` without launching Chromium.

### 7.2 Read-Only CI Spike Safety & Artifact Contracts (`.github/workflows/uirig-spike.yml`)
- Enforces `permissions: contents: read`, `continue-on-error: true`, and standard `pull_request` trigger (never `pull_request_target`) so untrusted fork PR code receives zero secrets or write tokens; `actions/cache` keys strictly on `v2/lib/package-lock.json` hash.
- Executes separated lifecycle stages (*Stage A* Vite startup with `EXIT` trap and `30s` poll, *Stage B* `window.__uirigHarness.ready` check, *Stage C* `run-audit.ts` + unconditional `if: always()` writer for `v2/lib/.uirig/artifacts/spike-status.json` and fallback `github_pr_comment.md`, *Stage D* `actions/upload-artifact@v4` with `retention-days: 14`).

---

## 8. Risk-Adjusted 8-Step Execution Sequence & Definition of Done

The PoC page is the URL for the vertical-slice test.

1. **Step 1 — Mandatory Go/No-Go Compatibility Gate & Vertical Slice Timing (`v2/lib/tests/uirig/poc-button.html`):** Install exact `@rlevin/uirig` (`0.3.0`), measure single-component vertical-slice latency at `http://127.0.0`, verify CLI (Command-Line Interface) flags, config schema, bundled engines, source attribution across all 5 targets, `--changed` behavior, and readiness hooks, and revise provisional contracts accordingly.
2. **Step 2 — Extract Shared Component Registry & Verify Visual Baselines:** Move `COMPONENT_REGISTRY` to `v2/lib/tests/shared/component-registry.ts`, re-export in `v2/lib/tests/visual/preview/registry.ts`, and verify `npm run test:visual` passes with `0` snapshot diffs.
3. **Step 3 — Build Shadow-Inclusive Harness, Typed Fixtures, & Audit Planner:** Implement `vite.uirig.config.ts`, `uirig-harness.html`, `harness-entry.ts`, `state-fixtures.ts`, `expansion-fixtures.ts`, `canary-fixtures.ts`, `audit-plan.ts`, `run-audit.ts`, and `v2/lib/.uirig/dogfood-log.md`.
4. **Step 4 — Calibrate on 4 Pilot Components + 5 Seeded Canary Faults:** Run `Button`, `Input`, `Checkbox`, and `Select` plus all `5` seeded canary fixtures (`origin: 'canary'`), confirming `5/5` canary detection and tuning `harness-artifact` ignore rules.
5. **Step 5 — Execute Complete Phase 1 Matrix & Triage Findings:** Execute all eligible Phase 1 `AuditCase` items, deduplicate findings into orthogonal fields, complete second-pass evidence review, patch approved `component-defect` findings (updating Docker visual baselines where inspected), and file deduplicated `upstream-tool-bug` issues in `rlevin/uirig`.
6. **Step 6 — Execute Non-Blocking CI Investigative Spike:** Run `.github/workflows/uirig-spike.yml` on representative Phase 1 component PRs and shared-token PRs, recording stage-by-stage cold vs. warm timings and selector accuracy.
7. **Step 7 — Conduct Gate 1 Post-Mortem & Quantitative ROI (Return on Investment) Assessment:** Evaluate all seven Section 3.2 thresholds (including `100%` Execution Disposition Coverage, `>= 90%` Auditable Coverage, and `>= 95%` 20-case result reproducibility) and record a formal **Go / Narrow / Stop** decision in `v2/lib/.uirig/dogfood-log.md`.
8. **Step 8 — Human-in-the-Loop (`v2/site`) Manual Sanity Check (Pre-Merge Gate):** Whenever a phase modifies component code in `v2/lib/src/`, pack a local tarball and manually verify every audited component page in `v2/site` across light/dark modes and desktop/mobile viewports before merging:
   ```bash
   # Tab 1 -- from <root> of project
   (cd v2/lib && npm run lint && npm run typecheck && npm run test && npm run build && npm pack)

   # Tab 2 -- from <root> of project (after Tab 1 succeeds)
   (cd v2/site && npm run reinstall:lib && npm run docs:dev)
   ```
