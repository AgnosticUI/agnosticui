# Cards

`Cards` are essentialy flexbox-based boxes that take up their container's width.
These cards are set up as [media query-less responsive cards](https://css-tricks.com/how-to-make-a-media-query-less-card-component/#a-recipe-for-zero-media-queries) that leverage the behavior of `flex-wrap`. As such, it's up to you to set an the `flex-basis` properties so that your content will stack (aka wrap) when the viewport cannot accomodate your content otherwise.

<div class="mbs24"></div>

## Examples

<div class="mbe24"></div>

<CardExamples />

<div class="mbe24"></div>

<script setup>
import CardExamples from '../../components/CardExamples.vue'
import { Alert } from "agnostic-vue";
</script>

## Usage

<div class="flex">
  <h3 id="react" tabindex="-1">
    <img src="/images/React-icon.svg" alt="react logo">React
  </h3>
</div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```jsx
import 'agnostic-react/dist/common.min.css';
import 'agnostic-react/dist/esm/index.css';
import { Card } from 'agnostic-react';

export const YourComponent = () => (
  <section>
    <Card isBorder>
      <>
        <div className="p16">Border Card</div>
        <div className="p16 flex-grow-1 flex-shrink-1" style={{flexBasis: "50ch"}}>
          The card comes with minimal
          <span class="quoted">skinning css</span>
          and no padding (the padding you see here is from the demo styles).
          By default Cards have a flex direction of <i>row</i>, so each child
          with a <i>flex</i> rule will get placed as a sort of column
          in the row (until the viewport is shrunk below a size that can support
          the content's flex-basis; under that it will wrap and thus stack).
        </div>
      </>
    </Card>
    <div className="mbe24" />
    <Card isBorder isRounded>
      <>
        <div className="p16">Border & Rounded</div>
        <div className="p16 flex-grow-1 flex-shrink-1" style={{flexBasis: "50ch"}}>
          The card comes with minimal
          <span class="quoted">skinning css</span>
          and no padding (the padding you see here is from the demo styles).
          By default Cards have a flex direction of <i>row</i>, so each child
          with a <i>flex</i> rule will get placed as a sort of column
          in the row (until the viewport is shrunk below a size that can support
          the content's flex-basis; under that it will wrap and thus stack).
        </div>
      </>
    </Card>
    <div className="mbe24" />
    <Card isBorder isRounded>
      <>
        <div class="p16">Rounded with border</div>
        <div class="p16">Card</div>
      </>
    </Card>
    <div className="mbe24" />
    <Card isStacked isBorder>
      <>
        <div class="p16">Stacked (direction column)</div>
        <div class="p16">Card</div>
      </>
    </Card>
    <div className="mbe24" />
    <Card isStacked isShadow>
      <>
        <div class="p16">Stacked with shadow</div>
        <div class="p16">Card</div>
      </>
    </Card>
    <div className="mbe24" />
    <Card isAnimated isShadow isStacked>
      <>
        <div class="p16">Animated, stacked, with shadow</div>
        <div class="p16">Card</div>
      </>
    </Card>
    <div className="mbe24" />
    <Card type="success" isStacked>
      <>
        <div class="p16">Success</div>
        <div class="p16">Card</div>
      </>
    </Card>
    <div className="mbe24" />
    <Card type="success" isRounded isStacked>
      <>
        <div class="p16">Success rounded</div>
        <div class="p16">Card</div>
      </>
    </Card>
    <div className="mbe24" />
    <Card type="info" isStacked>
      <>
        <div class="p16">Info</div>
        <div class="p16">Card</div>
      </>
    </Card>
    <div className="mbe24" />
    <Card type="warning" isStacked>
      <>
        <div class="p16">Warning</div>
        <div class="p16">Card</div>
      </>
    </Card>
    <div className="mbe24" />
    <Card type="error" isStacked>
      <>
        <div class="p16">Error</div>
        <div class="p16">Card</div>
      </>
    </Card>
    <div className="mbe24" />
    <Card isSkinned={false}>
      <>
        <div class="p16">Base Card</div>
        <div class="p16">No Skin</div>
      </>
    </Card>
    <div className="mbe24" />
    <Card css="foo-bar">
      <>
        <div class="p16">Custom CSS Class</div>
        <div class="p16">Inspect to see the class: foo-bar</div>
      </>
    </Card>
  </section>
);
```
</details>

React: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/Card.tsx), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/stories/Card.stories.tsx)

<div class="mbe32"></div>

<div class="flex">
  <h3 id="vue-3" tabindex="-1">
    <img src="/images/Vue-icon.svg" alt="Vue 3 logo">Vue 3
  </h3>
</div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```vue
<template>
  <section>
    <Card is-border>
      <div class="p16">Border Card</div>
      <div
        class="p16 flex-grow-1 flex-shrink-1"
        style="flex-basis: 50ch;"
      >
        The card comes with minimal
        <span class="quoted">skinning css</span>
        and no padding (the padding you see here is from the demo styles).
        By default Cards have a flex direction of <i>row</i>, so each child
        with a <i>flex</i> rule will get placed as a sort of column
        in the row (until the viewport is shrunk below a size that can support
        the content's flex-basis; under that it will wrap and thus stack).
      </div>
    </Card>
    <div class="mbe24" />
    <Card
      is-border
      is-rounded
    >
      <div class="p16">
        Border & Rounded
      </div>
      <div
        class="p16 flex-grow-1 flex-shrink-1"
        style="flex-basis: 50ch;"
      >
        The card comes with minimal
        <span class="quoted">skinning css</span>
        and no padding (the padding you see here is from the demo styles).
        By default Cards have a flex direction of <i>row</i>, so each child
        with a <i>flex</i> rule will get placed as a sort of column
        in the row (until the viewport is shrunk below a size that can support
        the content's flex-basis; under that it will wrap and thus stack).
      </div>
    </Card>
    <div class="mbe24" />
    <Card
      is-stacked
      is-border
    >
      <div class="p16">
        Stacked & Border
      </div>
      <div class="p16">
        Stacked cards start their lives with flex direction <i>column</i>, so each child
        be stacked one on top of the other and continue to grow downward.
      </div>
    </Card>
    <div class="mbe24" />
    <Card
      is-stacked
      is-shadow
    >
      <div class="p16">
        Stacked & Shadow
      </div>
      <div class="p16">
        Card
      </div>
    </Card>
    <div class="mbe24" />
    <Card
      is-stacked
      is-shadow
      is-animated
    >
      <div class="p16">
        Stacked, Animated (on hover), & Shadow
      </div>
      <div class="p16">
        Card
      </div>
    </Card>
    <div class="mbe24" />
    <Card
      type="success"
      is-stacked
    >
      <div class="p16">
        Success
      </div>
      <div class="p16">
        Card
      </div>
    </Card>
    <div class="mbe24" />
    <Card
      type="info"
      is-stacked
    >
      <div class="p16">
        Info
      </div>
      <div class="p16">
        Card
      </div>
    </Card>
    <div class="mbe24" />
    <Card
      type="warning"
      is-stacked
    >
      <div class="p16">
        Warning
      </div>
      <div class="p16">
        Card
      </div>
    </Card>
    <div class="mbe24" />
    <Card
      type="error"
      is-stacked
    >
      <div class="p16">
        Error
      </div>
      <div class="p16">
        Card
      </div>
    </Card> 
  </section>
</template>
<script>
// Import AgnosticUI global common & component CSS
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Card } from "agnostic-vue";
export default {
  name: "CardExample",
  components: { Card },
};
</script>
```
</details>

Vue 3: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Card.vue), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/stories/Card.stories.js)


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
  import 'agnostic-svelte/css/common.min.css';
  import { Card } from "agnostic-svelte";
</script>

<section>
  <Card isBorder="{true}">
    <div class="p16">Border Card</div>
    <div class="p16 flex-grow-1 flex-shrink-1"
         style="flex-basis: 50ch;">
      The card comes with minimal
      <span class="quoted">skinning css</span>
      and no padding (the padding you see here is from the demo styles).
      By default Cards have a flex direction of <i>row</i>, so each child
      with a <i>flex</i> rule will get placed as a sort of column
      in the row (until the viewport is shrunk below a size that can support
      the content's flex-basis; under that it will wrap and thus stack).
    </div>
  </Card>
  <Card isBorder="{true}" isRounded="{true}">
    <div class="p16">
      Border & Rounded
    </div>
    <div class="p16 flex-grow-1 flex-shrink-1"
         style="flex-basis: 50ch;">
      The card comes with minimal
      <span class="quoted">skinning css</span>
      and no padding (the padding you see here is from the demo styles).
      By default Cards have a flex direction of <i>row</i>, so each child
      with a <i>flex</i> rule will get placed as a sort of column
      in the row (until the viewport is shrunk below a size that can support
      the content's flex-basis; under that it will wrap and thus stack).
    </div>
  </Card>
  <Card isBorder="{true}" isStacked="{true}">
    <div class="p16">
      Stacked & Border
    </div>
    <div class="p16">
      Stacked cards start their lives with flex direction <i>column</i>, so each child
      be stacked one on top of the other and continue to grow downward.
    </div>
  </Card>
  <Card isShadow="{true}" isStacked="{true}">
    <div class="p16">Stacked and shadow</div>
    <div class="p16">Card</div>
  </Card>
  <Card isStacked="{true}" isShadow="{true}" isAnimated="{true}">
    <div class="p16">Stacked, shadown, and animated</div>
    <div class="p16">Card</div>
  </Card>
  <Card type="success" isStacked="{true}">
    <div class="custom-wrap">
      <div class="p16">Success stacked</div>
      <div class="p16">Card</div>
    </div>
  </Card>
  <Card type="info" isStacked="{true}">
    <div class="p16">Info and stacked</div>
    <div class="p16">Card</div>
  </Card>
  <Card type="warning" isStacked="{true}">
    <div class="p16">Warning and stacked</div>
    <div class="p16">Card</div>
  </Card>
  <Card type="error" isStacked="{true}">
    <div class="p16">Error and stacked</div>
    <div class="p16">Card</div>
  </Card>
</section>
```
</details>

Svelte: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/Card/Card.svelte), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/Card/Card.stories.js)

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
    <h2>Cards</h2>
    <ag-card [isBorder]="true">
      <div class="p16">Border Card</div>
      <div class="p16 flex-grow-1 flex-shrink-1"
           style="flex-basis: 50ch;">
        The card comes with minimal
        <span class="quoted">skinning css</span>
        and no padding (the padding you see here is from the demo styles).
        By default Cards have a flex direction of <i>row</i>, so each child
        with a <i>flex</i> rule will get placed as a sort of column
        in the row (until the viewport is shrunk below a size that can support
        the content's flex-basis; under that it will wrap and thus stack).
      </div>
    </ag-card>
    <div class="mbe24"></div>
    <ag-card [isBorder]="true"
             [isRounded]="true">
      <div class="p16">
        Border & Rounded
      </div>
      <div class="p16 flex-grow-1 flex-shrink-1"
           style="flex-basis: 50ch;">
        The card comes with minimal
        <span class="quoted">skinning css</span>
        and no padding (the padding you see here is from the demo styles).
        By default Cards have a flex direction of <i>row</i>, so each child
        with a <i>flex</i> rule will get placed as a sort of column
        in the row (until the viewport is shrunk below a size that can support
        the content's flex-basis; under that it will wrap and thus stack).
      </div>
    </ag-card>
    <div class="mbe24"></div>
    <ag-card [isStacked]="true"
             [isBorder]="true">
      <div class="p16">
        Stacked & Border
      </div>
      <div class="p16">
        Stacked cards start their lives with flex direction <i>column</i>, so each child
        be stacked one on top of the other and continue to grow downward.
      </div>
    </ag-card>
    <div class="mbe24"></div>
    <ag-card [isStacked]="true"
             [isShadow]="true">
      <div class="p16">Stacked and shadow</div>
      <div class="p16">Card</div>
    </ag-card>
    <div class="mbe24"></div>
    <ag-card [isStacked]="true"
             [isShadow]="true"
             [isAnimated]="true">
      <div class="p16">Stacked, shadown, and animated</div>
      <div class="p16">Card</div>
    </ag-card>
    <div class="mbe24"></div>
    <ag-card type="success"
             [isStacked]="true">
      <div class="p16">Success stacked</div>
      <div class="p16">Card</div>
    </ag-card>
    <div class="mbe24"></div>
    <ag-card type="success"
             [isStacked]="true"
             [isRounded]="true">
      <div class="p16">Success, stacked, and rounded</div>
      <div class="p16">Card</div>
    </ag-card>
    <div class="mbe24"></div>
    <ag-card type="info"
             [isStacked]="true">
      <div class="p16">Info and stacked</div>
      <div class="p16">Card</div>
    </ag-card>
    <div class="mbe24"></div>
    <ag-card type="warning"
             [isStacked]="true">
      <div class="p16">Warning and stacked</div>
      <div class="p16">Card</div>
    </ag-card>
    <div class="mbe24"></div>
    <ag-card type="error"
             [isStacked]="true">
      <div class="p16">Error and stacked</div>
      <div class="p16">Card</div>
    </ag-card>
    <div class="mbe24"></div>
    <ag-card [isSkinned]="false">
      <div class="p16">Base Card</div>
      <div class="p16">No Skin</div>
    </ag-card>
    <div class="mbe24"></div>
    <ag-card css="addition-classes">
      <div class="p16">Custom CSS Class Overrides</div>
      <div class="p16">Inspect to see additional-classes</div>
    </ag-card>
  </section>`
})
export class YourComponent { //... }
```
</details>

Angular: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/card.component.ts), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/card.component.stories.ts)

<div class="mbe32"></div>

### A Note on Customizing the Animation

If you pass `isAnimated`, the underlying CSS applied will animate the card upwards on hover (or touch on mobile) by default. You can, however, override this by passing a CSS class of your own to the `css` prop, and then overriding the transform. For example, to have the transformation animate downwards (instead of upwards):

```css
/* You may have to apply extra classes or other specificity shenanigans
depending on the framework and if it increases the specificity. */
.card.card-animated.animation-override:hover {
  /* animate down Y instead of up */
  transform: translateY(3px);
}
```

Interestingly, we noticed on Vue 3, the style obfuscation is applied to the original class `._card-animated_aihsb_47`. This is still just one CSS class though! So, we were able to add our override without any extra classess. Here's the Vue 3 version of the &ldquo;consuming component's&rdquo; code:

```css
<style>
.animation-override:hover {
  transform: translateY(3px);
}
</style>
```

And

```html
  <Card
    isAnimated
    css="animation-override"
  >
    <div>...shortened for brevity</div>
  </Card>
```

And then you'd pass `css="animation-override"` to the `Card` component. See [examples/src/styles.css](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/apps/examples/src/styles.css) in the Angular example application that this example is pulled from.

## Customizations via CSS Properties

If you'd like to further customize the look of `Card`, there are several [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) you can override — see [card.css](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-css/src/components/card/card.css) and simply override those in your codebase after including AgnosticUI.

<div class="mbs24"></div>

_If you just want a container with no skinning styles whatsoever, you can also just pass `isSkinned` as `false`._


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
