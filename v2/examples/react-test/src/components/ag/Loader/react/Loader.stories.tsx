import type { Meta, StoryObj } from '@storybook/react';
import { ReactLoader } from './ReactLoader';

const meta = {
  title: 'AgnosticUI/Loader',
  component: ReactLoader,
  tags: ['autodocs'],
} satisfies Meta<typeof ReactLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
