import type { Meta, StoryObj } from '@storybook/vue3';
import VueLoader from './VueLoader.vue';

const meta = {
  title: 'AgnosticUI/Loader',
  component: VueLoader,
  tags: ['autodocs'],
  render: (args: any) => ({
    components: { VueLoader },
    setup() { return { args }; },
    template: '<VueLoader v-bind="args" />',
  }),
} satisfies Meta<typeof VueLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
