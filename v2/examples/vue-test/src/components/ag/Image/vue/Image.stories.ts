import type { Meta, StoryObj } from '@storybook/vue3';
import VueImage from './VueImage.vue';

const meta = {
  title: 'AgnosticUI/Image',
  component: VueImage,
  tags: ['autodocs'],
  argTypes: {
    fit: {
      control: 'select',
      options: ['cover', 'contain', 'fill', 'none', 'scale-down'],
    },
    loading: {
      control: 'select',
      options: ['lazy', 'eager'],
    },
    fade: { control: 'boolean' },
  },
  args: {
    src: 'https://picsum.photos/400/300',
    alt: 'Sample landscape photo',
    width: 400,
    height: 300,
  },
  render: (args: any) => ({
    components: { VueImage },
    setup() { return { args }; },
    template: '<VueImage v-bind="args" />',
  }),
} satisfies Meta<typeof VueImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithFade: Story = { args: { fade: true } };
export const ContainFit: Story = {
  args: {
    src: 'https://picsum.photos/400/300?grayscale',
    alt: 'Contained image',
    fit: 'contain',
    aspectRatio: '16/9',
  },
};
