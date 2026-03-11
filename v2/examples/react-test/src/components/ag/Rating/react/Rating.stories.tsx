import type { Meta, StoryObj } from '@storybook/react';
import { ReactRating } from './ReactRating';

const meta = {
  title: 'AgnosticUI/Rating',
  component: ReactRating,
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'number', min: 0, max: 5 } },
    readonly: { control: 'boolean' },
    allowClear: { control: 'boolean' },
  },
} satisfies Meta<typeof ReactRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
