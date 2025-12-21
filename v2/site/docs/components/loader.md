# Loader

<AlphaWarning />


Brief description of what the component does and when to use it.

<LoaderExamples />

<script setup>
import AlphaWarning from '../components/AlphaWarning.vue'
import LoaderExamples from '../examples/LoaderExamples.vue'
</script>

## Usage

::: tip
The framework examples below `import` AgnosticUI as an `npm` package. Alternatively, you can use the **CLI for complete control, AI/LLM visibility, and full code ownership**:
```bash
npx ag init --framework FRAMEWORK # react, vue, lit, svelte, etc.
npx ag add Loader
```
The CLI copies source code directly into your project, giving you full visibility and control. After running `npx ag add`, you'll receive exact import instructions.
:::

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
