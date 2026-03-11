import type { Meta, StoryObj } from '@storybook/vue3';
import VueRating from './VueRating.vue';

const meta = {
  title: 'AgnosticUI/Rating',
  component: VueRating,
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'number', min: 0, max: 5 } },
    readonly: { control: 'boolean' },
    allowClear: { control: 'boolean' },
  },
  render: (args: any) => ({
    components: { VueRating },
    setup() { return { args }; },
    template: '<VueRating v-bind="args" />',
  }),
} satisfies Meta<typeof VueRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
