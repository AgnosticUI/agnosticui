# Rating

The Rating component provides a way for users to view and set a rating, typically represented by stars. It's highly customizable, supporting different sizes, colors, and precision.

## Examples

<RatingExamples />

<script setup>
import RatingExamples from '../examples/RatingExamples.vue'
</script>

## Usage

::: details Vue
```vue
<template>
  <section>
    <VueRating :value="3" />
    <VueRating :value="2.5" precision="half" />
    <VueRating :value="4" variant="success" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VueRating } from 'agnosticui-core/rating/vue';

export default defineComponent({
  components: { VueRating }
});
</script>
```
:::

::: details React
```tsx
import { ReactRating } from 'agnosticui-core/rating/react';

export default function Example() {
  return (
    <section>
      <ReactRating value={3} />
      <ReactRating value={2.5} precision="half" />
      <ReactRating value={4} variant="success" />
    </section>
  );
}
```
:::

::: details Lit (Web Components)
```html
<script type="module">
  import 'agnosticui-core/rating';
</script>

<section>
  <ag-rating value="3"></ag-rating>
  <ag-rating value="2.5" precision="half"></ag-rating>
  <ag-rating value="4" variant="success"></ag-rating>
</section>
```
:::

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | `0` | The current rating value. Can be a float if `precision` is `half`. |
| `max` | `number` | `5` | The maximum rating value (total number of stars). |
| `precision` | `'whole' \| 'half'` | `'whole'` | The precision of the rating, allowing for whole or half-star increments. |
| `readonly` | `boolean` | `false` | If true, the rating is display-only and cannot be changed by the user. |
| `allowClear` | `boolean` | `false` | If true, clicking on the currently selected rating value will set the rating to 0. |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | The size of the rating stars. |
| `variant` | `'' \| 'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger'` | `''` | The color variant of the rating. Defaults to yellow if empty. |

## Events

| Event | Framework | Detail | Description |
|---|---|---|---|
| `rating-change` | Vue: `@rating-change`<br>React: `onRatingChange`<br>Lit: `@rating-change` | `{ oldValue: number, newValue: number }` | Fired when the user selects a new rating value. |
| `rating-hover` | Vue: `@rating-hover`<br>React: `onRatingHover`<br>Lit: `@rating-hover` | `{ phase: 'start' \| 'move' \| 'end', value: number }` | Fired as the user's pointer moves over the component. `phase` indicates the state of the hover interaction. |

## CSS Shadow Parts

| Part | Description |
|---|---|
| `base` | The main container `div` element wrapping the stars. |
| `star-button` | The `<span>` element that acts as the clickable area for each star. |
| `star` | The `<span>` element that contains the star's SVG icon. |

### Customization Example

```css
ag-rating.custom-rating::part(star-button) {
  padding: 0.25rem;
  border-radius: 50%;
  transition: background-color 0.2s ease;
}
ag-rating.custom-rating::part(star-button):hover {
  background-color: rgba(0, 0, 0, 0.1);
}
ag-rating.custom-rating::part(star) {
  opacity: 0.8;
  transition: opacity 0.2s ease;
}
ag-rating.custom-rating::part(star):hover {
  opacity: 1;
}
```

## Accessibility

- The component is implemented as a `role="slider"` for screen reader compatibility.
- `aria-valuenow`, `aria-valuemin`, and `aria-valuemax` are used to convey the current, minimum, and maximum values.
- The component is keyboard navigable using arrow keys, Home, and End.
- A visually hidden `<span>` with `aria-live="polite"` announces the rating to screen readers.
- The component is focusable and has a visible focus ring.

## Best Practices

- For ratings that are not interactive, always use the `readonly` prop.
- Ensure sufficient color contrast for the star colors, especially when using `variant`.
- When used in a form, consider associating it with a label for better context.
