<template>
  <Alert
    isBorderLeft
    type="info"
  >Alerts provide contextual notifications of timely information without interrupting the user's task-at-hand.</Alert>
</template>

<script>
import "agnosticvue/dist/style.css";
import { Alert } from "agnosticvue";
export default {
  name: "AlertExample",
  components: {
    Alert,
  },
};
</script>
