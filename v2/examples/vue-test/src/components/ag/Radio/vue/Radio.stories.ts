import type { Meta, StoryObj } from '@storybook/vue3';
import VueRadio from './VueRadio.vue';

const meta = {
  title: 'AgnosticUI/Radio',
  component: VueRadio,
  tags: ['autodocs'],
  render: (args: any) => ({
    components: { VueRadio },
    setup() { return { args }; },
    template: '<VueRadio v-bind="args" />',
  }),
} satisfies Meta<typeof VueRadio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
