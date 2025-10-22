
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { ReactIcon } from 'agnosticui-core/icon/react';

const meta: Meta<typeof ReactIcon> = {
  title: 'AgnosticUI/Icon',
  component: ReactIcon,
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
  render: (args) => <ReactIcon {...args} />,
};
