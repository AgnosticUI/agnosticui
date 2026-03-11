import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Tooltip';

const meta: Meta = {
  title: 'AgnosticUI/Tooltip',
  component: 'ag-tooltip',
  tags: ['autodocs'],
  render: (args: any) => html`<ag-tooltip></ag-tooltip>`,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
