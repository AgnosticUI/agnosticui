# Tooltip Accessibility Summary (W3C APG)

**Source:** https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/
**Downloaded:** Retroactively dated - Downloaded prior to September 19, 2025
**APG Version:** Unknown (downloaded before date tracking implemented)

This document summarizes the accessibility guidelines for tooltips as described by the W3C ARIA Authoring Practices Guide (APG).

## About This Pattern
A tooltip is a popup that displays information related to an element when it receives keyboard focus or a mouse hovers over it. It typically appears after a small delay and disappears when `Escape` is pressed or on mouse out. It's crucial that tooltip widgets themselves do not receive focus. If a hover contains focusable elements, a non-modal dialog should be used instead.[1]

## Keyboard Interaction
*   **`Escape`**: Dismisses the Tooltip.[1]

**Note**: Focus remains on the triggering element while the tooltip is displayed. If invoked by focus, it dismisses on `blur`. If invoked by hover, it remains open as long as the cursor is over the trigger or the tooltip.[1]

## WAI-ARIA Roles, States, and Properties
*   The element that serves as the tooltip container **MUST** have `role="tooltip"`.[1]
*   The element that triggers the tooltip **MUST** reference the tooltip element with `aria-describedby`.[1]


Sources:
[1] Tooltip Pattern | APG | WAI | W3C (https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/)
