import type { Meta, StoryObj } from '@storybook/vue3';
import VueAspectRatio from './VueAspectRatio.vue';

const meta = {
  title: 'AgnosticUI/AspectRatio',
  component: VueAspectRatio,
  tags: ['autodocs'],
  render: (args: any) => ({
    components: { VueAspectRatio },
    setup() { return { args }; },
    template: '<VueAspectRatio v-bind="args" />',
  }),
} satisfies Meta<typeof VueAspectRatio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
