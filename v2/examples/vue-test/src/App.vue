<script setup lang="ts">
import VueButton from './components/ag/Button/vue/VueButton.vue';
import VueAlert from './components/ag/Alert/vue/VueAlert.vue';
</script>

<template>
  <main style="padding: 20px">
    <h1>AgnosticUI Vue Smoke Test</h1>
    <VueButton variant="primary" shape="rounded">Hello Button</VueButton>
    <VueAlert variant="success">Hello Alert</VueAlert>
  </main>
</template>
