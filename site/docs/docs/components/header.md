# Header

The `Header` component is used as a foundation for top-level application navigation.

<div class="mbs24"></div>

## Examples

<div class="mbe24"></div>

<HeaderExamples />

<script>
import HeaderExamples from '../../components/HeaderExamples.vue'
import { Alert } from "agnostic-vue";

export default {
  components: { Alert, HeaderExamples }
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
import { Close } from "agnostic-react";
export const YourComponent = () => (
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
  <Header isHeaderContentStart>
    <>
      <a href="https://web.dev/">web.dev</a>
      <HeaderNav css="mis16 flex-fill">
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
  <Header isHeaderContentEnd>
    <>
      <a class="flex-fill" href="https://web.dev/">web.dev</a>
      <HeaderNav css="mie16 flex-grow-0">
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
)
```

React: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/Close.tsx), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/stories/Close.stories.tsx)

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
import { Header, HeaderNav, HeaderNavItem } from "agnostic-vue";

export default {
  name: "HeaderExamples",
  components: {
    Header,
    HeaderNav,
    HeaderNavItem,
  },
};
</script>
<template>
  <h3 class="mbe12">Defaults to space between</h3>
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
  <p class="mbe16">Pass in <code>isHeaderContentStart</code> and apply
    <code>flex-fill</code> to the <code>HeaderNav</code> so it will grow.
  </p>
  <Header isHeaderContentStart>
    <template v-slot:logoleft>
      <a href="https://web.dev/">web.dev</a>
    </template>
    <template v-slot:headernav>
      <HeaderNav css="mis16 flex-fill">
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
    <code>flex-grow-0</code> to the <code>HeaderNav</code> so it doesn't grow.
  </p>
  <Header isHeaderContentEnd>
    <template v-slot:logoleft>
      <a
        class="flex-fill"
        href="https://web.dev/"
      >web.dev</a>
    </template>
    <template v-slot:headernav>
      <HeaderNav css="mie16 flex-grow-0">
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

Vue 3: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Header.vue), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/stories/Header.stories.js)

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

` "styles": ["dist/common.min.css"],`

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
  <ag-header>
    <a href="https://web.dev/">web.dev</a>
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
    <a href="https://www.freecodecamp.org/">freeCodeCamp</a>
  </ag-header>
  <ag-header isHeaderContentStart="true">
    <a href="https://web.dev/">web.dev</a>
    <ag-header-nav class="mis16 flex-fill">
      <ag-header-nav-item class="mie12">
        <a href="https://css-tricks.com/">CSS-Tricks</a> 
      </ag-header-nav-item>
      <ag-header-nav-item class="mis12 mie16">
        <a href="https://developer.mozilla.org/en-US/">MDN</a>
      </ag-header-nav-item>
    </ag-header-nav>
    <a href="https://www.freecodecamp.org/">freeCodeCamp</a>
  </ag-header>
  <ag-header isHeaderContentEnd="true">
    <a class="flex-fill" href="https://web.dev/">web.dev</a>
    <ag-header-nav>
      <ag-header-nav-item>
        <a href="https://css-tricks.com/">CSS-Tricks</a> 
      </ag-header-nav-item>
      <ag-header-nav-item class="mis12 mie16">
        <a href="https://developer.mozilla.org/en-US/">MDN</a>
      </ag-header-nav-item>
    </ag-header-nav>
    <a href="https://www.freecodecamp.org/">freeCodeCamp</a>
  </ag-header>
  </div>`,
})
export class YourComponent {}
```

Angular: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/header.component.ts), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/header.component.stories.ts)

<div class="mbe32"></div>

<div class="flex">
  <h3 id="svelte" tabindex="-1">
    <img src="/images/Svelte-icon.svg" alt="Svelte logo">Svelte
  </h3>
</div>
