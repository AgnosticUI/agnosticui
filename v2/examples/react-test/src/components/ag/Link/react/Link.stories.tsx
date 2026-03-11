import type { Meta, StoryObj } from '@storybook/react';
import { ReactLink } from './ReactLink';

const meta = {
  title: 'AgnosticUI/Link',
  component: ReactLink,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['', 'primary', 'success', 'warning', 'danger', 'monochrome'],
    },
    disabled: { control: 'boolean' },
  },
  args: {
    children: 'Link text',
    href: '#',
  },
} satisfies Meta<typeof ReactLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
