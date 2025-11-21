# Mark

The `Mark` component is used to highlight or "mark" a portion of text. It can be used in two modes:

1.  **Static Mode**: By default, it wraps its content in a `<mark>` tag, similar to the native HTML element, but styled with AgnosticUI design tokens.
2.  **Reactive Mode**: When a `search` prop is provided, the component will dynamically find and highlight substrings within its content that match the search term.

<MarkExamples />

<script setup>
import MarkExamples from '../examples/MarkExamples.vue'
</script>

## Usage

### Static Highlighting

To highlight a static piece of text, simply wrap the text with the `Mark` component.

::: details Vue
```vue
<template>
  <p>
    This is some text with a <VueMark variant="success">highlighted part</VueMark> inside it.
  </p>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { VueMark } from 'agnosticui-core/mark/vue';
export default defineComponent({
  components: { VueMark }
});
</script>
```
:::

::: details React
```tsx
import { ReactMark } from 'agnosticui-core/mark/react';
export default function Example() {
  return (
    <p>
      This is some text with a <ReactMark variant="success">highlighted part</ReactMark> inside it.
    </p>
  );
}
```
:::

::: details Lit (Web Components)
```html
<script type="module">
  import 'agnosticui-core/mark';
</script>
<p>
  This is some text with a <ag-mark variant="success">highlighted part</ag-mark> inside it.
</p>
```
:::

### Reactive Highlighting

To dynamically highlight text, provide the full text as the child of the `Mark` component and pass a `search` term as a prop. You can also control the matching behavior with `caseSensitive` and `matchAll`.

::: details Vue
```vue
<template>
  <div class="mbe24">
    <vue-input
      v-model="searchTerm"
      label="Enter text to highlight"
      type="text"
    />
  </div>
  <p>
    <VueMark :search="searchTerm" :match-all="true" variant="warning">
      The quick brown fox jumps over the lazy dog. The lazy fox was not the same as the other fox.
    </VueMark>
  </p>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { VueMark } from 'agnosticui-core/mark/vue';
import { VueInput } from 'agnosticui-core/input/vue';

const searchTerm = ref('fox');
</script>
```
:::

::: details React
```tsx
import { ReactMark } from 'agnosticui-core/mark/react';
import { ReactInput } from 'agnosticui-core/input/react';
import { useState } from 'react';

export default function Example() {
  const [searchTerm, setSearchTerm] = useState('fox');
  return (
    <>
      <div style={{ marginBottom: '24px' }}>
        <ReactInput
          label="Enter text to highlight"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <p>
        <ReactMark search={searchTerm} matchAll={true} variant="warning">
          The quick brown fox jumps over the lazy dog. The lazy fox was not the same as the other fox.
        </ReactMark>
      </p>
    </>
  );
}
```
:::

## Props

| Prop          | Type                                                                  | Default   | Description                                                              |
|---------------|-----------------------------------------------------------------------|-----------|--------------------------------------------------------------------------|
| `variant`     | 'warning' \| 'info' \| 'success' \| 'error' \| 'primary' \| 'secondary' \| 'monochrome' | 'warning' | Sets the color variant for the highlight.                                |
| `search`      | `string`                                                              | `undefined` | The substring to search for and highlight within the component's content. When provided, enables reactive mode. |
| `caseSensitive`| `boolean`                                                             | `false`   | If `true`, the search will be case-sensitive. Only applies in reactive mode. |
| `matchAll`    | `boolean`                                                             | `false`   | If `true`, all occurrences of the search term will be highlighted. If `false`, only the first occurrence is highlighted. |

## Accessibility

For screen reader users, the component automatically adds visually-hidden text `[highlight start]` and `[highlight end]` before and after the highlighted section. This makes the presence of the highlight perceivable to users who may not see the visual styling.