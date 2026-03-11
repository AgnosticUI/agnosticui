import type { Meta, StoryObj } from '@storybook/react';
import { ReactAspectRatio } from './ReactAspectRatio';

const meta = {
  title: 'AgnosticUI/AspectRatio',
  component: ReactAspectRatio,
  tags: ['autodocs'],
} satisfies Meta<typeof ReactAspectRatio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
