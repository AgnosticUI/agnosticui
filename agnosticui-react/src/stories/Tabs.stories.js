import React from 'react';
import Tabs, { TabPanel } from './Tabs.js';

export default {
  title: 'AG—React/Tabs',
  component: Tabs,
};

const panels = [
  <TabPanel title="Tab 1" key={1}>
    <h1>Tab 1 content</h1>
  </TabPanel>,
  <TabPanel title="Tab 2" key={2}>
    <h1>Tab 2 content</h1>
  </TabPanel>,
  <TabPanel title="Tab 3" key={3}>
    <h1>Tab 3 content</h1>
  </TabPanel>,
];

export const Default = () => <Tabs tabPanels={panels} />;
export const Large = () => <Tabs tabPanels={panels} size="large" />;
export const Jumbo = () => <Tabs tabPanels={panels} size="jumbo" />;
