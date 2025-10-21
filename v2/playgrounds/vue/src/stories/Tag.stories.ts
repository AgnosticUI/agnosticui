
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from 'storybook/test';
import { VueTag } from 'agnosticui-core/tag/vue';

const meta = {
  title: 'AgnosticUI/Tag',
  component: VueTag,
  argTypes: {
    // TODO
  },
  args: {
    // TODO
  },
} satisfies Meta<typeof VueTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { VueTag },
    setup() {
      return { args };
    },
    template: `<VueTag v-bind="args" />`,
  }),
};
