import type { Meta, StoryObj } from '@storybook/react';
import { ReactPopover } from './ReactPopover';

const meta = {
  title: 'AgnosticUI/Popover',
  component: ReactPopover,
  tags: ['autodocs'],
} satisfies Meta<typeof ReactPopover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
