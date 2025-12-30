<!-- Auto-generated from component-template.md - customize as needed -->

# Card

## Overview
[Brief 1-2 sentence description of the component's purpose]

## Interface
```typescript
export interface CardProps {
  stacked?: boolean;
  shadow?: boolean;
  animated?: boolean;
  rounded?: CardRounded;
  variant?: CardVariant;
}
```

## Usage Examples

### Basic Usage
```html
<!-- Lit/HTML Usage -->
<ag-card
  required-prop="value"
  optional-prop="value">
</ag-card>
```

### With Event Handling
```javascript
// JavaScript setup
const component = document.querySelector('ag-card');
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
