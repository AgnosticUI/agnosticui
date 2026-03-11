import type { Meta, StoryObj } from '@storybook/react';
import { ReactEmptyState } from './ReactEmptyState';

const meta = {
  title: 'AgnosticUI/EmptyState',
  component: ReactEmptyState,
  tags: ['autodocs'],
} satisfies Meta<typeof ReactEmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
