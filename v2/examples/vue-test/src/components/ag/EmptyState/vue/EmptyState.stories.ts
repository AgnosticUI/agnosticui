import type { Meta, StoryObj } from '@storybook/vue3';
import VueEmptyState from './VueEmptyState.vue';

const meta = {
  title: 'AgnosticUI/EmptyState',
  component: VueEmptyState,
  tags: ['autodocs'],
  render: (args: any) => ({
    components: { VueEmptyState },
    setup() { return { args }; },
    template: '<VueEmptyState v-bind="args" />',
  }),
} satisfies Meta<typeof VueEmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
