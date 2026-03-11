import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Tabs';

const meta: Meta = {
  title: 'AgnosticUI/Tabs',
  component: 'ag-tabs',
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
    activation: { control: 'select', options: ['manual', 'automatic'] },
  },
  args: { orientation: 'horizontal', activation: 'manual' },
  render: (args: any) => html`
    <ag-tabs
      aria-label="Example Tabs"
      .orientation=${args.orientation}
      .activation=${args.activation}
    >
      <ag-tab slot="tab" panel="p1">Overview</ag-tab>
      <ag-tab slot="tab" panel="p2">Features</ag-tab>
      <ag-tab slot="tab" panel="p3">Pricing</ag-tab>
      <ag-tab-panel slot="panel" panel="p1">
        <div style="padding: 1rem;">
          <h3>Overview</h3>
          <p>AgnosticUI is a framework-agnostic component library that works with React, Vue, and Lit.</p>
        </div>
      </ag-tab-panel>
      <ag-tab-panel slot="panel" panel="p2">
        <div style="padding: 1rem;">
          <h3>Features</h3>
          <ul><li>Framework agnostic</li><li>Accessible by default</li><li>Themeable via CSS tokens</li></ul>
        </div>
      </ag-tab-panel>
      <ag-tab-panel slot="panel" panel="p3">
        <div style="padding: 1rem;">
          <h3>Pricing</h3>
          <p>Free and open source under the Apache 2.0 license.</p>
        </div>
      </ag-tab-panel>
    </ag-tabs>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const Vertical: Story = { args: { orientation: 'vertical' } };
