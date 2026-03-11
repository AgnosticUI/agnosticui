import type { Meta, StoryObj } from '@storybook/vue3';
import VueCheckbox from './VueCheckbox.vue';

const meta = {
  title: 'AgnosticUI/Checkbox',
  component: VueCheckbox,
  tags: ['autodocs'],
  render: (args: any) => ({
    components: { VueCheckbox },
    setup() { return { args }; },
    template: '<VueCheckbox v-bind="args" />',
  }),
} satisfies Meta<typeof VueCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
