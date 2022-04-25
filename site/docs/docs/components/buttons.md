# Buttons

Everyone knows buttons are the life of the party :man_dancing:

<div class="mbe24"></div>

## Examples

<ButtonExamples />

<script setup>
import ButtonExamples from '../../components/ButtonExamples.vue'
import { Alert } from "agnostic-vue";
</script>

## Usage

<div class="flex items-center mbs40 mbe24">
  <a href="https://astro.build/" class="astro-logo-usage-wrap" target="_blank"><img class="astro-logo-usage" src="/images/astro-logo-light.svg" alt="astro logo"></a>
  <p class="mis16">React, Vue, and Svelte examples on a single playground page 🚀 💥</p>
</div>
<div class="playgrounds flex mbe32">
  <a class="btn btn-rounded" style="background-color: var(--agnostic-dark); color: var(--agnostic-light)" href="https://codesandbox.io/s/github/AgnosticUI/agnosticui/tree/master/playgrounds/Buttons?file=/README.md" target="_blank">
    <img src="/images/codesandbox.svg" alt="codesandbox logo" class="mie8"> View in CodeSandbox
  </a>
  <a class="btn btn-rounded" style="background-color: var(--agnostic-primary); color: var(--agnostic-light)" href="https://stackblitz.com/github/AgnosticUI/agnosticui/tree/master/playgrounds/Buttons?file=/README.md" target="_blank">
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
import 'agnostic-react/dist/common.min.css';
import 'agnostic-react/dist/esm/index.css';
import { Button, ButtonGroup } from 'agnostic-react';
  
const onClickStub = (e) => console.log('onClickStub called...', e)

export const YourComponent = () => (
  <>
    <Button>Go</Button>
    <Button isRounded>Go</Button>
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
      <Button isGrouped onClick={onClickStub}>One</Button>
      <Button isGrouped onClick={onClickStub}>Two</Button>
      <Button isGrouped onClick={onClickStub}>Three</Button>
    </ButtonGroup>
  </>
);
```
</details>

React: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/Button.tsx), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/stories/Button.stories.tsx)

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
  <div class="mbs16 mbe16">
    <Button>Go</Button>
    <Button isRounded>Go</Button>
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
      <Button isGrouped isBordered>One</Button>
      <Button isGrouped isBordered>Two</Button>
      <Button isGrouped isBordered>Three</Button>
    </ButtonGroup>
  </div>
  <div class="mbe16">
    <ButtonGroup ariaLabel="Button group">
      <Button isGrouped mode="primary">One</Button>
      <Button isGrouped mode="primary">Two</Button>
      <Button isGrouped mode="primary">Three</Button>
    </ButtonGroup>
  </div>
</template>
<script setup>
// Import AgnosticUI global common & component CSS
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Button, ButtonGroup } from "agnostic-vue";
</script>
```
</details>

Vue 3: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Button.vue), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/stories/Button.stories.js)


<div class="mbe24"></div>

<div class="flex">
  <h3 id="svelte" tabindex="-1">
    <img src="/images/Svelte-icon.svg" alt="Svelte logo">Svelte
  </h3>
</div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<script>
  import 'agnostic-svelte/css/common.min.css';
  import { Button, ButtonGroup } from "agnostic-svelte";
  const onClickStub = (e) => console.log('onClickStub called...', e)
</script>
<div class="mbe16">
  <Button on:click={onClickStub}>Default</Button>
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
  <div class="mbe24" />
  <ButtonGroup ariaLabel="Appropriate label for your button group">
    <Button isGrouped isBordered mode="primary" on:click={onClickStub}>One</Button>
    <Button isGrouped isBordered mode="primary" on:click={onClickStub}>Two</Button>
    <Button isGrouped isBordered mode="primary" on:click={onClickStub}>Three</Button>
  </ButtonGroup>
</div>
```
</details>

Svelte: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/Button/Button.svelte), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/Button/Button.stories.js)

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
  template: `<div>
  <section>
    <ag-button [isBordered]="true">Go</ag-button>
    <ag-button [isBlank]="true">Go</ag-button>
    <ag-button [isBlock]="true">Go</ag-button>
    <ag-button [isRounded]="true">Go</ag-button>
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
</details>

Angular: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/button.component.ts), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/button.component.stories.ts)

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
