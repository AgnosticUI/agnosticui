<template>
  <section>
    <div class="mbe4">
      <h3>Basic Combobox</h3>
    </div>
    <div class="stacked mbe4">
      <VueCombobox
        v-model:value="selectedState"
        :options="stateOptions"
        label="Select State"
        placeholder="Choose a state..."
        class="mbe2"
        @change="handleStateChange"
      />
      <p class="text-sm text-secondary">Selected: {{ selectedState || 'None' }}</p>
    </div>

    <div class="mbe4">
      <h3>Sizes</h3>
    </div>
    <div class="stacked mbe4">
      <VueCombobox
        v-model:value="sizeSmall"
        :options="stateOptions"
        label="Small Combobox"
        size="small"
        placeholder="Small size"
        class="mbe2"
      />
      <VueCombobox
        v-model:value="sizeDefault"
        :options="stateOptions"
        label="Default Combobox"
        size="default"
        placeholder="Default size"
        class="mbe2"
      />
      <VueCombobox
        v-model:value="sizeLarge"
        :options="stateOptions"
        label="Large Combobox"
        size="large"
        placeholder="Large size"
        class="mbe2"
      />
    </div>

    <div class="mbe4">
      <h3>Filter Modes</h3>
    </div>
    <div class="stacked mbe4">
      <VueCombobox
        v-model:value="filterStartsWith"
        :options="stateOptions"
        label="Starts With Filter"
        filter-mode="startsWith"
        placeholder="Type to filter..."
        help-text="Try typing 'Ca' to see California"
        class="mbe2"
      />
      <VueCombobox
        v-model:value="filterContains"
        :options="stateOptions"
        label="Contains Filter"
        filter-mode="contains"
        placeholder="Type to search..."
        help-text="Try typing 'or' to see multiple matches"
        class="mbe2"
      />
    </div>

    <div class="mbe4">
      <h3>Clearable</h3>
    </div>
    <div class="stacked mbe4">
      <VueCombobox
        v-model:value="clearableValue"
        :options="stateOptions"
        label="Clearable Combobox"
        :clearable="true"
        placeholder="Select and clear..."
        help-text="Clear button appears when a value is selected"
        class="mbe2"
      />
      <p class="text-sm text-secondary">Selected: {{ clearableValue || 'None' }}</p>
    </div>

    <div class="mbe4">
      <h3>States</h3>
    </div>
    <div class="stacked mbe4">
      <VueCombobox
        v-model:value="stateDisabled"
        :options="stateOptions"
        label="Disabled Combobox"
        :disabled="true"
        placeholder="This is disabled"
        class="mbe2"
      />
      <VueCombobox
        v-model:value="stateReadonly"
        :options="stateOptions"
        label="Readonly Combobox"
        :readonly="true"
        placeholder="This is readonly"
        class="mbe2"
      />
      <VueCombobox
        v-model:value="stateRequired"
        :options="stateOptions"
        label="Required Combobox"
        :required="true"
        placeholder="This is required"
        help-text="This field is required"
        class="mbe2"
      />
      <VueCombobox
        v-model:value="stateInvalid"
        :options="stateOptions"
        label="Invalid Combobox"
        :invalid="true"
        error-text="Please select a valid state"
        placeholder="This has an error"
        class="mbe2"
      />
    </div>

    <div class="mbe4">
      <h3>With Help Text</h3>
    </div>
    <div class="stacked mbe4">
      <VueCombobox
        v-model:value="helpTextValue"
        :options="stateOptions"
        label="State of Residence"
        placeholder="Select your state..."
        help-text="Choose the state where you currently reside"
        class="mbe2"
      />
    </div>

    <div class="mbe4">
      <h3>Loading State</h3>
    </div>
    <div class="stacked mbe4">
      <VueCombobox
        v-model:value="loadingValue"
        :options="loadingOptions"
        label="Loading Combobox"
        :loading="isLoading"
        loading-text="Fetching states..."
        placeholder="Loading..."
        class="mbe2"
      />
      <button @click="toggleLoading" class="btn btn-primary">
        {{ isLoading ? 'Stop Loading' : 'Start Loading' }}
      </button>
    </div>

    <div class="mbe4">
      <h3>With Disabled Options</h3>
    </div>
    <div class="stacked mbe4">
      <VueCombobox
        v-model:value="disabledOptionsValue"
        :options="optionsWithDisabled"
        label="Select State"
        placeholder="Some options are disabled..."
        help-text="Colorado and Florida are disabled"
        class="mbe2"
      />
    </div>

    <div class="mbe4">
      <h3>Custom No Results Text</h3>
    </div>
    <div class="stacked mbe4">
      <VueCombobox
        v-model:value="customNoResults"
        :options="stateOptions"
        label="Search States"
        placeholder="Type to search..."
        no-results-text="No states match your search"
        help-text="Try typing 'xyz' to see custom no results message"
        class="mbe2"
      />
    </div>

    <div class="mbe4">
      <h3>Hidden Label</h3>
    </div>
    <div class="stacked mbe4">
      <VueCombobox
        v-model:value="hiddenLabelValue"
        :options="stateOptions"
        label="State (Hidden)"
        :label-hidden="true"
        placeholder="Label is visually hidden but accessible"
        help-text="The label is hidden visually but still accessible to screen readers"
        class="mbe2"
      />
    </div>

    <div class="mbe4">
      <h3>Monochrome Variant (Single Select)</h3>
    </div>
    <div class="stacked mbe4">
      <VueCombobox
        v-model:value="monochromeValue"
        :options="stateOptions"
        label="Select State"
        variant="monochrome"
        placeholder="Choose a state..."
        help-text="Monochrome variant with inverted colors for selected items"
        class="mbe2"
      />
    </div>

    <div class="mbe4">
      <h3>Multiple Select</h3>
    </div>
    <div class="stacked mbe4">
      <VueCombobox
        v-model:value="multipleValue"
        :options="stateOptions"
        label="Select States"
        :multiple="true"
        :close-on-select="false"
        placeholder="Choose one or more states..."
        help-text="Select multiple states with checkboxes"
        class="mbe2"
      />
      <p class="text-sm text-secondary">Selected: {{ Array.isArray(multipleValue) ? multipleValue.join(', ') : 'None' }}</p>
    </div>

    <div class="mbe4">
      <h3>Multiple with Defaults</h3>
    </div>
    <div class="stacked mbe4">
      <VueCombobox
        :options="stateOptions"
        label="Pre-selected States"
        :multiple="true"
        :close-on-select="false"
        :default-value="['ca', 'fl']"
        help-text="California and Florida are pre-selected"
        class="mbe2"
      />
    </div>

    <div class="mbe4">
      <h3>Multiple Clearable</h3>
    </div>
    <div class="stacked mbe4">
      <VueCombobox
        v-model:value="multipleClearable"
        :options="stateOptions"
        label="Select States"
        :multiple="true"
        :clearable="true"
        :close-on-select="false"
        placeholder="Select and clear multiple..."
        help-text="Clear button removes all selections"
        class="mbe2"
      />
    </div>

    <div class="mbe4">
      <h3>Multiple with Max Visible Tags</h3>
    </div>
    <div class="stacked mbe4">
      <VueCombobox
        :options="stateOptions"
        label="Select States"
        :multiple="true"
        :close-on-select="false"
        :default-value="['al', 'ak', 'az', 'ar', 'ca']"
        :max-options-visible="2"
        help-text="Shows only 2 tags, with a +3 summary"
        class="mbe2"
      />
    </div>

    <div class="mbe4">
      <h3>Multiple Monochrome</h3>
    </div>
    <div class="stacked mbe4">
      <VueCombobox
        v-model:value="multipleMonochrome"
        :options="stateOptions"
        label="Select States"
        :multiple="true"
        variant="monochrome"
        :close-on-select="false"
        placeholder="Choose one or more states..."
        help-text="Multiple select with monochrome variant"
        class="mbe2"
      />
    </div>

    <div class="mbe4">
      <h3>Event Handling</h3>
    </div>
    <div class="stacked mbe4">
      <div
        class="flex-inline items-center"
        :style="{gap: '10px'}"
      >
        <VueCombobox
          v-model:value="eventTestValue"
          :options="stateOptions"
          label="Event Test"
          placeholder="Type or select..."
          @change="handleChange"
          @select="handleSelect"
          @search="handleSearch"
          class="mbe2"
        />
        <p v-if="lastEvent">
          Last event: <strong>{{ lastEvent }}</strong>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import VueCombobox from 'agnosticui-core/combobox/vue';
import type { ComboboxOption } from 'agnosticui-core/combobox';

// State options
const stateOptions: ComboboxOption[] = [
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

// Options with some disabled
const optionsWithDisabled: ComboboxOption[] = [
  { value: 'ca', label: 'California' },
  { value: 'co', label: 'Colorado', disabled: true },
  { value: 'ct', label: 'Connecticut' },
  { value: 'fl', label: 'Florida', disabled: true },
  { value: 'ny', label: 'New York' },
];

// Basic
const selectedState = ref('');

// Sizes
const sizeSmall = ref('');
const sizeDefault = ref('');
const sizeLarge = ref('');

// Filter modes
const filterStartsWith = ref('');
const filterContains = ref('');

// Clearable
const clearableValue = ref('ca');

// States
const stateDisabled = ref('ca');
const stateReadonly = ref('co');
const stateRequired = ref('');
const stateInvalid = ref('');

// Help text
const helpTextValue = ref('');

// Loading
const loadingValue = ref('');
const loadingOptions = ref<ComboboxOption[]>([]);
const isLoading = ref(false);

// Disabled options
const disabledOptionsValue = ref('');

// Custom no results
const customNoResults = ref('');

// Hidden label
const hiddenLabelValue = ref('');

// Monochrome
const monochromeValue = ref('');

// Multiple select
const multipleValue = ref<string[]>([]);
const multipleClearable = ref<string[]>(['ny', 'co']);
const multipleMonochrome = ref<string[]>([]);

// Event handling
const eventTestValue = ref('');
const lastEvent = ref<string | null>(null);
const lastSelectedValue = ref<string | null>(null);

const handleChange = (detail: { value: string; option: ComboboxOption | null }) => {
  lastSelectedValue.value = detail.value;
  const optionLabel = detail.option ? detail.option.label : 'cleared';
  lastEvent.value = `change (value: ${detail.value || 'none'}, option: ${optionLabel})`;
};

const handleSelect = (detail: { option: ComboboxOption; value: string }) => {
  lastSelectedValue.value = detail.value;
  lastEvent.value = `select (value: ${detail.value}, label: ${detail.option.label})`;
};

const handleSearch = (detail: { searchTerm: string }) => {
  const selectedInfo = lastSelectedValue.value ? `, selected: ${lastSelectedValue.value}` : '';
  lastEvent.value = `search (searchTerm: "${detail.searchTerm}"${selectedInfo})`;
};

// Basic state change handler
const handleStateChange = (detail: { value: string; option: ComboboxOption | null }) => {
  console.log('State changed:', detail);
};

// Toggle loading
const toggleLoading = () => {
  isLoading.value = !isLoading.value;
  if (isLoading.value) {
    loadingOptions.value = [];
    // Simulate async loading
    setTimeout(() => {
      loadingOptions.value = stateOptions;
      isLoading.value = false;
    }, 2000);
  } else {
    loadingOptions.value = stateOptions;
  }
};
</script>

<style scoped>
.stacked > * + * {
  margin-top: 1rem;
}

.text-sm {
  font-size: 0.875rem;
}

.text-secondary {
  color: var(--ag-text-secondary);
}

.btn {
  padding: var(--ag-space-2) var(--ag-space-4);
  border-radius: var(--ag-radius-md);
  border: none;
  cursor: pointer;
  font-size: var(--ag-font-size-base);
}

.btn-primary {
  background-color: var(--ag-primary);
  color: white;
}

.btn-primary:hover {
  opacity: 0.9;
}
</style>
