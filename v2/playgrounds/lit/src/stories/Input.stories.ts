import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { fn } from "storybook/test";
import "agnosticui-core/input";
import type { InputProps } from "agnosticui-core/input";

const meta: Meta<InputProps> = {
  title: "AgnosticUI Lit/Input",
  component: "ag-input",
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Label text for the input",
    },
    labelHidden: {
      control: "boolean",
      description:
        "Visually hides the label (still accessible to screen readers)",
    },
    noLabel: {
      control: "boolean",
      description: "Removes the label entirely",
    },
    ariaLabel: {
      control: "text",
      description: "ARIA label for accessibility",
    },
    labelledBy: {
      control: "text",
      description: "ARIA labelledby for accessibility",
    },
    type: {
      control: "select",
      options: [
        "text",
        "email",
        "password",
        "number",
        "tel",
        "url",
        "search",
        "textarea",
      ],
      description: "Type of input field",
    },
    value: {
      control: "text",
      description: "Current value of the input",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text",
    },
    rows: {
      control: "number",
      description: "Number of rows for textarea",
    },
    cols: {
      control: "number",
      description: "Number of columns for textarea",
    },
    size: {
      control: "select",
      options: ["small", "default", "large"],
      description: "Size of the input",
    },
    capsule: {
      control: "boolean",
      description: "Capsule styling (fully rounded corners)",
    },
    rounded: {
      control: "boolean",
      description: "Rounded corners styling",
    },
    underlined: {
      control: "boolean",
      description: "Underlined styling without background",
    },
    underlinedWithBackground: {
      control: "boolean",
      description: "Underlined styling with background",
    },
    inline: {
      control: "boolean",
      description: "Inline display mode",
    },
    hasLeftAddon: {
      control: "boolean",
      description: "Enables left addon slot",
    },
    hasRightAddon: {
      control: "boolean",
      description: "Enables right addon slot",
    },
    required: {
      control: "boolean",
      description: "Makes the input required",
    },
    disabled: {
      control: "boolean",
      description: "Disables the input",
    },
    readonly: {
      control: "boolean",
      description: "Makes the input read-only",
    },
    invalid: {
      control: "boolean",
      description: "Marks the input as invalid",
    },
    errorMessage: {
      control: "text",
      description: "Error message to display",
    },
    helpText: {
      control: "text",
      description: "Help text to display",
    },
  },
  args: {
    label: "",
    labelHidden: false,
    noLabel: false,
    type: "text",
    value: "",
    placeholder: "",
    rows: 4,
    cols: 50,
    size: "default",
    capsule: false,
    rounded: false,
    underlined: false,
    underlinedWithBackground: false,
    inline: false,
    hasLeftAddon: false,
    hasRightAddon: false,
    required: false,
    disabled: false,
    readonly: false,
    invalid: false,
    errorMessage: "",
    helpText: "",
    onInput: fn(),
    onChange: fn(),
  },
  parameters: {
    actions: {
      handles: ["input", "change"],
    },
  },
};

export default meta;
type Story = StoryObj<InputProps>;

// Default story with all controls
export const Default: Story = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
    type: "text",
  },
  render: ({
    label,
    labelHidden,
    noLabel,
    ariaLabel,
    labelledBy,
    type,
    value,
    placeholder,
    rows,
    cols,
    size,
    capsule,
    rounded,
    underlined,
    underlinedWithBackground,
    inline,
    hasLeftAddon,
    hasRightAddon,
    required,
    disabled,
    readonly,
    invalid,
    errorMessage,
    helpText,
    onInput,
    onChange,
  }) => html`
    <div style="padding: 50px; max-width: 600px;">
      <ag-input
        .label=${label}
        .labelHidden=${labelHidden}
        .noLabel=${noLabel}
        .ariaLabel=${ariaLabel}
        .labelledBy=${labelledBy}
        .type=${type}
        .value=${value}
        .placeholder=${placeholder}
        .rows=${rows}
        .cols=${cols}
        .size=${size}
        .capsule=${capsule}
        .rounded=${rounded}
        .underlined=${underlined}
        .underlinedWithBackground=${underlinedWithBackground}
        .inline=${inline}
        .hasLeftAddon=${hasLeftAddon}
        .hasRightAddon=${hasRightAddon}
        .required=${required}
        .disabled=${disabled}
        .readonly=${readonly}
        .invalid=${invalid}
        .errorMessage=${errorMessage}
        .helpText=${helpText}
        @input=${(e: Event) => {
          const target = e.target as any;
          const value =
            target.value ||
            (
              target.shadowRoot?.querySelector(
                "input, textarea"
              ) as HTMLInputElement
            )?.value;
          onInput({ value });
        }}
        @change=${(e: Event) => {
          const target = e.target as any;
          const value =
            target.value ||
            (
              target.shadowRoot?.querySelector(
                "input, textarea"
              ) as HTMLInputElement
            )?.value;
          onChange({ value });
        }}
      ></ag-input>
    </div>
  `,
};

// With help text
export const WithHelpText: Story = {
  args: {
    label: "Email",
    placeholder: "you@example.com",
    type: "email",
    helpText: "We will never share your email with anyone else.",
  },
  render: ({ label, type, placeholder, helpText }) => html`
    <div style="padding: 50px; max-width: 600px;">
      <ag-input
        .label=${label}
        .type=${type}
        .placeholder=${placeholder}
        .helpText=${helpText}
      ></ag-input>
    </div>
  `,
};

// Required state
export const Required: Story = {
  args: {
    label: "Required Field",
    placeholder: "This field is required",
    type: "text",
    required: true,
    helpText: "This field must be filled out",
  },
  render: ({ label, type, placeholder, required, helpText }) => html`
    <div style="padding: 50px; max-width: 600px;">
      <ag-input
        .label=${label}
        .type=${type}
        .placeholder=${placeholder}
        .required=${required}
        .helpText=${helpText}
      ></ag-input>
    </div>
  `,
};

// Invalid state
export const Invalid: Story = {
  args: {
    label: "Email",
    placeholder: "you@example.com",
    type: "email",
    value: "invalid-email",
    invalid: true,
    errorMessage: "Please enter a valid email address",
  },
  render: ({ label, type, placeholder, value, invalid, errorMessage }) => html`
    <div style="padding: 50px; max-width: 600px;">
      <ag-input
        .label=${label}
        .type=${type}
        .placeholder=${placeholder}
        .value=${value}
        .invalid=${invalid}
        .errorMessage=${errorMessage}
      ></ag-input>
    </div>
  `,
};

// Disabled state
export const Disabled: Story = {
  args: {
    label: "Disabled Input",
    placeholder: "This input is disabled",
    type: "text",
    value: "Cannot edit this",
    disabled: true,
  },
  render: ({ label, type, placeholder, value, disabled }) => html`
    <div style="padding: 50px; max-width: 600px;">
      <ag-input
        .label=${label}
        .type=${type}
        .placeholder=${placeholder}
        .value=${value}
        .disabled=${disabled}
      ></ag-input>
    </div>
  `,
};

// Read-only state
export const ReadOnly: Story = {
  args: {
    label: "Read Only",
    type: "text",
    value: "This value is read-only",
    readonly: true,
    helpText: "This field cannot be edited",
  },
  render: ({ label, type, value, readonly, helpText }) => html`
    <div style="padding: 50px; max-width: 600px;">
      <ag-input
        .label=${label}
        .type=${type}
        .value=${value}
        .readonly=${readonly}
        .helpText=${helpText}
      ></ag-input>
    </div>
  `,
};

// Size variants
export const SmallSize: Story = {
  args: {
    label: "Small Input",
    placeholder: "Small sized input",
    type: "text",
    size: "small",
  },
  render: ({ label, type, placeholder, size }) => html`
    <div style="padding: 50px; max-width: 600px;">
      <ag-input
        .label=${label}
        .type=${type}
        .placeholder=${placeholder}
        .size=${size}
      ></ag-input>
    </div>
  `,
};

export const DefaultSize: Story = {
  args: {
    label: "Default Input",
    placeholder: "Default sized input",
    type: "text",
    size: "default",
  },
  render: ({ label, type, placeholder, size }) => html`
    <div style="padding: 50px; max-width: 600px;">
      <ag-input
        .label=${label}
        .type=${type}
        .placeholder=${placeholder}
        .size=${size}
      ></ag-input>
    </div>
  `,
};

export const LargeSize: Story = {
  args: {
    label: "Large Input",
    placeholder: "Large sized input",
    type: "text",
    size: "large",
  },
  render: ({ label, type, placeholder, size }) => html`
    <div style="padding: 50px; max-width: 600px;">
      <ag-input
        .label=${label}
        .type=${type}
        .placeholder=${placeholder}
        .size=${size}
      ></ag-input>
    </div>
  `,
};

// Style variants
export const Rounded: Story = {
  args: {
    label: "Rounded Input",
    placeholder: "Rounded corners",
    type: "text",
    rounded: true,
  },
  render: ({ label, type, placeholder, rounded }) => html`
    <div style="padding: 50px; max-width: 600px;">
      <ag-input
        .label=${label}
        .type=${type}
        .placeholder=${placeholder}
        .rounded=${rounded}
      ></ag-input>
    </div>
  `,
};

export const Capsule: Story = {
  args: {
    label: "Capsule Input",
    placeholder: "Fully rounded",
    type: "text",
    capsule: true,
  },
  render: ({ label, type, placeholder, capsule }) => html`
    <div style="padding: 50px; max-width: 600px;">
      <ag-input
        .label=${label}
        .type=${type}
        .placeholder=${placeholder}
        .capsule=${capsule}
      ></ag-input>
    </div>
  `,
};

export const Underlined: Story = {
  args: {
    label: "Underlined Input",
    placeholder: "Underlined style",
    type: "text",
    underlined: true,
  },
  render: ({ label, type, placeholder, underlined }) => html`
    <div style="padding: 50px; max-width: 600px;">
      <ag-input
        .label=${label}
        .type=${type}
        .placeholder=${placeholder}
        .underlined=${underlined}
      ></ag-input>
    </div>
  `,
};

export const UnderlinedWithBackground: Story = {
  args: {
    label: "Underlined with Background",
    placeholder: "Underlined with background",
    type: "text",
    underlinedWithBackground: true,
  },
  render: ({ label, type, placeholder, underlinedWithBackground }) => html`
    <div style="padding: 50px; max-width: 600px;">
      <ag-input
        .label=${label}
        .type=${type}
        .placeholder=${placeholder}
        .underlinedWithBackground=${underlinedWithBackground}
      ></ag-input>
    </div>
  `,
};

// Label variants
export const HiddenLabel: Story = {
  args: {
    label: "Search",
    placeholder: "Search...",
    type: "search",
    labelHidden: true,
    helpText:
      "The label is visually hidden but still accessible to screen readers",
  },
  render: ({ label, type, placeholder, labelHidden, helpText }) => html`
    <div style="padding: 50px; max-width: 600px;">
      <ag-input
        .label=${label}
        .type=${type}
        .placeholder=${placeholder}
        .labelHidden=${labelHidden}
        .helpText=${helpText}
      ></ag-input>
    </div>
  `,
};

// Input type variants
export const Password: Story = {
  args: {
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
    helpText: "Password must be at least 8 characters",
  },
  render: ({ label, type, placeholder, helpText }) => html`
    <div style="padding: 50px; max-width: 600px;">
      <ag-input
        .label=${label}
        .type=${type}
        .placeholder=${placeholder}
        .helpText=${helpText}
      ></ag-input>
    </div>
  `,
};

export const Number: Story = {
  args: {
    label: "Age",
    placeholder: "Enter your age",
    type: "number",
  },
  render: ({ label, type, placeholder }) => html`
    <div style="padding: 50px; max-width: 600px;">
      <ag-input
        .label=${label}
        .type=${type}
        .placeholder=${placeholder}
      ></ag-input>
    </div>
  `,
};

export const Telephone: Story = {
  args: {
    label: "Phone Number",
    placeholder: "+1 (555) 000-0000",
    type: "tel",
  },
  render: ({ label, type, placeholder }) => html`
    <div style="padding: 50px; max-width: 600px;">
      <ag-input
        .label=${label}
        .type=${type}
        .placeholder=${placeholder}
      ></ag-input>
    </div>
  `,
};

export const URL: Story = {
  args: {
    label: "Website",
    placeholder: "https://example.com",
    type: "url",
  },
  render: ({ label, type, placeholder }) => html`
    <div style="padding: 50px; max-width: 600px;">
      <ag-input
        .label=${label}
        .type=${type}
        .placeholder=${placeholder}
      ></ag-input>
    </div>
  `,
};

export const Search: Story = {
  args: {
    label: "Search",
    placeholder: "Search for something...",
    type: "search",
    rounded: true,
  },
  render: ({ label, type, placeholder, rounded }) => html`
    <div style="padding: 50px; max-width: 600px;">
      <ag-input
        .label=${label}
        .type=${type}
        .placeholder=${placeholder}
        .rounded=${rounded}
      ></ag-input>
    </div>
  `,
};

// Textarea
export const Textarea: Story = {
  args: {
    label: "Comments",
    placeholder: "Enter your comments...",
    type: "textarea",
    rows: 6,
    helpText: "Please provide detailed feedback",
  },
  render: ({ label, type, placeholder, rows, helpText }) => html`
    <div style="padding: 50px; max-width: 600px;">
      <ag-input
        .label=${label}
        .type=${type}
        .placeholder=${placeholder}
        .rows=${rows}
        .helpText=${helpText}
      ></ag-input>
    </div>
  `,
};

export const TextareaInvalid: Story = {
  args: {
    label: "Message",
    placeholder: "Your message here...",
    type: "textarea",
    rows: 4,
    value: "Too short",
    invalid: true,
    errorMessage: "Message must be at least 20 characters long",
  },
  render: ({
    label,
    type,
    placeholder,
    rows,
    value,
    invalid,
    errorMessage,
  }) => html`
    <div style="padding: 50px; max-width: 600px;">
      <ag-input
        .label=${label}
        .type=${type}
        .placeholder=${placeholder}
        .rows=${rows}
        .value=${value}
        .invalid=${invalid}
        .errorMessage=${errorMessage}
      ></ag-input>
    </div>
  `,
};

// Event testing
export const EventTesting: Story = {
  args: {
    label: "Type to test events",
    placeholder: "Start typing...",
  },
  render: ({ label, placeholder, onInput, onChange }) => html`
    <div style="padding: 50px; max-width: 600px;">
      <p style="margin-bottom: 1rem;">
        Type in the input or blur to test events
      </p>
      <ag-input
        .label=${label}
        .placeholder=${placeholder}
        @input=${(e: Event) => {
          const target = e.target as any;
          const value =
            target.value ||
            (
              target.shadowRoot?.querySelector(
                "input, textarea"
              ) as HTMLInputElement
            )?.value;
          onInput({ value });
        }}
        @change=${(e: Event) => {
          const target = e.target as any;
          const value =
            target.value ||
            (
              target.shadowRoot?.querySelector(
                "input, textarea"
              ) as HTMLInputElement
            )?.value;
          onChange({ value });
        }}
      ></ag-input>
      <p style="font-size: 0.875rem; color: #6b7280; margin-top: 1rem;">
        Check the Actions panel below for event logs (shows current input value)
      </p>
    </div>
  `,
};

// Inline inputs
export const Inline: Story = {
  render: () => html`
    <div
      style="padding: 50px; display: flex; gap: 1rem; align-items: flex-start;"
    >
      <ag-input
        .label=${"Name"}
        .placeholder=${"John Doe"}
        .type=${"text"}
        .inline=${true}
      ></ag-input>
      <ag-input
        .label=${"Email"}
        .placeholder=${"john@example.com"}
        .type=${"email"}
        .inline=${true}
      ></ag-input>
    </div>
  `,
};

// All sizes comparison
export const AllSizes: Story = {
  render: () => html`
    <div
      style="display: flex; flex-direction: column; gap: 1.5rem; padding: 50px; max-width: 600px;"
    >
      <div>
        <p style="margin-bottom: 0.5rem; font-weight: bold;">Small</p>
        <ag-input
          .label=${"Small input"}
          .placeholder=${"Small sized"}
          .size=${"small"}
        ></ag-input>
      </div>
      <div>
        <p style="margin-bottom: 0.5rem; font-weight: bold;">Default</p>
        <ag-input
          .label=${"Default input"}
          .placeholder=${"Default sized"}
          .size=${"default"}
        ></ag-input>
      </div>
      <div>
        <p style="margin-bottom: 0.5rem; font-weight: bold;">Large</p>
        <ag-input
          .label=${"Large input"}
          .placeholder=${"Large sized"}
          .size=${"large"}
        ></ag-input>
      </div>
    </div>
  `,
};

// All style variants comparison
export const AllStyleVariants: Story = {
  render: () => html`
    <div
      style="display: flex; flex-direction: column; gap: 1.5rem; padding: 50px; max-width: 600px;"
    >
      <div>
        <p style="margin-bottom: 0.5rem; font-weight: bold;">
          Default (rectangular)
        </p>
        <ag-input
          .label=${"Default style"}
          .placeholder=${"Default rectangular"}
        ></ag-input>
      </div>
      <div>
        <p style="margin-bottom: 0.5rem; font-weight: bold;">Rounded</p>
        <ag-input
          .label=${"Rounded style"}
          .placeholder=${"Rounded corners"}
          .rounded=${true}
        ></ag-input>
      </div>
      <div>
        <p style="margin-bottom: 0.5rem; font-weight: bold;">Capsule</p>
        <ag-input
          .label=${"Capsule style"}
          .placeholder=${"Fully rounded"}
          .capsule=${true}
        ></ag-input>
      </div>
      <div>
        <p style="margin-bottom: 0.5rem; font-weight: bold;">Underlined</p>
        <ag-input
          .label=${"Underlined style"}
          .placeholder=${"Underlined"}
          .underlined=${true}
        ></ag-input>
      </div>
      <div>
        <p style="margin-bottom: 0.5rem; font-weight: bold;">
          Underlined with Background
        </p>
        <ag-input
          .label=${"Underlined with background"}
          .placeholder=${"Underlined with background"}
          .underlinedWithBackground=${true}
        ></ag-input>
      </div>
    </div>
  `,
};

// Complex form
export const ComplexForm: Story = {
  render: () => html`
    <div style="padding: 50px; max-width: 600px;">
      <h3 style="margin-top: 0;">Registration Form</h3>
      <form style="display: flex; flex-direction: column; gap: 1.5rem;">
        <ag-input
          .label=${"Full Name"}
          .placeholder=${"John Doe"}
          .type=${"text"}
          .required=${true}
        ></ag-input>

        <ag-input
          .label=${"Email Address"}
          .placeholder=${"you@example.com"}
          .type=${"email"}
          .required=${true}
          .helpText=${"We'll send you a confirmation email"}
        ></ag-input>

        <ag-input
          .label=${"Password"}
          .placeholder=${"At least 8 characters"}
          .type=${"password"}
          .required=${true}
          .helpText=${"Must include uppercase, lowercase, and numbers"}
        ></ag-input>

        <ag-input
          .label=${"Phone Number"}
          .placeholder=${"+1 (555) 000-0000"}
          .type=${"tel"}
        ></ag-input>

        <ag-input
          .label=${"Bio"}
          .placeholder=${"Tell us about yourself..."}
          .type=${"textarea"}
          .rows=${4}
          .helpText=${"Optional: Share a brief description"}
        ></ag-input>

        <button type="submit" style="padding: 0.5rem 1rem; cursor: pointer;">
          Submit
        </button>
      </form>
    </div>
  `,
};

// Accessibility with labelledBy
export const LabelledBy: Story = {
  args: {
    labelledBy: "custom-label",
    noLabel: true,
  },
  render: ({ labelledBy, noLabel }) => html`
    <div style="padding: 50px; max-width: 600px;">
      <h3 id="${labelledBy}" style="margin-top: 0;">
        Custom Label via labelledBy
      </h3>
      <p style="margin-bottom: 1rem; font-size: 0.875rem; color: #6b7280;">
        The input below uses aria-labelledby to reference the heading above
      </p>
      <ag-input
        .labelledBy=${labelledBy}
        .noLabel=${noLabel}
        .placeholder=${"Enter text here"}
      ></ag-input>
    </div>
  `,
};

// CSS Parts Customization
export const CSSPartsCustomization: Story = {
  render: () => html`
    <style>
      /* Modern gradient input style */
      .custom-gradient-input::part(ag-input) {
        border: 2px solid transparent;
        background: linear-gradient(white, white) padding-box,
          linear-gradient(135deg, #667eea 0%, #764ba2 100%) border-box;
        border-radius: 12px;
        padding: 0.75rem 1rem;
        font-weight: 500;
        transition: all 0.3s ease;
      }

      .custom-gradient-input::part(ag-input):focus {
        box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        transform: translateY(-1px);
      }

      .custom-gradient-input::part(ag-input-label) {
        font-weight: 700;
        color: #667eea;
        text-transform: uppercase;
        font-size: 0.75rem;
        letter-spacing: 0.05em;
      }

      /* Neumorphic style */
      .custom-neumorphic-input::part(ag-input) {
        background: #e0e5ec;
        border: none;
        border-radius: 16px;
        padding: 0.875rem 1.25rem;
        box-shadow: 6px 6px 12px rgba(163, 177, 198, 0.6),
          -6px -6px 12px rgba(255, 255, 255, 0.9);
        transition: box-shadow 0.3s ease;
      }

      .custom-neumorphic-input::part(ag-input):focus {
        box-shadow: inset 3px 3px 6px rgba(163, 177, 198, 0.6),
          inset -3px -3px 6px rgba(255, 255, 255, 0.9);
      }

      .custom-neumorphic-input::part(ag-input-label) {
        font-weight: 600;
        color: #6b7280;
      }

      /* Glassmorphism style */
      .custom-glass-input {
        background: linear-gradient(
          135deg,
          rgba(102, 126, 234, 0.1),
          rgba(118, 75, 162, 0.1)
        );
        padding: 2rem;
        border-radius: 16px;
        backdrop-filter: blur(10px);
      }

      .custom-glass-input::part(ag-input) {
        background: rgba(255, 255, 255, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 12px;
        padding: 0.75rem 1rem;
        backdrop-filter: blur(10px);
        color: #1f2937;
        transition: all 0.3s ease;
      }

      .custom-glass-input::part(ag-input)::placeholder {
        color: rgba(31, 41, 55, 0.5);
      }

      .custom-glass-input::part(ag-input):focus {
        background: rgba(255, 255, 255, 0.4);
        border-color: rgba(102, 126, 234, 0.6);
        box-shadow: 0 8px 16px rgba(102, 126, 234, 0.2);
      }

      .custom-glass-input::part(ag-input-label) {
        font-weight: 600;
        color: #4b5563;
      }

      /* Material Design-inspired */
      .custom-material-input::part(ag-input) {
        border: none;
        border-bottom: 2px solid #e5e7eb;
        border-radius: 0;
        padding: 0.5rem 0;
        background: transparent;
        transition: border-color 0.2s ease;
      }

      .custom-material-input::part(ag-input):focus {
        border-bottom-color: #667eea;
        outline: none;
      }

      .custom-material-input::part(ag-input-label) {
        font-size: 0.875rem;
        color: #6b7280;
        margin-bottom: 0.25rem;
      }

      /* Error state customization */
      .custom-error-input::part(ag-input-error) {
        color: #dc2626;
        font-weight: 600;
        font-size: 0.875rem;
        padding: 0.5rem;
        background: #fee2e2;
        border-left: 3px solid #dc2626;
        border-radius: 4px;
        margin-top: 0.5rem;
      }

      .custom-error-input::part(ag-input) {
        border-color: #dc2626;
        background: #fef2f2;
      }

      .custom-error-input::part(ag-input):focus {
        outline-color: #dc2626;
        box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
      }

      /* Textarea customization */
      .custom-textarea::part(ag-textarea) {
        border: 2px dashed #9ca3af;
        border-radius: 12px;
        background: #f9fafb;
        padding: 1rem;
        font-family: "Monaco", "Courier New", monospace;
        font-size: 0.875rem;
        line-height: 1.6;
        transition: all 0.3s ease;
      }

      .custom-textarea::part(ag-textarea):focus {
        border-style: solid;
        border-color: #667eea;
        background: white;
      }

      .custom-textarea::part(ag-input-label) {
        font-weight: 700;
        color: #374151;
      }
    </style>

    <div style="padding: 50px; max-width: 800px;">
      <h3 style="margin-top: 0;">Styled with CSS Shadow Parts</h3>
      <p style="margin-bottom: 2rem; color: #6b7280;">
        Input can be customized using CSS Shadow Parts:
        <code>::part(ag-input)</code>, <code>::part(ag-textarea)</code>,
        <code>::part(ag-input-label)</code>,
        <code>::part(ag-input-error)</code>,
        <code>::part(ag-input-help)</code>
      </p>

      <div style="display: flex; flex-direction: column; gap: 2.5rem;">
        <div>
          <h4>Modern Gradient Border</h4>
          <ag-input
            class="custom-gradient-input"
            .label=${"Email Address"}
            .type=${"email"}
            .placeholder=${"you@example.com"}
          ></ag-input>
        </div>

        <div>
          <h4>Neumorphic Design</h4>
          <ag-input
            class="custom-neumorphic-input"
            .label=${"Username"}
            .type=${"text"}
            .placeholder=${"Enter your username"}
          ></ag-input>
        </div>

        <div>
          <h4>Glassmorphism Effect</h4>
          <ag-input
            class="custom-glass-input"
            .label=${"Password"}
            .type=${"password"}
            .placeholder=${"Enter password"}
          ></ag-input>
        </div>

        <div>
          <h4>Material Design Style</h4>
          <ag-input
            class="custom-material-input"
            .label=${"Full Name"}
            .type=${"text"}
            .placeholder=${"John Doe"}
          ></ag-input>
        </div>

        <div>
          <h4>Custom Error Styling</h4>
          <ag-input
            class="custom-error-input"
            .label=${"Email"}
            .type=${"email"}
            .value=${"invalid-email"}
            .invalid=${true}
            .errorMessage=${"Please enter a valid email address"}
          ></ag-input>
        </div>

        <div>
          <h4>Styled Textarea</h4>
          <ag-input
            class="custom-textarea"
            .label=${"Code Snippet"}
            .type=${"textarea"}
            .rows=${6}
            .placeholder=${"Paste your code here..."}
            .helpText=${"Monospace font with dashed border"}
          ></ag-input>
        </div>
      </div>
    </div>
  `,
};
