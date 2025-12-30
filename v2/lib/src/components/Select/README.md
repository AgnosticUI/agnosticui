<!-- Auto-generated from component-template.md - customize as needed -->

# Select

## Overview
[Brief 1-2 sentence description of the component's purpose]

## Interface
```typescript
export interface SelectProps {
  size?: SelectSize;
  multiple?: boolean;
  disabled?: boolean;
  name?: string;
  multipleSize?: number;
  // External label support
  label?: string;
  labelPosition?: LabelPosition;
  labelHidden?: boolean;
  noLabel?: boolean;
  required?: boolean;
  invalid?: boolean;
  errorMessage?: string;
  helpText?: string;
  // Event callbacks
  onClick?: (event: MouseEvent) => void;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;
  onChange?: (event: SelectChangeEvent) => void;
}
```

## Usage Examples

### Basic Usage
```html
<!-- Lit/HTML Usage -->
<ag-select
  required-prop="value"
  optional-prop="value">
</ag-select>
```

### With Event Handling
```javascript
// JavaScript setup
const component = document.querySelector('ag-select');
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
