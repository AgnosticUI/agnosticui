# SpecSheet: Collapsible

This document outlines the specifications for the `Collapsible` component.

## 1. Core Behavior

- **Foundation**: The component will be built using the native `<details>` and `<summary>` HTML elements to ensure a solid, accessible foundation.
- **Functionality**: It will function as a disclosure widget, allowing a user to show and hide a block of content.
- **Styling**: It will be possible to share styles with the existing `Accordion` component for visual consistency.

## 2. Props

| Prop         | Type      | Default | Description                                                              |
|--------------|-----------|---------|--------------------------------------------------------------------------|
| `isOpen`     | `boolean` | `false` | Controls the `open` attribute of the `<details>` element, determining if the content is visible. |
| `isSkinned`  | `boolean` | `true`  | Applies the default AgnosticUI styling to the component.                 |
| `isBordered` | `boolean` | `false` | Adds a border around the component.                                      |
| `isShadow`   | `boolean` | `false` | Adds a box shadow to the component for a "card-like" appearance.         |

## 3. Slots

| Slot Name     | Description                                            |
|---------------|--------------------------------------------------------|
| `summary`     | The content for the clickable toggle (`<summary>`).    |
| `(default)`   | The collapsible content inside the `<details>` panel.  |

## 4. CSS Shadow Parts

| Part Name               | Element Description                               |
|-------------------------|---------------------------------------------------|
| `collapsible-details`   | The root `<details>` element.                     |
| `collapsible-summary`   | The `<summary>` element that acts as the trigger. |
| `collapsible-content`   | A `div` wrapping the default slot's content.      |

## 5. Accessibility

- **Semantics**: Leverages the native roles and semantics of `<details>` and `<summary>`.
- **State**: The `open` attribute on the `<details>` element will serve as the indicator for the `aria-expanded` state.
- **Keyboard**: Inherits native keyboard accessibility:
  - `Enter` and `Space` keys will toggle the content's visibility when the `<summary>` is focused.
- **Focus**: Focus management is handled by the browser.

## 6. V1 Parity & Styling

- The component's styling will be inspired by the v2 `Accordion`'s styles to promote visual consistency, as requested in the research document.
- All styling will be implemented using the AgnosticUI v2 design tokens.
- Dark mode will be fully supported.
