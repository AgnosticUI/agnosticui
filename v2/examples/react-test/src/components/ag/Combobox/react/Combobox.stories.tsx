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
];

const meta = {
  title: 'AgnosticUI/Combobox',
  component: ReactCombobox,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
    },
    filterMode: {
      control: 'select',
      options: ['startsWith', 'contains', 'none'],
    },
    disabled: { control: 'boolean' },
    clearable: { control: 'boolean' },
    multiple: { control: 'boolean' },
    loading: { control: 'boolean' },
    invalid: { control: 'boolean' },
    errorMessage: { control: 'text' },
    helpText: { control: 'text' },
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

export const Default: Story = {
  args: {},
};

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

export const Invalid: Story = {
  args: {
    invalid: true,
    errorMessage: 'Please select a valid option.',
  },
};

export const Disabled: Story = {
  args: { disabled: true, defaultValue: 'banana' },
};

