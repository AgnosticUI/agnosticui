### Context Resume: Playwright Isomorphic Hydration-Drift Guardrail Engine (#500)

**Project Architecture Summary:**
We are building a deterministic visual test suite to catch layout shifts between server-rendered (SSR) component fallbacks and client-hydrated Lit elements. We use Playwright targeting a dynamic Vite-backed preview server.

**Completed Milestones (Phase B & C Done):**

1. Configured `v2/lib/playwright.config.ts` with strict snapshot thresholds, animations frozen, and carets hidden.
2. Built `v2/lib/scripts/serve-ssr-previews.mjs` using a programmatic, headless Vite instance. It rewrites inner `.js` imports to local physical `.ts` files, strips TS annotations dynamically, processes templates via `transformIndexHtml`, handles public dependency routing, and uses a `COMPONENT_DEFAULT_SLOTS` lookup map for universal slot handling.
3. Created a layout envelope wrapper (`.ag-preview-shell`) inside the server to standardize component geometry capture.
4. Fully implemented and verified snapshot baselines for **Button** and **Alert** (testing matrix permutations like `?component=Alert&variant=success&bordered=true`).
5. Drafted a work-in-progress CI file at `.github/workflows/playwright-drift-guardrail.yml`.

**Current Progress & File Ecosystem:**

- Progress Tracking: `v2/lib/docs/playwright-drift-tracking.md` (Button & Alert are marked COMPLETE).
- Operational Documentation: `v2/lib/docs/playwright-drift-readme.md`.

**Immediate Next Task:**
We are ready to begin **Phase D (Step 11): Expand to Remaining Components**.
The next component in our registry index order is **`Avatar`**.

**Instructions for AI:**
Acknowledge receipt of this status update using ASD-STE100 Simplified Technical English (short, punchy, active sentences under 20 words). Provide the initial discovery commands to inspect the `Avatar` component's fallback implementation properties and element registration signature.
