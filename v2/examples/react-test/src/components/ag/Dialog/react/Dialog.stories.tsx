import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ReactDialog, DialogHeader, DialogFooter } from './ReactDialog';
import { ReactButton } from '../../Button/react/ReactButton';

const meta = {
  title: 'AgnosticUI/Dialog',
  component: ReactDialog,
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
} satisfies Meta<typeof ReactDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

// Dialog needs open state - wrap in a controller so the story is interactive.
function DialogDemo(props: React.ComponentProps<typeof ReactDialog>) {
  const [open, setOpen] = useState(props.open ?? false);
  return (
    <>
      <ReactButton variant="primary" onClick={() => setOpen(true)}>
        Open Dialog
      </ReactButton>
      <ReactDialog
        {...props}
        open={open}
        onDialogClose={() => setOpen(false)}
        onDialogCancel={() => setOpen(false)}
      >
        <DialogHeader>
          <p>Dialog body content goes here. You can put any React content inside.</p>
        </DialogHeader>
        <DialogFooter>
          <ReactButton onClick={() => setOpen(false)}>Cancel</ReactButton>
          <ReactButton variant="primary" onClick={() => setOpen(false)}>
            Confirm
          </ReactButton>
        </DialogFooter>
      </ReactDialog>
    </>
  );
}

export const Default: Story = {
  render: (args) => <DialogDemo {...args} />,
};

export const OpenByDefault: Story = {
  args: { open: true },
  render: (args) => <DialogDemo {...args} />,
};

export const DrawerEnd: Story = {
  args: { heading: 'Drawer (end)', drawerPosition: 'end' },
  render: (args) => <DialogDemo {...args} />,
};

export const DrawerStart: Story = {
  args: { heading: 'Drawer (start)', drawerPosition: 'start' },
  render: (args) => <DialogDemo {...args} />,
};

