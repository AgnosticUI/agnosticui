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
        type="primary"
      >Primary alert</VueAlert>
      <VueAlert
        class="mbe2"
        type="warning"
      >Warning alert</VueAlert>
      <VueAlert
        class="mbe2"
        type="error"
      >Error alert</VueAlert>
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
        type="primary"
      >Primary alert</VueAlert>
      <VueAlert
        class="mbe2"
        bordered
        type="warning"
      >Warning alert</VueAlert>
      <VueAlert
        class="mbe2"
        bordered
        type="error"
      >Error alert</VueAlert>
      <VueAlert
        class="mbe2"
        bordered
        type="danger"
      >Danger alert</VueAlert>
    </div>
    <div class="mbe4">
      <h3>Bordered Left with Icon</h3>
    </div>
    <div class="stacked">
      <VueAlert
        class="mbe2"
        borderedLeft
      >
        <div class="flex-inline items-center justify-center">
          <Info
            color="var(--ag-secondary)"
            :size="18"
            class="mie2"
          />
          Default alert
        </div>
      </VueAlert>
      <VueAlert
        class="mbe2"
        borderedLeft
        type="success"
      >
        <div class="flex-inline items-center justify-center">
          <Info
            color="var(--ag-success)"
            :size="18"
            class="mie2"
          />Success alert
        </div>
      </VueAlert>
      <VueAlert
        class="mbe2"
        borderedLeft
        type="info"
      >
        <div class="flex-inline items-center justify-center">
          <Info
            color="var(--ag-secondary)"
            :size="18"
            class="mie2"
          />Info alert
        </div>
      </VueAlert>
      <VueAlert
        class="mbe2"
        borderedLeft
        type="primary"
      >
        <div class="flex-inline items-center justify-center">
          <Info
            color="var(--ag-primary)"
            :size="18"
            class="mie2"
          />Primary alert
        </div>
      </VueAlert>
      <VueAlert
        class="mbe2"
        borderedLeft
        type="warning"
      >
        <div class="flex-inline items-center justify-center">
          <Info
            color="var(--ag-warning)"
            :size="18"
            class="mie2"
          />Warning alert
        </div>
      </VueAlert>
      <VueAlert
        class="mbe2"
        borderedLeft
        type="error"
      >
        <div class="flex-inline items-center justify-center">
          <Info
            color="var(--ag-danger)"
            :size="18"
            class="mie2"
          />Error alert
        </div>
      </VueAlert>
      <VueAlert
        class="mbe2"
        borderedLeft
        type="danger"
      >
        <div class="flex-inline items-center justify-center">
          <Info
            color="var(--ag-danger)"
            :size="18"
            class="mie2"
          />Danger alert
        </div>
      </VueAlert>
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
        type="primary"
      >Primary alert</VueAlert>
      <VueAlert
        class="mbe2"
        rounded
        type="warning"
      >Warning alert</VueAlert>
      <VueAlert
        class="mbe2"
        rounded
        type="error"
      >Error alert</VueAlert>
      <VueAlert
        class="mbe2"
        rounded
        type="danger"
      >Danger alert</VueAlert>
    </div>
  </section>
</template>
<script>
import { Info } from "lucide-vue-next";
import VueAlert from "agnosticui-core/alert/vue";
export default {
  name: "AlertExamples",
  components: { VueAlert, Info },
};
</script>
