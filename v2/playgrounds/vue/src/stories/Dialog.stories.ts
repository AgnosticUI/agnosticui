import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from 'storybook/test';
import VueDialog from 'agnosticui-core/dialog/vue';
import type { VueDialogExtendedProps } from 'agnosticui-core/dialog/vue';
import VueButton from 'agnosticui-core/button/vue';
import { ref } from 'vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'AgnosticUI Vue/Dialog',
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
  } satisfies Meta<typeof VueDialog>
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: 'Default Dialog',
    description: 'This is a default dialog.',
  },
  render: (args: VueDialogExtendedProps) => ({
    components: { VueDialog, VueButton },
    setup() {
      const open = ref(false);
      const show = () => {
        open.value = true;
      };
      return { args, open, show };
    },
    template: `
      <div>
        <VueButton @click="show">Open Dialog</VueButton>
        <VueDialog v-bind="args" v-model:open="open">
          <p>This is the default dialog content.</p>
        </VueDialog>
      </div>
    `,
  }),
};

export const OpenDialog: Story = {
  args: {
    heading: 'Open Dialog',
    description: 'This dialog is open by default.',
  },
  render: (args: VueDialogExtendedProps) => ({
    components: { VueDialog, VueButton },
    setup() {
      const open = ref(false);
      const show = () => {
        open.value = true;
      };
      return { args, open, show };
    },
    template: `
      <div>
        <VueButton @click="show">Open Dialog</VueButton>
        <VueDialog v-bind="args" v-model:open="open">
          <p>This dialog is open when rendered.</p>
        </VueDialog>
      </div>
    `,
  }),
};

export const WithCloseButton: Story = {
  args: {
    heading: 'Dialog with Close Button',
    description: 'This dialog has a close button.',
    showCloseButton: true,
  },
  render: (args: VueDialogExtendedProps) => ({
    components: { VueDialog, VueButton },
    setup() {
      const open = ref(false);
      const show = () => {
        open.value = true;
      };
      return { args, open, show };
    },
    template: `
      <div>
        <VueButton @click="show">Open Dialog</VueButton>
        <VueDialog v-bind="args" v-model:open="open">
          <p>This dialog includes a close button.</p>
        </VueDialog>
      </div>
    `,
  }),
};

export const NoCloseOnEscape: Story = {
  args: {
    heading: 'No Close on Escape',
    description: 'This dialog cannot be closed with the Escape key.',
    noCloseOnEscape: true,
  },
  render: (args: VueDialogExtendedProps) => ({
    components: { VueDialog, VueButton },
    setup() {
      const open = ref(false);
      const show = () => {
        open.value = true;
      };
      return { args, open, show };
    },
    template: `
      <div>
        <VueButton @click="show">Open Dialog</VueButton>
        <VueDialog v-bind="args" v-model:open="open">
          <p>Try pressing Escape; the dialog won't close.</p>
        </VueDialog>
      </div>
    `,
  }),
};

export const NoCloseOnBackdrop: Story = {
  args: {
    heading: 'No Close on Backdrop',
    description: 'This dialog cannot be closed by clicking the backdrop.',
    noCloseOnBackdrop: true,
  },
  render: (args: VueDialogExtendedProps) => ({
    components: { VueDialog, VueButton },
    setup() {
      const open = ref(false);
      const show = () => {
        open.value = true;
      };
      return { args, open, show };
    },
    template: `
      <div>
        <VueButton @click="show">Open Dialog</VueButton>
        <VueDialog v-bind="args" v-model:open="open">
          <p>Click the backdrop; the dialog won't close.</p>
        </VueDialog>
      </div>
    `,
  }),
};

export const WithCustomContent: Story = {
  args: {
    heading: 'Custom Content Dialog',
    description: 'This dialog contains custom content.',
    showCloseButton: true,
  },
  render: (args: VueDialogExtendedProps) => ({
    components: { VueDialog, VueButton },
    setup() {
      const open = ref(false);
      const show = () => {
        open.value = true;
      };
      return { args, open, show };
    },
    template: `
      <div>
        <VueButton @click="show">Open Dialog</VueButton>
        <VueDialog v-bind="args" v-model:open="open">
          <div>
            <h3>Custom Content</h3>
            <p>This dialog includes custom HTML content.</p>
            <VueButton>Action Button</VueButton>
          </div>
        </VueDialog>
      </div>
    `,
  }),
};

export const EventTesting: Story = {
  args: {
    heading: 'Event Testing Dialog',
    description: 'Interact to test dialog events.',
    showCloseButton: true,
  },
  render: (args: VueDialogExtendedProps) => ({
    components: { VueDialog, VueButton },
    setup() {
      const open = ref(false);
      const show = () => {
        open.value = true;
      };
      const eventMessage = ref<string | null>(null);
      const onOpen = () => {
        args.onDialogOpen?.();
        eventMessage.value = 'Dialog opened';
      };
      const onClose = () => {
        args.onDialogClose?.();
        eventMessage.value = 'Dialog closed';
      };
      const onCancel = () => {
        args.onDialogCancel?.();
        eventMessage.value = 'Dialog canceled';
      };
      return { args, open, show, onOpen, onClose, onCancel, eventMessage };
    },
    template: `
      <div>
        <VueButton @click="show">Open Dialog</VueButton>
        <VueDialog
          v-bind="args"
          v-model:open="open"
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

export const FocusTrapping: Story = {
  args: {
    heading: 'Focus Trapping Demo',
    description: 'Test keyboard navigation and focus trapping.',
    showCloseButton: true,
  },
  render: (args: VueDialogExtendedProps) => ({
    components: { VueDialog, VueButton },
    setup() {
      const open = ref(false);
      const show = () => {
        open.value = true;
      };
      return { args, open, show };
    },
    template: `
      <div>
        <VueButton @click="show">Open Focus Trapping Dialog</VueButton>
        <VueDialog v-bind="args" v-model:open="open">
          <p>Press Tab to move focus to the next element. Press Shift+Tab to move to the previous element.</p>
          <p>Focus should be trapped within the dialog and cycle through all focusable elements.</p>
          <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-top: 1rem;">
            <button>Button 1</button>
            <button>Button 2</button>
            <a href="#test" @click.prevent>Link 1</a>
            <input type="text" placeholder="Input field 1" />
            <input type="text" placeholder="Input field 2" />
            <button>Button 3</button>
          </div>
        </VueDialog>
      </div>
    `,
  }),
};

export const Customization: Story = {
  args: {
    heading: 'Styled Dialog',
    description: 'This dialog is customized using CSS Shadow Parts.',
    showCloseButton: true,
  },
  render: (args: VueDialogExtendedProps) => ({
    components: { VueDialog, VueButton },
    setup() {
      const open = ref(false);
      const show = () => {
        open.value = true;
      };

      // Inject styles dynamically
      const styleId = 'custom-dialog-styles';
      if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
          .custom-dialog::part(ag-dialog-backdrop) {
            background: linear-gradient(135deg, rgba(102, 126, 234, 0.8) 0%, rgba(118, 75, 162, 0.8) 100%);
          }
          .custom-dialog::part(ag-dialog-container) {
            background: linear-gradient(to bottom, #ffffff, #f0f4ff);
            border: 3px solid #667eea;
            box-shadow: 0 20px 60px rgba(102, 126, 234, 0.4);
          }
          .custom-dialog::part(ag-dialog-header) {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 1.5rem;
            margin: -1.5rem -1.5rem 1rem -1.5rem;
            border-radius: 0.5rem 0.5rem 0 0;
          }
          .custom-dialog::part(ag-dialog-heading) {
            font-size: 1.5rem;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          }
          .custom-dialog::part(ag-dialog-content) {
            padding: 0 0.5rem;
          }
          .custom-dialog::part(ag-dialog-footer) {
            background: #f0f4ff;
            padding: 1rem;
            margin: 1rem -1.5rem -1.5rem -1.5rem;
            border-radius: 0 0 0.5rem 0.5rem;
          }
          .custom-dialog::part(ag-dialog-close-button) {
            background: rgba(255, 255, 255, 0.2);
            color: white;
            border-radius: 50%;
            width: 2rem;
            height: 2rem;
            font-size: 1.5rem;
          }
          .custom-dialog::part(ag-dialog-close-button):hover {
            background: rgba(255, 255, 255, 0.3);
          }
        `;
        document.head.appendChild(style);
      }

      return { args, open, show };
    },
    template: `
      <div>
        <VueButton @click="show">Open Customized Dialog</VueButton>
        <VueDialog v-bind="args" v-model:open="open" class="custom-dialog">
          <p>This dialog demonstrates CSS Shadow Parts customization with styled backdrop, container, header, heading, content, footer, and close button.</p>
          <template #footer>
            <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
              <VueButton @click="open = false">Close</VueButton>
            </div>
          </template>
        </VueDialog>
      </div>
    `,
  }),
};
