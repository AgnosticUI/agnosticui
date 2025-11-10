
<template>
  <section>
    <div class="mbe4">
      <h3>Basic Links</h3>
      <div class="stacked-mobile">
        <VueLink href="#link">Home</VueLink>
        <VueLink href="#link">About</VueLink>
      </div>
    </div>

    <div class="mbe4">
      <h3>Variant Links</h3>
      <div class="stacked-mobile">
        <VueLink
          href="#link"
          variant="success"
        >Success Link</VueLink>
        <VueLink
          href="#link"
          variant="warning"
        >Warning Link</VueLink>
        <VueLink
          href="#link"
          variant="danger"
        >Danger Link</VueLink>
      </div>
    </div>

    <div class="mbe4">
      <h3>Button-Style Links</h3>
      <div class="stacked-mobile">
        <VueLink
          href="#link"
          :isButton="true"
        >Button Link</VueLink>
        <VueLink
          href="#link"
          :isButton="true"
          variant="success"
        >Success Button</VueLink>
        <VueLink
          href="#link"
          :isButton="true"
          variant="warning"
        >Warning Button</VueLink>
        <VueLink
          href="#link"
          :isButton="true"
          variant="danger"
        >Danger Button</VueLink>
      </div>
    </div>

    <div class="mbe4">
      <h3>External Link</h3>
      <div class="stacked-mobile">
        <VueLink
          href="https://github.com"
          :external="true"
        >External Link →</VueLink>
      </div>
    </div>

    <div class="mbe4">
      <h3>Disabled Links</h3>
      <div class="stacked-mobile">
        <VueLink
          href="#link"
          :disabled="true"
        >Disabled Link</VueLink>
        <VueLink
          href="#link"
          :disabled="true"
          :isButton="true"
        >Disabled Button</VueLink>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VueLink } from "agnosticui-core/link/vue";

export default defineComponent({
  name: "LinkExamples",
  components: {
    VueLink,
  },
});
</script>
