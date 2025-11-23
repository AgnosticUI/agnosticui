<template>
  <section>
    <div class="mbe4">
      <h3>Default Radio</h3>
      <p class="mbs2 mbe3">Basic radio buttons with default theme (primary)</p>
    </div>
    <VueFieldset legend="Choose your plan">
      <div style="display: flex; flex-direction: column; gap: 0.75rem;">
        <VueRadio
          name="plan"
          value="free"
          label-text="Free Plan"
        />
        <VueRadio
          name="plan"
          value="pro"
          label-text="Pro Plan"
          :checked="true"
        />
        <VueRadio
          name="plan"
          value="enterprise"
          label-text="Enterprise Plan"
        />
      </div>
    </VueFieldset>

    <div class="mbe4">
      <h3>Radio Group</h3>
      <p class="mbs2 mbe3">Multiple radio button groups</p>
    </div>
    <div
      class="mbe4"
      style="display: flex; flex-direction: column; gap: 1.5rem;"
    >
      <VueFieldset legend="Select Framework">
        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
          <VueRadio
            name="framework"
            value="react"
            label-text="React"
          />
          <VueRadio
            name="framework"
            value="vue"
            label-text="Vue"
            :checked="true"
          />
          <VueRadio
            name="framework"
            value="angular"
            label-text="Angular"
          />
          <VueRadio
            name="framework"
            value="svelte"
            label-text="Svelte"
          />
        </div>
      </VueFieldset>

      <VueFieldset legend="Deployment Environment">
        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
          <VueRadio
            name="environment"
            value="development"
            label-text="Development"
            :checked="true"
          />
          <VueRadio
            name="environment"
            value="staging"
            label-text="Staging"
          />
          <VueRadio
            name="environment"
            value="production"
            label-text="Production"
          />
        </div>
      </VueFieldset>
    </div>

    <div class="mbe4">
      <h3>Size Variants</h3>
      <p class="mbs2 mbe3">Three size options: small, medium (default), and large</p>
    </div>
    <div
      class="mbe4"
      style="display: flex; gap: 2rem; align-items: center;"
    >
      <VueRadio
        name="size-demo"
        value="small"
        size="small"
        label-text="Small"
        :checked="true"
      />
      <VueRadio
        name="size-demo2"
        value="medium"
        size="medium"
        label-text="Medium"
        :checked="true"
      />
      <VueRadio
        name="size-demo3"
        value="large"
        size="large"
        label-text="Large"
        :checked="true"
      />
    </div>

    <div class="mbe4">
      <h3>Theme Variants</h3>
      <p class="mbs2 mbe3">Choose from default (green), primary (blue), or monochrome (black/white) themes</p>
    </div>
    <div
      class="mbe4"
      style="display: flex; flex-direction: column; gap: 1.5rem;"
    >
      <VueFieldset legend="Default Theme (Blue)">
        <div style="display: flex; gap: 1rem;">
          <VueRadio
            name="theme-default"
            value="1"
            theme="default"
            label-text="Unchecked"
          />
          <VueRadio
            name="theme-default"
            value="2"
            theme="default"
            label-text="Checked"
            :checked="true"
          />
        </div>
      </VueFieldset>
      <VueFieldset legend="Primary Theme (Blue)">
        <div style="display: flex; gap: 1rem;">
          <VueRadio
            name="theme-primary"
            value="1"
            theme="primary"
            label-text="Unchecked"
          />
          <VueRadio
            name="theme-primary"
            value="2"
            theme="primary"
            label-text="Checked"
            :checked="true"
          />
        </div>
      </VueFieldset>
      <VueFieldset legend="Success Theme (Green)">
        <div style="display: flex; gap: 1rem;">
          <VueRadio
            name="theme-success"
            value="1"
            theme="success"
            label-text="Unchecked"
          />
          <VueRadio
            name="theme-success"
            value="2"
            theme="success"
            label-text="Checked"
            :checked="true"
          />
        </div>
      </VueFieldset>

      <VueFieldset legend="Monochrome Theme (Black/White)">
        <div style="display: flex; gap: 1rem;">
          <VueRadio
            name="theme-mono"
            value="1"
            theme="monochrome"
            label-text="Unchecked"
          />
          <VueRadio
            name="theme-mono"
            value="2"
            theme="monochrome"
            label-text="Checked"
            :checked="true"
          />
        </div>
      </VueFieldset>
    </div>

    <div class="mbe4">
      <h3>Disabled State</h3>
      <p class="mbs2 mbe3">Radio buttons can be disabled to prevent interaction</p>
    </div>
    <div
      class="mbe4"
      style="display: flex; gap: 1rem;"
    >
      <VueRadio
        name="disabled-demo"
        value="1"
        label-text="Disabled Unchecked"
        :disabled="true"
      />
      <VueRadio
        name="disabled-demo2"
        value="2"
        label-text="Disabled Checked"
        :checked="true"
        :disabled="true"
      />
    </div>

    <div class="mbe4">
      <h3>Keyboard Navigation with Disabled Radios</h3>
      <p class="mbs2 mbe3">
        Disabled radios are automatically skipped when navigating with arrow keys.
        Try using <kbd>↑</kbd> / <kbd>↓</kbd> or <kbd>←</kbd> / <kbd>→</kbd> arrow keys, or <kbd>HOME</kbd> and <kbd>END</kbd> (to jump to start and end respectively) to navigate between options.
        The disabled middle option will be skipped.
      </p>
    </div>
    <VueFieldset legend="Select Shipping Method">
      <div style="display: flex; flex-direction: column; gap: 0.75rem;">
        <VueRadio
          name="keyboard-nav-demo"
          value="standard"
          label-text="Standard Shipping - $5.99"
          :checked="true"
        />
        <VueRadio
          name="keyboard-nav-demo"
          value="express"
          label-text="Express Shipping - Currently Unavailable"
          :disabled="true"
        />
        <VueRadio
          name="keyboard-nav-demo"
          value="overnight"
          label-text="Overnight Shipping - $24.99"
        />
      </div>
    </VueFieldset>

    <div class="mbe4">
      <h3>Label Position</h3>
      <p class="mbs2 mbe3">Labels can be positioned at the end (default) or start of the radio button</p>
    </div>
    <div
      class="mbe4"
      style="display: flex; flex-direction: column; gap: 1rem;"
    >
      <VueRadio
        name="position-demo"
        value="1"
        label-text="Label on End (Default)"
        label-position="end"
        :checked="true"
      />
      <VueRadio
        name="position-demo2"
        value="2"
        label-text="Label on Start"
        label-position="start"
        :checked="true"
      />
    </div>

    <div class="mbe4">
      <h3>Inline Layout</h3>
      <p class="mbs2 mbe3">Radio buttons can be laid out horizontally for compact forms</p>
    </div>
    <VueFieldset legend="Gender">
      <div style="display: flex; gap: 1.5rem;">
        <VueRadio
          name="gender"
          value="male"
          label-text="Male"
        />
        <VueRadio
          name="gender"
          value="female"
          label-text="Female"
          :checked="true"
        />
        <VueRadio
          name="gender"
          value="other"
          label-text="Other"
        />
      </div>
    </VueFieldset>

    <div class="mbe4">
      <h3>External Label Support</h3>
      <p class="mbs2 mbe3">
        Radio buttons support optional external labels, helper text, and error messages for validation feedback.
      </p>
    </div>
    <div class="stacked mbe4">
      <VueRadio
        name="shipping-method"
        value="standard"
        label="Shipping Method"
        label-text="Standard Shipping (5-7 days)"
        :checked="true"
        class="mbe2"
      />

      <VueRadio
        name="payment-method"
        value="credit"
        label="Payment Method"
        label-text="Credit Card"
        help-text="We accept all major credit cards"
        :checked="true"
        class="mbe2"
      />

      <VueRadio
        name="terms-agreement"
        value="agreed"
        label="Terms and Conditions"
        label-text="I agree to the terms and conditions"
        :required="true"
        help-text="Please read and accept our terms to proceed"
        class="mbe2"
      />

      <VueRadio
        name="age-verify"
        value="confirmed"
        label="Age Verification"
        label-text="I confirm I am 18 years or older"
        :required="true"
        :invalid="true"
        error-message="You must confirm you are 18 or older to proceed"
        class="mbe2"
      />
    </div>

    <div class="mbe4">
      <h3>CSS Shadow Parts Customization</h3>
      <p class="mbs2 mbe3">
        Use CSS Shadow Parts to customize the component's appearance.
      </p>
    </div>
    <div class="stacked-mobile mbe4">
      <VueRadio
        name="custom"
        value="1"
        label-text="Customized indicator"
        :checked="true"
        class="custom-radio-1"
      />
      <VueRadio
        name="custom2"
        value="2"
        label-text="Customized wrapper and label"
        :checked="true"
        class="custom-radio-2"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VueRadio } from "agnosticui-core/radio/vue";
import { VueFieldset } from "agnosticui-core/fieldset/vue";

export default defineComponent({
  name: "RadioExamples",
  components: {
    VueRadio,
    VueFieldset,
  },
});
</script>

<style>
/* CSS Shadow Parts customization examples */
.custom-radio-1::part(ag-radio-indicator) {
  border-width: 3px;
  transform: scale(1.3);
}

.custom-radio-2::part(ag-radio-wrapper) {
  padding: 0.5rem;
  background: var(--ag-background-secondary);
  border-radius: var(--ag-radius-md);
}

.custom-radio-2::part(ag-radio-label) {
  font-weight: 600;
  color: var(--ag-primary);
}
</style>

