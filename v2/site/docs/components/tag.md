# Tag

Tags are used to label or categorize content, providing visual indicators for status, types, or metadata.

<TagExamples />

<script setup>
import TagExamples from '../examples/TagExamples.vue'
</script>

## Usage

::: details Vue
```vue
<template>
  <VueTag variant="success" shape="pill" :uppercase="true">
    Active Task
    <button slot="close" @click="handleClose">✕</button>
  </VueTag>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { VueTag } from 'agnosticui-core/tag/vue';
export default defineComponent({
  components: { VueTag },
  methods: {
    handleClose() {
      // Handle close logic
    }
  }
});
</script>
```
:::

::: details React
```tsx
import { ReactTag } from 'agnosticui-core/tag/react';

export default function Example() {
  return (
    <ReactTag variant="success" shape="pill" isUppercase>
      Active Task
      <button slot="close" onClick={() => console.log('Close')}>
        ✕
      </button>
    </ReactTag>
  );
}
```
:::

::: details Lit (Web Components)
```html
<script type="module">
  import 'agnosticui-core/tag';
</script>
<ag-tag variant="success" shape="pill" uppercase>
  Active Task
  <button slot="close" @click=${() => console.log('Close')}>✕</button>
</ag-tag>
```
:::

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'info' \| 'warning' \| 'error' \| 'success' \| ''` | `''` | The visual variant of the tag (e.g., for color theming). |
| `shape` | `'pill' \| 'round' \| 'circle' \| ''` | `''` | The border-radius shape of the tag. |
| `isUppercase` | `boolean` | `false` | If `true`, transforms the tag text to uppercase with adjusted font sizing and letter spacing. |

## CSS Shadow Parts

| Part | Description |
|------|-------------|
| `ag-tag-wrapper` | The main wrapper div for the tag's content and close slot. |

### Customization Example

```css
/* Customize the tag wrapper */
ag-tag.custom-fancy::part(ag-tag-wrapper) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-weight: 600;
  padding: 0.75rem 1.25rem;
  border-radius: 50px;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}
```

## Accessibility

The tag component uses a semantic `<div>` with ARIA attributes for the close slot (e.g., `aria-label="close"` on the button). Content is announced as plain text by screen readers. For uppercase mode, the visual transform does not affect screen reader output. Ensure close buttons have descriptive `aria-label`s for dismissible tags.

## Notes

- **Variants**: Empty `variant` uses subtle neutral styling; use 'info', 'warning', 'error', or 'success' for semantic colors.
- **Shapes**: 'circle' is ideal for icons/single characters (e.g., "!"); it sets fixed min-width/height.
- **Close Slot**: Use a button with `slot="close"` for dismissible tags; it auto-margins for alignment.
- All implementations share the same underlying styles and behavior. Properties can be set via attributes (e.g., `<ag-tag uppercase>`) or property binding in Lit templates (e.g., `.isUppercase=${true}`).
