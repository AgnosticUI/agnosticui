import { useState } from 'react'
import { ReactHeader } from './components/ag/Header/react/ReactHeader'
import { ReactBreadcrumb } from './components/ag/Breadcrumb/react/ReactBreadcrumb'
import { ReactAvatar } from './components/ag/Avatar/react/ReactAvatar'
import { ReactSelectionButtonGroup } from './components/ag/SelectionButtonGroup/react/ReactSelectionButtonGroup'
import { ReactSelectionButton } from './components/ag/SelectionButton/react/ReactSelectionButton'
import { products } from './data/products'
import { SimplePanel } from './panels/SimplePanel'
import { GridJsPanel } from './panels/GridJsPanel'
import { TanstackPanel } from './panels/TanstackPanel'

type PanelView = 'simple' | 'gridjs' | 'tanstack'

export default function App() {
  const [activePanel, setActivePanel] = useState<PanelView>('simple')

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Inventory', current: true },
  ]

  function handlePanelChange(e: CustomEvent) {
    setActivePanel(e.detail.value as PanelView)
  }

  return (
    <>
      <ReactHeader contentJustify="between">
        <span slot="logo" style={{ fontWeight: 700, fontSize: '1.125rem', color: 'var(--ag-primary)' }}>
          AgnosticUI
        </span>
        <ReactAvatar text="AB" variant="info" />
      </ReactHeader>

      <main className="app-main">
        <ReactBreadcrumb items={breadcrumbItems} type="slash" />

        <div className="page-title-row">
          <h1 className="page-title">Inventory</h1>
          <div className="view-as-row">
            <span className="view-as-label">View as:</span>
            <ReactSelectionButtonGroup
              type="radio"
              name="panel-view"
              legendHidden
              legend="View as"
              value={activePanel}
              onSelectionChange={handlePanelChange}
            >
              <ReactSelectionButton value="simple" label="Simple">Simple</ReactSelectionButton>
              <ReactSelectionButton value="gridjs" label="Grid.js">Grid.js</ReactSelectionButton>
              <ReactSelectionButton value="tanstack" label="TanStack">TanStack</ReactSelectionButton>
            </ReactSelectionButtonGroup>
          </div>
        </div>

        {activePanel === 'simple' && <SimplePanel products={products} />}
        {activePanel === 'gridjs' && <GridJsPanel products={products} />}
        {activePanel === 'tanstack' && <TanstackPanel products={products} />}
      </main>
    </>
  )
}
