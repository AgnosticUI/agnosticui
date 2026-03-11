import type { Meta, StoryObj } from '@storybook/vue3';
import VueMark from './VueMark.vue';

const meta = {
  title: 'AgnosticUI/Mark',
  component: VueMark,
  tags: ['autodocs'],
  args: {
    default: 'Mark',
  },
  render: (args: any) => ({
    components: { VueMark },
    setup() { return { args }; },
    template: '<VueMark v-bind="args">{{ args.default }}</VueMark>',
  }),
} satisfies Meta<typeof VueMark>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
