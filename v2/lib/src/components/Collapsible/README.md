<!-- Auto-generated from component-template.md - customize as needed -->

# Collapsible

## Overview
[Brief 1-2 sentence description of the component's purpose]

## Interface
```typescript
export interface CollapsibleProps {
  open?: boolean;
  bordered?: boolean;
  shadow?: boolean;
  // Indicator variants (mutually exclusive, priority: noIndicator > useX > useMinus > useChevron)
  useChevron?: boolean;
  useX?: boolean;
  useMinus?: boolean;
  noIndicator?: boolean;
  onToggle?: (event: CollapsibleToggleEvent) => void;
}
```

## Usage Examples

### Basic Usage
```html
<!-- Lit/HTML Usage -->
<ag-collapsible
  required-prop="value"
  optional-prop="value">
</ag-collapsible>
```

### With Event Handling
```javascript
// JavaScript setup
const component = document.querySelector('ag-collapsible');
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
