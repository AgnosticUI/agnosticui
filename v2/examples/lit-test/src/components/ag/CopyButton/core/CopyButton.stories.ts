import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './CopyButton';

const meta: Meta = {
  title: 'AgnosticUI/CopyButton',
  component: 'ag-copy-button',
  tags: ['autodocs'],
  render: (args: any) => html`<ag-copy-button></ag-copy-button>`,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
