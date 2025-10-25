# Component Registration Pattern Audit & Migration Plan

**Date**: 2025-10-25
**Status**: Analysis Complete - Migration Plan Documented

## Executive Summary

An audit of all 25 components in AgnosticUI v2 revealed **three different registration patterns** being used inconsistently across the codebase. This document provides the analysis findings, the standardized pattern, and a migration plan.

## Current State Analysis

### Pattern Distribution

| Pattern | Count | Components |
|---------|-------|------------|
| **Pattern 1**: `@customElement` only | 9 | Alert, Breadcrumb, Toggle, Card, Icon, Dialog, Toast, Header, Drawer |
| **Pattern 2**: Manual `customElements.define()` only | 9 | Accordion, AccordionItem, Tooltip, Radio, Checkbox, Avatar, Progress, Button |
| **Pattern 3**: `@customElement` + HTMLElementTagNameMap | 6 | Input, IconButton, Tabs, Divider, Loader, Spinner, Tag |
| **Pattern 4**: Manual registration + HTMLElementTagNameMap | 1 | Select (newly updated) |

### Detailed Component Analysis

| Component | @customElement? | customElements.define? | HTMLElementTagNameMap? | Status |
|-----------|----------------|------------------------|------------------------|---------|
| Alert | ✓ | ✗ | ✗ | Pattern 1 |
| Breadcrumb | ✓ | ✗ | ✗ | Pattern 1 |
| Input | ✓ | ✗ | ✓ | Pattern 3 |
| Toggle | ✓ | ✗ | ✗ | Pattern 1 |
| Accordion | ✗ | ✓ | ✗ | Pattern 2 |
| IconButton | ✓ | ✗ | ✓ | Pattern 3 |
| Menu | ✓ | ✗ | ✗ | Pattern 1 |
| Tabs | ✓ | ✗ | ✓ | Pattern 3 |
| Tooltip | ✗ | ✓ | ✗ | Pattern 2 |
| Divider | ✓ | ✗ | ✓ | Pattern 3 |
| Radio | ✗ | ✓ | ✗ | Pattern 2 |
| Checkbox | ✗ | ✓ | ✗ | Pattern 2 |
| Avatar | ✗ | ✓ | ✗ | Pattern 2 |
| Loader | ✓ | ✗ | ✓ | Pattern 3 |
| Spinner | ✓ | ✗ | ✓ | Pattern 3 |
| Card | ✓ | ✗ | ✗ | Pattern 1 |
| Progress | ✗ | ✓ | ✗ | Pattern 2 |
| Button | ✗ | ✓ | ✗ | Pattern 2 |
| Tag | ✓ | ✗ | ✓ | Pattern 3 |
| Icon | ✓ | ✗ | ✗ | Pattern 1 |
| Dialog | ✓ | ✗ | ✗ | Pattern 1 |
| Toast | ✓ | ✗ | ✗ | Pattern 1 |
| Header | ✓ | ✗ | ✗ | Pattern 1 |
| Select | ✗ | ✓ | ✓ | ✅ **Pattern 4 (Standard)** |
| Drawer | ✓ | ✗ | ✗ | Pattern 1 |

## Issues with Current Patterns

### Pattern 1 & 3: `@customElement` Decorator Issues

**Problem**: The `@customElement` decorator causes React Storybook to fail with parsing errors:
```
Pre-transform error: Decorators must be placed *after* the 'export' keyword
Plugin: storybook:react-docgen-plugin
```

**Root Cause**: Storybook's `react-docgen-plugin` attempts to parse the core TypeScript component file when generating documentation, but it doesn't properly handle the decorator syntax.

**Impact**: Components using `@customElement` may work in Lit and Vue Storybook but fail in React Storybook.

**Affected Components**: Alert, Breadcrumb, Input, Toggle, IconButton, Menu, Tabs, Divider, Loader, Spinner, Card, Tag, Icon, Dialog, Toast, Header, Drawer (17 components)

### Pattern 2: Missing TypeScript Support

**Problem**: Components without `HTMLElementTagNameMap` declaration lack TypeScript support for element tag names.

**Impact**:
- No autocomplete for `document.createElement('ag-component')`
- No type checking for custom element usage
- Reduced IDE support

**Affected Components**: Accordion, Tooltip, Radio, Checkbox, Avatar, Progress, Button (7 components)

## Recommended Standard Pattern

Based on the analysis and recent fix for the Select component, the recommended pattern is:

### ✅ Standard Pattern (Pattern 4)

```typescript
import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';  // NO customElement import!

export interface MyComponentProps {
  // ... props
}

export class MyComponent extends LitElement implements MyComponentProps {
  @property({ type: String })
  public myProp = '';

  // ... component implementation
}

// Manual registration with conditional check
if (!customElements.get('ag-mycomponent')) {
  customElements.define('ag-mycomponent', MyComponent);
}

// TypeScript type mapping for autocomplete
declare global {
  interface HTMLElementTagNameMap {
    'ag-mycomponent': MyComponent;
  }
}
```

### Benefits

1. **React Storybook Compatibility**: No decorator parsing issues
2. **Re-import Safety**: Conditional check prevents duplicate registration errors
3. **TypeScript Support**: Full IDE autocomplete and type checking
4. **Consistency**: Single pattern used across all components

## Migration Plan

### Phase 1: High Priority (React Storybook Blockers)

Migrate components that use `@customElement` decorator to manual registration:

**Components**: Alert, Breadcrumb, Input, Toggle, IconButton, Menu, Tabs, Divider, Loader, Spinner, Card, Tag, Icon, Dialog, Toast, Header, Drawer

**Steps for each component**:
1. Remove `customElement` from imports
2. Remove `@customElement('ag-name')` decorator
3. Add manual registration at end of file
4. Add `HTMLElementTagNameMap` declaration
5. Update any `.spec.ts` files that manually register (remove duplicate registration)
6. Run tests to verify
7. Test in all three Storybooks (Lit, React, Vue)

### Phase 2: Medium Priority (TypeScript Support)

Add `HTMLElementTagNameMap` to components missing it:

**Components**: Accordion, Tooltip, Radio, Checkbox, Avatar, Progress, Button

**Steps for each component**:
1. Add `HTMLElementTagNameMap` declaration at end of file
2. Verify tests still pass
3. Document the TypeScript support in component docs

### Phase 3: Validation

1. Run full test suite: `npm test`
2. Build all playgrounds: React, Vue, Lit
3. Verify Storybook builds successfully for all frameworks
4. Spot check components in browser

## Migration Status Tracking

- [ ] **Phase 1 Started**: _________
- [ ] **Phase 1 Complete**: _________
- [ ] **Phase 2 Started**: _________
- [ ] **Phase 2 Complete**: _________
- [ ] **Phase 3 Complete**: _________
- [ ] **All Components Migrated**: _________

## Example Migration

### Before (Pattern 1)
```typescript
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('ag-alert')
export class Alert extends LitElement {
  @property({ type: String })
  public variant = '';

  // ... rest of component
}
```

### After (Pattern 4 - Standard)
```typescript
import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export class Alert extends LitElement {
  @property({ type: String })
  public variant = '';

  // ... rest of component
}

// Manual registration with conditional check
if (!customElements.get('ag-alert')) {
  customElements.define('ag-alert', Alert);
}

// TypeScript type mapping
declare global {
  interface HTMLElementTagNameMap {
    'ag-alert': Alert;
  }
}
```

### Test File Changes

**Before**:
```typescript
import { Alert } from './_Alert';

if (!customElements.get('ag-alert')) {
  customElements.define('ag-alert', Alert);
}
```

**After**:
```typescript
import { Alert } from './_Alert';

// Component registers itself on import - no manual registration needed
```

## Testing Checklist

For each migrated component:

- [ ] Unit tests pass (`npm test`)
- [ ] TypeScript compilation clean (`npm run typecheck`)
- [ ] Lit Storybook builds and runs
- [ ] React Storybook builds and runs (critical!)
- [ ] Vue Storybook builds and runs
- [ ] Component renders correctly in browser
- [ ] All props and variants work as expected
- [ ] No console errors or warnings

## Notes

- **DO NOT** migrate all components at once - do them incrementally
- **ALWAYS** run tests after each component migration
- **VERIFY** React Storybook builds successfully after each migration
- The Select component is already using the standard pattern as a reference
- Document any issues discovered during migration in this file

## References

- Standard documented in: `/Users/roblevin/workspace/opensource/agnosticui/v2/docs2/COMPONENT_DEVELOPMENT_WORKFLOW.md`
- Select component (reference implementation): `/Users/roblevin/workspace/opensource/agnosticui/v2/lib/src/components/Select/core/_Select.ts`
