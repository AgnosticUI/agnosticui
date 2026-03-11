import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Breadcrumb';

const meta: Meta = {
  title: 'AgnosticUI/Breadcrumb',
  component: 'ag-breadcrumb',
  tags: ['autodocs'],
  render: (args: any) => html`<ag-breadcrumb></ag-breadcrumb>`,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
