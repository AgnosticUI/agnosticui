# Playwright Visual Regression Testing — Technical Specification

**Status:** Draft
**Tracking issue:** [AgnosticUI #501](https://github.com/AgnosticUI/agnosticui/issues/501)
**Package:** `v2/lib`
**Implementation plan:** `playwright-implementation-plan.md`
**Contributor guide:** `playwright.readme.md`

## 1. Purpose

Add visual regression testing for AgnosticUI v2's core Lit web components.

Playwright will capture component screenshots and compare them with approved baseline images. The test suite will detect unintended visual changes during development and pull-request CI.

Start with the Button component. Verify the complete workflow before adding more components.

Use Docker to generate and compare screenshots in the same Linux and Chromium environment. This avoids rendering differences between developer operating systems and CI.

## 2. Goals

- Detect unintended visual changes to core Lit components.
- Generate reproducible screenshots in a pinned browser environment.
- Capture the web component custom element itself.
- Wait for component rendering to complete before capture.
- Store tests and baselines in version control.
- Provide separate commands for testing, updating snapshots, and viewing reports.
- Run visual tests in pull-request CI.
- Fail CI when a screenshot differs from its approved baseline.
- Require developers to review and commit intentional baseline changes.
- Keep the implementation small and easy to maintain.
- Maximize regression detection while minimizing maintenance and false failures.

## 3. Scope

### 3.1 In scope

- Core Lit-based web components.
- Chromium-based visual regression tests.
- A Vite-based component preview.
- Reusable rendering-readiness helpers.
- Playwright screenshot assertions.
- Version-controlled PNG baselines.
- Docker-based local and CI execution.
- npm scripts in `v2/lib/package.json`.
- HTML reports and screenshot failure artifacts.
- Pull-request CI integration.
- Contributor documentation.

### 3.2 Out of scope

- React wrappers.
- Vue wrappers.
- Cross-framework visual parity.
- Browsers other than Chromium.
- SSR-based preview infrastructure.
- Complete coverage of all components in the first milestone.
- A custom screenshot comparison engine.
- A hosted visual testing service.

This effort tests core Lit web components only. Do not add React or Vue wrapper tests.

Start with Button. Add Alert and Tag after the Button workflow is verified.

## 4. Agreed Technical Decisions

| Area | Decision |
|---|---|
| Test framework | Playwright Test |
| Dependency | `@playwright/test` as a development dependency |
| Browser | Chromium only |
| Operating system | Linux inside Docker |
| Docker image | Official Microsoft Playwright image |
| Image version | Pinned to a compatible Playwright version |
| Preview | Vite-based client-side preview |
| Preview lifecycle | Playwright `webServer` configuration |
| Screenshot target | The web component custom element itself |
| Baselines | PNG files committed to version control |
| Test naming | `*.drift.spec.ts` |
| Comparison | Playwright's built-in screenshot assertions |
| Initial tolerance | `maxDiffPixelRatio: 0.01` |
| Reports | Playwright HTML reporter |
| Local commands | npm scripts in `v2/lib/package.json` |
| CI policy | Fail on unapproved visual differences |
| Initial components | Button, Alert, Tag |

These are agreed requirements. The implementation agent must not change them without user approval.

## 5. Guiding Principle

Prefer the simplest implementation that provides reliable visual regression detection.

Optimize for regression detection, developer experience, and low maintenance cost.

Add abstractions and optimizations only when actual component requirements or measured performance justify them.

Do not pursue pixel-perfect detection at the expense of fragile tests or unnecessary maintenance.

## 6. Repository Architecture

The following is the proposed layout. Inspect the repository before creating files. Reuse existing infrastructure where possible.

    v2/lib/
    ├── package.json
    ├── package-lock.json
    ├── playwright.config.ts
    ├── src/
    │   └── components/
    │       ├── Button/
    │       │   └── core/
    │       │       ├── [existing component files]
    │       │       ├── _Button.drift.spec.ts
    │       │       └── _Button.drift.spec.ts-snapshots/
    │       │           └── [approved PNG baselines]
    │       ├── Alert/
    │       │   └── core/
    │       │       ├── [existing component files]
    │       │       ├── _Alert.drift.spec.ts
    │       │       └── _Alert.drift.spec.ts-snapshots/
    │       └── Tag/
    │           └── core/
    │               ├── [existing component files]
    │               ├── _Tag.drift.spec.ts
    │               └── _Tag.drift.spec.ts-snapshots/
    ├── tests/
    │   └── visual/
    │       ├── preview/
    │       │   └── [Vite preview application]
    │       └── helpers/
    │           └── visual-readiness.ts
    └── docs/
        ├── playwright-visual-regression-spec.md
        ├── playwright-implementation-plan.md
        └── playwright.readme.md

### 6.1 Directory rules

- Keep each component's visual test beside its core implementation.
- Keep that test's snapshots in its adjacent Playwright snapshot directory.
- Store the shared preview application under `tests/visual/preview/`.
- Store shared readiness utilities under `tests/visual/helpers/`.
- Keep the Playwright configuration at the `v2/lib` package root.
- Store documentation in `v2/lib/docs/`.
- Store generated reports and test results outside production source directories.
- Do not commit generated reports or temporary failure artifacts.
- Do commit approved baseline images.

The paths above are proposed paths, not a verified inventory of existing files.

## 7. Dependencies and Docker

### 7.1 Playwright installation

Install Playwright Test as a development dependency of `v2/lib`.

From that directory:

    npm install --save-dev @playwright/test

Commit the resulting package configuration and lockfile changes.

### 7.2 Docker image

Use the official Microsoft Playwright image:

    mcr.microsoft.com/playwright:<version>-<distribution>

Requirements:

- Pin a specific image tag.
- Match the image version to the installed Playwright version.
- Do not use `latest`.
- Use the same image for local tests, snapshot updates, and CI.

### 7.3 Docker requirements

The Docker workflow must:

- Mount the package directory so tests and snapshots remain available on the host.
- Run commands from the correct package directory.
- Allow Chromium to reach the Vite preview server.
- Preserve generated reports and failure artifacts.
- Exit with the correct test status.
- Stop preview servers and remove containers after execution.
- Work on Linux and Docker Desktop for macOS and Windows.

Do not assume that `--network=host` works the same way on every supported operating system.

Use a portable networking strategy. A dedicated Docker network or a host-accessible preview address may be appropriate.

Baseline generation and screenshot comparison must use the same Docker image.

### 7.4 Docker performance

Start with a simple bind-mount strategy.

Docker bind mounts can be slow on macOS and Windows, especially when the container accesses a large host `node_modules` directory.

Do not introduce named volumes or complex dependency caching before measuring actual performance.

If Docker performance becomes a problem:

1. Measure the time spent accessing dependencies.
2. Check whether mounting host `node_modules` is the cause.
3. Consider excluding host `node_modules` from the container mount.
4. Consider a Docker named volume for container-installed dependencies.
5. Keep dependency installation reproducible through the package lockfile.

Any optimization must preserve the same Playwright and Chromium versions.

Prefer the simplest approach that provides acceptable performance on supported developer operating systems.

### 7.5 Docker networking strategy

**Preferred architecture:** Run the Vite preview server and Playwright inside the same Docker container. This keeps browser-to-server communication local and avoids unnecessary cross-platform networking complexity. Use a different architecture only if repository constraints require it.

Use Playwright's `webServer` configuration to manage the Vite lifecycle.

When both processes share the container's network namespace:

- Bind Vite to `127.0.0.1` or an appropriate container interface.
- Use a consistent preview port.
- Configure Playwright to access the preview through `127.0.0.1`.

If the preview must run on the Docker host:

- Use `host.docker.internal` on Docker Desktop.
- Configure an appropriate host-gateway mapping on native Linux.
- Verify connectivity from inside the container.

Do not assume that `--network=host` provides consistent behavior across operating systems.

Prefer the simplest strategy that works on supported developer platforms.

## 8. Preview Architecture

Use Vite to render the actual Lit component implementations in a browser.

The preview must:

- Load real component code and styles.
- Allow a test to select a component and its state.
- Expose the target custom element to Playwright.
- Avoid unrelated page content in screenshots.
- Work inside the Docker test environment.
- Start and stop reliably.

The preview application must remain separate from production component code. It must import the actual component source. Do not create mock copies of production components.

Inspect the existing Vite and component build setup before choosing the preview entry point. Do not create a second build system without a clear need.

Prefer Playwright and Vite built-in capabilities over custom infrastructure. Add custom scripts only when existing tools cannot implement the required workflow cleanly.

### 8.1 Vite server lifecycle

Use Playwright's built-in `webServer` configuration in `playwright.config.ts` to manage the preview server.

The configuration must:

- Start Vite automatically when Playwright runs.
- Use a fixed port.
- Configure Vite with `strictPort` so it does not silently select another port.
- Wait for the preview URL to become available.
- Stop the server when the Playwright process exits.
- Avoid leaving orphaned processes.

Use a predictable local preview URL, for example:

    http://127.0.0.1:4173/

The exact port may change if repository requirements make another port more appropriate. Select one port and use it consistently.

The preview server must be reachable from Chromium inside Docker.

Do not require contributors to start Vite manually before running visual tests.

An illustrative Playwright configuration is:

    webServer: {
      command: 'npm run test:visual:preview',
      url: 'http://127.0.0.1:4173/',
      reuseExistingServer: !process.env.CI,
      timeout: 30_000,
    },

This is an example, not a complete configuration. Adapt the host and networking strategy to the Docker execution environment.

## 9. Font Consistency

Fonts can affect:

- Text width.
- Button dimensions.
- Line wrapping.
- Vertical alignment.
- Overall component appearance.

Use the fonts already intended by AgnosticUI.

Requirements:

- Prefer locally available font assets over external network-loaded fonts.
- Use the actual component font declarations.
- Define predictable fallback fonts.
- Ensure the Docker environment has the required fallback fonts.
- Wait for `document.fonts.ready` before screenshot capture.
- Avoid introducing new fonts solely for visual testing.

The preview must represent actual component styling. Do not create a special font configuration that makes the preview differ from normal component usage.

If a required font is missing in Docker, resolve the dependency rather than silently accepting a different rendering result.

Document any required font installation or asset configuration.

## 10. Rendering Readiness

A screenshot must represent a stable component state.

There are no existing readiness helpers established for this effort. Implement a reusable helper and use it in component tests.

The helper must:

1. Wait for the custom element to be registered.
2. Verify that the element is attached and visible.
3. Wait for Lit rendering to complete.
4. Wait for required fonts to load.
5. Allow additional readiness checks for components with asynchronous dependencies.
6. Avoid arbitrary fixed delays as the primary readiness mechanism.

For Lit components, use the element's `updateComplete` promise where appropriate.

Do not assume that a single completed update covers all asynchronous work.

### 10.1 Shared readiness helper

Implement:

    tests/visual/helpers/visual-readiness.ts

The helper should provide a consistent way to wait for a component before screenshot capture.

Support an optional custom `waitFor` callback or equivalent readiness strategy.

This allows a component test to wait for additional asynchronous work when required.

Examples of possible edge cases include:

- Third-party icon components.
- Nested custom elements.
- Asynchronously loaded assets.
- Components with additional rendering steps.

Keep the default helper simple.

Do not add custom waits to every component. Use them only when the component requires them.

### 10.2 Illustrative readiness sequence

    await page.evaluate(async () => {
      await customElements.whenDefined('ag-button');
    });

    const button = page.locator('ag-button');

    await expect(button).toBeVisible();

    await button.evaluate(async (element) => {
      await element.updateComplete;
    });

    await page.evaluate(() => document.fonts.ready);

The actual implementation should use the shared helper rather than repeat this sequence in every test.

Confirm the actual custom-element name and lifecycle behavior during implementation.

### 10.3 Readiness verification

Before accepting the helper:

- Verify that custom-element registration completes.
- Verify that Lit rendering completes.
- Verify that required fonts are loaded.
- Verify that optional custom readiness callbacks work.
- Verify that screenshots are stable across repeated runs.
- Verify that asynchronous component updates do not produce premature screenshots.

If a component needs additional readiness handling, document the reason.

Do not use arbitrary fixed sleep durations as a substitute for lifecycle or readiness checks.

### 10.4 Nested component readiness

A completed Lit update does not guarantee that all nested components have completed rendering.

When a component contains nested Lit elements or asynchronous dependencies:

- Wait for the parent component's updateComplete promise.
- Identify nested components that require additional readiness checks.
- Wait for their updateComplete promises when appropriate.
- Use the optional custom waitFor callback for component-specific requirements.

Do not assume that awaiting the parent component is sufficient.

Do not add nested readiness checks when they are not needed.

Keep the default readiness helper simple. Extend it only for components that require additional checks.

## 11. Screenshot Configuration

Use Playwright's built-in `toHaveScreenshot()` assertion.

Initial configuration:

- Browser: Chromium.
- Viewport: `1280 × 720`.
- Device scale factor: `1`.
- Pinned Chromium version.
- Consistent Linux rendering environment.
- Disabled animations during screenshot capture.
- Hidden text carets.
- Maximum initial pixel difference ratio: 1%.

Configure global screenshot assertion options:

    expect: {
      toHaveScreenshot: {
        maxDiffPixelRatio: 0.01,
        animations: 'disabled',
        caret: 'hide',
      },
    },

The 1% threshold is an initial setting, not a permanent requirement.

Review the actual results during the Button proof of concept.

If the suite produces too many false failures, evaluate whether the threshold should increase.

If the suite misses meaningful visual regressions, evaluate whether the threshold should decrease.

Prefer a tolerance that detects meaningful visual changes without making CI fragile.

Do not introduce a custom color-difference engine or additional image comparison framework.

Disabling animations does not freeze Lit updates. Complete readiness checks before capturing screenshots.

## 12. Screenshot Capture and Baselines

### 12.1 Capture target

The default capture target must be the web component custom element itself.

For example, the Button test should capture `<ag-button>`, not the full preview page.

Use stable selectors based on the public custom element. Avoid selectors that depend on internal Shadow DOM structure unless the test specifically needs to verify that structure.

Capture surrounding layout only when layout is part of the test requirement.

### 12.2 Baseline storage

Use Playwright's standard snapshot directory convention.

Example:

    _Button.drift.spec.ts
    _Button.drift.spec.ts-snapshots/
    └── button-default-1-chromium-linux.png

Use descriptive names that identify the component and state.

Baselines must:

- Be generated inside Docker.
- Be committed to version control.
- Match the test and component state they represent.
- Remain unchanged during ordinary test runs.
- Be reviewed whenever they change.

### 12.3 Baseline update policy

Use a separate command to update snapshots.

Never enable snapshot updates in ordinary test runs or CI.

When a baseline changes:

1. Review the actual screenshot.
2. Confirm that the visual change is intentional.
3. Inspect the changed PNG files.
4. Commit the updated baselines with the relevant source and tests.

Do not update snapshots to hide an unexplained test failure.

## 13. Visual Test Coverage Strategy

### 13.1 Objective

Maximize visual regression detection while minimizing:

- Test execution time.
- Snapshot maintenance.
- Redundant coverage.
- False failures.
- Unnecessary test complexity.

Do not attempt to test every possible combination of component properties.

Use representative visual states and risk-based coverage.

The goal is not exhaustive visual coverage. The goal is meaningful regression detection at a reasonable maintenance cost.

### 13.2 Required coverage

Every component must have at least one screenshot of its default appearance.

Add screenshots for additional states only when they provide meaningful visual coverage.

### 13.3 Representative states

Consider these properties when selecting states:

| Property or state | Testing guidance |
|---|---|
| Default appearance | Always test |
| Visually distinct variants | Test representative variants |
| Color changes | Test when they introduce distinct styling |
| Border and radius | Test when they change visible geometry |
| Size | Test representative sizes when they affect layout or typography |
| Disabled | Test when visual styling changes |
| Loading | Test when it introduces a spinner or changes layout |
| Icons | Test when positioning or spacing changes |
| Text content | Use representative content; test long content when wrapping matters |
| Accessibility attributes | Test functionally, not with screenshots alone |
| Independent boolean properties | Avoid testing every combination |
| Rare or redundant combinations | Usually omit |

These are selection guidelines, not mandatory screenshots for every component.

### 13.4 Avoid combinatorial testing

Do not test every combination of component properties.

For example, a Button may support several variants, sizes, border settings, and radius settings. Testing every combination can create many screenshots with little additional value.

Instead:

- Select representative variants.
- Test independent visual properties separately when possible.
- Combine properties only when their interaction creates a distinct visual result.
- Reuse existing coverage when a screenshot already verifies the same visual behavior.
- Avoid redundant states.

### 13.5 Risk-based selection

Before adding a screenshot, consider:

1. Does this state change the visible appearance?
2. Does it exercise a different rendering path?
3. Could a regression affect an important use case?
4. Does existing coverage already detect this type of regression?

Add the screenshot when it provides meaningful additional coverage.

The implementation agent must be able to explain what additional regression risk each screenshot covers.

### 13.6 Screenshot maintenance and ROI

Treat every screenshot as a maintenance commitment.

Prefer a small, stable suite with high regression detection value over a large suite with redundant coverage.

Do not add screenshots solely to increase test counts or achieve exhaustive property coverage.

Before adding a screenshot, explain:

- What visual behavior it covers.
- What regression it could detect.
- Why existing screenshots do not already provide that coverage.

If the additional coverage does not justify its maintenance cost, do not add the screenshot.

### 13.7 Initial screenshot budget

Use these targets as initial planning guidelines:

| Component complexity | Initial target |
|---|---:|
| Simple component, such as Tag | 1–3 screenshots |
| Moderate component, such as Button or Alert | 2–5 screenshots |
| Complex component | 4–8 screenshots |

These are not mandatory limits.

Increase the count only when additional screenshots provide meaningful regression coverage.

A complex component may require more screenshots. Explain why before expanding its coverage.

Do not combine many states into one screenshot if doing so makes failures harder to identify or review.

### 13.8 Coverage review

Start with representative states for each component.

Review coverage after Button, Alert, and Tag.

Ask the user before:

- Adding complex property combinations.
- Significantly increasing screenshot counts.
- Introducing new categories of visual testing.
- Adding broad coverage that increases maintenance.

The user has final approval over visual test scope.

### 13.9 Visual tests and functional tests

Use visual tests to detect changes in appearance.

Use unit and interaction tests to verify behavior.

| Requirement | Appropriate test |
|---|---|
| Button disabled styling | Visual |
| Button cannot be clicked when disabled | Functional |
| Correct accessibility attributes | Accessibility or attribute assertion |
| Button label wrapping | Visual |
| Button event dispatch | Functional |
| Tag color treatment | Visual |
| Alert dismissal behavior | Functional |

Do not add screenshots to verify behavior that can be tested more reliably with ordinary assertions.

Visual tests do not replace unit, interaction, or accessibility tests.

## 14. npm Scripts

All visual test commands must be available in:

    v2/lib/package.json

Use the following command names:

| Command | Purpose |
|---|---|
| `npm run test:visual` | Run visual regression tests without updating baselines. |
| `npm run test:visual:update` | Intentionally update screenshot baselines. |
| `npm run test:visual:report` | Open the latest HTML report. |

### 14.1 Preview command

Provide a script to start the Vite preview.

Suggested name:

    npm run test:visual:preview

Playwright should start and stop this server automatically through its `webServer` configuration.

Contributors should not need to start the preview manually before running visual tests.

### 14.2 Ordinary test command

    npm run test:visual

Requirements:

- Run tests inside the pinned Docker image.
- Start the Vite preview.
- Launch Chromium.
- Run Playwright visual tests.
- Compare screenshots with approved baselines.
- Generate the HTML report.
- Preserve failure artifacts.
- Return a non-zero exit code when tests fail.
- Never update baselines automatically.

### 14.3 Snapshot update command

    npm run test:visual:update

Requirements:

- Use the same Docker image as ordinary tests.
- Use the same browser and viewport configuration.
- Explicitly enable Playwright snapshot updates.
- Write approved baselines to the mounted repository.
- Preserve test results and reports.
- Return a non-zero exit code if the update process fails.

This command is intended for developers who have made an intentional visual change.

### 14.4 Report command

    npm run test:visual:report

Requirements:

- Open the latest Playwright HTML report on the host.
- Do not require a separate manual Docker command.
- Clearly report when no report exists.

### 14.5 Docker command implementation

The exact npm script implementation must be verified during implementation.

The scripts should use a consistent Docker invocation and a pinned image.

An illustrative command is:

    docker run --rm \
      -v "$(pwd):/work" \
      -w /work \
      mcr.microsoft.com/playwright:<pinned-version> \
      npx playwright test

This example is not a final implementation.

Account for Docker networking differences between Linux, macOS, and Windows.

Do not assume that `--network=host` is portable.

Avoid duplicating complex Docker command logic across multiple npm scripts. A small shared helper script is acceptable if it reduces maintenance.

Measure Docker performance before introducing named volumes or dependency caching.

## 15. HTML Reports and Failure Artifacts

Use Playwright's built-in HTML reporter.

The report must help developers identify and understand visual differences.

### 15.1 Required report information

The report should provide:

- Test names.
- Pass and failure status.
- Screenshot assertion details.
- Expected screenshots.
- Actual screenshots.
- Difference images.
- Relevant error messages.

### 15.2 Artifact persistence

Generated reports must remain accessible after the Docker container exits.

Mount the relevant output directory to the host.

Keep generated artifacts outside production source directories.

Do not commit reports or temporary test results.

### 15.3 Local report workflow

After running tests:

    npm run test:visual:report

The developer must be able to inspect the HTML report without entering the Docker container.

### 15.4 CI report workflow

CI must upload an artifact named:

    playwright-visual-report

Developers must be able to download the archive from the GitHub Actions run summary.

The archive must contain the HTML report and supporting files needed to inspect failures.

## 16. Developer Workflow

The normal developer workflow must be simple and consistent.

### 16.1 Adding a new component

When adding visual coverage for a component:

1. Inspect the component implementation and public API.
2. Identify visually distinct states.
3. Select representative states based on regression risk.
4. Explain why each proposed screenshot adds value.
5. Obtain user approval when required by the implementation plan.
6. Add the Playwright test.
7. Generate initial baselines inside Docker.
8. Inspect every generated screenshot.
9. Run the ordinary visual test command.
10. Confirm that all tests pass.
11. Commit the test and approved baselines with the relevant component changes.

### 16.2 Making an intentional visual change

When a developer intentionally changes a component's appearance:

1. Make the component change.
2. Run:

       npm run test:visual

3. Review any failures.
4. Confirm that the visual differences are intentional.
5. Run:

       npm run test:visual:update

6. Inspect all changed baseline images.
7. Run:

       npm run test:visual

8. Confirm that the tests pass.
9. Review `git status` and `git diff`.
10. Commit the component change and approved baseline updates together.

Never update baselines without reviewing the resulting images.

### 16.3 Making a functional change

When a developer changes component behavior without intending to change its appearance:

1. Run:

       npm run test:visual

2. Investigate any visual failures.
3. Confirm whether the appearance changed unexpectedly.
4. Update baselines only if a visual change is intentional and approved.

Do not automatically update snapshots after every component change.

### 16.4 Reviewing a failed pull request

When CI reports a visual regression:

1. Open the GitHub Actions workflow run.
2. Locate the failed visual test job.
3. Download the `playwright-visual-report` artifact.
4. Extract the archive.
5. Open the HTML report.
6. Compare expected, actual, and difference images.
7. Identify the cause of the failure.
8. Correct unintended changes or intentionally update the baseline.
9. Commit the correction.
10. Push the updated pull request branch.

Do not disable visual assertions to make a pull request pass.

## 17. Git and Baseline Maintenance

Approved screenshot baselines are source-controlled project assets.

Commit them with their corresponding tests and component changes.

Before committing, inspect:

    git status
    git diff

Confirm that:

- Every changed baseline is intentional.
- No unexpected PNG files were generated.
- No HTML reports are staged.
- No temporary artifacts are staged.
- Test changes match the intended component changes.

Keep commits focused.

The implementation plan must also be updated when a phase receives user approval. Include that update in the next approved Git checkpoint.

Never commit unexplained screenshot changes.

## 18. Continuous Integration

Visual regression tests must run automatically in GitHub Actions for pull requests.

### 18.1 Execution environment

CI must:

- Use the official pinned Microsoft Playwright Docker image.
- Use the same Playwright and Chromium versions as local development.
- Run the same visual test command used locally.
- Start the Vite preview automatically.
- Execute the Chromium visual test suite.
- Preserve reports and failure artifacts.
- Return a failing status when an unapproved visual difference is detected.

Do not introduce a separate CI-only screenshot configuration.

Local and CI execution must produce comparable results.

### 18.2 Pull-request policy

An unexplained or unapproved visual difference must fail the visual regression job.

The initial CI job may run as non-blocking while the implementation and baseline suite stabilize.

After successful verification, make the visual regression job a required pull-request check.

The intended final policy is:

- Visual regression tests block pull requests when they fail.
- Developers must review intentional visual changes.
- Developers must update approved baselines locally using Docker.
- Updated baselines must be committed to the pull request.
- CI must verify the updated baselines without modifying them.

CI must never update screenshot baselines automatically.

### 18.3 Failure artifacts

Upload the HTML report as a GitHub Actions artifact named:

    playwright-visual-report

The artifact must remain available after the job completes.

Configure artifact upload to run even when visual tests fail.

The report must include enough information to investigate the failure without rerunning the test locally.

### 18.4 CI verification

Verify both success and failure paths.

**Success path:**

1. Run the visual suite with approved baselines.
2. Confirm that tests pass.
3. Confirm that the job exits successfully.
4. Confirm that the HTML report is uploaded.

**Failure path:**

1. Introduce a temporary intentional visual difference.
2. Run the CI workflow.
3. Confirm that the screenshot assertion fails.
4. Confirm that the job exits unsuccessfully.
5. Confirm that the HTML report is uploaded.
6. Download the artifact and inspect its contents.
7. Restore the original component.
8. Confirm that the workflow passes again.

Do not leave temporary visual changes in the repository.

## 19. Test Reliability and Maintenance

The visual suite must remain predictable and easy to maintain.

### 19.1 Stability

- Use a pinned Docker image.
- Use a pinned Chromium version.
- Use a consistent viewport.
- Use a consistent device scale factor.
- Wait for Lit rendering readiness.
- Wait for required fonts.
- Disable animations during screenshot capture.
- Avoid unnecessary network dependencies.
- Avoid arbitrary fixed delays.
- Keep preview content deterministic.

### 19.2 Failure investigation

When a screenshot assertion fails, investigate the cause before changing the baseline.

Possible causes include:

- An intentional design change.
- An unintended CSS regression.
- A changed font or font-loading problem.
- Incorrect component properties.
- Incomplete rendering readiness.
- Unexpected animation or asynchronous rendering.
- A browser or environment mismatch.

Do not assume that every screenshot failure represents a genuine component regression.

### 19.3 Maintenance

Prefer shared helpers and configuration over repeated custom logic.

Do not create separate preview applications for individual components.

Do not create unnecessary abstractions.

Do not increase screenshot counts without a clear regression benefit.

Review the suite periodically for redundant screenshots and unnecessary maintenance.

Prefer measured improvements over speculative optimization.

## 20. Acceptance Criteria

The initial implementation is accepted when all the following requirements are satisfied.

### Dependencies and environment

- [ ] `@playwright/test` is installed as a development dependency of `v2/lib`.
- [ ] The Playwright Docker image is pinned.
- [ ] The Docker image version matches the installed Playwright version.
- [ ] Chromium runs successfully inside Docker.
- [ ] Local and CI execution use the same browser environment.

### Preview and readiness

- [ ] A Vite-based preview application exists.
- [ ] The preview imports actual Lit component implementations.
- [ ] Playwright can access the preview inside Docker.
- [ ] Playwright manages preview startup and teardown.
- [ ] The preview uses a fixed port and `strictPort`.
- [ ] A shared rendering-readiness helper exists.
- [ ] The helper waits for custom-element registration.
- [ ] The helper waits for Lit rendering.
- [ ] The helper waits for required fonts.
- [ ] Optional custom readiness callbacks work.
- [ ] Screenshots are stable across repeated runs.

### Screenshot testing

- [ ] Button has approved visual coverage.
- [ ] Alert has approved visual coverage.
- [ ] Tag has approved visual coverage.
- [ ] Screenshots capture the web component custom element by default.
- [ ] Screenshot configuration uses the agreed Chromium environment.
- [ ] The initial pixel difference ratio is 1%.
- [ ] Ordinary tests do not update baselines.
- [ ] Explicit snapshot updates work.
- [ ] Approved PNG baselines are committed to Git.
- [ ] Coverage follows the risk-based selection strategy.

### Developer workflow

- [ ] `npm run test:visual` works.
- [ ] `npm run test:visual:update` works.
- [ ] `npm run test:visual:report` works.
- [ ] `npm run test:visual:preview` works.
- [ ] Docker execution works on supported developer operating systems.
- [ ] Reports remain accessible after Docker exits.
- [ ] Contributors can inspect visual failures locally.

### Continuous integration

- [ ] GitHub Actions runs visual regression tests on pull requests.
- [ ] CI uses the pinned Playwright Docker image.
- [ ] An unapproved visual difference fails CI.
- [ ] CI does not update baselines.
- [ ] The `playwright-visual-report` artifact is uploaded on failure.
- [ ] Developers can download and inspect the report.
- [ ] The visual job becomes a required pull-request check after stabilization.

### Documentation

- [ ] The technical specification is present in `v2/lib/docs/`.
- [ ] The implementation plan is present in `v2/lib/docs/`.
- [ ] The contributor guide is present in `v2/lib/docs/`.
- [ ] Commands and paths in the contributor guide match the actual implementation.

## 21. Implementation Principles

Follow these principles throughout the project:

1. **Start small.** Prove the complete workflow with Button before expanding coverage.
2. **Use real components.** Test actual Lit implementations, not mocks.
3. **Keep the scope focused.** React and Vue wrappers are outside this effort.
4. **Use one browser initially.** Chromium is sufficient for the first milestone.
5. **Use Docker consistently.** Generate and compare baselines in the same pinned environment.
6. **Prefer built-in tools.** Use Playwright and Vite capabilities before adding custom infrastructure.
7. **Control screenshot growth.** Add coverage based on regression value, not completeness.
8. **Keep failures meaningful.** Do not weaken assertions to reduce test failures.
9. **Require baseline review.** Never approve unexplained visual changes.
10. **Stop for user approval.** Complete each implementation phase only after the user reviews and approves it.
11. **Optimize for ROI.** Do not add complexity without a clear benefit.
12. **Measure before optimizing.** Address actual performance and maintenance problems, not hypothetical ones.

## 22. Writing Style

Use clear, concise technical English.

Follow a style inspired by ASD-STE100 Simplified Technical English. Do not attempt strict compliance with the official standard.

- Use short sentences.
- Prefer active voice.
- Use direct instructions.
- Use consistent terminology.
- State expected results.
- Separate verified facts, assumptions, and recommendations.
- Avoid repetition and unnecessary introductions.

The goal is clarity, not compliance with a formal writing standard.

## 23. References

- [Playwright screenshot assertions](https://playwright.dev/docs/api/class-snapshotassertions)
- [Playwright Docker documentation](https://hub.docker.com/r/microsoft/playwright)
- [Playwright HTML reporter](https://playwright.dev/docs/test-reporters#html-reporter)
- [AgnosticUI repository](https://github.com/AgnosticUI/agnosticui)
- [AgnosticUI issue #501](https://github.com/AgnosticUI/agnosticui/issues/501)
