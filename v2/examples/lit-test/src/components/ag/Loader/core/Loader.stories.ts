import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Loader';

const meta: Meta = {
  title: 'AgnosticUI/Loader',
  component: 'ag-loader',
  tags: ['autodocs'],
  render: (args: any) => html`<ag-loader></ag-loader>`,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
