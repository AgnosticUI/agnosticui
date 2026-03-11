import type { Meta, StoryObj } from '@storybook/vue3';
import VueSkeletonLoader from './VueSkeletonLoader.vue';

const meta = {
  title: 'AgnosticUI/SkeletonLoader',
  component: VueSkeletonLoader,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'avatar', 'button', 'card', 'custom'],
    },
    effect: {
      control: 'select',
      options: ['shimmer', 'pulse', 'none'],
    },
  },
  render: (args: any) => ({
    components: { VueSkeletonLoader },
    setup() { return { args }; },
    template: '<VueSkeletonLoader v-bind="args" />',
  }),
} satisfies Meta<typeof VueSkeletonLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
