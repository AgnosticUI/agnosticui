import type { Meta, StoryObj } from '@storybook/react';
import { ReactMenu } from './ReactMenu';

const meta = {
  title: 'AgnosticUI/Menu',
  component: ReactMenu,
  tags: ['autodocs'],
} satisfies Meta<typeof ReactMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
