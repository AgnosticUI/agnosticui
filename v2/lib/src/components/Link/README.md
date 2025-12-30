<!-- Auto-generated from component-template.md - customize as needed -->

# Link

## Overview
[Brief 1-2 sentence description of the component's purpose]

## Interface
```typescript
export interface LinkProps {
  href?: string;
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'monochrome' | '';
  isButton?: boolean;
  buttonSize?: 'x-sm' | 'sm' | 'md' | 'lg' | 'xl';
  buttonShape?: 'capsule' | 'rounded' | 'circle' | 'square' | 'rounded-square' | '';
  buttonBordered?: boolean;
  external?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
  onClick?: (event: MouseEvent) => void;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;
}
```

## Usage Examples

### Basic Usage
```html
<!-- Lit/HTML Usage -->
<ag-link
  required-prop="value"
  optional-prop="value">
</ag-link>
```

### With Event Handling
```javascript
// JavaScript setup
const component = document.querySelector('ag-link');
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
