# BBC GEL Button and CTA Specifications

*Source: https://bbc.github.io/gel/components/buttons-and-ctas/*

## Key Accessibility Principles

### 1. Use Semantic HTML Correctly
- `<a>` for navigation links
- `<button>` for non-navigational actions

### 2. Labeling Requirements
- **Prefer text labels** over icon-only controls
- For icon-only buttons, use visually hidden `<span>` with text
- **Avoid `aria-label` and `title` attributes**

### 3. State Handling
- Use `aria-pressed` and `aria-expanded` for toggle states
- Provide clear visual indication of button states
- **Avoid disabling submit buttons**

## Design Considerations

- Maintain visual consistency across buttons/CTAs
- Ensure sufficient color contrast
- Provide clear hover and focus styles
- Use transparent borders for high contrast mode compatibility

## Implementation Guidance

- Include appropriate ARIA attributes
- Make controls keyboard-navigable
- Support standard interaction methods (click, touch, Enter/Space key)
- Use native form elements for checked states

## Critical Accessibility Recommendations

> **"Only where these rules are observed will the user experience comfortable interaction."**

- Prioritize clear, predictable user interface behaviors
- Support assistive technology users' needs

## BBC-Specific Best Practices

1. **Text-First Approach**: Always prefer visible text over icon-only patterns
2. **Semantic Precision**: Use correct HTML elements for intended function
3. **State Clarity**: Make interactive states visually and semantically obvious
4. **High Contrast Support**: Design for accessibility modes from the start
5. **Predictable Behavior**: Follow established interaction patterns

## Implementation Priorities for AgnosticUI v2

1. **Semantic `<button>` foundation**
2. **Visible text labels as default**
3. **Clear state management** (normal, hover, focus, pressed, disabled)
4. **High contrast mode compatibility**
5. **Predictable keyboard interaction**