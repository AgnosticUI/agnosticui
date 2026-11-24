## Current Checkpoint — 2026-11-25

### Step 4 status

**Step 4A — Git-diff scope planner: COMPLETE**
- `tests/uirig/planner.ts` and `planner.spec.ts` implement and test changed-path planning and Git diff retrieval.
- Planner tests passed: 11 tests.

**Step 4B — Changed-file scope: IMPLEMENTED; preview-path verification remains**
- `tests/uirig/cli-args.ts` parses `--components`, `--changed`, and `--base=<ref>`, with a Vitest spec.
- `tests/uirig/audit-scope.ts` resolves explicit component choices alongside changed-path scope, with a Vitest spec.
- The runner is wired to parse the options, retrieve Git changes, and select audit targets.
- Focused tests passed: 29 total (`cli-args` 10, `planner` 11, `audit-scope` 8); `npm run typecheck` passed.
- A run against `origin/feat/uirig-dogfooding` found zero relevant paths. Confirm the correct comparison base before relying on changed-file coverage.
- The full 50-component `--dist` audit completed; its report is `v2/lib/.uirig/audit-report.json` (gitignored). The report records 366 component-defect and 63 upstream-tool-bug findings, with no harness artifacts or false positives.
_Note: As we work on multiple machines, we may need to regenerate for up to date audit-report.json._

- **Still to verify:** run the audit harness via `vite preview` and confirm it loads components from `dist/`. The `--dist` audit used the Vite dev server, so it does not establish preview-path coverage.

### Full baseline sweep — COMPLETE; findings awaiting review
- The full audit completed across 50 components in 629,886 ms (about 10m30s).
- Generated: 2026-11-24. Local report: `v2/lib/.uirig/audit-report.json`.
- Counts by cause: 366 `component-defect`, 63 `upstream-tool-bug`, 0 `harness-artifact`, 0 `false-positive`.
- The report is gitignored intentionally; preserve it locally rather than force-adding it. Record reviewed, aggregate results here if a shareable baseline is needed.
- These are audit classifications, not independently confirmed product defects. Review evidence before proposing component fixes.
- This was a `--dist` run, but not a full built-artifact preview test: the harness used the Vite dev server. Verify the `vite preview` path separately.

## Next Work

1. **Resume built-artifact verification.** Inspect the exact current contents of `tests/uirig/runner.ts`, `vite.uirig.config.ts`, the library build configuration, package scripts, and existing `dist/` files. Then design the smallest increment to run the audit against built output using `vite preview`. Add a Vitest spec for any new logic.
2. **Validate the built-artifact path.** Confirm preview startup and cleanup, fail clearly when build artifacts are missing or stale, and verify the harness imports components from `dist/` rather than source. Run a focused audit—do not repeat the 50-component sweep unless needed.
3. **Review the 429 baseline findings (366 component-defect, 63 upstream-tool-bug)** by component, engine, violation type, and selector. Identify shared harness patterns; do not change component code until findings are validated.
4. **Validate `--changed` with the correct base.** Use the pull request target branch or actual divergence base. Confirm a known component change selects that component and a shared-source change triggers a full sweep.
5. Run relevant Vitest specs and `npm run typecheck` after each implementation increment.

## Carry-Forward Constraints
- Use `http://localhost:4174/...`, not dotted IPv4 hostnames, due to the known `uirig` host parsing issue.
- `--only=<engine>` accepts one engine; omitting it runs all six engines.
- Combined light/dark tokens are generated at `.uirig/ag-tokens-combined.css`.
- `--changed` requires an explicit `--base=<ref>`; ensure that ref exists in the checkout.
- The full 50-component sweep takes approximately 10m30s in this environment.
- Before editing, inspect the exact current contents of the files involved. Work in micro-increments and include tests for new logic.

> We are continuing the `@rlevin/uirig@0.3.0` integration in `AgnosticUI/v2/lib`. Step 4A and the `--changed` / `--base` scope implementation are complete. Built-artifact verification with `vite preview` remains outstanding. First inspect the exact current runner, Vite build and uirig configs, package scripts, and `dist/` contents; then propose one small implementation increment before editing. The full 50-component baseline produced 366 component-defect and 63 upstream-tool-bug classifications—429 total, still awaiting human validation.; do not treat them as confirmed defects or repeat the full baseline unless necessary. Work in micro-increments, explain the rationale and diagram new concepts, and add Vitest specs for new logic. Use subshell-wrapped repository commands and inspect file contents before editing. **Be sure to inspect the current runner, Vite configs, package scripts, and dist/ before editing, and to continue with vite preview verification.**