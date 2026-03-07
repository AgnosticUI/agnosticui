<script setup lang="ts">
import VueCard from '../src/components/ag/Card/vue/VueCard.vue';
import VueFlexRow from '../src/components/ag/Flex/vue/VueFlexRow.vue';
import VueHeader from '../src/components/ag/Header/vue/VueHeader.vue';
import VueSidebar from '../src/components/ag/Sidebar/vue/VueSidebar.vue';
import VueSidebarNav from '../src/components/ag/SidebarNav/vue/VueSidebarNav.vue';
import VueDivider from '../src/components/ag/Divider/vue/VueDivider.vue';
import VueAspectRatio from '../src/components/ag/AspectRatio/vue/VueAspectRatio.vue';
import VueFieldset from '../src/components/ag/Fieldset/vue/VueFieldset.vue';

const placeholder = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
</script>

<template>
  <main style="padding: 20px; display: flex; flex-direction: column; gap: 24px">
    <h1>Layout</h1>
    <VueCard>Card content</VueCard>
    <VueFlexRow>
      <span>Item 1</span>
      <span>Item 2</span>
    </VueFlexRow>
    <VueHeader>Header content</VueHeader>
    <VueSidebar :open="false">Sidebar content</VueSidebar>
    <VueSidebarNav>Nav content</VueSidebarNav>
    <VueDivider />
    <VueAspectRatio :width="16" :height="9" :max-width="320">
      <img :src="placeholder" alt="placeholder" />
    </VueAspectRatio>
    <VueFieldset legend="Demo Fieldset" :bordered="true">
      <span>Field content</span>
    </VueFieldset>
  </main>
</template>
