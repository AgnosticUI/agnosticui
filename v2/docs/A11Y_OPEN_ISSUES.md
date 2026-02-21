# Open Accessibility Issues

Extracted from [VITEPRESS_A11Y_PLAN.md](./VITEPRESS_A11Y_PLAN.md) after the documentation-level a11y remediation was completed (54/54 files). These are **component-level** issues that require source code or design token changes.

---

## Critical

### 1. Buttons Missing Accessible Names

**Location**: Badge documentation - "Button Icon with Badge" section
**Issue**: Buttons do not have an accessible name
**Impact**: Screen readers cannot identify button purpose
**Action Required**:

- Review `v2/lib/src/components/Button/core/_Button.ts`
- Ensure `aria-label` or visible text is properly applied
- Check if icon-only buttons have accessible names
- Verify slot content is properly announced

**Status**: Not Started

### 2. Loader Component - Prohibited ARIA Attributes

**Location**: Loader component
**Issue**: Elements use prohibited ARIA attributes
**Impact**: Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies
**Action Required**:

- Review `v2/lib/src/components/Loader/core/_Loader.ts`
- Identify which ARIA attributes are being used
- Verify the element's role and check if ARIA attributes are allowed for that role
- Remove or relocate prohibited ARIA attributes
- Test with screen readers to ensure proper announcement

**Status**: Not Started

---

## High Priority - Color Contrast

### 3. Warning Variant Button Contrast (Light Mode)

**Location**: Button component - variant="warning"
**Issue**: Background and foreground colors do not have sufficient contrast ratio (dark yellow on lighter yellow)
**WCAG**: Fails Level AA (4.5:1 requirement)
**Action Required**:

- Review warning button colors in `v2/theme-registry` design tokens
- Adjust either background or foreground to meet 4.5:1 contrast
- Test in both light and dark modes

**Status**: Not Started

### 4. Success/Info Variants Dark Mode Contrast

**Location**: Button component - variant="success" and variant="info" (Dark Mode)
**Issue**: Multiple contrast violations in dark mode
**WCAG**: Fails Level AA
**Action Required**:

- Review success and info colors in `ag-tokens-dark.css`
- Increase contrast between background and text
- Verify against WCAG AA standards

**Status**: Not Started

### 5. Primary Color Dark Mode Contrast

**Location**: Breadcrumb component and others using `--ag-primary` in dark mode
**Issue**: `:host([primary]) .ag-breadcrumb__link { color: var(--ag-primary); }` triggers contrast violations
**WCAG**: Fails Level AA
**Action Required**:

- Update `--ag-primary` in `ag-tokens-dark.css` to be significantly lighter
- Ensure primary color works across all components in dark mode
- Test breadcrumb links, buttons, and other primary-colored elements

**Status**: Not Started

### 6. Bordered Button Variants Contrast

**Location**: Button component - bordered style with variant="danger" and variant="secondary"
**Issue**: Border and text colors have insufficient contrast
**WCAG**: Fails Level AA
**Action Required**:

- Review bordered button styles for danger and secondary variants
- Adjust border colors or text colors to meet contrast requirements
- Test in both light and dark modes

**Status**: Not Started

---

## Medium Priority

### 7. Inline Style Colors Not Dark Mode Responsive

**Location**: Various components (e.g., Collapsible examples)
**Issue**: Hard-coded colors like `style="color: red;"` don't adapt to dark mode
**Example**: `<strong style="color: red;">Collapsed</strong>`
**WCAG**: May fail contrast in dark mode
**Action Required**:

- Search codebase for hard-coded inline style colors
- Replace with CSS custom properties or CSS classes
- Examples to fix:
  - `style="color: red;"` -> use `--ag-danger` or `.text-danger` class
  - `style="color: blue;"` -> use `--ag-primary` or `.text-primary` class
- Document pattern for contributors

**Status**: Not Started

---

## Notes for Implementers

1. **Test All Changes**: Use browser DevTools accessibility audits and automated tools like axe DevTools
2. **Dark Mode Testing**: Every color change must be tested in both light and dark modes
3. **WCAG Compliance**: All changes must meet WCAG 2.1 Level AA (4.5:1 contrast for normal text)
4. **Cross-Component Impact**: Color token changes affect multiple components - test thoroughly
5. **Documentation**: Update design token documentation after changes
