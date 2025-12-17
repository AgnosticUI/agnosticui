# SpecSheet: Progress Component

This document outlines the specifications for the `Progress` component.

## Props

| Prop              | Type      | Default | Description                                                                                               |
| ----------------- | --------- | ------- | --------------------------------------------------------------------------------------------------------- |
| `value`           | `number`  | —       | The current value of the progress bar. If not provided, the progress bar is indeterminate.                |
| `max`             | `number`  | `100`   | The maximum value of the progress bar.                                                                    |
| `label`           | `string`  | `''`    | An accessible label for the progress bar. It will be visually hidden but available to assistive technologies. |

## Accessibility

- The component will render a standard HTML5 `<progress>` element.
- A `label` will be associated with the `<progress>` element for accessibility. The label text will be provided via the `label` prop. The label will be visually hidden but accessible to screen readers.
- If the `value` prop is not provided, the progress bar will be in an indeterminate state. This is achieved by omitting the `value` attribute on the `<progress>` element.
- The `aria-label` attribute will be used on the `<progress>` element to provide the accessible name.

## CSS Shadow Parts

| Part                | Description                              |
| ------------------- | ---------------------------------------- |
| `progress-wrapper`  | The main container element for the component. |
| `progress-label`    | The visually hidden label element.       |
| `progress-bar`      | The native `<progress>` element.         |

## V1 Parity

Not applicable, as no v1 implementation details were provided.
