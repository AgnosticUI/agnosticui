import type { Meta, StoryObj } from '@storybook/vue3';
import VueMessageBubble from './VueMessageBubble.vue';

const meta = {
  title: 'AgnosticUI/MessageBubble',
  component: VueMessageBubble,
  tags: ['autodocs'],
  args: {
    default: 'MessageBubble',
  },
  render: (args: any) => ({
    components: { VueMessageBubble },
    setup() { return { args }; },
    template: '<VueMessageBubble v-bind="args">{{ args.default }}</VueMessageBubble>',
  }),
} satisfies Meta<typeof VueMessageBubble>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
