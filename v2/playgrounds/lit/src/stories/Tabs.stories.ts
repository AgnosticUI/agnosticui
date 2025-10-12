import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { fn } from 'storybook/test';
import { useArgs } from 'storybook/preview-api';
import 'agnosticui-core/tabs';
import type { TabsProps, TabChangeEvent } from 'agnosticui-core/tabs';

const meta: Meta<TabsProps> = {
  title: 'AgnosticUI Lit/Tabs',
  component: 'ag-tabs',
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
  },
  args: {
    activation: 'manual',
    activeTab: 0,
    orientation: 'horizontal',
    ariaLabel: 'AgnosticUI Tabs',
    onTabChange: fn(),
  },
};

export default meta;
type Story = StoryObj<TabsProps>;

export const Default: Story = {
  args: {
    ariaLabel: 'Default Tabs',
  },
  render: ({ ariaLabel, onTabChange }) => html`
    <ag-tabs aria-label=${ariaLabel} @tab-change=${(e: CustomEvent) => onTabChange(e.detail)}>
      <ag-tab slot="tab" panel="panel-1">Tab 1</ag-tab>
      <ag-tab slot="tab" panel="panel-2">Tab 2</ag-tab>
      <ag-tab slot="tab" panel="panel-3">Tab 3</ag-tab>
      <ag-tab-panel slot="panel" panel="panel-1">Content for Tab 1</ag-tab-panel>
      <ag-tab-panel slot="panel" panel="panel-2">Content for Tab 2</ag-tab-panel>
      <ag-tab-panel slot="panel" panel="panel-3">Content for Tab 3</ag-tab-panel>
    </ag-tabs>
  `,
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    ariaLabel: 'Vertical Tabs',
  },
  render: ({ orientation, ariaLabel, onTabChange }) => html`
    <ag-tabs orientation=${orientation} aria-label=${ariaLabel} @tab-change=${(e: CustomEvent) => onTabChange(e.detail)}>
      <ag-tab slot="tab" panel="panel-1">Tab 1</ag-tab>
      <ag-tab slot="tab" panel="panel-2">Tab 2</ag-tab>
      <ag-tab slot="tab" panel="panel-3">Tab 3</ag-tab>
      <ag-tab-panel slot="panel" panel="panel-1">Content for Tab 1</ag-tab-panel>
      <ag-tab-panel slot="panel" panel="panel-2">Content for Tab 2</ag-tab-panel>
      <ag-tab-panel slot="panel" panel="panel-3">Content for Tab 3</ag-tab-panel>
    </ag-tabs>
  `,
};

export const AutomaticActivation: Story = {
  args: {
    activation: 'automatic',
    ariaLabel: 'Automatic Activation Tabs',
  },
  render: ({ activation, ariaLabel, onTabChange }) => html`
    <ag-tabs activation=${activation} aria-label=${ariaLabel} @tab-change=${(e: CustomEvent) => onTabChange(e.detail)}>
      <ag-tab slot="tab" panel="panel-1">Tab 1</ag-tab>
      <ag-tab slot="tab" panel="panel-2">Tab 2</ag-tab>
      <ag-tab slot="tab" panel="panel-3">Tab 3</ag-tab>
      <ag-tab-panel slot="panel" panel="panel-1">Content for Tab 1</ag-tab-panel>
      <ag-tab-panel slot="panel" panel="panel-2">Content for Tab 2</ag-tab-panel>
      <ag-tab-panel slot="panel" panel="panel-3">Content for Tab 3</ag-tab-panel>
    </ag-tabs>
  `,
};

export const InitialTab: Story = {
  args: {
    activeTab: 2,
    ariaLabel: 'Initial Tab Example',
  },
  render: ({ activeTab, ariaLabel, onTabChange }) => html`
    <ag-tabs .activeTab=${activeTab} aria-label=${ariaLabel} @tab-change=${(e: CustomEvent) => onTabChange(e.detail)}>
      <ag-tab slot="tab" panel="panel-1">Tab 1</ag-tab>
      <ag-tab slot="tab" panel="panel-2">Tab 2</ag-tab>
      <ag-tab slot="tab" panel="panel-3">Tab 3</ag-tab>
      <ag-tab-panel slot="panel" panel="panel-1">Content for Tab 1</ag-tab-panel>
      <ag-tab-panel slot="panel" panel="panel-2">Content for Tab 2</ag-tab-panel>
      <ag-tab-panel slot="panel" panel="panel-3">Content for Tab 3</ag-tab-panel>
    </ag-tabs>
  `,
};

export const DisabledTab: Story = {
  args: {
    ariaLabel: 'Disabled Tab Example',
  },
  render: ({ ariaLabel, onTabChange }) => html`
    <ag-tabs aria-label=${ariaLabel} @tab-change=${(e: CustomEvent) => onTabChange(e.detail)}>
      <ag-tab slot="tab" panel="panel-1">Tab 1</ag-tab>
      <ag-tab slot="tab" panel="panel-2" disabled>Tab 2 (Disabled)</ag-tab>
      <ag-tab slot="tab" panel="panel-3">Tab 3</ag-tab>
      <ag-tab-panel slot="panel" panel="panel-1">Content for Tab 1</ag-tab-panel>
      <ag-tab-panel slot="panel" panel="panel-2">Content for Tab 2</ag-tab-panel>
      <ag-tab-panel slot="panel" panel="panel-3">Content for Tab 3</ag-tab-panel>
    </ag-tabs>
  `,
};

export const EventTesting: Story = {
  args: {
    ariaLabel: 'Event Testing Tabs',
  },
  render: () => {
    const [args, updateArgs] = useArgs();
    const handleTabChange = (e: TabChangeEvent) => {
      // For storybook, we use the useArgs hook to update the controls
      updateArgs({ activeTab: e.detail.activeTab });
      // Also call the action logger with detail
      args.onTabChange?.(e.detail);
    };
    return html`
      <p>Active Tab Index: ${args.activeTab ?? 0}</p>
      <ag-tabs
        .activeTab=${args.activeTab}
        aria-label=${args.ariaLabel}
        @tab-change=${handleTabChange}
      >
        <ag-tab slot="tab" panel="panel-1">Tab 1</ag-tab>
        <ag-tab slot="tab" panel="panel-2">Tab 2</ag-tab>
        <ag-tab slot="tab" panel="panel-3">Tab 3</ag-tab>
        <ag-tab-panel slot="panel" panel="panel-1">Content for Tab 1. Check Actions tab for tab index.</ag-tab-panel>
        <ag-tab-panel slot="panel" panel="panel-2">Content for Tab 2. Check Actions tab for tab index.</ag-tab-panel>
        <ag-tab-panel slot="panel" panel="panel-3">Content for Tab 3. Check Actions tab for tab index.</ag-tab-panel>
      </ag-tabs>
    `;
  },
};

export const LabelledBy: Story = {
  args: {
    ariaLabel: undefined,
    ariaLabelledBy: 'tabs-heading',
  },
  render: ({ ariaLabelledBy, onTabChange }) => html`
    <div>
      <h2 id="tabs-heading">Tabs controlled by an external label</h2>
      <ag-tabs aria-labelledby=${ariaLabelledBy} @tab-change=${(e: CustomEvent) => onTabChange(e.detail)}>
        <ag-tab slot="tab" panel="panel-1">Tab 1</ag-tab>
        <ag-tab slot="tab" panel="panel-2">Tab 2</ag-tab>
        <ag-tab slot="tab" panel="panel-3">Tab 3</ag-tab>
        <ag-tab-panel slot="panel" panel="panel-1">Content for Tab 1</ag-tab-panel>
        <ag-tab-panel slot="panel" panel="panel-2">Content for Tab 2</ag-tab-panel>
        <ag-tab-panel slot="panel" panel="panel-3">Content for Tab 3</ag-tab-panel>
      </ag-tabs>
    </div>
  `,
};
