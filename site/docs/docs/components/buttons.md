# Buttons

Everyone knows buttons are the life of the party :man_dancing:

<div class="mbe24"></div>

## Examples

<ButtonExamples />

<script>
import ButtonExamples from '../../components/ButtonExamples.vue'
import { Alert } from "agnostic-vue";

export default {
  components: { Alert, ButtonExamples }
}
</script>

## Usage

<div class="flex">
  <h3 id="react" tabindex="-1">
    <img src="/images/React-icon.svg" alt="react logo">React
  </h3>
</div>

```jsx
import 'agnostic-react/dist/common.min.css';
import 'agnostic-react/dist/esm/index.css';
import { Button, ButtonGroup } from 'agnostic-react';

export const YourComponent = () => (
  <>
    <Button>Go</Button>
    <Button isRounded>Go</Button>
    <Button isRaised isRounded>Go</Button>
    <Button isBordered>Go</Button>
    <Button isBordered isRounded>Go</Button>
    <Button mode="primary">Go</Button>
    <Button mode="primary" isRounded>Go</Button>
    <Button mode="secondary">Go</Button>
    <Button isDisabled>Go</Button>
    <Button size="small">Go</Button>
    <Button size="large">Go</Button>
    <Button isBlock>Go</Button>
    <ButtonGroup ariaLabel="Button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  </>
);
```

React: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/Button.tsx), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/stories/Button.stories.tsx)

<div class="mbe32"></div>

<div class="flex">
  <h3 id="vue-3" tabindex="-1">
    <img src="/images/Vue-icon.svg" alt="Vue 3 logo">Vue 3
  </h3>
</div>


```vue
<template>
  <div class="mbs16 mbe16">
    <Button>Go</Button>
    <Button isRounded>Go</Button>
    <Button
      isRaised
      isRounded
    >Go</Button>
    <Button isBordered>Go</Button>
    <Button
      isBordered
      isRounded
    >Go</Button>
    <Button mode="primary">Go</Button>
    <Button
      mode="primary"
      isRounded
    >Go</Button>
    <Button mode="secondary">Go</Button>
  </div>
  <div class="mbe16">
    <Button size="small">Smaller</Button>
    <Button size="large">Larger</Button>
    <Button isDisabled>Disabled</Button>
  </div>
  <div class="mbe16">
    <Button isBlock>Go</Button>
  </div>
  <div class="mbe16">
    <ButtonGroup ariaLabel="Button group">
      <Button isBordered>One</Button>
      <Button isBordered>Two</Button>
      <Button isBordered>Three</Button>
    </ButtonGroup>
  </div>
  <div class="mbe16">
    <ButtonGroup ariaLabel="Button group">
      <Button mode="primary">One</Button>
      <Button mode="primary">Two</Button>
      <Button mode="primary">Three</Button>
    </ButtonGroup>
  </div>
</template>
<script>
// Import AgnosticUI global common & component CSS
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Button, ButtonGroup } from "agnostic-vue";
export default {
  name: "your-component",
  components: { Button, ButtonGroup},
};
</script>
```

Vue 3: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Button.vue), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/stories/Button.stories.js)


<div class="mbe24"></div>

<Alert type="warning">Note: Vue 2 is not supported</Alert>

<div class="mbe32"></div>

<div class="flex">
  <h3 id="svelte" tabindex="-1">
    <img src="/images/Svelte-icon.svg" alt="Svelte logo">Svelte
  </h3>
</div>

```html
<script>
  import 'agnostic-svelte/css/common.min.css';
  import { Button, ButtonGroup } from "agnostic-svelte";
</script>
<div class="mbe16">
  <Button>Default</Button>
  <Button isRaised>Go</Button>
  <Button isCircle>99</Button>
  <Button mode="primary">Go</Button>
  <Button mode="primary" size="large">Go</Button>
  <Button mode="primary" isBordered>Go</Button>
  <Button mode="primary" isBlock>Go</Button>
  <Button mode="primary" isBlank>Go</Button>
  <Button mode="primary" isLink>Go</Button>
  <Button mode="primary" isDisabled>Go</Button>
  <Button mode="primary" isRounded>Go</Button>
  <Button isSkinned={false}>Go</Button>
  <button class="tab-button">
    <Button type="faux" mode="primary">div</Button>
  </button>
</div>
```

Svelte: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/Button/Button.svelte), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/Button/Button.stories.js)

<div class="flex">
  <h3 id="angular" tabindex="-1">
    <img src="/images/Angular-icon.svg" alt="Angular logo">Angular (Experimental)
  </h3>
</div>

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
  template: `<div>
  <section>
    <ag-button [isBordered]="true">Go</ag-button>
    <ag-button [isBlank]="true">Go</ag-button>
    <ag-button [isBlock]="true">Go</ag-button>
    <ag-button [isRounded]="true">Go</ag-button>
    <ag-button [isRaised]="true"
               [isRounded]="true">Go</ag-button>
    <ag-button [isBordered]="true"
               [isRounded]="true">Go</ag-button>
    <ag-button mode="primary">Go</ag-button>
    <ag-button mode="primary"
               [isBordered]="true">Go</ag-button>
    <ag-button mode="secondary">Go</ag-button>
    <ag-button mode="secondary"
               [isBordered]="true">Go</ag-button>
  </section>
  <section>
    <h3>Button Groups</h3>
    <ag-button-group ariaLabel="Button group">
      <div class="btn-first-wrap">
        <ag-button mode="primary"
                   [isBordered]="true">Button 1</ag-button>
      </div>
      <ag-button mode="primary"
                 [isBordered]="true">Button 2</ag-button>
      <ag-button mode="primary"
                 [isBordered]="true">Button 3</ag-button>
      <div class="btn-last-wrap">
        <ag-button mode="primary"
                   [isBordered]="true">Button 4</ag-button>
      </div>
    </ag-button-group>
  </section>
</div>`,
})
export class YourComponent { //... }
```

Angular: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/button.component.ts), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/button.component.stories.ts)

<div class="mbe32"></div>

## Storybook

You can run the framework Storybooks and see live examples for React, Vue 3, Svelte, and Angular. The following will set this up locally:

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
