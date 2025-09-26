# AgnosticUI v2 Component Status & Documentation Overview

## Component Library Status

| Component | Status | Spec Sheet | Tests | Playground | Framework Wrappers | Notes |
|-----------|--------|------------|-------|------------|-------------------|--------|
| **Accordion** | ✅ Complete | ✅ spec.md | ✅ Full | ✅ Complete | ✅ React/Vue/Svelte | Exemplary component with full docs |
| **Button** | ✅ Complete | ✅ spec.md | ✅ Full | ✅ Complete | ✅ React/Vue/Svelte | **NEW: Complete spec sheet added** |
| **IconButton** | ✅ Complete | ✅ spec.md | ✅ Full | ✅ Complete | ✅ React/Vue/Svelte | **NEW: Spec added** + recent contrast improvements |
| **Input** | ✅ Complete | ✅ spec.md | ✅ Full | ✅ Complete | ✅ React/Vue/Svelte | **NEW: Complete spec sheet added** |
| **Dialog** | ✅ Complete | ✅ spec.md | ✅ Full | ✅ Complete | ✅ React/Vue/Svelte | **NEW: Complete spec sheet added** |
| **Tooltip** | ✅ Complete | ✅ spec.md | ✅ Full | ✅ Complete | ✅ React/Vue/Svelte | Comprehensive specs & guides |
| **Toggle** | ✅ Complete | ✅ spec.md | ✅ Full | ✅ Complete | ✅ React/Vue/Svelte | **NEW: Spec + playground page added** |
| **Breadcrumb** | ✅ Complete | ✅ spec.md | ✅ Full | ✅ Complete | ✅ React/Vue/Svelte | **NEW: Complete spec sheet added** |
| **AccordionGroup** | 🟡 Helper | ❌ Missing | ✅ Basic | ❌ None | ❌ None | Utility component |

## Documentation Completeness

### ✅ Well Documented (8/9)
- **Accordion**: Complete spec.md with architecture, requirements, accessibility
- **Tooltip**: Extensive specs with external guides (APG, BBC, RedHat, etc.)
- **Button**: **NEW** - Complete spec.md with WAI-ARIA compliance, variants, design tokens
- **IconButton**: **NEW** - Complete spec.md including recent contrast improvements
- **Input**: **NEW** - Complete spec.md with form integration, validation patterns
- **Dialog**: **NEW** - Complete spec.md with focus management, accessibility
- **Toggle**: **NEW** - Complete spec.md with WAI-ARIA Switch pattern
- **Breadcrumb**: **NEW** - Complete spec.md with navigation patterns

### ❌ Missing Documentation (1/9)
- **AccordionGroup**: No spec.md (utility component, lower priority)

## Quick Context for Claude Sessions

### **Component Architecture Pattern**
- `_Component.ts` = Canonical, immutable, upgrade-safe
- `Component.ts` = Experimental, AI-modifiable version
- All components use Lit with almost-headless styling
- WAI-ARIA APG compliance is mandatory

### **Design Token System**
- Semantic tokens: `--ag-primary`, `--ag-text-locked`, `--ag-focus`, etc.
- Theme-aware: Light/dark mode support
- Located in: `/v2/theme-registry/`

### **Recent Improvements**
- **IconButton**: Fixed contrast issues with `--ag-text-locked` token
- **All Components**: Curated favorite colors in playground demos
- **Theme System**: Enhanced with locked text color for special cases

### **Testing & Quality**
- All components have comprehensive test suites
- Playground demos for all frameworks (React, Vue, Svelte)
- Accessibility testing included in specs

## Recommended Priorities for Documentation

### **High Priority** (Core UX Components)
1. **IconButton** - Heavily used, recently improved
2. **Input** - Critical form component
3. **Dialog** - Complex accessibility requirements
4. **Button** - Foundation component (empty spec exists)

### **Medium Priority**
5. **Toggle** - Form component
6. **Breadcrumb** - Navigation component

### **Low Priority**
7. **AccordionGroup** - Helper component

## For Fresh Claude Sessions

When starting a new Claude session for AgnosticUI v2 work:

1. **Read `/v2/docs/CLAUDE.md`** - Core development workflow
2. **Check this file** - Component status overview
3. **Review specific component's `spec.md`** if it exists
4. **Check recent commits** for context on current work
5. **Run tests** to verify current state

## File Locations

- **Component Source**: `/v2/lib/src/components/[Component]/`
- **Specs**: `/v2/lib/src/components/[Component]/spec.md`
- **Theme Registry**: `/v2/theme-registry/`
- **Playground**: `/v2/playground/src/components/`
- **Build Output**: `/v2/lib/dist/`