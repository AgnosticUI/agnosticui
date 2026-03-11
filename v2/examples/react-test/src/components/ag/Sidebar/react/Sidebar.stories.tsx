import type { Meta, StoryObj } from '@storybook/react';
import { ReactSidebar } from './ReactSidebar';

const meta = {
  title: 'AgnosticUI/Sidebar',
  component: ReactSidebar,
  tags: ['autodocs'],
} satisfies Meta<typeof ReactSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
