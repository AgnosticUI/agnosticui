import type { Meta, StoryObj } from '@storybook/vue3';
import VueSidebarNav from './VueSidebarNav.vue';

const meta = {
  title: 'AgnosticUI/SidebarNav',
  component: VueSidebarNav,
  tags: ['autodocs'],
  render: (args: any) => ({
    components: { VueSidebarNav },
    setup() { return { args }; },
    template: '<VueSidebarNav v-bind="args" />',
  }),
} satisfies Meta<typeof VueSidebarNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
