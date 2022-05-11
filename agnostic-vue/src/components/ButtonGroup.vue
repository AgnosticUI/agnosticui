<template>
  <div
    :class="classes"
    role="group"
    :aria-label="ariaLabel"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, useCssModule } from "vue";

export interface ButtonGroupProps {
  ariaLabel: string;
  css?: string;
}

const styles = useCssModule();

const props = withDefaults(defineProps<ButtonGroupProps>(), {
  css: "",
});

const classes = computed(() => {
  return {
    [styles["btn-group"]]: true,
    [`${props.css}`]: props.css,
  };
});
</script>

<style module>
/**
 * Button Groups. See also button-core.css which has btn-grouped which needs to be
 * applied to the buttons that are projected within a button group.
 */
.btn-group {
  display: inline-flex;
  flex-direction: row;
}

</style>
