<template>
  <section>
    <div class="mbe4">
      <h3>Indeterminate Progress</h3>
      <p class="mbs2 mbe3">When no <code>value</code> is provided, the progress bar is indeterminate.</p>
      <VueProgress label="Loading..." />
    </div>
    <div class="mbe4">
      <h3>Progress with Value</h3>
      <p class="mbs2 mbe3">Set the <code>value</code> prop to a number to show progress.</p>
      <VueProgress :value="50" label="50% complete" />
    </div>
    <div class="mbe4">
      <h3>Progress with Custom Max</h3>
      <p class="mbs2 mbe3">Set the <code>max</code> prop to a number to define the maximum value.</p>
      <VueProgress :value="150" :max="200" label="150 of 200" />
    </div>
    <div class="mbe4">
      <h3>CSS Shadow Parts Customization</h3>
      <p class="mbs2 mbe3">Use CSS Shadow Parts to customize the component's appearance.</p>
      <VueProgress :value="75" label="Customized progress" class="custom-progress" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VueProgress } from "agnosticui-core/progress/vue";

export default defineComponent({
  name: "ProgressExamples",
  components: {
    VueProgress,
  },
});
</script>

<style>
.custom-progress::part(ag-progress-bar) {
  background-color: var(--ag-color-primary-light);
}

.custom-progress::part(ag-progress-bar)::-webkit-progress-value {
  background-color: var(--ag-color-primary);
}

.custom-progress::part(ag-progress-bar)::-moz-progress-bar {
  background-color: var(--ag-color-primary);
}
</style>