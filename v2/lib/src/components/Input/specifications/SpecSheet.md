# Input Component - Comprehensive Specification

## Component Design Philosophy

### Core Principle: Accessibility by Default
The Input component prioritizes accessibility and follows the "First Rule of ARIA" - use native HTML elements and only add ARIA when necessary. Based on BBC GEL guidelines and the inherent accessibility of `<input>` elements.

## Design Decision: Integrated Label+Input Component

### Chosen Approach: **Single Component with Built-in Label**
```typescript
<ag-input label="Email address" type="email" required />
```

### Rationale
1. **Prevents accessibility failures** - impossible to forget label association
2. **Enforces BBC GEL best practices** - label above input by default
3. **Simplifies developer experience** - one component handles both concerns
4. **Consistent with AgnosticUI philosophy** - functional completeness

### Alternative Approaches Considered

#### ❌ Separate Label Component
```typescript
<ag-label for="email">Email</ag-label>
<ag-input id="email" type="email" />
```
**Rejected because:** Risk of broken associations, increased complexity, violates accessibility-by-default principle

#### ❌ Label Wrapping Input
```typescript
<ag-label>
  Email address
  <ag-input type="email" />
</ag-label>
```
**Rejected because:** BBC GEL recommends label above input for mobile-friendliness, harder to style consistently

## API Design

### Core Properties
```typescript
interface AgInput {
  // Label Architecture - Flexible but Accessible by Default
  label?: string;                   // Built-in visible label (recommended)
  labelHidden?: boolean;            // Makes label screen-reader only (visually hidden)

  // Escape Hatches for Advanced Use Cases
  noLabel?: boolean;                // Skip built-in label (requires external label/aria-label)
  ariaLabel?: string;               // Alternative to visible label (for icon-only scenarios)
  labelledBy?: string;              // Reference to external label ID

  // Input Attributes
  type?: InputType;                 // text, email, password, number, tel, url, search, textarea
  value?: string;
  placeholder?: string;

  // v1 Parity - Size Variants
  size?: 'small' | 'default' | 'large';

  // v1 Parity - Styling Variants
  isRounded?: boolean;              // Rounded corners
  isUnderlined?: boolean;           // Underline style
  isUnderlinedWithBackground?: boolean; // Underline with background
  isInline?: boolean;               // Inline display mode

  // v1 Parity - Addon Support
  hasLeftAddon?: boolean;           // Left side addon support
  hasRightAddon?: boolean;          // Right side addon support

  // Textarea-specific (when type="textarea")
  rows?: number;                    // Textarea rows
  cols?: number;                    // Textarea columns

  // Validation & State
  required?: boolean;               // Adds aria-required="true"
  disabled?: boolean;
  readonly?: boolean;

  // Validation (v1 parity naming)
  invalid?: boolean;                // Controls aria-invalid (was isInvalid in v1)
  errorMessage?: string;            // Displays error above input (was invalidText in v1)
  helpText?: string;                // Additional guidance (same as v1)

  // Input Attributes
  maxlength?: number;
  minlength?: number;
  pattern?: string;
  autocomplete?: string;

  // Component Styling Hooks
  variant?: string;                 // For external styling beyond v1 variants
}
```

### Event Handling
```typescript
// Standard input events
onInput: (value: string) => void;
onChange: (value: string) => void;
onBlur: () => void;
onFocus: () => void;

// Validation events
onValidate: (isValid: boolean, errorMessage?: string) => void;
```

## Accessibility Implementation

### Required ARIA Attributes
```html
<label for="unique-id">Email address</label>
<input
  id="unique-id"
  type="email"
  aria-required="true"
  aria-invalid="false"
  aria-describedby="unique-id-help unique-id-error"
/>
```

### Error Handling Pattern (BBC GEL)
```html
<div class="ag-input">
  <label for="email">Email address</label>
  <!-- Error message ABOVE input -->
  <div class="ag-input__error" id="email-error">
    Error: Please enter a valid email address
  </div>
  <input
    type="email"
    id="email"
    aria-invalid="true"
    aria-describedby="email-error"
  />
</div>
```

### Help Text Pattern
```html
<div class="ag-input">
  <label for="password">Password</label>
  <div class="ag-input__help" id="password-help">
    Must be at least 8 characters long
  </div>
  <input
    type="password"
    id="password"
    aria-describedby="password-help"
  />
</div>
```

## Validation Strategy

### 1. Progressive Enhancement
- Works without JavaScript
- Enhanced validation with JavaScript
- Leverages HTML5 validation when possible

### 2. Validation Timing
- **onBlur**: Validate when user leaves field
- **onInput**: Re-validate if field was previously invalid (with debouncing)
- **onSubmit**: Final validation at form level

### 3. Error Communication
- **Visual**: Error styling on input and error message
- **Semantic**: `aria-invalid="true"` and `aria-describedby`
- **Clear recovery**: Remove errors when user corrects input

## Component Structure

### HTML Output

#### Standard Built-in Label
```html
<!-- <ag-input label="Email Address" type="email" required /> -->
<div class="ag-input" part="wrapper">
  <label for="ag-input-123" part="label">
    Email Address
    <span class="ag-input__required" aria-hidden="true">*</span>
  </label>

  <div class="ag-input__help" id="ag-input-123-help" part="help">
    Enter your email address
  </div>

  <div class="ag-input__error" id="ag-input-123-error" part="error" hidden>
    Error: Please enter a valid email address
  </div>

  <input
    type="email"
    id="ag-input-123"
    part="input"
    aria-required="true"
    aria-invalid="false"
    aria-describedby="ag-input-123-help"
  />
</div>
```

#### Visually Hidden Label (Screen Reader Only)
```html
<!-- <ag-input label="Search" labelHidden type="search" placeholder="Search..." /> -->
<div class="ag-input" part="wrapper">
  <label for="ag-input-124" part="label" class="ag-input__label--hidden">
    Search
  </label>

  <input
    type="search"
    id="ag-input-124"
    part="input"
    placeholder="Search..."
  />
</div>
```

#### External Label (Escape Hatch)
```html
<!-- External: <ag-label for="custom-email">Email Address</ag-label> -->
<!-- Input: <ag-input id="custom-email" noLabel type="email" /> -->
<div class="ag-input" part="wrapper">
  <input
    type="email"
    id="custom-email"
    part="input"
  />
</div>
```

#### aria-label Only (Icon-only Scenarios)
```html
<!-- <ag-input ariaLabel="Search products" noLabel type="search" /> -->
<div class="ag-input" part="wrapper">
  <input
    type="search"
    part="input"
    aria-label="Search products"
  />
</div>
```

#### With Addons (v1 Parity)
```html
<div class="ag-input" part="wrapper">
  <label for="ag-input-123" part="label">
    Search
  </label>

  <div class="ag-input__field" part="field-wrapper">
    <div class="ag-input__addon ag-input__addon--left" part="addon-left">
      <slot name="addon-left">🔍</slot>
    </div>

    <input
      type="search"
      id="ag-input-123"
      part="input"
      aria-describedby="ag-input-123-help"
    />

    <div class="ag-input__addon ag-input__addon--right" part="addon-right">
      <slot name="addon-right">✕</slot>
    </div>
  </div>
</div>
```

#### Textarea Mode (v1 Parity)
```html
<div class="ag-input" part="wrapper">
  <label for="ag-input-123" part="label">
    Comments
  </label>

  <textarea
    id="ag-input-123"
    part="textarea"
    rows="4"
    cols="50"
    aria-describedby="ag-input-123-help"
  ></textarea>
</div>
```

## Almost Headless CSS

### Functional CSS Only
```css
/* Component display */
:host {
  display: block;
}

/* Required field indicator */
.ag-input__required {
  color: inherit;
}

/* Visually hidden label - screen reader only */
.ag-input__label--hidden {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}

/* Error state visibility */
.ag-input__error[hidden] {
  display: none !important;
}

.ag-input__error:not([hidden]) {
  display: block;
}

/* Addon field wrapper - flex for addon support */
.ag-input__field {
  display: flex;
  align-items: center;
}

/* Addon positioning */
.ag-input__addon {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Input takes remaining space in addon layout */
.ag-input__field input {
  flex: 1;
}

/* Focus styles - consistent with --ag-focus pattern */
input:focus-visible,
textarea:focus-visible {
  outline: var(--ag-focus-width, 2px) solid var(--ag-focus, #2563eb);
  outline-offset: var(--ag-focus-offset, 2px);
  transition: outline var(--ag-motion-medium, 0.2s) ease;
}

/* Textarea resize behavior */
textarea {
  resize: vertical;
}

/* Inline mode display */
:host([is-inline]) {
  display: inline-block;
}
```

### Forbidden Styling
- ❌ Colors, backgrounds, fonts
- ❌ Visual spacing (padding/margin for layout)
- ❌ Decorative borders, shadows
- ❌ Visual feedback styles (beyond functional requirements)

## Input Types Support

### Supported Types
- `text` (default)
- `email`
- `password`
- `number`
- `tel`
- `url`
- `search`
- `textarea` (v1 parity - renders `<textarea>` element)

### Built-in HTML5 Validation
- Email format validation
- Number range validation
- Pattern matching
- Required field validation

## Implementation Priority

### Phase 1: Core Component (4-6 hours)
1. **Basic Input with Label** - Required label association
2. **Input Types** - Support all common types + textarea
3. **v1 Parity - Size Variants** - small, default, large
4. **Validation States** - `aria-invalid`, error display
5. **Almost Headless CSS** - Functional styles only + --ag-focus

### Phase 2: v1 Feature Parity (3-4 hours)
1. **Addon Support** - Left/right addon slots
2. **Styling Variants** - isRounded, isUnderlined, isUnderlinedWithBackground, isInline
3. **Textarea Mode** - Full textarea support with rows/cols
4. **Error Message Display** - Above input per BBC GEL

### Phase 3: Validation & Polish (2-3 hours)
1. **Help Text Support** - Additional user guidance
2. **Progressive Validation** - onBlur and onInput validation
3. **HTML5 Integration** - Leverage native validation
4. **Focus Ring Integration** - Consistent --ag-focus usage

### Phase 4: Testing & Integration (2-3 hours)
1. **Comprehensive Test Suite** - All input types, variants, and states
2. **Accessibility Testing** - Screen reader and keyboard navigation
3. **Playground Integration** - Demo all v1 parity features + label patterns
4. **Documentation** - API docs and examples

## Success Criteria

- ✅ **25+ comprehensive tests** covering all input types and validation states
- ✅ **Full WAI-ARIA compliance** with BBC GEL patterns
- ✅ **Almost headless architecture** with functional CSS only
- ✅ **Ejectable via CLI** - `agui eject input`
- ✅ **Progressive enhancement** - works without JavaScript
- ✅ **Keyboard navigation** - full accessibility support
- ✅ **Error recovery** - clear path to correct validation errors

## Critical Implementation Notes

1. **Always require label** - No optional labels, accessibility by default
2. **Error messages above inputs** - BBC GEL recommendation
3. **Use HTML5 validation** - Leverage native browser capabilities
4. **Progressive enhancement** - Component works without JavaScript
5. **Unique IDs required** - Generated automatically for associations
6. **Focus ring consistency** - Use `--ag-focus` pattern established in other components

## Astro Playground Comprehensive Demo Plan

### **Section 1: Label Architecture Showcase**
Demonstrate all label patterns with clear examples and use case explanations:

#### 1.1 Standard Built-in Labels (Recommended)
```typescript
<ag-input label="Email Address" type="email" required />
<ag-input label="Full Name" type="text" helpText="First and last name" />
<ag-input label="Password" type="password" errorMessage="Password too weak" invalid />
```

#### 1.2 Visually Hidden Labels (Icon-Heavy UIs)
```typescript
<ag-input label="Search" labelHidden type="search" placeholder="Search products..." />
<ag-input label="Quick filter" labelHidden type="text" placeholder="Filter results" />
```

#### 1.3 External Label (Advanced Layouts)
```typescript
<ag-label for="custom-email" required>Custom Email Layout</ag-label>
<ag-input id="custom-email" noLabel type="email" />

<div class="form-grid">
  <ag-label for="grid-input">Grid Layout</ag-label>
  <ag-input id="grid-input" noLabel />
  <span class="help-icon">?</span>
</div>
```

#### 1.4 aria-label Only (Icon-Only Inputs)
```typescript
<ag-input ariaLabel="Search site" noLabel type="search" />
<ag-input ariaLabel="Quick add item" noLabel type="text" />
```

### **Section 2: v1 Parity Features**
Complete demonstration of all v1 features in v2:

#### 2.1 Size Variants
```typescript
<ag-input label="Small Input" size="small" />
<ag-input label="Default Input" size="default" />
<ag-input label="Large Input" size="large" />
```

#### 2.2 Styling Variants
```typescript
<ag-input label="Rounded Input" isRounded />
<ag-input label="Underlined Input" isUnderlined />
<ag-input label="Underlined with Background" isUnderlinedWithBackground />
<ag-input label="Inline Input" isInline />
```

#### 2.3 Addon Support
```typescript
<!-- Left addon -->
<ag-input label="Search" hasLeftAddon>
  <span slot="addon-left">🔍</span>
</ag-input>

<!-- Right addon -->
<ag-input label="Amount" hasRightAddon>
  <span slot="addon-right">USD</span>
</ag-input>

<!-- Both addons -->
<ag-input label="Currency" hasLeftAddon hasRightAddon>
  <span slot="addon-left">$</span>
  <span slot="addon-right">.00</span>
</ag-input>
```

#### 2.4 Textarea Mode
```typescript
<ag-input label="Comments" type="textarea" rows="4" />
<ag-input label="Description" type="textarea" rows="6" cols="50" />
```

### **Section 3: Input Types & Validation**
Showcase all supported input types with proper validation:

#### 3.1 Input Types
```typescript
<ag-input label="Text" type="text" />
<ag-input label="Email" type="email" />
<ag-input label="Password" type="password" />
<ag-input label="Number" type="number" />
<ag-input label="Phone" type="tel" />
<ag-input label="Website" type="url" />
<ag-input label="Search" type="search" />
```

#### 3.2 Validation States
```typescript
<ag-input label="Valid Email" type="email" value="user@example.com" />
<ag-input label="Invalid Email" type="email" invalid errorMessage="Please enter a valid email" />
<ag-input label="Required Field" required />
<ag-input label="Help Text" helpText="Enter your full legal name" />
```

### **Section 4: Accessibility Showcase**
Interactive accessibility testing section:

#### 4.1 Focus Ring Testing
- All inputs with --ag-focus consistency
- Tab navigation demo
- Focus transition animations

#### 4.2 Screen Reader Testing
- Instructions for testing with screen readers
- All label association patterns
- Error message announcements

#### 4.3 Keyboard Navigation
- Tab order demonstration
- Enter/Space behavior
- Validation on blur/input

### **Section 5: Real-World Form Examples**
Complete form scenarios using various patterns:

#### 5.1 Standard Contact Form
```typescript
<form>
  <ag-input label="Full Name" type="text" required />
  <ag-input label="Email" type="email" required />
  <ag-input label="Phone" type="tel" />
  <ag-input label="Message" type="textarea" rows="4" />
</form>
```

#### 5.2 Search Interface
```typescript
<ag-input
  label="Search"
  labelHidden
  type="search"
  placeholder="Search products..."
  hasLeftAddon
  hasRightAddon
>
  <span slot="addon-left">🔍</span>
  <span slot="addon-right">✕</span>
</ag-input>
```

#### 5.3 Complex Layout Form
```typescript
<div class="form-layout">
  <ag-label for="custom-field">Custom Layout Field</ag-label>
  <ag-input id="custom-field" noLabel />
  <button type="button">Advanced</button>
</div>
```

### **Section 6: Theme & Styling Integration**
Show how inputs work with theme system:

#### 6.1 Theme Toggle Testing
- Light/dark theme switching
- Focus ring visibility in both themes
- Error state visibility

#### 6.2 Custom Styling Examples
- Using CSS parts for styling
- Integration with design system
- Responsive behavior

This comprehensive playground will demonstrate **every aspect** of the Input component and serve as both documentation and testing environment for all the label patterns and features we've designed.