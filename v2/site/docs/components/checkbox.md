# Checkbox

<AlphaWarning />

Checkbox allows a user to select one or more options from a set. It's ideal for forms, settings panels, and multi-select interfaces.

## Examples

<FrameworkExample component="checkbox" :vue-code="vueCode" :lit-code="litCode" :react-code="reactCode">
  <template #vue>
    <CheckboxExamples />
  </template>
  <template #lit>
    <checkbox-lit-examples></checkbox-lit-examples>
  </template>
</FrameworkExample>

## Server-Side Rendering (SSR) Fallback Layouts

AgnosticUI utilizes an **Isomorphic Architecture** to support server-first workflows (e.g. TanStack Start, Remix, Nuxt). Below are zero-drift visual previews generated directly from our isolated server layout string engines before client-side hydration completes.

### Standard Unchecked & Checked Previews

<CheckboxFallbackPreview labelText="Subscribe to newsletter updates" :checked="false" />

<CheckboxFallbackPreview labelText="Accept community usage guidelines" :checked="true" />

### Indeterminate Group State (Mixed Option)

<CheckboxFallbackPreview labelText="Select all item permissions" :indeterminate="true" />

### Validation Errors & Inline Helplines

<CheckboxFallbackPreview 
  labelText="Confirm automatic cloud backups" 
  invalid 
  errorMessage="You must explicitly confirm storage provisions to launch automation tasks." 
  helpText="Saves differential snapshot snapshots directly into encrypted object tiers daily."
/>

<script setup>
import AlphaWarning from '../components/AlphaWarning.vue'
import CheckboxExamples from '../examples/CheckboxExamples.vue'
import CheckboxFallbackPreview from '../examples/CheckboxFallbackPreview.vue'
import FrameworkExample from '../.vitepress/theme/components/FrameworkExample.vue'
import '../examples/CheckboxLitExamples.js'
import vueCode from '../examples/CheckboxExamples.vue?raw'
import litCode from '../examples/CheckboxLitExamples.js?raw'
import reactCode from '../examples/CheckboxReactExamples.jsx?raw'
</script>

### Handling Pre-selected / State Restorations during Hydration

```vue
<!-- Default configuration layout state -->
<CheckboxFallbackPreview labelText="Receive push reminders" :checked="false" />
```

If a user loads a page where an active record matching checked configurations already exists, synchronize your parameters by mapping the dataset conditions down to token flags. This locks down the CSS Module layer hashes on the server instantly before hydration.

```vue
<!-- Hydration bound configuration layout -->
<CheckboxFallbackPreview
  labelText="Receive push reminders"
  :checked="isSubscribed || false"
  :disabled="isParentContainerLocked"
/>
```

## Usage

::: tip
The framework examples below `import` AgnosticUI as an `npm` package. Alternatively, you can use the **CLI for complete control, AI/LLM visibility, and full code ownership**:

```bash
npx ag init --framework FRAMEWORK # react, vue, lit, svelte, etc.
npx ag add Checkbox
```

The CLI copies source code directly into your project, giving you full visibility and control. After running `npx ag add`, you'll receive exact import instructions.
:::

::: details Vue

```vue
<template>
  <section>
    <VueCheckbox
      name="terms"
      value="agree"
      label-text="I agree to the terms and conditions"
    />

    <VueFieldset legend="Select your interests">
      <VueCheckbox
        name="interests"
        value="tech"
        label-text="Technology"
        :checked="true"
      />
      <VueCheckbox name="interests" value="design" label-text="Design" />
      <VueCheckbox name="interests" value="business" label-text="Business" />
    </VueFieldset>

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
import { defineComponent } from "vue";
import { VueCheckbox } from "agnosticui-core/checkbox/vue";
import { VueFieldset } from "agnosticui-core/fieldset/vue";

export default defineComponent({
  components: { VueCheckbox, VueFieldset },
});
</script>
```

:::

::: details React

```tsx
import { ReactCheckbox } from "agnosticui-core/checkbox/react";
import { ReactFieldset } from "agnosticui-core/fieldset/react";

export default function Example() {
  return (
    <section>
      <ReactCheckbox
        name="terms"
        value="agree"
        labelText="I agree to the terms and conditions"
      />

      <ReactFieldset legend="Select your interests">
        <ReactCheckbox
          name="interests"
          value="tech"
          labelText="Technology"
          checked
        />
        <ReactCheckbox name="interests" value="design" labelText="Design" />
        <ReactCheckbox name="interests" value="business" labelText="Business" />
      </ReactFieldset>

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
  import "agnosticui-core/checkbox";
  import "agnosticui-core/fieldset";
</script>

<section>
  <ag-checkbox
    name="terms"
    value="agree"
    label-text="I agree to the terms and conditions"
  ></ag-checkbox>

  <ag-fieldset legend="Select your interests">
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
  </ag-fieldset>

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

## Label Position

The `labelPosition` prop controls where the internal label text appears relative to the checkbox. This affects the `labelText` (the label that wraps the checkbox), not the external `label` prop.

```vue
<VueCheckbox
  name="option"
  value="1"
  label-text="Label on end (default)"
  label-position="end"
/>

<VueCheckbox
  name="option"
  value="2"
  label-text="Label on start"
  label-position="start"
/>
```

## External Label Support

Checkboxes now support optional external labels, helper text, and error messages using the shared form control utilities. This is useful for:

- Checkbox groups that need a descriptive label above them
- Standalone checkboxes that require validation feedback
- Forms where consistent label/helper/error patterns are needed

### Basic External Label

```vue
<VueCheckbox
  name="terms"
  value="agreed"
  label="Terms and Conditions"
  label-text="I agree to the terms and conditions"
/>
```

### With Helper Text

```vue
<VueCheckbox
  name="newsletter"
  value="subscribed"
  label="Newsletter Subscription"
  label-text="Send me weekly updates"
  help-text="You can unsubscribe at any time"
/>
```

### With Validation

```vue
<VueCheckbox
  name="age-verify"
  value="confirmed"
  label="Age Verification"
  label-text="I confirm I am 18 years or older"
  :required="true"
  :invalid="!ageVerified"
  error-message="You must confirm you are 18 or older"
/>
```

### Checkbox Groups with External Label

```vue
<template>
  <div>
    <VueCheckbox
      name="features"
      value="email"
      label="Select Features"
      label-text="Email notifications"
      help-text="Choose the features you want to enable"
    />
    <VueCheckbox name="features" value="sms" label-text="SMS notifications" />
    <VueCheckbox name="features" value="push" label-text="Push notifications" />
  </div>
</template>
```

**Note:** The `label` prop creates an external label above the checkbox, while `labelText` is the internal label that wraps the checkbox itself. Most checkboxes use only `labelText`, but external labels are useful for groups or when you need validation feedback.

## Props

| Prop            | Type                                                  | Default     | Description                                                                                         |
| --------------- | ----------------------------------------------------- | ----------- | --------------------------------------------------------------------------------------------------- |
| `modelValue`    | `string`                                              | `''`        | The input value (use with v-model for two-way binding)                                              |
| `label`         | `string`                                              | `''`        | Optional external label displayed above the checkbox (useful for groups or standalone with context) |
| `labelText`     | `string`                                              | `''`        | Label text for the checkbox (internal label that wraps the checkbox)                                |
| `value`         | `string`                                              | `''`        | Value of the checkbox input submitted during form collection lifecycles                             |
| `checked`       | `boolean`                                             | `false`     | Whether the checkbox is checked                                                                     |
| `indeterminate` | `boolean`                                             | `false`     | Whether the checkbox is in indeterminate state (used for "select all" scenarios)                    |
| `disabled`      | `boolean`                                             | `false`     | Whether the checkbox is disabled                                                                    |
| `size`          | `'small' \| 'medium' \| 'large'`                      | `'medium'`  | Size of the checkbox switcher matrix                                                                |
| `theme`         | `'default' \| 'primary' \| 'success' \| 'monochrome'` | `'primary'` | Color theme variant (primary=blue, success=green, monochrome=black)                                 |
| `labelPosition` | `'end' \| 'start'`                                    | `'end'`     | Position of labelText relative to checkbox (`end` = after checkbox, `start` = before checkbox)      |
| `labelHidden`   | `boolean`                                             | `false`     | Visually hides the external label while keeping it accessible to screen readers                     |
| `noLabel`       | `boolean`                                             | `false`     | Completely removes the external label element                                                       |
| `required`      | `boolean`                                             | `false`     | Marks the checkbox as required. Displays an asterisk (\*) after the external label                  |
| `invalid`       | `boolean`                                             | `false`     | Marks the checkbox as invalid. Sets aria-invalid and can display error message                      |
| `errorMessage`  | `string`                                              | `''`        | Error message displayed when invalid. Linked via aria-describedby                                   |
| `helpText`      | `string`                                              | `''`        | Helper text displayed below the checkbox. Linked via aria-describedby                               |

## Events

| Event    | Framework                                             | Detail                                                                      | Description                                                                                  |
| -------- | ----------------------------------------------------- | --------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `click`  | Vue: `@click`<br>React: `onClick`<br>Lit: `@click`    | `MouseEvent`                                                                | Fired when the checkbox is clicked.                                                          |
| `change` | Vue: `@change`<br>React: `onChange`<br>Lit: `@change` | `{ checked: boolean, value: string, name: string, indeterminate: boolean }` | Fired when checkbox state changes. Contains the new checked state and form integration data. |

**Note:** The Checkbox component supports **dual-dispatch event propagation**: it dispatches both DOM CustomEvents (usable with `addEventListener`) and invokes callback props (`.onChange`), giving you flexibility in how you handle events.

### Event Usage Examples

::: details Vue

```vue
<template>
  <section>
    <VueCheckbox
      name="terms"
      value="agree"
      label-text="I agree to the terms"
      @change="handleChange"
    />

    <VueCheckbox
      name="newsletter"
      value="subscribed"
      label-text="Subscribe to newsletter"
      v-model:checked="isSubscribed"
    />

    <VueCheckbox
      name="select-all"
      value="all"
      label-text="Select All"
      v-model:indeterminate="isIndeterminate"
      v-model:checked="allChecked"
    />

    <VueCheckbox
      name="notifications"
      value="enabled"
      label-text="Enable notifications"
      v-model:checked="notificationsEnabled"
      @change="handleNotificationChange"
    />
  </section>
</template>

<script setup>
import { ref } from "vue";
import { VueCheckbox } from "agnosticui-core/checkbox/vue";

const isSubscribed = ref(false);
const isIndeterminate = ref(false);
const allChecked = ref(false);
const notificationsEnabled = ref(false);

const handleChange = (detail) => {
  console.log("Checkbox changed:", detail);
};

const handleNotificationChange = (detail) => {
  console.log("Notifications:", detail.checked ? "enabled" : "disabled");
};
</script>
```

:::

::: details React

```tsx
import { useState } from "react";
import { ReactCheckbox } from "agnosticui-core/checkbox/react";

export default function Example() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <section>
      <ReactCheckbox
        name="terms"
        value="agree"
        labelText="I agree to the terms"
        onChange={(e) => {
          console.log(
            "Checkbox changed:",
            (e.target as HTMLInputElement).checked,
          );
        }}
      />

      <ReactCheckbox
        name="newsletter"
        value="subscribed"
        labelText="Subscribe to newsletter"
        checked={isChecked}
        onChange={(e) => {
          setIsChecked((e.target as HTMLInputElement).checked);
        }}
      />

      <ReactCheckbox
        name="notifications"
        value="enabled"
        labelText="Enable notifications"
        onClick={(e) => console.log("Clicked:", e)}
        onChange={(e) =>
          console.log("Changed:", (e.target as HTMLInputElement).checked)
        }
      />

      <ReactCheckbox
        name="select-all"
        value="all"
        labelText="Select All"
        indeterminate
        onChange={(e) => {
          console.log(
            "Indeterminate cleared on click:",
            (e.target as HTMLInputElement).checked,
          );
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
  import "agnosticui-core/checkbox";

  const checkbox1 = document.querySelector("#checkbox1");
  checkbox1.addEventListener("change", (e) => {
    console.log("Event listener:", e.detail);
  });

  const checkbox2 = document.querySelector("#checkbox2");
  checkbox2.onChange = (e) => {
    console.log("Callback prop:", e.detail);
  };

  const checkbox3 = document.querySelector("#checkbox3");
  checkbox3.addEventListener("change", (e) => {
    console.log("DOM event:", e.detail);
  });
  checkbox3.onChange = (e) => {
    console.log("Callback also fired:", e.detail);
  };

  const checkbox4 = document.querySelector("#checkbox4");
  checkbox4.addEventListener("click", (e) => {
    console.log("Click event:", e);
  });
  checkbox4.onClick = (e) => {
    console.log("Click callback:", e);
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
  checked: boolean;
  value: string;
  name: string;
  indeterminate: boolean;
}
```

## Slots

| Slot          | Description                                                                              |
| ------------- | ---------------------------------------------------------------------------------------- |
| `addon-left`  | Content to display on the left side of the input (automatically detected when provided)  |
| `addon-right` | Content to display on the right side of the input (automatically detected when provided) |

## Accessibility

- Checkbox uses native `<input type="checkbox">` for proper form integration
- Proper `aria-checked` state for assistive technologies ("true", "false", or "mixed" for indeterminate)
- Keyboard navigable (Tab to focus, Space to toggle)
- Focus visible with customizable focus ring using design tokens
- Always wrap checkbox groups with AgFieldset (ag-fieldset / ReactFieldset / VueFieldset) for proper semantic grouping and screen reader support
- Disabled state prevents interaction and is communicated to assistive technologies

## Theme Support

All themes automatically support dark mode through CSS design tokens:

- **Default theme**: Alias to primary theme - uses `--ag-primary` (blue) which adapts to dark mode
- **Primary theme**: Uses `--ag-primary` (blue) which adapts to dark mode
- **Success theme**: Uses `--ag-success` (green) which adapts to dark mode
- **Monochrome theme**: Uses `--ag-black` and `--ag-white` which invert in dark mode

## Notes

- **Indeterminate state**: Useful for "select all" checkboxes when only some items are selected
- **Form integration**: Checkboxes work seamlessly with standard HTML forms
- **Lit**: Properties can be set via attributes or via property binding (e.g., `.checked=${true}`)
- All three implementations (Lit, React, Vue) share the same underlying styles and behavior

## CSS Shadow Parts

The Checkbox component exposes the following CSS Shadow Parts for custom styling:

| Part                    | Description                                               |
| ----------------------- | --------------------------------------------------------- |
| `ag-checkbox-wrapper`   | The outer wrapper label element                           |
| `ag-checkbox-input`     | The native checkbox input element (visually hidden)       |
| `ag-checkbox-indicator` | The custom visual checkbox indicator (box with checkmark) |
| `ag-checkbox-label`     | The label text span                                       |

### Customization Examples

```css
ag-checkbox::part(ag-checkbox-indicator) {
  border-radius: 50%;
  border-width: 3px;
}

ag-checkbox::part(ag-checkbox-wrapper) {
  padding: 0.5rem;
  background: #6366f1;
  border-radius: #6366f1;
}

ag-checkbox::part(ag-checkbox-label) {
  font-weight: 600;
  color: #12623e;
}
```

See the **CSS Shadow Parts Customization** section in the examples above for more styling demonstrations.

## When to Use

**Use Input when:**

- Collecting short, single-line text data (name, email, etc.)
- Building forms for data entry
- You need validation and error messaging
- You need different input types (email, password, date, etc.)

**Use Textarea (type="textarea") when:**

- Collecting longer, multi-line text (comments, descriptions, etc.)
- User needs to see multiple lines of their input at once

**Consider alternatives when:**

- You have a fixed set of options - use Select or Radio buttons instead
- You need yes/no or on/off - use Toggle or Checkbox instead
- You need date/time selection with a calendar - consider a DatePicker component

## Related Components

- [Select](/components/select) - For select list validation fields.
- [Checkbox](/components/checkbox) - For binary options groupings.
- [Radio](/components/radio) - For single item selections within a visible list parameters.
