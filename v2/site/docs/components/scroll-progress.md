# Scroll Progress

<AlphaWarning />

The Scroll Progress component provides visual feedback about how far the user has scrolled through a document or scrollable container. It offers four distinct visual modes to fit different design contexts.

## Examples

<FrameworkExample component="scroll-progress" :vue-code="vueCode" :lit-code="litCode" :react-code="reactCode">
  <template #vue>
    <ScrollProgressExamples />
  </template>
  <template #lit>
    <scroll-progress-lit-examples></scroll-progress-lit-examples>
  </template>
</FrameworkExample>

<script setup>
import AlphaWarning from '../components/AlphaWarning.vue'
import ScrollProgressExamples from '../examples/ScrollProgressExamples.vue'
import FrameworkExample from '../.vitepress/theme/components/FrameworkExample.vue'
import '../examples/ScrollProgressLitExamples.js'
import vueCode from '../examples/ScrollProgressExamples.vue?raw'
import litCode from '../examples/ScrollProgressLitExamples.js?raw'
import reactCode from '../examples/ScrollProgressReactExamples.jsx?raw'
</script>

## Usage

::: tip
The framework examples below `import` AgnosticUI as an `npm` package. Alternatively, you can use the **CLI for complete control, AI/LLM visibility, and full code ownership**:

```bash
npx ag init --framework FRAMEWORK # react, vue, lit, svelte, etc.
npx ag add ScrollProgress
```

The CLI copies source code directly into your project, giving you full visibility and control. After running `npx ag add`, you'll receive exact import instructions.
:::

## Props

| Prop              | Type                                        | Default  | Description                                     |
| ----------------- | ------------------------------------------- | -------- | ----------------------------------------------- |
| `mode`            | `'bar' \| 'dot-trail' \| 'badge' \| 'ring'` | `'bar'`  | Visual representation mode.                     |
| `target`          | `HTMLElement \| null`                       | `null`   | Custom scroll container (defaults to document). |
| `orientation`     | `'top' \| 'bottom'`                         | `'top'`  | Bar placement (bar mode only).                  |
| `dots`            | `number`                                    | `5`      | Number of dots (dot-trail mode only).           |
| `badgeVariant`    | badge variants                              | `'info'` | Badge color (badge/dot-trail modes).            |
| `ringSize`        | `number`                                    | `32`     | Ring diameter in pixels (ring mode only).       |
| `ringStrokeWidth` | `number`                                    | `3`      | Ring stroke width (ring mode only).             |
| `ringVariant`     | ring variants                               | `'info'` | Ring color (ring mode only).                    |
| `precision`       | `number`                                    | `0`      | Decimal places for percentage (0 = integers).   |

## Modes

### Bar Mode

A horizontal progress bar fixed to the top or bottom of the viewport. Perfect for long-form content like articles and documentation.

### Dot Trail Mode

A subtle row of dots that fill as you scroll. Great for minimalist designs or when you want a less intrusive indicator.

### Badge Mode

Displays the exact scroll percentage in a badge. Useful when users need precise feedback about their position.

### Ring Mode

A circular progress indicator, often used with floating action buttons or in dashboard contexts.

## CSS Shadow Parts

| Part                    | Description                               |
| ----------------------- | ----------------------------------------- |
| `scroll-progress-bar`   | The progress bar element (bar mode).      |
| `scroll-progress-dots`  | The dot trail container (dot-trail mode). |
| `scroll-progress-badge` | The badge element (badge mode).           |
| `scroll-progress-ring`  | The progress ring element (ring mode).    |

## Accessibility

- All modes include appropriate `aria-label` attributes for screen readers.
- The component automatically updates as the user scrolls.
- Respects user's motion preferences (uses design tokens for animations).

## Best Practices

- **Bar mode**: Best for top-level page navigation and long-form content.
- **Dot trail mode**: Ideal for presentations, carousels, or multi-step processes.
- **Badge mode**: Use when precise percentage feedback is valuable.
- **Ring mode**: Pairs well with scroll-to-top buttons or floating navigation.
- Keep precision at 0 (integers) for cleaner UX unless exact percentages are needed.
- Use contrasting variants to ensure visibility across different backgrounds.

## Custom Scroll Container

Track scroll progress within a specific container instead of the entire document:

```vue
<template>
  <div>
    <VueScrollProgress mode="bar" :target="scrollContainer" />
    <div ref="scrollContainer" style="height: 400px; overflow-y: auto;">
      <!-- Your scrollable content -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { VueScrollProgress } from "agnosticui-core/scroll-progress/vue";

export default defineComponent({
  components: { VueScrollProgress },
  setup() {
    const scrollContainer = ref<HTMLElement | null>(null);
    return { scrollContainer };
  },
});
</script>
```
