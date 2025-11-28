# ButtonFx

An enhanced button component with customizable animation effects that trigger on hover, click, or mount. ButtonFx extends the base Button component with a rich set of visual effects to create engaging, interactive UI elements.

::: info Opt-in Component
ButtonFx adds a few hundred lines of CSS for animation effects. It's ideal for marketing sites, landing pages, or when visual polish is a priority. For standard applications, you may prefer the core [Button component](/components/button) without the animation overhead.
:::

<ButtonFxExamples />

<script setup>
import ButtonFxExamples from '../examples/ButtonFxExamples.vue'
</script>

## Usage

::: details Vue

```vue
<template>
  <VueButtonFx
    fx="bounce"
    fx-ease="spring-md"
    variant="primary"
    shape="rounded"
  >
    Hover Me
  </VueButtonFx>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { VueButtonFx } from "agnosticui-core/button-fx/vue";
export default defineComponent({
  components: { VueButtonFx },
});
</script>
```

:::

::: details React

```tsx
import { ReactButtonFx } from "agnosticui-core/button-fx/react";

export default function Example() {
  return (
    <ReactButtonFx
      fx="bounce"
      fxEase="spring-md"
      variant="primary"
      shape="rounded"
    >
      Hover Me
    </ReactButtonFx>
  );
}
```

:::

::: details Lit (Web Components)

```html
<script type="module">
  import "agnosticui-core/button-fx";
</script>
<ag-button-fx fx="bounce" fx-ease="spring-md" variant="primary" shape="rounded">
  Hover Me
</ag-button-fx>
```

:::

## Available Effects

### Hover Effects

- **bounce** - Vertical pop animation
- **pulse** - Scale grow effect
- **jelly** - Squash and stretch animation
- **grow** - Scale up
- **shrink** - Scale down
- **push** - Press down effect
- **bg-slide** - Background slides up
- **side-slide** - Background wipes left to right
- **wobble** - Rotate wobble
- **shake** - Horizontal shake

### Click/Active Effects

- **press-pop** - Quick press animation
- **press-shadow** - Shadow press effect

### Mount Effects

- **slide-in** - Entrance animation

### Composite Effects

- **pulse-wobble** - Combines pulse and wobble effects sequentially

## Props

### FX Props

| Prop         | Type                                                                                                          | Default  | Description                                                         |
| ------------ | ------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------- |
| `fx`         | `string \| string[]`                                                                                          | `''`     | Effect name(s) to apply. Can be a single effect or array of effects |
| `fxSpeed`    | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`                                                                        | `'md'`   | Animation duration speed                                            |
| `fxEase`     | `'ease' \| 'ease-in' \| 'ease-out' \| 'ease-in-out' \| 'bounce' \| 'spring-sm' \| 'spring-md' \| 'spring-lg'` | `'ease'` | Animation easing function                                           |
| `fxDisabled` | `boolean`                                                                                                     | `false`  | Disable FX effects entirely                                         |

### Button Props

| Prop       | Type                                                                             | Default    | Description                                          |
| ---------- | -------------------------------------------------------------------------------- | ---------- | ---------------------------------------------------- |
| `variant`  | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger' \| 'monochrome'` | `''`       | Visual style of the button                           |
| `size`     | `'x-sm' \| 'sm' \| 'md' \| 'lg' \| 'xl'`                                         | `'md'`     | Size of the button                                   |
| `shape`    | `'capsule' \| 'rounded' \| 'circle' \| 'square' \| 'rounded-square'`             | `''`       | Shape of the button                                  |
| `bordered` | `boolean`                                                                        | `false`    | Applies a bordered style with transparent background |
| `ghost`    | `boolean`                                                                        | `false`    | Minimal button with transparent background           |
| `link`     | `boolean`                                                                        | `false`    | Link-style button with underline on hover            |
| `type`     | `'button' \| 'submit' \| 'reset'`                                                | `'button'` | Button type for form behavior                        |
| `disabled` | `boolean`                                                                        | `false`    | Disables the button                                  |
| `loading`  | `boolean`                                                                        | `false`    | Shows a loading state                                |

## Events

| Event    | Payload       | Description                          |
| -------- | ------------- | ------------------------------------ |
| `toggle` | `CustomEvent` | Fired when button is clicked/toggled |
| `focus`  | `FocusEvent`  | Fired when button receives focus     |
| `blur`   | `FocusEvent`  | Fired when button loses focus        |

## Examples

### Effect Combinations

You can combine multiple effects by passing an array:

::: details Vue

```vue
<VueButtonFx :fx="['pulse', 'glow']" variant="primary">
  Multiple Effects
</VueButtonFx>
```

:::

::: details React

```tsx
<ReactButtonFx fx={["pulse", "glow"]} variant="primary">
  Multiple Effects
</ReactButtonFx>
```

:::

### Speed Variations

Control animation speed with the `fxSpeed` prop:

::: details Vue

```vue
<VueButtonFx fx="pulse" fx-speed="xs" variant="primary">XS Speed</VueButtonFx>
<VueButtonFx fx="pulse" fx-speed="sm" variant="primary">SM Speed</VueButtonFx>
<VueButtonFx fx="pulse" fx-speed="md" variant="primary">MD Speed</VueButtonFx>
<VueButtonFx fx="pulse" fx-speed="lg" variant="primary">LG Speed</VueButtonFx>
<VueButtonFx fx="pulse" fx-speed="xl" variant="primary">XL Speed</VueButtonFx>
```

:::

### Easing Functions

Customize the animation feel with different easing functions:

::: details Vue

```vue
<VueButtonFx
  fx="bounce"
  fx-ease="spring-sm"
  variant="primary"
>Spring Small</VueButtonFx>
<VueButtonFx
  fx="bounce"
  fx-ease="spring-md"
  variant="primary"
>Spring Medium</VueButtonFx>
<VueButtonFx
  fx="bounce"
  fx-ease="spring-lg"
  variant="primary"
>Spring Large</VueButtonFx>
<VueButtonFx fx="bounce" fx-ease="bounce" variant="primary">Bounce</VueButtonFx>
```

:::

### Composite Effect - Pulse Wobble

The special `pulse-wobble` effect creates a two-stage animation:

::: details Vue

```vue
<VueButtonFx fx="pulse-wobble" variant="primary" shape="rounded">
  Pulse → Wobble
</VueButtonFx>
```

:::

::: details React

```tsx
<ReactButtonFx fx="pulse-wobble" variant="primary" shape="rounded">
  Pulse → Wobble
</ReactButtonFx>
```

:::

::: details Lit (Web Components)

```html
<ag-button-fx fx="pulse-wobble" variant="primary" shape="rounded">
  Pulse → Wobble
</ag-button-fx>
```

:::

### Disabling Effects

You can disable effects while keeping the button functional:

::: details Vue

```vue
<VueButtonFx fx="bounce" :fx-disabled="true" variant="primary">
  No Animation
</VueButtonFx>
```

:::

## Accessibility

- **Reduced Motion**: All effects automatically respect the `prefers-reduced-motion` media query. When users have reduced motion enabled in their OS settings, animations are disabled.
- **Keyboard Navigation**: ButtonFx maintains full keyboard accessibility with proper focus states.
- **Screen Readers**: The component uses semantic HTML button elements that work correctly with assistive technologies.
- **Focus Indicators**: Clear focus states are maintained even with effects applied.
- **Color Contrast**: All button variants meet WCAG AA contrast requirements.

## Best Practices

1. **Choose Appropriate Effects**: Match effects to button purpose (e.g., `shake` for errors, `pulse` for primary actions)
2. **Performance**: Limit the number of animated buttons on a single page for optimal performance
3. **Consistency**: Use consistent effects across similar actions in your application
4. **Subtlety**: Start with medium speeds and springs; adjust based on user testing
5. **Testing**: Always test with `prefers-reduced-motion` enabled to ensure graceful degradation

## Browser Support

ButtonFx uses modern CSS features and is supported in all evergreen browsers:

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

Animations gracefully degrade in older browsers while maintaining functionality.
