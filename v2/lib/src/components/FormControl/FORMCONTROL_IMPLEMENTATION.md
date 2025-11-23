# FormControl + Label System - Implementation Summary

## Overview

This implementation provides accessible, Shadow DOM–safe form primitives for AgnosticUI v2. The system handles **presentation and accessibility only** — no form state management (touched, dirty, pristine, validation logic) is included. This makes it compatible with any external form library.

## Components Implemented

### 1. `<ag-label>` Component
**Location:** `v2/lib/src/components/Label/core/`

**Purpose:** Shadow DOM-safe label wrapper

**Features:**
- Supports vertical (default) and horizontal layouts
- Uses AgnosticUI design tokens
- Works standalone or with FormControl

**API:**
```html
<ag-label align="vertical|horizontal">
  Label text
</ag-label>
```

**Properties:**
- `align`: `'vertical' | 'horizontal'` (default: `'vertical'`)

---

### 2. `<ag-form-control>` Component
**Location:** `v2/lib/src/components/FormControl/core/`

**Purpose:** Layout and accessibility wrapper for form controls

**Features:**
- Provides label, helper text, and error text presentation
- Handles ARIA wiring (`aria-invalid`, `aria-describedby`, `required`)
- Shadow DOM-safe programmatic control association
- Automatically discovers and configures slotted controls
- Supports vertical and horizontal layouts

**API:**
```html
<ag-form-control align="vertical|horizontal" invalid required>
  <ag-label slot="label">Field Label</ag-label>
  <ag-input slot="control"></ag-input>
  <span slot="helper">Helper text</span>
  <span slot="error">Error message</span>
</ag-form-control>
```

**Properties:**
- `align`: `'vertical' | 'horizontal'` (default: `'vertical'`)
- `invalid`: `boolean` - Shows error slot, sets `aria-invalid="true"`
- `required`: `boolean` - Shows asterisk, sets `required` and `aria-required="true"`

**Slots:**
- `label`: Label content (typically `<ag-label>`)
- `control`: Form control element (e.g., `<ag-input>`, `<ag-checkbox>`)
- `helper`: Helper text
- `error`: Error message (only shown when `invalid=true`)

**How it works:**
1. Discovers slotted control via `slot.assignedElements()`
2. Sets `control.standalone = false` to suppress internal UI
3. Generates stable IDs for ARIA references
4. Wires ARIA attributes to `control.controlElement`

---

### 3. Control Integration (`ag-input`, `ag-checkbox`)

**Changes made:**

#### Added to all controls:
1. **`standalone` property** (Boolean, default: `true`)
   - When `true`: Control renders its own label/helper/error
   - When `false`: Control suppresses internal UI (managed by FormControl)

2. **`controlElement` getter** (returns `HTMLElement | null`)
   - Exposes the internal focusable element for ARIA wiring
   - For `ag-input`: Returns the `<input>` or `<textarea>` element
   - For `ag-checkbox`: Returns the `<input type="checkbox">` element

#### ag-input changes:
- **File:** `v2/lib/src/components/Input/core/_Input.ts`
- Line 56: Added `standalone?: boolean` to `InputProps` interface
- Line 430: Added `@property({ type: Boolean, reflect: true }) standalone`
- Line 476: Initialize `standalone = true` in constructor
- Line 482: Added `get controlElement()` getter
- Lines 673-698: Conditionally render label/helper/error based on `standalone`

#### ag-checkbox changes:
- **File:** `v2/lib/src/components/Checkbox/core/_Checkbox.ts`
- Line 35: Added `standalone: boolean` to `CheckboxProps` interface
- Line 300: Added `@property({ type: Boolean, reflect: true }) standalone`
- Line 322: Initialize `standalone = true` in constructor
- Line 328: Added `get controlElement()` getter

---

## Usage Examples

### Example 1: Standalone Input (Default)
```html
<ag-input
  label="Email"
  help-text="We'll never share your email"
  placeholder="Enter email"
></ag-input>
```

### Example 2: FormControl-Managed Input
```html
<ag-form-control>
  <ag-label slot="label">Full Name</ag-label>
  <ag-input slot="control" placeholder="Enter name"></ag-input>
  <span slot="helper">Your legal name</span>
</ag-form-control>
```

### Example 3: Required Field
```html
<ag-form-control required>
  <ag-label slot="label">Username</ag-label>
  <ag-input slot="control" placeholder="Username"></ag-input>
  <span slot="helper">Must be unique</span>
</ag-form-control>
```

### Example 4: Invalid Field with Error
```html
<ag-form-control invalid>
  <ag-label slot="label">Password</ag-label>
  <ag-input slot="control" type="password"></ag-input>
  <span slot="helper">At least 8 characters</span>
  <span slot="error">Password is too weak</span>
</ag-form-control>
```

### Example 5: Horizontal Layout
```html
<ag-form-control align="horizontal">
  <ag-label slot="label" align="horizontal">City</ag-label>
  <ag-input slot="control" placeholder="Enter city"></ag-input>
</ag-form-control>
```

### Example 6: Checkbox
```html
<ag-form-control>
  <ag-label slot="label">Newsletter</ag-label>
  <ag-checkbox slot="control" label-text="Subscribe"></ag-checkbox>
  <span slot="helper">Unsubscribe anytime</span>
</ag-form-control>
```

---

## Design Constraints Met

✅ **Shadow DOM Compatibility**
- All components work within Shadow DOM boundaries
- Programmatic association instead of native `for` attribute
- No reliance on global ID references

✅ **Primitive-Only Approach**
- No internal form state tracking (touched, dirty, pristine)
- No validation logic
- No form submission handling
- Pure presentation + accessibility

✅ **Design Token Usage**
- Uses only real AgTokens: `--ag-space-*`, `--ag-font-size-*`, `--ag-text-*`, etc.
- No invented tokens

✅ **Accessible by Default**
- Proper ARIA attributes (`aria-invalid`, `aria-describedby`, `aria-required`)
- Semantic HTML structure
- Screen reader friendly

✅ **Two-Mode Operation**
- Standalone mode: Controls work independently
- FormControl mode: Controls integrate seamlessly

---

## ARIA Wiring Details

When FormControl manages a control:

1. **Control Discovery** (in `firstUpdated` and `updated`):
   ```typescript
   const controlSlot = this.shadowRoot.querySelector('slot[name="control"]');
   const control = controlSlot.assignedElements()[0];
   control.standalone = false;
   ```

2. **ARIA Attributes Set** (via `_wireARIA()`):
   - `aria-invalid`: Set to `"true"` or `"false"` based on `invalid` prop
   - `aria-required`: Set to `"true"` or `"false"` based on `required` prop
   - `required`: HTML5 attribute added if `required=true`
   - `aria-describedby`: Space-separated list of helper/error IDs

3. **ID Generation**:
   - Helper ID: `ag-form-control-helper-{randomId}`
   - Error ID: `ag-form-control-error-{randomId}`

---

## Testing

A comprehensive test file is included: `src/components/FormControl/tests/test-formcontrol-dist.html`

**To test:**
1. Build the project: `npm run build`
2. Open `src/components/FormControl/tests/test-formcontrol-dist.html` in a browser
3. Click "Inspect All ARIA Attributes" to verify ARIA wiring

**Test coverage:**
- ✅ Standalone input (default mode)
- ✅ FormControl-managed input
- ✅ Required field with asterisk
- ✅ Invalid field with error message
- ✅ Horizontal layout
- ✅ Checkbox integration
- ✅ ARIA attribute validation

---

## Files Created/Modified

### New Files:
1. `v2/lib/src/components/Label/core/_Label.ts` - Label component implementation
2. `v2/lib/src/components/Label/core/Label.ts` - Label wrapper/export
3. `v2/lib/src/components/FormControl/core/_FormControl.ts` - FormControl component
4. `v2/lib/src/components/FormControl/core/FormControl.ts` - FormControl wrapper/export
5. `v2/lib/src/components/FormControl/tests/test-formcontrol-dist.html` - Test file

### Modified Files:
1. `v2/lib/src/components/Input/core/_Input.ts` - Added `standalone` and `controlElement`
2. `v2/lib/src/components/Checkbox/core/_Checkbox.ts` - Added `standalone` and `controlElement`

---

## Next Steps for Other Controls

To make other controls FormControl-compatible:

1. Add `standalone` property (Boolean, default: `true`)
2. Add `controlElement` getter returning the focusable element
3. Conditionally render internal label/helper/error based on `standalone`
4. Ensure the control implements the `FormControlCompatible` interface

Example for Radio, Select, Switch, etc.:
```typescript
@property({ type: Boolean, reflect: true })
declare standalone: boolean;

get controlElement(): HTMLElement | null {
  return this.shadowRoot?.querySelector('input, select, ...') || null;
}

// In constructor:
this.standalone = true;

// In render():
${this.standalone ? html`<label>...</label>` : ''}
```

---

## Integration with Form Libraries

This primitive-only system is designed to work with **any** form library:

**React Hook Form:**
```tsx
<ag-form-control invalid={!!errors.email}>
  <ag-label slot="label">Email</ag-label>
  <ag-input
    slot="control"
    {...register('email')}
  ></ag-input>
  <span slot="error">{errors.email?.message}</span>
</ag-form-control>
```

**Vue + Vuelidate:**
```vue
<ag-form-control :invalid="v$.email.$error">
  <ag-label slot="label">Email</ag-label>
  <ag-input
    slot="control"
    v-model="email"
  ></ag-input>
  <span slot="error">{{ v$.email.$errors[0].$message }}</span>
</ag-form-control>
```

**Angular Reactive Forms:**
```html
<ag-form-control [invalid]="email.invalid && email.touched">
  <ag-label slot="label">Email</ag-label>
  <ag-input
    slot="control"
    [formControl]="email"
  ></ag-input>
  <span slot="error">{{ email.errors?.message }}</span>
</ag-form-control>
```

---

## Compliance with PRD

This implementation fully complies with the **Track 1 — FormControl + Label System (Primitive-Only)** PRD:

✅ Shadow DOM-safe label/control association
✅ Vertical and horizontal layouts
✅ ARIA wiring (aria-invalid, aria-describedby, required)
✅ Standalone and FormControl-managed modes
✅ NO form state management
✅ Design token usage
✅ Accessible by default
✅ Works with any form library

---

## Architecture Diagram

```
 <ag-form-control invalid required>
 ├── <ag-label slot="label">Username</ag-label>
 ├── <ag-input slot="control" standalone=false>
 │      └── controlElement → <input/>
 ├── <div id="ag-form-control-helper-xyz">
 │      <slot name="helper">Must be unique</slot>
 ├── <div id="ag-form-control-error-xyz">
 │      <slot name="error">Username taken</slot>

FormControl responsibilities:
 • Generate stable IDs for helper/error
 • Set aria-invalid="true", aria-describedby="...", required
 • Set control.standalone = false
 • Layout orchestration (vertical or horizontal)
 • PURELY presentation/ARIA — NO form state tracking
```

---

## Build Output

The components are successfully built and available in:
- `dist/components/Label/core/Label.js`
- `dist/components/FormControl/core/FormControl.js`
- Updated `dist/components/Input/core/Input.js`
- Updated `dist/components/Checkbox/core/Checkbox.js`

Build succeeded with no errors. All TypeScript types are generated correctly.
