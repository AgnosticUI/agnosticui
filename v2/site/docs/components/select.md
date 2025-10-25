# Select

The Select component is a lightly styled native HTML select element that provides consistent styling across browsers while maintaining native functionality and accessibility.

## Usage

<script setup>
import SelectExamples from '../examples/SelectExamples.vue'
</script>

<SelectExamples />

## Features

- **Native select element** - Uses browser's built-in `<select>` with custom styling
- **Size variants** - Small, default, and large sizes
- **Multiple selection** - Support for native multiple select with `size` attribute
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

### Events

| Event | Detail | Description |
|-------|--------|-------------|
| `change` | `{ value: string \| string[] }` | Emitted when selection changes |
| `focus` | Native FocusEvent | Emitted when select receives focus |
| `blur` | Native FocusEvent | Emitted when select loses focus |
| `input` | Native InputEvent | Emitted on input |
| `click` | Native MouseEvent | Emitted on click |
| `keydown` | Native KeyboardEvent | Emitted on key down |
| `keyup` | Native KeyboardEvent | Emitted on key up |

### Slots

| Slot | Description |
|------|-------------|
| default | Option elements |

### CSS Shadow Parts

| Part | Description |
|------|-------------|
| `ag-select` | The select element itself |

## Framework Examples

### Lit

```ts
import 'agnosticui-core/select';
import { html } from 'lit';

const template = html`
  <label for="tennis">Greatest Tennis Player</label>
  <ag-select id="tennis" name="tennis">
    <option value="">Select a player</option>
    <option value="serena">Serena Williams</option>
    <option value="roger">Roger Federer</option>
    <option value="rafa">Rafael Nadal</option>
  </ag-select>
`;
```

### React

```tsx
import { ReactSelect } from 'agnosticui-core/select/react';

function App() {
  return (
    <div>
      <label htmlFor="tennis">Greatest Tennis Player</label>
      <ReactSelect
        id="tennis"
        name="tennis"
        onChange={(e) => console.log(e.detail.value)}
      >
        <option value="">Select a player</option>
        <option value="serena">Serena Williams</option>
        <option value="roger">Roger Federer</option>
        <option value="rafa">Rafael Nadal</option>
      </ReactSelect>
    </div>
  );
}
```

### Vue

```vue
<script setup>
import { VueSelect } from 'agnosticui-core/select/vue';

const handleChange = (e) => {
  console.log('Selected:', e.detail.value);
};
</script>

<template>
  <div>
    <label for="tennis">Greatest Tennis Player</label>
    <VueSelect
      id="tennis"
      name="tennis"
      @change="handleChange"
    >
      <option value="">Select a player</option>
      <option value="serena">Serena Williams</option>
      <option value="roger">Roger Federer</option>
      <option value="rafa">Rafael Nadal</option>
    </VueSelect>
  </div>
</template>
```

## Accessibility

The Select component maintains all native select accessibility features:

- **Semantic HTML** - Uses native `<select>` element
- **Label association** - Supports proper `id`/`for` label relationships
- **Keyboard navigation** - Full keyboard support (arrow keys, Enter, Space, Escape)
- **Screen reader support** - Native screen reader announcements
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
