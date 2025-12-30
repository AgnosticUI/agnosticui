<!-- Auto-generated from component-template.md - customize as needed -->

# IntlFormatter

## Overview
[Brief 1-2 sentence description of the component's purpose]

## Interface
```typescript
export interface IntlFormatterProps {
  type?: 'date' | 'number' | 'percent' | 'currency';
  value?: number | string | Date;
  lang?: string;
  
  // Date-specific props
  date?: Date | string;
  weekday?: 'narrow' | 'short' | 'long';
  era?: 'narrow' | 'short' | 'long';
  year?: 'numeric' | '2-digit';
  month?: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long';
  day?: 'numeric' | '2-digit';
  hour?: 'numeric' | '2-digit';
  minute?: 'numeric' | '2-digit';
  second?: 'numeric' | '2-digit';
  timeZoneName?: 'short' | 'long';
  timeZone?: string;
  hourFormat?: 'auto' | '12' | '24';
  dateStyle?: 'full' | 'long' | 'medium' | 'short';
  timeStyle?: 'full' | 'long' | 'medium' | 'short';
  
  // Number-specific props
  noGrouping?: boolean;
  currency?: string;
  currencyDisplay?: 'symbol' | 'narrowSymbol' | 'code' | 'name';
  minimumIntegerDigits?: number;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
  minimumSignificantDigits?: number;
  maximumSignificantDigits?: number;
}
```

## Usage Examples

### Basic Usage
```html
<!-- Lit/HTML Usage -->
<ag-intlformatter
  required-prop="value"
  optional-prop="value">
</ag-intlformatter>
```

### With Event Handling
```javascript
// JavaScript setup
const component = document.querySelector('ag-intlformatter');
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
