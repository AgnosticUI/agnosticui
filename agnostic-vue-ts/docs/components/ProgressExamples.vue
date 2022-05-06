<script>
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Progress } from "agnostic-vue";

export default {
  name: "ProgressExamples",
  components: {
    Progress,
  },
};
</script>
<template>
  <Progress
    :value="30"
    :max="100"
  />
</template>
