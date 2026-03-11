import type { Meta, StoryObj } from '@storybook/react';
import { ReactIconButtonFx } from './ReactIconButtonFx';

const meta = {
  title: 'AgnosticUI/IconButtonFx',
  component: ReactIconButtonFx,
  tags: ['autodocs'],
} satisfies Meta<typeof ReactIconButtonFx>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
