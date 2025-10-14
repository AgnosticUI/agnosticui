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
  </section>
</template>
<script>
import VueButton from "agnosticui-core/button/vue";
export default {
  name: "ButtonExamples",
  components: { VueButton },
};
</script>
