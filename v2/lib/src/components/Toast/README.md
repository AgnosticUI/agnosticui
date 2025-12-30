<!-- Auto-generated from component-template.md - customize as needed -->

# Toast

## Overview
[Brief 1-2 sentence description of the component's purpose]

## Interface
```typescript
export interface ToastProps {
  open?: boolean;
  type?: ToastType;
  position?: Position;
  duration?: number;
  autoDismiss?: boolean;
  showCloseButton?: boolean;
  pauseOnHover?: boolean;
  bordered?: boolean;
  rounded?: boolean;
  borderedLeft?: boolean;
  // Event handlers
  onToastOpen?: (event: ToastOpenEvent) => void;
  onToastClose?: (event: ToastCloseEvent) => void;
  onToastDismiss?: (event: ToastDismissEvent) => void;
}
```

## Usage Examples

### Basic Usage
```html
<!-- Lit/HTML Usage -->
<ag-toast
  required-prop="value"
  optional-prop="value">
</ag-toast>
```

### With Event Handling
```javascript
// JavaScript setup
const component = document.querySelector('ag-toast');
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
