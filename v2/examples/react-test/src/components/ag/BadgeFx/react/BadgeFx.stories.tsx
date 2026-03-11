import type { Meta, StoryObj } from '@storybook/react';
import { ReactBadgeFx } from './ReactBadgeFx';

const meta = {
  title: 'AgnosticUI/BadgeFx',
  component: ReactBadgeFx,
  tags: ['autodocs'],
  args: {
    children: 'BadgeFx',
  },
} satisfies Meta<typeof ReactBadgeFx>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
