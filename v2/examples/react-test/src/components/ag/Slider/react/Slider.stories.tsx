import type { Meta, StoryObj } from '@storybook/react';
import { ReactSlider } from './ReactSlider';

const meta = {
  title: 'AgnosticUI/Slider',
  component: ReactSlider,
  tags: ['autodocs'],
  argTypes: {
    min: { control: { type: 'number' } },
    max: { control: { type: 'number' } },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
    },
  },
} satisfies Meta<typeof ReactSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
