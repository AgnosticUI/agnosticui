import type { Meta, StoryObj } from '@storybook/vue3';
import VueCopyButton from './VueCopyButton.vue';

const meta = {
  title: 'AgnosticUI/CopyButton',
  component: VueCopyButton,
  tags: ['autodocs'],
  render: (args: any) => ({
    components: { VueCopyButton },
    setup() { return { args }; },
    template: '<VueCopyButton v-bind="args" />',
  }),
} satisfies Meta<typeof VueCopyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
