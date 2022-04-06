import "agnostic-react/dist/esm/index.css";
import { Tabs, TabButton, TabPanel  } from "agnostic-react";

/**
 * This is a contrived setup to support the example, but,
 * we * DO need to ensure IDs (and ARIA IDs) are unique.
 */
const tabButtons = [];
const tabPanels = [];


[...Array(6)].forEach((_, i) => {
  tabButtons[i] = [
    <TabButton controlsPanelId={`panel1-${i}`} key={1}>
      Tab 1
    </TabButton>,
    <TabButton controlsPanelId={`panel2-${i}`} key={2}>
      Tab 2
    </TabButton>,
    <TabButton controlsPanelId={`panel3-${i}`} key={3}>
      Tab 3
    </TabButton>,
    <TabButton controlsPanelId={`panel4-${i}`} key={4}>
      Tab 4
    </TabButton>,
    <TabButton controlsPanelId={`panel5-${i}`} key={5}>
      Tab 5
    </TabButton>,
  ];

  tabPanels[i] = [
    <TabPanel id={`panel1-${i}`} key={1}>
      <p>Tab 1 content (no padding or margins so consumer can control desired gutters)</p>
    </TabPanel>,
    <TabPanel id={`panel2-${i}`} key={2}>
      <p>Tab 2 content (no padding or margins so consumer can control desired gutters)</p>
    </TabPanel>,
    <TabPanel id={`panel3-${i}`} key={3}>
      <p>Tab 3 content</p>
    </TabPanel>,
    <TabPanel id={`panel4-${i}`} key={4}>
      <p>Tab 4 content</p>
    </TabPanel>,
    <TabPanel id={`panel5-${i}`} key={5}>
      <p>Tab 5 content</p>
    </TabPanel>,
  ];
});

export default function ReactAlert() {
  return (
    <section className="mbe40">
      <div className="h4 mbe32 flex items-center">
        <img width="24" height="24" src="/assets/React-icon.svg" alt="React logo" className="mie12" />React Tabs
      </div>
      <p className="mbs24 mbe14">Default Menu</p>
      <div className="mbs24 mbe40">
        <Tabs tabButtons={tabButtons[0]} tabPanels={tabPanels[0]} />
      </div>
      <h2>Tabs Large</h2>
      <div className="mbs24 mbe40">
        <Tabs size="large" tabButtons={tabButtons[1]} tabPanels={tabPanels[1]} />
      </div>
      <h2>Tabs XLarge</h2>
      <div className="mbs24 mbe40">
        <Tabs size="xlarge" tabButtons={tabButtons[2]} tabPanels={tabPanels[2]} />
      </div>
      <h2>Tabs Vertical</h2>
      <div className="mbs24 mbe40">
        <Tabs isVerticalOrientation tabButtons={tabButtons[3]} tabPanels={tabPanels[3]} />
      </div>
      <h2>Tabs Disabled</h2>
      <div className="mbs24 mbe40">
        <Tabs isDisabled tabButtons={tabButtons[4]} tabPanels={tabPanels[4]} />
      </div>
      <h2>Tabs Disabled Options</h2>
      <div className="mbs24 mbe40">
        <Tabs disabledOptions={[2,3]} tabButtons={tabButtons[5]} tabPanels={tabPanels[5]} />
      </div> 
    </section>
  );
}
