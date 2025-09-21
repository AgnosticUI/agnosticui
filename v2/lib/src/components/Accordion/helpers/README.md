# 🔧 Accordion Helpers - Utility Functions & Interfaces

✅ **These files are safe to modify and extend!**

This directory contains utility functions, interfaces, and helper code for the Accordion component. Unlike the `/core/` directory, these files are designed to be modified and extended as needed.

## Directory Contents

- **`accordion-state.ts`** - State management utilities and interfaces
- **`README.md`** - This documentation file

## What Goes Here

### 🧩 **Utility Functions**
- State management helpers
- Data transformation functions  
- Validation utilities
- Common algorithms

### 📝 **Type Definitions**
- Interfaces for data structures
- Type unions and helpers
- Configuration objects
- Event payload types

### 🔄 **Pure Functions**
- Stateless operations
- Immutable state transformations
- Calculation helpers
- Format converters

## Current Utilities

### `accordion-state.ts`

Contains pure functions for managing accordion state:

```typescript
// Types
export interface AccordionSection {
  id: string;
  expanded: boolean;
}

export interface AccordionState {
  sections: AccordionSection[];
}

// Factory function
export const createAccordion = (ids: string[]): AccordionState

// State transformation
export const toggleSection = (state: AccordionState, id: string): AccordionState
```

## Usage Examples

### In React Components
```typescript
import { useAccordion } from '../react/useAccordion';
// useAccordion internally uses helpers/accordion-state.ts
```

### In Web Components
```typescript
import { createAccordion, toggleSection } from './helpers/accordion-state';

// Create initial state
const state = createAccordion(['section-1', 'section-2']);

// Transform state
const newState = toggleSection(state, 'section-1');
```

### In Extensions
```typescript
import { AccordionState } from '../helpers/accordion-state';

// Use types for consistency
function customStateManager(state: AccordionState) {
  // Your custom logic here
}
```

## Architecture Diagram

```
📁 Accordion/
├── 🔒 core/              ← Immutable canonical implementation
├── ✏️  Accordion.ts      ← Mutable override version  
├── 🔧 helpers/           ← You are here - SAFE TO MODIFY
│   └── accordion-state.ts← State utilities & interfaces
├── 🎨 extensions/        ← AI-safe extensions
├── 💅 styles/            ← Production styling
└── 🧪 experiments/       ← Experimental styling
```

## Adding New Helpers

### ✅ **Good Helper Functions:**
- Pure functions with no side effects
- Reusable across different contexts
- Well-typed with clear interfaces
- Focused on single responsibility

### ✅ **Helper Examples:**
```typescript
// Data validation
export const validateAccordionConfig = (config: any): boolean => { ... }

// State queries  
export const getExpandedSections = (state: AccordionState): string[] => { ... }

// Utilities
export const generateSectionIds = (count: number): string[] => { ... }

// Type guards
export const isValidAccordionState = (obj: any): obj is AccordionState => { ... }
```

### ❌ **Avoid in Helpers:**
- Component implementations (use `/extensions/` instead)
- DOM manipulation (belongs in component code)
- Global state mutations (keep functions pure)
- Framework-specific code (use `/react/`, `/vue/` etc.)

## Best Practices

### 🎯 **Keep Functions Pure**
```typescript
// ✅ Good - Pure function
export const toggleSection = (state: AccordionState, id: string): AccordionState => ({
  sections: state.sections.map(section =>
    section.id === id 
      ? { ...section, expanded: !section.expanded }
      : section
  )
});

// ❌ Bad - Mutates input
export const toggleSection = (state: AccordionState, id: string): AccordionState => {
  state.sections.find(s => s.id === id)!.expanded = !state.sections.find(s => s.id === id)!.expanded;
  return state;
}
```

### 🏷️ **Use Clear Types**
```typescript
// ✅ Good - Clear interface
export interface AccordionConfig {
  allowMultiple: boolean;
  animationDuration: number;
  defaultExpanded: string[];
}

// ❌ Bad - Generic any
export function processConfig(config: any): any { ... }
```

### 📚 **Document Public APIs**
```typescript
/**
 * Creates a new accordion state with all sections collapsed
 * @param ids - Array of section identifiers
 * @returns New AccordionState object
 */
export const createAccordion = (ids: string[]): AccordionState => { ... }
```

## Testing Helpers

Helpers should be thoroughly tested since they're shared across the component ecosystem:

```typescript
// accordion-state.test.ts
describe('createAccordion', () => {
  it('should create state with all sections collapsed', () => {
    const state = createAccordion(['a', 'b', 'c']);
    expect(state.sections.every(s => !s.expanded)).toBe(true);
  });
});
```

## Framework Integration

Helpers are designed to be framework-agnostic and can be used across:
- **Web Components** (Lit)
- **React** (via hooks)
- **Vue** (via composables) 
- **Vanilla JavaScript**
- **Node.js** (for SSR/testing)

Happy coding! 🚀