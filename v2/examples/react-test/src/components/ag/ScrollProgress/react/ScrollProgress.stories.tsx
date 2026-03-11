import type { Meta, StoryObj } from '@storybook/react';
import { ReactScrollProgress } from './ReactScrollProgress';

const meta = {
  title: 'AgnosticUI/ScrollProgress',
  component: ReactScrollProgress,
  tags: ['autodocs'],
} satisfies Meta<typeof ReactScrollProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
