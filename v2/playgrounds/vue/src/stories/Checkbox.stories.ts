
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import { VueCheckbox } from 'agnosticui-core/checkbox/vue';

const meta = {
  title: 'AgnosticUI Vue/Checkbox',
  component: VueCheckbox,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text', description: 'Name attribute for the checkbox input' },
    value: { control: 'text', description: 'Value of the checkbox input' },
    checked: { control: 'boolean', description: 'Whether the checkbox is checked' },
    indeterminate: { control: 'boolean', description: 'Whether the checkbox is in indeterminate state' },
    disabled: { control: 'boolean', description: 'Whether the checkbox is disabled' },
    size: { control: 'select', options: ['small', 'medium', 'large'], description: 'Size' },
    theme: { control: 'select', options: ['default', 'primary', 'success', 'monochrome'], description: 'Theme' },
    labelText: { control: 'text', description: 'Label text' },
    labelPosition: { control: 'select', options: ['end', 'start'], description: 'Label position' },
  },
  args: {
    name: 'example',
    value: '1',
    checked: false,
    indeterminate: false,
    disabled: false,
    size: 'medium',
    theme: 'primary',
    labelText: 'Checkbox Option',
    labelPosition: 'end',
  },
} satisfies Meta<typeof VueCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { VueCheckbox },
    setup() {
      return { args };
    },
    template: `<VueCheckbox v-bind="args" />`,
  }),
};

export const CheckboxGroup: Story = {
  render: (args) => ({
    components: { VueCheckbox },
    setup() {
      return { args };
    },
    template: `
      <fieldset style="border: 1px solid #e5e7eb; padding: 1rem; border-radius: 0.5rem;">
        <legend style="padding: 0 0.5rem; font-weight: 600;">Select Features</legend>
        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
          <VueCheckbox name="features" value="dark-mode" :size="args.size" :theme="args.theme" :checked="true">Dark Mode</VueCheckbox>
          <VueCheckbox name="features" value="notifications" :size="args.size" :theme="args.theme">Notifications</VueCheckbox>
          <VueCheckbox name="features" value="analytics" :size="args.size" :theme="args.theme" :checked="true">Analytics</VueCheckbox>
        </div>
      </fieldset>
    `,
  }),
};

export const Indeterminate: Story = {
  render: (args) => ({
    components: { VueCheckbox },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 0.75rem;">
        <VueCheckbox name="select-all" value="all" :size="args.size" :theme="args.theme" :indeterminate="true" label-text="Select All (Indeterminate)" />
        <div style="padding-left: 1.5rem; display: flex; flex-direction: column; gap: 0.5rem;">
          <VueCheckbox name="items" value="item1" :size="args.size" :theme="args.theme" label-text="Item 1" :checked="true" />
          <VueCheckbox name="items" value="item2" :size="args.size" :theme="args.theme" label-text="Item 2" />
          <VueCheckbox name="items" value="item3" :size="args.size" :theme="args.theme" label-text="Item 3" :checked="true" />
        </div>
      </div>
    `,
  }),
};

export const AllThemes: Story = {
  render: (args) => ({
    components: { VueCheckbox },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <fieldset style="border: 1px solid #e5e7eb; padding: 1rem; border-radius: 0.5rem;">
          <legend style="padding: 0 0.5rem; font-weight: 600;">Default Theme (Primary)</legend>
          <div style="display: flex; gap: 1rem;">
            <VueCheckbox name="theme-default" value="1" :size="args.size" theme="default" label-text="Unchecked" />
            <VueCheckbox name="theme-default" value="2" :size="args.size" theme="default" label-text="Checked" :checked="true" />
            <VueCheckbox name="theme-default" value="3" :size="args.size" theme="default" label-text="Indeterminate" :indeterminate="true" />
          </div>
        </fieldset>

        <fieldset style="border: 1px solid #e5e7eb; padding: 1rem; border-radius: 0.5rem;">
          <legend style="padding: 0 0.5rem; font-weight: 600;">Primary Theme (Blue)</legend>
          <div style="display: flex; gap: 1rem;">
            <VueCheckbox name="theme-primary" value="1" :size="args.size" theme="primary" label-text="Unchecked" />
            <VueCheckbox name="theme-primary" value="2" :size="args.size" theme="primary" label-text="Checked" :checked="true" />
            <VueCheckbox name="theme-primary" value="3" :size="args.size" theme="primary" label-text="Indeterminate" :indeterminate="true" />
          </div>
        </fieldset>
        <fieldset style="border: 1px solid #e5e7eb; padding: 1rem; border-radius: 0.5rem;">
          <legend style="padding: 0 0.5rem; font-weight: 600;">Success Theme (Green)</legend>
          <div style="display: flex; gap: 1rem;">
            <VueCheckbox name="theme-success" value="1" :size="args.size" theme="success" label-text="Unchecked" />
            <VueCheckbox name="theme-success" value="2" :size="args.size" theme="success" label-text="Checked" :checked="true" />
            <VueCheckbox name="theme-success" value="3" :size="args.size" theme="success" label-text="Indeterminate" :indeterminate="true" />
          </div>
        </fieldset>
        <fieldset style="border: 1px solid #e5e7eb; padding: 1rem; border-radius: 0.5rem;">
          <legend style="padding: 0 0.5rem; font-weight: 600;">Monochrome Theme (Black/White)</legend>
          <div style="display: flex; gap: 1rem;">
            <VueCheckbox name="theme-mono" value="1" :size="args.size" theme="monochrome" label-text="Unchecked" />
            <VueCheckbox name="theme-mono" value="2" :size="args.size" theme="monochrome" label-text="Checked" :checked="true" />
            <VueCheckbox name="theme-mono" value="3" :size="args.size" theme="monochrome" label-text="Indeterminate" :indeterminate="true" />
          </div>
        </fieldset>
      </div>
    `,
  }),
};

export const AllSizes: Story = {
  render: () => ({
    components: { VueCheckbox },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <div>
          <h3 style="margin-bottom: 0.5rem;">Small</h3>
          <VueCheckbox name="size-small" value="1" size="small" label-text="Small checkbox" :checked="true" />
        </div>
        <div>
          <h3 style="margin-bottom: 0.5rem;">Medium (Default)</h3>
          <VueCheckbox name="size-medium" value="1" size="medium" label-text="Medium checkbox" :checked="true" />
        </div>
        <div>
          <h3 style="margin-bottom: 0.5rem;">Large</h3>
          <VueCheckbox name="size-large" value="1" size="large" label-text="Large checkbox" :checked="true" />
        </div>
      </div>
    `,
  }),
};

export const Disabled: Story = {
  render: (args) => ({
    components: { VueCheckbox },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; gap: 1rem;">
        <VueCheckbox name="disabled" value="1" :size="args.size" :theme="args.theme" label-text="Disabled Unchecked" :disabled="true" />
        <VueCheckbox name="disabled" value="2" :size="args.size" :theme="args.theme" label-text="Disabled Checked" :checked="true" :disabled="true" />
        <VueCheckbox name="disabled" value="3" :size="args.size" :theme="args.theme" label-text="Disabled Indeterminate" :indeterminate="true" :disabled="true" />
      </div>
    `,
  }),
};

export const LabelPosition: Story = {
  render: (args) => ({
    components: { VueCheckbox },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <VueCheckbox name="position" value="1" :size="args.size" :theme="args.theme" label-text="Label on End (Default)" label-position="end" :checked="true" />
        <VueCheckbox name="position" value="2" :size="args.size" :theme="args.theme" label-text="Label on Start" label-position="start" :checked="true" />
      </div>
    `,
  }),
};

export const EventTesting: Story = {
  args: {
    labelText: 'Event Testing',
  },
  render: (args) => ({
    components: { VueCheckbox },
    setup() {
      const vModelChecked = ref(false);
      const vModelIndeterminate = ref(false);
      const eventChecked = ref(false);

      const handleChange = (detail: any) => {
        console.log('change event:', detail);
        eventChecked.value = detail.checked;
      };

      return { args, vModelChecked, vModelIndeterminate, eventChecked, handleChange };
    },
    template: `
      <div style="display: flex; flex-direction: column; align-items: flex-start; padding: 1rem; gap: 1.5rem;">
        <div>
          <h3 style="margin: 0 0 0.5rem 0;">Event Handling in Vue</h3>
          <p style="margin: 0; color: #6b7280; font-size: 0.875rem;">
            Vue wrapper supports @change event and v-model:checked / v-model:indeterminate
          </p>
        </div>

        <div style="display: flex; flex-direction: column; gap: 1rem; width: 100%;">
          <!-- Pattern 1: @change event -->
          <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 1rem;">
            <p style="margin: 0 0 0.75rem 0; font-weight: 600;">
              Pattern 1: @change Event
            </p>
            <VueCheckbox
              name="test1"
              value="option1"
              :label-text="args.labelText"
              :size="args.size"
              theme="default"
              @change="handleChange"
            />
            <p style="font-size: 0.75rem; color: #6b7280; margin: 0.5rem 0 0 0;">
              Event emits detail with: checked, value, name, indeterminate
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
            <VueCheckbox
              name="test2"
              value="option2"
              label-text="Controlled with v-model"
              :size="args.size"
              theme="primary"
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

          <!-- Pattern 3: v-model:indeterminate -->
          <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 1rem;">
            <p style="margin: 0 0 0.75rem 0; font-weight: 600;">
              Pattern 3: v-model:indeterminate
            </p>
            <VueCheckbox
              name="test3"
              value="option3"
              label-text="Indeterminate state control"
              :size="args.size"
              theme="monochrome"
              v-model:indeterminate="vModelIndeterminate"
            />
            <p style="font-size: 0.75rem; color: #6b7280; margin: 0.5rem 0 0 0;">
              Uses update:indeterminate emit (unique to checkbox)
            </p>
            <p style="font-size: 0.75rem; color: #059669; margin: 0.25rem 0 0 0;">
              Indeterminate: {{ vModelIndeterminate }}
            </p>
            <button
              @click="vModelIndeterminate = !vModelIndeterminate"
              style="margin-top: 0.5rem; padding: 0.25rem 0.75rem; border: 1px solid #d1d5db; border-radius: 4px; cursor: pointer;"
            >
              Toggle indeterminate programmatically
            </button>
          </div>

          <!-- Pattern 4: Both event + v-model -->
          <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 1rem;">
            <p style="margin: 0 0 0.75rem 0; font-weight: 600;">
              Pattern 4: Both Event + v-model
            </p>
            <VueCheckbox
              name="test4"
              value="option4"
              label-text="With both patterns"
              :size="args.size"
              theme="default"
              v-model:checked="vModelChecked"
              @change="(detail) => console.log('Event also fired:', detail)"
            />
            <p style="font-size: 0.75rem; color: #6b7280; margin: 0.5rem 0 0 0;">
              Both @change and v-model:checked work together
            </p>
          </div>

          <!-- Pattern 5: Native click event -->
          <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 1rem;">
            <p style="margin: 0 0 0.75rem 0; font-weight: 600;">
              Pattern 5: Native Click Event
            </p>
            <VueCheckbox
              name="test5"
              value="option5"
              label-text="With click handler"
              :size="args.size"
              theme="primary"
              @click="(e) => console.log('Click event:', e)"
              @change="(detail) => console.log('Change event:', detail)"
            />
            <p style="font-size: 0.75rem; color: #6b7280; margin: 0.5rem 0 0 0;">
              Both native (@click) and custom (@change) events work
            </p>
          </div>
        </div>

        <p style="font-size: 0.875rem; color: #6b7280; margin: 0; padding: 1rem; background: #f9fafb; border-radius: 8px; width: 100%;">
          💡 Check the Actions panel below and browser console for event logs
        </p>
      </div>
    `,
  }),
};

export const CSSPartsCustomization: Story = {
  args: {
    name: 'custom',
    value: '1',
    labelText: 'Customized Checkbox',
    checked: true,
  },
  render: (args) => ({
    components: { VueCheckbox },
    setup() {
      const styles = `
        <style>
          .custom-checkbox::part(ag-checkbox-indicator) {
            border-radius: 50%;
            border-width: 3px;
          }
          .custom-checkbox::part(ag-checkbox-wrapper) {
            padding: 0.5rem;
            background: #f3f4f6;
            border-radius: 0.375rem;
          }
          .custom-checkbox::part(ag-checkbox-label) {
            font-weight: 600;
            color: #0063a8;
          }
        </style>
      `;
      return { args, styles };
    },
    template: `
      <div>
        <div v-html="styles"></div>
        <VueCheckbox v-bind="args" class="custom-checkbox" />
      </div>
    `,
  }),
};
