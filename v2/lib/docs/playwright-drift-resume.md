### Context Resume: Playwright Isomorphic Hydration-Drift Guardrail Engine (#500)

**Project Architecture Summary:**
We are building a deterministic visual test suite to catch layout shifts between server-rendered (SSR) component fallbacks and client-hydrated Lit elements. We use Playwright targeting a dynamic Vite-backed preview server.

**Completed Milestones (Phase B & C Done):**

1. Configured `v2/lib/playwright.config.ts` with strict snapshot thresholds, animations frozen, carets hidden, and a fixed resolution viewport.
2. Built `v2/lib/scripts/serve-ssr-previews.mjs` using a programmatic, headless Vite instance. It rewrites extension paths, processes templates, handles public dependency routing, and uses a `COMPONENT_DEFAULT_SLOTS` lookup map.
3. Enhanced the preview server to load and inject global theme styles (`ag-tokens.css`) and global component layers (`framework-components.css`) directly from local build outputs.
4. Created a layout envelope wrapper (`.ag-preview-shell`) inside the server to standardize component geometry capture.
5. Fully implemented and verified baseline snapshots for **Button** and **Alert**.

**Strategic Pivot (The Documentation Symmetrical Dual-Target Alignment):**
Instead of manually generating property variants in code, we are shifting the testing architecture to ingest the documentation files directly from `v2/site/docs/examples/`. For any given component:

- The Server test routes to and renders the **`[Component]FallbackPreview.vue`** matrix file.
- The Hydrated test routes to and renders the **`[Component]Examples.vue`** client matrix file.
  This ensures our guardrail pipeline tests the entire visual surface area using identical layouts seen by our end-users.

**Current Progress & File Ecosystem:**

- Progress Tracking: `v2/lib/docs/playwright-drift-tracking.md` (Button & Alert are marked COMPLETE).
- Operational Documentation: `v2/lib/docs/playwright-drift-readme.md`.
- Continuation Resume Context: `v2/lib/docs/playwright-drift-resume.md`.

**Immediate Next Task:**
We are ready to begin **Phase D (Step 11): Expand to Remaining Components**.
Our first step is updating `serve-ssr-previews.mjs` to resolve both the `[Component]FallbackPreview.vue` matrices and `[Component]Examples.vue` client matrix files, then executing the test workflow for **`Avatar`**.

**Instructions for AI:**
Acknowledge receipt of this status update using ASD-STE100 Simplified Technical English (short, punchy, active sentences under 20 words). Provide the routing strategy to handle dual-target `.vue` file loading (`[Component]FallbackPreview.vue` vs `[Component]Examples.vue`) based on an environment or query flag.
