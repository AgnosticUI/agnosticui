# FX_PLAN.md - Component FX Extension Specification

**Version:** 1.0.0  
**Last Updated:** 2024-12-02  
**Status:** Canonical

## Overview

This document specifies the standardized approach for extending AgnosticUI core components with CSS animation effects through `*Fx` variants. The FX system provides optional, accessibility-aware animations that enhance user experience without compromising functionality or performance.

Components to implement: BadgeFx, TagFx, AvatarFx, TooltipFx.

---

## Core Principles

### 1. **Non-Breaking Extension**
- Fx components MUST extend their core component class
- All core functionality MUST be preserved
- Core component behavior MUST remain unchanged
- Breaking changes to core components MUST NOT occur

### 2. **CSS-Only Effects**
- Effects MUST use CSS animations and transitions only
- No JavaScript-based animation libraries
- Keyframes MUST be imported from `motionStyles`
- Effects MUST respect `prefers-reduced-motion`

### 3. **Opt-In Architecture**
- Effects are explicitly enabled via `fx` prop
- Components work identically to core without `fx` prop
- No performance impact when effects are unused
- Users can disable effects via `fx-disabled` prop

### 4. **Accessibility First**
- All effects MUST respect `prefers-reduced-motion: reduce`
- Effects MUST NOT interfere with keyboard navigation
- Effects MUST NOT obscure focus indicators
- ARIA attributes from core MUST be preserved

---

## File Structure Convention

For any component `ComponentName`, create:

```
v2/lib/src/components/ComponentName/
├── core/
│   ├── _ComponentName.ts          # Canonical core (immutable)
│   ├── ComponentName.ts            # Web component registration
v2/lib/src/components/ComponentNameFx/
├── core/
│   │   ├── _ComponentNameFx.ts    # Canonical Fx extension
│   │   └── ComponentNameFx.ts     # Fx registration
│   ├── react/
│   │   └── ReactComponentNameFx.tsx
│   └── vue/
│       ├── VueComponentNameFx.vue
│       └── index.ts

playgrounds/react/src/stories/
└── ComponentNameFx.stories.tsx     # React Storybook stories

playgrounds/vue/src/stories/
└── ComponentNameFx.stories.ts      # Vue Storybook stories

playgrounds/lit/src/stories/
└── ComponentNameFx.stories.ts      # Lit Storybook stories

v2/site/docs/components/
├── componentname-fx.md             # VitePress API documentation
└── examples/
    └── ComponentNameFxExamples.vue # VitePress examples component

v2/theme-registry/tokens/
└── *.json                          # Design token definitions
```

---

## Implementation Pattern

### Step 1: Core Component Analysis

Before creating an Fx variant, identify:

1. **Hover state overrides** - Which CSS rules compete with FX effects?
2. **Interactive elements** - What triggers animations (hover, active, focus)?
3. **Visual variants** - Which variants need effect customization?
4. **State management** - Does the component have internal state?

### Step 2: Create `_ComponentNameFx.ts`

```typescript
import { css } from 'lit';
import { property } from 'lit/decorators.js';
import { ComponentName, type ComponentNameProps } from '../../ComponentName/core/_ComponentName.js';
import { motionStyles } from '../../../styles/motion.styles.js';
import type { FxProps } from '../../../types/fx.js';

// Combined props interface
export interface ComponentNameFxProps extends ComponentNameProps, FxProps {}

/**
 * ComponentNameFx - ComponentName with CSS animation effects
 *
 * Extends ComponentName to add optional CSS-only animation effects.
 * Inherits all ComponentName functionality and styling.
 *
 * Features:
 * - CSS-only FX effects
 * - Full control over hover states
 * - Automatic reduced-motion support
 * - Can override ComponentName's default hover behaviors
 */
export class ComponentNameFx extends ComponentName implements FxProps {
  static styles = [
    motionStyles,
    ComponentName.styles,
    css`
      /* ========================================
         OVERRIDE PARENT HOVER STATES
         Neutralize competing hover effects from core
         ======================================== */

      /* Example: Override variant hover backgrounds */
      :host([variant="primary"]) .component-class:hover {
        background: var(--ag-primary-dark);
      }

      /* ========================================
         FX EFFECT CLASSES
         Applied to target element (usually root)
         ======================================== */

      /* Hover-triggered effects */
      .component-class.ag-fx-bounce:hover {
        animation: ag-fx-bounce var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      .component-class.ag-fx-pulse:hover {
        animation: ag-fx-pulse var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      /* Active/press effects */
      .component-class.ag-fx-press-pop:active {
        animation: ag-fx-press-pop var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      /* Entrance effects */
      .component-class.ag-fx-slide-in {
        animation: ag-fx-slide-in var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      /* Disabled state */
      .component-class.ag-fx-disabled {
        animation: none !important;
      }

      /* Reduced motion support */
      @media (prefers-reduced-motion: reduce) {
        .component-class.ag-fx-bounce,
        .component-class.ag-fx-pulse,
        .component-class.ag-fx-jelly,
        .component-class.ag-fx-press-pop,
        .component-class.ag-fx-slide-in {
          animation-duration: 0.01ms !important;
          transition-duration: 0.01ms !important;
        }
      }
    `
  ];

  // FX props
  @property({ type: String })
  fx?: string;

  @property({ type: String, attribute: 'fx-speed' })
  fxSpeed!: 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  @property({ type: String, attribute: 'fx-ease' })
  fxEase!: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'bounce' | 'spring-sm' | 'spring-md' | 'spring-lg';

  @property({ type: Boolean, attribute: 'fx-disabled' })
  fxDisabled!: boolean;

  constructor() {
    super();
    this.fxSpeed = 'md';
    this.fxEase = 'ease';
    this.fxDisabled = false;
  }

  firstUpdated() {
    this._applyFxClasses();
    this._applyFxCustomProperties();
  }

  updated(changedProperties: Map<PropertyKey, unknown>) {
    super.updated(changedProperties);

    if (changedProperties.has('fx') || changedProperties.has('fxDisabled')) {
      this._applyFxClasses();
    }

    if (changedProperties.has('fxSpeed') || changedProperties.has('fxEase')) {
      this._applyFxCustomProperties();
    }
  }

  private _applyFxClasses() {
    const targetEl = this.shadowRoot?.querySelector('.component-class');
    if (targetEl) {
      // Remove existing fx classes
      targetEl.classList.forEach((className: string) => {
        if (className.startsWith('ag-fx-')) {
          targetEl.classList.remove(className);
        }
      });

      // Add new fx class
      if (this.fx) {
        targetEl.classList.add(`ag-fx-${this.fx}`);
      }

      if (this.fxDisabled) {
        targetEl.classList.add('ag-fx-disabled');
      }
    }
  }

  private _applyFxCustomProperties() {
    const targetEl = this.shadowRoot?.querySelector('.component-class');
    if (targetEl instanceof HTMLElement) {
      targetEl.style.setProperty('--ag-fx-duration', `var(--ag-fx-duration-${this.fxSpeed})`);
      targetEl.style.setProperty('--ag-fx-ease', `var(--ag-fx-ease-${this.fxEase})`);
    }
  }
}
```

**Important Notes:**
- Import path uses `../../ComponentName/core/_ComponentName.js` to reach the core component
- The Fx component lives in `ComponentNameFx/core/` directory
- Replace `.component-class` with the actual class/element selector from the core component's render output

### Step 3: Register Web Component

Create `ComponentNameFx.ts`:

```typescript
import { ComponentNameFx } from './_ComponentNameFx';

if (!customElements.get('ag-componentname-fx')) {
  customElements.define('ag-componentname-fx', ComponentNameFx);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-componentname-fx': ComponentNameFx;
  }
}

export * from './_ComponentNameFx.js';
```

### Step 4: React Wrapper

Create `ReactComponentNameFx.tsx`:

```typescript
import * as React from "react";
import { createComponent, type EventName } from "@lit/react";
import {
  ComponentNameFx,
  type ComponentNameFxProps,
} from "../core/ComponentNameFx";

export interface ReactComponentNameFxProps extends ComponentNameFxProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

export const ReactComponentNameFx = createComponent({
  tagName: "ag-componentname-fx",
  elementClass: ComponentNameFx,
  react: React,
  events: {
    // Add custom events here if needed
  },
});

export type { ComponentNameFxProps } from "../core/ComponentNameFx";
export type { FxProps } from "../../../types/fx";
```

### Step 5: Vue Wrapper

Create `VueComponentNameFx.vue`:

```vue
<template>
  <ag-componentname-fx
    ref="componentFxRef"
    :fx="fx"
    :fx-speed="fxSpeed"
    :fx-ease="fxEase"
    :fx-disabled="fxDisabled"
    v-bind="$attrs"
  >
    <slot />
  </ag-componentname-fx>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { ComponentNameFxProps } from "../core/_ComponentNameFx";
import "../core/ComponentNameFx";

export interface VueComponentNameFxProps extends ComponentNameFxProps {}

const props = withDefaults(defineProps<VueComponentNameFxProps>(), {
  fxSpeed: "md",
  fxEase: "ease",
  fxDisabled: false,
});

const componentFxRef = ref<HTMLElement>();
</script>
```

---

## FX Wrapper Architecture

### Props Merging Pattern
Fx components accept combined props (`ComponentProps & FxProps`) and forward everything to the core component:

```typescript
export interface ComponentNameFxProps extends ComponentNameProps, FxProps {}
```

**Key Principles:**
- Core component props are passed through unchanged
- FX props (`fx`, `fxSpeed`, `fxEase`, `fxDisabled`) are handled by Fx layer
- No prop collision or shadowing occurs
- Type safety maintained across all props

### Event Re-dispatching
All native and custom events must be re-dispatched from the Fx component:

**Native Events:** `click`, `focus`, `blur`  
**Custom Events:** Component-specific (e.g., `toggle` for ButtonFx)

**Pattern:**
```typescript
private _handleClick(event: MouseEvent) {
  if (this.onClick) {
    this.onClick(event);
  }
  // Additional FX-specific logic if needed
}
```

Events bubble through Shadow DOM via `composed: true`.

### Reduced Motion Compliance
**Non-Overridable:** All FX effects MUST respect `prefers-reduced-motion: reduce`.

**Implementation:**
```css
@media (prefers-reduced-motion: reduce) {
  .component-class.ag-fx-bounce,
  .component-class.ag-fx-pulse,
  /* ...all effects... */ {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

This is a **hard requirement** that cannot be overridden by users or props.

---

## Standard FX Effects Library

All Fx components should support these 12 CSS-only effects:

| FX Name         | Trigger | Description                        | Performance |
|-----------------|---------|-------------------------------------|-------------|
| `bounce`        | hover   | Vertical pop, light spring         | Light       |
| `pulse`         | hover   | Scale grow/shrink animation        | Light       |
| `jelly`         | hover   | Squash/stretch elastic wobble      | Light       |
| `tilt-press`    | active  | Subtle 3D tilt on press            | Light       |
| `shimmer`       | hover   | Light sweep across surface         | Light       |
| `glow`          | hover   | Box-shadow pulse effect            | Light       |
| `press-pop`     | active  | Quick press down/up                | Light       |
| `slide-in`      | mount   | Entrance animation from below      | Light       |
| `flip`          | hover   | Y-axis rotation (3D flip)          | Light       |
| `icon-reveal`   | hover   | Clip-path reveal of icon           | Light       |
| `ripple`        | hover   | Center-origin radial expansion     | Medium      |
| `highlight-sweep` | hover | Horizontal highlight sweep         | Light       |

> **Note:** All effects are CSS-only, Shadow DOM-compatible, and automatically respect `prefers-reduced-motion: reduce`.

---

## FX Props Interface

All Fx components MUST implement:

```typescript
export interface FxProps {
  /** Effect name from standard library */
  fx?: string;
  
  /** Animation speed preset */
  fxSpeed?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  
  /** Easing function preset */
  fxEase?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'bounce' | 'spring-sm' | 'spring-md' | 'spring-lg';
  
  /** Disable all effects */
  fxDisabled?: boolean;
}
```

---

## CSS Custom Properties

Fx components use these CSS custom properties:

```css
/* Speed presets */
--ag-fx-duration-xs: 100ms;
--ag-fx-duration-sm: 150ms;
--ag-fx-duration-md: 200ms;
--ag-fx-duration-lg: 300ms;
--ag-fx-duration-xl: 500ms;

/* Easing presets */
--ag-fx-ease-ease: ease;
--ag-fx-ease-ease-in: ease-in;
--ag-fx-ease-ease-out: ease-out;
--ag-fx-ease-ease-in-out: ease-in-out;
--ag-fx-ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
--ag-fx-ease-spring-sm: cubic-bezier(0.5, 1.5, 0.5, 1);
--ag-fx-ease-spring-md: cubic-bezier(0.5, 2, 0.5, 1);
--ag-fx-ease-spring-lg: cubic-bezier(0.5, 2.5, 0.5, 1);

/* Applied dynamically */
--ag-fx-duration: var(--ag-fx-duration-md);
--ag-fx-ease: var(--ag-fx-ease-ease);
```

---

## Component-Specific Considerations

### For Interactive Components (Button, Badge, Tag)
- Apply effects to root interactive element
- Consider `:hover`, `:active`, and `:focus` states
- Override parent hover backgrounds that compete with effects

### For Display Components (Avatar, Tooltip)
- Apply effects to visual container
- Consider entrance animations
- May not need press effects

### For Container Components (Card, Modal)
- Apply effects to wrapper element
- Focus on entrance animations
- Consider child element interactions

---

## Testing Checklist

Before marking an Fx component complete:

- [ ] All core component functionality preserved
- [ ] Standard FX effects work correctly
- [ ] `prefers-reduced-motion` respected
- [ ] `fx-disabled` properly disables effects
- [ ] No JavaScript errors in console
- [ ] Hover states don't conflict with effects
- [ ] Focus indicators remain visible
- [ ] Works in React wrapper
- [ ] Works in Vue wrapper
- [ ] TypeScript types exported correctly
- [ ] Documentation includes usage examples

---

## Storybook Stories

### React Storybook Stories

**File Location:** `playgrounds/react/src/stories/ComponentNameFx.stories.tsx`

**Deliverables:**
1. Default story with controls for all props
2. Individual story per effect (12 stories total)
3. Combination story showcasing multiple effects together
4. CSS Parts customization story demonstrating Shadow DOM styling

**Story Structure:**
```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { ReactComponentNameFx } from '@agnosticui/react';

const meta = {
  title: 'Components/ComponentNameFx',
  component: ReactComponentNameFx,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    fx: {
      control: 'select',
      options: ['bounce', 'pulse', 'jelly', /* ...all 12 effects... */],
    },
    fxSpeed: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    // ...other controls
  },
} satisfies Meta<typeof ReactComponentNameFx>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story with controls
export const Default: Story = {
  args: {
    children: 'Button Text',
    fx: 'bounce',
    fxSpeed: 'md',
  },
};

// Individual effect stories
export const Bounce: Story = {
  args: {
    children: 'Bounce Effect',
    fx: 'bounce',
  },
};

// ...repeat for all 12 effects

// Combination story
export const AllEffects: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <ReactComponentNameFx fx="bounce">Bounce</ReactComponentNameFx>
      <ReactComponentNameFx fx="pulse">Pulse</ReactComponentNameFx>
      {/* ...all effects... */}
    </div>
  ),
};

// CSS Parts customization
export const CustomStyling: Story = {
  render: () => (
    <>
      <style>{`
        ag-componentname-fx::part(ag-componentname) {
          /* Custom styles targeting Shadow DOM parts */
        }
      `}</style>
      <ReactComponentNameFx fx="glow">Custom Styled</ReactComponentNameFx>
    </>
  ),
};
```

### Vue Storybook Stories

**File Location:** `playgrounds/vue/src/stories/ComponentNameFx.stories.ts`

**Deliverables:** Same structure as React stories

**Story Structure:**
```typescript
import type { Meta, StoryObj } from '@storybook/vue3';
import { VueComponentNameFx } from '@agnosticui/vue';

const meta = {
  title: 'Components/ComponentNameFx',
  component: VueComponentNameFx,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    fx: {
      control: 'select',
      options: ['bounce', 'pulse', 'jelly', /* ...all 12 effects... */],
    },
    // ...other controls
  },
} satisfies Meta<typeof VueComponentNameFx>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fx: 'bounce',
    fxSpeed: 'md',
  },
  render: (args) => ({
    components: { VueComponentNameFx },
    setup() {
      return { args };
    },
    template: '<VueComponentNameFx v-bind="args">Button Text</VueComponentNameFx>',
  }),
};

// Individual effects and combinations follow React pattern

// CSS Parts customization using v-html pattern
export const CustomStyling: Story = {
  render: () => ({
    components: { VueComponentNameFx },
    template: `
      <div v-html="styleTag"></div>
      <VueComponentNameFx fx="glow">Custom Styled</VueComponentNameFx>
    `,
    data() {
      return {
        styleTag: \`<style>
          ag-componentname-fx::part(ag-componentname) {
            /* Custom styles */
          }
        </style>\`,
      };
    },
  }),
};
```

### Lit Storybook Stories

**File Location:** `playgrounds/lit/src/stories/ComponentNameFx.stories.ts`

**Deliverables:** Same structure as React/Vue stories

**Story Structure:**
```typescript
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@agnosticui/core/components/ComponentNameFx';

const meta = {
  title: 'Components/ComponentNameFx',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    fx: {
      control: 'select',
      options: ['bounce', 'pulse', 'jelly', /* ...all 12 effects... */],
    },
    // ...other controls
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    fx: 'bounce',
    fxSpeed: 'md',
  },
  render: (args) => html`
    <ag-componentname-fx
      fx=${args.fx}
      fx-speed=${args.fxSpeed}
    >
      Button Text
    </ag-componentname-fx>
  `,
};

// Individual effects
export const Bounce: Story = {
  render: () => html`
    <ag-componentname-fx fx="bounce">Bounce Effect</ag-componentname-fx>
  `,
};

// ...repeat for all 12 effects

// All effects combination
export const AllEffects: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <ag-componentname-fx fx="bounce">Bounce</ag-componentname-fx>
      <ag-componentname-fx fx="pulse">Pulse</ag-componentname-fx>
      <!-- ...all effects... -->
    </div>
  `,
};

// CSS Parts customization
export const CustomStyling: Story = {
  render: () => html`
    <style>
      ag-componentname-fx::part(ag-componentname) {
        /* Custom styles */
      }
    </style>
    <ag-componentname-fx fx="glow">Custom Styled</ag-componentname-fx>
  `,
};
```

---

## VitePress Documentation

### API Documentation

**File Location:** `v2/site/docs/components/componentname-fx.md`

**Structure:**
```markdown
# ComponentNameFx

ComponentNameFx extends the core ComponentName component with 12 CSS-only animation effects.

## Features

- 🎨 12 pre-built animation effects
- ⚡ CSS-only animations (no JavaScript)
- ♿ Automatic `prefers-reduced-motion` support
- 🎯 Shadow DOM compatible
- 🔧 Customizable timing and easing
- 📦 Available for Lit, React, and Vue

## Installation

```bash
npm install @agnosticui/core
# or for React
npm install @agnosticui/react
# or for Vue
npm install @agnosticui/vue
```

## Usage

### Lit (Web Components)

```html
<ag-componentname-fx fx="bounce" fx-speed="md">
  Button Text
</ag-componentname-fx>
```

### React

```tsx
import { ReactComponentNameFx } from '@agnosticui/react';

function App() {
  return (
    <ReactComponentNameFx fx="bounce" fxSpeed="md">
      Button Text
    </ReactComponentNameFx>
  );
}
```

### Vue

```vue
<template>
  <VueComponentNameFx fx="bounce" fx-speed="md">
    Button Text
  </VueComponentNameFx>
</template>

<script setup>
import { VueComponentNameFx } from '@agnosticui/vue';
</script>
```

## Props

### FxProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `fx` | `string` | `undefined` | Effect name from 12 available effects |
| `fxSpeed` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Animation duration preset |
| `fxEase` | `'ease' \| 'ease-in' \| 'ease-out' \| 'ease-in-out' \| 'bounce' \| 'spring-sm' \| 'spring-md' \| 'spring-lg'` | `'ease'` | Easing function preset |
| `fxDisabled` | `boolean` | `false` | Disable all effects |

### Inherited ComponentNameProps

[Include all props from core component - reference parent component docs]

## Available Effects

[Table of 12 effects with descriptions - copy from FX Effects Library section]

## Examples

::: details View Interactive Examples
<ComponentNameFxExamples />
:::

## Accessibility

- All effects automatically respect `prefers-reduced-motion: reduce`
- Focus indicators remain visible during animations
- Screen readers ignore visual effects
- Keyboard navigation unaffected by animations

## CSS Parts

ComponentNameFx exposes the same CSS parts as the core component:

```css
ag-componentname-fx::part(ag-componentname) {
  /* Style the internal component element */
}
```

## Performance

All effects are CSS-only and use GPU-accelerated properties (`transform`, `opacity`) for optimal performance. Most effects are rated "Light" performance impact.

## Browser Support

ComponentNameFx works in all modern browsers that support:
- Web Components (Custom Elements v1)
- Shadow DOM v1
- CSS Animations
- CSS Custom Properties

## Related Components

- [ComponentName](/components/componentname) - Core component without effects
- [Other related components]
```

### Examples Component

**File Location:** `v2/site/docs/examples/ComponentNameFxExamples.vue`

**Structure:**
```vue
<template>
  <div class="fx-examples">
    <h3>All Effects</h3>
    <div class="fx-grid">
      <div v-for="effect in effects" :key="effect" class="fx-example">
        <ag-componentname-fx :fx="effect">
          {{ effect }}
        </ag-componentname-fx>
        <span class="fx-label">{{ effect }}</span>
      </div>
    </div>

    <h3>Speed Variations</h3>
    <div class="fx-grid">
      <ag-componentname-fx fx="pulse" fx-speed="xs">XS Speed</ag-componentname-fx>
      <ag-componentname-fx fx="pulse" fx-speed="sm">SM Speed</ag-componentname-fx>
      <ag-componentname-fx fx="pulse" fx-speed="md">MD Speed</ag-componentname-fx>
      <ag-componentname-fx fx="pulse" fx-speed="lg">LG Speed</ag-componentname-fx>
      <ag-componentname-fx fx="pulse" fx-speed="xl">XL Speed</ag-componentname-fx>
    </div>

    <h3>Easing Functions</h3>
    <div class="fx-grid">
      <ag-componentname-fx fx="bounce" fx-ease="ease">Ease</ag-componentname-fx>
      <ag-componentname-fx fx="bounce" fx-ease="ease-in">Ease In</ag-componentname-fx>
      <ag-componentname-fx fx="bounce" fx-ease="ease-out">Ease Out</ag-componentname-fx>
      <ag-componentname-fx fx="bounce" fx-ease="spring-lg">Spring</ag-componentname-fx>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import '@agnosticui/core/components/ComponentNameFx';

const effects = ref([
  'bounce',
  'pulse',
  'jelly',
  'tilt-press',
  'shimmer',
  'glow',
  'press-pop',
  'slide-in',
  'flip',
  'icon-reveal',
  'ripple',
  'highlight-sweep',
]);
</script>

<style scoped>
.fx-examples {
  padding: 2rem;
}

.fx-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.fx-example {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.fx-label {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
}
</style>
```

### VitePress Sidebar Configuration

Add to `v2/site/.vitepress/config.ts`:

```typescript
{
  text: 'Components',
  items: [
    // ...existing items
    { text: 'ComponentNameFx', link: '/components/componentname-fx' },
  ]
}
```

---

## LLM Generation Prompts

### Initial Generation Prompt

```
Create a complete Fx variant for the [ComponentName] component following FX_PLAN.md.

Context files provided:
1. _[ComponentName].ts - Core component implementation
2. FX_PLAN.md - Complete specification
3. DEVELOPMENT_GUIDE.md - Token system reference (if needed)

Generate all required files:

**Core Implementation:**
1. v2/lib/src/components/[ComponentName]/core/fx/_[ComponentName]Fx.ts
2. v2/lib/src/components/[ComponentName]/core/fx/[ComponentName]Fx.ts

**Framework Wrappers:**
3. v2/lib/src/components/[ComponentName]/react/React[ComponentName]Fx.tsx
4. v2/lib/src/components/[ComponentName]/vue/Vue[ComponentName]Fx.vue
5. v2/lib/src/components/[ComponentName]/vue/index.ts

**Storybook Stories:**
6. playgrounds/react/src/stories/[ComponentName]Fx.stories.tsx
7. playgrounds/vue/src/stories/[ComponentName]Fx.stories.ts
8. playgrounds/lit/src/stories/[ComponentName]Fx.stories.ts

**Documentation:**
9. v2/site/docs/components/[componentname]-fx.md
10. v2/site/docs/examples/[ComponentName]FxExamples.vue

Requirements:
- Extend core component class (never modify core)
- Import motionStyles for keyframe definitions
- Implement all 12 standard effects (bounce, pulse, jelly, tilt-press, shimmer, glow, press-pop, slide-in, flip, icon-reveal, ripple, highlight-sweep)
- Override parent hover states that compete with FX
- Add _applyFxClasses() and _applyFxCustomProperties() methods
- Include @media (prefers-reduced-motion: reduce) support
- Re-dispatch all events (click, focus, blur, + custom events)
- Create TypeScript interfaces for all props
- Register web component as 'ag-[componentname]-fx'
- Create comprehensive Storybook stories (default + 12 individual + combination + CSS Parts)
- Write complete VitePress documentation with examples
- Ensure all props from core component are documented

File locations:
- Token System: v2/theme-registry/tokens/
- Component Core: v2/lib/src/components/[ComponentName]/core/
- React Wrapper: v2/lib/src/components/[ComponentName]/react/
- Vue Wrapper: v2/lib/src/components/[ComponentName]/vue/
- React Stories: playgrounds/react/src/stories/[ComponentName]Fx.stories.tsx
- Vue Stories: playgrounds/vue/src/stories/[ComponentName]Fx.stories.ts
- Lit Stories: playgrounds/lit/src/stories/[ComponentName]Fx.stories.ts
- VitePress Docs: v2/site/docs/components/[componentname]-fx.md
- VitePress Examples: v2/site/docs/examples/[ComponentName]FxExamples.vue
```

### Iteration Prompt

```
Review and validate the generated [ComponentName]Fx implementation against FX_PLAN.md.

Verification checklist:

**Architecture:**
- [ ] Extends core component class (not modifying core)
- [ ] Props interface combines ComponentNameProps & FxProps
- [ ] All core props forwarded correctly
- [ ] Events re-dispatched (click, focus, blur, + custom)
- [ ] Shadow DOM compatibility maintained

**Effects Implementation:**
- [ ] All 12 standard effects implemented (bounce, pulse, jelly, tilt-press, shimmer, glow, press-pop, slide-in, flip, icon-reveal, ripple, highlight-sweep)
- [ ] Parent hover states properly overridden
- [ ] Target element selector is correct (identify main interactive/visual element)
- [ ] motionStyles imported for keyframes
- [ ] _applyFxClasses() method implemented
- [ ] _applyFxCustomProperties() method implemented

**Accessibility:**
- [ ] @media (prefers-reduced-motion: reduce) included
- [ ] Reduced motion is non-overridable (uses !important)
- [ ] Focus indicators remain visible
- [ ] ARIA attributes from core preserved

**TypeScript:**
- [ ] ComponentNameFxProps interface exported
- [ ] FxProps interface implemented
- [ ] All event types properly typed
- [ ] Web component registered in HTMLElementTagNameMap

**Storybook Stories:**
- [ ] Default story with controls exists
- [ ] 12 individual effect stories created
- [ ] Combination story showing all effects
- [ ] CSS Parts customization story included
- [ ] Stories follow framework-specific patterns (React/Vue/Lit)

**Documentation:**
- [ ] VitePress markdown file created
- [ ] All props documented (FxProps + inherited ComponentNameProps)
- [ ] Usage examples for Lit/React/Vue included
- [ ] Examples component created with interactive demos
- [ ] Effects table with descriptions included
- [ ] Added to VitePress sidebar config

**File Locations:**
- [ ] Core: v2/lib/src/components/[ComponentName]/core/fx/
- [ ] React: v2/lib/src/components/[ComponentName]/react/
- [ ] Vue: v2/lib/src/components/[ComponentName]/vue/
- [ ] Stories: playgrounds/{react,vue,lit}/src/stories/
- [ ] Docs: v2/site/docs/components/ and v2/site/docs/examples/

Make corrections as needed while preserving the component's core behavior and following all FX_PLAN.md specifications.
```

### Refinement Prompt

```
Enhance the [ComponentName]Fx implementation with component-specific optimizations and polish.

Focus areas:

**Component-Specific Effects:**
1. Identify which of the 12 standard effects work best for this component type
2. Consider adding component-specific effect variations if appropriate
3. Optimize effect parameters (duration, easing) for this component's use case
4. Ensure effects enhance the component's purpose without being distracting

**Variant-Aware Customization:**
1. Add variant-specific effect styling where appropriate (e.g., press-shadow with variant colors)
2. Ensure bordered/ghost/link variants work correctly with effects
3. Test effects across all size variants
4. Verify shape variants (if applicable) display effects correctly

**Target Element Optimization:**
1. Confirm the correct element receives the fx class (interactive vs. visual container)
2. For complex components, ensure effects target the most impactful element
3. Verify effects don't break internal component structure
4. Test with slotted content to ensure no layout issues

**Documentation Enhancements:**
1. Add component-specific usage notes to VitePress docs
2. Include real-world use case examples
3. Document any component-specific effect considerations
4. Add JSDoc comments to explain component-specific decisions
5. Create comprehensive examples showcasing best practices

**Performance Validation:**
1. Verify all effects use GPU-accelerated properties (transform, opacity)
2. Ensure no layout thrashing or reflows
3. Test with multiple instances on the same page
4. Confirm reduced-motion fallback works correctly

**Storybook Polish:**
1. Add informative story descriptions
2. Include do's and don'ts examples
3. Show combination patterns that work well
4. Demonstrate accessibility features

Maintain full compatibility with FX_PLAN.md specifications and preserve all core component functionality.
```

---

## Common Pitfalls to Avoid

1. **Don't modify core component files** - Only extend via Fx class
2. **Don't use JavaScript animations** - CSS-only effects
3. **Don't forget reduced-motion** - Always include media query
4. **Don't hardcode durations/easing** - Use CSS custom properties
5. **Don't skip parent hover overrides** - They compete with effects
6. **Don't apply effects to wrong element** - Identify correct target
7. **Don't break core functionality** - Test thoroughly
8. **Don't forget TypeScript types** - Export all interfaces

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2024-12-02 | Initial FX_PLAN.md specification |

---

## Related Documentation

- `FX_PLAN.md` - This specification (you are here)
- `INTERFACE_STANDARDS.md` - Component interface patterns
- `DEVELOPMENT_GUIDE.md` - Token system reference (see Token System section)
- `motion.styles.ts` - Keyframe definitions (`v2/lib/src/styles/motion.styles.ts`)
- `fx.ts` - FxProps type definitions (`v2/lib/src/types/fx.ts`)
- Component-specific core files (`v2/lib/src/components/[ComponentName]/core/_[ComponentName].ts`)
- Token definitions (`v2/theme-registry/tokens/*.json`)

## File Location Quick Reference

**For AI prompts - use these exact paths:**

```
Core Implementation:
├── v2/lib/src/components/[ComponentName]/core/fx/_[ComponentName]Fx.ts
├── v2/lib/src/components/[ComponentName]/core/fx/[ComponentName]Fx.ts
├── v2/lib/src/components/[ComponentName]/react/React[ComponentName]Fx.tsx
├── v2/lib/src/components/[ComponentName]/vue/Vue[ComponentName]Fx.vue
└── v2/lib/src/components/[ComponentName]/vue/index.ts

Storybook:
├── playgrounds/react/src/stories/[ComponentName]Fx.stories.tsx
├── playgrounds/vue/src/stories/[ComponentName]Fx.stories.ts
└── playgrounds/lit/src/stories/[ComponentName]Fx.stories.ts

Documentation:
├── v2/site/docs/components/[componentname]-fx.md
└── v2/site/docs/examples/[ComponentName]FxExamples.vue

Reference:
├── v2/theme-registry/tokens/ (design tokens)
├── v2/lib/src/styles/motion.styles.ts (keyframes)
└── v2/lib/src/types/fx.ts (FxProps interface)
```

---

## Support

For questions or issues with FX component implementation:
1. Review this FX_PLAN.md specification
2. Examine ButtonFx as reference implementation
3. Check that motionStyles are properly imported
4. Verify core component is not modified
