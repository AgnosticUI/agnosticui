<script>
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Tooltip } from "agnostic-vue";

export default {
  name: "TooltipExamples",
  components: {
    Tooltip,
  },
};
</script>
<template>
  <div class="h4 mbs40">Tooltips</div>
  <div class="tooltips-container">
    <section class="mbs56 mbe40 flex-inline justify-between w-100">
      <Tooltip placement="top-start">
        Tooltip top-start
        <template #content>This is the tooltip content from named slot.</template>
      </Tooltip>
      <Tooltip placement="top">
        Tooltip top
        <template #content>This is the tooltip content from named slot.</template>
      </Tooltip>
      <Tooltip placement="top-end">
        Tooltip top-end
        <template #content>This is the tooltip content from named slot.</template>
      </Tooltip>
    </section>
    <section
      class="flex flex-column items-center"
      style="gap: var(--fluid-18);"
    >
      <Tooltip placement="left-start">
        Tooltip left-start
        <template #content>This is the tooltip content from named slot.</template>
      </Tooltip>
      <Tooltip placement="left">
        Tooltip left
        <template #content>This is the tooltip content from named slot.</template>
      </Tooltip>
      <Tooltip placement="left-end">
        Tooltip left-end
        <template #content>This is the tooltip content from named slot.</template>
      </Tooltip>
      <Tooltip placement="right-start">
        Tooltip right-start
        <template #content>This is the tooltip content from named slot.</template>
      </Tooltip>
      <Tooltip placement="right">
        Tooltip right
        <template #content>This is the tooltip content from named slot.</template>
      </Tooltip>
      <Tooltip placement="right-end">
        Tooltip right-end
        <template #content>This is the tooltip content from named slot.</template>
      </Tooltip>
    </section>
    <section class="mbs56 mbe40 flex-inline justify-between w-100">
      <Tooltip placement="bottom-start">
        Tooltip bottom-start
        <template #content>This is the tooltip content from named slot.</template>
      </Tooltip>
      <Tooltip placement="bottom">
        Tooltip bottom
        <template #content>This is the tooltip content from named slot.</template>
      </Tooltip>
      <Tooltip placement="bottom-end">
        Tooltip bottom-end
        <template #content>This is the tooltip content from named slot.</template>
      </Tooltip>
    </section>
  </div>
</template>
<style>
.tooltips-container [aria-describedby^="tip-"] {
  width: 200px;
  height: 200px;
  padding: var(--fluid-6) var(--fluid-12);
  border-radius: var(--agnostic-radius);
  border: 1px solid var(--agnostic-gray-light);
  display: flex;
  align-items: center;
  text-align: center;
}
</style>
