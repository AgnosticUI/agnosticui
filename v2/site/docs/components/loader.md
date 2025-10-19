# Loader

Brief description of what the component does and when to use it.

<LoaderExamples />

<script setup>
import LoaderExamples from '../examples/LoaderExamples.vue'
</script>

## Usage

::: details Vue
```vue
<template>
  <VueLoader />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { VueLoader } from 'agnosticui-core/loader/vue';
export default defineComponent({
  components: { VueLoader }
});
</script>
```
:::

::: details React
```tsx
import { ReactLoader } from 'agnosticui-core/loader/react';
export default function Example() {
  return <ReactLoader />;
}
```
:::

::: details Lit (Web Components)
```html
<script type="module">
  import 'agnosticui-core/loader';
</script>
<ag-loader></ag-loader>
```
:::

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `small` \| `default` \| `large` | `default` | Sets the loader size. |
| `ariaLabel` | `string` | `Loading...` | The ARIA label for accessibility. |

## Variants

The `loader` component has `size` variants that include: `small`, `default`, and `large`.

## CSS Shadow Parts

| Part | Description |
|------|-------------|
| `ag-loader` | The main loader container element. |
| `ag-loader-label` | The screen reader text element. |


## Events

| Event | Payload | Description |
|-------|---------|-------------|
|       |         |             |

## Accessibility

This section can be filled out by the LLM agent based on the ```SpecSheet.md```.
