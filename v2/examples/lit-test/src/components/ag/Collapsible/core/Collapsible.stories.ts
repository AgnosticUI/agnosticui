import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Collapsible';

const meta: Meta = {
  title: 'AgnosticUI/Collapsible',
  component: 'ag-collapsible',
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <ag-collapsible>
      <span slot="summary">Toggle details</span>
      <div>Collapsible content goes here.</div>
    </ag-collapsible>
  `,
};
