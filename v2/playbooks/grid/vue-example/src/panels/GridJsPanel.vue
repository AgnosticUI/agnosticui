<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'
import { Grid, html } from 'gridjs'
import VueAlert from '../components/ag/Alert/vue/VueAlert.vue'
import VuePagination from '../components/ag/Pagination/vue/VuePagination.vue'
import type { Product } from '../data/products'

const props = defineProps<{ products: Product[] }>()

const containerRef = ref<HTMLElement | null>(null)
let grid: Grid | null = null
let observer: MutationObserver | null = null
let rafId = 0

const PAGE_SIZE = 10
const currentPage = ref(1)
const totalRows = ref(props.products.length)
const totalPages = computed(() => Math.max(1, Math.ceil(totalRows.value / PAGE_SIZE)))

const columns = [
  { name: 'Name' },
  { name: 'Category' },
  {
    name: 'Price',
    formatter: (cell: unknown) => `$${Number(cell).toFixed(2)}`,
  },
  { name: 'Stock' },
  {
    name: 'Status',
    formatter: (cell: unknown) =>
      html(`<span class="status-cell status-cell--${cell}">${cell}</span>`),
  },
]

function toData(products: Product[]) {
  return products.map(p => [p.name, p.category, p.price, p.stock, p.status])
}

// Read current page + total rows from Grid.js's hidden pagination DOM
function syncFromDom(container: HTMLElement) {
  const bolds = container.querySelectorAll('.gridjs-summary b')
  if (bolds.length >= 3) {
    const n = parseInt(bolds[2].textContent || '0', 10)
    if (!isNaN(n) && n >= 0) totalRows.value = n
  }
  const activeBtn = container.querySelector<HTMLElement>(
    '.gridjs-pages button[aria-selected="true"], .gridjs-pages button.gridjs-currentPage'
  )
  if (activeBtn) {
    const p = parseInt(activeBtn.textContent?.trim() || '1', 10)
    if (!isNaN(p) && p > 0) currentPage.value = p
  }
}

onMounted(() => {
  if (!containerRef.value) return
  const container = containerRef.value

  grid = new Grid({
    columns,
    data: toData(props.products),
    sort: true,
    search: true,
    pagination: { limit: PAGE_SIZE },
  }).render(container)

  observer = new MutationObserver(() => {
    cancelAnimationFrame(rafId)
    rafId = requestAnimationFrame(() => syncFromDom(container))
  })
  observer.observe(container, { childList: true, subtree: true })
})

onBeforeUnmount(() => {
  cancelAnimationFrame(rafId)
  observer?.disconnect()
  grid?.destroy()
})

watch(() => props.products, (newProducts) => {
  if (grid) {
    grid.updateConfig({ data: toData(newProducts) }).forceRender()
  }
})

function handlePageChange(e: { page: number }) {
  grid?.updateConfig({
    pagination: { limit: PAGE_SIZE, page: e.page - 1 },
  }).forceRender()
  // currentPage syncs via MutationObserver after Grid.js re-renders
}
</script>

<template>
  <div>
    <div style="margin-bottom: var(--ag-space-4)">
      <VueAlert variant="info">
        Grid.js renders its own search and sort controls. AgnosticUI provides the
        application shell — <code>--ag-*</code> tokens are bridged to Grid.js's
        stylesheet via targeted CSS class overrides. Pagination is handled by
        AgnosticUI's <code>ag-pagination</code>.
      </VueAlert>
    </div>

    <div ref="containerRef"></div>

    <div style="margin-top: var(--ag-space-4)">
      <VuePagination
        :current="currentPage"
        :total-pages="totalPages"
        @page-change="handlePageChange"
      />
    </div>
  </div>
</template>
