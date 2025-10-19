# Spinner

Brief description of what the component does and when to use it.

<SpinnerExamples />

<script setup>
import SpinnerExamples from '../examples/SpinnerExamples.vue'
</script>

## Usage

::: details Vue
```vue
<template>
  <VueSpinner />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { VueSpinner } from 'agnosticui-core/spinner/vue';
export default defineComponent({
  components: { VueSpinner }
});
</script>
```
:::

::: details React
```tsx
import { ReactSpinner } from 'agnosticui-core/spinner/react';
export default function Example() {
  return <ReactSpinner />;
}
```
:::

::: details Lit (Web Components)
```html
<script type="module">
  import 'agnosticui-core/spinner';
</script>
<ag-spinner></ag-spinner>
```
:::

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `small` \| `default` \| `large` \| `xlarge` | `default` | Sets the spinner size. |
| `ariaLabel` | `string` | `Loading...` | The ARIA label for accessibility. |

## Variants

The `spinner` component has `size` variants that include: `small`, `default`, `large`, and `xlarge`.

## CSS Shadow Parts

| Part | Description |
|------|-------------|
| `ag-spinner` | The main spinner container element. |
| `ag-spinner-label` | The screen reader text element. |


## Events

| Event | Payload | Description |
|-------|---------|-------------|
|       |         |             |

## Accessibility

This section can be filled out by the LLM agent based on the ```SpecSheet.md```.
