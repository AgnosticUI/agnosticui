---
title: VisuallyHidden
---

# VisuallyHidden

A utility component to visually hide content while keeping it accessible to screen readers. This is a common pattern for accessibility, often implemented with a CSS class like `.sr-only` or `.visually-hidden`. This component provides a declarative way to achieve the same result.

<VisuallyHiddenExamples />

<script setup>
import VisuallyHiddenExamples from '../examples/VisuallyHiddenExamples.vue'
</script>

## Usage

Use the component to wrap any content you want to be available to screen readers but not visible on the screen.

::: details Vue
```vue
<template>
  <button>
    <svg><!-- icon --></svg>
    <VueVisuallyHidden>Close</VueVisuallyHidden>
  </button>
</template>
<script lang="ts" setup>
import { VueVisuallyHidden } from 'agnosticui-core/visually-hidden/vue';
</script>
```
:::

::: details React
```tsx
import { ReactVisuallyHidden } from 'agnosticui-core/visually-hidden/react';

export default function Example() {
  return (
    <button>
      <svg>{/* icon */}</svg>
      <ReactVisuallyHidden>Close</ReactVisuallyHidden>
    </button>
  );
}
```
:::

::: details Lit (Web Components)
```html
<script type="module">
  import 'agnosticui-core/visually-hidden';
</script>

<button>
  <svg><!-- icon --></svg>
  <ag-visually-hidden>Close</ag-visually-hidden>
</button>
```
:::

## Props

This component does not have any props. It simply wraps the content you provide to it in the default slot.

## Events

This component does not emit any events.

## Accessibility

The `VisuallyHidden` component is an accessibility utility. It helps provide context to screen reader users that might be visually apparent to sighted users. A common use case is providing a text label for an icon-only button. The content remains in the accessibility tree and can be read by assistive technologies, but it is positioned off-screen so it is not visible.