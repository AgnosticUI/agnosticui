import type { Meta, StoryObj } from '@storybook/react';
import { ReactAvatar } from './ReactAvatar';

const meta = {
  title: 'AgnosticUI/Avatar',
  component: ReactAvatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    shape: {
      control: 'select',
      options: ['circle', 'square', 'rounded'],
    },
    variant: {
      control: 'select',
      options: ['', 'primary', 'success', 'warning', 'danger'],
    },
  },
} satisfies Meta<typeof ReactAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
