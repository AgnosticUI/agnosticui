# Select

<AlphaWarning />

The Select component is a lightly styled native HTML select element that provides consistent styling across browsers while maintaining native functionality and accessibility.

## Examples

<FrameworkExample component="select" :vue-code="vueCode" :lit-code="litCode" :react-code="reactCode">
  <template #vue>
    <SelectExamples />
  </template>
  <template #lit>
    <select-lit-examples></select-lit-examples>
  </template>
</FrameworkExample>

<script setup>
import AlphaWarning from '../components/AlphaWarning.vue'
import SelectExamples from '../examples/SelectExamples.vue'
import FrameworkExample from '../.vitepress/theme/components/FrameworkExample.vue'
import '../examples/SelectLitExamples.js'
import vueCode from '../examples/SelectExamples.vue?raw'
import litCode from '../examples/SelectLitExamples.js?raw'
import reactCode from '../examples/SelectReactExamples.jsx?raw'
</script>

## Usage

::: tip
The framework examples below `import` AgnosticUI as an `npm` package. Alternatively, you can use the **CLI for complete control, AI/LLM visibility, and full code ownership**:

```bash
npx ag init --framework FRAMEWORK # react, vue, lit, svelte, etc.
npx ag add Select
```

The CLI copies source code directly into your project, giving you full visibility and control. After running `npx ag add`, you'll receive exact import instructions.
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

::: code-group

```sh [npm]
npm install agnosticui-core
```

```sh [yarn]
yarn add agnosticui-core
```

```sh [pnpm]
pnpm add agnosticui-core
```

```sh [bun]
bun add agnosticui-core
```

:::

## Component API

### Props

| Prop            | Type                                    | Default     | Description                                                                                                                |
| --------------- | --------------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------- |
| `size`          | `'small' \| 'large' \| ''`              | `''`        | Size variant of the select                                                                                                 |
| `multiple`      | `boolean`                               | `false`     | Enable multiple selection                                                                                                  |
| `disabled`      | `boolean`                               | `false`     | Disable the select                                                                                                         |
| `name`          | `string`                                | `''`        | Form name attribute                                                                                                        |
| `multipleSize`  | `number`                                | `undefined` | Number of visible options for multiple select                                                                              |
| `label`         | `string`                                | `''`        | External label text                                                                                                        |
| `labelPosition` | `'top' \| 'start' \| 'end' \| 'bottom'` | `'top'`     | Position of the label relative to select. **Note:** `'bottom'` is not recommended as the dropdown menu may cover the label |
| `labelHidden`   | `boolean`                               | `false`     | Visually hides the label (still accessible to screen readers)                                                              |
| `noLabel`       | `boolean`                               | `false`     | Removes the label element entirely                                                                                         |
| `required`      | `boolean`                               | `false`     | Marks the select as required (adds asterisk to label)                                                                      |
| `invalid`       | `boolean`                               | `false`     | Marks the select as invalid (shows error state)                                                                            |
| `errorMessage`  | `string`                                | `''`        | Error message displayed when `invalid` is true                                                                             |
| `helpText`      | `string`                                | `''`        | Helper text displayed below the select                                                                                     |

### Events

The Select component supports both custom and native events following the AgnosticUI v2 event conventions.

| Event    | Framework                                             | Detail                          | Description                                                                  |
| -------- | ----------------------------------------------------- | ------------------------------- | ---------------------------------------------------------------------------- |
| `change` | Vue: `@change`<br>React: `onChange`<br>Lit: `@change` | `{ value: string \| string[] }` | Fired when the selected value changes. **Custom event** with detail payload. |
| `focus`  | Vue: `@focus`<br>React: `onFocus`<br>Lit: `@focus`    | `FocusEvent`                    | Fired when select receives focus. **Native event**, re-dispatched from host. |
| `blur`   | Vue: `@blur`<br>React: `onBlur`<br>Lit: `@blur`       | `FocusEvent`                    | Fired when select loses focus. **Native event**, re-dispatched from host.    |
| `click`  | Vue: `@click`<br>React: `onClick`<br>Lit: `@click`    | `MouseEvent`                    | Fired when select is clicked. **Native event**.                              |

### Slots

| Slot    | Description     |
| ------- | --------------- |
| default | Option elements |

### CSS Shadow Parts

| Part        | Description               |
| ----------- | ------------------------- |
| `ag-select` | The select element itself |

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
ag-select::part(ag-select) {
  border: 2px solid blue;
  border-radius: 8px;
  font-size: 1.2rem;
}

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
