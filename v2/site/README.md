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

AgnosticUI is a **framework-agnostic** component library. Each component documentation page includes examples for **Vue**, **React**, and **Lit (Web Components)** to demonstrate usage across all supported frameworks.

### Prerequisites

1. The component must exist in `/v2/lib/src/components/{ComponentName}/` with implementations for:
   - `vue/Vue{ComponentName}.vue` - Vue component
   - `react/React{ComponentName}.tsx` - React component
   - `lit/ag-{component-name}.ts` - Lit web component
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
3. Storybook stories should exist for reference:
   - React: `/v2/playgrounds/react/src/stories/{ComponentName}.stories.tsx`
   - Lit: `/v2/playgrounds/lit/src/stories/{ComponentName}.stories.ts`
4. The lib must be built and packed: `cd v2/lib && npm run build && npm pack`
5. The site must have the latest package: `cd v2/site && npm run reinstall:lib`

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

::: details Vue
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
  components: { VueComponentName },
  data() {
    return {
      value: false,
    };
  },
  methods: {
    handleEvent(event) {
      this.value = event.checked;
      console.log("Event:", event);
    },
  },
};
</script>
\`\`\`
:::

::: details React
\`\`\`tsx
import { useState } from 'react';
import { ReactComponentName } from 'agnosticui-core/{component-name}/react';

export default function ComponentExample() {
  const [value, setValue] = useState(false);

  const handleEvent = (event: CustomEvent) => {
    setValue(event.detail.checked);
    console.log("Event:", event.detail);
  };

  return (
    <section>
      {/* Basic example */}
      <ReactComponentName>Example</ReactComponentName>

      {/* With event handling */}
      <ReactComponentName
        checked={value}
        onComponentEvent={handleEvent}
      />
    </section>
  );
}
\`\`\`
:::

::: details Lit (Web Components)
\`\`\`html
<script type="module">
  import 'agnosticui-core/{component-name}';

  document.addEventListener('DOMContentLoaded', () => {
    const component = document.querySelector('#my-component');
    let value = false;

    component?.addEventListener('component-event', (event) => {
      value = event.detail.checked;
      console.log('Event:', event.detail);
    });
  });
</script>

<section>
  <!-- Basic example -->
  <ag-{component-name}>Example</ag-{component-name}>

  <!-- With event handling -->
  <ag-{component-name} id="my-component"></ag-{component-name}>
</section>
\`\`\`
:::
\`\`\`

**Creating Multi-Framework Examples:**

The **Usage section** must include all three frameworks using Vitepress `details` blocks. To create these examples:

1. **Vue examples** - Based on your `{ComponentName}Examples.vue` file (live examples)
2. **React examples** - Adapt from `/v2/playgrounds/react/src/stories/{ComponentName}.stories.tsx`
3. **Lit examples** - Adapt from `/v2/playgrounds/lit/src/stories/{ComponentName}.stories.ts`

**Key differences between frameworks:**

| Framework | Import Path | Component Name | Event Handler |
|-----------|-------------|----------------|---------------|
| Vue | `agnosticui-core/{name}/vue` | `Vue{Name}` | `@event-name="handler"` |
| React | `agnosticui-core/{name}/react` | `React{Name}` | `onEventName={handler}` |
| Lit | `agnosticui-core/{name}` | `<ag-{name}>` | `addEventListener('event-name')` |

**Event naming conventions:**
- Vue: kebab-case with `@` prefix (e.g., `@toggle-change`)
- React: camelCase with `on` prefix (e.g., `onToggleChange`)
- Lit: kebab-case with `addEventListener` (e.g., `'toggle-change'`)

**Adapting from Storybook Stories:**

When creating React and Lit examples for documentation, reference the Storybook stories but simplify them:

1. **Find the story**: `/v2/playgrounds/{react|lit}/src/stories/{ComponentName}.stories.{tsx|ts}`
2. **Extract the render function**: Look for the `Default` or basic story
3. **Simplify**: Remove Storybook-specific code (args, decorators, meta)
4. **Focus on essentials**: Show 3-5 core examples, not every variant
5. **Keep it comparable**: Ensure React/Lit examples match the Vue examples in scope

**Example - From Storybook to Docs:**

Storybook story (React):
\`\`\`tsx
export const Default: Story = {
  args: { variant: 'primary' },
  render: (args) => <ReactButton {...args}>Click me</ReactButton>
};
\`\`\`

Documentation example (React):
\`\`\`tsx
import { ReactButton } from 'agnosticui-core/button/react';

export default function ButtonExample() {
  return <ReactButton variant="primary">Click me</ReactButton>;
}
\`\`\`

See existing component documentation (buttons.md, toggle.md, tooltip.md, breadcrumbs.md) for complete examples

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
- Include both live Vue examples AND code snippets for all three frameworks
- **Required sections**: Description, Examples, Usage (Vue + React + Lit), Props
- **Optional sections**: Events, Accessibility (recommended for interactive), Form Integration
- Document ALL props from the component's TypeScript interface
- Link to WAI-ARIA patterns for accessibility compliance
- Keep examples simple and focused - reference Storybook for comprehensive scenarios

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

| Component | Vue Live Examples | Docs (Vue + React + Lit) | React Stories | Lit Stories |
|-----------|-------------------|--------------------------|---------------|-------------|
| Alert | `examples/AlertExamples.vue` | `components/alert.md` | `playgrounds/react/src/stories/Alert.stories.tsx` | `playgrounds/lit/src/stories/Alert.stories.ts` |
| Breadcrumb | `examples/BreadcrumbExamples.vue` | `components/breadcrumbs.md` | `playgrounds/react/src/stories/Breadcrumb.stories.tsx` | `playgrounds/lit/src/stories/Breadcrumb.stories.ts` |
| Button | `examples/ButtonExamples.vue` | `components/buttons.md` | `playgrounds/react/src/stories/Button.stories.tsx` | `playgrounds/lit/src/stories/Button.stories.ts` |
| Toggle | `examples/ToggleExamples.vue` | `components/toggle.md` | `playgrounds/react/src/stories/Toggle.stories.tsx` | `playgrounds/lit/src/stories/Toggle.stories.ts` |
| Tooltip | `examples/TooltipExamples.vue` | `components/tooltip.md` | `playgrounds/react/src/stories/Tooltip.stories.tsx` | `playgrounds/lit/src/stories/Tooltip.stories.ts` |

**Documentation architecture:**
- **Live examples** (`examples/*.vue`) - Interactive Vue components shown at the top of each doc page
- **Usage snippets** (in `components/*.md`) - Code examples for Vue, React, and Lit in collapsible sections
- **Storybook stories** (`playgrounds/{react,lit}/src/stories/*.stories.{tsx,ts}`) - Comprehensive testing scenarios (source of truth for React/Lit examples)

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
