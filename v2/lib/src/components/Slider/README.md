<!-- Auto-generated from component-template.md - customize as needed -->

# Slider

## Overview
[Brief 1-2 sentence description of the component's purpose]

## Interface
```typescript
export interface SliderProps {
  // Label properties
  label?: string;
  labelPosition?: LabelPosition;
  labelHidden?: boolean;
  noLabel?: boolean;
  ariaLabel?: string;

  // Range properties
  min?: number;
  max?: number;
  step?: number;
  value?: number | [number, number];
  
  // Dual range support
  dual?: boolean;
  
  // Orientation
  vertical?: boolean;
  
  // Size variants
  size?: 'small' | 'default' | 'large';
  
  // Styling variants
  filled?: boolean;
  monochrome?: boolean;
  
  // States
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  invalid?: boolean;
  errorMessage?: string;
  helpText?: string;
  
  // Form association
  name?: string;
  
  // Display options
  showTooltip?: boolean;
  showTicks?: boolean;
  tickStep?: number;
  
  // Event callbacks
  onChange?: (event: CustomEvent<{ value: number | [number, number] }>) => void;
  onInput?: (event: CustomEvent<{ value: number | [number, number] }>) => void;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;
}
```

## Usage Examples

### Basic Usage
```html
<!-- Lit/HTML Usage -->
<ag-slider
  required-prop="value"
  optional-prop="value">
</ag-slider>
```

### With Event Handling
```javascript
// JavaScript setup
const component = document.querySelector('ag-slider');
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
