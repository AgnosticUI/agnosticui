# TooltipFx

<AlphaWarning />

TooltipFx extends the core Tooltip component with a handful of CSS-only micro-interaction effects applied to the tooltip popup.

::: info Opt-in Component
TooltipFx adds a few hundred lines of CSS for animation effects. It's ideal for marketing sites, landing pages, or when visual polish is a priority.
:::

## Examples

<FrameworkExample
  component="tooltip-fx"
  :vue-code="vueCode"
  :lit-code="litCode"
  :react-code="reactCode"
>
  <template #vue>
    <TooltipFxExamples />
  </template>
  <template #lit>
    <tooltipfx-lit-examples></tooltipfx-lit-examples>
  </template>
</FrameworkExample>

<script setup>
import AlphaWarning from '../components/AlphaWarning.vue'
import TooltipFxExamples from '../examples/TooltipFxExamples.vue'
import FrameworkExample from '../.vitepress/theme/components/FrameworkExample.vue'
import '../examples/TooltipFxLitExamples.js'
import vueCode from '../examples/TooltipFxExamples.vue?raw'
import litCode from '../examples/TooltipFxLitExamples.js?raw'
import reactCode from '../examples/TooltipFxReactExamples.jsx?raw'
</script>

## Usage

::: tip
The framework examples below `import` AgnosticUI as an `npm` package. Alternatively, you can use the **CLI for complete control, AI/LLM visibility, and full code ownership**:
```bash
npx ag init --framework FRAMEWORK # react, vue, lit, svelte, etc.
npx ag add TooltipFx
```
The CLI copies source code directly into your project, giving you full visibility and control. After running `npx ag add`, you'll receive exact import instructions.
:::

::: details Vue

```vue
<template>
  <VueTooltipFx fx="bounce" content="Helpful context">
    <button>Hover me</button>
  </VueTooltipFx>
</template>

<script setup>
import { VueTooltipFx } from "agnosticui-core/tooltip-fx/vue";
</script>
```

:::

::: details React

```tsx
import { ReactTooltipFx } from "agnosticui-core/tooltip-fx/react";

function App() {
  return (
    <ReactTooltipFx fx="bounce" content="Helpful context">
      <button>Hover me</button>
    </ReactTooltipFx>
  );
}
```

:::

::: details Lit

```html
<script type="module">
  import "agnosticui-core/tooltip-fx";
</script>

<ag-tooltip-fx fx="bounce" content="Helpful context">
  <button>Hover me</button>
</ag-tooltip-fx>
```

:::

## Props

Inherits all [Tooltip Props](./tooltip.md#props) plus:

| Prop         | Type                                       | Default     | Description                                                                                                              |
| ------------ | ------------------------------------------ | ----------- | ------------------------------------------------------------------------------------------------------------------------ |
| `fx`         | `string`                                   | `undefined` | Effect name: `bounce`, `pulse`, `jelly`, `shimmer`, `glow`, `flip`, `ripple`, `highlight-sweep`, `press-pop`, `slide-in` |
| `fxSpeed`    | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`     | `'md'`      | Animation duration preset                                                                                                |
| `fxEase`     | `'ease' \| 'bounce' \| 'spring-sm' \| ...` | `'ease'`    | Easing function preset                                                                                                   |
| `fxDisabled` | `boolean`                                  | `false`     | Disable effects programmatically                                                                                         |

## Effects Library

| FX Name           | Trigger | Description                    |
| ----------------- | ------- | ------------------------------ |
| `bounce`          | hover   | Vertical pop, light spring     |
| `pulse`           | hover   | Scale grow/shrink animation    |
| `jelly`           | hover   | Squash/stretch elastic wobble  |
| `shimmer`         | hover   | Light sweep across surface     |
| `glow`            | hover   | Box-shadow pulse effect        |
| `flip`            | hover   | Y-axis rotation (3D flip)      |
| `ripple`          | hover   | Center-origin radial expansion |
| `highlight-sweep` | hover   | Horizontal highlight sweep     |
| `press-pop`       | active  | Quick press down/up            |
| `slide-in`        | mount   | Entrance animation from below  |
