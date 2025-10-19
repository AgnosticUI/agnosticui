<template>
  <section>
    <div class="mbe4">
      <h3>Default</h3>
      <VueLoader />
    </div>
    <div class="mbe4">
      <h3>Sizes</h3>
      <div
        class="flex flex-col items-center"
        style="gap: 24px"
      >
        <VueLoader size="small" />
        <VueLoader />
        <VueLoader size="large" />
      </div>
    </div>
    <div class="mbe4">
      <h3>CSS Shadow Parts Customization</h3>
      <p class="mbs2 mbe3">
        Use CSS Shadow Parts to customize the loader's appearance.
      </p>
      <VueLoader class="custom-loader" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VueLoader } from "agnosticui-core/loader/vue";

export default defineComponent({
  name: "LoaderExamples",
  components: {
    VueLoader,
  },
});
</script>

<style>
.custom-loader::part(ag-loader) {
  --loading-color: var(--ag-primary);
}
</style>
