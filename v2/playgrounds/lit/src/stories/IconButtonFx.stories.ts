import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { fn } from "storybook/test";
import {
  createElement,
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
  Mail
} from "lucide";
import "agnosticui-core/icon";
import "agnosticui-core/icon-button-fx";
import type { IconButtonFx } from "agnosticui-core/icon-button-fx";

// Extend IconButtonFx with event handler props for Storybook
interface IconButtonFxProps extends IconButtonFx {
  onIconButtonClick?: (detail: any) => void;
  onIconButtonActivate?: (detail: any) => void;
}

const meta: Meta<IconButtonFxProps> = {
  title: "AgnosticUI Lit/IconButtonFx",
  component: "ag-icon-button-fx",
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
        "pulse-wobble"
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
    icon: {
      control: "text",
      description: "Icon identifier",
    },
    unicode: {
      control: "text",
      description: "Unicode character for icon",
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

type Story = StoryObj<IconButtonFxProps>;

// Default story with all controls
export const Default: Story = {
  args: {
    label: "Heart",
  },
  render: ({
    fx,
    fxSpeed,
    fxEase,
    fxDisabled,
    label,
    variant,
    size,
    type,
    disabled,
    pressed,
    loading,
    onIconButtonClick,
    onIconButtonActivate,
  }) => html`
    <ag-icon-button-fx
      .fx=${fx}
      .fxSpeed=${fxSpeed}
      .fxEase=${fxEase}
      .fxDisabled=${fxDisabled}
      .label=${label}
      .variant=${variant}
      .size=${size}
      .type=${type}
      .disabled=${disabled}
      .pressed=${pressed}
      .loading=${loading}
      @icon-button-click=${(e: CustomEvent) => onIconButtonClick?.(e.detail)}
      @icon-button-activate=${(e: CustomEvent) => onIconButtonActivate?.(e.detail)}
    >
      ${createElement(Heart)}
    </ag-icon-button-fx>
  `,
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
  render: ({ fx, variant, label }) => html`
    <ag-icon-button-fx .fx=${fx} .variant=${variant} .label=${label}>
      ${createElement(Heart)}
    </ag-icon-button-fx>
  `,
};

export const Bounce: Story = {
  args: {
    fx: "bounce",
    variant: "primary",
    label: "Bounce effect",
  },
  render: ({ fx, variant, label }) => html`
    <ag-icon-button-fx .fx=${fx} .variant=${variant} .label=${label}>
      ${createElement(Download)}
    </ag-icon-button-fx>
  `,
};

export const Wobble: Story = {
  args: {
    fx: "wobble",
    variant: "warning",
    label: "Wobble effect",
  },
  render: ({ fx, variant, label }) => html`
    <ag-icon-button-fx .fx=${fx} .variant=${variant} .label=${label}>
      ${createElement(Bell)}
    </ag-icon-button-fx>
  `,
};

export const Shake: Story = {
  args: {
    fx: "shake",
    variant: "danger",
    label: "Shake effect",
  },
  render: ({ fx, variant, label }) => html`
    <ag-icon-button-fx .fx=${fx} .variant=${variant} .label=${label}>
      ${createElement(Trash2)}
    </ag-icon-button-fx>
  `,
};

export const PulseWobble: Story = {
  args: {
    fx: "pulse-wobble",
    variant: "primary",
    label: "Pulse then wobble",
  },
  render: ({ fx, variant, label }) => html`
    <ag-icon-button-fx .fx=${fx} .variant=${variant} .label=${label}>
      ${createElement(Heart)}
    </ag-icon-button-fx>
  `,
};

export const Jelly: Story = {
  args: {
    fx: "jelly",
    variant: "success",
    label: "Jelly effect",
  },
  render: ({ fx, variant, label }) => html`
    <ag-icon-button-fx .fx=${fx} .variant=${variant} .label=${label}>
      ${createElement(Star)}
    </ag-icon-button-fx>
  `,
};

export const PressPop: Story = {
  args: {
    fx: "press-pop",
    variant: "primary",
    label: "Click me",
  },
  render: ({ fx, variant, label }) => html`
    <ag-icon-button-fx .fx=${fx} .variant=${variant} .label=${label}>
      ${createElement(Check)}
    </ag-icon-button-fx>
  `,
};

export const Grow: Story = {
  args: {
    fx: "grow",
    variant: "primary",
    label: "Grow effect",
  },
  render: ({ fx, variant, label }) => html`
    <ag-icon-button-fx .fx=${fx} .variant=${variant} .label=${label}>
      ${createElement(Plus)}
    </ag-icon-button-fx>
  `,
};

export const Shrink: Story = {
  args: {
    fx: "shrink",
    variant: "secondary",
    label: "Shrink effect",
  },
  render: ({ fx, variant, label }) => html`
    <ag-icon-button-fx .fx=${fx} .variant=${variant} .label=${label}>
      ${createElement(Minus)}
    </ag-icon-button-fx>
  `,
};

// ========================================
// FX Speed Variations
// ========================================

export const SpeedComparison: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <div style="text-align: center;">
        <ag-icon-button-fx .fx=${"pulse"} .fxSpeed=${"xs"} .variant=${"primary"} .label=${"Extra fast"}>
          ${createElement(Heart)}
        </ag-icon-button-fx>
        <div style="font-size: 0.75rem; margin-top: 0.25rem;">XS Speed</div>
      </div>
      <div style="text-align: center;">
        <ag-icon-button-fx .fx=${"pulse"} .fxSpeed=${"sm"} .variant=${"primary"} .label=${"Fast"}>
          ${createElement(Heart)}
        </ag-icon-button-fx>
        <div style="font-size: 0.75rem; margin-top: 0.25rem;">SM Speed</div>
      </div>
      <div style="text-align: center;">
        <ag-icon-button-fx .fx=${"pulse"} .fxSpeed=${"md"} .variant=${"primary"} .label=${"Medium"}>
          ${createElement(Heart)}
        </ag-icon-button-fx>
        <div style="font-size: 0.75rem; margin-top: 0.25rem;">MD (Default)</div>
      </div>
      <div style="text-align: center;">
        <ag-icon-button-fx .fx=${"pulse"} .fxSpeed=${"lg"} .variant=${"primary"} .label=${"Slow"}>
          ${createElement(Heart)}
        </ag-icon-button-fx>
        <div style="font-size: 0.75rem; margin-top: 0.25rem;">LG Speed</div>
      </div>
      <div style="text-align: center;">
        <ag-icon-button-fx .fx=${"pulse"} .fxSpeed=${"xl"} .variant=${"primary"} .label=${"Extra slow"}>
          ${createElement(Heart)}
        </ag-icon-button-fx>
        <div style="font-size: 0.75rem; margin-top: 0.25rem;">XL Speed</div>
      </div>
    </div>
  `,
};

// ========================================
// FX Easing Variations
// ========================================

export const EasingComparison: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <div style="text-align: center;">
        <ag-icon-button-fx .fx=${"bounce"} .fxEase=${"ease"} .variant=${"primary"} .label=${"Ease"}>
          ${createElement(Download)}
        </ag-icon-button-fx>
        <div style="font-size: 0.75rem; margin-top: 0.25rem;">Ease</div>
      </div>
      <div style="text-align: center;">
        <ag-icon-button-fx .fx=${"bounce"} .fxEase=${"ease-in"} .variant=${"primary"} .label=${"Ease in"}>
          ${createElement(Download)}
        </ag-icon-button-fx>
        <div style="font-size: 0.75rem; margin-top: 0.25rem;">Ease-In</div>
      </div>
      <div style="text-align: center;">
        <ag-icon-button-fx .fx=${"bounce"} .fxEase=${"ease-out"} .variant=${"primary"} .label=${"Ease out"}>
          ${createElement(Download)}
        </ag-icon-button-fx>
        <div style="font-size: 0.75rem; margin-top: 0.25rem;">Ease-Out</div>
      </div>
      <div style="text-align: center;">
        <ag-icon-button-fx .fx=${"bounce"} .fxEase=${"bounce"} .variant=${"primary"} .label=${"Bounce"}>
          ${createElement(Download)}
        </ag-icon-button-fx>
        <div style="font-size: 0.75rem; margin-top: 0.25rem;">Bounce</div>
      </div>
      <div style="text-align: center;">
        <ag-icon-button-fx .fx=${"bounce"} .fxEase=${"spring-sm"} .variant=${"primary"} .label=${"Spring small"}>
          ${createElement(Download)}
        </ag-icon-button-fx>
        <div style="font-size: 0.75rem; margin-top: 0.25rem;">Spring SM</div>
      </div>
      <div style="text-align: center;">
        <ag-icon-button-fx .fx=${"bounce"} .fxEase=${"spring-md"} .variant=${"primary"} .label=${"Spring medium"}>
          ${createElement(Download)}
        </ag-icon-button-fx>
        <div style="font-size: 0.75rem; margin-top: 0.25rem;">Spring MD</div>
      </div>
      <div style="text-align: center;">
        <ag-icon-button-fx .fx=${"bounce"} .fxEase=${"spring-lg"} .variant=${"primary"} .label=${"Spring large"}>
          ${createElement(Download)}
        </ag-icon-button-fx>
        <div style="font-size: 0.75rem; margin-top: 0.25rem;">Spring LG</div>
      </div>
    </div>
  `,
};

// ========================================
// Effects Gallery - All Effects
// ========================================

export const EffectsGallery: Story = {
  render: () => html`
    <div style="padding: 2rem; max-width: 1400px; margin: 0 auto;">
      <!-- Pulse Effect -->
      <div style="margin-bottom: 3rem;">
        <h3 style="margin-bottom: 1rem; color: #1f2328; font-size: 1.25rem;">Pulse <span style="font-weight: normal; font-size: 0.875rem; color: #6b7280;">Scale grow (hover)</span></h3>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
          <ag-icon-button-fx .fx=${"pulse"} .fxEase=${"spring-md"} .variant=${"primary"} .label=${"Pulse primary"}>${createElement(Heart)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"pulse"} .fxEase=${"spring-md"} .variant=${"success"} .label=${"Pulse success"}>${createElement(Star)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"pulse"} .fxEase=${"spring-md"} .variant=${"warning"} .label=${"Pulse warning"}>${createElement(Bell)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"pulse"} .fxEase=${"spring-md"} .variant=${"danger"} .label=${"Pulse danger"}>${createElement(Heart)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"pulse"} .fxEase=${"spring-md"} .variant=${"ghost"} .label=${"Pulse ghost"}>${createElement(Star)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"pulse"} .fxEase=${"spring-md"} .variant=${"monochrome"} .label=${"Pulse monochrome"}>${createElement(Settings)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"pulse"} .fxEase=${"spring-md"} .variant=${"primary"} .size=${"lg"} .label=${"Pulse large"}>${createElement(Zap)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"pulse"} .fxEase=${"spring-md"} .variant=${"success"} .size=${"xl"} .label=${"Pulse extra large"}>${createElement(Target)}</ag-icon-button-fx>
        </div>
      </div>

      <!-- Bounce Effect -->
      <div style="margin-bottom: 3rem;">
        <h3 style="margin-bottom: 1rem; color: #1f2328; font-size: 1.25rem;">Bounce <span style="font-weight: normal; font-size: 0.875rem; color: #6b7280;">Vertical pop (hover)</span></h3>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
          <ag-icon-button-fx .fx=${"bounce"} .fxEase=${"spring-md"} .variant=${"primary"} .label=${"Bounce primary"}>${createElement(Download)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"bounce"} .fxEase=${"spring-md"} .variant=${"success"} .label=${"Bounce success"}>${createElement(Download)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"bounce"} .fxEase=${"spring-md"} .variant=${"warning"} .label=${"Bounce warning"}>${createElement(Download)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"bounce"} .fxEase=${"spring-md"} .variant=${"danger"} .label=${"Bounce danger"}>${createElement(Download)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"bounce"} .fxEase=${"spring-md"} .variant=${"ghost"} .label=${"Bounce ghost"}>${createElement(Download)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"bounce"} .fxEase=${"spring-md"} .variant=${"monochrome"} .label=${"Bounce monochrome"}>${createElement(Download)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"bounce"} .fxEase=${"spring-md"} .variant=${"primary"} .size=${"lg"} .label=${"Bounce large"}>${createElement(ChevronDown)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"bounce"} .fxEase=${"spring-md"} .variant=${"success"} .size=${"xl"} .label=${"Bounce extra large"}>${createElement(ArrowRight)}</ag-icon-button-fx>
        </div>
      </div>

      <!-- Wobble Effect -->
      <div style="margin-bottom: 3rem;">
        <h3 style="margin-bottom: 1rem; color: #1f2328; font-size: 1.25rem;">Wobble <span style="font-weight: normal; font-size: 0.875rem; color: #6b7280;">Rotate oscillation (hover)</span></h3>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
          <ag-icon-button-fx .fx=${"wobble"} .fxEase=${"spring-md"} .variant=${"primary"} .label=${"Wobble primary"}>${createElement(Bell)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"wobble"} .fxEase=${"spring-md"} .variant=${"success"} .label=${"Wobble success"}>${createElement(Bell)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"wobble"} .fxEase=${"spring-md"} .variant=${"warning"} .label=${"Wobble warning"}>${createElement(Bell)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"wobble"} .fxEase=${"spring-md"} .variant=${"danger"} .label=${"Wobble danger"}>${createElement(Bell)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"wobble"} .fxEase=${"spring-md"} .variant=${"ghost"} .label=${"Wobble ghost"}>${createElement(Bell)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"wobble"} .fxEase=${"spring-md"} .variant=${"monochrome"} .label=${"Wobble monochrome"}>${createElement(AlertTriangle)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"wobble"} .fxEase=${"spring-md"} .variant=${"primary"} .size=${"lg"} .label=${"Wobble large"}>${createElement(RotateCw)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"wobble"} .fxEase=${"spring-md"} .variant=${"warning"} .size=${"xl"} .label=${"Wobble extra large"}>${createElement(AlertTriangle)}</ag-icon-button-fx>
        </div>
      </div>

      <!-- Shake Effect -->
      <div style="margin-bottom: 3rem;">
        <h3 style="margin-bottom: 1rem; color: #1f2328; font-size: 1.25rem;">Shake <span style="font-weight: normal; font-size: 0.875rem; color: #6b7280;">Horizontal jitter (hover)</span></h3>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
          <ag-icon-button-fx .fx=${"shake"} .fxEase=${"ease"} .variant=${"primary"} .label=${"Shake primary"}>${createElement(Trash2)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"shake"} .fxEase=${"ease"} .variant=${"success"} .label=${"Shake success"}>${createElement(X)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"shake"} .fxEase=${"ease"} .variant=${"warning"} .label=${"Shake warning"}>${createElement(AlertTriangle)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"shake"} .fxEase=${"ease"} .variant=${"danger"} .label=${"Shake danger"}>${createElement(Trash2)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"shake"} .fxEase=${"ease"} .variant=${"ghost"} .label=${"Shake ghost"}>${createElement(X)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"shake"} .fxEase=${"ease"} .variant=${"monochrome"} .label=${"Shake monochrome"}>${createElement(Trash2)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"shake"} .fxEase=${"ease"} .variant=${"danger"} .size=${"lg"} .label=${"Shake large"}>${createElement(Trash2)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"shake"} .fxEase=${"ease"} .variant=${"warning"} .size=${"xl"} .label=${"Shake extra large"}>${createElement(AlertTriangle)}</ag-icon-button-fx>
        </div>
      </div>

      <!-- Jelly Effect -->
      <div style="margin-bottom: 3rem;">
        <h3 style="margin-bottom: 1rem; color: #1f2328; font-size: 1.25rem;">Jelly <span style="font-weight: normal; font-size: 0.875rem; color: #6b7280;">Squash/stretch (hover)</span></h3>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
          <ag-icon-button-fx .fx=${"jelly"} .fxEase=${"spring-lg"} .variant=${"primary"} .label=${"Jelly primary"}>${createElement(Sparkles)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"jelly"} .fxEase=${"spring-lg"} .variant=${"success"} .label=${"Jelly success"}>${createElement(Star)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"jelly"} .fxEase=${"spring-lg"} .variant=${"warning"} .label=${"Jelly warning"}>${createElement(Palette)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"jelly"} .fxEase=${"spring-lg"} .variant=${"danger"} .label=${"Jelly danger"}>${createElement(Flame)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"jelly"} .fxEase=${"spring-lg"} .variant=${"ghost"} .label=${"Jelly ghost"}>${createElement(Star)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"jelly"} .fxEase=${"spring-lg"} .variant=${"monochrome"} .label=${"Jelly monochrome"}>${createElement(Sparkles)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"jelly"} .fxEase=${"spring-lg"} .variant=${"primary"} .size=${"lg"} .label=${"Jelly large"}>${createElement(Palette)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"jelly"} .fxEase=${"spring-lg"} .variant=${"success"} .size=${"xl"} .label=${"Jelly extra large"}>${createElement(Flame)}</ag-icon-button-fx>
        </div>
      </div>

      <!-- Pulse-Wobble Sequential -->
      <div style="margin-bottom: 3rem;">
        <h3 style="margin-bottom: 1rem; color: #1f2328; font-size: 1.25rem;">Pulse → Wobble <span style="font-weight: normal; font-size: 0.875rem; color: #6b7280;">Sequential combo (hover)</span></h3>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
          <ag-icon-button-fx .fx=${"pulse-wobble"} .fxEase=${"spring-md"} .variant=${"primary"} .label=${"Pulse-wobble primary"}>${createElement(Heart)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"pulse-wobble"} .fxEase=${"spring-md"} .variant=${"success"} .label=${"Pulse-wobble success"}>${createElement(Star)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"pulse-wobble"} .fxEase=${"spring-md"} .variant=${"warning"} .label=${"Pulse-wobble warning"}>${createElement(Bell)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"pulse-wobble"} .fxEase=${"spring-md"} .variant=${"danger"} .label=${"Pulse-wobble danger"}>${createElement(Heart)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"pulse-wobble"} .fxEase=${"spring-md"} .variant=${"ghost"} .label=${"Pulse-wobble ghost"}>${createElement(Bookmark)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"pulse-wobble"} .fxEase=${"spring-md"} .variant=${"monochrome"} .label=${"Pulse-wobble monochrome"}>${createElement(Star)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"pulse-wobble"} .fxEase=${"spring-md"} .variant=${"primary"} .size=${"lg"} .label=${"Pulse-wobble large"}>${createElement(Heart)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"pulse-wobble"} .fxEase=${"spring-md"} .variant=${"success"} .size=${"xl"} .label=${"Pulse-wobble extra large"}>${createElement(Star)}</ag-icon-button-fx>
        </div>
      </div>

      <!-- Press Pop Effect -->
      <div style="margin-bottom: 3rem;">
        <h3 style="margin-bottom: 1rem; color: #1f2328; font-size: 1.25rem;">Press Pop <span style="font-weight: normal; font-size: 0.875rem; color: #6b7280;">Quick press (click)</span></h3>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
          <ag-icon-button-fx .fx=${"press-pop"} .fxEase=${"spring-sm"} .variant=${"primary"} .label=${"Press-pop primary"}>${createElement(Check)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"press-pop"} .fxEase=${"spring-sm"} .variant=${"success"} .label=${"Press-pop success"}>${createElement(Check)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"press-pop"} .fxEase=${"spring-sm"} .variant=${"warning"} .label=${"Press-pop warning"}>${createElement(Plus)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"press-pop"} .fxEase=${"spring-sm"} .variant=${"danger"} .label=${"Press-pop danger"}>${createElement(X)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"press-pop"} .fxEase=${"spring-sm"} .variant=${"ghost"} .label=${"Press-pop ghost"}>${createElement(Check)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"press-pop"} .fxEase=${"spring-sm"} .variant=${"monochrome"} .label=${"Press-pop monochrome"}>${createElement(Plus)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"press-pop"} .fxEase=${"spring-sm"} .variant=${"primary"} .size=${"lg"} .label=${"Press-pop large"}>${createElement(Check)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"press-pop"} .fxEase=${"spring-sm"} .variant=${"success"} .size=${"xl"} .label=${"Press-pop extra large"}>${createElement(Check)}</ag-icon-button-fx>
        </div>
      </div>

      <!-- Grow/Shrink Effects -->
      <div style="margin-bottom: 3rem;">
        <h3 style="margin-bottom: 1rem; color: #1f2328; font-size: 1.25rem;">Grow / Shrink <span style="font-weight: normal; font-size: 0.875rem; color: #6b7280;">Size change (hover)</span></h3>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
          <ag-icon-button-fx .fx=${"grow"} .fxEase=${"spring-md"} .variant=${"primary"} .label=${"Grow"}>${createElement(Plus)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"shrink"} .fxEase=${"spring-md"} .variant=${"secondary"} .label=${"Shrink"}>${createElement(Minus)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"grow"} .fxEase=${"spring-md"} .variant=${"success"} .label=${"Grow success"}>${createElement(Search)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"shrink"} .fxEase=${"spring-md"} .variant=${"ghost"} .label=${"Shrink ghost"}>${createElement(X)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"grow"} .fxEase=${"spring-md"} .variant=${"primary"} .size=${"lg"} .label=${"Grow large"}>${createElement(Plus)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"shrink"} .fxEase=${"spring-md"} .variant=${"secondary"} .size=${"lg"} .label=${"Shrink large"}>${createElement(Minus)}</ag-icon-button-fx>
        </div>
      </div>
    </div>
  `,
};

// ========================================
// Size Variations
// ========================================

export const SizeVariations: Story = {
  render: () => html`
    <div style="padding: 2rem;">
      <h3 style="margin-bottom: 1.5rem; color: #1f2328; font-size: 1.25rem;">Icon Button FX Sizes with Pulse Effect</h3>
      <p style="margin-bottom: 1rem; color: #6b7280; font-size: 0.875rem;">
        Note: For <code>xs</code> and <code>sm</code> sizes, ensure icons scale properly by setting <code>width: '100%', height: '100%'</code>
        on the icon element so it fills the button's icon container.
      </p>
      <div style="display: flex; gap: 1.5rem; flex-wrap: wrap; align-items: center;">
        <div style="text-align: center;">
          <ag-icon-button-fx .fx=${"pulse"} .size=${"xs"} .variant=${"primary"} .label=${"Extra small"}>
            ${createElement(Heart, { width: '100%', height: '100%' })}
          </ag-icon-button-fx>
          <div style="font-size: 0.75rem; margin-top: 0.5rem; color: #6b7280;">XS</div>
        </div>
        <div style="text-align: center;">
          <ag-icon-button-fx .fx=${"pulse"} .size=${"sm"} .variant=${"primary"} .label=${"Small"}>
            ${createElement(Heart, { width: '100%', height: '100%' })}
          </ag-icon-button-fx>
          <div style="font-size: 0.75rem; margin-top: 0.5rem; color: #6b7280;">SM</div>
        </div>
        <div style="text-align: center;">
          <ag-icon-button-fx .fx=${"pulse"} .size=${"md"} .variant=${"primary"} .label=${"Medium"}>
            ${createElement(Heart, { width: '100%', height: '100%' })}
          </ag-icon-button-fx>
          <div style="font-size: 0.75rem; margin-top: 0.5rem; color: #6b7280;">MD (Default)</div>
        </div>
        <div style="text-align: center;">
          <ag-icon-button-fx .fx=${"pulse"} .size=${"lg"} .variant=${"primary"} .label=${"Large"}>
            ${createElement(Heart, { width: '100%', height: '100%' })}
          </ag-icon-button-fx>
          <div style="font-size: 0.75rem; margin-top: 0.5rem; color: #6b7280;">LG</div>
        </div>
        <div style="text-align: center;">
          <ag-icon-button-fx .fx=${"pulse"} .size=${"xl"} .variant=${"primary"} .label=${"Extra large"}>
            ${createElement(Heart, { width: '100%', height: '100%' })}
          </ag-icon-button-fx>
          <div style="font-size: 0.75rem; margin-top: 0.5rem; color: #6b7280;">XL</div>
        </div>
      </div>
    </div>
  `,
};

// ========================================
// Common Use Cases
// ========================================

export const CommonUseCases: Story = {
  render: () => html`
    <div style="padding: 2rem;">
      <h3 style="margin-bottom: 1.5rem; color: #1f2328; font-size: 1.25rem;">Common Icon Button FX Use Cases</h3>

      <div style="margin-bottom: 2rem;">
        <h4 style="margin-bottom: 0.75rem; color: #6b7280; font-size: 1rem;">Navigation</h4>
        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
          <ag-icon-button-fx .fx=${"pulse"} .variant=${"ghost"} .label=${"Menu"}>${createElement(Menu)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"pulse"} .variant=${"ghost"} .label=${"Close"}>${createElement(X)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"pulse"} .variant=${"ghost"} .label=${"Search"}>${createElement(Search)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"pulse"} .variant=${"ghost"} .label=${"Settings"}>${createElement(Settings)}</ag-icon-button-fx>
        </div>
      </div>

      <div style="margin-bottom: 2rem;">
        <h4 style="margin-bottom: 0.75rem; color: #6b7280; font-size: 1rem;">Actions</h4>
        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
          <ag-icon-button-fx .fx=${"pulse-wobble"} .variant=${"primary"} .label=${"Favorite"}>${createElement(Heart)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"pulse-wobble"} .variant=${"warning"} .label=${"Bookmark"}>${createElement(Bookmark)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"bounce"} .variant=${"success"} .label=${"Download"}>${createElement(Download)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"shake"} .variant=${"danger"} .label=${"Delete"}>${createElement(Trash2)}</ag-icon-button-fx>
        </div>
      </div>

      <div style="margin-bottom: 2rem;">
        <h4 style="margin-bottom: 0.75rem; color: #6b7280; font-size: 1rem;">Notifications</h4>
        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
          <ag-icon-button-fx .fx=${"wobble"} .variant=${"warning"} .label=${"Notifications"}>${createElement(Bell)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"wobble"} .variant=${"primary"} .label=${"Messages"}>${createElement(Mail)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"wobble"} .variant=${"danger"} .label=${"Alerts"}>${createElement(AlertTriangle)}</ag-icon-button-fx>
        </div>
      </div>

      <div style="margin-bottom: 2rem;">
        <h4 style="margin-bottom: 0.75rem; color: #6b7280; font-size: 1rem;">Social</h4>
        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
          <ag-icon-button-fx .fx=${"pulse-wobble"} .variant=${"danger"} .label=${"Like"}>${createElement(Heart)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"pulse-wobble"} .variant=${"warning"} .label=${"Star"}>${createElement(Star)}</ag-icon-button-fx>
          <ag-icon-button-fx .fx=${"pulse-wobble"} .variant=${"primary"} .label=${"Bookmark"}>${createElement(Bookmark)}</ag-icon-button-fx>
        </div>
      </div>
    </div>
  `,
};
