<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Sun, Moon } from 'lucide-vue-next'
import VueHeader from './components/ag/Header/vue/VueHeader.vue'
import VueBreadcrumb from './components/ag/Breadcrumb/vue/VueBreadcrumb.vue'
import VueAvatar from './components/ag/Avatar/vue/VueAvatar.vue'
import VueSpinner from './components/ag/Spinner/vue/VueSpinner.vue'
import SkinSwitcher from './SkinSwitcher.vue'
import { products } from './data/products'
import TanstackPanel from './panels/TanstackPanel.vue'

const isLoading = ref(true)
const isDark = ref(document.documentElement.getAttribute('data-theme') === 'dark')

let loadTimer: ReturnType<typeof setTimeout> | null = null

onMounted(() => {
  loadTimer = setTimeout(() => { isLoading.value = false }, 1000)
})

onUnmounted(() => {
  if (loadTimer) clearTimeout(loadTimer)
})

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
    </div>

    <div v-if="isLoading" class="page-loading">
      <VueSpinner size="large" aria-label="Loading inventory…" />
    </div>
    <TanstackPanel v-else :products="products" />
  </main>
</template>
