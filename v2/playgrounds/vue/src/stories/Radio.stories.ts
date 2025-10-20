import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { VueRadio } from 'agnosticui-core/radio/vue';

const meta = {
  title: 'AgnosticUI Vue/Radio',
  component: VueRadio,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text', description: 'Name attribute for the radio input' },
    value: { control: 'text', description: 'Value of the radio input' },
    checked: { control: 'boolean', description: 'Whether the radio is checked' },
    disabled: { control: 'boolean', description: 'Whether the radio is disabled' },
    size: { control: 'select', options: ['small', 'medium', 'large'], description: 'Size' },
    theme: { control: 'select', options: ['default', 'primary', 'monochrome'], description: 'Theme' },
    labelText: { control: 'text', description: 'Label text' },
    labelPosition: { control: 'select', options: ['end', 'start'], description: 'Label position' },
  },
  args: {
    name: 'example',
    value: '1',
    checked: false,
    disabled: false,
    size: 'medium',
    theme: 'default',
    labelText: 'Radio Option',
    labelPosition: 'end',
  },
} satisfies Meta<typeof VueRadio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { VueRadio },
    setup() {
      return { args };
    },
    template: `<VueRadio v-bind="args" />`,
  }),
};

export const RadioGroup: Story = {
  render: (args) => ({
    components: { VueRadio },
    setup() {
      return { args };
    },
    template: `
      <fieldset style="border: 1px solid #e5e7eb; padding: 1rem; border-radius: 0.5rem;">
        <legend style="padding: 0 0.5rem; font-weight: 600;">Select Framework</legend>
        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
          <VueRadio name="framework" value="react" :size="args.size" :theme="args.theme" label-text="React" />
          <VueRadio name="framework" value="vue" :size="args.size" :theme="args.theme" label-text="Vue" :checked="true" />
          <VueRadio name="framework" value="angular" :size="args.size" :theme="args.theme" label-text="Angular" />
        </div>
      </fieldset>
    `,
  }),
};

export const AllThemes: Story = {
  render: (args) => ({
    components: { VueRadio },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <fieldset style="border: 1px solid #e5e7eb; padding: 1rem; border-radius: 0.5rem;">
          <legend style="padding: 0 0.5rem; font-weight: 600;">Default Theme (Green)</legend>
          <div style="display: flex; gap: 1rem;">
            <VueRadio name="theme-default" value="1" :size="args.size" theme="default" label-text="Unchecked" />
            <VueRadio name="theme-default" value="2" :size="args.size" theme="default" label-text="Checked" :checked="true" />
          </div>
        </fieldset>

        <fieldset style="border: 1px solid #e5e7eb; padding: 1rem; border-radius: 0.5rem;">
          <legend style="padding: 0 0.5rem; font-weight: 600;">Primary Theme (Blue)</legend>
          <div style="display: flex; gap: 1rem;">
            <VueRadio name="theme-primary" value="1" :size="args.size" theme="primary" label-text="Unchecked" />
            <VueRadio name="theme-primary" value="2" :size="args.size" theme="primary" label-text="Checked" :checked="true" />
          </div>
        </fieldset>

        <fieldset style="border: 1px solid #e5e7eb; padding: 1rem; border-radius: 0.5rem;">
          <legend style="padding: 0 0.5rem; font-weight: 600;">Monochrome Theme (Black/White)</legend>
          <div style="display: flex; gap: 1rem;">
            <VueRadio name="theme-mono" value="1" :size="args.size" theme="monochrome" label-text="Unchecked" />
            <VueRadio name="theme-mono" value="2" :size="args.size" theme="monochrome" label-text="Checked" :checked="true" />
          </div>
        </fieldset>
      </div>
    `,
  }),
};

export const AllSizes: Story = {
  render: () => ({
    components: { VueRadio },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <div>
          <h3 style="margin-bottom: 0.5rem;">Small</h3>
          <VueRadio name="size-small" value="1" size="small" label-text="Small radio" :checked="true" />
        </div>
        <div>
          <h3 style="margin-bottom: 0.5rem;">Medium (Default)</h3>
          <VueRadio name="size-medium" value="1" size="medium" label-text="Medium radio" :checked="true" />
        </div>
        <div>
          <h3 style="margin-bottom: 0.5rem;">Large</h3>
          <VueRadio name="size-large" value="1" size="large" label-text="Large radio" :checked="true" />
        </div>
      </div>
    `,
  }),
};
