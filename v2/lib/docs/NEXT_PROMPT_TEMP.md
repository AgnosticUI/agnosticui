You are an implementation agent executing Phase 6 (Tag component) of a Playwright visual regression test suite migration. Refer to the project context below to align your state:

### 1. System Topology & Current State

- **Architecture Model**: Decoupled test orchestration. A native Vite preview app runs on the host machine (`v2/lib`), while an isolated Docker container (`://microsoft.com`) hosts headless Chromium on port 3001, tunneling back via WebSockets.
- **Current Progress**: The repository index is perfectly clean on branch `feat/501-playwright-visual-regression`. Running `npm run test:visual:update` in Terminal 3 delivers a clean, 1.7-second green pass across 4 separate snapshot sets (Light/Dark variants for both Button and Alert).
- **The Types Vulnerability**: We discovered that external framework type imports (like `TemplateResult`) inside the browser preview code crash the module compilation thread silently. The registry MUST remain untyped or use standard structural primitive shapes like `Record<string, () => unknown>`.

### 2. File Decoupling Milestone

We have successfully decoupled the registration layers. The codebase now uses two separate files:

1. `v2/lib/tests/visual/preview/registry.ts`: Stores the `COMPONENT_REGISTRY` mapping object.
2. `v2/lib/tests/visual/preview/main.ts`: Imports the registry and drives the sequential rendering branches.

### 3. Active Progress & Working Metrics

- **Current Branch**: `feat/501-playwright-visual-regression` (Git index is perfectly clean, all recent button/alert specification milestones are fully committed).
- **Execution baseline**: Running `npm run test:visual:update` in Terminal 3 delivers a clean, 1.7-second green pass across 4 separate snapshot sets (Light/Dark variants for both Button and Alert).

### 4. Immediate Phase 6 Objective: Tag Component

- Do not make sweeping configuration changes or guess properties.
- Ask me for the exact component API specifications for `ag-tag` (from the official documentation or file system configuration profiles) before constructing layout rows.

### 🚨 STOP: CRITICAL COMPLIANCE DIRECTIVE

Do not attempt to write, refactor, or propose any code changes yet. You do not have visibility into how `main.ts` and `registry.ts` look after the separation. You must first analyze the code files and inspect the exact public API properties of the `Tag` component to avoid guessing attributes.

### Next Action Step Required

Immediately ask me to provide the following three items so you can establish a verified baseline:

0. The exact current contents of `v2/lib/docs/playwright.readme.md` which will provide you context of how the pipeline is ran locally, and `v2/lib/docs/playwright-implementation-plan.md` which will show you the implementation plan that we need to track progress in.
1. The exact current contents of `v2/lib/tests/visual/preview/main.ts`
2. The exact current contents of `v2/lib/tests/visual/preview/registry.ts`
3. The official component property / variant documentation for `ag-tag`
