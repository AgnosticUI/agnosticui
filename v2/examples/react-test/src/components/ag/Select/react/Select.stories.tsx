import type { Meta, StoryObj } from '@storybook/react';
import { ReactSelect } from './ReactSelect';

const meta = {
  title: 'AgnosticUI/Select',
  component: ReactSelect,
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
} satisfies Meta<typeof ReactSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
