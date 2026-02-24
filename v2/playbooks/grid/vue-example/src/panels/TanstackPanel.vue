<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  useVueTable,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  createColumnHelper,
  FlexRender,
  type SortingState,
  type ColumnFiltersState,
  type VisibilityState,
  type RowSelectionState,
} from '@tanstack/vue-table'
import { Pencil, ChevronUp, ChevronDown } from 'lucide-vue-next'
import VueButton from '../components/ag/Button/vue/VueButton.vue'
import VueIconButton from '../components/ag/IconButton/vue/VueIconButton.vue'
import VueInput from '../components/ag/Input/vue/VueInput.vue'
import VueCheckbox from '../components/ag/Checkbox/vue/VueCheckbox.vue'
import VueTag from '../components/ag/Tag/vue/VueTag.vue'
import VueDialog from '../components/ag/Dialog/vue/VueDialog.vue'
import VuePagination from '../components/ag/Pagination/vue/VuePagination.vue'
import VueToast from '../components/ag/Toast/vue/VueToast.vue'
import VueEmptyState from '../components/ag/EmptyState/vue/VueEmptyState.vue'
import { VueMenu, VueMenuItem } from '../components/ag/Menu/vue/index'
import VueSelect from '../components/ag/Select/vue/VueSelect.vue'
import type { TagVariant } from '../components/ag/Tag/core/_Tag'
import type { Product } from '../data/products'

const props = defineProps<{ products: Product[] }>()

const HIDEABLE_COLS = ['category', 'price', 'stock', 'status']

function statusVariant(status: Product['status']): TagVariant {
  if (status === 'active') return 'success'
  if (status === 'low-stock') return 'warning'
  return ''
}

const localProducts = ref<Product[]>([...props.products])
const sorting = ref<SortingState>([])
const columnFilters = ref<ColumnFiltersState>([])
const globalFilter = ref('')
const columnVisibility = ref<VisibilityState>({})
const rowSelection = ref<RowSelectionState>({})
const dialogOpen = ref(false)
const toastOpen = ref(false)
const toastMsg = ref('')
let toastTimer: ReturnType<typeof setTimeout> | null = null

function showToast(msg: string) {
  toastMsg.value = msg
  toastOpen.value = true
  if (toastTimer) clearTimeout(toastTimer)
  toastTimer = setTimeout(() => { toastOpen.value = false }, 3000)
}

const helper = createColumnHelper<Product>()

const columns = [
  helper.display({
    id: 'select',
    header: () => null, // handled via slot in template
    cell: () => null,
    enableSorting: false,
    enableHiding: false,
  }),
  helper.accessor('name', {
    header: 'Name',
    enableHiding: false,
  }),
  helper.accessor('category', {
    header: 'Category',
    filterFn: 'equals',
  }),
  helper.accessor('price', {
    header: 'Price',
    cell: info => `$${info.getValue().toFixed(2)}`,
  }),
  helper.accessor('stock', {
    header: 'Stock',
  }),
  helper.accessor('status', {
    header: 'Status',
    cell: () => null, // handled in template
  }),
  helper.display({
    id: 'actions',
    header: 'Actions',
    enableHiding: false,
    cell: () => null, // handled in template
  }),
]

const table = useVueTable({
  get data() { return localProducts.value },
  columns,
  enableMultiSort: true,
  enableRowSelection: true,
  state: {
    get sorting() { return sorting.value },
    get columnFilters() { return columnFilters.value },
    get globalFilter() { return globalFilter.value },
    get columnVisibility() { return columnVisibility.value },
    get rowSelection() { return rowSelection.value },
  },
  onSortingChange: (updater) => {
    sorting.value = typeof updater === 'function' ? updater(sorting.value) : updater
  },
  onColumnFiltersChange: (updater) => {
    columnFilters.value = typeof updater === 'function' ? updater(columnFilters.value) : updater
  },
  onGlobalFilterChange: (updater) => {
    globalFilter.value = typeof updater === 'function' ? updater(globalFilter.value) : updater
  },
  onColumnVisibilityChange: (updater) => {
    columnVisibility.value = typeof updater === 'function' ? updater(columnVisibility.value) : updater
  },
  onRowSelectionChange: (updater) => {
    rowSelection.value = typeof updater === 'function' ? updater(rowSelection.value) : updater
  },
  getCoreRowModel: getCoreRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  initialState: { pagination: { pageSize: 10 } },
})

const selectedCount = computed(() => Object.keys(rowSelection.value).length)
const totalPages = computed(() => table.getPageCount())
const pageIndex = computed(() => table.getState().pagination.pageIndex)
const pageSize = computed(() => table.getState().pagination.pageSize)
const rows = computed(() => table.getRowModel().rows)
const headerGroups = computed(() => table.getHeaderGroups())

const categoryFilter = computed(() =>
  (columnFilters.value.find(f => f.id === 'category')?.value as string) || ''
)
const nameFilter = computed(() =>
  (columnFilters.value.find(f => f.id === 'name')?.value as string) || ''
)

function setNameFilter(val: string) {
  const without = columnFilters.value.filter(f => f.id !== 'name')
  columnFilters.value = val ? [...without, { id: 'name', value: val }] : without
  table.setPageIndex(0)
}

function setCategoryFilter(val: string) {
  const without = columnFilters.value.filter(f => f.id !== 'category')
  columnFilters.value = val ? [...without, { id: 'category', value: val }] : without
  table.setPageIndex(0)
}

function handleDeleteConfirm() {
  const selectedIds = new Set(
    table.getSelectedRowModel().rows.map(r => r.original.id)
  )
  const count = selectedIds.size
  localProducts.value = localProducts.value.filter(p => !selectedIds.has(p.id))
  table.resetRowSelection()
  dialogOpen.value = false
  showToast(`Deleted ${count} product(s)`)
}
</script>

<template>
  <div>
    <!-- Toolbar -->
    <div class="panel-toolbar">
      <VueInput
        type="search"
        placeholder="Search…"
        :rounded="true"
        @input="(e: Event) => { globalFilter = (e.target as HTMLInputElement).value; table.setPageIndex(0) }"
      />
      <VueInput
        placeholder="Filter name…"
        :rounded="true"
        @input="(e: Event) => setNameFilter((e.target as HTMLInputElement).value)"
      />
      <VueSelect
        no-label
        @change="(detail) => setCategoryFilter(detail.value as string)"
      >
        <option value="">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Food">Food</option>
        <option value="Books">Books</option>
        <option value="Tools">Tools</option>
      </VueSelect>

      <div class="panel-toolbar-right">
        <VueMenu menu-variant="chevron" button-variant="secondary" shape="rounded">
          Columns
          <template #menu>
            <VueMenuItem
              v-for="colId in HIDEABLE_COLS"
              :key="colId"
            >
              <label style="display:flex;align-items:center;gap:0.5rem;cursor:pointer">
                <input
                  type="checkbox"
                  :checked="table.getColumn(colId)?.getIsVisible() ?? true"
                  @change="table.getColumn(colId)?.getToggleVisibilityHandler()?.($event)"
                />
                {{ colId.charAt(0).toUpperCase() + colId.slice(1) }}
              </label>
            </VueMenuItem>
          </template>
        </VueMenu>
      </div>
    </div>

    <!-- Delete selected -->
    <div v-if="selectedCount > 0" class="delete-row">
      <VueButton variant="danger" shape="rounded" @click="dialogOpen = true">
        Delete Selected ({{ selectedCount }})
      </VueButton>
    </div>

    <!-- Table -->
    <VueEmptyState
      v-if="rows.length === 0"
      title="No products found."
      subtitle="Try adjusting your filters."
    />

    <div v-else style="overflow-x: auto">
      <table class="ag-table" style="width:100%">
        <caption class="visually-hidden">Product inventory (TanStack)</caption>
        <thead>
          <tr v-for="hg in headerGroups" :key="hg.id">
            <th
              v-for="header in hg.headers"
              :key="header.id"
              :class="`ts-th${header.column.id === 'category' ? ' col-category' : ''}`"
              @click="header.column.getCanSort() ? header.column.getToggleSortingHandler()?.($event) : undefined"
            >
              <template v-if="header.id === 'select'">
                <VueCheckbox
                  label-text=""
                  :checked="table.getIsAllPageRowsSelected()"
                  :indeterminate="table.getIsSomePageRowsSelected()"
                  @change="table.toggleAllPageRowsSelected()"
                />
              </template>
              <template v-else>
                <FlexRender
                  v-if="!header.isPlaceholder"
                  :render="header.column.columnDef.header"
                  :props="header.getContext()"
                />
                <span v-if="header.column.getCanSort() && header.column.getIsSorted()" class="sort-icon">
                  <ChevronUp v-if="header.column.getIsSorted() === 'asc'" :size="14" />
                  <ChevronDown v-else :size="14" />
                </span>
                <span
                  v-if="header.column.getIsSorted() && sorting.length > 1"
                  class="sort-order"
                >{{ header.column.getSortIndex() + 1 }}</span>
              </template>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in rows" :key="row.id">
            <td
              v-for="cell in row.getVisibleCells()"
              :key="cell.id"
              :class="`ts-td${cell.column.id === 'category' ? ' col-category' : ''}`"
              :data-label="cell.column.id"
            >
              <template v-if="cell.column.id === 'select'">
                <VueCheckbox
                  label-text=""
                  :checked="row.getIsSelected()"
                  :disabled="!row.getCanSelect()"
                  @change="row.toggleSelected()"
                />
              </template>
              <template v-else-if="cell.column.id === 'status'">
                <VueTag :variant="statusVariant(row.original.status)">
                  {{ row.original.status }}
                </VueTag>
              </template>
              <template v-else-if="cell.column.id === 'actions'">
                <VueIconButton
                  :label="`Edit ${row.original.name}`"
                  @icon-button-click="showToast(`Editing: ${row.original.name}`)"
                >
                  <Pencil :size="16" />
                </VueIconButton>
              </template>
              <template v-else>
                <FlexRender
                  :render="cell.column.columnDef.cell"
                  :props="cell.getContext()"
                />
              </template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination row -->
    <div class="pagination-row">
      <VueSelect
        no-label
        @change="(detail) => { table.setPageSize(Number(detail.value)); table.setPageIndex(0) }"
      >
        <option value="10">10 / page</option>
        <option value="25">25 / page</option>
        <option value="50">50 / page</option>
      </VueSelect>

      <VuePagination
        :current="pageIndex + 1"
        :total-pages="Math.max(1, totalPages)"
        @page-change="(e) => table.setPageIndex(e.page - 1)"
      />
    </div>

    <!-- Delete Dialog -->
    <VueDialog
      :open="dialogOpen"
      heading="Confirm Delete"
      :description="`Delete ${selectedCount} selected product(s)? This cannot be undone.`"
      :show-close-button="true"
      @dialog-close="dialogOpen = false"
    >
      <div slot="footer" style="display:flex;gap:var(--ag-space-2);justify-content:flex-end">
        <VueButton variant="secondary" shape="rounded" @click="dialogOpen = false">Cancel</VueButton>
        <VueButton variant="danger" shape="rounded" @click="handleDeleteConfirm">Delete</VueButton>
      </div>
    </VueDialog>

    <!-- Toast -->
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
