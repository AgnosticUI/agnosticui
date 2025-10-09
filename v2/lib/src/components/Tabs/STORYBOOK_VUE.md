# Using Vue Tabs with Storybook

This guide shows how to set up the Vue Tabs component in Storybook with proper event handling.

## Quick Setup

### 1. Import the types and components

```typescript
import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { fn } from "storybook/test";
import { VueTabs, VueTab, VueTabPanel } from "agnosticui-core/tabs/vue";
import type { VueTabsProps, VueTabsPropsWithEvents } from "agnosticui-core/tabs/vue";
```

**Note**: Use `VueTabsPropsWithEvents` for Storybook meta and typed args - it includes event handlers. Use `VueTabsProps` for basic component props.

### 2. Configure the meta with default args

```typescript
const meta = {
  title: "AgnosticUI/Tabs",
  component: VueTabs as any, // Cast to avoid Vue component type issues
  tags: ["autodocs"],
  argTypes: {
    activation: {
      control: "select",
      options: ["manual", "automatic"],
      description: "Determines how tabs are activated.",
    },
    activeTab: {
      control: "number",
      description: "The index of the currently active tab.",
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "The orientation of the tabs.",
    },
    ariaLabel: {
      control: "text",
      description: "ARIA label for the tabs container.",
    },
    ariaLabelledBy: {
      control: "text",
      description: "ID of the element that labels the tabs container.",
    },
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
    onTabChange: fn(), // This creates the action logger
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
