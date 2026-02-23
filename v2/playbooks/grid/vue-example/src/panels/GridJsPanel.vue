<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { Grid, html } from 'gridjs'
import VueAlert from '../components/ag/Alert/vue/VueAlert.vue'
import type { Product } from '../data/products'

const props = defineProps<{ products: Product[] }>()

const containerRef = ref<HTMLElement | null>(null)
let grid: Grid | null = null

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

onMounted(() => {
  if (!containerRef.value) return
  grid = new Grid({
    columns,
    data: toData(props.products),
    sort: true,
    search: true,
    pagination: { limit: 10 },
  }).render(containerRef.value)
})

watch(() => props.products, (newProducts) => {
  if (grid) {
    grid.updateConfig({ data: toData(newProducts) }).forceRender()
  }
})

onBeforeUnmount(() => {
  if (grid) grid.destroy()
})
</script>

<template>
  <div>
    <div style="margin-bottom: var(--ag-space-4)">
      <VueAlert variant="info">
        Grid.js renders its own search, sort, and pagination controls. AgnosticUI
        provides the application shell — <code>--ag-*</code> tokens are bridged to
        Grid.js's stylesheet via targeted CSS class overrides.
      </VueAlert>
    </div>
    <div ref="containerRef"></div>
  </div>
</template>
