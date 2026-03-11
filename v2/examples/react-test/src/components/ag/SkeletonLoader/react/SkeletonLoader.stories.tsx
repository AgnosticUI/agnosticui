import type { Meta, StoryObj } from '@storybook/react';
import { ReactSkeletonLoader } from './ReactSkeletonLoader';

const meta = {
  title: 'AgnosticUI/SkeletonLoader',
  component: ReactSkeletonLoader,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'avatar', 'button', 'card', 'custom'],
    },
    effect: {
      control: 'select',
      options: ['shimmer', 'pulse', 'none'],
    },
  },
} satisfies Meta<typeof ReactSkeletonLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
