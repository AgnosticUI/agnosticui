<!-- Auto-generated from component-template.md - customize as needed -->

# Popover

## Overview
[Brief 1-2 sentence description of the component's purpose]

## Interface
```typescript
export interface PopoverProps {
  placement?: Placement;
  distance?: number;
  skidding?: number;
  arrow?: boolean;
  disabled?: boolean;
  /**
   * Interaction type for triggering the popover
   * @default 'click'
   */
  triggerType?: 'click' | 'hover' | 'focus';
  /** Match the popover's width to the trigger element */
  matchTriggerWidth?: boolean;
  /** Whether to show the close button in the header */
  showCloseButton?: boolean;
  /**
   * Whether to show the header section
   * @default true
   */
  showHeader?: boolean;
  /** Accessible label for the close button */
  closeLabel?: string;
  /**
   * Whether to trap focus within the popover when open
   * @default false
   */
  trapFocus?: boolean;
  onShow?: (event: PopoverShowEvent) => void;
  onHide?: (event: PopoverHideEvent) => void;
}
```

## Usage Examples

### Basic Usage
```html
<!-- Lit/HTML Usage -->
<ag-popover
  required-prop="value"
  optional-prop="value">
</ag-popover>
```

### With Event Handling
```javascript
// JavaScript setup
const component = document.querySelector('ag-popover');
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
