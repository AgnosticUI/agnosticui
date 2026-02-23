<script setup lang="ts">
// Skin swap demo: importing brutalist-light.css after ag-tokens.css
// reskins this entire panel — no component code changes needed.

import { ref, computed } from 'vue'
import { Pencil, ChevronUp, ChevronDown } from 'lucide-vue-next'
import VueInput from '../components/ag/Input/vue/VueInput.vue'
import VueTag from '../components/ag/Tag/vue/VueTag.vue'
import VueIconButton from '../components/ag/IconButton/vue/VueIconButton.vue'
import VueToast from '../components/ag/Toast/vue/VueToast.vue'
import VueEmptyState from '../components/ag/EmptyState/vue/VueEmptyState.vue'
import VuePagination from '../components/ag/Pagination/vue/VuePagination.vue'
import type { TagVariant } from '../components/ag/Tag/core/_Tag'
import type { Product } from '../data/products'

const props = defineProps<{ products: Product[] }>()

type SortCol = 'name' | 'category' | 'price' | 'stock' | 'status' | null
type SortDir = 'asc' | 'desc' | null

const PAGE_SIZE = 10

const search = ref('')
const sortCol = ref<SortCol>(null)
const sortDir = ref<SortDir>(null)
const page = ref(1)
const toastOpen = ref(false)
const toastMsg = ref('')
let toastTimer: ReturnType<typeof setTimeout> | null = null

function statusVariant(status: Product['status']): TagVariant {
  if (status === 'active') return 'success'
  if (status === 'low-stock') return 'warning'
  return ''
}

function handleSearch(e: Event) {
  search.value = (e.target as HTMLInputElement).value
  page.value = 1
}

function handleSort(col: SortCol) {
  if (sortCol.value !== col) {
    sortCol.value = col
    sortDir.value = 'asc'
  } else if (sortDir.value === 'asc') {
    sortDir.value = 'desc'
  } else {
    sortCol.value = null
    sortDir.value = null
  }
}

function showToast(msg: string) {
  toastMsg.value = msg
  toastOpen.value = true
  if (toastTimer) clearTimeout(toastTimer)
  toastTimer = setTimeout(() => { toastOpen.value = false }, 3000)
}

const filtered = computed(() => {
  const term = search.value.toLowerCase()
  return props.products.filter(p => p.name.toLowerCase().includes(term))
})

const sorted = computed(() => {
  const col = sortCol.value
  const dir = sortDir.value
  if (!col || !dir) return filtered.value
  return [...filtered.value].sort((a, b) => {
    const av = a[col]
    const bv = b[col]
    if (av < bv) return dir === 'asc' ? -1 : 1
    if (av > bv) return dir === 'asc' ? 1 : -1
    return 0
  })
})

const totalPages = computed(() => Math.max(1, Math.ceil(sorted.value.length / PAGE_SIZE)))
const pageRows = computed(() => sorted.value.slice((page.value - 1) * PAGE_SIZE, page.value * PAGE_SIZE))
</script>

<template>
  <div>
    <div class="search-bar">
      <VueInput
        type="search"
        placeholder="Search products…"
        :rounded="true"
        @input="handleSearch"
      />
    </div>

    <VueEmptyState
      v-if="pageRows.length === 0"
      title="No products found."
      subtitle="Try a different search term."
    />

    <div v-else style="overflow-x: auto">
      <table class="ag-table ag-table--hoverable ag-table--striped" style="width:100%">
        <caption class="visually-hidden">Product inventory</caption>
        <thead>
          <tr>
            <th @click="handleSort('name')" style="cursor:pointer;user-select:none;white-space:nowrap">
              Name
              <ChevronUp v-if="sortCol === 'name' && sortDir === 'asc'" :size="14" style="display:inline;vertical-align:middle;color:var(--ag-primary)" />
              <ChevronDown v-else-if="sortCol === 'name' && sortDir === 'desc'" :size="14" style="display:inline;vertical-align:middle;color:var(--ag-primary)" />
            </th>
            <th class="col-category" @click="handleSort('category')" style="cursor:pointer;user-select:none;white-space:nowrap">
              Category
              <ChevronUp v-if="sortCol === 'category' && sortDir === 'asc'" :size="14" style="display:inline;vertical-align:middle;color:var(--ag-primary)" />
              <ChevronDown v-else-if="sortCol === 'category' && sortDir === 'desc'" :size="14" style="display:inline;vertical-align:middle;color:var(--ag-primary)" />
            </th>
            <th @click="handleSort('price')" style="cursor:pointer;user-select:none;white-space:nowrap">
              Price
              <ChevronUp v-if="sortCol === 'price' && sortDir === 'asc'" :size="14" style="display:inline;vertical-align:middle;color:var(--ag-primary)" />
              <ChevronDown v-else-if="sortCol === 'price' && sortDir === 'desc'" :size="14" style="display:inline;vertical-align:middle;color:var(--ag-primary)" />
            </th>
            <th @click="handleSort('stock')" style="cursor:pointer;user-select:none;white-space:nowrap">
              Stock
              <ChevronUp v-if="sortCol === 'stock' && sortDir === 'asc'" :size="14" style="display:inline;vertical-align:middle;color:var(--ag-primary)" />
              <ChevronDown v-else-if="sortCol === 'stock' && sortDir === 'desc'" :size="14" style="display:inline;vertical-align:middle;color:var(--ag-primary)" />
            </th>
            <th @click="handleSort('status')" style="cursor:pointer;user-select:none;white-space:nowrap">
              Status
              <ChevronUp v-if="sortCol === 'status' && sortDir === 'asc'" :size="14" style="display:inline;vertical-align:middle;color:var(--ag-primary)" />
              <ChevronDown v-else-if="sortCol === 'status' && sortDir === 'desc'" :size="14" style="display:inline;vertical-align:middle;color:var(--ag-primary)" />
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="p in pageRows" :key="p.id">
            <td data-label="Name">{{ p.name }}</td>
            <td class="col-category" data-label="Category">{{ p.category }}</td>
            <td data-label="Price">${{ p.price.toFixed(2) }}</td>
            <td data-label="Stock">{{ p.stock }}</td>
            <td data-label="Status">
              <VueTag :variant="statusVariant(p.status)">{{ p.status }}</VueTag>
            </td>
            <td data-label="Actions">
              <VueIconButton
                :label="`Edit ${p.name}`"
                @icon-button-click="showToast(`Editing: ${p.name}`)"
              >
                <Pencil :size="16" />
              </VueIconButton>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div style="margin-top: var(--ag-space-4)">
      <VuePagination
        :current="page"
        :total-pages="totalPages"
        @page-change="(e) => page = e.page"
      />
    </div>

    <VueToast
      :open="toastOpen"
      type="success"
      position="top-end"
      :show-close-button="true"
      @toast-close="toastOpen = false"
    >
      {{ toastMsg }}
    </VueToast>
  </div>
</template>
