<!-- Auto-generated from component-template.md - customize as needed -->

# Rating

## Overview
[Brief 1-2 sentence description of the component's purpose]

## Interface
```typescript
export interface RatingProps {
  value?: number;
  max?: number;
  precision?: RatingPrecision;
  readonly?: boolean;
  allowClear?: boolean;
  variant?: RatingVariant;
  size?: RatingSize;
  name?: string;
  // Form control props
  label?: string;
  labelPosition?: LabelPosition;
  labelHidden?: boolean;
  noLabel?: boolean;
  required?: boolean;
  invalid?: boolean;
  errorMessage?: string;
  helpText?: string;
  // Event handlers
  onRatingChange?: (event: RatingChangeEvent) => void;
  onRatingHover?: (event: RatingHoverEvent) => void;
}
```

## Usage Examples

### Basic Usage
```html
<!-- Lit/HTML Usage -->
<ag-rating
  required-prop="value"
  optional-prop="value">
</ag-rating>
```

### With Event Handling
```javascript
// JavaScript setup
const component = document.querySelector('ag-rating');
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
