import type { Meta, StoryObj } from '@storybook/react';
import { ReactDivider } from './ReactDivider';

const meta = {
  title: 'AgnosticUI/Divider',
  component: ReactDivider,
  tags: ['autodocs'],
} satisfies Meta<typeof ReactDivider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
