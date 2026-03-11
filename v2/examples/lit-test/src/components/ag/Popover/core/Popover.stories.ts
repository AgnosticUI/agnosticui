import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Popover';

const meta: Meta = {
  title: 'AgnosticUI/Popover',
  component: 'ag-popover',
  tags: ['autodocs'],
  render: (args: any) => html`<ag-popover></ag-popover>`,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
