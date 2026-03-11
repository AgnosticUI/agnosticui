import type { Meta, StoryObj } from '@storybook/vue3';
import VueSlider from './VueSlider.vue';

const meta = {
  title: 'AgnosticUI/Slider',
  component: VueSlider,
  tags: ['autodocs'],
  argTypes: {
    min: { control: { type: 'number' } },
    max: { control: { type: 'number' } },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
    },
  },
  render: (args: any) => ({
    components: { VueSlider },
    setup() { return { args }; },
    template: '<VueSlider v-bind="args" />',
  }),
} satisfies Meta<typeof VueSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
