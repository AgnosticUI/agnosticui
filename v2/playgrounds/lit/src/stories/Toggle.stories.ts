import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { fn } from "storybook/test";
import "agnosticui-core/toggle";
import type { ToggleProps } from "agnosticui-core/toggle";

const meta: Meta<ToggleProps> = {
  title: "AgnosticUI Lit/Toggle",
  component: "ag-toggle",
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Label text for the toggle",
    },
    labelPosition: {
      control: "select",
      options: ["top", "start", "end", "bottom"],
      description: "Position of the label relative to the toggle",
    },
    labelHidden: {
      control: "boolean",
      description: "Visually hide the label (still accessible to screen readers)",
    },
    noLabel: {
      control: "boolean",
      description: "Remove label completely",
    },
    checked: {
      control: "boolean",
      description: "Current checked state of the toggle",
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "Toggle size variant",
    },
    variant: {
      control: "select",
      options: ["default", "success", "warning", "danger", "monochrome"],
      description: "Visual variant",
    },
    disabled: {
      control: "boolean",
      description: "Disabled state",
    },
    readonly: {
      control: "boolean",
      description: "Read-only state (visually interactive but does not change)",
    },
    required: {
      control: "boolean",
      description: "Required field indicator",
    },
    invalid: {
      control: "boolean",
      description: "Invalid state for validation feedback",
    },
    errorMessage: {
      control: "text",
      description: "Error message text",
    },
    helpText: {
      control: "text",
      description: "Helper text",
    },
    name: {
      control: "text",
      description: "Form integration - name attribute",
    },
    value: {
      control: "text",
      description: "Form integration - value when checked",
    },
  },
  args: {
    label: "Toggle",
    labelPosition: "top",
    labelHidden: false,
    noLabel: false,
    checked: false,
    size: "md",
    variant: "default",
    disabled: false,
    readonly: false,
    required: false,
    invalid: false,
    errorMessage: "",
    helpText: "",
    onToggleChange: fn(),
  },
  parameters: {
    actions: {
      handles: ["toggle-change"],
    },
  },
};

export default meta;
type Story = StoryObj<ToggleProps>;

// Default story with all controls
export const Default: Story = {
  args: {
    label: "Default toggle",
    checked: false,
  },
  render: ({
    label,
    labelPosition,
    labelHidden,
    noLabel,
    checked,
    size,
    variant,
    disabled,
    readonly,
    required,
    invalid,
    errorMessage,
    helpText,
    name,
    value,
    onToggleChange,
  }) => html`
    <div style="padding: 50px;">
      <ag-toggle
        .label=${label}
        .labelPosition=${labelPosition}
        .labelHidden=${labelHidden}
        .noLabel=${noLabel}
        .checked=${checked}
        .size=${size}
        .variant=${variant}
        .disabled=${disabled}
        .readonly=${readonly}
        .required=${required}
        .invalid=${invalid}
        .errorMessage=${errorMessage}
        .helpText=${helpText}
        .name=${name}
        .value=${value}
        @toggle-change=${(e: CustomEvent) => onToggleChange(e.detail)}
      ></ag-toggle>
    </div>
  `,
};

// Checked state
export const Checked: Story = {
  args: {
    label: "Checked toggle",
    checked: true,
  },
  render: ({ label, checked, size, variant }) => html`
    <div style="display: flex; align-items: center; gap: 1rem; padding: 50px;">
      <ag-toggle
        .label=${label}
        .checked=${checked}
        .size=${size}
        .variant=${variant}
      ></ag-toggle>
      <span>${label}</span>
    </div>
  `,
};

// Unchecked state
export const Unchecked: Story = {
  args: {
    label: "Unchecked toggle",
    checked: false,
  },
  render: ({ label, checked, size, variant }) => html`
    <div style="display: flex; align-items: center; gap: 1rem; padding: 50px;">
      <ag-toggle
        .label=${label}
        .checked=${checked}
        .size=${size}
        .variant=${variant}
      ></ag-toggle>
      <span>${label}</span>
    </div>
  `,
};

// Size variants
export const SizeXS: Story = {
  args: {
    label: "Extra small toggle",
    size: "xs",
  },
  render: ({ label, checked, size, variant }) => html`
    <div style="display: flex; align-items: center; gap: 1rem; padding: 50px;">
      <ag-toggle
        .label=${label}
        .checked=${checked}
        .size=${size}
        .variant=${variant}
      ></ag-toggle>
      <span>${label}</span>
    </div>
  `,
};

export const SizeSM: Story = {
  args: {
    label: "Small toggle",
    size: "sm",
  },
  render: ({ label, checked, size, variant }) => html`
    <div style="display: flex; align-items: center; gap: 1rem; padding: 50px;">
      <ag-toggle
        .label=${label}
        .checked=${checked}
        .size=${size}
        .variant=${variant}
      ></ag-toggle>
      <span>${label}</span>
    </div>
  `,
};

export const SizeMD: Story = {
  args: {
    label: "Medium toggle",
    size: "md",
  },
  render: ({ label, checked, size, variant }) => html`
    <div style="display: flex; align-items: center; gap: 1rem; padding: 50px;">
      <ag-toggle
        .label=${label}
        .checked=${checked}
        .size=${size}
        .variant=${variant}
      ></ag-toggle>
      <span>${label}</span>
    </div>
  `,
};

export const SizeLG: Story = {
  args: {
    label: "Large toggle",
    size: "lg",
  },
  render: ({ label, checked, size, variant }) => html`
    <div style="display: flex; align-items: center; gap: 1rem; padding: 50px;">
      <ag-toggle
        .label=${label}
        .checked=${checked}
        .size=${size}
        .variant=${variant}
      ></ag-toggle>
      <span>${label}</span>
    </div>
  `,
};

export const SizeXL: Story = {
  args: {
    label: "Extra large toggle",
    size: "xl",
  },
  render: ({ label, checked, size, variant }) => html`
    <div style="display: flex; align-items: center; gap: 1rem; padding: 50px;">
      <ag-toggle
        .label=${label}
        .checked=${checked}
        .size=${size}
        .variant=${variant}
      ></ag-toggle>
      <span>${label}</span>
    </div>
  `,
};

// Variant stories
export const VariantDefault: Story = {
  args: {
    label: "Default variant",
    checked: true,
    variant: "default",
  },
  render: ({ label, checked, size, variant }) => html`
    <div style="display: flex; align-items: center; gap: 1rem; padding: 50px;">
      <ag-toggle
        .label=${label}
        .checked=${checked}
        .size=${size}
        .variant=${variant}
      ></ag-toggle>
      <span>${label}</span>
    </div>
  `,
};

export const VariantSuccess: Story = {
  args: {
    label: "Success variant",
    checked: true,
    variant: "success",
  },
  render: ({ label, checked, size, variant }) => html`
    <div style="display: flex; align-items: center; gap: 1rem; padding: 50px;">
      <ag-toggle
        .label=${label}
        .checked=${checked}
        .size=${size}
        .variant=${variant}
      ></ag-toggle>
      <span>${label}</span>
    </div>
  `,
};

export const VariantWarning: Story = {
  args: {
    label: "Warning variant",
    checked: true,
    variant: "warning",
  },
  render: ({ label, checked, size, variant }) => html`
    <div style="display: flex; align-items: center; gap: 1rem; padding: 50px;">
      <ag-toggle
        .label=${label}
        .checked=${checked}
        .size=${size}
        .variant=${variant}
      ></ag-toggle>
      <span>${label}</span>
    </div>
  `,
};

export const VariantDanger: Story = {
  args: {
    label: "Danger variant",
    checked: true,
    variant: "danger",
  },
  render: ({ label, checked, size, variant }) => html`
    <div style="display: flex; align-items: center; gap: 1rem; padding: 50px;">
      <ag-toggle
        .label=${label}
        .checked=${checked}
        .size=${size}
        .variant=${variant}
      ></ag-toggle>
      <span>${label}</span>
    </div>
  `,
};

// State stories
export const Disabled: Story = {
  args: {
    label: "Disabled toggle",
    disabled: true,
  },
  render: ({ label, checked, size, variant, disabled }) => html`
    <div style="display: flex; align-items: center; gap: 1rem; padding: 50px;">
      <ag-toggle
        .label=${label}
        .checked=${checked}
        .size=${size}
        .variant=${variant}
        .disabled=${disabled}
      ></ag-toggle>
      <span>${label}</span>
    </div>
  `,
};

export const DisabledChecked: Story = {
  args: {
    label: "Disabled checked toggle",
    checked: true,
    disabled: true,
  },
  render: ({ label, checked, size, variant, disabled }) => html`
    <div style="display: flex; align-items: center; gap: 1rem; padding: 50px;">
      <ag-toggle
        .label=${label}
        .checked=${checked}
        .size=${size}
        .variant=${variant}
        .disabled=${disabled}
      ></ag-toggle>
      <span>${label}</span>
    </div>
  `,
};

export const ReadOnly: Story = {
  args: {
    label: "Read-only toggle",
    checked: true,
    readonly: true,
  },
  render: ({ label, checked, size, variant, readonly }) => html`
    <div style="display: flex; align-items: center; gap: 1rem; padding: 50px;">
      <ag-toggle
        .label=${label}
        .checked=${checked}
        .size=${size}
        .variant=${variant}
        .readonly=${readonly}
      ></ag-toggle>
      <span>${label} (read-only)</span>
    </div>
  `,
};

// Event testing story
export const EventTesting: Story = {
  args: {
    label: "Toggle to test events",
  },
  render: ({ label, size, variant, onToggleChange }) => html`
    <div
      style="display: flex; flex-direction: column; align-items: flex-start; padding: 50px; gap: 1.5rem;"
    >
      <div>
        <h3 style="margin: 0 0 0.5rem 0;">Event Handling Patterns</h3>
        <p style="margin: 0; color: #6b7280; font-size: 0.875rem;">
          Toggle demonstrates both addEventListener and callback prop patterns
        </p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <!-- Pattern 1: addEventListener (DOM event) -->
        <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 1rem;">
          <p style="margin: 0 0 0.75rem 0; font-weight: 600;">
            Pattern 1: addEventListener
          </p>
          <ag-toggle
            .label=${label}
            .size=${size}
            .variant=${variant}
            @toggle-change=${(e: CustomEvent) => {
              console.log('addEventListener pattern:', e.detail);
              onToggleChange?.(e.detail);
            }}
          ></ag-toggle>
          <p style="font-size: 0.75rem; color: #6b7280; margin: 0.5rem 0 0 0;">
            Uses @toggle-change (addEventListener via Lit template)
          </p>
        </div>

        <!-- Pattern 2: Callback prop -->
        <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 1rem;">
          <p style="margin: 0 0 0.75rem 0; font-weight: 600;">
            Pattern 2: Callback Prop
          </p>
          <ag-toggle
            .label=${label}
            .size=${size}
            .variant=${"success"}
            .onToggleChange=${(e: CustomEvent) => {
              console.log('Callback prop pattern:', e.detail);
              onToggleChange?.(e.detail);
            }}
          ></ag-toggle>
          <p style="font-size: 0.75rem; color: #6b7280; margin: 0.5rem 0 0 0;">
            Uses .onToggleChange callback prop
          </p>
        </div>

        <!-- Pattern 3: Both (dual-dispatch) -->
        <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 1rem;">
          <p style="margin: 0 0 0.75rem 0; font-weight: 600;">
            Pattern 3: Both (Dual-Dispatch)
          </p>
          <ag-toggle
            .label=${label}
            .size=${size}
            .variant=${"danger"}
            @toggle-change=${(e: CustomEvent) => {
              console.log('DOM event fired:', e.detail);
            }}
            .onToggleChange=${(e: CustomEvent) => {
              console.log('Callback also fired:', e.detail);
              onToggleChange?.(e.detail);
            }}
          ></ag-toggle>
          <p style="font-size: 0.75rem; color: #6b7280; margin: 0.5rem 0 0 0;">
            Both patterns work simultaneously
          </p>
        </div>
      </div>

      <p style="font-size: 0.875rem; color: #6b7280; margin: 0; padding: 1rem; background: #f9fafb; border-radius: 8px;">
        💡 Check the Actions panel below and browser console for event logs
      </p>
    </div>
  `,
};

// Form integration
export const FormIntegration: Story = {
  args: {
    label: "Newsletter subscription",
    name: "newsletter",
    value: "subscribed",
  },
  render: ({ label, name, value }) => html`
    <form
      @submit=${(e: Event) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const toggle = (e.target as HTMLFormElement).querySelector("ag-toggle");
        console.log("Form data:", {
          name: name,
          value: value,
          checked: toggle?.checked,
        });
        alert(
          `Form submitted! ${name}: ${
            toggle?.checked ? value : "not subscribed"
          }`
        );
      }}
    >
      <div
        style="display: flex; flex-direction: column; align-items: center; gap: 1rem; padding: 50px;"
      >
        <div style="display: flex; align-items: center; gap: 1rem;">
          <ag-toggle .label=${label} .name=${name} .value=${value}></ag-toggle>
          <span>${label}</span>
        </div>
        <button type="submit">Submit Form</button>
      </div>
    </form>
  `,
};


// All sizes comparison
export const AllSizes: Story = {
  render: () => html`
    <div
      style="display: flex; flex-direction: column; gap: 1.5rem; padding: 50px;"
    >
      <div style="display: flex; align-items: center; gap: 1rem;">
        <ag-toggle label="Extra small" size="xs" checked></ag-toggle>
        <span>Extra small (xs)</span>
      </div>
      <div style="display: flex; align-items: center; gap: 1rem;">
        <ag-toggle label="Small" size="sm" checked></ag-toggle>
        <span>Small (sm)</span>
      </div>
      <div style="display: flex; align-items: center; gap: 1rem;">
        <ag-toggle label="Medium" size="md" checked></ag-toggle>
        <span>Medium (md)</span>
      </div>
      <div style="display: flex; align-items: center; gap: 1rem;">
        <ag-toggle label="Large" size="lg" checked></ag-toggle>
        <span>Large (lg)</span>
      </div>
      <div style="display: flex; align-items: center; gap: 1rem;">
        <ag-toggle label="Extra large" size="xl" checked></ag-toggle>
        <span>Extra large (xl)</span>
      </div>
    </div>
  `,
};

// All variants comparison
export const CSSPartsCustomization: Story = {
  args: {
    label: "Customized Toggle",
    checked: true,
  },
  render: ({ label, checked, size, variant, onToggleChange }) => html`
    <style>
      .custom-toggle::part(ag-toggle-button) {
        border: 2px solid #bada55;
        border-radius: 9999px;
      }
      .custom-toggle::part(ag-toggle-track) {
        background-color: #f0f0f0;
      }
      .custom-toggle::part(ag-toggle-handle) {
        background-color: #bada55;
        border: 2px solid #fff;
        box-shadow: 0 0 5px #bada55;
      }
      .custom-toggle[checked]::part(ag-toggle-track) {
        background-color: #bada55;
      }
      .custom-toggle[checked]::part(ag-toggle-handle) {
        background-color: #fff;
      }
    </style>
    <div style="display: flex; align-items: center; gap: 1rem; padding: 50px;">
      <ag-toggle
        class="custom-toggle"
        .label=${label}
        .checked=${checked}
        .size=${size}
        .variant=${variant}
        @toggle-change=${(e: CustomEvent) => onToggleChange(e.detail)}
      ></ag-toggle>
      <span>${label}</span>
    </div>
  `,
};
