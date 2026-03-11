import type { Meta, StoryObj } from '@storybook/react';
import { ReactBadge } from './ReactBadge';

const meta = {
  title: 'AgnosticUI/Badge',
  component: ReactBadge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'danger', 'primary', 'info', 'neutral', 'monochrome'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md'],
    },
    dot: { control: 'boolean' },
    interactive: { control: 'boolean' },
  },
  args: {
    children: '5',
  },
} satisfies Meta<typeof ReactBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
