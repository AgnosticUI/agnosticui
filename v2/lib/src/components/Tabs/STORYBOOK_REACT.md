# Using React Tabs with Storybook

This guide shows how to set up the React Tabs component in Storybook with proper event handling.

## Quick Setup

### 1. Import the types and components

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { ReactTabs, Tab, TabPanel, type ReactTabsPropsWithEvents } from 'agnosticui-core/tabs/react';
```

**Note**: Use `ReactTabsPropsWithEvents` for Storybook - it includes both component properties and event handlers!

### 2. Configure the meta with default args

```typescript
const meta: Meta<ReactTabsPropsWithEvents> = {
  title: 'Components/Tabs',
  component: ReactTabs,
  tags: ['autodocs'],
  argTypes: {
    activation: {
      control: 'select',
      options: ['manual', 'automatic'],
      description: 'Determines how tabs are activated.',
    },
    activeTab: {
      control: 'number',
      description: 'The index of the currently active tab.',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the tabs.',
    },
    ariaLabel: {
      control: 'text',
      description: 'ARIA label for the tabs container.',
    },
    ariaLabelledBy: {
      control: 'text',
      description: 'ID of the element that labels the tabs container.',
    },
    onTabChange: {
      action: 'tab-change',
      description: 'Emitted when the active tab changes.',
    },
  },
  args: {
    activation: 'manual',
    activeTab: 0,
    orientation: 'horizontal',
    ariaLabel: 'AgnosticUI Tabs',
    onTabChange: fn(), // This creates the action logger
  },
} satisfies Meta<ReactTabsPropsWithEvents>;

export default meta;
type Story = StoryObj<typeof meta>;
```

### 3. Create stories

```typescript
export const Default: Story = {
  args: {
    ariaLabel: 'Default Tabs',
  },
  render: (args: ReactTabsPropsWithEvents) => (
    <ReactTabs {...args}>
      <Tab panel="panel-1">Tab 1</Tab>
      <Tab panel="panel-2">Tab 2</Tab>
      <Tab panel="panel-3">Tab 3</Tab>
      <TabPanel id="panel-1">Content for Tab 1</TabPanel>
      <TabPanel id="panel-2">Content for Tab 2</TabPanel>
      <TabPanel id="panel-3">Content for Tab 3</TabPanel>
    </ReactTabs>
  ),
};
```

## Event Details

The `onTabChange` event provides the following details:

```typescript
interface TabChangeEventDetail {
  activeTab: number;      // Index of the newly active tab
  previousTab: number;    // Index of the previously active tab
}
```

## Using with Reactive State

For interactive examples that update the active tab:

```typescript
export const EventTesting: Story = {
  args: {
    ariaLabel: 'Event Testing Tabs',
  },
  render: (args: ReactTabsPropsWithEvents) => {
    const [activeTab, setActiveTab] = useState(0);
    return (
      <div>
        <p>Active Tab Index: {activeTab}</p>
        <ReactTabs
          {...args}
          activeTab={activeTab}
          onTabChange={(detail) => {
            setActiveTab(detail.activeTab);
            args.onTabChange?.(detail);
          }}
        >
          <Tab panel="panel-1">Tab 1</Tab>
          <Tab panel="panel-2">Tab 2</Tab>
          <Tab panel="panel-3">Tab 3</Tab>
          <TabPanel id="panel-1">Content for Tab 1. Interact to see events.</TabPanel>
          <TabPanel id="panel-2">Content for Tab 2. Interact to see events.</TabPanel>
          <TabPanel id="panel-3">Content for Tab 3. Interact to see events.</TabPanel>
        </ReactTabs>
      </div>
    );
  },
};
```

## Important Notes

### Panel IDs
The `Tab` component uses the `panel` prop to specify which panel it controls, and the `TabPanel` component uses the `id` prop. These must match:

```typescript
<Tab panel="panel-1">Tab 1</Tab>
<TabPanel id="panel-1">Content for Tab 1</TabPanel>
```

### Ref Access
You can access the underlying web component using refs:

```typescript
const tabsRef = useRef<AgnosticTabsElement>(null);

<ReactTabs ref={tabsRef} {...args}>
  {/* ... */}
</ReactTabs>

// Later, you can call methods:
// tabsRef.current?.selectTab(2);
```

## Complete Example

See `/playgrounds/react/src/stories/Tabs.stories.tsx` for a complete working example.
