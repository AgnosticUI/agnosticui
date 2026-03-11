import type { Meta, StoryObj } from '@storybook/react';
import { ReactIcon } from './ReactIcon';

const meta = {
  title: 'AgnosticUI/Icon',
  component: ReactIcon,
  tags: ['autodocs'],
} satisfies Meta<typeof ReactIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
