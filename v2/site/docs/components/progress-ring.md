# Progress Ring

The Progress Ring component provides a circular progress indicator that can display determinate or indeterminate progress states. It's highly customizable with different sizes, colors, and animation options.

## Examples

<ProgressRingExamples />

<script setup>
import ProgressRingExamples from '../examples/ProgressRingExamples.vue'
</script>

## Usage

::: details Vue
```vue
<template>
  <section>
    <VueProgressRing :value="75" />
    <VueProgressRing :value="50" variant="success" />
    <VueProgressRing :value="25" size="large" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VueProgressRing } from 'agnosticui-core/progress-ring/vue';

export default defineComponent({
  components: { VueProgressRing }
});
</script>
```
:::

::: details React
```tsx
import { ReactProgressRing } from 'agnosticui-core/progress-ring/react';

export default function Example() {
  return (
    <section>
      <ReactProgressRing value={75} />
      <ReactProgressRing value={50} variant="success" />
      <ReactProgressRing value={25} size="large" />
    </section>
  );
}
```
:::

::: details Lit (Web Components)
```html
<script type="module">
  import 'agnosticui-core/progress-ring';
</script>

<section>
  <ag-progress-ring value="75"></ag-progress-ring>
  <ag-progress-ring value="50" variant="success"></ag-progress-ring>
  <ag-progress-ring value="25" size="large"></ag-progress-ring>
</section>
```
:::

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | `0` | The current progress value (0–100). |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | The size of the progress ring. |
| `variant` | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `'primary'` | The color variant of the progress ring. |
| `label` | `string` | `'Progress'` | Accessible label for screen readers. |
| `noAnimation` | `boolean` | `false` | Disable animation (also respects prefers-reduced-motion). |

## Slots

| Slot | Description |
|---|---|
| default | Content displayed in the center of the ring. Defaults to showing the percentage value. |

## CSS Shadow Parts

| Part | Description |
|---|---|
| `base` | The main container element. |
| `ring` | The SVG element containing the progress ring. |
| `track` | The background circle of the progress ring. |
| `indicator` | The foreground circle showing the progress. |
| `label` | The center content area containing the slot. |

### Customization Example

```css
ag-progress-ring.custom-ring::part(track) {
  stroke: #e0e0e0;
  stroke-width: 4;
}
ag-progress-ring.custom-ring::part(indicator) {
  stroke: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  stroke-width: 4;
  stroke-linecap: round;
}
ag-progress-ring.custom-ring::part(label) {
  font-weight: bold;
  font-size: 1.25rem;
  color: #667eea;
}
```

## Accessibility

- The component uses `role="progressbar"` for screen reader compatibility.
- `aria-valuenow`, `aria-valuemin`, and `aria-valuemax` convey the current, minimum, and maximum values.
- The `label` prop provides an accessible name via `aria-label`.
- The component respects the `prefers-reduced-motion` media query.

## Best Practices

- Use meaningful labels that describe what progress is being tracked.
- Provide textual feedback in the center slot for users who may have difficulty perceiving the visual progress.
- Consider using different variants to indicate status (e.g., `success` for completed, `warning` for needs attention).
- For indeterminate loading states, consider using a spinner component instead.
