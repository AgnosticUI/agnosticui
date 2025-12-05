# VitePress Documentation Accessibility Remediation Plan

## Executive Summary

This document provides a comprehensive specification for fixing WCAG text contrast violations in AgnosticUI v2 component documentation. The violations occur in VitePress code snippets where syntax highlighting renders certain elements with insufficient contrast ratios, even when using GitHub's high-contrast themes.

## Problem Statement

Code examples in `v2/site/docs/components/*.md` files contain accessibility violations that cannot be adequately resolved through CSS theme overrides. The primary violators are:

1. **Code comments** (HTML, JSX, CSS, JavaScript)
2. **CSS custom properties** (CSS variables like `var(--ag-primary)`)

These elements fail WCAG 2.1 Level AA contrast requirements (4.5:1 for normal text) and create barriers for users with visual impairments.

## Reference Implementation

Git commit `c802ce66` demonstrates the remediation approach applied to:
- `v2/site/docs/components/alert.md`
- `v2/site/docs/components/accordion.md`

These files serve as the canonical reference for the desired outcome.

## Scope

### In Scope
- All markdown files in `v2/site/docs/components/` (54 total files)
- Code snippets within `::: details Vue`, `::: details React`, and `::: details Lit/Vanilla JS` sections
- CSS customization examples in "Shadow Parts" and "Customization" sections
- JavaScript event handler examples

### Out of Scope
- VitePress theme CSS modifications
- Component source code files
- Example Vue components (e.g., `AlertExamples.vue`)
- Markdown prose content outside code blocks

## Processing Strategy

**Batch Processing**: Files will be processed in batches of 10 with human verification between batches to ensure quality and catch any edge cases.

## Progress Tracking

**Instructions**: After processing and verifying each file, update its status from ⬜ to ✅ in the table below. This tracking persists across sessions.

### All Files Status

| Status | File | Batch |
|--------|------|-------|
| ✅ | accordion.md | Pre-completed (c802ce66) |
| ✅ | alert.md | Pre-completed (c802ce66) |
| ✅ | aspect-ratio.md | Batch 1 |
| ✅ | avatar.md | Batch 1 |
| ✅ | badge-fx.md | Batch 1 |
| ✅ | badge.md | Batch 1 |
| ✅ | breadcrumb.md | Batch 1 |
| ✅ | button-fx.md | Batch 1 |
| ✅ | button.md | Batch 1 |
| ✅ | card.md | Batch 1 |
| ✅ | checkbox.md | Batch 1 |
| ✅ | collapsible.md | Batch 1 |
| ✅ | combobox.md | Batch 2 |
| ✅ | copybutton.md | Batch 2 |
| ✅ | dialog.md | Batch 2 |
| ✅ | divider.md | Batch 2 |
| ✅ | drawer.md | Batch 2 |
| ✅ | empty-state.md | Batch 2 |
| ✅ | fieldset.md | Batch 2 |
| ✅ | flex.md | Batch 2 |
| ✅ | header.md | Batch 2 |
| ✅ | icon-button-fx.md | Batch 2 |
| ✅ | icon-button.md | Batch 3 |
| ✅ | icon.md | Batch 3 |
| ✅ | image.md | Batch 3 |
| ✅ | input.md | Batch 3 |
| ✅ | intl-formatter.md | Batch 3 |
| ✅ | kbd.md | Batch 3 |
| ✅ | link.md | Batch 3 |
| ✅ | loader.md | Batch 3 |
| ✅ | mark.md | Batch 3 |
| ✅ | menu.md | Batch 3 |
| ⬜ | message-bubble.md | Batch 4 |
| ⬜ | pagination.md | Batch 4 |
| ⬜ | popover.md | Batch 4 |
| ⬜ | progress-ring.md | Batch 4 |
| ⬜ | progress.md | Batch 4 |
| ⬜ | radio.md | Batch 4 |
| ⬜ | rating.md | Batch 4 |
| ⬜ | scroll-progress.md | Batch 4 |
| ⬜ | scroll-to-button.md | Batch 4 |
| ⬜ | select.md | Batch 4 |
| ⬜ | sidebar.md | Batch 5 |
| ⬜ | skeleton-loader.md | Batch 5 |
| ⬜ | slider.md | Batch 5 |
| ⬜ | spinner.md | Batch 5 |
| ⬜ | table.md | Batch 5 |
| ⬜ | tabs.md | Batch 5 |
| ⬜ | tag.md | Batch 5 |
| ⬜ | timeline.md | Batch 5 |
| ⬜ | toast.md | Batch 5 |
| ⬜ | toggle.md | Batch 5 |
| ⬜ | tooltip.md | Batch 6 |
| ⬜ | visually-hidden.md | Batch 6 |

**Progress**: 32 of 54 files completed (59.3%)

### Batch Status Summary

- **Batch 1**: 10/10 completed ✅
- **Batch 2**: 10/10 completed ✅
- **Batch 3**: 10/10 completed ✅
- **Batch 4**: 0/10 completed
- **Batch 5**: 0/10 completed
- **Batch 6**: 0/2 completed

## Required Transformations

### 1. Remove All Code Comments

#### HTML/Vue Template Comments
**Remove:**
```vue
<!-- Basic accordion -->
<VueAccordion>
  ...
</VueAccordion>

<!-- With chevron indicator and styling -->
<VueAccordion>
  ...
</VueAccordion>
```

**Result:**
```vue
<VueAccordion>
  ...
</VueAccordion>

<VueAccordion>
  ...
</VueAccordion>
```

#### JSX/React Comments
**Remove:**
```tsx
{/* Basic button */}
<ReactButton>Click me</ReactButton>

{/* Variants */}
<ReactButton variant="primary">Primary</ReactButton>
```

**Result:**
```tsx
<ReactButton>Click me</ReactButton>

<ReactButton variant="primary">Primary</ReactButton>
```

#### JavaScript/TypeScript Comments
**Remove all inline and block comments:**
```javascript
// Pattern 1: Using addEventListener (standard Web Components)
item.addEventListener("toggle", (event) => {
  console.log("Toggle event:", event.detail);
  // event.detail: { open: true/false }
});

// Pattern 2: Using callback prop
item.onToggle = (event) => {
  console.log("Toggle event (callback):", event.detail);
};

// Both patterns work simultaneously (dual-dispatch)
```

**Result:**
```javascript
item.addEventListener("toggle", (event) => {
  console.log("Toggle event:", event.detail);
});

item.onToggle = (event) => {
  console.log("Toggle event (callback):", event.detail);
};
```

#### CSS Comments
**Remove:**
```css
/* Customize the alert container */
ag-alert::part(ag-alert) {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  color: white;
}

/* Style the button */
ag-accordion-item::part(ag-accordion-header) {
  color: white;
  padding: 16px 20px;
}
```

**Result:**
```css
ag-alert::part(ag-alert) {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  color: white;
}

ag-accordion-item::part(ag-accordion-header) {
  color: white;
  padding: 16px 20px;
}
```

### 2. Replace CSS Custom Properties with Explicit Values

CSS variables (custom properties) have poor syntax highlighting contrast. Replace with explicit color values.

**Common Replacements:**

| CSS Variable | Replacement Value | Context |
|-------------|-------------------|---------|
| `var(--ag-primary)` | `#12623e` | Primary brand color |
| `var(--ag-primary-dark)` | `#0d4429` | Dark primary variant |
| `var(--ag-success)` | `#14854f` | Success state color |
| `var(--ag-danger)` | `#e03e3e` | Danger/error state color |
| `var(--ag-warning)` | `#f59e0b` | Warning state color |
| `var(--ag-neutral-500)` | `#6b7280` | Neutral gray |
| `var(--ag-background-secondary-inverted)` | `#1f2937` | Dark background |

**Fallback for Unknown Variables:**
If you encounter a CSS variable not listed above, use `#6366f1` (indigo-500) as a fallback placeholder. Document the occurrence for later review.

**Example:**

**Before:**
```css
ag-accordion-item::part(ag-accordion-indicator) {
  color: var(--ag-primary);
}
```

**After:**
```css
ag-accordion-item::part(ag-accordion-indicator) {
  color: #12623e;
}
```

### 3. Remove TypeScript Inline Comments in Code Blocks

TypeScript interface definitions and type declarations often have inline comments that create contrast issues:

**Remove:**
```typescript
interface BreadcrumbItem {
  label: string;      // Display text for the breadcrumb
  href?: string;      // Link URL (optional)
  current?: boolean;  // Marks item as current page (optional)
}
```

**Result:**
```typescript
interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}
```

**Remove:**
```typescript
export interface CheckboxChangeEventDetail {
  checked: boolean;      // New checked state
  value: string;         // Form value (if provided)
  name: string;          // Form name (if provided)
  indeterminate: boolean; // Indeterminate state (false after user click)
}
```

**Result:**
```typescript
export interface CheckboxChangeEventDetail {
  checked: boolean;
  value: string;
  name: string;
  indeterminate: boolean;
}
```

### 4. Fix Heading Ordering

Ensure headings follow sequential descending order (h1 → h2 → h3, never skipping levels):

**Before:**
```markdown
# Component Name

## Usage

### Constrained max-width
```

**After:**
```markdown
# Component Name

## Usage

## Constrained max-width
```

**Rule**: If the previous heading is h1, the next can only be h2. If the previous is h2, the next can be h2 or h3, etc.

### 5. Standardize String Quotes (Optional but Recommended)

For consistency with curated files, prefer double quotes in JavaScript/TypeScript:

**Before:**
```javascript
console.log('Warning dismissed, type:', event.detail.type);
```

**After:**
```javascript
console.log("Warning dismissed, type:", event.detail.type);
```

## Implementation Guidelines

### Preservation Rules

**DO NOT remove or modify:**

1. **Markdown headings and prose** - Only modify code blocks
2. **Props tables** - Leave markdown tables unchanged
3. **Event documentation** - Keep event name/description tables as-is
4. **Import statements** - Preserve all import/require statements exactly
5. **Functional code** - Only remove comments; preserve all logic
6. **Component API** - Maintain all props, attributes, slots, and methods

### Quality Assurance Checklist

For each file processed:

- [ ] All HTML comments removed (`<!-- ... -->`)
- [ ] All JSX comments removed (`{/* ... */}`)
- [ ] All JavaScript comments removed (`// ...` and `/* ... */`)
- [ ] All CSS comments removed (`/* ... */`)
- [ ] All TypeScript inline comments in code blocks removed
- [ ] All `var(--ag-*)` replaced with explicit values (or fallback)
- [ ] Heading ordering follows sequential descending order (h1 → h2 → h3)
- [ ] Code examples still execute correctly (no syntax errors introduced)
- [ ] Indentation and formatting preserved
- [ ] Line breaks and spacing consistent with reference files
- [ ] No functional code removed (only comments)

### Special Cases

#### Multi-line Comments
Remove block comments spanning multiple lines:

```javascript
/**
 * This is a multi-line
 * JSDoc comment
 */
function example() {}
```

Should become:

```javascript
function example() {}
```

#### Inline Comments After Code
Remove comments on the same line as code:

```javascript
const foo = "bar"; // This is an inline comment
```

Should become:

```javascript
const foo = "bar";
```

## File Processing Batches

**Batch 1** (Files 3-12):
1. aspect-ratio.md
2. avatar.md
3. badge-fx.md
4. badge.md
5. breadcrumb.md
6. button-fx.md
7. button.md
8. card.md
9. checkbox.md
10. collapsible.md

**Batch 2** (Files 13-22):
1. combobox.md
2. copybutton.md
3. dialog.md
4. divider.md
5. drawer.md
6. empty-state.md
7. fieldset.md
8. flex.md
9. header.md
10. icon-button-fx.md

**Batch 3** (Files 23-32):
1. icon-button.md
2. icon.md
3. image.md
4. input.md
5. intl-formatter.md
6. kbd.md
7. link.md
8. loader.md
9. mark.md
10. menu.md

**Batch 4** (Files 33-42):
1. message-bubble.md
2. pagination.md
3. popover.md
4. progress-ring.md
5. progress.md
6. radio.md
7. rating.md
8. scroll-progress.md
9. scroll-to-button.md
10. select.md

**Batch 5** (Files 43-52):
1. sidebar.md
2. skeleton-loader.md
3. slider.md
4. spinner.md
5. table.md
6. tabs.md
7. tag.md
8. timeline.md
9. toast.md
10. toggle.md

**Batch 6** (Files 53-54):
1. tooltip.md
2. visually-hidden.md

## Validation Strategy

After processing each batch:

1. **Visual inspection**: Open 2-3 files from the batch in VitePress dev server
2. **Syntax validation**: Ensure code blocks have valid syntax
3. **Diff review**: Compare changes to reference files (alert.md, accordion.md)
4. **Human verification**: Review changes before proceeding to next batch

## Success Criteria

- All 54 component markdown files processed
- Zero code comments remain in code snippets
- Zero CSS custom properties remain in example CSS
- All code examples render correctly in VitePress
- Improved WCAG contrast compliance for code snippets
- No functional regressions in example code

## LLM Prompt Template

Use this template when prompting an LLM to process each batch:

```
Process Batch [N] of AgnosticUI v2 documentation accessibility fixes.

Reference files (examples of desired outcome):
- v2/site/docs/components/alert.md
- v2/site/docs/components/accordion.md

Target files to process (Batch [N]):
[List 10 files]

Required transformations:
1. Remove ALL code comments:
   - HTML: <!-- ... -->
   - JSX: {/* ... */}
   - JavaScript/TypeScript: // ... and /* ... */
   - CSS: /* ... */
   (Including inline comments, block comments, and multi-line comments)

2. Replace CSS custom properties with explicit values:
   - var(--ag-primary) � #12623e
   - var(--ag-primary-dark) � #0d4429
   - var(--ag-success) � #14854f
   - var(--ag-danger) � #e03e3e
   - var(--ag-warning) � #f59e0b
   - var(--ag-neutral-500) � #6b7280
   - var(--ag-background-secondary-inverted) � #1f2937
   - Unknown variables � #6366f1 (fallback - document these)

3. Optional: Standardize to double quotes in JS/TS

Preserve:
- All functional code
- Import statements
- Props/events documentation
- Markdown prose and tables
- Formatting and indentation

Process all code blocks in ::: details sections and CSS examples.
Report any unknown CSS variables encountered.
```

## Notes

- This remediation is a workaround for VitePress syntax highlighting limitations
- Batch processing allows for quality control and adjustment of strategy if needed
- Future VitePress theme updates may provide better solutions
- Document any edge cases or exceptions encountered during processing

## Appendix: CSS Variable Reference

Known AgnosticUI CSS variables and their explicit values:

```css
/* Primary Colors */
--ag-primary: #12623e
--ag-primary-dark: #0d4429

/* Semantic Colors */
--ag-success: #14854f
--ag-danger: #e03e3e
--ag-warning: #f59e0b

/* Neutral Colors */
--ag-neutral-500: #6b7280

/* Background Colors */
--ag-background-secondary-inverted: #1f2937
```

**Fallback**: Use `#6366f1` for unknown CSS variables and document them for review.

---

# Next Steps

## Component-Level Issues Requiring Manual Fixes

The following accessibility issues were discovered during QA testing and require manual fixes to component source code or design tokens. These cannot be resolved through documentation changes alone.

### 🔴 Critical - Button Component Issues

#### 1. Buttons Missing Accessible Names
**Location**: Badge documentation - "Button Icon with Badge" section
**Issue**: Buttons do not have an accessible name
**Impact**: Screen readers cannot identify button purpose
**Action Required**:
- Review `v2/lib/src/components/Button/core/_Button.ts`
- Ensure `aria-label` or visible text is properly applied
- Check if icon-only buttons have accessible names
- Verify slot content is properly announced

**Status**: ⬜ Not Started

#### 2. Loader Component - Prohibited ARIA Attributes
**Location**: Loader component
**Issue**: Elements use prohibited ARIA attributes
**Impact**: Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies
**Action Required**:
- Review `v2/lib/src/components/Loader/core/_Loader.ts`
- Identify which ARIA attributes are being used
- Verify the element's role and check if ARIA attributes are allowed for that role
- Remove or relocate prohibited ARIA attributes
- Test with screen readers to ensure proper announcement

**Status**: ⬜ Not Started

---

### 🟡 High Priority - Color Contrast Issues

#### 3. Warning Variant Button Contrast (Light Mode)
**Location**: Button component - variant="warning"
**Issue**: Background and foreground colors do not have sufficient contrast ratio (dark yellow on lighter yellow)
**WCAG**: Fails Level AA (4.5:1 requirement)
**Action Required**:
- Review warning button colors in `v2/theme-registry` design tokens
- Adjust either background or foreground to meet 4.5:1 contrast
- Test in both light and dark modes

**Status**: ⬜ Not Started

#### 4. Success/Info Variants Dark Mode Contrast
**Location**: Button component - variant="success" and variant="info" (Dark Mode)
**Issue**: Multiple contrast violations in dark mode
**WCAG**: Fails Level AA
**Action Required**:
- Review success and info colors in `ag-tokens-dark.css`
- Increase contrast between background and text
- Verify against WCAG AA standards

**Status**: ⬜ Not Started

#### 5. Primary Color Dark Mode Contrast
**Location**: Breadcrumb component and others using `--ag-primary` in dark mode
**Issue**: `:host([primary]) .ag-breadcrumb__link { color: var(--ag-primary); }` triggers contrast violations
**WCAG**: Fails Level AA
**Action Required**:
- Update `--ag-primary` in `ag-tokens-dark.css` to be significantly lighter
- Ensure primary color works across all components in dark mode
- Test breadcrumb links, buttons, and other primary-colored elements

**Status**: ⬜ Not Started

#### 6. Bordered Button Variants Contrast
**Location**: Button component - bordered style with variant="danger" and variant="secondary"
**Issue**: Border and text colors have insufficient contrast
**WCAG**: Fails Level AA
**Action Required**:
- Review bordered button styles for danger and secondary variants
- Adjust border colors or text colors to meet contrast requirements
- Test in both light and dark modes

**Status**: ⬜ Not Started

---

### 🔵 Medium Priority - Hard-coded Inline Colors

#### 7. Inline Style Colors Not Dark Mode Responsive
**Location**: Various components (e.g., Collapsible examples)
**Issue**: Hard-coded colors like `style="color: red;"` don't adapt to dark mode
**Example**: `<strong style="color: red;">Collapsed</strong>`
**WCAG**: May fail contrast in dark mode
**Action Required**:
- Search codebase for hard-coded inline style colors
- Replace with CSS custom properties or CSS classes
- Examples to fix:
  - `style="color: red;"` → use `--ag-danger` or `.text-danger` class
  - `style="color: blue;"` → use `--ag-primary` or `.text-primary` class
- Document pattern for contributors

**Status**: ⬜ Not Started

---

## Tracking

### Status Legend
- ⬜ Not Started
- 🟡 In Progress
- ✅ Completed
- ❌ Blocked

### Progress
- **Total Issues**: 7
- **Completed**: 0
- **In Progress**: 0
- **Not Started**: 7

---

## Priority Matrix

| Priority | Count | Issues |
|----------|-------|--------|
| 🔴 Critical | 2 | #1 (Accessible Names), #2 (Prohibited ARIA) |
| 🟡 High | 4 | #3, #4, #5, #6 (Contrast) |
| 🔵 Medium | 1 | #7 (Inline Colors) |

---

## Notes for Implementers

1. **Test All Changes**: Use browser DevTools accessibility audits and automated tools like axe DevTools
2. **Dark Mode Testing**: Every color change must be tested in both light and dark modes
3. **WCAG Compliance**: All changes must meet WCAG 2.1 Level AA (4.5:1 contrast for normal text)
4. **Cross-Component Impact**: Color token changes affect multiple components - test thoroughly
5. **Documentation**: Update design token documentation after changes
