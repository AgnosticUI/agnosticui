import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { fn } from 'storybook/test';
import { ReactTabs, Tab, TabPanel, type ReactTabsPropsWithEvents } from 'agnosticui-core/tabs/react';

const meta: Meta<ReactTabsPropsWithEvents> = {
  title: 'AgnosticUI/Tabs',
  component: ReactTabs,
  tags: ['autodocs'],
  argTypes: {
    activation: {
      control: 'select',
      options: ['manual', 'automatic'],
      description: 'Determines how tabs are activated (manual or automatic).',
    },
    activeTab: {
      control: 'number',
      description: 'The index of the currently active tab (0-based).',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the tabs (horizontal or vertical).',
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
      description: 'Emitted when the active tab changes, with { activeTab, previousTab } payload.',
    },
    className: {
      control: 'text',
      description: 'CSS class for additional styling.',
    },
    id: {
      control: 'text',
      description: 'ID for the tabs container element.',
    },
  },
  args: {
    activation: 'manual',
    activeTab: 0,
    orientation: 'horizontal',
    ariaLabel: 'AgnosticUI Tabs',
    className: '',
    id: '',
    onTabChange: fn(),
  },
  parameters: {
    actions: {
      handles: ['tab-change'],
    },
    docs: {
      source: {
        state: 'open',
        transform: (src: string) => {
          return src
            .replace(/<F\s/g, '<ReactTabs ')
            .replace(/<\/F>/g, '</ReactTabs>')
            .replace(/<F1\s/g, '<Tab ')
            .replace(/<\/F1>/g, '</Tab>')
            .replace(/<F2\s/g, '<TabPanel ')
            .replace(/<\/F2>/g, '</TabPanel>');
        },
      },
    },
  },
} satisfies Meta<ReactTabsPropsWithEvents>;

export default meta;
type Story = StoryObj<typeof meta>;

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

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    ariaLabel: 'Vertical Tabs',
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

export const AutomaticActivation: Story = {
  args: {
    activation: 'automatic',
    ariaLabel: 'Automatic Activation Tabs',
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

export const InitialTab: Story = {
  args: {
    activeTab: 2,
    ariaLabel: 'Initial Tab Example',
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

export const DisabledTab: Story = {
  args: {
    ariaLabel: 'Disabled Tab Example',
  },
  render: (args: ReactTabsPropsWithEvents) => (
    <ReactTabs {...args}>
      <Tab panel="panel-1">Tab 1</Tab>
      <Tab panel="panel-2" disabled>Tab 2 (Disabled)</Tab>
      <Tab panel="panel-3">Tab 3</Tab>
      <TabPanel id="panel-1">Content for Tab 1</TabPanel>
      <TabPanel id="panel-2">Content for Tab 2</TabPanel>
      <TabPanel id="panel-3">Content for Tab 3</TabPanel>
    </ReactTabs>
  ),
};

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

export const LabelledBy: Story = {
  args: {
    ariaLabelledBy: 'tabs-heading',
  },
  render: (args: ReactTabsPropsWithEvents) => (
    <div>
      <h2 id="tabs-heading">Tabs controlled by an external label</h2>
      <ReactTabs {...args}>
        <Tab panel="panel-1">Tab 1</Tab>
        <Tab panel="panel-2">Tab 2</Tab>
        <Tab panel="panel-3">Tab 3</Tab>
        <TabPanel id="panel-1">Content for Tab 1</TabPanel>
        <TabPanel id="panel-2">Content for Tab 2</TabPanel>
        <TabPanel id="panel-3">Content for Tab 3</TabPanel>
      </ReactTabs>
    </div>
  ),
};

export const CustomContent: Story = {
  args: {
    ariaLabel: 'Custom Content Tabs',
  },
  render: (args: ReactTabsPropsWithEvents) => (
    <ReactTabs {...args}>
      <Tab panel="panel-1">Custom Tab 1</Tab>
      <Tab panel="panel-2">Custom Tab 2</Tab>
      <TabPanel id="panel-1">
        <div>
          <h3>Custom Content</h3>
          <p>This is custom JSX content for Tab 1.</p>
        </div>
      </TabPanel>
      <TabPanel id="panel-2">Content for Tab 2</TabPanel>
    </ReactTabs>
  ),
};
