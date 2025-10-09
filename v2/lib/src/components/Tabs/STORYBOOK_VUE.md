# Using Vue Tabs with Storybook

This guide shows how to set up the Vue Tabs component in Storybook with proper event handling.

## Understanding the Interface Pattern

AgnosticUI v2 components use a **single Props interface** that includes both component properties and event handlers. This makes the API simpler and more predictable.

### How It Works

The core component defines its complete public API in one interface:

```typescript
// In /lib/src/components/Tabs/core/_Tabs.ts
export interface TabsProps {
  activation?: 'manual' | 'automatic';
  activeTab?: number;
  orientation?: 'horizontal' | 'vertical';
  // Event handlers are part of the base interface
  onTabChange?: (event: TabChangeEvent) => void;
}

export class Tabs extends LitElement implements TabsProps {
  // implements enforces that the class has all TabsProps properties
}
```

When the component dispatches an event:
```typescript
this.dispatchEvent(new CustomEvent('tab-change', {
  detail: { activeTab: 1, previousTab: 0 }
}));
```

It maps directly to the `onTabChange` handler in the Props interface. This pattern is consistent across all AgnosticUI v2 components.

### Vue-Specific Types

Vue wrappers define their own interface versions:

```typescript
// In /lib/src/components/Tabs/vue/index.ts
export interface VueTabsProps {
  activation?: TabsActivation;
  activeTab?: number;
  orientation?: TabsOrientation;
  ariaLabel?: string;
  ariaLabelledBy?: string;
}

// For programmatic usage (Storybook, testing, imperative APIs)
export interface VueTabsPropsWithEvents extends VueTabsProps {
  onTabChange?: (detail: TabChangeEventDetail) => void;
}
```

**Note**: Vue component templates use `@tab-change` event binding, but for programmatic usage (like Storybook args), we use `VueTabsPropsWithEvents` which includes the `onTabChange` handler.

### Real-World Example: Complete Tooltip Refactoring

The Tooltip component demonstrates this pattern end-to-end. Here's how Vue derives from core:

```typescript
// Core defines the complete API
export interface TooltipProps {
  content?: string;
  disabled?: boolean;
  onShow?: (event: TooltipShowEvent) => void;
  onHide?: (event: TooltipHideEvent) => void;
}

// Vue derives from core, omitting event handlers for template usage
export interface VueTooltipProps extends Omit<TooltipProps, 'onShow' | 'onHide'> {
  // Inherits: content, placement, distance, skidding, trigger, disabled
}

// Add event handlers back for programmatic usage (Storybook, tests)
export interface VueTooltipPropsWithEvents extends VueTooltipProps {
  onShow?: (event: TooltipShowEvent) => void;
  onHide?: (event: TooltipHideEvent) => void;
}
```

**For the complete end-to-end refactoring process**, see:
- `/lib/src/components/Tooltip/REFACTORING_GUIDE.md` - Complete walkthrough
- Shows: Core → Vue wrapper → React wrapper → All Storybook stories
- Includes event flow diagrams, type derivation patterns, and testing examples

## Quick Setup

### 1. Import the types and components

```typescript
import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { fn } from "storybook/test";
import { VueTabs, VueTab, VueTabPanel } from "agnosticui-core/tabs/vue";
import type { VueTabsPropsWithEvents } from "agnosticui-core/tabs/vue";
```

**Note**: Use `VueTabsPropsWithEvents` for Storybook - it includes event handlers for programmatic usage. In templates, use `@tab-change` event binding as usual.

### 2. Configure the meta with default args

```typescript
const meta = {
  title: "AgnosticUI/Tabs",
  component: VueTabs as any,
  tags: ["autodocs"],
  argTypes: {
    // ... your argTypes
    onTabChange: {
      action: "tab-change",
      description: "Emitted when the active tab changes.",
    },
  },
  args: {
    activation: "manual",
    activeTab: 0,
    orientation: "horizontal",
    ariaLabel: "AgnosticUI Tabs",
    onTabChange: fn(), // Creates the action logger
  },
} satisfies Meta<VueTabsPropsWithEvents>;

export default meta;
type Story = StoryObj<typeof meta>;
```

### 3. Bind the event in your stories

```typescript
export const Default: Story = {
  args: {
    ariaLabel: "Default Tabs",
  },
  render: (args) => ({
    components: { VueTabs, VueTab, VueTabPanel },
    setup() {
      return { args };
    },
    template: `
      <VueTabs
        :aria-label="args.ariaLabel"
        @tab-change="args.onTabChange"
      >
        <VueTab panel="panel-1">Tab 1</VueTab>
        <VueTab panel="panel-2">Tab 2</VueTab>
        <VueTabPanel panel="panel-1">Content for Tab 1</VueTabPanel>
        <VueTabPanel panel="panel-2">Content for Tab 2</VueTabPanel>
      </VueTabs>
    `,
  }),
};
```

## Event Details

The `@tab-change` event provides the following details:

```typescript
interface TabChangeEventDetail {
  activeTab: number;      // Index of the newly active tab
  previousTab: number;    // Index of the previously active tab
}
```

## Complete Example

See `/playgrounds/vue/src/stories/Tabs.stories.ts` for a complete working example.

## Using with Reactive State

For interactive examples that update the active tab:

```typescript
export const EventTesting: Story = {
  args: {
    ariaLabel: 'Event Testing Tabs',
  },
  render: (args: VueTabsPropsWithEvents) => ({
    components: { VueTabs, VueTab, VueTabPanel },
    setup() {
      const activeTab = ref(args.activeTab || 0);
      const eventMessage = ref('');

      const onTabChange = (detail: { activeTab: number; previousTab: number }) => {
        activeTab.value = detail.activeTab;
        eventMessage.value = `Tab changed from ${detail.previousTab} to ${detail.activeTab}`;
        args.onTabChange?.(detail);
      };

      return { args, activeTab, onTabChange, eventMessage };
    },
    template: `
      <div>
        <VueTabs
          :active-tab="activeTab"
          :aria-label="args.ariaLabel"
          @tab-change="onTabChange"
        >
          <VueTab panel="panel-1">Tab 1</VueTab>
          <VueTab panel="panel-2">Tab 2</VueTab>
          <VueTab panel="panel-3">Tab 3</VueTab>
          <VueTabPanel panel="panel-1">Content for Tab 1</VueTabPanel>
          <VueTabPanel panel="panel-2">Content for Tab 2</VueTabPanel>
          <VueTabPanel panel="panel-3">Content for Tab 3</VueTabPanel>
        </VueTabs>
        <p v-if="eventMessage" style="margin-top: 1rem; color: green;">{{ eventMessage }}</p>
      </div>
    `,
  }),
};
```
