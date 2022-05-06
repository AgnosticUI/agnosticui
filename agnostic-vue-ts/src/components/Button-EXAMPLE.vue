<template>
  <button
    type="button"
    :class="classes"
    @click="onClick"
    :style="style"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
import { Size } from "@/types/Size";
import { computed } from "vue";
interface Props {
  label: string;
  primary?: boolean;
  backgroundColor?: string;
  size?: Size;
}
const props = withDefaults(defineProps<Props>(), { primary: false });

interface Emits {
  (e: "click"): void;
}
const emit = defineEmits<Emits>();

const onClick = () => {
  emit("click");
};
const classes = computed(() => ({
  "storybook-button": true,
  "storybook-button--primary": props.primary,
  "storybook-button--secondary": !props.primary,
  [`storybook-button--${props.size || "medium"}`]: true,
}));
const style = computed(() => ({
  backgroundColor: props.backgroundColor,
}));
</script>

<style scoped>
</style>
