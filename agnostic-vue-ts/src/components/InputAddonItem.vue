<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useCssModule, computed } from "vue";
export interface InputAddonItemProps {
  css?: string;
  addonLeft?: boolean;
  addonRight?: boolean;
}

const styles = useCssModule();

const props = defineProps<InputAddonItemProps>();

const classes = computed(() => {
  return {
    [styles["input-addon-left"]]: !!props.addonLeft,
    [styles["input-addon-right"]]: !!props.addonRight,
    [`${props.css}`]: !!props.css,
  };
});
</script>

<style module>
/*
* Input addons e.g. icons inside the input
*/
.input-addon-right,
.input-addon-left {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;

  /* This allows an icon to sit in the vertical center regardless
  of if we've applied input-large or input-small */
  min-height: 100%;
}

.input-addon-left {
  left: var(--agnostic-input-side-padding);
}

.input-addon-right {
  right: var(--agnostic-input-side-padding);
}

</style>
