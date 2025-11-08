import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  ReactPopover,
  PopoverTrigger,
  PopoverTitle,
  PopoverContent,
  type ReactPopoverProps,
} from "agnosticui-core/popover/react";

const meta: Meta<ReactPopoverProps> = {
  title: "AgnosticUI React/Popover",
  component: ReactPopover,
  tags: ["autodocs"],
  argTypes: {
    placement: {
      control: "select",
      options: [
        "top",
        "top-start",
        "top-end",
        "right",
        "right-start",
        "right-end",
        "bottom",
        "bottom-start",
        "bottom-end",
        "left",
        "left-start",
        "left-end",
      ],
      description: "Placement of the popover relative to trigger",
    },
    distance: {
      control: "number",
      description: "Distance from trigger element in pixels",
    },
    skidding: {
      control: "number",
      description: "Offset along the trigger element",
    },
    arrow: {
      control: "boolean",
      description: "Show arrow pointing to trigger",
    },
    disabled: {
      control: "boolean",
      description: "Disable popover",
    },
    triggerType: {
      control: "select",
      options: ["click", "hover", "focus"],
      description: "How to trigger the popover",
    },
    matchTriggerWidth: {
      control: "boolean",
      description: "Match popover width to trigger width",
    },
    showCloseButton: {
      control: "boolean",
      description: "Show close button in header",
    },
    closeLabel: {
      control: "text",
      description: "Accessible label for close button",
    },
  },
};

export default meta;
type Story = StoryObj<ReactPopoverProps>;

// Default story with all controls
export const Default: Story = {
  args: {
    placement: "bottom",
    distance: 8,
    skidding: 0,
    arrow: true,
    disabled: false,
    triggerType: "click",
    matchTriggerWidth: false,
    showCloseButton: true,
    closeLabel: "Close popover",
  },
  render: (args) => (
    <ReactPopover {...args}>
      <PopoverTrigger>
        <button>Open Popover</button>
      </PopoverTrigger>
      <PopoverTitle>
        <span>Popover Title</span>
      </PopoverTitle>
      <PopoverContent>
        <p>
          This is the popover content. You can put any content here including
          text, links, buttons, and more.
        </p>
      </PopoverContent>
    </ReactPopover>
  ),
};

// Click trigger (default)
export const ClickTrigger: Story = {
  render: () => (
    <ReactPopover triggerType="click">
      <PopoverTrigger>
        <button>Click Me</button>
      </PopoverTrigger>
      <PopoverTitle>
        <span>Click Popover</span>
      </PopoverTitle>
      <PopoverContent>
        <p>This popover opens when you click the button.</p>
        <button style={{ marginTop: "8px", padding: "4px 8px" }}>
          Action Button
        </button>
      </PopoverContent>
    </ReactPopover>
  ),
};

// Hover trigger
export const HoverTrigger: Story = {
  render: () => (
    <ReactPopover triggerType="hover">
      <PopoverTrigger>
        <button>Hover Me</button>
      </PopoverTrigger>
      <PopoverTitle>
        <span>Hover Popover</span>
      </PopoverTitle>
      <PopoverContent>
        <p>This popover opens when you hover over the button.</p>
      </PopoverContent>
    </ReactPopover>
  ),
};

// Focus trigger
export const FocusTrigger: Story = {
  render: () => (
    <ReactPopover triggerType="focus">
      <PopoverTrigger>
        <button>Focus Me</button>
      </PopoverTrigger>
      <PopoverTitle>
        <span>Focus Popover</span>
      </PopoverTitle>
      <PopoverContent>
        <p>
          This popover opens when the button receives focus (keyboard
          navigation).
        </p>
      </PopoverContent>
    </ReactPopover>
  ),
};

// Different placements
export const Placements: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "80px",
        padding: "100px",
        alignItems: "center",
      }}
    >
      <ReactPopover placement="top">
        <PopoverTrigger>
          <button>Top</button>
        </PopoverTrigger>
        <PopoverTitle>
          <span>Top Placement</span>
        </PopoverTitle>
        <PopoverContent>
          <p>Popover positioned above</p>
        </PopoverContent>
      </ReactPopover>

      <div style={{ display: "flex", gap: "200px" }}>
        <ReactPopover placement="left">
          <PopoverTrigger>
            <button>Left</button>
          </PopoverTrigger>
          <PopoverTitle>
            <span>Left Placement</span>
          </PopoverTitle>
          <PopoverContent>
            <p>Popover positioned to the left</p>
          </PopoverContent>
        </ReactPopover>

        <ReactPopover placement="right">
          <PopoverTrigger>
            <button>Right</button>
          </PopoverTrigger>
          <PopoverTitle>
            <span>Right Placement</span>
          </PopoverTitle>
          <PopoverContent>
            <p>Popover positioned to the right</p>
          </PopoverContent>
        </ReactPopover>
      </div>

      <ReactPopover placement="bottom">
        <PopoverTrigger>
          <button>Bottom</button>
        </PopoverTrigger>
        <PopoverTitle>
          <span>Bottom Placement</span>
        </PopoverTitle>
        <PopoverContent>
          <p>Popover positioned below</p>
        </PopoverContent>
      </ReactPopover>
    </div>
  ),
};

// No arrow
export const NoArrow: Story = {
  render: () => (
    <ReactPopover arrow={false}>
      <PopoverTrigger>
        <button>No Arrow</button>
      </PopoverTrigger>
      <PopoverTitle>
        <span>Popover Without Arrow</span>
      </PopoverTitle>
      <PopoverContent>
        <p>This popover doesn't have an arrow pointing to the trigger.</p>
      </PopoverContent>
    </ReactPopover>
  ),
};

// No close button
export const NoCloseButton: Story = {
  render: () => (
    <ReactPopover showCloseButton={false}>
      <PopoverTrigger>
        <button>No Close Button</button>
      </PopoverTrigger>
      <PopoverTitle>
        <span>Title Only</span>
      </PopoverTitle>
      <PopoverContent>
        <p>
          This popover has no close button in the header. Click outside to
          close.
        </p>
      </PopoverContent>
    </ReactPopover>
  ),
};

// Content only (no title)
export const ContentOnly: Story = {
  render: () => (
    <ReactPopover>
      <PopoverTrigger>
        <button>Simple Popover</button>
      </PopoverTrigger>
      <PopoverContent>
        <p>Just content, no title. The close button is still shown.</p>
      </PopoverContent>
    </ReactPopover>
  ),
};

// Rich content
export const RichContent: Story = {
  render: () => (
    <ReactPopover>
      <PopoverTrigger>
        <button>User Profile</button>
      </PopoverTrigger>
      <PopoverTitle>
        <span>John Doe</span>
      </PopoverTitle>
      <PopoverContent>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "var(--ag-primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              JD
            </div>
            <div>
              <div style={{ fontWeight: 600 }}>John Doe</div>
              <div
                style={{
                  fontSize: "14px",
                  color: "var(--ag-text-secondary)",
                }}
              >
                john@example.com
              </div>
            </div>
          </div>
          <div
            style={{
              paddingTop: "8px",
              borderTop: "1px solid var(--ag-border)",
            }}
          >
            <button
              style={{
                width: "100%",
                padding: "8px",
                background: "var(--ag-primary)",
                color: "white",
                border: "none",
                borderRadius: "var(--ag-radius-sm)",
                cursor: "pointer",
              }}
            >
              View Profile
            </button>
          </div>
        </div>
      </PopoverContent>
    </ReactPopover>
  ),
};

// Form in popover
export const FormInPopover: Story = {
  render: () => (
    <ReactPopover>
      <PopoverTrigger>
        <button>Add Comment</button>
      </PopoverTrigger>
      <PopoverTitle>
        <span>New Comment</span>
      </PopoverTitle>
      <PopoverContent>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            minWidth: "250px",
          }}
        >
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "4px",
                fontSize: "14px",
              }}
            >
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid var(--ag-border)",
                borderRadius: "var(--ag-radius-sm)",
                boxSizing: "border-box",
              }}
            />
          </div>
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "4px",
                fontSize: "14px",
              }}
            >
              Comment
            </label>
            <textarea
              placeholder="Your comment"
              rows={3}
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid var(--ag-border)",
                borderRadius: "var(--ag-radius-sm)",
                resize: "vertical",
                boxSizing: "border-box",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              padding: "8px",
              background: "var(--ag-primary)",
              color: "white",
              border: "none",
              borderRadius: "var(--ag-radius-sm)",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>
      </PopoverContent>
    </ReactPopover>
  ),
};

// Match trigger width
export const MatchTriggerWidth: Story = {
  render: () => (
    <ReactPopover matchTriggerWidth={true}>
      <PopoverTrigger>
        <button style={{ width: "300px" }}>Wide Trigger Button</button>
      </PopoverTrigger>
      <PopoverTitle>
        <span>Matched Width</span>
      </PopoverTitle>
      <PopoverContent>
        <p>This popover's width matches the trigger button's width.</p>
      </PopoverContent>
    </ReactPopover>
  ),
};

// Disabled state
export const Disabled: Story = {
  render: () => (
    <ReactPopover disabled={true}>
      <PopoverTrigger>
        <button>Disabled Popover</button>
      </PopoverTrigger>
      <PopoverTitle>
        <span>This Won't Open</span>
      </PopoverTitle>
      <PopoverContent>
        <p>The popover is disabled and won't open.</p>
      </PopoverContent>
    </ReactPopover>
  ),
};

// Multiple popovers
export const MultiplePopovers: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px" }}>
      <ReactPopover>
        <PopoverTrigger>
          <button>Info</button>
        </PopoverTrigger>
        <PopoverTitle>
          <span>Information</span>
        </PopoverTitle>
        <PopoverContent>
          <p>This is some helpful information.</p>
        </PopoverContent>
      </ReactPopover>

      <ReactPopover>
        <PopoverTrigger>
          <button>Help</button>
        </PopoverTrigger>
        <PopoverTitle>
          <span>Help</span>
        </PopoverTitle>
        <PopoverContent>
          <p>Need help? Check our documentation.</p>
        </PopoverContent>
      </ReactPopover>

      <ReactPopover>
        <PopoverTrigger>
          <button>Settings</button>
        </PopoverTrigger>
        <PopoverTitle>
          <span>Settings</span>
        </PopoverTitle>
        <PopoverContent>
          <p>Adjust your preferences here.</p>
        </PopoverContent>
      </ReactPopover>
    </div>
  ),
};

// Distance and skidding
export const DistanceAndSkidding: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "32px", padding: "50px" }}>
      <ReactPopover distance={20}>
        <PopoverTrigger>
          <button>Large Distance</button>
        </PopoverTrigger>
        <PopoverTitle>
          <span>20px Distance</span>
        </PopoverTitle>
        <PopoverContent>
          <p>Popover with 20px distance from trigger</p>
        </PopoverContent>
      </ReactPopover>

      <ReactPopover skidding={20}>
        <PopoverTrigger>
          <button>Skidding</button>
        </PopoverTrigger>
        <PopoverTitle>
          <span>20px Skidding</span>
        </PopoverTitle>
        <PopoverContent>
          <p>Popover offset 20px along the trigger</p>
        </PopoverContent>
      </ReactPopover>
    </div>
  ),
};

// Event handling
const EventHandlingExample = () => {
  const [showCount, setShowCount] = React.useState(0);
  const [hideCount, setHideCount] = React.useState(0);

  return (
    <div>
      <ReactPopover
        onShow={() => setShowCount((c) => c + 1)}
        onHide={() => setHideCount((c) => c + 1)}
      >
        <PopoverTrigger>
          <button>Toggle Popover</button>
        </PopoverTrigger>
        <PopoverTitle>
          <span>Event Tracking</span>
        </PopoverTitle>
        <PopoverContent>
          <p>Open and close this popover to see the event counts.</p>
        </PopoverContent>
      </ReactPopover>
      <div style={{ marginTop: "16px" }}>
        <p>Show events: {showCount}</p>
        <p>Hide events: {hideCount}</p>
      </div>
    </div>
  );
};

export const EventHandling: Story = {
  render: () => <EventHandlingExample />,
};
