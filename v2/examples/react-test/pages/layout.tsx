import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ReactCard } from '../src/components/ag/Card/react/ReactCard';
import { ReactFlexRow } from '../src/components/ag/Flex/react/ReactFlexRow';
import { ReactHeader } from '../src/components/ag/Header/react/ReactHeader';
import { ReactSidebar } from '../src/components/ag/Sidebar/react/ReactSidebar';
import { ReactSidebarNav } from '../src/components/ag/SidebarNav/react/ReactSidebarNav';
import { ReactDivider } from '../src/components/ag/Divider/react/ReactDivider';
import { ReactAspectRatio } from '../src/components/ag/AspectRatio/react/ReactAspectRatio';
import { ReactFieldset } from '../src/components/ag/Fieldset/react/ReactFieldset';

function LayoutPage() {
  return (
    <main style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <h1>Layout</h1>

      <ReactCard>Card content</ReactCard>

      <ReactFlexRow>
        <span>Flex item 1</span>
        <span>Flex item 2</span>
      </ReactFlexRow>

      <ReactHeader>Header content</ReactHeader>

      <ReactSidebar open={false}>Sidebar content</ReactSidebar>

      <ReactSidebarNav>Nav content</ReactSidebarNav>

      <ReactDivider />

      <ReactAspectRatio width={16} height={9} maxWidth={320}>
        <img src="https://placehold.co/320x180" alt="placeholder" />
      </ReactAspectRatio>

      <ReactFieldset legend="Demo Fieldset" bordered>
        <span>Field content</span>
      </ReactFieldset>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LayoutPage />
  </StrictMode>
);
