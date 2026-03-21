# AgnosticUI v2 Docs Site

## Workflow
Generally, I make a change to the v2/lib and do:

### In lib/
```shell
npm run build && npm pack
```

### In site/
```shell
npm run reinstall:lib # Clears cache and reinstalls local package
npm run docs:dev
```

## Important: Vitepress Cache

When you rebuild the `lib/` package and reinstall it in `site/` with the **same version number** (e.g., `0.0.1`), Vitepress caches the old module files and won't pick up your changes. You **must** clear the cache:

```shell
npm run clear:cache        # Just clear cache
npm run reinstall:lib      # Clear cache AND reinstall (recommended)
```

**Why?** Vitepress aggressively caches dependencies in `docs/.vitepress/cache` based on package version, not file modification times. Without clearing the cache, you'll see stale imports and 404s even after reinstalling.

## Component Page Creation

The recommended way to create a new component documentation page is to use the automated scaffolding script.

### Recommended Method: Scaffolding Script

1.  **Navigate to the `lib` directory**:
    ```shell
    cd ../lib
    ```
2.  **Run the scaffold script**:
    Replace `MyComponent` with the name of your component in `PascalCase`.
    ```shell
    npm run scaffold -- MyComponent
    ```
This script will automatically create the necessary `.md` and `.vue` example files in the `site` directory, and also update the sidebar navigation. It handles all the boilerplate, allowing you to focus on writing the documentation content.

### Manual Method (for reference)

<details>
<summary>Click to view the manual step-by-step guide</summary>

AgnosticUI is a **framework-agnostic** component library. Each component documentation page includes examples for **Vue**, **React**, and **Lit (Web Components)** to demonstrate usage across all supported frameworks.

### Prerequisites

1. The component must exist in `/v2/lib/src/components/{ComponentName}/` with implementations for:
   - `vue/Vue{ComponentName}.vue` - Vue component
   - `react/React{ComponentName}.tsx` - React component
   - `core/{ComponentName}.ts` - Lit web component registration (extends `core/_{ComponentName}.ts`)
   - Each with corresponding `index.ts` exports
2. The component must be exported in `/v2/lib/package.json` under `exports` for all frameworks:
   ```json
   "./{component-name}/vue": {
     "types": "./dist/components/{ComponentName}/vue/index.d.ts",
     "import": "./dist/components/{ComponentName}/vue/index.js"
   },
   "./{component-name}/react": {
     "types": "./dist/components/{ComponentName}/react/index.d.ts",
     "import": "./dist/components/{ComponentName}/react/index.js"
   },
   "./{component-name}": {
     "types": "./dist/components/{ComponentName}/lit/index.d.ts",
     "import": "./dist/components/{ComponentName}/lit/index.js"
   }
   ```
3. The lib must be built and packed: `cd v2/lib && npm run build && npm pack`
5. The site must have the latest package: `cd v2/site && npm run reinstall:lib`

### Step-by-Step Guide

#### 1. Create the Examples Component

Create `/v2/site/docs/examples/{ComponentName}Examples.vue`

**Template Structure:**
```vue
<script setup>
// Import the component from agnosticui-core using the package.json export path
import { VueComponentName } from "agnosticui-core/{component-name}/vue";

// Import any icons from lucide-vue-next if needed
import { Info } from "lucide-vue-next";

// Reactive state for interactive examples
import { ref } from "vue";
const someValue = ref(false);
</script>

<template>
  <section>
    <!-- Organize examples into logical groups with headings -->
    <div class="mbe4">
      <h3>Basic Examples</h3>
    </div>
    <div class="stacked">
      <VueComponentName>Default</VueComponentName>
      <VueComponentName variant="primary">Primary</VueComponentName>
    </div>

    <!-- Additional example groups -->
    <div class="mbe4">
      <h3>With Icons</h3>
    </div>
    <div class="stacked">
      <VueComponentName>
        <div class="flex-inline items-center justify-center">
          <Info color="var(--ag-secondary)" :size="18" class="mie2" />
          With icon
        </div>
      </VueComponentName>
    </div>
  </section>
</template>
```

**Key Points:**
- Use `<script setup>` Composition API (not Options API)
- Import path format: `agnosticui-core/{component-name}/vue` (lowercase, kebab-case)
- Component name format: `Vue{ComponentName}` (PascalCase)
- No need to register components — `<script setup>` auto-registers imports
- Use `ref()` for reactive state in interactive examples
- Use utility classes: `mbe4` (margin-block-end), `mie2` (margin-inline-end), `flex-inline`
- Use CSS custom properties for theming: `var(--ag-primary)`, `var(--ag-success)`, etc.

**Variant Hover Pattern:**
- For components with color variants, use `--ag-*` design tokens directly with NO fallbacks or custom CSS variables. Primary, success, warning, and danger variants should use white text and transition to their `-dark` counterparts on hover (e.g., `--ag-primary` → `--ag-primary-dark`), while secondary uses neutral grays (`--ag-neutral-400` → `--ag-neutral-500`).

**Layout Classes:**
- **`.stacked`** - Use for components that should **always** stack vertically
  - Best for: Alerts, notifications, vertical lists
  - Behavior: Vertical on all screen sizes
  - Pattern: Add `mbe2` to each child component for consistent spacing

- **`.stacked-mobile`** - Use for components that should display horizontally on desktop, vertically on mobile
  - Best for: Buttons, toggles, form controls, interactive components
  - Behavior: Horizontal with wrapping on desktop, vertical on mobile
  - Pattern: Container has `mbe4`, no need for spacing classes on children
  - Example structure:
    ```vue
    <div class="mbe2">
      <h3>Section Heading</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton>Button 1</VueButton>
      <VueButton>Button 2</VueButton>
    </div>
    ```

#### 2. Create the Documentation Page

Create `/v2/site/docs/components/{component-name}.md`

The current pattern uses the `<FrameworkExample>` tab component (Vue live preview + Lit live
preview + React code + StackBlitz). See **`v2/site/FRAMEWORK_EXAMPLES_GUIDE.md`** for the
complete template and rules — that file is the authoritative reference for this step.

**Key Points:**
- Filename: lowercase, kebab-case (e.g., `alert.md`, `icon-button.md`)
- Required sections: Description, Examples (via FrameworkExample), Props
- Optional sections: Events, Accessibility (recommended for interactive), Form Integration
- Document ALL props from the component's TypeScript interface in `/v2/lib/src/components/{ComponentName}/core/_{ComponentName}.ts`
- Link to WAI-ARIA patterns for interactive components

#### 3. Update Vitepress Navigation

Edit `/v2/site/docs/.vitepress/config.mts`

Add the component to the sidebar in the `getComponents()` function:

```typescript
function getComponents() {
  return {
    text: 'Components',
    items: [
      { text: 'Alerts', link: '/components/alert' },
      { text: 'Breadcrumbs', link: '/components/breadcrumbs' },
      { text: 'Buttons', link: '/components/buttons' },
      { text: 'Your Component', link: '/components/{component-name}' }, // Add here
    ]
  }
}
```

#### 4. Install Additional Dependencies (If Needed)

If using Lucide icons:
```shell
cd v2/site
npm install lucide-vue-next
```

#### 5. Test the Component Page

```shell
cd v2/site
npm run reinstall:lib  # Clear cache and reinstall
npm run docs:dev       # Start dev server
```

Visit `http://localhost:5173/components/{component-name}.html`

### Common Issues & Solutions

#### Import errors / 404s after rebuild
- **Solution**: Run `npm run reinstall:lib` to clear Vitepress cache
- **Why**: Vitepress caches modules by version number, not file timestamps

#### "Failed to resolve component: ComponentName"
- **Solution**: Register the component in the `components` object
- **Example**: `components: { VueAlert, Info }`

#### Icons not rendering
- **Solution**: Import AND register icon components
- **Example**:
  ```javascript
  import { Camera } from "lucide-vue-next";
  export default { components: { Camera } }
  ```

#### Stale documentation after changes
- **Solution**: Clear cache with `npm run clear:cache`

### Example Component Mappings

Reference these existing examples:

| Component | Vue Live Examples | Docs (Vue + React + Lit) |
|-----------|-------------------|--------------------------|
| Alert | `examples/AlertExamples.vue` | `components/alert.md` |
| Breadcrumb | `examples/BreadcrumbExamples.vue` | `components/breadcrumbs.md` |
| Button | `examples/ButtonExamples.vue` | `components/buttons.md` |
| Toggle | `examples/ToggleExamples.vue` | `components/toggle.md` |
| Tooltip | `examples/TooltipExamples.vue` | `components/tooltip.md` |

**Documentation architecture:**
- **Live examples** (`examples/*.vue`) - Interactive Vue components shown at the top of each doc page
- **Usage snippets** (in `components/*.md`) - Code examples for Vue, React, and Lit in collapsible sections

