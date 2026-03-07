<script setup lang="ts">
import VueButton from '../src/components/ag/Button/vue/VueButton.vue';
import VueButtonFx from '../src/components/ag/ButtonFx/vue/VueButtonFx.vue';
import VueIconButton from '../src/components/ag/IconButton/vue/VueIconButton.vue';
import VueIconButtonFx from '../src/components/ag/IconButtonFx/vue/VueIconButtonFx.vue';
import VueCopyButton from '../src/components/ag/CopyButton/vue/VueCopyButton.vue';
import VueLink from '../src/components/ag/Link/vue/VueLink.vue';
</script>

<template>
  <main style="padding: 20px; display: flex; flex-direction: column; gap: 12px">
    <h1>Actions</h1>
    <VueButton variant="primary">Primary Button</VueButton>
    <VueButtonFx variant="secondary">ButtonFx</VueButtonFx>
    <VueIconButton label="Star" icon="★" variant="primary" />
    <VueIconButtonFx label="Heart" icon="♥" variant="secondary" />
    <VueCopyButton text="copy me" label="Copy" />
    <VueLink href="#">Link</VueLink>
  </main>
</template>
