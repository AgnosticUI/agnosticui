<!-- Auto-generated from component-template.md - customize as needed -->

# Combobox

## Overview
[Brief 1-2 sentence description of the component's purpose]

## Interface
```typescript
export interface ComboboxProps {
  // Data
  options: ComboboxOption[];
  value?: string | string[];
  defaultValue?: string | string[];
  placeholder?: string;

  // Label & Accessibility
  label?: string;
  labelPosition?: LabelPosition;
  labelHidden?: boolean;
  noLabel?: boolean;
  ariaLabel?: string | null;
  helpText?: string;
  errorMessage?: string;
  id?: string;

  // Behavior
  autocomplete?: 'list' | 'none';
  filterMode?: 'startsWith' | 'contains' | 'none';
  clearable?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  invalid?: boolean;

  // UI Configuration
  size?: 'small' | 'default' | 'large';
  maxVisibleOptions?: number;
  closeOnSelect?: boolean;
  variant?: 'default' | 'monochrome';
  multiple?: boolean;
  maxOptionsVisible?: number;

  // Loading
  loading?: boolean;
  loadingText?: string;
  noResultsText?: string;

  // Callbacks
  onChange?: (event: ComboboxChangeEvent) => void;
  onSelect?: (event: ComboboxSelectEvent) => void;
  onSearch?: (event: ComboboxSearchEvent) => void;
  onOpen?: (event: ComboboxOpenEvent) => void;
  onClose?: (event: ComboboxCloseEvent) => void;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;
}
```

## Usage Examples

### Basic Usage
```html
<!-- Lit/HTML Usage -->
<ag-combobox
  required-prop="value"
  optional-prop="value">
</ag-combobox>
```

### With Event Handling
```javascript
// JavaScript setup
const component = document.querySelector('ag-combobox');
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
