# Breadcrumbs

The `Breadcrumb` component is a &ldquo;wayfinding&rdqou; element that helps make users aware of their current location within an application or website.

<div class="mbs24"></div>

## Examples

<div class="mbe24"></div>

<BreadcrumbExamples />

<script>
import BreadcrumbExamples from '../../components/BreadcrumbExamples.vue'
import { Alert } from "agnostic-vue";

export default {
  components: { Alert, BreadcrumbExamples }
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
import { Breadcrumb } from "agnostic-react";
export const YourComponent = () => (
  <div>
tbd
  </div>
)
```

React: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/Breadcrumb.tsx), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/stories/Breadcrumb.stories.tsx)

<div class="mbe32"></div>

<div class="flex">
  <h3 id="vue-3" tabindex="-1">
    <img src="/images/Vue-icon.svg" alt="Vue 3 logo">Vue 3
  </h3>
</div>

```vue
<script>
// Import the required AgnosticUI global common and component CSS
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Breadcrumb } from "agnostic-vue";

export default {
  name: "MyApp",
  components: {
    Breadcrumb,
  },
  data() {
    return {
      trailOfTennisRoutes: [
        {
          label: "Tennis",
          url: "#tennis",
        },
        {
          label: "Superstars",
          url: "#tennis-superstars",
        },
        {
          label: "Serena Williams",
          url: "#tennis-superstars-serena",
        },
      ],
    };
  },
};
</script>
<template>
  <h2>Breadcrumbs</h2>
  <div class="mbs24 mbe16">
    <Breadcrumb :routes="trailOfTennisRoutes" />
    <Breadcrumb
      type="slash"
      :routes="trailOfTennisRoutes"
    />
    <Breadcrumb
      type="bullet"
      :routes="trailOfTennisRoutes"
    />
    <Breadcrumb
      type="arrow"
      :routes="trailOfTennisRoutes"
    />
    <Breadcrumb :routes="[{ label: 'A single route will look *linkless*' }]" />
    <Breadcrumb :routes="[{label: 'First', url: '#foo'}, { label: 'Second', url: '#bar' }]" />
  </div>
</template>
```


Vue 3: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Breadcrumb.vue), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/stories/Breadcrumb.stories.js)

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
    <h2>Breadcrumbs</h2>
    <ag-breadcrumb
                   [routes]="[{ label: 'Tennis', url: '#tennis'}, { label: 'Superstars', url: '#tennis-superstars' }, { label: 'Serena Williams', url: '#tennis-superstars-serena' }]">
    </ag-breadcrumb>
    <ag-breadcrumb type="bullet"
                   [routes]="[{ label: 'Tennis', url: '#tennis'}, { label: 'Superstars', url: '#tennis-superstars' }, { label: 'Serena Williams', url: '#tennis-superstars-serena' }]">
    </ag-breadcrumb>
    <ag-breadcrumb type="arrow"
                   [routes]="[{ label: 'Tennis', url: '#tennis'}, { label: 'Superstars', url: '#tennis-superstars' }, { label: 'Serena Williams', url: '#tennis-superstars-serena' }]">
    </ag-breadcrumb>
    <ag-breadcrumb [routes]="[{ label: 'A single route will look *linkless*' }]"></ag-breadcrumb>
    <ag-breadcrumb [routes]="[{label: 'First', url: '#foo'}, { label: 'Second', url: '#bar' }]"></ag-breadcrumb>
  </section>`
})
export class YourComponent {}
```


Angular: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/Breadcrumb.component.ts), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/Breadcrumb.component.stories.ts)

<div class="mbe32"></div>

<div class="flex">
  <h3 id="svelte" tabindex="-1">
    <img src="/images/Svelte-icon.svg" alt="Svelte logo">Svelte
  </h3>
</div>

```html
<script>
  import "../node_modules/agnostic-svelte/dist/common.min.css";
  import { Breadcrumb } from "agnostic-svelte";
</script>
<div>
  <Breadcrumb />
</div>
```

Svelte: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/stories/Breadcrumb.svelte), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/stories/Breadcrumb.stories.js)

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
