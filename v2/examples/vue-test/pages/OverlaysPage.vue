<script setup lang="ts">
import VueDialog from '../src/components/ag/Dialog/vue/VueDialog.vue';
import VueDrawer from '../src/components/ag/Drawer/vue/VueDrawer.vue';
import VuePopover from '../src/components/ag/Popover/vue/VuePopover.vue';
import VueTooltip from '../src/components/ag/Tooltip/vue/VueTooltip.vue';
import VueAccordion from '../src/components/ag/Accordion/vue/VueAccordion.vue';
import VueAccordionItem from '../src/components/ag/Accordion/vue/VueAccordionItem.vue';
import VueAccordionHeader from '../src/components/ag/Accordion/vue/VueAccordionHeader.vue';
import VueAccordionContent from '../src/components/ag/Accordion/vue/VueAccordionContent.vue';
import VueCollapsible from '../src/components/ag/Collapsible/vue/VueCollapsible.vue';
</script>

<template>
  <main style="padding: 20px; display: flex; flex-direction: column; gap: 24px">
    <h1>Overlays</h1>
    <VueDialog heading="Demo Dialog" :open="false" />
    <VueDrawer heading="Demo Drawer" :open="false" />
    <VuePopover>
      <template #trigger>
        <button>Open Popover</button>
      </template>
      <template #content>
        Popover content
      </template>
    </VuePopover>
    <VueTooltip content="Tooltip text">
      <button>Hover me</button>
    </VueTooltip>
    <VueAccordion>
      <VueAccordionItem>
        <VueAccordionHeader>Section 1</VueAccordionHeader>
        <VueAccordionContent>Content for section 1</VueAccordionContent>
      </VueAccordionItem>
    </VueAccordion>
    <VueCollapsible :open="false">
      <template #summary>Collapsible</template>
      <div>Collapsed content</div>
    </VueCollapsible>
  </main>
</template>
