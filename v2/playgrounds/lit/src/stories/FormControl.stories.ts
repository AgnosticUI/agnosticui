import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "agnosticui-core/form-control";
import "agnosticui-core/label";
import "agnosticui-core/input";
import "agnosticui-core/checkbox";
import type { FormControlProps } from "../../../../lib/src/components/FormControl/core/_FormControl";

const meta: Meta<FormControlProps> = {
  title: "AgnosticUI Lit/FormControl",
  component: "ag-form-control",
  tags: ["autodocs"],
  argTypes: {
    align: {
      control: "select",
      options: ["vertical", "horizontal"],
      description: "Layout orientation",
    },
    invalid: {
      control: "boolean",
      description: "Whether the control is in an invalid state",
    },
    required: {
      control: "boolean",
      description: "Whether the control is required",
    },
  },
  args: {
    align: "vertical",
    invalid: false,
    required: false,
  },
};

export default meta;
type Story = StoryObj<FormControlProps>;

// Default FormControl with Input
export const Default: Story = {
  args: {
    align: "vertical",
    invalid: false,
    required: false,
  },
  render: ({ align, invalid, required }) => html`
    <div style="padding: 50px; max-width: 600px;">
      <ag-form-control .align=${align} ?invalid=${invalid} ?required=${required}>
        <ag-label slot="label">Full Name</ag-label>
        <ag-input
          slot="control"
          placeholder="Enter your name"
        ></ag-input>
        <span slot="helper">This is your legal name</span>
      </ag-form-control>
    </div>
  `,
};

// Required field
export const Required: Story = {
  args: {
    align: "vertical",
    invalid: false,
    required: true,
  },
  render: ({ align, invalid, required }) => html`
    <div style="padding: 50px; max-width: 600px;">
      <ag-form-control .align=${align} ?invalid=${invalid} ?required=${required}>
        <ag-label slot="label">Username</ag-label>
        <ag-input
          slot="control"
          placeholder="Choose a username"
        ></ag-input>
        <span slot="helper">Must be unique and at least 3 characters</span>
      </ag-form-control>
    </div>
  `,
};

// Invalid field with error
export const Invalid: Story = {
  args: {
    align: "vertical",
    invalid: true,
    required: false,
  },
  render: ({ align, invalid, required }) => html`
    <div style="padding: 50px; max-width: 600px;">
      <ag-form-control .align=${align} ?invalid=${invalid} ?required=${required}>
        <ag-label slot="label">Password</ag-label>
        <ag-input
          slot="control"
          type="password"
          placeholder="Enter password"
        ></ag-input>
        <span slot="helper">At least 8 characters</span>
        <span slot="error">Password is too weak</span>
      </ag-form-control>
    </div>
  `,
};

// Horizontal layout
export const Horizontal: Story = {
  args: {
    align: "horizontal",
    invalid: false,
    required: false,
  },
  render: ({ align, invalid, required }) => html`
    <div style="padding: 50px; max-width: 800px;">
      <ag-form-control .align=${align} ?invalid=${invalid} ?required=${required}>
        <ag-label slot="label" align="horizontal">Email</ag-label>
        <ag-input
          slot="control"
          type="email"
          placeholder="Enter email"
        ></ag-input>
      </ag-form-control>
    </div>
  `,
};

// With Checkbox
export const WithCheckbox: Story = {
  args: {
    align: "vertical",
    invalid: false,
    required: false,
  },
  render: ({ align, invalid, required }) => html`
    <div style="padding: 50px; max-width: 600px;">
      <ag-form-control .align=${align} ?invalid=${invalid} ?required=${required}>
        <ag-label slot="label">Newsletter Subscription</ag-label>
        <ag-checkbox
          slot="control"
          label-text="I want to receive updates"
        ></ag-checkbox>
        <span slot="helper">You can unsubscribe at any time</span>
      </ag-form-control>
    </div>
  `,
};

// Multiple FormControls in a form
export const MultipleFields: Story = {
  render: () => html`
    <div style="padding: 50px; max-width: 600px;">
      <form>
        <div style="margin-bottom: 24px;">
          <ag-form-control required>
            <ag-label slot="label">First Name</ag-label>
            <ag-input
              slot="control"
              placeholder="John"
            ></ag-input>
          </ag-form-control>
        </div>

        <div style="margin-bottom: 24px;">
          <ag-form-control required>
            <ag-label slot="label">Last Name</ag-label>
            <ag-input
              slot="control"
              placeholder="Doe"
            ></ag-input>
          </ag-form-control>
        </div>

        <div style="margin-bottom: 24px;">
          <ag-form-control required>
            <ag-label slot="label">Email</ag-label>
            <ag-input
              slot="control"
              type="email"
              placeholder="john.doe@example.com"
            ></ag-input>
            <span slot="helper">We'll never share your email</span>
          </ag-form-control>
        </div>

        <div style="margin-bottom: 24px;">
          <ag-form-control required invalid>
            <ag-label slot="label">Password</ag-label>
            <ag-input
              slot="control"
              type="password"
              placeholder="Enter password"
            ></ag-input>
            <span slot="helper">At least 8 characters</span>
            <span slot="error">Password must contain at least one number</span>
          </ag-form-control>
        </div>

        <div style="margin-bottom: 24px;">
          <ag-form-control align="horizontal">
            <ag-label slot="label" align="horizontal">Terms and Conditions</ag-label>
            <ag-checkbox
              slot="control"
              label-text="I agree to the terms and conditions"
            ></ag-checkbox>
          </ag-form-control>
        </div>
      </form>
    </div>
  `,
};

// Comparison: Standalone vs FormControl-managed
export const StandaloneVsManaged: Story = {
  render: () => html`
    <div style="padding: 50px; max-width: 800px;">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px;">
        <!-- Standalone Input -->
        <div>
          <h3 style="margin-top: 0;">Standalone Input</h3>
          <p style="color: #666; font-size: 14px; margin-bottom: 20px;">
            Input with internal label, helper, and error
          </p>
          <ag-input
            label="Email Address"
            help-text="We'll never share your email"
            placeholder="Enter your email"
            type="email"
          ></ag-input>
        </div>

        <!-- FormControl-managed Input -->
        <div>
          <h3 style="margin-top: 0;">FormControl-Managed</h3>
          <p style="color: #666; font-size: 14px; margin-bottom: 20px;">
            Input with FormControl handling label/helper/error
          </p>
          <ag-form-control>
            <ag-label slot="label">Email Address</ag-label>
            <ag-input
              slot="control"
              placeholder="Enter your email"
              type="email"
            ></ag-input>
            <span slot="helper">We'll never share your email</span>
          </ag-form-control>
        </div>
      </div>
    </div>
  `,
};

// ARIA Testing Story - shows ARIA attributes in action
export const ARIAInspector: Story = {
  render: () => html`
    <div style="padding: 50px; max-width: 800px;">
      <h3 style="margin-top: 0;">ARIA Attributes Test</h3>
      <p style="color: #666; font-size: 14px; margin-bottom: 20px;">
        Open browser DevTools to inspect ARIA attributes on the inputs below:
      </p>

      <div style="margin-bottom: 32px; padding: 20px; background: #f5f5f5; border-radius: 8px;">
        <h4 style="margin-top: 0;">Test 1: Basic FormControl</h4>
        <p style="font-size: 12px; color: #666;">
          Expected: <code>aria-invalid="false"</code>, <code>standalone="false"</code>
        </p>
        <ag-form-control id="test-basic">
          <ag-label slot="label">Name</ag-label>
          <ag-input slot="control" placeholder="Enter name"></ag-input>
          <span slot="helper">Your full name</span>
        </ag-form-control>
      </div>

      <div style="margin-bottom: 32px; padding: 20px; background: #f5f5f5; border-radius: 8px;">
        <h4 style="margin-top: 0;">Test 2: Required Field</h4>
        <p style="font-size: 12px; color: #666;">
          Expected: <code>required</code>, <code>aria-required="true"</code>, <code>aria-describedby</code> includes helper ID
        </p>
        <ag-form-control id="test-required" required>
          <ag-label slot="label">Username</ag-label>
          <ag-input slot="control" placeholder="Choose username"></ag-input>
          <span slot="helper">Must be unique</span>
        </ag-form-control>
      </div>

      <div style="margin-bottom: 32px; padding: 20px; background: #f5f5f5; border-radius: 8px;">
        <h4 style="margin-top: 0;">Test 3: Invalid Field</h4>
        <p style="font-size: 12px; color: #666;">
          Expected: <code>aria-invalid="true"</code>, <code>aria-describedby</code> includes both helper and error IDs
        </p>
        <ag-form-control id="test-invalid" invalid>
          <ag-label slot="label">Email</ag-label>
          <ag-input slot="control" type="email" placeholder="Enter email"></ag-input>
          <span slot="helper">We'll never share your email</span>
          <span slot="error">Invalid email format</span>
        </ag-form-control>
      </div>

      <div style="margin-bottom: 32px; padding: 20px; background: #f5f5f5; border-radius: 8px;">
        <h4 style="margin-top: 0;">Test 4: Checkbox</h4>
        <p style="font-size: 12px; color: #666;">
          Expected: <code>standalone="false"</code>, proper ARIA wiring to checkbox input
        </p>
        <ag-form-control id="test-checkbox">
          <ag-label slot="label">Terms</ag-label>
          <ag-checkbox slot="control" label-text="I agree"></ag-checkbox>
          <span slot="helper">By checking, you agree to our terms</span>
        </ag-form-control>
      </div>
    </div>
  `,
};

// Different input types with FormControl
export const InputTypes: Story = {
  render: () => html`
    <div style="padding: 50px; max-width: 600px;">
      <div style="margin-bottom: 24px;">
        <ag-form-control>
          <ag-label slot="label">Text Input</ag-label>
          <ag-input slot="control" type="text" placeholder="Enter text"></ag-input>
        </ag-form-control>
      </div>

      <div style="margin-bottom: 24px;">
        <ag-form-control>
          <ag-label slot="label">Email</ag-label>
          <ag-input slot="control" type="email" placeholder="user@example.com"></ag-input>
        </ag-form-control>
      </div>

      <div style="margin-bottom: 24px;">
        <ag-form-control>
          <ag-label slot="label">Password</ag-label>
          <ag-input slot="control" type="password" placeholder="••••••••"></ag-input>
        </ag-form-control>
      </div>

      <div style="margin-bottom: 24px;">
        <ag-form-control>
          <ag-label slot="label">Number</ag-label>
          <ag-input slot="control" type="number" placeholder="42"></ag-input>
        </ag-form-control>
      </div>

      <div style="margin-bottom: 24px;">
        <ag-form-control>
          <ag-label slot="label">Textarea</ag-label>
          <ag-input slot="control" type="textarea" placeholder="Enter multiple lines..."></ag-input>
        </ag-form-control>
      </div>
    </div>
  `,
};

// Input variants with FormControl
export const InputVariants: Story = {
  render: () => html`
    <div style="padding: 50px; max-width: 600px;">
      <div style="margin-bottom: 24px;">
        <ag-form-control>
          <ag-label slot="label">Default</ag-label>
          <ag-input slot="control" placeholder="Default styling"></ag-input>
        </ag-form-control>
      </div>

      <div style="margin-bottom: 24px;">
        <ag-form-control>
          <ag-label slot="label">Rounded</ag-label>
          <ag-input slot="control" rounded placeholder="Rounded corners"></ag-input>
        </ag-form-control>
      </div>

      <div style="margin-bottom: 24px;">
        <ag-form-control>
          <ag-label slot="label">Capsule</ag-label>
          <ag-input slot="control" capsule placeholder="Capsule styling"></ag-input>
        </ag-form-control>
      </div>

      <div style="margin-bottom: 24px;">
        <ag-form-control>
          <ag-label slot="label">Underlined</ag-label>
          <ag-input slot="control" underlined placeholder="Underlined"></ag-input>
        </ag-form-control>
      </div>

      <div style="margin-bottom: 24px;">
        <ag-form-control>
          <ag-label slot="label">Small Size</ag-label>
          <ag-input slot="control" size="small" placeholder="Small input"></ag-input>
        </ag-form-control>
      </div>

      <div style="margin-bottom: 24px;">
        <ag-form-control>
          <ag-label slot="label">Large Size</ag-label>
          <ag-input slot="control" size="large" placeholder="Large input"></ag-input>
        </ag-form-control>
      </div>
    </div>
  `,
};
