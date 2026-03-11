import type { Meta, StoryObj } from '@storybook/vue3';
import VueVisuallyHidden from './VueVisuallyHidden.vue';

const meta = {
  title: 'AgnosticUI/VisuallyHidden',
  component: VueVisuallyHidden,
  tags: ['autodocs'],
  render: (args: any) => ({
    components: { VueVisuallyHidden },
    setup() { return { args }; },
    template: '<VueVisuallyHidden v-bind="args" />',
  }),
} satisfies Meta<typeof VueVisuallyHidden>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
