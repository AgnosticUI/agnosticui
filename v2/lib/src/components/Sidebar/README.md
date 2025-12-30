<!-- Auto-generated from component-template.md - customize as needed -->

# Sidebar

## Overview
[Brief 1-2 sentence description of the component's purpose]

## Interface
```typescript
export interface AgSidebarProps {
  /** Whether the sidebar is open or closed */
  open?: boolean;
  /** Whether the sidebar is collapsed (rail mode) or expanded (desktop mode) */
  collapsed?: boolean;
  /** Whether the sidebar is on the left or right */
  position?: 'left' | 'right';
  /** ARIA label for the sidebar */
  ariaLabel?: string;

  /** Variant of the sidebar */
  variant?: 'default' | 'bordered' | 'elevated';
  /** Whether to disable transitions */
  noTransition?: boolean;
  /** Width of the sidebar */
  width?: string;
  /** Whether to disable compact/rail mode. When true, sidebar is either full-width or hidden (no intermediate collapsed state) */
  disableCompactMode?: boolean;
  /** Whether to show the mobile toggle button */
  showMobileToggle?: boolean;
  /** Position of the mobile toggle button. Default: top-left */
  mobileTogglePosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  /** Whether to show the header toggle button */
  showHeaderToggle?: boolean;
  /** Callback function to handle toggle open/close events */
  onToggle?: (event: AgSidebarToggleEvent) => void;
  /** Callback function to handle expanded/collapsed events */
  onCollapse?: (event: AgSidebarCollapseEvent) => void;
}
```

## Usage Examples

### Basic Usage
```html
<!-- Lit/HTML Usage -->
<ag-sidebar
  required-prop="value"
  optional-prop="value">
</ag-sidebar>
```

### With Event Handling
```javascript
// JavaScript setup
const component = document.querySelector('ag-sidebar');
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
