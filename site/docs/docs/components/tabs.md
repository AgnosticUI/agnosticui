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
import { Tabs } from "agnostic-react";
export const YourComponent = () => (
  <h1>tbd</h1>
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
      disabledOptions: ["tab-2", "tab-3"],
    };
  },
};
</script>
<template>
  <h3>Tabs</h3>
  <div class="mbs24 mbe16">
    <Tabs>
      <template #tab-1>
        Tab 1
      </template>
      <template #panel-1>
        <p class="mbe16">Tab 1 content (no padding or margins so consumer can control desired gutters)</p>
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
  <h3>Tabs large</h3>
  <div class="mbs32 mbe16">
    <Tabs size="large">
      <template #tab-1>
        Tab 1
      </template>
      <template #panel-1>
        Panel 1
      </template>
      <template #tab-2>
        Tab 2
      </template>
      <template #panel-2>
        Panel 2
      </template>
    </Tabs>
  </div>
  <h3>Tabs xlarge</h3>
  <div class="mbs32 mbe16">
    <Tabs size="xlarge">
      <template #tab-1>
        Tab 1
      </template>
      <template #panel-1>
        Panel 1
      </template>
      <template #tab-2>
        Tab 2
      </template>
      <template #panel-2>
        Panel 2
      </template>
    </Tabs>
  </div>
  <h3>Vertical Tabs</h3>
  <div class="mbs48 mbe16">
    <Tabs is-vertical>
      <template #tab-1>
        Tab 1
      </template>
      <template #panel-1>
        <p>Vertical tab 1 content (no padding or margins so consumer can control desired gutters) (no padding or margins so consumer can control desired gutters)</p>
        <p>Now you'll use the up and down arrows. Home and end still work the same. Random <a href="www.yahoo.com">yahoo link 1</a> and random <a href="www.yahoo.com">yahoo link 2</a>. Just testing some links out :)</p>
      </template>
      <template #tab-2>
        Tab 2
      </template>
      <template #panel-2>
        Vertical tab 2 content (no padding or margins so consumer can control desired gutters)
      </template>
    </Tabs>
  </div>
  <h3>Disabled Tabs</h3>
  <div class="mbs48 mbe16">
    <Tabs is-disabled>
      <template #tab-1>
        Tab 1
      </template>
      <template #panel-1>
        Panel 1
      </template>
      <template #tab-2>
        Tab 2
      </template>
      <template #panel-2>
        Panel 2
      </template>
    </Tabs>
  </div>
  <h3>Disabled Options</h3>
  <div class="mbs12 mbe16">
    <Tabs :disabled-options="disabledOptions">
      <template #tab-1>
        Tab 1
      </template>
      <template #panel-1>
        Disabled options only make sense if you do NOT supply isDisabled (as
        that disabled all the tab buttons), and you wish to selectively disable certain buttons.
        Here we've obviously disabled the first and third tab.
      </template>
      <template #tab-2>
        Tab 2
      </template>
      <template #panel-2>
        Panel 2
      </template>
      <template #tab-3>
        Tab 3
      </template>
      <template #panel-3>
        Panel 3
      </template>
      <template #tab-4>
        Tab 4
      </template>
      <template #panel-4>
        Panel 4
      </template>
    </Tabs>
  </div>
  <h3>Tabs with custom buttons</h3>
  <div class="mbs12 mbe16">
    <div>
      <p class="mbe12">
        Custom tabs using an AgnosticUI button requires two things:
      </p>
      <ul class="mbe24">
        <li class="mbe16">You need to use the <code>tabType="custom"</code> prop on the tab</li>
        <li>You need to use the <code>type="faux"</code> prop on the button. This is required because the tabs are already buttons so you'd have a nested buttons accessibility violation otherwise.</li>
      </ul>
      <Tabs tab-type="custom">
        <template #tab-1>
          <Button
            type="faux"
            mode="primary"
            is-bordered
          >
            Tab One
          </Button>
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
          <Button
            type="faux"
            mode="primary"
            is-bordered
          >
            Tab Two
          </Button>
        </template>
        <template #panel-2>
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

  </section>`
})
export class YourComponent {}
```


Angular: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/Tab.component.ts), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/Tab.component.stories.ts)

<div class="mbe32"></div>

<div class="flex">
  <h3 id="svelte" tabindex="-1">
    <img src="/images/Svelte-icon.svg" alt="Svelte logo">Svelte
  </h3>
</div>

```html
<script>
  import "../node_modules/agnostic-svelte/dist/common.min.css";
  import { Tabs } from "agnostic-svelte";
</script>
<section class="mbe24">

</section>
```

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
