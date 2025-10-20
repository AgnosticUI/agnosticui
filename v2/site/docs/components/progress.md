# Progress

A progress component is used to display the progress of a task.

<ProgressExamples />

<script setup>
import ProgressExamples from '../examples/ProgressExamples.vue'
</script>

## Usage

::: details Vue
```vue
<template>
  <VueProgress :value="50" :max="100" label="Loading..." />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { VueProgress } from 'agnosticui-core/progress/vue';
export default defineComponent({
  components: { VueProgress }
});
</script>
```
:::

::: details React
```tsx
import { ReactProgress } from 'agnosticui-core/progress/react';
export default function Example() {
  return <ReactProgress value={50} max={100} label="Loading..." />;
}
```
:::

::: details Lit (Web Components)
```html
<script type="module">
  import 'agnosticui-core/progress';
</script>
<ag-progress value="50" max="100" label="Loading..."></ag-progress>
```
:::

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | `undefined` | The current value of the progress bar. If not provided, the progress bar is indeterminate. |
| `max` | `number` | `100` | The maximum value of the progress bar. |
| `label` | `string` | `''` | An accessible label for the progress bar. This label is visually hidden but announced by screen readers. |

## CSS Shadow Parts

| Part | Description |
|------|-------------|
| `ag-progress-wrapper` | The main container element for the component. |
| `progress-label` | The visually hidden label element. |
| `ag-progress-bar` | The native `<progress>` element. |

## Accessibility

The component renders a standard HTML5 `<progress>` element. A `label` is associated with the `<progress>` element for accessibility. The label text is provided via the `label` prop. The label is visually hidden but accessible to screen readers. If the `value` prop is not provided, the progress bar will be in an indeterminate state.