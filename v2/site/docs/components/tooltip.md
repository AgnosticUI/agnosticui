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

    <!-- Programmatic control -->
    <VueTooltip ref="tooltipRef" content="Controlled tooltip">
      <VueButton>Controlled</VueButton>
    </VueTooltip>
    <VueButton @click="$refs.tooltipRef.show()">Show Tooltip</VueButton>

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
import { useRef } from 'react';
import { ReactTooltip } from 'agnosticui-core/tooltip/react';
import { ReactButton } from 'agnosticui-core/button/react';
import { Pencil } from 'lucide-react';

export default function TooltipExample() {
  const tooltipRef = useRef(null);

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

      {/* Programmatic control */}
      <ReactTooltip ref={tooltipRef} content="Controlled tooltip">
        <ReactButton>Controlled</ReactButton>
      </ReactTooltip>
      <ReactButton onClick={() => tooltipRef.current?.show()}>
        Show Tooltip
      </ReactButton>

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
    // Event handling
    const eventTooltip = document.querySelector('#event-tooltip');
    eventTooltip?.addEventListener('show', () => {
      console.log('Tooltip shown');
    });
    eventTooltip?.addEventListener('hide', () => {
      console.log('Tooltip hidden');
    });

    // Programmatic control
    const controlledTooltip = document.querySelector('#controlled-tooltip');
    document.querySelector('#show-btn')?.addEventListener('click', () => {
      controlledTooltip?.show();
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

  <!-- Programmatic control -->
  <ag-tooltip id="controlled-tooltip" content="Controlled tooltip">
    <button>Controlled</button>
  </ag-tooltip>
  <button id="show-btn">Show Tooltip</button>

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

## Methods

Access methods via template refs (Vue/React) or directly on the element (Lit):

| Method | Description |
|--------|-------------|
| `show()` | Programmatically show the tooltip |
| `hide()` | Programmatically hide the tooltip |
| `toggle()` | Toggle the tooltip visibility |

## Accessibility

The Tooltip component implements the [WAI-ARIA Tooltip Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/):

- Uses `role="tooltip"` for proper screen reader identification
- Automatically sets `aria-describedby` on the trigger element
- Keyboard support: Focus shows tooltip, Escape dismisses it
- Announces content when trigger element receives focus
- Non-intrusive with `pointer-events: none`

**Best Practices:**
- Keep content brief (one sentence or less)
- Always include `aria-label` on icon-only buttons
- Include 'focus' trigger for keyboard accessibility
- Don't hide essential information in tooltips
- Avoid interactive content inside tooltips

## Placement Options

The tooltip automatically adjusts position to stay within the viewport:

::: details Vue
```vue
<!-- Basic placements -->
<VueTooltip placement="top">Top</VueTooltip>
<VueTooltip placement="bottom">Bottom</VueTooltip>
<VueTooltip placement="left">Left</VueTooltip>
<VueTooltip placement="right">Right</VueTooltip>

<!-- Alignment variants -->
<VueTooltip placement="top-start">Top start</VueTooltip>
<VueTooltip placement="top-end">Top end</VueTooltip>

<!-- Custom positioning -->
<VueTooltip content="More distance" :distance="20">
  <VueButton>Custom distance</VueButton>
</VueTooltip>
```
:::

::: details React
```tsx
{/* Basic placements */}
<ReactTooltip placement="top">Top</ReactTooltip>
<ReactTooltip placement="bottom">Bottom</ReactTooltip>
<ReactTooltip placement="left">Left</ReactTooltip>
<ReactTooltip placement="right">Right</ReactTooltip>

{/* Alignment variants */}
<ReactTooltip placement="top-start">Top start</ReactTooltip>
<ReactTooltip placement="top-end">Top end</ReactTooltip>

{/* Custom positioning */}
<ReactTooltip content="More distance" distance={20}>
  <ReactButton>Custom distance</ReactButton>
</ReactTooltip>
```
:::

::: details Lit (Web Components)
```html
<!-- Basic placements -->
<ag-tooltip placement="top">Top</ag-tooltip>
<ag-tooltip placement="bottom">Bottom</ag-tooltip>
<ag-tooltip placement="left">Left</ag-tooltip>
<ag-tooltip placement="right">Right</ag-tooltip>

<!-- Alignment variants -->
<ag-tooltip placement="top-start">Top start</ag-tooltip>
<ag-tooltip placement="top-end">Top end</ag-tooltip>

<!-- Custom positioning -->
<ag-tooltip content="More distance" distance="20">
  <button>Custom distance</button>
</ag-tooltip>
```
:::

## Trigger Options

Control when the tooltip appears:

::: details Vue
```vue
<!-- Hover only -->
<VueTooltip trigger="hover">
  <VueButton>Hover only</VueButton>
</VueTooltip>

<!-- Focus only (keyboard users) -->
<VueTooltip trigger="focus">
  <VueButton>Focus only</VueButton>
</VueTooltip>

<!-- Click to toggle -->
<VueTooltip trigger="click">
  <VueButton>Click trigger</VueButton>
</VueTooltip>

<!-- Multiple triggers -->
<VueTooltip trigger="hover focus">
  <VueButton>Hover + Focus</VueButton>
</VueTooltip>
```
:::

::: details React
```tsx
{/* Hover only */}
<ReactTooltip trigger="hover">
  <ReactButton>Hover only</ReactButton>
</ReactTooltip>

{/* Focus only (keyboard users) */}
<ReactTooltip trigger="focus">
  <ReactButton>Focus only</ReactButton>
</ReactTooltip>

{/* Click to toggle */}
<ReactTooltip trigger="click">
  <ReactButton>Click trigger</ReactButton>
</ReactTooltip>

{/* Multiple triggers */}
<ReactTooltip trigger="hover focus">
  <ReactButton>Hover + Focus</ReactButton>
</ReactTooltip>
```
:::

::: details Lit (Web Components)
```html
<!-- Hover only -->
<ag-tooltip trigger="hover">
  <button>Hover only</button>
</ag-tooltip>

<!-- Focus only (keyboard users) -->
<ag-tooltip trigger="focus">
  <button>Focus only</button>
</ag-tooltip>

<!-- Click to toggle -->
<ag-tooltip trigger="click">
  <button>Click trigger</button>
</ag-tooltip>

<!-- Multiple triggers -->
<ag-tooltip trigger="hover focus">
  <button>Hover + Focus</button>
</ag-tooltip>
```
:::
