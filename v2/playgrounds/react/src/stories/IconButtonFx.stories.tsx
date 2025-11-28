
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { ReactIconButtonFx } from 'agnosticui-core/icon-button-fx/react';

const meta: Meta<typeof ReactIconButtonFx> = {
  title: 'AgnosticUI/IconButtonFx',
  component: ReactIconButtonFx,
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
  render: (args) => <ReactIconButtonFx {...args} />,
};
