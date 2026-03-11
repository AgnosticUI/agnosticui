import type { Meta, StoryObj } from '@storybook/react';
import { ReactImage } from './ReactImage';

const meta = {
  title: 'AgnosticUI/Image',
  component: ReactImage,
  tags: ['autodocs'],
} satisfies Meta<typeof ReactImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
