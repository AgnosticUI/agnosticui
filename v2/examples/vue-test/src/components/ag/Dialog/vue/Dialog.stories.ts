import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import VueDialog from './VueDialog.vue';
import VueButton from '../../Button/vue/VueButton.vue';

const meta = {
  title: 'AgnosticUI/Dialog',
  component: VueDialog,
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    showCloseButton: { control: 'boolean' },
    noCloseOnEscape: { control: 'boolean' },
    noCloseOnBackdrop: { control: 'boolean' },
    heading: { control: 'text' },
    description: { control: 'text' },
    drawerPosition: {
      control: 'select',
      options: [undefined, 'start', 'end', 'top', 'bottom'],
    },
  },
  args: {
    heading: 'Dialog title',
    description: 'Supporting description text goes here.',
    showCloseButton: true,
  },
} satisfies Meta<typeof VueDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: any) => ({
    components: { VueDialog, VueButton },
    setup() {
      const open = ref(false);
      return { args, open };
    },
    template: `
      <div>
        <VueButton variant="primary" @click="open = true">Open Dialog</VueButton>
        <VueDialog v-bind="args" v-model:open="open">
          <p>Dialog content goes here.</p>
        </VueDialog>
      </div>
    `,
  }),
};
