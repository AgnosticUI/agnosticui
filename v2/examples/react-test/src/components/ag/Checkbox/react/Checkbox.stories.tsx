import type { Meta, StoryObj } from '@storybook/react';
import { ReactCheckbox } from './ReactCheckbox';

const meta = {
  title: 'AgnosticUI/Checkbox',
  component: ReactCheckbox,
  tags: ['autodocs'],
} satisfies Meta<typeof ReactCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
