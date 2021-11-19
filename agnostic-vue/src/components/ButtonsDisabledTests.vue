<template>
  <div>
    <Button is-disabled>
      Disabled
    </Button>
    <Button
      mode="primary"
      is-disabled
    >
      Primary Disabled
    </Button>
    <Button
      mode="secondary"
      is-disabled
    >
      Secondary Disabled
    </Button>
    <Button
      mode="secondary"
      is-bordered
      is-disabled
    >
      Secondary Bordered Disabled
    </Button>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  name: "ButtonsDisabled",
  components: { Button },
};
</script>
