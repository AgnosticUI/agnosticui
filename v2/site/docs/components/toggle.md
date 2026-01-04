# Toggle

<AlphaWarning />


The Toggle component provides an accessible binary switch for on/off states, implementing the WAI-ARIA Switch pattern.

## Examples

<FrameworkExample
  component="toggle"
  :vue-code="vueCode"
  :lit-code="litCode"
  :react-code="reactCode"
>
  <template #vue>
    <ToggleExamples />
  </template>
  <template #lit>
    <toggle-lit-examples></toggle-lit-examples>
  </template>
</FrameworkExample>

<script setup>
import AlphaWarning from '../components/AlphaWarning.vue'
import ToggleExamples from '../examples/ToggleExamples.vue'
import FrameworkExample from '../.vitepress/theme/components/FrameworkExample.vue'
import '../examples/ToggleLitExamples.js'
import vueCode from '../examples/ToggleExamples.vue?raw'
import litCode from '../examples/ToggleLitExamples.js?raw'
import reactCode from '../examples/ToggleReactExamples.jsx?raw'
</script>



## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | `''` | Label text for the toggle |
| `labelPosition` | `'top' \| 'start' \| 'end' \| 'bottom'` | `'top'` | Position of the label relative to the toggle |
| `labelHidden` | `boolean` | `false` | Visually hide the label (still accessible to screen readers) |
| `noLabel` | `boolean` | `false` | Remove label completely |
| `checked` | `boolean` | `false` | Whether the toggle is checked/on |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Size of the toggle switch |
| `variant` | `'default' \| 'success' \| 'warning' \| 'danger' \| 'monochrome'` | `'default'` | Color variant when checked |
| `disabled` | `boolean` | `false` | Whether the toggle is disabled |
| `readonly` | `boolean` | `false` | Toggle appears interactive but cannot be changed |
| `required` | `boolean` | `false` | Required field indicator |
| `invalid` | `boolean` | `false` | Invalid state for validation feedback |
| `errorMessage` | `string` | `''` | Error message text displayed when invalid |
| `helpText` | `string` | `''` | Helper text displayed below toggle |
| `name` | `string` | `''` | Name for form integration |
| `value` | `string` | `''` | Value when toggle is checked (for forms) |

## Events

| Event           | Framework                                                                     | Detail                                               | Description                                                                                      |
| --------------- | ----------------------------------------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| `click`         | Vue: `@click`<br>React: `onClick`<br>Lit: `@click`                            | `MouseEvent`                                         | Fired when the toggle is clicked.                                                                |
| `toggle-change` | Vue: `@toggle-change`<br>React: `onToggleChange`<br>Lit: `@toggle-change`    | `{ checked: boolean, name: string, value: string }` | Fired when toggle state changes. Contains the new checked state and form integration data.      |

**Note:** The Toggle component supports **dual-dispatch event propagation**: it dispatches both DOM CustomEvents (usable with `addEventListener`) and invokes callback props (`.onToggleChange`), giving you flexibility in how you handle events.

**Type:**

```ts
export type ToggleChangeEvent = CustomEvent<ToggleChangeEventDetail>;

export interface ToggleChangeEventDetail {
  checked: boolean;  // New checked state
  name: string;      // Form name (if provided)
  value: string;     // Form value (if provided)
}
```

### Event Handling Patterns

::: details Lit / Web Components
```typescript
// Pattern 1: addEventListener (DOM event)
const toggle = document.querySelector('ag-toggle');
toggle.addEventListener('toggle-change', (e) => {
  console.log('Checked:', e.detail.checked);
  console.log('Form name:', e.detail.name);
  console.log('Form value:', e.detail.value);
});

// Pattern 2: Callback prop
html`<ag-toggle
  label="Enable feature"
  .onToggleChange=${(e: CustomEvent) => {
    console.log('Callback fired:', e.detail);
  }}
></ag-toggle>`

// Pattern 3: Both (dual-dispatch)
html`<ag-toggle
  label="With both"
  @toggle-change=${(e) => console.log('DOM event')}
  .onToggleChange=${(e) => console.log('Callback')}
></ag-toggle>`
```
:::

::: details React
```tsx
import { ReactToggle } from 'agnosticui-core/toggle/react';

// React automatically maps toggle-change to onToggleChange
<ReactToggle
  label="Enable notifications"
  onToggleChange={(e) => {
    console.log('Checked:', e.detail.checked);
    console.log('Name:', e.detail.name);
    console.log('Value:', e.detail.value);
  }}
  onClick={(e) => {
    console.log('Native click also available:', e);
  }}
/>
```
:::

::: details Vue
```vue
<template>
  <!-- Pattern 1: @toggle-change event -->
  <VueToggle
    label="Enable feature"
    @toggle-change="handleToggle"
  />

  <!-- Pattern 2: v-model:checked (two-way binding) -->
  <VueToggle
    label="Dark mode"
    v-model:checked="isDarkMode"
  />

  <!-- Pattern 3: Both together -->
  <VueToggle
    label="With both"
    v-model:checked="isEnabled"
    @toggle-change="handleToggle"
  />
</template>

<script setup>
import { ref } from 'vue';

const isDarkMode = ref(false);
const isEnabled = ref(false);

// Event emits detail object (not full CustomEvent)
const handleToggle = (detail) => {
  console.log('Checked:', detail.checked);
  console.log('Name:', detail.name);
  console.log('Value:', detail.value);
};
</script>
```
:::

### Event Detail Structure

The `toggle-change` event provides the following detail payload:

```typescript
interface ToggleChangeEventDetail {
  checked: boolean;  // New checked state
  name: string;      // Form name (if provided)
  value: string;     // Form value (if provided)
}
```

## Accessibility

The Toggle component implements the [WAI-ARIA Switch pattern](https://www.w3.org/WAI/ARIA/apg/patterns/switch/):

- Uses semantic `<button>` element with `role="switch"`
- Communicates state via `aria-checked`
- Requires accessible name via `label` or `aria-label` prop
- Keyboard accessible (Space/Enter to toggle)
- Screen reader announces "On"/"Off" state
- Minimum 44px touch target for mobile accessibility
- Clear focus indicators for keyboard navigation

## Form Integration

Use the `name` and `value` props to integrate with forms:

::: details Vue
```vue
<template>
  <form @submit.prevent="handleSubmit">
    <VueToggle
      label="Subscribe to newsletter"
      name="newsletter"
      value="yes"
      :checked="formData.newsletter"
      @toggle-change="handleChange"
    />
    <VueButton type="submit">Submit</VueButton>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        newsletter: false,
      },
    };
  },
  methods: {
    handleChange(event) {
      this.formData.newsletter = event.checked;
    },
    handleSubmit() {
      console.log('Submit:', this.formData);
    },
  },
};
</script>
```
:::

::: details React
```tsx
import { useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState({ newsletter: false });

  const handleChange = (event: CustomEvent) => {
    setFormData({ newsletter: event.detail.checked });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submit:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <ReactToggle
        label="Subscribe to newsletter"
        name="newsletter"
        value="yes"
        checked={formData.newsletter}
        onToggleChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```
:::

::: details Lit (Web Components)
```html
<form id="myForm">
  <ag-toggle
    id="newsletter-toggle"
    label="Subscribe to newsletter"
    name="newsletter"
    value="yes"
  ></ag-toggle>
  <button type="submit">Submit</button>
</form>

<script type="module">
  let formData = { newsletter: false };

  const toggle = document.querySelector('#newsletter-toggle');
  toggle?.addEventListener('toggle-change', (event) => {
    formData.newsletter = event.detail.checked;
  });

  document.querySelector('#myForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Submit:', formData);
  });
</script>
```
:::


## CSS Shadow Parts

| Part | Description |
| --- | --- |
| `ag-toggle-button` | The main button element for the toggle. |
| `ag-toggle-track` | The track of the toggle switch. |
| `ag-toggle-handle` | The handle of the toggle switch. |

### Example

```css
.custom-toggle::part(ag-toggle-button) {
  border: 2px solid #bada55;
  border-radius: 9999px;
}
.custom-toggle::part(ag-toggle-track) {
  background-color: #f0f0f0;
}
.custom-toggle::part(ag-toggle-handle) {
  background-color: #bada55;
  border: 2px solid #fff;
  box-shadow: 0 0 5px #bada55;
}
.custom-toggle[checked]::part(ag-toggle-track) {
  background-color: #bada55;
}
.custom-toggle[checked]::part(ag-toggle-handle) {
  background-color: #fff;
}
```
