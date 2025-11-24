import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { ref } from "vue";
import { fn } from "storybook/test";
import VueToggle, { type VueToggleProps } from "agnosticui-core/toggle/vue";

const meta = {
  title: "AgnosticUI Vue/Toggle",
  component: VueToggle,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    labelPosition: { control: "select", options: ["top", "start", "end", "bottom"] },
    labelHidden: { control: "boolean" },
    noLabel: { control: "boolean" },
    checked: { control: "boolean" },
    size: { control: "select", options: ["xs", "sm", "md", "lg", "xl"] },
    variant: { control: "select", options: ["default", "success", "warning", "danger", "monochrome"] },
    disabled: { control: "boolean" },
    readonly: { control: "boolean" },
    required: { control: "boolean" },
    invalid: { control: "boolean" },
    errorMessage: { control: "text" },
    helpText: { control: "text" },
    name: { control: "text" },
    value: { control: "text" },
    "onToggle-change": { action: "toggle-change" },
  },
  args: {
    label: "Toggle me",
    labelPosition: "top",
    labelHidden: false,
    noLabel: false,
    checked: false,
    size: "md",
    variant: "default",
    disabled: false,
    readonly: false,
    required: false,
    invalid: false,
    errorMessage: "",
    helpText: "",
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
    label: "Event Testing",
  },
  render: (args) => ({
    components: { VueToggle },
    setup() {
      const vModelChecked = ref(false);
      const vModelChecked2 = ref(false);
      const eventChecked = ref(false);

      const handleToggleChange = (event: any) => {
        console.log('toggle-change name:', event.name, 'value:', event.value, 'checked:', event.checked  );
        eventChecked.value = event.checked;
        args['onToggle-change']?.(event);
      };

      return { args, vModelChecked, vModelChecked2, eventChecked, handleToggleChange };
    },
    template: `
      <div style="display: flex; flex-direction: column; align-items: flex-start; padding: 50px; gap: 1.5rem;">
        <div>
          <h3 style="margin: 0 0 0.5rem 0;">Event Handling in Vue</h3>
          <p style="margin: 0; color: #6b7280; font-size: 0.875rem;">
            Vue wrapper supports @toggle-change event and v-model:checked
          </p>
        </div>

        <div style="display: flex; flex-direction: column; gap: 1rem; width: 100%;">
          <!-- Pattern 1: @toggle-change event -->
          <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 1rem;">
            <p style="margin: 0 0 0.75rem 0; font-weight: 600;">
              Pattern 1: @toggle-change Event
            </p>
            <VueToggle
              :label="args.label || 'Toggle'"
              :size="args.size"
              variant="default"
              :name="'event-toggle'"
              :value="'event-value'"
              @toggle-change="handleToggleChange"
            />
            <p style="font-size: 0.75rem; color: #6b7280; margin: 0.5rem 0 0 0;">
              Event emits detail with: checked, name, value
            </p>
            <p style="font-size: 0.75rem; color: #059669; margin: 0.25rem 0 0 0;">
              Status: {{ eventChecked ? 'Checked' : 'Unchecked' }}
            </p>
          </div>

          <!-- Pattern 2: v-model:checked (two-way binding) -->
          <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 1rem;">
            <p style="margin: 0 0 0.75rem 0; font-weight: 600;">
              Pattern 2: v-model:checked (Two-Way Binding)
            </p>
            <VueToggle
              label="Controlled with v-model"
              :size="args.size"
              variant="success"
              :name="'vmodel-toggle'"
              :value="'vmodel-value'"
              v-model:checked="vModelChecked"
            />
            <p style="font-size: 0.75rem; color: #6b7280; margin: 0.5rem 0 0 0;">
              Uses update:checked emit for reactive two-way binding
            </p>
            <p style="font-size: 0.75rem; color: #059669; margin: 0.25rem 0 0 0;">
              v-model value: {{ vModelChecked }}
            </p>
            <button
              @click="vModelChecked = !vModelChecked"
              style="margin-top: 0.5rem; padding: 0.25rem 0.75rem; border: 1px solid #d1d5db; border-radius: 4px; cursor: pointer;"
            >
              Toggle programmatically
            </button>
          </div>

          <!-- Pattern 3: Both together -->
          <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 1rem;">
            <p style="margin: 0 0 0.75rem 0; font-weight: 600;">
              Pattern 3: Both Event + v-model
            </p>
            <VueToggle
              label="With both patterns"
              :size="args.size"
              variant="danger"
              :name="'both-toggle'"
              :value="'both-value'"
              v-model:checked="vModelChecked2"
              @toggle-change="(e) => console.log('Event also fired:', e.checked)"
            />
            <p style="font-size: 0.75rem; color: #6b7280; margin: 0.5rem 0 0 0;">
              Both @toggle-change and v-model:checked work together
            </p>
            <p style="font-size: 0.75rem; color: #059669; margin: 0.25rem 0 0 0;">
              v-model value: {{ vModelChecked2 }}
            </p>
          </div>
        </div>

        <p style="font-size: 0.875rem; color: #6b7280; margin: 0; padding: 1rem; background: #f9fafb; border-radius: 8px;">
          💡 Check the Actions panel below and browser console for event logs
        </p>
      </div>
    `,
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
