import type { Meta, StoryObj } from '@storybook/react';
import { ReactFlex } from './ReactFlex';

const meta = {
  title: 'AgnosticUI/Flex',
  component: ReactFlex,
  tags: ['autodocs'],
} satisfies Meta<typeof ReactFlex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
