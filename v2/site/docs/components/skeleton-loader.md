# Skeleton Loader

<AlphaWarning />


Skeleton loader provides a visual placeholders while content is loading, improving perceived performance and user experience. It represents the approximate shape and size of the content that will appear.

## Examples

<FrameworkExample
  component="skeleton"
  :vue-code="vueCode"
  :lit-code="litCode"
  :react-code="reactCode"
>
  <template #vue>
    <SkeletonLoaderExamples />
  </template>
  <template #lit>
    <skeleton-loader-lit-examples></skeleton-loader-lit-examples>
  </template>
</FrameworkExample>

<script setup>
import AlphaWarning from '../components/AlphaWarning.vue'
import SkeletonLoaderExamples from '../examples/SkeletonLoaderExamples.vue'
import FrameworkExample from '../.vitepress/theme/components/FrameworkExample.vue'
import '../examples/SkeletonLoaderLitExamples.js'
import vueCode from '../examples/SkeletonLoaderExamples.vue?raw'
import litCode from '../examples/SkeletonLoaderLitExamples.js?raw'
import reactCode from '../examples/SkeletonLoaderReactExamples.jsx?raw'
</script>

## Usage

::: tip
The framework examples below `import` AgnosticUI as an `npm` package. Alternatively, you can use the **CLI for complete control, AI/LLM visibility, and full code ownership**:
```bash
npx ag init --framework FRAMEWORK # react, vue, lit, svelte, etc.
npx ag add SkeletonLoader
```
The CLI copies source code directly into your project, giving you full visibility and control. After running `npx ag add`, you'll receive exact import instructions.
:::

::: details Vue

```vue
<template>
  <VueSkeletonLoader variant="text" />
  <VueSkeletonLoader variant="circular" width="60px" height="60px" />
  <VueSkeletonLoader variant="rectangular" width="300px" height="200px" />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { VueSkeletonLoader } from "agnosticui-core/skeleton/vue";
export default defineComponent({
  components: { VueSkeletonLoader },
});
</script>
```

:::

::: details React

```tsx
import { ReactSkeletonLoader } from "agnosticui-core/skeleton/react";
export default function Example() {
  return (
    <>
      <ReactSkeletonLoader variant="text" effect="pulse" intensity="light" />
      <ReactSkeletonLoader
        variant="circular"
        width="60px"
        height="60px"
        effect="pulse"
        intensity="light"
      />
      <ReactSkeletonLoader
        effect="sheen"
        variant="rectangular"
        width="300px"
        height="200px"
      />
    </>
  );
}
```

:::

::: details Lit (Web Components)

```html
<script type="module">
  import "agnosticui-core/skeleton";
</script>
<ag-skeleton-loader variant="text"></ag-skeleton-loader>
<ag-skeleton-loader variant="circular" width="60px" height="60px"></ag-skeleton-loader>
<ag-skeleton-loader variant="rectangular" width="300px" height="200px"></ag-skeleton-loader>
```

:::

## Props

| Prop        | Type                                               | Default | Description                                   |
| ----------- | -------------------------------------------------- | ------- | --------------------------------------------- |
| `variant`   | `text` \| `circular` \| `rectangular` \| `rounded` | `text`  | The shape variant of the skeleton.            |
| `effect`    | `pulse` \| `sheen` \| `none`                       | `pulse` | The animation effect applied to the skeleton. |
| `intensity` | `light` \| `medium`                                | `light` | The background intensity using design tokens. |
| `width`     | `string`                                           | `100%`  | The width of the skeleton (any CSS value).    |
| `height`    | `string`                                           | `1em`   | The height of the skeleton (any CSS value).   |

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

| Part                  | Description                        |
| --------------------- | ---------------------------------- |
| `ag-skeleton-wrapper` | The main skeleton wrapper element. |

## Events

| Event | Payload | Description       |
| ----- | ------- | ----------------- |
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
