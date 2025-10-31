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
import { ref } from 'vue';
import { VueSelect } from 'agnosticui-core/select/vue';

const selectedPlayer = ref('');

const handleChange = (detail) => {
  console.log('Selected:', detail.value);
};
</script>

<template>
  <div>
    <label for="tennis">Greatest Tennis Player</label>
    <VueSelect
      id="tennis"
      name="tennis"
      v-model:value="selectedPlayer"
      @change="handleChange"
    >
      <option value="">Select a player</option>
      <option value="serena">Serena Williams</option>
      <option value="roger">Roger Federer</option>
      <option value="rafa">Rafael Nadal</option>
    </VueSelect>
    <p v-if="selectedPlayer">Selected: {{ selectedPlayer }}</p>
  </div>
</template>
```

**Vue v-model Support:**
- `v-model:value` - Two-way binding for the selected value (single or multiple)

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
