# Accordion Component - AgnosticUI v2

The Accordion component is an exemplary implementation of AgnosticUI v2's **almost headless** philosophy, demonstrating AI-first development patterns, progressive enhancement, and upgrade-safe architecture.

## 📁 Directory Structure (Updated)

```
📁 Accordion/
├── 🔒 core/                    ← IMMUTABLE CANONICAL IMPLEMENTATION
│   ├── _Accordion.ts          ← Canonical component (DO NOT MODIFY)
│   ├── _Accordion.spec.ts     ← Canonical tests (DO NOT MODIFY)
│   └── README.md              ← Core documentation & rules
├── 🔧 helpers/                 ← UTILITY FUNCTIONS (safe to modify)
│   ├── accordion-state.ts     ← State management utilities
│   └── README.md              ← Helper functions documentation
├── ✏️  Accordion.ts            ← MUTABLE OVERRIDE VERSION (AI-extensible)
├── 🎨 extensions/              ← AI-SAFE EXTENSIONS
│   ├── AnimatedAccordion.ts   ← Animation enhancement example
│   └── README.md              ← Extension development guide
├── 💅 styles/                  ← PRODUCTION STYLING TIERS
│   ├── default.css            ← Default production styles
│   └── README.md              ← Styling system guide
├── 🧪 experiments/             ← EXPERIMENTAL AI STYLING
│   ├── minimal-experiment.css ← AI-generated style experiments
│   └── README.md              ← Experiments system explanation
├── ⚛️  react/                  ← REACT INTEGRATION
│   ├── ReactAccordion.tsx     ← React wrapper component
│   └── useAccordion.ts        ← React hook for state management
└── 📋 specifications/          ← DESIGN SPECIFICATIONS
    ├── APG.md                 ← ARIA Authoring Practices Guide compliance
    ├── BBC-Gel-Guide.md       ← BBC GEL accessibility standards
    └── SpecSheet.md           ← Complete technical specification
```

## 🎯 Architecture Philosophy

### 🔒 **Immutable Core** (`/core/`)
- **Never modify** - guaranteed upgrade safety
- **Canonical truth** - single source of component behavior  
- **AI-protected** - assistants should never touch these files

### 🔧 **Safe Utilities** (`/helpers/`)
- **Modify freely** - utility functions and interfaces
- **Framework agnostic** - works across all integrations
- **Pure functions** - no side effects, easy to test

### ✏️ **Extensible Layer** (`Accordion.ts`)
- **AI-modifiable** - safe for assistant modifications
- **Extends core** - inherits all canonical functionality
- **Additive only** - never removes existing features

## Quick Start

```html
<!-- Basic Usage -->
<ag-accordion>
  <ag-accordion-item>
    <span slot="header">Section 1</span>
    <div slot="content">Content for section 1</div>
  </ag-accordion-item>
  
  <ag-accordion-item open>
    <span slot="header">Section 2 (Open)</span>
    <div slot="content">Content for section 2</div>
  </ag-accordion-item>
</ag-accordion>
```

```typescript
// JavaScript Usage
import { Accordion, AccordionItem } from './components/Accordion/Accordion';

const accordion = document.querySelector('ag-accordion-item');
accordion.open = true;
accordion.addEventListener('toggle', (e) => {
  console.log('Accordion toggled:', e.detail.open);
});
```

## Architecture Overview

AgnosticUI v2 Accordion follows a **canonical + experimental** pattern:

```
src/components/Accordion/
├── _Accordion.ts           # 🔒 Canonical (immutable, upgrade-safe)
├── Accordion.ts            # 🔧 Experimental (AI-modifiable)
├── spec.md                 # 📋 Single source of truth
├── styles/                 # 🎨 Production-ready styling
│   └── default.css
├── experiments/            # ✨ AI-generated experimental styling
│   └── minimal-experiment.css
└── extensions/             # 🚀 AI-safe behavioral extensions
    └── AnimatedAccordion.ts
```

## Core Features

### ✅ Complete Accessibility (WAI-ARIA APG)
- **Keyboard Navigation**: Arrow keys, Home/End, Enter/Space
- **Screen Reader Support**: Proper ARIA roles, states, and properties
- **Focus Management**: Visible focus indicators and logical flow
- **Semantic HTML**: Configurable heading levels (h1-h6)

### ✅ Progressive Enhancement
- **No-JS Fallback**: Content visible without JavaScript
- **FOUC Prevention**: Seamless enhancement when JS loads
- **Graceful Degradation**: Works in all environments

### ✅ Almost Headless Design
- **Functional CSS Only**: Display states, pointer-events, visibility
- **No Visual Styling**: Colors, fonts, spacing are externally controlled
- **Maximum Flexibility**: Works with any design system

### ✅ AI-First Architecture
- **Canonical Safety**: Immutable core that never breaks
- **AI Extensibility**: Safe patterns for AI modification
- **Upgrade Compatibility**: User customizations survive updates

## API Reference

### AccordionItem Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `open` | `boolean` | `false` | Controls content visibility |
| `disabled` | `boolean` | `false` | Disables interaction |
| `headingLevel` | `number` | `3` | Semantic heading level (1-6) |

### AccordionItem Methods

| Method | Returns | Description |
|--------|---------|-------------|
| `toggle()` | `void` | Toggles open/closed state |
| `focus()` | `void` | Focuses the accordion button |

### AccordionItem Events

| Event | Detail | Description |
|-------|--------|-------------|
| `toggle` | `{open: boolean}` | Fired when accordion toggles |
| `accordion-keydown` | `{key: string, accordionItem: AccordionItem}` | Fired for navigation keys |

## Styling

### Option 1: Direct CSS (Full Control)

```css
/* Target the component directly */
ag-accordion-item {
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
}

ag-accordion-item .header button {
  padding: 1rem;
  font-weight: 500;
}

ag-accordion-item .content {
  padding: 0 1rem 1rem 1rem;
  color: #4a5568;
}
```

### Option 2: Production Style Tier

```html
<!-- Include production-ready styling -->
<link rel="stylesheet" href="./styles/default.css">

<ag-accordion>
  <ag-accordion-item>
    <span slot="header">Professional Look</span>
    <div slot="content">Styled with production defaults</div>
  </ag-accordion-item>
</ag-accordion>
```

### Option 3: Experimental Styling

```html
<!-- Include AI-generated experimental styling -->
<link rel="stylesheet" href="./experiments/minimal-experiment.css">

<ag-accordion>
  <ag-accordion-item>
    <span slot="header">Experimental Styling</span>
    <div slot="content">AI-generated visual treatment</div>
  </ag-accordion-item>
</ag-accordion>
```

## Advanced Usage

### Batch Operations

```typescript
import { AccordionUtils } from './components/Accordion/Accordion';

const container = document.querySelector('.accordion-container');

// Expand all accordions
AccordionUtils.expandAll(container);

// Collapse all accordions
AccordionUtils.collapseAll(container);

// Get current states
const states = AccordionUtils.getStates(container);
console.log(states); // [{element, open, disabled}, ...]
```

### AI Extensions

```typescript
// Use AI-generated extensions
import { AnimatedAccordionItem } from './extensions/AnimatedAccordion';

// Register animated version
customElements.define('ag-animated-accordion-item', AnimatedAccordionItem);
```

```html
<!-- Use extended component -->
<ag-animated-accordion-item 
  animation-type="slide" 
  animation-duration="400">
  <span slot="header">Animated Accordion</span>
  <div slot="content">Smooth animations</div>
</ag-animated-accordion-item>
```

### React Integration

```tsx
import { ReactAccordion, AccordionItem, ItemHeader, ItemContent } from './react/ReactAccordion';

function App() {
  return (
    <ReactAccordion>
      <AccordionItem>
        <ItemHeader>React Component</ItemHeader>
        <ItemContent>
          <p>Seamlessly integrated with React</p>
        </ItemContent>
      </AccordionItem>
    </ReactAccordion>
  );
}
```

## Development Examples

### Custom Styling Integration

```css
/* Design System Integration */
ag-accordion {
  --accordion-spacing: var(--ds-space-4);
  --accordion-radius: var(--ds-radius-md);
  --accordion-border: var(--ds-color-border);
}

ag-accordion-item {
  margin-bottom: var(--accordion-spacing);
  border: 1px solid var(--accordion-border);
  border-radius: var(--accordion-radius);
}
```

### Form Integration

```html
<form>
  <ag-accordion>
    <ag-accordion-item>
      <label slot="header">Personal Information</label>
      <div slot="content">
        <input type="text" name="name" placeholder="Full Name" required>
        <input type="email" name="email" placeholder="Email" required>
      </div>
    </ag-accordion-item>
    
    <ag-accordion-item>
      <label slot="header">Address Details</label>
      <div slot="content">
        <textarea name="address" placeholder="Address" required></textarea>
      </div>
    </ag-accordion-item>
  </ag-accordion>
  
  <button type="submit">Submit</button>
</form>
```

### Dynamic Content

```typescript
function createDynamicAccordion(data: Array<{title: string, content: string}>) {
  const accordion = document.createElement('ag-accordion');
  
  data.forEach(item => {
    const accordionItem = document.createElement('ag-accordion-item');
    
    const header = document.createElement('span');
    header.setAttribute('slot', 'header');
    header.textContent = item.title;
    
    const content = document.createElement('div');
    content.setAttribute('slot', 'content');
    content.innerHTML = item.content;
    
    accordionItem.appendChild(header);
    accordionItem.appendChild(content);
    accordion.appendChild(accordionItem);
  });
  
  return accordion;
}

// Usage
const faqData = [
  { title: 'What is AgnosticUI?', content: 'An almost headless component library...' },
  { title: 'How do I customize it?', content: 'You can style it with CSS...' }
];

const faqAccordion = createDynamicAccordion(faqData);
document.body.appendChild(faqAccordion);
```

## Testing

The accordion includes comprehensive test coverage:

```bash
# Run tests
npm test src/components/Accordion/_Accordion.spec.ts

# Results: 29 tests passing, 15 todo features
```

Test coverage includes:
- ✅ WAI-ARIA compliance
- ✅ Keyboard navigation
- ✅ Progressive enhancement
- ✅ Event handling
- ✅ Accessibility audit (axe-core)

## Browser Support

- **Modern**: Chrome 61+, Firefox 63+, Safari 13+, Edge 79+
- **Legacy**: Graceful degradation with progressive enhancement
- **Screen Readers**: JAWS, NVDA, VoiceOver, TalkBack

## Performance

- **Bundle Size**: ~2KB gzipped (functional component only)
- **Runtime**: Zero dependencies except Lit
- **Memory**: Minimal DOM footprint
- **Animation**: GPU-accelerated with `will-change`

## Migration Guide

### From Other Libraries

```typescript
// From Bootstrap Collapse
// Before:
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" data-bs-toggle="collapse">
        Section 1
      </button>
    </h2>
  </div>
</div>

// After: AgnosticUI v2
<ag-accordion>
  <ag-accordion-item>
    <span slot="header">Section 1</span>
    <div slot="content">Content here</div>
  </ag-accordion-item>
</ag-accordion>
```

### Version Compatibility

| Version | Migration Required | Notes |
|---------|-------------------|-------|
| 2.0.x → 2.1.x | No | Automatic |
| 1.x → 2.x | Yes | See upgrade guide |

## Contributing

This component demonstrates AgnosticUI v2's **build in public** philosophy:

1. **Issues**: Report bugs or request features
2. **AI Extensions**: Create and share AI-generated enhancements
3. **Experiments**: Contribute experimental styling variations
4. **Documentation**: Improve examples and guides

## License

MIT License - Build beautiful, accessible interfaces with confidence.