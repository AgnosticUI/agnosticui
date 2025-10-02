# agnosticui-core

AgnosticUI Core Library - Framework-agnostic, upgrade-safe web components built with Lit.

## Architecture Overview

AgnosticUI uses a **Minimalist & Highly Themeable** architecture where components provide beautiful, minimal defaults that are fully customizable via design tokens (`--ag-*` CSS custom properties).

```mermaid
graph TB
    subgraph "Component Architecture"
        Core["Core Component<br/>(_Component.ts)"]
        Wrapper["Framework Wrapper<br/>(ReactComponent.tsx)"]
        Extension["Extensions<br/>(AnimatedComponent.ts)"]
        Vibe["Vibes<br/>(styled variants)"]
        
        Core --> Wrapper
        Core --> Extension
        Extension --> Vibe
    end
    
    subgraph "Consumer Applications"
        React["React App"]
        Vue["Vue App"] 
        Svelte["Svelte App"]
        Vanilla["Vanilla JS"]
    end
    
    Wrapper --> React
    Wrapper --> Vue
    Wrapper --> Svelte
    Core --> Vanilla
```

## Component Layers

### 1. Core Layer (`_Component.ts`)
- **Immutable** canonical web component
- Built with Lit for maximum compatibility
- Contains all functional behavior and accessibility
- Minimal visual styling via `--ag-*` design tokens

### 2. Framework Wrappers
- **React/Vue/Svelte** specific adapters
- Handle framework-specific patterns (props, events, slots)
- Maintain type safety and developer experience

### 3. Extensions
- **Optional** enhanced versions with additional features
- Example: `AnimatedAccordion` adds smooth transitions
- Built on top of core components

### 4. Vibes (Styling Variants)
- **User-customizable** styled versions
- CSS-in-JS or external stylesheets
- Material, Chakra, Tailwind inspired themes

## Data Flow

```mermaid
sequenceDiagram
    participant User
    participant Framework as Framework Wrapper
    participant Core as Core Web Component
    participant DOM
    
    User->>Framework: Render component with props
    Framework->>Core: Set attributes/properties
    Core->>DOM: Create shadow DOM with slots
    Note over Core: Apply functional CSS only
    
    User->>Framework: Interact (click, keyboard)
    Framework->>Core: Forward event listeners
    Core->>Core: Handle accessibility & state
    Core->>Framework: Emit custom events
    Framework->>User: Trigger callbacks/updates
```

## Component Structure

```mermaid
classDiagram
    class CoreComponent {
        +properties: LitProperties
        +render() LitTemplate
        +handleInteraction() void
        +updateA11yState() void
        -functionalStyles: CSSResult
    }
    
    class ReactWrapper {
        +props: ComponentProps
        +ref: RefObject
        +useEffect() void
        +setupEventListeners() void
    }
    
    class Extension {
        +additionalFeatures: Feature[]
        +enhancedBehavior() void
    }
    
    class Vibe {
        +customStyles: CSS
        +themeVariables: CSSVariables
    }
    
    CoreComponent <|-- Extension
    CoreComponent <-- ReactWrapper : wraps
    Extension <-- Vibe : styles
```

## Directory Structure

```
src/components/
├── Accordion/
│   ├── core/
│   │   ├── _Accordion.ts          # Immutable core
│   │   └── _Accordion.spec.ts     # Core tests
│   ├── react/
│   │   ├── ReactAccordion.tsx     # React wrapper
│   │   └── useAccordion.ts        # React hooks
│   ├── extensions/
│   │   └── AnimatedAccordion.ts   # Enhanced version
│   ├── vibes/
│   │   └── material-accordion/    # Styled variants
│   ├── helpers/
│   │   └── accordion-state.ts     # Shared utilities
│   └── Accordion.ts               # Public exports
```

## Key Principles

### Minimalist & Highly Themeable Philosophy
- ✅ **Minimal Visual Styling**: Clean defaults via `--ag-*` design tokens
- ✅ **Functional CSS**: Layout, positioning, component structure
- 🎨 **Complete Customization**: Override any design token for white-labeling
- 🎯 **Result**: Production-ready components with enterprise-grade theming

### Upgrade Safety
- Core components (`_Component.ts`) are **immutable**
- Framework wrappers handle breaking changes
- Extensions and vibes can evolve independently
- Semantic versioning protects against unexpected changes

### Framework Agnostic
- Web Components work in any framework
- Framework-specific wrappers provide optimal DX
- Progressive enhancement from vanilla JS to framework-specific features

## Usage

```typescript
// Direct web component usage
import 'agnosticui-core/accordion';

// React wrapper
import { ReactAccordion } from 'agnosticui-core/react';

// Enhanced version
import { AnimatedAccordion } from 'agnosticui-core/extensions/animated-accordion';
```

## Development Workflow

1. **Core First**: Implement behavior in `_Component.ts`
2. **Test Thoroughly**: Ensure accessibility compliance
3. **Wrap Frameworks**: Create framework-specific adapters
4. **Extend Carefully**: Add optional enhancements
5. **Style Externally**: Create vibes and themes as separate modules