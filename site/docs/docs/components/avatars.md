# Avatars

Avatars provide contextual notifications or messages with [timely information](https://www.w3.org/TR/wai-aria-practices/#Avatar).

<div class="mbe24"></div>

## Examples

<AvatarExamples />

<script setup>
import AvatarExamples from '../../components/AvatarExamples.vue'
import { Avatar, Alert } from "agnostic-vue";
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
import { Avatar } from 'agnostic-react';

const SvgIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      fillRule="evenodd"
      d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"
    />
  </svg>
);

export const YourComponent = () => (
  <>
    <Avatar text="AB" />
    <Avatar text="RL" size="small" />
    <Avatar text="RL" size="large" />
    <Avatar text="RL" size="xlarge" />
    <Avatar imgUrl="https://joeschmoe.io/api/v1/random" />
    <Avatar isTransparent imgUrl="https://joeschmoe.io/api/v1/random" />
    <Avatar>
      <SvgIcon />
    </Avatar>
    <Avatar isTransparent>
      <SvgIcon />
    </Avatar>
    <Avatar isSquare imgUrl="https://joeschmoe.io/api/v1/random" />
    <Avatar isRounded imgUrl="https://joeschmoe.io/api/v1/random" />
    <Avatar isSquare>
      <SvgIcon />
    </Avatar>
    <Avatar isRounded>
      <SvgIcon />
    </Avatar>
    <Avatar size="small" isRounded>
      <SvgIcon />
    </Avatar>
    <Avatar size="large" isRounded>
      <SvgIcon />
    </Avatar>
    <Avatar size="xlarge" isRounded>
      <SvgIcon />
    </Avatar>
    <AvatarGroup>
      <Avatar text="RL" />
      <Avatar text="HL" />
      <Avatar>
        <SvgIcon />
      </Avatar>
      <Avatar text="BL" />
      <Avatar text="CL" />
      <Avatar imgUrl="https://joeschmoe.io/api/v1/random" />
    </AvatarGroup>
  </>
);
```

React: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/Avatar.tsx), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/stories/Avatar.stories.tsx)

<div class="mbe32"></div>

<div class="flex">
  <h3 id="vue-3" tabindex="-1">
    <img src="/images/Vue-icon.svg" alt="Vue 3 logo">Vue 3
  </h3>
</div>


```vue
<template>
  <div class="mbs12 mbe16">
    <Avatar
      text="RL"
      size="small"
    ></Avatar>
    <Avatar text="AB"></Avatar>
    <Avatar
      text="RL"
      size="large"
    ></Avatar>
    <Avatar
      text="RL"
      size="xlarge"
    ></Avatar>
  </div>
  <div class="mbs12 mbe16">
    <Avatar imgUrl="https://joeschmoe.io/api/v1/random"></Avatar>
    <Avatar
      isTransparent
      imgUrl="https://joeschmoe.io/api/v1/random"
    ></Avatar>
    <Avatar
      type="success"
      imgUrl="https://joeschmoe.io/api/v1/random"
    ></Avatar>
    <Avatar
      type="info"
      imgUrl="https://joeschmoe.io/api/v1/random"
    ></Avatar>
  </div>
  <div class="mbs12 mbe16">
    <span class="mie6">
      <Avatar
        type="success"
        text="S"
      ></Avatar>
    </span>
    <span class="mie6">
      <Avatar
        type="info"
        text="I"
      ></Avatar>
    </span>
    <span class="mie6">
      <Avatar
        type="warning"
        text="W"
      ></Avatar>
    </span>
    <span class="mie6">
      <Avatar
        type="error"
        text="E"
      ></Avatar>
    </span>
  </div>
  <div class="mbe16">
    <!-- SVG icon slot -->
    <Avatar type="info">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"
        />
      </svg>
    </Avatar>
  </div>
  <h3 class="mbe16">Groups</h3>
  <div class="mbe16">
    <AvatarGroup>
      <Avatar text="AB"></Avatar>
      <Avatar text="CD"></Avatar>
      <Avatar text="WX"></Avatar>
      <Avatar text="YZ"></Avatar>
    </AvatarGroup>
  </div>
  <div class="mbe16">
    <AvatarGroup>
      <Avatar imgUrl="https://joeschmoe.io/api/v1/random"></Avatar>
      <Avatar imgUrl="https://joeschmoe.io/api/v1/random"></Avatar>
      <Avatar imgUrl="https://joeschmoe.io/api/v1/random"></Avatar>
      <Avatar imgUrl="https://joeschmoe.io/api/v1/random"></Avatar>
    </AvatarGroup>
  </div>
</template>
<script>
// Import AgnosticUI global common & component CSS
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Avatar } from "agnostic-vue";
export default {
  name: "your-component",
  components: { Avatar },
};
</script>
```

Vue 3: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Avatar.vue), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/stories/Avatar.stories.js)

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
  import { Avatar } from 'agnostic-svelte';
  let message = "Avatars should be used for timely information.";
</script>

<div>
  <div class="mbe16">
    <Avatar text="AB" />
    <Avatar
      text="RL"
      size="large"
    ></Avatar>
    <Avatar
      text="RL"
      size="xlarge"
    ></Avatar>
  </div>
  <div class="mbe16">
    <Avatar type="success">S</Avatar>
    <Avatar type="info">I</Avatar>
    <Avatar type="warning">W</Avatar>
    <Avatar type="error">E</Avatar>
  </div>
  <div class="mbe16">
    <Avatar>
      <MySvgIcon />
    </Avatar>
  </div>
  <div class="mbe16">
    <AvatarGroup>
      <Avatar text="S" type="success" />
      <Avatar text="E" type="error" />
      <Avatar text="W" type="warning" />
      <Avatar text="I" type="info" />
    </AvatarGroup>
  </div>
  <div class="mbe16">
    <AvatarGroup>
      <Avatar imgUrl="https://joeschmoe.io/api/v1/random"></Avatar>
      <Avatar imgUrl="https://joeschmoe.io/api/v1/random"></Avatar>
      <Avatar imgUrl="https://joeschmoe.io/api/v1/random"></Avatar>
      <Avatar imgUrl="https://joeschmoe.io/api/v1/random"></Avatar>
    </AvatarGroup>
  </div>
</div>
```

Svelte: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/Avatar/Avatar.svelte), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/Avatar/Avatar.stories.js)

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
  <ag-avatar text="AB"></ag-avatar>
  <ag-avatar text="RL" size="small"></ag-avatar>
  <ag-avatar text="RL" size="large"></ag-avatar>
  <ag-avatar text="RL" size="xlarge"></ag-avatar>
  <ag-avatar>
      <img src="https://joeschmoe.io/api/v1/random" class="avatar-image" alt="" />
  </ag-avatar>
  <ag-avatar isTransparent="true">
      <img src="https://joeschmoe.io/api/v1/random" class="avatar-image" alt="" />
  </ag-avatar>
  <ag-avatar>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z" />
      </svg>
  </ag-avatar>
  <ag-avatar isSquare="true">
      <img src="https://joeschmoe.io/api/v1/random" class="avatar-image" alt="" />
  </ag-avatar>
  <ag-avatar isRounded="true">
      <img src="https://joeschmoe.io/api/v1/random" class="avatar-image" alt="" />
  </ag-avatar>
  <ag-avatar isSquare="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z" />
      </svg>
  </ag-avatar>
</div>`,
})
export class YourComponent { //... }
```

Angular: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/avatar.component.ts), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/avatar.component.stories.ts)

<div class="mbe32"></div>

## Storybook

You can run the framework Storybooks and see live examples for React, Vue 3, Svelte, and Angular (experimental). The following will set this up locally:

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
