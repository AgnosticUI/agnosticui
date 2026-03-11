import type { Meta, StoryObj } from '@storybook/vue3';
import VueCard from './VueCard.vue';

const meta = {
  title: 'AgnosticUI/Card',
  component: VueCard,
  tags: ['autodocs'],
  args: {
    default: 'Card',
  },
  render: (args: any) => ({
    components: { VueCard },
    setup() { return { args }; },
    template: '<VueCard v-bind="args">{{ args.default }}</VueCard>',
  }),
} satisfies Meta<typeof VueCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
