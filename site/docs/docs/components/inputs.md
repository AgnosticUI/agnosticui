# Input

The `Input` component is text field that abstracts HTML5 native `<input>`'s and `<textarea>` elements.

<div class="mbs24"></div>

## Examples

<InputExamples />

<script setup>
import InputExamples from '../../components/InputExamples.vue'
import { Alert } from "agnostic-vue";
</script>

<div class="mbe32"></div>

## Usage

<div class="flex mbs40 mbe24">
  <a href="https://astro.build/" class="flex-shrink-0" target="_blank"><img style="width: var(--fluid-80)" src="/images/astro-logo-light.svg" alt="astro logo"></a>
  <p class="mis16">React, Vue, and Svelte examples on a single playground page 🚀 💥</p>
</div>
<div class="playgrounds flex mbe32">
  <a class="btn btn-rounded" style="background-color: var(--agnostic-dark); color: var(--agnostic-light)" href="https://codesandbox.io/s/github/AgnosticUI/agnosticui/tree/master/playgrounds/Inputs?file=/README.md" target="_blank">
    <img src="/images/codesandbox.svg" alt="codesandbox logo" class="mie8"> View in CodeSandbox
  </a>
  <a class="btn btn-rounded" style="background-color: var(--agnostic-primary); color: var(--agnostic-light)" href="https://stackblitz.com/github/AgnosticUI/agnosticui/tree/master/playgrounds/Inputs?file=/README.md" target="_blank">
    <img src="/images/stackblitz.svg" alt="Stackblitz logo" class="mie4"> View in Stackblitz
  </a>
</div>

<div class="flex">
  <h3 id="react" tabindex="-1">
    <img src="/images/React-Icon.svg" alt="react logo">React
  </h3>
</div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```jsx
import "agnostic-react/dist/common.min.css";
import "agnostic-react/dist/esm/index.css";
import { Input } from "agnostic-react";

export const YourComponent = () => (
  <>
    <h3 class="mbs40 mbe24">Inputs</h3>
    <section class="mbe24">
      <Input
        id="1"
        size="small"
        placeholder="Enter name…"
        label="Small input"
        type="text"
      />
    </section>
    <section class="mbe24">
      <Input
        id="2"
        placeholder="Enter name…"
        label="Default input"
        type="text"
      />
    </section>
    <section class="mbe24">
      <Input
        id="3"
        size="large"
        placeholder="Enter name…"
        label="Large input"
        type="text"
      />
    </section>
    <section class="mbe24">
      <Input
        id="4"
        isInline
        placeholder="Enter name…"
        label="Inline input"
        type="text"
      />
    </section>
    <section class="mbe24">
      <Input
        id="4"
        isRounded
        placeholder="Enter name…"
        label="Rounded input"
        type="text"
      />
    </section>
    <section class="mbe24">
      <Input
        id="6"
        isUnderlined
        placeholder="Enter name…"
        label="Underlined input"
        type="text"
      />
    </section>
    <section class="mbe24">
      <Input
        id="7"
        isUnderlined
        isUnderlinedWithBackground
        placeholder="Enter name…"
        label="Underlined with background"
        type="text"
      />
    </section>
    <section class="mbe24">
      <Input
        id="10"
        helpText="Some useful help text can go here"
        placeholder="Enter something…"
        label="Help text"
        type="text"
      />
    </section>
    <section class="mbe24">
      <Input
        id="9"
        isInvalid
        invalidText="It's impossible to have a string that is cool enough for this field."
        placeholder="Enter a very cool string…"
        label="Cool factor"
        type="text"
      />
    </section>
    <section class="mbe24">
      <Input
        id="10"
        hasLeftAddon
        addOnLeft={
          <Icon
            size={18}
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
        }
        hasRightAddon
        addOnRight={
          <Icon
            size={18}
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
        }
        label="Input with addons"
      />
    </section>
    <section class="mbe24">
      <Input
        id="11"
        label="Textarea"
        type="textarea"
      />
    </section>
    <section class="mbe24">
      <Input
        id="12"
        label="Textarea small"
        type="textarea"
        size="small"
        rows={10}
        cols={5}
      />
    </section>
    <section class="mbe24">
      <Input
        id="13"
        label="Textarea large"
        type="textarea"
        size="large"
        rows={10}
        cols={5}
      />
    </section>
  </>
```
</details>

React: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/Input.tsx), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/stories/Input.stories.tsx)

<div class="mbe32"></div>

<div class="flex">
  <h3 id="vue-3" tabindex="-1">
    <img src="/images/Vue-Icon.svg" alt="Vue 3 logo">Vue 3
  </h3>
</div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```vue
<script setup>
import { ref } from 'vue';
// Import AgnosticUI global common & component CSS
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Input, InputAddonItem } from "agnostic-vue";
const message = ref("");
const textAreaMessage = ref("");
</script>
<template>
  <section>
    <div class="h4"><code>v-model</code> test:</div>
    {{ message }}
    <Input
      id="1"
      v-model="message"
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
  <section class="mbe24">
    <div class="h4"><code>v-model</code> textarea test:</div>
    {{ textAreaMessage }}
    <Input
      v-model="textAreaMessage"
      id="11"
      label="Textarea"
      type="textarea"
    />
  </section>
  <section class="mbe24">
    <Input
      id="12"
      label="Textarea small"
      type="textarea"
      size="small"
      :rows="10"
      :cols="5"
    />
  </section>
  <section class="mbe24">
    <Input
      id="13"
      label="Textarea large"
      type="textarea"
      size="large"
      :rows="10"
      cols="5"
    />
  </section>
</template>
```
</details>

Vue 3: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Input.vue), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/stories/Input.stories.js)

<div class="mbe24"></div>


<div class="mbe32"></div>

<div class="flex">
  <h3 id="svelte" tabindex="-1">
    <img src="/images/Svelte-Icon.svg" alt="Svelte logo">Svelte
  </h3>
</div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<script>
  import 'agnostic-svelte/css/common.min.css';
  import { Input, InputAddonItem } from "agnostic-svelte";
  let valueText = '';
  let addonValueText = '';
  let textareaValueText = '';
</script>
<section>
  <div class="h4 w-100">Input</div>
  <div><code>bind:value</code> test: {valueText}</div>
  <Input bind:value={valueText} placeholder="type in here to verify bind:value" />
  <Input uniqueId="1" label="Default input" />
  <Input uniqueId="2" isRounded label="Rounded input" />
  <Input uniqueId="3" isUnderlined label="Underlined input" />
  <Input uniqueId="4" isUnderlined isUnderlinedWithBackground label="Underlined with background" />
  <Input uniqueId="5" isInline label="Inline input" />
  <Input uniqueId="6" size="small" label="Small input" />
  <Input uniqueId="7" size="large" label="Large input" />
  <Input uniqueId="8" helpText="Some useful help hint…" label="Large input" />
  <Input uniqueId="9" isInvalid invalidText="Some error hint…" label="Large input" />
  <div><code>bind:value</code> when using input addons: {addonValueText}</div>
  <Input
    bind:value={addonValueText}
    placeholder="type in here to verify bind:value"
    hasLeftAddon="{true}"
    hasRightAddon="{true}"
    id="10"
    label="Input with addons"
  >
    <div slot="addonLeft">
      <InputAddonItem addonLeft="{true}"><span>L</span></InputAddonItem>
    </div>
    <div slot="addonRight">
      <InputAddonItem addonRight="{true}"><span>R</span></InputAddonItem>
    </div>
  </Input>
  <p class="mbs24">Dynamic Input (#114)</p>
  <Input
    hasRightAddon={true}
    id="bug114"
    type={textIsVisible ? 'text' : 'password'}
    label="Password input toggle (visible / invisible)"
  >
    <div slot="addonRight">
      <InputAddonItem addonRight={true}>
        <Button isBlank on:click={toggleTextVisibility}>
          {#if textIsVisible}
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ion" width="1.125rem" height="1.125rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512" data-icon="ion:md-eye-off"><path d="M256.1 144.8c56.2 0 101.9 45.3 101.9 101.1 0 13.1-2.6 25.5-7.3 37l59.5 59c30.8-25.5 55-58.4 69.9-96-35.3-88.7-122.3-151.6-224.2-151.6-28.5 0-55.8 5.1-81.1 14.1l44 43.7c11.6-4.6 24.1-7.3 37.3-7.3zM52.4 89.7l46.5 46.1 9.4 9.3c-33.9 26-60.4 60.8-76.3 100.8 35.2 88.7 122.2 151.6 224.1 151.6 31.6 0 61.7-6.1 89.2-17l8.6 8.5 59.7 59 25.9-25.7L78.2 64 52.4 89.7zM165 201.4l31.6 31.3c-1 4.2-1.6 8.7-1.6 13.1 0 33.5 27.3 60.6 61.1 60.6 4.5 0 9-.6 13.2-1.6l31.6 31.3c-13.6 6.7-28.7 10.7-44.8 10.7-56.2 0-101.9-45.3-101.9-101.1 0-15.8 4.1-30.7 10.8-44.3zm87.8-15.7l64.2 63.7.4-3.2c0-33.5-27.3-60.6-61.1-60.6l-3.5.1z" fill="currentColor"></path></svg>
          {:else}
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ion" width="1.125rem" height="1.125rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512" data-icon="ion:md-eye"><path d="M256 105c-101.8 0-188.4 62.4-224 151 35.6 88.6 122.2 151 224 151s188.4-62.4 224-151c-35.6-88.6-122.2-151-224-151zm0 251.7c-56 0-101.8-45.3-101.8-100.7S200 155.3 256 155.3 357.8 200.6 357.8 256 312 356.7 256 356.7zm0-161.1c-33.6 0-61.1 27.2-61.1 60.4s27.5 60.4 61.1 60.4 61.1-27.2 61.1-60.4-27.5-60.4-61.1-60.4z" fill="currentColor"></path></svg>
          {/if}
        </Button>
      </InputAddonItem>
    </div>
  </Input>
  <div><code>bind:value</code> when using textarea: {textareaValueText}</div> 
  <Input type='textarea' bind:value={textareaValueText} placeholder="Textarea works with bind:value too!"></Input>
</section>
```
</details>

Svelte: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/Input/Input.svelte), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/Input/Input.stories.js)

<div class="flex">
  <h3 id="angular" tabindex="-1">
    <img src="/images/Angular-Icon.svg" alt="Angular logo">Angular (Experimental)
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
    <ag-input id="1"
              size="small"
              placeholder="Enter name…"
              label="Small input"
              type="text"></ag-input>
  </section>
  <section>
    <ag-input id="2"
              placeholder="Enter name…"
              label="Default input"
              type="text"></ag-input>
  </section>
  <section>
    <ag-input id="3"
              size="large"
              placeholder="Enter name…"
              label="Large input"
              type="text"></ag-input>
  </section>
  <section>
    <ag-input id="4"
              [isRounded]="true"
              placeholder="Enter name…"
              label="Rounded input"
              type="text"></ag-input>
  </section>
  <section>
    <ag-input id="5"
              [isUnderlined]="true"
              placeholder="Enter name…"
              label="Underlined input"
              type="text"></ag-input>
  </section>
  <section>
    <ag-input id="6"
              [isUnderlined]="true"
              [isUnderlinedWithBackground]="true"
              placeholder="Enter name…"
              label="Underlined with background"
              type="text"></ag-input>
  </section>
  <section>
    <ag-input id="7"
              helpText="Some useful help text can go here"
              placeholder="Enter name…"
              label="Help text"
              type="text"></ag-input>
  </section>
  <section>
    <ag-input id="8"
              [isInvalid]="true"
              invalidText="It's impossible to have a string that is cool enough for this field."
              placeholder="Enter a very cool string…"
              label="Cool factor"
              type="text"></ag-input>
  </section>
  <section>
    <ag-input id="9"
              [hasLeftAddon]="true"
              [hasRightAddon]="true"
              label="Input with addons"
              type="text">
      <div addOnLeft
           class="addOnLeft">
        <ag-icon [size]="18"
                 type="error">
          <svg xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 24 24"
               fill="currentColor">
            <path fill-rule="evenodd"
                  d="M21.03 5.72a.75.75 0 010 1.06l-11.5 11.5a.75.75 0 01-1.072-.012l-5.5-5.75a.75.75 0 111.084-1.036l4.97 5.195L19.97 5.72a.75.75 0 011.06 0z" />
          </svg>
        </ag-icon>
      </div>
      <div addOnRight
           class="addOnRight">
        <ag-icon [size]="18"
                 type="info">
          <svg xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 24 24"
               fill="currentColor">
            <path
                  d="M13 7.5a1 1 0 11-2 0 1 1 0 012 0zm-3 3.75a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v4.25h.75a.75.75 0 010 1.5h-3a.75.75 0 010-1.5h.75V12h-.75a.75.75 0 01-.75-.75z" />
            <path fill-rule="evenodd"
                  d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z" />
          </svg>
        </ag-icon>
      </div>
    </ag-input>
  </section>
  <section>
    <ag-input id="10"
              placeholder="Enter something…"
              label="Textarea"
              type="textarea">
    </ag-input>
  </section>
  <section>
    <ag-input id="11"
              placeholder="Enter something…"
              label="Textarea small"
              size="small"
              [rows]="10"
              [cols]="5"
              type="textarea">
    </ag-input>
  </section>
  <section>
    <ag-input id="12"
              placeholder="Enter something…"
              label="Textarea large"
              size="large"
              [rows]="10"
              [cols]="5"
              type="textarea">
    </ag-input>
  </section>
  <section>
    <ag-input id="10"
              placeholder="Enter something…"
              label="Textarea"
              type="textarea">
    </ag-input>
  </section>`
})
export class YourComponent {}
```
</details>

Angular: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/input.component.ts), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/input.component.stories.ts)

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
