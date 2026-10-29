# Playwright Isomorphic Hydration-Drift Guardrail Engine

This documentation covers how to spin up the visual drift regression engine to verify layout alignment between server-rendered (SSR) fallback templates and hydrated client elements.

## 📌 Key File Locations

- **System Specification:** `.github/playbooks/playwright-ssr-hydration-drift-guardrail-blueprint.md`
- **Progress Tracking:** `v2/lib/docs/playwright-drift-tracking.md`
- **Continuation Resume:** `v2/lib/docs/playwright-drift-resume.md`
- **Continuous Integration:** `.github/workflows/playwright-drift-guardrail.yml`

## 💻 Local Development & Testing Workflow

Testing requires running the preview server and the test engine in parallel. Open two separate terminal tabs from the project root:

### 1️⃣ Tab 1: Spin up the SSR Preview Server

This server hosts a programmatic Vite instance that dynamically maps components to their corresponding documentation examples on the fly.

```bash
npx tsx v2/lib/scripts/serve-ssr-previews.mjs
```

### 2️⃣ Tab 2: Run or Update the Drift Testing Suite

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

## 🔄 Symmetrical Dual-Target Testing Matrix

The preview server utilizes a `mode` parameter to dynamically switch between the static server fallback template and the fully hydrated client matrix. This allows you to visually inspect the exact layouts seen by our end-users in `v2/site/docs/examples/`:

- **SSR Fallback Component Matrix:**
  `http://localhost:3000/?component=Button&mode=ssr`
  _(Loads `ButtonFallbackPreview.vue` with JavaScript execution disabled in the test context)_

- **Hydrated Client Component Matrix:**
  `http://localhost:3000/?component=Button&mode=hydrated`
  _(Loads `ButtonExamples.vue` with client-side Lit web components active)_
