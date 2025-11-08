# Skeleton Loader

Skeleton loaders provide visual placeholders while content is loading, improving perceived performance and user experience. They represent the approximate shape and size of the content that will appear.

<SkeletonLoaderExamples />

<script setup>
import SkeletonLoaderExamples from '../examples/SkeletonLoaderExamples.vue'
</script>

## Usage

::: details Vue
```vue
<template>
  <VueSkeleton variant="text" />
  <VueSkeleton variant="circular" width="60px" height="60px" />
  <VueSkeleton variant="rectangular" width="300px" height="200px" />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { VueSkeleton } from 'agnosticui-core/skeleton/vue';
export default defineComponent({
  components: { VueSkeleton }
});
</script>
```
:::

::: details React
```tsx
import { ReactSkeleton } from 'agnosticui-core/skeleton/react';
export default function Example() {
  return (
    <>
      <ReactSkeleton variant="text" />
      <ReactSkeleton variant="circular" width="60px" height="60px" />
      <ReactSkeleton variant="rectangular" width="300px" height="200px" />
    </>
  );
}
```
:::

::: details Lit (Web Components)
```html
<script type="module">
  import 'agnosticui-core/skeleton';
</script>
<ag-skeleton variant="text"></ag-skeleton>
<ag-skeleton variant="circular" width="60px" height="60px"></ag-skeleton>
<ag-skeleton variant="rectangular" width="300px" height="200px"></ag-skeleton>
```
:::

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `text` \| `circular` \| `rectangular` \| `rounded` | `text` | The shape variant of the skeleton. |
| `effect` | `pulse` \| `sheen` \| `none` | `pulse` | The animation effect applied to the skeleton. |
| `intensity` | `light` \| `medium` | `light` | The background intensity using design tokens. |
| `width` | `string` | `100%` | The width of the skeleton (any CSS value). |
| `height` | `string` | `1em` | The height of the skeleton (any CSS value). |

## Variants

### Shape Variants

- **text**: Default variant with small border radius, ideal for text placeholders
- **circular**: Perfect circle shape, ideal for avatar placeholders
- **rectangular**: No border radius, ideal for image placeholders
- **rounded**: Medium border radius, ideal for card/button placeholders

### Effect Variants

- **pulse**: Gentle opacity animation (default)
- **sheen**: Shimmer effect that sweeps across the skeleton
- **none**: No animation, static placeholder

### Intensity Variants

- **light**: Uses `--ag-background-secondary` (default, lighter background)
- **medium**: Uses `--ag-background-tertiary` (darker background for more contrast)

## CSS Shadow Parts

| Part | Description |
|------|-------------|
| `ag-skeleton-wrapper` | The main skeleton wrapper element. |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
|       |         | No custom events. |

## Accessibility

### Screen Readers

The skeleton loader automatically sets `aria-hidden="true"` to hide the placeholder content from screen readers. When implementing loading states:

- Wrap skeletons in a container with `role="status"` and `aria-live="polite"` to announce loading
- Add `aria-busy="true"` to the container to tell screen readers to wait for actual content
- When content loads, remove the skeleton and update `aria-busy="false"`

### Motion Preferences

The component respects the `prefers-reduced-motion` media query. When users enable reduced motion in their OS settings, all animations (pulse and sheen effects) are automatically disabled.

### Color Contrast

Skeleton loaders use semantic design tokens (`--ag-background-secondary` and `--ag-background-tertiary`) that maintain appropriate contrast in both light and dark modes. The contrast requirements are more lenient for loading placeholders due to their temporary nature and large size.
