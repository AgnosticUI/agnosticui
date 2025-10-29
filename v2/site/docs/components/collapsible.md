# Collapsible

A collapsible is a standalone component that allows users to show and hide a single section of content. Unlike accordions which manage multiple items, collapsibles work independently and are ideal for revealing optional information, FAQs, or additional details on demand.

## Examples

<CollapsibleExamples />

<script setup>
import CollapsibleExamples from '../examples/CollapsibleExamples.vue'
</script>

## Usage

::: details Vue
```vue
<template>
  <section>
    <!-- Basic collapsible -->
    <VueCollapsible>
      <template #summary>
        <span>Click to expand</span>
      </template>
      <p>This is the collapsible content that can be shown or hidden.</p>
    </VueCollapsible>

    <!-- Open by default -->
    <VueCollapsible open>
      <template #summary>
        <span>Already expanded</span>
      </template>
      <p>This collapsible starts in an open state.</p>
    </VueCollapsible>

    <!-- With border and shadow -->
    <VueCollapsible
      is-bordered
      is-shadow
    >
      <template #summary>
        <span>Bordered with shadow</span>
      </template>
      <p>This collapsible has both border and shadow styling.</p>
    </VueCollapsible>

    <!-- With X indicator -->
    <VueCollapsible
      use-x
      @toggle="handleToggle"
    >
      <template #summary>
        <span>X Indicator</span>
      </template>
      <p>Plus icon that transforms into an X when opened</p>
    </VueCollapsible>

    <!-- With plus/minus indicator -->
    <VueCollapsible
      use-minus
      @toggle="handleToggle"
    >
      <template #summary>
        <span>Plus/Minus Indicator</span>
      </template>
      <p>Plus icon that changes to minus when opened</p>
    </VueCollapsible>

    <!-- No indicator -->
    <VueCollapsible no-indicator>
      <template #summary>
        <span>No indicator</span>
      </template>
      <p>This collapsible has no indicator icon at all.</p>
    </VueCollapsible>
  </section>
</template>

<script>
import { VueCollapsible } from "agnosticui-core/collapsible/vue";

export default {
  components: {
    VueCollapsible,
  },
  methods: {
    handleToggle(event) {
      const newOpenState = event.target.open;
      console.log("Collapsible toggled:", newOpenState);
    },
  },
};
</script>
```
:::

::: details React
```tsx
import { ReactCollapsible } from 'agnosticui-core/collapsible/react';

export default function CollapsibleExample() {
  const handleToggle = (event: CustomEvent) => {
    console.log("Collapsible toggled:", event.detail.open);
  };

  return (
    <section>
      {/* Basic collapsible */}
      <ReactCollapsible>
        <span slot="summary">Click to expand</span>
        <p>This is the collapsible content that can be shown or hidden.</p>
      </ReactCollapsible>

      {/* Open by default */}
      <ReactCollapsible open={true}>
        <span slot="summary">Already expanded</span>
        <p>This collapsible starts in an open state.</p>
      </ReactCollapsible>

      {/* With border and shadow */}
      <ReactCollapsible isBordered isShadow>
        <span slot="summary">Bordered with shadow</span>
        <p>This collapsible has both border and shadow styling.</p>
      </ReactCollapsible>

      {/* With X indicator */}
      <ReactCollapsible useX onToggle={handleToggle}>
        <span slot="summary">X Indicator</span>
        <p>Plus icon that transforms into an X when opened</p>
      </ReactCollapsible>

      {/* With plus/minus indicator */}
      <ReactCollapsible useMinus onToggle={handleToggle}>
        <span slot="summary">Plus/Minus Indicator</span>
        <p>Plus icon that changes to minus when opened</p>
      </ReactCollapsible>

      {/* No indicator */}
      <ReactCollapsible noIndicator>
        <span slot="summary">No indicator</span>
        <p>This collapsible has no indicator icon at all.</p>
      </ReactCollapsible>
    </section>
  );
}
```
:::

::: details Lit (Web Components)
```html
<script type="module">
  import 'agnosticui-core/collapsible';

  document.addEventListener('DOMContentLoaded', () => {
    const collapsibles = document.querySelectorAll('ag-collapsible');

    collapsibles.forEach(collapsible => {
      collapsible.addEventListener('toggle', (event) => {
        console.log('Collapsible toggled:', event.detail.open);
      });
    });
  });
</script>

<section>
  <!-- Basic collapsible -->
  <ag-collapsible>
    <span slot="summary">Click to expand</span>
    <p>This is the collapsible content that can be shown or hidden.</p>
  </ag-collapsible>

  <!-- Open by default -->
  <ag-collapsible open>
    <span slot="summary">Already expanded</span>
    <p>This collapsible starts in an open state.</p>
  </ag-collapsible>

  <!-- With border and shadow -->
  <ag-collapsible is-bordered is-shadow>
    <span slot="summary">Bordered with shadow</span>
    <p>This collapsible has both border and shadow styling.</p>
  </ag-collapsible>

  <!-- With X indicator -->
  <ag-collapsible id="x-indicator" use-x>
    <span slot="summary">X Indicator</span>
    <p>Plus icon that transforms into an X when opened</p>
  </ag-collapsible>

  <!-- With plus/minus indicator -->
  <ag-collapsible id="minus-indicator" use-minus>
    <span slot="summary">Plus/Minus Indicator</span>
    <p>Plus icon that changes to minus when opened</p>
  </ag-collapsible>

  <!-- No indicator -->
  <ag-collapsible no-indicator>
    <span slot="summary">No indicator</span>
    <p>This collapsible has no indicator icon at all.</p>
  </ag-collapsible>
</section>
```
:::

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | `false` | Whether the collapsible is expanded |
| `isBordered` | `boolean` | `false` | Whether to apply border styling |
| `isShadow` | `boolean` | `false` | Whether to apply box-shadow styling |
| `useChevron` | `boolean` | `true` | Use chevron indicator (default) - rotates 180° when open |
| `useX` | `boolean` | `false` | Use X indicator - plus rotated 180° initially, becomes X at 45° when open |
| `useMinus` | `boolean` | `false` | Use plus/minus indicator - plus transitions to minus when open |
| `noIndicator` | `boolean` | `false` | Hide the indicator completely |

**Note:** Indicator props are mutually exclusive with priority: `noIndicator` > `useX` > `useMinus` > `useChevron` (default)

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `@toggle` (Vue) / `onToggle` (React) / `toggle` (Lit) | `{ open: boolean }` | Emitted when the collapsible is toggled between open and closed states |

## CSS Shadow Parts

The Collapsible exposes CSS Shadow Parts that allow you to customize internal elements without breaking encapsulation:

| Part | Description | Element |
|------|-------------|---------|
| `ag-collapsible-details` | The main details element container | `<details>` |
| `ag-collapsible-summary` | The interactive summary/trigger element | `<summary>` |
| `ag-collapsible-indicator` | The expand/collapse indicator icon wrapper | `<span>` |
| `ag-collapsible-content` | The collapsible content region | `<div>` |

### Example Usage

```css
/* Customize with gradient background */
ag-collapsible::part(ag-collapsible-details) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  overflow: hidden;
}

/* Style the summary/trigger */
ag-collapsible::part(ag-collapsible-summary) {
  color: white;
  font-weight: 600;
  padding: 1.5rem;
  cursor: pointer;
}

/* Customize the indicator */
ag-collapsible::part(ag-collapsible-indicator) {
  filter: brightness(0) invert(1);
}

/* Style the content area */
ag-collapsible::part(ag-collapsible-content) {
  color: white;
  background: rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
}

/* Minimal style with left accent */
ag-collapsible.minimal::part(ag-collapsible-summary) {
  background: #f9fafb;
  border-left: 4px solid #3b82f6;
  padding: 1rem 1rem 1rem 1.5rem;
}

ag-collapsible.minimal::part(ag-collapsible-content) {
  background: #ffffff;
  padding: 1rem 1rem 1rem 1.5rem;
}
```

See the [Storybook CSS Parts Customization story](https://github.com/AgnosticUI/agnosticui) for more examples.

## Accessibility

The Collapsible is built on the native HTML `<details>` and `<summary>` elements, providing excellent accessibility by default:

- Uses semantic HTML `<details>` and `<summary>` elements
- Native keyboard support:
  - **Space/Enter**: Toggle the collapsible
  - Screen readers can interact with it naturally
- The `open` attribute communicates state to assistive technologies
- Focus indicators are clearly visible for keyboard navigation
- No additional ARIA attributes needed due to native semantics

## Progressive Enhancement

The Collapsible is designed with progressive enhancement in mind:

- Built on native `<details>` and `<summary>` HTML elements
- Content is accessible even if JavaScript fails to load
- Core expand/collapse functionality works without JavaScript
- JavaScript enhancement adds custom indicators and smoother animations
- Gracefully degrades to native browser behavior
