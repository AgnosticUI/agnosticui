# AgnosticUI v2 Docs Site

This is very much a WIP and deploy notes etc are missing. Refer to the v1 notes here: /Users/roblevin/workspace/opensource/agnosticui/site/README.md
until we get this site finalized and docs updated.

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

This section documents the repeatable steps for creating Vitepress documentation pages for components from `agnosticui-core`.

### Prerequisites

1. The component must exist in `/v2/lib/src/components/{ComponentName}/vue/` with:
   - `Vue{ComponentName}.vue` - The Vue component implementation
   - `index.ts` - Exports the component
2. The component must be exported in `/v2/lib/package.json` under `exports` as:
   ```json
   "./{component-name}/vue": {
     "types": "./dist/components/{ComponentName}/vue/index.d.ts",
     "import": "./dist/components/{ComponentName}/vue/index.js"
   }
   ```
3. The lib must be built and packed: `cd v2/lib && npm run build && npm pack`
4. The site must have the latest package: `cd v2/site && npm run reinstall:lib`

### Step-by-Step Guide

#### 1. Create the Examples Component

Create `/v2/site/docs/examples/{ComponentName}Examples.vue`

**Template Structure:**
```vue
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
          <Info
            color="var(--ag-secondary)"
            :size="18"
            class="mie2"
          />
          With icon
        </div>
      </VueComponentName>
    </div>
  </section>
</template>

<script>
// Import the component from agnosticui-core using the package.json export path
import VueComponentName from "agnosticui-core/{component-name}/vue";

// Import any icons from lucide-vue-next if needed
import { Info } from "lucide-vue-next";

export default {
  name: "{ComponentName}Examples",
  components: {
    VueComponentName,
    Info // Register all imports in Options API
  },
  // Add data() and methods() if component requires props/events
  data() {
    return {
      // Component-specific data
    };
  },
  methods: {
    // Event handlers
  },
};
</script>
```

**Key Points:**
- Import path format: `agnosticui-core/{component-name}/vue` (lowercase, kebab-case)
- Component name format: `Vue{ComponentName}` (PascalCase)
- **Must register ALL imports** (components and icons) in the `components` object
- Use utility classes: `mbe4` (margin-block-end), `mie2` (margin-inline-end), `flex-inline`
- Use CSS custom properties for theming: `var(--ag-primary)`, `var(--ag-success)`, etc.

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

**Structure:**
```markdown
# Component Name

Brief description of what the component does and when to use it.

## Examples

<ComponentNameExamples />

<script setup>
import ComponentNameExamples from '../examples/{ComponentName}Examples.vue'
</script>

## Usage

\`\`\`vue
<template>
  <section>
    <!-- Copy representative examples from your Examples component -->
    <VueComponentName>Example</VueComponentName>

    <!-- For interactive components, show event handling -->
    <VueComponentName
      :checked="value"
      @component-event="handleEvent"
    />
  </section>
</template>
<script>
import VueComponentName from "agnosticui-core/{component-name}/vue";

export default {
  name: "Example",
  components: { VueComponentName },
  data() {
    return {
      value: false,
    };
  },
  methods: {
    handleEvent(event) {
      // Handle the event
      console.log(event);
    },
  },
};
</script>
\`\`\`

## Props

Document ALL component props in a table. Check the component's TypeScript interface in `/v2/lib/src/components/{ComponentName}/core/_{ComponentName}.ts` for the complete prop list.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'primary' \| 'success'` | `'default'` | Visual variant of the component |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the component |
| `disabled` | `boolean` | `false` | Whether the component is disabled |

**Tips:**
- Use TypeScript union syntax for enums: `'small' \| 'medium' \| 'large'`
- Escape pipes in table cells: `'sm' \| 'md' \| 'lg'`
- Mark required props with **Required** in description
- Include all props, even inherited ones

## Events

**(Optional - Skip this section if component has no events)**

Document events emitted by the component. Check the component implementation for `emit()` or `dispatchEvent()` calls.

| Event | Payload | Description |
|-------|---------|-------------|
| `@component-event` | `{ property: value }` | Emitted when... |
| `@change` | `{ checked: boolean, name: string }` | Emitted when state changes |

**Examples of components:**
- **With events**: Toggle, Breadcrumb, Button (interactive components)
- **Without events**: Alert (display-only component)

## Accessibility

**(Recommended - Include for interactive components)**

Document accessibility features and ARIA implementation. Reference the WAI-ARIA pattern if applicable.

**Example:**

The Component implements the [WAI-ARIA Pattern Name](https://www.w3.org/WAI/ARIA/apg/):

- Uses semantic `<button>` element with `role="switch"`
- Communicates state via `aria-checked`
- Requires accessible name via `label` or `aria-labelledby`
- Keyboard accessible (Space/Enter to activate)
- Screen reader announces current state
- Minimum 44px touch target for mobile
- Clear focus indicators for keyboard navigation

**Tips:**
- Link to relevant WAI-ARIA patterns
- List ARIA attributes used
- Document keyboard shortcuts
- Note screen reader behavior
- Mention focus management

## Form Integration

**(Optional - Only include if component supports form integration)**

Document how to use the component with forms. Typically applies to input-like components (Toggle, Input, Checkbox, etc.).

**Example:**

Use the `name` and `value` props to integrate with forms:

\`\`\`vue
<VueComponentName
  label="Field label"
  name="fieldName"
  value="fieldValue"
  :checked="form.fieldName"
  @component-change="handleFormChange"
/>
\`\`\`

The `@component-change` event provides all data needed for form handling.

**Applies to:**
- Toggle
- Input
- Checkbox/Radio groups
- Select components

**Does NOT apply to:**
- Alert
- Button (unless it's a submit button)
- Breadcrumb
- Display-only components
```

**Key Points:**
- Filename: lowercase, kebab-case (e.g., `alert.md`, `icon-button.md`)
- Use `<script setup>` for the examples import (cleaner syntax)
- Include both live examples AND code snippets
- **Required sections**: Description, Examples, Usage, Props
- **Optional sections**: Events, Accessibility (recommended for interactive), Form Integration
- Document ALL props from the component's TypeScript interface
- Link to WAI-ARIA patterns for accessibility compliance

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

| Component | Import Path | Component Name | Docs | Examples |
|-----------|-------------|----------------|------|----------|
| Alert | `agnosticui-core/alert/vue` | `VueAlert` | `docs/components/alert.md` | `docs/examples/AlertExamples.vue` |
| Breadcrumb | `agnosticui-core/breadcrumb/vue` | `VueBreadcrumb` | `docs/components/breadcrumbs.md` | `docs/examples/BreadcrumbExamples.vue` |
| Button | `agnosticui-core/button/vue` | `VueButton` | `docs/components/buttons.md` | `docs/examples/ButtonExamples.vue` |
| Toggle | `agnosticui-core/toggle/vue` | `VueToggle` | `docs/components/toggle.md` | `docs/examples/ToggleExamples.vue` |

### Available Components to Document

Components in `/v2/lib/src/components/` with Vue implementations:

- Accordion
- Alert ✓ (documented)
- Breadcrumb ✓ (documented)
- Button ✓ (documented)
- Dialog
- Drawer
- IconButton
- Input
- Menu
- Tabs
- Toggle ✓ (documented)
- Tooltip

Check `/v2/lib/package.json` exports section to verify the component has a Vue export before documenting.
