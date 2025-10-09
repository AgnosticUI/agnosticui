# Interface Standards

> **Purpose**: Define uniform interface patterns for AgnosticUI v2 components, ensuring developers can "learn one, understand all."

**Last Updated**: 2025-01-09
**Status**: Active Standard

---

## Core Philosophy: Learn One, Understand All

Every AgnosticUI component should follow identical patterns for:
- ✅ Interface definitions and event handling
- ✅ Framework wrapper derivation from core
- ✅ Type exports and naming conventions

**Goal**: A developer who learns Button can immediately understand Tooltip, Tabs, Dialog, etc.

**Related Documentation**:
- **Storybook Integration**: See `STORYBOOK_STANDARDS.md` for how to document and test components
- **Component Refactoring**: See `COMPONENT_REFACTOR_TEMPLATE.md` for styling and token standards

---

## Part 1: Core Component Interface Pattern

### Rule: Single Props Interface with Optional Event Handlers

**DO THIS** ✅:
```typescript
// /lib/src/components/Tooltip/core/_Tooltip.ts

// 1. Define event types
export type TooltipShowEvent = CustomEvent<void>;
export type TooltipHideEvent = CustomEvent<void>;

// 2. Single Props interface with event handlers included
export interface TooltipProps {
  // Component properties
  content?: string;
  placement?: Placement;
  disabled?: boolean;

  // Event handlers - optional properties, part of base interface
  onShow?: (event: TooltipShowEvent) => void;
  onHide?: (event: TooltipHideEvent) => void;
}

// 3. Component implements the interface
export class Tooltip extends LitElement implements TooltipProps {
  @property({ type: String })
  declare content: string;

  @property({ type: Boolean })
  declare disabled: boolean;

  // Component dispatches events that map to interface handlers
  updated(changedProperties: Map<string, unknown>) {
    if (this._open) {
      this.dispatchEvent(new CustomEvent('show')); // Maps to onShow
    } else {
      this.dispatchEvent(new CustomEvent('hide')); // Maps to onHide
    }
  }
}
```

**DON'T DO THIS** ❌:
```typescript
// ❌ Two separate interfaces - over-engineering
export interface TooltipProps {
  content?: string;
  placement?: Placement;
}

export interface TooltipPropsWithEvents extends TooltipProps {
  onShow?: (event: TooltipShowEvent) => void;
  onHide?: (event: TooltipHideEvent) => void;
}
```

### Why Single Interface?

1. **Simpler**: One interface to import, document, and maintain
2. **Optional properties already work**: TypeScript doesn't require you to provide optional event handlers
3. **Consistent with Lit**: Lit components naturally accept both props and events
4. **Less code**: No Omit/extend dance
5. **Future-proof**: If you change documentation tools, interface patterns remain unchanged

### Event Naming Convention

| Component Event | Handler Prop Name | Event Type |
|----------------|-------------------|------------|
| `'show'` | `onShow` | `TooltipShowEvent` |
| `'hide'` | `onHide` | `TooltipHideEvent` |
| `'tab-change'` | `onTabChange` | `TabChangeEvent` |
| `'toggle-change'` | `onToggleChange` | `ToggleChangeEvent` |

**Pattern**:
- Event name: `kebab-case` (e.g., `'tab-change'`)
- Handler name: `onEventName` in camelCase (e.g., `onTabChange`)
- Type name: `EventNameEvent` in PascalCase (e.g., `TabChangeEvent`)

### Event Detail Types

```typescript
// Simple events (no detail)
export type TooltipShowEvent = CustomEvent<void>;

// Events with detail
export interface TabChangeEventDetail {
  activeTab: number;
  previousTab: number;
}
export type TabChangeEvent = CustomEvent<TabChangeEventDetail>;
```

### Component Implementation Requirements

```typescript
export class ComponentName extends LitElement implements ComponentNameProps {
  // ✅ All properties from Props interface must be declared
  @property({ type: String })
  declare propName: string;

  // ✅ Component dispatches events that map to Props handlers
  private _handleAction() {
    this.dispatchEvent(new CustomEvent('event-name', {
      detail: { /* event detail */ },
      bubbles: true,
      composed: true // Allows event to cross shadow DOM boundary
    }));
  }
}
```

**Key Points**:
- Use `implements ComponentNameProps` to enforce interface contract
- Use `composed: true` for events that should bubble to parent components
- Event names use `kebab-case`, matching WAI-ARIA conventions

---

## Part 2: Framework Wrapper Derivation

### Vue Wrapper Pattern

```typescript
// /lib/src/components/Tooltip/vue/index.ts

export { default as VueTooltip } from './VueTooltip.vue';

// Import core types
import type { TooltipProps, TooltipShowEvent, TooltipHideEvent } from '../core/_Tooltip';

/**
 * Vue-specific props interface derived from core
 *
 * Uses TypeScript utility types to ensure automatic sync with core API.
 * If core adds/removes props, Vue wrapper gets TypeScript errors until fixed.
 */
export interface VueTooltipProps extends TooltipProps {
  // Inherits ALL props from core, including optional event handlers
  // No need to omit/extend - optional properties handle it
}

// Re-export types for consumer convenience
export type { TooltipShowEvent, TooltipHideEvent } from '../core/_Tooltip';
```

**Simplified Pattern**:
- ✅ Just extend core Props directly
- ✅ Event handlers are optional - consumers can ignore them
- ✅ No need for separate `VuePropsWithEvents` interface

**Usage in Vue**:
```vue
<script setup lang="ts">
import { VueTooltip, type VueTooltipProps } from 'agnosticui-core/tooltip/vue';

// Props object without events - handlers are optional
const config: VueTooltipProps = {
  content: "Hello",
  placement: "top"
};
</script>

<template>
  <!-- Template binding - can omit event handlers -->
  <VueTooltip v-bind="config" @show="handleShow" @hide="handleHide" />

  <!-- Or include them in props -->
  <VueTooltip :content="config.content" :onShow="handleShow" />
</template>
```

### React Wrapper Pattern (Using @lit/react) ✅ RECOMMENDED

```typescript
// /lib/src/components/Tooltip/react/ReactTooltip.tsx

import * as React from 'react';
import { createComponent, type EventName } from '@lit/react';
import { Tooltip, type TooltipProps, type TooltipShowEvent, type TooltipHideEvent } from '../core/_Tooltip';

/**
 * React-specific props derived from core TooltipProps
 * Extends core props including event handlers (onShow, onHide)
 */
export interface ReactTooltipProps extends TooltipProps {
  children?: React.ReactElement;
}

// Create component with @lit/react
export const ReactTooltip = createComponent({
  tagName: 'ag-tooltip',
  elementClass: Tooltip,
  react: React,
  events: {
    onShow: 'show' as EventName<TooltipShowEvent>,
    onHide: 'hide' as EventName<TooltipHideEvent>,
  },
});

// Re-export types
export type { TooltipShowEvent, TooltipHideEvent } from '../core/_Tooltip';
```

**Benefits**:
- ✅ 75% less code vs manual wrapper
- ✅ Automatic property discovery from component class
- ✅ Correct props vs attributes handling
- ✅ Official Lit package - well maintained
- ✅ Type safe event mapping

**When to Use Manual Wrapper**:
Only when component needs:
- Heavy prop transformations (e.g., ReactNode → string conversion)
- Custom imperative API via useImperativeHandle
- Complex ref forwarding beyond standard usage

---

## Part 3: Naming Conventions

### Component Naming

| Context | Pattern | Example |
|---------|---------|---------|
| Core class | `ComponentName` | `Tooltip` |
| Core Props interface | `ComponentNameProps` | `TooltipProps` |
| Vue component | `VueComponentName` | `VueTooltip` |
| Vue Props interface | `VueComponentNameProps` | `VueTooltipProps` |
| React component | `ReactComponentName` | `ReactTooltip` |
| React Props interface | `ReactComponentNameProps` | `ReactTooltipProps` |

### Event Naming

| Element | Pattern | Example |
|---------|---------|---------|
| Custom event name | `kebab-case` | `'tab-change'` |
| Event handler prop | `onEventName` | `onTabChange` |
| Event type | `EventNameEvent` | `TabChangeEvent` |
| Event detail interface | `EventNameEventDetail` | `TabChangeEventDetail` |

### File Naming

| File Type | Pattern | Example |
|-----------|---------|---------|
| Core component | `_ComponentName.ts` | `_Tooltip.ts` |
| Vue wrapper | `VueComponentName.vue` | `VueTooltip.vue` |
| Vue index | `index.ts` | `index.ts` |
| React wrapper | `ReactComponentName.tsx` | `ReactTooltip.tsx` |

---

## Part 4: Component Refactoring Checklist

Use this checklist when refactoring components to comply with interface standards:

### Core Component

- [ ] Define event types: `export type ComponentEventNameEvent = CustomEvent<Detail>`
- [ ] Create single Props interface with event handlers: `onEventName?: (event) => void`
- [ ] Component implements Props: `export class Component extends LitElement implements ComponentProps`
- [ ] All properties from Props interface are declared in class
- [ ] Component dispatches events: `this.dispatchEvent(new CustomEvent('event-name', { ... }))`
- [ ] Events use `composed: true` for shadow DOM crossing
- [ ] Export types: `export type { EventTypes } from './Component'`

### Vue Wrapper

- [ ] Import core types: `import type { ComponentProps, EventTypes } from '../core/_Component'`
- [ ] Define VueProps: `export interface VueComponentProps extends ComponentProps { }`
- [ ] Re-export event types: `export type { EventTypes } from '../core/_Component'`
- [ ] Component properly wraps core web component
- [ ] No separate "WithEvents" interface

### React Wrapper (Using @lit/react)

- [ ] Install `@lit/react`: `npm install @lit/react`
- [ ] Import: `import { createComponent, type EventName } from '@lit/react'`
- [ ] Import core types: `import { Component, type ComponentProps, type EventTypes } from '../core/_Component'`
- [ ] Define ReactProps: `export interface ReactComponentProps extends ComponentProps { }`
- [ ] Use `createComponent` with tagName, elementClass, react, events
- [ ] Map events with EventName type cast: `onEventName: 'event-name' as EventName<EventType>`
- [ ] Re-export event types: `export type { EventTypes } from '../core/_Component'`
- [ ] Component named `ReactComponentName`

---

## Part 5: Migration Guide

### From Old Pattern to New Pattern

**Old Pattern** (with separate WithEvents interfaces):
```typescript
// Core
export interface TooltipProps {
  content?: string;
}

// Vue
export interface VueTooltipProps extends Omit<TooltipProps, 'onShow' | 'onHide'> {}
export interface VueTooltipPropsWithEvents extends VueTooltipProps {
  onShow?: (event: TooltipShowEvent) => void;
  onHide?: (event: TooltipHideEvent) => void;
}
```

**New Pattern** (single interface):
```typescript
// Core
export interface TooltipProps {
  content?: string;
  onShow?: (event: TooltipShowEvent) => void;
  onHide?: (event: TooltipHideEvent) => void;
}

// Vue
export interface VueTooltipProps extends TooltipProps {}
```

### Migration Steps

1. **Core Component**: Add event handlers to Props interface
2. **Vue Wrapper**: Remove WithEvents interface, just extend core Props
3. **React Wrapper**: Remove WithEvents interface, just extend core Props (with Omit if needed)
4. **Tests/Stories**: Change references from `WithEvents` to base `Props`
5. **Verify**: Test that events still work correctly

---

## Part 6: Troubleshooting

### TypeScript Errors in Wrappers

**Problem**: "Property 'onShow' does not exist on type 'TooltipProps'"

**Solution**: Make sure core Props interface includes event handlers:
```typescript
export interface TooltipProps {
  content?: string;
  onShow?: (event: TooltipShowEvent) => void; // ✅ Include this
}
```

### Vue Template Type Errors

**Problem**: Vue templates don't recognize event handlers

**Solution**: Vue is fine with optional event handlers being omitted in templates. Use `@event` binding:
```vue
<VueTooltip @show="handleShow" /> <!-- ✅ This always works -->
```

### React Event Handlers Not Firing

**Problem**: Event handlers passed as props don't execute

**Solution**: Make sure useEffect is wiring them up:
```typescript
useEffect(() => {
  const handler = (e: Event) => onEventName?.(e as EventType);
  ref.current?.addEventListener('event-name', handler);
  return () => ref.current?.removeEventListener('event-name', handler);
}, [onEventName]);
```

---

## Part 7: Quick Reference Examples

### Complete Minimal Example: Toggle

**Core** (`/lib/src/components/Toggle/core/_Toggle.ts`):
```typescript
export type ToggleChangeEvent = CustomEvent<{ checked: boolean }>;

export interface ToggleProps {
  checked?: boolean;
  disabled?: boolean;
  onToggleChange?: (event: ToggleChangeEvent) => void;
}

export class AgToggle extends LitElement implements ToggleProps {
  @property({ type: Boolean })
  declare checked: boolean;

  @property({ type: Boolean })
  declare disabled: boolean;

  private _handleClick() {
    this.checked = !this.checked;
    this.dispatchEvent(new CustomEvent('toggle-change', {
      detail: { checked: this.checked },
      bubbles: true,
      composed: true
    }));
  }
}
```

**Vue** (`/lib/src/components/Toggle/vue/index.ts`):
```typescript
export { default as VueToggle } from './VueToggle.vue';

import type { ToggleProps, ToggleChangeEvent } from '../core/_Toggle';

export interface VueToggleProps extends ToggleProps {}

export type { ToggleChangeEvent } from '../core/_Toggle';
```

**React** (`/lib/src/components/Toggle/react/ReactToggle.tsx`):
```typescript
import * as React from 'react';
import { createComponent, type EventName } from '@lit/react';
import { AgToggle, type ToggleProps, type ToggleChangeEvent } from '../core/_Toggle';

export interface ReactToggleProps extends ToggleProps {
  children?: React.ReactNode;
}

export const ReactToggle = createComponent({
  tagName: 'ag-toggle',
  elementClass: AgToggle,
  react: React,
  events: {
    onToggleChange: 'toggle-change' as EventName<ToggleChangeEvent>,
  },
});

export type { ToggleChangeEvent } from '../core/_Toggle';
```

---

## Part 8: Reference Implementations

The following components serve as reference implementations:

1. **Toggle** (`/lib/src/components/Toggle/`) - Simple component, binary state, single event
2. **Tooltip** (`/lib/src/components/Tooltip/`) - Two events (show/hide), positioning
3. **Tabs** (`/lib/src/components/Tabs/`) - Complex state, event with detail payload

**Detailed Refactoring Guide**: See `/lib/src/components/Tooltip/REFACTORING_GUIDE.md` for complete end-to-end example.

---

## Visual Summary: The Pattern

```
┌─────────────────────────────────────────────────────────┐
│ CORE COMPONENT                                          │
│                                                         │
│ export type EventNameEvent = CustomEvent<Detail>       │
│                                                         │
│ export interface ComponentProps {                      │
│   prop?: string;                                       │
│   onEventName?: (event: EventNameEvent) => void;      │
│ }                                                       │
│                                                         │
│ export class Component implements ComponentProps {     │
│   dispatchEvent(new CustomEvent('event-name', {...})) │
│ }                                                       │
└─────────────────────────────────────────────────────────┘
                          ↓
        ┌─────────────────┴─────────────────┐
        ↓                                    ↓
┌──────────────────┐              ┌──────────────────┐
│ VUE WRAPPER      │              │ REACT WRAPPER    │
│                  │              │                  │
│ export interface │              │ export interface │
│ VueComponentProps│              │ ReactComponentProps│
│ extends          │              │ extends Omit<... │
│ ComponentProps   │              │ (if needed)      │
│ {}               │              │                  │
└──────────────────┘              └──────────────────┘
```

**Learn one, understand all.** ✅
