<template>
  <section class="mbe40">
    <div class="h4 mbe32 flex items-center">
      <img
        width="24"
        height="24"
        src="/assets/Vue-icon.svg"
        alt="Vue logo"
        class="mie12"
      />Vue 3 Tooltip
    </div>
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
  </section>
</template>

<script setup>
// Components CSS
import "agnostic-vue/dist/index.css";
import { Tooltip } from "agnostic-vue";
</script>
