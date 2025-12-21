# Kbd Component SpecSheet

## Overview

The Kbd component is used to display keyboard shortcuts. It renders a `<kbd>` element with appropriate styling.

## Markup

The component will render a host element that contains a slot for the keyboard shortcut text.

```html
<ag-kbd>⌘</ag-kbd>
<ag-kbd>Shift + Tab</ag-kbd>
```

## Props

| Prop         | Type                                                                      | Default   | Description                                                                    |
|--------------|---------------------------------------------------------------------------|-----------|--------------------------------------------------------------------------------|
| `variant`    | `'default' \| 'primary' \| 'secondary' \| 'info' \| 'warning' \| 'success' \| 'danger' \| 'error'` | `'default'` | Sets the color scheme of the kbd component.                                    |
| `bordered`   | `boolean`                                                                 | `true`    | If `true`, the kbd component will have a border.                               |
| `background` | `boolean`                                                                 | `false`   | If `true`, the kbd component will have a background color.                     |
| `size`       | `'sm' \| 'md' \| 'lg'`                                                    | `'md'`    | Sets the size of the kbd component.                                            |

## CSS Shadow Parts

| Part           | Description                  |
|----------------|------------------------------|
| `ag-kbd-wrapper` | The main wrapper element.    |

## Behavior

- The component should render its content within a `<slot>`.
- The component should apply different styles based on the `variant`, `bordered`, `background`, and `size` props.

## Accessibility

- The component will render a `<kbd>` element, which has semantic meaning for keyboard shortcuts.

## Dark Mode

- The component should support dark mode out of the the box by using CSS custom properties from `ag-tokens.css` and `ag-tokens-dark.css`.
