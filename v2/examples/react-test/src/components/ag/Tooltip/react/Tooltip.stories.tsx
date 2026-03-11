import type { Meta, StoryObj } from '@storybook/react';
import { ReactTooltip } from './ReactTooltip';

const meta = {
  title: 'AgnosticUI/Tooltip',
  component: ReactTooltip,
  tags: ['autodocs'],
} satisfies Meta<typeof ReactTooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
