<template>
  <section>
    <div class="mbe4">
      <h3>Alerts</h3>
    </div>
    <div class="stacked">
      <VueAlert class="mbe2">Default alert</VueAlert>
      <VueAlert
        class="mbe2"
        type="success"
      >Success alert</VueAlert>
      <VueAlert
        class="mbe2"
        type="info"
      >Info alert</VueAlert>
      <VueAlert
        class="mbe2"
        type="warning"
      >Warning alert</VueAlert>
      <VueAlert
        class="mbe2"
        type="danger"
      >Danger alert</VueAlert>
    </div>

    <div class="mbe4">
      <h3>Bordered</h3>
    </div>
    <div class="stacked">
      <VueAlert
        class="mbe2"
        bordered
      >Default alert</VueAlert>
      <VueAlert
        class="mbe2"
        bordered
        type="success"
      >Success alert</VueAlert>
      <VueAlert
        class="mbe2"
        bordered
        type="info"
      >Info alert</VueAlert>
      <VueAlert
        class="mbe2"
        bordered
        type="warning"
      >Warning alert</VueAlert>
      <VueAlert
        class="mbe2"
        bordered
        type="danger"
      >Danger alert</VueAlert>
    </div>
    <div class="mbe4">
      <h3>Border Left</h3>
    </div>
    <div class="stacked">
      <VueAlert
        class="mbe2"
        borderedLeft
      >Default alert</VueAlert>
      <VueAlert
        class="mbe2"
        borderedLeft
        type="success"
      >Success alert</VueAlert>
      <VueAlert
        class="mbe2"
        borderedLeft
        type="info"
      >Info alert</VueAlert>
      <VueAlert
        class="mbe2"
        borderedLeft
        type="warning"
      >Warning alert</VueAlert>
      <VueAlert
        class="mbe2"
        borderedLeft
        type="danger"
      >Danger alert</VueAlert>
    </div>
    <div class="mbe4">
      <h3>Rounded</h3>
    </div>
    <div class="stacked">
      <VueAlert
        class="mbe2"
        rounded
      >Default alert</VueAlert>
      <VueAlert
        class="mbe2"
        rounded
        type="success"
      >Success alert</VueAlert>
      <VueAlert
        class="mbe2"
        rounded
        type="info"
      >Info alert</VueAlert>
      <VueAlert
        class="mbe2"
        rounded
        type="warning"
      >Warning alert</VueAlert>
      <VueAlert
        class="mbe2"
        rounded
        type="danger"
      >Danger alert</VueAlert>
    </div>
  </section>
</template>
<script>
import VueAlert from "agnosticui-core/alert/vue";
export default {
  name: "AlertExamples",
  components: { VueAlert },
};
</script>
