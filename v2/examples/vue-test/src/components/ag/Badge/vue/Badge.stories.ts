import type { Meta, StoryObj } from '@storybook/vue3';
import VueBadge from './VueBadge.vue';

const meta = {
  title: 'AgnosticUI/Badge',
  component: VueBadge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'danger', 'primary', 'info', 'neutral', 'monochrome'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md'],
    },
    dot: { control: 'boolean' },
    interactive: { control: 'boolean' },
  },
  args: {
    default: 'Badge',
  },
  render: (args: any) => ({
    components: { VueBadge },
    setup() { return { args }; },
    template: '<VueBadge v-bind="args">{{ args.default }}</VueBadge>',
  }),
} satisfies Meta<typeof VueBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
