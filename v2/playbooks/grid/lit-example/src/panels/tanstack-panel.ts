import { LitElement, html, css, nothing } from 'lit'
import { property, state } from 'lit/decorators.js'
import {
  createTable,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  createColumnHelper,
  type TableState,
  type ColumnDef,
  type SortingState,
  type ColumnFiltersState,
  type VisibilityState,
  type RowSelectionState,
  type ColumnFilter,
} from '@tanstack/table-core'
import '../components/ag/Button/core/Button'
import '../components/ag/IconButton/core/IconButton'
import '../components/ag/Input/core/Input'
import '../components/ag/Checkbox/core/Checkbox'
import '../components/ag/Tag/core/Tag'
import '../components/ag/Dialog/core/Dialog'
import '../components/ag/Pagination/core/Pagination'
import '../components/ag/Toast/core/Toast'
import '../components/ag/EmptyState/core/EmptyState'
import '../components/ag/Menu/core/Menu'
import '../components/ag/Select/core/Select'
import type { Product } from '../data/products'

const pencilIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
  stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
</svg>`

const chevronUp = html`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="18 15 12 9 6 15"/></svg>`
const chevronDown = html`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>`
const chevronsUpDown = html`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="17 11 12 6 7 11"/><polyline points="7 13 12 18 17 13"/></svg>`

const HIDEABLE_COLS = ['category', 'price', 'stock', 'status']

export class TanstackPanel extends LitElement {
  // Light DOM so global app.css classes (.ts-th, .ts-td, .panel-toolbar, etc.) apply
  override createRenderRoot() { return this }

  @property({ type: Array }) products: Product[] = []

  @state() private localProducts: Product[] = []
  @state() private tableState: TableState = {} as TableState
  @state() private dialogOpen = false
  @state() private toastOpen = false
  @state() private toastMsg = ''

  private table: ReturnType<typeof createTable<Product>> | null = null
  private toastTimer: ReturnType<typeof setTimeout> | null = null

  private statusVariant(status: Product['status']) {
    if (status === 'active') return 'success'
    if (status === 'low-stock') return 'warning'
    return ''
  }

  private showToast(msg: string) {
    this.toastMsg = msg
    this.toastOpen = true
    if (this.toastTimer) clearTimeout(this.toastTimer)
    this.toastTimer = setTimeout(() => { this.toastOpen = false }, 3000)
  }

  override connectedCallback() {
    super.connectedCallback()
    this.localProducts = [...this.products]

    const helper = createColumnHelper<Product>()
    const columns: ColumnDef<Product, unknown>[] = [
      {
        id: 'select',
        header: undefined,
        cell: undefined,
        enableSorting: false,
        enableHiding: false,
      },
      helper.accessor('name', { header: 'Name', enableHiding: false }),
      helper.accessor('category', { header: 'Category', filterFn: 'equals' }),
      helper.accessor('price', { header: 'Price', cell: info => `$${(info.getValue() as number).toFixed(2)}` }),
      helper.accessor('stock', { header: 'Stock' }),
      helper.accessor('status', { header: 'Status' }),
      { id: 'actions', header: 'Actions', enableHiding: false, cell: undefined },
    ]

    const initState: Partial<TableState> = {
      pagination: { pageIndex: 0, pageSize: 10 },
      sorting: [] as SortingState,
      columnFilters: [] as ColumnFiltersState,
      globalFilter: '',
      columnVisibility: {} as VisibilityState,
      rowSelection: {} as RowSelectionState,
    }

    this.table = createTable<Product>({
      data: this.localProducts,
      columns,
      enableMultiSort: true,
      enableRowSelection: true,
      getCoreRowModel: getCoreRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      state: initState as TableState,
      onStateChange: (updater) => {
        const newState = typeof updater === 'function'
          ? updater(this.tableState)
          : updater
        this.tableState = newState
        this.table!.setOptions(prev => ({ ...prev, state: this.tableState }))
        this.requestUpdate()
      },
      renderFallbackValue: '',
    })

    this.tableState = { ...this.table.initialState, ...initState } as TableState
    this.table.setOptions(prev => ({ ...prev, state: this.tableState }))
  }

  private get rows() {
    return this.table?.getRowModel().rows ?? []
  }

  private get headerGroups() {
    return this.table?.getHeaderGroups() ?? []
  }

  private get selectedCount() {
    return Object.keys(this.tableState.rowSelection ?? {}).length
  }

  private get sorting(): SortingState {
    return (this.tableState.sorting as SortingState) ?? []
  }

  private get globalFilter(): string {
    return (this.tableState.globalFilter as string) ?? ''
  }

  private get columnFilters(): ColumnFiltersState {
    return (this.tableState.columnFilters as ColumnFiltersState) ?? []
  }

  private get categoryFilter(): string {
    return (this.columnFilters.find(f => f.id === 'category')?.value as string) ?? ''
  }

  private get nameFilter(): string {
    return (this.columnFilters.find(f => f.id === 'name')?.value as string) ?? ''
  }

  private setGlobalFilter(val: string) {
    this.table?.setGlobalFilter(val)
    this.table?.setPageIndex(0)
  }

  private setNameFilter(val: string) {
    const without = this.columnFilters.filter(f => f.id !== 'name')
    const next: ColumnFiltersState = val ? [...without, { id: 'name', value: val }] : without
    this.table?.setColumnFilters(next)
    this.table?.setPageIndex(0)
  }

  private setCategoryFilter(val: string) {
    const without = this.columnFilters.filter(f => f.id !== 'category')
    const next: ColumnFiltersState = val ? [...without, { id: 'category', value: val }] : without
    this.table?.setColumnFilters(next)
    this.table?.setPageIndex(0)
  }

  private handleDeleteConfirm() {
    const selectedIds = new Set(
      this.table!.getSelectedRowModel().rows.map(r => r.original.id)
    )
    const count = selectedIds.size
    this.localProducts = this.localProducts.filter(p => !selectedIds.has(p.id))
    this.table!.setOptions(prev => ({ ...prev, data: this.localProducts }))
    this.table!.resetRowSelection()
    this.dialogOpen = false
    this.showToast(`Deleted ${count} product(s)`)
  }

  override render() {
    if (!this.table) return nothing

    const rows = this.rows
    const headerGroups = this.headerGroups
    const pageIndex = (this.tableState.pagination?.pageIndex ?? 0)
    const pageSize = (this.tableState.pagination?.pageSize ?? 10)
    const totalPages = this.table.getPageCount()

    return html`
      <div>
        <!-- Toolbar -->
        <div class="panel-toolbar">
          <ag-input
            type="search"
            placeholder="Search…"
            rounded
            .value="${this.globalFilter}"
            @input="${(e: Event) => this.setGlobalFilter((e.target as HTMLInputElement).value)}"
          ></ag-input>
          <ag-input
            placeholder="Filter name…"
            rounded
            .value="${this.nameFilter}"
            @input="${(e: Event) => this.setNameFilter((e.target as HTMLInputElement).value)}"
          ></ag-input>
          <ag-select
            no-label
            @change="${(e: CustomEvent) => this.setCategoryFilter(e.detail.value as string)}"
          >
            <option value="">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Food">Food</option>
            <option value="Books">Books</option>
            <option value="Tools">Tools</option>
          </ag-select>

          <div class="panel-toolbar-right">
            <ag-menu-button menu-variant="chevron" button-variant="secondary">
              Columns
              <ag-menu slot="menu">
                ${HIDEABLE_COLS.map(colId => {
                  const col = this.table!.getColumn(colId)
                  if (!col) return nothing
                  return html`
                    <ag-menu-item>
                      <label style="display:flex;align-items:center;gap:0.5rem;cursor:pointer">
                        <input
                          type="checkbox"
                          .checked="${col.getIsVisible()}"
                          @change="${() => col.toggleVisibility()}"
                        />
                        ${colId.charAt(0).toUpperCase() + colId.slice(1)}
                      </label>
                    </ag-menu-item>
                  `
                })}
              </ag-menu>
            </ag-menu-button>
          </div>
        </div>

        <!-- Delete selected -->
        ${this.selectedCount > 0 ? html`
          <div class="delete-row">
            <ag-button variant="danger" shape="rounded" @click="${() => { this.dialogOpen = true }}">
              Delete Selected (${this.selectedCount})
            </ag-button>
          </div>
        ` : nothing}

        <!-- Table -->
        ${rows.length === 0 ? html`
          <ag-empty-state
            title="No products found."
            subtitle="Try adjusting your filters."
          ></ag-empty-state>
        ` : html`
          <div style="overflow-x: auto">
            <table class="ag-table" style="width:100%">
              <caption class="visually-hidden">Product inventory (TanStack)</caption>
              <thead>
                ${headerGroups.map(hg => html`
                  <tr>
                    ${hg.headers.map(header => {
                      const sorted = header.column.getIsSorted()
                      const sortIdx = header.column.getSortIndex()
                      const canSort = header.column.getCanSort()
                      return html`
                        <th
                          class="ts-th${header.column.id === 'category' ? ' col-category' : ''}"
                          @click="${canSort ? () => header.column.toggleSorting(undefined, true) : nothing}"
                        >
                          ${header.id === 'select' ? html`
                            <ag-checkbox
                              .checked="${this.table!.getIsAllPageRowsSelected()}"
                              .indeterminate="${this.table!.getIsSomePageRowsSelected()}"
                              label-text=""
                              @change="${() => this.table!.toggleAllPageRowsSelected()}"
                            ></ag-checkbox>
                          ` : html`
                            ${header.column.columnDef.header as string || ''}
                            ${canSort ? html`<span class="sort-icon">
                              ${sorted === 'asc' ? chevronUp : sorted === 'desc' ? chevronDown : chevronsUpDown}
                            </span>` : nothing}
                            ${sorted && this.sorting.length > 1 ? html`
                              <span class="sort-order">${sortIdx + 1}</span>
                            ` : nothing}
                          `}
                        </th>
                      `
                    })}
                  </tr>
                `)}
              </thead>
              <tbody>
                ${rows.map(row => html`
                  <tr>
                    ${row.getVisibleCells().map(cell => html`
                      <td
                        class="ts-td${cell.column.id === 'category' ? ' col-category' : ''}"
                        data-label="${cell.column.id}"
                      >
                        ${cell.column.id === 'select' ? html`
                          <ag-checkbox
                            .checked="${row.getIsSelected()}"
                            .disabled="${!row.getCanSelect()}"
                            label-text=""
                            @change="${() => row.toggleSelected()}"
                          ></ag-checkbox>
                        ` : cell.column.id === 'status' ? html`
                          <ag-tag variant="${this.statusVariant(row.original.status)}">${row.original.status}</ag-tag>
                        ` : cell.column.id === 'actions' ? html`
                          <ag-icon-button
                            label="Edit ${row.original.name}"
                            @icon-button-click="${() => this.showToast(`Editing: ${row.original.name}`)}"
                          >${pencilIcon}</ag-icon-button>
                        ` : html`${cell.renderValue() ?? ''}`}
                      </td>
                    `)}
                  </tr>
                `)}
              </tbody>
            </table>
          </div>
        `}

        <!-- Pagination row -->
        <div class="pagination-row">
          <ag-select
            no-label
            @change="${(e: CustomEvent) => { this.table!.setPageSize(Number(e.detail.value)); this.table!.setPageIndex(0) }}"
          >
            <option value="10">10 / page</option>
            <option value="25">25 / page</option>
            <option value="50">50 / page</option>
          </ag-select>

          <ag-pagination
            .current="${pageIndex + 1}"
            .totalPages="${Math.max(1, totalPages)}"
            @page-change="${(e: CustomEvent) => this.table!.setPageIndex(e.detail.page - 1)}"
          ></ag-pagination>
        </div>

        <!-- Delete Dialog -->
        <ag-dialog
          .open="${this.dialogOpen}"
          heading="Confirm Delete"
          description="Delete ${this.selectedCount} selected product(s)? This cannot be undone."
          .showCloseButton="${true}"
          @dialog-close="${() => { this.dialogOpen = false }}"
        >
          <div slot="footer" style="display:flex;gap:var(--ag-space-2);justify-content:flex-end">
            <ag-button variant="secondary" shape="rounded" @click="${() => { this.dialogOpen = false }}">Cancel</ag-button>
            <ag-button variant="danger" shape="rounded" @click="${this.handleDeleteConfirm}">Delete</ag-button>
          </div>
        </ag-dialog>

        <!-- Toast -->
        <ag-toast
          .open="${this.toastOpen}"
          type="success"
          position="top-end"
          .showCloseButton="${true}"
          @toast-close="${() => { this.toastOpen = false }}"
        >${this.toastMsg}</ag-toast>
      </div>
    `
  }
}

if (!customElements.get('tanstack-panel')) {
  customElements.define('tanstack-panel', TanstackPanel)
}
