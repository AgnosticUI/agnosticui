import type { Meta, StoryObj } from "@storybook/react";
import { action } from "storybook/actions";
import { ReactSelectionButtonGroup } from "agnosticui-core/selection-button-group/react";
import { ReactSelectionButton } from "agnosticui-core/selection-button/react";

const selectionChangeAction = action("selection-change");

const meta: Meta<typeof ReactSelectionButtonGroup> = {
  title: "AgnosticUI React/SelectionButtonGroup",
  component: ReactSelectionButtonGroup,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["radio", "checkbox"],
      description: "Selection mode: single (radio) or multiple (checkbox)",
    },
    name: {
      control: "text",
      description: "Name attribute for the input elements",
    },
    legend: {
      control: "text",
      description: "Legend text for the fieldset (accessibility)",
    },
    legendHidden: {
      control: "boolean",
      description: "Visually hide the legend while keeping it accessible",
    },
    theme: {
      control: "select",
      options: ["", "success", "info", "warning", "error", "monochrome"],
      description: "Theme variant for buttons",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Size variant for buttons",
    },
    shape: {
      control: "select",
      options: ["", "rounded", "capsule"],
      description: "Shape variant for buttons",
    },
    disabled: {
      control: "boolean",
      description: "Disable all buttons in the group",
    },
  },
  args: {
    type: "radio",
    name: "payment-method",
    legend: "Select payment method",
    legendHidden: false,
    theme: "",
    size: "md",
    shape: "",
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const RadioGroup: Story = {
  render: (args) => (
    <ReactSelectionButtonGroup
      type={args.type}
      name={args.name}
      legend={args.legend}
      legendHidden={args.legendHidden}
      theme={args.theme}
      size={args.size}
      shape={args.shape}
      disabled={args.disabled}
      onSelectionChange={(e) => selectionChangeAction(e.detail)}
    >
      <ReactSelectionButton value="card" label="Credit Card">
        Credit Card
      </ReactSelectionButton>
      <ReactSelectionButton value="paypal" label="PayPal">
        PayPal
      </ReactSelectionButton>
      <ReactSelectionButton value="bank" label="Bank Transfer">
        Bank Transfer
      </ReactSelectionButton>
    </ReactSelectionButtonGroup>
  ),
};

export const CheckboxGroup: Story = {
  args: {
    type: "checkbox",
    name: "toppings",
    legend: "Select toppings",
  },
  render: (args) => (
    <ReactSelectionButtonGroup
      type={args.type}
      name={args.name}
      legend={args.legend}
      legendHidden={args.legendHidden}
      theme={args.theme}
      size={args.size}
      shape={args.shape}
      disabled={args.disabled}
      onSelectionChange={(e) => selectionChangeAction(e.detail)}
    >
      <ReactSelectionButton value="cheese" label="Extra Cheese">
        Extra Cheese
      </ReactSelectionButton>
      <ReactSelectionButton value="pepperoni" label="Pepperoni">
        Pepperoni
      </ReactSelectionButton>
      <ReactSelectionButton value="mushrooms" label="Mushrooms">
        Mushrooms
      </ReactSelectionButton>
      <ReactSelectionButton value="olives" label="Olives">
        Olives
      </ReactSelectionButton>
    </ReactSelectionButtonGroup>
  ),
};

export const AllThemes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      {/* Default (Primary) */}
      <div>
        <h3 style={{ marginBottom: "0.5rem" }}>Default (Primary)</h3>
        <ReactSelectionButtonGroup
          type="radio"
          name="theme-default"
          legend="Default theme"
          legendHidden
          onSelectionChange={(e) => selectionChangeAction(e.detail)}
        >
          <ReactSelectionButton value="a" label="Option A">Option A</ReactSelectionButton>
          <ReactSelectionButton value="b" label="Option B">Option B</ReactSelectionButton>
          <ReactSelectionButton value="c" label="Option C">Option C</ReactSelectionButton>
        </ReactSelectionButtonGroup>
      </div>

      {/* Success */}
      <div>
        <h3 style={{ marginBottom: "0.5rem" }}>Success</h3>
        <ReactSelectionButtonGroup
          type="radio"
          name="theme-success"
          legend="Success theme"
          legendHidden
          theme="success"
          onSelectionChange={(e) => selectionChangeAction(e.detail)}
        >
          <ReactSelectionButton value="a" label="Option A">Option A</ReactSelectionButton>
          <ReactSelectionButton value="b" label="Option B">Option B</ReactSelectionButton>
          <ReactSelectionButton value="c" label="Option C">Option C</ReactSelectionButton>
        </ReactSelectionButtonGroup>
      </div>

      {/* Info */}
      <div>
        <h3 style={{ marginBottom: "0.5rem" }}>Info</h3>
        <ReactSelectionButtonGroup
          type="radio"
          name="theme-info"
          legend="Info theme"
          legendHidden
          theme="info"
          onSelectionChange={(e) => selectionChangeAction(e.detail)}
        >
          <ReactSelectionButton value="a" label="Option A">Option A</ReactSelectionButton>
          <ReactSelectionButton value="b" label="Option B">Option B</ReactSelectionButton>
          <ReactSelectionButton value="c" label="Option C">Option C</ReactSelectionButton>
        </ReactSelectionButtonGroup>
      </div>

      {/* Warning */}
      <div>
        <h3 style={{ marginBottom: "0.5rem" }}>Warning</h3>
        <ReactSelectionButtonGroup
          type="radio"
          name="theme-warning"
          legend="Warning theme"
          legendHidden
          theme="warning"
          onSelectionChange={(e) => selectionChangeAction(e.detail)}
        >
          <ReactSelectionButton value="a" label="Option A">Option A</ReactSelectionButton>
          <ReactSelectionButton value="b" label="Option B">Option B</ReactSelectionButton>
          <ReactSelectionButton value="c" label="Option C">Option C</ReactSelectionButton>
        </ReactSelectionButtonGroup>
      </div>

      {/* Error */}
      <div>
        <h3 style={{ marginBottom: "0.5rem" }}>Error</h3>
        <ReactSelectionButtonGroup
          type="radio"
          name="theme-error"
          legend="Error theme"
          legendHidden
          theme="error"
          onSelectionChange={(e) => selectionChangeAction(e.detail)}
        >
          <ReactSelectionButton value="a" label="Option A">Option A</ReactSelectionButton>
          <ReactSelectionButton value="b" label="Option B">Option B</ReactSelectionButton>
          <ReactSelectionButton value="c" label="Option C">Option C</ReactSelectionButton>
        </ReactSelectionButtonGroup>
      </div>

      {/* Monochrome */}
      <div>
        <h3 style={{ marginBottom: "0.5rem" }}>Monochrome</h3>
        <ReactSelectionButtonGroup
          type="radio"
          name="theme-monochrome"
          legend="Monochrome theme"
          legendHidden
          theme="monochrome"
          onSelectionChange={(e) => selectionChangeAction(e.detail)}
        >
          <ReactSelectionButton value="a" label="Option A">Option A</ReactSelectionButton>
          <ReactSelectionButton value="b" label="Option B">Option B</ReactSelectionButton>
          <ReactSelectionButton value="c" label="Option C">Option C</ReactSelectionButton>
        </ReactSelectionButtonGroup>
      </div>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      {/* Small */}
      <div>
        <h3 style={{ marginBottom: "0.5rem" }}>Small (sm)</h3>
        <ReactSelectionButtonGroup
          type="radio"
          name="size-sm"
          legend="Small size"
          legendHidden
          size="sm"
          onSelectionChange={(e) => selectionChangeAction(e.detail)}
        >
          <ReactSelectionButton value="a" label="Option A">Option A</ReactSelectionButton>
          <ReactSelectionButton value="b" label="Option B">Option B</ReactSelectionButton>
          <ReactSelectionButton value="c" label="Option C">Option C</ReactSelectionButton>
        </ReactSelectionButtonGroup>
      </div>

      {/* Medium (default) */}
      <div>
        <h3 style={{ marginBottom: "0.5rem" }}>Medium (md) - Default</h3>
        <ReactSelectionButtonGroup
          type="radio"
          name="size-md"
          legend="Medium size"
          legendHidden
          size="md"
          onSelectionChange={(e) => selectionChangeAction(e.detail)}
        >
          <ReactSelectionButton value="a" label="Option A">Option A</ReactSelectionButton>
          <ReactSelectionButton value="b" label="Option B">Option B</ReactSelectionButton>
          <ReactSelectionButton value="c" label="Option C">Option C</ReactSelectionButton>
        </ReactSelectionButtonGroup>
      </div>

      {/* Large */}
      <div>
        <h3 style={{ marginBottom: "0.5rem" }}>Large (lg)</h3>
        <ReactSelectionButtonGroup
          type="radio"
          name="size-lg"
          legend="Large size"
          legendHidden
          size="lg"
          onSelectionChange={(e) => selectionChangeAction(e.detail)}
        >
          <ReactSelectionButton value="a" label="Option A">Option A</ReactSelectionButton>
          <ReactSelectionButton value="b" label="Option B">Option B</ReactSelectionButton>
          <ReactSelectionButton value="c" label="Option C">Option C</ReactSelectionButton>
        </ReactSelectionButtonGroup>
      </div>
    </div>
  ),
};

export const AllShapes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      {/* Default (rectangular) */}
      <div>
        <h3 style={{ marginBottom: "0.5rem" }}>Default (rectangular)</h3>
        <ReactSelectionButtonGroup
          type="radio"
          name="shape-default"
          legend="Default shape"
          legendHidden
          onSelectionChange={(e) => selectionChangeAction(e.detail)}
        >
          <ReactSelectionButton value="a" label="Option A">Option A</ReactSelectionButton>
          <ReactSelectionButton value="b" label="Option B">Option B</ReactSelectionButton>
          <ReactSelectionButton value="c" label="Option C">Option C</ReactSelectionButton>
        </ReactSelectionButtonGroup>
      </div>

      {/* Rounded */}
      <div>
        <h3 style={{ marginBottom: "0.5rem" }}>Rounded</h3>
        <ReactSelectionButtonGroup
          type="radio"
          name="shape-rounded"
          legend="Rounded shape"
          legendHidden
          shape="rounded"
          onSelectionChange={(e) => selectionChangeAction(e.detail)}
        >
          <ReactSelectionButton value="a" label="Option A">Option A</ReactSelectionButton>
          <ReactSelectionButton value="b" label="Option B">Option B</ReactSelectionButton>
          <ReactSelectionButton value="c" label="Option C">Option C</ReactSelectionButton>
        </ReactSelectionButtonGroup>
      </div>

      {/* Capsule (pill) */}
      <div>
        <h3 style={{ marginBottom: "0.5rem" }}>Capsule (pill)</h3>
        <ReactSelectionButtonGroup
          type="radio"
          name="shape-capsule"
          legend="Capsule shape"
          legendHidden
          shape="capsule"
          onSelectionChange={(e) => selectionChangeAction(e.detail)}
        >
          <ReactSelectionButton value="a" label="Option A">Option A</ReactSelectionButton>
          <ReactSelectionButton value="b" label="Option B">Option B</ReactSelectionButton>
          <ReactSelectionButton value="c" label="Option C">Option C</ReactSelectionButton>
        </ReactSelectionButtonGroup>
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    type: "radio",
    name: "disabled-example",
    legend: "Disabled group",
    disabled: true,
  },
  render: (args) => (
    <ReactSelectionButtonGroup
      type={args.type}
      name={args.name}
      legend={args.legend}
      disabled={args.disabled}
    >
      <ReactSelectionButton value="a" label="Option A">Option A</ReactSelectionButton>
      <ReactSelectionButton value="b" label="Option B">Option B</ReactSelectionButton>
      <ReactSelectionButton value="c" label="Option C">Option C</ReactSelectionButton>
    </ReactSelectionButtonGroup>
  ),
};

export const HiddenLegend: Story = {
  args: {
    type: "radio",
    name: "hidden-legend",
    legend: "This legend is visually hidden but accessible",
    legendHidden: true,
  },
  render: (args) => (
    <ReactSelectionButtonGroup
      type={args.type}
      name={args.name}
      legend={args.legend}
      legendHidden={args.legendHidden}
    >
      <ReactSelectionButton value="a" label="Option A">Option A</ReactSelectionButton>
      <ReactSelectionButton value="b" label="Option B">Option B</ReactSelectionButton>
    </ReactSelectionButtonGroup>
  ),
};

export const CombinedVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      {/* Success + Capsule + Small */}
      <div>
        <h3 style={{ marginBottom: "0.5rem" }}>Success + Capsule + Small</h3>
        <ReactSelectionButtonGroup
          type="radio"
          name="combined-1"
          legend="Combined variant 1"
          legendHidden
          theme="success"
          shape="capsule"
          size="sm"
          onSelectionChange={(e) => selectionChangeAction(e.detail)}
        >
          <ReactSelectionButton value="a" label="Yes">Yes</ReactSelectionButton>
          <ReactSelectionButton value="b" label="No">No</ReactSelectionButton>
          <ReactSelectionButton value="c" label="Maybe">Maybe</ReactSelectionButton>
        </ReactSelectionButtonGroup>
      </div>

      {/* Error + Rounded + Large */}
      <div>
        <h3 style={{ marginBottom: "0.5rem" }}>Error + Rounded + Large</h3>
        <ReactSelectionButtonGroup
          type="radio"
          name="combined-2"
          legend="Combined variant 2"
          legendHidden
          theme="error"
          shape="rounded"
          size="lg"
          onSelectionChange={(e) => selectionChangeAction(e.detail)}
        >
          <ReactSelectionButton value="a" label="Delete">Delete</ReactSelectionButton>
          <ReactSelectionButton value="b" label="Archive">Archive</ReactSelectionButton>
          <ReactSelectionButton value="c" label="Keep">Keep</ReactSelectionButton>
        </ReactSelectionButtonGroup>
      </div>

      {/* Monochrome + Capsule + Checkbox */}
      <div>
        <h3 style={{ marginBottom: "0.5rem" }}>Monochrome + Capsule + Checkbox</h3>
        <ReactSelectionButtonGroup
          type="checkbox"
          name="combined-3"
          legend="Combined variant 3"
          legendHidden
          theme="monochrome"
          shape="capsule"
          onSelectionChange={(e) => selectionChangeAction(e.detail)}
        >
          <ReactSelectionButton value="bold" label="Bold">Bold</ReactSelectionButton>
          <ReactSelectionButton value="italic" label="Italic">Italic</ReactSelectionButton>
          <ReactSelectionButton value="underline" label="Underline">Underline</ReactSelectionButton>
        </ReactSelectionButtonGroup>
      </div>

      {/* Info + Default Shape + Large */}
      <div>
        <h3 style={{ marginBottom: "0.5rem" }}>Info + Default Shape + Large</h3>
        <ReactSelectionButtonGroup
          type="radio"
          name="combined-4"
          legend="Combined variant 4"
          legendHidden
          theme="info"
          size="lg"
          onSelectionChange={(e) => selectionChangeAction(e.detail)}
        >
          <ReactSelectionButton value="daily" label="Daily">Daily</ReactSelectionButton>
          <ReactSelectionButton value="weekly" label="Weekly">Weekly</ReactSelectionButton>
          <ReactSelectionButton value="monthly" label="Monthly">Monthly</ReactSelectionButton>
        </ReactSelectionButtonGroup>
      </div>
    </div>
  ),
};

export const RealWorldExample: Story = {
  render: () => (
    <div style={{ maxWidth: "600px" }}>
      <h2 style={{ marginBottom: "1rem" }}>Choose your subscription</h2>
      <ReactSelectionButtonGroup
        type="radio"
        name="subscription"
        legend="Subscription plan"
        legendHidden
        shape="rounded"
        onSelectionChange={(e) => selectionChangeAction(e.detail)}
      >
        <ReactSelectionButton value="monthly" label="Monthly billing">
          Monthly - $9.99
        </ReactSelectionButton>
        <ReactSelectionButton value="quarterly" label="Quarterly billing">
          Quarterly - $24.99
        </ReactSelectionButton>
        <ReactSelectionButton value="annual" label="Annual billing">
          Annual - $79.99
        </ReactSelectionButton>
      </ReactSelectionButtonGroup>

      <div style={{ marginTop: "2rem" }}>
        <h3 style={{ marginBottom: "0.5rem" }}>Add-ons (select multiple)</h3>
        <ReactSelectionButtonGroup
          type="checkbox"
          name="addons"
          legend="Available add-ons"
          legendHidden
          theme="success"
          shape="rounded"
          size="sm"
          onSelectionChange={(e) => selectionChangeAction(e.detail)}
        >
          <ReactSelectionButton value="storage" label="Extra storage">
            Extra Storage +$2
          </ReactSelectionButton>
          <ReactSelectionButton value="support" label="Priority support">
            Priority Support +$5
          </ReactSelectionButton>
          <ReactSelectionButton value="backup" label="Auto backup">
            Auto Backup +$3
          </ReactSelectionButton>
        </ReactSelectionButtonGroup>
      </div>
    </div>
  ),
};

export const RTLSupport: Story = {
  render: () => (
    <div dir="rtl" style={{ fontFamily: "system-ui, sans-serif" }}>
      <h3 style={{ marginBottom: "1rem" }}>Right-to-Left (RTL) Layout</h3>
      <ReactSelectionButtonGroup
        type="radio"
        name="payment-rtl"
        legend="בחר אמצעי תשלום"
        shape="rounded"
        onSelectionChange={(e) => selectionChangeAction(e.detail)}
      >
        <ReactSelectionButton value="card" label="כרטיס אשראי">
          כרטיס אשראי
        </ReactSelectionButton>
        <ReactSelectionButton value="paypal" label="פייפאל">
          פייפאל
        </ReactSelectionButton>
        <ReactSelectionButton value="bank" label="העברה בנקאית">
          העברה בנקאית
        </ReactSelectionButton>
      </ReactSelectionButtonGroup>
      <p style={{ marginTop: "1rem", color: "#666", fontSize: "0.875rem" }}>
        The indicator badge appears on the top-left in RTL mode via <code>inset-inline-end</code>.
      </p>
    </div>
  ),
};
