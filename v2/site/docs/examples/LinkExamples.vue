
<template>
  <section>
    <div class="mbe4">
      <h3>Basic Links</h3>
      <div class="stacked-mobile">
        <VueLink href="/home">Home</VueLink>
        <VueLink href="/about">About</VueLink>
      </div>
    </div>

    <div class="mbe4">
      <h3>Variant Links</h3>
      <div class="stacked-mobile">
        <VueLink href="/success" variant="success">Success Link</VueLink>
        <VueLink href="/warning" variant="warning">Warning Link</VueLink>
        <VueLink href="/danger" variant="danger">Danger Link</VueLink>
      </div>
    </div>

    <div class="mbe4">
      <h3>Button-Style Links</h3>
      <div class="stacked-mobile">
        <VueLink href="/action" :isButton="true">Button Link</VueLink>
        <VueLink href="/action" :isButton="true" variant="success">Success Button</VueLink>
        <VueLink href="/action" :isButton="true" variant="warning">Warning Button</VueLink>
        <VueLink href="/action" :isButton="true" variant="danger">Danger Button</VueLink>
      </div>
    </div>

    <div class="mbe4">
      <h3>External Link</h3>
      <div class="stacked-mobile">
        <VueLink href="https://github.com" :external="true">External Link →</VueLink>
      </div>
    </div>

    <div class="mbe4">
      <h3>Disabled Links</h3>
      <div class="stacked-mobile">
        <VueLink href="/disabled" :disabled="true">Disabled Link</VueLink>
        <VueLink href="/disabled" :disabled="true" :isButton="true">Disabled Button</VueLink>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VueLink } from 'agnosticui-core/link/vue';

export default defineComponent({
  name: 'LinkExamples',
  components: {
    VueLink,
  },
});
</script>
