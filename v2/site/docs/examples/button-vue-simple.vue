<template>
  <section>
    <!-- Variants -->
    <div class="mbe2">
      <h2>Variants</h2>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton title="Default">Default</VueButton>
      <VueButton variant="primary" title="Primary">Primary</VueButton>
      <VueButton variant="secondary" title="Secondary">Secondary</VueButton>
      <VueButton variant="success" title="Success">Success</VueButton>
      <VueButton variant="warning" title="Warning">Warning</VueButton>
      <VueButton variant="danger" title="Danger">Danger</VueButton>
      <VueButton variant="monochrome" title="Monochrome">Monochrome</VueButton>
    </div>

    <!-- Sizes -->
    <div class="mbe2">
      <h2>Sizes</h2>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton size="x-sm" variant="primary" title="Extra Small">X-Small</VueButton>
      <VueButton size="sm" variant="primary" title="Small">Small</VueButton>
      <VueButton size="md" variant="primary" title="Medium">Medium</VueButton>
      <VueButton size="lg" variant="primary" title="Large">Large</VueButton>
      <VueButton size="xl" variant="primary" title="Extra Large">X-Large</VueButton>
    </div>

    <!-- Shapes -->
    <div class="mbe2">
      <h2>Shapes</h2>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton shape="rounded" variant="primary" title="Rounded">Rounded</VueButton>
      <VueButton shape="capsule" variant="success" title="Capsule">Capsule</VueButton>
      <VueButton shape="circle" title="Circle">C</VueButton>
      <VueButton shape="square" variant="secondary" title="Square">S</VueButton>
      <VueButton shape="rounded-square" variant="danger" title="Rounded Square">RS</VueButton>
    </div>

    <!-- Bordered -->
    <div class="mbe2">
      <h2>Bordered</h2>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton bordered title="Default Bordered">Default</VueButton>
      <VueButton bordered variant="primary" title="Primary Bordered">Primary</VueButton>
      <VueButton bordered variant="secondary" title="Secondary Bordered">Secondary</VueButton>
      <VueButton bordered variant="success" title="Success Bordered">Success</VueButton>
    </div>

    <!-- Ghost -->
    <div class="mbe2">
      <h2>Ghost</h2>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton ghost variant="primary" title="Primary Ghost">Primary</VueButton>
      <VueButton ghost variant="secondary" title="Secondary Ghost">Secondary</VueButton>
      <VueButton ghost variant="success" title="Success Ghost">Success</VueButton>
    </div>

    <!-- Link Style -->
    <div class="mbe2">
      <h2>Link Style</h2>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton link title="Link Button">Link Button</VueButton>
    </div>

    <!-- States -->
    <div class="mbe2">
      <h2>States</h2>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton disabled title="Disabled">Disabled</VueButton>
      <VueButton loading variant="primary" title="Loading">Loading</VueButton>
    </div>

    <!-- Toggle -->
    <div class="mbe2">
      <h2>Toggle Button</h2>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton
        toggle
        :pressed="isPressed"
        @toggle="handleToggle"
        variant="primary"
        title="Toggle Button"
      >
        {{ isPressed ? 'Pressed' : 'Not Pressed' }}
      </VueButton>
    </div>
  </section>
</template>

<script>
import VueButton from "agnosticui-core/button/vue";

export default {
  name: "ButtonVueSimple",
  components: {
    VueButton,
  },
  data() {
    return {
      isPressed: false,
    };
  },
  methods: {
    handleToggle(event) {
      this.isPressed = event.pressed;
    },
  },
};
</script>
