import type { Meta, StoryObj } from '@storybook/react';
import { ReactMark } from './ReactMark';

const meta = {
  title: 'AgnosticUI/Mark',
  component: ReactMark,
  tags: ['autodocs'],
  args: {
    children: 'Highlighted text',
  },
} satisfies Meta<typeof ReactMark>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
