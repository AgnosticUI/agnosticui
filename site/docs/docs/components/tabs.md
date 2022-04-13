# Tabs

The `Tab` component provides a means to switch between different but contextually related panels. 

<div class="mbs24"></div>

## Examples

<div class="mbe24"></div>

<TabExamples />

<script setup>
import TabExamples from '../../components/TabExamples.vue'
import { Alert } from "agnostic-vue";
</script>

<div class="mbe32"></div>

## Usage

<div class="flex mbs40 mbe24">
  <a href="https://astro.build/" class="flex-shrink-0" target="_blank"><img style="width: var(--fluid-80)" src="/images/astro-logo-light.svg" alt="astro logo"></a>
  <p class="mis16">React, Vue, and Svelte examples on a single playground page 🚀 💥</p>
</div>
<div class="playgrounds flex mbe32">
  <a class="btn btn-rounded" style="background-color: var(--agnostic-dark); color: var(--agnostic-light)" href="https://codesandbox.io/s/github/AgnosticUI/agnosticui/tree/master/playgrounds/Tabs?file=/README.md" target="_blank">
    <img src="/images/codesandbox.svg" alt="codesandbox logo" class="mie8"> View in CodeSandbox
  </a>
  <a class="btn btn-rounded" style="background-color: var(--agnostic-primary); color: var(--agnostic-light)" href="https://stackblitz.com/github/AgnosticUI/agnosticui/tree/master/playgrounds/Tabs?file=/README.md" target="_blank">
    <img src="/images/stackblitz.svg" alt="Stackblitz logo" class="mie4"> View in Stackblitz
  </a>
</div>

<div class="flex">
  <h3 id="react" tabindex="-1">
    <img src="/images/React-icon.svg" alt="react logo">React
  </h3>
</div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

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
</details>

React: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/Tab.tsx), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/stories/Tab.stories.tsx)

<div class="mbe32"></div>

<div class="flex">
  <h3 id="vue-3" tabindex="-1">
    <img src="/images/Vue-icon.svg" alt="Vue 3 logo">Vue 3
  </h3>
</div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```vue
<template>
  <section class="mbe40">
    <div class="h4 mbe32 flex items-center">
      <img
        width="24"
        height="24"
        src="/assets/Vue-icon.svg"
        alt="Vue logo"
        class="mie12"
      />Vue 3 Close
    </div>
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
  </section>
</template>

<script setup>
// Components CSS
import "agnostic-vue/dist/index.css";
import { Button, Tabs } from "agnostic-vue";
const disabledOptions = ["tab-18", "tab-20"];
</script>
```
</details>

Vue 3: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Tab.vue), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/stories/Tab.stories.js)

<div class="mbe24"></div>

<div class="flex mbe16">
  <h3 id="svelte" tabindex="-1">
    <img src="/images/Svelte-icon.svg" alt="Svelte logo">Svelte
  </h3>
</div>

<div class="mbe12"></div>

The Svelte Tabs component utilizes _content projection_ by means of passing an array
of custom components that provide the corresponding panel content. See the following example:

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<script>
  // TabPanel1.svelte
  export let tabindex = 0;
</script>
<div id="panel-1" class="tab-panel" role="tabpanel" tabindex="{tabindex}">
  <h2>Tab 1</h2>
  <p>You can use any valid template content in the panel</p>
</div>
```
You will create as many of these panel components as your use case requires, and then
import them and use as follows:

```html
<script>
  import 'agnostic-svelte/css/common.min.css';
  import { Tabs } from "agnostic-svelte";
  import Tab1 from "path/to/your/TabPanel1.svelte";
  import Tab2 from "path/to/your/TabPanel2.svelte";
  import Tab3 from "path/to/your/TabPanel3.svelte";
</script>
<section class="mbe24">
  <Tabs size="large" tabs={[
    {
      title: "Tab 1",
      ariaControls: "panel-1",
      tabPanelComponent: Tab1,
    },
    {
      title: "Tab 2",
      ariaControls: "panel-2",
      tabPanelComponent: Tab2,
    },
    {
      title: "Tab 3",
      ariaControls: "panel-3",
      tabPanelComponent: Tab3,
    },
  ]}></Tabs>
</section>
```
</details>

<div class="mbe16"></div>

_Note, you can also project custom buttons. It's a bit more advanced but [start here](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/Tabs/Tabs.stories.js#L143) if that's a requirement._

<div class="mbe24"></div>

Svelte: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/Tabs/Tabs.svelte), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/Tabs/Tabs.stories.js)

<div class="mbe24"></div>

<div class="flex">
  <h3 id="angular" tabindex="-1">
    <img src="/images/Angular-icon.svg" alt="Angular logo">Angular (Experimental)
  </h3>
</div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

In your Angular configuration (likely `angular.json`) ensure you're including
the common AgnosticUI styles:

<div class="mbe16"></div>

` "styles": ["agnostic-angular/common.min.css"],`

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
  </section>
  <section>
    <ag-tabs [tabButtonTemplate]="tabButtonTemplate">
      <ng-template #tabButtonTemplate
                   let-panel
                   let-idx="index">
        <button #tabButton
                role="tab"
                [class.active]="panel.isActive"
                style="background: transparent; border: none; margin-right: -1px;"
                [attr.aria-controls]="panel.panelId"
                [attr.aria-selected]="panel.isActive"
                [attr.tab-index]="panel.isActive ? 0 : -1">
          <ag-button type="faux"
                     [isBordered]="true"
                     mode="primary">
            {{ panel.tabButtonTitle }}
          </ag-button>
        </button>
      </ng-template>
      <ag-tab-panel panelId="panel16"
                    tabButtonTitle="Tab 1">
        <p>Custom tab buttons can be achieved by using your own button (which can be AgnosticUI Buttons) using
          <i>ngTemplateOutlet</i> of <i>#tabButtonTemplate</i> as we have done here.
        </p>
        <br />
        <p>Note, that it's important to pass the <i>type="faux"</i> prop if you use an AgnosticUI Button (or just use
          a <i>div</i> if you're making your own). Ultimately, we want a <i>div</i> that is styled like a button.
          This "tab button div" will get wrapped internally by <i>ag-tabs</i> with a button of its own. Doing this
          prevents an a11y violation of nesting focusable elements.</p>
        <br />
        <p>You will also want to give these buttons the role of <i>tab</i> and utilize the <i>aria-selected</i>
          attribute as we've done here (TODO -- link to GitHub source).</p>
      </ag-tab-panel>
      <ag-tab-panel panelId="panel17"
                    tabButtonTitle="Tab 2">
        Tab 2 content (no padding or margins so consumer can control desired gutters)
      </ag-tab-panel>
    </ag-tabs>
  </section>`
})
export class YourComponent {}
```
</details>

Angular: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/Tab.component.ts), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/Tab.component.stories.ts)

<div class="mbe32"></div>

## Storybook

You can run the framework Storybooks and see live examples for React, Vue 3, Svelte, and Angular (experimental). The following will set up Storybook and run locally:

<details class="mbs24 mbe24 disclose disclose-bordered">
<summary class="disclose-title">How to run Storybook</summary>

```shell
git clone git@github.com:AgnosticUI/agnosticui.git
cd agnosticui/<PACKAGE_NAME> && npm i # e.g. cd agnosticui/agnostic-react && npm i
npm run storybook
```
</details>

See [Running Storybook](https://github.com/AgnosticUI/agnosticui/blob/master/CONTRIBUTING.md#usage).

