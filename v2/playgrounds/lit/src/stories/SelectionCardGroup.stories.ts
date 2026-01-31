import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { action } from "storybook/actions";
import "agnosticui-core/selection-card-group";
import "agnosticui-core/selection-card";
import type { AgSelectionCardGroup } from "agnosticui-core/selection-card-group";

const selectionChangeAction = action("selection-change");

const meta: Meta<AgSelectionCardGroup> = {
  title: "AgnosticUI Lit/SelectionCardGroup",
  component: "ag-selection-card-group",
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
type Story = StoryObj<AgSelectionCardGroup>;

export const RadioGroup: Story = {
  render: (args) => html`
    <ag-selection-card-group
      type=${args.type}
      name=${args.name}
      legend=${args.legend}
      ?legend-hidden=${args.legendHidden}
      ?disabled=${args.disabled}
      @selection-change=${(e: CustomEvent) => selectionChangeAction(e.detail)}
    >
      <ag-selection-card value="tech" label="Technology">
        <div style="text-align: center; padding: 1rem;">
          <div style="font-size: 2rem;">💻</div>
          <div style="font-weight: 600;">Technology</div>
        </div>
      </ag-selection-card>
      <ag-selection-card value="art" label="Art & Design">
        <div style="text-align: center; padding: 1rem;">
          <div style="font-size: 2rem;">🎨</div>
          <div style="font-weight: 600;">Art & Design</div>
        </div>
      </ag-selection-card>
      <ag-selection-card value="music" label="Music">
        <div style="text-align: center; padding: 1rem;">
          <div style="font-size: 2rem;">🎵</div>
          <div style="font-weight: 600;">Music</div>
        </div>
      </ag-selection-card>
    </ag-selection-card-group>
  `,
};

export const CheckboxGroup: Story = {
  args: {
    type: "checkbox",
    name: "features",
    legend: "Select features to enable",
  },
  render: (args) => html`
    <ag-selection-card-group
      type=${args.type}
      name=${args.name}
      legend=${args.legend}
      ?legend-hidden=${args.legendHidden}
      ?disabled=${args.disabled}
      @selection-change=${(e: CustomEvent) => selectionChangeAction(e.detail)}
    >
      <ag-selection-card value="analytics" label="Analytics">
        <div style="text-align: center; padding: 1rem;">
          <div style="font-size: 2rem;">📊</div>
          <div style="font-weight: 600;">Analytics</div>
          <div style="font-size: 0.875rem; color: #666;">Track user behavior</div>
        </div>
      </ag-selection-card>
      <ag-selection-card value="notifications" label="Notifications">
        <div style="text-align: center; padding: 1rem;">
          <div style="font-size: 2rem;">🔔</div>
          <div style="font-weight: 600;">Notifications</div>
          <div style="font-size: 0.875rem; color: #666;">Push & email alerts</div>
        </div>
      </ag-selection-card>
      <ag-selection-card value="export" label="Export">
        <div style="text-align: center; padding: 1rem;">
          <div style="font-size: 2rem;">📤</div>
          <div style="font-weight: 600;">Export</div>
          <div style="font-size: 0.875rem; color: #666;">Download your data</div>
        </div>
      </ag-selection-card>
    </ag-selection-card-group>
  `,
};

export const PricingTiers: Story = {
  args: {
    type: "radio",
    name: "pricing",
    legend: "Choose your plan",
  },
  render: (args) => html`
    <ag-selection-card-group
      type=${args.type}
      name=${args.name}
      legend=${args.legend}
      @selection-change=${(e: CustomEvent) => selectionChangeAction(e.detail)}
    >
      <ag-selection-card value="free" label="Free Plan">
        <div style="padding: 1rem; text-align: center;">
          <div style="font-size: 1.5rem; font-weight: 700;">Free</div>
          <div style="font-size: 2rem; font-weight: 700; margin: 0.5rem 0;">$0</div>
          <div style="color: #666; font-size: 0.875rem;">Perfect for getting started</div>
        </div>
      </ag-selection-card>
      <ag-selection-card value="pro" label="Pro Plan">
        <div style="padding: 1rem; text-align: center;">
          <div style="font-size: 1.5rem; font-weight: 700;">Pro</div>
          <div style="font-size: 2rem; font-weight: 700; margin: 0.5rem 0;">$29</div>
          <div style="color: #666; font-size: 0.875rem;">For growing teams</div>
        </div>
      </ag-selection-card>
      <ag-selection-card value="premium" label="Premium Plan">
        <div style="padding: 1rem; text-align: center;">
          <div style="font-size: 1.5rem; font-weight: 700;">Premium</div>
          <div style="font-size: 1.5rem; font-weight: 700; margin: 0.5rem 0;">Custom</div>
          <div style="color: #666; font-size: 0.875rem;">For large organizations</div>
        </div>
      </ag-selection-card>
    </ag-selection-card-group>
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
    <ag-selection-card-group
      type=${args.type}
      name=${args.name}
      legend=${args.legend}
      ?disabled=${args.disabled}
    >
      <ag-selection-card value="a" label="Option A">
        <div style="padding: 1rem; text-align: center;">Option A</div>
      </ag-selection-card>
      <ag-selection-card value="b" label="Option B">
        <div style="padding: 1rem; text-align: center;">Option B</div>
      </ag-selection-card>
    </ag-selection-card-group>
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
    <ag-selection-card-group
      type=${args.type}
      name=${args.name}
      legend=${args.legend}
      ?legend-hidden=${args.legendHidden}
    >
      <ag-selection-card value="a" label="Option A">
        <div style="padding: 1rem; text-align: center;">Option A</div>
      </ag-selection-card>
      <ag-selection-card value="b" label="Option B">
        <div style="padding: 1rem; text-align: center;">Option B</div>
      </ag-selection-card>
    </ag-selection-card-group>
  `,
};

export const ThemeVariants: Story = {
  args: {
    type: "radio",
    name: "theme-variants",
    legend: "Theme Variants",
  },
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <!-- Default (Primary/Blue) -->
      <div>
        <h3 style="margin-bottom: 0.5rem;">Default (Primary)</h3>
        <ag-selection-card-group
          type="radio"
          name="theme-default"
          legend="Default theme"
          legend-hidden
        >
          <ag-selection-card value="a" label="Option A">
            <div style="padding: 1rem; text-align: center;">Option A</div>
          </ag-selection-card>
          <ag-selection-card value="b" label="Option B">
            <div style="padding: 1rem; text-align: center;">Option B</div>
          </ag-selection-card>
        </ag-selection-card-group>
      </div>

      <!-- Success -->
      <div>
        <h3 style="margin-bottom: 0.5rem;">Success</h3>
        <ag-selection-card-group
          type="radio"
          name="theme-success"
          legend="Success theme"
          legend-hidden
          theme="success"
        >
          <ag-selection-card value="a" label="Option A">
            <div style="padding: 1rem; text-align: center;">Option A</div>
          </ag-selection-card>
          <ag-selection-card value="b" label="Option B">
            <div style="padding: 1rem; text-align: center;">Option B</div>
          </ag-selection-card>
        </ag-selection-card-group>
      </div>

      <!-- Info -->
      <div>
        <h3 style="margin-bottom: 0.5rem;">Info</h3>
        <ag-selection-card-group
          type="radio"
          name="theme-info"
          legend="Info theme"
          legend-hidden
          theme="info"
        >
          <ag-selection-card value="a" label="Option A">
            <div style="padding: 1rem; text-align: center;">Option A</div>
          </ag-selection-card>
          <ag-selection-card value="b" label="Option B">
            <div style="padding: 1rem; text-align: center;">Option B</div>
          </ag-selection-card>
        </ag-selection-card-group>
      </div>

      <!-- Warning -->
      <div>
        <h3 style="margin-bottom: 0.5rem;">Warning</h3>
        <ag-selection-card-group
          type="radio"
          name="theme-warning"
          legend="Warning theme"
          legend-hidden
          theme="warning"
        >
          <ag-selection-card value="a" label="Option A">
            <div style="padding: 1rem; text-align: center;">Option A</div>
          </ag-selection-card>
          <ag-selection-card value="b" label="Option B">
            <div style="padding: 1rem; text-align: center;">Option B</div>
          </ag-selection-card>
        </ag-selection-card-group>
      </div>

      <!-- Error -->
      <div>
        <h3 style="margin-bottom: 0.5rem;">Error</h3>
        <ag-selection-card-group
          type="radio"
          name="theme-error"
          legend="Error theme"
          legend-hidden
          theme="error"
        >
          <ag-selection-card value="a" label="Option A">
            <div style="padding: 1rem; text-align: center;">Option A</div>
          </ag-selection-card>
          <ag-selection-card value="b" label="Option B">
            <div style="padding: 1rem; text-align: center;">Option B</div>
          </ag-selection-card>
        </ag-selection-card-group>
      </div>

      <!-- Monochrome -->
      <div>
        <h3 style="margin-bottom: 0.5rem;">Monochrome</h3>
        <ag-selection-card-group
          type="radio"
          name="theme-monochrome"
          legend="Monochrome theme"
          legend-hidden
          theme="monochrome"
        >
          <ag-selection-card value="a" label="Option A">
            <div style="padding: 1rem; text-align: center;">Option A</div>
          </ag-selection-card>
          <ag-selection-card value="b" label="Option B">
            <div style="padding: 1rem; text-align: center;">Option B</div>
          </ag-selection-card>
        </ag-selection-card-group>
      </div>
    </div>
  `,
};
