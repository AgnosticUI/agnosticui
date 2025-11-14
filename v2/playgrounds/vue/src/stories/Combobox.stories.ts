import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import VueCombobox from 'agnosticui-core/combobox/vue';
import type { VueComboboxProps } from 'agnosticui-core/combobox/vue';

// Sample options for stories
const stateOptions = [
  { value: 'al', label: 'Alabama' },
  { value: 'ak', label: 'Alaska' },
  { value: 'az', label: 'Arizona' },
  { value: 'ar', label: 'Arkansas' },
  { value: 'ca', label: 'California' },
  { value: 'co', label: 'Colorado' },
  { value: 'ct', label: 'Connecticut' },
  { value: 'de', label: 'Delaware' },
  { value: 'fl', label: 'Florida' },
  { value: 'ga', label: 'Georgia' },
];

const meta = {
  title: 'AgnosticUI Vue/Combobox',
  component: VueCombobox,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text for the combobox',
    },
    labelHidden: {
      control: 'boolean',
      description: 'Visually hides the label (still accessible to screen readers)',
    },
    noLabel: {
      control: 'boolean',
      description: 'Removes the label entirely',
    },
    ariaLabel: {
      control: 'text',
      description: 'ARIA label for accessibility',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    value: {
      control: 'text',
      description: 'Current selected value',
    },
    autocomplete: {
      control: 'select',
      options: ['list', 'none'],
      description: 'Autocomplete behavior',
    },
    filterMode: {
      control: 'select',
      options: ['startsWith', 'contains', 'none'],
      description: 'How to filter options based on input',
    },
    clearable: {
      control: 'boolean',
      description: 'Show clear button when value is selected',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the combobox',
    },
    readonly: {
      control: 'boolean',
      description: 'Makes the combobox read-only',
    },
    required: {
      control: 'boolean',
      description: 'Makes the combobox required',
    },
    invalid: {
      control: 'boolean',
      description: 'Marks the combobox as invalid',
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Size of the combobox',
    },
    variant: {
      control: 'select',
      options: ['default', 'monochrome'],
      description: 'Visual variant of the combobox',
    },
    closeOnSelect: {
      control: 'boolean',
      description: 'Close listbox after selecting an option',
    },
    loading: {
      control: 'boolean',
      description: 'Show loading state',
    },
    loadingText: {
      control: 'text',
      description: 'Loading message text',
    },
    noResultsText: {
      control: 'text',
      description: 'No results message text',
    },
    helpText: {
      control: 'text',
      description: 'Help text to display',
    },
    errorText: {
      control: 'text',
      description: 'Error message to display',
    },
    multiple: {
      control: 'boolean',
      description: 'Enable multiple selection',
    },
    maxOptionsVisible: {
      control: 'number',
      description: 'Maximum number of selected tags to show before +N',
    },
  },
  args: {
    label: '',
    labelHidden: false,
    noLabel: false,
    placeholder: '',
    value: '',
    autocomplete: 'list',
    filterMode: 'startsWith',
    clearable: false,
    disabled: false,
    readonly: false,
    required: false,
    invalid: false,
    size: 'default',
    variant: 'default',
    closeOnSelect: true,
    loading: false,
    loadingText: 'Loading...',
    noResultsText: 'No results found',
    helpText: '',
    errorText: '',
    multiple: false,
  },
} satisfies Meta<typeof VueCombobox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Select State',
    placeholder: 'Choose a state...',
    options: stateOptions,
  },
  render: (args: VueComboboxProps) => ({
    components: { VueCombobox },
    setup() {
      return { args };
    },
    template: `
      <div style="max-width: 400px;">
        <VueCombobox v-bind="args" />
      </div>
    `,
  }),
};

export const WithHelpText: Story = {
  args: {
    label: 'Select State',
    placeholder: 'Choose a state...',
    options: stateOptions,
    helpText: 'Select the state where you reside',
  },
  render: (args: VueComboboxProps) => ({
    components: { VueCombobox },
    setup() {
      return { args };
    },
    template: `
      <div style="max-width: 400px;">
        <VueCombobox v-bind="args" />
      </div>
    `,
  }),
};

export const WithError: Story = {
  args: {
    label: 'Select State',
    placeholder: 'Choose a state...',
    options: stateOptions,
    errorText: 'State is required',
    invalid: true,
  },
  render: (args: VueComboboxProps) => ({
    components: { VueCombobox },
    setup() {
      return { args };
    },
    template: `
      <div style="max-width: 400px;">
        <VueCombobox v-bind="args" />
      </div>
    `,
  }),
};

export const Small: Story = {
  args: {
    label: 'Select State',
    placeholder: 'Choose a state...',
    options: stateOptions,
    size: 'small',
  },
  render: (args: VueComboboxProps) => ({
    components: { VueCombobox },
    setup() {
      return { args };
    },
    template: `
      <div style="max-width: 400px;">
        <VueCombobox v-bind="args" />
      </div>
    `,
  }),
};

export const Large: Story = {
  args: {
    label: 'Select State',
    placeholder: 'Choose a state...',
    options: stateOptions,
    size: 'large',
  },
  render: (args: VueComboboxProps) => ({
    components: { VueCombobox },
    setup() {
      return { args };
    },
    template: `
      <div style="max-width: 400px;">
        <VueCombobox v-bind="args" />
      </div>
    `,
  }),
};

export const Clearable: Story = {
  args: {
    label: 'Select State',
    placeholder: 'Choose a state...',
    options: stateOptions,
    value: 'ca',
    clearable: true,
  },
  render: (args: VueComboboxProps) => ({
    components: { VueCombobox },
    setup() {
      return { args };
    },
    template: `
      <div style="max-width: 400px;">
        <VueCombobox v-bind="args" />
      </div>
    `,
  }),
};

export const Disabled: Story = {
  args: {
    label: 'Select State',
    placeholder: 'Choose a state...',
    options: stateOptions,
    value: 'ca',
    disabled: true,
  },
  render: (args: VueComboboxProps) => ({
    components: { VueCombobox },
    setup() {
      return { args };
    },
    template: `
      <div style="max-width: 400px;">
        <VueCombobox v-bind="args" />
      </div>
    `,
  }),
};

export const Readonly: Story = {
  args: {
    label: 'Select State',
    placeholder: 'Choose a state...',
    options: stateOptions,
    value: 'ca',
    readonly: true,
  },
  render: (args: VueComboboxProps) => ({
    components: { VueCombobox },
    setup() {
      return { args };
    },
    template: `
      <div style="max-width: 400px;">
        <VueCombobox v-bind="args" />
      </div>
    `,
  }),
};

export const ContainsFilter: Story = {
  args: {
    label: 'Select State',
    placeholder: 'Type to search...',
    options: stateOptions,
    filterMode: 'contains',
    helpText: 'Try typing "or" to see California, Colorado, Florida, and Georgia',
  },
  render: (args: VueComboboxProps) => ({
    components: { VueCombobox },
    setup() {
      return { args };
    },
    template: `
      <div style="max-width: 400px;">
        <VueCombobox v-bind="args" />
      </div>
    `,
  }),
};

export const Loading: Story = {
  args: {
    label: 'Select State',
    placeholder: 'Loading...',
    options: [],
    loading: true,
    loadingText: 'Fetching states...',
  },
  render: (args: VueComboboxProps) => ({
    components: { VueCombobox },
    setup() {
      return { args };
    },
    template: `
      <div style="max-width: 400px;">
        <VueCombobox v-bind="args" />
      </div>
    `,
  }),
};

export const WithDisabledOptions: Story = {
  args: {
    label: 'Select State',
    placeholder: 'Choose a state...',
    options: [
      { value: 'ca', label: 'California' },
      { value: 'co', label: 'Colorado', disabled: true },
      { value: 'ct', label: 'Connecticut' },
      { value: 'fl', label: 'Florida', disabled: true },
      { value: 'ny', label: 'New York' },
    ],
    helpText: 'Colorado and Florida are disabled',
  },
  render: (args: VueComboboxProps) => ({
    components: { VueCombobox },
    setup() {
      return { args };
    },
    template: `
      <div style="max-width: 400px;">
        <VueCombobox v-bind="args" />
      </div>
    `,
  }),
};

export const SingleMonochrome: Story = {
  args: {
    label: 'Select State',
    placeholder: 'Choose a state...',
    options: stateOptions,
    closeOnSelect: false,
    variant: 'monochrome',
  },
  render: (args: VueComboboxProps) => ({
    components: { VueCombobox },
    setup() {
      return { args };
    },
    template: `
      <div style="max-width: 400px;">
        <VueCombobox v-bind="args" />
      </div>
    `,
  }),
};

export const Multiple: Story = {
  args: {
    label: 'Select States',
    placeholder: 'Choose one or more states...',
    options: stateOptions,
    multiple: true,
    closeOnSelect: false,
  },
  render: (args: VueComboboxProps) => ({
    components: { VueCombobox },
    setup() {
      return { args };
    },
    template: `
      <div style="max-width: 400px;">
        <VueCombobox v-bind="args" />
      </div>
    `,
  }),
};

export const MultipleWithDefaults: Story = {
  args: {
    label: 'Select States',
    placeholder: 'Choose one or more states...',
    options: stateOptions,
    multiple: true,
    closeOnSelect: false,
    defaultValue: ['ca', 'fl'],
    helpText: 'California and Florida are pre-selected.',
  },
  render: (args: VueComboboxProps) => ({
    components: { VueCombobox },
    setup() {
      return { args };
    },
    template: `
      <div style="max-width: 400px;">
        <VueCombobox v-bind="args" />
      </div>
    `,
  }),
};

export const MultipleClearable: Story = {
  args: {
    label: 'Select States',
    placeholder: 'Choose one or more states...',
    options: stateOptions,
    multiple: true,
    clearable: true,
    closeOnSelect: false,
    defaultValue: ['ny', 'co', 'az'],
  },
  render: (args: VueComboboxProps) => ({
    components: { VueCombobox },
    setup() {
      return { args };
    },
    template: `
      <div style="max-width: 400px;">
        <VueCombobox v-bind="args" />
      </div>
    `,
  }),
};

export const MultipleMaxVisible: Story = {
  args: {
    label: 'Select States',
    placeholder: 'Choose one or more states...',
    options: stateOptions,
    multiple: true,
    closeOnSelect: false,
    defaultValue: ['al', 'ak', 'az', 'ar', 'ca'],
    maxOptionsVisible: 2,
    helpText: 'Shows only 2 tags, with a +3 summary.',
  },
  render: (args: VueComboboxProps) => ({
    components: { VueCombobox },
    setup() {
      return { args };
    },
    template: `
      <div style="max-width: 400px;">
        <VueCombobox v-bind="args" />
      </div>
    `,
  }),
};

export const MultipleMonochrome: Story = {
  args: {
    label: 'Select States',
    placeholder: 'Choose one or more states...',
    options: stateOptions,
    multiple: true,
    closeOnSelect: false,
    defaultValue: ['ca', 'fl'],
    helpText: 'Selected items use the monochrome variant.',
    variant: 'monochrome',
  },
  render: (args: VueComboboxProps) => ({
    components: { VueCombobox },
    setup() {
      return { args };
    },
    template: `
      <div style="max-width: 400px;">
        <VueCombobox v-bind="args" />
      </div>
    `,
  }),
};

export const EventHandlers: Story = {
  render: (args: VueComboboxProps) => ({
    components: { VueCombobox },
    setup() {
      const logs = ref<string[]>([]);

      const addLog = (message: string) => {
        logs.value.push(`${new Date().toLocaleTimeString()}: ${message}`);
      };

      const clearLogs = () => {
        logs.value = [];
      };

      return { args, logs, addLog, clearLogs, stateOptions };
    },
    template: `
      <div style="max-width: 600px;">
        <p style="margin-bottom: 1rem;">
          <strong>Vue Event Handlers:</strong>
          <br />
          This demonstrates Vue event handlers using the @event syntax.
          <br />
          Events: @change, @select, @search, @open, @close, @focus, @blur
        </p>

        <VueCombobox
          label="Select State"
          placeholder="Choose a state..."
          :options="stateOptions"
          @change="(detail) => addLog(\`Change: value=\${JSON.stringify(detail.value)}\`)"
          @select="(detail) => addLog(\`Select: selected=\${JSON.stringify(detail.selected)}\`)"
          @search="(detail) => addLog(\`Search: searchTerm='\${detail.searchTerm}'\`)"
          @open="(detail) => addLog(\`Open: open=\${detail.open}\`)"
          @close="(detail) => addLog(\`Close: open=\${detail.open}\`)"
          @focus="() => addLog('Focus')"
          @blur="() => addLog('Blur')"
        />

        <div style="margin-top: 1.5rem; padding: 1rem; background-color: #f3f4f6; border-radius: 4px;">
          <strong>Event Log:</strong>
          <p v-if="logs.length === 0" style="color: #6b7280; font-size: 0.875rem; margin-top: 0.5rem;">
            Interact with the combobox to see events...
          </p>
          <div v-else style="margin-top: 0.5rem; max-height: 200px; overflow: auto;">
            <div
              v-for="(log, i) in logs"
              :key="i"
              style="font-size: 0.75rem; font-family: monospace; padding: 0.25rem 0;"
            >
              {{ log }}
            </div>
          </div>
          <button
            @click="clearLogs"
            style="margin-top: 0.5rem; padding: 0.25rem 0.5rem; font-size: 0.75rem;"
          >
            Clear Log
          </button>
        </div>
      </div>
    `,
  }),
};

export const ControlledState: Story = {
  render: (args: VueComboboxProps) => ({
    components: { VueCombobox },
    setup() {
      const selectedValue = ref('ca');

      const handleChange = (detail: { value: string | string[] }) => {
        selectedValue.value = detail.value as string;
      };

      const resetValue = () => {
        selectedValue.value = '';
      };

      const setFlorida = () => {
        selectedValue.value = 'fl';
      };

      return { args, selectedValue, handleChange, resetValue, setFlorida, stateOptions };
    },
    template: `
      <div style="max-width: 600px;">
        <p style="margin-bottom: 1rem;">
          <strong>Controlled State Example:</strong>
          <br />
          Current value: <code>{{ selectedValue || '(none)' }}</code>
        </p>

        <VueCombobox
          label="Select State"
          placeholder="Choose a state..."
          :options="stateOptions"
          :value="selectedValue"
          @change="handleChange"
        />

        <div style="margin-top: 1rem; display: flex; gap: 0.5rem;">
          <button @click="resetValue" style="padding: 0.5rem 1rem;">
            Reset
          </button>
          <button @click="setFlorida" style="padding: 0.5rem 1rem;">
            Set to Florida
          </button>
        </div>
      </div>
    `,
  }),
};

export const MultipleControlledState: Story = {
  render: (args: VueComboboxProps) => ({
    components: { VueCombobox },
    setup() {
      const selectedValues = ref<string[]>(['ca', 'ny']);

      const handleChange = (detail: { value: string | string[] }) => {
        selectedValues.value = detail.value as string[];
      };

      const resetValues = () => {
        selectedValues.value = [];
      };

      const selectThree = () => {
        selectedValues.value = ['ca', 'fl', 'ny'];
      };

      return { args, selectedValues, handleChange, resetValues, selectThree, stateOptions };
    },
    template: `
      <div style="max-width: 600px;">
        <p style="margin-bottom: 1rem;">
          <strong>Multiple Controlled State Example:</strong>
          <br />
          Current values: <code>{{ selectedValues.length > 0 ? selectedValues.join(', ') : '(none)' }}</code>
        </p>

        <VueCombobox
          label="Select States"
          placeholder="Choose one or more states..."
          :options="stateOptions"
          :value="selectedValues"
          :multiple="true"
          :closeOnSelect="false"
          @change="handleChange"
        />

        <div style="margin-top: 1rem; display: flex; gap: 0.5rem;">
          <button @click="resetValues" style="padding: 0.5rem 1rem;">
            Reset
          </button>
          <button @click="selectThree" style="padding: 0.5rem 1rem;">
            Select 3 States
          </button>
        </div>
      </div>
    `,
  }),
};

export const LabelHidden: Story = {
  args: {
    label: 'Select State',
    labelHidden: true,
    placeholder: 'Choose a state...',
    options: stateOptions,
    helpText: 'Label is visually hidden but still accessible to screen readers',
  },
  render: (args: VueComboboxProps) => ({
    components: { VueCombobox },
    setup() {
      return { args };
    },
    template: `
      <div style="max-width: 400px;">
        <VueCombobox v-bind="args" />
      </div>
    `,
  }),
};

export const NoLabel: Story = {
  args: {
    noLabel: true,
    ariaLabel: 'Select State',
    placeholder: 'Choose a state...',
    options: stateOptions,
    helpText: 'No visual label, but aria-label provides accessibility',
  },
  render: (args: VueComboboxProps) => ({
    components: { VueCombobox },
    setup() {
      return { args };
    },
    template: `
      <div style="max-width: 400px;">
        <VueCombobox v-bind="args" />
      </div>
    `,
  }),
};

export const CSSPartsCustomization: Story = {
  render: (args: VueComboboxProps) => ({
    components: { VueCombobox },
    setup() {
      const styles = `
        <style>
          .custom-combobox::part(ag-combobox-input-wrapper) {
            border: 2px solid #4a5568;
            border-radius: 8px;
          }
          .custom-combobox::part(ag-combobox-input) {
            font-weight: 500;
          }
          .custom-combobox::part(ag-combobox-listbox) {
            border: 2px solid #4a5568;
            border-radius: 8px;
            background-color: #f7fafc;
          }
          .custom-combobox::part(ag-combobox-option) {
            padding: 12px;
          }
          .custom-combobox::part(ag-combobox-option):hover {
            background-color: #4299e1;
            color: white;
          }
        </style>
      `;
      return { args, styles, stateOptions };
    },
    template: `
      <div style="max-width: 400px;">
        <div v-html="styles"></div>
        <VueCombobox
          class="custom-combobox"
          label="Custom Styled Combobox"
          placeholder="Choose a state..."
          :options="stateOptions"
        />
      </div>
    `,
  }),
};
