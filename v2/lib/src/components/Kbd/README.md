<!-- Auto-generated from component-template.md - customize as needed -->

# Kbd

## Overview
[Brief 1-2 sentence description of the component's purpose]

## Interface
```typescript
export interface KbdProps {
  variant?: KbdVariant;
  bordered?: boolean;
  background?: boolean;
  size?: KbdSize;
}
```

## Usage Examples

### Basic Usage
```html
<!-- Lit/HTML Usage -->
<ag-kbd
  required-prop="value"
  optional-prop="value">
</ag-kbd>
```

### With Event Handling
```javascript
// JavaScript setup
const component = document.querySelector('ag-kbd');
component.addEventListener('click', (e) => {
  console.log('Component clicked', e.detail);
});
```

## Accessibility Notes
- **ARIA Attributes**: [List any automatic ARIA attributes]
- **Keyboard Navigation**: [Describe keyboard support]
- **Screen Reader**: [Screen reader compatibility notes]

## Styling
- Uses CSS Shadow Parts: `part="[part-name]"` for styling
- CSS Custom Properties for theming
- Default styles can be overridden

## Dependencies
- [List any internal dependencies]
- [Browser support notes]
