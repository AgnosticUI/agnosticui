import type { Meta, StoryObj } from '@storybook/vue3';
import VuePagination from './VuePagination.vue';

const meta = {
  title: 'AgnosticUI/Pagination',
  component: VuePagination,
  tags: ['autodocs'],
  render: (args: any) => ({
    components: { VuePagination },
    setup() { return { args }; },
    template: '<VuePagination v-bind="args" />',
  }),
} satisfies Meta<typeof VuePagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
