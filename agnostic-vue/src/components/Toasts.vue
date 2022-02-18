<template>
  <teleport :to="portalRootSelector">
    <div :class="toastClasses">
      <slot />
    </div>
  </teleport>
</template>

<script>
export default {
  name: "AgAlert",
  props: {
    portalRootSelector: {
      type: String,
      required: true,
      default: "body",
    },
    horizontalPosition: {
      type: String,
      required: true,
      validator: (value) => ["start", "center", "end"].includes(value),
    },
    verticalPosition: {
      type: String,
      required: true,
      validator: (value) => ["top", "bottom"].includes(value),
    },
  },
  computed: {
    toastClasses() {
      return [
        this.$style["alert-toast"],
        this.horizontalPosition,
        this.verticalPosition,
      ].join(" ");
    },
  },
};
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
