# Input Component Specification

*Single source of truth for all AgnosticUI v2 Input implementation decisions*

## Component Overview

The Input component provides an accessible, almost headless implementation of text input fields with comprehensive form integration, validation states, and addon support following WAI-ARIA APG patterns.

## AI-First Design Goals

- **Canonical Pattern**: Immutable `_Input.ts` with experimental `Input.ts`
- **AI Extensibility**: Clear patterns for AI-driven modifications and styling
- **Almost Headless**: Functional CSS only, completely styleable externally
- **Form Integration**: Native HTML form behavior with enhanced UX

## Architecture

### Core Component
- `AgInput` - Comprehensive Lit-based input component with label, help text, and addon support

### File Structure
```
src/components/Input/
├── core/
│   ├── _Input.ts               # Canonical, upgrade-safe source
│   └── _Input.spec.ts          # Comprehensive test suite
├── react/
│   ├── ReactInput.tsx         # React wrapper component
│   └── ReactInput.spec.tsx    # React-specific tests
├── vue/
│   ├── VueInput.vue           # Vue 3 wrapper component
│   └── VueInput.spec.ts       # Vue-specific tests
└── spec.md                    # This specification
```

## Functional Requirements

### Core Input Types
- `text` - Standard text input (default)
- `email` - Email validation
- `password` - Password masking
- `number` - Numeric input
- `tel` - Telephone input
- `url` - URL validation
- `search` - Search input with clearing

### Form Integration
- **Native Validation**: HTML5 constraint validation
- **Custom Validation**: Programmatic validation states
- **Form Association**: Works with form elements and submission
- **Value Binding**: Two-way data binding support

### Visual States
- `invalid` - Error/validation failure state
- `valid` - Success/validation pass state
- `disabled` - Non-interactive state
- `readonly` - Display-only state

### Size Variants
- `sm` - Small (compact forms)
- `md` - Medium (default)
- `lg` - Large (prominent forms)

### Addon Support
- **Left Addon**: Icons, prefixes, or custom content
- **Right Addon**: Icons, suffixes, or action buttons
- **Flexible Content**: Slotted content for maximum customization

## WAI-ARIA APG Compliance (MANDATORY)

### Required Accessibility Features
- **Semantic Input**: Uses proper `<input>` element
- **Label Association**: Explicit label-input relationship
- **Help Text**: Associated descriptive text
- **Error Communication**: Clear validation feedback
- **Keyboard Navigation**: Standard input navigation

### ARIA Attributes
- `aria-label` or `aria-labelledby` - Input identification
- `aria-describedby` - Help text and error association
- `aria-invalid` - Validation state communication
- `aria-required` - Required field indication

### Keyboard Interaction
- Standard HTML input keyboard behavior
- Tab navigation through form fields
- Context-specific input handling per type

## Design Token Integration

### Core Styling
- **Border**: `var(--ag-border-primary)` with hover/focus states
- **Background**: `var(--ag-background-primary)`
- **Text**: `var(--ag-text-primary)`
- **Focus Ring**: `var(--ag-focus)` for accessibility
- **Validation Colors**: `--ag-danger` for errors, success colors for valid states

### Custom Properties
```css
/* Size Control */
--input-height: var(--ag-space-12, 3rem);
--input-padding: var(--ag-space-3, 0.75rem);

/* Colors */
--input-bg: var(--ag-background-primary);
--input-border: var(--ag-border-primary);
--input-text: var(--ag-text-primary);
--input-placeholder: var(--ag-text-muted);

/* States */
--input-focus-ring: var(--ag-focus);
--input-error-border: var(--ag-danger);
--input-valid-border: var(--ag-success, #10b981);

/* Border and Spacing */
--input-radius: var(--ag-radius-sm, 0.25rem);
--input-border-width: var(--ag-border-width, 1px);
```

## Usage Patterns

### Basic Input
```html
<ag-input
  label="Email Address"
  type="email"
  placeholder="you@example.com"
  required>
</ag-input>
```

### Input with Help Text
```html
<ag-input
  label="Password"
  type="password"
  help-text="Must be at least 8 characters"
  required>
</ag-input>
```

### Input with Addons
```html
<ag-input label="Amount">
  <span slot="left-addon">$</span>
  <span slot="right-addon">.00</span>
</ag-input>
```

### Validation States
```html
<ag-input
  label="Username"
  invalid
  error-text="Username is already taken">
</ag-input>
```

## Framework Integration

### React Wrapper
- **Component**: `ReactInput`
- **Props**: TypeScript interfaces for all properties
- **Events**: Standard React onChange, onFocus, onBlur
- **Controlled/Uncontrolled**: Supports both patterns

### Vue Wrapper
- **Component**: `VueInput`
- **Props**: Vue 3 Composition API support
- **Events**: Vue event system integration (v-model support)
- **Reactivity**: Full reactive property binding

## Testing Requirements

### Unit Tests
- ✅ Input type variants
- ✅ Label and help text association
- ✅ Addon slot rendering
- ✅ Validation state handling
- ✅ Form integration
- ✅ Accessibility attributes
- ✅ Keyboard navigation
- ✅ Size variants

### Integration Tests
- ✅ React wrapper functionality
- ✅ Vue wrapper functionality
- ✅ Form submission behavior
- ✅ Cross-framework consistency

### Accessibility Tests
- ✅ Screen reader announcement
- ✅ Label association
- ✅ Error communication
- ✅ Required field indication
- ✅ Keyboard navigation

## Quality Assurance

### Current Status
- **Implementation**: Complete with comprehensive feature set
- **Testing**: Full test coverage across all variants
- **Framework Support**: React, Vue wrappers implemented
- **Accessibility**: WAI-ARIA compliant
- **Playground**: Interactive demos available

### Known Limitations
- File input type not fully supported (security considerations)
- Rich text editing requires separate component
- Advanced input masking not built-in (by design)

## External References

- [WAI-ARIA APG Textbox Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/textbox/)
- [MDN Input Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
- [HTML5 Form Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)

## Changelog

### v2.0.0-dev (Current)
- ✅ Initial implementation with full feature set
- ✅ Framework wrappers for React, Vue
- ✅ Comprehensive test coverage
- ✅ Almost headless styling approach
- ✅ Design token integration
- ✅ Addon system for customization
- ✅ Native form integration
- ✅ Accessibility compliance