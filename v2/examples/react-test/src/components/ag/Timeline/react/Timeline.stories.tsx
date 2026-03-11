import type { Meta, StoryObj } from '@storybook/react';
import { ReactTimeline } from './ReactTimeline';

const meta = {
  title: 'AgnosticUI/Timeline',
  component: ReactTimeline,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
    variant: {
      control: 'select',
      options: ['', 'primary', 'success', 'warning', 'danger', 'monochrome'],
    },
    compact: { control: 'boolean' },
  },
} satisfies Meta<typeof ReactTimeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
