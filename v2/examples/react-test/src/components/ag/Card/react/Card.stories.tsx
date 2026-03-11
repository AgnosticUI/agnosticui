import type { Meta, StoryObj } from '@storybook/react';
import { ReactCard } from './ReactCard';

const meta = {
  title: 'AgnosticUI/Card',
  component: ReactCard,
  tags: ['autodocs'],
  args: {
    children: 'Card content goes here.',
  },
} satisfies Meta<typeof ReactCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
