# Choice Inputs

`ChoiceInput` component allows you to make choices via the `checkbox` and `radio` elements.

<div class="mbs24"></div>

## Navigation

As a baseline, let's have a look at some examples from the [Web Accessibility Initiative](https://www.w3.org/WAI/)…

### Checkboxes

Looking at the [wai-aria practices checkbox example](https://www.w3.org/WAI/tutorials/forms/grouping/#checkboxes) we see that the `TAB` key is used to tab into the group of checkbox elements, but, is also used to navigate <span class="quoted">within</span> those checkbox elements.

### Radios

Looking at the [wai-aria-practices radio example](https://www.w3.org/WAI/tutorials/forms/grouping/#radio-buttons) we see that the `TAB` key is used to tab into the group of radio elements; but then, the `Arrow` keys are used to navigate <span class="quoted">within</span> those radio elements.

<div class="mbs24"></div>

AgnosticUI's `ChoiceInput` uses the same keyboard navigation strategy as above.

## Examples

<div class="mbe24"></div>

<ChoiceInputExamples />

<script setup>
import ChoiceInputExamples from '../../components/ChoiceInputExamples.vue'
import { Alert } from "agnostic-vue";
</script>

<div class="mbe32"></div>

## Usage

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
import { ChoiceInput } from "agnostic-react";

const testOptions = [
  {
    name: "frequency",
    value: "daily",
    label: "Daily",
  },
  {
    name: "frequency",
    value: "weekly",
    label: "Weekly",
  },
  {
    name: "frequency",
    value: "monthly",
    label: "Monthly",
  },
];

const disabledOptions = ['weekly', 'monthly'];

export const YourComponent = () => (

  const handleChange = checkedItems => console.log(checkedItems)

  <section>
    <ChoiceInput
      id="1"
      type="checkbox"
      options={testOptions}
      legendLabel="Checkbox legend"
      onChange={ handleChange }
    />
    <ChoiceInput
      id="2"
      isDisabled
      type="checkbox"
      options={testOptions}
      legendLabel="Checkbox disabled"
      onChange={ handleChange }
    />
    <ChoiceInput
      id="3"
      disabledOptions={disabledOptions}
      type="checkbox"
      options={testOptions}
      legendLabel="Checkbox specific options disabled"
      onChange={ handleChange }
    />
    <ChoiceInput
      id="4"
      type="checkbox"
      isFieldset={false}
      options={testOptions}
      legendLabel="Checkbox fieldset hidden"
      onChange={ handleChange }
    />
    <ChoiceInput
      id="5"
      type="checkbox"
      isInline
      options={testOptions}
      legendLabel="Checkbox inline"
      onChange={ handleChange }
    />
    <ChoiceInput
      id="6"
      type="checkbox"
      isInline
      size="small"
      options={testOptions}
      legendLabel="Checkbox small"
      onChange={ handleChange }
    />
    <ChoiceInput
      id="7"
      type="checkbox"
      isInline
      size="large"
      options={testOptions}
      legendLabel="Checkbox large"
      onChange={ handleChange }
    />
    <ChoiceInput
      id="8"
      type="checkbox"
      isInline
      size="large"
      checkedOptions={["daily", "weekly"]}
      options={testOptions}
      legendLabel="Checkbox prechecked options"
      onChange={ handleChange }
    />
    <ChoiceInput
      id="10"
      type="radio"
      options={testOptions}
      legendLabel="Radio legend"
      onChange={ handleChange }
    />
    <ChoiceInput
      id="11"
      isDisabled
      type="radio"
      options={testOptions}
      legendLabel="Radio disabled"
      onChange={ handleChange }
    />
    <ChoiceInput
      id="12"
      disabledOptions={['two']}
      type="radio"
      options={[
        {
          name: 'numbers',
          value: 'one',
          label: 'one',
        },
        {
          name: 'numbers',
          value: 'two',
          label: 'two',
        },
        {
          name: 'numbers',
          value: 'three',
          label: 'three',
        },
      ]}
      legendLabel="Radio specific options disabled"
      onChange={ handleChange }
    />
    <ChoiceInput
      id="14"
      type="radio"
      isInline
      size="small"
      options={[
        {
          name: 'shape',
          value: 'square',
          label: 'Square',
        },
        {
          name: 'shape',
          value: 'circle',
          label: 'Circle',
        },
      ]}
      legendLabel="Radio small"
      onChange={ handleChange }
    />
    <ChoiceInput
      id="15"
      type="radio"
      isInline
      size="large"
      options={[
        {
          name: 'bands',
          value: 'bonjovi',
          label: 'Bon Jovi',
        },
        {
          name: 'bands',
          value: 'stones',
          label: 'Rolling Stones',
        },
        {
          name: 'bands',
          value: 'isleybros',
          label: 'Isley Brothers',
        },
      ]}
      legendLabel="Radio large"
      onChange={ handleChange }
    />
  </section>
);
```
</details>

React: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/ChoiceInput.tsx), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/stories/ChoiceInput.stories.tsx)

<div class="mbe32"></div>

<div class="flex">
  <h3 id="vue-3" tabindex="-1">
    <img src="/images/Vue-icon.svg" alt="Vue 3 logo">Vue 3
  </h3>
</div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```vue
<script>
// Import AgnosticUI global common & component CSS
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { ChoiceInput } from "agnostic-vue";

export default {
  name: "MyApp",
  components: {
    ChoiceInput,
  },
};
</script>
<template>
  <section>
    <ChoiceInput
      type="radio"
      legend-label="Radio"
      :options="[
        { name: 'solo', value: 'stevie', label: 'Stevie Wonder' },
        { name: 'solo', value: 'whitney', label: 'Whitney Houston' },
        { name: 'solo', value: 'charlie', label: 'Charlie Wilson' },
      ]"
    />
    <ChoiceInput
      type="checkbox"
      :options="[
        { name: 'bands', value: 'bonjovi', label: 'Bon Jovi' },
        { name: 'bands', value: 'stones', label: 'Rolling Stones' },
        { name: 'bands', value: 'isleybros', label: 'Isley Brothers' },
      ]"
      legend-label="Large"
      size="large"
      is-inline
    />
    <ChoiceInput
      type="checkbox"
      legend-label="Checkbox with disabled options"
      :disabledOptions="['stones', 'isleybros']"
      ,
      :options="[
        { name: 'bands', value: 'bonjovi', label: 'Bon Jovi'},
        { name: 'bands', value: 'stones', label: 'Rolling Stones' },
        { name: 'bands', value: 'isleybros', label: 'Isley Brothers' }
        { name: 'bands', value: 'parliament', label: 'Parliament-Funkadelic' }
      ]"
    />
  </section>
</template>
```
</details>

Vue 3: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/ChoiceInput.vue), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/stories/ChoiceInput.stories.js)

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
  import "agnostic-svelte/css/common.min.css";
  import { ChoiceInput } from "agnostic-svelte";
  let disabledOptions = ["monthly", "weekly"];
  let testOptions = [
    {
      name: "frequency",
      value: "daily",
      label: "Daily",
    },
    {
      name: "frequency",
      value: "weekly",
      label: "Weekly",
    },
    {
      name: "frequency",
      value: "monthly",
      label: "Monthly",
    },
  ];
</script>
<section>
  <ChoiceInput type="checkbox" isInline options={testOptions} />
  <ChoiceInput type="checkbox" options={testOptions}
    disabledOptions=["daily"] legendLabel="Checkbox with specific options disabled" />
  <ChoiceInput type="radio" isInline options={testOptions} />
  <ChoiceInput type="radio" size="large" legendLabel="Radio large"
    options={testOptions} checkedOptions=["weekly"] disabledOptions=["daily", "monthly"] />
</section>
```
</details>

Svelte: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/ChoiceInput/ChoiceInput.svelte), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/ChoiceInput/ChoiceInput.stories.js)

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
    <ag-choice-input
      type="checkbox"
      [options]="testOptions"
      legendLabel="Legend"
      (selected)="handleChange"
    ></ag-choice-input>
    <ag-choice-input
      type="checkbox"
      [isDisabled]="true"
      [options]="testOptions"
      legendLabel="Disabled"
      (selected)="handleChange"
    ></ag-choice-input>
    <ag-choice-input
      type="checkbox"
      [options]="testOptions"
      [disabledOptions]="disabledOptions"
      legendLabel="Specific options disabled"
      (selected)="handleChange"
    ></ag-choice-input>
    <ag-choice-input
      type="checkbox"
      [options]="testOptions"
      [disabledOptions]="disabledOptions"
      [isFieldset]="false"
      legendLabel="Fieldset hidden"
      (selected)="handleChange"
    ></ag-choice-input>
    <ag-choice-input
      type="checkbox"
      [options]="testOptions"
      [isInline]="true"
      legendLabel="Inline"
      (selected)="handleChange"
    ></ag-choice-input>
    <ag-choice-input
      type="checkbox"
      [options]="testOptions"
      [isInline]="true"
      size="small"
      legendLabel="Small"
      (selected)="handleChange"
    ></ag-choice-input>
    <ag-choice-input
      type="checkbox"
      [options]="testOptions"
      [isInline]="true"
      size="large"
      legendLabel="Large"
      (selected)="handleChange"
    ></ag-choice-input>
    <ag-choice-input
      type="checkbox"
      [options]="testOptions"
      checkedOptions="['daily', 'weekly']"
      [isInline]="true"
      size="large"
      legendLabel="Prechecked options"
      (selected)="handleChange"
    ></ag-choice-input>
    <ag-choice-input
      [options]="testOptions"
      [isSkinned]="false"
      [isInline]="true"
      legendLabel="Checkbox unskinned (fieldset and legend unstyled)"
      (selected)="handleChange"
    ></ag-choice-input>
    <h1 style="margin: 1rem 0;">Radios</h1>
    <ag-choice-input
      type="radio"
      [options]="testOptions"
      legendLabel="Radio legend"
      (selected)="handleChange"
    ></ag-choice-input>
    <ag-choice-input
      type="radio"
      [options]="testOptions"
      [isDisabled]="true"
      legendLabel="Disabled"
      (selected)="handleChange"
    ></ag-choice-input>
    <ag-choice-input
      type="radio"
      [options]="[{ name: 'numbers', value: 'one', label: 'one'}, { name: 'numbers', value: 'two', label: 'two' }, { name: 'numbers', value: 'three', label: 'three' }]"
      [disabledOptions]="['two']"
      legendLabel="Specific options disabled"
      (selected)="handleChange"
    ></ag-choice-input>
    <ag-choice-input
      type="radio"
      [options]="[{ name: 'es', value: 'uno', label: 'uno'}, { name: 'es', value: 'dos', label: 'dos' }, { name: 'es', value: 'tres', label: 'tres' }]"
      legendLabel="Fieldset hidden"
      [isFieldset]="false"
      (selected)="handleChange"
    ></ag-choice-input>
    <ag-choice-input
      type="radio"
      [options]="[{ name: 'colors', value: 'blue', label: 'Blue'}, { name: 'colors', value: 'red', label: 'Red' }, { name: 'colors', value: 'silver', label: 'Silver' }]"
      legendLabel="Inline"
      [isInline]="true"
      (selected)="handleChange"
    ></ag-choice-input>
    <ag-choice-input
      type="radio"
      [options]="[{ name: 'bands', value: 'bonjovi', label: 'Bon Jovi'}, { name: 'bands', value: 'stones', label: 'Rolling Stones' }, { name: 'bands', value: 'isleybros', label: 'Isley Brothers' }]"
      legendLabel="Large"
      size="large"
      [isInline]="true"
      (selected)="handleChange"
    ></ag-choice-input>
    <ag-choice-input
      type="radio"
      [options]="[{ name: 'solo', value: 'stevie', label: 'Stevie Wonder'}, { name: 'solo', value: 'whitney', label: 'Whitney Houston' }, { name: 'solo', value: 'charlie', label: 'Charlie Wilson' }]"
      [checkedOptions]="['charlie']"
      legendLabel="Prechecked option"
      size="large"
      [isInline]="true"
      (selected)="handleChange"
    ></ag-choice-input>
  </section>`
})
export class YourComponent {
  private disabledOptions: string[] = ['weekly', 'monthly'];
  private testOptions: string[] = [
    {
      name: 'frequency',
      value: 'daily',
      label: 'Daily',
    },
    {
      name: 'frequency',
      value: 'weekly',
      label: 'Weekly',
    },
    {
      name: 'frequency',
      value: 'monthly',
      label: 'Monthly',
    },
  ];
  handleChange(changedItems: string[]) {}
}
```
</details>

Angular: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/choice-input.component.ts), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/choice-input.component.stories.ts)

<div class="mbe32"></div>

## Storybook

You can run the framework Storybooks and see live examples for React, Vue 3, Svelte, and Angular (experimental). The following will set this up locally:

```shell
git clone git@github.com:AgnosticUI/agnosticui.git
cd agnosticui/<PACKAGE_NAME> && npm i # e.g. cd agnosticui/agnostic-react && npm i
# You can then run any of the top-level scripts:
npm run start:react # or cd agnostic-react && npm run storybook
npm run start:vue # or cd agnostic-vue && npm run storybook
npm run start:angular # or cd agnostic-angular && npm run storybook
npm run start:svelte # or cd agnostic-angular && npm run storybook
```

See [Running Storybook](https://github.com/AgnosticUI/agnosticui/blob/master/CONTRIBUTING.md#usage).
