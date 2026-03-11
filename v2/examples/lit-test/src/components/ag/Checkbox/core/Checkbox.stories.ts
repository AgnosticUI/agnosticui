import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Checkbox';

const meta: Meta = {
  title: 'AgnosticUI/Checkbox',
  component: 'ag-checkbox',
  tags: ['autodocs'],
  render: (args: any) => html`<ag-checkbox></ag-checkbox>`,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
