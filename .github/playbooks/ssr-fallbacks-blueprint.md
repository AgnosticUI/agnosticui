# Playbook Blueprint: Isomorphic Flat Architecture & Global Asset Pipeline (Refs #500)

Use these rigid engineering guidelines to migrate low-level components into zero-drift, tree-shakable server-side fallback engines across full-stack meta-frameworks.

## 1. Token Casing Rules & Flat Directory Topology

To prevent file-generation and pathing hallucination, strict adherence to these casing definitions is required:

- `[Component]` = PascalCase (e.g., `CustomSelect`)
- `[component]` = kebab-case (e.g., `custom-select`)
- `[componentCamel]` = camelCase (e.g., `customSelect`)

### Target Structural Verification Output (Example for `[Component]` = "CustomSelect")

### Target Structural Verification Output (Example for `[Component]` = "CustomSelect")

v2/lib/src/components/CustomSelect/
├── core/
│ ├── \_CustomSelect.spec.ts <-- Web Component Client Assertions
│ ├── \_CustomSelect.ts <-- Lit Web Component Class Definition
│ ├── \_CustomSelectFallback.spec.ts <-- Fallback String Engine Assertions
│ ├── \_CustomSelectFallback.ts <-- Isomorphic Pure HTML String Engine
│ ├── custom-select-structure.module.css <-- Shared Layout Source of Truth (CSS Modules)
│ └── CustomSelect.ts <-- Public Element Barrels / Registry Hooks
├── react/
│ ├── index.ts <-- React Barrel Index Export
│ └── ReactCustomSelect.tsx <-- React Component Wrapper
└── vue/
├── index.ts <-- Vue Barrel Index Export
└── VueCustomSelect.vue <-- Vue Component Wrapper (SFC)

## 2. Shared Layout Sheet Constraints

- Keep `[component]-structure.module.css` restricted purely to layout geometry (display properties, flex configurations, grid calculations, margins, paddings, line-heights).
- Do NOT include reactive browser styling rules (hover triggers, focus-ring outlines, border coloring animations, color schemes). These must stay in the Lit `static styles = []` array block.

## 3. Web Component Refactoring Rules (`_[Component].ts`)

- Ingest both the class name hash dictionary object and the inline css string:
  `import styles from './[component]-structure.module.css';`
  `import structuralStylesText from './[component]-structure.module.css?inline';`
- **Security Constraint:** The `structuralStylesText` must be treated as a compile-time static string. Do NOT dynamically manipulate, concatenate, or slice this variable at runtime, or Lit will throw a severe runtime security exception inside the `unsafeCSS()` evaluation block:
  `css`${unsafeCSS(structuralStylesText)}``
- **CSS Module Mapping Guardrail:** Remember that CSS Modules transform kebab-case selectors into camelCase keys inside JavaScript. A class declared as `.select-wrapper {}` in `custom-select-structure.module.css` must be invoked as `styles.selectWrapper`.
- Inside `static styles`, target the primitive element tag name (e.g. `select`, `button`, `input`) instead of old literal class strings (e.g. `.select`) to ensure active states (like `:focus`) map cleanly across hashes.
- Dynamically bind your hashes using the class maps directly inside the template: `class="${styles.componentName}"`.

## 4. Server Fallback Engine Rules (`_[Component]Fallback.ts`)

- Define an input property specification interface matching the target properties of the client custom element.
- Support a simple plain text string `optionPlaceholder` or placeholder prop where relevant to bypass unhelpful virtual node serialization overhead.
- **Markup Injection Guardrail:** To prevent HTML injection or broken markup structures if a placeholder string contains user-supplied quotes, all attributes must be safely escaped or sanitized before template literal interpolation:
  `placeholder="${escapeHtml(props.optionPlaceholder)}"`

## 5. Library Entry-Point Exposure (`v2/lib/package.json`)

Every layout module component requires explicit map declarations inside the public library package `exports` dictionary to clear downstream meta-framework cross-compilation gates.

- Export your dynamic bundle endpoints matching your framework targets.
- **Meta-Framework Resolution Guardrail:** To support varying module resolution algorithms across Webpack (Next.js) and Vite (Nuxt/SvelteKit), unified production-compiled stylesheets must declare multiple environment conditions alongside the default fallback path:
  ```json
  "./styles/framework-components.css": {
    "import": "./dist/styles/framework-components.css",
    "require": "./dist/styles/framework-components.css",
    "default": "./dist/styles/framework-components.css"
  }
  ```

## 6. Local Asset Aggregation Config (`v2/lib/vite.config.ts`)

Vite uses Rollup's `assetFileNames` function hook filter to safely catch, merge, and group layout chunks on compile pass while leaving specialized standalone sheets isolated. **Safety Rule:** `assetInfo.name` can occasionally be undefined during chunk splitting operations; an explicit check must guard the operation and return a safe default path:

```ts
assetFileNames: (assetInfo) => {
  if (assetInfo.name && assetInfo.name.endsWith(".css")) {
    if (
      assetInfo.name.includes("table") ||
      assetInfo.name.includes("nav-button")
    ) {
      return "styles/[name][extname]";
    }
    return "styles/framework-components[extname]";
  }
  return "assets/[name][extname]";
};
```

## 7. Documentation Architecture (VitePress Site Layout)

To display live previews of the static layouts without breaking core structural formatting, components use a dual-file documentation pattern under the `v2/site/` directory:

### File A: Preview Sandbox Wrapper

Location: `v2/site/docs/examples/[Component]FallbackPreview.vue`

- Imports the fallback engine from your local packed subpath: `import { _[Component]Fallback } from 'agnosticui-core/[component]/vue';`
- Imports the central layout asset sheet to apply the visual layout geometry: `import 'agnosticui-core/styles/framework-components.css';`
- Wraps the raw element string inside a `.vp-raw` container block to completely bypass VitePress global markdown typography theme layout overrides:

```vue
<template>
  <div class="vp-raw fallback-preview-container">
    <div v-html="fallbackHtml" />
  </div>
</template>
```

### File B: Component Markdown Layout Guide

Location: `v2/site/docs/components/[component].md`

- Import the adjacent preview sandbox file directly within an embedded `<script setup>` tag block.
- Document pre-selected hydration workflows showing how to handle saved datasets by dynamically swapping or fallback binding the component props (e.g. `:optionPlaceholder="player || '- Select a player -'"`).

## 8. Unit Testing Strategy (`_[Component].spec.ts`)

- Import the local `[component]-structure.module.css` stylesheet map directly into the spec suite file.
- Update old hardcoded class assertions from literal strings (`expect(el.classList.contains('select'))`) straight to live module tokens (`expect(el.classList.contains(styles.select))`).

## 9. Framework Wrapper & Barrel Export Rules

To prevent compilation bottlenecks in downstream full-stack frameworks (like TypeScript failing to parse re-exported types inside Vue SFC `<script>` blocks), framework barrel indexes must bypass the wrappers for fallback logic:

- **Direct Core Referencing:** The framework indexes (`react/index.ts` and `vue/index.ts`) must export the wrapper component natively, but pull the isomorphic fallback engine and its types directly from the core directory.

### Example React Barrel Index (`react/index.ts`)

export { default as ReactCustomSelect } from './ReactCustomSelect.jsx';
export { \_CustomSelectFallback } from '../core/CustomSelect.js';
export type { CustomSelectFallbackProps } from '../core/CustomSelect.js';

### Example Vue Barrel Index (`vue/index.ts`)

export { default as VueCustomSelect } from './VueCustomSelect.vue';
export { \_CustomSelectFallback } from '../core/CustomSelect.js';
export type { CustomSelectFallbackProps } from '../core/CustomSelect.js';

## ⚠️ Local DX Artifacts vs. Production Realities (Vite Dev-Server Lag)

When auditing component layouts during local execution workflows (`npm run docs:dev`), you may encounter brief layout flashes or unexpected default user-agent properties (e.g., a momentary thick black border flash on native inputs or switches during a hard browser reload).

### The Mechanics of the "Style Vacuum"

1. **Asynchronous HMR Bundling:** In development mode, Vite processes CSS Modules dynamically, wrapping them inside asynchronous JavaScript chunks to facilitate fast Hot Module Replacement (HMR).
2. **Synchronous Hydration Racing:** Custom elements or template string components often evaluate their layout properties and mount HTML nodes synchronously on frame delivery.
3. **The Layout Gap:** This creates a multi-millisecond environment window where DOM nodes exist on the screen before Vite finishes executing and injecting the compiled modular style definitions. The browser leaks default User-Agent styling during this gap.

### The Verification Strategy

Do **NOT** assume a local refresh flash is a source code architectural regression. Before rewriting structural styles to bypass a development flash, perform a production dry-run simulation pass:

```bash
# Execute compilation passes to bundle assets statically
npm run docs:build && npm run docs:preview
```

- **Validation Rule:** If the visual glitch disappears entirely in the static distribution preview environment, the architecture is sound. The artifact is a known dev-server streaming DX anomaly with zero impact on downstream client distribution layers.
