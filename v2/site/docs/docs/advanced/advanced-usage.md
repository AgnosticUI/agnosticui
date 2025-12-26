# Advanced Usage

<AlphaWarning />

<script setup>
import AlphaWarning from '../../components/AlphaWarning.vue'
</script>

This guide covers advanced customization techniques, extending components, creating custom components, and deep integration patterns.

## Deep Customization

### Modifying Component Behavior

Since components live in your codebase, you can modify them directly.

**Example: Adding custom validation to Input**

Edit `src/components/ag/Input/core/Input.ts`:

```typescript
export class AgInput extends LitElement {
  @property({ type: String })
  declare value: string;

  @property({ type: String })
  declare customValidator?: string; // Add new property

  private _validate() {
    // Add custom validation logic
    if (this.customValidator === 'email') {
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.value);
      this.invalid = !isValid;
    }
  }

  private _handleInput(e: InputEvent) {
    this.value = (e.target as HTMLInputElement).value;
    this._validate(); // Call validation
    this.dispatchEvent(new CustomEvent('input', { detail: { value: this.value } }));
  }
}
```

**Using the modified component:**

```typescript
<ReactInput
  customValidator="email"
  value={email}
  onInput={(e) => setEmail(e.detail.value)}
/>
```

### Extending Component Styles

Add custom styles to components by modifying their `static styles`:

```typescript
export class AgButton extends LitElement {
  static styles = [
    // Original styles
    css`
      :host {
        display: inline-block;
      }
      button {
        background: var(--ag-background-tertiary);
        /* ... */
      }
    `,
    // Your custom styles
    css`
      button.custom-glow {
        box-shadow: 0 0 20px var(--ag-primary);
        animation: pulse 2s infinite;
      }

      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.8; }
      }
    `,
  ];
}
```

### Creating Variant Compositions

Combine tokens to create new visual variants:

```css
/* In your app's CSS */
:root {
  /* Success variant */
  --ag-success: #10b981;
  --ag-success-hover: #059669;

  /* Info variant */
  --ag-info: #3b82f6;
  --ag-info-hover: #2563eb;
}
```

Then use in component modifications:

```typescript
render() {
  return html`
    <button
      class=${classMap({
        success: this.variant === 'success',
        info: this.variant === 'info',
      })}
    >
      <slot></slot>
    </button>
  `;
}
```

## Creating Custom Components

Use AgnosticUI as a foundation for building your own components.

### Pattern: Lit Core Component

Create a new component following AgnosticUI conventions:

```typescript
// src/components/custom/StatusBadge/core/StatusBadge.ts
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('status-badge')
export class StatusBadge extends LitElement {
  @property({ type: String })
  declare status: 'online' | 'offline' | 'away';

  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      gap: var(--ag-space-2);
      padding: var(--ag-space-2) var(--ag-space-3);
      border-radius: var(--ag-radius-full);
      font-size: var(--ag-font-size-sm);
      background: var(--ag-surface-secondary);
    }

    .indicator {
      width: 8px;
      height: 8px;
      border-radius: var(--ag-radius-full);
    }

    .indicator.online {
      background: #10b981;
    }

    .indicator.offline {
      background: #6b7280;
    }

    .indicator.away {
      background: #f59e0b;
    }
  `;

  render() {
    return html`
      <span class="indicator ${this.status}"></span>
      <slot></slot>
    `;
  }
}
```

### Pattern: React Wrapper

Create a React wrapper for your custom component:

```typescript
// src/components/custom/StatusBadge/react/ReactStatusBadge.tsx
import React from 'react';
import { createComponent } from '@lit/react';
import { StatusBadge } from '../core/StatusBadge';

export const ReactStatusBadge = createComponent({
  tagName: 'status-badge',
  elementClass: StatusBadge,
  react: React,
});

export interface ReactStatusBadgeProps {
  status: 'online' | 'offline' | 'away';
  children?: React.ReactNode;
}
```

### Pattern: Vue Wrapper

Create a Vue wrapper:

```vue
<!-- src/components/custom/StatusBadge/vue/VueStatusBadge.vue -->
<script setup lang="ts">
import { defineProps } from 'vue';
import '../core/StatusBadge';

export interface VueStatusBadgeProps {
  status: 'online' | 'offline' | 'away';
}

const props = defineProps<VueStatusBadgeProps>();
</script>

<template>
  <status-badge :status="status">
    <slot />
  </status-badge>
</template>
```

## Advanced Theming

### Multi-Brand Support

Support multiple brand themes by creating separate token files:

```css
/* themes/brand-a.css */
:root[data-brand="a"] {
  --ag-primary: #3b82f6;
  --ag-secondary: #8b5cf6;
  --ag-radius-md: 0.375rem;
}

/* themes/brand-b.css */
:root[data-brand="b"] {
  --ag-primary: #ef4444;
  --ag-secondary: #f97316;
  --ag-radius-md: 0;
}
```

Then toggle brands:

```typescript
document.documentElement.setAttribute('data-brand', 'a');
```

### Theme Context System

Create a theme context for dynamic theming:

**React:**

```typescript
// contexts/ThemeContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextValue {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  brand: string;
  setBrand: (brand: string) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [brand, setBrand] = useState('default');

  useEffect(() => {
    const html = document.documentElement;
    if (theme === 'dark') {
      html.setAttribute('data-theme', 'dark');
    } else {
      html.removeAttribute('data-theme');
    }
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-brand', brand);
  }, [brand]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, brand, setBrand }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}
```

### CSS-in-JS Integration

Use CSS-in-JS libraries alongside AgnosticUI:

```typescript
// Using styled-components
import styled from 'styled-components';

const StyledContainer = styled.div`
  background: var(--ag-background-primary);
  padding: var(--ag-space-4);
  border-radius: var(--ag-radius-lg);
  box-shadow: var(--ag-shadow-md);
`;
```

This approach leverages AgnosticUI tokens while using your preferred styling solution.

## Advanced Component Patterns

### Compound Components

Create components that work together:

```typescript
// Card with compound pattern
export class AgCard extends LitElement {
  render() {
    return html`
      <div class="card">
        <slot></slot>
      </div>
    `;
  }
}

export class AgCardHeader extends LitElement {
  render() {
    return html`
      <header class="card-header">
        <slot></slot>
      </header>
    `;
  }
}

export class AgCardBody extends LitElement {
  render() {
    return html`
      <div class="card-body">
        <slot></slot>
      </div>
    `;
  }
}

export class AgCardFooter extends LitElement {
  render() {
    return html`
      <footer class="card-footer">
        <slot></slot>
      </footer>
    `;
  }
}
```

**Usage:**

```typescript
<ag-card>
  <ag-card-header>Title</ag-card-header>
  <ag-card-body>Content</ag-card-body>
  <ag-card-footer>Footer</ag-card-footer>
</ag-card>
```

### Polymorphic Components

Create components that can render as different elements:

```typescript
@property({ type: String })
declare as: 'button' | 'a' | 'div' = 'button';

render() {
  const Tag = this.as;
  return html`
    <${Tag}
      class="button"
      ?disabled=${this.disabled && Tag === 'button'}
      href=${this.as === 'a' ? this.href : nothing}
    >
      <slot></slot>
    </${Tag}>
  `;
}
```

### Composition Over Inheritance

Compose smaller components into larger ones:

```typescript
export class AgLoginForm extends LitElement {
  render() {
    return html`
      <form @submit=${this._handleSubmit}>
        <ag-input
          label="Email"
          type="email"
          name="email"
          required
        ></ag-input>

        <ag-input
          label="Password"
          type="password"
          name="password"
          required
        ></ag-input>

        <ag-button type="submit" variant="primary">
          Log In
        </ag-button>
      </form>
    `;
  }
}
```

## Utilities and Helpers

AgnosticUI includes utility functions in `src/components/ag/utils/`.

### Positioning Utility

Use `@floating-ui/dom` for advanced positioning:

```typescript
import { positioning } from '../../utils/positioning';

class AgDropdown extends LitElement {
  async updated() {
    if (this.open) {
      const trigger = this.shadowRoot!.querySelector('.trigger');
      const menu = this.shadowRoot!.querySelector('.menu');

      await positioning({
        reference: trigger,
        floating: menu,
        placement: 'bottom-start',
        offset: 8,
      });
    }
  }
}
```

### Focus Trap Utility

Manage focus for accessibility:

```typescript
import { createFocusTrap } from 'focus-trap';

class AgModal extends LitElement {
  private _focusTrap: FocusTrap | null = null;

  updated() {
    if (this.open && !this._focusTrap) {
      const container = this.shadowRoot!.querySelector('.modal');
      this._focusTrap = createFocusTrap(container, {
        initialFocus: '.close-button',
        escapeDeactivates: true,
        onDeactivate: () => {
          this.open = false;
        },
      });
      this._focusTrap.activate();
    } else if (!this.open && this._focusTrap) {
      this._focusTrap.deactivate();
      this._focusTrap = null;
    }
  }
}
```

### Backdrop Click Handler

Handle clicks outside components:

```typescript
import { handleBackdropClick } from '../../utils/handleBackdropClick';

private _handleBackdropClick = (e: MouseEvent) => {
  if (handleBackdropClick(e, this.shadowRoot!.querySelector('.dialog'))) {
    this.open = false;
  }
};
```

## SSR and SSG Support

### Next.js Integration

Use dynamic imports to load components client-side:

```typescript
// components/ClientButton.tsx
import dynamic from 'next/dynamic';

const ReactButton = dynamic(
  () => import('./ag/Button/react/ReactButton').then(mod => ({ default: mod.ReactButton })),
  { ssr: false }
);

export default function ClientButton() {
  return <ReactButton variant="primary">Click me</ReactButton>;
}
```

### Nuxt Integration

Use client-only components:

```vue
<!-- components/ClientButton.vue -->
<template>
  <ClientOnly>
    <VueButton variant="primary">Click me</VueButton>
  </ClientOnly>
</template>

<script setup>
import VueButton from './ag/Button/vue/VueButton.vue';
</script>
```

### SvelteKit Integration

SvelteKit has excellent web component support. Just ensure browser-only imports:

```svelte
<script>
  import { browser } from '$app/environment';

  if (browser) {
    import('./ag/Button/core/Button.js');
  }
</script>

{#if browser}
  <ag-button variant="primary">Click me</ag-button>
{/if}
```

## Testing Strategies

### Unit Testing Components

Test modified components with Vitest:

```typescript
import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import { AgButton } from './Button';

describe('AgButton', () => {
  it('renders with variant', async () => {
    const el = await fixture<AgButton>(
      html`<ag-button variant="primary">Click</ag-button>`
    );

    expect(el.variant).toBe('primary');
    expect(el.textContent?.trim()).toBe('Click');
  });

  it('emits click event', async () => {
    const el = await fixture<AgButton>(html`<ag-button>Click</ag-button>`);

    let clicked = false;
    el.addEventListener('click', () => {
      clicked = true;
    });

    el.click();
    expect(clicked).toBe(true);
  });
});
```

### Testing React Wrappers

```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { ReactButton } from './ReactButton';

test('ReactButton renders and handles click', () => {
  const handleClick = vi.fn();

  render(
    <ReactButton variant="primary" onClick={handleClick}>
      Click me
    </ReactButton>
  );

  const button = screen.getByText('Click me');
  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalled();
});
```

### Accessibility Testing

Use jest-axe for automated a11y testing:

```typescript
import { axe, toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);

test('Button has no accessibility violations', async () => {
  const el = await fixture(html`<ag-button>Accessible</ag-button>`);
  const results = await axe(el);
  expect(results).toHaveNoViolations();
});
```

## Build Optimization

### Tree Shaking

Since AgnosticUI uses ES modules, only imported components are bundled:

```typescript
// Only Button and Input will be in your bundle
import { ReactButton } from './components/ag/Button/react/ReactButton';
import { ReactInput } from './components/ag/Input/react/ReactInput';
```

### Code Splitting

Split components into separate chunks:

```typescript
// React lazy loading
const ReactDialog = lazy(() =>
  import('./components/ag/Dialog/react/ReactDialog').then(m => ({
    default: m.ReactDialog
  }))
);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ReactDialog open={open}>Content</ReactDialog>
    </Suspense>
  );
}
```

### Bundle Analysis

Analyze your bundle to ensure only necessary code is included:

```bash
# With Vite
npm install -D rollup-plugin-visualizer
```

```typescript
// vite.config.ts
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    visualizer({ open: true })
  ],
});
```

## Migration Strategies

### Gradual Adoption

Adopt AgnosticUI incrementally:

1. **Start with new features** - Use AgnosticUI for new components
2. **Coexist with existing UI** - Run alongside current component library
3. **Migrate one component at a time** - Replace old components gradually
4. **Share design tokens** - Use AgnosticUI tokens in existing components

### Wrapping Existing Components

Wrap AgnosticUI components with your existing API:

```typescript
// Your existing API
interface OldButtonProps {
  color: 'primary' | 'secondary';
  onClick: () => void;
}

// Adapter component
export function OldButton({ color, onClick, children }: OldButtonProps) {
  return (
    <ReactButton
      variant={color}
      onClick={onClick}
    >
      {children}
    </ReactButton>
  );
}
```

This maintains backward compatibility while using AgnosticUI under the hood.

## Performance Optimization

### Lazy Loading

Load components only when needed:

```typescript
// React
const ReactDialog = lazy(() => import('./components/ag/Dialog/react/ReactDialog'));

// Vue
const VueDialog = defineAsyncComponent(
  () => import('./components/ag/Dialog/vue/VueDialog.vue')
);
```

### Virtual Scrolling

For large lists, implement virtual scrolling:

```typescript
import { ReactList } from './components/ag/List/react/ReactList';
import { useVirtualizer } from '@tanstack/react-virtual';

function VirtualList({ items }) {
  const parentRef = useRef(null);

  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 50,
  });

  return (
    <div ref={parentRef} style={{ height: '400px', overflow: 'auto' }}>
      <div style={{ height: `${virtualizer.getTotalSize()}px` }}>
        {virtualizer.getVirtualItems().map(virtualItem => (
          <div key={virtualItem.index} style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            transform: `translateY(${virtualItem.start}px)`,
          }}>
            {items[virtualItem.index]}
          </div>
        ))}
      </div>
    </div>
  );
}
```

## Advanced CLI Usage

### Custom Component Paths

Organize components differently:

```bash
npx agnosticui-cli init --components-path ./src/ui/agnostic
```

### Using Local Tarballs

Test unreleased versions:

```bash
npx agnosticui-cli init --tarball /path/to/agnosticui-local-v2.0.0.tar.gz
```

### Selective Component Updates

Update specific components:

```bash
# Re-add with force to update
npx agnosticui-cli add button --force

# Compare with reference before forcing
diff src/components/ag/Button agnosticui/lib/src/components/Button
```

## What's Next?

- [Understanding AgnosticUI](/docs/understand) - Core concepts and architecture
- [Theming](/theming) - Design token system
- [Component Docs](/components/button) - Individual component references
- [FAQ](/docs/faq) - Common questions and answers
