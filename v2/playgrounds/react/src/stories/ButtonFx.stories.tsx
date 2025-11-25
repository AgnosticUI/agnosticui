
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { ReactButtonFx } from 'agnosticui-core/button-fx/react';

const meta: Meta<typeof ReactButtonFx> = {
  title: 'AgnosticUI/ButtonFx',
  component: ReactButtonFx,
  argTypes: {
    // TODO
  },
  args: {
    // TODO
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <ReactButtonFx {...args} />,
};
