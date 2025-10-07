<template>
  <VueButton
    :type="'button'"
    :variant="primary ? 'primary' : 'secondary'"
    :size="size === 'small' ? 'sm' : size === 'large' ? 'lg' : 'md'"
    @click="onClick"
  >
    {{ label }}
  </VueButton>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import "agnosticui-core/button"; // Register the ag-button web component
import VueButton from "agnosticui-core/button/vue"; // Import the compiled VueButton module

const props = withDefaults(
  defineProps<{
    /**
     * The label of the button
     */
    label: string;
    /**
     * Primary or secondary button
     */
    primary?: boolean;
    /**
     * Size of the button
     */
    size?: "small" | "medium" | "large";
    /**
     * Background color of the button (not supported by VueButton, included for compatibility)
     */
    backgroundColor?: string;
  }>(),
  { primary: false }
);

const emit = defineEmits<{
  (e: "click", id: number): void;
}>();

const onClick = () => {
  emit("click", 1);
};
</script>
