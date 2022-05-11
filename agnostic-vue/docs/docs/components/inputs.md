# Input

The `Input` component is text field that abstracts HTML5 native `<input>`'s and `<textarea>` elements.

<div class="mbs24"></div>

## Examples

<InputExamples />

<script setup>
import InputExamples from '../../components/InputExamples.vue'
import Alert from "../../../src/components/Alert.vue";
</script>

<div class="mbe32"></div>

## Usage

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

Vue 3: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Input.vue)
