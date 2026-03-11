import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ReactToast } from './ReactToast';
import { ReactButton } from '../../Button/react/ReactButton';

const meta = {
  title: 'AgnosticUI/Toast',
  component: ReactToast,
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
  args: {
    children: <span>Toast notification message</span>,
  },
} satisfies Meta<typeof ReactToast>;

export default meta;
type Story = StoryObj<typeof meta>;

// Toast needs open state - wrap in a controller so the story is interactive.
function ToastDemo(props: React.ComponentProps<typeof ReactToast>) {
  const [open, setOpen] = useState(props.open ?? false);
  return (
    <>
      <ReactButton variant="primary" onClick={() => setOpen(true)}>
        Show Toast
      </ReactButton>
      <ReactToast
        {...props}
        open={open}
        onToastClose={() => setOpen(false)}
      >
        <span>Toast notification message</span>
      </ReactToast>
    </>
  );
}

export const Default: Story = {
  render: (args) => <ToastDemo {...args} />,
};
