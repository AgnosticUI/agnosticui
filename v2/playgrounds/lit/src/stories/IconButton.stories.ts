import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { fn } from "storybook/test";
import { createElement, X, Menu, Check, Star, Shield, MoreVertical, ChevronDown, ArrowRight, RotateCw, Heart } from "lucide";
import "agnosticui-core/icon";
import "agnosticui-core/icon-button";
import type { IconButtonProps } from "agnosticui-core/icon-button";

const meta: Meta<IconButtonProps> = {
  title: "AgnosticUI Lit/IconButton",
  component: "ag-icon-button",
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Required accessible name for the button",
    },
    icon: {
      control: "text",
      description: "Icon identifier or name (for icon systems)",
    },
    unicode: {
      control: "text",
      description: "Unicode symbol for simple icons (×, ☰, etc.)",
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "Button size variant",
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost", "danger"],
      description: "Visual variant",
    },
    type: {
      control: "select",
      options: ["button", "submit", "reset"],
      description: "Button type",
    },
    disabled: {
      control: "boolean",
      description: "Disabled state",
    },
    pressed: {
      control: "boolean",
      description: "Pressed state for toggle buttons",
    },
    loading: {
      control: "boolean",
      description: "Loading state",
    },
    ariaDescribedby: {
      control: "text",
      description: "ARIA described by reference",
    },
  },
  args: {
    label: "Icon button",
    size: "md",
    variant: "ghost",
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
type Story = StoryObj<IconButtonProps>;

// Default story with all controls
export const Default: Story = {
  args: {
    label: "Close",
  },
  render: ({
    label,
    size,
    variant,
    type,
    disabled,
    pressed,
    loading,
    ariaDescribedby,
    onIconButtonClick,
    onIconButtonActivate,
  }) => html`
    <div style="display: flex; justify-content: center; padding: 50px;">
      <ag-icon-button
        .label=${label}
        .size=${size}
        .variant=${variant}
        .type=${type}
        .disabled=${disabled}
        .pressed=${pressed}
        .loading=${loading}
        .ariaDescribedby=${ariaDescribedby}
        @icon-button-click=${(e: CustomEvent) => onIconButtonClick(e.detail)}
        @icon-button-activate=${(e: CustomEvent) =>
          onIconButtonActivate(e.detail)}
      >
        <ag-icon no-fill>${createElement(X)}</ag-icon>
      </ag-icon-button>
    </div>
  `,
};

// Icon identifier
export const WithIcon: Story = {
  args: {
    label: "Menu",
  },
  render: ({ label, size, variant }) => html`
    <div style="display: flex; justify-content: center; padding: 50px;">
      <ag-icon-button
        .label=${label}
        .size=${size}
        .variant=${variant}
      >
        <ag-icon no-fill>${createElement(Menu)}</ag-icon>
      </ag-icon-button>
    </div>
  `,
};

// Unicode symbol
export const WithUnicode: Story = {
  args: {
    label: "Check",
  },
  render: ({ label, size, variant }) => html`
    <div style="display: flex; justify-content: center; padding: 50px;">
      <ag-icon-button
        .label=${label}
        .size=${size}
        .variant=${variant}
      >
        <ag-icon no-fill>${createElement(Check)}</ag-icon>
      </ag-icon-button>
    </div>
  `,
};

// Custom SVG content
export const WithCustomSVG: Story = {
  args: {
    label: "Shield",
  },
  render: ({ label, size, variant }) => html`
    <div style="display: flex; justify-content: center; padding: 50px;">
      <ag-icon-button .label=${label} .size=${size} .variant=${variant}>
        <ag-icon no-fill>${createElement(Shield)}</ag-icon>
      </ag-icon-button>
    </div>
  `,
};

// Size variants
export const SizeXS: Story = {
  args: {
    label: "Extra small",
    size: "xs",
  },
  render: ({ label, size, variant }) => html`
    <div style="display: flex; justify-content: center; padding: 50px;">
      <ag-icon-button
        .label=${label}
        .size=${size}
        .variant=${variant}
      >
        <ag-icon no-fill>${createElement(X)}</ag-icon>
      </ag-icon-button>
    </div>
  `,
};

export const SizeSM: Story = {
  args: {
    label: "Small",
    size: "sm",
  },
  render: ({ label, size, variant }) => html`
    <div style="display: flex; justify-content: center; padding: 50px;">
      <ag-icon-button
        .label=${label}
        .size=${size}
        .variant=${variant}
      >
        <ag-icon no-fill>${createElement(X)}</ag-icon>
      </ag-icon-button>
    </div>
  `,
};

export const SizeMD: Story = {
  args: {
    label: "Medium",
    size: "md",
  },
  render: ({ label, size, variant }) => html`
    <div style="display: flex; justify-content: center; padding: 50px;">
      <ag-icon-button
        .label=${label}
        .size=${size}
        .variant=${variant}
      >
        <ag-icon no-fill>${createElement(X)}</ag-icon>
      </ag-icon-button>
    </div>
  `,
};

export const SizeLG: Story = {
  args: {
    label: "Large",
    size: "lg",
  },
  render: ({ label, size, variant }) => html`
    <div style="display: flex; justify-content: center; padding: 50px;">
      <ag-icon-button
        .label=${label}
        .size=${size}
        .variant=${variant}
      >
        <ag-icon no-fill>${createElement(X)}</ag-icon>
      </ag-icon-button>
    </div>
  `,
};

export const SizeXL: Story = {
  args: {
    label: "Extra large",
    size: "xl",
  },
  render: ({ label, size, variant }) => html`
    <div style="display: flex; justify-content: center; padding: 50px;">
      <ag-icon-button
        .label=${label}
        .size=${size}
        .variant=${variant}
      >
        <ag-icon no-fill>${createElement(X)}</ag-icon>
      </ag-icon-button>
    </div>
  `,
};

// Variant stories
export const VariantPrimary: Story = {
  args: {
    label: "Primary action",
    variant: "primary",
  },
  render: ({ label, size, variant }) => html`
    <div style="display: flex; justify-content: center; padding: 50px;">
      <ag-icon-button
        .label=${label}
        .size=${size}
        .variant=${variant}
      >
        <ag-icon no-fill>${createElement(Check)}</ag-icon>
      </ag-icon-button>
    </div>
  `,
};

export const VariantSecondary: Story = {
  args: {
    label: "Secondary action",
    variant: "secondary",
  },
  render: ({ label, size, variant }) => html`
    <div style="display: flex; justify-content: center; padding: 50px;">
      <ag-icon-button
        .label=${label}
        .size=${size}
        .variant=${variant}
      >
        <ag-icon no-fill>${createElement(Menu)}</ag-icon>
      </ag-icon-button>
    </div>
  `,
};

export const VariantGhost: Story = {
  args: {
    label: "Ghost action",
    variant: "ghost",
  },
  render: ({ label, size, variant }) => html`
    <div style="display: flex; justify-content: center; padding: 50px;">
      <ag-icon-button
        .label=${label}
        .size=${size}
        .variant=${variant}
      >
        <ag-icon no-fill>${createElement(MoreVertical)}</ag-icon>
      </ag-icon-button>
    </div>
  `,
};

export const VariantDanger: Story = {
  args: {
    label: "Delete",
    variant: "danger",
  },
  render: ({ label, size, variant }) => html`
    <div style="display: flex; justify-content: center; padding: 50px;">
      <ag-icon-button
        .label=${label}
        .size=${size}
        .variant=${variant}
      >
        <ag-icon no-fill>${createElement(X)}</ag-icon>
      </ag-icon-button>
    </div>
  `,
};

// State stories
export const Disabled: Story = {
  args: {
    label: "Disabled button",
    disabled: true,
  },
  render: ({ label, size, variant, disabled }) => html`
    <div style="display: flex; justify-content: center; padding: 50px;">
      <ag-icon-button
        .label=${label}
        .size=${size}
        .variant=${variant}
        .disabled=${disabled}
      >
        <ag-icon no-fill>${createElement(X)}</ag-icon>
      </ag-icon-button>
    </div>
  `,
};

export const Pressed: Story = {
  args: {
    label: "Toggle button",
    pressed: true,
  },
  render: ({ label, size, variant, pressed }) => html`
    <div style="display: flex; justify-content: center; padding: 50px;">
      <ag-icon-button
        .label=${label}
        .size=${size}
        .variant=${variant}
        .pressed=${pressed}
      >
        <ag-icon no-fill>${createElement(Star)}</ag-icon>
      </ag-icon-button>
    </div>
  `,
};

export const Loading: Story = {
  args: {
    label: "Loading",
    loading: true,
  },
  render: ({ label, size, variant, loading }) => html`
    <div style="display: flex; justify-content: center; padding: 50px;">
      <ag-icon-button
        .label=${label}
        .size=${size}
        .variant=${variant}
        .loading=${loading}
      >
        <ag-icon no-fill>${createElement(RotateCw)}</ag-icon>
      </ag-icon-button>
    </div>
  `,
};

// Event testing story
export const EventTesting: Story = {
  args: {
    label: "Click to test events",
  },
  render: ({
    label,
    size,
    variant,
    onIconButtonClick,
    onIconButtonActivate,
  }) => html`
    <div
      style="display: flex; flex-direction: column; align-items: center; padding: 50px; gap: 1rem;"
    >
      <p style="margin: 0;">
        Click the button or use Space/Enter to trigger events
      </p>
      <ag-icon-button
        .label=${label}
        .size=${size}
        .variant=${variant}
        @icon-button-click=${(e: CustomEvent) => onIconButtonClick(e.detail)}
        @icon-button-activate=${(e: CustomEvent) =>
          onIconButtonActivate(e.detail)}
      >
        <ag-icon no-fill>${createElement(Star)}</ag-icon>
      </ag-icon-button>
      <p style="font-size: 0.875rem; color: #6b7280; margin: 0;">
        Check the Actions panel below for event logs (shows button label and
        event details)
      </p>
    </div>
  `,
};

// Type variants
export const TypeButton: Story = {
  args: {
    label: "Button type",
    type: "button",
  },
  render: ({ label, size, variant, type }) => html`
    <form
      @submit=${(e: Event) => {
        e.preventDefault();
        console.log("Form submitted");
      }}
    >
      <div style="display: flex; justify-content: center; padding: 50px;">
        <ag-icon-button
          .label=${label}
          .size=${size}
          .variant=${variant}
          .type=${type}
        >
          <ag-icon no-fill>${createElement(ChevronDown)}</ag-icon>
        </ag-icon-button>
      </div>
    </form>
  `,
};

export const TypeSubmit: Story = {
  args: {
    label: "Submit",
    type: "submit",
    variant: "primary",
  },
  render: ({ label, size, variant, type }) => html`
    <form
      @submit=${(e: Event) => {
        e.preventDefault();
        alert("Form submitted!");
      }}
    >
      <div
        style="display: flex; justify-content: center; padding: 50px; gap: 1rem;"
      >
        <input type="text" placeholder="Enter text" />
        <ag-icon-button
          .label=${label}
          .size=${size}
          .variant=${variant}
          .type=${type}
        >
          <ag-icon no-fill>${createElement(ArrowRight)}</ag-icon>
        </ag-icon-button>
      </div>
    </form>
  `,
};

export const TypeReset: Story = {
  args: {
    label: "Reset form",
    type: "reset",
    variant: "danger",
  },
  render: ({ label, size, variant, type }) => html`
    <form
      @reset=${() => {
        console.log("Form reset");
        alert("Form reset!");
      }}
    >
      <div
        style="display: flex; flex-direction: column; align-items: center; padding: 50px; gap: 1rem;"
      >
        <input type="text" value="Test value" />
        <ag-icon-button
          .label=${label}
          .size=${size}
          .variant=${variant}
          .type=${type}
        >
          <ag-icon no-fill>${createElement(RotateCw)}</ag-icon>
        </ag-icon-button>
      </div>
    </form>
  `,
};

// Accessibility story
export const Accessible: Story = {
  args: {
    label: "Accessible icon button",
    ariaDescribedby: "description-id",
  },
  render: ({ label, size, variant, ariaDescribedby }) => html`
    <div
      style="display: flex; flex-direction: column; align-items: center; padding: 50px; gap: 1rem;"
    >
      <p id="description-id">This button marks items as favorites</p>
      <ag-icon-button
        .label=${label}
        .size=${size}
        .variant=${variant}
        .ariaDescribedby=${ariaDescribedby}
      >
        <ag-icon no-fill>${createElement(Star)}</ag-icon>
      </ag-icon-button>
    </div>
  `,
};

// All sizes comparison
export const AllSizes: Story = {
  render: () => html`
    <div
      style="display: flex; align-items: center; justify-content: center; gap: 1rem; padding: 50px;"
    >
      <ag-icon-button
        label="Extra small"
        size="xs"
      >
        <ag-icon no-fill>${createElement(X)}</ag-icon>
      </ag-icon-button>
      <ag-icon-button label="Small" size="sm">
        <ag-icon no-fill>${createElement(X)}</ag-icon>
      </ag-icon-button>
      <ag-icon-button label="Medium" size="md">
        <ag-icon no-fill>${createElement(X)}</ag-icon>
      </ag-icon-button>
      <ag-icon-button label="Large" size="lg">
        <ag-icon no-fill>${createElement(X)}</ag-icon>
      </ag-icon-button>
      <ag-icon-button
        label="Extra large"
        size="xl"
      >
        <ag-icon no-fill>${createElement(X)}</ag-icon>
      </ag-icon-button>
    </div>
  `,
};

// All variants comparison
export const AllVariants: Story = {
  render: () => html`
    <div
      style="display: flex; align-items: center; justify-content: center; gap: 1rem; padding: 50px;"
    >
      <ag-icon-button
        label="Ghost"
        variant="ghost"
      >
        <ag-icon no-fill>${createElement(MoreVertical)}</ag-icon>
      </ag-icon-button>
      <ag-icon-button
        label="Primary"
        variant="primary"
      >
        <ag-icon no-fill>${createElement(Check)}</ag-icon>
      </ag-icon-button>
      <ag-icon-button
        label="Secondary"
        variant="secondary"
      >
        <ag-icon no-fill>${createElement(Menu)}</ag-icon>
      </ag-icon-button>
      <ag-icon-button
        label="Danger"
        variant="danger"
      >
        <ag-icon no-fill>${createElement(X)}</ag-icon>
      </ag-icon-button>
    </div>
  `,
};

// CSS Parts customization
export const CSSPartsCustomization: Story = {
  render: () => html`
    <style>
      /* Customize icon button using CSS Shadow Parts */
      .custom-icon-btn::part(ag-icon-has-slotted),
      .custom-icon-btn::part(ag-icon-unicode),
      .custom-icon-btn::part(ag-icon) {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        font-size: 1.5rem;
      }

      .custom-border-btn::part(ag-icon-button) {
        border: 3px solid var(--ag-primary);
        border-radius: 50%;
      }

      .custom-shadow-btn::part(ag-icon-button) {
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
        transition: box-shadow 0.2s ease;
      }

      .custom-shadow-btn::part(ag-icon-button):hover {
        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1),
          0 4px 6px rgba(0, 0, 0, 0.05);
      }
    </style>

    <div style="padding: 50px; max-width: 800px;">
      <h3 style="margin-top: 0;">Styled with CSS Shadow Parts</h3>
      <p style="margin-bottom: 2rem; color: #6b7280;">
        IconButton can be customized using CSS Shadow Parts:
        <code>::part(ag-icon-has-slotted)</code>,
        <code>::part(ag-icon-unicode)</code>, <code>::part(ag-icon)</code>, and
        <code>::part(ag-icon-empty-slot)</code>
      </p>

      <div
        style="display: flex; gap: 2rem; align-items: flex-end; margin-bottom: 2rem;"
      >
        <div>
          <h4 style="margin-bottom: 0.5rem;">Gradient Icon</h4>
          <ag-icon-button
            class="custom-icon-btn"
            label="Gradient styled"
            size="xl"
          >
            <ag-icon no-fill>${createElement(Star)}</ag-icon>
          </ag-icon-button>
        </div>

        <div>
          <h4 style="margin-bottom: 0.5rem;">Custom Border</h4>
          <ag-icon-button
            class="custom-border-btn"
            label="Border styled"
            size="lg"
          >
            <ag-icon no-fill>${createElement(Heart)}</ag-icon>
          </ag-icon-button>
        </div>

        <div>
          <h4 style="margin-bottom: 0.5rem;">Custom Shadow</h4>
          <ag-icon-button
            class="custom-shadow-btn"
            label="Shadow styled"
            size="lg"
            variant="primary"
          >
            <ag-icon no-fill>${createElement(Check)}</ag-icon>
          </ag-icon-button>
        </div>
      </div>
    </div>
  `,
};
