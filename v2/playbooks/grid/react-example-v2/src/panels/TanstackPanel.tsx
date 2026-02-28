import { useState, useMemo, useRef, useEffect } from 'react'
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
import { Pencil, ChevronUp, ChevronDown } from 'lucide-react'
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
import { ReactSelect } from '../components/ag/Select/react/ReactSelect'
import { ReactProgressRing } from '../components/ag/ProgressRing/react/ReactProgressRing'
import { ReactIntlFormatter } from '../components/ag/IntlFormatter/react/ReactIntlFormatter'
import type { TagVariant } from '../components/ag/Tag/core/_Tag'
import type { Product } from '../data/products'

const helper = createColumnHelper<Product>()

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

type DialogPhase = 'idle' | 'confirm' | 'deleting' | 'success'

export function TanstackPanel({ products: initialProducts }: { products: Product[] }) {
  const [localProducts, setLocalProducts] = useState<Product[]>(initialProducts)
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [globalFilter, setGlobalFilter] = useState('')
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({})

  // Three-phase delete dialog state
  const [dialogPhase, setDialogPhase] = useState<DialogPhase>('idle')
  const [deleteProgress, setDeleteProgress] = useState(0)
  const progressIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const successTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pendingDeleteIdsRef = useRef<Set<number>>(new Set())
  const deletedCountRef = useRef(0)

  // Toast state
  const [toastOpen, setToastOpen] = useState(false)
  const [toastMsg, setToastMsg] = useState('')
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current)
      if (successTimerRef.current) clearTimeout(successTimerRef.current)
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current)
    }
  }, [])

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
        cell: info => (
          <ReactIntlFormatter
            type="currency"
            value={info.getValue()}
            currency="USD"
          />
        ),
      }),
      helper.accessor('date', {
        header: 'Added',
        cell: info => (
          <ReactIntlFormatter
            type="date"
            date={info.getValue()}
            month="short"
            day="2-digit"
            year="numeric"
          />
        ),
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

  function openDeleteDialog() {
    setDeleteProgress(0)
    setDialogPhase('confirm')
  }

  function handleDeleteConfirm() {
    // Capture ids and count before mutating state
    pendingDeleteIdsRef.current = new Set(
      table.getSelectedRowModel().rows.map(r => r.original.id)
    )
    deletedCountRef.current = pendingDeleteIdsRef.current.size

    setDialogPhase('deleting')
    setDeleteProgress(0)

    const increment = 100 / (1500 / 16)
    progressIntervalRef.current = setInterval(() => {
      setDeleteProgress(prev => {
        const next = Math.min(prev + increment, 100)
        if (next >= 100) {
          clearInterval(progressIntervalRef.current!)
          progressIntervalRef.current = null

          // Perform deletion
          setLocalProducts(p => p.filter(prod => !pendingDeleteIdsRef.current.has(prod.id)))
          table.resetRowSelection()
          setDialogPhase('success')

          successTimerRef.current = setTimeout(() => {
            setDialogPhase('idle')
            showToast(`Deleted ${deletedCountRef.current} product(s)`)
          }, 1500)
        }
        return next
      })
    }, 16)
  }

  function handleDialogClose() {
    if (dialogPhase === 'deleting' || dialogPhase === 'success') return
    setDialogPhase('idle')
  }

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
  const isLocked = dialogPhase === 'deleting' || dialogPhase === 'success'

  return (
    <div>
      {/* Toolbar */}
      <div className="panel-toolbar">
        <ReactInput
          type="search"
          placeholder="Search…"
          rounded
          onInput={(e: Event) => {
            setGlobalFilter((e.target as HTMLInputElement).value)
            table.setPageIndex(0)
          }}
        />
        <ReactInput
          placeholder="Filter name…"
          rounded
          value={nameFilter}
          onInput={(e: Event) => setNameFilter((e.target as HTMLInputElement).value)}
        />
        <ReactSelect
          noLabel
          onChange={(e) => setCategoryFilter(e.detail.value as string)}
        >
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Food">Food</option>
          <option value="Books">Books</option>
          <option value="Tools">Tools</option>
        </ReactSelect>

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
                      {COL_LABELS[colId] ?? colId}
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
            shape="rounded"
            onClick={openDeleteDialog}
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
            <caption className="visually-hidden">Product inventory</caption>
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
                        className={`ts-th${colClass(header.column.id)}`}
                        onClick={canSort ? header.column.getToggleSortingHandler() : undefined}
                      >
                        {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                        {canSort && (
                          <span className="sort-icon">
                            {sorted === 'asc' ? <ChevronUp size={14} /> : sorted === 'desc' ? <ChevronDown size={14} /> : null}
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
                      className={`ts-td${colClass(cell.column.id)}`}
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
        <ReactSelect
          noLabel
          onChange={(e) => {
            table.setPageSize(Number(e.detail.value))
            table.setPageIndex(0)
          }}
        >
          <option value="10">10 / page</option>
          <option value="25">25 / page</option>
          <option value="50">50 / page</option>
        </ReactSelect>

        <ReactPagination
          current={pageIndex + 1}
          totalPages={Math.max(1, totalPages)}
          onPageChange={(e: CustomEvent) => table.setPageIndex(e.detail.page - 1)}
        />
      </div>

      {/* Three-phase Delete Dialog */}
      <ReactDialog
        open={dialogPhase !== 'idle'}
        heading={
          dialogPhase === 'confirm' ? 'Confirm Delete' :
          dialogPhase === 'deleting' ? 'Deleting…' :
          'Done'
        }
        showCloseButton={dialogPhase === 'confirm'}
        noCloseOnBackdrop={isLocked}
        noCloseOnEscape={isLocked}
        onDialogClose={handleDialogClose}
        onDialogCancel={handleDialogClose}
      >
        {dialogPhase === 'confirm' && (
          <p>Delete {selectedCount} selected product(s)? This cannot be undone.</p>
        )}
        {dialogPhase === 'deleting' && (
          <div className="dialog-progress">
            <ReactProgressRing
              value={Math.round(deleteProgress)}
              size="large"
              variant="primary"
              label="Deleting…"
            />
          </div>
        )}
        {dialogPhase === 'success' && (
          <p className="delete-success-msg">
            {deletedCountRef.current} product(s) deleted successfully.
          </p>
        )}
        {dialogPhase === 'confirm' && (
          <div slot="footer" style={{ display: 'flex', gap: 'var(--ag-space-2)', justifyContent: 'flex-end' }}>
            <ReactButton variant="secondary" shape="rounded" onClick={() => setDialogPhase('idle')}>
              Cancel
            </ReactButton>
            <ReactButton variant="danger" shape="rounded" onClick={handleDeleteConfirm}>
              Delete
            </ReactButton>
          </div>
        )}
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
