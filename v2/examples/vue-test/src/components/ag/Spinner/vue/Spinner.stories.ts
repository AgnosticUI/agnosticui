import type { Meta, StoryObj } from '@storybook/vue3';
import VueSpinner from './VueSpinner.vue';

const meta = {
  title: 'AgnosticUI/Spinner',
  component: VueSpinner,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
  render: (args: any) => ({
    components: { VueSpinner },
    setup() { return { args }; },
    template: '<VueSpinner v-bind="args" />',
  }),
} satisfies Meta<typeof VueSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
