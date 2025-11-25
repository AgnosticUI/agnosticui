
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from 'storybook/test';
import { VueButtonFx } from 'agnosticui-core/button-fx/vue';

const meta = {
  title: 'AgnosticUI/ButtonFx',
  component: VueButtonFx,
  argTypes: {
    // TODO
  },
  args: {
    // TODO
  },
} satisfies Meta<typeof VueButtonFx>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { VueButtonFx },
    setup() {
      return { args };
    },
    template: `<VueButtonFx v-bind="args" />`,
  }),
};
