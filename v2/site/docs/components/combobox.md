# Combobox

An accessible autocomplete widget that combines a text input with a filterable dropdown list. Perfect for searchable select inputs with keyboard navigation support.

## Examples

<ComboboxExamples />

<script setup>
import ComboboxExamples from '../examples/ComboboxExamples.vue'
</script>

## Usage

::: details Vue
```vue
<template>
  <section>
    <!-- Basic combobox -->
    <VueCombobox
      v-model:value="selectedState"
      :options="stateOptions"
      label="Select State"
      placeholder="Choose a state..."
      @change="handleChange"
    />

    <!-- With help text -->
    <VueCombobox
      v-model:value="state"
      :options="stateOptions"
      label="State of Residence"
      placeholder="Select your state..."
      help-text="Choose the state where you currently reside"
    />

    <!-- With validation -->
    <VueCombobox
      v-model:value="requiredState"
      :options="stateOptions"
      label="Required State"
      :required="true"
      :invalid="isInvalid"
      error-text="State is required"
    />

    <!-- Clearable -->
    <VueCombobox
      v-model:value="clearableState"
      :options="stateOptions"
      label="Select State"
      :clearable="true"
      placeholder="Select and clear..."
    />

    <!-- Contains filter -->
    <VueCombobox
      v-model:value="searchState"
      :options="stateOptions"
      label="Search States"
      filter-mode="contains"
      placeholder="Type to search..."
      @search="handleSearch"
    />

    <!-- Size variants -->
    <VueCombobox
      v-model:value="small"
      :options="stateOptions"
      label="Small Combobox"
      size="small"
    />

    <VueCombobox
      v-model:value="large"
      :options="stateOptions"
      label="Large Combobox"
      size="large"
    />

    <!-- With disabled options -->
    <VueCombobox
      v-model:value="value"
      :options="optionsWithDisabled"
      label="Select State"
      placeholder="Some options are disabled..."
    />

    <!-- Loading state -->
    <VueCombobox
      v-model:value="asyncValue"
      :options="asyncOptions"
      label="Select State"
      :loading="isLoading"
      loading-text="Fetching states..."
    />

    <!-- Disabled -->
    <VueCombobox
      v-model:value="disabled"
      :options="stateOptions"
      label="Disabled Combobox"
      :disabled="true"
    />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import VueCombobox from 'agnosticui-core/combobox/vue';
import type { ComboboxOption } from 'agnosticui-core/combobox';

const stateOptions: ComboboxOption[] = [
  { value: 'ca', label: 'California' },
  { value: 'co', label: 'Colorado' },
  { value: 'ct', label: 'Connecticut' },
  { value: 'fl', label: 'Florida' },
  { value: 'ny', label: 'New York' },
];

const optionsWithDisabled: ComboboxOption[] = [
  { value: 'ca', label: 'California' },
  { value: 'co', label: 'Colorado', disabled: true },
  { value: 'ct', label: 'Connecticut' },
];

const selectedState = ref('');
const state = ref('');
const requiredState = ref('');
const isInvalid = ref(false);
const clearableState = ref('ca');
const searchState = ref('');
const small = ref('');
const large = ref('');
const value = ref('');
const asyncValue = ref('');
const asyncOptions = ref<ComboboxOption[]>([]);
const isLoading = ref(false);
const disabled = ref('ca');

const handleChange = (event: CustomEvent) => {
  console.log('Selected:', event.detail.value);
};

const handleSearch = (event: CustomEvent) => {
  console.log('Search term:', event.detail.searchTerm);
};
</script>
```
:::

::: details React
```tsx
import { useState } from 'react';
import { ReactCombobox } from 'agnosticui-core/combobox/react';
import type { ComboboxOption, ComboboxChangeEvent } from 'agnosticui-core/combobox/react';

export default function ComboboxExample() {
  const stateOptions: ComboboxOption[] = [
    { value: 'ca', label: 'California' },
    { value: 'co', label: 'Colorado' },
    { value: 'ct', label: 'Connecticut' },
    { value: 'fl', label: 'Florida' },
    { value: 'ny', label: 'New York' },
  ];

  const optionsWithDisabled: ComboboxOption[] = [
    { value: 'ca', label: 'California' },
    { value: 'co', label: 'Colorado', disabled: true },
    { value: 'ct', label: 'Connecticut' },
  ];

  const [selectedState, setSelectedState] = useState('');
  const [state, setState] = useState('');
  const [requiredState, setRequiredState] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);
  const [clearableState, setClearableState] = useState('ca');
  const [searchState, setSearchState] = useState('');
  const [small, setSmall] = useState('');
  const [large, setLarge] = useState('');
  const [value, setValue] = useState('');
  const [asyncValue, setAsyncValue] = useState('');
  const [asyncOptions, setAsyncOptions] = useState<ComboboxOption[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: ComboboxChangeEvent) => {
    console.log('Selected:', event.detail.value);
    setSelectedState(event.detail.value);
  };

  const handleSearch = (event: CustomEvent) => {
    console.log('Search term:', event.detail.searchTerm);
  };

  return (
    <section>
      {/* Basic combobox */}
      <ReactCombobox
        value={selectedState}
        options={stateOptions}
        label="Select State"
        placeholder="Choose a state..."
        onChange={handleChange}
      />

      {/* With help text */}
      <ReactCombobox
        value={state}
        options={stateOptions}
        label="State of Residence"
        placeholder="Select your state..."
        helpText="Choose the state where you currently reside"
        onChange={(e) => setState(e.detail.value)}
      />

      {/* With validation */}
      <ReactCombobox
        value={requiredState}
        options={stateOptions}
        label="Required State"
        required
        invalid={isInvalid}
        errorText="State is required"
        onChange={(e) => setRequiredState(e.detail.value)}
      />

      {/* Clearable */}
      <ReactCombobox
        value={clearableState}
        options={stateOptions}
        label="Select State"
        clearable
        placeholder="Select and clear..."
        onChange={(e) => setClearableState(e.detail.value)}
      />

      {/* Contains filter */}
      <ReactCombobox
        value={searchState}
        options={stateOptions}
        label="Search States"
        filterMode="contains"
        placeholder="Type to search..."
        onChange={(e) => setSearchState(e.detail.value)}
        onSearch={handleSearch}
      />

      {/* Size variants */}
      <ReactCombobox
        value={small}
        options={stateOptions}
        label="Small Combobox"
        size="small"
        onChange={(e) => setSmall(e.detail.value)}
      />

      <ReactCombobox
        value={large}
        options={stateOptions}
        label="Large Combobox"
        size="large"
        onChange={(e) => setLarge(e.detail.value)}
      />

      {/* With disabled options */}
      <ReactCombobox
        value={value}
        options={optionsWithDisabled}
        label="Select State"
        placeholder="Some options are disabled..."
        onChange={(e) => setValue(e.detail.value)}
      />

      {/* Loading state */}
      <ReactCombobox
        value={asyncValue}
        options={asyncOptions}
        label="Select State"
        loading={isLoading}
        loadingText="Fetching states..."
        onChange={(e) => setAsyncValue(e.detail.value)}
      />

      {/* Disabled */}
      <ReactCombobox
        value="ca"
        options={stateOptions}
        label="Disabled Combobox"
        disabled
      />
    </section>
  );
}
```
:::

::: details Lit
```ts
import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import 'agnosticui-core/combobox';
import type { ComboboxOption, ComboboxChangeEvent } from 'agnosticui-core/combobox';

@customElement('combobox-example')
export class ComboboxExample extends LitElement {
  @state()
  private stateOptions: ComboboxOption[] = [
    { value: 'ca', label: 'California' },
    { value: 'co', label: 'Colorado' },
    { value: 'ct', label: 'Connecticut' },
    { value: 'fl', label: 'Florida' },
    { value: 'ny', label: 'New York' },
  ];

  @state()
  private selectedState = '';

  @state()
  private clearableState = 'ca';

  @state()
  private isLoading = false;

  private handleChange(event: ComboboxChangeEvent) {
    console.log('Selected:', event.detail.value);
    this.selectedState = event.detail.value;
  }

  private handleSearch(event: CustomEvent) {
    console.log('Search term:', event.detail.searchTerm);
  }

  render() {
    return html`
      <!-- Basic combobox -->
      <ag-combobox
        .options=${this.stateOptions}
        .value=${this.selectedState}
        label="Select State"
        placeholder="Choose a state..."
        @change=${this.handleChange}
      ></ag-combobox>

      <!-- With help text -->
      <ag-combobox
        .options=${this.stateOptions}
        label="State of Residence"
        placeholder="Select your state..."
        help-text="Choose the state where you currently reside"
      ></ag-combobox>

      <!-- With validation -->
      <ag-combobox
        .options=${this.stateOptions}
        label="Required State"
        ?required=${true}
        ?invalid=${false}
        error-text="State is required"
      ></ag-combobox>

      <!-- Clearable -->
      <ag-combobox
        .options=${this.stateOptions}
        .value=${this.clearableState}
        label="Select State"
        ?clearable=${true}
        placeholder="Select and clear..."
      ></ag-combobox>

      <!-- Contains filter -->
      <ag-combobox
        .options=${this.stateOptions}
        label="Search States"
        filter-mode="contains"
        placeholder="Type to search..."
        @search=${this.handleSearch}
      ></ag-combobox>

      <!-- Size variants -->
      <ag-combobox
        .options=${this.stateOptions}
        label="Small Combobox"
        size="small"
      ></ag-combobox>

      <ag-combobox
        .options=${this.stateOptions}
        label="Large Combobox"
        size="large"
      ></ag-combobox>

      <!-- Loading state -->
      <ag-combobox
        .options=${[]}
        label="Select State"
        ?loading=${this.isLoading}
        loading-text="Fetching states..."
      ></ag-combobox>

      <!-- Disabled -->
      <ag-combobox
        .options=${this.stateOptions}
        .value=${'ca'}
        label="Disabled Combobox"
        ?disabled=${true}
      ></ag-combobox>
    `;
  }
}
```
:::

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `ComboboxOption[]` | `[]` | Array of options to display in the listbox |
| `value` | `string` | `''` | Currently selected value |
| `defaultValue` | `string` | `''` | Initial value (uncontrolled mode) |
| `placeholder` | `string` | `''` | Placeholder text for the input |
| `label` | `string` | `''` | Label text for the combobox |
| `labelHidden` | `boolean` | `false` | Visually hide the label (still accessible to screen readers) |
| `noLabel` | `boolean` | `false` | Remove the label entirely |
| `ariaLabel` | `string \| null` | `null` | ARIA label for accessibility |
| `labelledBy` | `string` | `''` | ID of element that labels this combobox |
| `helpText` | `string` | `''` | Help text displayed below the input |
| `errorText` | `string` | `''` | Error message displayed below the input |
| `id` | `string` | (auto-generated) | Unique ID for the combobox |
| `autocomplete` | `'list' \| 'none'` | `'list'` | Autocomplete behavior |
| `filterMode` | `'startsWith' \| 'contains' \| 'none'` | `'startsWith'` | How to filter options based on input |
| `clearable` | `boolean` | `false` | Show clear button when value is selected |
| `disabled` | `boolean` | `false` | Disable the combobox |
| `readonly` | `boolean` | `false` | Make the combobox read-only |
| `required` | `boolean` | `false` | Mark the combobox as required |
| `invalid` | `boolean` | `false` | Mark the combobox as invalid |
| `size` | `'small' \| 'default' \| 'large'` | `'default'` | Size variant |
| `maxVisibleOptions` | `number` | `undefined` | Maximum number of visible options |
| `closeOnSelect` | `boolean` | `true` | Close listbox after selecting an option |
| `loading` | `boolean` | `false` | Show loading state |
| `loadingText` | `string` | `'Loading...'` | Loading message text |
| `noResultsText` | `string` | `'No results found'` | No results message text |

### ComboboxOption Interface

```typescript
interface ComboboxOption {
  value: string;           // Unique value for this option
  label: string;           // Display text
  disabled?: boolean;      // Whether option is disabled
  group?: string;          // Group name (Phase 2)
  icon?: string;           // Icon identifier (Phase 2)
  description?: string;    // Additional description (Phase 2)
  metadata?: Record<string, unknown>; // Custom data
}
```

### Events

| Event | Detail | Description |
|-------|--------|-------------|
| `change` | `{ value: string; option: ComboboxOption \| null }` | Fired when selection changes |
| `select` | `{ option: ComboboxOption; value: string }` | Fired when an option is selected |
| `search` | `{ searchTerm: string }` | Fired when search term changes |
| `open` | `{ open: boolean }` | Fired when listbox opens |
| `close` | `{ open: boolean }` | Fired when listbox closes |
| `focus` | `FocusEvent` | Fired when input gains focus |
| `blur` | `FocusEvent` | Fired when input loses focus |

### Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `focus()` | `() => void` | Focus the input |
| `blur()` | `() => void` | Blur the input |
| `open()` | `() => void` | Open the listbox |
| `close()` | `() => void` | Close the listbox |
| `toggle()` | `() => void` | Toggle listbox open/closed |
| `selectOption()` | `(optionOrValue: ComboboxOption \| string) => void` | Select an option by value or object |
| `clearSelection()` | `() => void` | Clear the current selection |

### CSS Parts

Use `::part()` to style component internals:

```css
ag-combobox::part(ag-combobox-wrapper) { /* Wrapper container */ }
ag-combobox::part(ag-combobox-label) { /* Label element */ }
ag-combobox::part(ag-combobox-input-wrapper) { /* Input wrapper */ }
ag-combobox::part(ag-combobox-input) { /* Input field */ }
ag-combobox::part(ag-combobox-toggle-button) { /* Dropdown toggle button */ }
ag-combobox::part(ag-combobox-clear-button) { /* Clear button */ }
ag-combobox::part(ag-combobox-listbox) { /* Dropdown listbox */ }
ag-combobox::part(ag-combobox-option) { /* Individual options */ }
ag-combobox::part(ag-combobox-loading) { /* Loading indicator */ }
ag-combobox::part(ag-combobox-no-results) { /* No results message */ }
ag-combobox::part(ag-combobox-help-text) { /* Help text */ }
ag-combobox::part(ag-combobox-error-message) { /* Error message */ }
```

### Design Tokens

Customize appearance with CSS custom properties:

```css
ag-combobox {
  --combobox-min-width: 200px;
  --combobox-max-width: 100%;
  --combobox-listbox-max-height: 300px;
  --combobox-option-padding: var(--ag-space-3) var(--ag-space-4);
  --combobox-option-selected-bg: var(--ag-blue-100);
  --combobox-option-hover-bg: var(--ag-background-tertiary);
  --combobox-option-focus-bg: var(--ag-blue-50);
  --combobox-toggle-size: var(--ag-space-6);
}
```

## Keyboard Navigation

| Key | Action |
|-----|--------|
| `ArrowDown` | Opens listbox (if closed) and moves focus to next option |
| `ArrowUp` | Opens listbox (if closed) and moves focus to previous option |
| `Enter` | Selects the focused option and closes listbox |
| `Escape` | Closes listbox (if open) or clears input (if closed with text) |
| `Tab` | Closes listbox and moves focus to next element |
| `Home` | Moves cursor to start of input |
| `End` | Moves cursor to end of input |
| Printable characters | Filters options based on typed text |

## Accessibility

The Combobox component follows [WCAG 2.1 Level AA](https://www.w3.org/WAI/WCAG21/quickref/) guidelines and implements the [W3C ARIA APG Combobox Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/):

- ✅ **ARIA attributes**: Proper `role`, `aria-expanded`, `aria-controls`, `aria-activedescendant`, `aria-autocomplete`
- ✅ **Keyboard navigation**: Full keyboard support with arrow keys, Enter, Escape, Tab
- ✅ **Focus management**: Uses `aria-activedescendant` pattern for predictable screen reader behavior
- ✅ **Screen reader announcements**: Live regions announce options as user navigates
- ✅ **Focus indicators**: Clear 2px outline with 3:1 contrast ratio
- ✅ **High contrast mode**: Tested with Windows High Contrast Mode
- ✅ **Reduced motion**: Respects `prefers-reduced-motion` setting
- ✅ **Color independence**: Selection state indicated with visual markers beyond color

### Screen Reader Support

Tested with:
- NVDA (Windows)
- JAWS (Windows)
- VoiceOver (macOS, iOS)
- TalkBack (Android)

## Filter Modes

### startsWith (default)
Matches options that start with the search term. Fast and predictable.

```vue
<VueCombobox
  :options="options"
  filter-mode="startsWith"
/>
```

### contains
Matches options that contain the search term anywhere. More forgiving for users.

```vue
<VueCombobox
  :options="options"
  filter-mode="contains"
/>
```

### none
Disables client-side filtering. Useful for server-side filtering scenarios.

```vue
<VueCombobox
  :options="options"
  filter-mode="none"
  @search="handleServerSearch"
/>
```

## Best Practices

### When to Use

✅ **Use Combobox when:**
- Users need to search through many options (>10)
- You want to provide typeahead/autocomplete functionality
- Users might know the exact value they're looking for
- You need accessible keyboard navigation
- You want to allow filtering/searching

❌ **Don't use Combobox when:**
- You have fewer than 5 simple options (use Radio or Select)
- Users need to compare options visually (use Radio group)
- The selection is critical and requires user confirmation (use Select with explicit submit)

### Accessibility Tips

1. **Always provide a label**: Use `label` prop or `aria-label` for screen readers
2. **Use help text**: Provide guidance with `helpText` prop
3. **Clear error messages**: Use `errorText` with specific, actionable messages
4. **Test keyboard navigation**: Ensure all features work without a mouse
5. **Test with screen readers**: Verify announcements are clear and helpful

### Performance

- Options are filtered in real-time as users type
- Uses efficient `startsWith` or `contains` algorithms
- Limits visible options with `maxVisibleOptions` for large datasets
- For very large datasets (>1000), consider server-side filtering with `filter-mode="none"`

## Phase 2 Features (Future)

The following features are planned for Phase 2:

- **Multiselect**: Select multiple options with tags
- **Grouped options**: Organize options into categories
- **Rich content**: Icons, descriptions, avatars in options
- **Async filtering**: Built-in debounce and async support
- **Fuzzy matching**: More forgiving search algorithm
- **Virtual scrolling**: Handle thousands of options efficiently
- **Mobile optimization**: Fullscreen mode on small screens
