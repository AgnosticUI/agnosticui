import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "agnosticui-core/toast";
import type { ToastProps } from "agnosticui-core/toast";

const meta: Meta<ToastProps> = {
  title: "AgnosticUI Lit/Toast",
  component: "ag-toast",
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
    duration: 50000,
    autoDismiss: true,
    showCloseButton: true,
    pauseOnHover: true,
    bordered: false,
    rounded: true,
    borderedLeft: false,
  },
};

export default meta;

type Story = StoryObj<ToastProps>;

export const Default: Story = {
  args: {
    open: true,
    type: "info",
    position: "top-end",
  },
  render: (args) => html`
    <ag-toast
      .open=${args.open}
      .type=${args.type}
      .position=${args.position}
      .duration=${args.duration}
      .autoDismiss=${args.autoDismiss}
      .showCloseButton=${args.showCloseButton}
      .pauseOnHover=${args.pauseOnHover}
      .bordered=${args.bordered}
      .rounded=${args.rounded}
      .borderedLeft=${args.borderedLeft}
    >
      This is a toast notification
    </ag-toast>
  `,
};

export const Success: Story = {
  args: {
    open: true,
    type: "success",
  },
  render: (args) => html`
    <ag-toast .open=${args.open} .type=${args.type} .position=${args.position}>
      Operation completed successfully!
    </ag-toast>
  `,
};

export const Error: Story = {
  args: {
    open: true,
    type: "error",
  },
  render: (args) => html`
    <ag-toast .open=${args.open} .type=${args.type} .position=${args.position}>
      <svg class="mie8" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"></path><path fill="currentColor" d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></svg>
      An error occurred. Please try again.
    </ag-toast>
  `,
};

export const Warning: Story = {
  args: {
    open: true,
    type: "warning",
  },
  render: (args) => html`
    <ag-toast .open=${args.open} .type=${args.type} .position=${args.position}>
      <svg class="mie8" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"></path><path fill="currentColor" d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></svg>
      Warning: This action cannot be undone.
    </ag-toast>
  `,
};

export const Primary: Story = {
  args: {
    open: true,
    type: "primary",
  },
  render: (args) => html`
    <ag-toast .open=${args.open} .type=${args.type} .position=${args.position}>
      New message received!
    </ag-toast>
  `,
};

// Position Stories
export const TopStart: Story = {
  args: {
    open: true,
    position: "top-start",
  },
  render: (args) => html`
    <ag-toast .open=${args.open} .type=${args.type} .position=${args.position}>
      Toast positioned at top-start
    </ag-toast>
  `,
};

export const TopEnd: Story = {
  args: {
    open: true,
    position: "top-end",
  },
  render: (args) => html`
    <ag-toast .open=${args.open} .type=${args.type} .position=${args.position}>
      Toast positioned at top-end (default)
    </ag-toast>
  `,
};

export const BottomStart: Story = {
  args: {
    open: true,
    position: "bottom-start",
  },
  render: (args) => html`
    <ag-toast .open=${args.open} .type=${args.type} .position=${args.position}>
      Toast positioned at bottom-start
    </ag-toast>
  `,
};

export const BottomEnd: Story = {
  args: {
    open: true,
    position: "bottom-end",
  },
  render: (args) => html`
    <ag-toast .open=${args.open} .type=${args.type} .position=${args.position}>
      Toast positioned at bottom-end
    </ag-toast>
  `,
};

// Auto-Dismiss Stories
export const AutoDismiss: Story = {
  args: {
    open: true,
    type: "info",
    duration: 3000,
    autoDismiss: true,
  },
  render: (args) => html`
    <ag-toast
      .open=${args.open}
      .type=${args.type}
      .position=${args.position}
      .duration=${args.duration}
      .autoDismiss=${args.autoDismiss}
    >
      This toast will auto-dismiss in 3 seconds
    </ag-toast>
  `,
};

export const NoAutoDismiss: Story = {
  args: {
    open: true,
    type: "info",
    autoDismiss: false,
  },
  render: (args) => html`
    <ag-toast
      .open=${args.open}
      .type=${args.type}
      .position=${args.position}
      .autoDismiss=${args.autoDismiss}
      .showCloseButton=${true}
    >
      This toast will not auto-dismiss. Click X to close.
    </ag-toast>
  `,
};

export const WithBorder: Story = {
  args: {
    open: true,
    type: "info",
    bordered: true,
  },
  render: (args) => html`
    <ag-toast
      .open=${args.open}
      .type=${args.type}
      .position=${args.position}
      .bordered=${args.bordered}
    >
      Toast with border
    </ag-toast>
  `,
};

export const WithLeftBorder: Story = {
  args: {
    open: true,
    type: "success",
    borderedLeft: true,
  },
  render: (args) => html`
    <ag-toast
      .open=${args.open}
      .type=${args.type}
      .position=${args.position}
      .borderedLeft=${args.borderedLeft}
    >
      Toast with left border accent
    </ag-toast>
  `,
};

export const NoCloseButton: Story = {
  args: {
    open: true,
    type: "info",
    showCloseButton: false,
  },
  render: (args) => html`
    <ag-toast
      .open=${args.open}
      .type=${args.type}
      .position=${args.position}
      .showCloseButton=${args.showCloseButton}
    >
      Toast without close button
    </ag-toast>
  `,
};
