
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from 'storybook/test';
import { VueIcon } from 'agnosticui-core/icon/vue';

const meta = {
  title: 'AgnosticUI/Icon',
  component: VueIcon,
  argTypes: {
    // TODO
  },
  args: {
    // TODO
  },
} satisfies Meta<typeof VueIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { VueIcon },
    setup() {
      return { args };
    },
    template: `<VueIcon v-bind="args" />`,
  }),
};
