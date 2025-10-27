# Kbd

Keyboard key components are used to represent keyboard shortcuts, hotkeys, or user input instructions in a visually distinct way. They mimic the appearance of physical keyboard keys.

::: tip
Note that single character content within an <i>&lt;ag-kbd&gt;</i> tag is bumped up by a single font size scale for readability.
:::

<KbdExamples />

<script setup>
import KbdExamples from '../examples/KbdExamples.vue'
</script>

## Usage

::: details Vue
```vue
<template>
  <VueKbd variant="primary" size="md" :bordered="true">
    ⌘
  </VueKbd>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { VueKbd } from 'agnosticui-core/kbd/vue';
export default defineComponent({
  components: { VueKbd }
});
</script>
```
:::

::: details React
```tsx
import { ReactKbd } from 'agnosticui-core/kbd/react';

export default function Example() {
  return (
    <ReactKbd variant="primary" size="md" bordered>
      ⌘
    </ReactKbd>
  );
}
```
:::

::: details Lit (Web Components)
```html
<script type="module">
  import 'agnosticui-core/kbd';
</script>
<ag-kbd variant="primary" size="md" bordered>⌘</ag-kbd>
```
:::

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'primary' \| 'secondary' \| 'info' \| 'warning' \| 'success' \| 'danger' \| 'error'` | `'default'` | The visual variant of the kbd element (e.g., for color theming). |
| `size` | `'sm' \| 'md' \| 'lg'` | `'sm'` | The size of the kbd element. Small is suitable for inline text, medium for emphasized shortcuts, and large for prominent displays. |
| `bordered` | `boolean` | `true` | If `true`, displays a border around the kbd element to enhance the key appearance. |
| `background` | `boolean` | `false` | If `true`, adds a background color to the kbd element based on the variant, providing additional visual emphasis. |

## CSS Shadow Parts

| Part | Description |
|------|-------------|
| `ag-kbd-wrapper` | The main wrapper element for the kbd's content. |

### Customization Example

```css
/* Customize the kbd wrapper with a gradient */
ag-kbd.custom-kbd::part(ag-kbd-wrapper) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-weight: 700;
  padding: 0.5rem 0.75rem;
  border: 2px solid #764ba2;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.4);
}

/* Customize for a minimal flat look */
ag-kbd.flat-kbd::part(ag-kbd-wrapper) {
  background: #f5f5f5;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  font-family: 'Monaco', 'Courier New', monospace;
}
```

## Accessibility

The kbd component uses the semantic `<kbd>` HTML element, which is automatically recognized by screen readers as representing keyboard input. The component preserves the natural text content for screen reader announcement. When using special characters or symbols (like ⌘, ⌥, ⇧, ⌃), ensure they are properly announced by including appropriate `aria-label` attributes if needed for clarity.

## Notes

- **Variants**: The 'default' variant provides neutral styling suitable for most contexts. Use semantic variants ('info', 'warning', 'error', 'success') to indicate the nature of the shortcut or action.
- **Sizes**: Choose 'sm' for inline documentation, 'md' for tutorial content, and 'lg' for hero sections or prominent feature callouts.
- **Common Symbols**: Use standard keyboard symbols for better recognition:
  - `⌘` - Command (Mac)
  - `⌥` - Option/Alt (Mac)
  - `⇧` - Shift
  - `⌃` - Control
  - Or use text like "Ctrl", "Alt", "Shift", "Enter", etc.
- **Keyboard Combinations**: Display multiple keys together for shortcuts (e.g., "Ctrl + Shift + Del") either as a single Kbd component or as separate components with visible separators.
- **Background Mode**: Enable `background` with semantic variants to create more visually prominent keyboard indicators, useful for tutorial overlays or highlighting critical shortcuts.
- All implementations (Vue, React, Lit) share the same underlying styles and behavior. Properties can be set via attributes (e.g., `<ag-kbd bordered>`) or property binding in framework templates.
