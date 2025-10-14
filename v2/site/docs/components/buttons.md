# Buttons

The Button component provides a versatile, accessible button foundation with multiple variants, sizes, and shapes.

## Examples

<ButtonExamples />

<script setup>
import ButtonExamples from '../examples/ButtonExamples.vue'
</script>

## Usage

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

| Event | Payload | Description |
|-------|---------|-------------|
| `@toggle` | `{ pressed: boolean }` | Emitted when toggle button is clicked (only when `toggle` prop is `true`) |

**Note:** Standard button click events work as expected. The `@toggle` event is only emitted for toggle buttons.

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

```vue
<div class="flex-inline" role="group" aria-label="Actions">
  <VueButton grouped bordered>Edit</VueButton>
  <VueButton grouped bordered>Delete</VueButton>
  <VueButton grouped bordered>Share</VueButton>
</div>
```

## Form Integration

Buttons integrate seamlessly with forms using the `type` prop:

```vue
<form @submit.prevent="handleSubmit">
  <VueButton type="submit" variant="primary">Submit</VueButton>
  <VueButton type="reset">Reset</VueButton>
  <VueButton type="button" @click="cancel">Cancel</VueButton>
</form>
```

- **submit** - Submits the form
- **reset** - Resets form fields to defaults
- **button** - No default behavior (use with click handlers)
