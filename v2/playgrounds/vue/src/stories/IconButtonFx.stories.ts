
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from 'storybook/test';
import { VueIconButtonFx } from 'agnosticui-core/icon-button-fx/vue';

const meta = {
  title: 'AgnosticUI/IconButtonFx',
  component: VueIconButtonFx,
  argTypes: {
    // TODO
  },
  args: {
    // TODO
  },
} satisfies Meta<typeof VueIconButtonFx>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { VueIconButtonFx },
    setup() {
      return { args };
    },
    template: `<VueIconButtonFx v-bind="args" />`,
  }),
};
