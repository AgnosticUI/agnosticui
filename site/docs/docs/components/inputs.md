# Input

The `Input` component is TBD 

<div class="mbs24"></div>

## Examples

<InputExamples />

<script>
import InputExamples from '../../components/InputExamples.vue'
import { Alert } from "agnostic-vue";

export default {
  components: { Alert, InputExamples }
}
</script>

<div class="mbe32"></div>

## Usage

<div class="flex">
  <h3 id="react" tabindex="-1">
    <img src="/images/React-Icon.svg" alt="react logo">React
  </h3>
</div>

```jsx
import "agnostic-react/dist/common.min.css";
import "agnostic-react/dist/esm/index.css";
import { Input } from "agnostic-react";
TBD
```

React: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/Input.tsx), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/stories/Input.stories.tsx)

<div class="mbe32"></div>

<div class="flex">
  <h3 id="vue-3" tabindex="-1">
    <img src="/images/Vue-Icon.svg" alt="Vue 3 logo">Vue 3
  </h3>
</div>

```vue
<script>
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Input, InputAddonItem } from "agnostic-vue";

export default {
  name: "InputExamples",
  components: {
    Input,
    InputAddonItem,
  },
};
</script>
<template>
  <section>
    <Input
      id="1"
      size="small"
      placeholder="Enter name…"
      label="Small input"
      type="text"
    />
  </section>
  <section>
    <Input
      id="2"
      placeholder="Enter name…"
      label="Default input"
      type="text"
    />
  </section>
  <section>
    <Input
      id="3"
      size="large"
      placeholder="Enter name…"
      label="Large input"
      type="text"
    />
  </section>

  <section>
    <Input
      id="4"
      is-inline
      placeholder="Enter name…"
      label="Inline input"
      type="text"
    />
  </section>
  <section>
    <Input
      id="4"
      is-rounded
      placeholder="Enter name…"
      label="Rounded input"
      type="text"
    />
  </section>
  <section>
    <Input
      id="6"
      is-underlined
      placeholder="Enter name…"
      label="Underlined input"
      type="text"
    />
  </section>
  <section>
    <Input
      id="7"
      is-underlined
      is-underlined-with-background
      placeholder="Enter name…"
      label="Underlined with background"
      type="text"
    />
  </section>
  <section>
    <Input
      id="10"
      help-text="Some useful help text can go here"
      placeholder="Enter something…"
      label="Help text"
      type="text"
    />
  </section>
  <section>
    <Input
      id="9"
      is-invalid
      invalid-text="It's impossible to have a string that is cool enough for this field."
      placeholder="Enter a very cool string…"
      label="Cool factor"
      type="text"
    />
  </section>
  <section>
    <Input
      id="8"
      v-model="name"
      has-left-addon
      has-right-addon
      label="Input with addons"
    >
    <template #addonLeft>
      <InputAddonItem addon-left>
        <Icon
          :size="18"
          type="success"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M21.03 5.72a.75.75 0 010 1.06l-11.5 11.5a.75.75 0 01-1.072-.012l-5.5-5.75a.75.75 0 111.084-1.036l4.97 5.195L19.97 5.72a.75.75 0 011.06 0z"
            />
          </svg>
        </Icon>
      </InputAddonItem>
    </template>
    <template #addonRight>
      <InputAddonItem addon-right>
        <Icon
          :size="18"
          type="info"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M13 7.5a1 1 0 11-2 0 1 1 0 012 0zm-3 3.75a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v4.25h.75a.75.75 0 010 1.5h-3a.75.75 0 010-1.5h.75V12h-.75a.75.75 0 01-.75-.75z" />
            <path
              fill-rule="evenodd"
              d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"
            />
          </svg>
        </Icon>
      </InputAddonItem>
    </template>
    </Input>
  </section>
</template>
```

Vue 3: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Input.vue), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/stories/Input.stories.js)

<div class="mbe24"></div>

<Alert type="warning">Note: Vue 2 is not supported</Alert>

<div class="mbe32"></div>

<div class="flex">
  <h3 id="angular" tabindex="-1">
    <img src="/images/Angular-Icon.svg" alt="Angular logo">Angular
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
   TBD 
  </section>`
})
export class YourComponent {}
```


Angular: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/input.component.ts), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/input.component.stories.ts)

<div class="mbe32"></div>

<div class="flex">
  <h3 id="svelte" tabindex="-1">
    <img src="/images/Svelte-Icon.svg" alt="Svelte logo">Svelte
  </h3>
</div>

```html
<script>
  import "../node_modules/agnostic-svelte/dist/common.min.css";
  import { Input } from "agnostic-svelte";
</script>
tbd
```

Svelte: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/stories/Input.svelte), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/stories/Input.stories.js)

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
