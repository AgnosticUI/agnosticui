# Barrel File Refactoring Pattern

**Status**: Temporary reference document for ongoing v2 refactoring
**Date**: 2025-10-25
**Component**: Accordion (completed)

## Overview

This document describes the pattern for refactoring components to use barrel files for cleaner imports and better organization. The Accordion component has been successfully refactored using this pattern.

## What is a Barrel File?

A barrel file is an entry point that:
1. Imports and re-exports all public APIs from the implementation files
2. Handles component registration (for web components)
3. Provides a single, clean import path for consumers

## Pattern Structure

```
components/
  ComponentName/
    core/
      _Component.ts          # Implementation (canonical, immutable)
      Component.ts           # Barrel file (NEW)
      _Component.spec.ts     # Tests (uses barrel file)
    react/
      ReactComponent.tsx     # React wrapper (uses barrel file)
    vue/
      VueComponent.vue       # Vue wrapper (uses barrel file)
      VueComponentItem.vue   # Vue sub-components (use barrel file)
```

## Implementation Steps

### 1. Create the Barrel File

Create `Component.ts` in the `core/` directory alongside `_Component.ts`:

```typescript
// components/Accordion/core/Accordion.ts
import { AccordionItem } from './_Accordion.js';
import { AccordionGroup } from '../../AccordionGroup/AccordionGroup.js';

// Register custom elements
if (!customElements.get('ag-accordion')) {
  customElements.define('ag-accordion', AccordionGroup);
}

if (!customElements.get('ag-accordion-item')) {
  customElements.define('ag-accordion-item', AccordionItem);
}

// Declare global types
declare global {
  interface HTMLElementTagNameMap {
    'ag-accordion': AccordionGroup;
    'ag-accordion-item': AccordionItem;
  }
}

// Export everything from implementation
export * from './_Accordion.js';
export { AccordionGroup } from '../../AccordionGroup/AccordionGroup.js';
```

### 2. Update Test Files

**Before:**
```typescript
import { AccordionItem } from './_Accordion';
```

**After:**
```typescript
import { AccordionItem } from './Accordion';
```

### 3. Update React Wrapper

**Before:**
```typescript
import {
  Accordion,
  AccordionItem as AccordionItemElement,
  type AccordionProps,
  type AccordionItemProps,
  type AccordionItemToggleEvent
} from '../core/_Accordion';
import '../../AccordionGroup/AccordionGroup';
```

**After:**
```typescript
import {
  Accordion,
  AccordionItem as AccordionItemElement,
  type AccordionProps,
  type AccordionItemProps,
  type AccordionItemToggleEvent
} from '../core/Accordion';
```

### 4. Update Vue Wrappers

**Before:**
```typescript
import "../core/_Accordion";
import "../../AccordionGroup/AccordionGroup";
```

**After:**
```typescript
import "../core/Accordion";
```

Apply to all Vue components (VueAccordion.vue, VueAccordionItem.vue, etc.)

### 5. Update package.json Exports

**CRITICAL**: Update the package.json exports in `/v2/lib/package.json` to point to the barrel file instead of the implementation file.

**Before:**
```json
"./accordion": {
  "types": "./dist/components/Accordion/core/_Accordion.d.ts",
  "import": "./dist/components/Accordion/core/_Accordion.js"
}
```

**After:**
```json
"./accordion": {
  "types": "./dist/components/Accordion/core/Accordion.d.ts",
  "import": "./dist/components/Accordion/core/Accordion.js"
}
```

Note the file name change (path stays the same):
- Old: `./dist/components/Accordion/core/_Accordion.js`
- New: `./dist/components/Accordion/core/Accordion.js` (remove underscore prefix)

This ensures external consumers importing `agnosticui-core/accordion` get the barrel file with all exports and registrations.

## Benefits

1. **Single Import Path**: Components only need to import from one location
2. **Centralized Registration**: Web component registration happens in one place
3. **Cleaner Dependencies**: No need to import auxiliary components separately
4. **Better Organization**: Clear separation between implementation and exports
5. **Consistency**: All framework wrappers use the same import pattern

## Verification Checklist

After refactoring a component:

- [ ] Barrel file created in `core/Component.ts`
- [ ] Test file imports updated to use barrel file
- [ ] React wrapper imports updated
- [ ] All Vue wrapper imports updated
- [ ] **package.json exports updated** (point to barrel file, not `_Component`)
- [ ] Project builds successfully (`npm run build`)
- [ ] Tests pass (`npm test` or specific test command)
- [ ] Lit storybook builds and works
- [ ] React storybook builds and works
- [ ] Vue storybook builds and works
- [ ] Vitepress site builds and works

## Accordion Example (Completed)

### Files Updated

1. ✅ `/v2/lib/src/components/Accordion/core/Accordion.ts` (created)
2. ✅ `/v2/lib/src/components/Accordion/core/_Accordion.spec.ts` (updated)
3. ✅ `/v2/lib/src/components/Accordion/react/ReactAccordion.tsx` (updated)
4. ✅ `/v2/lib/src/components/Accordion/vue/VueAccordion.vue` (updated)
5. ✅ `/v2/lib/src/components/Accordion/vue/VueAccordionItem.vue` (updated)
6. ✅ `/v2/lib/package.json` (exports updated):
   ```json
   "./accordion": {
     "types": "./dist/components/Accordion/core/Accordion.d.ts",
     "import": "./dist/components/Accordion/core/Accordion.js"
   }
   ```

### Verification Results

- ✅ Tests pass
- ✅ Lit storybook works
- ✅ React storybook works
- ✅ Vue storybook works
- ✅ Vitepress site works

## Next Components to Refactor

Components that should follow this pattern:

- Button
- Checkbox
- Dialog
- Divider
- Drawer
- IconButton
- Input
- Menu
- Radio
- Tabs
- Toggle
- Tooltip
- Breadcrumb

## Notes

- The barrel file (`Component.ts`) should be version controlled
- The implementation file (`_Component.ts`) remains the canonical source
- All external consumers should import from the barrel file
- The barrel file handles all side effects (registration, global declarations)
- **IMPORTANT**: Don't forget to update `package.json` exports - this is easy to miss but critical for external consumers!

## Questions or Issues

If you encounter issues during refactoring:

1. Check that all imports use `.js` extensions (required for ES modules)
2. Ensure custom element registration guards are present
3. Verify all types are re-exported
4. Test all framework playgrounds after changes
5. Run the full test suite before committing
