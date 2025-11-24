import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ReactCombobox } from '../../../../lib/src/components/react';
import type { ComboboxOption } from '../../../../lib/src/components/react';

const fruitOptions: ComboboxOption[] = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'date', label: 'Date' },
  { value: 'elderberry', label: 'Elderberry' },
  { value: 'fig', label: 'Fig' },
  { value: 'grape', label: 'Grape' },
  { value: 'honeydew', label: 'Honeydew' },
];

const countryOptions: ComboboxOption[] = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'ca', label: 'Canada' },
  { value: 'au', label: 'Australia' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'jp', label: 'Japan' },
  { value: 'br', label: 'Brazil' },
];

const tennisPlayers: ComboboxOption[] = [
  { value: 'andre', label: 'Andre Agassi' },
  { value: 'serena', label: 'Serena Williams' },
  { value: 'roger', label: 'Roger Federer' },
  { value: 'mac', label: 'John McEnroe' },
  { value: 'martina', label: 'Martina Navratilova' },
  { value: 'rafa', label: 'Rafael Nadal' },
  { value: 'borg', label: 'Bjorn Borg' },
  { value: 'althea', label: 'Althea Gibson' },
];

const meta = {
  title: 'AgnosticUI React/Combobox',
  component: ReactCombobox,
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Size variant of the combobox',
    },
    variant: {
      control: 'select',
      options: ['default', 'monochrome'],
      description: 'Visual variant of the combobox',
    },
    labelPosition: {
      control: 'select',
      options: ['top', 'start', 'end', 'bottom'],
      description: 'Position of the label relative to the combobox',
    },
    filterMode: {
      control: 'select',
      options: ['startsWith', 'contains', 'none'],
      description: 'Filter mode for options',
    },
    disabled: { control: 'boolean', description: 'Disable the combobox' },
    readonly: { control: 'boolean', description: 'Make the combobox readonly' },
    required: { control: 'boolean', description: 'Mark the combobox as required' },
    invalid: { control: 'boolean', description: 'Mark the combobox as invalid' },
    clearable: { control: 'boolean', description: 'Show clear button when value is selected' },
    closeOnSelect: { control: 'boolean', description: 'Close listbox after selecting an option' },
    multiple: { control: 'boolean', description: 'Enable multiple selection' },
    loading: { control: 'boolean', description: 'Show loading state' },
  },
  args: {
    size: 'default',
    variant: 'default',
    labelPosition: 'top',
    filterMode: 'startsWith',
    disabled: false,
    readonly: false,
    required: false,
    invalid: false,
    clearable: false,
    closeOnSelect: true,
    multiple: false,
    loading: false,
  },
} satisfies Meta<typeof ReactCombobox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: '400px' }}>
      <ReactCombobox
        label="Choose a fruit"
        placeholder="Type to search..."
        options={fruitOptions}
        {...args}
      />
    </div>
  ),
};

export const WithDefaultValue: Story = {
  render: () => (
    <div style={{ maxWidth: '400px' }}>
      <ReactCombobox
        label="Choose a fruit"
        placeholder="Type to search..."
        options={fruitOptions}
        defaultValue="banana"
      />
    </div>
  ),
};

export const SmallSize: Story = {
  render: () => (
    <div style={{ maxWidth: '400px' }}>
      <ReactCombobox
        label="Small Combobox"
        placeholder="Type to search..."
        options={fruitOptions}
        size="small"
      />
    </div>
  ),
};

export const LargeSize: Story = {
  render: () => (
    <div style={{ maxWidth: '400px' }}>
      <ReactCombobox
        label="Large Combobox"
        placeholder="Type to search..."
        options={fruitOptions}
        size="large"
      />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '400px' }}>
      <ReactCombobox
        label="Small"
        placeholder="Type to search..."
        options={fruitOptions}
        size="small"
      />
      <ReactCombobox
        label="Default"
        placeholder="Type to search..."
        options={fruitOptions}
        size="default"
      />
      <ReactCombobox
        label="Large"
        placeholder="Type to search..."
        options={fruitOptions}
        size="large"
      />
    </div>
  ),
};

export const SingleMonochrome: Story = {
  render: () => (
    <div style={{ maxWidth: '400px' }}>
      <ReactCombobox
        label="Select State"
        placeholder="Choose a state..."
        options={countryOptions}
        closeOnSelect={false}
        variant="monochrome"
      />
    </div>
  ),
};

export const MultipleMonochrome: Story = {
  render: () => (
    <div style={{ maxWidth: '400px' }}>
      <ReactCombobox
        label="Select States"
        placeholder="Choose one or more states..."
        options={countryOptions}
        multiple
        closeOnSelect={false}
        defaultValue={['us', 'ca']}
        helpText="Selected items use the monochrome variant."
        variant="monochrome"
      />
    </div>
  ),
};

export const WithClearButton: Story = {
  render: () => (
    <div style={{ maxWidth: '400px' }}>
      <ReactCombobox
        label="Clearable Combobox"
        placeholder="Type to search..."
        options={fruitOptions}
        defaultValue="cherry"
        clearable
      />
    </div>
  ),
};

export const ContainsFilter: Story = {
  render: () => (
    <div style={{ maxWidth: '400px' }}>
      <ReactCombobox
        label="Contains Filter"
        placeholder="Type to search (matches anywhere)..."
        options={tennisPlayers}
        filterMode="contains"
        helpText="Try typing 'williams' or 'nadal'"
      />
    </div>
  ),
};

export const StartsWithFilter: Story = {
  render: () => (
    <div style={{ maxWidth: '400px' }}>
      <ReactCombobox
        label="Starts With Filter (Default)"
        placeholder="Type to search..."
        options={tennisPlayers}
        filterMode="startsWith"
        helpText="Try typing 'roger' or 'serena'"
      />
    </div>
  ),
};

export const NoFilter: Story = {
  render: () => (
    <div style={{ maxWidth: '400px' }}>
      <ReactCombobox
        label="No Filter"
        placeholder="Select an option..."
        options={fruitOptions}
        filterMode="none"
        helpText="All options are always shown"
      />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div style={{ maxWidth: '400px' }}>
      <ReactCombobox
        label="Disabled Combobox"
        placeholder="Type to search..."
        options={fruitOptions}
        defaultValue="apple"
        disabled
      />
    </div>
  ),
};

export const Readonly: Story = {
  render: () => (
    <div style={{ maxWidth: '400px' }}>
      <ReactCombobox
        label="Readonly Combobox"
        placeholder="Type to search..."
        options={fruitOptions}
        defaultValue="banana"
        readonly
      />
    </div>
  ),
};

export const Required: Story = {
  render: () => (
    <div style={{ maxWidth: '400px' }}>
      <ReactCombobox
        label="Required Combobox"
        placeholder="Type to search..."
        options={fruitOptions}
        required
        helpText="This field is required"
      />
    </div>
  ),
};

export const Invalid: Story = {
  render: () => (
    <div style={{ maxWidth: '400px' }}>
      <ReactCombobox
        label="Invalid Combobox"
        placeholder="Type to search..."
        options={fruitOptions}
        invalid
        errorMessage="Please select a valid option"
      />
    </div>
  ),
};

export const WithHelpText: Story = {
  render: () => (
    <div style={{ maxWidth: '400px' }}>
      <ReactCombobox
        label="Choose your country"
        placeholder="Type to search..."
        options={countryOptions}
        helpText="Select the country where you currently reside"
      />
    </div>
  ),
};

export const LoadingState: Story = {
  render: () => (
    <div style={{ maxWidth: '400px' }}>
      <ReactCombobox
        label="Loading Combobox"
        placeholder="Type to search..."
        options={[]}
        loading
        loadingText="Loading options..."
      />
    </div>
  ),
};

export const NoResults: Story = {
  render: () => (
    <div style={{ maxWidth: '400px' }}>
      <ReactCombobox
        label="Search for items"
        placeholder="Type 'xyz' to see no results..."
        options={fruitOptions}
        noResultsText="No fruits found matching your search"
        helpText="Try searching for something that doesn't exist"
      />
    </div>
  ),
};

export const MultipleSelection: Story = {
  render: () => (
    <div style={{ maxWidth: '400px' }}>
      <ReactCombobox
        label="Select Tennis Players"
        placeholder="Type to search..."
        options={tennisPlayers}
        multiple
        helpText="You can select multiple players"
      />
    </div>
  ),
};

export const MultipleWithDefaultValues: Story = {
  render: () => (
    <div style={{ maxWidth: '400px' }}>
      <ReactCombobox
        label="Favorite Tennis Players"
        placeholder="Type to search..."
        options={tennisPlayers}
        multiple
        defaultValue={['serena', 'roger']}
        helpText="Pre-selected with Serena and Roger"
      />
    </div>
  ),
};

export const WithChangeHandler: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = React.useState('');

    return (
      <div style={{ maxWidth: '400px' }}>
        <ReactCombobox
          label="Select a fruit"
          placeholder="Type to search..."
          options={fruitOptions}
          onChange={(e) => setSelectedValue(e.detail.value as string)}
        />
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

export const EventTesting: Story = {
  render: () => {
    const [events, setEvents] = React.useState<string[]>([]);

    const logEvent = (message: string) => {
      setEvents(prev => {
        const newEvents = [message, ...prev];
        return newEvents.slice(0, 10); // Keep last 10
      });
    };

    return (
      <div style={{ maxWidth: '600px' }}>
        <h3 style={{ marginBottom: '1rem' }}>Event Testing - All Combobox Events</h3>
        <ReactCombobox
          label="Select a fruit"
          placeholder="Type to search..."
          options={fruitOptions}
          onChange={(e) => logEvent(`onChange - value: ${e.detail.value}`)}
          onSelect={(e) => logEvent(`onSelect - option: ${e.detail.option.label}`)}
          onSearch={(e) => logEvent(`onSearch - searchTerm: ${e.detail.searchTerm}`)}
          onOpen={(e) => logEvent(`onOpen - open: ${e.detail.open}`)}
          onClose={(e) => logEvent(`onClose - open: ${e.detail.open}`)}
          onFocus={() => logEvent('onFocus')}
          onBlur={() => logEvent('onBlur')}
        />

        <div style={{
          marginTop: '1rem',
          padding: '1rem',
          background: 'var(--ag-background-secondary)',
          borderRadius: 'var(--ag-radius-md)'
        }}>
          <strong>Event Log (newest first):</strong>
          <div style={{ marginTop: '0.5rem', fontFamily: 'monospace', fontSize: '0.875rem', lineHeight: 1.6 }}>
            {events.length === 0 ? '(interact with the combobox to see events)' : events.map((event, i) => (
              <div key={i}>{event}</div>
            ))}
          </div>
        </div>
      </div>
    );
  },
};

export const MultipleEventTesting: Story = {
  render: () => {
    const [selectedValues, setSelectedValues] = React.useState<string[]>([]);
    const [events, setEvents] = React.useState<string[]>([]);

    const logEvent = (message: string) => {
      setEvents(prev => {
        const newEvents = [message, ...prev];
        return newEvents.slice(0, 8);
      });
    };

    return (
      <div style={{ maxWidth: '600px' }}>
        <h3 style={{ marginBottom: '1rem' }}>Multiple Selection with Events</h3>
        <ReactCombobox
          label="Select multiple fruits"
          placeholder="Type to search..."
          options={fruitOptions}
          multiple
          onChange={(e) => {
            const values = e.detail.value as string[];
            setSelectedValues(values);
            logEvent(`onChange - selected: ${values.length} items`);
          }}
          onSelect={(e) => logEvent(`onSelect - option: ${e.detail.option.label}`)}
        />

        <div style={{
          marginTop: '1rem',
          padding: '1rem',
          background: 'var(--ag-background-secondary)',
          borderRadius: 'var(--ag-radius-md)'
        }}>
          <strong>Selected ({selectedValues.length}):</strong>
          {selectedValues.length > 0 ? (
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
              {selectedValues.map((value) => (
                <li key={value}>{fruitOptions.find(opt => opt.value === value)?.label}</li>
              ))}
            </ul>
          ) : (
            <p style={{ marginTop: '0.5rem', fontStyle: 'italic' }}>None</p>
          )}
        </div>

        <div style={{
          marginTop: '1rem',
          padding: '1rem',
          background: 'var(--ag-background-secondary)',
          borderRadius: 'var(--ag-radius-md)'
        }}>
          <strong>Event Log:</strong>
          <div style={{ marginTop: '0.5rem', fontFamily: 'monospace', fontSize: '0.875rem', lineHeight: 1.6 }}>
            {events.length === 0 ? '(select items to see events)' : events.map((event, i) => (
              <div key={i}>{event}</div>
            ))}
          </div>
        </div>
      </div>
    );
  },
};

export const LimitedVisibleOptions: Story = {
  render: () => (
    <div style={{ maxWidth: '400px' }}>
      <ReactCombobox
        label="Tennis Players"
        placeholder="Type to search..."
        options={tennisPlayers}
        maxVisibleOptions={5}
        helpText="Maximum 5 options shown at a time"
      />
    </div>
  ),
};

export const KeepOpenOnSelect: Story = {
  render: () => (
    <div style={{ maxWidth: '400px' }}>
      <ReactCombobox
        label="Keep open after selection"
        placeholder="Type to search..."
        options={fruitOptions}
        closeOnSelect={false}
        helpText="Listbox stays open after selecting an option"
      />
    </div>
  ),
};

export const ComparisonSizesAndVariants: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', maxWidth: '900px' }}>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>Default Variant</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <ReactCombobox
            label="Small"
            placeholder="Small..."
            options={fruitOptions}
            size="small"
          />
          <ReactCombobox
            label="Default"
            placeholder="Default..."
            options={fruitOptions}
            size="default"
          />
          <ReactCombobox
            label="Large"
            placeholder="Large..."
            options={fruitOptions}
            size="large"
          />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>Monochrome Variant</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <ReactCombobox
            label="Small"
            placeholder="Small..."
            options={fruitOptions}
            size="small"
            variant="monochrome"
          />
          <ReactCombobox
            label="Default"
            placeholder="Default..."
            options={fruitOptions}
            size="default"
            variant="monochrome"
          />
          <ReactCombobox
            label="Large"
            placeholder="Large..."
            options={fruitOptions}
            size="large"
            variant="monochrome"
          />
        </div>
      </div>
    </div>
  ),
};
