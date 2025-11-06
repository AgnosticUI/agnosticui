<template>
  <section>
    <div class="mbe2">
      <h3>Default Toggles</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueToggle label="Default toggle" />
      <VueToggle
        label="Checked by default"
        :checked="true"
      />
      <VueToggle
        label="Disabled"
        disabled
      />
      <VueToggle
        label="Disabled and checked"
        :checked="true"
        disabled
      />
    </div>

    <div class="mbe2">
      <h3>Sizes</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueToggle
        label="Extra small"
        size="xs"
      />
      <VueToggle
        label="Small"
        size="sm"
      />
      <VueToggle
        label="Medium (default)"
        size="md"
      />
      <VueToggle
        label="Large"
        size="lg"
      />
      <VueToggle
        label="Extra large"
        size="xl"
      />
    </div>

    <div class="mbe2">
      <h3>Variants</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueToggle
        label="Default variant"
        :checked="true"
      />
      <VueToggle
        label="Success"
        variant="success"
        :checked="true"
      />
      <VueToggle
        label="Warning"
        variant="warning"
        :checked="true"
      />
      <VueToggle
        label="Danger"
        variant="danger"
        :checked="true"
      />
    </div>

    <div class="mbe2">
      <h3>Interactive Examples</h3>
      <p class="mbs2 mbe3">
        Demonstrates event handling with @toggle-change and v-model:checked
      </p>
    </div>
    <div class="stacked-mobile mbe4">
      <!-- Pattern 1: @toggle-change event -->
      <div>
        <VueToggle
          label="Notifications (@toggle-change)"
          :checked="notificationsEnabled"
          @toggle-change="handleToggleChange"
        />
        <p style="margin-top: 0.5rem">
          Notifications: <strong>{{ notificationsEnabled ? 'Enabled' : 'Disabled' }}</strong>
        </p>
      </div>

      <!-- Pattern 2: v-model:checked (two-way binding) -->
      <div>
        <VueToggle
          label="Dark Mode (v-model:checked)"
          v-model:checked="darkModeEnabled"
        />
        <p style="margin-top: 0.5rem">
          Dark mode: <strong>{{ darkModeEnabled ? 'On' : 'Off' }}</strong>
        </p>
        <button
          @click="darkModeEnabled = !darkModeEnabled"
          style="margin-top: 0.5rem; padding: 0.25rem 0.75rem; border: 1px solid var(--ag-border); border-radius: var(--ag-radius-sm); cursor: pointer;"
        >
          Toggle programmatically
        </button>
      </div>

      <!-- Pattern 3: Form integration with event detail -->
      <div>
        <VueToggle
          label="Newsletter Subscription"
          name="newsletter"
          value="subscribed"
          :checked="formData.newsletter"
          @toggle-change="handleFormToggle"
        />
        <p style="margin-top: 0.5rem; font-size: 0.875rem; color: var(--ag-text-secondary);">
          Form data: name="{{ formData.name }}", value="{{ formData.value }}", checked={{ formData.newsletter }}
        </p>
      </div>
    </div>
    <div class="mbe2">
      <h3>CSS Shadow Parts Customization</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <div v-html="customToggleStyles"></div>
      <VueToggle
        class="custom-toggle"
        label="Customized Toggle"
        :checked="true"
      />
    </div>
  </section>
</template>

<script>
import VueToggle from "agnosticui-core/toggle/vue";

export default {
  name: "ToggleExamples",
  components: { VueToggle },
  data() {
    return {
      notificationsEnabled: false,
      darkModeEnabled: false,
      formData: {
        newsletter: false,
        name: "",
        value: "",
      },
      customToggleStyles: `
        <style>
          .custom-toggle::part(ag-toggle-button) {
            border: 2px solid var(--ag-coral-50);
            border-radius: 9999px;
            padding: var(--ag-space-2) var(--ag-space-3);
          }
          .custom-toggle::part(ag-toggle-track) {
            background-color: #f0f0f0;
          }
          .custom-toggle::part(ag-toggle-handle) {
            background-color: var(--ag-coral-200);
            border: 2px solid #fff;
            box-shadow: 0 0 5px var(--ag-coral-200);
          }
          .custom-toggle[checked]::part(ag-toggle-track) {
            background-color:var(--ag-coral-300);
          }
          .custom-toggle[checked]::part(ag-toggle-handle) {
            background-color: #fff;
          }
        </style>
      `,
    };
  },
  methods: {
    handleToggleChange(event) {
      this.notificationsEnabled = event.checked;
      console.log("Toggle changed:", event);
    },
    handleFormToggle(event) {
      this.formData.newsletter = event.checked;
      this.formData.name = event.name;
      this.formData.value = event.value;
      console.log("Form toggle changed:", event);
    },
  },
};
</script>
