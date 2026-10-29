# Playwright Isomorphic Hydration-Drift Guardrail Engine

This documentation covers how to spin up the visual drift regression engine to verify layout alignment between server-rendered (SSR) fallback engines and hydrated client elements.

## 📁 Key File Locations

- **System Specification:** `.github/playbooks/playwright-ssr-hydration-drift-guardrail-blueprint.md`
- **Progress tracking:** `v2/lib/docs/playwright-drift-tracking.md`
- **Continuous Integration:** `.github/workflows/playwright-drift-guardrail.yml` _(Work-In-Progress)_

## 🛠️ Local Development & Testing Workflow

Testing requires running the preview server and the test engine in parallel. Open two separate terminal tabs from the project root:

### 📥 Tab 1: Spin up the SSR Preview Server

This server compiles local TypeScript components on the fly, serves structural stylesheets, and maps raw property queries dynamically.

```bash
npx tsx v2/lib/scripts/serve-ssr-previews.mjs
```

### 🧪 Tab 2: Run or Update the Drift Testing Suite

- **To run standard assertions (CI Validation Mode):**
  Ensures that your current code perfectly aligns with the approved baseline images.

  ```bash
  npm run test:drift
  ```

- **To approve/regenerate baseline images (Update Mode):**
  Overwrites the stored snapshot baseline configurations with your active layout state.

  ```bash
  npm run test:drift:update
  ```

- **To view the detailed visual comparison report:**
  ```bash
  npm run test:drift:report
  ```

## 📐 Matrix Query Modifications

The updated server dynamically evaluates property states via URL modifiers. You can preview complex component permutations directly in your desktop browser:

- Button Baseline: `http://localhost:3000/?component=Button`
- Alert Success Bordered Variant: `http://localhost:3000/?component=Alert&variant=success&bordered=true`
