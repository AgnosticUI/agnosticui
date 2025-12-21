# Red Hat Design System - Tooltip Accessibility

This document summarizes the accessibility guidelines for tooltips as described by Red Hat's design system.

## Key Guidelines:

*   **Focus Behavior:** Tooltips should appear when their trigger element receives focus and disappear when focus is moved away.
*   **Dismissal:** Users must be able to dismiss the tooltip by pressing the `Escape` key, without losing focus on the trigger element.
*   **Persistence:** The tooltip must remain visible when the user hovers over the trigger element and when they move their cursor over the tooltip content itself.
*   **Screen Reader Announcement:** The tooltip's text must be announced by screen readers when the trigger element receives focus.
*   **Disabled Elements:** If a disabled element has a tooltip, it must still be focusable so that users can access the tooltip content.
