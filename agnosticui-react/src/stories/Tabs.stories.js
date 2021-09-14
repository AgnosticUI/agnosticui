import React from 'react';
import Tabs, { Tab } from './Tabs.js';

export default {
  title: 'AG—React/Tabs',
  component: Tabs,
};

export const Default = () => (
  <>
    <Tabs>
      <Tab title="Tab 1" key={1}>
        <h1>Tab 1 content</h1>
      </Tab>
      <Tab title="Tab 2" key={2}>
        <h1>Tab 2 content</h1>
      </Tab>
      <Tab title="Tab 3" key={3}>
        <h1>Tab 3 content</h1>
      </Tab>
    </Tabs>
  </>
);

export const Large = () => (
  <>
    <Tabs size="large">
      <Tab title="Tab 1" key={1}>
        <h1>Tab 1 content</h1>
      </Tab>
      <Tab title="Tab 2" key={2}>
        <h1>Tab 2 content</h1>
      </Tab>
      <Tab title="Tab 3" key={3}>
        <h1>Tab 3 content</h1>
      </Tab>
    </Tabs>
  </>
);

export const Jumbo = () => (
  <>
    <Tabs size="jumbo">
      <Tab title="Tab 1" key={1}>
        <h1>Tab 1 content</h1>
      </Tab>
      <Tab title="Tab 2" key={2}>
        <h1>Tab 2 content</h1>
      </Tab>
      <Tab title="Tab 3" key={3}>
        <h1>Tab 3 content</h1>
      </Tab>
    </Tabs>
  </>
);
