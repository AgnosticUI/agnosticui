<!-- Auto-generated from component-template.md - customize as needed -->

# Checkbox

## Overview
[Brief 1-2 sentence description of the component's purpose]

## Interface
```typescript
export interface CheckboxProps {
  name: string;
  value: string;
  checked: boolean;
  indeterminate: boolean;
  disabled: boolean;
  size: CheckboxSize;
  theme: CheckboxTheme;
  labelText: string;
  labelPosition: 'end' | 'start';
  // Validation & hints
  required?: boolean;
  invalid?: boolean;
  errorMessage?: string;
  helpText?: string;
  // Event callbacks
  onClick?: (event: MouseEvent) => void;
  onChange?: (event: CheckboxChangeEvent) => void;
}
```

## Usage Examples

### Basic Usage
```html
<!-- Lit/HTML Usage -->
<ag-checkbox
  required-prop="value"
  optional-prop="value">
</ag-checkbox>
```

### With Event Handling
```javascript
// JavaScript setup
const component = document.querySelector('ag-checkbox');
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
