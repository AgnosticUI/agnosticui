# Header

The `Header` component is used as a foundation for top-level application navigation.

<div class="mbs24"></div>

## Examples

<div class="mbe24"></div>

<HeaderExamples />

<script setup>
import HeaderExamples from '../../components/HeaderExamples.vue'
import { Alert } from "agnostic-vue";
</script>

<div class="mbe32"></div>

## Usage

<div class="flex items-center mbs40 mbe24">
  <a href="https://astro.build/" class="astro-logo-usage-wrap" target="_blank"><img class="astro-logo-usage" src="/images/astro-logo-light.svg" alt="astro logo"></a>
  <p class="mis16">React, Vue, and Svelte examples on a single playground page 🚀 💥</p>
</div>
<div class="playgrounds flex mbe32">
  <a class="btn btn-rounded" style="background-color: var(--agnostic-dark); color: var(--agnostic-light)" href="https://codesandbox.io/s/github/AgnosticUI/agnosticui/tree/master/playgrounds/Header?file=/README.md" target="_blank">
    <img src="/images/codesandbox.svg" alt="codesandbox logo" class="mie8"> View in CodeSandbox
  </a>
  <a class="btn btn-rounded" style="background-color: var(--agnostic-primary); color: var(--agnostic-light)" href="https://stackblitz.com/github/AgnosticUI/agnosticui/tree/master/playgrounds/Header?file=/README.md" target="_blank">
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
import { Header, HeaderNav, HeaderNavItem } from "agnostic-react";
export const YourComponent = () => (
  <>
    <Header>
      <>
        <a href="https://web.dev/">web.dev</a>
        <HeaderNav>
          <HeaderNavItem>
            <a href="https://css-tricks.com/">CSS-Tricks</a>
          </HeaderNavItem>
          <HeaderNavItem>
            <a href="https://developer.mozilla.org/en-US/">MDN</a>
          </HeaderNavItem>
        </HeaderNav>
        <a href="https://www.freecodecamp.org/">freeCodeCamp</a>
      </>
    </Header>
    <h3 class="mbs40 mbe12">Header content justify left</h3>
    <p class="mbe24">Pass in <code>isHeaderContentStart</code> and apply a global CSS class with
      <code>flex-grow: 0</code> on mobile (so it will stack as column), and <code>flex-grow: 1</code>
      at a breakpoint of your choosing to push other content over. Inspect <code>.header-flex-fill</code>
      in devtools to see an example.
    </p>
    <Header isHeaderContentStart>
      <>
        <a href="https://web.dev/">web.dev</a>
        <HeaderNav css="header-flex-fill">
          <HeaderNavItem>
            <a href="https://css-tricks.com/">CSS-Tricks</a>
          </HeaderNavItem>
          <HeaderNavItem>
            <a href="https://developer.mozilla.org/en-US/">MDN</a>
          </HeaderNavItem>
        </HeaderNav>
        <a href="https://www.freecodecamp.org/">freeCodeCamp</a>
      </>
    </Header>
    <h3 class="mbs40 mbe12">Header content justify right</h3>
    <p class="mbe24">Pass in <code>isHeaderContentEnd</code> and apply
      <code>flex-fill</code> to the <code>logoleft</code> content so grows (pushes content over).
    </p>
    <Header isHeaderContentEnd>
      <>
        <a class="flex-fill" href="https://web.dev/">web.dev</a>
        <HeaderNav css="header-mbe16">
          <HeaderNavItem>
            <a href="https://css-tricks.com/">CSS-Tricks</a>
          </HeaderNavItem>
          <HeaderNavItem>
            <a href="https://developer.mozilla.org/en-US/">MDN</a>
          </HeaderNavItem>
        </HeaderNav>
        <a href="https://www.freecodecamp.org/">freeCodeCamp</a>
      </>
    </Header>
  </>
)
```
</details>

React: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/Header.tsx), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/stories/Header.stories.tsx)

<div class="mbe32"></div>

<div class="flex">
  <h3 id="vue-3" tabindex="-1">
    <img src="/images/Vue-icon.svg" alt="Vue 3 logo">Vue 3
  </h3>
</div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```vue
<script setup>
// Import AgnosticUI global common & component CSS
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Header, HeaderNav, HeaderNavItem } from "agnostic-vue";
</script>
<template>
  <h3 class="mbe12">Header defaults to space between</h3>
  <Header>
    <template v-slot:logoleft>
      <a href="https://web.dev/">web.dev</a>
    </template>
    <template v-slot:headernav>
      <HeaderNav>
        <HeaderNavItem>
          <a href="https://css-tricks.com/">CSS-Tricks</a>
        </HeaderNavItem>
        <HeaderNavItem>
          <a href="https://developer.mozilla.org/en-US/">MDN</a>
        </HeaderNavItem>
      </HeaderNav>
    </template>
    <template v-slot:logoright>
      <a href="https://www.freecodecamp.org/">freeCodeCamp</a>
    </template>
  </Header>
  <h3 class="mbe12">Header content justify left</h3>
  <p class="mbe16">Pass in <code>isHeaderContentStart</code> and apply a global CSS class with
    <code>flex-grow: 0</code> on mobile (so it will stack as column), and <code>flex-grow: 1</code>
    at a breakpoint of your choosing to push other content over. Inspect <code>.header-flex-fill</code>
    in devtools to see an example.
  </p>
  <Header isHeaderContentStart>
    <template v-slot:logoleft>
      <a href="https://web.dev/">web.dev</a>
    </template>
    <template v-slot:headernav>
      <HeaderNav css="header-flex-fill">
        <HeaderNavItem>
          <a href="https://css-tricks.com/">CSS-Tricks</a>
        </HeaderNavItem>
        <HeaderNavItem>
          <a href="https://developer.mozilla.org/en-US/">MDN</a>
        </HeaderNavItem>
      </HeaderNav>
    </template>
    <template v-slot:logoright>
      <a href="https://www.freecodecamp.org/">freeCodeCamp</a>
    </template>
  </Header>
  <h3 class="mbe12">Header content justify right</h3>
  <p class="mbe16">Pass in <code>isHeaderContentEnd</code> and apply
    <code>flex-fill</code> to the <code>logoleft</code> content so grows (pushes content over).
  </p>
  <Header isHeaderContentEnd>
    <template v-slot:logoleft>
      <a
        class="flex-fill"
        href="https://web.dev/"
      >web.dev</a>
    </template>
    <template v-slot:headernav>
      <HeaderNav css="header-mbe16">
        <HeaderNavItem>
          <a href="https://css-tricks.com/">CSS-Tricks</a>
        </HeaderNavItem>
        <HeaderNavItem>
          <a href="https://developer.mozilla.org/en-US/">MDN</a>
        </HeaderNavItem>
      </HeaderNav>
    </template>
    <template v-slot:logoright>
      <a href="https://www.freecodecamp.org/">freeCodeCamp</a>
    </template>
  </Header> 
</template>
```
</details>

Vue 3: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Header.vue), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/stories/Header.stories.js)

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
	import {
		Header,
		HeaderNav,
		HeaderNavItem,
	} from 'agnostic-svelte';
</script>
<div class="container">
	<Header>
		<div slot="logoleft">logo left</div>
		<HeaderNav css="nav-overrides">
			<HeaderNavItem><a href="#home">Home</a></HeaderNavItem>
			<HeaderNavItem><a href="#products">Products</a></HeaderNavItem>
			<HeaderNavItem><a href="#services">Services</a></HeaderNavItem>
			<HeaderNavItem><a href="#about">About</a></HeaderNavItem>
		</HeaderNav>
		<div slot="logoright">logo right</div>
	</Header>
</div>
<div class="container">
  <h3 class="mbs40 mbe12">Header content justify left</h3>
  <p class="mbe24">Pass in <code>isHeaderContentStart</code> and apply a global CSS class with
    <code>flex-grow: 0</code> on mobile (so it will stack as column), and <code>flex-grow: 1</code>
    at a breakpoint of your choosing to push other content over. Inspect <code>.header-flex-fill</code>
    in devtools to see an example.
  </p>	
  <Header isHeaderContentStart="{true}">
    <div slot="logoleft"><a href="https://www.w3.org/">w3</a></div>
    <HeaderNav css="header-flex-fill">
      <HeaderNavItem><a href="https://web.dev/">web.dev</a></HeaderNavItem>
      <HeaderNavItem>
        <a href="https://css-tricks.com/">CSS-Tricks</a>
      </HeaderNavItem>
      <HeaderNavItem>
        <a href="https://developer.mozilla.org/en-US/">MDN</a>
      </HeaderNavItem>
      <HeaderNavItem>
        <a href="https://www.freecodecamp.org/">freeCodeCamp</a>
      </HeaderNavItem>
    </HeaderNav>
    <div slot="logoright">
      <a href="https://www.w3.org/TR/wai-aria-practices-1.1/">wai-aria</a>
    </div>
  </Header>
</div>
<div class="container">
  <h3 class="mbs40 mbe12">Header content justify right</h3>
  <p class="mbe24">Pass in <code>isHeaderContentEnd</code> and apply
    <code>flex-fill</code> to the <code>logoleft</code> content so grows (pushes content over).
  </p>
  <Header isHeaderContentEnd="{true}">
    <a class="flex-fill" href="https://web.dev/">web.dev</a>
    <HeaderNav css="header-mbe16">
      <HeaderNavItem><a href="https://web.dev/">web.dev</a></HeaderNavItem>
      <HeaderNavItem>
        <a href="https://css-tricks.com/">CSS-Tricks</a>
      </HeaderNavItem>
      <HeaderNavItem>
        <a href="https://developer.mozilla.org/en-US/">MDN</a>
      </HeaderNavItem>
      <HeaderNavItem>
        <a href="https://www.freecodecamp.org/">freeCodeCamp</a>
      </HeaderNavItem>
    </HeaderNav>
    <div slot="logoright">
      <a href="https://www.w3.org/TR/wai-aria-practices-1.1/">wai-aria</a>
    </div>
  </Header>
</div>
```
</details>

Svelte: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/Header/Header.svelte), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/Header/Header.stories.js)

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
    <ag-header>
      <a href="https://web.dev/">web.dev</a>
      <ag-header-nav>
        <ag-header-nav-item class="mie12">
          <a href="https://css-tricks.com/">CSS-Tricks</a>
        </ag-header-nav-item>
        <ag-header-nav-item class="mis12 mie16">
          <a href="https://developer.mozilla.org/en-US/">MDN</a>
        </ag-header-nav-item>
      </ag-header-nav>
      <a href="https://www.freecodecamp.org/">freeCodeCamp</a>
    </ag-header>
    <ag-header [isHeaderContentStart]="true">
      <a href="https://web.dev/">web.dev</a>
      <ag-header-nav css="header-flex-fill">
        <ag-header-nav-item class="mie12">
          <a href="https://css-tricks.com/">CSS-Tricks</a>
        </ag-header-nav-item>
        <ag-header-nav-item class="mis12 mie16">
          <a href="https://developer.mozilla.org/en-US/">MDN</a>
        </ag-header-nav-item>
      </ag-header-nav>
      <a href="https://www.freecodecamp.org/">freeCodeCamp</a>
    </ag-header>
    <ag-header [isHeaderContentEnd]="true">
      <a class="flex-fill"
         href="https://web.dev/">web.dev</a>
      <ag-header-nav>
        <ag-header-nav-item>
          <a href="https://css-tricks.com/">CSS-Tricks</a>
        </ag-header-nav-item>
        <ag-header-nav-item css="header-mbe16">
          <a href="https://developer.mozilla.org/en-US/">MDN</a>
        </ag-header-nav-item>
      </ag-header-nav>
      <a href="https://www.freecodecamp.org/">freeCodeCamp</a>
    </ag-header>
  </section>`,
})
export class YourComponent {}
```
</details>

Angular: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/header.component.ts), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/header.component.stories.ts)

<div class="mbe32"></div>

## Storybook

You can run the framework Storybooks and see live examples for React, Vue 3, Svelte, Astro, and Angular (experimental). The following will set up Storybook and run locally:

<details class="mbs24 mbe24 disclose disclose-bordered">
<summary class="disclose-title">How to run Storybook</summary>

```shell
git clone git@github.com:AgnosticUI/agnosticui.git
cd agnosticui/<PACKAGE_NAME> && npm i # e.g. cd agnosticui/agnostic-react && npm i
npm run storybook
```
</details>

See [Running Storybook](https://github.com/AgnosticUI/agnosticui/blob/master/CONTRIBUTING.md#usage).

