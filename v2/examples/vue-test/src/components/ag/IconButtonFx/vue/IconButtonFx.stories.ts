import type { Meta, StoryObj } from '@storybook/vue3';
import VueIconButtonFx from './VueIconButtonFx.vue';
import { Heart } from 'lucide-vue-next';

const meta = {
  title: 'AgnosticUI/IconButtonFx',
  component: VueIconButtonFx,
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
    fxDisabled: { control: 'boolean' },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'ghost', 'monochrome'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: { fx: 'bounce', label: 'Like', size: 'md', variant: 'primary' },
  render: (args: any) => ({
    components: { VueIconButtonFx, Heart },
    setup() { return { args }; },
    template: '<VueIconButtonFx v-bind="args"><Heart /></VueIconButtonFx>',
  }),
} satisfies Meta<typeof VueIconButtonFx>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Variants: Story = {
  render: () => ({
    components: { VueIconButtonFx, Heart },
    template: `
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <VueIconButtonFx fx="bounce" label="Primary" variant="primary"><Heart /></VueIconButtonFx>
        <VueIconButtonFx fx="pulse" label="Secondary" variant="secondary"><Heart /></VueIconButtonFx>
        <VueIconButtonFx fx="jelly" label="Ghost" variant="ghost"><Heart /></VueIconButtonFx>
      </div>
    `,
  }),
};
