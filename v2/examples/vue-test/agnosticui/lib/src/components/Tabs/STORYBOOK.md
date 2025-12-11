# Using Tabs with Storybook

This guide shows how to set up the Tabs component in Storybook with proper event handling.

## Understanding the Interface Pattern

AgnosticUI v2 components use a **single Props interface** that includes both component properties and event handlers. This is simpler and more maintainable than having separate interfaces.

### The Pattern Explained

```typescript
// ✅ Clean: Single interface with everything
export interface TabsProps {
  activation?: 'manual' | 'automatic';
  activeTab?: number;
  orientation?: 'horizontal' | 'vertical';
  // Event handlers are part of the base interface
  onTabChange?: (event: TabChangeEvent) => void;
}

// The component class implements the interface to enforce the contract
export class Tabs extends LitElement implements TabsProps {
  // All properties from TabsProps must be present
  @property({ type: String })
  declare activation: 'manual' | 'automatic';

  // When the component dispatches an event...
  this.dispatchEvent(new CustomEvent('tab-change', { detail: { ... } }));
  // ...it maps directly to the onTabChange handler in the Props interface
}
```

### Why This Matters for Consumers

1. **One interface to import**: No need to choose between `Props` and `PropsWithEvents`
2. **Type safety**: The `implements` keyword ensures the component actually has all declared properties
3. **Clear event mapping**: `dispatchEvent('tab-change')` → `onTabChange` prop
4. **Framework-agnostic**: The same pattern works across Lit, React, and Vue

### Real-World Example: Complete Tooltip Refactoring

The Tooltip component demonstrates this pattern end-to-end, from core → Vue/React → Storybook stories.

**Quick example** - Core component:
```typescript
export interface TooltipProps {
  content?: string;
  placement?: Placement;
  disabled?: boolean;
  // Event handlers included in base interface
  onShow?: (event: TooltipShowEvent) => void;
  onHide?: (event: TooltipHideEvent) => void;
}

export class Tooltip extends LitElement implements TooltipProps {
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

**For the complete end-to-end refactoring process**, see:
- `/lib/src/components/Tooltip/REFACTORING_GUIDE.md` - Step-by-step guide with code examples
- Shows how to refactor: Core → Vue wrapper → React wrapper → All three Storybook stories
- Includes event flow diagrams and type derivation patterns

## Quick Setup

### 1. Import the types and component

```typescript
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { fn } from 'storybook/test';
import 'agnosticui-core/tabs';
import type { TabsProps } from 'agnosticui-core/tabs';
```

**Note**: `TabsProps` includes both component properties and event handlers - there's only one interface to import!

### 2. Configure the meta with default args

```typescript
const meta: Meta<TabsProps> = {
  title: 'Components/Tabs',
  component: 'ag-tabs',
  tags: ['autodocs'],
  argTypes: {
    // ... your argTypes
  },
  args: {
    activation: 'manual',
    activeTab: 0,
    orientation: 'horizontal',
    ariaLabel: 'AgnosticUI Tabs',
    onTabChange: fn(), // This creates the action logger
  },
};

export default meta;
type Story = StoryObj<TabsProps>;
```

### 3. Bind the event in your stories

```typescript
export const Default: Story = {
  args: {
    ariaLabel: 'Default Tabs',
  },
  render: ({ ariaLabel, onTabChange }) => html`
    <ag-tabs aria-label=${ariaLabel} @tab-change=${onTabChange}>
      <ag-tab slot="tab" panel="panel-1">Tab 1</ag-tab>
      <ag-tab slot="tab" panel="panel-2">Tab 2</ag-tab>
      <ag-tab-panel slot="panel" panel="panel-1">Content 1</ag-tab-panel>
      <ag-tab-panel slot="panel" panel="panel-2">Content 2</ag-tab-panel>
    </ag-tabs>
  `,
};
```

## Event Details

The `tab-change` event provides the following details:

```typescript
interface TabChangeEventDetail {
  activeTab: number;      // Index of the newly active tab
  previousTab: number;    // Index of the previously active tab
}
```

## Complete Example

See `/playgrounds/lit/src/stories/Tabs.stories.ts` for a complete working example.
