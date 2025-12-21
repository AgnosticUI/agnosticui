import * as React from "react";
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

// Event Handling Stories
export const WithEventHandlers: Story = {
  name: "With Event Handlers (onToastOpen, onToastClose, onToastDismiss)",
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [events, setEvents] = React.useState<string[]>([]);

    const logEvent = (eventName: string) => {
      setEvents(prev => [...prev, `${eventName} at ${new Date().toLocaleTimeString()}`]);
    };

    return (
      <div style={{ padding: '20px' }}>
        <div style={{ marginBottom: '16px' }}>
          <button
            onClick={() => setIsOpen(true)}
            style={{
              padding: '8px 16px',
              background: 'var(--ag-primary)',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Show Toast
          </button>
          <button
            onClick={() => setEvents([])}
            style={{
              marginLeft: '8px',
              padding: '8px 16px',
              background: 'var(--ag-secondary)',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Clear Events
          </button>
        </div>

        <ReactToast
          open={isOpen}
          type="success"
          position="top-end"
          duration={3000}
          autoDismiss={true}
          showCloseButton={true}
          onToastOpen={() => {
            logEvent('toast-open');
          }}
          onToastClose={() => {
            logEvent('toast-close');
            setIsOpen(false);
          }}
          onToastDismiss={() => {
            logEvent('toast-dismiss (auto)');
          }}
        >
          This toast will auto-dismiss in 3 seconds. Try closing it manually too!
        </ReactToast>

        <div
          style={{
            marginTop: '16px',
            padding: '12px',
            background: 'var(--ag-background-secondary)',
            borderRadius: '4px',
            fontFamily: 'monospace',
            fontSize: '14px',
          }}
        >
          <strong>Event Log:</strong>
          {events.length === 0 ? (
            <div style={{ color: 'var(--ag-text-secondary)', marginTop: '8px' }}>
              No events yet. Click "Show Toast" to start.
            </div>
          ) : (
            <ul style={{ margin: '8px 0 0 0', padding: '0 0 0 20px' }}>
              {events.map((event, index) => (
                <li key={index} style={{ marginBottom: '4px' }}>
                  {event}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div
          style={{
            marginTop: '16px',
            padding: '12px',
            background: 'var(--ag-info-light)',
            borderRadius: '4px',
            fontSize: '14px',
          }}
        >
          <strong>Try this:</strong>
          <ul style={{ margin: '8px 0 0 0', padding: '0 0 0 20px' }}>
            <li>Click "Show Toast" and let it auto-dismiss (3 seconds)</li>
            <li>Click "Show Toast" and manually close it with the X button</li>
            <li>Click "Show Toast" and press Escape to close</li>
            <li>Notice the different events logged for each action</li>
          </ul>
        </div>
      </div>
    );
  },
};

export const EventPropagation: Story = {
  name: "Event Propagation Demo",
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [lastEvent, setLastEvent] = React.useState<string>('None');

    return (
      <div style={{ padding: '20px' }}>
        <button
          onClick={() => setIsOpen(true)}
          style={{
            padding: '8px 16px',
            background: 'var(--ag-primary)',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginBottom: '16px',
          }}
        >
          Open Toast
        </button>

        <ReactToast
          open={isOpen}
          type="info"
          position="top-end"
          duration={5000}
          showCloseButton={true}
          onToastOpen={(e) => {
            setLastEvent('onToastOpen callback invoked');
            console.log('Toast opened via callback prop:', e);
          }}
          onToastClose={(e) => {
            setLastEvent('onToastClose callback invoked');
            setIsOpen(false);
            console.log('Toast closed via callback prop:', e);
          }}
          onToastDismiss={(e) => {
            setLastEvent('onToastDismiss callback invoked');
            console.log('Toast dismissed via callback prop:', e);
          }}
        >
          Watch the event propagation in the console and below!
        </ReactToast>

        <div
          style={{
            padding: '12px',
            background: 'var(--ag-background-secondary)',
            borderRadius: '4px',
            marginTop: '16px',
          }}
        >
          <strong>Last Event:</strong> {lastEvent}
        </div>

        <div
          style={{
            marginTop: '16px',
            padding: '12px',
            background: 'var(--ag-info-light)',
            borderRadius: '4px',
            fontSize: '14px',
          }}
        >
          <strong>Note:</strong> Events are dispatched with <code>bubbles: true</code> and{' '}
          <code>composed: true</code>, allowing them to cross shadow DOM boundaries. Check the
          browser console to see the full event objects.
        </div>
      </div>
    );
  },
};
