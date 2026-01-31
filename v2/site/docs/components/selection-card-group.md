# SelectionCardGroup

<AlphaWarning />

A card-based selection UI for single (radio) or multiple (checkbox) selection. Ideal for onboarding flows, preferences, pricing tiers, and feature opt-ins.

## Examples

<FrameworkExample
  component="selection-card-group"
  :vue-code="vueCode"
  :lit-code="litCode"
  :react-code="reactCode"
>
  <template #vue>
    <SelectionCardGroupExamples />
  </template>
  <template #lit>
    <selection-card-group-lit-examples></selection-card-group-lit-examples>
  </template>
</FrameworkExample>

<script setup>
import AlphaWarning from '../components/AlphaWarning.vue'
import SelectionCardGroupExamples from '../examples/SelectionCardGroupExamples.vue'
import FrameworkExample from '../.vitepress/theme/components/FrameworkExample.vue'
import '../examples/SelectionCardGroupLitExamples.js'
import vueCode from '../examples/SelectionCardGroupExamples.vue?raw'
import litCode from '../examples/SelectionCardGroupLitExamples.js?raw'
import reactCode from '../examples/SelectionCardGroupReactExamples.jsx?raw'
</script>

## Usage

::: tip
The framework examples below `import` AgnosticUI as an `npm` package. Alternatively, you can use the **CLI for complete control, AI/LLM visibility, and full code ownership**:
```bash
npx ag init --framework FRAMEWORK # react, vue, lit, svelte, etc.
npx ag add SelectionCardGroup
npx ag add SelectionCard
```
The CLI copies source code directly into your project, giving you full visibility and control. After running `npx ag add`, you'll receive exact import instructions.
:::

::: details Vue
```vue
<template>
  <VueSelectionCardGroup
    type="radio"
    name="interests"
    legend="Select your interests"
    @selection-change="handleChange"
  >
    <VueSelectionCard value="tech" label="Technology">
      <span>Technology</span>
    </VueSelectionCard>
    <VueSelectionCard value="art" label="Art & Design">
      <span>Art & Design</span>
    </VueSelectionCard>
  </VueSelectionCardGroup>
</template>

<script setup>
import { VueSelectionCardGroup } from 'agnosticui-core/selection-card-group/vue';
import { VueSelectionCard } from 'agnosticui-core/selection-card/vue';

const handleChange = (e) => {
  console.log('Selected:', e.detail.selectedValues);
};
</script>
```
:::

::: details React
```tsx
import { ReactSelectionCardGroup } from "agnosticui-core/selection-card-group/react";
import { ReactSelectionCard } from "agnosticui-core/selection-card/react";

export default function Example() {
  const handleChange = (e) => {
    console.log('Selected:', e.detail.selectedValues);
  };

  return (
    <ReactSelectionCardGroup
      type="radio"
      name="interests"
      legend="Select your interests"
      onSelectionChange={handleChange}
    >
      <ReactSelectionCard value="tech" label="Technology">
        <span>Technology</span>
      </ReactSelectionCard>
      <ReactSelectionCard value="art" label="Art & Design">
        <span>Art & Design</span>
      </ReactSelectionCard>
    </ReactSelectionCardGroup>
  );
}
```
:::

::: details Lit (Web Components)
```html
<script type="module">
  import "agnosticui-core/selection-card-group";
  import "agnosticui-core/selection-card";

  const group = document.querySelector('ag-selection-card-group');
  group.addEventListener('selection-change', (e) => {
    console.log('Selected:', e.detail.selectedValues);
  });
</script>

<ag-selection-card-group type="radio" name="interests" legend="Select your interests">
  <ag-selection-card value="tech" label="Technology">
    <span>Technology</span>
  </ag-selection-card>
  <ag-selection-card value="art" label="Art & Design">
    <span>Art & Design</span>
  </ag-selection-card>
</ag-selection-card-group>
```
:::

## Props

### SelectionCardGroup

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'radio' \| 'checkbox'` | `'radio'` | Selection mode |
| `name` | `string` | `''` | Input name attribute (required) |
| `legend` | `string` | `''` | Accessible group label |
| `legend-hidden` | `boolean` | `false` | Visually hide legend |
| `theme` | `'' \| 'success' \| 'info' \| 'warning' \| 'error' \| 'monochrome'` | `''` | Theme variant (empty = primary/blue) |
| `value` | `string` | `''` | Controlled value (radio) |
| `values` | `string[]` | `[]` | Controlled values (checkbox) |
| `disabled` | `boolean` | `false` | Disable all cards |

### SelectionCard

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | `''` | Unique value (required) |
| `label` | `string` | `''` | Accessible label (required) |
| `checked` | `boolean` | `false` | Selection state (managed by group) |
| `disabled` | `boolean` | `false` | Disable this card |

## Events

### selection-change

Fired when selection changes.

```typescript
interface SelectionChangeEventDetail {
  value: string;        // Value that triggered the change
  checked: boolean;     // Whether the card is now selected
  selectedValues: string[]; // All currently selected values
}
```

## Themes

The `theme` prop controls the color scheme for selected cards:

| Theme | Description |
|-------|-------------|
| `''` (default) | Primary blue - uses `--ag-primary-*` tokens |
| `success` | Green - uses `--ag-success-*` tokens |
| `info` | Cyan/blue - uses `--ag-info-*` tokens |
| `warning` | Yellow/orange - uses `--ag-warning-*` tokens |
| `error` | Red - uses `--ag-danger-*` tokens |
| `monochrome` | Black/white - uses `--ag-black` and inverted tokens |

```html
<!-- Success theme -->
<ag-selection-card-group type="radio" name="status" theme="success">
  ...
</ag-selection-card-group>
```

## Styling

### CSS Custom Properties

```css
/* Card sizing & spacing */
--ag-selection-card-padding: var(--ag-space-4);
--ag-selection-card-gap: var(--ag-space-3);
--ag-selection-card-border-radius: var(--ag-radius-md);
--ag-selection-card-indicator-size: var(--ag-space-5);

/* Card colors - unselected */
--ag-selection-card-background: var(--ag-background-primary);
--ag-selection-card-border-color: var(--ag-border);

/* Card colors - selected */
--ag-selection-card-selected-background: var(--ag-primary-background);
--ag-selection-card-selected-border-color: var(--ag-primary);
--ag-selection-card-indicator-color: var(--ag-primary);

/* Group layout */
--ag-selection-card-group-gap: var(--ag-space-4);
```

### CSS Parts

#### SelectionCardGroup

| Part | Description |
|------|-------------|
| `fieldset` | The fieldset element |
| `legend` | The legend element |
| `content` | The content wrapper |

#### SelectionCard

| Part | Description |
|------|-------------|
| `container` | The outer clickable label |
| `control` | The hidden input element |
| `indicator` | The selection indicator (filled circle for radio, checkmark for checkbox) |
| `content` | The slotted content wrapper |

## Accessibility

- Uses `<fieldset>` and `<legend>` for proper group semantics
- Each card has a required `label` prop for screen readers
- Keyboard navigation:
  - **Arrow keys**: Navigate between cards (selects in radio mode)
  - **Space/Enter**: Toggle selection
  - **Home/End**: Jump to first/last card
- Focus ring visible on keyboard navigation
- `role="radiogroup"` for radio mode, `role="group"` for checkbox mode
