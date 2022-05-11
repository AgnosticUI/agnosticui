<template>
  <teleport :to="portalRootSelector">
    <div :class="toastClasses">
      <slot />
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { computed, useCssModule } from "vue";
export interface ToastsProps {
  portalRootSelector?: string;
  horizontalPosition: "start" | "center" | "end";
  verticalPosition: "top" | "bottom";
}

const props = withDefaults(defineProps<ToastsProps>(), {
  portalRootSelector: "body",
});

const styles = useCssModule();

const toastClasses = computed(() => {
  return {
    [styles["alert-toast"]]: true,
    [props.horizontalPosition]: true,
    [props.verticalPosition]: true,
  };
});
</script>
<style module>
.alert-toast {
  min-width: 19rem;
  max-width: 100%;
  position: fixed;
  z-index: 1100;
  font-size: var(--agnostic-small);

  /* Optimized to match with the height created when we have a
  24px icon. If no icon, this preserves the toast height. */
  line-height: var(--fluid-24);
  padding: 0;

  /* We use bottom: 0, left: 0 etc., so this
  actually pushes the toast away from edge */
  margin: var(--fluid-16);
}

</style>
