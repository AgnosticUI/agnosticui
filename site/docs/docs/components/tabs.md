# Tabs

`Tabs` components... 

<div class="mbs24"></div>

## Examples

<div class="mbe24"></div>

<TabExamples />

<script>
import TabExamples from '../../components/TabExamples.vue'
import { Alert } from "agnostic-vue";

export default {
  components: { Alert, TabExamples }
}
</script>

<div class="mbe32"></div>

## Usage

<div class="flex">
  <h3 id="react" tabindex="-1">
    <img src="/images/React-icon.svg" alt="react logo">React
  </h3>
</div>

```jsx
import "agnostic-react/dist/common.min.css";
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
export const YourComponent = () => (
  <>
    <h2>Tabs</h2>
    <section className="mbs24 mbe40">
      <Tabs tabButtons={tabButtons[0]} tabPanels={tabPanels[0]} />
    </section>
    <h2>Tabs Large</h2>
    <section className="mbs24 mbe40">
      <Tabs size="large" tabButtons={tabButtons[1]} tabPanels={tabPanels[1]} />
    </section>
    <h2>Tabs XLarge</h2>
    <section className="mbs24 mbe40">
      <Tabs size="xlarge" tabButtons={tabButtons[2]} tabPanels={tabPanels[2]} />
    </section>
    <h2>Tabs Vertical</h2>
    <section className="mbs24 mbe40">
      <Tabs isVerticalOrientation tabButtons={tabButtons[3]} tabPanels={tabPanels[3]} />
    </section>
    <h2>Tabs Disabled</h2>
    <section className="mbs24 mbe40">
      <Tabs isDisabled tabButtons={tabButtons[4]} tabPanels={tabPanels[4]} />
    </section>
    <h2>Tabs Disabled Options</h2>
    <section className="mbs24 mbe40">
      <Tabs disabledOptions={[2,3]} tabButtons={tabButtons[5]} tabPanels={tabPanels[5]} />
    </section>
  </>
);
```

React: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/Tab.tsx), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/stories/Tab.stories.tsx)

<div class="mbe32"></div>

<div class="flex">
  <h3 id="vue-3" tabindex="-1">
    <img src="/images/Vue-icon.svg" alt="Vue 3 logo">Vue 3
  </h3>
</div>

```vue
<script>
// Import AgnosticUI global common & component CSS
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Button, Tabs } from "agnostic-vue";

export default {
  name: "TabExamples",
  components: {
    Button,
    Tabs,
  },
  data() {
    return {
      disabledOptions: ["tab-18", "tab-20"],
    };
  },
};
</script>
<template>
  <h2>Tabs</h2>
  <div class="mbs24 mbe16">
    <Tabs>
      <template #tab-1>
        Tab 1
      </template>
      <template #panel-1>
        <p>Tab 1 content (no padding or margins so consumer can control desired gutters) (no padding or margins so consumer can control desired gutters)</p>
        <p>
          Try tabbing into this. You'll be able to tab through the links, and then shift-tab back out. To get to the
          next tab you use the arrow key and enter|space to select. This is consistent with
          wai-aria practices <a href="https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-2/tabs.html">
            aria manual activation example</a>.
        </p>
        <p>Random <a href="www.yahoo.com">yahoo link 1</a> and random <a href="www.yahoo.com">yahoo link 2</a>. Just testing some links out :)</p>
      </template>
      <template #tab-2>
        Tab 2
      </template>
      <template #panel-2>
        <p>Random <a href="www.yahoo.com">yahoo link 1</a> and random <a href="www.yahoo.com">yahoo link 2</a>. Just testing some links out :)</p>
      </template>
      <template #tab-foo>
        Tab Foo
      </template>
      <template #panel-foo>
        Panel Foo content (no padding or margins so consumer can control desired gutters)
      </template>
      <template #tab-bar>
        Tab Bar
      </template>
      <template #panel-bar>
        Panel Bar
      </template>
    </Tabs>
  </div>
  <div class="mbs32 mbe16">
    <Tabs size="large">
      <template #tab-11>
        Tab 1
      </template>
      <template #panel-11>
        Panel 1
      </template>
      <template #tab-12>
        Tab 2
      </template>
      <template #panel-12>
        Panel 2
      </template>
    </Tabs>
  </div>
  <h2>Vertical Tabs</h2>
  <div class="mbs48 mbe16">
    <Tabs is-vertical>
      <template #tab-13>
        Tab 1
      </template>
      <template #panel-13>
        <p>Vertical tab 1 content (no padding or margins so consumer can control desired gutters) (no padding or margins so consumer can control desired gutters)</p>
        <p>Now you'll use the up and down arrows. Home and end still work the same. Random <a href="www.yahoo.com">yahoo link 1</a> and random <a href="www.yahoo.com">yahoo link 2</a>. Just testing some links out :)</p>
      </template>
      <template #tab-14>
        Tab 2
      </template>
      <template #panel-14>
        Vertical tab 2 content (no padding or margins so consumer can control desired gutters)
      </template>
    </Tabs>
  </div>
  <h2>Disabled Tabs</h2>
  <div class="mbs48 mbe16">
    <Tabs is-disabled>
      <template #tab-15>
        Tab 1
      </template>
      <template #panel-15>
        Panel 1
      </template>
      <template #tab-16>
        Tab 1
      </template>
      <template #panel-16>
        Panel 2
      </template>
    </Tabs>
  </div>
  <h2>Disabled Options</h2>
  <div class="mbs12 mbe16">
    <Tabs :disabled-options="disabledOptions">
      <template #tab-17>
        Tab 1
      </template>
      <template #panel-17>
        Disabled options only make sense if you do NOT supply isDisabled (as
        that disabled all the tab buttons), and you wish to selectively disable certain buttons.
        Here we've disabled the second and fourth tabs. Keyboard navigation skips the disabled tabs.
      </template>
      <template #tab-18>
        Tab 2
      </template>
      <template #panel-18>
        Panel 2
      </template>
      <template #tab-19>
        Tab 3
      </template>
      <template #panel-19>
        Panel 3
      </template>
      <template #tab-20>
        Tab 4
      </template>
      <template #panel-20>
        Panel 4
      </template>
      <template #tab-21>
        Tab 5
      </template>
      <template #panel-21>
        Panel 5
      </template>
    </Tabs>
  </div>
  <h2>Custom</h2>
  <div class="mbs12 mbe16">
    <div>
      <p class="mbe12">
        Custom tabs using an AgnosticUI button requires two things:
      </p>
      <ul class="mbe24">
        <li>You need to use the <code>tabType="custom"</code> prop on the tab</li>
        <li>You need to use the <code>type="faux"</code> prop on the button. This is required because the tabs are already buttons so you'd have a nested button a11y violation otherwise.</li>
      </ul>
      <Tabs tab-type="custom">
        <template #tab-22>
          <Button
            type="faux"
            mode="primary"
            is-bordered
          >
            Tab One
          </Button>
        </template>
        <template #panel-22>
          <p>Tab 1 content (no padding or margins so consumer can control desired gutters) (no padding or margins so consumer can control desired gutters)</p>
          <p>
            Try tabbing into this. You'll be able to tab through the links, and then shift-tab back out. To get to the
            next tab you use the arrow key and enter|space to select. This is consistent with
            wai-aria practices <a href="https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-2/tabs.html">
              aria manual activation example</a>.
          </p>
          <p>Random <a href="www.yahoo.com">yahoo link 1</a> and random <a href="www.yahoo.com">yahoo link 2</a>. Just testing some links out :)</p>
        </template>
        <template #tab-23>
          <Button
            type="faux"
            mode="primary"
            is-bordered
          >
            Tab Two
          </Button>
        </template>
        <template #panel-23>
          Tab 2 content (no padding or margins so consumer can control desired gutters)
        </template>
      </Tabs>
    </div>
  </div>
</template>
```

Vue 3: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Tab.vue), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/stories/Tab.stories.js)

<div class="mbe24"></div>

<Alert type="warning">Note: Vue 2 is not supported</Alert>

<div class="mbe32"></div>

<div class="flex">
  <h3 id="angular" tabindex="-1">
    <img src="/images/Angular-icon.svg" alt="Angular logo">Angular
  </h3>
</div>

In your Angular configuration (likely `angular.json`) ensure you're including
the common AgnosticUI styles:

<div class="mbe16"></div>

` "styles": ["agnostic/dist/common.min.css"],`

<div class="mbe24"></div>

Add AgnosticUI's `AgModule` module:

```js{3,9}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgModule } from 'agnostic-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AgModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

Now you can use in your components:

```js
import { Component } from '@angular/core';

@Component({
  selector: 'your-component',
  template: `<section>
    <ag-tabs>
      <ag-tab-panel panelId="panel1"
                    tabButtonTitle="Tab 1">
        Tab 1 content (no padding or margins so consumer can control desired gutters) (no padding or margins so consumer
        can control desired gutters)
      </ag-tab-panel>
      <ag-tab-panel panelId="panel2"
                    tabButtonTitle="Tab 2">
        Tab 2 content (no padding or margins so consumer can control desired gutters) (no padding or margins so consumer
        can control desired gutters)
      </ag-tab-panel>
    </ag-tabs>
  </section>
  <section>
    <ag-tabs [isVerticalOrientation]="true">
      <ag-tab-panel panelId="panel3"
                    tabButtonTitle="Tab 1">
        Tab 1 content (no padding or margins so consumer can control desired gutters) (no padding or margins so consumer
        can control desired gutters)
      </ag-tab-panel>
      <ag-tab-panel panelId="panel4"
                    tabButtonTitle="Tab 2">
        Tab 2 content (no padding or margins so consumer can control desired gutters) (no padding or margins so consumer
        can control desired gutters)
      </ag-tab-panel>
    </ag-tabs>
  </section>
  <section>
    <ag-tabs size="xlarge"
             [disabledOptions]="['Tab 2', 'Tab 4']">
      <ag-tab-panel panelId="panel11"
                    tabButtonTitle="Tab 1">
        Tab 1 content (no padding or margins so consumer can control desired gutters)
      </ag-tab-panel>
      <ag-tab-panel panelId="panel12"
                    tabButtonTitle="Tab 2">
        Tab 2 content (no padding or margins so consumer can control desired gutters)
      </ag-tab-panel>
      <ag-tab-panel panelId="panel13"
                    tabButtonTitle="Tab 3">
        Tab 3 content
      </ag-tab-panel>
      <ag-tab-panel panelId="panel14"
                    tabButtonTitle="Tab 4">
        Tab 4 content
      </ag-tab-panel>
      <ag-tab-panel panelId="panel15"
                    tabButtonTitle="Tab 5">
        Tab 5 content
      </ag-tab-panel>
    </ag-tabs>
  </section>`
})
export class YourComponent {}
```


Angular: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/Tab.component.ts), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/Tab.component.stories.ts)

<div class="mbe32"></div>

<div class="flex mbe16">
  <h3 id="svelte" tabindex="-1">
    <img src="/images/Svelte-icon.svg" alt="Svelte logo">Svelte
  </h3>
</div>

<Alert type="error">Tabs component for Svelte will be coming soon</Alert>

<div class="mbe12"></div>

_We need to address [this issue](https://github.com/AgnosticUI/agnosticui/issues/53#issue-1066586403) first._

<div class="mbe24"></div>

Svelte: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/stories/Tab.svelte), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/stories/Tab.stories.js)

## Storybook

You can run the framework Storybooks and see live examples for React, Vue 3, Angular, and Svelte. The following will set this up locally:

```shell
git clone git@github.com:AgnosticUI/agnosticui.git
cd agnosticui && yarn
# You can then run any of the top-level scripts:
yarn start:react # or
yarn start:vue # or
yarn start:angular # or
yarn start:svelte
```

See [Running monorepo](https://github.com/AgnosticUI/agnosticui/blob/master/CONTRIBUTING.md#running-monorepo).
