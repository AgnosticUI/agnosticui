import type { Meta, StoryObj } from '@storybook/vue3';
import VueScrollToButton from './VueScrollToButton.vue';

const meta = {
  title: 'AgnosticUI/ScrollToButton',
  component: VueScrollToButton,
  tags: ['autodocs'],
  render: (args: any) => ({
    components: { VueScrollToButton },
    setup() { return { args }; },
    template: '<VueScrollToButton v-bind="args" />',
  }),
} satisfies Meta<typeof VueScrollToButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
