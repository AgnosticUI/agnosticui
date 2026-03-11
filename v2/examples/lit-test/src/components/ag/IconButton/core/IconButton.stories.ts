import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './IconButton';

const meta: Meta = {
  title: 'AgnosticUI/IconButton',
  component: 'ag-icon-button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'ghost', 'monochrome'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
  render: (args: any) => html`<ag-icon-button></ag-icon-button>`,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
