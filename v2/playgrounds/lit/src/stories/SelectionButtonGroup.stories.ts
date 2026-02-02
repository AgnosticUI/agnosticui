import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { action } from "storybook/actions";
import "agnosticui-core/selection-button-group";
import "agnosticui-core/selection-button";
import type { AgSelectionButtonGroup } from "agnosticui-core/selection-button-group";

const selectionChangeAction = action("selection-change");

const meta: Meta<AgSelectionButtonGroup> = {
  title: "AgnosticUI Lit/SelectionButtonGroup",
  component: "ag-selection-button-group",
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
type Story = StoryObj<AgSelectionButtonGroup>;

export const RadioGroup: Story = {
  render: (args) => html`
    <ag-selection-button-group
      type=${args.type}
      name=${args.name}
      legend=${args.legend}
      ?legend-hidden=${args.legendHidden}
      theme=${args.theme}
      size=${args.size}
      shape=${args.shape}
      ?disabled=${args.disabled}
      @selection-change=${(e: CustomEvent) => selectionChangeAction(e.detail)}
    >
      <ag-selection-button value="card" label="Credit Card">
        Credit Card
      </ag-selection-button>
      <ag-selection-button value="paypal" label="PayPal">
        PayPal
      </ag-selection-button>
      <ag-selection-button value="bank" label="Bank Transfer">
        Bank Transfer
      </ag-selection-button>
    </ag-selection-button-group>
  `,
};

export const CheckboxGroup: Story = {
  args: {
    type: "checkbox",
    name: "toppings",
    legend: "Select toppings",
  },
  render: (args) => html`
    <ag-selection-button-group
      type=${args.type}
      name=${args.name}
      legend=${args.legend}
      ?legend-hidden=${args.legendHidden}
      theme=${args.theme}
      size=${args.size}
      shape=${args.shape}
      ?disabled=${args.disabled}
      @selection-change=${(e: CustomEvent) => selectionChangeAction(e.detail)}
    >
      <ag-selection-button value="cheese" label="Extra Cheese">
        Extra Cheese
      </ag-selection-button>
      <ag-selection-button value="pepperoni" label="Pepperoni">
        Pepperoni
      </ag-selection-button>
      <ag-selection-button value="mushrooms" label="Mushrooms">
        Mushrooms
      </ag-selection-button>
      <ag-selection-button value="olives" label="Olives">
        Olives
      </ag-selection-button>
    </ag-selection-button-group>
  `,
};

export const AllThemes: Story = {
  args: {
    type: "radio",
    name: "theme-demo",
    legend: "Theme Variants",
  },
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <!-- Default (Primary) -->
      <div>
        <h3 style="margin-bottom: 0.5rem;">Default (Primary)</h3>
        <ag-selection-button-group
          type="radio"
          name="theme-default"
          legend="Default theme"
          legend-hidden
        >
          <ag-selection-button value="a" label="Option A">Option A</ag-selection-button>
          <ag-selection-button value="b" label="Option B">Option B</ag-selection-button>
          <ag-selection-button value="c" label="Option C">Option C</ag-selection-button>
        </ag-selection-button-group>
      </div>

      <!-- Success -->
      <div>
        <h3 style="margin-bottom: 0.5rem;">Success</h3>
        <ag-selection-button-group
          type="radio"
          name="theme-success"
          legend="Success theme"
          legend-hidden
          theme="success"
        >
          <ag-selection-button value="a" label="Option A">Option A</ag-selection-button>
          <ag-selection-button value="b" label="Option B">Option B</ag-selection-button>
          <ag-selection-button value="c" label="Option C">Option C</ag-selection-button>
        </ag-selection-button-group>
      </div>

      <!-- Info -->
      <div>
        <h3 style="margin-bottom: 0.5rem;">Info</h3>
        <ag-selection-button-group
          type="radio"
          name="theme-info"
          legend="Info theme"
          legend-hidden
          theme="info"
        >
          <ag-selection-button value="a" label="Option A">Option A</ag-selection-button>
          <ag-selection-button value="b" label="Option B">Option B</ag-selection-button>
          <ag-selection-button value="c" label="Option C">Option C</ag-selection-button>
        </ag-selection-button-group>
      </div>

      <!-- Warning -->
      <div>
        <h3 style="margin-bottom: 0.5rem;">Warning</h3>
        <ag-selection-button-group
          type="radio"
          name="theme-warning"
          legend="Warning theme"
          legend-hidden
          theme="warning"
        >
          <ag-selection-button value="a" label="Option A">Option A</ag-selection-button>
          <ag-selection-button value="b" label="Option B">Option B</ag-selection-button>
          <ag-selection-button value="c" label="Option C">Option C</ag-selection-button>
        </ag-selection-button-group>
      </div>

      <!-- Error -->
      <div>
        <h3 style="margin-bottom: 0.5rem;">Error</h3>
        <ag-selection-button-group
          type="radio"
          name="theme-error"
          legend="Error theme"
          legend-hidden
          theme="error"
        >
          <ag-selection-button value="a" label="Option A">Option A</ag-selection-button>
          <ag-selection-button value="b" label="Option B">Option B</ag-selection-button>
          <ag-selection-button value="c" label="Option C">Option C</ag-selection-button>
        </ag-selection-button-group>
      </div>

      <!-- Monochrome -->
      <div>
        <h3 style="margin-bottom: 0.5rem;">Monochrome</h3>
        <ag-selection-button-group
          type="radio"
          name="theme-monochrome"
          legend="Monochrome theme"
          legend-hidden
          theme="monochrome"
        >
          <ag-selection-button value="a" label="Option A">Option A</ag-selection-button>
          <ag-selection-button value="b" label="Option B">Option B</ag-selection-button>
          <ag-selection-button value="c" label="Option C">Option C</ag-selection-button>
        </ag-selection-button-group>
      </div>
    </div>
  `,
};

export const AllSizes: Story = {
  args: {
    type: "radio",
    name: "size-demo",
    legend: "Size Variants",
  },
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <!-- Small -->
      <div>
        <h3 style="margin-bottom: 0.5rem;">Small (sm)</h3>
        <ag-selection-button-group
          type="radio"
          name="size-sm"
          legend="Small size"
          legend-hidden
          size="sm"
        >
          <ag-selection-button value="a" label="Option A">Option A</ag-selection-button>
          <ag-selection-button value="b" label="Option B">Option B</ag-selection-button>
          <ag-selection-button value="c" label="Option C">Option C</ag-selection-button>
        </ag-selection-button-group>
      </div>

      <!-- Medium (default) -->
      <div>
        <h3 style="margin-bottom: 0.5rem;">Medium (md) - Default</h3>
        <ag-selection-button-group
          type="radio"
          name="size-md"
          legend="Medium size"
          legend-hidden
          size="md"
        >
          <ag-selection-button value="a" label="Option A">Option A</ag-selection-button>
          <ag-selection-button value="b" label="Option B">Option B</ag-selection-button>
          <ag-selection-button value="c" label="Option C">Option C</ag-selection-button>
        </ag-selection-button-group>
      </div>

      <!-- Large -->
      <div>
        <h3 style="margin-bottom: 0.5rem;">Large (lg)</h3>
        <ag-selection-button-group
          type="radio"
          name="size-lg"
          legend="Large size"
          legend-hidden
          size="lg"
        >
          <ag-selection-button value="a" label="Option A">Option A</ag-selection-button>
          <ag-selection-button value="b" label="Option B">Option B</ag-selection-button>
          <ag-selection-button value="c" label="Option C">Option C</ag-selection-button>
        </ag-selection-button-group>
      </div>
    </div>
  `,
};

export const AllShapes: Story = {
  args: {
    type: "radio",
    name: "shape-demo",
    legend: "Shape Variants",
  },
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <!-- Default (rectangular) -->
      <div>
        <h3 style="margin-bottom: 0.5rem;">Default (rectangular)</h3>
        <ag-selection-button-group
          type="radio"
          name="shape-default"
          legend="Default shape"
          legend-hidden
        >
          <ag-selection-button value="a" label="Option A">Option A</ag-selection-button>
          <ag-selection-button value="b" label="Option B">Option B</ag-selection-button>
          <ag-selection-button value="c" label="Option C">Option C</ag-selection-button>
        </ag-selection-button-group>
      </div>

      <!-- Rounded -->
      <div>
        <h3 style="margin-bottom: 0.5rem;">Rounded</h3>
        <ag-selection-button-group
          type="radio"
          name="shape-rounded"
          legend="Rounded shape"
          legend-hidden
          shape="rounded"
        >
          <ag-selection-button value="a" label="Option A">Option A</ag-selection-button>
          <ag-selection-button value="b" label="Option B">Option B</ag-selection-button>
          <ag-selection-button value="c" label="Option C">Option C</ag-selection-button>
        </ag-selection-button-group>
      </div>

      <!-- Capsule (pill) -->
      <div>
        <h3 style="margin-bottom: 0.5rem;">Capsule (pill)</h3>
        <ag-selection-button-group
          type="radio"
          name="shape-capsule"
          legend="Capsule shape"
          legend-hidden
          shape="capsule"
        >
          <ag-selection-button value="a" label="Option A">Option A</ag-selection-button>
          <ag-selection-button value="b" label="Option B">Option B</ag-selection-button>
          <ag-selection-button value="c" label="Option C">Option C</ag-selection-button>
        </ag-selection-button-group>
      </div>
    </div>
  `,
};

export const Disabled: Story = {
  args: {
    type: "radio",
    name: "disabled-example",
    legend: "Disabled group",
    disabled: true,
  },
  render: (args) => html`
    <ag-selection-button-group
      type=${args.type}
      name=${args.name}
      legend=${args.legend}
      ?disabled=${args.disabled}
    >
      <ag-selection-button value="a" label="Option A">Option A</ag-selection-button>
      <ag-selection-button value="b" label="Option B">Option B</ag-selection-button>
      <ag-selection-button value="c" label="Option C">Option C</ag-selection-button>
    </ag-selection-button-group>
  `,
};

export const HiddenLegend: Story = {
  args: {
    type: "radio",
    name: "hidden-legend",
    legend: "This legend is visually hidden but accessible",
    legendHidden: true,
  },
  render: (args) => html`
    <ag-selection-button-group
      type=${args.type}
      name=${args.name}
      legend=${args.legend}
      ?legend-hidden=${args.legendHidden}
    >
      <ag-selection-button value="a" label="Option A">Option A</ag-selection-button>
      <ag-selection-button value="b" label="Option B">Option B</ag-selection-button>
    </ag-selection-button-group>
  `,
};

export const CombinedVariants: Story = {
  args: {
    type: "radio",
    name: "combined",
    legend: "Combined Variants",
  },
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <!-- Success + Capsule + Small -->
      <div>
        <h3 style="margin-bottom: 0.5rem;">Success + Capsule + Small</h3>
        <ag-selection-button-group
          type="radio"
          name="combined-1"
          legend="Combined variant 1"
          legend-hidden
          theme="success"
          shape="capsule"
          size="sm"
        >
          <ag-selection-button value="a" label="Yes">Yes</ag-selection-button>
          <ag-selection-button value="b" label="No">No</ag-selection-button>
          <ag-selection-button value="c" label="Maybe">Maybe</ag-selection-button>
        </ag-selection-button-group>
      </div>

      <!-- Error + Rounded + Large -->
      <div>
        <h3 style="margin-bottom: 0.5rem;">Error + Rounded + Large</h3>
        <ag-selection-button-group
          type="radio"
          name="combined-2"
          legend="Combined variant 2"
          legend-hidden
          theme="error"
          shape="rounded"
          size="lg"
        >
          <ag-selection-button value="a" label="Delete">Delete</ag-selection-button>
          <ag-selection-button value="b" label="Archive">Archive</ag-selection-button>
          <ag-selection-button value="c" label="Keep">Keep</ag-selection-button>
        </ag-selection-button-group>
      </div>

      <!-- Monochrome + Capsule + Checkbox -->
      <div>
        <h3 style="margin-bottom: 0.5rem;">Monochrome + Capsule + Checkbox</h3>
        <ag-selection-button-group
          type="checkbox"
          name="combined-3"
          legend="Combined variant 3"
          legend-hidden
          theme="monochrome"
          shape="capsule"
        >
          <ag-selection-button value="bold" label="Bold">Bold</ag-selection-button>
          <ag-selection-button value="italic" label="Italic">Italic</ag-selection-button>
          <ag-selection-button value="underline" label="Underline">Underline</ag-selection-button>
        </ag-selection-button-group>
      </div>

      <!-- Info + Default Shape + Large -->
      <div>
        <h3 style="margin-bottom: 0.5rem;">Info + Default Shape + Large</h3>
        <ag-selection-button-group
          type="radio"
          name="combined-4"
          legend="Combined variant 4"
          legend-hidden
          theme="info"
          size="lg"
        >
          <ag-selection-button value="daily" label="Daily">Daily</ag-selection-button>
          <ag-selection-button value="weekly" label="Weekly">Weekly</ag-selection-button>
          <ag-selection-button value="monthly" label="Monthly">Monthly</ag-selection-button>
        </ag-selection-button-group>
      </div>
    </div>
  `,
};

export const RealWorldExample: Story = {
  args: {
    type: "radio",
    name: "plan",
    legend: "Select a plan",
  },
  render: () => html`
    <div style="max-width: 600px;">
      <h2 style="margin-bottom: 1rem;">Choose your subscription</h2>
      <ag-selection-button-group
        type="radio"
        name="subscription"
        legend="Subscription plan"
        legend-hidden
        shape="rounded"
        @selection-change=${(e: CustomEvent) => selectionChangeAction(e.detail)}
      >
        <ag-selection-button value="monthly" label="Monthly billing">
          Monthly - $9.99
        </ag-selection-button>
        <ag-selection-button value="quarterly" label="Quarterly billing">
          Quarterly - $24.99
        </ag-selection-button>
        <ag-selection-button value="annual" label="Annual billing">
          Annual - $79.99
        </ag-selection-button>
      </ag-selection-button-group>

      <div style="margin-top: 2rem;">
        <h3 style="margin-bottom: 0.5rem;">Add-ons (select multiple)</h3>
        <ag-selection-button-group
          type="checkbox"
          name="addons"
          legend="Available add-ons"
          legend-hidden
          theme="success"
          shape="rounded"
          size="sm"
          @selection-change=${(e: CustomEvent) => selectionChangeAction(e.detail)}
        >
          <ag-selection-button value="storage" label="Extra storage">
            Extra Storage +$2
          </ag-selection-button>
          <ag-selection-button value="support" label="Priority support">
            Priority Support +$5
          </ag-selection-button>
          <ag-selection-button value="backup" label="Auto backup">
            Auto Backup +$3
          </ag-selection-button>
        </ag-selection-button-group>
      </div>
    </div>
  `,
};
