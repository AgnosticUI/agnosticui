<script setup lang="ts">
import { computed } from 'vue'
import { Grid as GridJs, html } from 'gridjs'
import { Grid } from 'gridjs-vue'
import VueAlert from '../components/ag/Alert/vue/VueAlert.vue'
import type { Product } from '../data/products'

const props = defineProps<{ products: Product[] }>()

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

const data = computed(() =>
  props.products.map(p => [p.name, p.category, p.price, p.stock, p.status])
)
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

    <Grid
      :columns="columns"
      :data="data"
      :sort="true"
      :search="true"
      :pagination="{ limit: 10 }"
    />
  </div>
</template>
