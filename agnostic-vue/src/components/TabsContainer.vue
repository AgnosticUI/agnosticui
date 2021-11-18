<template>
  <div :class="tabsContainerClasses">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "ag-tabs-container",
  props: {
    tabsContainerClasses: {
      type: Object,
      require: true,
    },
  },
};
</script>
