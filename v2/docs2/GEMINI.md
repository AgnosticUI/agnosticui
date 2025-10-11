# AgnosticUI v2 - Core Directives for Gemini

## 1. Core Philosophy

- **WAI-ARIA APG is the Bible**: All components MUST be implemented and verified against their corresponding WAI-ARIA Authoring Practices Guide (APG) pattern. Keyboard navigation, focus management, and ARIA attributes are not optional.
- **Functional CSS Only**: Components are styled using design tokens. The component's own CSS should only contain styles essential for its function (e.g., `display`, `visibility`). No colors, fonts, or decorative styles.
- **Token-First Design**: NEVER hardcode colors, spacing, or radii. Always use `--ag-*` design tokens.

## 2. Critical Development Patterns

### Pattern A: Event Listener Lifecycle

**Rule**: Global event listeners (`document`, `window`) MUST be tied to the component's state lifecycle (`willUpdate`) to prevent race conditions between multiple instances.

- **DO**: Add the listener in `willUpdate` when the component becomes active (e.g., `this.open` becomes `true`).
- **DO**: Remove the listener in `willUpdate` when the component becomes inactive.
- **DO**: Clean up the listener in `disconnectedCallback` in case the component is removed from the DOM while active.
- **DON'T**: Use `connectedCallback` or `disconnectedCallback` alone for managing global listeners.

```typescript
// CORRECT: State-based listener management
willUpdate(changedProperties: Map<string, unknown>) {
  if (changedProperties.has('open')) {
    if (this.open) {
      document.addEventListener('keydown', this._handleKeydown);
    } else {
      document.removeEventListener('keydown', this._handleKeydown);
    }
  }
}

disconnectedCallback() {
  super.disconnectedCallback();
  // Cleanup if unmounted while open
  document.removeEventListener('keydown', this._handleKeydown);
}
```

### Pattern B: Custom Element Registration

**Rule**: Guard `customElements.define()` to prevent errors in HMR (Hot Module Replacement) environments like Storybook.

```typescript
// CORRECT: Guarded registration
import { MyComponent } from './_MyComponent.ts';
if (!customElements.get('ag-my-component')) {
  customElements.define('ag-my-component', MyComponent);
}
```

### Pattern C: Component Export Workflow

**Rule**: New components MUST be exported from the `agnosticui-core` package to be available to consumers.

**Checklist**:
1.  **Add Core Export**: In `v2/lib/src/index.ts`, add `export * from './components/MyComponent/core/_MyComponent';`.
2.  **Add Framework Exports**: In `v2/lib/package.json`, add export blocks for the vanilla component and its framework wrappers (React, Vue).

    ```json
    "exports": {
      // ... other exports
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
    }
    ```
3.  **Add Shared React Export**: In `v2/lib/src/components/react/index.ts`, add `export * from '../MyComponent/react/ReactMyComponent';` to enable imports like `import { ReactMyComponent } from 'agnosticui-core/react';`.
4.  **Build the Library**: Run `npm run build` in `v2/lib` to generate the necessary `dist` files that the exports point to.

## 3. Verification and Completion

- **Full Validation Suite**: Before marking any task as complete, run the full validation suite from the `v2/lib` directory: `npm run lint && npm run typecheck && npm run test && npm run build`.
- **Showcase Integration**: All new components must be demonstrated in the `showcase` application for all frameworks (React, Vue, Svelte, Vanilla).
- **Human Approval**: Await human approval before starting the next task.
