import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Badge';

const meta: Meta = {
  title: 'AgnosticUI/Badge',
  component: 'ag-badge',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'danger', 'primary', 'info', 'neutral', 'monochrome'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md'],
    },
    dot: { control: 'boolean' },
    interactive: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: {
    label: 'Badge',
  },
  render: (args: any) => html`<ag-badge>${args.label}</ag-badge>`,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
