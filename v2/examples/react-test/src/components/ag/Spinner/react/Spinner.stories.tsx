import type { Meta, StoryObj } from '@storybook/react';
import { ReactSpinner } from './ReactSpinner';

const meta = {
  title: 'AgnosticUI/Spinner',
  component: ReactSpinner,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
} satisfies Meta<typeof ReactSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
