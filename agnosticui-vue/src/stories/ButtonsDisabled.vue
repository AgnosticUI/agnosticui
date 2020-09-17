<template>
  <div>
    <AgnosticButton label="Default Disabled" isDisabled />
    <AgnosticButton mode="primary" label="Primary Disabled" isDisabled />
    <AgnosticButton mode="secondary" label="Secondary Disabled" isDisabled />
    <AgnosticButton mode="secondary" label="Secondary Bordered Disabled" isBordered isDisabled />
  </div>
</template>

<script>
import AgnosticButton from "./Button.vue";
export default {
  name: "buttons-disabled",
  components: { AgnosticButton },
};
</script>
