import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Menu';

const meta: Meta = {
  title: 'AgnosticUI/Menu',
  component: 'ag-menu',
  tags: ['autodocs'],
  render: (args: any) => html`<ag-menu></ag-menu>`,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
