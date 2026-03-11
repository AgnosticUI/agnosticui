import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Input';

const meta: Meta = {
  title: 'AgnosticUI/Input',
  component: 'ag-input',
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search', 'tel', 'url'],
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
    },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    invalid: { control: 'boolean' },
    required: { control: 'boolean' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    errorMessage: { control: 'text' },
    helpText: { control: 'text' },
  },
  render: (args: any) => html`<ag-input></ag-input>`,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
