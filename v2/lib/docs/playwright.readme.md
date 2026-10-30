# Playwright Visual Regression Testing — Contributor Guide

This guide explains how to run and maintain AgnosticUI's visual regression tests.

**Package:** `v2/lib`  
**Test framework:** Playwright Test  
**Browser:** Chromium  
**Execution environment:** Isolated Playwright Browser Server (Docker Pinned Container) + Host Test Orchestration

---

## Quick Start: Local 3-Terminal Execution

To avoid platform binary compilation discrepancies between host environments (macOS/Windows) and the container, this repository isolates test orchestration from browser rendering. Only Chromium runs inside Docker, connecting back to your host Node environment via a remote WebSocket socket.

Follow this sequence across three separate terminal windows to run tests or update baselines:

### Terminal 1: Spin up the Containerized Browser Server

Launch the isolated Playwright browser instance. This exposes a stable Linux-based rendering engine on port 3001:

```bash
docker run --rm --init --ipc=host -p 3001:3001 mcr.microsoft.com/playwright:v1.64.1-noble npx playwright run-server --port 3001 --host 0.0.0.0
```

### Terminal 2: Run the Local Preview Server

Start your Vite development server locally on the host machine. This serves your web components and style tokens on port 4173 across all network interfaces:

```bash
npm run test:visual:preview
```

### Terminal 3: Run Orchestration / Baseline Operations

Execute the test runner locally on your host. It drives the flow, sends commands to the containerized browser via the loopback channel, and writes snapshots directly to disk:

- **To run visual assertions against baselines:**
  ```bash
  npm run test:visual
  ```
- **To capture/update reference baseline snapshots:**
  ```bash
  npm run test:visual:update
  ```

---

## 1. Overview

Visual regression tests detect unintended changes to component appearance.

The visual test suite operates by launching a localized sandbox single-page application under `tests/visual/preview/` using the native Vite engine. Playwright navigates to this canvas using query strings (e.g., `/?component=Button&theme=dark`), synchronizes with the application-side readiness contract, and captures screenshots.

We use Docker for browser rendering so that developers and continuous integration pipelines share an identical Linux layout environment. The suite covers core Lit web components; framework wrappers (React, Vue) are outside the scope of this project.

---

## 2. Synchronization and The Visual Readiness Contract

Tests must never rely on arbitrary timers or brittle sleep intervals. The testing framework uses a strict state flag synchronization contract to eliminate test flakiness:

1. **Lit Lifecycle Hook:** The application renders the component and awaits the native `element.updateComplete` promise chain.
2. **Asset Verification:** The engine ensures all web fonts have settled via the native `document.fonts.ready` promise.
3. **Layout Settlement:** The harness schedules a `requestAnimationFrame` macro-task execution to guarantee layout painting is completed.
4. **Signal Transmission:** The app flags `window.__visualReady = true`, instructing Playwright's containerized `page.waitForFunction` loop to release the screenshot trigger safely.

---

## 3. Reference Snapshot & Git Policies

Snapshot baselines are core assets tracked directly inside the repository alongside the implementation code.

- **Location:** Visual spec files and their generated screenshot folders live adjacent to the target component implementation:
  ```text
  src/components/Button/core/
  ├── _Button.ts
  ├── _Button.drift.spec.ts
  └── _Button.drift.spec.ts-snapshots/
      ├── button-variants-light.png
      └── button-variants-dark.png
  ```
- **Update Policy:** Regenerate reference baselines _only_ when design variations, bug fixes, or typography shifts are intentional.
- **Review Staging:** Always inspect every modified `.png` file manually using `git diff` or the HTML report before staging commits.
- **Git Ignores:** Never check in temporary HTML reports (`playwright-report/`) or local workspace failure artifacts (`playwright-results/`).

---

## 4. Troubleshooting & CI Failure Remediation

### Investigation Workflow

If a visual test fails locally or inside a Pull Request pipeline, follow this remediation path:

1. **Locate Report:** Locally, run `npm run test:visual:report`. In CI, download the `playwright-visual-report` zip archive from the workflow summary block.
2. **Analyze Differences:** Open the HTML report to view the three-panel layout screen displaying the Expected baseline, the Actual render, and the highlighted pixel Diff image.
3. **Isolate Failures:**
   - If the difference is an **unintended CSS regression**, fix the core component styles.
   - If the change is an **intentional feature update**, run `npm run test:visual:update` in Terminal 3 to overwrite the reference baselines, then commit the updated images.

### Port Conflicts

If Terminal 1 throws a `port is already allocated` daemon error, another zombie container or process is holding port `3001`. Clear the stale process using your operating system's task tools, or switch the WebSocket routing endpoint uniformly across `playwright.config.ts` and the container script to an unallocated port (e.g., `3002`).

---

## GitHub Actions CI Workflow Overview

This repository uses automated Continuous Integration (CI) gates to ensure that visual regressions do not slip into the production codebase.

### How the Workflow Triggers

The visual regression pipeline (`.github/workflows/visual-regression.yml`) kicks in automatically when:

- A commit is pushed to any working branch prefixed with `feat/`.
- A commit is pushed directly to the `master` branch.
- A Pull Request is opened or updated targeting the `master` branch.

_Note: The workflow uses performance path-filtering. It will intentionally skip execution unless your commit includes explicit changes to files inside `v2/lib/src/components/**` or `v2/lib/tests/visual/**` or `v2/lib/docs/**` \*/._

### Job Architecture

When triggered, the action spins up an automated orchestration workflow consisting of the following sequential jobs:

1. **Environment Setup:** Installs dependencies, sets up the Node workspace cache, and initializes the environment.
2. **Containerized Server Launch:** Spins up the designated pinned `playwright:v1.64.1-noble` Docker container background service to serve as the unified rendering engine.
3. **Execution & Comparison:** Launches the local preview engine, pipes rendering requests to the containerized browser, and compares the resulting screenshots against the checked-in baseline files.
4. **Artifact Archiving:** If regressions are caught, the runner bundles the full three-panel HTML diff report into a zip archive and attaches it to the workflow execution summary.

### Verification Steps on GitHub

To audit the pipeline status:

1. Navigate to your repository's **Actions** tab on GitHub.
2. Select **Visual Regression** from the left-hand sidebar menu.
3. Click on the latest workflow run corresponding to your commit message.
4. **If a test fails:** Scroll to the bottom of the run's summary screen, locate the **Artifacts** section, and download the `playwright-visual-report` zip file to diagnose the pixel differences locally.
