import type { Meta, StoryObj } from '@storybook/react';
import { ReactHeader } from './ReactHeader';

const meta = {
  title: 'AgnosticUI/Header',
  component: ReactHeader,
  tags: ['autodocs'],
} satisfies Meta<typeof ReactHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
