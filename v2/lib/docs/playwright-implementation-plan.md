# Playwright Visual Regression Testing — Implementation Plan

**Status:** Started  
- [x] Phase -1 — Repository Reconnaissance ✅
- [x] Phase 0 — Establish a clean Git baseline ✅
- [x] Phase 1 — Install dependencies and establish the environment ✅
- [x] Phase 2 — Construct a standalone preview harness ✅
- [x] Phase 3 — Architect screenshot synchronization and lifecycle hooks ✅
- [x] Phase 4 — Implement Button test coverage and baseline capture ✅
- [x] Phase 5 — Establish automated CI workflows ✅

**Tracking issue:** [AgnosticUI #501](https://github.com/AgnosticUI/agnosticui/issues/501)  
**Technical specification:** `playwright-visual-regression-spec.md`  
**Contributor guide:** `playwright.readme.md`  
**Feature branch:** `feat/501-playwright-visual-regression`

## 1. Implementation Agent Handoff

### Purpose

This document defines the execution plan for implementing Playwright visual regression testing in `v2/lib`.

A new implementation agent must be able to start work using this document and the technical specification without relying on previous conversation history.

### Starting Instructions

1. Read this entire implementation plan.
2. Read `playwright-visual-regression-spec.md` in full.
3. Inspect the repository and its existing conventions.
4. Treat the technical decisions and scope restrictions in the specification as agreed requirements.
5. Treat proposed file paths and implementation examples as guidance until verified against the repository.
6. Start with Phase 0. Do not skip phases.
7. Follow the execution roadmap in order.
8. Stop at every mandatory user approval gate.
9. Do not install dependencies, modify project files, commit, or push changes outside the approved scope of the current phase.
10. The LLM must never assume that a requested shell command has been executed. It must wait for the user to paste the actual CLI output before making decisions based on that output.

### Decision-Making Rules

Use this decision hierarchy:

1. **Agreed decisions:** Follow them unless the user approves a change.
2. **Implementation details:** Inspect the repository and choose the simplest maintainable solution that satisfies the specification.
3. **Unresolved decisions:** Present the available options, recommend one, and explain the trade-offs.
4. **Scope or architecture changes:** Stop and obtain user approval before proceeding.

Do not invent existing files, commands, APIs, component properties, or infrastructure.

Verify repository facts before using them.

### Repository Discovery

Before implementation, inspect the relevant repository structure and existing conventions.

At minimum, review:

- Root package configuration and lockfiles.
- `v2/lib/package.json` and its lockfile.
- Existing Vite configuration.
- Lit component registration and exports.
- Button, Alert, and Tag implementations.
- Existing test frameworks and scripts.
- Docker configuration and conventions.
- GitHub Actions workflows.
- Existing documentation conventions.

Report relevant findings and identify conflicts with the technical specification.

Do not make implementation changes during discovery unless the user explicitly approves them.

### Execution Contract

Work incrementally.

For each phase:

1. Confirm the phase objective.
2. Inspect the relevant files.
3. Explain the proposed changes.
4. Implement only the approved scope.
5. Run the required verification.
6. Review the resulting Git diff.
7. Report changed files, commands, and results.
8. Identify unresolved problems.
9. Request user approval.

10. Once a phase is code complete, all required verification steps pass, and the user approves the results, mark that phase as completed by adding a ✅ to its heading in this implementation plan.

    Example:

    `### Phase 0 — Establish a clean Git baseline ✅`

    Do not mark a phase complete before user approval. If a phase is partially complete or awaiting approval, leave its heading unchanged.

11. When marking a phase complete, include the updated implementation plan in the next approved Git commit. This ensures that phase completion and user approval are recorded in version control.

12. Do not create a separate commit solely for the plan update unless the user requests it. Include the documentation change with the relevant implementation commit whenever practical.

13. If a phase has no implementation commit, include the plan update in an appropriate documentation commit, with user approval.

Do not proceed to the next phase until the user approves the current phase.

If a verification step fails, stop and report the failure. Do not hide failures by updating snapshots or weakening assertions.

### Git Rules

- Work on the dedicated feature branch.
- Do not discard, stash, reset, or overwrite existing work without explicit approval.
- Review `git status` and `git diff` before committing.
- Keep commits focused.
- Propose commit messages and file lists before committing.
- Obtain approval before committing.
- Do not push or open a pull request without explicit approval.

### Communication

Use concise technical English.

Prefer direct statements, short sentences, and explicit instructions.

Distinguish verified facts from assumptions and recommendations.

At each approval gate, provide enough evidence for the user to make an informed decision.

## 2. Phase Tracking

Phase headings are the authoritative progress record.

Only mark a phase complete after:

- Its implementation is complete.
- All required verification steps pass.
- The user reviews and approves the results.

The implementation agent must update this plan with a ✅ after approval.

Do not use a checkbox, percentage, or informal statement as a substitute for the approval requirement.

## 3. Execution Roadmap

## Phase -1 — Repository Reconnaissance

### Objective

Understand the existing AgnosticUI repository structure and development conventions before making implementation decisions.

The user will provide repository information through CLI commands and file contents. The implementation agent must guide this process interactively.

Do not assume that proposed directory paths, configuration files, or infrastructure already exist.

### Execution rules

- This phase is read-only.
- Do not modify files.
- Do not install dependencies.
- Do not create branches.
- Do not make commits.
- Do not begin implementation.
- Prompt the user to execute CLI commands and report their output.
- Wait for the user's response before proceeding to the next information-gathering step.
- Do not request the entire repository when a smaller, targeted inspection is sufficient.
- Distinguish verified repository facts from assumptions.

### Step 1 — Collect component directory structure

Prompt the user to run:

```shell
tree -L 3 v2/lib/src/components
```

Ask the user to paste the complete CLI output.

Inspect the output to identify:

- Existing component directory conventions.
- Core Lit component locations.
- React and Vue wrapper locations.
- Existing unit test naming conventions.
- Existing component documentation.
- Potential locations for visual regression tests.

Do not assume that all components use identical directory structures.

### Step 2 — Collect package directory structure

Prompt the user to run:

```shell
tree -L 3 v2/lib
```

Ask the user to paste the CLI output.

Inspect the output to identify:

- Existing test directories.
- Build and preview infrastructure.
- Documentation directories.
- Configuration files.
- Existing scripts and helpers.
- Potential locations for Playwright infrastructure.

If the output is excessively large, narrow the command to relevant directories.

### Step 3 — Inspect package configuration

Prompt the user to run:

```shell
cat v2/lib/package.json
```

Ask the user to paste the complete contents.

Inspect:

- Existing dependencies.
- Existing development dependencies.
- Existing npm scripts.
- Build tooling.
- Test tooling.
- Module configuration.

Identify dependencies that can be reused. Do not recommend duplicate installations.

### Step 4 — Inspect existing test and build configuration

Prompt the user to run:

```shell
find v2/lib -maxdepth 3 \( \
  -name '*config*' -o \
  -name 'vitest*' -o \
  -name 'jest*' -o \
  -name 'vite.config.*' -o \
  -name 'tsconfig*.json' \
\) -not -path '*/node_modules/*'
```

Ask the user to paste the CLI output.

Request the contents of relevant configuration files individually when needed.

Determine how the existing project handles:

- Component builds.
- TypeScript.
- CSS and styles.
- Unit tests.
- Module resolution.
- Vite configuration.

Prefer reusing existing infrastructure.

### Step 5 — Inspect GitHub Actions

Prompt the user to run:

```shell
tree -L 2 .github/workflows
```

Ask the user to paste the CLI output.

Identify existing CI conventions.

Request relevant workflow files when needed.

Determine:

- How pull requests are tested.
- How dependencies are installed.
- Whether Docker is already used.
- How test artifacts are uploaded.
- Whether workflows use reusable actions.

Do not propose unnecessary parallel CI infrastructure.

### Step 6 — Inspect Button

Button is the first visual regression proof of concept.

Prompt the user to run:

```shell
tree -L 3 v2/lib/src/components/Button
```

Ask the user to paste the CLI output.

Review the structure and identify the relevant files.

Then request the contents of the necessary files individually, including:

- Core Lit implementation.
- Existing unit tests.
- Component README.
- Relevant styles or theme dependencies.

Do not request unrelated React or Vue wrapper files.

### Step 7 — Reconcile the specification with the repository

After collecting the required information:

1. Summarize the existing repository architecture.
2. Identify existing infrastructure that can be reused.
3. Identify proposed paths that differ from existing conventions.
4. Identify missing infrastructure.
5. Recommend any changes to the proposed directory structure.
6. Identify implementation risks or unresolved questions.
7. Confirm that the technical specification remains appropriate.

Clearly distinguish:

- Verified facts.
- Recommendations.
- Assumptions.
- Open questions.

Do not silently change agreed technical decisions.

### Step 8 — Present findings and request approval

Present a concise reconnaissance report containing:

- Existing repository structure.
- Recommended Playwright file locations.
- Dependencies that can be reused.
- New dependencies required.
- Proposed preview architecture.
- Proposed CI integration.
- Any recommended specification changes.

**STOP POINT — USER APPROVAL REQUIRED**

Do not proceed to Phase 0 until the user reviews and approves the reconnaissance findings.

If the findings require changes to the technical specification or implementation plan, propose those changes and obtain approval before proceeding.

### Completion criteria

Phase -1 is complete when:

- [ ] Required directory structures have been inspected.
- [ ] Package configuration has been inspected.
- [ ] Existing test and build configuration has been reviewed.
- [ ] GitHub Actions conventions have been reviewed.
- [ ] Button implementation structure has been inspected.
- [ ] Existing infrastructure and reusable dependencies have been identified.
- [ ] Proposed file locations have been reconciled with the actual repository.
- [ ] The user has reviewed and approved the findings.

### Phase 0 — Establish a clean Git baseline

**Objective:** Start the implementation from a known, clean Git state on a dedicated feature branch.

#### Steps

1. Inspect the current branch.
2. Run `git status`.
3. Check for staged, unstaged, and untracked changes.
4. If the working tree is not clean, stop and ask the user how to handle the existing changes.
5. Do not discard, stash, reset, or overwrite existing work without explicit approval.
6. Confirm the correct base branch. Use the repository's primary development branch unless the user specifies otherwise.
7. Confirm that the base branch is up to date with its remote.
8. Create and switch to this feature branch (if user has not already created it):

`feat/501-playwright-visual-regression`

9. Run `git status` again.
10. Confirm that the new branch is active and the working tree is clean.

#### Deliverable

A clean working tree on:

`feat/501-playwright-visual-regression`

#### Git checkpoint

No commit is required. This phase establishes the branch for all subsequent work.

#### Mandatory stop — User approval

Report:

- Original branch.
- Base branch.
- New feature branch.
- Initial Git status.
- Final Git status.
- Confirmation that no existing changes were modified or discarded.

Ask the user to approve the new branch before proceeding to Phase 1.

Do not install dependencies or modify project files before approval.

### Phase 1 — Install dependencies and establish the environment

**Objective:** Establish a working Playwright and Docker environment.

#### Steps

1. Inspect the existing package configuration and lockfiles.
2. Install `@playwright/test` as a development dependency of `v2/lib`.
3. Select and pin a compatible official Microsoft Playwright Docker image.
4. Configure the Playwright test runner.
5. Configure the initial Chromium project.
6. Add a minimal browser smoke test.
7. Add the initial npm script structure.
8. Verify that Chromium starts and a minimal test passes inside Docker.

#### Deliverable

Playwright runs successfully inside the pinned Docker environment.

#### Git checkpoint

Dependency and test-runner foundation.

#### Mandatory stop — User approval

Report:

- Dependencies installed.
- Docker image selected.
- Playwright version.
- Chromium version.
- Files changed.
- Commands run.
- Verification results.

Ask the user to approve the dependency and environment changes.

### Phase 2 — Build the Vite preview

**Objective:** Create a stable browser environment for real Lit components.

#### Steps

1. Inspect existing Vite configuration and component exports.
2. Create the Vite preview application.
3. Import actual Lit component implementations.
4. Configure component and state selection.
5. Connect Playwright to the preview server.
6. Implement `visual-readiness.ts`.
7. Verify custom-element registration.
8. Verify Lit rendering readiness.
9. Verify font readiness.
10. Confirm that the browser can access the preview inside Docker.

#### Deliverable

A working browser preview and reusable readiness helper.

#### Git checkpoint

Preview and helper infrastructure.

#### Mandatory stop — User approval

Show:

- Preview application structure.
- Example component rendering.
- Readiness helper implementation.
- Docker connectivity verification.
- Files changed.
- Commands and results.

Ask the user to approve the preview architecture and readiness strategy.
### Phase 3 — Prove the workflow with Button

**Objective:** Demonstrate a complete visual regression workflow with one real component.

#### Steps

1. Inspect the actual Button API and implementation.
2. Identify its visually distinct properties and states.
3. Propose a small set of representative screenshots.
4. Explain the regression value of each proposed screenshot.
5. Obtain user approval for the proposed coverage.
6. Implement the Button visual test.
7. Generate the initial baseline inside Docker.
8. Verify that an unchanged component passes.
9. Introduce a temporary intentional visual change.
10. Verify that the screenshot assertion fails.
11. Restore the original component.
12. Verify that the explicit update command regenerates the baseline.
13. Inspect the resulting screenshots and diff artifacts.
14. Confirm that the ordinary test command does not update baselines.

#### Deliverable

A complete Button visual regression workflow with an approved, maintainable set of screenshots.

Initial target: 2–5 screenshots, depending on actual visual differences.

Do not test every Button property combination.

#### Git checkpoint

Button test and approved baselines.

#### Mandatory stop — User approval

Present:

- Selected Button states and why they were selected.
- Screenshot baselines.
- Actual and expected comparisons.
- Intentional-change failure evidence.
- Baseline update verification.
- Files changed.
- Commands and results.

Ask the user to review and approve the Button tests and coverage.

Do not add more components until approval.

### Phase 4 — Reports and documentation

**Objective:** Make test results easy to inspect and the workflow easy to use.

#### Steps

1. Configure the Playwright HTML reporter.
2. Persist reports outside Docker.
3. Preserve screenshot and diff artifacts.
4. Implement `npm run test:visual:report`.
5. Verify the report opens on the host.
6. Write `playwright.readme.md`.
7. Document actual installation and test commands.
8. Document the Docker baseline workflow.
9. Document screenshot selection and maintenance rules.
10. Document CI report inspection.

#### Deliverable

A documented workflow with accessible failure reports and clear coverage guidance.

#### Git checkpoint

Reporting and contributor documentation.

#### Mandatory stop — User approval

Demonstrate:

- HTML report access.
- Screenshot and diff artifacts.
- Report command.
- Contributor instructions.
- Files changed.
- Verification results.

Ask the user to review the reporting and documentation.

### Phase 5 — CI integration

**Objective:** Run visual regression tests automatically on pull requests.

#### Steps

1. Inspect existing GitHub Actions workflows.
2. Select the appropriate workflow location.
3. Configure the pinned Docker image.
4. Run the same visual test command used locally.
5. Configure report artifact upload.
6. Name the artifact `playwright-visual-report`.
7. Verify that an unapproved visual difference fails CI.
8. Verify that an approved baseline update passes.
9. Confirm that reports are available from the GitHub Actions run summary.
10. Start the job as non-blocking while the environment stabilizes.
11. Prepare the required-check policy.

#### Deliverable

A working CI visual regression job.

#### Git checkpoint

CI integration.

#### Mandatory stop — User approval

Present:

- Workflow changes.
- Successful CI run.
- Failure verification.
- Downloadable report artifact.
- Files changed.
- Verification results.

Ask the user to approve the CI implementation and the transition to a required pull-request check.
### Phase 6 — Add Alert and Tag

**Objective:** Extend the verified workflow to two additional Lit components.

#### Steps

1. Inspect the Alert and Tag APIs.
2. Identify their visually distinct states.
3. Propose representative screenshot coverage.
4. Explain the regression value of each proposed screenshot.
5. Obtain approval for complex states or substantial coverage expansion.
6. Add Alert tests.
7. Generate and review Alert baselines inside Docker.
8. Add Tag tests.
9. Generate and review Tag baselines inside Docker.
10. Verify both components locally.
11. Verify both components in CI.
12. Review total screenshot count and maintenance cost.

#### Deliverable

Initial coverage for Button, Alert, and Tag without unnecessary screenshot combinations.

Initial planning targets:

- Alert: 2–5 screenshots.
- Tag: 1–3 screenshots.

These are guidelines, not quotas.

#### Git checkpoint

Focused component test and baseline changes.

#### Mandatory stop — User approval

Present:

- Selected states.
- Screenshot count.
- Baselines and comparisons.
- CI results.
- Files changed.
- Verification results.

Ask the user to review the results and select the next component.

### Phase 7 — Expand coverage

**Objective:** Extend visual coverage based on user priorities and regression risk.

For each additional component:

1. Inspect its API and implementation.
2. Identify visually distinct states.
3. Review existing coverage.
4. Propose a small set of representative screenshots.
5. Explain the regression value of each screenshot.
6. Ask for approval when the proposed scope is complex or substantially increases maintenance.
7. Implement and verify the tests.
8. Generate and review baselines inside Docker.
9. Verify CI.
10. Commit the approved changes.

Do not add components simply to increase the number of visual tests.

#### Deliverable

An expanding visual regression suite with reviewed baselines and controlled maintenance costs.

#### Git checkpoint

One focused component change at a time.

#### Mandatory stop — User approval

Ask the user to review each component before moving to the next.

## 4. Phase Completion Rules

A phase is complete only when:

- Its required implementation is complete.
- All required verification steps pass.
- The user reviews and approves the results.
- The phase heading is marked with a ✅.
- The updated implementation plan is included in the next approved Git commit.

Example:

`### Phase 0 — Establish a clean Git baseline ✅`

If the phase has no implementation commit, create an appropriate documentation commit with user approval.

Never mark a phase complete merely because its code has been written.

## 5. Failure and Recovery Rules

If a required verification step fails:

1. Stop the current phase.
2. Report the exact failure.
3. Provide the relevant error or test output.
4. Identify the likely cause.
5. Propose the smallest corrective change.
6. Obtain approval if the correction changes the agreed architecture or scope.
7. Repeat the failed verification.
8. Request approval only after the required checks pass.

Never:

- Update snapshots to hide an unexplained failure.
- Reduce assertion strictness without explanation and approval.
- Skip failed verification steps.
- Continue to the next phase with unresolved failures.
- Mark a failed phase complete.

## 6. Final Project Completion

The initial implementation is complete when:

- All acceptance criteria in the technical specification pass.
- Button, Alert, and Tag have approved baseline coverage.
- Local Docker execution works.
- Baseline updates work.
- Reports and artifacts are accessible.
- CI runs the visual test suite.
- The contributor README describes the verified workflow.
- The visual test is a required pull-request check after stabilization.
- All mandatory user approval gates are complete.
- All phase completion markers are recorded.

The user must approve the final implementation.

## 7. Communication Style

Use clear, concise technical English.

Follow a style inspired by ASD-STE100 Simplified Technical English. Do not attempt strict compliance with the official standard.

- Use short sentences.
- Prefer active voice.
- Use direct instructions.
- Use consistent terminology.
- State expected verification results.
- Separate facts, assumptions, and recommendations.
- Avoid repetition and unnecessary introductions.

The goal is clarity, not compliance with a formal writing standard.