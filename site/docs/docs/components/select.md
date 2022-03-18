# Select

The `Select` component is a wrapper around the native `<select>` element with refinements made to its initial appearance. `Select` is best to use if when there are 4 or more options.

<div class="mbs24"></div>

## Examples

<div class="mbe24"></div>

<SelectExamples />

<script>
import SelectExamples from '../../components/SelectExamples.vue'
import { Alert } from "agnostic-vue";

export default {
  components: { Alert, SelectExamples }
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
import { Select } from "agnostic-react";
export const YourComponent = () => (
  <>
    <h2 class="mbs32">Select</h2>
    <div class="mbs12 mbe16">
      <Select
        options={[{ value: 'andre', label: 'Andre Agassi' }, { value: 'serena', label: 'Serena Williams'} , { value: 'mac', label: 'John McEnroe'}, { value: 'borg', label: 'Bjorn Borg'}, { value: 'althea', label: 'Althea Gibson'}, { value: 'roger', label: 'Roger Federer'}]}
        uniqueId="sel1"
        name="select1"
        labelCopy="Select the best tennis player of all time"
      />
    </div>
    <h2>Customize the first option's text copy</h2>
    <div class="mbe16">
      <p className="mbe24">
        Pass <code>defaultOptionLabel</code> to specify the text copy to use for the first option
      </p>
      <Select
        defaultOptionLabel="Select your favorite tennis player"
        options={[{ value: 'andre', label: 'Andre Agassi' }, { value: 'serena', label: 'Serena Williams'} , { value: 'mac', label: 'John McEnroe'}, { value: 'borg', label: 'Bjorn Borg'}, { value: 'althea', label: 'Althea Gibson'}, { value: 'roger', label: 'Roger Federer'}]}
        uniqueId="sel1b"
        name="select1b"
        labelCopy="Select the best tennis player of all time"
      />
    </div>
    <h2>Disabled select</h2>
    <div class="mbs12 mbe16">
      <Select
        is-disabled
        options={[{ value: 'andre', label: 'Andre Agassi' }]}
        uniqueId="sel2"
        name="select2"
        labelCopy="Select -- example disabled"
      />
    </div>
    <h2>Small select</h2>
    <div class="mbs12 mbe16">
      <Select
        size="small"
        options={[{ value: 'andre', label: 'Andre Agassi' }, { value: 'serena', label: 'Serena Williams'} , { value: 'mac', label: 'John McEnroe'}, { value: 'borg', label: 'Bjorn Borg'}, { value: 'althea', label: 'Althea Gibson'}, { value: 'roger', label: 'Roger Federer'}]}
        uniqueId="sel3"
        name="select3"
        labelCopy="Select the best tennis player of all time"
      />
    </div>
    <h2>Large select</h2>
    <div class="mbs12 mbe16">
      <Select
        size="large"
        options={[{ value: 'andre', label: 'Andre Agassi' }, { value: 'serena', label: 'Serena Williams'} , { value: 'mac', label: 'John McEnroe'}, { value: 'borg', label: 'Bjorn Borg'}, { value: 'althea', label: 'Althea Gibson'}, { value: 'roger', label: 'Roger Federer'}]}
        uniqueId="sel4"
        name="select4"
        labelCopy="Select the best tennis player of all time"
      />
    </div>
    <h2>Multiple select size 4</h2>
    <div class="mbs12 mbe16">
      <Select
        isMultiple={true}
        multipleSize="4"
        options={[{ value: 'andre', label: 'Andre Agassi' }, { value: 'serena', label: 'Serena Williams'} , { value: 'mac', label: 'John McEnroe'}, { value: 'borg', label: 'Bjorn Borg'}, { value: 'althea', label: 'Althea Gibson'}, { value: 'roger', label: 'Roger Federer'}]}
        uniqueId="sel4"
        name="select4"
        labelCopy="Select the best tennis player of all time"
      />
    </div>
  </>
)
```

React: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/Select.tsx), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/stories/Select.stories.tsx)

<div class="mbe32"></div>

<div class="flex">
  <h3 id="vue-3" tabindex="-1">
    <img src="/images/Vue-icon.svg" alt="Vue 3 logo">Vue 3
  </h3>
</div>

```vue
<script>
// Import AgnosticUI global common & component CSS
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Select } from "agnostic-vue";

export default {
  name: "SelectExamples",
  components: {
    Select,
  },
};
</script>
<template>
  <h2>Select</h2>
  <div class="mbs12 mbe16">
    <Select
      :options="[{ value: 'andre', label: 'Andre Agassi' }, { value: 'serena', label: 'Serena Williams'} , { value: 'mac', label: 'John McEnroe'}, { value: 'borg', label: 'Bjorn Borg'}, { value: 'althea', label: 'Althea Gibson'}, { value: 'roger', label: 'Roger Federer'}]"
      unique-id="sel1"
      name="select1"
      label-copy="Select the best tennis player of all time"
    />
  </div>
  <h2>Customize the first option's text copy</h2>
  <div class="mbe16">
    <p className="mbe24">
      Pass <code>default-option-label</code> to specify the text copy to use for the first option
    </p>
    <Select
      default-option-label="Select your favorite tennis player"
      :options="[{ value: 'andre', label: 'Andre Agassi' }, { value: 'serena', label: 'Serena Williams'} , { value: 'mac', label: 'John McEnroe'}, { value: 'borg', label: 'Bjorn Borg'}, { value: 'althea', label: 'Althea Gibson'}, { value: 'roger', label: 'Roger Federer'}]"
      unique-id="sel1b"
      name="select1b"
      label-copy="Select the best tennis player of all time"
    />
  </div>
  <h2>Disabled select</h2>
  <div class="mbs12 mbe16">
    <Select
      is-disabled
      :options="[{ value: 'andre', label: 'Andre Agassi' }]"
      unique-id="sel2"
      name="select2"
      label-copy="Select -- example disabled"
    />
  </div>
  <h2>Small select</h2>
  <div class="mbs12 mbe16">
    <Select
      size="small"
      :options="[{ value: 'andre', label: 'Andre Agassi' }, { value: 'serena', label: 'Serena Williams'} , { value: 'mac', label: 'John McEnroe'}, { value: 'borg', label: 'Bjorn Borg'}, { value: 'althea', label: 'Althea Gibson'}, { value: 'roger', label: 'Roger Federer'}]"
      unique-id="sel3"
      name="select3"
      label-copy="Select the best tennis player of all time"
    />
  </div>
  <h2>Large select</h2>
  <div class="mbs12 mbe16">
    <Select
      size="large"
      :options="[{ value: 'andre', label: 'Andre Agassi' }, { value: 'serena', label: 'Serena Williams'} , { value: 'mac', label: 'John McEnroe'}, { value: 'borg', label: 'Bjorn Borg'}, { value: 'althea', label: 'Althea Gibson'}, { value: 'roger', label: 'Roger Federer'}]"
      unique-id="sel4"
      name="select4"
      label-copy="Select the best tennis player of all time"
    />
  </div>
  <h2>Multiple select size 4</h2>
  <div class="mbs12 mbe16">
    <Select
      :is-multiple="true"
      :multiple-size="4"
      :options="[{ value: 'andre', label: 'Andre Agassi' }, { value: 'serena', label: 'Serena Williams'} , { value: 'mac', label: 'John McEnroe'}, { value: 'borg', label: 'Bjorn Borg'}, { value: 'althea', label: 'Althea Gibson'}, { value: 'roger', label: 'Roger Federer'}]"
      unique-id="sel4"
      name="select4"
      label-copy="Select the best tennis player of all time"
    />
  </div>
</template>
```


Vue 3: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Select.vue), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/stories/Select.stories.js)

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
  import { Select } from "agnostic-svelte";
</script>
<section class="component-container">
  <h2>Select default</h2>
  <Select
    uniqueId="sel1"
    name="select1"
    labelCopy="Select the best tennis player of all time"
    options={tennisOptions}
  />
  <h2>Select default option customized</h2>
  <Select
    uniqueId="sel2"
    name="select2"
    labelCopy="Select the best tennis player of all time"
    defaultOptionLabel="Select your favorite tennis player of all-time"
    options={tennisOptions}
  />
  <h2>Select disabled</h2>
  <Select
    uniqueId="sel3"
    name="select3"
    isDisabled={true}
    labelCopy="Select the best tennis player of all time"
    defaultOptionLabel="Select your favorite tennis player of all-time"
    options={tennisOptions}
  />
  <h2>Select small</h2>
  <Select
    uniqueId="sel3"
    name="select3"
    size="small"
    labelCopy="Select the best tennis player of all time"
    defaultOptionLabel="Select your favorite tennis player of all-time"
    options={tennisOptions}
  />
  <h2>Select large</h2>
  <Select
    uniqueId="sel3"
    name="select3"
    size="large"
    labelCopy="Select the best tennis player of all time"
    defaultOptionLabel="Select your favorite tennis player of all-time"
    options={tennisOptions}
  />
</section>
```

Svelte: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/Select/Select.svelte), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/Select/Select.stories.js)


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
  template: `<section>
    <h2>Select</h2>
    <ag-select uniqueId="sel1"
              name="select1"
              labelCopy="Select the best tennis player of all time"
              [options]="[
      { value: 'andre', label: 'Andre Agassi' },
      { value: 'serena', label: 'Serena Williams' },
      { value: 'mac', label: 'John McEnroe' },
      { value: 'borg', label: 'Bjorn Borg' },
      { value: 'althea', label: 'Althea Gibson' },
      { value: 'roger', label: 'Roger Federer' },
      ]"></ag-select>
  </section>
  <section>
    <h2>Select first option custom label</h2>
    <ag-select uniqueId="sel2"
              name="select2"
              defaultOptionLabel="Select your favorite tennis player"
              labelCopy="Select the best tennis player of all time"
              [options]="[
      { value: 'andre', label: 'Andre Agassi' },
      { value: 'serena', label: 'Serena Williams' },
      { value: 'mac', label: 'John McEnroe' },
      { value: 'borg', label: 'Bjorn Borg' },
      { value: 'althea', label: 'Althea Gibson' },
      { value: 'roger', label: 'Roger Federer' },
      ]"></ag-select>
  </section>
  <section>
    <h2>Select disabled</h2>
    <ag-select uniqueId="sel3"
              name="select3"
              [isDisabled]="true"
              defaultOptionLabel="Select your favorite tennis player"
              labelCopy="Select the best tennis player of all time"
              [options]="[
      { value: 'andre', label: 'Andre Agassi' }
      ]"></ag-select>
  </section>
  <section>
    <h2>Select small</h2>
    <ag-select uniqueId="sel4"
              name="select4"
              size="small"
              defaultOptionLabel="Select your favorite tennis player"
              labelCopy="Select the best tennis player of all time"
              [options]="[
              { value: 'andre', label: 'Andre Agassi' },
              { value: 'serena', label: 'Serena Williams' },
              { value: 'mac', label: 'John McEnroe' },
              { value: 'borg', label: 'Bjorn Borg' },
              { value: 'althea', label: 'Althea Gibson' },
              { value: 'roger', label: 'Roger Federer' },
              ]"></ag-select>
  </section>
  <section>
    <h2>Select large</h2>
    <ag-select uniqueId="sel5"
              name="select5"
              size="large"
              defaultOptionLabel="Select your favorite tennis player"
              labelCopy="Select the best tennis player of all time"
              [options]="[
              { value: 'andre', label: 'Andre Agassi' },
              { value: 'serena', label: 'Serena Williams' },
              { value: 'mac', label: 'John McEnroe' },
              { value: 'borg', label: 'Bjorn Borg' },
              { value: 'althea', label: 'Althea Gibson' },
              { value: 'roger', label: 'Roger Federer' },
              ]"></ag-select>
  </section>
  <section>
    <h2>Select multiple</h2>
    <ag-select uniqueId="sel6"
              name="select6"
              size="large"
              [isMultiple]="true"
              [multipleSize]="4"
              defaultOptionLabel="Select your favorite tennis player"
              labelCopy="Select the best tennis player of all time"
              [options]="[
              { value: 'andre', label: 'Andre Agassi' },
              { value: 'serena', label: 'Serena Williams' },
              { value: 'mac', label: 'John McEnroe' },
              { value: 'borg', label: 'Bjorn Borg' },
              { value: 'althea', label: 'Althea Gibson' },
              { value: 'roger', label: 'Roger Federer' },
              ]">
    </ag-select>
  </section>
  `
})
export class YourComponent {}
```


Angular: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/select.component.ts), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/select.component.stories.ts)

<div class="mbe32"></div>

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
