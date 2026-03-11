import type { Meta, StoryObj } from '@storybook/react';
import { ReactFieldset } from './ReactFieldset';

const meta = {
  title: 'AgnosticUI/Fieldset',
  component: ReactFieldset,
  tags: ['autodocs'],
} satisfies Meta<typeof ReactFieldset>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
