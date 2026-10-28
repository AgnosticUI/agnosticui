
# Playbook Blueprint: Playwright Isomorphic Hydration-Drift Guardrail Engine (Refs #500)

**Tone:** When interacting with the user, generate all text following the principles of ASD-STE100 Simplified Technical English:
1. Use short, active sentences (max 20 words).
2. Avoid passive voice, fluff, and unnecessary synonyms.
3. Keep instructions to one single action per sentence.
4. Use simple, direct verbs (e.g., "use" instead of "utilize", "show" instead of "demonstrate").
5. Prioritize high scannability and clarity over conversational tone.

**Objective:** Establish a zero-drift visual automation strategy to validate server-side rendered layouts against client-hydrated states without brittle pipeline failures.

1. Problem Statement & Financial Impact

Server-side rendering (SSR) pipelines frequently trigger false-negative visual test failures. Microscopic markup shifts, asynchronous asset timing gaps, and font-antialiasing deltas between execution contexts cause these errors. These brittle failures interrupt continuous integration pipelines, waste engineering hours, and decrease project return on investment (ROI).

**Root Causes of Flaky Visual Assertions**

• Hydration Layout Shifts: Structural alterations when custom element shadow boundaries unpack.
• FOUC & Asset Timings: Network transmission delays before background CSS modules apply layout geometry.
• Micro-Diffs across Environments: Microscopic sub-pixel rounding variances between local developer operating systems and remote headless containers.

2. Playwright False-Negative Prevention Strategy

To guarantee test stability, apply these strict configuration and selector rules across all verification loops.

**Execution Synchronization**

• Use page.waitForLoadState('networkidle') to verify that all stylesheet assets are fully downloaded.
• Use customElements.whenDefined('ag-[component]') inside the browser page context before taking the client snapshot.

**Boundary Isolation**

• Avoid full-viewport snapshots.
• Use element handles to capture only the bounding box of the target component.
• Target component wrapper boundaries directly using specific class mappings: page.locator('.ag-[component]-wrapper').

**Style Masking Overrides**

• Inject a global style block before capturing snapshots to eliminate dynamic rendering variables.
• Force carets to become invisible, disable CSS transitions, and freeze infinite loading animations:

```css
*, *::before, *::after {
  transition: none !important;
  animation: none !important;
  caret-color: transparent !important;
}
```

**Deterministic Sub-pixel Containment**

• Force a fixed browser viewport size (e.g., 1280x720) to maintain static layout math.
• Set the deviceScaleFactor: 1 property to prevent high-DPI retina screens from multiplying baseline pixel densities.

3. Directory Topology & File Colocation

Colocate all visual drift specifications inside the active component core/ directories. This location keeps visual tests adjacent to unit specs and implementation source files. Preserve the leading underscore (_) prefix on these files to prevent path resolution conflicts with the public element barrel file ([Component].ts).

**Targeted Component Scope (The 25 Refactored Modules)**

Only target the components with completed server fallback modules. Put the remaining 33 components on hold.
• Alert, Avatar, AvatarFx, Badge, BadgeFx, Button, ButtonFx, Checkbox, Divider, Fieldset, Icon, IconButton, Input, Kbd, Loader, Mark, Radio, Select, SkeletonLoader, Slider, Spinner, Tag, TagFx, Toggle, VisuallyHidden.

Structural Path Layout (Example for [Component] = "Button")

```shell
v2/lib/src/components/Button/
└── core/
    ├── _Button.spec.ts <-- Existing Unit Spec
    ├── _Button.ts <-- Client Implementation
    ├── _ButtonFallback.ts <-- Server Implementation
    ├── _Button.drift.spec.ts <-- New Playwright Isomorphic Drift Spec (Matches internal file pattern)
    ├── button-structure.module.css <-- Shared Layout Source of Truth
    └── Button.ts <-- Public Element Barrel / Registry Hooks
```

**Global Configuration Mapping**

```shell
agnosticui/ (Repository Root)
├── .github/
│   └── workflows/
│       └── playwright-drift-guardrail.yml <-- GitHub Actions CI Blueprint
└── v2/
    └── lib/
        ├── playwright.config.ts <-- Playwright Engine Configuration
        ├── package.json <-- Local Workspace Automation Manifest
        └── scripts/
            └── serve-ssr-previews.mjs <-- Isolated Server Router
```

4. Local Execution Automation Registry (v2/lib/package.json)

Expose localized commands inside the v2/lib/package.json manifest file. These entries enable human engineers to run visual drift validation tasks locally.

```json
"scripts": {
  "test:drift": "playwright test -c playwright.config.ts",
  "test:drift:update": "playwright test -c playwright.config.ts --update-snapshots",
  "test:drift:report": "playwright show-report"
}
```

5. GitHub Actions Continuous Integration Recipe

Standardize the validation pipeline on official Linux container runtimes. This matches headless execution states perfectly and eliminates platform-specific text discrepancies.

```yaml
name: Hydration-Drift Guardrail Validation

on:
  push:
    branches: [ master, feat/* ]
  pull_request:
    branches: [ master ]

jobs:
  validate-drift:
    runs-on: ubuntu-latest
    container:
      image: mcr.microsoft.com/playwright:v1.49.0-noble
    steps:
      - name: Check out repository code
        uses: actions/checkout@v4

      - name: Initialize Node.js environment
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run Isomorphic Test Engine
        run: npm run test:drift --prefix v2/lib
```

6. Global Engine Configuration (`v2/lib/playwright.config.ts`)

Define engine properties to enforce deterministic rendering math. This profile mounts our isolated test harness server and configures snapshot thresholds.

```typescript
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testMatch: '**/*.drift.spec.ts',
  timeout: 30000,
  expect: {
    timeout: 5000,
    toHaveScreenshot: {
      // Small pixel and color variance tolerances prevent false negatives 
      // from microscopic sub-pixel anti-aliasing variations across runtimes.
      maxDiffPixelRatio: 0.02,
      threshold: 0.2,
      animations: 'disabled',
    },
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html', { open: 'never' }]],
  use: {
    baseURL: 'http://localhost:3001',
    trace: 'on-first-retry',
    viewport: { width: 1280, height: 720 },
    deviceScaleFactor: 1,
  },
  snapshotPathTemplate: '{testDir}/__snapshots__/{platform}/{arg}{ext}',
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'node scripts/serve-ssr-previews.mjs',
    url: 'http://localhost:3001',
    reuseExistingServer: !process.env.CI,
    timeout: 10000,
  },
});
```

7. Isomorphic Test Execution Pattern (DRY Architecture)

Use idiomatic Playwright lifecycle hooks to eliminate duplicate path parameters. The test harness server loads once and listens at http://localhost:3001.

```typescript
import { test, expect } from '@playwright/test';

test.describe('Button Isomorphic Drift Check', () => {
  // Define the isolated rendering target path once
  const componentUrl = '/?component=Button';
  const targetSelector = '.ag-button-wrapper';

  // Phase 1: Pure HTML Server Presentation State (No JavaScript)
  test('Capture Server Snapshot', async ({ browser }) => {
    const context = await browser.newContext({ javaScriptEnabled: false });
    const page = await context.newPage();
    
    await page.goto(componentUrl);
    await page.waitForLoadState('networkidle');
    
    const element = page.locator(targetSelector);
    await expect(element).toHaveScreenshot('button-server-baseline.png');
    await context.close();
  });

  // Phase 2: Client Hydrated Active Framework State (With JavaScript)
  test('Compare Hydrated Client State', async ({ page }) => {
    await page.goto(componentUrl);
    await page.waitForLoadState('networkidle');
    
    // Explicit synchronization barrier to guarantee hydration execution pass
    await page.evaluate(() => customElements.whenDefined('ag-button'));
    
    const element = page.locator(targetSelector);
    // Asset matches dynamically against the baseline established in Phase 1
    await expect(element).toHaveScreenshot('button-server-baseline.png');
  });
});
```

8. Tactical Implementation Sequence

Follow this incremental engineering pipeline to build and scale the drift guardrail suite systematically.

**Phase A: One-Time Infrastructure Setup**

These steps establish the automation foundation. Run these tasks exactly once at project initiation.

• [ ] Step 0: Component Tracking Index Setup
Create a tracking matrix file. Register the 25 components that possess completed server fallback modules.
• [ ] Step 1: Configuration Infrastructure Installation
Install the required automation dependencies. Establish the `playwright.config.ts` profiles and register automation scripts inside the manifest.
• [ ] Step 2: Server Routing Execution Development
Build the `v2/lib/scripts/serve-ssr-previews.mjs` router script. Verify that it resolves raw server strings via query parameters.

**Phase B: Iterative Component Deployment Loop**

Execute this cycle sequentially for each individual component. Do not migrate multiple components at the same time.

• Step 3: Initial Component Baseline Generation
Author the primary test file _[Component].drift.spec.ts. Verify that the execution pass handles isolated contexts cleanly.
• Step 4: Local Quality Sign-Off & Commit
Execute local lint checks, type checks, and verification suites. Commit the approved baseline changes to the repository tracking branches.
• Step 5: Iterative Deployment Iteration
Repeat Step 3 and Step 4 for the next target component in the tracking index.
