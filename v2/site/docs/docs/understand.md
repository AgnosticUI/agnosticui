# Understanding AgnosticUI

<AlphaWarning />

<script setup>
import AlphaWarning from '../components/AlphaWarning.vue'
</script>

This guide explains the core concepts, architecture, and philosophy behind AgnosticUI v2.

## The Local-First Philosophy

AgnosticUI v2 introduces a paradigm shift in how you consume UI components: instead of relying on packages in `node_modules`, components live directly in your codebase.

### Why Local-First?

**Traditional Approach Problems:**
- Components are black boxes you can't easily modify
- Customization requires complex theming APIs or wrapping
- AI tools can't see component internals
- Breaking changes on updates can break your app

**Local-First Benefits:**
- **Full Ownership** - Components are yours to modify freely
- **AI-Friendly** - Full context visible to Cursor, Claude, Windsurf, etc.
- **Zero Lock-In** - No vendor dependency, copy and customize
- **Safe Upgrades** - Reference library + your copies = safe exploration

### Two-Tier Architecture

AgnosticUI uses a unique two-tier system:

```
your-project/
├── agnosticui/              # Reference library (read-only context)
│   ├── lib/                 # Full component source
│   ├── tokens/              # Design tokens
│   └── components.json      # Component registry
│
├── src/components/ag/       # Your components (fully yours)
│   ├── Button/
│   ├── Input/
│   └── styles/
└── agnosticui.config.json   # CLI configuration
```

**Reference Library (`./agnosticui/`)**
- Complete source code for all components
- Provides context for AI tools
- Updated independently via `ag sync`
- Never modified directly

**Your Components (`./src/components/ag/`)**
- Copies of components you've added
- Fully customizable and owned by you
- Safe to modify without breaking reference
- Can be re-synced with `--force` if needed

## Architecture Overview

### Built on Web Components

AgnosticUI uses [Lit](https://lit.dev) as its foundation. Lit is a lightweight (5KB) library for building web components with a declarative template syntax and reactive properties.

**Why Web Components?**
- **Universal** - Works with any framework
- **Standards-based** - Built on web platform APIs
- **Encapsulated** - Shadow DOM prevents style conflicts
- **Future-proof** - Browser-native technology

### Framework Integration Layers

AgnosticUI provides three integration approaches:

#### 1. Core Lit Components (Universal)

The foundation layer that works everywhere:

```typescript
import "./components/ag/Button/core/Button.js";

// Use as custom element
<ag-button variant="primary">Click me</ag-button>
```

**Best for:** Lit apps, Svelte, Angular, Solid, and other frameworks

#### 2. React Wrappers (React-specific)

React-friendly wrappers using `@lit/react`:

```typescript
import { ReactButton } from "./components/ag/Button/react/ReactButton";

function App() {
  return <ReactButton variant="primary">Click me</ReactButton>;
}
```

**Benefits:**
- Natural React props API
- Automatic event mapping (e.g., `onToggle`)
- TypeScript support with proper types
- Children/slots work automatically

#### 3. Vue Wrappers (Vue-specific)

Vue 3 composition API wrappers:

```vue
<script setup>
import VueButton from "./components/ag/Button/vue/VueButton.vue";
</script>

<template>
  <VueButton variant="primary">Click me</VueButton>
</template>
```

**Benefits:**
- Native Vue syntax
- Reactive props and events
- Slot support
- Full TypeScript support

## Component Structure

Each component follows a consistent file structure:

```
Button/
├── core/
│   ├── _Button.ts          # Immutable canonical reference
│   ├── Button.ts           # Experimental/modifiable version
│   ├── Button.spec.ts      # Tests
│   └── README.md           # Documentation
├── react/
│   ├── ReactButton.tsx     # React wrapper
│   ├── index.ts            # Exports
│   └── ReactButton.spec.tsx
└── vue/
    ├── VueButton.vue       # Vue wrapper
    ├── index.ts            # Exports
    └── VueButton.spec.ts
```

### Canonical vs Experimental Pattern

AgnosticUI uses a unique pattern to support both stability and experimentation:

**`_Component.ts` (Canonical)**
- Immutable reference implementation
- Follows official WAI-ARIA patterns
- Upgrade-safe version
- Source of truth for the component

**`Component.ts` (Experimental)**
- Copy you can modify freely
- Safe to experiment with
- Your customizations live here
- Can be reset to canonical version

This pattern allows AI tools to reference the canonical version while you experiment with the modifiable version.

## Design Token System

AgnosticUI's theming is powered by CSS custom properties (CSS variables) organized into semantic tokens.

### Token Philosophy

**Semantic Naming**
Tokens describe purpose, not appearance:
- `--ag-primary` not `--ag-blue-500`
- `--ag-text-primary` not `--ag-gray-900`
- `--ag-radius-md` not `--ag-radius-6px`

**Theme Awareness**
All tokens automatically adapt to light/dark mode:

```css
/* Light mode (default) */
:root {
  --ag-background-primary: #ffffff;
  --ag-text-primary: #111827;
}

/* Dark mode */
[data-theme="dark"] {
  --ag-background-primary: #010409;
  --ag-text-primary: #F0F6FC;
}
```

### Token Categories

**Spacing** (`--ag-space-*`)
- 10 levels from 0 to 2.5rem
- Used for padding, margins, gaps

**Colors** (`--ag-*`)
- Semantic: primary, secondary, danger, warning
- Neutrals: 50-900 scale
- Surfaces: primary, secondary, tertiary
- Text: primary, secondary, muted

**Typography** (`--ag-font-size-*`, `--ag-line-height-*`)
- Font sizes from xs to 5x
- Line heights for different densities

**Borders** (`--ag-radius-*`)
- Border radius from none to full
- Consistent rounded corners

**Shadows** (`--ag-shadow-*`)
- 6 elevation levels (xs to 2xl)
- Subtle to dramatic effects

**Motion** (`--ag-motion-*`)
- Timing values for transitions
- Fast, medium, slow durations

**Z-Index** (`--ag-z-index-*`)
- Layering for dropdowns, modals, toasts
- Prevents z-index conflicts

### Customizing Tokens

Override tokens in your own CSS:

```css
:root {
  /* Brand colors */
  --ag-primary: #9333ea;
  --ag-focus: #a855f7;

  /* Spacing adjustments */
  --ag-space-4: 1.25rem;

  /* Border radius */
  --ag-radius-md: 0.5rem;
}
```

See the [theming documentation](/docs/theming) for the complete token reference.

## CLI Deep Dive

The AgnosticUI CLI manages the local-first workflow.

### How `ag init` Works

When you run `npx agnosticui-cli init`:

1. **Framework Selection** - Interactive prompt for React/Vue/Lit/Svelte
2. **Reference Library Setup** - Extracts from tarball or NPM to `./agnosticui/`
3. **Infrastructure Copy** - Copies shared code to your components path:
   - `/utils/` - Helper functions
   - `/styles/` - Design tokens
   - `/types/` - TypeScript definitions
   - `/shared/` - Shared components
4. **Config Creation** - Generates `agnosticui.config.json`
5. **TypeScript Configuration** - Updates `tsconfig.json` with:
   - `experimentalDecorators: true`
   - `useDefineForClassFields: false`
6. **Dependency Installation** - Installs framework dependencies
7. **Next Steps** - Displays setup instructions

### How `ag add` Works

When you run `npx agnosticui-cli add button input`:

1. **Validation** - Checks components exist in reference library
2. **Duplicate Detection** - Skips already-added components (unless `--force`)
3. **Component Copy** - Copies component files to your project
4. **Dependency Resolution** - Automatically detects and copies:
   - Shared dependencies (e.g., CloseButton)
   - Component dependencies (e.g., CopyButton → IconButton)
   - Recursive processing up to 10 levels deep
5. **Path Transformation** - Adjusts import paths:
   - Strips `.js` extensions
   - Fixes relative paths based on nesting
6. **Config Update** - Records added components in config
7. **Import Examples** - Shows copy-paste import statements

### Dependency Auto-Detection

The CLI intelligently scans component files for dependencies:

```typescript
// CLI detects these imports
import { CloseButton } from '../../../shared/CloseButton';
import { IconButton } from '../../IconButton/core/IconButton';

// And automatically copies:
// - shared/CloseButton
// - IconButton (+ its dependencies)
```

This ensures all required code is available in your project.

## Event System

AgnosticUI components emit custom events following web component standards.

### Event Pattern

**In Core Component:**
```typescript
export interface ButtonToggleEventDetail {
  pressed: boolean;
}

const event = new CustomEvent<ButtonToggleEventDetail>('toggle', {
  detail: { pressed: !this.pressed },
  bubbles: true,
  composed: true,
});
this.dispatchEvent(event);
```

**In React:**
```typescript
<ReactButton onToggle={(event) => console.log(event.detail.pressed)} />
```

**In Vue:**
```vue
<VueButton @toggle="(event) => handleToggle(event.detail.pressed)" />
```

**In Lit/Vanilla:**
```typescript
button.addEventListener('toggle', (event) => {
  console.log(event.detail.pressed);
});
```

### Standard vs Custom Events

**Standard Events** (click, focus, blur, etc.)
- Handled normally in all frameworks
- No special mapping needed

**Custom Events** (toggle, change, etc.)
- Carry data in `event.detail`
- React: Mapped to `on[EventName]` props by `@lit/react`
- Vue: Handled via `@event-name`
- Lit: Standard `addEventListener`

## Accessibility First

All AgnosticUI components follow the [WAI-ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/).

### Key Accessibility Features

**Semantic HTML**
- Proper element types (`<button>`, `<input>`, etc.)
- Meaningful structure and hierarchy

**ARIA Attributes**
- `role`, `aria-label`, `aria-labelledby`
- `aria-expanded`, `aria-controls`, `aria-haspopup`
- State attributes like `aria-checked`, `aria-disabled`

**Keyboard Navigation**
- Tab navigation for interactive elements
- Arrow keys for menus and lists
- Escape to close dialogs and menus
- Enter/Space for activation

**Focus Management**
- Visible focus indicators via `--ag-focus`
- Focus trap for modals and dialogs (using `focus-trap`)
- Focus restoration when dialogs close

**Screen Reader Support**
- Announcements for dynamic content
- Proper labeling and descriptions
- Live regions where appropriate

### Testing Accessibility

AgnosticUI tests use `jest-axe` to catch accessibility issues:

```typescript
import { axe } from 'jest-axe';

test('Button has no accessibility violations', async () => {
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

## TypeScript Support

AgnosticUI is written in TypeScript and provides full type definitions.

### Component Props Types

Each component exports its props type:

```typescript
import type { ButtonProps } from './components/ag/Button/core/Button';
import type { ReactButtonProps } from './components/ag/Button/react/ReactButton';
```

### Event Types

Custom events have typed detail payloads:

```typescript
import type {
  ButtonToggleEvent,
  ButtonToggleEventDetail
} from './components/ag/Button/core/Button';

const handleToggle = (event: ButtonToggleEvent) => {
  console.log(event.detail.pressed); // TypeScript knows this exists
};
```

### Required TypeScript Configuration

For Lit decorators to work:

```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "useDefineForClassFields": false
  }
}
```

**Important:** Don't add these to Vite's `esbuild.tsconfigRaw` - esbuild's decorator implementation is incomplete and breaks Lit's `@property` decorator.

## Build and Distribution

### Development Build

```bash
cd v2/lib
npm run build
```

This:
1. Syncs design tokens from `theme-registry`
2. Runs Vite build for all components
3. Copies styles to `dist/`
4. Generates TypeScript declarations

### Package Exports

AgnosticUI uses package.json exports for granular imports:

```json
{
  "exports": {
    "./button": "./dist/button/core/Button.js",
    "./button/react": "./dist/button/react/ReactButton.js",
    "./button/vue": "./dist/button/vue/VueButton.vue",
    "./styles/*": "./dist/styles/*"
  }
}
```

This enables:
```typescript
import 'agnosticui-core/button';
import { ReactButton } from 'agnosticui-core/button/react';
import 'agnosticui-core/styles/tokens.css';
```

## Best Practices

### Import from Local Components

Always import from your local components directory, not from the reference library:

```typescript
// ✅ Correct
import { ReactButton } from './components/ag/Button/react/ReactButton';

// ❌ Wrong
import { ReactButton } from './agnosticui/lib/src/components/Button/react/ReactButton';
```

### Use Design Tokens

Never hardcode colors, spacing, or other design values:

```css
/* ✅ Correct */
.my-button {
  background: var(--ag-primary);
  padding: var(--ag-space-3);
  border-radius: var(--ag-radius-md);
}

/* ❌ Wrong */
.my-button {
  background: #3b82f6;
  padding: 12px;
  border-radius: 6px;
}
```

### Customize Through Tokens First

Before modifying component code, try customizing through tokens:

```css
:root {
  --ag-primary: #your-brand-color;
  --ag-radius-md: 0.5rem;
}
```

Only modify component code when tokens aren't sufficient.

### Keep Reference Library Intact

The reference library in `./agnosticui/` should remain unmodified. It provides:
- Context for AI tools
- Reference for comparison
- Source for re-adding components

Modifications go in `./src/components/ag/`.

### Version Control

Commit your components to git:
```bash
git add src/components/ag/
git commit -m "Add Button and Input components"
```

Add reference library to `.gitignore` (optional):
```
agnosticui/
```

The CLI can recreate the reference library on other machines via `ag init`.

## Framework-Specific Tips

### React

**Use React Wrappers:**
```typescript
import { ReactButton } from './components/ag/Button/react/ReactButton';
```

**Event Handling:**
Custom events come through as props:
```typescript
<ReactButton onToggle={(e) => console.log(e.detail)} />
```

### Vue

**Import .vue Files:**
```vue
import VueButton from './components/ag/Button/vue/VueButton.vue';
```

**Configure Vite:**
Tell Vue to ignore `ag-*` custom elements:
```typescript
vue({
  template: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith('ag-'),
    },
  },
})
```

### Lit

**Direct Web Component Usage:**
```typescript
import './components/ag/Button/core/Button.js';
```

**Templates:**
```typescript
html`<ag-button variant="primary">Click</ag-button>`
```

### Svelte

**Import and Use:**
```svelte
<script>
  import './components/ag/Button/core/Button.js';
</script>

<ag-button variant="primary">Click</ag-button>
```

Svelte has excellent web component support out of the box.

## What's Next?

- [Installation Guide](/docs/setup) - Get started with AgnosticUI
- [Theming](/docs/theming) - Customize the look and feel
- [Advanced Usage](/docs/advanced-usage) - Deep customization techniques
- [Component Docs](/components/) - Explore all available components
