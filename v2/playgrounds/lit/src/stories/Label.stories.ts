import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "agnosticui-core/label";
import type { LabelProps } from "../../../../lib/src/components/Label/core/_Label";

const meta: Meta<LabelProps> = {
  title: "AgnosticUI Lit/Label",
  component: "ag-label",
  tags: ["autodocs"],
  argTypes: {
    align: {
      control: "select",
      options: ["vertical", "horizontal"],
      description: "Label alignment/layout mode",
    },
  },
  args: {
    align: "vertical",
  },
};

export default meta;
type Story = StoryObj<LabelProps>;

// Default vertical label
export const Default: Story = {
  args: {
    align: "vertical",
  },
  render: ({ align }) => html`
    <div style="padding: 50px; max-width: 600px;">
      <ag-label .align=${align}>
        Email Address
      </ag-label>
      <input type="email" placeholder="Enter your email" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;" />
    </div>
  `,
};

// Horizontal label
export const Horizontal: Story = {
  args: {
    align: "horizontal",
  },
  render: ({ align }) => html`
    <div style="padding: 50px; max-width: 600px;">
      <div style="display: flex; align-items: center;">
        <ag-label .align=${align}>
          Email:
        </ag-label>
        <input type="email" placeholder="Enter your email" style="flex: 1; padding: 8px; border: 1px solid #ccc; border-radius: 4px;" />
      </div>
    </div>
  `,
};

// Multiple labels vertically
export const MultipleVertical: Story = {
  args: {
    align: "vertical",
  },
  render: ({ align }) => html`
    <div style="padding: 50px; max-width: 600px;">
      <div style="margin-bottom: 20px;">
        <ag-label .align=${align}>First Name</ag-label>
        <input type="text" placeholder="John" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;" />
      </div>

      <div style="margin-bottom: 20px;">
        <ag-label .align=${align}>Last Name</ag-label>
        <input type="text" placeholder="Doe" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;" />
      </div>

      <div style="margin-bottom: 20px;">
        <ag-label .align=${align}>Email</ag-label>
        <input type="email" placeholder="john.doe@example.com" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;" />
      </div>
    </div>
  `,
};

// Label with required indicator
export const WithRequiredIndicator: Story = {
  args: {
    align: "vertical",
  },
  render: ({ align }) => html`
    <div style="padding: 50px; max-width: 600px;">
      <ag-label .align=${align}>
        Password <span style="color: #dc2626;">*</span>
      </ag-label>
      <input type="password" placeholder="Enter password" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;" />
    </div>
  `,
};

// Label with long text
export const LongText: Story = {
  args: {
    align: "vertical",
  },
  render: ({ align }) => html`
    <div style="padding: 50px; max-width: 600px;">
      <ag-label .align=${align}>
        Please enter your preferred email address for account notifications and updates
      </ag-label>
      <input type="email" placeholder="Enter your email" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;" />
    </div>
  `,
};
