# Icon

Icon is used to visually represent an action, object, or state within the UI.

<IconExamples />

<script setup>
import IconExamples from '../examples/IconExamples.vue'
</script>

## Usage

::: details Vue
```vue
<template>
  <VueIcon size="24" type="success">
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  </VueIcon>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { VueIcon } from 'agnosticui-core/icon/vue';
export default defineComponent({
  components: { VueIcon }
});
</script>
```
:::

::: details React
```tsx
import { ReactIcon } from 'agnosticui-core/icon/react';

export default function Example() {
  return (
    <ReactIcon size="24" type="success">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    </ReactIcon>
  );
}
```
:::

::: details Lit (Web Components)
```html
<script type="module">
  import 'agnosticui-core/icon';
</script>
<ag-icon size="24" type="success">
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
</ag-icon>
```
:::

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `string` | `''` | Size variant for the icon wrapper and SVG (e.g., '14', '16', '18', '20', '24', '32', '36', '40', '48', '56', '64'). |
| `type` | `'info' \| 'action' \| 'success' \| 'warning' \| 'error' \| ''` | `''` | Semantic type for color theming the icon. |

## CSS Shadow Parts

| Part | Description |
|------|-------------|
| `icon-base` | The main wrapper element for the icon's SVG content. |

### Customization Example

```css
/* Customize the icon base */
ag-icon.custom-gradient::part(icon-base) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  padding: 0.5rem;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

ag-icon.custom-gradient svg {
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}
```

## Accessibility

Icons are typically decorative and use `aria-hidden="true"` on the SVG to prevent screen readers from announcing them. If the icon conveys meaning (e.g., in a button), pair it with descriptive text or ARIA labels on the parent element. For interactive icons, ensure the container has appropriate roles and labels.

## Notes

- **Sizes**: Available options include '14', '16', '18', '20', '24', '32', '36', '40', '48', '56', '64'; empty string uses default sizing.
- **Types**: Empty `type` uses neutral styling; use 'info', 'action', 'success', 'warning', or 'error' for semantic colors.
- **Default Slot**: Provide custom SVG content via the default slot; the component scales the SVG to fit the size.
- All implementations share the same underlying styles and behavior. Properties can be set via attributes (e.g., `<ag-icon size="24">`) or property binding in Lit templates (e.g., `.size=${'24'}`).
