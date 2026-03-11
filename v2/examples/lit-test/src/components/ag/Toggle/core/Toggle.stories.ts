import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Toggle';

const meta: Meta = {
  title: 'AgnosticUI/Toggle',
  component: 'ag-toggle',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'danger', 'monochrome'],
    },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    invalid: { control: 'boolean' },
  },
  render: (args: any) => html`<ag-toggle></ag-toggle>`,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
