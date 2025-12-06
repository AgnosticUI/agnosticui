# WAI-ARIA Dialog (Modal) Pattern Guide

**Source:** https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/
**Downloaded:** September 19, 2025
**APG Version:** Current as of download date

## Overview

A dialog is a window overlaid on the primary window with specific accessibility characteristics:

- Prevents interaction with content outside the dialog
- Contains its own tab sequence
- Typically visually dims or obscures background content

## Keyboard Interaction

### Navigation Rules
- When dialog opens, focus moves to an element inside the dialog
- `Tab`: Cycles through tabbable elements within the dialog
- `Shift + Tab`: Cycles backwards through tabbable elements
- `Escape`: Closes the dialog

## ARIA Roles and Properties

### Required Attributes
- Dialog container must have `role="dialog"`
- `aria-modal="true"` must be set
- Must have a label via `aria-labelledby` or `aria-label`

### Recommended Practices
- Include a visible close button
- Ensure all interactive elements are descendants of dialog container
- Optionally use `aria-describedby` for additional context

## Implementation Guidance

### Focus Management
- Initial focus placement depends on dialog content
- Consider focusing:
  - First interactive element
  - A static element with `tabindex="-1"`
  - Least destructive action button

### Modal Behavior
- Fully prevent external interaction
- Visually obscure background content
- Ensure consistent experience across assistive technologies

## Accessibility Considerations

- Only mark dialog as modal when:
  1. External content is completely inert
  2. Background is visually dimmed/obscured

## Examples Provided
- Modal Dialog Example
- Date Picker Dialog Example