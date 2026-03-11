import type { Meta, StoryObj } from '@storybook/react';
import { ReactCombobox } from './ReactCombobox';
import type { ComboboxOption } from './ReactCombobox';

const FRUITS: ComboboxOption[] = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'grape', label: 'Grape' },
  { value: 'mango', label: 'Mango' },
  { value: 'orange', label: 'Orange' },
  { value: 'peach', label: 'Peach' },
  { value: 'strawberry', label: 'Strawberry' },
];

const COUNTRIES: ComboboxOption[] = [
  { value: 'au', label: 'Australia' },
  { value: 'br', label: 'Brazil' },
  { value: 'ca', label: 'Canada' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'jp', label: 'Japan' },
  { value: 'mx', label: 'Mexico' },
  { value: 'us', label: 'United States' },
];

const meta = {
  title: 'AgnosticUI/Combobox',
  component: ReactCombobox,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    clearable: { control: 'boolean' },
    multiple: { control: 'boolean' },
    loading: { control: 'boolean' },
    invalid: { control: 'boolean' },
    errorMessage: { control: 'text' },
    helpText: { control: 'text' },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
    },
    filterMode: {
      control: 'select',
      options: ['startsWith', 'contains', 'none'],
    },
    autocomplete: {
      control: 'select',
      options: ['list', 'none'],
    },
  },
  args: {
    options: FRUITS,
    label: 'Fruit',
    placeholder: 'Select a fruit...',
    id: 'combobox-story',
  },
} satisfies Meta<typeof ReactCombobox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithContainsFilter: Story = {
  args: { filterMode: 'contains', placeholder: 'Type to filter...' },
};

export const Clearable: Story = {
  args: { clearable: true, defaultValue: 'apple' },
};

export const Multiple: Story = {
  args: {
    multiple: true,
    placeholder: 'Select multiple fruits...',
    clearable: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '360px' }}>
      <ReactCombobox options={FRUITS} label="Small" size="small" id="cb-sm" placeholder="Small..." />
      <ReactCombobox options={FRUITS} label="Default" size="default" id="cb-md" placeholder="Default..." />
      <ReactCombobox options={FRUITS} label="Large" size="large" id="cb-lg" placeholder="Large..." />
    </div>
  ),
};

export const WithHelpText: Story = {
  args: {
    helpText: 'Choose your favorite fruit from the list.',
  },
};

export const Invalid: Story = {
  args: {
    invalid: true,
    errorMessage: 'Please select a valid option.',
  },
};

export const Disabled: Story = {
  args: { disabled: true, defaultValue: 'banana' },
};

export const Loading: Story = {
  args: { loading: true, loadingText: 'Fetching options...' },
};

export const LargeOptionSet: Story = {
  args: {
    options: COUNTRIES,
    label: 'Country',
    placeholder: 'Select a country...',
    id: 'combobox-countries',
    filterMode: 'contains',
    clearable: true,
  },
};
