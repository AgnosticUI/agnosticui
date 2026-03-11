import type { Meta, StoryObj } from '@storybook/vue3';
import VueToggle from './VueToggle.vue';

const meta = {
  title: 'AgnosticUI/Toggle',
  component: VueToggle,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'danger', 'monochrome'],
    },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    invalid: { control: 'boolean' },
  },
  render: (args: any) => ({
    components: { VueToggle },
    setup() { return { args }; },
    template: '<VueToggle v-bind="args" />',
  }),
} satisfies Meta<typeof VueToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
