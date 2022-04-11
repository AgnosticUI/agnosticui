<template>
  <section class="mbe40">
    <div class="h4 mbe32 flex items-center">
      <img
        width="24"
        height="24"
        src="/assets/Vue-icon.svg"
        alt="Vue logo"
        class="mie12"
      />Vue 3
    </div>
  </section>
</template>

<script setup>
// Components CSS
import "agnostic-vue/dist/index.css";
import { Menu } from "agnostic-vue";

const log = (message, extra) => {
  console.log(message, extra);
};
</script>
