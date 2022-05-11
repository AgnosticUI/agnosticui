<script setup>
import { ref } from "vue";
import Switch from "../../src/components/Switch.vue";
let switchChecked = ref(false);
</script>
<template>
  <section>
    <div class="h4">Switch</div>
    <div class="mbs24 mbe24"><code>v-model</code> test for checked (interact with the first Switch below): {{ switchChecked }}</div>
    <Switch
      id="1"
      label="Switch small (v-model)"
      size="small"
      v-model="switchChecked"
    />
    <Switch
      id="2"
      label="Switch default (medium)"
    />
    <Switch
      id="3"
      label="Switch large"
      size="large"
    />
    <Switch
      id="4"
      is-checked
      label="Switch large prechecked"
      size="large"
    />
    <Switch
      id="5"
      is-disabled
      label="Switch disabled"
      size="large"
    />
    <Switch
      id="6"
      is-bordered
      label="Switch bordered"
    />
    <Switch
      id="7"
      is-action
      is-checked
      label="Switch action prechecked"
      size="large"
    />
    <Switch
      id="8"
      is-action
      is-bordered
      label="Switch action bordered"
    />
    <h3>Switch label on right</h3>
    <Switch
      id="9"
      label-position="right"
      label="Switch label on right"
    />
  </section>
</template>
