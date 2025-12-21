import React from 'react';
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
    label: { control: 'text', description: 'External label text' },
    labelHidden: { control: 'boolean', description: 'Visually hide the label' },
    noLabel: { control: 'boolean', description: 'Remove the label element' },
    required: { control: 'boolean', description: 'Mark as required' },
    invalid: { control: 'boolean', description: 'Mark as invalid' },
    errorMessage: { control: 'text', description: 'Error message when invalid' },
    helpText: { control: 'text', description: 'Helper text below the select' },
  },
  args: {
    size: '',
    multiple: false,
    disabled: false,
    name: 'tennis-players',
    multipleSize: undefined,
    label: '',
    labelHidden: false,
    noLabel: false,
    required: false,
    invalid: false,
    errorMessage: '',
    helpText: '',
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

export const EventTesting: Story = {
  render: () => {
    const [events, setEvents] = React.useState<string[]>([]);

    const logEvent = (message: string) => {
      setEvents(prev => {
        const newEvents = [message, ...prev];
        return newEvents.slice(0, 8); // Keep last 8
      });
    };

    return (
      <div style={{ maxWidth: '600px' }}>
        <h3 style={{ marginBottom: '1rem' }}>Event Testing - React onChange Pattern</h3>
        <label htmlFor="event-test" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
          Select an option to see all events
        </label>
        <ReactSelect
          id="event-test"
          name="event-test"
          onChange={(e) => logEvent(`onChange - value: ${e.detail.value}`)}
          onFocus={() => logEvent('onFocus')}
          onBlur={() => logEvent('onBlur')}
          onClick={() => logEvent('onClick')}
        >
          <option value="">Select an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </ReactSelect>

        <div style={{
          marginTop: '1rem',
          padding: '1rem',
          background: 'var(--ag-background-secondary)',
          borderRadius: 'var(--ag-radius-md)'
        }}>
          <strong>Event Log (newest first):</strong>
          <div style={{ marginTop: '0.5rem', fontFamily: 'monospace', fontSize: '0.875rem', lineHeight: 1.6 }}>
            {events.length === 0 ? '(select an option to see events)' : events.map((event, i) => (
              <div key={i}>{event}</div>
            ))}
          </div>
        </div>
      </div>
    );
  },
};

export const WithState: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = React.useState('');

    return (
      <div style={{ maxWidth: '400px' }}>
        <h3 style={{ marginBottom: '1rem' }}>Select with React State</h3>
        <label htmlFor="state-select" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
          Choose a fruit
        </label>
        <ReactSelect
          id="state-select"
          name="fruit"
          onChange={(e) => setSelectedValue(e.detail.value as string)}
        >
          <option value="">Select a fruit</option>
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="orange">Orange</option>
          <option value="grape">Grape</option>
        </ReactSelect>

        {selectedValue && (
          <div style={{
            marginTop: '1rem',
            padding: '1rem',
            background: 'var(--ag-background-secondary)',
            borderRadius: 'var(--ag-radius-md)'
          }}>
            <strong>Selected:</strong> {selectedValue}
          </div>
        )}
      </div>
    );
  },
};

export const MultipleWithState: Story = {
  render: () => {
    const [selectedPlayers, setSelectedPlayers] = React.useState<string[]>([]);

    return (
      <div style={{ maxWidth: '400px' }}>
        <h3 style={{ marginBottom: '1rem' }}>Multiple Select with React State</h3>
        <label htmlFor="multiple-state" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
          Select Tennis Players (Ctrl/Cmd + Click)
        </label>
        <ReactSelect
          id="multiple-state"
          name="players"
          multiple
          multipleSize={5}
          onChange={(e) => setSelectedPlayers(e.detail.value as string[])}
        >
          <option value="andre">Andre Agassi</option>
          <option value="serena">Serena Williams</option>
          <option value="roger">Roger Federer</option>
          <option value="mac">John McEnroe</option>
          <option value="martina">Martina Navratilova</option>
        </ReactSelect>

        {selectedPlayers.length > 0 && (
          <div style={{
            marginTop: '1rem',
            padding: '1rem',
            background: 'var(--ag-background-secondary)',
            borderRadius: 'var(--ag-radius-md)'
          }}>
            <strong>Selected ({selectedPlayers.length}):</strong>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
              {selectedPlayers.map((player) => (
                <li key={player}>{player}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  },
};

export const WithExternalLabel: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '400px' }}>
      <ReactSelect
        label="Favorite Framework"
        name="framework"
      >
        <option value="">Choose a framework</option>
        <option value="react">React</option>
        <option value="vue">Vue</option>
        <option value="angular">Angular</option>
        <option value="svelte">Svelte</option>
      </ReactSelect>

      <ReactSelect
        label="Country"
        helpText="Select your country of residence"
        name="country"
      >
        <option value="">Select a country</option>
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="ca">Canada</option>
        <option value="au">Australia</option>
      </ReactSelect>

      <ReactSelect
        label="Preferred Language"
        required
        helpText="This field is required"
        name="language"
      >
        <option value="">Select a language</option>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
      </ReactSelect>

      <ReactSelect
        label="Payment Method"
        required
        invalid
        errorMessage="Please select a payment method to continue"
        name="payment"
      >
        <option value="">Select payment method</option>
        <option value="credit">Credit Card</option>
        <option value="debit">Debit Card</option>
        <option value="paypal">PayPal</option>
      </ReactSelect>
    </div>
  ),
};

export const ComparisonStandaloneVsExternal: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '3rem' }}>
      <div style={{ flex: 1 }}>
        <h3 style={{ marginBottom: '1rem' }}>Standard Select (Manual Label)</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div>
            <label htmlFor="plan-1" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
              Choose Plan
            </label>
            <ReactSelect id="plan-1" name="plan-1">
              <option value="">Select a plan</option>
              <option value="free">Free Plan</option>
              <option value="pro">Pro Plan</option>
              <option value="enterprise">Enterprise Plan</option>
            </ReactSelect>
          </div>
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <h3 style={{ marginBottom: '1rem' }}>
          Select with External Label
        </h3>
        <ReactSelect
          label="Choose Plan"
          helpText="Select the plan that best fits your needs"
          name="plan-2"
        >
          <option value="">Select a plan</option>
          <option value="free">Free Plan</option>
          <option value="pro">Pro Plan</option>
          <option value="enterprise">Enterprise Plan</option>
        </ReactSelect>
      </div>
    </div>
  ),
};
