<template>
  <VueAccordion>
    <slot />
  </VueAccordion>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { VueAccordion } from "agnosticui-core/accordion/vue"; // Import the compiled VueAccordion module

// Define props if VueAccordion accepts any; otherwise, keep empty
const props = withDefaults(defineProps<{}>(), {});
</script>
