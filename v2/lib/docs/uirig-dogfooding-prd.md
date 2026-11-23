// v2/lib/docs/uirig-dogfooding-prd.md

# PRD: Dogfooding `@rlevin/uirig` on AgnosticUI (`v2/lib`)

- **Document Status:** Approved Blueprint (Discovery & Architecture Complete)
- **Date:** November 23, 2026
- **Target Workspace:** `v2/lib` (AgnosticUI Core Lit Web Components)
- **Upstream Tooling:** `@rlevin/uirig` (`rlevin/uirig`)

---

## 1. Executive Summary & Dual Objectives

This initiative establishes a VitePress-free ("naked page") component verification harness inside `v2/lib` to dogfood `@rlevin/uirig` against AgnosticUI's core Lit Web Components.

### Primary Goals
1. **Harden AgnosticUI (`v2/lib`):** Discover and resolve genuine design-token drift, light/dark contrast defects, `+30%` text-expansion layout breaks, Cumulative Layout Shift (CLS), and Document Object Model (DOM) / Accessibility (A11y) issues in AgnosticUI's core components.
2. **Battle-Test & Improve `@rlevin/uirig`:** Use a real-world, 60+ component Shadow DOM library as a live stress test to uncover false positives, missing capabilities, or ergonomics gaps in `uirig`—logging structured `gh issue` reports in `rlevin/uirig` and submitting upstream patches when time permits.

### Non-Goals (Out of Scope for MVP v1)
- Auditing AgnosticUI through the `v2/site` VitePress documentation shell (which introduces third-party navigation, sidebar, and markdown typography false positives).
- Auditing all 60+ components in a single undifferentiated pass.
- React (`*ReactExamples.jsx`) and Vue (`*Examples.vue`) framework wrapper harnesses (deferred until Lit MVP v1 ROI [Return on Investment] is validated).

---

## 2. User Personas & Workflow Mapping

| Persona | Primary Goal | User Flow -> Technical Harness Mapping |
| :--- | :--- | :--- |
| **AgnosticUI & `uirig` Maintainer (Human Developer)** | Audit Lit components incrementally, separate real component bugs from `uirig` false positives, and log upstream `uirig` GitHub issues. | Starts the naked Vite harness in `v2/lib`, runs engine-scoped `uirig` audits (`?phase=1` or `?component=<Name>`), fixes Tier 1 defects in `v2/lib/src/components/**`, and logs Tier 3 issues in `rlevin/uirig`. |
| **AI (Artificial Intelligence) Coding Agent (Claude Code / Cursor / Codex)** | Diagnose and fix component defects with `file:line` precision and minimal context-window overhead. | Reads `v2/lib/.uirig/SKILL.md` (scaffolded via `uirig init`), runs `uirig check --changed --group-by-root --top=5 --json` or connects via `uirig mcp`, and edits `v2/lib/src/components/<Component>/`. |
| **CI (Continuous Integration) PR (Pull Request) Gate (Spike)** | Evaluate automated regression detection on component PRs without blocking merges during initial discovery. | Executes a non-blocking GitHub Actions spike workflow (`fetch-depth: 0`) running `uirig check --changed --base=origin/${{ github.base_ref }}`. |

---

## 3. Phased Component Rollout & Post-Mortem ROI Gate

To prevent an overwhelming flood of findings across 60+ components, execution is gated into three sequential Rollout Phases with a mandatory **Post-Mortem & ROI Gate** after Rollout Phase 1:

| Rollout Phase | Target Component Group | Rationale | Exit Criteria / Gate |
| :--- | :--- | :--- | :--- |
| **Rollout Phase 1 (MVP v1): FACE (Form-Associated Custom Elements) & Core Form Controls** | `Button`, `IconButton`, `Input`, `Checkbox`, `Radio`, `Select`, `Combobox`, `Slider`, `Toggle`, `Fieldset`, `SelectionButton`, `SelectionButtonGroup`, `SelectionCard`, `SelectionCardGroup` | Highest user & A11y impact; exercises native form association (`ElementInternals`), focus rings, labels, ARIA (Accessible Rich Internet Applications) states, and Shadow DOM slots. | All Tier 1 defects fixed in `v2/lib/src/components/**`; all Tier 3 `uirig` bugs/false positives filed via `gh issue` in `rlevin/uirig`. |
| **Gate 1: Post-Mortem & ROI Assessment** | Structured review of Rollout Phase 1 bug yield, fix effort, `uirig` false-positive ratio, and developer velocity | Prevents sunk-cost churn across 60+ components if diminishing returns appear. | Explicit **Go / Narrow / Stop** decision on Rollout Phase 2 scope (full catalog vs. high-traffic subset). |
| **Rollout Phase 2 (Conditional): Core Layout, Feedback, & Navigation** | `Card`, `Alert`, `Badge`, `Dialog`, `Drawer`, `Tabs`, `Menu`, `Popover`, `Tooltip`, `Toast`, `Header`, `Sidebar`, `Pagination`, `Table` | Exercises overlay stacking, dynamic focus trapping, and responsive container overflow. | Contingent on positive Gate 1 ROI. |
| **Rollout Phase 3 (Conditional): Decorative & `*Fx` Variants** | `Avatar`, `Tag`, `Divider`, `Spinner`, `Progress`, `*Fx` variants | Lowest defect density; deferred unless Rollout Phase 2 justifies full-catalog coverage. | Optional polish pass. |

---

## 4. Pragmatic 4-Tier Triage Policy

Every finding emitted by `uirig` must be classified into one of four tiers in `v2/lib/.uirig/dogfood-log.md`:

| Tier | Definition | Required Action |
| :--- | :--- | :--- |
| **Tier 1: Must Fix (AgnosticUI Defect)** | Genuine WCAG (Web Content Accessibility Guidelines) contrast failures on active/default states, stranded light surfaces in dark mode, `+30%` text-expansion overflow/clipping inside `v2/lib/src/components/**`, broken ARIA/label IDs, or uncaught runtime errors. | Fix directly in `v2/lib/src/components/**` and re-verify `exitCode: 0`. |
| **Tier 2: Harness / Demo Artifact** | Noise caused by naked-page scaffolding, demo-only wrapper markup, or simultaneous overlay collisions (`Dialog`, `Drawer`, `Toast`). | Isolate per-component via `?component=<Name>`, mark demo wrappers with `data-uirig-ignore`, or add scoped `ignore` rules in `v2/lib/uirig.config.json`. |
| **Tier 3: Upstream `uirig` Bug / False Positive** | Valid Web Component pattern flagged erroneously by `uirig` (e.g., `ShadowRoot` slot inheritance, `var(--ag-*)` alias gaps, or multi-file `ag-tokens.css` + `ag-tokens-dark.css` gaps). | **Never** contort AgnosticUI code to appease a false positive; log a `gh issue` in `rlevin/uirig` (and submit an upstream PR if time permits). |
| **Tier 4: Low-ROI / Deferred Nit** | Stylistic nits on experimental `*Fx` components or changes that would break public CSS (Cascading Style Sheets) custom property APIs. | Defer to backlog. |

---

## 5. Technical Architecture & Data Models

### 5.1 Repository File Tree (`v2/lib`)

```text
// v2/lib/
├── package.json                          # Add @rlevin/uirig devDependency + uirig:* npm scripts
├── vite.config.ts                        # Existing library build config (untouched)
├── vite.uirig.config.ts                  # Dedicated Vite server/preview config for the naked harness (port 4174)
├── uirig.config.json                     # Scaffolded via `npx uirig init`, customized for AgnosticUI tokens & Rollout Phase 1
├── .uirig/
│   ├── session.json                      # Scaffolded via `npx uirig init`
│   ├── SKILL.md                          # Scaffolded via `npx uirig init` (AI coding agent verification guide)
│   ├── github_pr_comment.md              # Auto-generated Markdown summary per `uirig check` run
│   └── dogfood-log.md                    # Structured Tier 1–4 triage & upstream `rlevin/uirig` issue log
└── tests/
    └── uirig/
        ├── uirig-harness.html            # Naked HTML shell loading ag-tokens.css, ag-tokens-dark.css, and harness-entry.ts
        ├── harness-entry.ts              # Parses ?phase= / ?component= / ?theme= and mounts Lit examples or fixtures
        ├── harness-registry.ts           # Rollout Phase 1–3 component metadata, tags, and overlay flags
        └── fixtures/
            └── face-fixtures.ts          # Option B self-contained Lit fixtures (activated if Option A coupling is noisy)
```

### 5.2 Harness Mounting Strategy: Option A vs. Option B (Time-Boxed Evaluation)

| Dimension | Option A: Reuse `v2/site/docs/examples/*LitExamples.js` (Primary Spike) | Option B: Self-Contained `v2/lib` Lit Fixtures (Fallback) |
| :--- | :--- | :--- |
| **Coverage & Speed** | Reuses 60+ existing rich variant examples immediately. | Purpose-built minimal Lit templates for the 14 Rollout Phase 1 FACE controls. |
| **Workspace Coupling** | Crosses `v2/lib` -> `v2/site`; requires Vite `fs.allow`, `resolve.alias`, `resolve.dedupe: ['lit']`, and any `v2/site` icon packages. | Zero external workspace coupling; uses only `v2/lib/src/components/**` and `v2/lib/package.json`. |
| **Decision Gate** | Time-box Option A integration to **30 minutes** on 3 pilot FACE components (`Button`, `Input`, `Checkbox`). If cross-workspace dependencies or doc-wrapper noise prove heavy, pivot immediately to Option B (inspecting `v2/lib/tests/visual/preview` for reusable preview patterns first). |

### 5.3 URL Routing & Configuration Data Models
* **Naked Harness Query Contract (`uirig-harness.html`):**
  - `?phase=1` (Default): Mounts all non-overlay Rollout Phase 1 FACE components sequentially inside `<section data-harness-component="<Name>">` containers on a `var(--ag-background-primary)` canvas.
  - `?component=<Name>`: Mounts a single isolated component (mandatory for overlay components: `Dialog`, `Drawer`, `Toast`, `Popover`, `Menu`, `Tooltip`).
  - `?theme=light|dark`: Mirrors `uirig`'s `data-theme` attribute toggle for visual inspection.
* **`v2/lib/uirig.config.json` Schema Mapping:**
  - `targetUrls`: `["http://127.0.0"]`
  - `tokensPath`: `"./src/styles/ag-tokens.css"`
  - `themes`: `["light", "dark"]`
  - `changedPaths`: `{ "include": ["src/components/**", "src/shared/**", "src/styles/**"], "exclude": ["**/*.spec.ts", "**/*.test.ts"] }`
  - `thresholdBudgets`: `{ "clsMaxLimit": 0.1, "overflowPixelTolerance": 2, "touchTargetMinSpacingPx": 24, "darkModeMaxSurfaceLuminance": 0.85 }`
  - `viewports`: `[{ "name": "mobile", "width": 375, "height": 812 }, { "name": "desktop", "width": 1440, "height": 900 }]`


---

## 6. Critical Technical Edge Cases & Mitigations

1. **Duplicate `customElements.define` Registry Collisions:** Under Option A, if `v2/site` and `v2/lib` resolve separate copies of `lit` or `agnosticui-core`, Chromium throws `NotSupportedError` on duplicate tag registration. **Mitigation:** Configure `resolve.dedupe: ['lit']` and alias `agnosticui-core/*` directly to `v2/lib/src/components/*` in `vite.uirig.config.ts`.
2. **Multi-File Token Split (`ag-tokens.css` vs. `ag-tokens-dark.css`):** `tokensPath` accepts a single file path (`./src/styles/ag-tokens.css`). Both stylesheets must be loaded in `uirig-harness.html` `<head>` so dark-theme CSS custom properties resolve in Chromium; if dark-mode semantic tokens in `ag-tokens-dark.css` introduce unique colors flagged by `tokens`, log an upstream `gh issue` on `rlevin/uirig` for multi-file `tokensPath: string[]` support.
3. **Port Collision with Existing Playwright Visual Suite:** `v2/lib/playwright.config.ts` already manages a preview server for `tests/visual/preview`. **Mitigation:** Bind `vite.uirig.config.ts` to a distinct dedicated port (`4174`).
4. **Harness Shell Self-Contamination:** Any raw CSS colors/spacing on `uirig-harness.html` (`body` or `<section>` wrappers) will trigger false-positive token drift. **Mitigation:** Style all harness containers strictly with `var(--ag-*)` tokens from `ag-tokens.css`.
5. **Shallow Git Clone Failure in CI `--changed`:** GitHub Actions `actions/checkout@v4` defaults to `fetch-depth: 1`, breaking `git diff origin/main` inside `uirig --changed`. **Mitigation:** Require `fetch-depth: 0` in the CI spike workflow.

---

## 7. Investigative Spike: GitHub Actions CI Workflow

Before adding any blocking CI check to AgnosticUI, execute a non-blocking investigative spike (`.github/workflows/uirig-spike.yml`, `continue-on-error: true`):

1. **Infrastructure & Browser Reuse:** Verify whether `v2/lib`'s existing Playwright setup already caches Chromium in CI or how much wall-clock time `npx playwright install chromium` adds.
2. **Server Lifecycle & Diff Scoping:** Start `vite.uirig.config.ts` on `127.0.0.1:4174`, wait for readiness, and run `npx uirig check --changed --base=origin/${{ github.base_ref }} --json` with `fetch-depth: 0`.
3. **Spike Evaluation Criteria:** Measure total CI duration overhead (target `< 45s`), verify `--changed` custom-element selector inference accuracy on component PRs, inspect `.uirig/github_pr_comment.md` usefulness, and produce a written **Go / No-Go** recommendation at Gate 1.

---

## 8. Execution Checklist (Next Steps)

1. Install `@rlevin/uirig` in `v2/lib` and run `npx uirig init` inside `v2/lib`.
2. Configure `v2/lib/uirig.config.json` (`tokensPath: "./src/styles/ag-tokens.css"`, `themes: ["light", "dark"]`) and create `vite.uirig.config.ts` + `tests/uirig/uirig-harness.html`.
3. Run the 30-minute Option A spike on `Button`, `Input`, and `Checkbox` (falling back to Option B `face-fixtures.ts` if coupling is noisy), then complete the 14-component Rollout Phase 1 FACE registry.
4. Audit Rollout Phase 1 one engine at a time (`--only=dom`, `contrast`, `dark-mode`, `stress`, `tokens`, `cls`), logging Tier 1–4 findings in `v2/lib/.uirig/dogfood-log.md` and filing Tier 3 issues via `gh issue` in `rlevin/uirig`.
5. Run the non-blocking `.github/workflows/uirig-spike.yml` experiment on a test PR.
6. Conduct **Gate 1 (Post-Mortem & ROI Assessment)** to decide Rollout Phase 2 scope and CI promotion.
