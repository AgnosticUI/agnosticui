<script setup lang="ts">
import VueBreadcrumb from '../src/components/ag/Breadcrumb/vue/VueBreadcrumb.vue';
import VueTabs from '../src/components/ag/Tabs/vue/VueTabs.vue';
import VueTab from '../src/components/ag/Tabs/vue/VueTab.vue';
import VueTabPanel from '../src/components/ag/Tabs/vue/VueTabPanel.vue';
import VuePagination from '../src/components/ag/Pagination/vue/VuePagination.vue';
import VueMenu from '../src/components/ag/Menu/vue/VueMenu.vue';
import VueMenuItem from '../src/components/ag/Menu/vue/VueMenuItem.vue';

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Section', href: '/section' },
  { label: 'Page' },
];
</script>

<template>
  <main style="padding: 20px; display: flex; flex-direction: column; gap: 24px">
    <h1>Navigation</h1>
    <VueBreadcrumb :items="breadcrumbItems" />
    <VueTabs aria-label="Demo tabs">
      <VueTab panel="tab1">Tab 1</VueTab>
      <VueTab panel="tab2">Tab 2</VueTab>
      <VueTabPanel>Panel 1</VueTabPanel>
      <VueTabPanel>Panel 2</VueTabPanel>
    </VueTabs>
    <VuePagination :current="1" :total-pages="10" />
    <VueMenu>
      <span>Options</span>
      <template #menu>
        <VueMenuItem value="edit">Edit</VueMenuItem>
        <VueMenuItem value="delete">Delete</VueMenuItem>
      </template>
    </VueMenu>
  </main>
</template>
