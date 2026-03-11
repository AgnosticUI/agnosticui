import type { Meta, StoryObj } from '@storybook/react';
import { ReactAlert } from './ReactAlert';

const meta = {
  title: 'AgnosticUI/Alert',
  component: ReactAlert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['', 'success', 'warning', 'danger', 'info'],
    },
    bordered: { control: 'boolean' },
    rounded: { control: 'boolean' },
    borderedLeft: { control: 'boolean' },
    dismissible: { control: 'boolean' },
  },
  args: {
    children: 'This is an alert message.',
  },
} satisfies Meta<typeof ReactAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
