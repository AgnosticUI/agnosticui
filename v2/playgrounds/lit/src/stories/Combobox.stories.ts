import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { fn } from "storybook/test";
import "agnosticui-core/combobox";
import type { ComboboxProps } from "agnosticui-core/combobox";

// Sample options for stories
const stateOptions = [
  { value: "al", label: "Alabama" },
  { value: "ak", label: "Alaska" },
  { value: "az", label: "Arizona" },
  { value: "ar", label: "Arkansas" },
  { value: "ca", label: "California" },
  { value: "co", label: "Colorado" },
  { value: "ct", label: "Connecticut" },
  { value: "de", label: "Delaware" },
  { value: "fl", label: "Florida" },
  { value: "ga", label: "Georgia" },
];

const meta: Meta<ComboboxProps> = {
  title: "AgnosticUI Lit/Combobox",
  component: "ag-combobox",
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Label text for the combobox",
    },
    labelPosition: {
      control: "select",
      options: ["top", "start", "end", "bottom"],
      description: "Position of the label relative to the combobox",
    },
    labelHidden: {
      control: "boolean",
      description: "Visually hides the label (still accessible to screen readers)",
    },
    noLabel: {
      control: "boolean",
      description: "Removes the label entirely",
    },
    ariaLabel: {
      control: "text",
      description: "ARIA label for accessibility",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text",
    },
    value: {
      control: "text",
      description: "Current selected value",
    },
    autocomplete: {
      control: "select",
      options: ["list", "none"],
      description: "Autocomplete behavior",
    },
    filterMode: {
      control: "select",
      options: ["startsWith", "contains", "none"],
      description: "How to filter options based on input",
    },
    clearable: {
      control: "boolean",
      description: "Show clear button when value is selected",
    },
    disabled: {
      control: "boolean",
      description: "Disables the combobox",
    },
    readonly: {
      control: "boolean",
      description: "Makes the combobox read-only",
    },
    required: {
      control: "boolean",
      description: "Makes the combobox required",
    },
    invalid: {
      control: "boolean",
      description: "Marks the combobox as invalid",
    },
    size: {
      control: "select",
      options: ["small", "default", "large"],
      description: "Size of the combobox",
    },
    closeOnSelect: {
      control: "boolean",
      description: "Close listbox after selecting an option",
    },
    loading: {
      control: "boolean",
      description: "Show loading state",
    },
    loadingText: {
      control: "text",
      description: "Loading message text",
    },
    noResultsText: {
      control: "text",
      description: "No results message text",
    },
    helpText: {
      control: "text",
      description: "Help text to display",
    },
    errorMessage: {
      control: "text",
      description: "Error message to display",
    },
  },
  args: {
    label: "",
    labelPosition: "top",
    labelHidden: false,
    noLabel: false,
    placeholder: "",
    value: "",
    autocomplete: "list",
    filterMode: "startsWith",
    clearable: false,
    disabled: false,
    readonly: false,
    required: false,
    invalid: false,
    size: "default",
    closeOnSelect: true,
    loading: false,
    loadingText: "Loading...",
    noResultsText: "No results found",
    helpText: "",
    errorMessage: "",
    onChange: fn(),
    onSelect: fn(),
    onSearch: fn(),
    onOpen: fn(),
    onClose: fn(),
  },
  parameters: {
    actions: {
      handles: ["change", "select", "search", "open", "close", "focus", "blur"],
    },
  },
};

export default meta;
type Story = StoryObj<ComboboxProps>;

// Default story
export const Default: Story = {
  args: {
    label: "Select State",
    placeholder: "Choose a state...",
    options: stateOptions,
  },
  render: (args) => html`
    <ag-combobox
      .options=${args.options}
      .value=${args.value}
      label=${args.label}
      label-position=${args.labelPosition}
      placeholder=${args.placeholder}
      ?label-hidden=${args.labelHidden}
      ?no-label=${args.noLabel}
      ?clearable=${args.clearable}
      ?disabled=${args.disabled}
      ?readonly=${args.readonly}
      ?required=${args.required}
      ?invalid=${args.invalid}
      ?loading=${args.loading}
      size=${args.size}
      filter-mode=${args.filterMode}
      autocomplete=${args.autocomplete}
      ?close-on-select=${args.closeOnSelect}
      loading-text=${args.loadingText}
      no-results-text=${args.noResultsText}
      help-text=${args.helpText || ""}
      error-message=${args.errorMessage || ""}
      @change=${args.onChange}
      @select=${args.onSelect}
      @search=${args.onSearch}
      @open=${args.onOpen}
      @close=${args.onClose}
    ></ag-combobox>
  `,
};

// With help text
export const WithHelpText: Story = {
  args: {
    label: "Select State",
    placeholder: "Choose a state...",
    options: stateOptions,
    helpText: "Select the state where you reside",
  },
  render: (args) => html`
    <ag-combobox
      .options=${args.options}
      label=${args.label}
      placeholder=${args.placeholder}
      help-text=${args.helpText}
      @change=${args.onChange}
    ></ag-combobox>
  `,
};

// With error
export const WithError: Story = {
  args: {
    label: "Select State",
    placeholder: "Choose a state...",
    options: stateOptions,
    errorMessage: "State is required",
    invalid: true,
  },
  render: (args) => html`
    <ag-combobox
      .options=${args.options}
      label=${args.label}
      placeholder=${args.placeholder}
      error-message=${args.errorMessage}
      ?invalid=${args.invalid}
      @change=${args.onChange}
    ></ag-combobox>
  `,
};

// Small size
export const Small: Story = {
  args: {
    label: "Select State",
    placeholder: "Choose a state...",
    options: stateOptions,
    size: "small",
  },
  render: (args) => html`
    <ag-combobox
      .options=${args.options}
      label=${args.label}
      placeholder=${args.placeholder}
      size=${args.size}
      @change=${args.onChange}
    ></ag-combobox>
  `,
};

// Large size
export const Large: Story = {
  args: {
    label: "Select State",
    placeholder: "Choose a state...",
    options: stateOptions,
    size: "large",
  },
  render: (args) => html`
    <ag-combobox
      .options=${args.options}
      label=${args.label}
      placeholder=${args.placeholder}
      size=${args.size}
      @change=${args.onChange}
    ></ag-combobox>
  `,
};

// Clearable
export const Clearable: Story = {
  args: {
    label: "Select State",
    placeholder: "Choose a state...",
    options: stateOptions,
    value: "ca",
    clearable: true,
  },
  render: (args) => html`
    <ag-combobox
      .options=${args.options}
      .value=${args.value}
      label=${args.label}
      placeholder=${args.placeholder}
      ?clearable=${args.clearable}
      @change=${args.onChange}
    ></ag-combobox>
  `,
};

// Disabled
export const Disabled: Story = {
  args: {
    label: "Select State",
    placeholder: "Choose a state...",
    options: stateOptions,
    value: "ca",
    disabled: true,
  },
  render: (args) => html`
    <ag-combobox
      .options=${args.options}
      .value=${args.value}
      label=${args.label}
      placeholder=${args.placeholder}
      ?disabled=${args.disabled}
      @change=${args.onChange}
    ></ag-combobox>
  `,
};

// Contains filter mode
export const ContainsFilter: Story = {
  args: {
    label: "Select State",
    placeholder: "Type to search...",
    options: stateOptions,
    filterMode: "contains",
    helpText: 'Try typing "or" to see California, Colorado, Florida, and Georgia',
  },
  render: (args) => html`
    <ag-combobox
      .options=${args.options}
      label=${args.label}
      placeholder=${args.placeholder}
      filter-mode=${args.filterMode}
      help-text=${args.helpText}
      @change=${args.onChange}
      @search=${args.onSearch}
    ></ag-combobox>
  `,
};

// Loading state
export const Loading: Story = {
  args: {
    label: "Select State",
    placeholder: "Loading...",
    options: [],
    loading: true,
    loadingText: "Fetching states...",
  },
  render: (args) => html`
    <ag-combobox
      .options=${args.options}
      label=${args.label}
      placeholder=${args.placeholder}
      ?loading=${args.loading}
      loading-text=${args.loadingText}
      @change=${args.onChange}
    ></ag-combobox>
  `,
};

// With disabled options
export const WithDisabledOptions: Story = {
  args: {
    label: "Select State",
    placeholder: "Choose a state...",
    options: [
      { value: "ca", label: "California" },
      { value: "co", label: "Colorado", disabled: true },
      { value: "ct", label: "Connecticut" },
      { value: "fl", label: "Florida", disabled: true },
      { value: "ny", label: "New York" },
    ],
    helpText: "Colorado and Florida are disabled",
  },
  render: (args) => html`
    <ag-combobox
      .options=${args.options}
      label=${args.label}
      placeholder=${args.placeholder}
      help-text=${args.helpText}
      @change=${args.onChange}
    ></ag-combobox>
  `,
};

// Single monochrome variant
export const SingleMonochrome: Story = {
  args: {
    label: "Select State",
    placeholder: "Choose a state...",
    options: stateOptions,
    closeOnSelect: false,
    variant: "monochrome",
  },
  render: (args) => html`
    <ag-combobox
      .options=${args.options}
      label=${args.label}
      placeholder=${args.placeholder}
      ?close-on-select=${args.closeOnSelect}
      variant=${args.variant}
      @change=${args.onChange}
    ></ag-combobox>
  `,
};

// Multiple select story
export const Multiple: Story = {
  args: {
    label: "Select States",
    placeholder: "Choose one or more states...",
    options: stateOptions,
    multiple: true,
    closeOnSelect: false,
  },
  render: (args) => html`
    <ag-combobox
      .options=${args.options}
      .value=${args.value}
      label=${args.label}
      placeholder=${args.placeholder}
      ?multiple=${args.multiple}
      ?close-on-select=${args.closeOnSelect}
      @change=${args.onChange}
    ></ag-combobox>
  `,
};

// Multiple with default values
export const MultipleWithDefaults: Story = {
  args: {
    label: "Select States",
    placeholder: "Choose one or more states...",
    options: stateOptions,
    multiple: true,
    closeOnSelect: false,
    defaultValue: ["ca", "fl"],
    helpText: "California and Florida are pre-selected.",
  },
  render: (args) => html`
    <ag-combobox
      .options=${args.options}
      .defaultValue=${args.defaultValue}
      label=${args.label}
      placeholder=${args.placeholder}
      ?multiple=${args.multiple}
      ?close-on-select=${args.closeOnSelect}
      help-text=${args.helpText}
      @change=${args.onChange}
    ></ag-combobox>
  `,
};

// Multiple clearable
export const MultipleClearable: Story = {
  args: {
    label: "Select States",
    placeholder: "Choose one or more states...",
    options: stateOptions,
    multiple: true,
    clearable: true,
    closeOnSelect: false,
    defaultValue: ["ny", "co", "az"],
  },
  render: (args) => html`
    <ag-combobox
      .options=${args.options}
      .defaultValue=${args.defaultValue}
      label=${args.label}
      placeholder=${args.placeholder}
      ?multiple=${args.multiple}
      ?clearable=${args.clearable}
      ?close-on-select=${args.closeOnSelect}
      @change=${args.onChange}
    ></ag-combobox>
  `,
};

// Multiple with max visible options
export const MultipleMaxVisible: Story = {
  args: {
    label: "Select States",
    placeholder: "Choose one or more states...",
    options: stateOptions,
    multiple: true,
    closeOnSelect: false,
    defaultValue: ["al", "ak", "az", "ar", "ca"],
    maxOptionsVisible: 2,
    helpText: "Shows only 2 tags, with a +3 summary.",
  },
  render: (args) => html`
    <ag-combobox
      .options=${args.options}
      .defaultValue=${args.defaultValue}
      label=${args.label}
      placeholder=${args.placeholder}
      ?multiple=${args.multiple}
      ?close-on-select=${args.closeOnSelect}
      max-options-visible=${args.maxOptionsVisible}
      help-text=${args.helpText}
      @change=${args.onChange}
    ></ag-combobox>
  `,
};

// Multiple with monochrome variant
export const MultipleMonochrome: Story = {
  args: {
    label: "Select States",
    placeholder: "Choose one or more states...",
    options: stateOptions,
    multiple: true,
    closeOnSelect: false,
    defaultValue: ["ca", "fl"],
    helpText: "Selected items use the monochrome variant.",
    variant: "monochrome",
  },
  render: (args) => html`
    <ag-combobox
      .options=${args.options}
      .defaultValue=${args.defaultValue}
      label=${args.label}
      placeholder=${args.placeholder}
      ?multiple=${args.multiple}
      ?close-on-select=${args.closeOnSelect}
      variant=${args.variant}
      help-text=${args.helpText}
      @change=${args.onChange}
    ></ag-combobox>
  `,
};
