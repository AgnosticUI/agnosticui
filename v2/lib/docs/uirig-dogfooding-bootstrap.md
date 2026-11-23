// v2/lib/docs/uirig-dogfooding-bootstrap.md

# Cold-Start Context & Bootstrap Guide: Dogfooding `@rlevin/uirig` (`v2/lib`)

- **Companion Blueprint:** `v2/lib/docs/uirig-dogfooding-prd.md`
- **Target Workspace:** `v2/lib` (`agnosticui-core` Lit Web Components)
- **Purpose:** Minimal, step-gated file manifest and directory map to boot a fresh LLM (Large Language Model) session without context saturation or hallucinated tool contracts.

---

## 1. Mandatory Cold-Start Guardrails (Read Before Any Action)

1. **Treat `@rlevin/uirig@0.3.0` Contracts as Unverified Until Step 1:** Public documentation for `0.3.0` does not exist in model weights. Do **not** invent CLI (Command-Line Interface) flags, config keys, or report schemas—install exact `"@rlevin/uirig": "0.3.0"` first and inspect its installed package manifest, types, and `--help` output in Step 1.
2. **Never Couple to `v2/site`:** Do **not** import examples or styles from `v2/site/**`. That workspace renders in Light DOM (Document Object Model) with VitePress global CSS (Cascading Style Sheets) utilities, invalidating the naked-page harness isolation.
3. **Load Component Sources Incrementally:** Do **not** load all 14 Phase 1 component directories at once. Load `Button` first for Step 1, then load remaining Phase 1 components in batches of 3–4 when authoring `state-fixtures.ts` so property names (`invalid`, `disabled`, `open`) match real implementations.
4. **Docker Visual Baseline Discipline:** Execute `npm run test:visual` inside the repository's Docker Playwright environment to prevent host OS (Operating System) font-rendering false diffs.

---

## 2. Step-Gated File Loading Manifest (Agent Flow -> Required Files)

| Execution Step | Required Context Files (Load Only These) | Step Objective & Exit Gate |
| :--- | :--- | :--- |
| **Step 1: Go/No-Go Compatibility Gate** | `v2/lib/docs/uirig-dogfooding-prd.md`, `AGENTS.md` (or repo root agent rules), `v2/lib/package.json`, `v2/lib/vite.config.ts`, `v2/lib/src/styles/ag-tokens.css`, `v2/lib/src/styles/ag-tokens-dark.css`, and `v2/lib/src/components/Button/core/**` | Pin `"@rlevin/uirig": "0.3.0"`, create `vite.uirig.config.ts` (`127.0.0.1:4174`) and `v2/lib/tests/uirig/poc-button.html`, measure single-button vertical-slice latency, and record actual `0.3.0` CLI/config/attribution behavior before touching `registry.ts`. |
| **Step 2: Shared Registry Extraction** | `v2/lib/tests/visual/preview/registry.ts`, `v2/lib/tests/visual/preview/index.html`, and `v2/lib/playwright.visual.config.ts` | Extract `COMPONENT_REGISTRY` to `v2/lib/tests/shared/component-registry.ts`, leave a thin re-export in `registry.ts`, and verify `npm run test:visual` passes with `0` snapshot diffs. |
| **Step 3: Harness & Planner Build** | `v2/lib/tests/shared/component-registry.ts`, `v2/lib/src/styles/ag-tokens*.css`, and batches of 3–4 Phase 1 components under `v2/lib/src/components/<Name>/core/**` | Implement `uirig-harness.html`, `harness-entry.ts` (bounded readiness + dual-CLS [Cumulative Layout Shift]), `state-fixtures.ts`, `expansion-fixtures.ts`, `audit-plan.ts`, `run-audit.ts`, and `v2/lib/.uirig/dogfood-log.md`. |
| **Step 4: Canary & Pilot Calibration** | `Button`, `Input`, `Checkbox`, and `Select` sources + `v2/lib/tests/uirig/canary-fixtures.ts` | Verify `5/5` seeded canary faults (`origin: 'canary'`) are detected and tune `harness-artifact` ignore rules. |
| **Step 5: Full Phase 1 Audit & Triage** | `v2/lib/.uirig/dogfood-log.md` + specific `v2/lib/src/components/<Name>/core/**` files with confirmed defects | Execute full Phase 1 matrix, deduplicate findings into orthogonal fields, patch approved `component-defect` issues, and file deduplicated `upstream-tool-bug` issues in `rlevin/uirig`. |
| **Step 6–7: CI (Continuous Integration) Spike & Gate 1** | Existing `.github/workflows/*.yml` (for Node/cache conventions) + `v2/lib/.uirig/dogfood-log.md` | Author read-only `.github/workflows/uirig-spike.yml` (`permissions: contents: read`) and record the formal Gate 1 **Go / Narrow / Stop** assessment. |

---

## 3. Canonical Repository Directory Map (Existing vs. Planned)

- `.github/workflows/uirig-spike.yml` — `[CREATE Step 6]` Non-blocking, read-only CI PR (Pull Request) investigative spike workflow.
- `v2/lib/docs/uirig-dogfooding-prd.md` — `[EXISTS]` Authoritative PRD (Product Requirements Document) & Gate 1 evaluation specification.
- `v2/lib/docs/uirig-dogfooding-bootstrap.md` — `[EXISTS]` This cold-start file manifest and directory map.
- `v2/lib/package.json` — `[MODIFY Step 1]` Pin `"@rlevin/uirig": "0.3.0"` + add `uirig:poc`, `uirig:plan`, `uirig:audit:full`, and `uirig:audit:ci` scripts.
- `v2/lib/vite.config.ts` — `[EXISTS - DO NOT MODIFY]` Production library build configuration.
- `v2/lib/vite.uirig.config.ts` — `[CREATE Step 1]` Dedicated Vite server (`host: '127.0.0.1'`, `port: 4174`, `strictPort: true`, `css.devSourcemap: true`, `resolve.dedupe: ['lit']`).
- `v2/lib/uirig.config.json` — `[CREATE Step 1]` Upstream tool config locked after Step 1 schema verification.
- `v2/lib/.uirig/` — `[SCAFFOLD Step 1 via npx uirig init]` Holds `session.json`, `SKILL.md`, `github_pr_comment.md`, `dogfood-log.md`, and `artifacts/` (`spike-status.json`, `uirig-report.json`).
- `v2/lib/src/styles/ag-tokens.css` & `ag-tokens-dark.css` — `[EXISTS]` Light and dark CSS custom property definitions.
- `v2/lib/src/components/<Component>/core/**` — `[EXISTS]` Target Phase 1 FACE (Form-Associated Custom Elements) & form control implementations.
- `v2/lib/tests/shared/component-registry.ts` — `[CREATE Step 2]` Extracted `COMPONENT_REGISTRY` + `COMPONENT_AUDIT_METADATA`.
- `v2/lib/tests/visual/preview/registry.ts` — `[MODIFY Step 2]` Thin re-export preserving Docker Playwright snapshot paths.
- `v2/lib/tests/uirig/` — `[CREATE Steps 1, 3, 4]` Holds `poc-button.html`, `uirig-harness.html`, `harness-entry.ts`, `state-fixtures.ts`, `expansion-fixtures.ts`, `canary-fixtures.ts`, `audit-plan.ts`, and `run-audit.ts`.

---

## 4. Fresh-Session Kickoff Protocol

When opening a new LLM session to execute this initiative:
1. Attach **`v2/lib/docs/uirig-dogfooding-prd.md`** and **`v2/lib/docs/uirig-dogfooding-bootstrap.md`**, plus the **Step 1 files** listed in Section 2.
2. Instruct the agent to execute **Step 1 only** first and pause with an empirical compatibility report (CLI flags, config schema, bundled engines, source-attribution fidelity, and single-button vertical-slice latency) before advancing to Step 2.
