# WAI-ARIA Toggle Pattern Example

## Overview

This example demonstrates an accessible implementation of a toggle control for notification preferences, highlighting key accessibility features and best practices.

## Accessibility Features

### Visual Design
- Uses CSS borders and spacing to ensure visibility
- Provides clear visual state indicators
- Supports high contrast modes
- Implements focus and hover states for better interaction

### Semantic Accessibility
- Uses `role="switch"` for proper screen reader interpretation (implementing WAI-ARIA switch pattern)
- Synchronizes visual and ARIA states
- Provides text equivalents for state (hidden from screen readers)

## Keyboard Support

| Key | Function |
|-----|----------|
| Tab | Moves focus to toggle |
| Space/Enter | Toggles toggle on/off |

## ARIA Attributes

| Attribute | Element | Purpose |
|-----------|---------|---------|
| `role="switch"` | `<div>` | Identifies element as a switch |
| `tabindex="0"` | `<div>` | Includes in page tab sequence |
| `aria-checked` | `<div>` | Indicates current on/off state |

## Implementation Considerations

> There may be support gaps in some browser and assistive technology combinations.

Key recommendations:
- Test with actual assistive technologies
- Prioritize semantic HTML
- Follow "No ARIA is better than Bad ARIA" principle

## Code Structure Example

```html
<div role="switch"
     tabindex="0"
     aria-checked="false">
  Notifications
  <span class="on" aria-hidden="true">On</span>
  <span class="off" aria-hidden="true">Off</span>
</div>
```

## Related Examples
- Switch using HTML Button
- Switch using Checkbox Input