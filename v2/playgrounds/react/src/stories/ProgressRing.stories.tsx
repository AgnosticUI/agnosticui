import type { Meta, StoryObj } from "@storybook/react";
import React, { useState, useEffect } from "react";
import {
  ReactProgressRing,
  type AgProgressRingProps,
} from "agnosticui-core/progress-ring/react";

const meta: Meta<AgProgressRingProps> = {
  title: "AgnosticUI React/ProgressRing",
  component: ReactProgressRing,
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
      description: "Progress value (0-100)",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "Size preset",
    },
    variant: {
      control: "select",
      options: ["primary", "success", "warning", "danger", "info"],
      description: "Color variant",
    },
    label: {
      control: "text",
      description: "Accessible label",
    },
    noAnimation: {
      control: "boolean",
      description: "Disable animation",
    },
  },
  args: {
    value: 0,
    size: "medium",
    variant: "primary",
    label: "Progress",
    noAnimation: false,
  },
};

export default meta;
type Story = StoryObj<AgProgressRingProps>;

export const Default: Story = {
  args: {
    value: 0,
    label: "Default progress ring",
  },
};

export const InProgress: Story = {
  args: {
    value: 65,
    label: "Upload in progress",
  },
};

export const Complete: Story = {
  args: {
    value: 100,
    variant: "success",
    label: "Upload complete",
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
      <ReactProgressRing size="small" value={75} label="Small" />
      <ReactProgressRing size="medium" value={75} label="Medium" />
      <ReactProgressRing size="large" value={75} label="Large" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <ReactProgressRing variant="primary" value={60} label="Primary" />
        <div style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>Primary</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <ReactProgressRing variant="success" value={100} label="Success" />
        <div style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>Success</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <ReactProgressRing variant="warning" value={45} label="Warning" />
        <div style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>Warning</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <ReactProgressRing variant="danger" value={30} label="Danger" />
        <div style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>Danger</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <ReactProgressRing variant="info" value={80} label="Info" />
        <div style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>Info</div>
      </div>
    </div>
  ),
};

export const CustomContent: Story = {
  args: {
    value: 75,
    variant: "success",
    label: "Custom content",
  },
  render: (args) => (
    <ReactProgressRing {...args}>
      <span style={{ fontSize: "0.75rem" }}>75/100</span>
    </ReactProgressRing>
  ),
};

export const WithIcon: Story = {
  args: {
    value: 100,
    variant: "success",
    label: "Task complete",
  },
  render: (args) => (
    <ReactProgressRing {...args} size="large">
      <span style={{ fontSize: "1.5rem" }}>✓</span>
    </ReactProgressRing>
  ),
};

export const NoAnimation: Story = {
  args: {
    value: 70,
    noAnimation: true,
    label: "No animation",
  },
};

export const Animated: Story = {
  render: () => {
    const AnimatedExample = () => {
      const [value, setValue] = useState(0);

      useEffect(() => {
        const interval = setInterval(() => {
          setValue((prev) => {
            if (prev >= 100) {
              clearInterval(interval);
              return 100;
            }
            return prev + 1;
          });
        }, 50);

        return () => clearInterval(interval);
      }, []);

      return <ReactProgressRing value={value} label="Animated progress" />;
    };

    return <AnimatedExample />;
  },
};

export const MultipleRings: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
        gap: "2rem",
        maxWidth: "600px",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <ReactProgressRing value={25} variant="danger" label="Critical tasks" />
        <div style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>
          Critical
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <ReactProgressRing
          value={60}
          variant="warning"
          label="In progress tasks"
        />
        <div style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>
          In Progress
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <ReactProgressRing value={85} variant="info" label="Review tasks" />
        <div style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>Review</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <ReactProgressRing
          value={100}
          variant="success"
          label="Completed tasks"
        />
        <div style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>
          Complete
        </div>
      </div>
    </div>
  ),
};
