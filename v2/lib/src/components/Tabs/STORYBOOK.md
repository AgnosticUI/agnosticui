# Using Tabs with Storybook

This guide shows how to set up the Tabs component in Storybook with proper event handling.

## Quick Setup

### 1. Import the types and component

```typescript
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { fn } from 'storybook/test';
import 'agnosticui-core/tabs';
import type { TabsProps } from 'agnosticui-core/tabs';
```

**Note**: Use `TabsProps` for Storybook - it includes both component properties and event handlers!

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
