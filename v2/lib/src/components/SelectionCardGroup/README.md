# SelectionCardGroup

A card-based selection UI for single (radio) or multiple (checkbox) selection.

## Usage

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

## Props

### SelectionCardGroup

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'radio' \| 'checkbox'` | `'radio'` | Selection mode |
| `name` | `string` | `''` | Input name attribute |
| `legend` | `string` | `''` | Accessible group label |
| `legendHidden` | `boolean` | `false` | Visually hide legend |
| `value` | `string` | `''` | Controlled value (radio) |
| `values` | `string[]` | `[]` | Controlled values (checkbox) |
| `disabled` | `boolean` | `false` | Disable all cards |

### SelectionCard

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | `''` | Unique value (required) |
| `label` | `string` | `''` | Accessible label (required) |
| `checked` | `boolean` | `false` | Selection state |
| `disabled` | `boolean` | `false` | Disable this card |

## Events

| Event | Detail | Description |
|-------|--------|-------------|
| `selection-change` | `{ value, checked, selectedValues }` | Fired when selection changes |

## Styling

See component source for CSS custom properties and `::part` selectors.
