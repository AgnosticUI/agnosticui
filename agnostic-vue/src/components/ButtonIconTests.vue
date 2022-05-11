<template>
  <div style="display: inline-flex">
    <Button
      mode="primary"
      :is-rounded="true"
    >
      Call
      <svg
        :class="$style.iconRight"
        role="img"
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 16 16"
        data-custom-icon="true"
        focusable="false"
        aria-hidden="true"
        height="14px"
        width="14px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <desc>Phone icon graphic</desc>
        <path d="M11 10c-1 1-1 2-2 2s-2-1-3-2-2-2-2-3 1-1 2-2-2-4-3-4-3 3-3 3c0 2 2.055 6.055 4 8s6 4 8 4c0 0 3-2 3-3s-3-4-4-3z" />
      </svg>
    </Button>
    <Button
      mode="primary"
      :is-rounded="true"
    >
      <svg
        :class="$style.iconLeft"
        role="img"
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 16 16"
        data-custom-icon="true"
        focusable="false"
        aria-hidden="true"
        height="14px"
        width="14px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <desc>Download icon graphic</desc>
        <path d="M14 11v2h-12v-2h-2v4h16v-4zM12 6h-3v-5h-2v5h-3l4 6z" />
      </svg>
      Download
    </Button>
  </div>
</template>

<script setup lang="ts">
import Button from "./Button.vue";
</script>
<style module>
/* Just for demo only! :) */
:global(button) {
  margin-inline-end: 8px;
}

.iconLeft {
  margin-inline-end: 8px;
  stroke-width: 0;
  width: 16px;
  height: 16px;
}

.iconRight {
  margin-inline-start: 8px;
  stroke-width: 0;
  width: 16px;
  height: 16px;
}
</style>
