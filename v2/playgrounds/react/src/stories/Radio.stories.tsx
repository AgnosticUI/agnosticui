import type { Meta, StoryObj } from '@storybook/react';
import { ReactRadio } from 'agnosticui-core/radio/react';

const meta: Meta<typeof ReactRadio> = {
  title: 'AgnosticUI React/Radio',
  component: ReactRadio,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Name attribute for the radio input (required for grouping)',
    },
    value: {
      control: 'text',
      description: 'Value of the radio input',
    },
    checked: {
      control: 'boolean',
      description: 'Whether the radio is checked',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the radio is disabled',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the radio button',
    },
    theme: {
      control: 'select',
      options: ['default', 'primary', 'monochrome'],
      description: 'Color theme variant',
    },
    labelText: {
      control: 'text',
      description: 'Label text for the radio button',
    },
    labelPosition: {
      control: 'select',
      options: ['end', 'start'],
      description: 'Position of label relative to radio',
    },
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
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <ReactRadio {...args} />,
};

export const RadioGroup: Story = {
  args: {
    name: 'framework',
  },
  render: (args) => (
    <fieldset style={{ border: '1px solid #e5e7eb', padding: '1rem', borderRadius: '0.5rem' }}>
      <legend style={{ padding: '0 0.5rem', fontWeight: 600 }}>Select Framework</legend>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <ReactRadio name={args.name} value="react" size={args.size} theme={args.theme} labelText="React" />
        <ReactRadio name={args.name} value="vue" size={args.size} theme={args.theme} labelText="Vue" checked />
        <ReactRadio name={args.name} value="angular" size={args.size} theme={args.theme} labelText="Angular" />
      </div>
    </fieldset>
  ),
};

export const AllThemes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <fieldset style={{ border: '1px solid #e5e7eb', padding: '1rem', borderRadius: '0.5rem' }}>
        <legend style={{ padding: '0 0.5rem', fontWeight: 600 }}>Default Theme (Green)</legend>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <ReactRadio name="theme-default" value="1" size={args.size} theme="default" labelText="Unchecked" />
          <ReactRadio name="theme-default" value="2" size={args.size} theme="default" labelText="Checked" checked />
        </div>
      </fieldset>

      <fieldset style={{ border: '1px solid #e5e7eb', padding: '1rem', borderRadius: '0.5rem' }}>
        <legend style={{ padding: '0 0.5rem', fontWeight: 600 }}>Primary Theme (Blue)</legend>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <ReactRadio name="theme-primary" value="1" size={args.size} theme="primary" labelText="Unchecked" />
          <ReactRadio name="theme-primary" value="2" size={args.size} theme="primary" labelText="Checked" checked />
        </div>
      </fieldset>

      <fieldset style={{ border: '1px solid #e5e7eb', padding: '1rem', borderRadius: '0.5rem' }}>
        <legend style={{ padding: '0 0.5rem', fontWeight: 600 }}>Monochrome Theme (Black/White)</legend>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <ReactRadio name="theme-mono" value="1" size={args.size} theme="monochrome" labelText="Unchecked" />
          <ReactRadio name="theme-mono" value="2" size={args.size} theme="monochrome" labelText="Checked" checked />
        </div>
      </fieldset>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <h3 style={{ marginBottom: '0.5rem' }}>Small</h3>
        <ReactRadio name="size-small" value="1" size="small" labelText="Small radio" checked />
      </div>
      <div>
        <h3 style={{ marginBottom: '0.5rem' }}>Medium (Default)</h3>
        <ReactRadio name="size-medium" value="1" size="medium" labelText="Medium radio" checked />
      </div>
      <div>
        <h3 style={{ marginBottom: '0.5rem' }}>Large</h3>
        <ReactRadio name="size-large" value="1" size="large" labelText="Large radio" checked />
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <ReactRadio name="disabled" value="1" size={args.size} theme={args.theme} disabled labelText="Disabled Unchecked" />
      <ReactRadio name="disabled" value="2" size={args.size} theme={args.theme} disabled checked labelText="Disabled Checked" />
    </div>
  ),
};
