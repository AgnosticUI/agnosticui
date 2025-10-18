import type { Meta, StoryObj } from "@storybook/react";
import { ReactAlert, type ReactAlertProps } from "agnosticui-core/alert/react";

const meta: Meta<ReactAlertProps> = {
  title: "AgnosticUI React/Alert",
  component: ReactAlert,
  tags: ['autodocs'],
  argTypes: {
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
      description: "The alert variant type",
    },
    bordered: {
      control: "boolean",
      description: "Adds a border around the alert",
    },
    rounded: {
      control: "boolean",
      description: "Applies rounded corners to the alert",
    },
    borderedLeft: {
      control: "boolean",
      description: "Adds a left border accent to the alert",
    },
  },
  args: {
    type: "info",
    bordered: false,
    rounded: false,
    borderedLeft: false,
    children: "This is a default alert.",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <ReactAlert {...args} />,
};

export const Info: Story = {
  args: {
    type: "info",
    children: "This is an info alert.",
  },
  render: (args) => <ReactAlert {...args} />,
};

export const Success: Story = {
  args: {
    type: "success",
    children: "This is a success alert.",
  },
  render: (args) => <ReactAlert {...args} />,
};

export const Warning: Story = {
  args: {
    type: "warning",
    children: "This is a warning alert.",
  },
  render: (args) => <ReactAlert {...args} />,
};

export const Error: Story = {
  args: {
    type: "error",
    children: "This is an error alert.",
  },
  render: (args) => <ReactAlert {...args} />,
};

export const Primary: Story = {
  args: {
    type: "primary",
    children: "This is a primary alert.",
  },
  render: (args) => <ReactAlert {...args} />,
};

export const Bordered: Story = {
  args: {
    bordered: true,
    children: "This is a bordered alert.",
  },
  render: (args) => <ReactAlert {...args} />,
};

export const Rounded: Story = {
  args: {
    rounded: true,
    children: "This is a rounded alert.",
  },
  render: (args) => <ReactAlert {...args} />,
};

export const BorderedLeft: Story = {
  args: {
    borderedLeft: true,
    type: "warning",
    children: "This alert has a left border.",
  },
  render: (args) => <ReactAlert {...args} />,
};

export const AllModifiers: Story = {
  args: {
    type: "success",
    bordered: true,
    rounded: true,
    borderedLeft: true,
    children: "This alert has all modifiers applied.",
  },
  render: (args) => <ReactAlert {...args} />,
};

// CSS Parts customization
export const CSSPartsCustomization: Story = {
  render: () => (
    <>
      <style>{`
        /* Gradient alert style */
        .custom-gradient-alert::part(ag-alert) {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 1.5rem;
          border-radius: 12px;
          border: none;
          box-shadow: 0 8px 16px rgba(102, 126, 234, 0.3);
          font-weight: 600;
        }

        /* Neon glow alert */
        .custom-neon-alert::part(ag-alert) {
          background: #1a1a2e;
          color: #0ff;
          border: 2px solid #0ff;
          padding: 1rem;
          border-radius: 8px;
          box-shadow:
            0 0 10px #0ff,
            0 0 20px #0ff,
            inset 0 0 10px rgba(0, 255, 255, 0.2);
          text-shadow: 0 0 5px #0ff;
        }

        /* Minimalist alert with accent */
        .custom-minimal-alert::part(ag-alert) {
          background: var(--ag-background-secondary);
          color: var(--ag-text-primary);
          padding: 1rem 1rem 1rem 1.5rem;
          border-left: 4px solid var(--ag-primary);
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }

        /* Card-style elevated alert */
        .custom-card-alert::part(ag-alert) {
          background: white;
          color: #333;
          padding: 1.5rem;
          border-radius: 16px;
          border: 1px solid #e5e7eb;
          box-shadow:
            0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .custom-card-alert::part(ag-alert):hover {
          transform: translateY(-2px);
          box-shadow:
            0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
      `}</style>

      <div style={{ padding: "50px", maxWidth: "800px" }}>
        <h3 style={{ marginTop: 0 }}>Styled with CSS Shadow Parts</h3>
        <p style={{ marginBottom: "2rem", color: "#6b7280" }}>
          Alert can be customized using CSS Shadow Parts:
          <code>::part(ag-alert)</code>
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div>
            <h4>Gradient Style</h4>
            <ReactAlert className="custom-gradient-alert">
              🎨 This alert uses a vibrant gradient background with custom shadows
            </ReactAlert>
          </div>

          <div>
            <h4>Neon Glow Effect</h4>
            <ReactAlert className="custom-neon-alert">
              ⚡ Futuristic neon-themed alert with glowing effects
            </ReactAlert>
          </div>

          <div>
            <h4>Minimal with Left Accent</h4>
            <ReactAlert className="custom-minimal-alert">
              💡 Clean, minimal design with a colored left border accent
            </ReactAlert>
          </div>

          <div>
            <h4>Elevated Card Style</h4>
            <ReactAlert className="custom-card-alert">
              📋 Card-style alert with elevation and hover effect
            </ReactAlert>
          </div>
        </div>
      </div>
    </>
  ),
};
