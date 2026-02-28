<script setup lang="ts">
import { ref, computed, onUnmounted } from 'vue'
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
import VueProgressRing from '../components/ag/ProgressRing/vue/VueProgressRing.vue'
import VueIntlFormatter from '../components/ag/IntlFormatter/vue/VueIntlFormatter.vue'
import type { TagVariant } from '../components/ag/Tag/core/_Tag'
import type { Product } from '../data/products'

const props = defineProps<{ products: Product[] }>()

const HIDEABLE_COLS = ['category', 'price', 'date', 'stock', 'status']

const COL_LABELS: Record<string, string> = {
  category: 'Category',
  price: 'Price',
  date: 'Added',
  stock: 'Stock',
  status: 'Status',
}

function statusVariant(status: Product['status']): TagVariant {
  if (status === 'active') return 'success'
  if (status === 'low-stock') return 'warning'
  return ''
}

function colClass(colId: string): string {
  if (colId === 'category') return ' col-category'
  if (colId === 'price') return ' col-price'
  if (colId === 'date') return ' col-added'
  if (colId === 'status') return ' col-status'
  if (colId === 'actions') return ' col-actions'
  return ''
}

// Table state
const localProducts = ref<Product[]>([...props.products])
const sorting = ref<SortingState>([])
const columnFilters = ref<ColumnFiltersState>([])
const globalFilter = ref('')
const columnVisibility = ref<VisibilityState>({})
const rowSelection = ref<RowSelectionState>({})

// Three-phase delete dialog state
type DialogPhase = 'idle' | 'confirm' | 'deleting' | 'success'
const dialogPhase = ref<DialogPhase>('idle')
const deleteProgress = ref(0)
let progressInterval: ReturnType<typeof setInterval> | null = null
let successTimer: ReturnType<typeof setTimeout> | null = null
let pendingDeleteIds: Set<number> = new Set()
let deletedCount = 0

// Toast state
const toastOpen = ref(false)
const toastMsg = ref('')
let toastTimer: ReturnType<typeof setTimeout> | null = null

onUnmounted(() => {
  if (progressInterval) clearInterval(progressInterval)
  if (successTimer) clearTimeout(successTimer)
  if (toastTimer) clearTimeout(toastTimer)
})

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
    header: () => null,
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
    cell: () => null, // rendered via ag-intl-formatter in template
  }),
  helper.accessor('date', {
    header: 'Added',
    cell: () => null, // rendered via ag-intl-formatter in template
  }),
  helper.accessor('stock', {
    header: 'Stock',
  }),
  helper.accessor('status', {
    header: 'Status',
    cell: () => null, // rendered in template
  }),
  helper.display({
    id: 'actions',
    header: 'Actions',
    enableHiding: false,
    cell: () => null, // rendered in template
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
const rows = computed(() => table.getRowModel().rows)
const headerGroups = computed(() => table.getHeaderGroups())
const isLocked = computed(() => dialogPhase.value === 'deleting' || dialogPhase.value === 'success')

function openDeleteDialog() {
  deleteProgress.value = 0
  dialogPhase.value = 'confirm'
}

function handleDeleteConfirm() {
  pendingDeleteIds = new Set(table.getSelectedRowModel().rows.map(r => r.original.id))
  deletedCount = pendingDeleteIds.size

  dialogPhase.value = 'deleting'
  deleteProgress.value = 0

  const increment = 100 / (1500 / 16)
  progressInterval = setInterval(() => {
    const next = Math.min(deleteProgress.value + increment, 100)
    deleteProgress.value = next

    if (next >= 100) {
      clearInterval(progressInterval!)
      progressInterval = null

      localProducts.value = localProducts.value.filter(p => !pendingDeleteIds.has(p.id))
      table.resetRowSelection()
      dialogPhase.value = 'success'

      successTimer = setTimeout(() => {
        dialogPhase.value = 'idle'
        showToast(`Deleted ${deletedCount} product(s)`)
      }, 1500)
    }
  }, 16)
}

function handleDialogClose() {
  if (isLocked.value) return
  dialogPhase.value = 'idle'
}

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

const dialogHeading = computed(() => {
  if (dialogPhase.value === 'confirm') return 'Confirm Delete'
  if (dialogPhase.value === 'deleting') return 'Deleting…'
  return 'Done'
})
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
                {{ COL_LABELS[colId] ?? colId }}
              </label>
            </VueMenuItem>
          </template>
        </VueMenu>
      </div>
    </div>

    <!-- Delete selected -->
    <div v-if="selectedCount > 0" class="delete-row">
      <VueButton variant="danger" shape="rounded" @click="openDeleteDialog">
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
        <caption class="visually-hidden">Product inventory</caption>
        <thead>
          <tr v-for="hg in headerGroups" :key="hg.id">
            <th
              v-for="header in hg.headers"
              :key="header.id"
              :class="`ts-th${colClass(header.column.id)}`"
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
              :class="`ts-td${colClass(cell.column.id)}`"
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
              <template v-else-if="cell.column.id === 'price'">
                <VueIntlFormatter
                  type="currency"
                  :value="row.original.price"
                  currency="USD"
                />
              </template>
              <template v-else-if="cell.column.id === 'date'">
                <VueIntlFormatter
                  type="date"
                  :date="row.original.date"
                  month="short"
                  day="2-digit"
                  year="numeric"
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

    <!-- Three-phase Delete Dialog -->
    <VueDialog
      :open="dialogPhase !== 'idle'"
      :heading="dialogHeading"
      :show-close-button="dialogPhase === 'confirm'"
      :no-close-on-backdrop="isLocked"
      :no-close-on-escape="isLocked"
      @dialog-close="handleDialogClose"
      @dialog-cancel="handleDialogClose"
    >
      <p v-if="dialogPhase === 'confirm'">
        Delete {{ selectedCount }} selected product(s)? This cannot be undone.
      </p>
      <div v-else-if="dialogPhase === 'deleting'" class="dialog-progress">
        <VueProgressRing
          :value="Math.round(deleteProgress)"
          size="large"
          variant="primary"
          label="Deleting…"
        />
      </div>
      <p v-else-if="dialogPhase === 'success'" class="delete-success-msg">
        {{ deletedCount }} product(s) deleted successfully.
      </p>

      <div v-if="dialogPhase === 'confirm'" slot="footer" style="display:flex;gap:var(--ag-space-2);justify-content:flex-end">
        <VueButton variant="secondary" shape="rounded" @click="dialogPhase = 'idle'">Cancel</VueButton>
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
