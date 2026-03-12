<!--
  SMOKE TEST APP — keep this minimal.

  This app exists solely to support Playwright smoke tests in CI. Rendering
  too many Lit custom elements simultaneously causes Playwright's isolated
  context to hang indefinitely. Only add components here if you also update
  the smoke tests. Do NOT repurpose this app as a component showcase.
-->
<template>
  <VueButton>Button</VueButton>
  <VueAlert>Alert</VueAlert>
</template>

<script setup lang="ts">
import VueButton from './components/ag/Button/vue/VueButton.vue';
import VueAlert from './components/ag/Alert/vue/VueAlert.vue';
</script>
