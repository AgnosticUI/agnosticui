# Select

The Select component is a lightly styled native HTML select element that provides consistent styling across browsers while maintaining native functionality and accessibility.

## Examples

<SelectExamples />

<script setup>
import SelectExamples from '../examples/SelectExamples.vue'
</script>

## Usage

::: details Vue
```vue
<template>
  <section>
    <!-- Basic Select -->
    <div>
      <label for="tennis">Greatest Tennis Player</label>
      <VueSelect id="tennis" name="tennis" v-model:value="selectedPlayer">
        <option value="">Select a player</option>
        <option value="serena">Serena Williams</option>
        <option value="roger">Roger Federer</option>
        <option value="rafa">Rafael Nadal</option>
      </VueSelect>
      <p v-if="selectedPlayer">Selected: {{ selectedPlayer }}</p>
    </div>

    <!-- Small Select -->
    <div>
      <label for="small">Small Select</label>
      <VueSelect id="small" size="small">
        <option value="">Choose size</option>
        <option value="xs">Extra Small</option>
        <option value="s">Small</option>
        <option value="m">Medium</option>
      </VueSelect>
    </div>

    <!-- Large Select -->
    <div>
      <label for="large">Large Select</label>
      <VueSelect id="large" size="large">
        <option value="">Choose size</option>
        <option value="l">Large</option>
        <option value="xl">Extra Large</option>
      </VueSelect>
    </div>

    <!-- Multiple Select -->
    <div>
      <label for="multiple">Multiple Select</label>
      <VueSelect
        id="multiple"
        :multiple="true"
        :multipleSize="5"
        v-model:value="selectedPlayers"
      >
        <option value="serena">Serena Williams</option>
        <option value="roger">Roger Federer</option>
        <option value="rafa">Rafael Nadal</option>
        <option value="novak">Novak Djokovic</option>
      </VueSelect>
      <p v-if="selectedPlayers.length">Selected: {{ selectedPlayers.join(', ') }}</p>
    </div>

    <!-- Disabled Select -->
    <div>
      <label for="disabled">Disabled Select</label>
      <VueSelect id="disabled" :disabled="true">
        <option value="">Cannot select</option>
        <option value="1">Option 1</option>
      </VueSelect>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VueSelect } from 'agnosticui-core/select/vue';

const selectedPlayer = ref('');
const selectedPlayers = ref<string[]>([]);
</script>
```
:::

::: details React
```tsx
import { ReactSelect } from 'agnosticui-core/select/react';
import { useState } from 'react';

export default function SelectExamples() {
  const [selectedPlayer, setSelectedPlayer] = useState('');
  const [selectedPlayers, setSelectedPlayers] = useState<string[]>([]);

  return (
    <section>
      {/* Basic Select */}
      <div>
        <label htmlFor="tennis">Greatest Tennis Player</label>
        <ReactSelect
          id="tennis"
          name="tennis"
          onChange={(e) => setSelectedPlayer(e.detail.value as string)}
        >
          <option value="">Select a player</option>
          <option value="serena">Serena Williams</option>
          <option value="roger">Roger Federer</option>
          <option value="rafa">Rafael Nadal</option>
        </ReactSelect>
        {selectedPlayer && <p>Selected: {selectedPlayer}</p>}
      </div>

      {/* Small Select */}
      <div>
        <label htmlFor="small">Small Select</label>
        <ReactSelect id="small" size="small">
          <option value="">Choose size</option>
          <option value="xs">Extra Small</option>
          <option value="s">Small</option>
          <option value="m">Medium</option>
        </ReactSelect>
      </div>

      {/* Large Select */}
      <div>
        <label htmlFor="large">Large Select</label>
        <ReactSelect id="large" size="large">
          <option value="">Choose size</option>
          <option value="l">Large</option>
          <option value="xl">Extra Large</option>
        </ReactSelect>
      </div>

      {/* Multiple Select */}
      <div>
        <label htmlFor="multiple">Multiple Select</label>
        <ReactSelect
          id="multiple"
          multiple={true}
          multipleSize={5}
          onChange={(e) => setSelectedPlayers(e.detail.value as string[])}
        >
          <option value="serena">Serena Williams</option>
          <option value="roger">Roger Federer</option>
          <option value="rafa">Rafael Nadal</option>
          <option value="novak">Novak Djokovic</option>
        </ReactSelect>
        {selectedPlayers.length > 0 && (
          <p>Selected: {selectedPlayers.join(', ')}</p>
        )}
      </div>

      {/* Disabled Select */}
      <div>
        <label htmlFor="disabled">Disabled Select</label>
        <ReactSelect id="disabled" disabled={true}>
          <option value="">Cannot select</option>
          <option value="1">Option 1</option>
        </ReactSelect>
      </div>
    </section>
  );
}
```
:::

::: details Lit
```ts
import 'agnosticui-core/select';
import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';

@customElement('select-examples')
export class SelectExamples extends LitElement {
  @state() private selectedPlayer = '';
  @state() private selectedPlayers: string[] = [];

  render() {
    return html`
      <section>
        <!-- Basic Select -->
        <div>
          <label for="tennis">Greatest Tennis Player</label>
          <ag-select
            id="tennis"
            name="tennis"
            @change=${(e: CustomEvent) => {
              this.selectedPlayer = e.detail.value;
            }}
          >
            <option value="">Select a player</option>
            <option value="serena">Serena Williams</option>
            <option value="roger">Roger Federer</option>
            <option value="rafa">Rafael Nadal</option>
          </ag-select>
          ${this.selectedPlayer ? html`<p>Selected: ${this.selectedPlayer}</p>` : ''}
        </div>

        <!-- Small Select -->
        <div>
          <label for="small">Small Select</label>
          <ag-select id="small" size="small">
            <option value="">Choose size</option>
            <option value="xs">Extra Small</option>
            <option value="s">Small</option>
            <option value="m">Medium</option>
          </ag-select>
        </div>

        <!-- Large Select -->
        <div>
          <label for="large">Large Select</label>
          <ag-select id="large" size="large">
            <option value="">Choose size</option>
            <option value="l">Large</option>
            <option value="xl">Extra Large</option>
          </ag-select>
        </div>

        <!-- Multiple Select -->
        <div>
          <label for="multiple">Multiple Select</label>
          <ag-select
            id="multiple"
            multiple
            multipleSize="5"
            @change=${(e: CustomEvent) => {
              this.selectedPlayers = e.detail.value as string[];
            }}
          >
            <option value="serena">Serena Williams</option>
            <option value="roger">Roger Federer</option>
            <option value="rafa">Rafael Nadal</option>
            <option value="novak">Novak Djokovic</option>
          </ag-select>
          ${this.selectedPlayers.length > 0
            ? html`<p>Selected: ${this.selectedPlayers.join(', ')}</p>`
            : ''
          }
        </div>

        <!-- Disabled Select -->
        <div>
          <label for="disabled">Disabled Select</label>
          <ag-select id="disabled" disabled>
            <option value="">Cannot select</option>
            <option value="1">Option 1</option>
          </ag-select>
        </div>
      </section>
    `;
  }
}
```
:::


## External Label Support

The Select component now supports external labels, helper text, validation states, and error messages - following the same pattern as Input, Checkbox, and Radio components.

### With External Label

::: details Vue
```vue
<template>
  <!-- Basic external label -->
  <VueSelect
    label="Favorite Framework"
    name="framework"
    v-model:value="framework"
  >
    <option value="">Choose a framework</option>
    <option value="react">React</option>
    <option value="vue">Vue</option>
    <option value="angular">Angular</option>
  </VueSelect>

  <!-- With helper text -->
  <VueSelect
    label="Country"
    help-text="Select your country of residence"
    name="country"
  >
    <option value="">Select a country</option>
    <option value="us">United States</option>
    <option value="uk">United Kingdom</option>
  </VueSelect>

  <!-- Required field -->
  <VueSelect
    label="Preferred Language"
    :required="true"
    help-text="This field is required"
    name="language"
  >
    <option value="">Select a language</option>
    <option value="en">English</option>
    <option value="es">Spanish</option>
  </VueSelect>

  <!-- With validation error -->
  <VueSelect
    label="Payment Method"
    :required="true"
    :invalid="true"
    error-message="Please select a payment method to continue"
    name="payment"
  >
    <option value="">Select payment method</option>
    <option value="credit">Credit Card</option>
    <option value="debit">Debit Card</option>
  </VueSelect>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VueSelect } from 'agnosticui-core/select/vue';

const framework = ref('');
</script>
```
:::

::: details React
```tsx
import { ReactSelect } from 'agnosticui-core/select/react';

export default function SelectWithLabels() {
  return (
    <>
      {/* Basic external label */}
      <ReactSelect
        label="Favorite Framework"
        name="framework"
      >
        <option value="">Choose a framework</option>
        <option value="react">React</option>
        <option value="vue">Vue</option>
        <option value="angular">Angular</option>
      </ReactSelect>

      {/* With helper text */}
      <ReactSelect
        label="Country"
        helpText="Select your country of residence"
        name="country"
      >
        <option value="">Select a country</option>
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
      </ReactSelect>

      {/* Required field */}
      <ReactSelect
        label="Preferred Language"
        required
        helpText="This field is required"
        name="language"
      >
        <option value="">Select a language</option>
        <option value="en">English</option>
        <option value="es">Spanish</option>
      </ReactSelect>

      {/* With validation error */}
      <ReactSelect
        label="Payment Method"
        required
        invalid
        errorMessage="Please select a payment method to continue"
        name="payment"
      >
        <option value="">Select payment method</option>
        <option value="credit">Credit Card</option>
        <option value="debit">Debit Card</option>
      </ReactSelect>
    </>
  );
}
```
:::

::: details Lit
```ts
import 'agnosticui-core/select';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('select-with-labels')
export class SelectWithLabels extends LitElement {
  render() {
    return html`
      <!-- Basic external label -->
      <ag-select
        .label=${"Favorite Framework"}
        name="framework"
      >
        <option value="">Choose a framework</option>
        <option value="react">React</option>
        <option value="vue">Vue</option>
        <option value="angular">Angular</option>
      </ag-select>

      <!-- With helper text -->
      <ag-select
        .label=${"Country"}
        .helpText=${"Select your country of residence"}
        name="country"
      >
        <option value="">Select a country</option>
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
      </ag-select>

      <!-- Required field -->
      <ag-select
        .label=${"Preferred Language"}
        .required=${true}
        .helpText=${"This field is required"}
        name="language"
      >
        <option value="">Select a language</option>
        <option value="en">English</option>
        <option value="es">Spanish</option>
      </ag-select>

      <!-- With validation error -->
      <ag-select
        .label=${"Payment Method"}
        .required=${true}
        .invalid=${true}
        .errorMessage=${"Please select a payment method to continue"}
        name="payment"
      >
        <option value="">Select payment method</option>
        <option value="credit">Credit Card</option>
        <option value="debit">Debit Card</option>
      </ag-select>
    `;
  }
}
```
:::

### Label Positioning

The `labelPosition` prop controls where the label appears relative to the select. Supports `'top'` (default), `'start'`, `'end'`, and `'bottom'`.

**Note:** The `'bottom'` position is not recommended for select elements because the dropdown menu will cover the label when opened.

::: details Vue
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 2rem;">
    <!-- Top position (default) -->
    <VueSelect
      label="Top Label (Default)"
      label-position="top"
      name="top"
    >
      <option value="">Select option</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
    </VueSelect>

    <!-- Start position (label before select) -->
    <VueSelect
      label="Start Position"
      label-position="start"
      name="start"
    >
      <option value="">Select option</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
    </VueSelect>

    <!-- End position (label after select) -->
    <VueSelect
      label="End Position"
      label-position="end"
      name="end"
    >
      <option value="">Select option</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
    </VueSelect>

    <!-- Bottom position (not recommended - dropdown covers label) -->
    <VueSelect
      label="Bottom Position (Not Recommended)"
      label-position="bottom"
      name="bottom"
      help-text="The dropdown will cover this label when opened"
    >
      <option value="">Select option</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
    </VueSelect>
  </div>
</template>

<script setup lang="ts">
import { VueSelect } from 'agnosticui-core/select/vue';
</script>
```
:::

::: details React
```tsx
import { ReactSelect } from 'agnosticui-core/select/react';

export default function LabelPositioningExamples() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Top position (default) */}
      <ReactSelect
        label="Top Label (Default)"
        labelPosition="top"
        name="top"
      >
        <option value="">Select option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </ReactSelect>

      {/* Start position (label before select) */}
      <ReactSelect
        label="Start Position"
        labelPosition="start"
        name="start"
      >
        <option value="">Select option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </ReactSelect>

      {/* End position (label after select) */}
      <ReactSelect
        label="End Position"
        labelPosition="end"
        name="end"
      >
        <option value="">Select option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </ReactSelect>

      {/* Bottom position (not recommended - dropdown covers label) */}
      <ReactSelect
        label="Bottom Position (Not Recommended)"
        labelPosition="bottom"
        name="bottom"
        helpText="The dropdown will cover this label when opened"
      >
        <option value="">Select option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </ReactSelect>
    </div>
  );
}
```
:::

::: details Lit
```ts
import 'agnosticui-core/select';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('label-positioning-examples')
export class LabelPositioningExamples extends LitElement {
  render() {
    return html`
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <!-- Top position (default) -->
        <ag-select
          .label=${"Top Label (Default)"}
          .labelPosition=${"top"}
          name="top"
        >
          <option value="">Select option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </ag-select>

        <!-- Start position (label before select) -->
        <ag-select
          .label=${"Start Position"}
          .labelPosition=${"start"}
          name="start"
        >
          <option value="">Select option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </ag-select>

        <!-- End position (label after select) -->
        <ag-select
          .label=${"End Position"}
          .labelPosition=${"end"}
          name="end"
        >
          <option value="">Select option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </ag-select>

        <!-- Bottom position (not recommended - dropdown covers label) -->
        <ag-select
          .label=${"Bottom Position (Not Recommended)"}
          .labelPosition=${"bottom"}
          .helpText=${"The dropdown will cover this label when opened"}
          name="bottom"
        >
          <option value="">Select option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </ag-select>
      </div>
    `;
  }
}
```
:::

## Features

- **Native select element** - Uses browser's built-in `<select>` with custom styling
- **Size variants** - Small, default, and large sizes
- **Multiple selection** - Support for native multiple select with `size` attribute
- **External label support** - Built-in label, helper text, and error messages
- **Validation states** - Required and invalid states with accessible error messages
- **Disabled state** - Proper disabled styling and accessibility
- **Custom dropdown arrow** - SVG arrow icon for single select mode
- **Accessibility** - Maintains all native select accessibility features
- **Responsive** - 100% width by default, adapts to container

## Installation

```bash
npm install agnosticui-core
```

## Component API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'small' \| 'large' \| ''` | `''` | Size variant of the select |
| `multiple` | `boolean` | `false` | Enable multiple selection |
| `disabled` | `boolean` | `false` | Disable the select |
| `name` | `string` | `''` | Form name attribute |
| `multipleSize` | `number` | `undefined` | Number of visible options for multiple select |
| `label` | `string` | `''` | External label text |
| `labelPosition` | `'top' \| 'start' \| 'end' \| 'bottom'` | `'top'` | Position of the label relative to select. **Note:** `'bottom'` is not recommended as the dropdown menu may cover the label |
| `labelHidden` | `boolean` | `false` | Visually hides the label (still accessible to screen readers) |
| `noLabel` | `boolean` | `false` | Removes the label element entirely |
| `required` | `boolean` | `false` | Marks the select as required (adds asterisk to label) |
| `invalid` | `boolean` | `false` | Marks the select as invalid (shows error state) |
| `errorMessage` | `string` | `''` | Error message displayed when `invalid` is true |
| `helpText` | `string` | `''` | Helper text displayed below the select |

### Events

The Select component supports both custom and native events following the AgnosticUI v2 [event conventions](../EVENT_CONVENTIONS.md).

| Event | Framework | Detail | Description |
|-------|-----------|--------|-------------|
| `change` | Vue: `@change`<br>React: `onChange`<br>Lit: `@change` | `{ value: string \| string[] }` | Fired when the selected value changes. **Custom event** with detail payload. |
| `focus` | Vue: `@focus`<br>React: `onFocus`<br>Lit: `@focus` | `FocusEvent` | Fired when select receives focus. **Native event**, re-dispatched from host. |
| `blur` | Vue: `@blur`<br>React: `onBlur`<br>Lit: `@blur` | `FocusEvent` | Fired when select loses focus. **Native event**, re-dispatched from host. |
| `click` | Vue: `@click`<br>React: `onClick`<br>Lit: `@click` | `MouseEvent` | Fired when select is clicked. **Native event**. |

### Slots

| Slot | Description |
|------|-------------|
| default | Option elements |

### CSS Shadow Parts

| Part | Description |
|------|-------------|
| `ag-select` | The select element itself |

## Event Handling Examples

The Select component supports both **addEventListener** and **callback props** patterns for all events.

### Lit - Dual Dispatch Pattern

```ts
import 'agnosticui-core/select';
import { html } from 'lit';

// Pattern 1: addEventListener
const select = document.querySelector('ag-select');
select.addEventListener('change', (e) => {
  console.log('Value changed:', e.detail.value);
});

// Pattern 2: Callback props
const template = html`
  <ag-select
    .onChange=${(e) => console.log('Callback:', e.detail.value)}
    .onFocus=${() => console.log('Focused')}
    .onBlur=${() => console.log('Blurred')}
  >
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
  </ag-select>
`;
```

### React - Event Props

```tsx
import { ReactSelect } from 'agnosticui-core/select/react';
import { useState } from 'react';

function SelectExample() {
  const [value, setValue] = useState('');

  return (
    <ReactSelect
      onChange={(e) => setValue(e.detail.value as string)}
      onFocus={() => console.log('Focused')}
      onBlur={() => console.log('Blurred')}
    >
      <option value="">Choose...</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
    </ReactSelect>
  );
}
```

### Vue - Event Emits & v-model

```vue
<script setup>
import { ref } from 'vue';
import { VueSelect } from 'agnosticui-core/select/vue';

const selectedValue = ref('');
const eventLog = ref([]);

const handleChange = (detail) => {
  eventLog.value.push(`Changed to: ${detail.value}`);
};
</script>

<template>
  <VueSelect
    v-model:value="selectedValue"
    @change="handleChange"
    @focus="() => eventLog.push('Focused')"
    @blur="() => eventLog.push('Blurred')"
  >
    <option value="">Choose...</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
  </VueSelect>

  <!-- Display current value and event log -->
  <p>Current: {{ selectedValue }}</p>
  <ul>
    <li v-for="(event, i) in eventLog" :key="i">{{ event }}</li>
  </ul>
</template>
```

### Multiple Select with Events

```vue
<script setup>
import { ref } from 'vue';
import { VueSelect } from 'agnosticui-core/select/vue';

const selectedPlayers = ref<string[]>([]);

const handleChange = (detail) => {
  console.log('Selected players:', detail.value);
};
</script>

<template>
  <VueSelect
    v-model:value="selectedPlayers"
    @change="handleChange"
    :multiple="true"
    :multipleSize="5"
  >
    <option value="serena">Serena Williams</option>
    <option value="roger">Roger Federer</option>
    <option value="rafa">Rafael Nadal</option>
  </VueSelect>

  <p>Selected: {{ selectedPlayers.join(', ') }}</p>
</template>
```

## Accessibility

The Select component maintains all native select accessibility features:

- **Semantic HTML** - Uses native `<select>` element
- **Label association** - Supports proper `id`/`for` label relationships (both external labels and manual labels)
- **ARIA relationships** - Automatically links helper text and error messages via `aria-describedby`
- **Required fields** - Visual asterisk indicator and proper `required` attribute
- **Error states** - `aria-invalid` attribute and associated error messages
- **Keyboard navigation** - Full keyboard support (arrow keys, Enter, Space, Escape)
- **Screen reader support** - Native screen reader announcements with enhanced context from helper/error text
- **Focus management** - Clear focus indicator with high contrast mode support
- **Disabled state** - Proper `disabled` and `aria-disabled` attributes

## Customization

You can customize the Select component using CSS Shadow Parts:

```css
/* Custom select styling */
ag-select::part(ag-select) {
  border: 2px solid blue;
  border-radius: 8px;
  font-size: 1.2rem;
}

/* Focus state */
ag-select::part(ag-select):focus {
  border-color: darkblue;
  box-shadow: 0 0 0 3px rgba(0, 0, 255, 0.3);
}
```

## Design Tokens

The Select component uses the following design tokens:

- `--ag-space-*` - Padding and spacing
- `--ag-font-size-*` - Font sizes for different sizes
- `--ag-text-primary` - Text color
- `--ag-border` - Border color
- `--ag-radius-md` - Border radius
- `--ag-focus-ring-color` - Focus ring color
- `--ag-disabled-bg` - Disabled background
- `--ag-transition-fast` - Transition timing

## Best Practices

1. **Always provide a label** - Use visible labels for better accessibility
2. **Include a default option** - Provide a placeholder/prompt option with empty value
3. **Use meaningful option text** - Clear, descriptive option labels
4. **Consider multiple select** - For selecting multiple items, set `multiple` and `multipleSize`
5. **Handle change events** - Process selection changes appropriately
6. **Disable when needed** - Use `disabled` for unavailable states
7. **Size appropriately** - Use `size` prop for visual hierarchy

## Related Components

- [Input](/components/input) - For text input
- [Radio](/components/radio) - For single selection from visible options
- [Checkbox](/components/checkbox) - For multiple selections with checkboxes
