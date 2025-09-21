# WAI-ARIA APG Button IDL Examples

*Source: https://www.w3.org/WAI/ARIA/apg/patterns/button/examples/button_idl/*

## Unique Characteristics

- Uses new JavaScript syntax for ARIA attributes introduced in ARIA 1.2
- Demonstrates attribute reflection using dot notation (e.g., `element.role = 'button'`)
- Works with non-standard elements like `<div>` and `<a>` as buttons

## Specific Implementation Notes

- Requires `tabindex="0"` for non-standard button elements
- Uses `aria-pressed` for toggle button state
- Supports keyboard activation via Enter and Space keys
- Requires explicit role assignment in JavaScript
- May have limited browser compatibility due to new syntax

## Important Caveats

- **"Not intended for production environments"**
- Requires testing across browser and assistive technology combinations
- Follows principle that **"No ARIA is better than Bad ARIA"**

## Interaction Requirements

- Buttons must be keyboard accessible
- Must provide clear semantic meaning
- Should have descriptive text content as the accessible name

## Implementation Guidance

The example emphasizes exploring new ARIA attribute interaction techniques while maintaining accessibility principles.

### For AgnosticUI v2 Implementation:
- **Stick to production-ready patterns** from main APG examples
- **Use semantic `<button>` element** as foundation
- **Avoid experimental IDL syntax** for canonical implementation
- **Focus on proven accessibility patterns** for maximum compatibility