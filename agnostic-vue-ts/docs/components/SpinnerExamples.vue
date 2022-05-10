<script setup lang="ts">
import Spinner from "../../src/components/Spinner.vue";
</script>
<template>
  <section>
    <h2>Spinners</h2>
    <Spinner
      size="small"
      aria-label="Custom aria"
    />
    <div class="mbe24" />
    <Spinner aria-label="Custom aria" />
    <div class="mbe24" />
    <Spinner
      size="large"
      aria-label="Custom aria"
    />
    <p class="mbs16 mbe24">
      Custom color via <code>--agnostic-spinner-color</code>:
    </p>
    <div
      class="mbe24"
      style="--agnostic-spinner-color: salmon;"
    >
      <Spinner
        size="xlarge"
        aria-label="Custom aria"
      />
    </div>
  </section>
</template>
