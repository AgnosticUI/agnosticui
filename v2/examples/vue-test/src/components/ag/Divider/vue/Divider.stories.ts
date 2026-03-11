import type { Meta, StoryObj } from '@storybook/vue3';
import VueDivider from './VueDivider.vue';

const meta = {
  title: 'AgnosticUI/Divider',
  component: VueDivider,
  tags: ['autodocs'],
  render: (args: any) => ({
    components: { VueDivider },
    setup() { return { args }; },
    template: '<VueDivider v-bind="args" />',
  }),
} satisfies Meta<typeof VueDivider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
