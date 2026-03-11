import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Pagination';

const meta: Meta = {
  title: 'AgnosticUI/Pagination',
  component: 'ag-pagination',
  tags: ['autodocs'],
  render: (args: any) => html`<ag-pagination></ag-pagination>`,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
