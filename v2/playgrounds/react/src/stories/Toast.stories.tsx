import type { Meta, StoryObj } from "@storybook/react";
import { ReactToast, type ReactToastProps } from "agnosticui-core/toast/react";

const meta: Meta<ReactToastProps> = {
  title: "AgnosticUI React/Toast",
  component: ReactToast,
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: "boolean",
      description: "Controls visibility of the toast",
    },
    type: {
      control: "select",
      options: [
        "default",
        "primary",
        "success",
        "info",
        "danger",
        "warning",
        "error",
      ],
      description: "The toast variant type",
    },
    position: {
      control: "select",
      options: [
        "top",
        "top-start",
        "top-end",
        "bottom",
        "bottom-start",
        "bottom-end",
        "start",
        "end",
      ],
      description: "Viewport position",
    },
    duration: {
      control: "number",
      description: "Auto-dismiss duration in milliseconds",
    },
    autoDismiss: {
      control: "boolean",
      description: "Enable auto-dismiss",
    },
    showCloseButton: {
      control: "boolean",
      description: "Show close button",
    },
    pauseOnHover: {
      control: "boolean",
      description: "Pause auto-dismiss on hover",
    },
    bordered: {
      control: "boolean",
      description: "Adds a border",
    },
    rounded: {
      control: "boolean",
      description: "Applies rounded corners",
    },
    borderedLeft: {
      control: "boolean",
      description: "Adds a left border accent",
    },
  },
  args: {
    open: false,
    type: "info",
    position: "top-end",
    duration: 5000,
    autoDismiss: true,
    showCloseButton: true,
    pauseOnHover: true,
    bordered: false,
    rounded: true,
    borderedLeft: false,
    children: "This is a toast notification",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    children: "This is a toast notification",
  },
  render: (args) => <ReactToast {...args} />,
};

export const Success: Story = {
  args: {
    open: true,
    type: "success",
    children: "Operation completed successfully!",
  },
  render: (args) => <ReactToast {...args} />,
};

export const Error: Story = {
  args: {
    open: true,
    type: "error",
  },
  render: (args) => (
    <ReactToast {...args}>
      <svg className="mie8" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path fill="currentColor" d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path>
      </svg>
      An error occurred. Please try again.
    </ReactToast>
  ),
};

export const Warning: Story = {
  args: {
    open: true,
    type: "warning",
  },
  render: (args) => (
    <ReactToast {...args}>
      <svg className="mie8" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path fill="currentColor" d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path>
      </svg>
      Warning: This action cannot be undone.
    </ReactToast>
  ),
};

export const Primary: Story = {
  args: {
    open: true,
    type: "primary",
    children: "New message received!",
  },
  render: (args) => <ReactToast {...args} />,
};

// Position Stories
export const TopStart: Story = {
  args: {
    open: true,
    position: "top-start",
    children: "Toast positioned at top-start",
  },
  render: (args) => <ReactToast {...args} />,
};

export const TopEnd: Story = {
  args: {
    open: true,
    position: "top-end",
    children: "Toast positioned at top-end (default)",
  },
  render: (args) => <ReactToast {...args} />,
};

export const BottomStart: Story = {
  args: {
    open: true,
    position: "bottom-start",
    children: "Toast positioned at bottom-start",
  },
  render: (args) => <ReactToast {...args} />,
};

export const BottomEnd: Story = {
  args: {
    open: true,
    position: "bottom-end",
    children: "Toast positioned at bottom-end",
  },
  render: (args) => <ReactToast {...args} />,
};

// Auto-Dismiss Stories
export const AutoDismiss: Story = {
  args: {
    open: true,
    type: "info",
    duration: 3000,
    autoDismiss: true,
    children: "This toast will auto-dismiss in 3 seconds",
  },
  render: (args) => <ReactToast {...args} />,
};

export const NoAutoDismiss: Story = {
  args: {
    open: true,
    type: "info",
    autoDismiss: false,
    showCloseButton: true,
    children: "This toast will not auto-dismiss. Click X to close.",
  },
  render: (args) => <ReactToast {...args} />,
};

export const WithBorder: Story = {
  args: {
    open: true,
    type: "info",
    bordered: true,
    children: "Toast with border",
  },
  render: (args) => <ReactToast {...args} />,
};

export const WithLeftBorder: Story = {
  args: {
    open: true,
    type: "success",
    borderedLeft: true,
    children: "Toast with left border accent",
  },
  render: (args) => <ReactToast {...args} />,
};

export const NoCloseButton: Story = {
  args: {
    open: true,
    type: "info",
    showCloseButton: false,
    children: "Toast without close button",
  },
  render: (args) => <ReactToast {...args} />,
};
