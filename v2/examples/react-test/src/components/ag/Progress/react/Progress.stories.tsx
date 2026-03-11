import type { Meta, StoryObj } from '@storybook/react';
import { ReactProgress } from './ReactProgress';

const meta = {
  title: 'AgnosticUI/Progress',
  component: ReactProgress,
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'number', min: 0, max: 100 } },
    max: { control: { type: 'number' } },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
} satisfies Meta<typeof ReactProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
