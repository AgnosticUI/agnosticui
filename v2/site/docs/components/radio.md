# Radio

Radio buttons allow users to select a single option from a set of mutually exclusive choices. They're ideal for forms where only one selection is permitted.

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
    <fieldset>
      <legend>Choose your plan</legend>
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
    </fieldset>

    <!-- Different themes -->
    <fieldset>
      <legend>Select framework</legend>
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
    </fieldset>

    <!-- Inline layout -->
    <fieldset>
      <legend>Gender</legend>
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
    </fieldset>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VueRadio } from 'agnosticui-core/radio/vue';

export default defineComponent({
  components: { VueRadio }
});
</script>
```
:::

::: details React
```tsx
import { ReactRadio } from 'agnosticui-core/radio/react';

export default function Example() {
  return (
    <section>
      {/* Basic radio group */}
      <fieldset>
        <legend>Choose your plan</legend>
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
      </fieldset>

      {/* Different themes */}
      <fieldset>
        <legend>Select framework</legend>
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
      </fieldset>

      {/* Inline layout */}
      <fieldset>
        <legend>Gender</legend>
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
      </fieldset>
    </section>
  );
}
```
:::

::: details Lit (Web Components)
```html
<script type="module">
  import 'agnosticui-core/radio';
</script>

<section>
  <!-- Basic radio group -->
  <fieldset>
    <legend>Choose your plan</legend>
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
  </fieldset>

  <!-- Different themes -->
  <fieldset>
    <legend>Select framework</legend>
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
  </fieldset>

  <!-- Inline layout -->
  <fieldset>
    <legend>Gender</legend>
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
  </fieldset>
</section>
```
:::

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | `''` | Name attribute for the radio input (required for grouping - all radios with the same name are mutually exclusive) |
| `value` | `string` | `''` | Value of the radio input |
| `checked` | `boolean` | `false` | Whether the radio is checked |
| `disabled` | `boolean` | `false` | Whether the radio is disabled |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Size of the radio button |
| `theme` | `'default' \| 'primary' \| 'monochrome'` | `'default'` | Color theme variant (default=green, primary=blue, monochrome=black/white) |
| `labelText` | `string` | `''` | Label text for the radio button |
| `labelPosition` | `'end' \| 'start'` | `'end'` | Position of label relative to radio button |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `ag-change` | `{ checked: boolean, value: string, name: string }` | Fired when the radio selection changes |

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
- **Always wrap radio groups in `<fieldset>` with a `<legend>`** for screen readers to understand the grouping context
- Disabled state prevents interaction and is communicated to assistive technologies

## Theme Support

All themes automatically support dark mode through CSS design tokens:

- **Default theme**: Uses `--ag-success` (green) which adapts to dark mode
- **Primary theme**: Uses `--ag-primary` (blue) which adapts to dark mode
- **Monochrome theme**: Uses `--ag-black` and `--ag-white` which invert in dark mode

## Best Practices

- **Use `name` attribute**: All radio buttons in a group must have the same `name` attribute to ensure mutual exclusivity
- **Always use fieldsets**: Wrap radio groups in `<fieldset>` with a descriptive `<legend>` for accessibility
- **Pre-select a default**: For better UX, always have one radio pre-selected in a required group
- **Use checkboxes for multiple selections**: If users can select multiple options, use checkboxes instead
- **Inline vs. stacked**: Use inline layout (flex/horizontal) for 2-3 short options; use stacked (vertical) for longer labels or more options

## Notes

- **Mutual exclusivity**: Only one radio in a group (same `name`) can be selected at a time
- **Form integration**: Radio buttons work seamlessly with standard HTML forms
- **Lit**: Properties can be set via attributes or via property binding (e.g., `.checked=${true}`)
- All three implementations (Lit, React, Vue) share the same underlying styles and behavior
