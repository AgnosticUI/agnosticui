<!-- Auto-generated from component-template.md - customize as needed -->

# Drawer

## Overview
[Brief 1-2 sentence description of the component's purpose]

## Interface
```typescript
export interface DrawerProps {
  open?: boolean;
  heading?: string;
  description?: string;
  noCloseOnEscape?: boolean;
  noCloseOnBackdrop?: boolean;
  showCloseButton?: boolean;
  position?: 'start' | 'end' | 'top' | 'bottom';
  // Event handlers
  onDrawerOpen?: (event: DrawerOpenEvent) => void;
  onDrawerClose?: (event: DrawerCloseEvent) => void;
  onDrawerCancel?: (event: DrawerCancelEvent) => void;
}
```

## Usage Examples

### Basic Usage
```html
<!-- Lit/HTML Usage -->
<ag-drawer
  required-prop="value"
  optional-prop="value">
</ag-drawer>
```

### With Event Handling
```javascript
// JavaScript setup
const component = document.querySelector('ag-drawer');
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
