# WAI-ARIA APG Button Examples

*Source: https://www.w3.org/WAI/ARIA/apg/patterns/button/examples/button/*

## Button Implementation Patterns

### 1. Semantic Considerations
- Can be implemented using `<div>` or `<a>` elements
- Require `role="button"` attribute
- Need `tabindex="0"` to include in tab sequence

### 2. Keyboard Interaction
- Support `Enter` and `Space` keys for activation
- Consistent activation across different element types

### 3. Toggle Button Specifics
- Use `aria-pressed="false/true"` to indicate state
- Provide clear visual and semantic state changes

### 4. Accessibility Best Practices
- Ensure accessible name through text content
- Test across browser and assistive technology combinations
- Prefer semantic HTML when possible

### 5. Recommended Attributes
- `role="button"`
- `tabindex="0"`
- `aria-pressed` (for toggle buttons)

## Key Principle

**"No ARIA is better than Bad ARIA"** - prioritize semantic HTML and careful implementation over unnecessary ARIA attributes.

## Implementation Guidance

1. **Prefer `<button>` element** when possible (semantic HTML foundation)
2. **Consistent keyboard behavior** across all button variants
3. **Clear state communication** for toggle functionality
4. **Proper focus management** based on context
5. **Test with assistive technologies** to verify experience