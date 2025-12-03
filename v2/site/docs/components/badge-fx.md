# BadgeFx

BadgeFx extends the core Badge component with a handful of CSS-only micro-interaction effects.

::: info Opt-in Component
BadgeFx adds a few hundred lines of CSS for animation effects. It's ideal for marketing sites, landing pages, or when visual polish is a priority. For standard applications, you may prefer the core [Badge component](/components/badge) without the animation overhead.
:::

## Examples

<BadgeFxExamples />

<script setup>
import BadgeFxExamples from '../examples/BadgeFxExamples.vue'
import { Palette, Zap, Accessibility, Target, Wrench, Package } from 'lucide-vue-next'
</script>

<style>
.inline-icon {
  display: inline-block;
  vertical-align: middle;
  margin-right: var(--ag-space-2);
  width: 1.2em;
  height: 1.2em;
  position: relative;
  top: -1px;
}
</style>



## Usage

::: details Vue
```vue
<template>
  <VueBadgeFx fx="bounce" fx-speed="md">
    Badge Text
  </VueBadgeFx>
</template>

<script setup>
import { VueBadgeFx } from 'agnosticui-core/badge-fx/vue';
</script>
```
:::

::: details React
```tsx
import { ReactBadgeFx } from 'agnosticui-core/badge-fx/react';

function App() {
  return (
    <ReactBadgeFx fx="bounce" fxSpeed="md">
      Badge Text
    </ReactBadgeFx>
  );
}
```
:::

::: details Lit
```html
<script type="module">
  import 'agnosticui-core/badge-fx';
</script>

<ag-badge-fx fx="bounce" fx-speed="md">
  Badge Text
</ag-badge-fx>
```
:::

## Props

Inherits all [Badge Props](./badge.md#props) plus:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `fx` | `string` | `undefined` | Effect name: `bounce`, `pulse`, `jelly`, `shimmer`, `glow`, `flip`, `ripple`, `highlight-sweep`, `press-pop`, `slide-in` |
| `fxSpeed` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Animation duration preset |
| `fxEase` | `'ease' \| 'bounce' \| 'spring-sm' \| ...` | `'ease'` | Easing function preset |
| `fxDisabled` | `boolean` | `false` | Disable effects programmatically |

## Effects Library

| FX Name | Trigger | Description |
|---------|---------|-------------|
| `bounce` | hover | Vertical pop, light spring |
| `pulse` | hover | Scale grow/shrink animation |
| `jelly` | hover | Squash/stretch elastic wobble |
| `shimmer` | hover | Light sweep across surface |
| `glow` | hover | Box-shadow pulse effect |
| `flip` | hover | Y-axis rotation (3D flip) |
| `ripple` | hover | Center-origin radial expansion |
| `highlight-sweep` | hover | Horizontal highlight sweep |
| `press-pop` | active | Quick press down/up |
| `slide-in` | mount | Entrance animation from below |
