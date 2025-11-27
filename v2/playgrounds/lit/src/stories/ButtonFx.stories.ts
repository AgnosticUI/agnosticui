import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { fn } from "storybook/test";
import { createElement, Target, Sparkles, Palette, Flame, MousePointerClick, Check, Download, ArrowDown, Plus, Search, Minus, ChevronDown, ArrowUp, BarChart3, ArrowRight, ArrowRightCircle, RotateCw, Theater, AlertTriangle, X, Zap, Bomb } from "lucide";
import "agnosticui-core/button-fx";
import "agnosticui-core/icon";
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
// Effects Gallery - All Effects
// ========================================

export const EffectsGallery: Story = {
  render: () => html`
    <div style="padding: 2rem; max-width: 1400px; margin: 0 auto;">
      <!-- Bounce Effect -->
      <div style="margin-bottom: 3rem;">
        <h3 style="margin-bottom: 1rem; color: #1f2328; font-size: 1.25rem;">Bounce <span style="font-weight: normal; font-size: 0.875rem; color: #6b7280;">Vertical pop (hover)</span></h3>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
          <ag-button-fx .fx=${["bounce"]} .fxEase=${"spring-md"} .variant=${"primary"} .shape=${"rounded"}>Primary</ag-button-fx>
          <ag-button-fx .fx=${["bounce"]} .fxEase=${"spring-md"} .variant=${"success"} .shape=${"rounded"}>Success</ag-button-fx>
          <ag-button-fx .fx=${["bounce"]} .fxEase=${"spring-md"} .variant=${"warning"} .shape=${"rounded"}>Warning</ag-button-fx>
          <ag-button-fx .fx=${["bounce"]} .fxEase=${"spring-md"} .variant=${"danger"} .shape=${"rounded"}>Danger</ag-button-fx>
          <ag-button-fx .fx=${["bounce"]} .fxEase=${"spring-md"} .variant=${"primary"} .bordered=${true} .shape=${"rounded"}>Bordered</ag-button-fx>
          <ag-button-fx .fx=${["bounce"]} .fxEase=${"spring-md"} .variant=${"success"} .shape=${"capsule"} .bordered=${true}>Capsule</ag-button-fx>
          <ag-button-fx .fx=${["bounce"]} .fxEase=${"spring-md"} .variant=${"warning"} .shape=${"circle"} .size=${"lg"} .bordered=${true}><ag-icon no-fill>${createElement(Target)}</ag-icon></ag-button-fx>
          <ag-button-fx .fx=${["bounce"]} .fxEase=${"spring-md"} .variant=${"danger"} .shape=${"rounded-square"} .size=${"lg"} .bordered=${true}><ag-icon no-fill>${createElement(Sparkles)}</ag-icon></ag-button-fx>
        </div>
      </div>

      <!-- Pulse Effect -->
      <div style="margin-bottom: 3rem;">
        <h3 style="margin-bottom: 1rem; color: #1f2328; font-size: 1.25rem;">Pulse <span style="font-weight: normal; font-size: 0.875rem; color: #6b7280;">Scale grow (hover)</span></h3>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
          <ag-button-fx .fx=${["pulse"]} .fxEase=${"spring-md"} .variant=${"primary"} .shape=${"rounded"}>Primary</ag-button-fx>
          <ag-button-fx .fx=${["pulse"]} .fxEase=${"spring-md"} .variant=${"success"} .shape=${"rounded"}>Success</ag-button-fx>
          <ag-button-fx .fx=${["pulse"]} .fxEase=${"spring-md"} .variant=${"warning"} .shape=${"rounded"}>Warning</ag-button-fx>
          <ag-button-fx .fx=${["pulse"]} .fxEase=${"spring-md"} .variant=${"danger"} .shape=${"rounded"}>Danger</ag-button-fx>
          <ag-button-fx .fx=${["pulse"]} .fxEase=${"spring-md"} .variant=${"primary"} .bordered=${true} .shape=${"rounded"}>Bordered</ag-button-fx>
          <ag-button-fx .fx=${["pulse"]} .fxEase=${"spring-md"} .variant=${"success"} .shape=${"capsule"} .bordered=${true}>Capsule</ag-button-fx>
          <ag-button-fx .fx=${["pulse"]} .fxEase=${"spring-md"} .variant=${"warning"} .shape=${"circle"} .size=${"lg"} .bordered=${true}><ag-icon no-fill>${createElement(Sparkles)}</ag-icon></ag-button-fx>
          <ag-button-fx .fx=${["pulse"]} .fxEase=${"spring-md"} .variant=${"danger"} .shape=${"rounded-square"} .size=${"lg"} .bordered=${true}><ag-icon no-fill>${createElement(Zap)}</ag-icon></ag-button-fx>
        </div>
      </div>

      <!-- Jelly Effect -->
      <div style="margin-bottom: 3rem;">
        <h3 style="margin-bottom: 1rem; color: #1f2328; font-size: 1.25rem;">Jelly <span style="font-weight: normal; font-size: 0.875rem; color: #6b7280;">Squash/stretch (hover)</span></h3>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
          <ag-button-fx .fx=${["jelly"]} .fxEase=${"spring-lg"} .variant=${"primary"} .shape=${"rounded"}>Primary</ag-button-fx>
          <ag-button-fx .fx=${["jelly"]} .fxEase=${"spring-lg"} .variant=${"success"} .shape=${"rounded"}>Success</ag-button-fx>
          <ag-button-fx .fx=${["jelly"]} .fxEase=${"spring-lg"} .variant=${"warning"} .shape=${"rounded"}>Warning</ag-button-fx>
          <ag-button-fx .fx=${["jelly"]} .fxEase=${"spring-lg"} .variant=${"danger"} .shape=${"rounded"}>Danger</ag-button-fx>
          <ag-button-fx .fx=${["jelly"]} .fxEase=${"spring-lg"} .variant=${"primary"} .bordered=${true} .shape=${"rounded"}>Bordered</ag-button-fx>
          <ag-button-fx .fx=${["jelly"]} .fxEase=${"spring-lg"} .variant=${"success"} .shape=${"capsule"} .bordered=${true}>Capsule</ag-button-fx>
          <ag-button-fx .fx=${["jelly"]} .fxEase=${"spring-lg"} .variant=${"warning"} .shape=${"circle"} .size=${"lg"} .bordered=${true}><ag-icon no-fill>${createElement(Palette)}</ag-icon></ag-button-fx>
          <ag-button-fx .fx=${["jelly"]} .fxEase=${"spring-lg"} .variant=${"danger"} .shape=${"rounded-square"} .size=${"lg"} .bordered=${true}><ag-icon no-fill>${createElement(Flame)}</ag-icon></ag-button-fx>
        </div>
      </div>

      <!-- Press Pop Effect -->
      <div style="margin-bottom: 3rem;">
        <h3 style="margin-bottom: 1rem; color: #1f2328; font-size: 1.25rem;">Press Pop <span style="font-weight: normal; font-size: 0.875rem; color: #6b7280;">Quick press (click)</span></h3>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
          <ag-button-fx .fx=${["press-pop"]} .fxEase=${"spring-sm"} .variant=${"primary"} .shape=${"rounded"}>Primary</ag-button-fx>
          <ag-button-fx .fx=${["press-pop"]} .fxEase=${"spring-sm"} .variant=${"success"} .shape=${"rounded"}>Success</ag-button-fx>
          <ag-button-fx .fx=${["press-pop"]} .fxEase=${"spring-sm"} .variant=${"warning"} .shape=${"rounded"}>Warning</ag-button-fx>
          <ag-button-fx .fx=${["press-pop"]} .fxEase=${"spring-sm"} .variant=${"danger"} .shape=${"rounded"}>Danger</ag-button-fx>
          <ag-button-fx .fx=${["press-pop"]} .fxEase=${"spring-sm"} .variant=${"primary"} .bordered=${true} .shape=${"rounded"}>Bordered</ag-button-fx>
          <ag-button-fx .fx=${["press-pop"]} .fxEase=${"spring-sm"} .variant=${"success"} .shape=${"capsule"} .bordered=${true}>Capsule</ag-button-fx>
          <ag-button-fx .fx=${["press-pop"]} .fxEase=${"spring-sm"} .variant=${"warning"} .shape=${"circle"} .size=${"lg"} .bordered=${true}><ag-icon no-fill>${createElement(MousePointerClick)}</ag-icon></ag-button-fx>
          <ag-button-fx .fx=${["press-pop"]} .fxEase=${"spring-sm"} .variant=${"danger"} .shape=${"rounded-square"} .size=${"lg"} .bordered=${true}><ag-icon no-fill>${createElement(Check)}</ag-icon></ag-button-fx>
        </div>
      </div>

      <!-- Slide In Effect -->
      <div style="margin-bottom: 3rem;">
        <h3 style="margin-bottom: 1rem; color: #1f2328; font-size: 1.25rem;">Slide In <span style="font-weight: normal; font-size: 0.875rem; color: #6b7280;">Entrance (mount)</span></h3>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
          <ag-button-fx .fx=${["slide-in"]} .fxEase=${"spring-md"} .variant=${"primary"} .shape=${"rounded"}>Primary</ag-button-fx>
          <ag-button-fx .fx=${["slide-in"]} .fxEase=${"spring-md"} .variant=${"success"} .shape=${"rounded"}>Success</ag-button-fx>
          <ag-button-fx .fx=${["slide-in"]} .fxEase=${"spring-md"} .variant=${"warning"} .shape=${"rounded"}>Warning</ag-button-fx>
          <ag-button-fx .fx=${["slide-in"]} .fxEase=${"spring-md"} .variant=${"danger"} .shape=${"rounded"}>Danger</ag-button-fx>
          <ag-button-fx .fx=${["slide-in"]} .fxEase=${"spring-md"} .variant=${"primary"} .bordered=${true} .shape=${"rounded"}>Bordered</ag-button-fx>
          <ag-button-fx .fx=${["slide-in"]} .fxEase=${"spring-md"} .variant=${"success"} .shape=${"capsule"} .bordered=${true}>Capsule</ag-button-fx>
          <ag-button-fx .fx=${["slide-in"]} .fxEase=${"spring-md"} .variant=${"warning"} .shape=${"circle"} .size=${"lg"} .bordered=${true}><ag-icon no-fill>${createElement(Download)}</ag-icon></ag-button-fx>
          <ag-button-fx .fx=${["slide-in"]} .fxEase=${"spring-md"} .variant=${"danger"} .shape=${"rounded-square"} .size=${"lg"} .bordered=${true}><ag-icon no-fill>${createElement(ArrowDown)}</ag-icon></ag-button-fx>
        </div>
      </div>

      <!-- Grow Effect -->
      <div style="margin-bottom: 3rem;">
        <h3 style="margin-bottom: 1rem; color: #1f2328; font-size: 1.25rem;">Grow <span style="font-weight: normal; font-size: 0.875rem; color: #6b7280;">Scale up (hover)</span></h3>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
          <ag-button-fx .fx=${["grow"]} .fxEase=${"spring-md"} .variant=${"primary"} .shape=${"rounded"}>Primary</ag-button-fx>
          <ag-button-fx .fx=${["grow"]} .fxEase=${"spring-md"} .variant=${"success"} .shape=${"rounded"}>Success</ag-button-fx>
          <ag-button-fx .fx=${["grow"]} .fxEase=${"spring-md"} .variant=${"warning"} .shape=${"rounded"}>Warning</ag-button-fx>
          <ag-button-fx .fx=${["grow"]} .fxEase=${"spring-md"} .variant=${"danger"} .shape=${"rounded"}>Danger</ag-button-fx>
          <ag-button-fx .fx=${["grow"]} .fxEase=${"spring-md"} .variant=${"primary"} .bordered=${true} .shape=${"rounded"}>Bordered</ag-button-fx>
          <ag-button-fx .fx=${["grow"]} .fxEase=${"spring-md"} .variant=${"success"} .shape=${"capsule"} .bordered=${true}>Capsule</ag-button-fx>
          <ag-button-fx .fx=${["grow"]} .fxEase=${"spring-md"} .variant=${"warning"} .shape=${"circle"} .size=${"lg"} .bordered=${true}><ag-icon no-fill>${createElement(Plus)}</ag-icon></ag-button-fx>
          <ag-button-fx .fx=${["grow"]} .fxEase=${"spring-md"} .variant=${"danger"} .shape=${"rounded-square"} .size=${"lg"} .bordered=${true}><ag-icon no-fill>${createElement(Search)}</ag-icon></ag-button-fx>
        </div>
      </div>

      <!-- Shrink Effect -->
      <div style="margin-bottom: 3rem;">
        <h3 style="margin-bottom: 1rem; color: #1f2328; font-size: 1.25rem;">Shrink <span style="font-weight: normal; font-size: 0.875rem; color: #6b7280;">Scale down (hover)</span></h3>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
          <ag-button-fx .fx=${["shrink"]} .fxEase=${"spring-md"} .variant=${"primary"} .shape=${"rounded"}>Primary</ag-button-fx>
          <ag-button-fx .fx=${["shrink"]} .fxEase=${"spring-md"} .variant=${"success"} .shape=${"rounded"}>Success</ag-button-fx>
          <ag-button-fx .fx=${["shrink"]} .fxEase=${"spring-md"} .variant=${"warning"} .shape=${"rounded"}>Warning</ag-button-fx>
          <ag-button-fx .fx=${["shrink"]} .fxEase=${"spring-md"} .variant=${"danger"} .shape=${"rounded"}>Danger</ag-button-fx>
          <ag-button-fx .fx=${["shrink"]} .fxEase=${"spring-md"} .variant=${"primary"} .bordered=${true} .shape=${"rounded"}>Bordered</ag-button-fx>
          <ag-button-fx .fx=${["shrink"]} .fxEase=${"spring-md"} .variant=${"success"} .shape=${"capsule"} .bordered=${true}>Capsule</ag-button-fx>
          <ag-button-fx .fx=${["shrink"]} .fxEase=${"spring-md"} .variant=${"warning"} .shape=${"circle"} .size=${"lg"} .bordered=${true}><ag-icon no-fill>${createElement(Minus)}</ag-icon></ag-button-fx>
          <ag-button-fx .fx=${["shrink"]} .fxEase=${"spring-md"} .variant=${"danger"} .shape=${"rounded-square"} .size=${"lg"} .bordered=${true}><ag-icon no-fill>${createElement(ChevronDown)}</ag-icon></ag-button-fx>
        </div>
      </div>

      <!-- Push Effect -->
      <div style="margin-bottom: 3rem;">
        <h3 style="margin-bottom: 1rem; color: #1f2328; font-size: 1.25rem;">Push <span style="font-weight: normal; font-size: 0.875rem; color: #6b7280;">Press down (hover)</span></h3>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
          <ag-button-fx .fx=${["push"]} .fxEase=${"spring-sm"} .variant=${"primary"} .shape=${"rounded"}>Primary</ag-button-fx>
          <ag-button-fx .fx=${["push"]} .fxEase=${"spring-sm"} .variant=${"success"} .shape=${"rounded"}>Success</ag-button-fx>
          <ag-button-fx .fx=${["push"]} .fxEase=${"spring-sm"} .variant=${"warning"} .shape=${"rounded"}>Warning</ag-button-fx>
          <ag-button-fx .fx=${["push"]} .fxEase=${"spring-sm"} .variant=${"danger"} .shape=${"rounded"}>Danger</ag-button-fx>
          <ag-button-fx .fx=${["push"]} .fxEase=${"spring-sm"} .variant=${"primary"} .bordered=${true} .shape=${"rounded"}>Bordered</ag-button-fx>
          <ag-button-fx .fx=${["push"]} .fxEase=${"spring-sm"} .variant=${"success"} .shape=${"capsule"} .bordered=${true}>Capsule</ag-button-fx>
          <ag-button-fx .fx=${["push"]} .fxEase=${"spring-sm"} .variant=${"warning"} .shape=${"circle"} .size=${"lg"} .bordered=${true}><ag-icon no-fill>${createElement(ArrowDown)}</ag-icon></ag-button-fx>
          <ag-button-fx .fx=${["push"]} .fxEase=${"spring-sm"} .variant=${"danger"} .shape=${"rounded-square"} .size=${"lg"} .bordered=${true}><ag-icon no-fill>${createElement(Target)}</ag-icon></ag-button-fx>
        </div>
      </div>

      <!-- BG Slide Effect -->
      <div style="margin-bottom: 3rem;">
        <h3 style="margin-bottom: 1rem; color: #1f2328; font-size: 1.25rem;">BG Slide <span style="font-weight: normal; font-size: 0.875rem; color: #6b7280;">Background slides up (hover)</span></h3>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
          <ag-button-fx .fx=${["bg-slide"]} .fxSpeed=${"md"} .variant=${"primary"} .shape=${"rounded"}>Primary</ag-button-fx>
          <ag-button-fx .fx=${["bg-slide"]} .fxSpeed=${"md"} .variant=${"success"} .shape=${"rounded"}>Success</ag-button-fx>
          <ag-button-fx .fx=${["bg-slide"]} .fxSpeed=${"md"} .variant=${"warning"} .shape=${"rounded"}>Warning</ag-button-fx>
          <ag-button-fx .fx=${["bg-slide"]} .fxSpeed=${"md"} .variant=${"danger"} .shape=${"rounded"}>Danger</ag-button-fx>
          <ag-button-fx .fx=${["bg-slide"]} .fxSpeed=${"md"} .variant=${"primary"} .bordered=${true} .shape=${"rounded"}>Bordered</ag-button-fx>
          <ag-button-fx .fx=${["bg-slide"]} .fxSpeed=${"md"} .variant=${"success"} .shape=${"capsule"} .bordered=${true}>Capsule</ag-button-fx>
          <ag-button-fx .fx=${["bg-slide"]} .fxSpeed=${"md"} .variant=${"warning"} .shape=${"circle"} .size=${"lg"} .bordered=${true}><ag-icon no-fill>${createElement(ArrowUp)}</ag-icon></ag-button-fx>
          <ag-button-fx .fx=${["bg-slide"]} .fxSpeed=${"md"} .variant=${"danger"} .shape=${"rounded-square"} .size=${"lg"} .bordered=${true}><ag-icon no-fill>${createElement(BarChart3)}</ag-icon></ag-button-fx>
        </div>
      </div>

      <!-- Side Slide Effect -->
      <div style="margin-bottom: 3rem;">
        <h3 style="margin-bottom: 1rem; color: #1f2328; font-size: 1.25rem;">Side Slide <span style="font-weight: normal; font-size: 0.875rem; color: #6b7280;">Wipe left to right (hover)</span></h3>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
          <ag-button-fx .fx=${["side-slide"]} .fxSpeed=${"md"} .variant=${"primary"} .shape=${"rounded"}>Primary</ag-button-fx>
          <ag-button-fx .fx=${["side-slide"]} .fxSpeed=${"md"} .variant=${"success"} .shape=${"rounded"}>Success</ag-button-fx>
          <ag-button-fx .fx=${["side-slide"]} .fxSpeed=${"md"} .variant=${"warning"} .shape=${"rounded"}>Warning</ag-button-fx>
          <ag-button-fx .fx=${["side-slide"]} .fxSpeed=${"md"} .variant=${"danger"} .shape=${"rounded"}>Danger</ag-button-fx>
          <ag-button-fx .fx=${["side-slide"]} .fxSpeed=${"md"} .variant=${"primary"} .bordered=${true} .shape=${"rounded"}>Bordered</ag-button-fx>
          <ag-button-fx .fx=${["side-slide"]} .fxSpeed=${"md"} .variant=${"success"} .shape=${"capsule"} .bordered=${true}>Capsule</ag-button-fx>
          <ag-button-fx .fx=${["side-slide"]} .fxSpeed=${"md"} .variant=${"warning"} .shape=${"circle"} .size=${"lg"} .bordered=${true}><ag-icon no-fill>${createElement(ArrowRight)}</ag-icon></ag-button-fx>
          <ag-button-fx .fx=${["side-slide"]} .fxSpeed=${"md"} .variant=${"danger"} .shape=${"rounded-square"} .size=${"lg"} .bordered=${true}><ag-icon no-fill>${createElement(ArrowRightCircle)}</ag-icon></ag-button-fx>
        </div>
      </div>

      <!-- Wobble Effect -->
      <div style="margin-bottom: 3rem;">
        <h3 style="margin-bottom: 1rem; color: #1f2328; font-size: 1.25rem;">Wobble <span style="font-weight: normal; font-size: 0.875rem; color: #6b7280;">Rotate wobble (hover)</span></h3>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
          <ag-button-fx .fx=${["wobble"]} .fxEase=${"spring-md"} .variant=${"primary"} .shape=${"rounded"}>Primary</ag-button-fx>
          <ag-button-fx .fx=${["wobble"]} .fxEase=${"spring-md"} .variant=${"success"} .shape=${"rounded"}>Success</ag-button-fx>
          <ag-button-fx .fx=${["wobble"]} .fxEase=${"spring-md"} .variant=${"warning"} .shape=${"rounded"}>Warning</ag-button-fx>
          <ag-button-fx .fx=${["wobble"]} .fxEase=${"spring-md"} .variant=${"danger"} .shape=${"rounded"}>Danger</ag-button-fx>
          <ag-button-fx .fx=${["wobble"]} .fxEase=${"spring-md"} .variant=${"primary"} .bordered=${true} .shape=${"rounded"}>Bordered</ag-button-fx>
          <ag-button-fx .fx=${["wobble"]} .fxEase=${"spring-md"} .variant=${"success"} .shape=${"capsule"} .bordered=${true}>Capsule</ag-button-fx>
          <ag-button-fx .fx=${["wobble"]} .fxEase=${"spring-md"} .variant=${"warning"} .shape=${"circle"} .size=${"lg"} .bordered=${true}><ag-icon no-fill>${createElement(RotateCw)}</ag-icon></ag-button-fx>
          <ag-button-fx .fx=${["wobble"]} .fxEase=${"spring-md"} .variant=${"danger"} .shape=${"rounded-square"} .size=${"lg"} .bordered=${true}><ag-icon no-fill>${createElement(Theater)}</ag-icon></ag-button-fx>
        </div>
      </div>

      <!-- Shake Effect -->
      <div style="margin-bottom: 3rem;">
        <h3 style="margin-bottom: 1rem; color: #1f2328; font-size: 1.25rem;">Shake <span style="font-weight: normal; font-size: 0.875rem; color: #6b7280;">Horizontal shake (hover)</span></h3>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
          <ag-button-fx .fx=${["shake"]} .fxSpeed=${"sm"} .variant=${"primary"} .shape=${"rounded"}>Primary</ag-button-fx>
          <ag-button-fx .fx=${["shake"]} .fxSpeed=${"sm"} .variant=${"success"} .shape=${"rounded"}>Success</ag-button-fx>
          <ag-button-fx .fx=${["shake"]} .fxSpeed=${"sm"} .variant=${"warning"} .shape=${"rounded"}>Warning</ag-button-fx>
          <ag-button-fx .fx=${["shake"]} .fxSpeed=${"sm"} .variant=${"danger"} .shape=${"rounded"}>Danger</ag-button-fx>
          <ag-button-fx .fx=${["shake"]} .fxSpeed=${"sm"} .variant=${"primary"} .bordered=${true} .shape=${"rounded"}>Bordered</ag-button-fx>
          <ag-button-fx .fx=${["shake"]} .fxSpeed=${"sm"} .variant=${"success"} .shape=${"capsule"} .bordered=${true}>Capsule</ag-button-fx>
          <ag-button-fx .fx=${["shake"]} .fxSpeed=${"sm"} .variant=${"warning"} .shape=${"circle"} .size=${"lg"} .bordered=${true}><ag-icon no-fill>${createElement(AlertTriangle)}</ag-icon></ag-button-fx>
          <ag-button-fx .fx=${["shake"]} .fxSpeed=${"sm"} .variant=${"danger"} .shape=${"rounded-square"} .size=${"lg"} .bordered=${true}><ag-icon no-fill>${createElement(X)}</ag-icon></ag-button-fx>
        </div>
      </div>

      <!-- Press Shadow Effect -->
      <div style="margin-bottom: 3rem;">
        <h3 style="margin-bottom: 1rem; color: #1f2328; font-size: 1.25rem;">Press Shadow <span style="font-weight: normal; font-size: 0.875rem; color: #6b7280;">Shadow press (click)</span></h3>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
          <ag-button-fx .fx=${["press-shadow"]} .variant=${"primary"} .shape=${"rounded"}>Primary</ag-button-fx>
          <ag-button-fx .fx=${["press-shadow"]} .variant=${"success"} .shape=${"rounded"}>Success</ag-button-fx>
          <ag-button-fx .fx=${["press-shadow"]} .variant=${"warning"} .shape=${"rounded"}>Warning</ag-button-fx>
          <ag-button-fx .fx=${["press-shadow"]} .variant=${"danger"} .shape=${"rounded"}>Danger</ag-button-fx>
          <ag-button-fx .fx=${["press-shadow"]} .variant=${"primary"} .bordered=${true} .shape=${"rounded"}>Bordered</ag-button-fx>
          <ag-button-fx .fx=${["press-shadow"]} .variant=${"success"} .shape=${"capsule"} .bordered=${true}>Capsule</ag-button-fx>
          <ag-button-fx .fx=${["press-shadow"]} .variant=${"warning"} .shape=${"circle"} .size=${"lg"} .bordered=${true}><ag-icon no-fill>${createElement(Zap)}</ag-icon></ag-button-fx>
          <ag-button-fx .fx=${["press-shadow"]} .variant=${"danger"} .shape=${"rounded-square"} .size=${"lg"} .bordered=${true}><ag-icon no-fill>${createElement(Bomb)}</ag-icon></ag-button-fx>
        </div>
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
        <ag-button-fx .fx=${["highlight-sweep"]} .variant=${"danger"}>Highlight</ag-button-fx>
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

