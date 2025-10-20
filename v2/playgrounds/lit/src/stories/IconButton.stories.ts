import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { fn } from "storybook/test";
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
    unicode: "×",
  },
  render: ({
    label,
    icon,
    unicode,
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
        .icon=${icon}
        .unicode=${unicode}
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
      ></ag-icon-button>
    </div>
  `,
};

// Icon identifier
export const WithIcon: Story = {
  args: {
    label: "Settings",
    icon: "settings",
  },
  render: ({ label, icon, size, variant }) => html`
    <div style="display: flex; justify-content: center; padding: 50px;">
      <ag-icon-button
        .label=${label}
        .icon=${icon}
        .size=${size}
        .variant=${variant}
      ></ag-icon-button>
    </div>
  `,
};

// Unicode symbol
export const WithUnicode: Story = {
  args: {
    label: "Menu",
    unicode: "☰",
  },
  render: ({ label, unicode, size, variant }) => html`
    <div style="display: flex; justify-content: center; padding: 50px;">
      <ag-icon-button
        .label=${label}
        .unicode=${unicode}
        .size=${size}
        .variant=${variant}
      ></ag-icon-button>
    </div>
  `,
};

// Custom SVG content
export const WithCustomSVG: Story = {
  args: {
    label: "Custom icon",
  },
  render: ({ label, size, variant }) => html`
    <div style="display: flex; justify-content: center; padding: 50px;">
      <ag-icon-button .label=${label} .size=${size} .variant=${variant}>
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path
            d="M12 2L2 7v10c0 5.5 3.8 10.7 10 12 6.2-1.3 10-6.5 10-12V7l-10-5z"
          />
        </svg>
      </ag-icon-button>
    </div>
  `,
};

// Size variants
export const SizeXS: Story = {
  args: {
    label: "Extra small",
    unicode: "×",
    size: "xs",
  },
  render: ({ label, unicode, size, variant }) => html`
    <div style="display: flex; justify-content: center; padding: 50px;">
      <ag-icon-button
        .label=${label}
        .unicode=${unicode}
        .size=${size}
        .variant=${variant}
      ></ag-icon-button>
    </div>
  `,
};

export const SizeSM: Story = {
  args: {
    label: "Small",
    unicode: "×",
    size: "sm",
  },
  render: ({ label, unicode, size, variant }) => html`
    <div style="display: flex; justify-content: center; padding: 50px;">
      <ag-icon-button
        .label=${label}
        .unicode=${unicode}
        .size=${size}
        .variant=${variant}
      ></ag-icon-button>
    </div>
  `,
};

export const SizeMD: Story = {
  args: {
    label: "Medium",
    unicode: "×",
    size: "md",
  },
  render: ({ label, unicode, size, variant }) => html`
    <div style="display: flex; justify-content: center; padding: 50px;">
      <ag-icon-button
        .label=${label}
        .unicode=${unicode}
        .size=${size}
        .variant=${variant}
      ></ag-icon-button>
    </div>
  `,
};

export const SizeLG: Story = {
  args: {
    label: "Large",
    unicode: "×",
    size: "lg",
  },
  render: ({ label, unicode, size, variant }) => html`
    <div style="display: flex; justify-content: center; padding: 50px;">
      <ag-icon-button
        .label=${label}
        .unicode=${unicode}
        .size=${size}
        .variant=${variant}
      ></ag-icon-button>
    </div>
  `,
};

export const SizeXL: Story = {
  args: {
    label: "Extra large",
    unicode: "×",
    size: "xl",
  },
  render: ({ label, unicode, size, variant }) => html`
    <div style="display: flex; justify-content: center; padding: 50px;">
      <ag-icon-button
        .label=${label}
        .unicode=${unicode}
        .size=${size}
        .variant=${variant}
      ></ag-icon-button>
    </div>
  `,
};

// Variant stories
export const VariantPrimary: Story = {
  args: {
    label: "Primary action",
    unicode: "✓",
    variant: "primary",
  },
  render: ({ label, unicode, size, variant }) => html`
    <div style="display: flex; justify-content: center; padding: 50px;">
      <ag-icon-button
        .label=${label}
        .unicode=${unicode}
        .size=${size}
        .variant=${variant}
      ></ag-icon-button>
    </div>
  `,
};

export const VariantSecondary: Story = {
  args: {
    label: "Secondary action",
    unicode: "☰",
    variant: "secondary",
  },
  render: ({ label, unicode, size, variant }) => html`
    <div style="display: flex; justify-content: center; padding: 50px;">
      <ag-icon-button
        .label=${label}
        .unicode=${unicode}
        .size=${size}
        .variant=${variant}
      ></ag-icon-button>
    </div>
  `,
};

export const VariantGhost: Story = {
  args: {
    label: "Ghost action",
    unicode: "⋯",
    variant: "ghost",
  },
  render: ({ label, unicode, size, variant }) => html`
    <div style="display: flex; justify-content: center; padding: 50px;">
      <ag-icon-button
        .label=${label}
        .unicode=${unicode}
        .size=${size}
        .variant=${variant}
      ></ag-icon-button>
    </div>
  `,
};

export const VariantDanger: Story = {
  args: {
    label: "Delete",
    unicode: "×",
    variant: "danger",
  },
  render: ({ label, unicode, size, variant }) => html`
    <div style="display: flex; justify-content: center; padding: 50px;">
      <ag-icon-button
        .label=${label}
        .unicode=${unicode}
        .size=${size}
        .variant=${variant}
      ></ag-icon-button>
    </div>
  `,
};

// State stories
export const Disabled: Story = {
  args: {
    label: "Disabled button",
    unicode: "×",
    disabled: true,
  },
  render: ({ label, unicode, size, variant, disabled }) => html`
    <div style="display: flex; justify-content: center; padding: 50px;">
      <ag-icon-button
        .label=${label}
        .unicode=${unicode}
        .size=${size}
        .variant=${variant}
        .disabled=${disabled}
      ></ag-icon-button>
    </div>
  `,
};

export const Pressed: Story = {
  args: {
    label: "Toggle button",
    unicode: "★",
    pressed: true,
  },
  render: ({ label, unicode, size, variant, pressed }) => html`
    <div style="display: flex; justify-content: center; padding: 50px;">
      <ag-icon-button
        .label=${label}
        .unicode=${unicode}
        .size=${size}
        .variant=${variant}
        .pressed=${pressed}
      ></ag-icon-button>
    </div>
  `,
};

export const Loading: Story = {
  args: {
    label: "Loading",
    unicode: "↻",
    loading: true,
  },
  render: ({ label, unicode, size, variant, loading }) => html`
    <div style="display: flex; justify-content: center; padding: 50px;">
      <ag-icon-button
        .label=${label}
        .unicode=${unicode}
        .size=${size}
        .variant=${variant}
        .loading=${loading}
      ></ag-icon-button>
    </div>
  `,
};

// Event testing story
export const EventTesting: Story = {
  args: {
    label: "Click to test events",
    unicode: "👆",
  },
  render: ({
    label,
    unicode,
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
        .unicode=${unicode}
        .size=${size}
        .variant=${variant}
        @icon-button-click=${(e: CustomEvent) => onIconButtonClick(e.detail)}
        @icon-button-activate=${(e: CustomEvent) =>
          onIconButtonActivate(e.detail)}
      ></ag-icon-button>
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
    unicode: "○",
    type: "button",
  },
  render: ({ label, unicode, size, variant, type }) => html`
    <form
      @submit=${(e: Event) => {
        e.preventDefault();
        console.log("Form submitted");
      }}
    >
      <div style="display: flex; justify-content: center; padding: 50px;">
        <ag-icon-button
          .label=${label}
          .unicode=${unicode}
          .size=${size}
          .variant=${variant}
          .type=${type}
        ></ag-icon-button>
      </div>
    </form>
  `,
};

export const TypeSubmit: Story = {
  args: {
    label: "Submit",
    unicode: "→",
    type: "submit",
    variant: "primary",
  },
  render: ({ label, unicode, size, variant, type }) => html`
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
          .unicode=${unicode}
          .size=${size}
          .variant=${variant}
          .type=${type}
        ></ag-icon-button>
      </div>
    </form>
  `,
};

export const TypeReset: Story = {
  args: {
    label: "Reset form",
    unicode: "↻",
    type: "reset",
    variant: "danger",
  },
  render: ({ label, unicode, size, variant, type }) => html`
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
          .unicode=${unicode}
          .size=${size}
          .variant=${variant}
          .type=${type}
        ></ag-icon-button>
      </div>
    </form>
  `,
};

// Accessibility story
export const Accessible: Story = {
  args: {
    label: "Accessible icon button",
    unicode: "★",
    ariaDescribedby: "description-id",
  },
  render: ({ label, unicode, size, variant, ariaDescribedby }) => html`
    <div
      style="display: flex; flex-direction: column; align-items: center; padding: 50px; gap: 1rem;"
    >
      <p id="description-id">This button marks items as favorites</p>
      <ag-icon-button
        .label=${label}
        .unicode=${unicode}
        .size=${size}
        .variant=${variant}
        .ariaDescribedby=${ariaDescribedby}
      ></ag-icon-button>
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
        unicode="×"
        size="xs"
      ></ag-icon-button>
      <ag-icon-button label="Small" unicode="×" size="sm"></ag-icon-button>
      <ag-icon-button label="Medium" unicode="×" size="md"></ag-icon-button>
      <ag-icon-button label="Large" unicode="×" size="lg"></ag-icon-button>
      <ag-icon-button
        label="Extra large"
        unicode="×"
        size="xl"
      ></ag-icon-button>
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
        unicode="○"
        variant="ghost"
      ></ag-icon-button>
      <ag-icon-button
        label="Primary"
        unicode="✓"
        variant="primary"
      ></ag-icon-button>
      <ag-icon-button
        label="Secondary"
        unicode="☰"
        variant="secondary"
      ></ag-icon-button>
      <ag-icon-button
        label="Danger"
        unicode="×"
        variant="danger"
      ></ag-icon-button>
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
        style="display: flex; gap: 2rem; align-items: center; margin-bottom: 2rem;"
      >
        <div>
          <h4>Gradient Icon</h4>
          <ag-icon-button
            class="custom-icon-btn"
            label="Gradient styled"
            unicode="★"
            size="xl"
          ></ag-icon-button>
        </div>

        <div>
          <h4>Custom Border</h4>
          <ag-icon-button
            class="custom-border-btn"
            label="Border styled"
            unicode="♥"
            size="lg"
          ></ag-icon-button>
        </div>

        <div>
          <h4>Custom Shadow</h4>
          <ag-icon-button
            class="custom-shadow-btn"
            label="Shadow styled"
            unicode="✓"
            size="lg"
            variant="primary"
          ></ag-icon-button>
        </div>
      </div>
    </div>
  `,
};
