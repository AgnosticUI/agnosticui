import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ReactBreadcrumb } from '../src/components/ag/Breadcrumb/react/ReactBreadcrumb';
import { ReactTabs, ReactTab, ReactTabPanel } from '../src/components/ag/Tabs/react/ReactTabs';
import { ReactPagination } from '../src/components/ag/Pagination/react/ReactPagination';
import {
  ReactMenuButton,
  ReactMenu,
  ReactMenuItem,
} from '../src/components/ag/Menu/react/ReactMenu';

function NavigationPage() {
  return (
    <main style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <h1>Navigation</h1>

      <ReactBreadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Section', href: '/section' },
          { label: 'Page' },
        ]}
      />

      <ReactTabs ariaLabel="Demo tabs">
        <ReactTab panel="tab1">Tab 1</ReactTab>
        <ReactTab panel="tab2">Tab 2</ReactTab>
        <ReactTabPanel>Panel 1</ReactTabPanel>
        <ReactTabPanel>Panel 2</ReactTabPanel>
      </ReactTabs>

      <ReactPagination current={1} totalPages={10} />

      <ReactMenuButton label="Options">
        <ReactMenu slot="menu">
          <ReactMenuItem value="edit">Edit</ReactMenuItem>
          <ReactMenuItem value="delete">Delete</ReactMenuItem>
        </ReactMenu>
      </ReactMenuButton>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavigationPage />
  </StrictMode>
);
