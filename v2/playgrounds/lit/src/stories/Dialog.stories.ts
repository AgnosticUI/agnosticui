import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { fn } from 'storybook/test';
import 'agnosticui-core/dialog';
import 'agnosticui-core/button';
import type { DialogProps } from 'agnosticui-core/dialog';

const meta: Meta<DialogProps> = {
  title: 'AgnosticUI/Dialog',
  component: 'ag-dialog',
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
    drawerPosition: {
      control: 'select',
      options: [undefined, 'start', 'end', 'top', 'bottom'],
      description: 'Converts dialog to a drawer at the specified position',
    },
  },
  args: {
    open: false,
    heading: 'Dialog Title',
    description: 'This is a description of the dialog.',
    noCloseOnEscape: false,
    noCloseOnBackdrop: false,
    showCloseButton: false,
    drawerPosition: undefined,
    onDialogOpen: fn(),
    onDialogClose: fn(),
    onDialogCancel: fn(),
  },
  parameters: {
    actions: {
      handles: ['dialog-open', 'dialog-close', 'dialog-cancel'],
    },
  },
};

export default meta;
type Story = StoryObj<DialogProps>;

// Helper function to create a controlled dialog story
const createDialogStory = (args: Partial<DialogProps>, content: any) => {
  return html`
    <div>
      <ag-button
        @click=${(e: Event) => {
          const button = e.target as HTMLElement;
          const dialog = button.parentElement?.querySelector('ag-dialog') as any;
          if (dialog) {
            dialog.open = true;
          }
        }}
      >
        Open Dialog
      </ag-button>
      <ag-dialog
        .open=${args.open}
        .heading=${args.heading}
        .description=${args.description}
        .noCloseOnEscape=${args.noCloseOnEscape}
        .noCloseOnBackdrop=${args.noCloseOnBackdrop}
        .showCloseButton=${args.showCloseButton}
        .drawerPosition=${args.drawerPosition}
        @dialog-open=${args.onDialogOpen || fn()}
        @dialog-close=${(e: Event) => {
          const dialog = e.target as any;
          dialog.open = false;
          if (args.onDialogClose) args.onDialogClose(e as CustomEvent);
        }}
        @dialog-cancel=${(e: Event) => {
          const dialog = e.target as any;
          dialog.open = false;
          if (args.onDialogCancel) args.onDialogCancel(e as CustomEvent);
        }}
      >
        ${content}
      </ag-dialog>
    </div>
  `;
};

// Default story
export const Default: Story = {
  args: {
    heading: 'Default Dialog',
    description: 'This is a default dialog.',
  },
  render: (args) => createDialogStory(args, html`
    <p>This is the default dialog content.</p>
  `),
};

// With close button
export const WithCloseButton: Story = {
  args: {
    heading: 'Dialog with Close Button',
    description: 'This dialog has a close button.',
    showCloseButton: true,
  },
  render: (args) => createDialogStory(args, html`
    <p>This dialog includes a close button in the top right corner.</p>
  `),
};

// No close on Escape
export const NoCloseOnEscape: Story = {
  args: {
    heading: 'No Close on Escape',
    description: 'This dialog cannot be closed with the Escape key.',
    noCloseOnEscape: true,
    showCloseButton: true,
  },
  render: (args) => createDialogStory(args, html`
    <p>Try pressing Escape; the dialog won't close. Use the close button instead.</p>
  `),
};

// No close on backdrop
export const NoCloseOnBackdrop: Story = {
  args: {
    heading: 'No Close on Backdrop',
    description: 'This dialog cannot be closed by clicking the backdrop.',
    noCloseOnBackdrop: true,
    showCloseButton: true,
  },
  render: (args) => createDialogStory(args, html`
    <p>Click the backdrop; the dialog won't close. Use the close button instead.</p>
  `),
};

// With custom content
export const WithCustomContent: Story = {
  args: {
    heading: 'Custom Content Dialog',
    description: 'This dialog contains custom content.',
    showCloseButton: true,
  },
  render: (args) => createDialogStory(args, html`
    <div>
      <h3>Custom Content</h3>
      <p>This dialog includes custom HTML content.</p>
      <ag-button>Action Button</ag-button>
    </div>
  `),
};

// Event testing
export const EventTesting: Story = {
  args: {
    heading: 'Event Testing Dialog',
    description: 'Interact to test dialog events.',
    showCloseButton: true,
  },
  render: () => html`
    <div>
      <ag-button
        @click=${(e: Event) => {
          const button = e.target as HTMLElement;
          const dialog = button.parentElement?.querySelector('ag-dialog') as any;
          if (dialog) {
            dialog.open = true;
          }
        }}
      >
        Open Dialog
      </ag-button>
      <ag-dialog
        .heading=${'Event Testing Dialog'}
        .description=${'Interact to test dialog events.'}
        .showCloseButton=${true}
        @dialog-open=${() => {
          console.log('Dialog opened');
        }}
        @dialog-close=${(e: Event) => {
          const dialog = e.target as any;
          dialog.open = false;
          console.log('Dialog closed');
        }}
        @dialog-cancel=${(e: Event) => {
          const dialog = e.target as any;
          dialog.open = false;
          console.log('Dialog canceled');
        }}
      >
        <p>Interact with the dialog to test events (open, close, cancel).</p>
      </ag-dialog>
      <p style="font-size: 0.875rem; color: #6b7280; margin-top: 1rem;">
        Check the Actions panel below and browser console for event logs
      </p>
    </div>
  `,
};

// Focus trapping
export const FocusTrapping: Story = {
  args: {
    heading: 'Focus Trapping Demo',
    description: 'Test keyboard navigation and focus trapping.',
    showCloseButton: true,
  },
  render: (args) => createDialogStory(args, html`
    <p>Press Tab to move focus to the next element. Press Shift+Tab to move to the previous element.</p>
    <p>Focus should be trapped within the dialog and cycle through all focusable elements.</p>
    <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-top: 1rem;">
      <button>Button 1</button>
      <button>Button 2</button>
      <a href="#test" @click=${(e: Event) => e.preventDefault()}>Link 1</a>
      <input type="text" placeholder="Input field 1" />
      <input type="text" placeholder="Input field 2" />
      <button>Button 3</button>
    </div>
  `),
};

// With form
export const WithForm: Story = {
  args: {
    heading: 'User Registration',
    description: 'Please fill out the registration form.',
    showCloseButton: true,
  },
  render: (args) => createDialogStory(args, html`
    <form
      @submit=${(e: Event) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        alert(`Form submitted! Name: ${formData.get('name')}, Email: ${formData.get('email')}`);
        const dialog = form.closest('ag-dialog') as any;
        if (dialog) dialog.open = false;
      }}
      style="display: flex; flex-direction: column; gap: 1rem;"
    >
      <label>
        Name:
        <input type="text" name="name" required style="width: 100%; margin-top: 0.5rem; padding: 0.5rem;" />
      </label>
      <label>
        Email:
        <input type="email" name="email" required style="width: 100%; margin-top: 0.5rem; padding: 0.5rem;" />
      </label>
      <div style="display: flex; gap: 0.5rem; justify-content: flex-end; margin-top: 1rem;">
        <ag-button
          type="button"
          @click=${(e: Event) => {
            const button = e.target as HTMLElement;
            const dialog = button.closest('ag-dialog') as any;
            if (dialog) dialog.open = false;
          }}
        >
          Cancel
        </ag-button>
        <ag-button type="submit">Submit</ag-button>
      </div>
    </form>
  `),
};

// Confirmation dialog
export const ConfirmationDialog: Story = {
  args: {
    heading: 'Confirm Action',
    description: 'Are you sure you want to delete this item? This action cannot be undone.',
    showCloseButton: false,
  },
  render: (args) => html`
    <div>
      <ag-button
        @click=${(e: Event) => {
          const button = e.target as HTMLElement;
          const dialog = button.parentElement?.querySelector('ag-dialog') as any;
          if (dialog) {
            dialog.open = true;
          }
        }}
      >
        Delete Item
      </ag-button>
      <ag-dialog
        .heading=${args.heading}
        .description=${args.description}
        .noCloseOnEscape=${true}
        .noCloseOnBackdrop=${true}
        @dialog-close=${(e: Event) => {
          const dialog = e.target as any;
          dialog.open = false;
        }}
      >
        <div slot="footer" style="display: flex; gap: 0.5rem; justify-content: flex-end;">
          <ag-button
            @click=${(e: Event) => {
              const button = e.target as HTMLElement;
              const dialog = button.closest('ag-dialog') as any;
              if (dialog) dialog.open = false;
              console.log('Action canceled');
            }}
          >
            Cancel
          </ag-button>
          <ag-button
            @click=${(e: Event) => {
              const button = e.target as HTMLElement;
              const dialog = button.closest('ag-dialog') as any;
              if (dialog) dialog.open = false;
              alert('Item deleted!');
              console.log('Item deleted');
            }}
          >
            Delete
          </ag-button>
        </div>
      </ag-dialog>
    </div>
  `,
};

// Alert dialog
export const AlertDialog: Story = {
  args: {
    heading: 'Alert',
    description: 'Your changes have been saved successfully!',
    showCloseButton: false,
  },
  render: (args) => html`
    <div>
      <ag-button
        @click=${(e: Event) => {
          const button = e.target as HTMLElement;
          const dialog = button.parentElement?.querySelector('ag-dialog') as any;
          if (dialog) {
            dialog.open = true;
          }
        }}
      >
        Show Alert
      </ag-button>
      <ag-dialog
        .heading=${args.heading}
        .description=${args.description}
        @dialog-close=${(e: Event) => {
          const dialog = e.target as any;
          dialog.open = false;
        }}
      >
        <div slot="footer" style="display: flex; justify-content: flex-end;">
          <ag-button
            @click=${(e: Event) => {
              const button = e.target as HTMLElement;
              const dialog = button.closest('ag-dialog') as any;
              if (dialog) dialog.open = false;
            }}
          >
            OK
          </ag-button>
        </div>
      </ag-dialog>
    </div>
  `,
};

// Long content with scrolling
export const LongContent: Story = {
  args: {
    heading: 'Terms and Conditions',
    description: 'Please read the terms and conditions below.',
    showCloseButton: true,
  },
  render: (args) => createDialogStory(args, html`
    <div style="max-height: 50vh; overflow-y: auto;">
      <h3>1. Agreement to Terms</h3>
      <p>By accessing and using this service, you accept and agree to be bound by the terms and provision of this agreement.</p>

      <h3>2. Use License</h3>
      <p>Permission is granted to temporarily download one copy of the materials for personal, non-commercial transitory viewing only.</p>

      <h3>3. Disclaimer</h3>
      <p>The materials on this service are provided on an 'as is' basis. We make no warranties, expressed or implied.</p>

      <h3>4. Limitations</h3>
      <p>In no event shall we or our suppliers be liable for any damages arising out of the use or inability to use the materials.</p>

      <h3>5. Revisions</h3>
      <p>We may revise these terms of service at any time without notice. By using this service you are agreeing to be bound by the current version of these terms.</p>

      <h3>6. Governing Law</h3>
      <p>These terms and conditions are governed by and construed in accordance with the laws of your jurisdiction.</p>
    </div>
    <div slot="footer" style="display: flex; gap: 0.5rem; justify-content: flex-end; margin-top: 1rem;">
      <ag-button
        @click=${(e: Event) => {
          const button = e.target as HTMLElement;
          const dialog = button.closest('ag-dialog') as any;
          if (dialog) dialog.open = false;
        }}
      >
        Decline
      </ag-button>
      <ag-button
        @click=${(e: Event) => {
          const button = e.target as HTMLElement;
          const dialog = button.closest('ag-dialog') as any;
          if (dialog) dialog.open = false;
          alert('Terms accepted!');
        }}
      >
        Accept
      </ag-button>
    </div>
  `),
};

// Multiple dialogs
export const MultipleDialogs: Story = {
  render: () => html`
    <div>
      <p style="margin-bottom: 1rem;">Test opening multiple dialogs sequentially</p>
      <ag-button
        @click=${(e: Event) => {
          const button = e.target as HTMLElement;
          const dialog = button.parentElement?.querySelector('#dialog1') as any;
          if (dialog) dialog.open = true;
        }}
      >
        Open First Dialog
      </ag-button>

      <ag-dialog
        id="dialog1"
        .heading=${'First Dialog'}
        .description=${'This is the first dialog.'}
        .showCloseButton=${true}
        @dialog-close=${(e: Event) => {
          const dialog = e.target as any;
          dialog.open = false;
        }}
      >
        <p>You can open a second dialog from here.</p>
        <ag-button
          @click=${(e: Event) => {
            const button = e.target as HTMLElement;
            const container = button.closest('div');
            const dialog2 = container?.getRootNode()?.querySelector('#dialog2') as any;
            if (dialog2) dialog2.open = true;
          }}
        >
          Open Second Dialog
        </ag-button>
      </ag-dialog>

      <ag-dialog
        id="dialog2"
        .heading=${'Second Dialog'}
        .description=${'This is the second dialog.'}
        .showCloseButton=${true}
        @dialog-close=${(e: Event) => {
          const dialog = e.target as any;
          dialog.open = false;
        }}
      >
        <p>This is the second dialog. Close it to return to the first dialog.</p>
      </ag-dialog>
    </div>
  `,
};

// Custom header slot
export const CustomHeader: Story = {
  args: {
    showCloseButton: true,
  },
  render: (args) => html`
    <div>
      <ag-button
        @click=${(e: Event) => {
          const button = e.target as HTMLElement;
          const dialog = button.parentElement?.querySelector('ag-dialog') as any;
          if (dialog) dialog.open = true;
        }}
      >
        Open Dialog
      </ag-button>
      <ag-dialog
        .showCloseButton=${args.showCloseButton}
        @dialog-close=${(e: Event) => {
          const dialog = e.target as any;
          dialog.open = false;
        }}
      >
        <div slot="header" style="display: flex; align-items: center; gap: 1rem;">
          <span style="font-size: 2rem;">🎉</span>
          <div>
            <h2 style="margin: 0;">Success!</h2>
            <p style="margin: 0; font-size: 0.875rem; color: #6b7280;">Your action completed successfully</p>
          </div>
        </div>
        <p>This dialog uses a custom header slot with an icon and subtitle.</p>
      </ag-dialog>
    </div>
  `,
};
