import type { Meta, StoryObj } from '@storybook/react';
import { ReactSelect } from '../../../../lib/src/components/Select/react';

const meta = {
  title: 'AgnosticUI React/Select',
  component: ReactSelect,
  argTypes: {
    size: {
      control: 'select',
      options: ['', 'small', 'large'],
      description: 'Size variant of the select',
    },
    multiple: { control: 'boolean', description: 'Enable multiple selection' },
    disabled: { control: 'boolean', description: 'Disable the select' },
    name: { control: 'text', description: 'Form name attribute' },
    multipleSize: { control: 'number', description: 'Visible options for multiple select' },
  },
  args: {
    size: '',
    multiple: false,
    disabled: false,
    name: 'tennis-players',
    multipleSize: undefined,
  },
} satisfies Meta<typeof ReactSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: '400px' }}>
      <label htmlFor="tennis-select" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
        Greatest Tennis Player
      </label>
      <ReactSelect id="tennis-select" {...args}>
        <option value="">- Select a player -</option>
        <option value="andre">Andre Agassi</option>
        <option value="serena">Serena Williams</option>
        <option value="roger">Roger Federer</option>
        <option value="mac">John McEnroe</option>
        <option value="martina">Martina Navratilova</option>
        <option value="rafa">Rafael Nadal</option>
        <option value="borg">Bjorn Borg</option>
        <option value="althea">Althea Gibson</option>
      </ReactSelect>
    </div>
  ),
};

export const BasicSelect: Story = {
  render: () => (
    <div style={{ maxWidth: '400px' }}>
      <label htmlFor="basic-select" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
        Choose a fruit
      </label>
      <ReactSelect id="basic-select" name="fruit">
        <option value="">Select a fruit</option>
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
        <option value="grape">Grape</option>
      </ReactSelect>
    </div>
  ),
};

export const SmallSize: Story = {
  render: () => (
    <div style={{ maxWidth: '400px' }}>
      <label htmlFor="small-select" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
        Small Select
      </label>
      <ReactSelect id="small-select" size="small" name="small">
        <option value="">Select an option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </ReactSelect>
    </div>
  ),
};

export const LargeSize: Story = {
  render: () => (
    <div style={{ maxWidth: '400px' }}>
      <label htmlFor="large-select" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
        Large Select
      </label>
      <ReactSelect id="large-select" size="large" name="large">
        <option value="">Select an option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </ReactSelect>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div style={{ maxWidth: '400px' }}>
      <label htmlFor="disabled-select" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
        Disabled Select
      </label>
      <ReactSelect id="disabled-select" disabled name="disabled">
        <option value="">Select an option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </ReactSelect>
    </div>
  ),
};

export const MultipleSelect: Story = {
  render: () => (
    <div style={{ maxWidth: '400px' }}>
      <label htmlFor="multiple-select" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
        Multiple Select (Ctrl/Cmd + Click)
      </label>
      <ReactSelect
        id="multiple-select"
        multiple
        multipleSize={4}
        name="multiple"
      >
        <option value="andre">Andre Agassi</option>
        <option value="serena">Serena Williams</option>
        <option value="roger">Roger Federer</option>
        <option value="mac">John McEnroe</option>
        <option value="martina">Martina Navratilova</option>
        <option value="rafa">Rafael Nadal</option>
        <option value="borg">Bjorn Borg</option>
        <option value="althea">Althea Gibson</option>
      </ReactSelect>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '400px' }}>
      <div>
        <label htmlFor="small" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
          Small
        </label>
        <ReactSelect id="small" size="small">
          <option value="">Select an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </ReactSelect>
      </div>

      <div>
        <label htmlFor="default" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
          Default
        </label>
        <ReactSelect id="default">
          <option value="">Select an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </ReactSelect>
      </div>

      <div>
        <label htmlFor="large" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
          Large
        </label>
        <ReactSelect id="large" size="large">
          <option value="">Select an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </ReactSelect>
      </div>
    </div>
  ),
};

export const WithChangeHandler: Story = {
  render: () => (
    <div style={{ maxWidth: '400px' }}>
      <label htmlFor="change-select" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
        Select with Change Handler
      </label>
      <ReactSelect
        id="change-select"
        name="change"
        onChange={(e) => {
          const value = e.detail.value;
          alert(`Selected value: ${value}`);
        }}
      >
        <option value="">Select an option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </ReactSelect>
      <p style={{ marginTop: '1rem', fontSize: '0.875rem', color: 'var(--ag-text-secondary)' }}>
        Select an option to see the change event
      </p>
    </div>
  ),
};
