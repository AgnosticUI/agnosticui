
import type { Meta, StoryObj } from '@storybook/vue3-vite';
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
    theme: { control: 'select', options: ['default', 'primary', 'monochrome'], description: 'Theme' },
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
    theme: 'default',
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
          <VueCheckbox name="features" value="dark-mode" :size="args.size" :theme="args.theme" label-text="Dark Mode" :checked="true" />
          <VueCheckbox name="features" value="notifications" :size="args.size" :theme="args.theme" label-text="Notifications" />
          <VueCheckbox name="features" value="analytics" :size="args.size" :theme="args.theme" label-text="Analytics" :checked="true" />
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
          <legend style="padding: 0 0.5rem; font-weight: 600;">Default Theme (Green)</legend>
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
