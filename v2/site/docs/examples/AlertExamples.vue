<template>
  <section>
    <div class="mbe4">
      <h2>Alerts</h2>
    </div>
    <div class="stacked">
      <VueAlert class="mbe2">Default alert</VueAlert>
      <VueAlert
        class="mbe2"
        variant="success"
      >Success alert</VueAlert>
      <VueAlert
        class="mbe2"
        variant="info"
      >Info alert</VueAlert>
      <VueAlert
        class="mbe2"
        variant="primary"
      >Primary alert</VueAlert>
      <VueAlert
        class="mbe2"
        variant="warning"
      >Warning alert</VueAlert>
      <VueAlert
        class="mbe2"
        variant="error"
      >Error alert</VueAlert>
      <VueAlert
        class="mbe2"
        variant="danger"
      >Danger alert</VueAlert>
      <VueAlert
        class="mbe2"
        variant="monochrome"
      >Monochrome alert</VueAlert>
    </div>
    <div class="mbe4">
      <h2>Bordered</h2>
    </div>
    <div class="stacked">
      <VueAlert
        class="mbe2"
        bordered
      >Default alert</VueAlert>
      <VueAlert
        class="mbe2"
        bordered
        variant="success"
      >Success alert</VueAlert>
      <VueAlert
        class="mbe2"
        bordered
        variant="info"
      >Info alert</VueAlert>
      <VueAlert
        class="mbe2"
        bordered
        variant="primary"
      >Primary alert</VueAlert>
      <VueAlert
        class="mbe2"
        bordered
        variant="warning"
      >Warning alert</VueAlert>
      <VueAlert
        class="mbe2"
        bordered
        variant="error"
      >Error alert</VueAlert>
      <VueAlert
        class="mbe2"
        bordered
        variant="danger"
      >Danger alert</VueAlert>
      <VueAlert
        class="mbe2"
        bordered
        variant="monochrome"
      >Monochrome alert</VueAlert>
    </div>
    <div class="mbe4">
      <h2>Bordered Left with Icon</h2>
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
        variant="success"
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
        variant="info"
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
        variant="primary"
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
        variant="warning"
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
        variant="error"
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
        variant="danger"
      >
        <div class="flex-inline items-center justify-center">
          <Info
            color="var(--ag-danger)"
            :size="18"
            class="mie2"
          />Danger alert
        </div>
      </VueAlert>
      <VueAlert
        class="mbe2"
        borderedLeft
        variant="monochrome"
      >
        <div class="flex-inline items-center justify-center">
          <Info
            color="var(--ag-text-primary)"
            :size="18"
            class="mie2"
          />Monochrome alert
        </div>
      </VueAlert>
    </div>
    <div class="mbe4">
      <h2>Rounded</h2>
    </div>
    <div class="stacked">
      <VueAlert
        class="mbe2"
        rounded
      >Default alert</VueAlert>
      <VueAlert
        class="mbe2"
        rounded
        variant="success"
      >Success alert</VueAlert>
      <VueAlert
        class="mbe2"
        rounded
        variant="info"
      >Info alert</VueAlert>
      <VueAlert
        class="mbe2"
        rounded
        variant="primary"
      >Primary alert</VueAlert>
      <VueAlert
        class="mbe2"
        rounded
        variant="warning"
      >Warning alert</VueAlert>
      <VueAlert
        class="mbe2"
        rounded
        variant="error"
      >Error alert</VueAlert>
      <VueAlert
        class="mbe2"
        rounded
        variant="danger"
      >Danger alert</VueAlert>
      <VueAlert
        class="mbe2"
        rounded
        variant="monochrome"
      >Monochrome alert</VueAlert>
    </div>
    <div class="mbe4">
      <h2>Dismissible</h2>
      <p
        class="mbe2"
        style="color: var(--ag-text-secondary); font-size: 0.875rem;"
      >
        Alerts can be dismissed by the user with a close button.
      </p>
    </div>
    <div class="stacked mbe4">
      <VueAlert
        v-if="showSuccessAlert"
        class="mbe2"
        variant="success"
        dismissible
        @alert-dismiss="showSuccessAlert = false"
      >
        <strong>Success!</strong> Your changes have been saved. Click the × to dismiss.
      </VueAlert>
      <button
        v-if="!showSuccessAlert"
        @click="showSuccessAlert = true"
        class="mbe2"
        style="padding: 0.5rem 1rem; cursor: pointer;"
      >
        Show Success Alert
      </button>

      <VueAlert
        v-if="showWarningAlert"
        class="mbe2"
        variant="warning"
        dismissible
        rounded
        @alert-dismiss="handleWarningDismiss"
      >
        <strong>Warning!</strong> This action may have unintended consequences.
      </VueAlert>
      <button
        v-if="!showWarningAlert"
        @click="showWarningAlert = true"
        style="padding: 0.5rem 1rem; cursor: pointer;"
      >
        Show Warning Alert
      </button>
    </div>
    <div class="mbe4">
      <h2>CSS Parts Customization</h2>
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
  data() {
    return {
      showSuccessAlert: true,
      showWarningAlert: true,
    };
  },
  methods: {
    handleWarningDismiss(event) {
      console.log("Warning dismissed, variant:", event.detail.variant);
      this.showWarningAlert = false;
    },
  },
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
