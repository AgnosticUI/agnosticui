<template>
  <section>
    <div class="mbe4">
      <VueButton class="mie2">Default</VueButton>
    </div>
    <!-- Rounded -->
    <div class="mbe2">
      <h3>Rounded Variants</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton shape="rounded">Default</VueButton>
      <VueButton
        shape="rounded"
        variant="primary"
      >Primary</VueButton>
      <VueButton
        shape="rounded"
        variant="secondary"
      >Secondary</VueButton>
      <VueButton
        shape="rounded"
        variant="success"
      >Success</VueButton>
      <VueButton
        shape="rounded"
        variant="warning"
      >Warning</VueButton>
      <VueButton
        shape="rounded"
        variant="danger"
      >Danger</VueButton>
    </div>

    <!-- Shapes -->
    <div class="mbe2">
      <h3>Shapes</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton shape="rounded">Rounded</VueButton>
      <VueButton shape="capsule">Primary</VueButton>
      <VueButton shape="circle">C</VueButton>
      <VueButton shape="square">S</VueButton>
      <VueButton shape="rounded-square">RS</VueButton>
    </div>

    <!-- Sizes -->
    <div class="mbe2">
      <h3>Sizes</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton
        size="x-sm"
        shape="rounded"
      >Extra Small</VueButton>
      <VueButton
        size="sm"
        shape="rounded"
      >Small</VueButton>
      <VueButton
        size="md"
        shape="rounded"
      >Medium</VueButton>
      <VueButton
        size="lg"
        shape="rounded"
      >Large</VueButton>
      <VueButton
        size="xl"
        shape="rounded"
      >Extra Large</VueButton>
    </div>

    <!-- Bordered -->
    <div class="mbe2">
      <h3>Bordered</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton
        bordered
        shape="rounded"
      >Go</VueButton>
      <VueButton
        bordered
        shape="rounded"
        variant="primary"
      >Go</VueButton>
      <VueButton
        bordered
        shape="rounded"
        variant="secondary"
      >Go</VueButton>
      <VueButton
        bordered
        shape="rounded"
        variant="success"
      >Go</VueButton>
      <VueButton
        bordered
        shape="rounded"
        variant="warning"
      >Go</VueButton>
      <VueButton
        bordered
        shape="rounded"
        variant="danger"
      >Go</VueButton>
      <VueButton
        bordered
        shape="rounded"
        variant="primary"
      >Go</VueButton>
    </div>

    <!-- Grouped -->
    <div class="mbe2">
      <h3>Grouped</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <div
        class="flex-inline"
        role="group"
        aria-label="Framework selection"
      >
        <VueButton
          grouped
          bordered
          variant="primary"
        >React</VueButton>
        <VueButton
          grouped
          bordered
          variant="primary"
        >Vue</VueButton>
        <VueButton
          grouped
          bordered
          variant="primary"
        >Svelte</VueButton>
        <VueButton
          grouped
          bordered
          variant="primary"
        >Angular</VueButton>
      </div>
    </div>

    <!-- Misc -->
    <div class="mbe2">
      <h3>Miscellaneous</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton
        ghost
        class="mie2"
      >Ghost</VueButton>
      <VueButton
        link
        class="mie2"
      >Link</VueButton>
      <VueButton
        type="submit"
        bordered
        shape="rounded"
        variant="primary"
        class="mie2"
      >Submit</VueButton>
      <VueButton
        toggle="true"
        class="mie2"
      >Toggle</VueButton>
      <VueButton
        disabled
        class="mie2"
      >Disabled</VueButton>
    </div>

    <!-- CSS Parts Customization -->
    <div class="mbe4">
      <h3>CSS Parts Customization</h3>
      <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
        Customize button appearance using CSS Shadow Parts without breaking encapsulation.
      </p>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton class="custom-gradient-button">
        🎨 Gradient Button
      </VueButton>
      <VueButton class="custom-neon-button">
        ⚡ Neon Button
      </VueButton>
      <VueButton class="custom-minimal-button">
        💡 Minimal Button
      </VueButton>
      <VueButton class="custom-elevated-button">
        📋 Elevated Button
      </VueButton>
    </div>
  </section>
</template>
<script>
import VueButton from "agnosticui-core/button/vue";
export default {
  name: "ButtonExamples",
  components: { VueButton },
};
</script>

<style scoped>
/* CSS Parts customization examples */

/* Gradient button style */
.custom-gradient-button::part(ag-button) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  border: none;
  box-shadow: 0 8px 16px rgba(102, 126, 234, 0.4);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
}

.custom-gradient-button::part(ag-button):hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(102, 126, 234, 0.6);
}

/* Neon glow button */
.custom-neon-button::part(ag-button) {
  background: #1a1a2e;
  color: #0ff;
  border: 2px solid #0ff;
  padding: 1rem 2rem;
  border-radius: 8px;
  box-shadow:
    0 0 10px #0ff,
    0 0 20px #0ff,
    inset 0 0 10px rgba(0, 255, 255, 0.2);
  text-shadow: 0 0 5px #0ff;
  font-weight: 600;
  transition: all 0.3s ease;
}

.custom-neon-button::part(ag-button):hover {
  box-shadow:
    0 0 15px #0ff,
    0 0 30px #0ff,
    inset 0 0 15px rgba(0, 255, 255, 0.3);
}

/* Minimalist button with accent */
.custom-minimal-button::part(ag-button) {
  background: transparent;
  color: var(--ag-primary);
  padding: 0.75rem 1.5rem;
  border: none;
  border-bottom: 3px solid var(--ag-primary);
  border-radius: 0;
  font-weight: 600;
  transition: all 0.2s ease;
}

.custom-minimal-button::part(ag-button):hover {
  background: var(--ag-background-secondary);
  border-bottom-color: var(--ag-primary);
  transform: translateY(-1px);
}

/* Elevated button with shadow */
.custom-elevated-button::part(ag-button) {
  background: white;
  color: #333;
  padding: 1rem 2rem;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  font-weight: 600;
  transition: all 0.3s ease;
}

.custom-elevated-button::part(ag-button):hover {
  transform: translateY(-3px);
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.15),
    0 10px 10px -5px rgba(0, 0, 0, 0.08);
}
</style>
