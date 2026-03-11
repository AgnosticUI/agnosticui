import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Tabs';

const meta: Meta = {
  title: 'AgnosticUI/Tabs',
  component: 'ag-tabs',
  tags: ['autodocs'],
  render: (args: any) => html`<ag-tabs></ag-tabs>`,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
