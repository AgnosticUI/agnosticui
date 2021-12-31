# Empty States

The `EmptyState` component (also known as: zero state, first-time-user-experience, or blank state) is used when a table, list, search result, etc., has no data to be displayed. This often occurs during the first use of a product or feature, and provides an opportunity to communicate its benefits and guidance on what to do next. 

<div class="mbs24"></div>

## Examples

<div class="mbe24"></div>

<EmptyStateExamples />

<script>
import EmptyStateExamples from '../../components/EmptyStateExamples.vue'
import { Alert } from "agnostic-vue";

export default {
  components: { Alert, EmptyStateExamples }
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
import {
  EmptyState,
  EmptyStateHeader,
  EmptyStateBody,
  EmptyStateFooter,
  Button
} from "agnostic-react";
export const YourComponent = () => (
  <>
    <EmptyState isBordered isRounded>
      <EmptyStateHeader>
        <svg xmlns="http://www.w3.org/2000/svg" fill="#999" width="40" height="40" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z" />
        </svg>
      </EmptyStateHeader>
      <EmptyStateBody>
        <div className="h4">No connections yet</div>
        <p className="mbe16">Click below to add some friends</p>
      </EmptyStateBody>
      <EmptyStateFooter>
        <Button mode="primary" isRounded>Invite friends</Button>
      </EmptyStateFooter>
    </EmptyState>
  </>
)
```

React: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/EmptyState.tsx), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/stories/EmptyState.stories.tsx)

<div class="mbe32"></div>

<div class="flex">
  <h3 id="vue-3" tabindex="-1">
    <img src="/images/Vue-icon.svg" alt="Vue 3 logo">Vue 3
  </h3>
</div>

```vue
<template>
  <EmptyState
    isRounded
    isBordered
  >
    <template #header>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#999"
        width="40"
        height="40"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"
        />
      </svg>
    </template>
    <template #body>
      <div class="h4">
        No connections yet
      </div>
      <p
        class="mbe16"
        style="color: var(--agnostic-gray-dark);"
      >
        Click below to add some friends
      </p>
    </template>
    <template #footer>
      <Button
        isRounded
        mode="primary"
      >Invite friend</Button>
    </template>
  </EmptyState>
</template>
<script>
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Button, EmptyState } from "agnostic-vue";
export default {
  name: "EmptyStateExamples",
  components: {
    EmptyState,
    Button,
  },
};
</script>
```

Vue 3: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/EmptyState.vue), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/stories/EmptyState.stories.js)

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
  template: `<div>
    <ag-empty-state [isRounded]="true"
                    [isBordered]="true">
      <ag-empty-state-header>
        <svg xmlns="http://www.w3.org/2000/svg"
             fill="#999"
             width="40"
             height="40"
             viewBox="0 0 24 24">
          <path fillRule="evenodd"
                d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z" />
        </svg>
      </ag-empty-state-header>
      <ag-empty-state-body>
        <div class="h4">No connections yet</div>
        <p class="mbe16">Click below to add some friends</p>
      </ag-empty-state-body>
      <ag-empty-state-footer>
        <ag-button [isRounded]="true"
                   mode="primary">Invite friends</ag-button>
      </ag-empty-state-footer>
    </ag-empty-state> 
  </div>`
})
export class YourComponent {}
```


Angular: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/empty-state.component.ts), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/empty-state.component.stories.ts)

<div class="mbe32"></div>

<div class="flex">
  <h3 id="svelte" tabindex="-1">
    <img src="/images/Svelte-icon.svg" alt="Svelte logo">Svelte
  </h3>
</div>

```html
<script>
  import 'agnostic-svelte/dist/common.min.css';
  import { Button, EmptyState } from "agnostic-svelte";
</script>
<div>
   <EmptyState>
      <div slot="header">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#999"
          width="40"
          height="40"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"
          />
        </svg>
      </div>
      <div slot="body">
        <div class="h4">
          No connections yet
        </div>
        <p
          class="mbe16"
          style="color: var(--agnostic-gray-dark);"
        >
          Click below to add some friends
        </p>
      </div>
      <div slot="footer">
        <Button mode="primary">
          Invite friend
        </Button>
      </div>
    </EmptyState>
</div>
```

Svelte: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/stories/EmptyState.svelte), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/stories/EmptyState.stories.js)

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
