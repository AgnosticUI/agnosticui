<script setup lang="ts">
import { AgDynamicRenderer } from '@agnosticui/render-vue';
import { contactFormNodes } from './contactFormNodes';

const actions = {
  SUBMIT_FORM: () => alert('Form submitted via SDUI action dispatcher!'),
};
</script>

<template>
  <div style="padding: 2rem; max-width: 480px;">
    <h1 style="font-family: system-ui; margin-bottom: 1.5rem;">
      SDUI Smoke Test — Vue
    </h1>
    <AgDynamicRenderer :nodes="contactFormNodes" :actions="actions" />
  </div>
</template>
