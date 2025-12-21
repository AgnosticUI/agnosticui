import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import { ReactButtonFx, type ReactButtonFxProps } from "agnosticui-core/button-fx/react";
import { Bomb } from "lucide-react";
import { ReactIcon } from "agnosticui-core/icon/react";
const meta: Meta<ReactButtonFxProps> = {
  title: "AgnosticUI React/ButtonFx",
  component: ReactButtonFx,
  tags: ["autodocs"],
  argTypes: {
    // FX Props
    fx: {
      control: "select",
      options: [
        "",
        "bounce",
        "pulse",
        "jelly",
        "press-pop",
        "slide-in",
        "grow",
        "shrink",
        "push",
        "bg-slide",
        "side-slide",
        "press-shadow",
        "shake",
        "wobble",
      ],
      description: "FX effect to apply (can be array for multiple effects)",
    },
    fxSpeed: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "Animation duration speed",
    },
    fxEase: {
      control: "select",
      options: [
        "ease",
        "ease-in",
        "ease-out",
        "ease-in-out",
        "bounce",
        "spring-sm",
        "spring-md",
        "spring-lg",
      ],
      description: "Animation easing function",
    },
    fxDisabled: {
      control: "boolean",
      description: "Disable FX effects entirely",
    },
    // Button Props
    variant: {
      control: "select",
      options: ["", "primary", "secondary", "success", "warning", "danger", "monochrome"],
      description: "Visual style of the button",
    },
    size: {
      control: "select",
      options: ["x-sm", "sm", "md", "lg", "xl"],
      description: "Size of the button",
    },
    shape: {
      control: "select",
      options: ["", "capsule", "rounded", "circle", "square", "rounded-square"],
      description: "Shape of the button",
    },
    bordered: {
      control: "boolean",
      description: "Applies a bordered style with transparent background",
    },
    ghost: {
      control: "boolean",
      description: "Minimal button with transparent background",
    },
    link: {
      control: "boolean",
      description: "Link-style button with underline on hover",
    },
    type: {
      control: "select",
      options: ["button", "submit", "reset"],
      description: "Button type for form behavior",
    },
    disabled: {
      control: "boolean",
      description: "Disables the button",
    },
    loading: {
      control: "boolean",
      description: "Shows a loading state",
    },
  },
  args: {
    fx: "bounce",
    fxSpeed: "md",
    fxEase: "spring-md",
    fxDisabled: false,
    variant: "primary",
    size: "md",
    shape: "",
    bordered: false,
    ghost: false,
    link: false,
    type: "button",
    disabled: false,
    loading: false,
    onToggle: fn(),
    onFocus: fn(),
    onBlur: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story with all controls
export const Default: Story = {
  args: {},
  render: (args) => (
    <div style={{ display: "flex", justifyContent: "center", padding: "50px" }}>
      <ReactButtonFx {...args}>Hover Me</ReactButtonFx>
    </div>
  ),
};

// ========================================
// Individual FX Effect Stories
// ========================================

export const Bounce: Story = {
  args: {
    fx: "bounce",
    variant: "primary",
  },
  render: (args) => (
    <div style={{ display: "flex", justifyContent: "center", padding: "50px" }}>
      <ReactButtonFx {...args}>Bounce Effect</ReactButtonFx>
    </div>
  ),
};

export const Pulse: Story = {
  args: {
    fx: "pulse",
    variant: "primary",
  },
  render: (args) => (
    <div style={{ display: "flex", justifyContent: "center", padding: "50px" }}>
      <ReactButtonFx {...args}>Pulse Effect</ReactButtonFx>
    </div>
  ),
};

export const Jelly: Story = {
  args: {
    fx: "jelly",
    variant: "primary",
  },
  render: (args) => (
    <div style={{ display: "flex", justifyContent: "center", padding: "50px" }}>
      <ReactButtonFx {...args}>Jelly Effect</ReactButtonFx>
    </div>
  ),
};

export const PressPop: Story = {
  args: {
    fx: "press-pop",
    variant: "primary",
  },
  render: (args) => (
    <div style={{ display: "flex", justifyContent: "center", padding: "50px" }}>
      <ReactButtonFx {...args}>Click Me (Active)</ReactButtonFx>
    </div>
  ),
};

export const SlideIn: Story = {
  args: {
    fx: "slide-in",
    variant: "primary",
  },
  render: (args) => (
    <div style={{ display: "flex", justifyContent: "center", padding: "50px" }}>
      <ReactButtonFx {...args}>Slide In (On Mount)</ReactButtonFx>
    </div>
  ),
};

export const Grow: Story = {
  args: {
    fx: "grow",
    variant: "success",
  },
  render: (args) => (
    <div style={{ display: "flex", justifyContent: "center", padding: "50px" }}>
      <ReactButtonFx {...args}>Grow Effect</ReactButtonFx>
    </div>
  ),
};

export const Shrink: Story = {
  args: {
    fx: "shrink",
    variant: "warning",
  },
  render: (args) => (
    <div style={{ display: "flex", justifyContent: "center", padding: "50px" }}>
      <ReactButtonFx {...args}>Shrink Effect</ReactButtonFx>
    </div>
  ),
};

export const Push: Story = {
  args: {
    fx: "push",
    variant: "primary",
  },
  render: (args) => (
    <div style={{ display: "flex", justifyContent: "center", padding: "50px" }}>
      <ReactButtonFx {...args}>Push Effect</ReactButtonFx>
    </div>
  ),
};

export const BackgroundSlide: Story = {
  args: {
    fx: "bg-slide",
    fxSpeed: "md",
    fxEase: "ease-out",
    variant: "primary",
    shape: "rounded",
  },
  render: (args) => (
    <div style={{ display: "flex", justifyContent: "center", padding: "50px" }}>
      <ReactButtonFx {...args}>Background Slide</ReactButtonFx>
    </div>
  ),
};

export const SideSlide: Story = {
  args: {
    fx: "side-slide",
    fxSpeed: "md",
    fxEase: "ease-out",
    variant: "secondary",
    shape: "rounded",
  },
  render: (args) => (
    <div style={{ display: "flex", justifyContent: "center", padding: "50px" }}>
      <ReactButtonFx {...args}>Side Slide</ReactButtonFx>
    </div>
  ),
};

export const PressShadow: Story = {
  args: {
    fx: "press-shadow",
    variant: "primary",
  },
  render: (args) => (
    <div style={{ display: "flex", justifyContent: "center", padding: "50px" }}>
      <ReactButtonFx {...args}>Press Shadow</ReactButtonFx>
    </div>
  ),
};

export const Shake: Story = {
  args: {
    fx: "shake",
    variant: "danger",
  },
  render: (args) => (
    <div style={{ display: "flex", justifyContent: "center", padding: "50px" }}>
      <ReactButtonFx {...args}>Shake Effect</ReactButtonFx>
    </div>
  ),
};

export const Wobble: Story = {
  args: {
    fx: "wobble",
    variant: "warning",
  },
  render: (args) => (
    <div style={{ display: "flex", justifyContent: "center", padding: "50px" }}>
      <ReactButtonFx {...args}>Wobble Effect</ReactButtonFx>
    </div>
  ),
};

// ========================================
// FX Speed Variations
// ========================================

export const SpeedComparison: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
        alignItems: "center",
        padding: "50px",
      }}
    >
      <ReactButtonFx fx="pulse" fxSpeed="xs" variant="primary">
        XS Speed
      </ReactButtonFx>
      <ReactButtonFx fx="pulse" fxSpeed="sm" variant="primary">
        SM Speed
      </ReactButtonFx>
      <ReactButtonFx fx="pulse" fxSpeed="md" variant="primary">
        MD Speed (Default)
      </ReactButtonFx>
      <ReactButtonFx fx="pulse" fxSpeed="lg" variant="primary">
        LG Speed
      </ReactButtonFx>
      <ReactButtonFx fx="pulse" fxSpeed="xl" variant="primary">
        XL Speed
      </ReactButtonFx>
    </div>
  ),
};

// ========================================
// FX Easing Variations
// ========================================

export const EasingComparison: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
        alignItems: "center",
        padding: "50px",
      }}
    >
      <ReactButtonFx fx="bounce" fxEase="ease" variant="primary">
        Ease
      </ReactButtonFx>
      <ReactButtonFx fx="bounce" fxEase="ease-in" variant="primary">
        Ease-In
      </ReactButtonFx>
      <ReactButtonFx fx="bounce" fxEase="ease-out" variant="primary">
        Ease-Out
      </ReactButtonFx>
      <ReactButtonFx fx="bounce" fxEase="bounce" variant="primary">
        Bounce
      </ReactButtonFx>
      <ReactButtonFx fx="bounce" fxEase="spring-sm" variant="primary">
        Spring SM
      </ReactButtonFx>
      <ReactButtonFx fx="bounce" fxEase="spring-md" variant="primary">
        Spring MD
      </ReactButtonFx>
      <ReactButtonFx fx="bounce" fxEase="spring-lg" variant="primary">
        Spring LG
      </ReactButtonFx>
    </div>
  ),
};

// ========================================
// Experimental: Testing Combined Effects
// ========================================
// Note: Currently fx only accepts a single effect name.
// We'll create curated combo effects like "bounce-pulse" after experimentation.

// ========================================
// Button Variants with FX
// ========================================

export const VariantsShowcase: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
        alignItems: "center",
        padding: "50px",
      }}
    >
      <ReactButtonFx fx="pulse" variant="primary">
        Primary
      </ReactButtonFx>
      <ReactButtonFx fx="pulse" variant="secondary">
        Secondary
      </ReactButtonFx>
      <ReactButtonFx fx="pulse" variant="success">
        Success
      </ReactButtonFx>
      <ReactButtonFx fx="pulse" variant="warning">
        Warning
      </ReactButtonFx>
      <ReactButtonFx fx="pulse" variant="danger">
        Danger
      </ReactButtonFx>
      <ReactButtonFx fx="pulse" variant="monochrome">
        Monochrome
      </ReactButtonFx>
    </div>
  ),
};

// ========================================
// Size Variations with FX
// ========================================

export const SizesShowcase: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
        alignItems: "center",
        padding: "50px",
      }}
    >
      <ReactButtonFx fx="jelly" size="x-sm" variant="primary">
        X-Small
      </ReactButtonFx>
      <ReactButtonFx fx="jelly" size="sm" variant="primary">
        Small
      </ReactButtonFx>
      <ReactButtonFx fx="jelly" size="md" variant="primary">
        Medium
      </ReactButtonFx>
      <ReactButtonFx fx="jelly" size="lg" variant="primary">
        Large
      </ReactButtonFx>
      <ReactButtonFx fx="jelly" size="xl" variant="primary">
        X-Large
      </ReactButtonFx>
    </div>
  ),
};

// ========================================
// Effects Gallery - Comprehensive Showcase
// ========================================

export const EffectsGallery: Story = {
  render: () => (
    <div style={{ padding: "2rem", maxWidth: "1400px", margin: "0 auto" }}>
      {/* Bounce Effect */}
      <div style={{ marginBottom: "3rem" }}>
        <h3 style={{ marginBottom: "1rem", color: "#1f2328", fontSize: "1.25rem" }}>
          Bounce <span style={{ fontWeight: "normal", fontSize: "0.875rem", color: "#6b7280" }}>Vertical pop (hover)</span>
        </h3>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
          <ReactButtonFx fx="bounce" fxEase="spring-md" variant="primary" shape="rounded">Primary</ReactButtonFx>
          <ReactButtonFx fx="bounce" fxEase="spring-md" variant="success" shape="rounded">Success</ReactButtonFx>
          <ReactButtonFx fx="bounce" fxEase="spring-md" variant="warning" shape="rounded">Warning</ReactButtonFx>
          <ReactButtonFx fx="bounce" fxEase="spring-md" variant="danger" shape="rounded">Danger</ReactButtonFx>
          <ReactButtonFx fx="bounce" fxEase="spring-md" variant="primary" bordered shape="rounded">Bordered</ReactButtonFx>
          <ReactButtonFx fx="bounce" fxEase="spring-md" variant="success" shape="capsule" bordered>Capsule</ReactButtonFx>
        </div>
      </div>

      {/* Pulse Effect */}
      <div style={{ marginBottom: "3rem" }}>
        <h3 style={{ marginBottom: "1rem", color: "#1f2328", fontSize: "1.25rem" }}>
          Pulse <span style={{ fontWeight: "normal", fontSize: "0.875rem", color: "#6b7280" }}>Scale grow (hover)</span>
        </h3>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
          <ReactButtonFx fx="pulse" fxEase="spring-md" variant="primary" shape="rounded">Primary</ReactButtonFx>
          <ReactButtonFx fx="pulse" fxEase="spring-md" variant="success" shape="rounded">Success</ReactButtonFx>
          <ReactButtonFx fx="pulse" fxEase="spring-md" variant="warning" shape="rounded">Warning</ReactButtonFx>
          <ReactButtonFx fx="pulse" fxEase="spring-md" variant="danger" shape="rounded">Danger</ReactButtonFx>
          <ReactButtonFx fx="pulse" fxEase="spring-md" variant="primary" bordered shape="rounded">Bordered</ReactButtonFx>
          <ReactButtonFx fx="pulse" fxEase="spring-md" variant="success" shape="capsule" bordered>Capsule</ReactButtonFx>
        </div>
      </div>

      {/* Jelly Effect */}
      <div style={{ marginBottom: "3rem" }}>
        <h3 style={{ marginBottom: "1rem", color: "#1f2328", fontSize: "1.25rem" }}>
          Jelly <span style={{ fontWeight: "normal", fontSize: "0.875rem", color: "#6b7280" }}>Squash/stretch (hover)</span>
        </h3>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
          <ReactButtonFx fx="jelly" fxEase="spring-lg" variant="primary" shape="rounded">Primary</ReactButtonFx>
          <ReactButtonFx fx="jelly" fxEase="spring-lg" variant="success" shape="rounded">Success</ReactButtonFx>
          <ReactButtonFx fx="jelly" fxEase="spring-lg" variant="warning" shape="rounded">Warning</ReactButtonFx>
          <ReactButtonFx fx="jelly" fxEase="spring-lg" variant="danger" shape="rounded">Danger</ReactButtonFx>
          <ReactButtonFx fx="jelly" fxEase="spring-lg" variant="primary" bordered shape="rounded">Bordered</ReactButtonFx>
          <ReactButtonFx fx="jelly" fxEase="spring-lg" variant="success" shape="capsule" bordered>Capsule</ReactButtonFx>
        </div>
      </div>

      {/* Press Pop Effect */}
      <div style={{ marginBottom: "3rem" }}>
        <h3 style={{ marginBottom: "1rem", color: "#1f2328", fontSize: "1.25rem" }}>
          Press Pop <span style={{ fontWeight: "normal", fontSize: "0.875rem", color: "#6b7280" }}>Quick press (click)</span>
        </h3>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
          <ReactButtonFx fx="press-pop" fxEase="spring-sm" variant="primary" shape="rounded">Primary</ReactButtonFx>
          <ReactButtonFx fx="press-pop" fxEase="spring-sm" variant="success" shape="rounded">Success</ReactButtonFx>
          <ReactButtonFx fx="press-pop" fxEase="spring-sm" variant="warning" shape="rounded">Warning</ReactButtonFx>
          <ReactButtonFx fx="press-pop" fxEase="spring-sm" variant="danger" shape="rounded">Danger</ReactButtonFx>
          <ReactButtonFx fx="press-pop" fxEase="spring-sm" variant="primary" bordered shape="rounded">Bordered</ReactButtonFx>
          <ReactButtonFx fx="press-pop" fxEase="spring-sm" variant="success" shape="capsule" bordered>Capsule</ReactButtonFx>
        </div>
      </div>

      {/* Slide In Effect */}
      <div style={{ marginBottom: "3rem" }}>
        <h3 style={{ marginBottom: "1rem", color: "#1f2328", fontSize: "1.25rem" }}>
          Slide In <span style={{ fontWeight: "normal", fontSize: "0.875rem", color: "#6b7280" }}>Entrance (mount)</span>
        </h3>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
          <ReactButtonFx fx="slide-in" fxEase="spring-md" variant="primary" shape="rounded">Primary</ReactButtonFx>
          <ReactButtonFx fx="slide-in" fxEase="spring-md" variant="success" shape="rounded">Success</ReactButtonFx>
          <ReactButtonFx fx="slide-in" fxEase="spring-md" variant="warning" shape="rounded">Warning</ReactButtonFx>
          <ReactButtonFx fx="slide-in" fxEase="spring-md" variant="danger" shape="rounded">Danger</ReactButtonFx>
          <ReactButtonFx fx="slide-in" fxEase="spring-md" variant="primary" bordered shape="rounded">Bordered</ReactButtonFx>
          <ReactButtonFx fx="slide-in" fxEase="spring-md" variant="success" shape="capsule" bordered>Capsule</ReactButtonFx>
        </div>
      </div>

      {/* Grow Effect */}
      <div style={{ marginBottom: "3rem" }}>
        <h3 style={{ marginBottom: "1rem", color: "#1f2328", fontSize: "1.25rem" }}>
          Grow <span style={{ fontWeight: "normal", fontSize: "0.875rem", color: "#6b7280" }}>Scale up (hover)</span>
        </h3>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
          <ReactButtonFx fx="grow" fxEase="spring-md" variant="primary" shape="rounded">Primary</ReactButtonFx>
          <ReactButtonFx fx="grow" fxEase="spring-md" variant="success" shape="rounded">Success</ReactButtonFx>
          <ReactButtonFx fx="grow" fxEase="spring-md" variant="warning" shape="rounded">Warning</ReactButtonFx>
          <ReactButtonFx fx="grow" fxEase="spring-md" variant="danger" shape="rounded">Danger</ReactButtonFx>
          <ReactButtonFx fx="grow" fxEase="spring-md" variant="primary" bordered shape="rounded">Bordered</ReactButtonFx>
          <ReactButtonFx fx="grow" fxEase="spring-md" variant="success" shape="capsule" bordered>Capsule</ReactButtonFx>
        </div>
      </div>

      {/* Shrink Effect */}
      <div style={{ marginBottom: "3rem" }}>
        <h3 style={{ marginBottom: "1rem", color: "#1f2328", fontSize: "1.25rem" }}>
          Shrink <span style={{ fontWeight: "normal", fontSize: "0.875rem", color: "#6b7280" }}>Scale down (hover)</span>
        </h3>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
          <ReactButtonFx fx="shrink" fxEase="spring-md" variant="primary" shape="rounded">Primary</ReactButtonFx>
          <ReactButtonFx fx="shrink" fxEase="spring-md" variant="success" shape="rounded">Success</ReactButtonFx>
          <ReactButtonFx fx="shrink" fxEase="spring-md" variant="warning" shape="rounded">Warning</ReactButtonFx>
          <ReactButtonFx fx="shrink" fxEase="spring-md" variant="danger" shape="rounded">Danger</ReactButtonFx>
          <ReactButtonFx fx="shrink" fxEase="spring-md" variant="primary" bordered shape="rounded">Bordered</ReactButtonFx>
          <ReactButtonFx fx="shrink" fxEase="spring-md" variant="success" shape="capsule" bordered>Capsule</ReactButtonFx>
        </div>
      </div>

      {/* Push Effect */}
      <div style={{ marginBottom: "3rem" }}>
        <h3 style={{ marginBottom: "1rem", color: "#1f2328", fontSize: "1.25rem" }}>
          Push <span style={{ fontWeight: "normal", fontSize: "0.875rem", color: "#6b7280" }}>Press down (hover)</span>
        </h3>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
          <ReactButtonFx fx="push" fxEase="spring-sm" variant="primary" shape="rounded">Primary</ReactButtonFx>
          <ReactButtonFx fx="push" fxEase="spring-sm" variant="success" shape="rounded">Success</ReactButtonFx>
          <ReactButtonFx fx="push" fxEase="spring-sm" variant="warning" shape="rounded">Warning</ReactButtonFx>
          <ReactButtonFx fx="push" fxEase="spring-sm" variant="danger" shape="rounded">Danger</ReactButtonFx>
          <ReactButtonFx fx="push" fxEase="spring-sm" variant="primary" bordered shape="rounded">Bordered</ReactButtonFx>
          <ReactButtonFx fx="push" fxEase="spring-sm" variant="success" shape="capsule" bordered>Capsule</ReactButtonFx>
        </div>
      </div>

      {/* BG Slide Effect */}
      <div style={{ marginBottom: "3rem" }}>
        <h3 style={{ marginBottom: "1rem", color: "#1f2328", fontSize: "1.25rem" }}>
          BG Slide <span style={{ fontWeight: "normal", fontSize: "0.875rem", color: "#6b7280" }}>Background slides up (hover)</span>
        </h3>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
          <ReactButtonFx fx="bg-slide" fxSpeed="md" fxEase="ease-out" variant="primary" shape="rounded">Primary</ReactButtonFx>
          <ReactButtonFx fx="bg-slide" fxSpeed="md" fxEase="ease-out" variant="success" shape="rounded">Success</ReactButtonFx>
          <ReactButtonFx fx="bg-slide" fxSpeed="md" fxEase="ease-out" variant="warning" shape="rounded">Warning</ReactButtonFx>
          <ReactButtonFx fx="bg-slide" fxSpeed="md" fxEase="ease-out" variant="danger" shape="rounded">Danger</ReactButtonFx>
          <ReactButtonFx fx="bg-slide" fxSpeed="md" fxEase="ease-out" variant="primary" bordered shape="rounded">Bordered</ReactButtonFx>
          <ReactButtonFx fx="bg-slide" fxSpeed="md" fxEase="ease-out" variant="success" shape="capsule" bordered>Capsule</ReactButtonFx>
        </div>
      </div>

      {/* Side Slide Effect */}
      <div style={{ marginBottom: "3rem" }}>
        <h3 style={{ marginBottom: "1rem", color: "#1f2328", fontSize: "1.25rem" }}>
          Side Slide <span style={{ fontWeight: "normal", fontSize: "0.875rem", color: "#6b7280" }}>Wipe left to right (hover)</span>
        </h3>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
          <ReactButtonFx fx="side-slide" fxSpeed="md" fxEase="ease-out" variant="primary" shape="rounded">Primary</ReactButtonFx>
          <ReactButtonFx fx="side-slide" fxSpeed="md" fxEase="ease-out" variant="success" shape="rounded">Success</ReactButtonFx>
          <ReactButtonFx fx="side-slide" fxSpeed="md" fxEase="ease-out" variant="warning" shape="rounded">Warning</ReactButtonFx>
          <ReactButtonFx fx="side-slide" fxSpeed="md" fxEase="ease-out" variant="danger" shape="rounded">Danger</ReactButtonFx>
          <ReactButtonFx fx="side-slide" fxSpeed="md" fxEase="ease-out" variant="primary" bordered shape="rounded">Bordered</ReactButtonFx>
          <ReactButtonFx fx="side-slide" fxSpeed="md" fxEase="ease-out" variant="success" shape="capsule" bordered>Capsule</ReactButtonFx>
        </div>
      </div>

      {/* Wobble Effect */}
      <div style={{ marginBottom: "3rem" }}>
        <h3 style={{ marginBottom: "1rem", color: "#1f2328", fontSize: "1.25rem" }}>
          Wobble <span style={{ fontWeight: "normal", fontSize: "0.875rem", color: "#6b7280" }}>Rotate wobble (hover)</span>
        </h3>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
          <ReactButtonFx fx="wobble" fxEase="spring-md" variant="primary" shape="rounded">Primary</ReactButtonFx>
          <ReactButtonFx fx="wobble" fxEase="spring-md" variant="success" shape="rounded">Success</ReactButtonFx>
          <ReactButtonFx fx="wobble" fxEase="spring-md" variant="warning" shape="rounded">Warning</ReactButtonFx>
          <ReactButtonFx fx="wobble" fxEase="spring-md" variant="danger" shape="rounded">Danger</ReactButtonFx>
          <ReactButtonFx fx="wobble" fxEase="spring-md" variant="primary" bordered shape="rounded">Bordered</ReactButtonFx>
          <ReactButtonFx fx="wobble" fxEase="spring-md" variant="success" shape="capsule" bordered>Capsule</ReactButtonFx>
        </div>
      </div>

      {/* Shake Effect */}
      <div style={{ marginBottom: "3rem" }}>
        <h3 style={{ marginBottom: "1rem", color: "#1f2328", fontSize: "1.25rem" }}>
          Shake <span style={{ fontWeight: "normal", fontSize: "0.875rem", color: "#6b7280" }}>Horizontal shake (hover)</span>
        </h3>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
          <ReactButtonFx fx="shake" fxSpeed="sm" variant="primary" shape="rounded">Primary</ReactButtonFx>
          <ReactButtonFx fx="shake" fxSpeed="sm" variant="success" shape="rounded">Success</ReactButtonFx>
          <ReactButtonFx fx="shake" fxSpeed="sm" variant="warning" shape="rounded">Warning</ReactButtonFx>
          <ReactButtonFx fx="shake" fxSpeed="sm" variant="danger" shape="rounded">Danger</ReactButtonFx>
          <ReactButtonFx fx="shake" fxSpeed="sm" variant="primary" bordered shape="rounded">Bordered</ReactButtonFx>
          <ReactButtonFx fx="shake" fxSpeed="sm" variant="success" shape="capsule" bordered>Capsule</ReactButtonFx>
        </div>
      </div>

      {/* Press Shadow Effect */}
      <div style={{ marginBottom: "3rem" }}>
        <h3 style={{ marginBottom: "1rem", color: "#1f2328", fontSize: "1.25rem" }}>
          Press Shadow <span style={{ fontWeight: "normal", fontSize: "0.875rem", color: "#6b7280" }}>Shadow press (click)</span>
        </h3>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
          <ReactButtonFx fx="press-shadow" variant="primary" shape="rounded">Primary</ReactButtonFx>
          <ReactButtonFx fx="press-shadow" variant="success" shape="rounded">Success</ReactButtonFx>
          <ReactButtonFx fx="press-shadow" variant="warning" shape="rounded">Warning</ReactButtonFx>
          <ReactButtonFx fx="press-shadow" variant="danger" shape="rounded">Danger</ReactButtonFx>
          <ReactButtonFx fx="press-shadow" variant="primary" bordered shape="rounded">Bordered</ReactButtonFx>
          <ReactButtonFx fx="press-shadow" variant="success" shape="capsule" bordered>Capsule</ReactButtonFx>
        </div>
      </div>

      <div style={{ marginBottom: "3rem" }}>
        <h3 style={{ marginBottom: "1rem", color: "#1f2328", fontSize: "1.125rem" }}>
          Pulse → Wobble
        </h3>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center"}}>
          <ReactButtonFx fx="pulse-wobble" variant="primary" shape="rounded">Pulse → Wobble</ReactButtonFx>
          <ReactButtonFx fx="pulse-wobble" variant="success" shape="rounded">Pulse → Wobble</ReactButtonFx>
          <ReactButtonFx fx="pulse-wobble" variant="warning" shape="rounded">Pulse → Wobble</ReactButtonFx>
          <ReactButtonFx fx="pulse-wobble" variant="danger" shape="rounded">Pulse → Wobble</ReactButtonFx>
          <ReactButtonFx fx="pulse-wobble" variant="primary" shape="rounded" bordered={true}>Bordered</ReactButtonFx>
          <ReactButtonFx fx="pulse-wobble" variant="success" shape="capsule" bordered={true}>Capsule</ReactButtonFx>
          <ReactButtonFx fx="pulse-wobble" variant="danger" shape="rounded-square" size="lg" bordered={true}><ReactIcon noFill><Bomb /></ReactIcon></ReactButtonFx>
        </div>
      </div>
    </div>
  ),
};

// ========================================
// FX Disabled State
// ========================================

export const FxDisabled: Story = {
  args: {
    fx: "bounce",
    fxDisabled: true,
    variant: "primary",
  },
  render: (args) => (
    <div style={{ display: "flex", justifyContent: "center", padding: "50px" }}>
      <ReactButtonFx {...args}>FX Disabled (No Animation)</ReactButtonFx>
    </div>
  ),
};
