import type { Meta, StoryObj } from '@storybook/react';
import { ReactTag } from './ReactTag';

const meta = {
  title: 'AgnosticUI/Tag',
  component: ReactTag,
  tags: ['autodocs'],
  argTypes: {
    uppercase: { control: 'boolean' },
    removable: { control: 'boolean' },
  },
  args: {
    children: 'Tag label',
  },
} satisfies Meta<typeof ReactTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
