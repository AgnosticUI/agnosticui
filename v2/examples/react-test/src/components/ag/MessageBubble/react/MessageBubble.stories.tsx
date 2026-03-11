import type { Meta, StoryObj } from '@storybook/react';
import { ReactMessageBubble } from './ReactMessageBubble';

const meta = {
  title: 'AgnosticUI/MessageBubble',
  component: ReactMessageBubble,
  tags: ['autodocs'],
  args: {
    children: 'Hello there!',
  },
} satisfies Meta<typeof ReactMessageBubble>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
