import type { Meta, StoryObj } from "@storybook/react";
import { ReactCheckbox } from "agnosticui-core/checkbox/react";

const meta: Meta<typeof ReactCheckbox> = {
  title: "AgnosticUI React/Checkbox",
  component: ReactCheckbox,
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "text",
      description: "Name attribute for the checkbox input",
    },
    value: { control: "text", description: "Value of the checkbox input" },
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
      options: ["default", "primary", "success", "monochrome"],
      description: "Color theme variant",
    },
    labelText: { control: "text", description: "Label text for the checkbox" },
    labelPosition: {
      control: "select",
      options: ["end", "start"],
      description: "Position of label",
    },
  },
  args: {
    name: "example",
    value: "1",
    checked: false,
    indeterminate: false,
    disabled: false,
    size: "medium",
    theme: "primary",
    labelText: "Checkbox Option",
    labelPosition: "end",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <ReactCheckbox {...args} />,
};

export const CheckboxGroup: Story = {
  render: (args) => (
    <fieldset
      style={{
        border: "1px solid #e5e7eb",
        padding: "1rem",
        borderRadius: "0.5rem",
      }}
    >
      <legend style={{ padding: "0 0.5rem", fontWeight: 600 }}>
        Select Features
      </legend>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <ReactCheckbox
          name="features"
          value="dark-mode"
          size={args.size}
          theme={args.theme}
          labelText="Dark Mode"
          checked
        />
        <ReactCheckbox
          name="features"
          value="notifications"
          size={args.size}
          theme={args.theme}
          labelText="Notifications"
        />
        <ReactCheckbox
          name="features"
          value="analytics"
          size={args.size}
          theme={args.theme}
          labelText="Analytics"
          checked
        />
      </div>
    </fieldset>
  ),
};

export const Indeterminate: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      <ReactCheckbox
        name="select-all"
        value="all"
        size={args.size}
        theme={args.theme}
        indeterminate
        labelText="Select All (Indeterminate)"
      />
      <div
        style={{
          paddingLeft: "1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <ReactCheckbox
          name="items"
          value="item1"
          size={args.size}
          theme={args.theme}
          labelText="Item 1"
          checked
        />
        <ReactCheckbox
          name="items"
          value="item2"
          size={args.size}
          theme={args.theme}
          labelText="Item 2"
        />
        <ReactCheckbox
          name="items"
          value="item3"
          size={args.size}
          theme={args.theme}
          labelText="Item 3"
          checked
        />
      </div>
    </div>
  ),
};

export const AllThemes: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <fieldset
        style={{
          border: "1px solid #e5e7eb",
          padding: "1rem",
          borderRadius: "0.5rem",
        }}
      >
        <legend style={{ padding: "0 0.5rem", fontWeight: 600 }}>
          Default Theme (primary)
        </legend>
        <div style={{ display: "flex", gap: "1rem" }}>
          <ReactCheckbox
            name="theme-default"
            value="1"
            size={args.size}
            theme="default"
            labelText="Unchecked"
          />
          <ReactCheckbox
            name="theme-default"
            value="2"
            size={args.size}
            theme="default"
            labelText="Checked"
            checked
          />
          <ReactCheckbox
            name="theme-default"
            value="3"
            size={args.size}
            theme="default"
            labelText="Indeterminate"
            indeterminate
          />
        </div>
      </fieldset>

      <fieldset
        style={{
          border: "1px solid #e5e7eb",
          padding: "1rem",
          borderRadius: "0.5rem",
        }}
      >
        <legend style={{ padding: "0 0.5rem", fontWeight: 600 }}>
          Success Theme (Green)
        </legend>
        <div style={{ display: "flex", gap: "1rem" }}>
          <ReactCheckbox
            name="theme-success"
            value="1"
            size={args.size}
            theme="success"
            labelText="Unchecked"
          />
          <ReactCheckbox
            name="theme-success"
            value="2"
            size={args.size}
            theme="success"
            labelText="Checked"
            checked
          />
          <ReactCheckbox
            name="theme-success"
            value="3"
            size={args.size}
            theme="success"
            labelText="Indeterminate"
            indeterminate
          />
        </div>
      </fieldset>

      <fieldset
        style={{
          border: "1px solid #e5e7eb",
          padding: "1rem",
          borderRadius: "0.5rem",
        }}
      >
        <legend style={{ padding: "0 0.5rem", fontWeight: 600 }}>
          Primary Theme (Blue)
        </legend>
        <div style={{ display: "flex", gap: "1rem" }}>
          <ReactCheckbox
            name="theme-primary"
            value="1"
            size={args.size}
            theme="primary"
            labelText="Unchecked"
          />
          <ReactCheckbox
            name="theme-primary"
            value="2"
            size={args.size}
            theme="primary"
            labelText="Checked"
            checked
          />
          <ReactCheckbox
            name="theme-primary"
            value="3"
            size={args.size}
            theme="primary"
            labelText="Indeterminate"
            indeterminate
          />
        </div>
      </fieldset>

      <fieldset
        style={{
          border: "1px solid #e5e7eb",
          padding: "1rem",
          borderRadius: "0.5rem",
        }}
      >
        <legend style={{ padding: "0 0.5rem", fontWeight: 600 }}>
          Monochrome Theme (Black/White)
        </legend>
        <div style={{ display: "flex", gap: "1rem" }}>
          <ReactCheckbox
            name="theme-mono"
            value="1"
            size={args.size}
            theme="monochrome"
            labelText="Unchecked"
          />
          <ReactCheckbox
            name="theme-mono"
            value="2"
            size={args.size}
            theme="monochrome"
            labelText="Checked"
            checked
          />
          <ReactCheckbox
            name="theme-mono"
            value="3"
            size={args.size}
            theme="monochrome"
            labelText="Indeterminate"
            indeterminate
          />
        </div>
      </fieldset>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <div>
        <h3 style={{ marginBottom: "0.5rem" }}>Small</h3>
        <ReactCheckbox
          name="size-small"
          value="1"
          size="small"
          labelText="Small checkbox"
          checked
        />
      </div>
      <div>
        <h3 style={{ marginBottom: "0.5rem" }}>Medium (Default)</h3>
        <ReactCheckbox
          name="size-medium"
          value="1"
          size="medium"
          labelText="Medium checkbox"
          checked
        />
      </div>
      <div>
        <h3 style={{ marginBottom: "0.5rem" }}>Large</h3>
        <ReactCheckbox
          name="size-large"
          value="1"
          size="large"
          labelText="Large checkbox"
          checked
        />
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      <ReactCheckbox
        name="disabled"
        value="1"
        size={args.size}
        theme={args.theme}
        disabled
        labelText="Disabled Unchecked"
      />
      <ReactCheckbox
        name="disabled"
        value="2"
        size={args.size}
        theme={args.theme}
        disabled
        checked
        labelText="Disabled Checked"
      />
      <ReactCheckbox
        name="disabled"
        value="3"
        size={args.size}
        theme={args.theme}
        disabled
        indeterminate
        labelText="Disabled Indeterminate"
      />
    </div>
  ),
};

export const EventHandling: Story = {
  args: {
    labelText: "Checkbox to test events",
  },
  render: (args) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "1rem",
          gap: "1.5rem",
        }}
      >
        <div>
          <h3 style={{ margin: "0 0 0.5rem 0" }}>Event Handling in React</h3>
          <p style={{ margin: 0, color: "#6b7280", fontSize: "0.875rem" }}>
            React wrapper uses onChange prop (mapped from change event)
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            width: "100%",
          }}
        >
          {/* Pattern 1: onChange prop */}
          <div
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              padding: "1rem",
            }}
          >
            <p style={{ margin: "0 0 0.75rem 0", fontWeight: 600 }}>
              React Event Pattern
            </p>
            <ReactCheckbox
              name="test1"
              value="option1"
              labelText={args.labelText}
              size={args.size}
              theme="default"
              onChange={(e) => {
                console.log("React onChange:", e.detail);
              }}
            />
            <p
              style={{
                fontSize: "0.75rem",
                color: "#6b7280",
                margin: "0.5rem 0 0 0",
              }}
            >
              Uses onChange prop (automatically mapped by @lit/react)
            </p>
          </div>

          {/* Pattern 2: With state management */}
          <div
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              padding: "1rem",
            }}
          >
            <p style={{ margin: "0 0 0.75rem 0", fontWeight: 600 }}>
              With React State
            </p>
            <ReactCheckbox
              name="test2"
              value="option2"
              labelText="Controlled Checkbox"
              size={args.size}
              theme="primary"
              checked={false}
              onChange={(e) => {
                console.log("State updated:", e.detail);
              }}
            />
            <p
              style={{
                fontSize: "0.75rem",
                color: "#6b7280",
                margin: "0.5rem 0 0 0",
              }}
            >
              Event detail includes: checked, value, name, indeterminate
            </p>
          </div>

          {/* Pattern 3: Native onClick also available */}
          <div
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              padding: "1rem",
            }}
          >
            <p style={{ margin: "0 0 0.75rem 0", fontWeight: 600 }}>
              Native Events (onClick)
            </p>
            <ReactCheckbox
              name="test3"
              value="option3"
              labelText="With onClick"
              size={args.size}
              theme="monochrome"
              onClick={(e) => {
                console.log("Native click event:", e);
              }}
              onChange={(e) => {
                console.log("Change event:", e.detail);
              }}
            />
            <p
              style={{
                fontSize: "0.75rem",
                color: "#6b7280",
                margin: "0.5rem 0 0 0",
              }}
            >
              Both native (onClick) and custom (onChange) events work
            </p>
          </div>

          {/* Pattern 4: Indeterminate state */}
          <div
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              padding: "1rem",
            }}
          >
            <p style={{ margin: "0 0 0.75rem 0", fontWeight: 600 }}>
              Indeterminate State Handling
            </p>
            <ReactCheckbox
              name="test4"
              value="option4"
              labelText="Indeterminate checkbox"
              size={args.size}
              theme="default"
              indeterminate={true}
              onChange={(e) => {
                console.log("Indeterminate cleared on click:", e.detail);
              }}
            />
            <p
              style={{
                fontSize: "0.75rem",
                color: "#6b7280",
                margin: "0.5rem 0 0 0",
              }}
            >
              Clicking an indeterminate checkbox clears the indeterminate state
            </p>
          </div>
        </div>

        <p
          style={{
            fontSize: "0.875rem",
            color: "#6b7280",
            margin: 0,
            padding: "1rem",
            background: "#f9fafb",
            borderRadius: "8px",
            width: "100%",
          }}
        >
          💡 Check the Actions panel below and browser console for event logs
        </p>
      </div>
    );
  },
};
