import type { Meta, StoryObj } from '@storybook/vue3';
import VueTooltip from './VueTooltip.vue';

const meta = {
  title: 'AgnosticUI/Tooltip',
  component: VueTooltip,
  tags: ['autodocs'],
  render: (args: any) => ({
    components: { VueTooltip },
    setup() { return { args }; },
    template: '<VueTooltip v-bind="args" />',
  }),
} satisfies Meta<typeof VueTooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
