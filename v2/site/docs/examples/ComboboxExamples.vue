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
        no-results-text="😕 No states match your search"
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

// Event handler
const handleStateChange = (event: CustomEvent<{ value: string; option: ComboboxOption | null }>) => {
  console.log('State changed:', event.detail);
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
