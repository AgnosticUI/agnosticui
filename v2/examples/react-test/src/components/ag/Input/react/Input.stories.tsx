import type { Meta, StoryObj } from '@storybook/react';
import { ReactInput } from './ReactInput';

const meta = {
  title: 'AgnosticUI/Input',
  component: ReactInput,
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
} satisfies Meta<typeof ReactInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
