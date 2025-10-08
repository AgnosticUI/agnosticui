import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from 'storybook/test';
import VueDialog from 'agnosticui-core/dialog/vue';
import type { VueDialogProps } from 'agnosticui-core/dialog/vue';

import { ref } from 'vue';

/*export { default as VueDialog } from './VueDialog.vue';
export { default as VueDialogHeader } from './VueDialogHeader.vue';
export { default as VueDialogFooter } from './VueDialogFooter.vue';
export type { VueDialogProps } from './VueDialog.vue';
// Define types separately since Vue component types are handled differently
export interface VueDialogHeaderProps {
  // No specific props for header
}

export interface VueDialogFooterProps {
  // No specific props for footer
}
*/

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'AgnosticUI/Dialog',
  component: VueDialog,
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Whether the dialog is open',
    },
    heading: {
      control: 'text',
      description: 'The heading text for the dialog',
    },
    description: {
      control: 'text',
      description: 'The description text for the dialog',
    },
    noCloseOnEscape: {
      control: 'boolean',
      description: 'Prevents closing the dialog when pressing the Escape key',
    },
    noCloseOnBackdrop: {
      control: 'boolean',
      description: 'Prevents closing the dialog when clicking the backdrop',
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Shows a close button in the dialog',
    },
    onDialogOpen: {
      action: 'dialog-open',
      description: 'Emitted when the dialog is opened',
    },
    onDialogClose: {
      action: 'dialog-close',
      description: 'Emitted when the dialog is closed',
    },
    onDialogCancel: {
      action: 'dialog-cancel',
      description: 'Emitted when the dialog is canceled',
    },
  },
  args: {
    open: false,
    heading: 'Dialog Title',
    description: 'This is a description of the dialog.',
    noCloseOnEscape: false,
    noCloseOnBackdrop: false,
    showCloseButton: false,
    onDialogOpen: fn(),
    onDialogClose: fn(),
    onDialogCancel: fn(),
  },
} satisfies Meta<typeof VueDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: 'Default Dialog',
    description: 'This is a default dialog.',
  },
  render: (args: VueDialogProps) => ({
    components: { VueDialog },
    setup() {
      return { args };
    },
    template: `
      <VueDialog v-bind="args">
        <p>This is the default dialog content.</p>
      </VueDialog>
    `,
  }),
};

export const OpenDialog: Story = {
  args: {
    open: true,
    heading: 'Open Dialog',
    description: 'This dialog is open by default.',
  },
  render: (args: VueDialogProps) => ({
    components: { VueDialog },
    setup() {
      return { args };
    },
    template: `
      <VueDialog v-bind="args">
        <p>This dialog is open when rendered.</p>
      </VueDialog>
    `,
  }),
};

export const WithCloseButton: Story = {
  args: {
    open: true,
    heading: 'Dialog with Close Button',
    description: 'This dialog has a close button.',
    showCloseButton: true,
  },
  render: (args: VueDialogProps) => ({
    components: { VueDialog },
    setup() {
      return { args };
    },
    template: `
      <VueDialog v-bind="args">
        <p>This dialog includes a close button.</p>
      </VueDialog>
    `,
  }),
};

export const NoCloseOnEscape: Story = {
  args: {
    open: true,
    heading: 'No Close on Escape',
    description: 'This dialog cannot be closed with the Escape key.',
    noCloseOnEscape: true,
  },
  render: (args: VueDialogProps) => ({
    components: { VueDialog },
    setup() {
      return { args };
    },
    template: `
      <VueDialog v-bind="args">
        <p>Try pressing Escape; the dialog won't close.</p>
      </VueDialog>
    `,
  }),
};

export const NoCloseOnBackdrop: Story = {
  args: {
    open: true,
    heading: 'No Close on Backdrop',
    description: 'This dialog cannot be closed by clicking the backdrop.',
    noCloseOnBackdrop: true,
  },
  render: (args: VueDialogProps) => ({
    components: { VueDialog },
    setup() {
      return { args };
    },
    template: `
      <VueDialog v-bind="args">
        <p>Click the backdrop; the dialog won't close.</p>
      </VueDialog>
    `,
  }),
};

export const WithCustomContent: Story = {
  args: {
    open: true,
    heading: 'Custom Content Dialog',
    description: 'This dialog contains custom content.',
    showCloseButton: true,
  },
  render: (args: VueDialogProps) => ({
    components: { VueDialog },
    setup() {
      return { args };
    },
    template: `
      <VueDialog v-bind="args">
        <div>
          <h3>Custom Content</h3>
          <p>This dialog includes custom HTML content.</p>
          <button>Action Button</button>
        </div>
      </VueDialog>
    `,
  }),
};

export const EventTesting: Story = {
  args: {
    open: true,
    heading: 'Event Testing Dialog',
    description: 'Interact to test dialog events.',
    showCloseButton: true,
  },
  render: (args: VueDialogProps) => ({
    components: { VueDialog },
    setup() {
      const eventMessage = ref<string | null>(null);
      const onOpen = () => {
        args.onDialogOpen();
        eventMessage.value = 'Dialog opened';
      };
      const onClose = () => {
        args.onDialogClose();
        eventMessage.value = 'Dialog closed';
      };
      const onCancel = () => {
        args.onDialogCancel();
        eventMessage.value = 'Dialog canceled';
      };
      return { args, onOpen, onClose, onCancel, eventMessage };
    },
    template: `
      <div>
        <VueDialog
          v-bind="args"
          @dialog-open="onOpen"
          @dialog-close="onClose"
          @dialog-cancel="onCancel"
        >
          <p>Interact with the dialog to test events (open, close, cancel).</p>
        </VueDialog>
        <p v-if="eventMessage">{{ eventMessage }}</p>
      </div>
    `,
  }),
};
