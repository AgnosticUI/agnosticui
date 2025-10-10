import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { fn } from 'storybook/test';
import { ReactDialog, DialogHeader, DialogFooter, type ReactDialogProps } from 'agnosticui-core/dialog/react';

const meta: Meta<ReactDialogProps> = {
  title: 'AgnosticUI/Dialog',
  component: ReactDialog,
  tags: ['autodocs'],
  argTypes: {
    // Component props
    open: {
      control: 'boolean',
      description: 'Whether the dialog is open',
    },
    heading: {
      control: 'text',
      description: 'Dialog heading text',
    },
    description: {
      control: 'text',
      description: 'Dialog description text',
    },
    noCloseOnEscape: {
      control: 'boolean',
      description: 'Prevent closing on Escape key',
    },
    noCloseOnBackdrop: {
      control: 'boolean',
      description: 'Prevent closing on backdrop click',
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Show close button in dialog',
    },

    // Event handlers
    onDialogOpen: {
      action: 'dialog-open',
      description: 'Emitted when dialog opens',
    },
    onDialogClose: {
      action: 'dialog-close',
      description: 'Emitted when dialog closes',
    },
    onDialogCancel: {
      action: 'dialog-cancel',
      description: 'Emitted when dialog is cancelled (ESC key)',
    },
  },
  args: {
    open: false,
    noCloseOnEscape: false,
    noCloseOnBackdrop: false,
    showCloseButton: false,
    onDialogOpen: fn(),
    onDialogClose: fn(),
    onDialogCancel: fn(),
  },
} satisfies Meta<ReactDialogProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <button onClick={() => setIsOpen(true)}>Open Dialog</button>
        <ReactDialog
          open={isOpen}
          heading="Dialog Title"
          description="This is a dialog description"
          onDialogClose={() => setIsOpen(false)}
          onDialogCancel={() => setIsOpen(false)}
        >
          <p>This is the main content of the dialog.</p>
        </ReactDialog>
      </div>
    );
  },
};

export const WithCloseButton: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <button onClick={() => setIsOpen(true)}>Open Dialog with Close Button</button>
        <ReactDialog
          open={isOpen}
          heading="Dialog with Close Button"
          showCloseButton={true}
          onDialogClose={() => setIsOpen(false)}
          onDialogCancel={() => setIsOpen(false)}
        >
          <p>This dialog has a close button in the top-right corner.</p>
        </ReactDialog>
      </div>
    );
  },
};

export const WithCustomSlots: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <button onClick={() => setIsOpen(true)}>Open Dialog with Custom Slots</button>
        <ReactDialog
          open={isOpen}
          onDialogClose={() => setIsOpen(false)}
          onDialogCancel={() => setIsOpen(false)}
        >
          <DialogHeader>
            <h2 style={{ margin: 0 }}>Custom Header</h2>
          </DialogHeader>
          <p>This dialog uses custom slotted header and footer content.</p>
          <DialogFooter>
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
              <button onClick={() => setIsOpen(false)}>Cancel</button>
              <button onClick={() => setIsOpen(false)} style={{ fontWeight: 'bold' }}>
                Confirm
              </button>
            </div>
          </DialogFooter>
        </ReactDialog>
      </div>
    );
  },
};

export const NoCloseOnEscape: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <button onClick={() => setIsOpen(true)}>Open Dialog (No ESC Close)</button>
        <ReactDialog
          open={isOpen}
          heading="Cannot Close with ESC"
          noCloseOnEscape={true}
          showCloseButton={true}
          onDialogClose={() => setIsOpen(false)}
        >
          <p>Try pressing ESC - it won't close this dialog.</p>
          <p>You must use the close button or backdrop click.</p>
        </ReactDialog>
      </div>
    );
  },
};

export const NoCloseOnBackdrop: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <button onClick={() => setIsOpen(true)}>Open Dialog (No Backdrop Close)</button>
        <ReactDialog
          open={isOpen}
          heading="Cannot Close on Backdrop"
          noCloseOnBackdrop={true}
          showCloseButton={true}
          onDialogClose={() => setIsOpen(false)}
          onDialogCancel={() => setIsOpen(false)}
        >
          <p>Try clicking outside the dialog - it won't close.</p>
          <p>You must use the close button or ESC key.</p>
        </ReactDialog>
      </div>
    );
  },
};

export const Modal: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        <ReactDialog
          open={isOpen}
          heading="Modal Dialog"
          noCloseOnEscape={true}
          noCloseOnBackdrop={true}
          onDialogClose={() => setIsOpen(false)}
        >
          <p>This is a true modal - you must use the action buttons to close it.</p>
          <DialogFooter>
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
              <button onClick={() => setIsOpen(false)}>Cancel</button>
              <button onClick={() => setIsOpen(false)} style={{ fontWeight: 'bold' }}>
                OK
              </button>
            </div>
          </DialogFooter>
        </ReactDialog>
      </div>
    );
  },
};

export const ConfirmationDialog: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [result, setResult] = useState<string>('');

    const handleConfirm = () => {
      setResult('Confirmed!');
      setIsOpen(false);
    };

    const handleCancel = () => {
      setResult('Cancelled');
      setIsOpen(false);
    };

    return (
      <div style={{ padding: '20px' }}>
        <button onClick={() => setIsOpen(true)}>Delete Item</button>
        {result && <p>Result: {result}</p>}
        <ReactDialog
          open={isOpen}
          heading="Confirm Deletion"
          showCloseButton={false}
          noCloseOnBackdrop={true}
          noCloseOnEscape={true}
          onDialogClose={handleCancel}
        >
          <p>Are you sure you want to delete this item?</p>
          <p>This action cannot be undone.</p>
          <DialogFooter>
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
              <button onClick={handleCancel}>Cancel</button>
              <button
                onClick={handleConfirm}
                style={{
                  fontWeight: 'bold',
                  background: '#dc2626',
                  color: 'white',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Delete
              </button>
            </div>
          </DialogFooter>
        </ReactDialog>
      </div>
    );
  },
};

export const EventTesting: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openCount, setOpenCount] = useState(0);
    const [closeCount, setCloseCount] = useState(0);
    const [cancelCount, setCancelCount] = useState(0);

    const handleOpen = (event: any) => {
      setOpenCount(c => c + 1);
    };

    const handleClose = (event: any) => {
      setCloseCount(c => c + 1);
      setIsOpen(false);
    };

    const handleCancel = (event: any) => {
      setCancelCount(c => c + 1);
      setIsOpen(false);
    };

    return (
      <div style={{ padding: '20px' }}>
        <div style={{ display: 'flex', gap: '2rem', marginBottom: '1rem' }}>
          <p>Open events: {openCount}</p>
          <p>Close events: {closeCount}</p>
          <p>Cancel events (ESC): {cancelCount}</p>
        </div>
        <button onClick={() => setIsOpen(true)}>Open Dialog</button>
        <ReactDialog
          open={isOpen}
          heading="Event Testing Dialog"
          showCloseButton={true}
          onDialogOpen={handleOpen}
          onDialogClose={handleClose}
          onDialogCancel={handleCancel}
        >
          <p>Try different ways to close:</p>
          <ul>
            <li>Close button (triggers close event)</li>
            <li>ESC key (triggers cancel event)</li>
            <li>Backdrop click (triggers cancel event)</li>
          </ul>
        </ReactDialog>
        <p style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '1rem' }}>
          Open the dialog and try different closing methods to see event counts
        </p>
      </div>
    );
  },
};
