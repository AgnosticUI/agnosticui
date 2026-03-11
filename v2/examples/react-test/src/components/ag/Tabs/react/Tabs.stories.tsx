import type { Meta, StoryObj } from '@storybook/react';
import { ReactTabs } from './ReactTabs';

const meta = {
  title: 'AgnosticUI/Tabs',
  component: ReactTabs,
  tags: ['autodocs'],
} satisfies Meta<typeof ReactTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
