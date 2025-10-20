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
    <div class="mbe4">
      <h3>CSS Parts Customization</h3>
      <p
        class="mbe2"
        style="color: var(--ag-text-secondary); font-size: 0.875rem;"
      >
        Customize alert appearance using CSS Shadow Parts without breaking encapsulation.
      </p>
    </div>
    <div class="stacked mbe4">
      <VueAlert class="custom-gradient-alert mbe2">
        This alert uses a vibrant gradient background with custom shadows
      </VueAlert>
      <VueAlert class="custom-card-alert mbe2">
        Card-style alert with elevation and hover effect
      </VueAlert>
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

<style scoped>
/* CSS Parts customization examples */

/* Gradient alert style */
.custom-gradient-alert::part(ag-alert) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 12px;
  border: none;
  box-shadow: 0 8px 16px rgba(102, 126, 234, 0.3);
  font-weight: 600;
}

/* Card-style elevated alert */
.custom-card-alert::part(ag-alert) {
  background: white;
  color: #333;
  padding: 1.5rem;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.custom-card-alert::part(ag-alert):hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>
