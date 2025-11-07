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

## Removable Tags

Tags can be made removable by adding the `removable` prop. This displays a remove button (×) and fires the `tag-remove` event when clicked.

::: details Vue

```vue
<template>
  <div class="tag-list">
    <VueTag
      v-for="tag in tags"
      :key="tag.id"
      :variant="tag.variant"
      removable
      @tag-remove="removeTag(tag.id)"
      class="tag-item"
    >
      {{ tag.label }}
    </VueTag>
  </div>
</template>

<script>
import { VueTag } from "agnosticui-core/tag/vue";

export default {
  components: { VueTag },
  data() {
    return {
      tags: [
        { id: 1, label: 'Design', variant: 'primary' },
        { id: 2, label: 'Development', variant: 'success' },
        { id: 3, label: 'Bug', variant: 'error' },
        { id: 4, label: 'Feature', variant: 'info' },
      ],
    };
  },
  methods: {
    removeTag(id) {
      this.tags = this.tags.filter(tag => tag.id !== id);
    },
  },
};
</script>

<style scoped>
.tag-list {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
</style>
```

:::

::: details React

```tsx
import { useState } from 'react';
import { ReactTag } from 'agnosticui-core/tag/react';

export default function RemovableTagExample() {
  const [tags, setTags] = useState([
    { id: 1, label: 'Design', variant: 'primary' },
    { id: 2, label: 'Development', variant: 'success' },
    { id: 3, label: 'Bug', variant: 'error' },
    { id: 4, label: 'Feature', variant: 'info' },
  ]);

  const removeTag = (id) => {
    setTags(tags.filter(tag => tag.id !== id));
  };

  return (
    <div className="tag-list">
      {tags.map((tag) => (
        <ReactTag
          key={tag.id}
          variant={tag.variant}
          removable
          onTagRemove={() => removeTag(tag.id)}
          className="tag-item"
        >
          {tag.label}
        </ReactTag>
      ))}
    </div>
  );
}
```

```css
.tag-list {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
```

:::

::: details Lit (Web Components)

```html
<script type="module">
  import "agnosticui-core/tag";

  const tags = [
    { id: 1, label: 'Design', variant: 'primary' },
    { id: 2, label: 'Development', variant: 'success' },
    { id: 3, label: 'Bug', variant: 'error' },
    { id: 4, label: 'Feature', variant: 'info' },
  ];

  document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.tag-list');

    function renderTags() {
      container.innerHTML = '';
      tags.forEach(tag => {
        const tagEl = document.createElement('ag-tag');
        tagEl.variant = tag.variant;
        tagEl.removable = true;
        tagEl.textContent = tag.label;
        tagEl.className = 'tag-item';

        // Using addEventListener pattern
        tagEl.addEventListener('tag-remove', (e) => {
          console.log('Removing tag:', tag.label, 'variant:', e.detail.variant);
          const index = tags.findIndex(t => t.id === tag.id);
          if (index > -1) {
            tags.splice(index, 1);
            renderTags();
          }
        });

        container.appendChild(tagEl);
      });
    }

    renderTags();
  });
</script>

<div class="tag-list"></div>

<style>
  .tag-list {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .tag-item {
    margin: 0.25rem;
  }
</style>
```

:::

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'info' \| 'warning' \| 'error' \| 'success' \| 'primary' \| ''` | `''` | The visual variant of the tag (e.g., for color theming). |
| `shape` | `'pill' \| 'round' \| 'circle' \| ''` | `''` | The border-radius shape of the tag. |
| `isUppercase` | `boolean` | `false` | If `true`, transforms the tag text to uppercase with adjusted font sizing and letter spacing. |
| `removable` | `boolean` | `false` | If `true`, shows a remove button (×) that fires the `tag-remove` event when clicked. |

## Events

| Event | Framework | Detail | Description |
|-------|-----------|--------|-------------|
| `tag-remove` | Vue: `@tag-remove`<br>React: `onTagRemove`<br>Lit: `@tag-remove` or `.onTagRemove` | `{ variant: TagVariant }` | Fired when the tag's remove button is clicked. Provides the tag variant in the detail. |

### Event Patterns

AgnosticUI Tag supports **three event handling patterns**:

1. **addEventListener** (Lit/Vanilla JS):
```javascript
const tag = document.querySelector('ag-tag');
tag.addEventListener('tag-remove', (e) => {
  console.log('Tag removed, variant:', e.detail.variant);
  // Remove the tag from the DOM
  tag.remove();
});
```

2. **Callback props** (Lit/Vanilla JS):
```javascript
const tag = document.querySelector('ag-tag');
tag.onTagRemove = (e) => {
  console.log('Tag removed, variant:', e.detail.variant);
  tag.remove();
};
```

3. **Framework event handlers** (Vue/React):
```vue
<!-- Vue -->
<VueTag
  removable
  @tag-remove="handleRemove"
>
  Removable tag
</VueTag>
```
```tsx
// React
<ReactTag
  removable
  onTagRemove={handleRemove}
>
  Removable tag
</ReactTag>
```

All three patterns work identically thanks to the **dual-dispatch** system.

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
