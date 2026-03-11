import type { Meta, StoryObj } from '@storybook/react';
import { ReactBreadcrumb } from './ReactBreadcrumb';

const meta = {
  title: 'AgnosticUI/Breadcrumb',
  component: ReactBreadcrumb,
  tags: ['autodocs'],
} satisfies Meta<typeof ReactBreadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
