# Table

The `Table` component is used to display tabular formatted data appropriately.

<div class="mbs24"></div>

## Examples

<div class="mbe24"></div>

<TableExamples />

<script>
import TableExamples from '../../components/TableExamples.vue'
import { Alert } from "agnostic-vue";

export default {
  components: { Alert, TableExamples }
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
import { Table  } from "agnostic-react";

const headersWithWidths = [
  {
    label: 'Name',
    key: 'name',
    width: '25%',
    sortable: true,
  },
  {
    label: 'Weapon',
    key: 'weapon',
    width: '45%',
  },
  {
    label: 'Grand Slams',
    key: 'slams',
    width: '13%',
    sortable: true,
    renderFn: (key, value) => (
      <td key={key} style={{ textAlign: 'center' }}>
        {value}
        <span className="mis6">🏆</span>
      </td>
    ),
  },
  {
    label: 'Birthdate',
    key: 'birthdate',
    width: '17%',
    sortable: true,
    sortFn: (a, b) => {
      const d1 = new Date(a).getTime() || -Infinity;
      const d2 = new Date(b).getTime() || -Infinity;
      if (d1 > d2) {
        return 1;
      }
      if (d1 < d2) {
        return -1;
      }
      return 0;
    },
  },
];

const createRow = (name, weapon, slams, birthdate) => ({ name, weapon, slams, birthdate });

const rows = [
  createRow(
    'Serena Williams',
    "Biggest serve in women's tennis all-time",
    23,
    'September 26, 1981',
  ),
  createRow('Roger Federer', 'Forehand and serve', 20, 'August 8, 1981'),
  createRow('Andre Agassi', 'Return of serve. Groundstrokes', 8, 'April 29, 1970'),
  createRow('Steffi Graf', 'Forehand', 22, 'June 14, 1969')
];

export const YourComponent = () => (
  <section className="mbe24">
    <Table
      headers={headersWithWidths}
      rows={rows}
      isStriped
      caption="Tennis Superstars"
    />
  </section>
);
```

React: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/Table.tsx), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/stories/Table.stories.tsx)

<div class="mbe32"></div>

<div class="flex">
  <h3 id="vue-3" tabindex="-1">
    <img src="/images/Vue-icon.svg" alt="Vue 3 logo">Vue 3
  </h3>
</div>

```vue
<script>
// Import the required AgnosticUI global common and component CSS
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Table } from "agnostic-vue";

const createRow = (name, weapon, slams, birthdate) => ({
  name,
  weapon,
  slams,
  birthdate,
});

export default {
  name: "TagExamples",
  components: {
    Table,
  },
  data() {
    return {
      rows: [
        createRow("Roger Federer", "Forehand and serve", 20, "August 8, 1981"),
        createRow(
          "Andre Agassi",
          "Return of serve. Groundstrokes",
          8,
          "April 29, 1970"
        ),
        createRow("Steffi Graf", "Forehand", 22, "June 14, 1969"),
        createRow(
          "Martina Navratilova",
          "Serve and volley",
          18,
          "October 18, 1956"
        ),
        createRow("Rafael Nadal", "Backhand and speed", 20, "June 3, 1986"),
        createRow(
          "Althea Gibson",
          "Speed, strength, and fluidity ",
          11,
          "August 25, 1927"
        ),
        createRow("Novak Djokovic", "Backhand and speed", 20, "May 22, 1987"),
        createRow("Arthur Ashe", "Serve and volley", 3, "July 10, 1943"),
      ],
      headers: [
        {
          label: "Name",
          key: "name",
          width: "25%",
          sortable: true,
        },
        {
          label: "Weapon",
          key: "weapon",
          width: "35%",
        },
        {
          label: "Grand Slams",
          key: "slams",
          width: "13%",
          sortable: true,
          // Only use this approach for trusted input that you control
          renderFn: (value) =>
            `<div class="text-center">${value}<span class="mis6">🏆</span></div>`,
        },
        {
          label: "Birthdate",
          key: "birthdate",
          sortable: true,
          sortFn: (a, b) => {
            // Naive date comparisons; but we're controlling data so ;-)
            const d1 = new Date(a).getTime() || -Infinity;
            const d2 = new Date(b).getTime() || -Infinity;
            if (d1 > d2) {
              return 1;
            }
            if (d1 < d2) {
              return -1;
            }
            return 0;
          },
        },
      ],
    };
  },
};
</script>
<template>
  <section class="mbs24 mbe16">
    <Table
      :rows="rows"
      :headers="headers"
      :isHoverable="true"
      caption="My caption test"
    />
  </section>
</template>
```

Vue 3: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Table.vue), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/stories/Table.stories.js)

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
    <ag-table [headers]="[ { label: 'Name', key: 'name', width: '85%', sortable: true }, { label: 'Grand Slams', key: 'slams', width: '15%', sortable: true }]"
              [rows]="[{ name: 'Serena Williams', slams: 23}, { name: 'Roger Federer', slams: 20}, { name: 'Althea Gibson', slams: 11}, { name: 'Andre Agassi', slams: 8}]"
              [rowRenderTemplate]="rowRenderTemplate"
              [isHoverable]="true"
              caption="Tennis Superstars">
      <ng-template #rowRenderTemplate
                   let-row
                   let-idx="index">
        <div *ngIf="idx === 1; else simple">{{row}}<span class="mis6">🏆</span></div>
        <ng-template #simple>
          {{row}}
        </ng-template>
      </ng-template>
    </ag-table>
  </section>`
})
export class YourComponent {}
```


Angular: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/table.component.ts), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/table.component.stories.ts)

<div class="mbe32"></div>

<div class="flex mbe16">
  <h3 id="svelte" tabindex="-1">
    <img src="/images/Svelte-icon.svg" alt="Svelte logo">Svelte
  </h3>
</div>

<div class="mbe12"></div>


```html
<script>
  import 'agnostic-svelte/dist/common.min.css';
  import { Table } from "agnostic-svelte";
  import CustomCellRenderer from "path/to/CustomCellRenderer.svelte";

  const createRow = (name, weapon, slams, birthdate) => ({
    name,
    weapon,
    slams,
    birthdate,
  });

  const tableArgs = {
    rows: [
      createRow("Roger Federer", "Forehand and serve", 20, "August 8, 1981"),
      createRow(
        "Andre Agassi",
        "Return of serve. Groundstrokes",
        8,
        "April 29, 1970"
      ),
      createRow("Steffi Graf", "Forehand", 22, "June 14, 1969"),
      createRow(
        "Martina Navratilova",
        "Serve and volley",
        18,
        "October 18, 1956"
      ),
      createRow("Rafael Nadal", "Backhand and speed", 20, "June 3, 1986"),
      createRow(
        "Althea Gibson",
        "Speed, strength, and fluidity ",
        11,
        "August 25, 1927"
      ),
      createRow("Novak Djokovic", "Backhand and speed", 20, "May 22, 1987"),
      createRow("Arthur Ashe", "Serve and volley", 3, "July 10, 1943"),
    ],
    headers: [
      {
        label: 'Name',
        key: 'name',
        width: '25%',
        sortable: true,
      },
      {
        label: 'Weapon',
        key: 'weapon',
        width: '45%',
      },
      {
        label: 'Grand Slams',
        key: 'slams',
        width: '10%',
        sortable: true,
        renderComponent: () => CustomCellRenderer
      },
      {
        label: "Birthdate",
        key: "birthdate",
        width: '20%',
        sortable: true,
        sortFn: (a, b) => {
          const d1 = new Date(a).getTime() || -Infinity;
          const d2 = new Date(b).getTime() || -Infinity;
          if (d1 > d2) {
            return 1;
          }
          if (d1 < d2) {
            return -1;
          }
          return 0;
        },
      },
    ],
    caption: "Tennis Superstars",
  }
</script>
<Table {...tableArgs} />
```

Svelte: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/Table/Table.svelte), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/Table/Table.stories.js)

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
