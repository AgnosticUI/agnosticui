import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Sidebar';

const meta: Meta = {
  title: 'AgnosticUI/Sidebar',
  component: 'ag-sidebar',
  tags: ['autodocs'],
  render: (args: any) => html`<ag-sidebar></ag-sidebar>`,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
