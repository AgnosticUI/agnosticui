import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ReactDrawer } from './ReactDrawer';
import { ReactButton } from '../../Button/react/ReactButton';

const meta = {
  title: 'AgnosticUI/Drawer',
  component: ReactDrawer,
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
} satisfies Meta<typeof ReactDrawer>;

export default meta;
type Story = StoryObj<typeof meta>;

// Drawer needs open state - wrap in a controller so the story is interactive.
function DrawerDemo(props: React.ComponentProps<typeof ReactDrawer>) {
  const [open, setOpen] = useState(props.open ?? false);
  return (
    <>
      <ReactButton variant="primary" onClick={() => setOpen(true)}>
        Open Drawer
      </ReactButton>
      <ReactDrawer
        {...props}
        open={open}
        onDrawerClose={() => setOpen(false)}
        onDrawerCancel={() => setOpen(false)}
      >
        <div style={{ padding: '1rem' }}>Drawer content goes here.</div>
      </ReactDrawer>
    </>
  );
}

export const Default: Story = {
  render: (args) => <DrawerDemo {...args} />,
};
