import type { Meta, StoryObj } from '@storybook/react';
import { ReactScrollToButton } from './ReactScrollToButton';

const meta = {
  title: 'AgnosticUI/ScrollToButton',
  component: ReactScrollToButton,
  tags: ['autodocs'],
} satisfies Meta<typeof ReactScrollToButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
