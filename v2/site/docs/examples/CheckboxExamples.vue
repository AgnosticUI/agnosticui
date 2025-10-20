<template>
  <section>
    <div class="mbe4">
      <h3>Default Checkbox</h3>
      <p class="mbs2 mbe3">Basic checkbox with default theme (green)</p>
    </div>
    <div class="stacked-mobile mbe4">
      <VueCheckbox name="example" value="1" label-text="I agree to the terms and conditions" />
      <VueCheckbox name="example" value="2" label-text="Subscribe to newsletter" :checked="true" />
    </div>

    <div class="mbe4">
      <h3>Checkbox Group</h3>
      <p class="mbs2 mbe3">Multiple checkboxes grouped together with a fieldset</p>
    </div>
    <fieldset class="mbe4" style="border: 1px solid var(--ag-border); padding: 1rem; border-radius: var(--ag-radius-md);">
      <legend style="padding: 0 0.5rem; font-weight: 600;">Select your interests</legend>
      <div style="display: flex; flex-direction: column; gap: 0.75rem;">
        <VueCheckbox name="interests" value="tech" label-text="Technology" :checked="true" />
        <VueCheckbox name="interests" value="design" label-text="Design" />
        <VueCheckbox name="interests" value="business" label-text="Business" :checked="true" />
        <VueCheckbox name="interests" value="science" label-text="Science" />
      </div>
    </fieldset>

    <div class="mbe4">
      <h3>Indeterminate State</h3>
      <p class="mbs2 mbe3">Used for "select all" scenarios where some items are selected</p>
    </div>
    <div class="mbe4" style="display: flex; flex-direction: column; gap: 0.75rem;">
      <VueCheckbox name="select-all" value="all" :indeterminate="true" label-text="Select All (Some selected)" />
      <div style="padding-left: 1.5rem; display: flex; flex-direction: column; gap: 0.5rem;">
        <VueCheckbox name="items" value="item1" label-text="Item 1" :checked="true" />
        <VueCheckbox name="items" value="item2" label-text="Item 2" />
        <VueCheckbox name="items" value="item3" label-text="Item 3" :checked="true" />
      </div>
    </div>

    <div class="mbe4">
      <h3>Size Variants</h3>
      <p class="mbs2 mbe3">Three size options: small, medium (default), and large</p>
    </div>
    <div class="mbe4" style="display: flex; gap: 2rem; align-items: center;">
      <VueCheckbox name="size" value="small" size="small" label-text="Small" :checked="true" />
      <VueCheckbox name="size" value="medium" size="medium" label-text="Medium" :checked="true" />
      <VueCheckbox name="size" value="large" size="large" label-text="Large" :checked="true" />
    </div>

    <div class="mbe4">
      <h3>Theme Variants</h3>
      <p class="mbs2 mbe3">Choose from default (green), primary (blue), or monochrome (black/white) themes</p>
    </div>
    <div class="mbe4" style="display: flex; flex-direction: column; gap: 1.5rem;">
      <fieldset style="border: 1px solid var(--ag-border); padding: 1rem; border-radius: var(--ag-radius-md);">
        <legend style="padding: 0 0.5rem; font-weight: 600;">Default Theme (Green)</legend>
        <div style="display: flex; gap: 1rem;">
          <VueCheckbox name="theme-default" value="1" theme="default" label-text="Unchecked" />
          <VueCheckbox name="theme-default" value="2" theme="default" label-text="Checked" :checked="true" />
          <VueCheckbox name="theme-default" value="3" theme="default" label-text="Indeterminate" :indeterminate="true" />
        </div>
      </fieldset>

      <fieldset style="border: 1px solid var(--ag-border); padding: 1rem; border-radius: var(--ag-radius-md);">
        <legend style="padding: 0 0.5rem; font-weight: 600;">Primary Theme (Blue)</legend>
        <div style="display: flex; gap: 1rem;">
          <VueCheckbox name="theme-primary" value="1" theme="primary" label-text="Unchecked" />
          <VueCheckbox name="theme-primary" value="2" theme="primary" label-text="Checked" :checked="true" />
          <VueCheckbox name="theme-primary" value="3" theme="primary" label-text="Indeterminate" :indeterminate="true" />
        </div>
      </fieldset>

      <fieldset style="border: 1px solid var(--ag-border); padding: 1rem; border-radius: var(--ag-radius-md);">
        <legend style="padding: 0 0.5rem; font-weight: 600;">Monochrome Theme (Black/White)</legend>
        <div style="display: flex; gap: 1rem;">
          <VueCheckbox name="theme-mono" value="1" theme="monochrome" label-text="Unchecked" />
          <VueCheckbox name="theme-mono" value="2" theme="monochrome" label-text="Checked" :checked="true" />
          <VueCheckbox name="theme-mono" value="3" theme="monochrome" label-text="Indeterminate" :indeterminate="true" />
        </div>
      </fieldset>
    </div>

    <div class="mbe4">
      <h3>Disabled State</h3>
      <p class="mbs2 mbe3">Checkboxes can be disabled to prevent interaction</p>
    </div>
    <div class="mbe4" style="display: flex; gap: 1rem;">
      <VueCheckbox name="disabled" value="1" label-text="Disabled Unchecked" :disabled="true" />
      <VueCheckbox name="disabled" value="2" label-text="Disabled Checked" :checked="true" :disabled="true" />
      <VueCheckbox name="disabled" value="3" label-text="Disabled Indeterminate" :indeterminate="true" :disabled="true" />
    </div>

    <div class="mbe4">
      <h3>Label Position</h3>
      <p class="mbs2 mbe3">Labels can be positioned at the end (default) or start of the checkbox</p>
    </div>
    <div class="mbe4" style="display: flex; flex-direction: column; gap: 1rem;">
      <VueCheckbox name="position" value="1" label-text="Label on End (Default)" label-position="end" :checked="true" />
      <VueCheckbox name="position" value="2" label-text="Label on Start" label-position="start" :checked="true" />
    </div>

    <div class="mbe4">
      <h3>CSS Shadow Parts Customization</h3>
      <p class="mbs2 mbe3">
        Use CSS Shadow Parts to customize the component's appearance.
      </p>
    </div>
    <div class="stacked-mobile mbe4">
      <VueCheckbox
        name="custom"
        value="1"
        label-text="Customized with rounded indicator"
        :checked="true"
        class="custom-checkbox-1"
      />
      <VueCheckbox
        name="custom"
        value="2"
        label-text="Customized wrapper and label"
        :checked="true"
        class="custom-checkbox-2"
      />
      <VueCheckbox
        name="custom"
        value="3"
        label-text="Fully customized"
        :checked="true"
        theme="primary"
        class="custom-checkbox-3"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VueCheckbox } from 'agnosticui-core/checkbox/vue';

export default defineComponent({
  name: 'CheckboxExamples',
  components: {
    VueCheckbox,
  },
});
</script>

<style>
/* CSS Shadow Parts customization examples */
.custom-checkbox-1::part(ag-checkbox-indicator) {
  border-radius: 50%;
  border-width: 3px;
}

.custom-checkbox-2::part(ag-checkbox-wrapper) {
  padding: 0.5rem;
  background: var(--ag-background-secondary);
  border-radius: var(--ag-radius-md);
}

.custom-checkbox-2::part(ag-checkbox-label) {
  font-weight: 600;
  color: var(--ag-primary);
}

.custom-checkbox-3::part(ag-checkbox-indicator) {
  border-radius: var(--ag-radius-md);
  transform: scale(1.2);
}

.custom-checkbox-3::part(ag-checkbox-wrapper) {
  padding: 0.75rem;
  background: linear-gradient(135deg, var(--ag-primary-background) 0%, var(--ag-background-secondary) 100%);
  border-radius: var(--ag-radius-lg);
  border: 2px solid var(--ag-primary-border);
}

.custom-checkbox-3::part(ag-checkbox-label) {
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--ag-primary);
}
</style>
