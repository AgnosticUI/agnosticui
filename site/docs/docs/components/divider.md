# Divider

The `Divider` component is used to visually separate content blocks into clear groups.

<div class="mbs24"></div>

<Alert type="warning">Note: Divider utilizes the natural width of the element. Therefore, if it is within a <code>flex-direction: column</code> flex container that has <code>align-items: center</code>, the divider will collapse.</Alert>

<div class="mbs24"></div>

## Examples

<div class="mbe24"></div>

<DividerExamples />

<script>
import DividerExamples from '../../components/DividerExamples.vue'
import { Alert } from "agnostic-vue";

export default {
  components: { Alert, DividerExamples }
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
import {
  Divider,
  DividerHeader,
  DividerBody,
  DividerFooter,
  Button
} from "agnostic-react";
export const YourComponent = () => (
  <section>
    <Divider />
    <Divider>Content</Divider>
    <Divider justify="start">Start</Divider>
    <Divider justify="end">End</Divider>
    <Divider type="success">Success</Divider>
    <Divider type="info">Info</Divider>
    <Divider type="warning">Warning</Divider>
    <Divider type="error">Error</Divider>
    <Divider size="small">Small</Divider>
    <Divider size="large">Large</Divider>
    <Divider size="xlarge">XLarge</Divider>
    <Divider type="info" size="small"><Button mode="primary" isBordered isRounded>Go</Button></Divider>
    <div className="flex mbs40 mbe48">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <Divider isVertical>Yes</Divider>
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
    </p>
    <Divider isVertical>Sir!</Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </section>
  </>
)
```

React: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/Divider.tsx), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/stories/Divider.stories.tsx)

<div class="mbe32"></div>

<div class="flex">
  <h3 id="vue-3" tabindex="-1">
    <img src="/images/Vue-icon.svg" alt="Vue 3 logo">Vue 3
  </h3>
</div>

```vue
<template>
  <section>
    <Divider>
      <template #dividerContent>
        Centered by default
      </template>
    </Divider>
    <Divider justify="start">
      <template #dividerContent>
        Justify start
      </template>
    </Divider>
    <Divider justify="end">
      <template #dividerContent>
        Justify end
      </template>
    </Divider>
    <Divider size="small">
      <template #dividerContent>
        Small
      </template>
    </Divider>
    <Divider size="large">
      <template #dividerContent>
        Large
      </template>
    </Divider>
    <Divider size="xlarge">
      <template #dividerContent>
        XLarge
      </template>
    </Divider>
    <Divider type="success">
      <template #dividerContent>
        Success
      </template>
    </Divider>
    <Divider type="info">
      <template #dividerContent>
        Info
      </template>
    </Divider>
    <Divider type="warning">
      <template #dividerContent>
        Warning
      </template>
    </Divider>
    <Divider type="error">
      <template #dividerContent>
        Error
      </template>
    </Divider>
    <Divider
      type="info"
      size="small"
    >
      <template #dividerContent>
        <Button
          mode="primary"
          is-bordered
          is-rounded
        >
          Go
        </Button>
      </template>
    </Divider>
    <div class="flex mbs40 mbe48">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <Divider is-vertical="true">
        <template #dividerContent>
          yes
        </template>
      </Divider>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
      <Divider is-vertical="true">
        <template #dividerContent>
          sir!
        </template>
      </Divider>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <p class="mbs16 mbe16">With no <code>dividerContent</code> slot:</p>
    <div class="flex mbs40 mbe48">
      <p>Vertical</p>
      <Divider is-vertical="true" />
      <p>Bars</p>
      <Divider is-vertical="true" />
      <p>Are Cool!</p>
    </div>
    <Divider />
    <div class="mbs16 mbe16">
      <Divider type="success"></Divider>
    </div>
    <div class="mbe16">
      <Divider type="info"></Divider>
    </div>
    <div class="mbe16">
      <Divider type="warning"></Divider>
    </div>
    <div class="mbe16">
      <Divider type="error"></Divider>
    </div>
    <div class="mbe16">
      <Divider size="small"></Divider>
    </div>
    <div class="mbe16">
      <Divider size="large"></Divider>
    </div>
    <div class="mbe16">
      <Divider size="xlarge"></Divider>
    </div>
  </section>
</template>
<script>
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Button, Divider } from "agnostic-vue";
export default {
  name: "DividerExamples",
  components: {
    Divider,
    Button,
  },
};
</script>
```

Vue 3: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Divider.vue), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/stories/Divider.stories.js)

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
  import { Button, Divider } from "agnostic-svelte";
</script>
<section class="mbe24">
  <div class="mbs16 mbe16">
    <Divider />
  </div>
  <div class="mbs16 mbe16">
    <Divider justify="start">
      <div slot="dividerContent">
        Start
      </div>
    </Divider>
  </div>
  <div class="mbs16 mbe16">
    <Divider justify="end">
      <div slot="dividerContent">
        End
      </div>
    </Divider>
  </div>
  <div class="mbs16 mbe16">
    <Divider size="small">
      <div slot="dividerContent">
        Small
      </div>
    </Divider>
  </div>
  <div class="mbs16 mbe16">
    <Divider size="large">
      <div slot="dividerContent">
        Large
      </div>
    </Divider>
  </div>
  <div class="mbs16 mbe16">
    <Divider size="xlarge">
      <div slot="dividerContent">
        XLarge
      </div>
    </Divider>
  </div>
  <div class="mbs16 mbe16">
    <Divider type="success">
      <div slot="dividerContent">
        Success
      </div>
    </Divider>
  </div>
  <div class="mbs16 mbe16">
    <Divider type="info">
      <div slot="dividerContent">
        Info
      </div>
    </Divider>
  </div>
  <div class="mbs16 mbe16">
    <Divider type="warning">
      <div slot="dividerContent">
        Warning
      </div>
    </Divider>
  </div>
  <div class="mbs16 mbe16">
    <Divider type="error">
      <div slot="dividerContent">
        Error
      </div>
    </Divider>
  </div>
  <p class="mbs16 mbe16">With no <code>dividerContent</code> slot:</p>
  <div class="mbs16 mbe16">
    <Divider type="success"></Divider>
  </div>
  <div class="mbe16">
    <Divider type="info"></Divider>
  </div>
  <div class="mbe16">
    <Divider type="warning"></Divider>
  </div>
  <div class="mbe16">
    <Divider type="error"></Divider>
  </div>
  <div class="mbe16">
    <Divider size="small"></Divider>
  </div>
  <div class="mbe16">
    <Divider size="large"></Divider>
  </div>
  <div class="mbe16">
    <Divider size="xlarge"></Divider>
  </div>
  <div class="flex mbe48">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <Divider isVertical="{true}">
      <div slot="dividerContent">
        yes
      </div>
    </Divider>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
    <Divider isVertical="{true}">
      <div slot="dividerContent">
        sir!
      </div>
    </Divider>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
  <p class="mbs16 mbe16">With no <code>dividerContent</code> slot:</p>
  <div class="flex mbe48">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <Divider isVertical="{true}"></Divider>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
    <Divider isVertical="{true}"></Divider>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
</section>
```

Svelte: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/Divider/Divider.svelte), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/Divider/Divider.stories.js)


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
  template: `<div class="mbs24 mbe24">
    <div class="mbe16">
      <ag-divider></ag-divider>
    </div>
    <div class="mbe16">
      <ag-divider justify="start"
                  [hasContent]="true">
        start
      </ag-divider>
    </div>
    <div class="mbe16">
      <ag-divider justify="end"
                  [hasContent]="true">end</ag-divider>
    </div>
    <div class="mbe16">
      <ag-divider type="success"
                  [hasContent]="true">success</ag-divider>
    </div>
    <div class="mbe16">
      <ag-divider type="info"
                  [hasContent]="true">info</ag-divider>
    </div>
    <div class="mbe16">
      <ag-divider type="warning"
                  [hasContent]="true">warning</ag-divider>
    </div>
    <div class="mbe16">
      <ag-divider type="error">
        <ag-divider type="error"
                    [hasContent]="true">error</ag-divider>
      </ag-divider>
    </div>
    <div class="mbe16">
      <ag-divider size="small"
                  [hasContent]="true">Small</ag-divider>
    </div>
    <div class="mbe16">
      <ag-divider size="large"
                  [hasContent]="true">Large</ag-divider>
    </div>
    <div class="mbs32 mbe40">
      <ag-divider size="xlarge"
                  [hasContent]="true">XLarge</ag-divider>
    </div>
    <div class="mbe16">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <ag-divider [hasContent]="true">yes</ag-divider>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
      <ag-divider [hasContent]="true">sir!</ag-divider>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div class="flex mbs32 mbe16">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <ag-divider [isVertical]="true"
                  [hasContent]="true">yes</ag-divider>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
      <ag-divider [isVertical]="true"
                  [hasContent]="true">sir!</ag-divider>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
    </div>
  </div>`
})
export class YourComponent {}
```

Angular: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/divider.component.ts), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/divider.component.stories.ts)

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
