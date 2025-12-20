# Tag

<AlphaWarning />


Tag is used to label or categorize content, providing as a visual indicator for status, types, or metadata.

<TagExamples />

<script setup>
import AlphaWarning from '../components/AlphaWarning.vue'
import TagExamples from '../examples/TagExamples.vue'
</script>

## Usage

::: tip
The framework examples below `import` AgnosticUI as an `npm` package. Alternatively, you can use the **CLI for complete control, AI/LLM visibility, and full code ownership**:
```bash
npx ag init --framework FRAMEWORK # react, vue, lit, svelte, etc.
npx ag add Tag
```
The CLI copies source code directly into your project, giving you full visibility and control. After running `npx ag add`, you'll receive exact import instructions.
:::

::: details Vue

```vue
<template>
  <VueTag variant="success" shape="pill" :uppercase="true">
    Active Task
    <button slot="close" @click="handleClose">✕</button>
  </VueTag>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { VueTag } from "agnosticui-core/tag/vue";
export default defineComponent({
  components: { VueTag },
  methods: {
    handleClose() {
      // Handle close logic
    },
  },
});
</script>
```

:::

::: details React

```tsx
import { ReactTag } from "agnosticui-core/tag/react";

export default function Example() {
  return (
    <ReactTag variant="success" shape="pill" uppercase>
      Active Task
      <button slot="close" onClick={() => console.log("Close")}>
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
        { id: 1, label: "Design", variant: "primary" },
        { id: 2, label: "Development", variant: "success" },
        { id: 3, label: "Bug", variant: "error" },
        { id: 4, label: "Feature", variant: "info" },
      ],
    };
  },
  methods: {
    removeTag(id) {
      this.tags = this.tags.filter((tag) => tag.id !== id);
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
import { useState } from "react";
import { ReactTag } from "agnosticui-core/tag/react";

export default function RemovableTagExample() {
  const [tags, setTags] = useState([
    { id: 1, label: "Design", variant: "primary" },
    { id: 2, label: "Development", variant: "success" },
    { id: 3, label: "Bug", variant: "error" },
    { id: 4, label: "Feature", variant: "info" },
  ]);

  const removeTag = (id) => {
    setTags(tags.filter((tag) => tag.id !== id));
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

```typescript
import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import "agnosticui-core/tag";

interface TagItem {
  id: number;
  label: string;
  variant: string;
}

@customElement("tag-example")
export class TagExample extends LitElement {
  @state() private tags: TagItem[] = [
    { id: 1, label: "Design", variant: "primary" },
    { id: 2, label: "Development", variant: "success" },
    { id: 3, label: "Bug", variant: "error" },
    { id: 4, label: "Feature", variant: "info" },
  ];

  static styles = css`
    :host {
      display: block;
    }
    .tag-list {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }
    .tag-item {
      margin: 0.25rem;
    }
  `;

  firstUpdated() {
    // Set up event listeners for dynamically created tags in the shadow DOM
    this.updateTagListeners();
  }

  updated() {
    // Update listeners after each re-render
    this.updateTagListeners();
  }

  private updateTagListeners() {
    const tagElements = this.shadowRoot?.querySelectorAll("ag-tag");
    tagElements?.forEach((tagEl, index) => {
      // Remove old listener before adding new one
      const clonedTagEl = tagEl.cloneNode(true);
      tagEl.replaceWith(clonedTagEl);

      clonedTagEl.addEventListener("tag-remove", (e: Event) => {
        const customEvent = e as CustomEvent;
        const tag = this.tags[index];
        console.log(
          "Removing tag:",
          tag.label,
          "variant:",
          customEvent.detail.variant
        );
        this.tags = this.tags.filter((t) => t.id !== tag.id);
      });
    });
  }

  render() {
    return html`
      <div class="tag-list">
        ${this.tags.map(
          (tag) => html`
            <ag-tag class="tag-item" .variant=${tag.variant} .removable=${true}>
              ${tag.label}
            </ag-tag>
          `
        )}
      </div>
    `;
  }
}
```

**Note:** When using tag components within a custom element's shadow DOM, set up event listeners in the component's lifecycle (e.g., `firstUpdated()` and `updated()`) rather than using `DOMContentLoaded`, as `document.querySelector()` cannot access elements inside shadow DOM. Use `this.shadowRoot.querySelector()` instead. For dynamically rendered components, you may need to update event listeners after each render.

:::

## Props

| Prop          | Type                                                             | Default | Description                                                                                   |
| ------------- | ---------------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------- |
| `variant`     | `'info' \| 'warning' \| 'error' \| 'success' \| 'primary' \| ''` | `''`    | The visual variant of the tag (e.g., for color theming).                                      |
| `shape`       | `'pill' \| 'round' \| 'circle' \| ''`                            | `''`    | The border-radius shape of the tag.                                                           |
| `isUppercase` | `boolean`                                                        | `false` | If `true`, transforms the tag text to uppercase with adjusted font sizing and letter spacing. |
| `removable`   | `boolean`                                                        | `false` | If `true`, shows a remove button (×) that fires the `tag-remove` event when clicked.          |

## Events

| Event        | Framework                                                                          | Detail                    | Description                                                                            |
| ------------ | ---------------------------------------------------------------------------------- | ------------------------- | -------------------------------------------------------------------------------------- |
| `tag-remove` | Vue: `@tag-remove`<br>React: `onTagRemove`<br>Lit: `@tag-remove` or `.onTagRemove` | `{ variant: TagVariant }` | Fired when the tag's remove button is clicked. Provides the tag variant in the detail. |

### Event Patterns

AgnosticUI Tag supports **three event handling patterns**:

1. **addEventListener** (Lit/Vanilla JS):

```javascript
const tag = document.querySelector("ag-tag");
tag.addEventListener("tag-remove", (e) => {
  console.log("Tag removed, variant:", e.detail.variant);
  // Remove the tag from the DOM
  tag.remove();
});
```

2. **Callback props** (Lit/Vanilla JS):

```javascript
const tag = document.querySelector("ag-tag");
tag.onTagRemove = (e) => {
  console.log("Tag removed, variant:", e.detail.variant);
  tag.remove();
};
```

3. **Framework event handlers** (Vue/React):

```vue
<!-- Vue -->
<VueTag removable @tag-remove="handleRemove">
  Removable tag
</VueTag>
```

```tsx
// React
<ReactTag removable onTagRemove={handleRemove}>
  Removable tag
</ReactTag>
```

All three patterns work identically thanks to the **dual-dispatch** system.

## CSS Shadow Parts

| Part             | Description                                                |
| ---------------- | ---------------------------------------------------------- |
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
