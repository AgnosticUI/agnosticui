import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { fn } from 'storybook/test';
import { ReactTabs, ReactTab, ReactTabPanel, type ReactTabsProps } from 'agnosticui-core/tabs/react';

const meta: Meta<ReactTabsProps> = {
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
            .replace(/<F1\s/g, '<ReactTab ')
            .replace(/<\/F1>/g, '</ReactTab>')
            .replace(/<F2\s/g, '<ReactTabPanel ')
            .replace(/<\/F2>/g, '</ReactTabPanel>');
        },
      },
    },
  },
} satisfies Meta<ReactTabsProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ariaLabel: 'Default Tabs',
  },
  render: (args: ReactTabsProps) => (
    <ReactTabs {...args}>
      <ReactTab slot="tab" panel="panel-1">Tab 1</ReactTab>
      <ReactTab slot="tab" panel="panel-2">Tab 2</ReactTab>
      <ReactTab slot="tab" panel="panel-3">Tab 3</ReactTab>
      <ReactTabPanel slot="panel" id="panel-1">Content for Tab 1</ReactTabPanel>
      <ReactTabPanel slot="panel" id="panel-2">Content for Tab 2</ReactTabPanel>
      <ReactTabPanel slot="panel" id="panel-3">Content for Tab 3</ReactTabPanel>
    </ReactTabs>
  ),
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    ariaLabel: 'Vertical Tabs',
  },
  render: (args: ReactTabsProps) => (
    <ReactTabs {...args}>
      <ReactTab slot="tab" panel="panel-1">Tab 1</ReactTab>
      <ReactTab slot="tab" panel="panel-2">Tab 2</ReactTab>
      <ReactTab slot="tab" panel="panel-3">Tab 3</ReactTab>
      <ReactTabPanel slot="panel" id="panel-1">Content for Tab 1</ReactTabPanel>
      <ReactTabPanel slot="panel" id="panel-2">Content for Tab 2</ReactTabPanel>
      <ReactTabPanel slot="panel" id="panel-3">Content for Tab 3</ReactTabPanel>
    </ReactTabs>
  ),
};

export const AutomaticActivation: Story = {
  args: {
    activation: 'automatic',
    ariaLabel: 'Automatic Activation Tabs',
  },
  render: (args: ReactTabsProps) => (
    <ReactTabs {...args}>
      <ReactTab slot="tab" panel="panel-1">Tab 1</ReactTab>
      <ReactTab slot="tab" panel="panel-2">Tab 2</ReactTab>
      <ReactTab slot="tab" panel="panel-3">Tab 3</ReactTab>
      <ReactTabPanel slot="panel" id="panel-1">Content for Tab 1</ReactTabPanel>
      <ReactTabPanel slot="panel" id="panel-2">Content for Tab 2</ReactTabPanel>
      <ReactTabPanel slot="panel" id="panel-3">Content for Tab 3</ReactTabPanel>
    </ReactTabs>
  ),
};

export const InitialTab: Story = {
  args: {
    activeTab: 2,
    ariaLabel: 'Initial Tab Example',
  },
  render: (args: ReactTabsProps) => (
    <ReactTabs {...args}>
      <ReactTab slot="tab" panel="panel-1">Tab 1</ReactTab>
      <ReactTab slot="tab" panel="panel-2">Tab 2</ReactTab>
      <ReactTab slot="tab" panel="panel-3">Tab 3</ReactTab>
      <ReactTabPanel slot="panel" id="panel-1">Content for Tab 1</ReactTabPanel>
      <ReactTabPanel slot="panel" id="panel-2">Content for Tab 2</ReactTabPanel>
      <ReactTabPanel slot="panel" id="panel-3">Content for Tab 3</ReactTabPanel>
    </ReactTabs>
  ),
};

export const DisabledTab: Story = {
  args: {
    ariaLabel: 'Disabled Tab Example',
  },
  render: (args: ReactTabsProps) => (
    <ReactTabs {...args}>
      <ReactTab slot="tab" panel="panel-1">Tab 1</ReactTab>
      <ReactTab slot="tab" panel="panel-2" disabled>Tab 2 (Disabled)</ReactTab>
      <ReactTab slot="tab" panel="panel-3">Tab 3</ReactTab>
      <ReactTabPanel slot="panel" id="panel-1">Content for Tab 1</ReactTabPanel>
      <ReactTabPanel slot="panel" id="panel-2">Content for Tab 2</ReactTabPanel>
      <ReactTabPanel slot="panel" id="panel-3">Content for Tab 3</ReactTabPanel>
    </ReactTabs>
  ),
};

export const EventTesting: Story = {
  args: {
    ariaLabel: 'Event Testing Tabs',
  },
  render: (args: ReactTabsProps) => {
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
          <ReactTab slot="tab" panel="panel-1">Tab 1</ReactTab>
          <ReactTab slot="tab" panel="panel-2">Tab 2</ReactTab>
          <ReactTab slot="tab" panel="panel-3">Tab 3</ReactTab>
          <ReactTabPanel slot="panel" id="panel-1">Content for Tab 1. Interact to see events.</ReactTabPanel>
          <ReactTabPanel slot="panel" id="panel-2">Content for Tab 2. Interact to see events.</ReactTabPanel>
          <ReactTabPanel slot="panel" id="panel-3">Content for Tab 3. Interact to see events.</ReactTabPanel>
        </ReactTabs>
      </div>
    );
  },
};

export const LabelledBy: Story = {
  args: {
    ariaLabelledBy: 'tabs-heading',
  },
  render: (args: ReactTabsProps) => (
    <div>
      <h2 id="tabs-heading">Tabs controlled by an external label</h2>
      <ReactTabs {...args}>
        <ReactTab slot="tab" panel="panel-1">Tab 1</ReactTab>
        <ReactTab slot="tab" panel="panel-2">Tab 2</ReactTab>
        <ReactTab slot="tab" panel="panel-3">Tab 3</ReactTab>
        <ReactTabPanel slot="panel" id="panel-1">Content for Tab 1</ReactTabPanel>
        <ReactTabPanel slot="panel" id="panel-2">Content for Tab 2</ReactTabPanel>
        <ReactTabPanel slot="panel" id="panel-3">Content for Tab 3</ReactTabPanel>
      </ReactTabs>
    </div>
  ),
};

export const CustomContent: Story = {
  args: {
    ariaLabel: 'Custom Content Tabs',
  },
  render: (args: ReactTabsProps) => (
    <ReactTabs {...args}>
      <ReactTab slot="tab" panel="panel-1">Custom Tab 1</ReactTab>
      <ReactTab slot="tab" panel="panel-2">Custom Tab 2</ReactTab>
      <ReactTabPanel slot="panel" id="panel-1">
        <div>
          <h3>Custom Content</h3>
          <p>This is custom JSX content for Tab 1.</p>
        </div>
      </ReactTabPanel>
      <ReactTabPanel slot="panel" id="panel-2">Content for Tab 2</ReactTabPanel>
    </ReactTabs>
  ),
};
