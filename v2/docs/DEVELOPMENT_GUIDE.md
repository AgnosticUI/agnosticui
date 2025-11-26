# AgnosticUI v2 Development Guide

**Version**: 2.0.0
**Last Updated**: 2024-11-24
**Status**: Living Document

This is the comprehensive guide for developing components in AgnosticUI v2. It consolidates all architectural patterns, development workflows, and best practices.

---

## Table of Contents

1. [Core Philosophy](#core-philosophy)
2. [Design Token System](#design-token-system)
3. [Component Development Workflow](#component-development-workflow)
4. [Event Patterns](#event-patterns)
5. [Vue Integration Patterns](#vue-integration-patterns)
6. [Testing & Verification](#testing--verification)
7. [Critical Patterns & Rules](#critical-patterns--rules)

---

## Core Philosophy

### Mission

AgnosticUI v2 follows a **minimalist & highly themeable** design philosophy. Components provide beautiful defaults via design tokens with complete customization capabilities.

### Core Principles

1. **WAI-ARIA APG is the Bible**: All components MUST be implemented against their corresponding WAI-ARIA Authoring Practices Guide (APG) pattern
2. **Functional CSS Only**: Components contain only functional CSS (display, visibility states). All visual styling comes from tokens
3. **Token-First Design**: NEVER hardcode color values, spacing, or radii in components
4. **Theme Awareness**: All components must work in both light and dark modes
5. **Semantic Naming**: Use semantic token names that describe purpose, not appearance

---

## Design Token System

### Token Architecture

```
theme-registry/tokens/         →  Style Dictionary Build  →  dist/ag-tokens.css
├── colors/                                                   dist/ag-tokens-dark.css
│   ├── light.json
│   └── dark.json
├── spacing.json
├── radii.json
├── motion.json
├── focus.json
└── z-index.json
```

### Build Commands

```bash
cd v2/theme-registry
npm run build       # Build tokens
npm run rebuild     # Rebuild from scratch
```

### Key Token Categories

#### Text Colors (Auto-Adapting)
| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| `--ag-text-primary` | `#111827` (dark) | `#F0F6FC` (light) | Primary text, headings |
| `--ag-text-secondary` | `#6b7280` (medium) | `#D1D7E0` (lighter) | Secondary text, labels |
| `--ag-text-muted` | `#9ca3af` (light) | `#9198A1` (medium) | Placeholders, disabled |

#### Background Colors
| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| `--ag-background-primary` | `#ffffff` | `#010409` | Main background |
| `--ag-background-secondary` | `#f9fafb` | `#212730` | Cards, panels |
| `--ag-background-tertiary` | `#e5e7eb` | `#3D444D` | Neutral buttons |

#### Interactive Colors (with Hover States)
| Token | Light Mode | Dark Mode | Hover Token |
|-------|-----------|-----------|-------------|
| `--ag-primary` | `#0063a8` | `#077acb` | `--ag-primary-dark` |
| `--ag-danger` | `#ca1d1d` | `#dc2626` | `--ag-danger-dark` |
| `--ag-warning` | `#bf6804` | `#d97706` | `--ag-warning-dark` |

#### Border System (Two-Tier)
| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| `--ag-border` | `#e5e7eb` | `#3D444D` | Structural dividers, prominent borders |
| `--ag-border-subtle` | `#d1d5db` | `#656C76` | Form inputs, interactive controls |

#### Focus (Accessibility Critical)
| Token | Value | Usage |
|-------|-------|-------|
| `--ag-focus` | RGB channels (e.g., `37, 99, 235`) | Focus ring color |
| `--ag-focus-width` | `2px` | Focus ring width |
| `--ag-focus-offset` | `2px` | Focus ring offset |

**CRITICAL**: Always use `--ag-focus` for focus rings, NEVER `currentColor`

```css
/* ✅ CORRECT */
button:focus-visible {
  outline: var(--ag-focus-width) solid rgb(var(--ag-focus));
  outline-offset: var(--ag-focus-offset);
}

/* ❌ WRONG - Poor contrast */
button:focus-visible {
  outline: 2px solid currentColor;
}
```

### Token Usage Rules

#### Rule 1: NEVER Hardcode Values
```css
/* ❌ WRONG */
button {
  background: #0063a8;
  color: #ffffff;
}

/* ✅ CORRECT */
button {
  background: var(--ag-primary);
  color: var(--ag-white);
}
```

#### Rule 2: No Fallbacks for Global Tokens
When consuming global `--ag-*` tokens, **do NOT use fallbacks**. They are guaranteed to be present.

```css
/* ✅ CORRECT */
background-color: var(--ag-primary);

/* ❌ WRONG - Unnecessary fallback */
background-color: var(--ag-primary, #0063a8);
```

#### Rule 3: Fallbacks for Component-Specific Tokens
When defining component-specific tokens, **use fallbacks** to set defaults:

```css
/* ✅ CORRECT - Component-specific token with fallback */
padding: var(--ag-tabs-panel-padding, var(--ag-space-3));
width: var(--icon-button-size, var(--ag-space-10));
```

### Hover State Patterns

#### Pattern 1: Colored Backgrounds with White Text
Darken the background on hover:

```css
button {
  background: var(--ag-primary);
  color: var(--ag-white);
}
button:hover {
  background: var(--ag-primary-dark);  /* Darken */
}
```

#### Pattern 2: Light Backgrounds with Dark Text
Darken the background on hover:

```css
button {
  background: var(--ag-background-tertiary);
  color: inherit;
}
button:hover {
  background: var(--ag-neutral-400);  /* Darken */
}
```

### Dark Mode Testing

```bash
# In browser console
document.documentElement.setAttribute('data-theme', 'dark')
document.documentElement.setAttribute('data-theme', 'light')
```

**CRITICAL**: Always test components in both light and dark modes before completion.

---

## Component Development Workflow

### Phase 1: Scaffolding (Automated)

```bash
cd v2/lib
npm run scaffold -- MyComponent
```

This creates:
- Core component files in `src/components/MyComponent/`
- React and Vue wrapper skeletons
- Storybook stories for all three frameworks
- VitePress documentation pages
- Updates `package.json` exports
- Updates VitePress sidebar navigation

### Phase 2: Implementation

#### Core Component (`_MyComponent.ts`)

**CRITICAL PATTERNS**:

1. **Custom Element Registration** - Use manual registration, NOT `@customElement` decorator:
   ```typescript
   // ✅ CORRECT
   export class MyComponent extends LitElement {
     // implementation
   }

   if (!customElements.get('ag-mycomponent')) {
     customElements.define('ag-mycomponent', MyComponent);
   }

   declare global {
     interface HTMLElementTagNameMap {
       'ag-mycomponent': MyComponent;
     }
   }

   // ❌ WRONG - Breaks React Storybook
   @customElement('ag-mycomponent')
   export class MyComponent extends LitElement {}
   ```

2. **Boolean Prop Attributes** - Use correct CSS selectors:
   ```css
   /* ✅ CORRECT */
   :host([disabled]) { ... }

   /* ❌ WRONG - Lit boolean props don't work this way */
   :host([disabled="true"]) { ... }
   ```

3. **Multi-Word Props** - Explicit kebab-case attributes for Vue compatibility:
   ```typescript
   // ✅ CORRECT
   @property({ type: String, attribute: 'button-text' })
   buttonText = '';

   @property({ type: Boolean, attribute: 'label-hidden' })
   labelHidden = false;
   ```

4. **CSS Shadow Parts** - Expose key elements for customization:
   ```typescript
   render() {
     return html`
       <div class="card" part="ag-card">
         <div class="card-header" part="ag-card-header">
           <slot name="header"></slot>
         </div>
         <div class="card-content" part="ag-card-content">
           <slot></slot>
         </div>
       </div>
     `;
   }
   ```

5. **Dark Mode Tokens** - Always use semantic tokens:
   ```css
   /* ✅ CORRECT - Auto-adapts to dark mode */
   :host {
     color: var(--ag-text-primary);
     background: var(--ag-background-primary);
     border-color: var(--ag-border);
   }

   /* ❌ WRONG - Doesn't adapt */
   :host {
     color: #111827;
     background: white;
     border-color: #e5e7eb;
   }
   ```

#### React Wrapper (`ReactMyComponent.tsx`)

```typescript
import * as React from 'react';
import { createComponent, type EventName } from '@lit/react';
import { MyComponent, type MyComponentProps, type MyCustomEvent } from '../core/MyComponent';

export interface ReactMyComponentProps extends MyComponentProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

export const ReactMyComponent = createComponent({
  tagName: 'ag-mycomponent',
  elementClass: MyComponent,
  react: React,
  events: {
    // Map ONLY custom events - native events work automatically
    onMyCustomEvent: 'my-custom-event' as EventName<MyCustomEvent>,
  },
});

export type { MyCustomEvent } from '../core/MyComponent';
```

#### Vue Wrapper (`VueMyComponent.vue`)

**CRITICAL**: Use `watchEffect` for prop syncing, NOT `watch(props, ...)`:

```vue
<template>
  <ag-mycomponent ref="agComponent" v-bind="$attrs">
    <slot name="header" slot="header" />
    <slot />
  </ag-mycomponent>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watchEffect, nextTick } from 'vue';
import type { MyComponentProps } from '../core/_MyComponent';
import '../core/MyComponent';

export default defineComponent({
  name: 'VueMyComponent',
  props: {
    propOne: { type: Boolean, default: false },
    propTwo: { type: String, default: '' },
  },
  setup(props) {
    const agComponent = ref<HTMLElement & MyComponentProps | null>(null);

    const syncProps = () => {
      const webComponent = agComponent.value;
      if (!webComponent) return;

      webComponent.propOne = props.propOne;
      webComponent.propTwo = props.propTwo;
    };

    onMounted(async () => {
      await customElements.whenDefined('ag-mycomponent');
      await nextTick();
      syncProps();
    });

    // ✅ CRITICAL: Use watchEffect, NOT watch(props, ...)
    watchEffect(() => {
      if (agComponent.value) {
        syncProps();
      }
    });

    return { agComponent };
  },
});
</script>
```

### Phase 3: Storybook Stories

Create stories for all three frameworks with consistent structure:

**Lit Stories** (`playgrounds/lit/src/stories/MyComponent.stories.ts`):
```typescript
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { fn } from '@storybook/test';
import type { MyComponentProps } from 'agnosticui-core/mycomponent';
import 'agnosticui-core/mycomponent';

const meta: Meta<MyComponentProps> = {
  title: 'AgnosticUI Lit/MyComponent',  // Note: "Lit" in title
  component: 'ag-mycomponent',
  argTypes: {
    propOne: { control: 'boolean' },
    propTwo: { control: 'text' },
  },
  args: {
    propOne: false,
    propTwo: '',
    onMyEvent: fn(),
  },
};

export default meta;

export const Default: StoryObj<MyComponentProps> = {
  render: (args) => html`
    <ag-mycomponent
      .propOne=${args.propOne}
      .propTwo=${args.propTwo}
      @my-event=${args.onMyEvent}
    ></ag-mycomponent>
  `,
};
```

**Vue Stories** - Use `v-html` pattern for CSS Parts customization:
```typescript
export const CSSPartsCustomization: Story = {
  render: (args) => ({
    components: { VueMyComponent },
    setup() {
      const styles = `
        <style>
          .custom-component::part(ag-my-part) {
            /* custom styles */
          }
        </style>
      `;
      return { args, styles };
    },
    template: `
      <div>
        <div v-html="styles"></div>
        <VueMyComponent v-bind="args" class="custom-component" />
      </div>
    `,
  }),
};
```

---

## Event Patterns

AgnosticUI v2 uses a **dual-dispatch pattern** for component events.

### Event Categories

#### 1. Native Composed Events (Already Bubbling)
**Examples**: `click`, `input`, `change`, `keydown`, `mousedown`

**Pattern**: Just provide optional callback props for convenience

```typescript
export interface MyComponentProps {
  onClick?: (event: MouseEvent) => void;
}

export class MyComponent extends LitElement {
  @property({ attribute: false })
  declare onClick?: (event: MouseEvent) => void;

  private _handleClick(event: MouseEvent) {
    // Native click already composes - just invoke callback
    if (this.onClick) {
      this.onClick(event);
    }
  }
}
```

#### 2. Native Non-Bubbling Events (Must Re-Dispatch)
**Examples**: `focus`, `blur`

**Pattern**: Re-dispatch from host + invoke callback

```typescript
export interface MyComponentProps {
  onFocus?: (event: FocusEvent) => void;
}

export class MyComponent extends LitElement {
  @property({ attribute: false })
  declare onFocus?: (event: FocusEvent) => void;

  private _handleFocus(event: FocusEvent) {
    // Re-dispatch from host for consumer access
    this.dispatchEvent(new FocusEvent('focus', {
      bubbles: true,
      composed: true,
    }));

    if (this.onFocus) {
      this.onFocus(event);
    }
  }
}
```

#### 3. Custom Events (Component-Specific State Changes)
**Examples**: `toggle`, `tab-change`, `accordion-expand`

**Pattern**: Dual-dispatch (dispatchEvent + callback)

```typescript
// 1. Define event types
export interface ToggleEventDetail {
  checked: boolean;
}
export type ToggleEvent = CustomEvent<ToggleEventDetail>;

// 2. Add to Props interface
export interface MyComponentProps {
  onToggle?: (event: ToggleEvent) => void;
}

// 3. Implement dual-dispatch
export class MyComponent extends LitElement {
  @property({ attribute: false })
  declare onToggle?: (event: ToggleEvent) => void;

  private _handleToggle() {
    // Dispatch DOM event first
    const toggleEvent = new CustomEvent<ToggleEventDetail>('toggle', {
      detail: { checked: this.checked },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(toggleEvent);

    // Then invoke callback
    if (this.onToggle) {
      this.onToggle(toggleEvent);
    }
  }
}
```

### React Wrapper Events

```typescript
export const ReactMyComponent = createComponent({
  tagName: 'ag-mycomponent',
  elementClass: MyComponent,
  react: React,
  events: {
    // Map ONLY custom events - native composed events work automatically
    onToggle: 'toggle' as EventName<ToggleEvent>,
  },
});
```

### Vue Wrapper Events

```vue
<script setup lang="ts">
const emit = defineEmits<{
  click: [event: MouseEvent];           // Native event - emit full event
  toggle: [detail: ToggleEventDetail];  // Custom event - emit detail only
  'update:checked': [checked: boolean]; // v-model support
}>();

const handleClick = (event: MouseEvent) => {
  emit('click', event);  // Full event for native
};

const handleToggle = (event: Event) => {
  const customEvent = event as ToggleEvent;
  emit('toggle', customEvent.detail);  // Detail only for custom
  emit('update:checked', customEvent.detail.checked);  // v-model
};
</script>

<template>
  <ag-mycomponent
    @click="handleClick"
    @toggle="handleToggle"
  />
</template>
```

### Event Naming Conventions

- **DOM Event Names**: Lowercase, no prefixes (e.g., `'toggle'`, `'change'`)
- **Callback Props**: camelCase with "on" prefix (e.g., `onToggle`, `onChange`)
- **Event Type Names**: PascalCase with "Event" suffix (e.g., `ToggleEvent`)
- **Event Detail Interfaces**: PascalCase with "EventDetail" suffix (e.g., `ToggleEventDetail`)

---

## Vue Integration Patterns

### Slot Detection Pattern

**Problem**: Vue doesn't reliably trigger `slotchange` events.

**Solution**: Use reactive state + setTimeout + manual dispatch

```typescript
// ✅ CORRECT: Use reactive state, NOT slot references
@property({ type: Boolean, state: true })
private _hasIconSlot = false;

// Event-driven slot change handler
private _handleSlotChange(e: Event) {
  const slot = e.target as HTMLSlotElement;
  if (slot.name === 'icon') {
    this._hasIconSlot = hasSlotContent(slot);
    this.requestUpdate();
  }
}

// Initial detection in firstUpdated with setTimeout
override firstUpdated() {
  setTimeout(() => {
    const iconSlot = this.shadowRoot?.querySelector('slot[name="icon"]') as HTMLSlotElement;
    const hadSlot = this._hasIconSlot;
    this._hasIconSlot = hasSlotContent(iconSlot);

    if (hadSlot !== this._hasIconSlot) {
      this.requestUpdate();
    }
  }, 0);
}

// Render with event handler attached
render() {
  return html`
    <slot name="icon" @slotchange=${this._handleSlotChange}></slot>
    ${!this._hasIconSlot ? html`<!-- fallback -->` : ''}
  `;
}
```

**Vue Wrapper**: Manually dispatch slotchange events

```vue
<script setup lang="ts">
onMounted(async () => {
  await customElements.whenDefined('ag-mycomponent');
  await nextTick();

  // Manually trigger slot detection for Vue
  const webComponent = agComponent.value;
  if (webComponent) {
    const iconSlot = webComponent.shadowRoot?.querySelector('slot[name="icon"]');
    if (iconSlot) {
      iconSlot.dispatchEvent(new Event('slotchange'));
    }
  }
});
</script>
```

### Attribute Naming for Multi-Word Props

For camelCase properties, **explicitly specify kebab-case attributes**:

```typescript
// ✅ CORRECT - Explicit attribute mapping
@property({ type: String, attribute: 'button-text' })
buttonText = '';

@property({ type: String, attribute: 'error-message' })
errorMessage = '';

// Vue template uses kebab-case
<ag-mycomponent :button-text="buttonText" :error-message="errorMessage" />
```

---

## Testing & Verification

### Unit Tests

AgnosticUI v2 uses **Vitest** for unit testing with **jest-axe** for accessibility testing.

**Test Setup Pattern:**

```typescript
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { MyComponent } from './MyComponent';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('MyComponent', () => {
  let container: HTMLElement;
  let component: MyComponent;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    component = document.createElement('ag-mycomponent') as MyComponent;
    container.appendChild(component);
  });

  afterEach(() => {
    container.remove();
  });

  // Test both addEventListener and callback patterns
  it('dispatches toggle event (addEventListener)', async () => {
    const spy = vi.fn();
    component.addEventListener('toggle', spy);

    component.click();
    await component.updateComplete;

    expect(spy).toHaveBeenCalledOnce();
    expect(spy.mock.calls[0][0].detail).toEqual({ checked: true });
  });

  it('invokes onToggle callback (prop pattern)', async () => {
    const spy = vi.fn();
    component.onToggle = spy;

    component.click();
    await component.updateComplete;

    expect(spy).toHaveBeenCalledOnce();
  });

  it('should have no accessibility violations', async () => {
    await component.updateComplete;
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```

### Build & Verification Workflow

```bash
# 1. Build library
cd v2/lib
npm run lint && npm run typecheck && npm run test && npm run build

# 2. Pack for playgrounds
npm pack

# 3. Install in playgrounds
cd ../playgrounds/react
npm i ../../lib/agnosticui-<version>.tgz
npm run storybook

cd ../playgrounds/vue
npm i ../../lib/agnosticui-<version>.tgz
npm run storybook

cd ../playgrounds/lit
npm i ../../lib/agnosticui-<version>.tgz
npm run storybook

# 4. Verify documentation
cd ../site
npm run reinstall:lib
npm run docs:dev
```

### Pre-Commit Checklist

- [ ] All tests pass (`npm test`)
- [ ] No lint errors (`npm run lint`)
- [ ] No TypeScript errors (`npm run typecheck`)
- [ ] Library builds successfully (`npm run build`)
- [ ] Component renders in all 3 Storybooks (Lit, React, Vue)
- [ ] **Dark mode tested** (toggle `data-theme="dark"` in browser)
- [ ] **Text contrast adequate in both modes**
- [ ] **All visual elements visible in both modes**
- [ ] Documentation examples work correctly
- [ ] No console errors or warnings

---

## Critical Patterns & Rules

### Event Listener Lifecycle

**CRITICAL**: Global listeners (`document`, `window`) must be managed in `willUpdate` to prevent race conditions:

```typescript
// ✅ CORRECT: State-based listener management
willUpdate(changedProperties: Map<string, unknown>) {
  if (changedProperties.has('open')) {
    if (this.open) {
      document.addEventListener('keydown', this._handleKeydown);
    } else {
      document.removeEventListener('keydown', this._handleKeydown);
    }
  }
}

disconnectedCallback() {
  super.disconnectedCallback();
  // Cleanup if unmounted while open
  document.removeEventListener('keydown', this._handleKeydown);
}
```

### Property Declaration Pattern

**CRITICAL**: Avoid class field shadowing:

```typescript
// ❌ WRONG - Breaks Lit reactivity
@property({ type: String })
variant = 'primary';

// ✅ CORRECT - Use declare + initialize in constructor
@property({ type: String })
declare variant: string;

constructor() {
  super();
  this.variant = 'primary';
}
```

### Package Exports

After creating a new component, update `v2/lib/package.json`:

```json
{
  "exports": {
    "./mycomponent": {
      "types": "./dist/components/MyComponent/core/MyComponent.d.ts",
      "import": "./dist/components/MyComponent/core/MyComponent.js"
    },
    "./mycomponent/react": {
      "types": "./dist/components/MyComponent/react/ReactMyComponent.d.ts",
      "import": "./dist/components/MyComponent/react/ReactMyComponent.js"
    },
    "./mycomponent/vue": {
      "types": "./dist/components/MyComponent/vue/index.d.ts",
      "import": "./dist/components/MyComponent/vue/index.js"
    }
  }
}
```

---

## Quick Reference: Common Mistakes

| Mistake | Correct Pattern |
|---------|----------------|
| Using `@customElement` decorator | Manual registration with guard |
| Using `[prop="true"]` in CSS | Use `[prop]` for boolean attributes |
| Hardcoding colors | Use `--ag-*` tokens |
| Missing `attribute` for multi-word props | Add `attribute: 'kebab-case'` |
| Using `currentColor` for focus | Use `rgb(var(--ag-focus))` |
| Forgetting dark mode testing | Test with `data-theme="dark"` |
| Not re-dispatching focus/blur | Re-dispatch from host element |
| Mapping native events in React | Only map custom events |
| Emitting full event in Vue custom events | Emit `detail` only |
| Using `watch(props, ...)` in Vue | Use `watchEffect` |

---

## ARIA Attributes in Shadow DOM

### ✅ Supported ARIA Patterns

**Self-Contained Attributes (Always Work):**

- `aria-label` - Direct text label
- `aria-pressed` - Toggle state
- `aria-disabled` - Disabled state
- `aria-busy` - Loading state
- `aria-expanded` - Expansion state
- `aria-hidden` - Visibility state
- `aria-required` - Required field
- `aria-invalid` - Validation state
- `aria-checked` - Checkbox/radio state
- `aria-selected` - Selection state

### ❌ Unsupported ARIA Patterns

**ID-Based References (Shadow DOM Limitation):**

AgnosticUI components **cannot** accept these props as external IDs because Shadow DOM encapsulation prevents ID references from crossing component boundaries:

- `aria-describedby` - Cannot reference external elements (use internal IDs)
- `aria-labelledby` - Cannot reference external elements (use internal IDs)
- `aria-controls` - Cannot reference external elements
- `aria-owns` - Cannot reference external elements
- `for` attribute on `<label>` - Cannot reference elements inside shadow DOM

**Why This Matters:**

```html
<!-- ❌ DOESN'T WORK - External reference -->
<p id="external-desc">Button description</p>
<ag-button aria-describedby="external-desc">Click</ag-button>
<!-- The button's shadow root cannot find #external-desc in light DOM -->
```

### ✅ Internal ID References (Works)

Components CAN use ID references to elements **within their own shadow root**:

```typescript
// ✅ CORRECT - Internal reference
render() {
  return html`
    <div
      role="dialog"
      aria-labelledby="internal-heading"
      aria-describedby="internal-description"
    >
      <h2 id="internal-heading">Dialog Title</h2>
      <p id="internal-description">Dialog description</p>
    </div>
  `;
}
```

**Examples of components using internal references correctly:**
- `Dialog` - Uses `aria-labelledby="dialog-heading"` (internal to shadow root)
- `Combobox` - Uses `aria-labelledby=${this._labelId}` (internal to shadow root)
- `Toggle` - Uses `aria-describedby` for internal helper/error text

### Development Guidelines

**When creating new components:**

1.  **DO NOT** add props for `aria-describedby`, `aria-labelledby`, `aria-controls` if they are intended to reference external IDs.
2.  **DO** use `aria-label` for allowing users to provide accessible names when no visible label is available.
3.  **DO** generate internal IDs for elements within your shadow DOM and connect them with ARIA attributes.
4.  **DO** document clearly which ARIA patterns are supported and why.

---

**Last Updated**: 2024-11-25
**Maintainers**: Update this document when discovering new patterns or best practices
