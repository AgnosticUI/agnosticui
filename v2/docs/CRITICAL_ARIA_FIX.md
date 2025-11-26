# ⚠️ **Critical Issue Confirmed - Multiple Components Affected**

This is a **systemic architecture problem** that needs immediate attention before proceeding with FX work.

---

## **Affected Components Analysis**

### **1. Button** (`_Button.ts`)

```typescript
@property({ type: String, reflect: true, attribute: 'aria-label' })
declare ariaLabel: string;

@property({ type: String, reflect: true, attribute: 'aria-describedby' })
declare ariaDescribedby: string;
```

**Status:** ❌ `aria-describedby` doesn't work (ID references can't cross shadow boundary)

---

### **2. Combobox** (`_Combobox.ts`)

```typescript
@property({ type: String, attribute: 'aria-label' })
declare ariaLabel: string | null;

@property({ type: String, attribute: 'labelled-by' })
declare labelledBy?: string;
```

**In render:**

```typescript
aria-labelledby=${this.labelledBy || (showLabel ? this._labelId : nothing)}
aria-label=${this.ariaLabel || nothing}
aria-describedby=${describedBy || nothing}
```

**Status:**

- ❌ `aria-labelledby` doesn't work if referencing external IDs
- ✅ Internal `_labelId` DOES work (within same shadow root)
- ❌ `describedBy` from `buildAriaDescribedBy()` doesn't work for external IDs

---

### **3. Dialog** (`_Dialog.ts`)

```typescript
aria-labelledby=${this.heading ? 'dialog-heading' : nothing}
aria-label=${!this.heading ? 'Dialog' : nothing}
aria-describedby=${this.description ? 'dialog-description' : nothing}
```

**Status:**

- ✅ These ARE working! (IDs are **internal** to the dialog's shadow root)
- ✅ `#dialog-heading` and `#dialog-description` are rendered inside the same shadow DOM

---

## **The Pattern That Works vs. Doesn't Work**

### ✅ **WORKS: Internal Shadow DOM References**

```typescript
// Dialog - CORRECT ✅
render() {
  return html`
    <div aria-labelledby="internal-heading">
      <h2 id="internal-heading">...</h2>  <!-- Same shadow root -->
    </div>
  `;
}
```

### ❌ **DOESN'T WORK: External Light DOM References**

```typescript
// Consumer's code
<ag-button aria-describedby="external-desc">Click</ag-button>
<p id="external-desc">Outside shadow boundary</p>

// Button's shadow root
<button aria-describedby="external-desc">  <!-- ❌ Can't find it -->
```

---

## **Implementation Plan Document**

## Problem Statement

Shadow DOM encapsulation prevents ID-based ARIA references (`aria-labelledby`, `aria-describedby`, `aria-controls`) from crossing component boundaries. Several AgnosticUI components incorrectly accept these attributes as props, giving users false confidence that they work.

### Why This Is Critical

1. **Accessibility failure** - Screen readers won't announce referenced content
2. **Silent failure** - No errors, but feature doesn't work
3. **User confusion** - API suggests it works, but it doesn't
4. **Standards violation** - Components claim ARIA compliance but fail in practice

---

## Affected Components

### 🔴 **Priority (External References - Broken)**

| Component | Affected Props                     | Usage Pattern                    | Status         |
| --------- | ---------------------------------- | -------------------------------- | -------------- |
| Button    | `aria-describedby`                 | External ID references           | ❌ Broken      |
| ButtonFx  | `aria-describedby`                 | Inherits from Button             | ❌ Broken      |
| Combobox  | `labelledBy` (external)            | External ID references           | ❌ Broken      |
| Input     | `aria-describedby` (if exists)     | External ID references           | ❌ Needs audit |
| Checkbox  | `aria-describedby` (if exists)     | External ID references           | ❌ Needs audit |
| Radio     | `aria-describedby` (if exists)     | External ID references           | ❌ Needs audit |
| Dialog    | `aria-labelledby="dialog-heading"` | ✅ Works (internal)              |
| Combobox  | `aria-labelledby=${this._labelId}` | ✅ Works (internal)              |
| Combobox  | `aria-describedby=${describedBy}`  | ✅ Works (internal helper/error) |

---

## Solution Strategy

### Phase 1: Immediate Fixes (Blocking ButtonFx)

**Goal:** Remove broken ARIA props from Button and ButtonFx so FX work can proceed.

#### Step 1.1: Audit All Components

**Command:**

```bash
cd v2/lib/src/components
grep -r "aria-describedby\|aria-labelledby\|aria-controls" --include="*.ts"
```

At time of writing:

```shell
cd v2/lib/src/components/; grep -r "aria-describedby\|aria-labelledby\|aria-controls" --include="*.ts"
./Tabs/core/_Tabs.ts:  @property({ type: String, reflect: true, attribute: 'aria-labelledby' })
./Tabs/core/_Tabs.ts:      tab.setAttribute('aria-controls', panelId);
./Tabs/core/_Tabs.ts:        this._panels[index].setAttribute('aria-labelledby', tabId);
./Tabs/core/_Tabs.ts:          aria-labelledby=${this.ariaLabelledBy || ''}
./Tabs/core/_Tabs.spec.ts:  it('should establish proper tab-panel associations with aria-controls', async () => {
./Tabs/core/_Tabs.spec.ts:    expect(tabs[0].getAttribute('aria-controls')).toBe('panel1');
./Tabs/core/_Tabs.spec.ts:    expect(tabs[1].getAttribute('aria-controls')).toBe('panel2');
./Tabs/core/_Tabs.spec.ts:    expect(panels[0].getAttribute('aria-labelledby')).toBe(tabs[0].id);
./Tabs/core/_Tabs.spec.ts:    expect(panels[1].getAttribute('aria-labelledby')).toBe(tabs[1].id);
./Tabs/core/_Tabs.spec.ts:  it('should support aria-label and aria-labelledby on tablist', async () => {
./Tabs/core/_Tabs.spec.ts:    expect(tablist?.getAttribute('aria-labelledby')).toBe('nav-heading');
./Tooltip/styled/MinimalTooltip.ts:      triggerElement.setAttribute('aria-describedby', 'tooltip');
./Tooltip/core/_Tooltip.spec.ts:      expect(trigger.getAttribute('aria-describedby')).toBe('tooltip');
./Tooltip/core/_Tooltip.ts:      triggerElement.setAttribute('aria-describedby', 'tooltip');
./Rating/core/_Rating.ts:    // Build aria-describedby
./Rating/core/_Rating.ts:        aria-labelledby="${ifDefined(this.label && !this.noLabel ? this._labelId : undefined)}"
./Rating/core/_Rating.ts:        aria-describedby="${ifDefined(describedBy)}"
./Rating/core/_Rating.spec.ts:    it('associates error text with rating via aria-describedby', async () => {
./Rating/core/_Rating.spec.ts:      const describedBy = ratingDiv?.getAttribute('aria-describedby');
./Radio/core/_Radio.ts:   * Error message displayed when invalid. Linked via aria-describedby
./Radio/core/_Radio.ts:   * Helper text displayed below the radio. Linked via aria-describedby
./Radio/core/_Radio.ts:    // Build aria-describedby
./Radio/core/_Radio.ts:          aria-describedby="${describedBy || nothing}"
./Input/core/_Input.spec.ts:      expect(input?.getAttribute('aria-labelledby')).toBe('external-label');
./Input/core/_Input.spec.ts:    it('associates error message with input via aria-describedby', async () => {
./Input/core/_Input.spec.ts:      expect(input?.getAttribute('aria-describedby')?.includes(errorId!)).toBe(true);
./Input/core/_Input.spec.ts:    it('associates help text with input via aria-describedby', async () => {
./Input/core/_Input.spec.ts:      expect(input?.getAttribute('aria-describedby')?.includes(helpId!)).toBe(true);
./Input/core/_Input.spec.ts:    it('combines help text and error message in aria-describedby', async () => {
./Input/core/_Input.spec.ts:      const describedBy = input?.getAttribute('aria-describedby');
./Input/core/_Input.ts:    // Build aria-describedby including external labelledBy if present
./Input/core/_Input.ts:          aria-labelledby="${ifDefined(this.labelledBy || undefined)}"
./Input/core/_Input.ts:          aria-describedby="${describedByIds.length > 0 ? describedByIds.join(' ') : ifDefined(undefined)}"
./Input/core/_Input.ts:        aria-labelledby="${ifDefined(this.labelledBy || undefined)}"
./Input/core/_Input.ts:        aria-describedby="${describedByIds.length > 0 ? describedByIds.join(' ') : ifDefined(undefined)}"
./Input/core/_Input.BACKUP.ts:    // Build aria-describedby list
./Input/core/_Input.BACKUP.ts:        aria-labelledby="${ifDefined(this.labelledBy || undefined)}"
./Input/core/_Input.BACKUP.ts:        aria-describedby="${describedByIds.length > 0 ? describedByIds.join(' ') : ifDefined(undefined)}"
./Input/core/_Input.BACKUP.ts:        aria-labelledby="${ifDefined(this.labelledBy || undefined)}"
./Input/core/_Input.BACKUP.ts:        aria-describedby="${describedByIds.length > 0 ? describedByIds.join(' ') : ifDefined(undefined)}"
./Accordion/core/_Accordion.ts:        aria-labelledby="${this._id}-button"
./Accordion/core/_Accordion.ts:        aria-controls="${this._id}-panel"
./Accordion/core/_Accordion.spec.ts:    it('button should have aria-controls pointing to content panel', () => {
./Accordion/core/_Accordion.spec.ts:      const ariaControls = button!.getAttribute('aria-controls');
./Accordion/core/_Accordion.spec.ts:    it('content panel should have aria-labelledby referencing button', () => {
./Accordion/core/_Accordion.spec.ts:      const ariaLabelledBy = contentPanel!.getAttribute('aria-labelledby');
./Checkbox/core/_Checkbox.ts:    // Build aria-describedby
./Checkbox/core/_Checkbox.ts:          aria-describedby="${describedBy || nothing}"
./Slider/core/_Slider.ts:    // Use shared form control utilities for aria-describedby
./Slider/core/_Slider.ts:            aria-describedby="${ifDefined(describedBy)}"
./Slider/core/_Slider.ts:            aria-describedby="${ifDefined(describedBy)}"
./Slider/core/_Slider.ts:            aria-describedby="${ifDefined(describedBy)}"
./Combobox/core/_Combobox.spec.ts:    it('sets aria-controls to reference listbox', () => {
./Combobox/core/_Combobox.spec.ts:      const controlsId = input?.getAttribute('aria-controls');
./Combobox/core/_Combobox.spec.ts:    it('associates error text with input via aria-describedby', async () => {
./Combobox/core/_Combobox.spec.ts:      const describedBy = input.getAttribute('aria-describedby');
./Combobox/core/_Combobox.ts:            aria-controls=${this._listboxId}
./Combobox/core/_Combobox.ts:            aria-labelledby=${this.labelledBy || (showLabel ? this._labelId : nothing)}
./Combobox/core/_Combobox.ts:            aria-describedby=${describedBy || nothing}
./Toggle/core/_Toggle.ts: * - Required accessible name via aria-label or aria-labelledby
./Toggle/core/_Toggle.ts:    // Build aria-describedby
./Toggle/core/_Toggle.ts:        aria-labelledby="${ifDefined(this.label && !this.noLabel ? this._labelId : undefined)}"
./Toggle/core/_Toggle.ts:        aria-describedby="${ifDefined(describedBy)}"
./Toggle/core/_Toggle.spec.ts:      expect(button!.getAttribute('aria-labelledby')).toBeTruthy();
./Toggle/core/_Toggle.spec.ts:    it('should support helpText with aria-describedby', async () => {
./Toggle/core/_Toggle.spec.ts:      expect(button!.getAttribute('aria-describedby')).toBeTruthy();
./Toggle/core/_Toggle.spec.ts:    it('should support errorMessage with aria-describedby when invalid', async () => {
./Toggle/core/_Toggle.spec.ts:      expect(button!.getAttribute('aria-describedby')).toBeTruthy();
./Toggle/core/_Toggle.spec.ts:    it('should provide proper accessible name via aria-labelledby', async () => {
./Toggle/core/_Toggle.spec.ts:      expect(button!.hasAttribute('aria-labelledby')).toBe(true);
./Toggle/core/_Toggle.spec.ts:    it('should support aria-describedby with helpText', async () => {
./Toggle/core/_Toggle.spec.ts:      expect(button!.getAttribute('aria-describedby')).toBeTruthy();
./Dialog/core/_dialog.ts:        aria-labelledby=${this.heading ? 'dialog-heading' : nothing}
./Dialog/core/_dialog.ts:        aria-describedby=${this.description ? 'dialog-description' : nothing}
./Dialog/core/_dialog.spec.ts:    it('should have aria-labelledby when heading prop is provided', async () => {
./Dialog/core/_dialog.spec.ts:      expect(dialogElement?.getAttribute('aria-labelledby')).toBe('dialog-heading');
./Dialog/core/_dialog.spec.ts:      expect(dialogElement?.hasAttribute('aria-labelledby')).toBe(false);
./Dialog/core/_dialog.spec.ts:    it('should have aria-describedby when description is provided', async () => {
./Dialog/core/_dialog.spec.ts:      expect(dialogElement?.getAttribute('aria-describedby')).toBe('dialog-description');
./Dialog/core/_dialog.spec.ts:      expect(dialogElement?.hasAttribute('aria-labelledby')).toBe(false);
./Dialog/core/_dialog.spec.ts:      // Add heading - should switch to aria-labelledby
./Dialog/core/_dialog.spec.ts:      expect(dialogElement?.getAttribute('aria-labelledby')).toBe('dialog-heading');
./Dialog/core/_dialog.spec.ts:      expect(dialogElement?.hasAttribute('aria-labelledby')).toBe(false);
./Dialog/core/_dialog.spec.ts:      expect(dialogElement?.getAttribute('aria-describedby')).toBe('dialog-description');
./Dialog/core/_dialog.spec.ts:      expect(dialogElement?.hasAttribute('aria-describedby')).toBe(false);
./Dialog/core/_dialog.spec.ts:      expect(dialogElement?.getAttribute('aria-labelledby')).toBe('dialog-heading');
./Dialog/core/_dialog.spec.ts:      // Set up dialog with aria-describedby for better screen reader context
./Dialog/core/_dialog.spec.ts:      expect(dialogElement?.getAttribute('aria-describedby')).toBe('dialog-description');
./Popover/core/_Popover.ts:      triggerElement.setAttribute('aria-controls', 'popover');
./Popover/core/_Popover.ts:        aria-labelledby=${this._hasTitleSlot ? 'popover-title' : undefined}
./Popover/core/_Popover.spec.ts:      expect(trigger.getAttribute('aria-controls')).toBe('popover');
./Button/core/_Button.spec.ts:    it('should support aria-describedby', async () => {
./Button/core/_Button.spec.ts:      expect(button?.getAttribute('aria-describedby')).to.equal('description-id');
./Button/core/_Button.ts:  @property({ type: String, reflect: true, attribute: 'aria-describedby' })
./Button/core/_Button.ts:        aria-describedby=${ifDefined(this.ariaDescribedby || undefined)}
./Menu/core/_Menu.ts:  @property({ type: String, reflect: true, attribute: 'aria-describedby' })
./Menu/core/_Menu.ts:  @property({ reflect: true, attribute: 'aria-labelledby' })
./IconButton/svelte/types.d.ts:        'aria-describedby'?: string;
./IconButton/core/_IconButton.ts:  @property({ type: String, reflect: true, attribute: 'aria-describedby' })
./IconButton/core/_IconButton.ts:        aria-describedby=${ifDefined(this.ariaDescribedby || undefined)}
./IconButton/vue/VueIconButton.spec.ts:    it('should handle aria-describedby prop', async () => {
./Select/core/_Select.ts:        aria-describedby=${ariaDescribedBy || undefined}
./ButtonFx/core/_ButtonFx.ts:  @property({ type: String, attribute: 'aria-describedby' })
./ButtonFx/core/_ButtonFx.ts:        aria-describedby="${this.ariaDescribedby || ''}"
```

**Deliverable:** Complete list of affected files with usage context.

---

#### Step 1.2: Fix Button Component

**File:** `v2/lib/src/components/Button/core/_Button.ts`

**Changes:**

1. Remove `aria-describedby` property
2. Remove from `ButtonProps` interface
3. Remove from constructor initialization
4. Remove from `render()` method
5. Update component documentation and backfill all consumer usages (Storybooks [react, vue, lit], v2/site Vitepress)

**Acceptance Criteria:**

- [ ] `aria-describedby` completely removed
- [ ] `aria-label` retained (still works)
- [ ] TypeScript compiles without errors
- [ ] All Button tests pass
- [ ] Documentation updated with migration note

---

#### Step 1.3: Fix ButtonFx Component

**File:** `v2/lib/src/components/ButtonFx/core/_ButtonFx.ts`

**Changes:**

1. Do NOT add `aria-describedby` (avoid inheriting broken pattern)
2. Only implement `aria-label` (working pattern)
3. Fix TypeScript type errors
4. Update ButtonFx documentation

**Acceptance Criteria:**

- [ ] Only `aria-label` supported
- [ ] TypeScript compiles without errors
- [ ] Vue export syntax fixed
- [ ] Documentation clear about limitations

---

### Phase 2: Combobox Refactor

**Goal:** Fix `labelledBy` prop to only accept internal IDs or remove it entirely.

#### Step 2.1: Analyze Combobox ARIA Usage

**Current pattern:**

```typescript
aria-labelledby=${this.labelledBy || (showLabel ? this._labelId : nothing)}
```

**Problem:** `this.labelledBy` allows external IDs that won't work.

**Options:**

**Option A: Remove External `labelledBy` Prop**

- Remove `labelledBy` property
- Keep internal `_labelId` pattern (works correctly)
- Document: Use `label` prop or `aria-label` for labeling

**Option B: Rename to Make Intent Clear**

- Rename `labelledBy` → `internalLabelId`
- Document it's for advanced use only (internal shadow DOM IDs)
- Most users should use `label` prop

**Recommendation:** **Option A** - Simpler, less confusing

---

#### Step 2.2: Fix Combobox `aria-describedby`

**Current pattern:**

```typescript
const describedBy = buildAriaDescribedBy({
  helperId: this._helpTextId,
  errorId: this._errorTextId,
  ...
});

aria-describedby=${describedBy || nothing}
```

**Status:** ✅ **This actually works!** IDs are internal to Combobox's shadow root.

**Action:** Leave as-is, but verify IDs are always internal.

---

### Phase 3: Component Audit & Documentation

#### Step 3.1: Audit Remaining Components

Components to check:

- [ ] Input
- [ ] Select
- [ ] Checkbox
- [ ] Radio
- [ ] Switch
- [ ] Slider
- [ ] Toggle

IMPORTANT: And any other files listed in Step 1.1: Audit All Components section from grep command.

**For each component:**

1. Search for `aria-describedby`, `aria-labelledby`, `aria-controls`
2. Determine if IDs are internal (✅) or external (❌)
3. If external, remove the prop
4. Update documentation

---

#### Step 3.2: Update Architecture Documentation

**File:** `v2/docs/DEVELOPMENT_GUIDE.md`

**New Section:** "ARIA Attributes in Shadow DOM"

````markdown
## ARIA Attributes in Shadow DOM

### ✅ Supported ARIA Patterns

**Self-Contained Attributes (Always Work):**

- `aria-label` - Direct text label
- `aria-pressed` - Toggle state
- `aria-disabled` - Disabled state
- `aria-busy` - Loading state
- `aria-expanded` - Expansion state
- `aria-hidden` - Visibility state
- `aria-required` - Required field
- `aria-invalid` - Validation state
- `aria-checked` - Checkbox/radio state
- `aria-selected` - Selection state

### ❌ Unsupported ARIA Patterns

**ID-Based References (Shadow DOM Limitation):**

- `aria-describedby` - Cannot reference external elements
- `aria-labelledby` - Cannot reference external elements
- `aria-controls` - Cannot reference external elements
- `aria-owns` - Cannot reference external elements
- `for` attribute on `<label>` - Cannot reference external elements

### Internal ID References (✅ Works)

Components CAN use ID references to elements **within their own shadow root**:

```typescript
// ✅ CORRECT - Internal reference
render() {
  return html`
    <div aria-describedby="internal-help">
      <span id="internal-help">Help text</span>
    </div>
  `;
}
```
````
