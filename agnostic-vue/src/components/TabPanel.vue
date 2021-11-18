<template>
  <div
    v-show="isActive"
    role="tabpanel"
    tabindex="0"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "ag-tab-panel",
  data() {
    return {
      isActive: true,
    };
  },
};
</script>
