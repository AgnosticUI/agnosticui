import React, { useState, useEffect } from 'react';
import { ReactTabs, Tab, TabPanel } from 'agnosticui-core/react';
import { BarChart, TrendingUp, Lock } from 'lucide-react';

// Import web components to ensure they're registered
import 'agnosticui-core';

const ReactTabsDemo: React.FC = () => {
  const [isReady, setIsReady] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const waitForComponents = async () => {
      try {
        await Promise.all([
          customElements.whenDefined('ag-tabs'),
          customElements.whenDefined('ag-tab'),
          customElements.whenDefined('ag-tab-panel')
        ]);
        setIsReady(true);
      } catch (error) {
        console.error('Error waiting for ag-tabs components:', error);
        setIsReady(true);
      }
    };

    waitForComponents();
  }, []);

  const handleTabChange = (detail: { activeTab: number; previousTab: number }) => {
    setActiveTab(detail.activeTab);
    console.log('React: Tab changed from', detail.previousTab, 'to', detail.activeTab);
  };

  if (!isReady) {
    return <div>Loading Tabs components...</div>;
  }

  return (
    <div style={{ padding: '1.5rem', background: 'var(--c-card-bg)', border: '1px solid var(--c-border)', borderRadius: '0.5rem' }}>
      <h3>React Tabs Component</h3>
      <p style={{ color: 'var(--c-text-light)', marginBottom: '1rem' }}>
        Demonstrating React wrapper with state management and event handling.
        Current active tab: <strong>{activeTab}</strong>
      </p>

      <ReactTabs
        activation="manual"
        activeTab={activeTab}
        orientation="horizontal"
        onTabChange={handleTabChange}
      >
        <Tab panel="react-panel1">
          <BarChart size={16} style={{ marginRight: '0.5rem' }} />
          Data
        </Tab>
        <Tab panel="react-panel2">
          <TrendingUp size={16} style={{ marginRight: '0.5rem' }} />
          Charts
        </Tab>
        <Tab panel="react-panel3" disabled>
          <Lock size={16} style={{ marginRight: '0.5rem' }} />
          Premium
        </Tab>

        <TabPanel id="react-panel1">
          <h4>Data Management</h4>
          <p>This tab content is rendered through React components with proper TypeScript support.</p>
          <p>The React wrapper provides type-safe props and event handling.</p>
        </TabPanel>

        <TabPanel id="react-panel2">
          <h4>Charts & Analytics</h4>
          <p>State management works seamlessly between React and web components.</p>
          <p>Events are properly typed and bubble up to React event handlers.</p>
        </TabPanel>

        <TabPanel id="react-panel3">
          <h4>Premium Features</h4>
          <p>This tab is disabled and cannot be activated.</p>
          <p>Disabled state is respected in both keyboard and mouse interactions.</p>
        </TabPanel>
      </ReactTabs>

      <div style={{ marginTop: '1rem', padding: '1rem', background: 'var(--c-bg-secondary)', borderRadius: '0.375rem' }}>
        <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem' }}>React Features:</h4>
        <ul style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '0.85rem', color: 'var(--c-text-light)' }}>
          <li>TypeScript support with full prop and event typing</li>
          <li>React-style event handlers (onTabChange)</li>
          <li>Controlled component pattern with activeTab state</li>
          <li>Helper components (Tab, TabPanel) for cleaner JSX</li>
        </ul>
      </div>
    </div>
  );
};

export default ReactTabsDemo;