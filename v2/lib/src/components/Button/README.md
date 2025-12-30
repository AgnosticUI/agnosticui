<!-- Auto-generated from component-template.md - customize as needed -->

# Button

## Overview
[Brief 1-2 sentence description of the component's purpose]

## Interface
```typescript
export interface ButtonProps {
  variant?: 'success' | 'primary' | 'secondary' | 'warning' | 'danger' | 'monochrome' | '';
  size?: 'x-sm' | 'sm' | 'md' | 'lg' | 'xl';
  shape?: 'capsule' | 'rounded' | 'circle' | 'square' | 'rounded-square' | '';
  bordered?: boolean;
  ghost?: boolean;
  link?: boolean;
  grouped?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  toggle?: boolean;
  pressed?: boolean;
  ariaLabel?: string;
  onClick?: (event: MouseEvent) => void;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;
  onToggle?: (event: ButtonToggleEvent) => void;
}
```

## Usage Examples

### Basic Usage
```html
<!-- Lit/HTML Usage -->
<ag-button
  required-prop="value"
  optional-prop="value">
</ag-button>
```

### With Event Handling
```javascript
// JavaScript setup
const component = document.querySelector('ag-button');
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
