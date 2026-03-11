import type { Meta, StoryObj } from '@storybook/react';
import { ReactBadgeFx } from './ReactBadgeFx';

const meta = {
  title: 'AgnosticUI/BadgeFx',
  component: ReactBadgeFx,
  tags: ['autodocs'],
  argTypes: {
    fx: {
      control: 'select',
      options: ['bounce', 'pulse', 'jelly'],
    },
    fxSpeed: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    fxEase: {
      control: 'select',
      options: ['ease', 'ease-in', 'ease-out', 'ease-in-out', 'bounce', 'spring-sm', 'spring-md', 'spring-lg'],
    },
    fxDisabled: { control: 'boolean' },
  },
  args: {
    fx: 'bounce',
    children: 'BadgeFx',
  },
} satisfies Meta<typeof ReactBadgeFx>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
