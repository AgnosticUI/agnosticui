# SelectionButtonGroup

<AlphaWarning />

A button-styled selection UI for single (radio) or multiple (checkbox) selection. Ideal for compact option toggles, filter controls, and inline selections.

## Examples

<FrameworkExample
  component="selection-button-group"
  :vue-code="vueCode"
  :lit-code="litCode"
  :react-code="reactCode"
>
  <template #vue>
    <SelectionButtonGroupExamples />
  </template>
  <template #lit>
    <selection-button-group-lit-examples></selection-button-group-lit-examples>
  </template>
</FrameworkExample>

<script setup>
import AlphaWarning from '../components/AlphaWarning.vue'
import SelectionButtonGroupExamples from '../examples/SelectionButtonGroupExamples.vue'
import FrameworkExample from '../.vitepress/theme/components/FrameworkExample.vue'
import '../examples/SelectionButtonGroupLitExamples.js'
import vueCode from '../examples/SelectionButtonGroupExamples.vue?raw'
import litCode from '../examples/SelectionButtonGroupLitExamples.js?raw'
import reactCode from '../examples/SelectionButtonGroupReactExamples.jsx?raw'
</script>

## Usage

::: tip
The framework examples below `import` AgnosticUI as an `npm` package. Alternatively, you can use the **CLI for complete control, AI/LLM visibility, and full code ownership**:
```bash
npx ag init --framework FRAMEWORK # react, vue, lit, svelte, etc.
npx ag add SelectionButtonGroup
npx ag add SelectionButton
```
The CLI copies source code directly into your project, giving you full visibility and control. After running `npx ag add`, you'll receive exact import instructions.
:::

::: details Vue
```vue
<template>
  <VueSelectionButtonGroup
    type="radio"
    name="payment"
    legend="Select payment method"
    shape="rounded"
    @selection-change="handleChange"
  >
    <VueSelectionButton value="card" label="Credit Card">
      Credit Card
    </VueSelectionButton>
    <VueSelectionButton value="paypal" label="PayPal">
      PayPal
    </VueSelectionButton>
  </VueSelectionButtonGroup>
</template>

<script setup>
import { VueSelectionButtonGroup } from 'agnosticui-core/selection-button-group/vue';
import { VueSelectionButton } from 'agnosticui-core/selection-button/vue';

const handleChange = (e) => {
  console.log('Selected:', e.detail.selectedValues);
};
</script>
```
:::

::: details React
```tsx
import { ReactSelectionButtonGroup } from "agnosticui-core/selection-button-group/react";
import { ReactSelectionButton } from "agnosticui-core/selection-button/react";

export default function Example() {
  const handleChange = (e) => {
    console.log('Selected:', e.detail.selectedValues);
  };

  return (
    <ReactSelectionButtonGroup
      type="radio"
      name="payment"
      legend="Select payment method"
      shape="rounded"
      onSelectionChange={handleChange}
    >
      <ReactSelectionButton value="card" label="Credit Card">
        Credit Card
      </ReactSelectionButton>
      <ReactSelectionButton value="paypal" label="PayPal">
        PayPal
      </ReactSelectionButton>
    </ReactSelectionButtonGroup>
  );
}
```
:::

::: details Lit (Web Components)
```html
<script type="module">
  import "agnosticui-core/selection-button-group";
  import "agnosticui-core/selection-button";

  const group = document.querySelector('ag-selection-button-group');
  group.addEventListener('selection-change', (e) => {
    console.log('Selected:', e.detail.selectedValues);
  });
</script>

<ag-selection-button-group type="radio" name="payment" legend="Select payment method" shape="rounded">
  <ag-selection-button value="card" label="Credit Card">
    Credit Card
  </ag-selection-button>
  <ag-selection-button value="paypal" label="PayPal">
    PayPal
  </ag-selection-button>
</ag-selection-button-group>
```
:::

## Props

### SelectionButtonGroup

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'radio' \| 'checkbox'` | `'radio'` | Selection mode |
| `name` | `string` | `''` | Input name attribute (required) |
| `legend` | `string` | `''` | Accessible group label |
| `legend-hidden` | `boolean` | `false` | Visually hide legend |
| `theme` | `'' \| 'success' \| 'info' \| 'warning' \| 'error' \| 'monochrome'` | `''` | Theme variant (empty = primary/blue) |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `shape` | `'' \| 'rounded' \| 'capsule'` | `''` | Button shape (empty = rectangular) |
| `value` | `string` | `''` | Controlled value (radio) |
| `values` | `string[]` | `[]` | Controlled values (checkbox) |
| `disabled` | `boolean` | `false` | Disable all buttons |

### SelectionButton

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | `''` | Unique value (required) |
| `label` | `string` | `''` | Accessible label (required) |
| `checked` | `boolean` | `false` | Selection state (managed by group) |
| `disabled` | `boolean` | `false` | Disable this button |

## Events

### selection-change

Fired when selection changes.

```typescript
interface SelectionChangeEventDetail {
  value: string;        // Value that triggered the change
  checked: boolean;     // Whether the button is now selected
  selectedValues: string[]; // All currently selected values
}
```

## Themes

The `theme` prop controls the color scheme for selected buttons:

| Theme | Description |
|-------|-------------|
| `''` (default) | Primary blue - uses `--ag-primary-*` tokens |
| `success` | Green - uses `--ag-success-*` tokens |
| `info` | Cyan/blue - uses `--ag-info-*` tokens |
| `warning` | Yellow/orange - uses `--ag-warning-*` tokens |
| `error` | Red - uses `--ag-danger-*` tokens |
| `monochrome` | Black/white - uses `--ag-black` and inverted tokens |

```html
<!-- Success theme with capsule shape -->
<ag-selection-button-group type="radio" name="status" theme="success" shape="capsule">
  ...
</ag-selection-button-group>
```

## Sizes

| Size | Description |
|------|-------------|
| `sm` | Small - compact height, smaller font |
| `md` | Medium (default) - standard size |
| `lg` | Large - taller height, larger font |

## Shapes

| Shape | Description |
|-------|-------------|
| `''` (default) | Rectangular with no border radius |
| `rounded` | Moderate border radius |
| `capsule` | Fully rounded (pill shape) |

## Styling

### CSS Custom Properties

```css
/* Group layout */
--ag-selection-button-group-gap: var(--ag-space-2);

/* Button sizing (per size variant) */
/* Size-specific heights and padding are built into the component */

/* Button colors - unchecked */
/* Uses theme tokens (--ag-primary, --ag-success, etc.) for borders and text */

/* Button colors - checked */
/* Filled background using theme tokens */
```

### CSS Parts

#### SelectionButtonGroup

| Part | Description |
|------|-------------|
| `ag-selection-button-group-fieldset` | The fieldset element |
| `ag-selection-button-group-legend` | The legend element |
| `ag-selection-button-group-content` | The content wrapper (flex container) |

#### SelectionButton

| Part | Description |
|------|-------------|
| `ag-selection-button-container` | The outer clickable label |
| `ag-selection-button-control` | The hidden input element |
| `ag-selection-button-indicator` | The selection indicator (circle with dot for radio, circle with checkmark for checkbox) |
| `ag-selection-button-content` | The slotted content wrapper |

### CSS Parts Example

```css
/* Custom gap between buttons */
ag-selection-button-group::part(ag-selection-button-group-content) {
  gap: var(--ag-space-4);
}

/* Custom button styling */
ag-selection-button::part(ag-selection-button-container) {
  font-weight: 600;
}

/* Hide the indicator for a cleaner look */
ag-selection-button::part(ag-selection-button-indicator) {
  display: none;
}
```

## Accessibility

- Uses `<fieldset>` and `<legend>` for proper group semantics
- Each button has a required `label` prop for screen readers
- Keyboard navigation:
  - **Arrow keys**: Navigate between buttons (selects in radio mode)
  - **Space/Enter**: Toggle selection
  - **Home/End**: Jump to first/last button
- Focus ring visible on keyboard navigation
- `role="radiogroup"` for radio mode, `role="group"` for checkbox mode

## Comparison with SelectionCardGroup

| Feature | SelectionButtonGroup | SelectionCardGroup |
|---------|---------------------|-------------------|
| Use case | Compact inline options | Rich content cards |
| Size variants | Yes (sm/md/lg) | No |
| Shape variants | Yes (rounded/capsule) | No |
| Content | Text labels | Rich slotted content |
| Layout | Inline flex | Grid |
