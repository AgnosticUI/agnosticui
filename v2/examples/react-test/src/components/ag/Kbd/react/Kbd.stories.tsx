import type { Meta, StoryObj } from '@storybook/react';
import { ReactKbd } from './ReactKbd';

const meta = {
  title: 'AgnosticUI/Kbd',
  component: ReactKbd,
  tags: ['autodocs'],
  argTypes: {
    bordered: { control: 'boolean' },
    background: { control: 'boolean' },
  },
  args: {
    children: 'Ctrl',
  },
} satisfies Meta<typeof ReactKbd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
