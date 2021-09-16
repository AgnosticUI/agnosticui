import React from 'react';
import Tabs, { TabButton, TabPanel } from './Tabs.js';
import TabButtonCustom from './TabButtonCustomExample.js';

export default {
  title: 'AG—React/Tabs',
  component: Tabs,
};

const buttons = [
  <TabButton key={1}>Tab 1</TabButton>,
  <TabButton key={2}>Tab 2</TabButton>,
  <TabButton key={3}>Tab 3</TabButton>,
];

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

export const Default = () => <Tabs tabButtons={buttons} tabPanels={panels} />;
export const Large = () => <Tabs size="large" tabButtons={buttons} tabPanels={panels} />;
export const Jumbo = () => <Tabs size="jumbo" tabButtons={buttons} tabPanels={panels} />;
export const Borderless = () => (
  <Tabs size="large" isBorderless={true} tabButtons={buttons} tabPanels={panels} />
);

const customButtons = [
  <TabButtonCustom key={1}>Tab 1</TabButtonCustom>,
  <TabButtonCustom key={2}>Tab 2</TabButtonCustom>,
  <TabButtonCustom key={3}>Tab 3</TabButtonCustom>,
];

export const CustomButtonsExample = () => (
  <Tabs isBorderless={true} tabButtons={customButtons} tabPanels={panels} />
);
