# IconButtonFx

An icon button component with customizable animation effects that trigger on hover, click, or mount. IconButtonFx extends the base IconButton component with a rich set of visual effects to create engaging, interactive UI elements.

::: info Opt-in Component
IconButtonFx adds a few hundred lines of CSS for animation effects. It's ideal for marketing sites, landing pages, or when visual polish is a priority. For standard applications, you may prefer the core [IconButton component](/components/icon-button) without the animation overhead.
:::

<IconButtonFxExamples />

<script setup>
import IconButtonFxExamples from '../examples/IconButtonFxExamples.vue'
</script>

## Usage

::: details Vue

```vue
<template>
  <VueIconButtonFx
    fx="pulse"
    fx-ease="spring-md"
    variant="primary"
    label="Like"
  >
    <Heart />
  </VueIconButtonFx>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { VueIconButtonFx } from "agnosticui-core/icon-button-fx/vue";
import { Heart } from "lucide-vue-next";
export default defineComponent({
  components: { VueIconButtonFx, Heart },
});
</script>
```

:::

::: details React

```tsx
import { ReactIconButtonFx } from "agnosticui-core/icon-button-fx/react";
import { Heart } from "lucide-react";

export default function Example() {
  return (
    <ReactIconButtonFx
      fx="pulse"
      fxEase="spring-md"
      variant="primary"
      label="Like"
    >
      <Heart />
    </ReactIconButtonFx>
  );
}
```

:::

::: details Lit (Web Components)

```html
<script type="module">
  import "agnosticui-core/icon-button-fx";
  import { createElement } from "lucide";
  import { Heart } from "lucide";

  const iconButtonFx = document.querySelector("ag-icon-button-fx");
  iconButtonFx.icon = createElement(Heart);
</script>
<ag-icon-button-fx
  fx="pulse"
  fx-ease="spring-md"
  variant="primary"
  label="Like"
></ag-icon-button-fx>
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
- **wobble** - Rotate wobble
- **shake** - Horizontal shake

### Click/Active Effects

- **press-pop** - Quick press animation

### Mount Effects

- **slide-in** - Entrance animation

### Composite Effects

- **pulse-wobble** - Combines pulse and wobble effects sequentially

## Props

### FX Props

| Prop         | Type                                                                                                          | Default  | Description                                                         |
| ------------ | ------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------- |
| `fx`         | `string`                                                                                                      | `''`     | Effect name to apply                                                |
| `fxSpeed`    | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`                                                                        | `'md'`   | Animation duration speed                                            |
| `fxEase`     | `'ease' \| 'ease-in' \| 'ease-out' \| 'ease-in-out' \| 'bounce' \| 'spring-sm' \| 'spring-md' \| 'spring-lg'` | `'ease'` | Animation easing function                                           |
| `fxDisabled` | `boolean`                                                                                                     | `false`  | Disable FX effects entirely                                         |

### IconButton Props

| Prop       | Type                                                                                     | Default    | Description                                     |
| ---------- | ---------------------------------------------------------------------------------------- | ---------- | ----------------------------------------------- |
| `label`    | `string`                                                                                 | `''`       | Accessible label for the icon button (required) |
| `variant`  | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger' \| 'monochrome' \| 'ghost'` | `'ghost'`  | Visual style variant                            |
| `size`     | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`                                                   | `'md'`     | Size of the button                              |
| `type`     | `'button' \| 'submit' \| 'reset'`                                                        | `'button'` | Button type for form behavior                   |
| `disabled` | `boolean`                                                                                | `false`    | Disables the button                             |
| `pressed`  | `boolean`                                                                                | `false`    | Toggles aria-pressed state                      |
| `loading`  | `boolean`                                                                                | `false`    | Shows loading state                             |
| `unicode`  | `string`                                                                                 | `''`       | Unicode character to display as icon            |

## Events

| Event               | Payload                    | Description                              |
| ------------------- | -------------------------- | ---------------------------------------- |
| `icon-button-click` | `IconButtonClickEvent`     | Fired when icon button is clicked        |
| `icon-button-activate` | `IconButtonActivateEvent` | Fired when icon button is activated      |

## Examples

### Basic Effects

::: details Vue

```vue
<template>
  <VueIconButtonFx fx="pulse" variant="primary" label="Like">
    <Heart />
  </VueIconButtonFx>
  <VueIconButtonFx fx="bounce" variant="success" label="Download">
    <Download />
  </VueIconButtonFx>
  <VueIconButtonFx fx="wobble" variant="warning" label="Notifications">
    <Bell />
  </VueIconButtonFx>
  <VueIconButtonFx fx="shake" variant="danger" label="Delete">
    <Trash2 />
  </VueIconButtonFx>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { VueIconButtonFx } from "agnosticui-core/icon-button-fx/vue";
import { Heart, Download, Bell, Trash2 } from "lucide-vue-next";
export default defineComponent({
  components: { VueIconButtonFx, Heart, Download, Bell, Trash2 },
});
</script>
```

:::

::: details React

```tsx
import { ReactIconButtonFx } from "agnosticui-core/icon-button-fx/react";
import { Heart, Download, Bell, Trash2 } from "lucide-react";

export default function Example() {
  return (
    <>
      <ReactIconButtonFx fx="pulse" variant="primary" label="Like">
        <Heart />
      </ReactIconButtonFx>
      <ReactIconButtonFx fx="bounce" variant="success" label="Download">
        <Download />
      </ReactIconButtonFx>
      <ReactIconButtonFx fx="wobble" variant="warning" label="Notifications">
        <Bell />
      </ReactIconButtonFx>
      <ReactIconButtonFx fx="shake" variant="danger" label="Delete">
        <Trash2 />
      </ReactIconButtonFx>
    </>
  );
}
```

:::

### Speed Variations

Control animation speed with the `fxSpeed` prop:

::: details Vue

```vue
<VueIconButtonFx fx="pulse" fx-speed="xs" variant="primary" label="Extra fast">
  <Heart />
</VueIconButtonFx>
<VueIconButtonFx fx="pulse" fx-speed="sm" variant="primary" label="Fast">
  <Heart />
</VueIconButtonFx>
<VueIconButtonFx fx="pulse" fx-speed="md" variant="primary" label="Medium">
  <Heart />
</VueIconButtonFx>
<VueIconButtonFx fx="pulse" fx-speed="lg" variant="primary" label="Slow">
  <Heart />
</VueIconButtonFx>
<VueIconButtonFx fx="pulse" fx-speed="xl" variant="primary" label="Extra slow">
  <Heart />
</VueIconButtonFx>
```

:::

### Easing Functions

Customize the animation feel with different easing functions:

::: details Vue

```vue
<VueIconButtonFx fx="bounce" fx-ease="spring-sm" variant="primary" label="Spring Small">
  <Heart />
</VueIconButtonFx>
<VueIconButtonFx fx="bounce" fx-ease="spring-md" variant="primary" label="Spring Medium">
  <Heart />
</VueIconButtonFx>
<VueIconButtonFx fx="bounce" fx-ease="spring-lg" variant="primary" label="Spring Large">
  <Heart />
</VueIconButtonFx>
<VueIconButtonFx fx="bounce" fx-ease="bounce" variant="primary" label="Bounce">
  <Heart />
</VueIconButtonFx>
```

:::

### Composite Effect - Pulse Wobble

The special `pulse-wobble` effect creates a two-stage animation:

::: details Vue

```vue
<VueIconButtonFx fx="pulse-wobble" variant="primary" label="Favorite">
  <Heart />
</VueIconButtonFx>
```

:::

::: details React

```tsx
<ReactIconButtonFx fx="pulse-wobble" variant="primary" label="Favorite">
  <Heart />
</ReactIconButtonFx>
```

:::

::: details Lit (Web Components)

```html
<script type="module">
  import "agnosticui-core/icon-button-fx";
  import { createElement } from "lucide";
  import { Heart } from "lucide";

  const iconButtonFx = document.querySelector("#pulse-wobble");
  iconButtonFx.icon = createElement(Heart);
</script>
<ag-icon-button-fx
  id="pulse-wobble"
  fx="pulse-wobble"
  variant="primary"
  label="Favorite"
></ag-icon-button-fx>
```

:::

### Icon Scaling for Small Sizes

::: warning Important: Icon Scaling
For `xs` and `sm` button sizes, you need to ensure icons scale properly to fill the button's icon container.
:::

::: details Vue

```vue
<template>
  <!-- For xs and sm sizes, specify icon size explicitly -->
  <VueIconButtonFx fx="pulse" size="xs" variant="primary" label="Extra small">
    <Heart :size="12" />
  </VueIconButtonFx>
  <VueIconButtonFx fx="pulse" size="sm" variant="primary" label="Small">
    <Heart :size="16" />
  </VueIconButtonFx>

  <!-- md, lg, xl sizes work with default icon size -->
  <VueIconButtonFx fx="pulse" size="md" variant="primary" label="Medium">
    <Heart />
  </VueIconButtonFx>
  <VueIconButtonFx fx="pulse" size="lg" variant="primary" label="Large">
    <Heart />
  </VueIconButtonFx>
  <VueIconButtonFx fx="pulse" size="xl" variant="primary" label="Extra large">
    <Heart />
  </VueIconButtonFx>
</template>
```

:::

::: details React

```tsx
import { ReactIconButtonFx } from "agnosticui-core/icon-button-fx/react";
import { Heart } from "lucide-react";

export default function Example() {
  return (
    <>
      {/* For xs and sm sizes, specify width and height props */}
      <ReactIconButtonFx fx="pulse" size="xs" variant="primary" label="Extra small">
        <Heart width="100%" height="100%" />
      </ReactIconButtonFx>
      <ReactIconButtonFx fx="pulse" size="sm" variant="primary" label="Small">
        <Heart width="100%" height="100%" />
      </ReactIconButtonFx>

      {/* md, lg, xl sizes work with default icon size */}
      <ReactIconButtonFx fx="pulse" size="md" variant="primary" label="Medium">
        <Heart />
      </ReactIconButtonFx>
      <ReactIconButtonFx fx="pulse" size="lg" variant="primary" label="Large">
        <Heart />
      </ReactIconButtonFx>
      <ReactIconButtonFx fx="pulse" size="xl" variant="primary" label="Extra large">
        <Heart />
      </ReactIconButtonFx>
    </>
  );
}
```

:::

::: details Lit (Web Components)

```html
<script type="module">
  import "agnosticui-core/icon-button-fx";
  import { createElement } from "lucide";
  import { Heart } from "lucide";

  // For xs and sm sizes, specify width and height
  const iconXs = document.querySelector("#icon-xs");
  iconXs.icon = createElement(Heart, { width: '100%', height: '100%' });

  const iconSm = document.querySelector("#icon-sm");
  iconSm.icon = createElement(Heart, { width: '100%', height: '100%' });

  // md, lg, xl sizes work with default
  const iconMd = document.querySelector("#icon-md");
  iconMd.icon = createElement(Heart);
</script>

<ag-icon-button-fx id="icon-xs" fx="pulse" size="xs" variant="primary" label="Extra small"></ag-icon-button-fx>
<ag-icon-button-fx id="icon-sm" fx="pulse" size="sm" variant="primary" label="Small"></ag-icon-button-fx>
<ag-icon-button-fx id="icon-md" fx="pulse" size="md" variant="primary" label="Medium"></ag-icon-button-fx>
```

:::

### Common Use Cases

::: details Vue

```vue
<template>
  <!-- Navigation -->
  <VueIconButtonFx fx="grow" variant="ghost" label="Menu">
    <Menu />
  </VueIconButtonFx>
  <VueIconButtonFx fx="grow" variant="ghost" label="Home">
    <Home />
  </VueIconButtonFx>
  <VueIconButtonFx fx="grow" variant="ghost" label="Search">
    <Search />
  </VueIconButtonFx>

  <!-- Actions -->
  <VueIconButtonFx fx="pulse" variant="primary" label="Edit">
    <Edit />
  </VueIconButtonFx>
  <VueIconButtonFx fx="shake" variant="danger" label="Delete">
    <Trash2 />
  </VueIconButtonFx>
  <VueIconButtonFx fx="bounce" variant="success" label="Bookmark">
    <Bookmark />
  </VueIconButtonFx>

  <!-- Notifications -->
  <VueIconButtonFx fx="wobble" variant="warning" label="Notifications">
    <Bell />
  </VueIconButtonFx>
  <VueIconButtonFx fx="pulse-wobble" variant="danger" label="Important notification">
    <Bell />
  </VueIconButtonFx>

  <!-- Social -->
  <VueIconButtonFx fx="pulse" variant="ghost" label="Like">
    <ThumbsUp />
  </VueIconButtonFx>
  <VueIconButtonFx fx="bounce" variant="ghost" label="Comment">
    <MessageCircle />
  </VueIconButtonFx>
  <VueIconButtonFx fx="grow" variant="primary" label="Send">
    <Send />
  </VueIconButtonFx>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { VueIconButtonFx } from "agnosticui-core/icon-button-fx/vue";
import {
  Menu,
  Home,
  Search,
  Edit,
  Trash2,
  Bookmark,
  Bell,
  ThumbsUp,
  MessageCircle,
  Send,
} from "lucide-vue-next";
export default defineComponent({
  components: {
    VueIconButtonFx,
    Menu,
    Home,
    Search,
    Edit,
    Trash2,
    Bookmark,
    Bell,
    ThumbsUp,
    MessageCircle,
    Send,
  },
});
</script>
```

:::

### Disabling Effects

You can disable effects while keeping the button functional:

::: details Vue

```vue
<VueIconButtonFx fx="pulse" :fx-disabled="true" variant="primary" label="No animation">
  <Heart />
</VueIconButtonFx>
```

:::

::: details React

```tsx
<ReactIconButtonFx fx="pulse" fxDisabled={true} variant="primary" label="No animation">
  <Heart />
</ReactIconButtonFx>
```

:::

## Accessibility

- **Required Label**: The `label` prop is required for screen reader accessibility. It provides context for users who cannot see the icon.
- **Reduced Motion**: All effects automatically respect the `prefers-reduced-motion` media query. When users have reduced motion enabled in their OS settings, animations are disabled.
- **Keyboard Navigation**: IconButtonFx maintains full keyboard accessibility with proper focus states.
- **Screen Readers**: The component uses semantic HTML button elements with proper `aria-label` attributes that work correctly with assistive technologies.
- **Focus Indicators**: Clear focus states are maintained even with effects applied.
- **Color Contrast**: All button variants meet WCAG AA contrast requirements.
- **Icon-only Buttons**: Since these are icon-only buttons, the `label` prop is essential for accessibility. Never omit it.

## Best Practices

1. **Always Provide Labels**: Never omit the `label` prop. It's critical for screen reader users to understand the button's purpose.
2. **Choose Appropriate Effects**: Match effects to button purpose:
   - `shake` for destructive actions (delete, remove)
   - `pulse` or `pulse-wobble` for important actions (favorite, like)
   - `wobble` for notifications and alerts
   - `bounce` for positive actions (download, bookmark)
   - `grow` for navigation and general interactions
3. **Icon Scaling**: For `xs` and `sm` button sizes, always specify icon dimensions to ensure proper scaling within the button container.
4. **Performance**: Limit the number of animated icon buttons on a single page for optimal performance.
5. **Consistency**: Use consistent effects across similar actions in your application.
6. **Subtlety**: Start with medium speeds and springs; adjust based on user testing.
7. **Testing**: Always test with `prefers-reduced-motion` enabled to ensure graceful degradation.

## Browser Support

IconButtonFx uses modern CSS features and is supported in all evergreen browsers:

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

Animations gracefully degrade in older browsers while maintaining functionality.
