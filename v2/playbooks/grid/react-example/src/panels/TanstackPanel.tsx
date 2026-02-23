import { useState, useMemo, useRef } from 'react'
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  createColumnHelper,
  flexRender,
  type SortingState,
  type ColumnFiltersState,
  type VisibilityState,
  type RowSelectionState,
} from '@tanstack/react-table'
import { Pencil, ChevronUp, ChevronDown, ChevronsUpDown } from 'lucide-react'
import { ReactButton } from '../components/ag/Button/react/ReactButton'
import { ReactIconButton } from '../components/ag/IconButton/react/ReactIconButton'
import { ReactInput } from '../components/ag/Input/react/ReactInput'
import { ReactCheckbox } from '../components/ag/Checkbox/react/ReactCheckbox'
import { ReactTag } from '../components/ag/Tag/react/ReactTag'
import { ReactDialog } from '../components/ag/Dialog/react/ReactDialog'
import { ReactPagination } from '../components/ag/Pagination/react/ReactPagination'
import { ReactToast } from '../components/ag/Toast/react/ReactToast'
import { ReactEmptyState } from '../components/ag/EmptyState/react/ReactEmptyState'
import { ReactMenuButton, ReactMenu, ReactMenuItem } from '../components/ag/Menu/react/ReactMenu'
import type { TagVariant } from '../components/ag/Tag/core/_Tag'
import type { Product } from '../data/products'

const helper = createColumnHelper<Product>()

const HIDEABLE_COLS = ['category', 'price', 'stock', 'status']

function statusVariant(status: Product['status']): TagVariant {
  if (status === 'active') return 'success'
  if (status === 'low-stock') return 'warning'
  return ''
}

export function TanstackPanel({ products: initialProducts }: { products: Product[] }) {
  const [localProducts, setLocalProducts] = useState<Product[]>(initialProducts)
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [globalFilter, setGlobalFilter] = useState('')
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({})
  const [dialogOpen, setDialogOpen] = useState(false)
  const [toastOpen, setToastOpen] = useState(false)
  const [toastMsg, setToastMsg] = useState('')
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  function showToast(msg: string) {
    setToastMsg(msg)
    setToastOpen(true)
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current)
    toastTimerRef.current = setTimeout(() => setToastOpen(false), 3000)
  }

  const columns = useMemo(
    () => [
      helper.display({
        id: 'select',
        header: ({ table }) => (
          <ReactCheckbox
            labelText=""
            checked={table.getIsAllPageRowsSelected()}
            indeterminate={table.getIsSomePageRowsSelected()}
            onChange={() => table.toggleAllPageRowsSelected()}
          />
        ),
        cell: ({ row }) => (
          <ReactCheckbox
            labelText=""
            checked={row.getIsSelected()}
            disabled={!row.getCanSelect()}
            onChange={() => row.toggleSelected()}
          />
        ),
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
        cell: info => (
          <ReactTag variant={statusVariant(info.getValue())}>
            {info.getValue()}
          </ReactTag>
        ),
      }),
      helper.display({
        id: 'actions',
        header: 'Actions',
        enableHiding: false,
        cell: ({ row }) => (
          <ReactIconButton
            label={`Edit ${row.original.name}`}
            onIconButtonClick={() => showToast(`Editing: ${row.original.name}`)}
          >
            <Pencil size={16} />
          </ReactIconButton>
        ),
      }),
    ],
    [],
  )

  const table = useReactTable({
    data: localProducts,
    columns,
    enableMultiSort: true,
    enableRowSelection: true,
    state: {
      sorting,
      columnFilters,
      globalFilter,
      columnVisibility,
      rowSelection,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageSize: 10 } },
  })

  const selectedCount = Object.keys(rowSelection).length
  const totalPages = table.getPageCount()
  const pageIndex = table.getState().pagination.pageIndex
  const currentPageSize = table.getState().pagination.pageSize

  function handleDeleteConfirm() {
    const selectedIds = new Set(
      table.getSelectedRowModel().rows.map(r => r.original.id)
    )
    const count = selectedIds.size
    setLocalProducts(prev => prev.filter(p => !selectedIds.has(p.id)))
    table.resetRowSelection()
    setDialogOpen(false)
    showToast(`Deleted ${count} product(s)`)
  }

  const categoryFilter = (columnFilters.find(f => f.id === 'category')?.value as string) || ''
  const nameFilter = (columnFilters.find(f => f.id === 'name')?.value as string) || ''

  function setNameFilter(val: string) {
    setColumnFilters(prev => {
      const without = prev.filter(f => f.id !== 'name')
      return val ? [...without, { id: 'name', value: val }] : without
    })
    table.setPageIndex(0)
  }

  function setCategoryFilter(val: string) {
    setColumnFilters(prev => {
      const without = prev.filter(f => f.id !== 'category')
      return val ? [...without, { id: 'category', value: val }] : without
    })
    table.setPageIndex(0)
  }

  const rows = table.getRowModel().rows

  return (
    <div>
      {/* Toolbar */}
      <div className="panel-toolbar">
        <ReactInput
          type="search"
          placeholder="Search…"
          value={globalFilter}
          onInput={(e: Event) => {
            setGlobalFilter((e.target as HTMLInputElement).value)
            table.setPageIndex(0)
          }}
        />
        <ReactInput
          placeholder="Filter name…"
          value={nameFilter}
          onInput={(e: Event) => setNameFilter((e.target as HTMLInputElement).value)}
        />
        <select
          className="toolbar-select"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Food">Food</option>
          <option value="Books">Books</option>
          <option value="Tools">Tools</option>
        </select>

        <div className="panel-toolbar-right">
          <ReactMenuButton menuVariant="chevron" buttonVariant="secondary">
            Columns
            <ReactMenu slot="menu">
              {HIDEABLE_COLS.map(colId => {
                const col = table.getColumn(colId)
                if (!col) return null
                return (
                  <ReactMenuItem key={colId}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                      <input
                        type="checkbox"
                        checked={col.getIsVisible()}
                        onChange={col.getToggleVisibilityHandler()}
                      />
                      {colId.charAt(0).toUpperCase() + colId.slice(1)}
                    </label>
                  </ReactMenuItem>
                )
              })}
            </ReactMenu>
          </ReactMenuButton>
        </div>
      </div>

      {/* Delete selected */}
      {selectedCount > 0 && (
        <div className="delete-row">
          <ReactButton
            variant="danger"
            onClick={() => setDialogOpen(true)}
          >
            Delete Selected ({selectedCount})
          </ReactButton>
        </div>
      )}

      {/* Table */}
      {rows.length === 0 ? (
        <ReactEmptyState
          title="No products found."
          subtitle="Try adjusting your filters."
        />
      ) : (
        <div style={{ overflowX: 'auto' }}>
          <table className="ag-table" style={{ width: '100%' }}>
            <caption className="visually-hidden">Product inventory (TanStack)</caption>
            <thead>
              {table.getHeaderGroups().map(hg => (
                <tr key={hg.id}>
                  {hg.headers.map(header => {
                    const sorted = header.column.getIsSorted()
                    const sortIdx = header.column.getSortIndex()
                    const canSort = header.column.getCanSort()
                    return (
                      <th
                        key={header.id}
                        className={`ts-th${header.column.id === 'category' ? ' col-category' : ''}`}
                        onClick={canSort ? header.column.getToggleSortingHandler() : undefined}
                      >
                        {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                        {canSort && (
                          <span className="sort-icon">
                            {sorted === 'asc' ? <ChevronUp size={14} /> : sorted === 'desc' ? <ChevronDown size={14} /> : <ChevronsUpDown size={12} />}
                          </span>
                        )}
                        {sorted && sorting.length > 1 && (
                          <span className="sort-order">{sortIdx + 1}</span>
                        )}
                      </th>
                    )
                  })}
                </tr>
              ))}
            </thead>
            <tbody>
              {rows.map(row => (
                <tr key={row.id}>
                  {row.getVisibleCells().map(cell => (
                    <td
                      key={cell.id}
                      className={`ts-td${cell.column.id === 'category' ? ' col-category' : ''}`}
                      data-label={cell.column.id}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination row */}
      <div className="pagination-row">
        <select
          className="toolbar-select"
          value={String(currentPageSize)}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value))
            table.setPageIndex(0)
          }}
        >
          <option value="10">10 / page</option>
          <option value="25">25 / page</option>
          <option value="50">50 / page</option>
        </select>

        <ReactPagination
          current={pageIndex + 1}
          totalPages={Math.max(1, totalPages)}
          onPageChange={(e: CustomEvent) => table.setPageIndex(e.detail.page - 1)}
        />
      </div>

      {/* Delete Dialog */}
      <ReactDialog
        open={dialogOpen}
        heading="Confirm Delete"
        description={`Delete ${selectedCount} selected product(s)? This cannot be undone.`}
        showCloseButton
        onDialogClose={() => setDialogOpen(false)}
      >
        <div slot="footer" style={{ display: 'flex', gap: 'var(--ag-space-2)', justifyContent: 'flex-end' }}>
          <ReactButton variant="secondary" onClick={() => setDialogOpen(false)}>
            Cancel
          </ReactButton>
          <ReactButton variant="danger" onClick={handleDeleteConfirm}>
            Delete
          </ReactButton>
        </div>
      </ReactDialog>

      {/* Toast */}
      <ReactToast
        open={toastOpen}
        type="success"
        position="top-end"
        showCloseButton
        onToastClose={() => setToastOpen(false)}
      >
        {toastMsg}
      </ReactToast>
    </div>
  )
}
