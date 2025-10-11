# Deprecated and Historical Documentation

This document contains summaries of documentation that is no longer relevant to the current development workflow but is preserved for historical context.

## 1. @lit/react Evaluation (from `LIT_REACT_EVALUATION.md`)

-   **Date**: 2025-01-09
-   **Decision**: The project adopted the `@lit/react` library for creating React wrappers around the core Lit-based web components.
-   **Reasoning**: The evaluation found that using `@lit/react`'s `createComponent` utility reduced the boilerplate code for React wrappers by approximately 75% compared to writing manual wrappers. It provided automatic property discovery, correct handling of props vs. attributes, and type-safe event mapping.
-   **Outcome**: The standard pattern for creating React wrappers is to use `createComponent`. Manual wrappers are only to be used in exceptional cases where complex prop transformations or imperative APIs are required. This pattern is now codified in `INTERFACE_AND_STORYBOOK_STANDARDS.md`.

## 2. GitHub Pages Deployment (from `GITHUB_PAGES.md`)

-   **Context**: This document explored the feasibility of deploying the `showcase` application to GitHub Pages.
-   **Finding**: Deployment is possible but requires configuration changes.
-   **Required Steps**:
    1.  **`vite.config.ts`**: The `base` property must be set to the repository name (e.g., `base: '/agnosticui/'`).
    2.  **Routing**: Because GitHub Pages is not a true SPA host, client-side routing requires a workaround. The recommended solution was to use a `HashRouter` in React Router, which uses the URL hash (`#`) to manage routes.
    3.  **GitHub Actions**: A workflow file (`.github/workflows/deploy-showcase.yml`) is needed to build the `lib` and `showcase` packages and deploy the `showcase/dist` directory to GitHub Pages.
-   **Status**: This documentation is considered a setup guide for a potential future deployment and is not part of the active development workflow.
