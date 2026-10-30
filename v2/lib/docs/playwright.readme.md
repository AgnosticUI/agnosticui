# Playwright Visual Regression Testing — Contributor Guide

This guide explains how to run and maintain AgnosticUI's visual regression tests.

**Package:** `v2/lib`  
**Test framework:** Playwright Test  
**Browser:** Chromium  
**Execution environment:** Docker with the official Microsoft Playwright image

> Some commands and paths in this guide are planned. The implementation agent must replace or verify them during implementation before treating this guide as complete.

## 1. Overview

Visual regression tests detect unintended changes to component appearance.

Playwright renders an actual Lit component in Chromium and captures a screenshot.

It compares that screenshot with an approved baseline image stored in Git.

If the screenshots differ beyond the configured tolerance, the test fails.

We use Docker for all screenshot generation and comparison. This gives developers and CI the same Linux and Chromium rendering environment.

The initial suite covers core Lit web components only.

React and Vue wrappers are outside the scope of this effort.

## 2. Prerequisites

Before running visual tests, install:

- Node.js version supported by `v2/lib`.
- npm.
- Docker Desktop or Docker Engine.
- Git.

Docker must be running.

Playwright Test is installed as a development dependency of `v2/lib`.

From the `v2/lib` directory:

```bash
npm install
```

The Docker image is pinned to a version compatible with the installed Playwright version.

You do not need to install a separate local browser for the Docker-based workflow.

## 3. Available Commands

The following commands are the intended interface:

| Command | Purpose |
|---|---|
| `npm run test:visual` | Run visual regression tests. |
| `npm run test:visual:update` | Intentionally regenerate screenshot baselines. |
| `npm run test:visual:report` | Open the latest HTML report. |

Run these commands from `v2/lib`.

All browser execution and screenshot generation must use the pinned Docker environment.

Do not run snapshot updates directly on your host operating system.

## 4. How the Preview Works

The visual test suite uses a small Vite application.

The preview application imports actual Lit component implementations and renders them in a browser.

It does not contain copies or mock implementations of production components.

Playwright starts the preview server and opens the required component.

The test selects the component and state, waits for rendering readiness, and captures the custom element.

The preview is test infrastructure. It is not a production application and is not published to npm.

### Preview selection

The preview may support query parameters to select components and states.

For example:

```text
/?component=button
/?component=button&variant=primary
/?component=alert&variant=success
/?component=tag&variant=default
```

The implementation must document the actual supported parameters after they are implemented.

## 5. Running Visual Tests

Run:

```bash
npm run test:visual
```

This command:

1. Starts the required Docker environment.
2. Starts the Vite preview server.
3. Launches Chromium.
4. Runs the Playwright visual tests.
5. Compares screenshots with approved baselines.
6. Saves reports and failure artifacts.
7. Stops temporary processes and containers.

An unchanged component should pass.

An unexpected visual difference should fail.

**Important:** This command must never update approved baselines automatically.

## 6. Updating Screenshot Baselines

Update baselines only when a visual change is intentional.

For example:

- A design change modifies a component's appearance.
- A bug fix corrects incorrect spacing.
- A typography change alters the component's dimensions.
- A new approved component state requires a baseline.

Run:

```bash
npm run test:visual:update
```

This generates new screenshots inside Docker.

### Before committing updated baselines

1. Inspect every changed PNG.
2. Confirm that the visual changes are intentional.
3. Review the actual screenshot against the previous baseline.
4. Check for unrelated visual differences.
5. Confirm that the test still covers the intended state.
6. Review `git diff`.
7. Commit the updated baseline with the relevant component change.

Do not update baselines simply because a test fails.

Investigate unexplained differences first.

## 7. Viewing the HTML Report

After a test run, open the report:

```bash
npm run test:visual:report
```

The report provides:

- Test names.
- Pass and failure status.
- Assertion details.
- Expected screenshots.
- Actual screenshots.
- Image differences.

Use the report to investigate failures before changing baselines.

The report must be accessible on the host after the Docker container exits.

## 8. Understanding Screenshot Failures

A screenshot failure means that the actual component rendering differs from its approved baseline beyond the configured tolerance.

Possible causes include:

- An intentional design change.
- An unintended CSS regression.
- A changed font or font-loading problem.
- An incorrect component property.
- An incomplete rendering-readiness check.
- A browser or environment mismatch.
- An unexpected animation or asynchronous update.

Do not assume every screenshot failure is a genuine component regression.

Investigate the difference.

### Failure investigation

1. Open the HTML report.
2. Identify the failing component and state.
3. Compare expected and actual screenshots.
4. Inspect the difference image.
5. Determine whether the change is intentional.
6. Check whether the component was fully rendered.
7. Check whether the browser environment matches the pinned configuration.
8. Correct the underlying problem or intentionally update the baseline.

## 9. CI Failures

Visual regression tests run in pull-request CI.

An unapproved visual difference must fail the CI job.

When a pull request fails:

1. Open the GitHub Actions run.
2. Locate the failed visual test job.
3. Download the `playwright-visual-report` artifact from the workflow run summary.
4. Extract the downloaded archive.
5. Open the HTML report.
6. Inspect the expected, actual, and diff screenshots.
7. Determine whether the change is intentional.
8. If intentional, update the baseline locally using Docker.
9. Commit the approved baseline changes.
10. Push the updated pull request branch.

Do not modify CI configuration or disable visual assertions merely to make a pull request pass.

## 10. Adding a Visual Test for a New Component

Place the test beside the component's core implementation.

For example:

```text
src/components/Example/core/
├── [existing component files]
├── _Example.drift.spec.ts
└── _Example.drift.spec.ts-snapshots/
    └── [approved PNG baselines]
```

Use the existing test and snapshot conventions.

### Steps

1. Inspect the component API and implementation.
2. Identify visually distinct properties and states.
3. Select representative states.
4. Explain what additional regression risk each screenshot covers.
5. Reuse the shared preview infrastructure.
6. Reuse the shared rendering-readiness helper.
7. Capture the web component custom element itself.
8. Generate baselines inside Docker.
9. Review the generated images.
10. Run the ordinary visual test command.
11. Commit the test and approved baselines.

Do not create a separate preview application for each component.

Do not create component mocks in place of actual implementations.

## 11. Choosing Which States to Test

Do not test every possible combination of component properties.

Use representative visual states and risk-based selection.

Every component must have at least one default screenshot.

Consider additional screenshots for:

- Visually distinct variants.
- Important size differences.
- Disabled states.
- Loading states.
- Border and radius differences.
- Icon placement and spacing.
- Long content that changes layout or text wrapping.

Before adding a screenshot, ask:

1. Does this state change the visible appearance?
2. Does it exercise a different rendering path?
3. Could a regression affect an important use case?
4. Does an existing screenshot already cover this behavior?

If a screenshot adds little regression value, do not add it.

### Initial planning guidelines

| Component complexity | Initial screenshot target |
|---|---:|
| Simple component | 1–3 |
| Moderate component | 2–5 |
| Complex component | 4–8 |

These are guidelines, not limits.

Treat every screenshot as a maintenance commitment.

Optimize for regression detection, not screenshot count.

### Visual and functional tests

Use screenshot tests for appearance.

Use ordinary assertions for behavior.

| Requirement | Test type |
|---|---|
| Button disabled styling | Visual |
| Button cannot be clicked when disabled | Functional |
| Correct accessibility attributes | Accessibility or attribute assertion |
| Button event dispatch | Functional |
| Button label wrapping | Visual |

Do not use screenshots to verify behavior that can be tested more reliably with ordinary assertions.

## 12. Baseline and Git Rules

Approved baselines are part of the source repository.

Commit them alongside their corresponding tests and component changes.

Do not commit:

- HTML reports.
- Temporary test results.
- Unreviewed screenshot artifacts.
- Docker-generated temporary files.

Before committing:

```bash
git status
git diff
```

Review the staged files.

Confirm that only intentional changes are included.

Never commit an unexplained baseline change.

## 13. Troubleshooting

### Docker cannot start

- Confirm Docker is running.
- Check that the required image is available.
- Check the Docker image tag.
- Check available disk space.

### Playwright cannot reach Vite

- Confirm the preview server starts.
- Check the Docker network configuration.
- Confirm the preview listens on an accessible interface.
- Check the configured preview URL.

### Screenshots differ unexpectedly

- Confirm that the pinned Docker image is being used.
- Check the browser version.
- Check font loading.
- Check component readiness.
- Check for asynchronous rendering.
- Inspect the HTML report.

### A component is captured before rendering completes

- Check custom-element registration.
- Check the Lit `updateComplete` promise.
- Check additional asynchronous work.
- Improve the shared readiness helper or add an explicit component-specific readiness condition.

Avoid arbitrary sleep statements as a permanent solution.

### Baselines differ between local and CI

Both environments must use the same pinned Docker image and Chromium version.

Do not generate baselines directly on macOS, Windows, or a different Linux browser environment.

## 14. References

- [Playwright screenshot assertions](https://playwright.dev/docs/api/class-snapshotassertions)
- [Playwright Docker image](https://hub.docker.com/r/microsoft/playwright)
- [Playwright HTML reporter](https://playwright.dev/docs/test-reporters#html-reporter)
- [AgnosticUI repository](https://github.com/AgnosticUI/agnosticui)