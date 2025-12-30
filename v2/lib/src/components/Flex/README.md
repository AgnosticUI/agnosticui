<!-- Auto-generated from component-template.md - customize as needed -->

# Flex

## Overview
[Brief 1-2 sentence description of the component's purpose]

## Interface
```typescript
export interface FlexContainerProps {
  /** Main axis direction (defaults to 'row') */
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  /** Whether flex items wrap (defaults to 'nowrap') */
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  /** Alignment along main axis (defaults to 'flex-start') */
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  /** Alignment along cross axis (defaults to 'stretch') */
  align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  /** Space distribution between lines in multi-line containers (defaults to 'stretch') */
  alignContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch';
  /** Use inline-flex instead of flex (defaults to false) */
  inline?: boolean;
  /** Reverse the direction (e.g., row becomes row-reverse, defaults to false) */
  reverse?: boolean;
  /** Apply flex: 1 1 auto to all children for equal sizing (defaults to false) */
  stretchChildren?: boolean;
}
```

## Usage Examples

### Basic Usage
```html
<!-- Lit/HTML Usage -->
<ag-flex
  required-prop="value"
  optional-prop="value">
</ag-flex>
```

### With Event Handling
```javascript
// JavaScript setup
const component = document.querySelector('ag-flex');
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
