<template>
  <div>
    <Button isDisabled>Disabled</Button>
    <Button mode="primary" isDisabled>Primary Disabled</Button>
    <Button mode="secondary" isDisabled>Secondary Disabled</Button>
    <Button mode="secondary" isBordered isDisabled>Secondary Bordered Disabled</Button>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  name: "buttons-disabled",
  components: { Button },
};
</script>
