import type { Meta, StoryObj } from '@storybook/react';
import { ReactRadio } from './ReactRadio';

const meta = {
  title: 'AgnosticUI/Radio',
  component: ReactRadio,
  tags: ['autodocs'],
} satisfies Meta<typeof ReactRadio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
