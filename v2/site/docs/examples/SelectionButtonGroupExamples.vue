<template>
  <div class="examples-container">
    <!-- Radio Group -->
    <section class="example-section">
      <h3>Radio Group (Single Selection)</h3>
      <VueSelectionButtonGroup
        type="radio"
        name="payment-method"
        legend="Select payment method"
        shape="rounded"
        @selection-change="handleChange"
      >
        <VueSelectionButton value="card" label="Credit Card">
          Credit Card
        </VueSelectionButton>
        <VueSelectionButton value="paypal" label="PayPal">
          PayPal
        </VueSelectionButton>
        <VueSelectionButton value="bank" label="Bank Transfer">
          Bank Transfer
        </VueSelectionButton>
      </VueSelectionButtonGroup>
      <p class="selection-output">Selected: {{ radioSelection }}</p>
    </section>

    <!-- Checkbox Group -->
    <section class="example-section">
      <h3>Checkbox Group (Multiple Selection)</h3>
      <VueSelectionButtonGroup
        type="checkbox"
        name="toppings"
        legend="Select toppings"
        shape="rounded"
        @selection-change="handleCheckboxChange"
      >
        <VueSelectionButton value="cheese" label="Extra Cheese">
          Extra Cheese
        </VueSelectionButton>
        <VueSelectionButton value="pepperoni" label="Pepperoni">
          Pepperoni
        </VueSelectionButton>
        <VueSelectionButton value="mushrooms" label="Mushrooms">
          Mushrooms
        </VueSelectionButton>
        <VueSelectionButton value="olives" label="Olives">
          Olives
        </VueSelectionButton>
      </VueSelectionButtonGroup>
      <p class="selection-output">Selected: {{ checkboxSelection.join(', ') || 'None' }}</p>
    </section>

    <!-- Theme Variants -->
    <section class="example-section">
      <h3>Theme Variants</h3>
      <div class="theme-grid">
        <div>
          <p class="theme-label">Default (Primary)</p>
          <VueSelectionButtonGroup
            type="radio"
            name="theme-default"
            legend="Default theme"
            legend-hidden
            shape="rounded"
          >
            <VueSelectionButton value="a" label="Option A">A</VueSelectionButton>
            <VueSelectionButton value="b" label="Option B">B</VueSelectionButton>
          </VueSelectionButtonGroup>
        </div>
        <div>
          <p class="theme-label">Success</p>
          <VueSelectionButtonGroup
            type="radio"
            name="theme-success"
            legend="Success theme"
            legend-hidden
            theme="success"
            shape="rounded"
          >
            <VueSelectionButton value="a" label="Option A">A</VueSelectionButton>
            <VueSelectionButton value="b" label="Option B">B</VueSelectionButton>
          </VueSelectionButtonGroup>
        </div>
        <div>
          <p class="theme-label">Info</p>
          <VueSelectionButtonGroup
            type="radio"
            name="theme-info"
            legend="Info theme"
            legend-hidden
            theme="info"
            shape="rounded"
          >
            <VueSelectionButton value="a" label="Option A">A</VueSelectionButton>
            <VueSelectionButton value="b" label="Option B">B</VueSelectionButton>
          </VueSelectionButtonGroup>
        </div>
        <div>
          <p class="theme-label">Warning</p>
          <VueSelectionButtonGroup
            type="radio"
            name="theme-warning"
            legend="Warning theme"
            legend-hidden
            theme="warning"
            shape="rounded"
          >
            <VueSelectionButton value="a" label="Option A">A</VueSelectionButton>
            <VueSelectionButton value="b" label="Option B">B</VueSelectionButton>
          </VueSelectionButtonGroup>
        </div>
        <div>
          <p class="theme-label">Error</p>
          <VueSelectionButtonGroup
            type="radio"
            name="theme-error"
            legend="Error theme"
            legend-hidden
            theme="error"
            shape="rounded"
          >
            <VueSelectionButton value="a" label="Option A">A</VueSelectionButton>
            <VueSelectionButton value="b" label="Option B">B</VueSelectionButton>
          </VueSelectionButtonGroup>
        </div>
        <div>
          <p class="theme-label">Monochrome</p>
          <VueSelectionButtonGroup
            type="radio"
            name="theme-monochrome"
            legend="Monochrome theme"
            legend-hidden
            theme="monochrome"
            shape="rounded"
          >
            <VueSelectionButton value="a" label="Option A">A</VueSelectionButton>
            <VueSelectionButton value="b" label="Option B">B</VueSelectionButton>
          </VueSelectionButtonGroup>
        </div>
      </div>
    </section>

    <!-- Size Variants -->
    <section class="example-section">
      <h3>Size Variants</h3>
      <div class="size-grid">
        <div>
          <p class="size-label">Small (sm)</p>
          <VueSelectionButtonGroup
            type="radio"
            name="size-sm"
            legend="Small size"
            legend-hidden
            size="sm"
            shape="rounded"
          >
            <VueSelectionButton value="a" label="Option A">Option A</VueSelectionButton>
            <VueSelectionButton value="b" label="Option B">Option B</VueSelectionButton>
          </VueSelectionButtonGroup>
        </div>
        <div>
          <p class="size-label">Medium (md) - Default</p>
          <VueSelectionButtonGroup
            type="radio"
            name="size-md"
            legend="Medium size"
            legend-hidden
            size="md"
            shape="rounded"
          >
            <VueSelectionButton value="a" label="Option A">Option A</VueSelectionButton>
            <VueSelectionButton value="b" label="Option B">Option B</VueSelectionButton>
          </VueSelectionButtonGroup>
        </div>
        <div>
          <p class="size-label">Large (lg)</p>
          <VueSelectionButtonGroup
            type="radio"
            name="size-lg"
            legend="Large size"
            legend-hidden
            size="lg"
            shape="rounded"
          >
            <VueSelectionButton value="a" label="Option A">Option A</VueSelectionButton>
            <VueSelectionButton value="b" label="Option B">Option B</VueSelectionButton>
          </VueSelectionButtonGroup>
        </div>
      </div>
    </section>

    <!-- Shape Variants -->
    <section class="example-section">
      <h3>Shape Variants</h3>
      <div class="shape-grid">
        <div>
          <p class="shape-label">Default (rectangular)</p>
          <VueSelectionButtonGroup
            type="radio"
            name="shape-default"
            legend="Default shape"
            legend-hidden
          >
            <VueSelectionButton value="a" label="Option A">Option A</VueSelectionButton>
            <VueSelectionButton value="b" label="Option B">Option B</VueSelectionButton>
          </VueSelectionButtonGroup>
        </div>
        <div>
          <p class="shape-label">Rounded</p>
          <VueSelectionButtonGroup
            type="radio"
            name="shape-rounded"
            legend="Rounded shape"
            legend-hidden
            shape="rounded"
          >
            <VueSelectionButton value="a" label="Option A">Option A</VueSelectionButton>
            <VueSelectionButton value="b" label="Option B">Option B</VueSelectionButton>
          </VueSelectionButtonGroup>
        </div>
        <div>
          <p class="shape-label">Capsule (pill)</p>
          <VueSelectionButtonGroup
            type="radio"
            name="shape-capsule"
            legend="Capsule shape"
            legend-hidden
            shape="capsule"
          >
            <VueSelectionButton value="a" label="Option A">Option A</VueSelectionButton>
            <VueSelectionButton value="b" label="Option B">Option B</VueSelectionButton>
          </VueSelectionButtonGroup>
        </div>
      </div>
    </section>

    <!-- Disabled State -->
    <section class="example-section">
      <h3>Disabled State</h3>
      <VueSelectionButtonGroup
        type="radio"
        name="disabled-example"
        legend="Disabled group"
        shape="rounded"
        disabled
      >
        <VueSelectionButton value="a" label="Option A">Option A</VueSelectionButton>
        <VueSelectionButton value="b" label="Option B">Option B</VueSelectionButton>
        <VueSelectionButton value="c" label="Option C">Option C</VueSelectionButton>
      </VueSelectionButtonGroup>
    </section>
    <section class="example-section">
      <h3>Disabled Individual Button State</h3>
      <VueSelectionButtonGroup
        type="radio"
        name="disabled-button-example"
        legend="Disabled individual"
        shape="rounded"
      >
        <VueSelectionButton value="a" label="Option A">Option A</VueSelectionButton>
        <VueSelectionButton disabled value="b" label="Option B">Option B</VueSelectionButton>
        <VueSelectionButton value="c" label="Option C">Option C</VueSelectionButton>
        <VueSelectionButton disabled value="d" label="Option D">Option D</VueSelectionButton>
        <VueSelectionButton value="e" label="Option E">Option E</VueSelectionButton>
      </VueSelectionButtonGroup>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VueSelectionButtonGroup } from 'agnosticui-core/selection-button-group/vue';
import { VueSelectionButton } from 'agnosticui-core/selection-button/vue';

const radioSelection = ref('');
const checkboxSelection = ref<string[]>([]);

const handleChange = (e: CustomEvent) => {
  radioSelection.value = e.detail.selectedValues[0] || '';
};

const handleCheckboxChange = (e: CustomEvent) => {
  checkboxSelection.value = e.detail.selectedValues;
};
</script>

<style scoped>
.examples-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.example-section {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.example-section h3 {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
}

.selection-output {
  margin: 0;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
}

.theme-grid,
.size-grid,
.shape-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.theme-label,
.size-label,
.shape-label {
  margin: 0 0 0.5rem 0;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
}
</style>
