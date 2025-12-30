<!-- Auto-generated from component-template.md - customize as needed -->

# Pagination

## Overview
[Brief 1-2 sentence description of the component's purpose]

## Interface
```typescript
export interface ContentPaginationProps {
  /**
   * Previous content item
   */
  previous?: ContentNavigationItem;
  /**
   * Next content item
   */
  next?: ContentNavigationItem;
  /**
   * Parent/overview content item
   */
  parent?: ContentNavigationItem;
  /**
   * Alternative aria-label for the navigation
   */
  ariaLabel?: string;
  /**
   * Whether to display borders around navigation links
   */
  bordered?: boolean;
  /**
   * Event callback fired when navigation occurs (for SPA routing)
   */
  onNavigate?: (event: NavigateEvent) => void;
}
```

## Usage Examples

### Basic Usage
```html
<!-- Lit/HTML Usage -->
<ag-pagination
  required-prop="value"
  optional-prop="value">
</ag-pagination>
```

### With Event Handling
```javascript
// JavaScript setup
const component = document.querySelector('ag-pagination');
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
