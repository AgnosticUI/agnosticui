# Scroll Progress

The Scroll Progress component provides visual feedback about how far the user has scrolled through a document or scrollable container. It offers four distinct visual modes to fit different design contexts.

## Examples

<ScrollProgressExamples />

<script setup>
import ScrollProgressExamples from '../examples/ScrollProgressExamples.vue'
</script>

## Usage

::: details Vue
```vue
<template>
  <div>
    <!-- Bar mode (default) -->
    <VueScrollProgress mode="bar" orientation="top" />

    <!-- Dot trail mode -->
    <div style="position: fixed; top: 1rem; left: 50%; transform: translateX(-50%);">
      <VueScrollProgress mode="dot-trail" :dots="5" />
    </div>

    <!-- Badge mode -->
    <div style="position: fixed; bottom: 1rem; right: 1rem;">
      <VueScrollProgress mode="badge" />
    </div>

    <!-- Ring mode -->
    <div style="position: fixed; bottom: 1rem; right: 1rem;">
      <VueScrollProgress mode="ring" :ring-size="48" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VueScrollProgress } from 'agnosticui-core/scroll-progress/vue';

export default defineComponent({
  components: { VueScrollProgress }
});
</script>
```
:::

::: details React
```tsx
import { ReactScrollProgress } from 'agnosticui-core/scroll-progress/react';

export default function Example() {
  return (
    <div>
      {/* Bar mode (default) */}
      <ReactScrollProgress mode="bar" orientation="top" />

      {/* Dot trail mode */}
      <div style={{ position: 'fixed', top: '1rem', left: '50%', transform: 'translateX(-50%)' }}>
        <ReactScrollProgress mode="dot-trail" dots={5} />
      </div>

      {/* Badge mode */}
      <div style={{ position: 'fixed', bottom: '1rem', right: '1rem' }}>
        <ReactScrollProgress mode="badge" />
      </div>

      {/* Ring mode */}
      <div style={{ position: 'fixed', bottom: '1rem', right: '1rem' }}>
        <ReactScrollProgress mode="ring" ringSize={48} />
      </div>
    </div>
  );
}
```
:::

::: details Lit (Web Components)
```html
<script type="module">
  import 'agnosticui-core/scroll-progress';
</script>

<!-- Bar mode (default) -->
<ag-scroll-progress mode="bar" orientation="top"></ag-scroll-progress>

<!-- Dot trail mode -->
<div style="position: fixed; top: 1rem; left: 50%; transform: translateX(-50%);">
  <ag-scroll-progress mode="dot-trail" dots="5"></ag-scroll-progress>
</div>

<!-- Badge mode -->
<div style="position: fixed; bottom: 1rem; right: 1rem;">
  <ag-scroll-progress mode="badge"></ag-scroll-progress>
</div>

<!-- Ring mode -->
<div style="position: fixed; bottom: 1rem; right: 1rem;">
  <ag-scroll-progress mode="ring" ring-size="48"></ag-scroll-progress>
</div>
```
:::

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `mode` | `'bar' \| 'dot-trail' \| 'badge' \| 'ring'` | `'bar'` | Visual representation mode. |
| `target` | `HTMLElement \| null` | `null` | Custom scroll container (defaults to document). |
| `orientation` | `'top' \| 'bottom'` | `'top'` | Bar placement (bar mode only). |
| `dots` | `number` | `5` | Number of dots (dot-trail mode only). |
| `badgeVariant` | badge variants | `'info'` | Badge color (badge/dot-trail modes). |
| `ringSize` | `number` | `32` | Ring diameter in pixels (ring mode only). |
| `ringStrokeWidth` | `number` | `3` | Ring stroke width (ring mode only). |
| `ringVariant` | ring variants | `'info'` | Ring color (ring mode only). |
| `precision` | `number` | `0` | Decimal places for percentage (0 = integers). |

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

| Part | Description |
|---|---|
| `scroll-progress-bar` | The progress bar element (bar mode). |
| `scroll-progress-dots` | The dot trail container (dot-trail mode). |
| `scroll-progress-badge` | The badge element (badge mode). |
| `scroll-progress-ring` | The progress ring element (ring mode). |

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
import { defineComponent, ref } from 'vue';
import { VueScrollProgress } from 'agnosticui-core/scroll-progress/vue';

export default defineComponent({
  components: { VueScrollProgress },
  setup() {
    const scrollContainer = ref<HTMLElement | null>(null);
    return { scrollContainer };
  }
});
</script>
```
