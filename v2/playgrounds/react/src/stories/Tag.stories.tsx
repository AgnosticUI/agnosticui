
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { ReactTag } from 'agnosticui-core/tag/react';

const meta: Meta<typeof ReactTag> = {
  title: 'AgnosticUI/Tag',
  component: ReactTag,
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
  render: (args) => <ReactTag {...args} />,
};
