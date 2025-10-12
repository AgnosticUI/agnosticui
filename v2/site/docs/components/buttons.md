# Buttons

Everyone knows buttons are the life of the party :man_dancing:

## Examples

<ButtonExamples />

<script setup>
import ButtonExamples from '../examples/ButtonExamples.vue'
</script>

## Usage

```vue{4}
<template>
  <section>
    <div class="mbe4">
      <VueButton class="mie2">Default</VueButton>
    </div>
    <!-- Rounded -->
    <div class="mbe4">
      <div class="mbe2">
        <h3>Rounded Variants</h3>
      </div>
      <VueButton
        shape="rounded"
        class="mie2"
      >Default</VueButton>
      <VueButton
        shape="rounded"
        variant="primary"
        class="mie2"
      >Primary</VueButton>
      <VueButton
        shape="rounded"
        variant="secondary"
        class="mie2"
      >Secondary</VueButton>
      <VueButton
        shape="rounded"
        variant="success"
        class="mie2"
      >Success</VueButton>
      <VueButton
        shape="rounded"
        variant="warning"
        class="mie2"
      >Warning</VueButton>
      <VueButton
        shape="rounded"
        variant="danger"
        class="mie2"
      >Danger</VueButton>
    </div>

    <!-- Shapes -->
    <div class="mbe4">
      <div class="mbe2">
        <h3>Shapes</h3>
      </div>
      <VueButton
        shape="rounded"
        class="mie2"
      >Rounded</VueButton>
      <VueButton
        shape="capsule"
        class="mie2"
      >Primary</VueButton>
      <VueButton
        shape="circle"
        class="mie2"
      >C</VueButton>
      <VueButton
        shape="square"
        class="mie2"
      >S</VueButton>
      <VueButton
        shape="rounded-square"
        class="mie2"
      >RS</VueButton>
    </div>

    <!-- Sizes -->
    <div class="mbe4">
      <div class="mbe2">
        <h3>Sizes</h3>
      </div>
      <VueButton
        size="x-sm"
        shape="rounded"
        class="mie2"
      >Extra Small</VueButton>
      <VueButton
        size="sm"
        shape="rounded"
        class="mie2"
      >Small</VueButton>
      <VueButton
        size="md"
        shape="rounded"
        class="mie2"
      >Medium</VueButton>
      <VueButton
        size="lg"
        shape="rounded"
        class="mie2"
      >Large</VueButton>
      <VueButton
        size="xl"
        shape="rounded"
        class="mie2"
      >Extra Large</VueButton>
    </div>

    <!-- Bordered -->
    <div class="mbe4">
      <div class="mbe2">
        <h3>Bordered</h3>
      </div>
      <VueButton
        bordered
        shape="rounded"
        class="mie2"
      >Go</VueButton>
      <VueButton
        bordered
        shape="rounded"
        variant="primary"
        class="mie2"
      >Go</VueButton>
      <VueButton
        bordered
        shape="rounded"
        variant="secondary"
        class="mie2"
      >Go</VueButton>
      <VueButton
        bordered
        shape="rounded"
        variant="success"
        class="mie2"
      >Go</VueButton>
      <VueButton
        bordered
        shape="rounded"
        variant="warning"
        class="mie2"
      >Go</VueButton>
      <VueButton
        bordered
        shape="rounded"
        variant="danger"
        class="mie2"
      >Go</VueButton>
      <VueButton
        bordered
        shape="rounded"
        variant="primary"
        class="mie2"
      >Go</VueButton>
    </div>

    <!-- Grouped -->
    <div class="mbe4">
      <div class="mbe2">
        <h3>Grouped</h3>
      </div>
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
    <div class="mbe4">
      <div class="mbe2">
        <h3>Miscellaneous</h3>
      </div>
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
```
