# BadgeFx

BadgeFx extends the core Badge component with 12 CSS-only animation effects.

## Features

- 🎨 12 pre-built animation effects
- ⚡ CSS-only animations (no JavaScript)
- ♿ Automatic `prefers-reduced-motion` support
- 🎯 Shadow DOM compatible
- 🔧 Customizable timing and easing
- 📦 Available for Lit, React, and Vue

## Examples

<BadgeFxExamples />

<script setup>
import BadgeFxExamples from '../examples/BadgeFxExamples.vue'
</script>

## Installation

```bash
npm install agnosticui-core
```

## Usage

### Lit (Web Components)

```html
<script type="module">
  import 'agnosticui-core/badge-fx';
</script>

<ag-badge-fx fx="bounce" fx-speed="md">
  Badge Text
</ag-badge-fx>
```

### React

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

### Vue

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

## Props

Inherits all [Badge Props](./badge.md#props) plus:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `fx` | `string` | `undefined` | Effect name: `bounce`, `pulse`, `jelly`, `shimmer`, `glow`, `flip`, `icon-reveal`, `ripple`, `highlight-sweep`, `press-pop`, `tilt-press`, `slide-in` |
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
| `tilt-press` | active | Subtle 3D tilt on press |
| `slide-in` | mount | Entrance animation from below |
