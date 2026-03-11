import type { Meta, StoryObj } from '@storybook/vue3';
import VueScrollProgress from './VueScrollProgress.vue';

const meta = {
  title: 'AgnosticUI/ScrollProgress',
  component: VueScrollProgress,
  tags: ['autodocs'],
  render: (args: any) => ({
    components: { VueScrollProgress },
    setup() { return { args }; },
    template: '<VueScrollProgress v-bind="args" />',
  }),
} satisfies Meta<typeof VueScrollProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
