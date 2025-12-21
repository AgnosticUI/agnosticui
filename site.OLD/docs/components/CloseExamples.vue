<script>
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Close } from "agnostic-vue";

export default {
  name: "CloseExamples",
  components: {
    Close,
  },
};
</script>
<template>
  <h3>Default close</h3>
  <Close />
  <h3>Sizes</h3>
  <Close />
  <Close size="small" />
  <Close size="large" />
  <Close size="xlarge" />
</template>
