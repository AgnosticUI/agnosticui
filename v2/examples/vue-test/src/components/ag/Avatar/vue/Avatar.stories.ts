import type { Meta, StoryObj } from '@storybook/vue3';
import VueAvatar from './VueAvatar.vue';

const meta = {
  title: 'AgnosticUI/Avatar',
  component: VueAvatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    shape: {
      control: 'select',
      options: ['circle', 'square', 'rounded'],
    },
    variant: {
      control: 'select',
      options: ['', 'primary', 'success', 'warning', 'danger'],
    },
  },
  render: (args: any) => ({
    components: { VueAvatar },
    setup() { return { args }; },
    template: '<VueAvatar v-bind="args" />',
  }),
} satisfies Meta<typeof VueAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
