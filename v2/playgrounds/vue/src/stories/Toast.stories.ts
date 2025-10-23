import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { VueToast, type VueToastProps } from 'agnosticui-core/toast/vue';

const meta = {
  title: 'AgnosticUI Vue/Toast',
  component: VueToast,
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Controls visibility of the toast',
    },
    type: {
      control: 'select',
      options: ['default', 'primary', 'success', 'info', 'danger', 'warning', 'error'],
      description: 'The toast variant type',
    },
    position: {
      control: 'select',
      options: ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'start', 'end'],
      description: 'Viewport position',
    },
    duration: {
      control: 'number',
      description: 'Auto-dismiss duration in milliseconds',
    },
    autoDismiss: {
      control: 'boolean',
      description: 'Enable auto-dismiss',
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Show close button',
    },
    pauseOnHover: {
      control: 'boolean',
      description: 'Pause auto-dismiss on hover',
    },
    bordered: {
      control: 'boolean',
      description: 'Adds a border',
    },
    rounded: {
      control: 'boolean',
      description: 'Applies rounded corners',
    },
    borderedLeft: {
      control: 'boolean',
      description: 'Adds a left border accent',
    },
  },
  args: {
    open: false,
    type: 'info',
    position: 'top-end',
    duration: 5000,
    autoDismiss: true,
    showCloseButton: true,
    pauseOnHover: true,
    bordered: false,
    rounded: true,
    borderedLeft: false,
  },
} satisfies Meta<typeof VueToast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
  },
  render: (args: VueToastProps) => ({
    components: { VueToast },
    setup() {
      return { args };
    },
    template: `<VueToast v-bind="args">This is a toast notification</VueToast>`,
  }),
};

export const Success: Story = {
  args: {
    open: true,
    type: 'success',
  },
  render: (args: VueToastProps) => ({
    components: { VueToast },
    setup() {
      return { args };
    },
    template: `<VueToast v-bind="args">Operation completed successfully!</VueToast>`,
  }),
};

export const Error: Story = {
  args: {
    open: true,
    type: 'error',
  },
  render: (args: VueToastProps) => ({
    components: { VueToast },
    setup() {
      return { args };
    },
    template: `
      <VueToast v-bind="args">
        <svg class="mie8" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path fill="currentColor" d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path>
        </svg>
        An error occurred. Please try again.
      </VueToast>
    `,
  }),
};

export const Warning: Story = {
  args: {
    open: true,
    type: 'warning',
  },
  render: (args: VueToastProps) => ({
    components: { VueToast },
    setup() {
      return { args };
    },
    template: `
      <VueToast v-bind="args">
        <svg class="mie8" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path fill="currentColor" d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path>
        </svg>
        Warning: This action cannot be undone.
      </VueToast>
    `,
  }),
};

export const Primary: Story = {
  args: {
    open: true,
    type: 'primary',
  },
  render: (args: VueToastProps) => ({
    components: { VueToast },
    setup() {
      return { args };
    },
    template: `<VueToast v-bind="args">New message received!</VueToast>`,
  }),
};

// Position Stories
export const TopStart: Story = {
  args: {
    open: true,
    position: 'top-start',
  },
  render: (args: VueToastProps) => ({
    components: { VueToast },
    setup() {
      return { args };
    },
    template: `<VueToast v-bind="args">Toast positioned at top-start</VueToast>`,
  }),
};

export const TopEnd: Story = {
  args: {
    open: true,
    position: 'top-end',
  },
  render: (args: VueToastProps) => ({
    components: { VueToast },
    setup() {
      return { args };
    },
    template: `<VueToast v-bind="args">Toast positioned at top-end (default)</VueToast>`,
  }),
};

export const BottomStart: Story = {
  args: {
    open: true,
    position: 'bottom-start',
  },
  render: (args: VueToastProps) => ({
    components: { VueToast },
    setup() {
      return { args };
    },
    template: `<VueToast v-bind="args">Toast positioned at bottom-start</VueToast>`,
  }),
};

export const BottomEnd: Story = {
  args: {
    open: true,
    position: 'bottom-end',
  },
  render: (args: VueToastProps) => ({
    components: { VueToast },
    setup() {
      return { args };
    },
    template: `<VueToast v-bind="args">Toast positioned at bottom-end</VueToast>`,
  }),
};

// Auto-Dismiss Stories
export const AutoDismiss: Story = {
  args: {
    open: true,
    type: 'info',
    duration: 3000,
    autoDismiss: true,
  },
  render: (args: VueToastProps) => ({
    components: { VueToast },
    setup() {
      return { args };
    },
    template: `<VueToast v-bind="args">This toast will auto-dismiss in 3 seconds</VueToast>`,
  }),
};

export const NoAutoDismiss: Story = {
  args: {
    open: true,
    type: 'info',
    autoDismiss: false,
    showCloseButton: true,
  },
  render: (args: VueToastProps) => ({
    components: { VueToast },
    setup() {
      return { args };
    },
    template: `<VueToast v-bind="args">This toast will not auto-dismiss. Click X to close.</VueToast>`,
  }),
};

export const WithBorder: Story = {
  args: {
    open: true,
    type: 'info',
    bordered: true,
  },
  render: (args: VueToastProps) => ({
    components: { VueToast },
    setup() {
      return { args };
    },
    template: `<VueToast v-bind="args">Toast with border</VueToast>`,
  }),
};

export const WithLeftBorder: Story = {
  args: {
    open: true,
    type: 'success',
    borderedLeft: true,
  },
  render: (args: VueToastProps) => ({
    components: { VueToast },
    setup() {
      return { args };
    },
    template: `<VueToast v-bind="args">Toast with left border accent</VueToast>`,
  }),
};

export const NoCloseButton: Story = {
  args: {
    open: true,
    type: 'info',
    showCloseButton: false,
  },
  render: (args: VueToastProps) => ({
    components: { VueToast },
    setup() {
      return { args };
    },
    template: `<VueToast v-bind="args">Toast without close button</VueToast>`,
  }),
};
