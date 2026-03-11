import type { Meta, StoryObj } from '@storybook/react';
import { ReactButtonFx } from './ReactButtonFx';

const meta = {
  title: 'AgnosticUI/ButtonFx',
  component: ReactButtonFx,
  tags: ['autodocs'],
  args: {
    children: 'ButtonFx',
  },
} satisfies Meta<typeof ReactButtonFx>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
