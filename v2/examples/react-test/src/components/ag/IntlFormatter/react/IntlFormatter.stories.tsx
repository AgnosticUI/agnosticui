import type { Meta, StoryObj } from '@storybook/react';
import { ReactIntlFormatter } from './ReactIntlFormatter';

const meta = {
  title: 'AgnosticUI/IntlFormatter',
  component: ReactIntlFormatter,
  tags: ['autodocs'],
} satisfies Meta<typeof ReactIntlFormatter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
