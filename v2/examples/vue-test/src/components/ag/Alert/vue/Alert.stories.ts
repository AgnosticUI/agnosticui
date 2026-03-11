import type { Meta, StoryObj } from '@storybook/vue3';
import VueAlert from './VueAlert.vue';

const meta = {
  title: 'AgnosticUI/Alert',
  component: VueAlert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['', 'success', 'warning', 'danger', 'info'],
    },
    bordered: { control: 'boolean' },
    rounded: { control: 'boolean' },
    borderedLeft: { control: 'boolean' },
    dismissible: { control: 'boolean' },
  },
  args: {
    default: 'Alert',
  },
  render: (args: any) => ({
    components: { VueAlert },
    setup() { return { args }; },
    template: '<VueAlert v-bind="args">{{ args.default }}</VueAlert>',
  }),
} satisfies Meta<typeof VueAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
