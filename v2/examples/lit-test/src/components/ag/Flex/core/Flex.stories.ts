import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './index';

const meta: Meta = {
  title: 'AgnosticUI/Flex',
  component: 'ag-flex-row',
  tags: ['autodocs'],
  render: () => html`
    <ag-flex-row style="--flex-gap: 1rem">
      <div style="padding: 1rem; background: #e0e7ff; border: 1px solid #6366f1;">Item 1</div>
      <div style="padding: 1rem; background: #dbeafe; border: 1px solid #3b82f6;">Item 2</div>
      <div style="padding: 1rem; background: #ddd6fe; border: 1px solid #8b5cf6;">Item 3</div>
    </ag-flex-row>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const Column: Story = {
  render: () => html`
    <ag-flex-col style="--flex-gap: 1rem">
      <div style="padding: 1rem; background: #fef3c7; border: 1px solid #f59e0b;">Row 1</div>
      <div style="padding: 1rem; background: #fed7aa; border: 1px solid #ea580c;">Row 2</div>
      <div style="padding: 1rem; background: #fecaca; border: 1px solid #ef4444;">Row 3</div>
    </ag-flex-col>
  `,
};
