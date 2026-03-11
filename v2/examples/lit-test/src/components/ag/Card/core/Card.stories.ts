import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Card';

const meta: Meta = {
  title: 'AgnosticUI/Card',
  component: 'ag-card',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
  },
  args: {
    label: 'Card',
  },
  render: (args: any) => html`<ag-card>${args.label}</ag-card>`,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
