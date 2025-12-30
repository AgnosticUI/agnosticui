<!-- Auto-generated from component-template.md - customize as needed -->

# Toggle

## Overview
[Brief 1-2 sentence description of the component's purpose]

## Interface
```typescript
export interface ToggleProps {
  label?: string;
  labelPosition?: LabelPosition;
  labelHidden?: boolean;
  noLabel?: boolean;
  checked?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'monochrome';
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  invalid?: boolean;
  errorMessage?: string;
  helpText?: string;
  name?: string;
  value?: string;
  // Event callbacks
  onClick?: (event: MouseEvent) => void;
  onToggleChange?: (event: ToggleChangeEvent) => void;
}
```

## Usage Examples

### Basic Usage
```html
<!-- Lit/HTML Usage -->
<ag-toggle
  required-prop="value"
  optional-prop="value">
</ag-toggle>
```

### With Event Handling
```javascript
// JavaScript setup
const component = document.querySelector('ag-toggle');
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
