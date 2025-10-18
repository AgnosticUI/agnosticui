import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { fn } from "storybook/test";
import VueToggle, { type VueToggleProps } from "agnosticui-core/toggle/vue";

const meta = {
  title: "AgnosticUI Vue/Toggle",
  component: VueToggle,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    checked: { control: "boolean" },
    size: { control: "select", options: ["xs", "sm", "md", "lg", "xl"] },
    variant: { control: "select", options: ["default", "success", "warning", "danger"] },
    disabled: { control: "boolean" },
    readonly: { control: "boolean" },
    labelledBy: { control: "text" },
    describedBy: { control: "text" },
    name: { control: "text" },
    value: { control: "text" },
    "onToggle-change": { action: "toggle-change" },
  },
  args: {
    label: "Toggle me",
    checked: false,
    size: "md",
    variant: "default",
    disabled: false,
    readonly: false,
    "onToggle-change": fn(),
  },
} satisfies Meta<VueToggleProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Default Toggle",
  },
  render: (args) => ({
    components: { VueToggle },
    setup() {
      return { args };
    },
    template: `<VueToggle v-bind="args" />`,
  }),
};

export const Sizes: Story = {
  render: (args) => ({
    components: { VueToggle },
    setup() {
      return { args };
    },
    template: `
      <div class="flex flex-col gap-4">
        <VueToggle v-bind="args" size="xs" label="Extra Small" />
        <VueToggle v-bind="args" size="sm" label="Small" />
        <VueToggle v-bind="args" size="md" label="Medium" />
        <VueToggle v-bind="args" size="lg" label="Large" />
        <VueToggle v-bind="args" size="xl" label="Extra Large" />
      </div>
    `,
  }),
};

export const Variants: Story = {
  render: (args) => ({
    components: { VueToggle },
    setup() {
      return { args };
    },
    template: `
      <div class="flex flex-col gap-4">
        <VueToggle v-bind="args" variant="default" label="Default" />
        <VueToggle v-bind="args" variant="success" label="Success" />
        <VueToggle v-bind="args" variant="warning" label="Warning" />
        <VueToggle v-bind="args" variant="danger" label="Danger" />
      </div>
    `,
  }),
};

export const Checked: Story = {
  args: {
    label: "Checked Toggle",
    checked: true,
  },
  render: (args) => ({
    components: { VueToggle },
    setup() {
      return { args };
    },
    template: `<VueToggle v-bind="args" />`,
  }),
};

export const Disabled: Story = {
  render: (args) => ({
    components: { VueToggle },
    setup() {
      return { args };
    },
    template: `
      <div class="flex flex-col gap-4">
        <VueToggle v-bind="args" disabled label="Disabled Off" />
        <VueToggle v-bind="args" disabled checked label="Disabled On" />
      </div>
    `,
  }),
};

export const Readonly: Story = {
  render: (args) => ({
    components: { VueToggle },
    setup() {
      return { args };
    },
    template: `
      <div class="flex flex-col gap-4">
        <VueToggle v-bind="args" readonly label="Readonly Off" />
        <VueToggle v-bind="args" readonly checked label="Readonly On" />
      </div>
    `,
  }),
};

export const EventTesting: Story = {
  args: {
    name: "event-toggle",
    value: "some-value",
  },
  render: (args) => ({
    components: { VueToggle },
    setup() {
      return { args };
    },
    template: `<VueToggle v-bind="args" @toggle-change="args['onToggle-change']" />`,
  }),
};

export const CSSPartsCustomization: Story = {
  args: {
    label: "Customized Toggle",
    checked: true,
  },
  render: (args) => ({
    components: { VueToggle },
    setup() {
      const styles = `
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
      `;
      return { args, styles };
    },
    template: `
      <div>
        <div v-html="styles"></div>
        <VueToggle v-bind="args" class="custom-toggle" />
      </div>
    `,
  }),
};
