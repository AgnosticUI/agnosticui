import type { Meta, StoryObj } from '@storybook/react';
import { ReactProgressRing } from './ReactProgressRing';

const meta = {
  title: 'AgnosticUI/ProgressRing',
  component: ReactProgressRing,
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'number', min: 0, max: 100 } },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'danger', 'info'],
    },
  },
} satisfies Meta<typeof ReactProgressRing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
