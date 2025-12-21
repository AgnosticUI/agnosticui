# BBC GEL Form Fields Specifications

*Source: https://bbc.github.io/gel/components/form-fields/*

## Key Accessibility Principles

### 1. Labeling Requirements
- **Always associate labels with inputs** using matching `for` and `id` attributes
- Use `<fieldset>` and `<legend>` for grouping related form elements
- **Prefer labels that wrap inputs** for radio and checkbox elements
- **Place labels above form fields**, especially for mobile
- **Avoid placeholder-only labels** - placeholders disappear on focus

### 2. Input Types and Attributes
- **Use native HTML5 input types** when possible (e.g., `type="number"`, `type="email"`)
- **Avoid custom form elements** that require complex JavaScript
- Use `aria-invalid` and `aria-required` for state management
- Leverage browser's built-in validation when appropriate

### 3. Error Handling
- **Place error messages above inputs**
- Use **clear, descriptive error text** prefixed with "Error:"
- **Validate fields dynamically** with debouncing
- Provide a **general error message** for form-level issues
- **Toggle `aria-invalid`** between true/false based on validation state

### 4. Design Recommendations
- **Do not rely solely on color** to indicate errors
- **Keep all form fields enabled** during validation
- Ensure **sufficient color contrast** for all states
- Provide **clear visual indication** of required fields

### 5. Validation Strategy
- **Validate individual fields** as users type (with debouncing)
- **Provide specific error messages** for each validation failure
- **Allow form submission** with clear error guidance
- Support **progressive enhancement** - forms should work without JavaScript

## Core Accessibility Principles

### Programmatic Associations
- Ensure **programmatic label associations** using `for`/`id` attributes
- Provide **clear, persistent field descriptions**
- Support **screen readers and assistive technologies**
- Design for **cognitive accessibility**

### State Communication
- Use `aria-invalid="true/false"` for validation states
- Use `aria-required="true"` for required fields
- Communicate loading states appropriately
- Provide clear feedback for successful submissions

## Implementation Priorities for AgnosticUI v2

1. **Native `<input>` foundation** with semantic HTML
2. **Required label association** via `for`/`id` attributes
3. **Clear validation state management** with `aria-invalid`
4. **Error message positioning** above inputs
5. **Mobile-first label placement** (labels above inputs)
6. **Progressive enhancement** approach
7. **Built-in HTML5 validation** support
8. **High contrast mode compatibility**

## Critical Design Decisions

### Label Patterns (Per BBC GEL)
- **Primary**: Label above input (mobile-friendly)
- **Radio/Checkbox**: Label wraps input for larger click target
- **Never**: Placeholder-only labels (accessibility failure)

### Error Handling Pattern
```html
<div class="form-field">
  <label for="email">Email address</label>
  <div class="error-message" id="email-error">Error: Please enter a valid email</div>
  <input type="email" id="email" aria-invalid="true" aria-describedby="email-error">
</div>
```

### Validation Approach
- **Individual field validation** on blur/input (debounced)
- **Form-level validation** on submit
- **Clear error recovery** path for users
- **Accessible error communication** via ARIA