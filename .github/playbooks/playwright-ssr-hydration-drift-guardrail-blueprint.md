# Playbook Blueprint: Playwright Isomorphic Hydration-Drift Guardrail Engine (Refs #500)

## Tone and Objective

**Tone:** Follow ASD-STE100 Simplified Technical English.

1. Use short, active sentences. Keep each sentence under 20 words.
2. Avoid passive voice, fluff, and unnecessary synonyms.
3. Give one action per instruction.
4. Use simple, direct verbs.
5. Prioritize scannability.

**Objective:** Detect visual drift between server-rendered fallback layouts and client-hydrated components. Use deterministic Playwright tests and repeatable CI execution by ingesting documentation matrix components directly.

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

### Strategic Pivot: Symmetrical Dual-Target Alignment
Instead of manually generating property variants in code, tests ingest documentation matrix files directly from `v2/site/docs/examples/`. For any given component:
- The Server test routes to and renders the `[Component]FallbackPreview.vue` matrix file.
- The Hydrated test routes to and renders the `[Component]Examples.vue` client matrix file.

### Eligible Components

Target only components with completed server fallback engines. Discover the actual scope during Phase A. Do not assume that the expected count remains correct.

The expected initial scope contains these 25 components:

`Alert`, `Avatar`, `AvatarFx`, `Badge`, `BadgeFx`, `Button`, `ButtonFx`, `Checkbox`, `Divider`, `Fieldset`, `Icon`, `IconButton`, `Input`, `Kbd`, `Loader`, `Mark`, `Radio`, `Select`, `SkeletonLoader`, `Slider`, `Spinner`, `Tag`, `TagFx`, `Toggle`, `VisuallyHidden`.

### Global Files

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
- Capture the target component wrapper (`.ag-preview-shell`), not the full viewport.
- Wait for the custom element definition before checking hydrated output.
- Verify structural styles before capturing screenshots.
- Use the same browser version and fonts locally and in CI.
- Keep screenshot tolerances low enough to detect meaningful changes.

Do not treat `networkidle` as proof of hydration or stylesheet readiness. Use explicit checks for each required condition.

Example screenshot masking stylesheet:

```css
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
- [ ] **Step 2: Build the SSR preview server.** Create or update `v2/lib/scripts/serve-ssr-previews.mjs`. Route requests using a `mode` parameter. `?component=Button&mode=ssr` targets `ButtonFallbackPreview.vue`. `?component=Button&mode=hydrated` targets `ButtonExamples.vue`. Return its actual HTML and make structural stylesheets available.

### Required package scripts

Merge these entries into the existing `v2/lib/package.json` scripts object. Preserve existing scripts.

```json
{
  "test:drift": "playwright test -c playwright.config.ts",
  "test:drift:update": "playwright test -c playwright.config.ts --update-snapshots",
  "test:drift:report": "playwright show-report"
}
```

Install a compatible `@playwright/test` version as a development dependency. Use a matching Playwright browser image in CI.

## 5. Phase B: Prove the Button Workflow

Implement one working test before expanding the suite.

- [ ] **Step 3: Create the Button drift spec.** Add `v2/lib/src/components/Button/core/_Button.drift.spec.ts`. Capture the server fallback matrix and hydrated client matrix output.
- [ ] **Step 4: Verify both rendering modes.** Run the test locally. Confirm that the server route works without JavaScript and the client route completes hydration.
- [ ] **Step 5: Establish the baseline.** Generate the initial screenshot only after confirming the expected layout. Review the image before accepting it.
- [ ] **Step 6: Verify regression detection.** Introduce a controlled layout change. Confirm that the screenshot test fails. Revert the change and rerun the test.

### Button Test Pattern

Use this pattern as a starting point. Adapt the route and selector to match the actual Button implementation.

```typescript
import { test, expect } from '@playwright/test';

test.describe('Button hydration drift', () => {
  // Test both matrix targets using the mode modifier
  const serverUrl = '/?component=Button&mode=ssr';
  const hydratedUrl = '/?component=Button&mode=hydrated';
  const targetSelector = '.ag-preview-shell';

  test('matches the approved server baseline', async ({ browser }) => {
    const context = await browser.newContext({
      javaScriptEnabled: false,
    });

    try {
      const page = await context.newPage();
      await page.goto(serverUrl);

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
    await page.goto(hydratedUrl);

    await page.evaluate(async () => {
      await customElements.whenDefined('ag-button');
    });

    const element = page.locator(targetSelector);
    await expect(element).toBeVisible();
    await expect(element).toHaveScreenshot(
      'button-hydrated-baseline.png',
    );
  });
});
```

## 6. Phase C: Integrate GitHub Actions

Add the CI workflow after the Button test passes locally.

- [ ] **Step 7: Add the workflow.** Create `.github/workflows/playwright-drift-guardrail.yml`.
- [ ] **Step 8: Install dependencies in CI.** Use the repository's established package-lock and workspace strategy.
- [ ] **Step 9: Run drift tests.** Execute the `v2/lib` drift script from the repository root.
- [ ] **Step 10: Publish test artifacts.** Upload the Playwright HTML report and failure screenshots when tests fail.

### CI Acceptance Criteria

- The workflow runs on pull requests.
- The Button drift tests pass in the CI browser.
- Failed tests retain screenshots and the HTML report.
- The workflow exits with a nonzero status when a drift assertion fails.
- CI does not update approved snapshots automatically.

## 7. Phase D: Expand to the Remaining Components

Expand only after the Button workflow passes locally and in CI.

- [ ] **Step 11: Process the tracking index.** Select the next eligible component that lacks a drift spec. Refactor existing `Button` and `Alert` tests first to use the new `.vue` matrix targets.
- [ ] **Step 12: Add its drift spec.** Reuse the approved test pattern and set the correct fallback route and selector.
- [ ] **Step 13: Generate and review snapshots.** Inspect each baseline before committing it.
- [ ] **Step 14: Verify the component.** Run its drift test and the relevant unit tests.
- [ ] **Step 15: Commit the component.** Include the spec and approved snapshots.
- [ ] **Step 16: Repeat the cycle.** Continue until every eligible component has a passing drift test.

## 8. Baseline and Failure Policy

Treat screenshot updates as reviewed code changes.

- **Comment Preservation Mandate:** Never remove, overwrite, or clobber ESLint directives (`/* eslint-... */`, `// eslint-disable-line`) or informational comments during code generation or script updates. All structural documentation and linter configurations must remain completely intact.
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
2. The SSR preview server renders both the server matrix and the client matrix components via `.vue` documentation layout resolution.
3. The Button server and hydrated tests run reliably using the new architecture.
4. The approved snapshots detect a controlled layout regression.
5. GitHub Actions runs the tests and publishes failure artifacts.
6. The remaining eligible components follow the same reviewed workflow.
7. The full drift suite passes without unexplained snapshot differences.