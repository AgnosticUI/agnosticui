import type { Meta, StoryObj } from '@storybook/vue3';
import VueKbd from './VueKbd.vue';

const meta = {
  title: 'AgnosticUI/Kbd',
  component: VueKbd,
  tags: ['autodocs'],
  argTypes: {
    bordered: { control: 'boolean' },
    background: { control: 'boolean' },
  },
  args: {
    default: 'Kbd',
  },
  render: (args: any) => ({
    components: { VueKbd },
    setup() { return { args }; },
    template: '<VueKbd v-bind="args">{{ args.default }}</VueKbd>',
  }),
} satisfies Meta<typeof VueKbd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
