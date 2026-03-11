import type { Meta, StoryObj } from '@storybook/react';
import { ReactVisuallyHidden } from './ReactVisuallyHidden';

const meta = {
  title: 'AgnosticUI/VisuallyHidden',
  component: ReactVisuallyHidden,
  tags: ['autodocs'],
} satisfies Meta<typeof ReactVisuallyHidden>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
