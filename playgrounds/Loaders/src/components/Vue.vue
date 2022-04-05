<template>
  <section class="mbe40">
    <div class="h4 mbe32 flex items-center">
      <img
        width="24"
        height="24"
        src="/assets/Vue-icon.svg"
        alt="Vue logo"
        class="mie12"
      />Vue 3 Close
    </div>
    <Loader size="small" />
    <div class="mbe32" />
    <Loader />
    <div class="mbe32" />
    <Loader size="large" />
  </section>
</template>

<script setup>
// Components CSS
import "agnostic-vue/dist/index.css";
import { Loader } from "agnostic-vue";
</script>
