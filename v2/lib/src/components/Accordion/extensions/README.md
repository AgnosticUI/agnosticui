# Accordion Extensions - AI-Safe Component Enhancements

This directory contains examples of how AI assistants can safely extend the Accordion component while maintaining compatibility with the canonical implementation.

## Extension Patterns

### 1. Behavioral Extensions
Extensions that add new functionality without breaking existing APIs:
- Animation controllers
- State persistence
- External API integration
- Event system enhancements

### 2. API Extensions  
Extensions that provide additional convenience methods:
- Programmatic control helpers
- State query utilities
- Batch operation support
- Configuration presets

### 3. Integration Extensions
Extensions that integrate with external systems:
- Form framework integration
- State management library bindings
- Accessibility testing utilities
- Performance monitoring hooks

## AI Safety Guidelines

When creating extensions:

1. **Always Import Canonical**: Start with `import { AccordionItem } from '../_Accordion'`
2. **Extend, Don't Replace**: Use class inheritance or composition, never modify originals
3. **Maintain API Compatibility**: All existing properties and methods must work unchanged
4. **Preserve Accessibility**: Never remove or break ARIA attributes or keyboard navigation
5. **Document Changes**: Include clear documentation of what's added/changed

## Example Extension Structure

```typescript
// ✅ Safe AI Extension Pattern
import { AccordionItem } from '../_Accordion';
import { css } from 'lit';

export class AnimatedAccordionItem extends AccordionItem {
  static properties = {
    ...AccordionItem.properties,
    animationSpeed: { type: String, attribute: 'animation-speed' }
  };

  static styles = [
    AccordionItem.styles,
    css`
      /* Additional styles only, never override base functionality */
    `
  ];

  // Add new methods, don't override existing ones unless absolutely necessary
  animateOpen() {
    // New functionality
  }
}
```

## Anti-Patterns (Avoid These)

```typescript
// ❌ DON'T: Override critical functionality
toggle() {
  // This breaks the canonical behavior
}

// ❌ DON'T: Remove base styles
static styles = css`
  /* This removes all functional CSS */
`;

// ❌ DON'T: Break existing APIs
get open() {
  return "always true"; // This breaks existing code
}
```