<!-- Auto-generated from component-template.md - customize as needed -->

# ScrollToButton

## Overview
[Brief 1-2 sentence description of the component's purpose]

## Interface
```typescript
export interface ScrollToButtonProps {
  label?: string;
  showLabel?: boolean;
  icon?: boolean;
  scrollThreshold?: number;
  target?: 'top' | 'bottom' | string | HTMLElement;
  direction?: 'up' | 'down' | 'auto';
  smoothScroll?: boolean;
  visible?: boolean;
  size?: 'x-sm' | 'sm' | 'md' | 'lg' | 'xl';
  shape?: 'capsule' | 'rounded' | 'circle' | 'square' | 'rounded-square' | '';
}
```

## Usage Examples

### Basic Usage
```html
<!-- Lit/HTML Usage -->
<ag-scrolltobutton
  required-prop="value"
  optional-prop="value">
</ag-scrolltobutton>
```

### With Event Handling
```javascript
// JavaScript setup
const component = document.querySelector('ag-scrolltobutton');
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
