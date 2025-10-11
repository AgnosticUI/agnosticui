# Component Development Workflow

This document provides the complete, end-to-end workflow for creating a new component in AgnosticUI v2. It is designed to be followed sequentially by an LLM assistant.

## Phase 1: Core Component Implementation

**Objective**: Create a new, standards-compliant, accessible web component.

**Checklist**:

1.  **Create Component Directory**: Create a new directory at `v2/lib/src/components/MyComponent`.

2.  **Create Core File**: Create the core component file at `v2/lib/src/components/MyComponent/core/_MyComponent.ts`.

3.  **Define the Interface**: In `_MyComponent.ts`, define the component's public API.
    -   Define event types (e.g., `export type MyComponentChangeEvent = CustomEvent<{ value: string }>;`).
    -   Define a single `MyComponentProps` interface containing all properties and event handlers (e.g., `onMyComponentChange?: (e: MyComponentChangeEvent) => void;`).
    -   Reference `INTERFACE_AND_STORYBOOK_STANDARDS.md` for detailed patterns.

4.  **Implement the Component**:
    -   The class `MyComponent` must implement `MyComponentProps`.
    -   Implement all properties from the interface using the `@property()` decorator.
    -   Adhere strictly to the **Functional CSS Only** principle. All visual styling must come from design tokens.
    -   Implement all accessibility features as defined by the relevant WAI-ARIA APG pattern. This includes keyboard navigation, focus management, and ARIA attributes.
    -   Dispatch events as defined in the interface (e.g., `this.dispatchEvent(new CustomEvent(...))`).
    -   Follow the **Event Listener Lifecycle** pattern for any global event listeners (see `GEMINI.md`).

5.  **Create the Experimental File**: Create a file at `v2/lib/src/components/MyComponent/core/MyComponent.ts`.
    -   This file should import the core component and register it as a custom element.
    -   Follow the **Custom Element Registration** pattern to guard the `customElements.define()` call (see `GEMINI.md`).

6.  **Create Unit Tests**: Create a test file at `v2/lib/src/components/MyComponent/core/_MyComponent.spec.ts`.
    -   Write tests covering all properties, events, and accessibility features.
    -   Run `npm test` from `v2/lib` to ensure all tests pass.

## Phase 2: Framework Wrappers

**Objective**: Create React and Vue wrappers for the new component.

**Checklist**:

1.  **Create React Wrapper**:
    -   Create the file `v2/lib/src/components/MyComponent/react/ReactMyComponent.tsx`.
    -   Use the `@lit/react` `createComponent` utility to create the wrapper.
    -   Define a `ReactMyComponentProps` interface that extends the core `MyComponentProps`.
    -   Map all component events in the `events` configuration.
    -   Reference `INTERFACE_AND_STORYBOOK_STANDARDS.md` for the exact pattern.

2.  **Create Vue Wrapper**:
    -   Create the file `v2/lib/src/components/MyComponent/vue/VueMyComponent.vue`.
    -   This component should wrap the `<ag-my-component>` web component.
    -   Use `onMounted` and `watch` to synchronize props between the Vue wrapper and the web component.
    -   Emit Vue events when the web component dispatches its native events.
    -   Create an `index.ts` in the same directory to export the component and its types.
    -   Reference `INTERFACE_AND_STORYBOOK_STANDARDS.md` for detailed patterns.

## Phase 3: Packaging and Exports

**Objective**: Make the new component and its wrappers available to consumers of the `agnosticui-core` package.

**Checklist**:

1.  **Add Core Export**: In `v2/lib/src/index.ts`, add the line:
    `export * from './components/MyComponent/core/_MyComponent';`

2.  **Add Package Exports**: In `v2/lib/package.json`, add the following blocks to the `exports` section:

    ```json
    "./my-component": {
      "types": "./dist/components/MyComponent/core/_MyComponent.d.ts",
      "import": "./dist/components/MyComponent/core/_MyComponent.js"
    },
    "./my-component/react": {
      "types": "./dist/components/MyComponent/react/ReactMyComponent.d.ts",
      "import": "./dist/components/MyComponent/react/ReactMyComponent.js"
    },
    "./my-component/vue": {
      "types": "./dist/components/MyComponent/vue/index.d.ts",
      "import": "./dist/components/MyComponent/vue/index.js"
    }
    ```

3.  **Add Shared React Export**: In `v2/lib/src/components/react/index.ts`, add the line:
    `export * from '../MyComponent/react/ReactMyComponent';`

4.  **Build the Library**: From the `v2/lib` directory, run `npm run build`. This is a critical step that generates the `dist` files referenced in the `exports` map.

## Phase 4: Showcase Integration

**Objective**: Demonstrate the new component in the `showcase` application for all frameworks.

**Checklist**:

1.  **Create Showcase Directory**: Create a new directory at `v2/showcase/src/pages/my-component/`.

2.  **Add Web Component Type**: In `v2/showcase/src/types/web-components.d.ts`, add the type definition for the `<ag-my-component>` element to the `IntrinsicElements` interface. This provides type safety for the Vue, Svelte, and Vanilla demos.

3.  **Create React Demo**: Create `MyComponentReact.tsx` in the new directory. This should import and use the `ReactMyComponent` wrapper from `agnosticui-core/my-component/react`.

4.  **Create Vue Demo**: Create `MyComponentVue.tsx`. This file will demonstrate the Vue component usage. Since the showcase is a React app, this involves creating a simple wrapper to render the web component and displaying Vue code snippets.

5.  **Create Svelte Demo**: Create `MyComponentSvelte.tsx` to demonstrate Svelte usage.

6.  **Create Vanilla JS Demo**: Create `MyComponentVanilla.tsx` to demonstrate usage with plain JavaScript.

7.  **Update Showcase Routing**: In `v2/showcase/src/App.tsx`, add the routes for all four new demo pages.

8.  **Update Showcase Index**: In `v2/showcase/src/pages/Index.tsx`, add `MyComponent` to the list of components so it appears on the main navigation page.

9.  **Verify Showcase**: Run `npm run dev` from `v2/showcase` and visually confirm that all demo pages work correctly.

## Phase 5: Final Verification

**Objective**: Ensure the new component is fully integrated and the project is stable.

**Checklist**:

1.  **Run Full Validation**: From the `v2/lib` directory, run the complete validation suite:
    `npm run lint && npm run typecheck && npm run test && npm run build`

2.  **Build Showcase**: From the `v2/showcase` directory, run `npm run build` to ensure the production build is successful.

3.  **Await Human Approval**: Announce that the task is complete and await final approval from the user.
