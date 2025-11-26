import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { fn } from "storybook/test";
import "agnosticui-core/button-fx";
import type { ButtonFx } from "agnosticui-core/button-fx";

// Extend ButtonFx with event handler props for Storybook
interface ButtonFxProps extends ButtonFx {
  onToggle?: (detail: any) => void;
  onFocus?: (detail: any) => void;
  onBlur?: (detail: any) => void;
}

const meta: Meta<ButtonFxProps> = {
  title: "AgnosticUI Lit/ButtonFx",
  component: "ag-button-fx",
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
        "tilt-press",
        "glow",
        "press-pop",
        "slide-in",
        "icon-reveal",
        "highlight-sweep",
      ],
      description: "FX effect to apply (can be multiple)",
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
      options: ["", "primary", "secondary", "success", "warning", "danger"],
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
    fxEase: "ease",
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
  parameters: {
    actions: {
      handles: ["toggle", "focus", "blur"],
    },
  },
};

export default meta;

type Story = StoryObj<ButtonFxProps>;

// Default story with all controls
export const Default: Story = {
  args: {},
  render: ({
    fx,
    fxSpeed,
    fxEase,
    fxDisabled,
    variant,
    size,
    shape,
    bordered,
    ghost,
    link,
    type,
    disabled,
    loading,
    onToggle,
    onFocus,
    onBlur,
  }) => html`
    <ag-button-fx
      .fx=${[fx as string]}
      .fxSpeed=${fxSpeed}
      .fxEase=${fxEase}
      .fxDisabled=${fxDisabled}
      .variant=${variant}
      .size=${size}
      .shape=${shape}
      .bordered=${bordered}
      .ghost=${ghost}
      .link=${link}
      .type=${type}
      .disabled=${disabled}
      .loading=${loading}
      @toggle=${(e: CustomEvent) => onToggle?.(e.detail)}
      @focus=${() => onFocus?.({ type: "focus" })}
      @blur=${() => onBlur?.({ type: "blur" })}
    >
      Hover Me
    </ag-button-fx>
  `,
};

// ========================================
// Individual FX Effect Stories
// ========================================

export const Bounce: Story = {
  args: {
    fx: "bounce",
    variant: "primary",
  },
  render: ({ fx, variant }) => html`
    <ag-button-fx .fx=${[fx as string]} .variant=${variant}>
      Bounce Effect
    </ag-button-fx>
  `,
};

export const Pulse: Story = {
  args: {
    fx: "pulse",
    variant: "primary",
  },
  render: ({ fx, variant }) => html`
    <ag-button-fx .fx=${[fx as string]} .variant=${variant}>
      Pulse Effect
    </ag-button-fx>
  `,
};

export const Jelly: Story = {
  args: {
    fx: "jelly",
    variant: "primary",
  },
  render: ({ fx, variant }) => html`
    <ag-button-fx .fx=${[fx as string]} .variant=${variant}>
      Jelly Effect
    </ag-button-fx>
  `,
};

export const TiltPress: Story = {
  args: {
    fx: "tilt-press",
    variant: "primary",
  },
  render: ({ fx, variant }) => html`
    <ag-button-fx .fx=${[fx as string]} .variant=${variant}>
      Click Me (Active)
    </ag-button-fx>
  `,
};


export const Glow: Story = {
  args: {
    fx: "glow",
    variant: "primary",
  },
  render: ({ fx, variant }) => html`
    <ag-button-fx .fx=${[fx as string]} .variant=${variant}>
      Glow Effect
    </ag-button-fx>
  `,
};

export const PressPop: Story = {
  args: {
    fx: "press-pop",
    variant: "primary",
  },
  render: ({ fx, variant }) => html`
    <ag-button-fx .fx=${[fx as string]} .variant=${variant}>
      Click Me (Active)
    </ag-button-fx>
  `,
};

export const SlideIn: Story = {
  args: {
    fx: "slide-in",
    variant: "primary",
  },
  render: ({ fx, variant }) => html`
    <ag-button-fx .fx=${[fx as string]} .variant=${variant}>
      Slide In (On Mount)
    </ag-button-fx>
  `,
};


export const IconReveal: Story = {
  args: {
    fx: "icon-reveal",
    variant: "primary",
  },
  render: ({ fx, variant }) => html`
    <ag-button-fx .fx=${[fx as string]} .variant=${variant}>
      Icon Reveal Effect
    </ag-button-fx>
  `,
};


export const HighlightSweep: Story = {
  args: {
    fx: "highlight-sweep",
    variant: "primary",
  },
  render: ({ fx, variant }) => html`
    <ag-button-fx .fx=${[fx as string]} .variant=${variant}>
      Highlight Sweep
    </ag-button-fx>
  `,
};

// ========================================
// FX Speed Variations
// ========================================

export const SpeedComparison: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <ag-button-fx .fx=${["pulse"]} .fxSpeed=${"xs"} .variant=${"primary"}>
        XS Speed
      </ag-button-fx>
      <ag-button-fx .fx=${["pulse"]} .fxSpeed=${"sm"} .variant=${"primary"}>
        SM Speed
      </ag-button-fx>
      <ag-button-fx .fx=${["pulse"]} .fxSpeed=${"md"} .variant=${"primary"}>
        MD Speed (Default)
      </ag-button-fx>
      <ag-button-fx .fx=${["pulse"]} .fxSpeed=${"lg"} .variant=${"primary"}>
        LG Speed
      </ag-button-fx>
      <ag-button-fx .fx=${["pulse"]} .fxSpeed=${"xl"} .variant=${"primary"}>
        XL Speed
      </ag-button-fx>
    </div>
  `,
};

// ========================================
// FX Easing Variations
// ========================================

export const EasingComparison: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <ag-button-fx .fx=${["bounce"]} .fxEase=${"ease"} .variant=${"primary"}>
        Ease
      </ag-button-fx>
      <ag-button-fx .fx=${["bounce"]} .fxEase=${"ease-in"} .variant=${"primary"}>
        Ease-In
      </ag-button-fx>
      <ag-button-fx .fx=${["bounce"]} .fxEase=${"ease-out"} .variant=${"primary"}>
        Ease-Out
      </ag-button-fx>
      <ag-button-fx .fx=${["bounce"]} .fxEase=${"bounce"} .variant=${"primary"}>
        Bounce
      </ag-button-fx>
      <ag-button-fx .fx=${["bounce"]} .fxEase=${"spring-sm"} .variant=${"primary"}>
        Spring SM
      </ag-button-fx>
      <ag-button-fx .fx=${["bounce"]} .fxEase=${"spring-md"} .variant=${"primary"}>
        Spring MD
      </ag-button-fx>
      <ag-button-fx .fx=${["bounce"]} .fxEase=${"spring-lg"} .variant=${"primary"}>
        Spring LG
      </ag-button-fx>
    </div>
  `,
};

// ========================================
// Effect Composition
// ========================================

export const MultipleEffects: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <ag-button-fx .fx=${["pulse", "glow"]} .variant=${"primary"}>
        Pulse + Glow
      </ag-button-fx>
      <ag-button-fx .fx=${["bounce", "glow"]} .variant=${"success"}>
        Bounce + Glow
      </ag-button-fx>
      <ag-button-fx .fx=${["jelly", "highlight-sweep"]} .variant=${"warning"}>
        Jelly + Highlight
      </ag-button-fx>
    </div>
  `,
};

// ========================================
// Effects Gallery - All 12 Effects
// ========================================

export const EffectsGallery: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1.5rem; padding: 1rem;">
      <div style="text-align: center;">
        <ag-button-fx .fx=${["bounce"]} .variant=${"primary"}>Bounce</ag-button-fx>
        <p style="margin-top: 0.5rem; font-size: 0.875rem; color: #666;">Vertical pop (hover)</p>
      </div>
      <div style="text-align: center;">
        <ag-button-fx .fx=${["pulse"]} .variant=${"primary"}>Pulse</ag-button-fx>
        <p style="margin-top: 0.5rem; font-size: 0.875rem; color: #666;">Scale grow (hover)</p>
      </div>
      <div style="text-align: center;">
        <ag-button-fx .fx=${["jelly"]} .variant=${"primary"}>Jelly</ag-button-fx>
        <p style="margin-top: 0.5rem; font-size: 0.875rem; color: #666;">Squash/stretch (hover)</p>
      </div>
      <div style="text-align: center;">
        <ag-button-fx .fx=${["tilt-press"]} .variant=${"primary"}>Tilt Press</ag-button-fx>
        <p style="margin-top: 0.5rem; font-size: 0.875rem; color: #666;">3D tilt (click)</p>
      </div>
      <div style="text-align: center;">
        <ag-button-fx .fx=${["glow"]} .variant=${"primary"}>Glow</ag-button-fx>
        <p style="margin-top: 0.5rem; font-size: 0.875rem; color: #666;">Shadow pulse (hover)</p>
      </div>
      <div style="text-align: center;">
        <ag-button-fx .fx=${["press-pop"]} .variant=${"primary"}>Press Pop</ag-button-fx>
        <p style="margin-top: 0.5rem; font-size: 0.875rem; color: #666;">Quick press (click)</p>
      </div>
      <div style="text-align: center;">
        <ag-button-fx .fx=${["slide-in"]} .variant=${"primary"}>Slide In</ag-button-fx>
        <p style="margin-top: 0.5rem; font-size: 0.875rem; color: #666;">Entrance (mount)</p>
      </div>
      <div style="text-align: center;">
        <ag-button-fx .fx=${["icon-reveal"]} .variant=${"primary"}>Icon Reveal</ag-button-fx>
        <p style="margin-top: 0.5rem; font-size: 0.875rem; color: #666;">Clip-path (hover)</p>
      </div>
      <div style="text-align: center;">
        <ag-button-fx .fx=${["highlight-sweep"]} .variant=${"primary"}>Highlight</ag-button-fx>
        <p style="margin-top: 0.5rem; font-size: 0.875rem; color: #666;">Horizontal sweep (hover)</p>
      </div>
    </div>
  `,
};

// ========================================
// FX with Different Button Variants
// ========================================

export const VariantsWithFx: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <ag-button-fx .fx=${["pulse"]} .variant=${"primary"}>Primary</ag-button-fx>
      <ag-button-fx .fx=${["pulse"]} .variant=${"secondary"}>Secondary</ag-button-fx>
      <ag-button-fx .fx=${["pulse"]} .variant=${"success"}>Success</ag-button-fx>
      <ag-button-fx .fx=${["pulse"]} .variant=${"warning"}>Warning</ag-button-fx>
      <ag-button-fx .fx=${["pulse"]} .variant=${"danger"}>Danger</ag-button-fx>
    </div>
  `,
};

// ========================================
// FX Disabled
// ========================================

export const FxDisabled: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center;">
      <ag-button-fx .fx=${["pulse"]} .fxDisabled=${false} .variant=${"primary"}>
        FX Enabled
      </ag-button-fx>
      <ag-button-fx .fx=${["pulse"]} .fxDisabled=${true} .variant=${"primary"}>
        FX Disabled
      </ag-button-fx>
    </div>
  `,
};

// ========================================
// Dark Mode Compatible
// ========================================

export const DarkMode: Story = {
  render: () => html`
    <div data-theme="dark" style="background-color: #1a1a1a; padding: 2rem; border-radius: 8px;">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem;">
        <ag-button-fx .fx=${["bounce"]} .variant=${"primary"}>Bounce</ag-button-fx>
        <ag-button-fx .fx=${["pulse"]} .variant=${"success"}>Pulse</ag-button-fx>
        <ag-button-fx .fx=${["glow"]} .variant=${"warning"}>Glow</ag-button-fx>
        <ag-button-fx .fx=${["shimmer"]} .variant=${"danger"}>Shimmer</ag-button-fx>
      </div>
    </div>
  `,
};

// ========================================
// Accessibility - Reduced Motion
// ========================================

export const ReducedMotion: Story = {
  render: () => html`
    <div>
      <p style="margin-bottom: 1rem; font-size: 0.875rem; color: #666;">
        These effects will automatically respect <code>prefers-reduced-motion: reduce</code>.
        To test: Enable "Reduce Motion" in your OS accessibility settings.
      </p>
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <ag-button-fx .fx=${["bounce"]} .variant=${"primary"}>Bounce</ag-button-fx>
        <ag-button-fx .fx=${["pulse"]} .variant=${"primary"}>Pulse</ag-button-fx>
        <ag-button-fx .fx=${["jelly"]} .variant=${"primary"}>Jelly</ag-button-fx>
      </div>
    </div>
  `,
};
