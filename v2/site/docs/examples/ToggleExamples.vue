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
      <h3>Interactive Example</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueToggle
        label="Notifications"
        :checked="notificationsEnabled"
        @toggle-change="handleToggleChange"
      />
      <p>Notifications are <strong>{{ notificationsEnabled ? 'enabled' : 'disabled' }}</strong></p>
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
    };
  },
  methods: {
    handleToggleChange(event) {
      this.notificationsEnabled = event.checked;
      console.log("Toggle changed:", event);
    },
  },
};
</script>
