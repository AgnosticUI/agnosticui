import type { Meta, StoryObj } from '@storybook/vue3';
import VueInput from './VueInput.vue';

const meta = {
  title: 'AgnosticUI/Input',
  component: VueInput,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search', 'tel', 'url'],
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
    },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    invalid: { control: 'boolean' },
    required: { control: 'boolean' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    errorMessage: { control: 'text' },
    helpText: { control: 'text' },
  },
  render: (args: any) => ({
    components: { VueInput },
    setup() { return { args }; },
    template: '<VueInput v-bind="args" />',
  }),
} satisfies Meta<typeof VueInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
