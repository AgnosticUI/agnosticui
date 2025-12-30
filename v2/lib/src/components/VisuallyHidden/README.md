<!-- Auto-generated from component-template.md - customize as needed -->

# VisuallyHidden

## Overview
[Brief 1-2 sentence description of the component's purpose]

## Interface
```typescript
// Props/Attributes interface
interface VisuallyHiddenProps {
  // Required props
  requiredProp: Type;

  // Optional props
  optionalProp?: Type;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'danger';

  // Event handlers
  onClick?: (event: Event) => void;
  onChange?: (value: string) => void;
}

// CSS Custom Properties (CSS Variables)
// --[component]-color: #000000;
// --[component]-padding: 1rem;
```

## Usage Examples

### Basic Usage
```html
<!-- Lit/HTML Usage -->
<ag-visuallyhidden
  required-prop="value"
  optional-prop="value">
</ag-visuallyhidden>
```

### With Event Handling
```javascript
// JavaScript setup
const component = document.querySelector('ag-visuallyhidden');
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
