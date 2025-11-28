import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import { ReactIconButtonFx, type ReactIconButtonFxProps } from "agnosticui-core/icon-button-fx/react";
import {
  Heart,
  Star,
  Settings,
  Trash2,
  Download,
  Bell,
  X,
  Menu,
  Search,
  Plus,
  Minus,
  ChevronDown,
  ArrowRight,
  RotateCw,
  Zap,
  Target,
  Sparkles,
  Palette,
  Flame,
  Check,
  AlertTriangle,
  Bookmark,
  Mail,
} from "lucide-react";

const meta: Meta<ReactIconButtonFxProps> = {
  title: "AgnosticUI React/IconButtonFx",
  component: ReactIconButtonFx,
  tags: ["autodocs"],
  argTypes: {
    // FX Props
    fx: {
      control: "select",
      options: [
        "",
        "pulse",
        "bounce",
        "jelly",
        "press-pop",
        "slide-in",
        "grow",
        "shrink",
        "push",
        "shake",
        "wobble",
        "pulse-wobble",
      ],
      description: "FX effect to apply",
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
    // IconButton Props
    label: {
      control: "text",
      description: "Accessible label (required)",
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "success", "warning", "danger", "ghost", "monochrome"],
      description: "Visual style of the button",
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "Size of the button",
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
    pressed: {
      control: "boolean",
      description: "Pressed state for toggle buttons",
    },
    loading: {
      control: "boolean",
      description: "Shows a loading state",
    },
  },
  args: {
    fx: "pulse",
    fxSpeed: "md",
    fxEase: "spring-md",
    fxDisabled: false,
    label: "Icon button",
    variant: "ghost",
    size: "md",
    type: "button",
    disabled: false,
    pressed: false,
    loading: false,
    onIconButtonClick: fn(),
    onIconButtonActivate: fn(),
  },
  parameters: {
    actions: {
      handles: ["icon-button-click", "icon-button-activate"],
    },
  },
};

export default meta;
type Story = StoryObj<ReactIconButtonFxProps>;

// Default story with all controls
export const Default: Story = {
  args: {
    label: "Heart",
  },
  render: (args) => (
    <ReactIconButtonFx {...args}>
      <Heart />
    </ReactIconButtonFx>
  ),
};

// ========================================
// Individual FX Effect Stories
// ========================================

export const Pulse: Story = {
  args: {
    fx: "pulse",
    variant: "primary",
    label: "Pulse effect",
  },
  render: (args) => (
    <ReactIconButtonFx {...args}>
      <Heart />
    </ReactIconButtonFx>
  ),
};

export const Bounce: Story = {
  args: {
    fx: "bounce",
    variant: "primary",
    label: "Bounce effect",
  },
  render: (args) => (
    <ReactIconButtonFx {...args}>
      <Download />
    </ReactIconButtonFx>
  ),
};

export const Wobble: Story = {
  args: {
    fx: "wobble",
    variant: "warning",
    label: "Wobble effect",
  },
  render: (args) => (
    <ReactIconButtonFx {...args}>
      <Bell />
    </ReactIconButtonFx>
  ),
};

export const Shake: Story = {
  args: {
    fx: "shake",
    variant: "danger",
    label: "Shake effect",
  },
  render: (args) => (
    <ReactIconButtonFx {...args}>
      <Trash2 />
    </ReactIconButtonFx>
  ),
};

export const PulseWobble: Story = {
  args: {
    fx: "pulse-wobble",
    variant: "primary",
    label: "Pulse then wobble",
  },
  render: (args) => (
    <ReactIconButtonFx {...args}>
      <Heart />
    </ReactIconButtonFx>
  ),
};

export const Jelly: Story = {
  args: {
    fx: "jelly",
    variant: "success",
    label: "Jelly effect",
  },
  render: (args) => (
    <ReactIconButtonFx {...args}>
      <Star />
    </ReactIconButtonFx>
  ),
};

export const PressPop: Story = {
  args: {
    fx: "press-pop",
    variant: "primary",
    label: "Click me",
  },
  render: (args) => (
    <ReactIconButtonFx {...args}>
      <Check />
    </ReactIconButtonFx>
  ),
};

export const Grow: Story = {
  args: {
    fx: "grow",
    variant: "primary",
    label: "Grow effect",
  },
  render: (args) => (
    <ReactIconButtonFx {...args}>
      <Plus />
    </ReactIconButtonFx>
  ),
};

export const Shrink: Story = {
  args: {
    fx: "shrink",
    variant: "secondary",
    label: "Shrink effect",
  },
  render: (args) => (
    <ReactIconButtonFx {...args}>
      <Minus />
    </ReactIconButtonFx>
  ),
};

// ========================================
// FX Speed Variations
// ========================================

export const SpeedComparison: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
      <div style={{ textAlign: "center" }}>
        <ReactIconButtonFx fx="pulse" fxSpeed="xs" variant="primary" label="Extra fast">
          <Heart />
        </ReactIconButtonFx>
        <div style={{ fontSize: "0.75rem", marginTop: "0.25rem" }}>XS Speed</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <ReactIconButtonFx fx="pulse" fxSpeed="sm" variant="primary" label="Fast">
          <Heart />
        </ReactIconButtonFx>
        <div style={{ fontSize: "0.75rem", marginTop: "0.25rem" }}>SM Speed</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <ReactIconButtonFx fx="pulse" fxSpeed="md" variant="primary" label="Medium">
          <Heart />
        </ReactIconButtonFx>
        <div style={{ fontSize: "0.75rem", marginTop: "0.25rem" }}>MD (Default)</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <ReactIconButtonFx fx="pulse" fxSpeed="lg" variant="primary" label="Slow">
          <Heart />
        </ReactIconButtonFx>
        <div style={{ fontSize: "0.75rem", marginTop: "0.25rem" }}>LG Speed</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <ReactIconButtonFx fx="pulse" fxSpeed="xl" variant="primary" label="Extra slow">
          <Heart />
        </ReactIconButtonFx>
        <div style={{ fontSize: "0.75rem", marginTop: "0.25rem" }}>XL Speed</div>
      </div>
    </div>
  ),
};

// ========================================
// FX Easing Variations
// ========================================

export const EasingComparison: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
      <div style={{ textAlign: "center" }}>
        <ReactIconButtonFx fx="bounce" fxEase="ease" variant="primary" label="Ease">
          <Download />
        </ReactIconButtonFx>
        <div style={{ fontSize: "0.75rem", marginTop: "0.25rem" }}>Ease</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <ReactIconButtonFx fx="bounce" fxEase="ease-in" variant="primary" label="Ease in">
          <Download />
        </ReactIconButtonFx>
        <div style={{ fontSize: "0.75rem", marginTop: "0.25rem" }}>Ease-In</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <ReactIconButtonFx fx="bounce" fxEase="ease-out" variant="primary" label="Ease out">
          <Download />
        </ReactIconButtonFx>
        <div style={{ fontSize: "0.75rem", marginTop: "0.25rem" }}>Ease-Out</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <ReactIconButtonFx fx="bounce" fxEase="bounce" variant="primary" label="Bounce">
          <Download />
        </ReactIconButtonFx>
        <div style={{ fontSize: "0.75rem", marginTop: "0.25rem" }}>Bounce</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <ReactIconButtonFx fx="bounce" fxEase="spring-sm" variant="primary" label="Spring small">
          <Download />
        </ReactIconButtonFx>
        <div style={{ fontSize: "0.75rem", marginTop: "0.25rem" }}>Spring SM</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <ReactIconButtonFx fx="bounce" fxEase="spring-md" variant="primary" label="Spring medium">
          <Download />
        </ReactIconButtonFx>
        <div style={{ fontSize: "0.75rem", marginTop: "0.25rem" }}>Spring MD</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <ReactIconButtonFx fx="bounce" fxEase="spring-lg" variant="primary" label="Spring large">
          <Download />
        </ReactIconButtonFx>
        <div style={{ fontSize: "0.75rem", marginTop: "0.25rem" }}>Spring LG</div>
      </div>
    </div>
  ),
};

// ========================================
// Effects Gallery - All Effects
// ========================================

export const EffectsGallery: Story = {
  render: () => (
    <div style={{ padding: "2rem", maxWidth: "1400px", margin: "0 auto" }}>
      {/* Pulse Effect */}
      <div style={{ marginBottom: "3rem" }}>
        <h3 style={{ marginBottom: "1rem", color: "#1f2328", fontSize: "1.25rem" }}>
          Pulse <span style={{ fontWeight: "normal", fontSize: "0.875rem", color: "#6b7280" }}>Scale grow (hover)</span>
        </h3>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
          <ReactIconButtonFx fx="pulse" fxEase="spring-md" variant="primary" label="Pulse primary"><Heart /></ReactIconButtonFx>
          <ReactIconButtonFx fx="pulse" fxEase="spring-md" variant="success" label="Pulse success"><Star /></ReactIconButtonFx>
          <ReactIconButtonFx fx="pulse" fxEase="spring-md" variant="warning" label="Pulse warning"><Bell /></ReactIconButtonFx>
          <ReactIconButtonFx fx="pulse" fxEase="spring-md" variant="danger" label="Pulse danger"><Heart /></ReactIconButtonFx>
          <ReactIconButtonFx fx="pulse" fxEase="spring-md" variant="ghost" label="Pulse ghost"><Star /></ReactIconButtonFx>
          <ReactIconButtonFx fx="pulse" fxEase="spring-md" variant="monochrome" label="Pulse monochrome"><Settings /></ReactIconButtonFx>
          <ReactIconButtonFx fx="pulse" fxEase="spring-md" variant="primary" size="lg" label="Pulse large"><Zap /></ReactIconButtonFx>
          <ReactIconButtonFx fx="pulse" fxEase="spring-md" variant="success" size="xl" label="Pulse extra large"><Target /></ReactIconButtonFx>
        </div>
      </div>

      {/* Bounce Effect */}
      <div style={{ marginBottom: "3rem" }}>
        <h3 style={{ marginBottom: "1rem", color: "#1f2328", fontSize: "1.25rem" }}>
          Bounce <span style={{ fontWeight: "normal", fontSize: "0.875rem", color: "#6b7280" }}>Vertical pop (hover)</span>
        </h3>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
          <ReactIconButtonFx fx="bounce" fxEase="spring-md" variant="primary" label="Bounce primary"><Download /></ReactIconButtonFx>
          <ReactIconButtonFx fx="bounce" fxEase="spring-md" variant="success" label="Bounce success"><Download /></ReactIconButtonFx>
          <ReactIconButtonFx fx="bounce" fxEase="spring-md" variant="warning" label="Bounce warning"><Download /></ReactIconButtonFx>
          <ReactIconButtonFx fx="bounce" fxEase="spring-md" variant="danger" label="Bounce danger"><Download /></ReactIconButtonFx>
          <ReactIconButtonFx fx="bounce" fxEase="spring-md" variant="ghost" label="Bounce ghost"><Download /></ReactIconButtonFx>
          <ReactIconButtonFx fx="bounce" fxEase="spring-md" variant="monochrome" label="Bounce monochrome"><Download /></ReactIconButtonFx>
          <ReactIconButtonFx fx="bounce" fxEase="spring-md" variant="primary" size="lg" label="Bounce large"><ChevronDown /></ReactIconButtonFx>
          <ReactIconButtonFx fx="bounce" fxEase="spring-md" variant="success" size="xl" label="Bounce extra large"><ArrowRight /></ReactIconButtonFx>
        </div>
      </div>

      {/* Wobble Effect */}
      <div style={{ marginBottom: "3rem" }}>
        <h3 style={{ marginBottom: "1rem", color: "#1f2328", fontSize: "1.25rem" }}>
          Wobble <span style={{ fontWeight: "normal", fontSize: "0.875rem", color: "#6b7280" }}>Rotate oscillation (hover)</span>
        </h3>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
          <ReactIconButtonFx fx="wobble" fxEase="spring-md" variant="primary" label="Wobble primary"><Bell /></ReactIconButtonFx>
          <ReactIconButtonFx fx="wobble" fxEase="spring-md" variant="success" label="Wobble success"><Bell /></ReactIconButtonFx>
          <ReactIconButtonFx fx="wobble" fxEase="spring-md" variant="warning" label="Wobble warning"><Bell /></ReactIconButtonFx>
          <ReactIconButtonFx fx="wobble" fxEase="spring-md" variant="danger" label="Wobble danger"><Bell /></ReactIconButtonFx>
          <ReactIconButtonFx fx="wobble" fxEase="spring-md" variant="ghost" label="Wobble ghost"><Bell /></ReactIconButtonFx>
          <ReactIconButtonFx fx="wobble" fxEase="spring-md" variant="monochrome" label="Wobble monochrome"><AlertTriangle /></ReactIconButtonFx>
          <ReactIconButtonFx fx="wobble" fxEase="spring-md" variant="primary" size="lg" label="Wobble large"><RotateCw /></ReactIconButtonFx>
          <ReactIconButtonFx fx="wobble" fxEase="spring-md" variant="warning" size="xl" label="Wobble extra large"><AlertTriangle /></ReactIconButtonFx>
        </div>
      </div>

      {/* Shake Effect */}
      <div style={{ marginBottom: "3rem" }}>
        <h3 style={{ marginBottom: "1rem", color: "#1f2328", fontSize: "1.25rem" }}>
          Shake <span style={{ fontWeight: "normal", fontSize: "0.875rem", color: "#6b7280" }}>Horizontal jitter (hover)</span>
        </h3>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
          <ReactIconButtonFx fx="shake" fxEase="ease" variant="primary" label="Shake primary"><Trash2 /></ReactIconButtonFx>
          <ReactIconButtonFx fx="shake" fxEase="ease" variant="success" label="Shake success"><X /></ReactIconButtonFx>
          <ReactIconButtonFx fx="shake" fxEase="ease" variant="warning" label="Shake warning"><AlertTriangle /></ReactIconButtonFx>
          <ReactIconButtonFx fx="shake" fxEase="ease" variant="danger" label="Shake danger"><Trash2 /></ReactIconButtonFx>
          <ReactIconButtonFx fx="shake" fxEase="ease" variant="ghost" label="Shake ghost"><X /></ReactIconButtonFx>
          <ReactIconButtonFx fx="shake" fxEase="ease" variant="monochrome" label="Shake monochrome"><Trash2 /></ReactIconButtonFx>
          <ReactIconButtonFx fx="shake" fxEase="ease" variant="danger" size="lg" label="Shake large"><Trash2 /></ReactIconButtonFx>
          <ReactIconButtonFx fx="shake" fxEase="ease" variant="warning" size="xl" label="Shake extra large"><AlertTriangle /></ReactIconButtonFx>
        </div>
      </div>

      {/* Jelly Effect */}
      <div style={{ marginBottom: "3rem" }}>
        <h3 style={{ marginBottom: "1rem", color: "#1f2328", fontSize: "1.25rem" }}>
          Jelly <span style={{ fontWeight: "normal", fontSize: "0.875rem", color: "#6b7280" }}>Squash/stretch (hover)</span>
        </h3>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
          <ReactIconButtonFx fx="jelly" fxEase="spring-lg" variant="primary" label="Jelly primary"><Sparkles /></ReactIconButtonFx>
          <ReactIconButtonFx fx="jelly" fxEase="spring-lg" variant="success" label="Jelly success"><Star /></ReactIconButtonFx>
          <ReactIconButtonFx fx="jelly" fxEase="spring-lg" variant="warning" label="Jelly warning"><Palette /></ReactIconButtonFx>
          <ReactIconButtonFx fx="jelly" fxEase="spring-lg" variant="danger" label="Jelly danger"><Flame /></ReactIconButtonFx>
          <ReactIconButtonFx fx="jelly" fxEase="spring-lg" variant="ghost" label="Jelly ghost"><Star /></ReactIconButtonFx>
          <ReactIconButtonFx fx="jelly" fxEase="spring-lg" variant="monochrome" label="Jelly monochrome"><Sparkles /></ReactIconButtonFx>
          <ReactIconButtonFx fx="jelly" fxEase="spring-lg" variant="primary" size="lg" label="Jelly large"><Palette /></ReactIconButtonFx>
          <ReactIconButtonFx fx="jelly" fxEase="spring-lg" variant="success" size="xl" label="Jelly extra large"><Flame /></ReactIconButtonFx>
        </div>
      </div>

      {/* Pulse-Wobble Sequential */}
      <div style={{ marginBottom: "3rem" }}>
        <h3 style={{ marginBottom: "1rem", color: "#1f2328", fontSize: "1.25rem" }}>
          Pulse → Wobble <span style={{ fontWeight: "normal", fontSize: "0.875rem", color: "#6b7280" }}>Sequential combo (hover)</span>
        </h3>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
          <ReactIconButtonFx fx="pulse-wobble" fxEase="spring-md" variant="primary" label="Pulse-wobble primary"><Heart /></ReactIconButtonFx>
          <ReactIconButtonFx fx="pulse-wobble" fxEase="spring-md" variant="success" label="Pulse-wobble success"><Star /></ReactIconButtonFx>
          <ReactIconButtonFx fx="pulse-wobble" fxEase="spring-md" variant="warning" label="Pulse-wobble warning"><Bell /></ReactIconButtonFx>
          <ReactIconButtonFx fx="pulse-wobble" fxEase="spring-md" variant="danger" label="Pulse-wobble danger"><Heart /></ReactIconButtonFx>
          <ReactIconButtonFx fx="pulse-wobble" fxEase="spring-md" variant="ghost" label="Pulse-wobble ghost"><Bookmark /></ReactIconButtonFx>
          <ReactIconButtonFx fx="pulse-wobble" fxEase="spring-md" variant="monochrome" label="Pulse-wobble monochrome"><Star /></ReactIconButtonFx>
          <ReactIconButtonFx fx="pulse-wobble" fxEase="spring-md" variant="primary" size="lg" label="Pulse-wobble large"><Heart /></ReactIconButtonFx>
          <ReactIconButtonFx fx="pulse-wobble" fxEase="spring-md" variant="success" size="xl" label="Pulse-wobble extra large"><Star /></ReactIconButtonFx>
        </div>
      </div>

      {/* Press Pop Effect */}
      <div style={{ marginBottom: "3rem" }}>
        <h3 style={{ marginBottom: "1rem", color: "#1f2328", fontSize: "1.25rem" }}>
          Press Pop <span style={{ fontWeight: "normal", fontSize: "0.875rem", color: "#6b7280" }}>Quick press (click)</span>
        </h3>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
          <ReactIconButtonFx fx="press-pop" fxEase="spring-sm" variant="primary" label="Press-pop primary"><Check /></ReactIconButtonFx>
          <ReactIconButtonFx fx="press-pop" fxEase="spring-sm" variant="success" label="Press-pop success"><Check /></ReactIconButtonFx>
          <ReactIconButtonFx fx="press-pop" fxEase="spring-sm" variant="warning" label="Press-pop warning"><Plus /></ReactIconButtonFx>
          <ReactIconButtonFx fx="press-pop" fxEase="spring-sm" variant="danger" label="Press-pop danger"><X /></ReactIconButtonFx>
          <ReactIconButtonFx fx="press-pop" fxEase="spring-sm" variant="ghost" label="Press-pop ghost"><Check /></ReactIconButtonFx>
          <ReactIconButtonFx fx="press-pop" fxEase="spring-sm" variant="monochrome" label="Press-pop monochrome"><Plus /></ReactIconButtonFx>
          <ReactIconButtonFx fx="press-pop" fxEase="spring-sm" variant="primary" size="lg" label="Press-pop large"><Check /></ReactIconButtonFx>
          <ReactIconButtonFx fx="press-pop" fxEase="spring-sm" variant="success" size="xl" label="Press-pop extra large"><Check /></ReactIconButtonFx>
        </div>
      </div>

      {/* Grow/Shrink Effects */}
      <div style={{ marginBottom: "3rem" }}>
        <h3 style={{ marginBottom: "1rem", color: "#1f2328", fontSize: "1.25rem" }}>
          Grow / Shrink <span style={{ fontWeight: "normal", fontSize: "0.875rem", color: "#6b7280" }}>Size change (hover)</span>
        </h3>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
          <ReactIconButtonFx fx="grow" fxEase="spring-md" variant="primary" label="Grow"><Plus /></ReactIconButtonFx>
          <ReactIconButtonFx fx="shrink" fxEase="spring-md" variant="secondary" label="Shrink"><Minus /></ReactIconButtonFx>
          <ReactIconButtonFx fx="grow" fxEase="spring-md" variant="success" label="Grow success"><Search /></ReactIconButtonFx>
          <ReactIconButtonFx fx="shrink" fxEase="spring-md" variant="ghost" label="Shrink ghost"><X /></ReactIconButtonFx>
          <ReactIconButtonFx fx="grow" fxEase="spring-md" variant="primary" size="lg" label="Grow large"><Plus /></ReactIconButtonFx>
          <ReactIconButtonFx fx="shrink" fxEase="spring-md" variant="secondary" size="lg" label="Shrink large"><Minus /></ReactIconButtonFx>
        </div>
      </div>
    </div>
  ),
};

// ========================================
// Size Variations
// ========================================

export const SizeVariations: Story = {
  render: () => (
    <div style={{ padding: "2rem" }}>
      <h3 style={{ marginBottom: "1.5rem", color: "#1f2328", fontSize: "1.25rem" }}>
        Icon Button FX Sizes with Pulse Effect
      </h3>
      <p style={{ marginBottom: "1rem", color: "#6b7280", fontSize: "0.875rem" }}>
        Note: For <code>xs</code> and <code>sm</code> sizes, ensure icons scale properly by passing{" "}
        <code>width="100%" height="100%"</code> props to the icon component so it fills the button's icon container.
      </p>
      <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", alignItems: "center" }}>
        <div style={{ textAlign: "center" }}>
          <ReactIconButtonFx fx="pulse" size="xs" variant="primary" label="Extra small">
            <Heart width="100%" height="100%" />
          </ReactIconButtonFx>
          <div style={{ fontSize: "0.75rem", marginTop: "0.5rem", color: "#6b7280" }}>XS</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <ReactIconButtonFx fx="pulse" size="sm" variant="primary" label="Small">
            <Heart width="100%" height="100%" />
          </ReactIconButtonFx>
          <div style={{ fontSize: "0.75rem", marginTop: "0.5rem", color: "#6b7280" }}>SM</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <ReactIconButtonFx fx="pulse" size="md" variant="primary" label="Medium">
            <Heart />
          </ReactIconButtonFx>
          <div style={{ fontSize: "0.75rem", marginTop: "0.5rem", color: "#6b7280" }}>MD (Default)</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <ReactIconButtonFx fx="pulse" size="lg" variant="primary" label="Large">
            <Heart />
          </ReactIconButtonFx>
          <div style={{ fontSize: "0.75rem", marginTop: "0.5rem", color: "#6b7280" }}>LG</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <ReactIconButtonFx fx="pulse" size="xl" variant="primary" label="Extra large">
            <Heart />
          </ReactIconButtonFx>
          <div style={{ fontSize: "0.75rem", marginTop: "0.5rem", color: "#6b7280" }}>XL</div>
        </div>
      </div>
    </div>
  ),
};

// ========================================
// Common Use Cases
// ========================================

export const CommonUseCases: Story = {
  render: () => (
    <div style={{ padding: "2rem" }}>
      <h3 style={{ marginBottom: "1.5rem", color: "#1f2328", fontSize: "1.25rem" }}>
        Common Icon Button FX Use Cases
      </h3>

      <div style={{ marginBottom: "2rem" }}>
        <h4 style={{ marginBottom: "0.75rem", color: "#6b7280", fontSize: "1rem" }}>Navigation</h4>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", alignItems: "center" }}>
          <ReactIconButtonFx fx="pulse" variant="ghost" label="Menu"><Menu /></ReactIconButtonFx>
          <ReactIconButtonFx fx="pulse" variant="ghost" label="Close"><X /></ReactIconButtonFx>
          <ReactIconButtonFx fx="pulse" variant="ghost" label="Search"><Search /></ReactIconButtonFx>
          <ReactIconButtonFx fx="pulse" variant="ghost" label="Settings"><Settings /></ReactIconButtonFx>
        </div>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <h4 style={{ marginBottom: "0.75rem", color: "#6b7280", fontSize: "1rem" }}>Actions</h4>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", alignItems: "center" }}>
          <ReactIconButtonFx fx="pulse-wobble" variant="primary" label="Favorite"><Heart /></ReactIconButtonFx>
          <ReactIconButtonFx fx="pulse-wobble" variant="warning" label="Bookmark"><Bookmark /></ReactIconButtonFx>
          <ReactIconButtonFx fx="bounce" variant="success" label="Download"><Download /></ReactIconButtonFx>
          <ReactIconButtonFx fx="shake" variant="danger" label="Delete"><Trash2 /></ReactIconButtonFx>
        </div>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <h4 style={{ marginBottom: "0.75rem", color: "#6b7280", fontSize: "1rem" }}>Notifications</h4>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", alignItems: "center" }}>
          <ReactIconButtonFx fx="wobble" variant="warning" label="Notifications"><Bell /></ReactIconButtonFx>
          <ReactIconButtonFx fx="wobble" variant="primary" label="Messages"><Mail /></ReactIconButtonFx>
          <ReactIconButtonFx fx="wobble" variant="danger" label="Alerts"><AlertTriangle /></ReactIconButtonFx>
        </div>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <h4 style={{ marginBottom: "0.75rem", color: "#6b7280", fontSize: "1rem" }}>Social</h4>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", alignItems: "center" }}>
          <ReactIconButtonFx fx="pulse-wobble" variant="danger" label="Like"><Heart /></ReactIconButtonFx>
          <ReactIconButtonFx fx="pulse-wobble" variant="warning" label="Star"><Star /></ReactIconButtonFx>
          <ReactIconButtonFx fx="pulse-wobble" variant="primary" label="Bookmark"><Bookmark /></ReactIconButtonFx>
        </div>
      </div>
    </div>
  ),
};
