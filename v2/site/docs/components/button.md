# Button

<AlphaWarning />


The Button component provides a versatile, accessible button foundation with multiple variants, sizes, and shapes.

## Examples

<FrameworkExample
  component="button"
  :vue-code="vueCode"
  :lit-code="litCode"
>
  <template #vue>
    <ButtonExamples />
  </template>
  <template #lit>
    <button-lit-examples></button-lit-examples>
  </template>
</FrameworkExample>

<script setup>
import AlphaWarning from '../components/AlphaWarning.vue'
import ButtonExamples from '../examples/ButtonExamples.vue'
import FrameworkExample from '../.vitepress/theme/components/FrameworkExample.vue'
import '../examples/ButtonLitExamples.js'
import vueCode from '../examples/ButtonExamples.vue?raw'
import litCode from '../examples/ButtonLitExamples.js?raw'
</script>

## Usage

::: tip
The framework examples below `import` AgnosticUI as an `npm` package. Alternatively, you can use the **CLI for complete control, AI/LLM visibility, and full code ownership**:
```bash
npx ag init --framework FRAMEWORK # react, vue, lit, svelte, etc.
npx ag add Button
```
The CLI copies source code directly into your project, giving you full visibility and control. After running `npx ag add`, you'll receive exact import instructions.
:::

::: details Vue
```vue
<template>
  <section>
    <VueButton>Click me</VueButton>

    <VueButton variant="primary">Primary</VueButton>
    <VueButton variant="success">Success</VueButton>
    <VueButton variant="danger">Danger</VueButton>
    <VueButton variant="monochrome">Monochrome</VueButton>

    <VueButton size="sm">Small</VueButton>
    <VueButton size="lg">Large</VueButton>

    <VueButton shape="rounded">Rounded</VueButton>
    <VueButton shape="capsule">Capsule</VueButton>
    <VueButton shape="circle">C</VueButton>

    <VueButton bordered variant="primary">Bordered</VueButton>
    <VueButton ghost variant="primary">Ghost</VueButton>
    <VueButton link>Link Style</VueButton>

    <VueButton disabled>Disabled</VueButton>
    <VueButton loading>Loading</VueButton>

    <VueButton
      toggle
      :pressed="isPressed"
      @toggle="handleToggle"
    >Toggle Me</VueButton>

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
      <ReactButton>Click me</ReactButton>

      <ReactButton variant="primary">Primary</ReactButton>
      <ReactButton variant="success">Success</ReactButton>
      <ReactButton variant="danger">Danger</ReactButton>
      <ReactButton variant="monochrome">Monochrome</ReactButton>

      <ReactButton size="sm">Small</ReactButton>
      <ReactButton size="lg">Large</ReactButton>

      <ReactButton shape="rounded">Rounded</ReactButton>
      <ReactButton shape="capsule">Capsule</ReactButton>
      <ReactButton shape="circle">C</ReactButton>

      <ReactButton bordered variant="primary">Bordered</ReactButton>
      <ReactButton ghost variant="primary">Ghost</ReactButton>
      <ReactButton link>Link Style</ReactButton>

      <ReactButton disabled>Disabled</ReactButton>
      <ReactButton loading>Loading</ReactButton>

      <ReactButton
        toggle
        pressed={isPressed}
        onToggle={handleToggle}
      >
        Toggle Me
      </ReactButton>

      <ReactButton type="submit" variant="primary">Submit</ReactButton>
    </section>
  );
}
```
:::

::: details Lit (Web Components)
```typescript
import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import 'agnosticui-core/button';

@customElement('button-example')
export class ButtonExample extends LitElement {
  @state() private isPressed = false;

  static styles = css`
    :host {
      display: block;
    }
    section {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
  `;

  firstUpdated() {
    // Set up event listener for toggle button in the shadow DOM
    const toggleButton = this.shadowRoot?.querySelector('#toggle-button');
    toggleButton?.addEventListener('toggle', (event: Event) => {
      const customEvent = event as CustomEvent;
      this.isPressed = customEvent.detail.pressed;
      console.log('Button toggled:', this.isPressed);
    });
  }

  render() {
    return html`
      <section>
        <ag-button>Click me</ag-button>

        <ag-button variant="primary">Primary</ag-button>
        <ag-button variant="success">Success</ag-button>
        <ag-button variant="danger">Danger</ag-button>
        <ag-button variant="monochrome">Monochrome</ag-button>

        <ag-button size="sm">Small</ag-button>
        <ag-button size="lg">Large</ag-button>

        <ag-button shape="rounded">Rounded</ag-button>
        <ag-button shape="capsule">Capsule</ag-button>
        <ag-button shape="circle">C</ag-button>

        <ag-button bordered variant="primary">Bordered</ag-button>
        <ag-button ghost variant="primary">Ghost</ag-button>
        <ag-button link>Link Style</ag-button>

        <ag-button disabled>Disabled</ag-button>
        <ag-button loading>Loading</ag-button>

        <ag-button id="toggle-button" toggle>Toggle Me</ag-button>

        <ag-button type="submit" variant="primary">Submit</ag-button>
      </section>
    `;
  }
}
```

**Note:** When using button components within a custom element's shadow DOM, set up event listeners in the component's lifecycle (e.g., `firstUpdated()`) rather than using `DOMContentLoaded`, as `document.querySelector()` cannot access elements inside shadow DOM. Use `this.shadowRoot.querySelector()` instead.
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

## Events

| Event    | Framework                                             | Detail                 | Description                                                                      |
| -------- | ----------------------------------------------------- | ---------------------- | -------------------------------------------------------------------------------- |
| `click`  | Vue: `@click`<br>React: `onClick`<br>Lit: `@click`    | `MouseEvent`           | Fired when the button is clicked.                                                |
| `focus`  | Vue: `@focus`<br>React: `onFocus`<br>Lit: `@focus`    | `FocusEvent`           | Fired when the button receives focus.                                            |
| `blur`   | Vue: `@blur`<br>React: `onBlur`<br>Lit: `@blur`       | `FocusEvent`           | Fired when the button loses focus.                                               |
| `toggle` | Vue: `@toggle`<br>React: `onToggle`<br>Lit: `@toggle` | `{ pressed: boolean }` | Emitted when a toggle button is clicked (only when the `toggle` prop is `true`). |


**Note:** Standard button events (`click`, `focus`, `blur`) work uniformly across all frameworks. The `toggle` event is custom and only fires when the `toggle` prop is true, providing `{ pressed: boolean }` in its detail.

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
  document.getElementById("myForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    handleSubmit();
  });

  document.getElementById("cancel-button")?.addEventListener("click", cancel);
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
