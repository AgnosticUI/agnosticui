import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import VueDrawer from './VueDrawer.vue';
import VueButton from '../../Button/vue/VueButton.vue';

const meta = {
  title: 'AgnosticUI/Drawer',
  component: VueDrawer,
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    showCloseButton: { control: 'boolean' },
    heading: { control: 'text' },
    description: { control: 'text' },
    position: {
      control: 'select',
      options: ['start', 'end', 'top', 'bottom'],
    },
  },
  args: {
    heading: 'Drawer',
    showCloseButton: true,
  },
} satisfies Meta<typeof VueDrawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: any) => ({
    components: { VueDrawer, VueButton },
    setup() {
      const open = ref(false);
      return { args, open };
    },
    template: `
      <div>
        <VueButton variant="primary" @click="open = true">Open Drawer</VueButton>
        <VueDrawer v-bind="args" v-model:open="open">
          <div style="padding: 1rem">Drawer content goes here.</div>
        </VueDrawer>
      </div>
    `,
  }),
};
