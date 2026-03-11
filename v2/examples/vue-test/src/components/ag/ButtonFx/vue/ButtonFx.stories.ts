import type { Meta, StoryObj } from '@storybook/vue3';
import VueButtonFx from './VueButtonFx.vue';

const meta = {
  title: 'AgnosticUI/ButtonFx',
  component: VueButtonFx,
  tags: ['autodocs'],
  argTypes: {
    fx: {
      control: 'select',
      options: ['bounce', 'pulse', 'jelly', 'shake', 'pulse-wobble'],
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
    variant: {
      control: 'select',
      options: ['', 'primary', 'secondary', 'success', 'warning', 'danger', 'monochrome'],
    },
    size: {
      control: 'select',
      options: ['x-sm', 'sm', 'md', 'lg', 'xl'],
    },
    disabled: { control: 'boolean' },
  },
  args: {
    fx: 'bounce',
    default: 'Click me',
  },
  render: (args: any) => ({
    components: { VueButtonFx },
    setup() { return { args }; },
    template: '<VueButtonFx v-bind="args">{{ args.default }}</VueButtonFx>',
  }),
} satisfies Meta<typeof VueButtonFx>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
