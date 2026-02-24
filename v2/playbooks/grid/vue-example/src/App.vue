<script setup lang="ts">
import { ref } from 'vue'
import { Sun, Moon } from 'lucide-vue-next'
import VueHeader from './components/ag/Header/vue/VueHeader.vue'
import VueBreadcrumb from './components/ag/Breadcrumb/vue/VueBreadcrumb.vue'
import VueAvatar from './components/ag/Avatar/vue/VueAvatar.vue'
import VueSelectionButtonGroup from './components/ag/SelectionButtonGroup/vue/VueSelectionButtonGroup.vue'
import VueSelectionButton from './components/ag/SelectionButton/vue/VueSelectionButton.vue'
import type { SelectionButtonChangeEventDetail } from './components/ag/SelectionButtonGroup/core/SelectionButtonGroup'
import SkinSwitcher from './SkinSwitcher.vue'
import { products } from './data/products'
import SimplePanel from './panels/SimplePanel.vue'
import GridJsPanel from './panels/GridJsPanel.vue'
import TanstackPanel from './panels/TanstackPanel.vue'

type PanelView = 'simple' | 'gridjs' | 'tanstack'

const activePanel = ref<PanelView>('simple')
const isDark = ref(document.documentElement.getAttribute('data-theme') === 'dark')

function toggleTheme() {
  const html = document.documentElement
  const dark = html.getAttribute('data-theme') === 'dark'
  if (dark) { html.removeAttribute('data-theme'); isDark.value = false }
  else { html.setAttribute('data-theme', 'dark'); isDark.value = true }
}

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Inventory', current: true },
]

function handlePanelChange(detail: SelectionButtonChangeEventDetail) {
  activePanel.value = detail.value as PanelView
}
</script>

<template>
  <SkinSwitcher />
  <VueHeader content-justify="between">
    <template #logo>
      <span style="font-weight: 700; font-size: 1.125rem; color: var(--ag-primary)">AgnosticUI</span>
    </template>
    <button class="theme-toggle" aria-label="Toggle theme" @click="toggleTheme">
      <Sun v-if="isDark" :size="18" />
      <Moon v-else :size="18" />
    </button>
    <VueAvatar text="AB" variant="info" />
  </VueHeader>

  <main class="app-main">
    <VueBreadcrumb :items="breadcrumbItems" type="slash" />

    <div class="page-title-row">
      <h1 class="page-title">Inventory</h1>
      <div class="view-as-row">
        <span class="view-as-label">View as:</span>
        <VueSelectionButtonGroup
          type="radio"
          name="panel-view"
          :legend-hidden="true"
          legend="View as"
          shape="rounded"
          :value="activePanel"
          @selection-change="handlePanelChange"
        >
          <VueSelectionButton value="simple" label="Simple">Simple</VueSelectionButton>
          <VueSelectionButton value="gridjs" label="Grid.js">Grid.js</VueSelectionButton>
          <VueSelectionButton value="tanstack" label="TanStack">TanStack</VueSelectionButton>
        </VueSelectionButtonGroup>
      </div>
    </div>

    <SimplePanel v-if="activePanel === 'simple'" :products="products" />
    <GridJsPanel v-else-if="activePanel === 'gridjs'" :products="products" />
    <TanstackPanel v-else-if="activePanel === 'tanstack'" :products="products" />
  </main>
</template>
