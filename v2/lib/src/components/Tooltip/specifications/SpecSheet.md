# AgnosticUI Tooltip - Consolidated Specification Sheet

This document synthesizes the accessibility requirements and best practices for the Tooltip component from the W3C ARIA Authoring Practices Guide (APG), WCAG 2.1, and other expert sources.

---

## 1. Core Principles

- **Definition:** A tooltip is a non-modal, non-interactive popup that displays a brief, text-only description for a UI element.
- **Purpose:** It provides supplementary, non-essential information. Critical information required to understand the UI element must be available through other means.
- **Redundancy:** The tooltip content should not simply repeat the accessible name of the trigger element, as this is redundant for screen reader users.

---

## 2. ARIA & Semantics

- **`role="tooltip"`**: The tooltip container element **MUST** have `role="tooltip"`.
- **`aria-describedby`**: The element that triggers the tooltip **MUST** use `aria-describedby` to reference the `id` of the tooltip container. This is the primary method for associating the trigger with the tooltip.
- **Visibility**: When the tooltip is not visible, it should be hidden from all users, including assistive technologies (e.g., using `display: none` or `visibility: hidden`).

---

## 3. Interaction Model & WCAG 2.1 Compliance

The following interaction model is required to comply with WCAG 2.1 Success Criterion 1.4.13 (Content on Hover or Focus).

### Keyboard Interaction

- **Trigger:** The tooltip appears when the trigger element receives keyboard focus.
- **Dismissal:**
    - The tooltip is dismissed when the trigger element loses focus (`blur` event).
    - The user **MUST** be able to dismiss the tooltip by pressing the `Escape` key.
- **Focus Management:** The tooltip itself **MUST NOT** receive focus. Focus must always remain on the trigger element.

### Mouse/Pointer Interaction

- **Trigger:** The tooltip appears when the user hovers their mouse pointer over the trigger element (`mouseenter`).
- **Dismissal & Persistence (The 3 H's):**
    1.  **Hoverable:** The user **MUST** be able to move their mouse pointer over the tooltip content without the tooltip closing.
    2.  **Dismissable:** The tooltip is dismissed when the pointer moves away from *both* the trigger element and the tooltip content itself (`mouseleave`).
    3.  **Persistent:** The tooltip should remain visible until the user moves the pointer away or dismisses it with the `Escape` key.

### Touch Interaction

- A long press on the trigger element should display the tooltip.
- Tapping anywhere outside the trigger element and the tooltip should dismiss it.

---

## 4. Content Guidelines

- **Text-Only:** Tooltips should contain only non-interactive text.
- **No Interactive Content:** If the content needs to be interactive (containing links, buttons, etc.), a non-modal dialog pattern should be used instead of a tooltip.
- **Avoid the `title` attribute:** The native HTML `title` attribute has inconsistent accessibility support and should not be used to create tooltips.

---

## 5. Edge Cases & Advanced Considerations

- **Disabled Elements:** If a disabled element has a tooltip, the element must remain focusable to allow keyboard users to access the tooltip content. This is a common requirement for disabled buttons where the tooltip explains *why* the button is disabled.
- **Conditional `role="tooltip"`:** In rare cases where a tooltip's content is purely a visual affordance and is completely redundant to the accessible name, some experts suggest omitting `role="tooltip"` to avoid unnecessary announcements for screen reader users. However, for a general-purpose library component, adhering to the primary APG pattern by default is the safest approach.

---

## 6. Component API

### Properties

- `content: string`: The text content of the tooltip.
- `placement: 'top' | 'bottom' | 'left' | 'right'`: The preferred placement of the tooltip. Defaults to `top`.
- `distance: number`: The distance in pixels from which to offset the tooltip away from its target. Defaults to `8`.
- `skidding: number`: The distance in pixels from which to offset thetooltip along its target. Defaults to `0`.
- `trigger: string`: A space-separated string that controls how the tooltip is activated. Possible options include `hover`, `focus`, and `click`. Defaults to `hover focus`.

### Methods

- `show()`: Programmatically shows the tooltip.
- `hide()`: Programmatically hides the tooltip.
- `toggle()`: Programmatically toggles the tooltip.

### Events

- `show`: Fired when the tooltip begins to show.
- `hide`: Fired when the tooltip begins to hide.

### Slots

- `(default)`: The trigger element for the tooltip.
- `content`: The content to be displayed in the tooltip. This will override the `content` property.

### CSS Parts

- `base`: The tooltip container.
- `arrow`: The tooltip's arrow.