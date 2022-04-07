<template>
  <section class="mbe40">
    <div class="h4 mbe32 flex items-center">
      <img
        width="24"
        height="24"
        src="/assets/Vue-icon.svg"
        alt="Vue logo"
        class="mie12"
      />Vue 3 Switch
    </div>
    <Switch
      id="31"
      label="Switch default"
    />
    <Switch
      id="32"
      size="small"
      label="Switch small"
    />
    <Switch
      id="33"
      size="large"
      label="Switch large"
    />
    <Switch
      id="34"
      is-checked
      label="Prechecked"
    />
    <Switch
      id="35"
      is-disabled
      label="Disabled"
    />
    <Switch
      id="36"
      is-bordered
      label="Bordered"
    />
    <Switch
      id="37"
      is-action
      label="Action"
    />
    <Switch
      id="38"
      is-action
      is-bordered
      label="Action bordered"
    />
    <Switch
      id="39"
      labelPosition="right"
      label="Label on right"
    />
    <div class="h4 mbs24 mbe24">Switch label on right</div>
    <Switch
      id="40"
      is-bordered
      labelPosition="right"
      label="Label on right bordered"
    />
  </section>
</template>
<script setup>
// Import AgnosticUI global common & component CSS
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Switch } from "agnostic-vue";
</script>
