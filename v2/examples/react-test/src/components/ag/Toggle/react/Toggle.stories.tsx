import type { Meta, StoryObj } from '@storybook/react';
import { ReactToggle } from './ReactToggle';

const meta = {
  title: 'AgnosticUI/Toggle',
  component: ReactToggle,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'danger', 'monochrome'],
    },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    invalid: { control: 'boolean' },
  },
} satisfies Meta<typeof ReactToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
