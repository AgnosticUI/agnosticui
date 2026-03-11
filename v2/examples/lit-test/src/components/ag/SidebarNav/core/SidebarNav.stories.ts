import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './SidebarNav';

const meta: Meta = {
  title: 'AgnosticUI/SidebarNav',
  component: 'ag-sidebar-nav',
  tags: ['autodocs'],
  render: (args: any) => html`<ag-sidebar-nav></ag-sidebar-nav>`,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
