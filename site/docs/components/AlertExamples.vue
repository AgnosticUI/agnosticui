<template>
  <div class="mbs12 mbe16">
    <Alert>Default</Alert>
  </div>
  <div class="mbs12 mbe16">
    <Alert isRounded>Rounded</Alert>
  </div>
  <div class="mbs12 mbe16">
    <Alert isBorderAll>Border all</Alert>
  </div>
  <div class="mbs12 mbe16">
    <Alert isBorderLeft>Border left</Alert>
  </div>
  <div class="mbs12 mbe16">
    <Alert type="success">Success</Alert>
  </div>
  <div class="mbs12 mbe16">
    <Alert type="info">Info</Alert>
  </div>
  <div class="mbs12 mbe16">
    <Alert type="warning">Warning</Alert>
  </div>
  <div class="mbs12 mbe16">
    <Alert type="error">Error</Alert>
  </div>
</template>

<script>
import "agnosticvue/dist/index.css";
import { Alert } from "agnosticvue";
export default {
  name: "AlertExamples",
  components: {
    Alert,
  },
};
</script>
