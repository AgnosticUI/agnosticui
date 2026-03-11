import type { Meta, StoryObj } from '@storybook/react';
import { ReactPagination } from './ReactPagination';

const meta = {
  title: 'AgnosticUI/Pagination',
  component: ReactPagination,
  tags: ['autodocs'],
} satisfies Meta<typeof ReactPagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
