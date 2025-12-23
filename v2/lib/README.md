# agnosticui-core

AgnosticUI Core Library - Framework-agnostic, upgrade-safe web components built with Lit.

## Architecture Overview

AgnosticUI uses a **Minimalist & Highly Themeable** architecture where components provide beautiful, minimal defaults that are fully customizable via design tokens (`--ag-*` CSS custom properties).

## Component Layers

### 1. Core Layer (`_Component.ts`)
- **Immutable** canonical web component
- Built with Lit for maximum compatibility
- Contains all functional behavior and accessibility
- Minimal visual styling via `--ag-*` design tokens

### 2. Framework Wrappers
- **React/Vue** specific adapters
- Handle framework-specific patterns (props, events, slots)
- Maintain type safety and developer experience

## Directory Structure

```
src/components/
└── Accordion/
    ├── core/
    │   ├── _Accordion.ts             # Core Lit Component
    │   ├── Accordion.ts              # Public interface
    │   ├── AccordionGroup.ts         # Group component
    │   └── README.md                 # Documentation
    ├── react/
    │   ├── index.ts                  # React exports
    │   └── ReactAccordion.tsx        # React wrapper
    └── vue/
        ├── index.ts                  # Vue exports
        ├── VueAccordion.vue          # Main component
        ├── VueAccordionContent.vue   # Content component
        ├── VueAccordionHeader.vue    # Header component
        └── VueAccordionItem.vue      # Item component
```

## Why AgnosticUI?

### The Local UI Kit - A New Category
**The UI kit that lives in your codebase, not node_modules.**

Traditional UI libraries live in `node_modules/` as black boxes. Copy/paste approaches give you code but no reference. AgnosticUI Local gives you **both**: a complete reference library in your project plus owned copies of components you use.

```bash
npx ag init                    # Full library in ./agnosticui/ (reference)
npx ag add button              # Component in ./src/components/ag/ (yours to modify)
npx ag sync                    # Update reference, preserve your customizations
```

### AI-First Development
**The only UI kit designed for AI-assisted development.**

- **Full Context**: AI tools (Cursor, Windsurf, Claude) see your entire component library
- **Better Assistance**: "Make this button work like the Combobox" - AI sees both
- **Reference + Customization**: AI understands the source AND your modifications
- **Offline & Local**: No API calls, no rate limits, no black boxes

### Complete Ownership
**Copy, modify, and own your components.**

- Components copied to your project - modify structure, behavior, styling
- No vendor lock-in or "black box" frustration
- You control the dependency graph and update schedule
- Review diffs before accepting updates via `npx ag sync`

### Zero Dependencies
**Only Lit (5KB runtime) - nothing else.**

- No bloated node_modules
- Components work standalone
- Production bundle includes only what you use
- Framework wrappers via @lit/react and Vue 3 composition API

### Minimalist & Themeable
**Beautiful defaults, infinite customization.**

- Production-ready styling out of the box
- Everything customizable via `--ag-*` design tokens
- Enterprise white-labeling capability
- Light/dark mode built-in

### Multi-Framework Support
**React, Vue, Lit - one component library, all frameworks.**

- Framework-specific wrappers for optimal developer experience
- React wrapper via @lit/react makes props and events feel naturally "React-like"
- Vue 3 components using composition API
- Svelte works directly (excellent Web Components support)

## Usage

```typescript
// Direct web component usage
import 'agnosticui-core/accordion';

// React wrapper
import { ReactAccordion } from 'agnosticui-core/react';
```

## Development Workflow

1. **Core First**: Implement behavior in `_Component.ts`
2. **Test Thoroughly**: Ensure accessibility compliance
3. **Wrap Frameworks**: Create framework-specific adapters
5. **Theme via Tokens**: Customize using `--ag-*` design tokens
