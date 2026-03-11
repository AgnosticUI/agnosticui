import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './EmptyState';

const meta: Meta = {
  title: 'AgnosticUI/EmptyState',
  component: 'ag-empty-state',
  tags: ['autodocs'],
  render: (args: any) => html`<ag-empty-state></ag-empty-state>`,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
