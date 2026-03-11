import type { Meta, StoryObj } from '@storybook/vue3';
import VueCombobox from './VueCombobox.vue';
import type { ComboboxOption } from '../core/Combobox';

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
  component: VueCombobox,
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
    id: 'combobox-default',
  },
  render: (args: any) => ({
    components: { VueCombobox },
    setup() { return { args }; },
    template: '<VueCombobox v-bind="args" />',
  }),
} satisfies Meta<typeof VueCombobox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
