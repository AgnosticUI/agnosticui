import React, { useState, useEffect } from 'react';
import { ReactTabs, Tab, TabPanel } from 'agnosticui-core/tabs/react';

// Import web components to ensure they're registered
import 'agnosticui-core';

const ReactTabsDemo: React.FC = () => {
  const [isReady, setIsReady] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const waitForComponents = async () => {
      try {
        await customElements.whenDefined('ag-tabs');
        await customElements.whenDefined('ag-tab');
        await customElements.whenDefined('ag-tab-panel');
        setIsReady(true);
      } catch (error) {
        console.error('Error waiting for tab components:', error);
        setIsReady(true);
      }
    };

    waitForComponents();
  }, []);

  const handleTabChange = (detail: { activeTab: number; previousTab: number }) => {
    console.log('🔄 React tabs changed:', detail);
    setActiveTab(detail.activeTab);
  };

  if (!isReady) {
    return <div>Loading Tab components...</div>;
  }

  return (
    <div>
      <p><strong>React Demo:</strong> Using AgnosticUI React wrapper components</p>

      <ReactTabs>
        <Tab panel="react-panel-1">React Tab 1</Tab>
        <Tab panel="react-panel-2">React Tab 2</Tab>
        <Tab panel="react-panel-3">React Tab 3</Tab>

        <TabPanel id="react-panel-1">
          <div>
            <h4>React Integration</h4>
            <p>This demonstrates the AgnosticUI React wrapper components.</p>
            <ul>
              <li>ReactTabs wrapper component</li>
              <li>Tab and TabPanel components</li>
              <li>onTabChange event handling</li>
              <li>Manual activation mode</li>
            </ul>
            <p>Active tab: {activeTab + 1}</p>
          </div>
        </TabPanel>

        <TabPanel id="react-panel-2">
          <div>
            <h4>Component Architecture</h4>
            <p>React wrappers around AgnosticUI web components.</p>
            <ul>
              <li>Props-based configuration</li>
              <li>React event handlers</li>
              <li>TypeScript support</li>
              <li>Familiar React patterns</li>
            </ul>
          </div>
        </TabPanel>

        <TabPanel id="react-panel-3">
          <div>
            <h4>Benefits</h4>
            <p>Best of both worlds:</p>
            <ul>
              <li>Web standards compliance</li>
              <li>Framework ergonomics</li>
              <li>Universal accessibility</li>
              <li>Future-proof architecture</li>
            </ul>
          </div>
        </TabPanel>
      </ReactTabs>
    </div>
  );
};

export default ReactTabsDemo;