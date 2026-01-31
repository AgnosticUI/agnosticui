# SelectionCardGroup

A card-based selection UI for single (radio) or multiple (checkbox) selection. Ideal for onboarding flows, preferences, pricing tiers, and feature opt-ins.

## Usage

### Web Component (Lit)

```html
<ag-selection-card-group type="radio" name="interests" legend="Select your interests">
  <ag-selection-card value="tech" label="Technology">
    <span>Technology</span>
  </ag-selection-card>
  <ag-selection-card value="art" label="Art & Design">
    <span>Art & Design</span>
  </ag-selection-card>
</ag-selection-card-group>
```

### React

```jsx
import { ReactSelectionCardGroup } from 'agnosticui-core/selection-card-group/react';
import { ReactSelectionCard } from 'agnosticui-core/selection-card/react';

function App() {
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

### Vue

```vue
<template>
  <VueSelectionCardGroup
    type="radio"
    name="interests"
    legend="Select your interests"
    v-model:value="selected"
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
import { ref } from 'vue';
import { VueSelectionCardGroup } from 'agnosticui-core/selection-card-group/vue';
import { VueSelectionCard } from 'agnosticui-core/selection-card/vue';

const selected = ref('');
</script>
```

## Props

### SelectionCardGroup

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'radio' \| 'checkbox'` | `'radio'` | Selection mode |
| `name` | `string` | `''` | Input name attribute (required) |
| `legend` | `string` | `''` | Accessible group label |
| `legend-hidden` | `boolean` | `false` | Visually hide legend |
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
| `indicator` | The checkmark badge |
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
