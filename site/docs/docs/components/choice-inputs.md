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

<div class="flex mbs40 mbe24">
  <a href="https://astro.build/" class="flex-shrink-0" target="_blank"><img style="width: var(--fluid-80)" src="/images/astro-logo-light.svg" alt="astro logo"></a>
  <p class="mis16">React, Vue, and Svelte examples on a single playground page 🚀 💥</p>
</div>
<div class="playgrounds flex mbe32">
  <a class="btn btn-rounded" style="background-color: var(--agnostic-dark); color: var(--agnostic-light)" href="https://codesandbox.io/s/github/AgnosticUI/agnosticui/tree/master/playgrounds/Choices?file=/README.md" target="_blank">
    <img src="/images/codesandbox.svg" alt="codesandbox logo" class="mie8"> View in CodeSandbox
  </a>
  <a class="btn btn-rounded" style="background-color: var(--agnostic-primary); color: var(--agnostic-light)" href="https://stackblitz.com/github/AgnosticUI/agnosticui/tree/master/playgrounds/Choices?file=/README.md" target="_blank">
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
import { ChoiceInput } from "agnostic-react";

const opts = [
  {
    value: "daily",
    label: "Daily",
  },
  {
    value: "weekly",
    label: "Weekly",
  },
  {
    value: "monthly",
    label: "Monthly",
  },
];
const optionNames = ['frequency', 'schedule', 'howoften', 'when', 'letmeknow', 'whenz', 'often', 'freq', 'frekuency', 'whattimes']
const options = []
for (let i = 0; i < optionNames.length; i += 1) {
  const optionName = optionNames[i];
  const optionsWithNames = []
  opts.forEach(o => {
    const copy = Object.assign({}, o, { name: optionName })
    optionsWithNames.push(copy);
  })
  options.push(optionsWithNames);
}
const disabledOptions = ['weekly', 'monthly'];

export const YourComponent = () => (

  const handleChange = checkedItems => console.log(checkedItems)

  <section>
    <ChoiceInput
      id="1"
      type="checkbox"
      options={options[0]}
      legendLabel="Checkbox legend"
      onChange={ handleChange }
    />
    <ChoiceInput
      id="2"
      isDisabled
      type="checkbox"
      options={options[1]}
      legendLabel="Checkbox disabled"
      onChange={ handleChange }
    />
    <ChoiceInput
      id="3"
      disabledOptions={disabledOptions}
      type="checkbox"
      options={options[2]}
      legendLabel="Checkbox specific options disabled"
      onChange={ handleChange }
    />
    <ChoiceInput
      id="4"
      type="checkbox"
      isFieldset={false}
      options={options[3]}
      legendLabel="Checkbox fieldset hidden"
      onChange={ handleChange }
    />
    <ChoiceInput
      id="5"
      type="checkbox"
      isInline
      options={options[4]}
      legendLabel="Checkbox inline"
      onChange={ handleChange }
    />
    <ChoiceInput
      id="6"
      type="checkbox"
      isInline
      size="small"
      options={options[5]}
      legendLabel="Checkbox small"
      onChange={ handleChange }
    />
    <ChoiceInput
      id="7"
      type="checkbox"
      isInline
      size="large"
      options={options[6]}
      legendLabel="Checkbox large"
      onChange={ handleChange }
    />
    <ChoiceInput
      id="8"
      type="checkbox"
      isInline
      size="large"
      checkedOptions={["daily", "weekly"]}
      options={options[7]}
      legendLabel="Checkbox prechecked options"
      onChange={ handleChange }
    />
    <ChoiceInput
      id="10"
      type="radio"
      options={options[8]}
      legendLabel="Radio legend"
      onChange={ handleChange }
    />
    <ChoiceInput
      id="11"
      isDisabled
      type="radio"
      options={options[9]}
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
<script setup>
// Import AgnosticUI global common & component CSS
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { ChoiceInput } from "agnostic-vue";
const log = (message, extra) => console.log(message, extra)
</script>
<template>
  <section>
    <ChoiceInput
      id="r1"
      type="radio"
      legend-label="Radio"
      @change="(checkedOptions) => log('ChoiceInput (radio) checkedOptions:', checkedOptions)"
      :options="[
        { name: 'solo', value: 'stevie', label: 'Stevie Wonder' },
        { name: 'solo', value: 'whitney', label: 'Whitney Houston' },
        { name: 'solo', value: 'charlie', label: 'Charlie Wilson' },
      ]"
    />
    <ChoiceInput
      id="c1"
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
      id="c2"
      type="checkbox"
      legend-label="Checkbox with disabled options"
      :disabledOptions="['stones', 'isleybros']"
      @change="(checkedOptions) => log('ChoiceInput (checkbox) checkedOptions:', checkedOptions)"
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
  const opts = [
		{
			value: "daily",
			label: "Daily",
		},
		{
			value: "weekly",
			label: "Weekly",
		},
		{
			value: "monthly",
			label: "Monthly",
		},
	];
  const optionNames = ['frequency', 'schedule', 'howoften']
  const options = []
  for (let i = 0; i < optionNames.length; i += 1) {
    const optionName = optionNames[i];
    const optionsWithNames = []
    opts.forEach(o => {
      const copy = Object.assign({}, o, { name: optionName })
      optionsWithNames.push(copy);
    })
    options.push(optionsWithNames);
  }
</script>
<section>
  <ChoiceInput type="checkbox" isInline options={options[0]} />
  <ChoiceInput type="checkbox" options={options[1]}
    disabledOptions=["daily"] legendLabel="Checkbox with specific options disabled" />
  <ChoiceInput type="radio" isInline options={options[2]} />
  <ChoiceInput type="radio" size="large" legendLabel="Radio large"
    options={options[3]} checkedOptions=["weekly"] disabledOptions=["daily", "monthly"] />
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
