### Context Resume: Playwright Isomorphic Hydration-Drift Guardrail Engine (#500)

================================================================================
⚠️ STOP — CONTEXT WINDOW SAFETY GATEKEEPER ⚠️
DO NOT proceed with writing or modifying any code until the user has uploaded
the following matching files from their local workspace:

1. v2/lib/scripts/serve-ssr-previews.mjs (Active preview server configuration)
2. v2/lib/docs/playwright-drift-tracking.md (Active component progress tracking index)
3. .github/playbooks/playwright-ssr-hydration-drift-guardrail-blueprint.md (System constraints)

# Once these files are present, confirm you have read them and list the tasks needed to refactor Button and Alert.

**Project Architecture Summary:**
We build a deterministic visual test suite to catch layout shifts between server-rendered (SSR) component fallbacks and client-hydrated Lit elements. We use Playwright targeting a dynamic Vite-backed preview server.

**Completed Milestones (Infrastructure Ready):**

1. Configured `v2/lib/playwright.config.ts` with strict snapshot thresholds, frozen animations, hidden carets, and a fixed resolution viewport.
2. Built `v2/lib/scripts/serve-ssr-previews.mjs` using a programmatic, headless Vite instance. It rewrites extension paths, processes templates, and handles public dependency routing.
3. Enhanced the preview server to load and inject global theme styles (`ag-tokens.css`) and global component layers (`framework-components.css`) directly from local build outputs.
4. Created a layout envelope wrapper (`.ag-preview-shell`) inside the server to standardize component geometry capture.

**Strategic Pivot (The Documentation Symmetrical Dual-Target Alignment):**
We are shifting the testing architecture to ingest the documentation files directly from `v2/site/docs/examples/`. For any given component:

- The Server test routes to and renders the **`[Component]FallbackPreview.vue`** matrix file.
- The Hydrated test routes to and renders the **`[Component]Examples.vue`** client matrix file.

This change ensures our guardrail pipeline tests the exact visual surface area seen by our end-users when they visit our Vitepress based documentation site.

**Current File Ecosystem:**

- Progress Tracking: `v2/lib/docs/playwright-drift-tracking.md` (Button & Alert are marked INCOMPLETE pending refactor).
- Operational Documentation: `v2/lib/docs/playwright-drift-readme.md`.
- Continuation Resume Context: `v2/lib/docs/playwright-drift-resume.md`.

**Immediate Next Task:**
We will update `serve-ssr-previews.mjs` to resolve the `.vue` file paths. Then, we will rewrite the existing `Button` and `Alert` specs to use this new architecture. We will expand to `Avatar` only after `Button` and `Alert` pass with the new matrix format.

---

### 📊 Server Routing Strategy for Dual-Target Ingestion

To support both targets without changing your overall infrastructure, add a `mode` query parameter to your test URLs:

- **SSR Fallback Route:** `/?component=Button&mode=ssr` → Resolves to `v2/site/docs/examples/ButtonFallbackPreview.vue`
- **Hydrated Client Route:** `/?component=Button&mode=hydrated` → Resolves to `v2/site/docs/examples/ButtonExamples.vue`

#### Path Mapping Resolution Logic

```javascript
// Add inside the server request handler loop in serve-ssr-previews.mjs
const mode = reqUrl.searchParams.get("mode") || "ssr"; // Fallback to ssr mode
const matrixDocsRoot = path.resolve(
  COMPONENT_LIB_ROOT,
  "../site/docs/examples",
);

let targetVueMatrixPath;

if (mode === "ssr") {
  // Target the server fallback blueprint component matrix
  targetVueMatrixPath = path.join(
    matrixDocsRoot,
    `${componentName}FallbackPreview.vue`,
  );
} else {
  // Target the fully hydrated live client component matrix
  targetVueMatrixPath = path.join(
    matrixDocsRoot,
    `${componentName}Examples.vue`,
  );
}

if (!fs.existsSync(targetVueMatrixPath)) {
  res.writeHead(404, { "Content-Type": "text/plain" });
  return res.end(`Matrix file not found at path: ${targetVueMatrixPath}`);
}
```
