# Playbook Blueprint: Playwright Isomorphic Hydration-Drift Guardrail Engine (Refs #500)

## Tone and Objective

**Tone:** Follow ASD-STE100 Simplified Technical English.

1. Use short, active sentences. Keep each sentence under 20 words.
2. Avoid passive voice, fluff, and unnecessary synonyms.
3. Give one action per instruction.
4. Use simple, direct verbs.
5. Prioritize scannability.

**Objective:** Detect visual drift between server-rendered fallback layouts and client-hydrated components. Use deterministic Playwright tests and repeatable CI execution.

## 1. Problem Statement

SSR fallback layouts can differ from their hydrated client states. These differences can cause layout shifts and visual test failures.

**Primary risks:**

- **Hydration drift:** Client initialization changes component geometry.
- **FOUC:** Structural styles load after the browser displays server-rendered markup.
- **Environment differences:** Browser versions, fonts, and pixel rendering affect screenshots.
- **Flaky assertions:** Uncontrolled timing produces inconsistent test results.

The guardrail suite must detect meaningful layout drift without hiding genuine regressions.

## 2. Architecture and Scope

Keep each drift spec beside its component implementation.

Example for `Button`:

text

```
v2/lib/src/components/Button/core/
├── _Button.spec.ts
├── _Button.ts
├── _ButtonFallback.ts
├── _Button.drift.spec.ts
├── button-structure.module.css
└── Button.ts
```

Use `_Button.drift.spec.ts` for Playwright tests. Keep existing unit tests unchanged.

### Eligible Components

Target only components with completed server fallback engines. Discover the actual scope during Phase A. Do not assume that the expected count remains correct.

The expected initial scope contains these 25 components:

`Alert`, `Avatar`, `AvatarFx`, `Badge`, `BadgeFx`, `Button`, `ButtonFx`, `Checkbox`, `Divider`, `Fieldset`, `Icon`, `IconButton`, `Input`, `Kbd`, `Loader`, `Mark`, `Radio`, `Select`, `SkeletonLoader`, `Slider`, `Spinner`, `Tag`, `TagFx`, `Toggle`, `VisuallyHidden`.

### Global Files

text

```
agnosticui/
├── .github/
│   └── workflows/
│       └── playwright-drift-guardrail.yml
└── v2/lib/
    ├── package.json
    ├── playwright.config.ts
    └── scripts/
        └── serve-ssr-previews.mjs
```

## 3. Playwright Test Rules

Apply these rules to every drift test.

- Use a fixed viewport of `1280x720`.
- Use `deviceScaleFactor: 1`.
- Disable CSS transitions and animations during screenshots.
- Hide text carets during screenshots.
- Capture the target component, not the full viewport.
- Wait for the custom element definition before checking hydrated output.
- Verify structural styles before capturing screenshots.
- Use the same browser version and fonts locally and in CI.
- Keep screenshot tolerances low enough to detect meaningful changes.

Do not treat `networkidle` as proof of hydration or stylesheet readiness. Use explicit checks for each required condition.

Example screenshot masking stylesheet:

css

```
*, *::before, *::after {
  transition: none !important;
  animation: none !important;
  caret-color: transparent !important;
}
```

Use the actual wrapper selector for each component. Confirm that the selected element exists in both rendering modes.

## 4a. Persistent State and Completion Rules

Read `v2/lib/docs/playwright-drift-tracking.md` before starting work.

Inspect repository files and Git status. Treat the tracking index as a guide, not proof of completion.

Discover eligible components using `find v2/lib/src/components -type f -name '_*Fallback.ts'`. Extract unique component names and compare them with the committed registry.

Verify each task against its required files, configuration, command output, and tests.

Mark a task `COMPLETE` only after verifying all required evidence. Record the evidence in the tracking index.

Report and resolve missing, stale, or contradictory evidence before proceeding.

Commit tracking-index changes with the implementation changes they document, subject to user authorization.

## 4b. Phase A: One-Time Infrastructure Setup

Run these steps only when the required infrastructure is missing or incomplete. Inspect existing configuration, scripts, dependencies, and the tracking index first. Reuse valid files and preserve unrelated changes. Make only necessary changes. Mark each step complete only after verifying its requirements. If all requirements pass, skip Phase A and proceed to Phase B.

- [ ] **Step 0: Build the component tracking index.** Discover fallback engines using `find v2/lib/src/components -type f -name '_*Fallback.ts'`. Extract unique component names and compare them with the registry. Expect 25 components. If the count differs, report the discovered names and stop.

- [ ] **Step 1: Install Playwright infrastructure.** Verify existing dependencies and scripts before modifying `v2/lib/package.json`. Add missing development dependencies and drift scripts. Create or update `v2/lib/playwright.config.ts`.

- [ ] **Step 2: Build the SSR preview server.** Create or update `v2/lib/scripts/serve-ssr-previews.mjs`. Route requests such as `/?component=Button` to the corresponding fallback engine. Return its actual HTML and make the required structural stylesheet available.


### Required package scripts

Merge these entries into the existing `v2/lib/package.json` scripts object. Preserve existing scripts.

json

```
{
  "test:drift": "playwright test -c playwright.config.ts",
  "test:drift:update": "playwright test -c playwright.config.ts --update-snapshots",
  "test:drift:report": "playwright show-report"
}
```

Install a compatible `@playwright/test` version as a development dependency. Use a matching Playwright browser image in CI.

## 5. Phase B: Prove the Button Workflow

Implement one working test before expanding the suite.

- [ ]**Step 3: Create the Button drift spec.** Add `v2/lib/src/components/Button/core/_Button.drift.spec.ts`. Capture the server fallback and hydrated client output.
- [ ]**Step 4: Verify both rendering modes.** Run the test locally. Confirm that the server route works without JavaScript and the client route completes hydration.
- [ ]**Step 5: Establish the baseline.** Generate the initial screenshot only after confirming the expected layout. Review the image before accepting it.
- [ ]**Step 6: Verify regression detection.** Introduce a controlled layout change. Confirm that the screenshot test fails. Revert the change and rerun the test.

### Button Test Pattern

Use this pattern as a starting point. Adapt the route and selector to match the actual Button implementation.

typescript

```
import { test, expect } from '@playwright/test';

test.describe('Button hydration drift', () => {
  const componentUrl = '/?component=Button';
  const targetSelector = '.ag-button-container';

  test('matches the approved server baseline', async ({ browser }) => {
    const context = await browser.newContext({
      javaScriptEnabled: false,
    });

    try {
      const page = await context.newPage();
      await page.goto(componentUrl);

      const element = page.locator(targetSelector);
      await expect(element).toBeVisible();
      await expect(element).toHaveScreenshot(
        'button-server-baseline.png',
      );
    } finally {
      await context.close();
    }
  });

  test('matches the approved hydrated baseline', async ({ page }) => {
    await page.goto(componentUrl);

    await page.evaluate(async () => {
      await customElements.whenDefined('ag-button');
    });

    const element = page.locator(targetSelector);
    await expect(element).toBeVisible();
    await expect(element).toHaveScreenshot(
      'button-server-baseline.png',
    );
  });
});
```

**Important:** This example assumes the server and hydrated states should produce identical screenshots. Confirm that the SSR route supplies equivalent content and structural styles. If the component intentionally changes appearance after hydration, define separate approved baselines or assert specific layout properties instead.

The `customElements.whenDefined()` call confirms registration, not completed hydration. Add a component-specific readiness check when hydration performs asynchronous work.

## 6. Phase C: Integrate GitHub Actions

Add the CI workflow after the Button test passes locally.

- [ ]**Step 7: Add the workflow.** Create `.github/workflows/playwright-drift-guardrail.yml`.
- [ ]**Step 8: Install dependencies in CI.** Use the repository's established package-lock and workspace strategy.
- [ ]**Step 9: Run drift tests.** Execute the `v2/lib` drift script from the repository root.
- [ ]**Step 10: Publish test artifacts.** Upload the Playwright HTML report and failure screenshots when tests fail.

### GitHub Actions Blueprint

Adapt the install command to the repository's actual npm workspace and lockfile structure before enabling the workflow.

yaml

```
name: Hydration Drift Guardrail

on:
  pull_request:
  push:
    branches:
      - master
      - 'feat/**'

jobs:
  drift:
    runs-on: ubuntu-latest

    defaults:
      run:
        working-directory: v2/lib

    steps:
      - name: Check out repository
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
          cache-dependency-path: v2/lib/package-lock.json

      - name: Install dependencies
        run: npm ci

      - name: Run drift tests
        run: npm run test:drift

      - name: Upload Playwright report
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: playwright-drift-report
          path: v2/lib/playwright-report/
          if-no-files-found: ignore
```

If the repository uses a root lockfile or npm workspaces, adjust `cache-dependency-path` and the installation step accordingly.

Install the Playwright browser and system dependencies through the official Playwright container or the appropriate browser installation command. Do not mix incompatible Playwright package and container versions.

For a container-based job, use an official Playwright image whose version matches the installed Playwright package. Validate that the container can access the required package registry and build dependencies.

### CI Acceptance Criteria

- The workflow runs on pull requests.
- The Button drift tests pass in the CI browser.
- Failed tests retain screenshots and the HTML report.
- The workflow exits with a nonzero status when a drift assertion fails.
- CI does not update approved snapshots automatically.

Keep Docker image publishing out of the initial implementation. Add it only if the project needs a custom, reproducible browser environment.

## 7. Phase D: Expand to the Remaining Components

Expand only after the Button workflow passes locally and in CI.

- [ ]**Step 11: Process the tracking index.** Select the next eligible component that lacks a drift spec.
- [ ]**Step 12: Add its drift spec.** Reuse the approved test pattern and set the correct fallback route and selector.
- [ ]**Step 13: Generate and review snapshots.** Inspect each baseline before committing it.
- [ ]**Step 14: Verify the component.** Run its drift test and the relevant unit tests.
- [ ]**Step 15: Commit the component.** Include the spec and approved snapshots.
- [ ]**Step 16: Repeat the cycle.** Continue until every eligible component has a passing drift test.

Do not generate or approve all component snapshots in one unreviewed batch.

## 8. Baseline and Failure Policy

Treat screenshot updates as reviewed code changes.

- Generate snapshots only when creating or intentionally updating a baseline.
- Inspect every changed screenshot before committing.
- Never update snapshots automatically in CI.
- Investigate unexplained differences before changing tolerances.
- Keep browser versions, viewport dimensions, fonts, and structural assets consistent.
- Preserve failure screenshots and Playwright reports for diagnosis.

Use `npm run test:drift:update` only when you intend to approve a new visual baseline.

## 9. Completion Criteria

The guardrail engine is complete when:

1. The tracking index reflects the actual fallback files.
2. The SSR preview server renders the Button fallback.
3. The Button server and hydrated tests run reliably.
4. The approved snapshots detect a controlled layout regression.
5. GitHub Actions runs the tests and publishes failure artifacts.
6. The remaining eligible components follow the same reviewed workflow.
7. The full drift suite passes without unexplained snapshot differences.

