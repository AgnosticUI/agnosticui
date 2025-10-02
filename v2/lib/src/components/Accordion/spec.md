# Accordion Component Specification

*Single source of truth for all AgnosticUI v2 Accordion implementation decisions*

## Component Overview

The Accordion component provides an accessible, minimalist and themeable implementation of collapsible content sections following WAI-ARIA APG patterns. It serves as the **exemplary component** demonstrating AgnosticUI v2's AI-first, upgrade-safe design principles.

## AI-First Design Goals

- **Canonical Pattern**: Immutable `_Accordion.ts` with experimental `Accordion.ts`
- **AI Extensibility**: Clear patterns for AI-driven modifications and styling
- **Progressive Enhancement**: Works without JavaScript, enhanced with JS
- **Minimalist & Themeable**: Functional CSS only, completely styleable externally

## Architecture

### Core Components
- `Accordion` - Container element for grouping multiple accordion items
- `AccordionItem` - Individual collapsible section with header and content

### File Structure
```
src/components/Accordion/
├── _Accordion.ts          # Canonical, upgrade-safe source
├── Accordion.ts           # Editable experimental version  
├── spec.md               # This specification (single source of truth)
├── react/
│   ├── ReactAccordion.tsx # React wrapper components
│   └── useAccordion.ts   # React state management hook
├── core/
│   └── accordion.ts      # Pure state management functions
└── specifications/       # External accessibility references
    ├── APG.md           # WAI-ARIA APG patterns
    └── BBC-Gel-Guide.md # BBC GEL implementation notes
```

## Functional Requirements

### Basic Behavior
- [x] Toggle content visibility on header interaction
- [x] Support multiple items in accordion group
- [x] Maintain proper open/closed state
- [x] Emit state change events for external listening

### Accessibility (WAI-ARIA APG Compliance)
- [x] Button wrapped in configurable heading element (h1-h6)
- [x] `aria-expanded` reflects open/closed state
- [x] `aria-controls` connects button to content panel
- [x] Content panel has `role="region"` and `aria-labelledby`
- [x] Unique IDs for proper ARIA relationships
- [x] Comprehensive keyboard navigation support

### Keyboard Navigation
- [x] **Enter/Space**: Toggle current accordion item
- [x] **Arrow Up/Down**: Navigate between accordion items in group
- [x] **Home/End**: Jump to first/last accordion item
- [x] **Tab/Shift+Tab**: Normal focus flow through interactive elements
- [x] Focus wrapping at group boundaries
- [x] Disabled state handling

### States and Properties
- [x] `open` - Boolean controlling content visibility
- [x] `disabled` - Boolean preventing interaction
- [x] `headingLevel` - Number (1-6) for semantic heading hierarchy
- [x] Event emission for state changes

## Minimalist & Themeable Implementation

### ✅ Required Functional CSS
```css
:host { display: block; }                    /* Basic element display */
.content { display: none; }                  /* Content hidden by default */
:host([open]) .content { display: block; }   /* Show content when open */
.heading { margin: 0; padding: 0; }         /* Heading structural reset */
:host([disabled]) button { pointer-events: none; } /* Disable interaction */
```

### ❌ Forbidden Visual CSS
- No colors, fonts, spacing, borders, shadows
- No visual feedback (cursor, opacity) except functional states
- No animations or transitions
- No layout-specific styling (padding, margin)

## Progressive Enhancement

### No-JavaScript Experience
- [ ] Content visible by default (progressive enhancement)
- [ ] Semantic HTML structure works without JS
- [ ] Graceful degradation when web components unsupported

### JavaScript Enhancement
- [x] Interactive toggling and state management
- [x] Keyboard navigation and focus management
- [x] ARIA state updates and screen reader support
- [x] Group coordination and event handling

## AI-Driven Extensibility

### Canonical Patterns (`_Accordion.ts`)
- Immutable implementation following this spec
- Upgrade-safe across AgnosticUI versions
- Reference implementation for AI adaptation

### AI Adaptation Points (`Accordion.ts`)
- Experimental variations and enhancements
- AI-driven feature additions and modifications
- Testing ground for new functionality

### Styling Tiers
- **User CSS**: Direct component styling
- **--style**: Prebuilt production skins
- **--experiments**: AI-generated experimental styling

## React Integration

### Components
- `ReactAccordion` - Wrapper for `ag-accordion`
- `AccordionItem` - Wrapper for `ag-accordion-item` 
- `ItemHeader` - Slotted header content
- `ItemContent` - Slotted body content

### Hook
- `useAccordion(ids)` - Pure state management for multiple accordions

## Testing Requirements

### Functional Tests
- [x] Property reactivity and state management
- [x] Event emission and handling
- [x] Keyboard interaction handling
- [x] Disabled state behavior

### Accessibility Tests  
- [x] ARIA attribute correctness
- [x] Semantic HTML structure validation
- [x] Screen reader compatibility (jest-axe)
- [x] Keyboard navigation completeness

### Integration Tests
- [x] React wrapper functionality
- [x] AccordionGroup coordination
- [x] Multiple accordion management

## Implementation Status

**Current**: 29 passing tests, 18 todo items
**Next**: Progressive enhancement, AI extensibility patterns, comprehensive documentation

## Future Enhancements (AI-Driven)

- [ ] Auto-collapse behavior configuration
- [ ] Nested accordion support
- [ ] Dynamic icon and indicator systems
- [ ] Animation and transition hooks
- [ ] Advanced keyboard shortcuts
- [ ] Screen reader announcement customization

---

*This specification serves as the definitive guide for all Accordion implementation decisions and AI-assisted enhancements.*