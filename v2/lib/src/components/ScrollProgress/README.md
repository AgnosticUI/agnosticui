<!-- Auto-generated from component-template.md - customize as needed -->

# ScrollProgress

## Overview
[Brief 1-2 sentence description of the component's purpose]

## Interface
```typescript
export interface ScrollProgressProps {
  /**
   * Visual representation mode
   * @default 'bar'
   */
  mode?: 'bar' | 'dot-trail' | 'badge' | 'ring';

  /**
   * Target scroll container. If not provided, uses document.scrollingElement
   */
  target?: HTMLElement | null;

  /**
   * Placement for bar mode (top or bottom)
   * @default 'top'
   */
  orientation?: 'top' | 'bottom';

  /**
   * Number of dots for dot-trail mode
   * @default 5
   */
  dots?: number;

  /**
   * Badge color variant for badge mode
   * @default 'info'
   */
  badgeVariant?: 'default' | 'success' | 'warning' | 'danger' | 'info' | 'neutral' | 'monochrome';

  /**
   * Diameter of progress ring for ring mode
   * @default 32
   */
  ringSize?: number;

  /**
   * Stroke width for ring mode
   * @default 3
   */
  ringStrokeWidth?: number;

  /**
   * Variant color for ring mode
   * @default 'info'
   */
  ringVariant?: 'primary' | 'success' | 'warning' | 'danger' | 'info';

  /**
   * Number of decimal places for percentage display (0 = integers)
   * @default 0
   */
  precision?: number;
}
```

## Usage Examples

### Basic Usage
```html
<!-- Lit/HTML Usage -->
<ag-scrollprogress
  required-prop="value"
  optional-prop="value">
</ag-scrollprogress>
```

### With Event Handling
```javascript
// JavaScript setup
const component = document.querySelector('ag-scrollprogress');
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
