import type { Meta, StoryObj } from '@storybook/react';
import { ReactCopyButton } from './ReactCopyButton';

const meta = {
  title: 'AgnosticUI/CopyButton',
  component: ReactCopyButton,
  tags: ['autodocs'],
} satisfies Meta<typeof ReactCopyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
