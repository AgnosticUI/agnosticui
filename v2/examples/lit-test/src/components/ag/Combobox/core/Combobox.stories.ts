import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Combobox';

const FRUITS = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'grape', label: 'Grape' },
  { value: 'mango', label: 'Mango' },
  { value: 'orange', label: 'Orange' },
];

const meta: Meta = {
  title: 'AgnosticUI/Combobox',
  component: 'ag-combobox',
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
    label: 'Select a fruit',
    placeholder: 'Choose...',
  },
  render: (args: any) => html`
    <ag-combobox
      .options=${args.options}
      label=${args.label}
      placeholder=${args.placeholder}
      ?clearable=${args.clearable}
      ?disabled=${args.disabled}
      ?multiple=${args.multiple}
      ?invalid=${args.invalid}
    ></ag-combobox>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
