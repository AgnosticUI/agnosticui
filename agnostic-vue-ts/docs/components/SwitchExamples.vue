<script>
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Switch } from "agnostic-vue";

export default {
  name: "SwitchExamples",
  components: {
    Switch,
  },
};
</script>
<template>
  <section>
    <h3>Switch</h3>
    <Switch
      :id="1"
      label="Switch small"
      size="small"
    />
    <Switch
      :id="2"
      label="Switch default (medium)"
    />
    <Switch
      :id="3"
      label="Switch large"
      size="large"
    />
    <Switch
      :id="4"
      is-checked
      label="Switch large prechecked"
      size="large"
    />
    <Switch
      :id="5"
      is-disabled
      label="Switch disabled"
      size="large"
    />
    <Switch
      :id="6"
      is-bordered
      label="Switch bordered"
    />
    <Switch
      :id="7"
      is-action
      is-checked
      label="Switch action prechecked"
      size="large"
    />
    <Switch
      :id="8"
      is-action
      is-bordered
      label="Switch action bordered"
    />
    <h3>Switch label on right</h3>
    <Switch
      :id="9"
      label-position="right"
      label="Switch label on right"
    />
  </section>
</template>
