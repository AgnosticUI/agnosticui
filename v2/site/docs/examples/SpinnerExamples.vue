<template>
  <section>
    <div class="mbe4">
      <h3>Default</h3>
      <VueSpinner />
    </div>
    <div class="mbe4">
      <h3>Sizes</h3>
      <div
        class="flex flex-col items-center"
        style="gap: 24px"
      >
        <VueSpinner size="small" />
        <VueSpinner />
        <VueSpinner size="large" />
        <VueSpinner size="xlarge" />
      </div>
    </div>
    <div class="mbe4">
      <h3>CSS Shadow Parts Customization</h3>
      <p class="mbs2 mbe3">
        Use CSS Shadow Parts to customize the spinner's appearance.
      </p>
      <VueSpinner class="custom-spinner" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VueSpinner } from "agnosticui-core/spinner/vue";

export default defineComponent({
  name: "SpinnerExamples",
  components: {
    VueSpinner,
  },
});
</script>

<style>
.custom-spinner::part(ag-spinner) {
  --spinner-color: var(--ag-primary);
}
</style>
