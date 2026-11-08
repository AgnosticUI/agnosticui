# Playwright Smoke Test Strategy for v2/examples

## Purpose

The `v2/examples` directory contains basic integration tests verifying that framework wrappers (React, Vue, Lit) successfully mount AgnosticUI's underlying web components without runtime failures or compilation regressions.

Instead of testing full interactive component behavior here (which belongs in discrete component suites), this layer acts as an **E2E Integration Smoke Net** for testing framework interoperability and validation of our CLI-scaffolded outputs.

---

## Architecture: Minimal Footprint Sandbox

Historically, a monolithic "Kitchen Sink" layout and subsequent multi-page category grids (`pages/*.html`) were explored. However, because AgnosticUI core features are shadow-DOM-isolated Lit web components, overloading the viewport simultaneously caused Playwright's execution contexts to hang indefinitely in headless environments.

To guarantee zero-hang execution speeds and stability in CI pipelines, each framework implements a **Strictly Minimal Sandbox Architecture**:
* **Isolated Environment:** Pages are constrained to basic structure tests using a small cross-section of components (e.g., `ag-button` and `ag-alert`) loaded at the application root (`/`).
* **The MVP Goal:** Verify dependencies resolve, custom element tags are registered by the local framework wrapper, and components successfully attach to the DOM.

---

## Active Pipelines and Verification

Integration health is automatically verified on every push and pull request to the `master` branch. The runner infrastructure maintains deterministic builds using standard framework lifecycle behaviors:

1. **Framework Health Evaluation:** A dedicated setup checks general workspace structure (`v2/scripts/verify-examples.mjs`).
2. **Matrixed E2E Smoke Tests:** Playwright dynamically spins up isolated instances for `react-test`, `vue-test`, and `lit-test`.

### Production Building Restrictions
* Always use compiled states (`vite build && vite preview`) over raw dev-servers to avoid race conditions stemming from dynamic dependency optimization steps during headless browser attachment.
* Assertions default to checking `state: 'attached'` rather than visibility rules to safely accommodate styling adjustments and custom properties loading lifecycle events.
