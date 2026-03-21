# TagFx

<AlphaWarning />

TagFx extends the core Tag component with a handful of CSS-only micro-interaction effects.

::: info Opt-in Component
TagFx adds a few hundred lines of CSS for animation effects. It's ideal for marketing sites, landing pages, or when visual polish is a priority.
:::

## Examples

<FrameworkExample
  component="tag-fx"
  :vue-code="vueCode"
  :lit-code="litCode"
  :react-code="reactCode"
>
  <template #vue>
    <TagFxExamples />
  </template>
  <template #lit>
    <tagfx-lit-examples></tagfx-lit-examples>
  </template>
</FrameworkExample>

<script setup>
import AlphaWarning from '../components/AlphaWarning.vue'
import TagFxExamples from '../examples/TagFxExamples.vue'
import FrameworkExample from '../.vitepress/theme/components/FrameworkExample.vue'
import '../examples/TagFxLitExamples.js'
import vueCode from '../examples/TagFxExamples.vue?raw'
import litCode from '../examples/TagFxLitExamples.js?raw'
import reactCode from '../examples/TagFxReactExamples.jsx?raw'
</script>

## Usage

::: tip
The framework examples below `import` AgnosticUI as an `npm` package. Alternatively, you can use the **CLI for complete control, AI/LLM visibility, and full code ownership**:
```bash
npx ag init --framework FRAMEWORK # react, vue, lit, svelte, etc.
npx ag add TagFx
```
The CLI copies source code directly into your project, giving you full visibility and control. After running `npx ag add`, you'll receive exact import instructions.
:::

::: details Vue

```vue
<template>
  <VueTagFx fx="bounce" fx-speed="md"> Tag Text </VueTagFx>
</template>

<script setup>
import { VueTagFx } from "agnosticui-core/tag-fx/vue";
</script>
```

:::

::: details React

```tsx
import { ReactTagFx } from "agnosticui-core/tag-fx/react";

function App() {
  return (
    <ReactTagFx fx="bounce" fxSpeed="md">
      Tag Text
    </ReactTagFx>
  );
}
```

:::

::: details Lit

```html
<script type="module">
  import "agnosticui-core/tag-fx";
</script>

<ag-tag-fx fx="bounce" fx-speed="md"> Tag Text </ag-tag-fx>
```

:::

## Props

Inherits all [Tag Props](./tag.md#props) plus:

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
