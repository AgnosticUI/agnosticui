# Radio

Radio button allows a user to select a single option from a set of mutually exclusive choices. It's ideal for forms where only one selection is permitted.

## Examples

<RadioExamples />

<script setup>
import RadioExamples from '../examples/RadioExamples.vue'
</script>

## Usage

::: details Vue
```vue
<template>
  <section>
    <!-- Basic radio group -->
    <VueFieldset legend="Choose your plan">
      <VueRadio
        name="plan"
        value="free"
        label-text="Free Plan"
      />
      <VueRadio
        name="plan"
        value="pro"
        label-text="Pro Plan"
        :checked="true"
      />
      <VueRadio
        name="plan"
        value="enterprise"
        label-text="Enterprise Plan"
      />
    </VueFieldset>

    <!-- Different themes -->
    <VueFieldset legend="Select framework">
      <VueRadio
        name="framework"
        value="react"
        theme="primary"
        label-text="React"
      />
      <VueRadio
        name="framework"
        value="vue"
        theme="primary"
        label-text="Vue"
        :checked="true"
      />
      <VueRadio
        name="framework"
        value="angular"
        theme="primary"
        label-text="Angular"
      />
    </VueFieldset>

    <!-- Inline layout -->
    <VueFieldset legend="Gender">
      <div style="display: flex; gap: 1.5rem;">
        <VueRadio
          name="gender"
          value="male"
          label-text="Male"
        />
        <VueRadio
          name="gender"
          value="female"
          label-text="Female"
          :checked="true"
        />
        <VueRadio
          name="gender"
          value="other"
          label-text="Other"
        />
      </div>
    </VueFieldset>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VueRadio } from 'agnosticui-core/radio/vue';
import { VueFieldset } from 'agnosticui-core/fieldset/vue';

export default defineComponent({
  components: { VueRadio, VueFieldset }
});
</script>
```
:::

::: details React
```tsx
import { ReactRadio } from 'agnosticui-core/radio/react';
import { ReactFieldset } from 'agnosticui-core/fieldset/react';

export default function Example() {
  return (
    <section>
      {/* Basic radio group */}
      <ReactFieldset legend="Choose your plan">
        <ReactRadio
          name="plan"
          value="free"
          labelText="Free Plan"
        />
        <ReactRadio
          name="plan"
          value="pro"
          labelText="Pro Plan"
          checked
        />
        <ReactRadio
          name="plan"
          value="enterprise"
          labelText="Enterprise Plan"
        />
      </ReactFieldset>

      {/* Different themes */}
      <ReactFieldset legend="Select framework">
        <ReactRadio
          name="framework"
          value="react"
          theme="primary"
          labelText="React"
        />
        <ReactRadio
          name="framework"
          value="vue"
          theme="primary"
          labelText="Vue"
          checked
        />
        <ReactRadio
          name="framework"
          value="angular"
          theme="primary"
          labelText="Angular"
        />
      </ReactFieldset>

      {/* Inline layout */}
      <ReactFieldset legend="Gender">
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <ReactRadio
            name="gender"
            value="male"
            labelText="Male"
          />
          <ReactRadio
            name="gender"
            value="female"
            labelText="Female"
            checked
          />
          <ReactRadio
            name="gender"
            value="other"
            labelText="Other"
          />
        </div>
      </ReactFieldset>
    </section>
  );
}
```
:::

::: details Lit (Web Components)
```html
<script type="module">
  import 'agnosticui-core/radio';
  import 'agnosticui-core/fieldset';
</script>

<section>
  <!-- Basic radio group -->
  <ag-fieldset legend="Choose your plan">
    <ag-radio
      name="plan"
      value="free"
      label-text="Free Plan"
    ></ag-radio>
    <ag-radio
      name="plan"
      value="pro"
      label-text="Pro Plan"
      checked
    ></ag-radio>
    <ag-radio
      name="plan"
      value="enterprise"
      label-text="Enterprise Plan"
    ></ag-radio>
  </ag-fieldset>

  <!-- Different themes -->
  <ag-fieldset legend="Select framework">
    <ag-radio
      name="framework"
      value="react"
      theme="primary"
      label-text="React"
    ></ag-radio>
    <ag-radio
      name="framework"
      value="vue"
      theme="primary"
      label-text="Vue"
      checked
    ></ag-radio>
    <ag-radio
      name="framework"
      value="angular"
      theme="primary"
      label-text="Angular"
    ></ag-radio>
  </ag-fieldset>

  <!-- Inline layout -->
  <ag-fieldset legend="Gender">
    <div style="display: flex; gap: 1.5rem;">
      <ag-radio
        name="gender"
        value="male"
        label-text="Male"
      ></ag-radio>
      <ag-radio
        name="gender"
        value="female"
        label-text="Female"
        checked
      ></ag-radio>
      <ag-radio
        name="gender"
        value="other"
        label-text="Other"
      ></ag-radio>
    </div>
  </ag-fieldset>
</section>
```
:::

## Label Position

The `labelPosition` prop controls where the internal label text appears relative to the radio button. This affects the `labelText` (the label that wraps the radio), not the external `label` prop.

```vue
<!-- Label after radio (default) -->
<VueRadio
  name="option"
  value="1"
  label-text="Label on end (default)"
  label-position="end"
/>

<!-- Label before radio -->
<VueRadio
  name="option"
  value="2"
  label-text="Label on start"
  label-position="start"
/>
```

## External Label Support

Radio buttons now support optional external labels, helper text, and error messages using the shared form control utilities. This is useful for:
- Radio groups that need a descriptive label above them
- Standalone radios that require validation feedback
- Forms where consistent label/helper/error patterns are needed

### Basic External Label

```vue
<VueRadio
  name="shipping"
  value="standard"
  label="Shipping Method"
  label-text="Standard Shipping (5-7 days)"
  :checked="true"
/>
```

### With Helper Text

```vue
<VueRadio
  name="payment"
  value="credit"
  label="Payment Method"
  label-text="Credit Card"
  help-text="We accept all major credit cards"
/>
```

### With Validation

```vue
<VueRadio
  name="terms"
  value="agreed"
  label="Terms and Conditions"
  label-text="I agree to the terms and conditions"
  :required="true"
  :invalid="!termsAccepted"
  error-message="You must accept the terms to proceed"
/>
```

### Radio Groups with External Label

```vue
<template>
  <div>
    <VueRadio
      name="notifications"
      value="email"
      label="Notification Preferences"
      label-text="Email notifications"
      help-text="Choose how you'd like to be notified"
      :checked="true"
    />
    <VueRadio
      name="notifications"
      value="sms"
      label-text="SMS notifications"
    />
    <VueRadio
      name="notifications"
      value="push"
      label-text="Push notifications"
    />
  </div>
</template>
```

**Note:** The `label` prop creates an external label above the radio, while `labelText` is the internal label that wraps the radio itself. Most radios use only `labelText`, but external labels are useful for groups or when you need validation feedback.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | `''` | Name attribute for the radio input (required for grouping - all radios with the same name are mutually exclusive) |
| `value` | `string` | `''` | Value of the radio input |
| `checked` | `boolean` | `false` | Whether the radio is checked |
| `disabled` | `boolean` | `false` | Whether the radio is disabled |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Size of the radio button |
| `theme` | `'default' \| 'primary' \| 'success' \| 'monochrome'` | `'primary'` | Color theme variant (default=blue alias to primary, primary=blue, success=green, monochrome=black/white) |
| `labelText` | `string` | `''` | Label text for the radio button (internal label that wraps the radio) |
| `labelPosition` | `'end' \| 'start'` | `'end'` | Position of labelText relative to radio button (`end` = after radio, `start` = before radio) |
| `label` | `string` | `''` | Optional external label displayed above the radio (useful for groups or standalone with context) |
| `labelHidden` | `boolean` | `false` | Visually hides the external label while keeping it accessible to screen readers |
| `noLabel` | `boolean` | `false` | Completely removes the external label element |
| `required` | `boolean` | `false` | Marks the radio as required. Displays an asterisk (*) after the external label |
| `invalid` | `boolean` | `false` | Marks the radio as invalid. Sets aria-invalid and can display error message |
| `errorMessage` | `string` | `''` | Error message displayed when invalid. Linked via aria-describedby |
| `helpText` | `string` | `''` | Helper text displayed below the radio. Linked via aria-describedby |

## Events

| Event    | Framework                                             | Detail                                                    | Description                                                                   |
| -------- | ----------------------------------------------------- | --------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `click`  | Vue: `@click`<br>React: `onClick`<br>Lit: `@click`    | `MouseEvent`                                              | Fired when the radio is clicked.                                              |
| `change` | Vue: `@change`<br>React: `onChange`<br>Lit: `@change` | `{ checked: boolean, value: string, name: string }` | Fired when radio selection changes. Contains the checked state and form data. |

**Note:** The Radio component supports **dual-dispatch event propagation**: it dispatches both DOM CustomEvents (usable with `addEventListener`) and invokes callback props (`.onChange`), giving you flexibility in how you handle events.

### Event Usage Examples

::: details Vue
```vue
<template>
  <section>
    <!-- Event handler with @change -->
    <VueRadio
      name="color"
      value="red"
      label-text="Red"
      @change="handleChange"
    />

    <!-- v-model:checked for two-way binding -->
    <VueRadio
      name="color"
      value="blue"
      label-text="Blue"
      v-model:checked="selectedColor"
    />

    <!-- Both event and v-model together -->
    <VueRadio
      name="color"
      value="green"
      label-text="Green"
      v-model:checked="selectedColor"
      @change="handleColorChange"
    />

    <!-- Radio group with shared name -->
    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
      <VueRadio
        v-for="option in options"
        :key="option.value"
        name="options"
        :value="option.value"
        :label-text="option.label"
        :checked="selectedOption === option.value"
        @change="(detail) => selectedOption = detail.value"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VueRadio } from 'agnosticui-core/radio/vue';

const selectedColor = ref('blue');
const selectedOption = ref('option1');

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const handleChange = (detail) => {
  console.log('Radio changed:', detail);
  // detail: { checked, value, name }
};

const handleColorChange = (detail) => {
  console.log('Color selected:', detail.value);
};
</script>
```
:::

::: details React
```tsx
import { useState } from 'react';
import { ReactRadio } from 'agnosticui-core/radio/react';

export default function Example() {
  const [selectedColor, setSelectedColor] = useState('red');

  return (
    <section>
      {/* Event handler with onChange */}
      <ReactRadio
        name="color"
        value="red"
        labelText="Red"
        checked={selectedColor === 'red'}
        onChange={(e) => {
          console.log('Radio changed:', e.detail);
          setSelectedColor(e.detail.value);
        }}
      />

      {/* Controlled radio group */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <ReactRadio
          name="color"
          value="red"
          labelText="Red"
          checked={selectedColor === 'red'}
          onChange={(e) => setSelectedColor(e.detail.value)}
        />
        <ReactRadio
          name="color"
          value="blue"
          labelText="Blue"
          checked={selectedColor === 'blue'}
          onChange={(e) => setSelectedColor(e.detail.value)}
        />
        <ReactRadio
          name="color"
          value="green"
          labelText="Green"
          checked={selectedColor === 'green'}
          onChange={(e) => setSelectedColor(e.detail.value)}
        />
      </div>

      {/* With native click handler */}
      <ReactRadio
        name="notification"
        value="enabled"
        labelText="Enable notifications"
        onClick={(e) => console.log('Clicked:', e)}
        onChange={(e) => console.log('Changed:', e.detail)}
      />
    </section>
  );
}
```
:::

::: details Lit (Web Components)
```html
<script type="module">
  import 'agnosticui-core/radio';

  // Pattern 1: addEventListener (DOM events)
  const radio1 = document.querySelector('#radio1');
  radio1.addEventListener('change', (e) => {
    console.log('Event listener:', e.detail);
    // e.detail: { checked, value, name }
  });

  // Pattern 2: Callback prop
  const radio2 = document.querySelector('#radio2');
  radio2.onChange = (e) => {
    console.log('Callback prop:', e.detail);
  };

  // Pattern 3: Both patterns work (dual-dispatch)
  const radio3 = document.querySelector('#radio3');
  radio3.addEventListener('change', (e) => {
    console.log('DOM event:', e.detail);
  });
  radio3.onChange = (e) => {
    console.log('Callback also fired:', e.detail);
  };

  // Native click events work too
  const radio4 = document.querySelector('#radio4');
  radio4.addEventListener('click', (e) => {
    console.log('Click event:', e);
  });
  radio4.onClick = (e) => {
    console.log('Click callback:', e);
  };

  // Radio group with shared name
  const radios = document.querySelectorAll('ag-radio[name="group"]');
  radios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      console.log('Selected:', e.detail.value);
    });
  });
</script>

<section>
  <ag-radio
    id="radio1"
    name="example1"
    value="1"
    label-text="addEventListener pattern"
  ></ag-radio>

  <ag-radio
    id="radio2"
    name="example2"
    value="2"
    label-text="Callback prop pattern"
  ></ag-radio>

  <ag-radio
    id="radio3"
    name="example3"
    value="3"
    label-text="Dual-dispatch (both patterns)"
  ></ag-radio>

  <ag-radio
    id="radio4"
    name="example4"
    value="4"
    label-text="With click handlers"
  ></ag-radio>

  <!-- Radio group -->
  <div style="display: flex; flex-direction: column; gap: 0.5rem;">
    <ag-radio name="group" value="a" label-text="Option A"></ag-radio>
    <ag-radio name="group" value="b" label-text="Option B"></ag-radio>
    <ag-radio name="group" value="c" label-text="Option C"></ag-radio>
  </div>
</section>
```
:::

**Type:**

```ts
export type RadioChangeEvent = CustomEvent<RadioChangeEventDetail>;

export interface RadioChangeEventDetail {
  checked: boolean;  // Whether this radio is checked
  value: string;     // Form value of the radio
  name: string;      // Form name (shared by radio group)
}
```

## CSS Shadow Parts

Shadow Parts allow you to style internal elements of the radio from outside the shadow DOM using the `::part()` CSS selector.

| Part | Description |
|------|-------------|
| `ag-radio-wrapper` | The outer wrapper label element |
| `ag-radio-input` | The native radio input element (visually hidden) |
| `ag-radio-indicator` | The custom visual radio indicator (circle) |
| `ag-radio-label` | The label text span |

### Customization Examples

```css
/* Make the radio indicator larger */
ag-radio::part(ag-radio-indicator) {
  transform: scale(1.3);
  border-width: 3px;
}

/* Customize the wrapper */
ag-radio::part(ag-radio-wrapper) {
  padding: 0.5rem;
  background: var(--ag-background-secondary);
  border-radius: var(--ag-radius-md);
}

/* Style the label */
ag-radio::part(ag-radio-label) {
  font-weight: 600;
  color: var(--ag-primary);
}
```

## Accessibility

- Radio uses native `<input type="radio">` for proper form integration
- Proper `aria-checked` state for assistive technologies
- Keyboard navigable (Tab to focus, Arrow keys to move between radios in a group, Space to select)
- Focus visible with customizable focus ring using design tokens
- Always wrap radio groups with AgFieldset (ag-fieldset / ReactFieldset / VueFieldset) for proper semantic grouping and screen reader support
- Disabled state prevents interaction and is communicated to assistive technologies

## Theme Support

All themes automatically support dark mode through CSS design tokens:

- **Default theme**: Alias to primary theme - uses `--ag-primary` (blue) which adapts to dark mode
- **Primary theme**: Uses `--ag-primary` (blue) which adapts to dark mode
- **Success theme**: Uses `--ag-success` (green) which adapts to dark mode
- **Monochrome theme**: Uses `--ag-black` and `--ag-white` which invert in dark mode

## Best Practices

- **Use `name` attribute**: All radio buttons in a group must have the same `name` attribute to ensure mutual exclusivity
- **Always use AgFieldset**: Wrap radio groups with AgFieldset (ag-fieldset / ReactFieldset / VueFieldset) with a descriptive legend for accessibility
- **Pre-select a default**: For better UX, always have one radio pre-selected in a required group
- **Use checkboxes for multiple selections**: If users can select multiple options, use checkboxes instead
- **Inline vs. stacked**: Use inline layout (flex/horizontal) for 2-3 short options; use stacked (vertical) for longer labels or more options

## Notes

- **Mutual exclusivity**: Only one radio in a group (same `name`) can be selected at a time
- **Form integration**: Radio buttons work seamlessly with standard HTML forms
- **Lit**: Properties can be set via attributes or via property binding (e.g., `.checked=${true}`)
- All three implementations (Lit, React, Vue) share the same underlying styles and behavior
