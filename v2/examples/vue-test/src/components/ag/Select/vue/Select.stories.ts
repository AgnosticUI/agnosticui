import type { Meta, StoryObj } from '@storybook/vue3';
import VueSelect from './VueSelect.vue';

const meta = {
  title: 'AgnosticUI/Select',
  component: VueSelect,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
    },
    disabled: { control: 'boolean' },
    multiple: { control: 'boolean' },
    invalid: { control: 'boolean' },
    required: { control: 'boolean' },
  },
  render: (args: any) => ({
    components: { VueSelect },
    setup() { return { args }; },
    template: '<VueSelect v-bind="args" />',
  }),
} satisfies Meta<typeof VueSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
