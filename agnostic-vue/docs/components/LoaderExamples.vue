<script setup lang="ts">
import Loader from "../../src/components/Loader.vue";
</script>
<template>
  <section>
    <h2>Loaders</h2>
    <Loader
      size="small"
      aria-label="Custom aria"
    />
    <div class="mbe24" />
    <Loader aria-label="Custom aria" />
    <div class="mbe24" />
    <Loader
      size="large"
      aria-label="Custom aria"
    />
    <p class="mbs16 mbe24">
      Custom color via <code>--agnostic-loading-color</code>:
    </p>
    <div
      class="mbe24"
      style="--agnostic-loading-color: salmon;"
    >
      <Loader
        size="large"
        aria-label="Custom aria"
      />
    </div>
  </section>
</template>
