import type { Meta, StoryObj } from "@storybook/react";
import { action } from "storybook/actions";
import { ReactSelectionCardGroup } from "agnosticui-core/selection-card-group/react";
import { ReactSelectionCard } from "agnosticui-core/selection-card/react";

const selectionChangeAction = action("selection-change");

const meta: Meta<typeof ReactSelectionCardGroup> = {
  title: "AgnosticUI React/SelectionCardGroup",
  component: ReactSelectionCardGroup,
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
      description: "Theme variant for cards",
    },
    disabled: {
      control: "boolean",
      description: "Disable all cards in the group",
    },
  },
  args: {
    type: "radio",
    name: "interests",
    legend: "Select your interests",
    legendHidden: false,
    theme: "",
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const RadioGroup: Story = {
  render: (args) => (
    <ReactSelectionCardGroup
      type={args.type}
      name={args.name}
      legend={args.legend}
      legendHidden={args.legendHidden}
      theme={args.theme}
      disabled={args.disabled}
      onSelectionChange={(e) => selectionChangeAction(e.detail)}
    >
      <ReactSelectionCard value="tech" label="Technology">
        <div style={{ textAlign: "center", padding: "1rem" }}>
          <div style={{ fontSize: "2rem" }}>💻</div>
          <div style={{ fontWeight: 600 }}>Technology</div>
        </div>
      </ReactSelectionCard>
      <ReactSelectionCard value="art" label="Art & Design">
        <div style={{ textAlign: "center", padding: "1rem" }}>
          <div style={{ fontSize: "2rem" }}>🎨</div>
          <div style={{ fontWeight: 600 }}>Art & Design</div>
        </div>
      </ReactSelectionCard>
      <ReactSelectionCard value="music" label="Music">
        <div style={{ textAlign: "center", padding: "1rem" }}>
          <div style={{ fontSize: "2rem" }}>🎵</div>
          <div style={{ fontWeight: 600 }}>Music</div>
        </div>
      </ReactSelectionCard>
    </ReactSelectionCardGroup>
  ),
};

export const CheckboxGroup: Story = {
  args: {
    type: "checkbox",
    name: "features",
    legend: "Select features to enable",
  },
  render: (args) => (
    <ReactSelectionCardGroup
      type={args.type}
      name={args.name}
      legend={args.legend}
      legendHidden={args.legendHidden}
      theme={args.theme}
      disabled={args.disabled}
      onSelectionChange={(e) => selectionChangeAction(e.detail)}
    >
      <ReactSelectionCard value="analytics" label="Analytics">
        <div style={{ textAlign: "center", padding: "1rem" }}>
          <div style={{ fontSize: "2rem" }}>📊</div>
          <div style={{ fontWeight: 600 }}>Analytics</div>
          <div style={{ fontSize: "0.875rem", color: "#666" }}>Track user behavior</div>
        </div>
      </ReactSelectionCard>
      <ReactSelectionCard value="notifications" label="Notifications">
        <div style={{ textAlign: "center", padding: "1rem" }}>
          <div style={{ fontSize: "2rem" }}>🔔</div>
          <div style={{ fontWeight: 600 }}>Notifications</div>
          <div style={{ fontSize: "0.875rem", color: "#666" }}>Push & email alerts</div>
        </div>
      </ReactSelectionCard>
      <ReactSelectionCard value="export" label="Export">
        <div style={{ textAlign: "center", padding: "1rem" }}>
          <div style={{ fontSize: "2rem" }}>📤</div>
          <div style={{ fontWeight: 600 }}>Export</div>
          <div style={{ fontSize: "0.875rem", color: "#666" }}>Download your data</div>
        </div>
      </ReactSelectionCard>
    </ReactSelectionCardGroup>
  ),
};

export const PricingTiers: Story = {
  args: {
    type: "radio",
    name: "pricing",
    legend: "Choose your plan",
  },
  render: (args) => (
    <ReactSelectionCardGroup
      type={args.type}
      name={args.name}
      legend={args.legend}
      onSelectionChange={(e) => selectionChangeAction(e.detail)}
    >
      <ReactSelectionCard value="free" label="Free Plan">
        <div style={{ padding: "1.5rem", textAlign: "center" }}>
          <div style={{ fontSize: "1.5rem", fontWeight: 700 }}>Free</div>
          <div style={{ fontSize: "2rem", fontWeight: 700, margin: "0.5rem 0" }}>$0</div>
          <div style={{ color: "#666", fontSize: "0.875rem" }}>Perfect for getting started</div>
        </div>
      </ReactSelectionCard>
      <ReactSelectionCard value="pro" label="Pro Plan">
        <div style={{ padding: "1.5rem", textAlign: "center" }}>
          <div style={{ fontSize: "1.5rem", fontWeight: 700 }}>Pro</div>
          <div style={{ fontSize: "2rem", fontWeight: 700, margin: "0.5rem 0" }}>$29</div>
          <div style={{ color: "#666", fontSize: "0.875rem" }}>For growing teams</div>
        </div>
      </ReactSelectionCard>
      <ReactSelectionCard value="enterprise" label="Enterprise Plan">
        <div style={{ padding: "1.5rem", textAlign: "center" }}>
          <div style={{ fontSize: "1.5rem", fontWeight: 700 }}>Enterprise</div>
          <div style={{ fontSize: "2rem", fontWeight: 700, margin: "0.5rem 0" }}>Custom</div>
          <div style={{ color: "#666", fontSize: "0.875rem" }}>For large organizations</div>
        </div>
      </ReactSelectionCard>
    </ReactSelectionCardGroup>
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
    <ReactSelectionCardGroup
      type={args.type}
      name={args.name}
      legend={args.legend}
      disabled={args.disabled}
    >
      <ReactSelectionCard value="a" label="Option A">
        <div style={{ padding: "1rem", textAlign: "center" }}>Option A</div>
      </ReactSelectionCard>
      <ReactSelectionCard value="b" label="Option B">
        <div style={{ padding: "1rem", textAlign: "center" }}>Option B</div>
      </ReactSelectionCard>
    </ReactSelectionCardGroup>
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
    <ReactSelectionCardGroup
      type={args.type}
      name={args.name}
      legend={args.legend}
      legendHidden={args.legendHidden}
    >
      <ReactSelectionCard value="a" label="Option A">
        <div style={{ padding: "1rem", textAlign: "center" }}>Option A</div>
      </ReactSelectionCard>
      <ReactSelectionCard value="b" label="Option B">
        <div style={{ padding: "1rem", textAlign: "center" }}>Option B</div>
      </ReactSelectionCard>
    </ReactSelectionCardGroup>
  ),
};

export const ThemeVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      {/* Default (Primary/Blue) */}
      <div>
        <h3 style={{ marginBottom: "0.5rem" }}>Default (Primary)</h3>
        <ReactSelectionCardGroup
          type="radio"
          name="theme-default"
          legend="Default theme"
          legendHidden
          onSelectionChange={(e) => selectionChangeAction(e.detail)}
        >
          <ReactSelectionCard value="a" label="Option A">
            <div style={{ padding: "1rem", textAlign: "center" }}>Option A</div>
          </ReactSelectionCard>
          <ReactSelectionCard value="b" label="Option B">
            <div style={{ padding: "1rem", textAlign: "center" }}>Option B</div>
          </ReactSelectionCard>
        </ReactSelectionCardGroup>
      </div>

      {/* Success */}
      <div>
        <h3 style={{ marginBottom: "0.5rem" }}>Success</h3>
        <ReactSelectionCardGroup
          type="radio"
          name="theme-success"
          legend="Success theme"
          legendHidden
          theme="success"
          onSelectionChange={(e) => selectionChangeAction(e.detail)}
        >
          <ReactSelectionCard value="a" label="Option A">
            <div style={{ padding: "1rem", textAlign: "center" }}>Option A</div>
          </ReactSelectionCard>
          <ReactSelectionCard value="b" label="Option B">
            <div style={{ padding: "1rem", textAlign: "center" }}>Option B</div>
          </ReactSelectionCard>
        </ReactSelectionCardGroup>
      </div>

      {/* Info */}
      <div>
        <h3 style={{ marginBottom: "0.5rem" }}>Info</h3>
        <ReactSelectionCardGroup
          type="radio"
          name="theme-info"
          legend="Info theme"
          legendHidden
          theme="info"
          onSelectionChange={(e) => selectionChangeAction(e.detail)}
        >
          <ReactSelectionCard value="a" label="Option A">
            <div style={{ padding: "1rem", textAlign: "center" }}>Option A</div>
          </ReactSelectionCard>
          <ReactSelectionCard value="b" label="Option B">
            <div style={{ padding: "1rem", textAlign: "center" }}>Option B</div>
          </ReactSelectionCard>
        </ReactSelectionCardGroup>
      </div>

      {/* Warning */}
      <div>
        <h3 style={{ marginBottom: "0.5rem" }}>Warning</h3>
        <ReactSelectionCardGroup
          type="radio"
          name="theme-warning"
          legend="Warning theme"
          legendHidden
          theme="warning"
          onSelectionChange={(e) => selectionChangeAction(e.detail)}
        >
          <ReactSelectionCard value="a" label="Option A">
            <div style={{ padding: "1rem", textAlign: "center" }}>Option A</div>
          </ReactSelectionCard>
          <ReactSelectionCard value="b" label="Option B">
            <div style={{ padding: "1rem", textAlign: "center" }}>Option B</div>
          </ReactSelectionCard>
        </ReactSelectionCardGroup>
      </div>

      {/* Error */}
      <div>
        <h3 style={{ marginBottom: "0.5rem" }}>Error</h3>
        <ReactSelectionCardGroup
          type="radio"
          name="theme-error"
          legend="Error theme"
          legendHidden
          theme="error"
          onSelectionChange={(e) => selectionChangeAction(e.detail)}
        >
          <ReactSelectionCard value="a" label="Option A">
            <div style={{ padding: "1rem", textAlign: "center" }}>Option A</div>
          </ReactSelectionCard>
          <ReactSelectionCard value="b" label="Option B">
            <div style={{ padding: "1rem", textAlign: "center" }}>Option B</div>
          </ReactSelectionCard>
        </ReactSelectionCardGroup>
      </div>

      {/* Monochrome */}
      <div>
        <h3 style={{ marginBottom: "0.5rem" }}>Monochrome</h3>
        <ReactSelectionCardGroup
          type="radio"
          name="theme-monochrome"
          legend="Monochrome theme"
          legendHidden
          theme="monochrome"
          onSelectionChange={(e) => selectionChangeAction(e.detail)}
        >
          <ReactSelectionCard value="a" label="Option A">
            <div style={{ padding: "1rem", textAlign: "center" }}>Option A</div>
          </ReactSelectionCard>
          <ReactSelectionCard value="b" label="Option B">
            <div style={{ padding: "1rem", textAlign: "center" }}>Option B</div>
          </ReactSelectionCard>
        </ReactSelectionCardGroup>
      </div>
    </div>
  ),
};
