import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import VueToast from './VueToast.vue';
import VueButton from '../../Button/vue/VueButton.vue';

const meta = {
  title: 'AgnosticUI/Toast',
  component: VueToast,
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    type: {
      control: 'select',
      options: ['info', 'success', 'warning', 'danger'],
    },
    position: {
      control: 'select',
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left', 'top-center', 'bottom-center'],
    },
    autoDismiss: { control: 'boolean' },
    showCloseButton: { control: 'boolean' },
    bordered: { control: 'boolean' },
    rounded: { control: 'boolean' },
  },
} satisfies Meta<typeof VueToast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: any) => ({
    components: { VueToast, VueButton },
    setup() {
      const open = ref(false);
      return { args, open };
    },
    template: `
      <div>
        <VueButton variant="primary" @click="open = true">Show Toast</VueButton>
        <VueToast v-bind="args" v-model:open="open">
          <span>Toast notification message</span>
        </VueToast>
      </div>
    `,
  }),
};
