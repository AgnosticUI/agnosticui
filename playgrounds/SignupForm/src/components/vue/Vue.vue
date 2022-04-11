<template>
  <section class="flex flex-column items-start">
    <div class="h4 mbe16">
      <img
        width="24"
        height="24"
        src="/assets/Vue-icon.svg"
        alt="Vue logo"
        class="mie12"
      />Vue 3
    </div>
    <p className="mbe16">This example signup form uses <a
        href="https://www.npmjs.com/package/agnostic-vue"
        target="_blank"
      >agnostic-vue</a> for the UI primitives, and <a
        href="https://vestjs.dev/"
        target="_blank"
      >Vest</a> for the form validation.</p>
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
