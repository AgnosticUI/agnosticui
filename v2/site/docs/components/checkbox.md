# Checkbox

Checkboxes allow users to select one or more options from a set. They're ideal for forms, settings panels, and multi-select interfaces.

## Examples

<CheckboxExamples />

<script setup>
import CheckboxExamples from '../examples/CheckboxExamples.vue'
</script>

## Usage

::: details Vue
```vue
<template>
  <section>
    <!-- Basic checkbox -->
    <VueCheckbox
      name="terms"
      value="agree"
      label-text="I agree to the terms and conditions"
    />

    <!-- Checkbox group -->
    <fieldset>
      <legend>Select your interests</legend>
      <VueCheckbox
        name="interests"
        value="tech"
        label-text="Technology"
        :checked="true"
      />
      <VueCheckbox
        name="interests"
        value="design"
        label-text="Design"
      />
      <VueCheckbox
        name="interests"
        value="business"
        label-text="Business"
      />
    </fieldset>

    <!-- Different themes -->
    <VueCheckbox
      name="example"
      value="1"
      theme="primary"
      label-text="Primary theme"
      :checked="true"
    />
    <VueCheckbox
      name="example"
      value="2"
      theme="monochrome"
      label-text="Monochrome theme"
      :checked="true"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VueCheckbox } from 'agnosticui-core/checkbox/vue';

export default defineComponent({
  components: { VueCheckbox }
});
</script>
```
:::

::: details React
```tsx
import { ReactCheckbox } from 'agnosticui-core/checkbox/react';

export default function Example() {
  return (
    <section>
      {/* Basic checkbox */}
      <ReactCheckbox
        name="terms"
        value="agree"
        labelText="I agree to the terms and conditions"
      />

      {/* Checkbox group */}
      <fieldset>
        <legend>Select your interests</legend>
        <ReactCheckbox
          name="interests"
          value="tech"
          labelText="Technology"
          checked
        />
        <ReactCheckbox
          name="interests"
          value="design"
          labelText="Design"
        />
        <ReactCheckbox
          name="interests"
          value="business"
          labelText="Business"
        />
      </fieldset>

      {/* Different themes */}
      <ReactCheckbox
        name="example"
        value="1"
        theme="primary"
        labelText="Primary theme"
        checked
      />
      <ReactCheckbox
        name="example"
        value="2"
        theme="monochrome"
        labelText="Monochrome theme"
        checked
      />
    </section>
  );
}
```
:::

::: details Lit (Web Components)
```html
<script type="module">
  import 'agnosticui-core/checkbox';
</script>

<section>
  <!-- Basic checkbox -->
  <ag-checkbox
    name="terms"
    value="agree"
    label-text="I agree to the terms and conditions"
  ></ag-checkbox>

  <!-- Checkbox group -->
  <fieldset>
    <legend>Select your interests</legend>
    <ag-checkbox
      name="interests"
      value="tech"
      label-text="Technology"
      checked
    ></ag-checkbox>
    <ag-checkbox
      name="interests"
      value="design"
      label-text="Design"
    ></ag-checkbox>
    <ag-checkbox
      name="interests"
      value="business"
      label-text="Business"
    ></ag-checkbox>
  </fieldset>

  <!-- Different themes -->
  <ag-checkbox
    name="example"
    value="1"
    theme="primary"
    label-text="Primary theme"
    checked
  ></ag-checkbox>
  <ag-checkbox
    name="example"
    value="2"
    theme="monochrome"
    label-text="Monochrome theme"
    checked
  ></ag-checkbox>
</section>
```
:::

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | `''` | Name attribute for the checkbox input (used for form submission) |
| `value` | `string` | `''` | Value of the checkbox input |
| `checked` | `boolean` | `false` | Whether the checkbox is checked |
| `indeterminate` | `boolean` | `false` | Whether the checkbox is in indeterminate state (used for "select all" scenarios) |
| `disabled` | `boolean` | `false` | Whether the checkbox is disabled |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Size of the checkbox |
| `theme` | `'default' \| 'primary' \| 'monochrome'` | `'default'` | Color theme variant (default=green, primary=blue, monochrome=black/white) |
| `labelText` | `string` | `''` | Label text for the checkbox |
| `labelPosition` | `'end' \| 'start'` | `'end'` | Position of label relative to checkbox |

## Events

| Event    | Framework                                             | Detail                                                                  | Description                                                                                |
| -------- | ----------------------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `click`  | Vue: `@click`<br>React: `onClick`<br>Lit: `@click`    | `MouseEvent`                                                            | Fired when the checkbox is clicked.                                                        |
| `change` | Vue: `@change`<br>React: `onChange`<br>Lit: `@change` | `{ checked: boolean, value: string, name: string, indeterminate: boolean }` | Fired when checkbox state changes. Contains the new checked state and form integration data. |

**Note:** The Checkbox component supports **dual-dispatch event propagation**: it dispatches both DOM CustomEvents (usable with `addEventListener`) and invokes callback props (`.onChange`), giving you flexibility in how you handle events.

### Event Usage Examples

::: details Vue
```vue
<template>
  <section>
    <!-- Event handler with @change -->
    <VueCheckbox
      name="terms"
      value="agree"
      label-text="I agree to the terms"
      @change="handleChange"
    />

    <!-- v-model:checked for two-way binding -->
    <VueCheckbox
      name="newsletter"
      value="subscribed"
      label-text="Subscribe to newsletter"
      v-model:checked="isSubscribed"
    />

    <!-- v-model:indeterminate (unique to checkbox) -->
    <VueCheckbox
      name="select-all"
      value="all"
      label-text="Select All"
      v-model:indeterminate="isIndeterminate"
      v-model:checked="allChecked"
    />

    <!-- Both event and v-model together -->
    <VueCheckbox
      name="notifications"
      value="enabled"
      label-text="Enable notifications"
      v-model:checked="notificationsEnabled"
      @change="handleNotificationChange"
    />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VueCheckbox } from 'agnosticui-core/checkbox/vue';

const isSubscribed = ref(false);
const isIndeterminate = ref(false);
const allChecked = ref(false);
const notificationsEnabled = ref(false);

const handleChange = (detail) => {
  console.log('Checkbox changed:', detail);
  // detail: { checked, value, name, indeterminate }
};

const handleNotificationChange = (detail) => {
  console.log('Notifications:', detail.checked ? 'enabled' : 'disabled');
};
</script>
```
:::

::: details React
```tsx
import { useState } from 'react';
import { ReactCheckbox } from 'agnosticui-core/checkbox/react';

export default function Example() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <section>
      {/* Event handler with onChange */}
      <ReactCheckbox
        name="terms"
        value="agree"
        labelText="I agree to the terms"
        onChange={(e) => {
          console.log('Checkbox changed:', e.detail);
          // e.detail: { checked, value, name, indeterminate }
        }}
      />

      {/* Controlled checkbox with state */}
      <ReactCheckbox
        name="newsletter"
        value="subscribed"
        labelText="Subscribe to newsletter"
        checked={isChecked}
        onChange={(e) => {
          setIsChecked(e.detail.checked);
        }}
      />

      {/* With native click handler */}
      <ReactCheckbox
        name="notifications"
        value="enabled"
        labelText="Enable notifications"
        onClick={(e) => console.log('Clicked:', e)}
        onChange={(e) => console.log('Changed:', e.detail)}
      />

      {/* Indeterminate state */}
      <ReactCheckbox
        name="select-all"
        value="all"
        labelText="Select All"
        indeterminate
        onChange={(e) => {
          console.log('Indeterminate cleared on click:', e.detail);
        }}
      />
    </section>
  );
}
```
:::

::: details Lit (Web Components)
```html
<script type="module">
  import 'agnosticui-core/checkbox';

  // Pattern 1: addEventListener (DOM events)
  const checkbox1 = document.querySelector('#checkbox1');
  checkbox1.addEventListener('change', (e) => {
    console.log('Event listener:', e.detail);
    // e.detail: { checked, value, name, indeterminate }
  });

  // Pattern 2: Callback prop
  const checkbox2 = document.querySelector('#checkbox2');
  checkbox2.onChange = (e) => {
    console.log('Callback prop:', e.detail);
  };

  // Pattern 3: Both patterns work (dual-dispatch)
  const checkbox3 = document.querySelector('#checkbox3');
  checkbox3.addEventListener('change', (e) => {
    console.log('DOM event:', e.detail);
  });
  checkbox3.onChange = (e) => {
    console.log('Callback also fired:', e.detail);
  };

  // Native click events work too
  const checkbox4 = document.querySelector('#checkbox4');
  checkbox4.addEventListener('click', (e) => {
    console.log('Click event:', e);
  });
  checkbox4.onClick = (e) => {
    console.log('Click callback:', e);
  };
</script>

<section>
  <ag-checkbox
    id="checkbox1"
    name="example1"
    value="1"
    label-text="addEventListener pattern"
  ></ag-checkbox>

  <ag-checkbox
    id="checkbox2"
    name="example2"
    value="2"
    label-text="Callback prop pattern"
  ></ag-checkbox>

  <ag-checkbox
    id="checkbox3"
    name="example3"
    value="3"
    label-text="Dual-dispatch (both patterns)"
  ></ag-checkbox>

  <ag-checkbox
    id="checkbox4"
    name="example4"
    value="4"
    label-text="With click handlers"
  ></ag-checkbox>
</section>
```
:::

**Type:**

```ts
export type CheckboxChangeEvent = CustomEvent<CheckboxChangeEventDetail>;

export interface CheckboxChangeEventDetail {
  checked: boolean;      // New checked state
  value: string;         // Form value (if provided)
  name: string;          // Form name (if provided)
  indeterminate: boolean; // Indeterminate state (false after user click)
}
```

## CSS Shadow Parts

Shadow Parts allow you to style internal elements of the checkbox from outside the shadow DOM using the `::part()` CSS selector.

| Part | Description |
|------|-------------|
| `ag-checkbox-wrapper` | The outer wrapper label element |
| `ag-checkbox-input` | The native checkbox input element (visually hidden) |
| `ag-checkbox-indicator` | The custom visual checkbox indicator (box with checkmark) |
| `ag-checkbox-label` | The label text span |

### Customization Examples

```css
/* Make the checkbox indicator circular */
ag-checkbox::part(ag-checkbox-indicator) {
  border-radius: 50%;
  border-width: 3px;
}

/* Customize the wrapper */
ag-checkbox::part(ag-checkbox-wrapper) {
  padding: 0.5rem;
  background: var(--ag-background-secondary);
  border-radius: var(--ag-radius-md);
}

/* Style the label */
ag-checkbox::part(ag-checkbox-label) {
  font-weight: 600;
  color: var(--ag-primary);
}
```

## Accessibility

- Checkbox uses native `<input type="checkbox">` for proper form integration
- Proper `aria-checked` state for assistive technologies ("true", "false", or "mixed" for indeterminate)
- Keyboard navigable (Tab to focus, Space to toggle)
- Focus visible with customizable focus ring using design tokens
- Always wrap checkbox groups in `<fieldset>` with a `<legend>` for screen readers
- Disabled state prevents interaction and is communicated to assistive technologies

## Theme Support

All themes automatically support dark mode through CSS design tokens:

- **Default theme**: Uses `--ag-success` (green) which adapts to dark mode
- **Primary theme**: Uses `--ag-primary` (blue) which adapts to dark mode
- **Monochrome theme**: Uses `--ag-black` and `--ag-white` which invert in dark mode

## Notes

- **Indeterminate state**: Useful for "select all" checkboxes when only some items are selected
- **Form integration**: Checkboxes work seamlessly with standard HTML forms
- **Lit**: Properties can be set via attributes or via property binding (e.g., `.checked=${true}`)
- All three implementations (Lit, React, Vue) share the same underlying styles and behavior
