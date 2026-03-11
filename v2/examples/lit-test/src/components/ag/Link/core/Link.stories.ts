import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Link';

const meta: Meta = {
  title: 'AgnosticUI/Link',
  component: 'ag-link',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['', 'primary', 'success', 'warning', 'danger', 'monochrome'],
    },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: {
    label: 'Link',
  },
  render: (args: any) => html`<ag-link>${args.label}</ag-link>`,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
