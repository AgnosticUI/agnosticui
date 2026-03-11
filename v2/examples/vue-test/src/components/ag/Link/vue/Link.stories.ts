import type { Meta, StoryObj } from '@storybook/vue3';
import VueLink from './VueLink.vue';

const meta = {
  title: 'AgnosticUI/Link',
  component: VueLink,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['', 'primary', 'success', 'warning', 'danger', 'monochrome'],
    },
    disabled: { control: 'boolean' },
  },
  args: {
    default: 'Link',
  },
  render: (args: any) => ({
    components: { VueLink },
    setup() { return { args }; },
    template: '<VueLink v-bind="args">{{ args.default }}</VueLink>',
  }),
} satisfies Meta<typeof VueLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
