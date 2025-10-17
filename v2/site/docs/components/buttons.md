# Buttons

The Button component provides a versatile, accessible button foundation with multiple variants, sizes, and shapes.

## Examples

<ButtonExamples />

<script setup>
import ButtonExamples from '../examples/ButtonExamples.vue'
</script>

## Usage

::: details Vue
```vue
<template>
  <section>
    <!-- Basic button -->
    <VueButton>Click me</VueButton>

    <!-- Variants -->
    <VueButton variant="primary">Primary</VueButton>
    <VueButton variant="success">Success</VueButton>
    <VueButton variant="danger">Danger</VueButton>

    <!-- Sizes -->
    <VueButton size="sm">Small</VueButton>
    <VueButton size="lg">Large</VueButton>

    <!-- Shapes -->
    <VueButton shape="rounded">Rounded</VueButton>
    <VueButton shape="capsule">Capsule</VueButton>
    <VueButton shape="circle">C</VueButton>

    <!-- Styles -->
    <VueButton bordered variant="primary">Bordered</VueButton>
    <VueButton ghost variant="primary">Ghost</VueButton>
    <VueButton link>Link Style</VueButton>

    <!-- States -->
    <VueButton disabled>Disabled</VueButton>
    <VueButton loading>Loading</VueButton>

    <!-- Toggle button -->
    <VueButton
      toggle
      :pressed="isPressed"
      @toggle="handleToggle"
    >Toggle Me</VueButton>

    <!-- Form integration -->
    <VueButton type="submit" variant="primary">Submit</VueButton>
  </section>
</template>

<script>
import VueButton from "agnosticui-core/button/vue";

export default {
  name: "ButtonExample",
  components: { VueButton },
  data() {
    return {
      isPressed: false,
    };
  },
  methods: {
    handleToggle(event) {
      this.isPressed = event.pressed;
      console.log("Button toggled:", event.pressed);
    },
  },
};
</script>
```
:::

::: details React
```tsx
import { useState } from 'react';
import { ReactButton } from 'agnosticui-core/button/react';

export default function ButtonExample() {
  const [isPressed, setIsPressed] = useState(false);

  const handleToggle = (event: CustomEvent) => {
    setIsPressed(event.detail.pressed);
    console.log("Button toggled:", event.detail.pressed);
  };

  return (
    <section>
      {/* Basic button */}
      <ReactButton>Click me</ReactButton>

      {/* Variants */}
      <ReactButton variant="primary">Primary</ReactButton>
      <ReactButton variant="success">Success</ReactButton>
      <ReactButton variant="danger">Danger</ReactButton>

      {/* Sizes */}
      <ReactButton size="sm">Small</ReactButton>
      <ReactButton size="lg">Large</ReactButton>

      {/* Shapes */}
      <ReactButton shape="rounded">Rounded</ReactButton>
      <ReactButton shape="capsule">Capsule</ReactButton>
      <ReactButton shape="circle">C</ReactButton>

      {/* Styles */}
      <ReactButton bordered variant="primary">Bordered</ReactButton>
      <ReactButton ghost variant="primary">Ghost</ReactButton>
      <ReactButton link>Link Style</ReactButton>

      {/* States */}
      <ReactButton disabled>Disabled</ReactButton>
      <ReactButton loading>Loading</ReactButton>

      {/* Toggle button */}
      <ReactButton
        toggle
        pressed={isPressed}
        onToggle={handleToggle}
      >
        Toggle Me
      </ReactButton>

      {/* Form integration */}
      <ReactButton type="submit" variant="primary">Submit</ReactButton>
    </section>
  );
}
```
:::

::: details Lit (Web Components)
```html
<script type="module">
  import 'agnosticui-core/button';

  document.addEventListener('DOMContentLoaded', () => {
    // Toggle button example
    const toggleButton = document.querySelector('#toggle-button');
    let isPressed = false;

    toggleButton?.addEventListener('toggle', (event) => {
      isPressed = event.detail.pressed;
      console.log('Button toggled:', isPressed);
    });
  });
</script>

<section>
  <!-- Basic button -->
  <ag-button>Click me</ag-button>

  <!-- Variants -->
  <ag-button variant="primary">Primary</ag-button>
  <ag-button variant="success">Success</ag-button>
  <ag-button variant="danger">Danger</ag-button>

  <!-- Sizes -->
  <ag-button size="sm">Small</ag-button>
  <ag-button size="lg">Large</ag-button>

  <!-- Shapes -->
  <ag-button shape="rounded">Rounded</ag-button>
  <ag-button shape="capsule">Capsule</ag-button>
  <ag-button shape="circle">C</ag-button>

  <!-- Styles -->
  <ag-button bordered variant="primary">Bordered</ag-button>
  <ag-button ghost variant="primary">Ghost</ag-button>
  <ag-button link>Link Style</ag-button>

  <!-- States -->
  <ag-button disabled>Disabled</ag-button>
  <ag-button loading>Loading</ag-button>

  <!-- Toggle button -->
  <ag-button id="toggle-button" toggle>Toggle Me</ag-button>

  <!-- Form integration -->
  <ag-button type="submit" variant="primary">Submit</ag-button>
</section>
```
:::

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger' \| ''` | `''` | Visual color variant |
| `size` | `'x-sm' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Size of the button |
| `shape` | `'capsule' \| 'rounded' \| 'circle' \| 'square' \| 'rounded-square' \| ''` | `''` | Shape variant |
| `bordered` | `boolean` | `false` | Outline style with transparent background |
| `ghost` | `boolean` | `false` | Minimal style with transparent background |
| `link` | `boolean` | `false` | Text link style with underline on hover |
| `grouped` | `boolean` | `false` | Style for buttons in a group (removes inner borders) |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML button type |
| `disabled` | `boolean` | `false` | Disabled state |
| `loading` | `boolean` | `false` | Loading/busy state (disables interaction) |
| `toggle` | `boolean` | `false` | Enable toggle button mode |
| `pressed` | `boolean` | `false` | Pressed state for toggle buttons |
| `ariaLabel` | `string` | `''` | Accessible label (use when button has no text) |
| `ariaDescribedby` | `string` | `''` | ID of element describing the button |

## Events

| Event | Detail | Description |
|-------|---------|-------------|
| `toggle` (Vue: `@toggle`, React: `onToggle`) | `{ pressed: boolean }` | Emitted when toggle button is clicked (only when `toggle` prop is `true`) |

**Note:** Standard button click events work as expected. The `toggle` event is only emitted for toggle buttons.

## Accessibility

The Button component implements the [WAI-ARIA Button pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/):

- Uses semantic `<button>` element
- Full keyboard support (Space/Enter activation via browser defaults)
- Proper ARIA states:
  - `aria-disabled` for disabled state
  - `aria-busy` for loading state
  - `aria-pressed` for toggle buttons
- Focus management with clear visual indicators
- Accessible name via button text content or `ariaLabel` prop
- Additional context via `ariaDescribedby` prop

### Toggle Buttons

Toggle buttons follow the [WAI-ARIA Toggle Button pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/#toggle_button):
- Set `toggle` prop to enable toggle mode
- `aria-pressed` communicates state to assistive technologies
- Visual and programmatic state synchronization

## Variant Guide

### Color Variants
- **primary** - Primary action (blue)
- **secondary** - Secondary action (neutral)
- **success** - Positive action (green)
- **warning** - Warning action (yellow)
- **danger** - Destructive action (red)

### Style Variants
- **bordered** - Outline style, fills on hover
- **ghost** - Minimal padding, transparent background
- **link** - Text link appearance with underline

### Shape Variants
- **rounded** - Rounded corners
- **capsule** - Fully rounded ends (pill shape)
- **circle** - Perfect circle (for icons/single characters)
- **square** - Sharp corners, equal width/height
- **rounded-square** - Rounded corners, equal width/height

## Grouped Buttons

Use the `grouped` prop to create connected button groups:

::: details Vue
```vue
<div class="flex-inline" role="group" aria-label="Actions">
  <VueButton grouped bordered>Edit</VueButton>
  <VueButton grouped bordered>Delete</VueButton>
  <VueButton grouped bordered>Share</VueButton>
</div>
```
:::

::: details React
```tsx
<div className="flex-inline" role="group" aria-label="Actions">
  <ReactButton grouped bordered>Edit</ReactButton>
  <ReactButton grouped bordered>Delete</ReactButton>
  <ReactButton grouped bordered>Share</ReactButton>
</div>
```
:::

::: details Lit (Web Components)
```html
<div class="flex-inline" role="group" aria-label="Actions">
  <ag-button grouped bordered>Edit</ag-button>
  <ag-button grouped bordered>Delete</ag-button>
  <ag-button grouped bordered>Share</ag-button>
</div>
```
:::

## Form Integration

Buttons integrate seamlessly with forms using the `type` prop:

::: details Vue
```vue
<form @submit.prevent="handleSubmit">
  <VueButton type="submit" variant="primary">Submit</VueButton>
  <VueButton type="reset">Reset</VueButton>
  <VueButton type="button" @click="cancel">Cancel</VueButton>
</form>
```
:::

::: details React
```tsx
<form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
  <ReactButton type="submit" variant="primary">Submit</ReactButton>
  <ReactButton type="reset">Reset</ReactButton>
  <ReactButton type="button" onClick={cancel}>Cancel</ReactButton>
</form>
```
:::

::: details Lit (Web Components)
```html
<form id="myForm">
  <ag-button type="submit" variant="primary">Submit</ag-button>
  <ag-button type="reset">Reset</ag-button>
  <ag-button type="button" id="cancel-button">Cancel</ag-button>
</form>

<script type="module">
  document.getElementById('myForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    handleSubmit();
  });
  
  document.getElementById('cancel-button')?.addEventListener('click', cancel);
</script>
```
:::

### Button Types

- **submit** - Submits the form
- **reset** - Resets form fields to defaults
- **button** - No default behavior (use with click handlers)

## CSS Shadow Parts

Shadow Parts allow you to style internal elements of the button from outside the shadow DOM using the `::part()` CSS selector.

| Part | Description |
|------|-------------|
| `ag-button` | The internal `<button>` element |

### Customization Example

```css
/* Customize the button element */
ag-button::part(ag-button) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 50px;
  padding: 1rem 2rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  transition: all 0.3s ease;
}

ag-button::part(ag-button):hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
}
```
