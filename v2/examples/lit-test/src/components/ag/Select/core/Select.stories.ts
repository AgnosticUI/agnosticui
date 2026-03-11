import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Select';

const meta: Meta = {
  title: 'AgnosticUI/Select',
  component: 'ag-select',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
    },
    disabled: { control: 'boolean' },
    multiple: { control: 'boolean' },
    invalid: { control: 'boolean' },
    required: { control: 'boolean' },
  },
  render: (args: any) => html`<ag-select></ag-select>`,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
