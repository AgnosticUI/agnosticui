import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { fn } from 'storybook/test';
import { ReactTabs, ReactTab, ReactTabPanel, type ReactTabsProps } from 'agnosticui-core/tabs/react';

const meta: Meta<ReactTabsProps> = {
  title: 'AgnosticUI React/Tabs',
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
          onTabChange={(event) => {
            setActiveTab(event.detail.activeTab);
            args.onTabChange?.(event);
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

export const OnTabChangeWithState: Story = {
  args: {
    ariaLabel: 'onTabChange with State',
  },
  render: (args: ReactTabsProps) => {
    const [activeTab, setActiveTab] = useState(0);
    const [eventLog, setEventLog] = useState<string>('Click a tab to see events...');

    return (
      <div>
        <p><strong>onTabChange Event Handler:</strong></p>
        <p>{eventLog}</p>
        <ReactTabs
          {...args}
          activeTab={activeTab}
          onTabChange={(event) => {
            console.log('tab-change event:', event.detail);
            setActiveTab(event.detail.activeTab);
            setEventLog(`Active: ${event.detail.activeTab}, Previous: ${event.detail.previousTab}`);
            args.onTabChange?.(event);
          }}
        >
          <ReactTab slot="tab" panel="panel-1">Tab 1</ReactTab>
          <ReactTab slot="tab" panel="panel-2">Tab 2</ReactTab>
          <ReactTab slot="tab" panel="panel-3">Tab 3</ReactTab>
          <ReactTabPanel slot="panel" id="panel-1">Content for Tab 1</ReactTabPanel>
          <ReactTabPanel slot="panel" id="panel-2">Content for Tab 2</ReactTabPanel>
          <ReactTabPanel slot="panel" id="panel-3">Content for Tab 3</ReactTabPanel>
        </ReactTabs>
      </div>
    );
  },
};

export const ControlledTab: Story = {
  args: {
    ariaLabel: 'Controlled Tab',
  },
  render: (args: ReactTabsProps) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
      <div>
        <p><strong>Controlled Tab Example:</strong></p>
        <div style={{ marginBottom: '1rem' }}>
          <button onClick={() => setActiveTab(0)}>Go to Tab 1</button>{' '}
          <button onClick={() => setActiveTab(1)}>Go to Tab 2</button>{' '}
          <button onClick={() => setActiveTab(2)}>Go to Tab 3</button>
        </div>
        <p>Current Active Tab: {activeTab}</p>
        <ReactTabs
          {...args}
          activeTab={activeTab}
          onTabChange={(event) => {
            setActiveTab(event.detail.activeTab);
            args.onTabChange?.(event);
          }}
        >
          <ReactTab slot="tab" panel="panel-1">Tab 1</ReactTab>
          <ReactTab slot="tab" panel="panel-2">Tab 2</ReactTab>
          <ReactTab slot="tab" panel="panel-3">Tab 3</ReactTab>
          <ReactTabPanel slot="panel" id="panel-1">Content for Tab 1</ReactTabPanel>
          <ReactTabPanel slot="panel" id="panel-2">Content for Tab 2</ReactTabPanel>
          <ReactTabPanel slot="panel" id="panel-3">Content for Tab 3</ReactTabPanel>
        </ReactTabs>
      </div>
    );
  },
};

export const CSSPartsCustomization: Story = {
  args: {
    ariaLabel: 'Customized Tabs',
    className: 'custom-tabs',
  },
  render: (args: ReactTabsProps) => (
    <div>
      <style>{
        `
        .custom-tabs::part(ag-tabs-tablist) {
          border-bottom: 2px solid #bada55;
        }
        .custom-tabs::part(ag-tab) {
          font-family: 'Comic Sans MS', cursive, sans-serif;
          font-size: 1.2rem;
          background-color: #f0f0f0;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
        }
        .custom-tabs::part(ag-tab):hover {
          background-color: #e0e0e0;
        }
        .custom-tabs ag-tab[aria-selected="true"]::part(ag-tab) {
          background-color: #bada55;
          color: #fff;
          border-bottom: 2px solid #bada55;
        }
        .custom-tabs::part(ag-tabs-panels) {
          border: 2px solid #bada55;
          border-top: none;
          padding: 1rem;
        }
        .custom-tabs::part(ag-tab-panel) {
          background-color: #f9f9f9;
        }
        `
      }</style>
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
