import type { Meta, StoryObj } from '@storybook/vue3';
import VueBadgeFx from './VueBadgeFx.vue';

const meta = {
  title: 'AgnosticUI/BadgeFx',
  component: VueBadgeFx,
  tags: ['autodocs'],
  argTypes: {
    fx: {
      control: 'select',
      options: ['bounce', 'pulse', 'jelly'],
    },
    fxSpeed: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    fxEase: {
      control: 'select',
      options: ['ease', 'ease-in', 'ease-out', 'ease-in-out', 'bounce', 'spring-sm', 'spring-md', 'spring-lg'],
    },
    fxDisabled: { control: 'boolean' },
  },
  args: {
    fx: 'bounce',
    default: 'BadgeFx',
  },
  render: (args: any) => ({
    components: { VueBadgeFx },
    setup() { return { args }; },
    template: '<VueBadgeFx v-bind="args">{{ args.default }}</VueBadgeFx>',
  }),
} satisfies Meta<typeof VueBadgeFx>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
