# Tooltip

A flexible, accessible tooltip component that displays contextual information on hover, focus, or click.

## Examples

<TooltipExamples />

<script setup>
import TooltipExamples from '../examples/TooltipExamples.vue'
</script>

## Usage

::: details Vue
```vue
<template>
  <section>
    <!-- Basic tooltip -->
    <VueTooltip content="This is helpful information">
      <VueButton>Hover me</VueButton>
    </VueTooltip>

    <!-- Different placements -->
    <VueTooltip content="Appears on the right" placement="right">
      <VueButton>Right tooltip</VueButton>
    </VueTooltip>

    <!-- Click trigger -->
    <VueTooltip content="Click to toggle" trigger="click">
      <VueButton>Click trigger</VueButton>
    </VueTooltip>

    <!-- With events -->
    <VueTooltip
      content="Event handling"
      @show="handleShow"
      @hide="handleHide"
    >
      <VueButton>With events</VueButton>
    </VueTooltip>

    <!-- Icon-only button -->
    <VueTooltip content="Edit item">
      <VueButton aria-label="Edit">
        <Pencil :size="18" />
      </VueButton>
    </VueTooltip>
  </section>
</template>

<script>
import VueTooltip from "agnosticui-core/tooltip/vue";
import VueButton from "agnosticui-core/button/vue";
import { Pencil } from "lucide-vue-next";

export default {
  components: { VueTooltip, VueButton, Pencil },
  methods: {
    handleShow() {
      console.log("Tooltip shown");
    },
    handleHide() {
      console.log("Tooltip hidden");
    },
  },
};
</script>
```
:::

::: details React
```tsx
import { ReactTooltip } from 'agnosticui-core/tooltip/react';
import { ReactButton } from 'agnosticui-core/button/react';
import { Pencil } from 'lucide-react';

export default function TooltipExample() {
  const handleShow = () => {
    console.log("Tooltip shown");
  };

  const handleHide = () => {
    console.log("Tooltip hidden");
  };

  return (
    <section>
      {/* Basic tooltip */}
      <ReactTooltip content="This is helpful information">
        <ReactButton>Hover me</ReactButton>
      </ReactTooltip>

      {/* Different placements */}
      <ReactTooltip content="Appears on the right" placement="right">
        <ReactButton>Right tooltip</ReactButton>
      </ReactTooltip>

      {/* Click trigger */}
      <ReactTooltip content="Click to toggle" trigger="click">
        <ReactButton>Click trigger</ReactButton>
      </ReactTooltip>

      {/* With events */}
      <ReactTooltip
        content="Event handling"
        onShow={handleShow}
        onHide={handleHide}
      >
        <ReactButton>With events</ReactButton>
      </ReactTooltip>

      {/* Icon-only button */}
      <ReactTooltip content="Edit item">
        <ReactButton aria-label="Edit">
          <Pencil size={18} />
        </ReactButton>
      </ReactTooltip>
    </section>
  );
}
```
:::

::: details Lit (Web Components)
```html
<script type="module">
  import 'agnosticui-core/tooltip';

  document.addEventListener('DOMContentLoaded', () => {
    const eventTooltip = document.querySelector('#event-tooltip');
    eventTooltip?.addEventListener('show', () => {
      console.log('Tooltip shown');
    });
    eventTooltip?.addEventListener('hide', () => {
      console.log('Tooltip hidden');
    });
  });
</script>

<section>
  <!-- Basic tooltip -->
  <ag-tooltip content="This is helpful information">
    <button>Hover me</button>
  </ag-tooltip>

  <!-- Different placements -->
  <ag-tooltip content="Appears on the right" placement="right">
    <button>Right tooltip</button>
  </ag-tooltip>

  <!-- Click trigger -->
  <ag-tooltip content="Click to toggle" trigger="click">
    <button>Click trigger</button>
  </ag-tooltip>

  <!-- With events -->
  <ag-tooltip id="event-tooltip" content="Event handling">
    <button>With events</button>
  </ag-tooltip>

  <!-- Icon-only button -->
  <ag-tooltip content="Edit item">
    <button aria-label="Edit">
      <svg width="18" height="18"><!-- icon --></svg>
    </button>
  </ag-tooltip>
</section>
```
:::

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `content` | `string` | `''` | The text content to display in the tooltip |
| `placement` | `'top' \| 'bottom' \| 'left' \| 'right' \| 'top-start' \| 'top-end' \| 'bottom-start' \| 'bottom-end' \| 'left-start' \| 'left-end' \| 'right-start' \| 'right-end'` | `'top'` | Placement of the tooltip relative to the trigger |
| `distance` | `number` | `8` | Distance in pixels between tooltip and trigger |
| `skidding` | `number` | `0` | Offset in pixels along the alignment axis |
| `trigger` | `string` | `'hover focus'` | Space-separated trigger events: 'hover', 'focus', 'click' |
| `disabled` | `boolean` | `false` | Prevents the tooltip from showing |

## Events

| Event | Detail | Description |
|-------|--------|-------------|
| `show` (Vue: `@show`, React: `onShow`) | `void` | Emitted when the tooltip becomes visible |
| `hide` (Vue: `@hide`, React: `onHide`) | `void` | Emitted when the tooltip becomes hidden |

## Accessibility

The Tooltip component implements the [WAI-ARIA Tooltip Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/):

- Uses `role="tooltip"` for proper screen reader identification
- Automatically sets `aria-describedby` on the trigger element
- Keyboard support: Focus shows tooltip, Escape dismisses it
- Always include `aria-label` on icon-only buttons
- Keep content brief (one sentence or less)
- Include 'focus' trigger for keyboard accessibility

## CSS Shadow Parts

| Part | Description |
| --- | --- |
| `ag-tooltip` | The main tooltip container element that displays the content |
| `ag-tooltip-arrow` | The arrow element that points to the trigger element |

### Customization Example

```css
.custom-tooltip::part(ag-tooltip) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
  padding: 12px 16px;
  font-weight: 600;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  max-width: 250px;
}

.custom-tooltip::part(ag-tooltip-arrow) {
  background: #667eea;
}
```

```html
<!-- Vue -->
<VueTooltip class="custom-tooltip" content="Customized tooltip">
  <VueButton>Hover me</VueButton>
</VueTooltip>

<!-- React -->
<ReactTooltip className="custom-tooltip" content="Customized tooltip">
  <ReactButton>Hover me</ReactButton>
</ReactTooltip>

<!-- Lit (Web Components) -->
<ag-tooltip class="custom-tooltip" content="Customized tooltip">
  <button>Hover me</button>
</ag-tooltip>
```
