import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Alert';

const meta: Meta = {
  title: 'AgnosticUI/Alert',
  component: 'ag-alert',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['', 'success', 'warning', 'danger', 'info'],
    },
    bordered: { control: 'boolean' },
    rounded: { control: 'boolean' },
    borderedLeft: { control: 'boolean' },
    dismissible: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: {
    label: 'Alert',
  },
  render: (args: any) => html`<ag-alert>${args.label}</ag-alert>`,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
