import type { Meta, StoryObj } from '@storybook/react';
import { ReactSidebarNav } from './ReactSidebarNav';

const meta = {
  title: 'AgnosticUI/SidebarNav',
  component: ReactSidebarNav,
  tags: ['autodocs'],
} satisfies Meta<typeof ReactSidebarNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
