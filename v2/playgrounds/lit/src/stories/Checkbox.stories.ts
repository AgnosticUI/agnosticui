import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "agnosticui-core/checkbox";
import type { Checkbox } from "agnosticui-core/checkbox";

const meta: Meta<Checkbox> = {
  title: "AgnosticUI Lit/Checkbox",
  component: "ag-checkbox",
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "text",
      description: "Name attribute for the checkbox input",
    },
    value: {
      control: "text",
      description: "Value of the checkbox input",
    },
    checked: {
      control: "boolean",
      description: "Whether the checkbox is checked",
    },
    indeterminate: {
      control: "boolean",
      description: "Whether the checkbox is in indeterminate state",
    },
    disabled: {
      control: "boolean",
      description: "Whether the checkbox is disabled",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "Size of the checkbox",
    },
    theme: {
      control: "select",
      options: ["default", "primary", "monochrome"],
      description: "Color theme variant",
    },
    labelText: {
      control: "text",
      description: "Label text for the checkbox",
    },
    labelPosition: {
      control: "select",
      options: ["end", "start"],
      description: "Position of label relative to checkbox",
    },
  },
  args: {
    name: "example",
    value: "1",
    checked: false,
    indeterminate: false,
    disabled: false,
    size: "medium",
    theme: "default",
    labelText: "Checkbox Option",
    labelPosition: "end",
  },
};

export default meta;
type Story = StoryObj<Checkbox>;

export const Default: Story = {
  render: (args) => html`
    <ag-checkbox
      .name=${args.name}
      .value=${args.value}
      .checked=${args.checked}
      .indeterminate=${args.indeterminate}
      .disabled=${args.disabled}
      .size=${args.size}
      .theme=${args.theme}
      .labelPosition=${args.labelPosition}
      >${args.labelText}</ag-checkbox
    >
  `,
};

export const CheckboxGroup: Story = {
  args: {
    name: "features",
  },
  render: (args) => html`
    <fieldset
      style="border: 1px solid #e5e7eb; padding: 1rem; border-radius: 0.5rem;"
    >
      <legend style="padding: 0 0.5rem; font-weight: 600;">
        Select Features
      </legend>
      <div style="display: flex; flex-direction: column; gap: 0.75rem;">
        <ag-checkbox
          name="features"
          value="dark-mode"
          .size=${args.size}
          .theme=${args.theme}
          .checked=${true}
          >Dark Mode</ag-checkbox
        >
        <ag-checkbox
          name="features"
          value="notifications"
          .size=${args.size}
          .theme=${args.theme}
          >Notifications</ag-checkbox
        >
        <ag-checkbox
          name="features"
          value="analytics"
          .size=${args.size}
          .theme=${args.theme}
          .checked=${true}
          >Analytics</ag-checkbox
        >
      </div>
    </fieldset>
  `,
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
  },
  render: (args) => html`
    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
      <ag-checkbox
        name="select-all"
        value="all"
        .size=${args.size}
        .theme=${args.theme}
        .indeterminate=${true}
        >Select All (Indeterminate)</ag-checkbox
      >
      <div
        style="padding-left: 1.5rem; display: flex; flex-direction: column; gap: 0.5rem;"
      >
        <ag-checkbox
          name="items"
          value="item1"
          .size=${args.size}
          .theme=${args.theme}
          .checked=${true}
          >Item 1</ag-checkbox
        >
        <ag-checkbox
          name="items"
          value="item2"
          .size=${args.size}
          .theme=${args.theme}
          >Item 2</ag-checkbox
        >
        <ag-checkbox
          name="items"
          value="item3"
          .size=${args.size}
          .theme=${args.theme}
          .checked=${true}
          >Item 3</ag-checkbox
        >
      </div>
    </div>
  `,
};

export const SmallSize: Story = {
  args: {
    size: "small",
    name: "small-example",
  },
  render: (args) => html`
    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
      <ag-checkbox
        name="small"
        value="1"
        .size=${args.size}
        .theme=${args.theme}
        >Small Checkbox 1</ag-checkbox
      >
      <ag-checkbox
        name="small"
        value="2"
        .size=${args.size}
        .theme=${args.theme}
        .checked=${true}
        >Small Checkbox 2</ag-checkbox
      >
    </div>
  `,
};

export const LargeSize: Story = {
  args: {
    size: "large",
    name: "large-example",
  },
  render: (args) => html`
    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
      <ag-checkbox
        name="large"
        value="1"
        .size=${args.size}
        .theme=${args.theme}
        >Large Checkbox 1</ag-checkbox
      >
      <ag-checkbox
        name="large"
        value="2"
        .size=${args.size}
        .theme=${args.theme}
        .checked=${true}
        >Large Checkbox 2</ag-checkbox
      >
    </div>
  `,
};

export const PrimaryTheme: Story = {
  args: {
    theme: "primary",
    name: "primary-example",
  },
  render: (args) => html`
    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
      <ag-checkbox
        name="primary"
        value="1"
        .size=${args.size}
        .theme=${args.theme}
        >Primary Option 1</ag-checkbox
      >
      <ag-checkbox
        name="primary"
        value="2"
        .size=${args.size}
        .theme=${args.theme}
        .checked=${true}
        >Primary Option 2</ag-checkbox
      >
    </div>
  `,
};

export const MonochromeTheme: Story = {
  args: {
    theme: "monochrome",
    name: "mono-example",
  },
  render: (args) => html`
    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
      <ag-checkbox name="mono" value="1" .size=${args.size} .theme=${args.theme}
        >Monochrome Option 1</ag-checkbox
      >
      <ag-checkbox
        name="mono"
        value="2"
        .size=${args.size}
        .theme=${args.theme}
        .checked=${true}
        >Monochrome Option 2</ag-checkbox
      >
    </div>
  `,
};

export const Disabled: Story = {
  args: {
    disabled: true,
    name: "disabled-example",
  },
  render: (args) => html`
    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
      <ag-checkbox
        name="disabled"
        value="1"
        .size=${args.size}
        .theme=${args.theme}
        .disabled=${true}
        >Disabled Unchecked</ag-checkbox
      >
      <ag-checkbox
        name="disabled"
        value="2"
        .size=${args.size}
        .theme=${args.theme}
        .disabled=${true}
        .checked=${true}
        >Disabled Checked</ag-checkbox
      >
      <ag-checkbox
        name="disabled"
        value="3"
        .size=${args.size}
        .theme=${args.theme}
        .disabled=${true}
        .indeterminate=${true}
        >Disabled Indeterminate</ag-checkbox
      >
    </div>
  `,
};

export const LabelStart: Story = {
  args: {
    labelPosition: "start",
    name: "label-start",
  },
  render: (args) => html`
    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
      <ag-checkbox
        name="label-start"
        value="1"
        .size=${args.size}
        .theme=${args.theme}
        .labelPosition=${args.labelPosition}
        >Label on left</ag-checkbox
      >
      <ag-checkbox
        name="label-start"
        value="2"
        .size=${args.size}
        .theme=${args.theme}
        .labelPosition=${args.labelPosition}
        .checked=${true}
        >Label on left (checked)</ag-checkbox
      >
    </div>
  `,
};

export const AllThemes: Story = {
  args: {
    name: "all-themes",
  },
  render: (args) => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
      <fieldset
        style="border: 1px solid #e5e7eb; padding: 1rem; border-radius: 0.5rem;"
      >
        <legend style="padding: 0 0.5rem; font-weight: 600;">
          Default Theme (Green)
        </legend>
        <div style="display: flex; gap: 1rem;">
          <ag-checkbox
            name="theme-default"
            value="1"
            .size=${args.size}
            theme="default"
            >Unchecked</ag-checkbox
          >
          <ag-checkbox
            name="theme-default"
            value="2"
            .size=${args.size}
            theme="default"
            labelText="Checked"
            .checked=${true}
          ></ag-checkbox>
          <ag-checkbox
            name="theme-default"
            value="3"
            .size=${args.size}
            theme="default"
            labelText="Indeterminate"
            .indeterminate=${true}
          ></ag-checkbox>
        </div>
      </fieldset>

      <fieldset
        style="border: 1px solid #e5e7eb; padding: 1rem; border-radius: 0.5rem;"
      >
        <legend style="padding: 0 0.5rem; font-weight: 600;">
          Primary Theme (Blue)
        </legend>
        <div style="display: flex; gap: 1rem;">
          <ag-checkbox
            name="theme-primary"
            value="1"
            .size=${args.size}
            theme="primary"
            >Unchecked</ag-checkbox
          >
          <ag-checkbox
            name="theme-primary"
            value="2"
            .size=${args.size}
            theme="primary"
            labelText="Checked"
            .checked=${true}
          ></ag-checkbox>
          <ag-checkbox
            name="theme-primary"
            value="3"
            .size=${args.size}
            theme="primary"
            labelText="Indeterminate"
            .indeterminate=${true}
          ></ag-checkbox>
        </div>
      </fieldset>

      <fieldset
        style="border: 1px solid #e5e7eb; padding: 1rem; border-radius: 0.5rem;"
      >
        <legend style="padding: 0 0.5rem; font-weight: 600;">
          Monochrome Theme (Black/White)
        </legend>
        <div style="display: flex; gap: 1rem;">
          <ag-checkbox
            name="theme-mono"
            value="1"
            .size=${args.size}
            theme="monochrome"
            >Unchecked</ag-checkbox
          >
          <ag-checkbox
            name="theme-mono"
            value="2"
            .size=${args.size}
            theme="monochrome"
            labelText="Checked"
            .checked=${true}
          ></ag-checkbox>
          <ag-checkbox
            name="theme-mono"
            value="3"
            .size=${args.size}
            theme="monochrome"
            labelText="Indeterminate"
            .indeterminate=${true}
          ></ag-checkbox>
        </div>
      </fieldset>
    </div>
  `,
};

export const AllSizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
      <div>
        <h3 style="margin-bottom: 0.5rem;">Small</h3>
        <ag-checkbox
          name="size-small"
          value="1"
          size="small"
          labelText="Small checkbox"
          .checked=${true}
        ></ag-checkbox>
      </div>
      <div>
        <h3 style="margin-bottom: 0.5rem;">Medium (Default)</h3>
        <ag-checkbox
          name="size-medium"
          value="1"
          size="medium"
          labelText="Medium checkbox"
          .checked=${true}
        ></ag-checkbox>
      </div>
      <div>
        <h3 style="margin-bottom: 0.5rem;">Large</h3>
        <ag-checkbox
          name="size-large"
          value="1"
          size="large"
          labelText="Large checkbox"
          .checked=${true}
        ></ag-checkbox>
      </div>
    </div>
  `,
};

export const CheckmarkAnimation: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
      <p style="margin-bottom: 0.5rem;">
        Click to see the checkmark animation:
      </p>
      <ag-checkbox name="animation" value="1"
        >Click me to see animation</ag-checkbox
      >
    </div>
  `,
};
