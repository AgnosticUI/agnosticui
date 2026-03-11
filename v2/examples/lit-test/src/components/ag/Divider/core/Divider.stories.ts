import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Divider';

const meta: Meta = {
  title: 'AgnosticUI/Divider',
  component: 'ag-divider',
  tags: ['autodocs'],
  render: (args: any) => html`<ag-divider></ag-divider>`,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
