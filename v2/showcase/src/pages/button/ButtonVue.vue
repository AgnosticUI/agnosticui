<template>
  <section class="mbe-24">
    <h2 class="mbe-24">Vue Button</h2>
    <div class="flex-inline gap-16">
      <VueButton>Button</VueButton>
      <VueButton mode="primary">Primary</VueButton>
      <VueButton mode="secondary">Secondary</VueButton>
      <VueButton isDisabled>Disabled</VueButton>
    </div>
  </section>
</template>

<script setup>
import "agnosticui-vue/dist/style.css";
import { Button } from "agnosticui-vue";
</script>
<script setup>
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Button, ButtonGroup } from "agnostic-vue";
import VueButton from "agnosticui-core/button/vue";
</script>

