import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ReactSkeleton } from "agnosticui-core/skeleton/react";
import type { SkeletonProps } from "agnosticui-core/skeleton/react";

const meta: Meta<SkeletonProps> = {
  title: "AgnosticUI React/SkeletonLoader",
  component: ReactSkeleton,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["text", "circular", "rectangular", "rounded"],
      description: "Shape variant of the skeleton",
    },
    effect: {
      control: "select",
      options: ["pulse", "sheen", "none"],
      description: "Animation effect",
    },
    intensity: {
      control: "select",
      options: ["light", "medium"],
      description: "Background intensity (light uses --ag-background-secondary, medium uses --ag-background-tertiary)",
    },
    width: {
      control: "text",
      description: "Width of the skeleton (CSS value)",
    },
    height: {
      control: "text",
      description: "Height of the skeleton (CSS value)",
    },
  },
};

export default meta;
type Story = StoryObj<SkeletonProps>;

// Default story with all controls
export const Default: Story = {
  args: {
    variant: "text",
    effect: "pulse",
    intensity: "light",
    width: "100%",
    height: "1em",
  },
  render: (args) => <ReactSkeleton {...args} />,
};

// Text Skeleton (default)
export const Text: Story = {
  render: () => (
    <div style={{ width: "300px" }}>
      <ReactSkeleton />
      <ReactSkeleton style={{ marginTop: "8px" }} />
      <ReactSkeleton style={{ marginTop: "8px", width: "60%" }} />
    </div>
  ),
};

// Circular Skeleton (for avatars)
export const Circular: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <ReactSkeleton variant="circular" width="40px" height="40px" />
      <ReactSkeleton variant="circular" width="60px" height="60px" />
      <ReactSkeleton variant="circular" width="80px" height="80px" />
    </div>
  ),
};

// Rectangular Skeleton
export const Rectangular: Story = {
  render: () => (
    <ReactSkeleton variant="rectangular" width="300px" height="200px" />
  ),
};

// Rounded Skeleton (for cards/images)
export const Rounded: Story = {
  render: () => (
    <ReactSkeleton variant="rounded" width="300px" height="200px" />
  ),
};

// Pulse Effect (default)
export const PulseEffect: Story = {
  render: () => (
    <div style={{ width: "300px" }}>
      <ReactSkeleton effect="pulse" />
      <ReactSkeleton effect="pulse" style={{ marginTop: "8px" }} />
      <ReactSkeleton
        effect="pulse"
        style={{ marginTop: "8px", width: "60%" }}
      />
    </div>
  ),
};

// Sheen Effect
export const SheenEffect: Story = {
  render: () => (
    <div style={{ width: "300px" }}>
      <ReactSkeleton effect="sheen" />
      <ReactSkeleton effect="sheen" style={{ marginTop: "8px" }} />
      <ReactSkeleton
        effect="sheen"
        style={{ marginTop: "8px", width: "60%" }}
      />
    </div>
  ),
};

// No Animation
export const NoAnimation: Story = {
  render: () => (
    <div style={{ width: "300px" }}>
      <ReactSkeleton effect="none" />
      <ReactSkeleton effect="none" style={{ marginTop: "8px" }} />
      <ReactSkeleton effect="none" style={{ marginTop: "8px", width: "60%" }} />
    </div>
  ),
};

// User Profile Card Loading
export const UserProfileLoading: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "16px",
        padding: "20px",
        border: "1px solid var(--ag-border)",
        borderRadius: "var(--ag-radius-md)",
        maxWidth: "400px",
      }}
    >
      <ReactSkeleton variant="circular" width="60px" height="60px" />
      <div style={{ flex: 1 }}>
        <ReactSkeleton width="40%" height="16px" />
        <ReactSkeleton width="60%" height="14px" style={{ marginTop: "8px" }} />
        <ReactSkeleton width="80%" height="14px" style={{ marginTop: "8px" }} />
      </div>
    </div>
  ),
};

// Article Card Loading
export const ArticleCardLoading: Story = {
  render: () => (
    <div
      style={{
        border: "1px solid var(--ag-border)",
        borderRadius: "var(--ag-radius-md)",
        overflow: "hidden",
        maxWidth: "350px",
      }}
    >
      <ReactSkeleton variant="rectangular" width="100%" height="200px" />
      <div style={{ padding: "16px" }}>
        <ReactSkeleton width="60%" height="20px" />
        <ReactSkeleton
          width="100%"
          height="14px"
          style={{ marginTop: "12px" }}
        />
        <ReactSkeleton
          width="100%"
          height="14px"
          style={{ marginTop: "8px" }}
        />
        <ReactSkeleton width="40%" height="14px" style={{ marginTop: "8px" }} />
      </div>
    </div>
  ),
};

// List Loading
export const ListLoading: Story = {
  render: () => (
    <div style={{ maxWidth: "500px" }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          style={{
            display: "flex",
            gap: "12px",
            alignItems: "center",
            marginBottom: "16px",
          }}
        >
          <ReactSkeleton variant="circular" width="40px" height="40px" />
          <div style={{ flex: 1 }}>
            <ReactSkeleton width="60%" height="16px" />
            <ReactSkeleton
              width="40%"
              height="14px"
              style={{ marginTop: "8px" }}
            />
          </div>
        </div>
      ))}
    </div>
  ),
};

// Table Loading
export const TableLoading: Story = {
  render: () => (
    <div style={{ maxWidth: "600px" }}>
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "16px",
            marginBottom: "12px",
            padding: "12px",
            border: "1px solid var(--ag-border)",
            borderRadius: "var(--ag-radius-sm)",
          }}
        >
          <ReactSkeleton height="16px" />
          <ReactSkeleton height="16px" />
          <ReactSkeleton height="16px" />
        </div>
      ))}
    </div>
  ),
};

// Custom Dimensions
export const CustomDimensions: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <ReactSkeleton width="100px" height="20px" />
      <ReactSkeleton width="200px" height="30px" />
      <ReactSkeleton width="300px" height="40px" />
      <ReactSkeleton width="400px" height="50px" />
    </div>
  ),
};

// Intensity Comparison
export const IntensityComparison: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <h4 style={{ marginBottom: "8px" }}>Light Intensity (default)</h4>
        <div style={{ width: "300px" }}>
          <ReactSkeleton intensity="light" />
          <ReactSkeleton intensity="light" style={{ marginTop: "8px" }} />
          <ReactSkeleton intensity="light" style={{ marginTop: "8px", width: "60%" }} />
        </div>
      </div>
      <div>
        <h4 style={{ marginBottom: "8px" }}>Medium Intensity</h4>
        <div style={{ width: "300px" }}>
          <ReactSkeleton intensity="medium" />
          <ReactSkeleton intensity="medium" style={{ marginTop: "8px" }} />
          <ReactSkeleton intensity="medium" style={{ marginTop: "8px", width: "60%" }} />
        </div>
      </div>
      <div>
        <h4 style={{ marginBottom: "8px" }}>Side by Side</h4>
        <div style={{ display: "flex", gap: "16px" }}>
          <div style={{ flex: 1 }}>
            <p style={{ marginBottom: "8px", fontSize: "12px" }}>Light</p>
            <ReactSkeleton intensity="light" width="200px" height="100px" variant="rounded" />
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ marginBottom: "8px", fontSize: "12px" }}>Medium</p>
            <ReactSkeleton intensity="medium" width="200px" height="100px" variant="rounded" />
          </div>
        </div>
      </div>
    </div>
  ),
};

// Dark Mode Test
export const DarkModeTest: Story = {
  render: () => (
    <div>
      <p style={{ marginBottom: "16px" }}>
        Toggle dark mode in your browser to test:
      </p>
      <div style={{ display: "flex", gap: "16px" }}>
        <div>
          <h4 style={{ marginBottom: "8px" }}>Pulse Effect</h4>
          <ReactSkeleton effect="pulse" width="200px" />
        </div>
        <div>
          <h4 style={{ marginBottom: "8px" }}>Sheen Effect</h4>
          <ReactSkeleton effect="sheen" width="200px" />
        </div>
      </div>
    </div>
  ),
};

// Loading State Container Example
const LoadingStateExample = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <button
        onClick={() => setLoading(!loading)}
        style={{
          padding: "8px 16px",
          marginBottom: "16px",
          cursor: "pointer",
        }}
      >
        Toggle Loading
      </button>
      <div
        style={{
          padding: "20px",
          border: "1px solid var(--ag-border)",
          borderRadius: "var(--ag-radius-md)",
          maxWidth: "400px",
        }}
      >
        {loading ? (
          <div>
            <ReactSkeleton width="60%" height="20px" />
            <ReactSkeleton
              width="100%"
              height="14px"
              style={{ marginTop: "12px" }}
            />
            <ReactSkeleton
              width="100%"
              height="14px"
              style={{ marginTop: "8px" }}
            />
            <ReactSkeleton
              width="40%"
              height="14px"
              style={{ marginTop: "8px" }}
            />
          </div>
        ) : (
          <div>
            <h3>Article Title</h3>
            <p>
              This is the actual content that loads after the skeleton
              disappears. The skeleton provides a visual placeholder while the
              real content is being fetched.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export const LoadingStateContainer: Story = {
  render: () => <LoadingStateExample />,
};
