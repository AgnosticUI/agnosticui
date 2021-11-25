# Understanding AgnosticUI

AgnosticUI is a set of UI primitives that start their lives in clean HTML and CSS. These standards compliant components are then copied to our framework implementations in: React, Vue, Angular, and Svelte.

## Approach

### Decoupled CSS

AgnosticUI is not tied to a particular JavaScript framework, because our build process complies and even enforces the &ldquo;1 stylesheet…many frameworks&rdquo; approach which works as follows:

<div class="mbe24"></div>

Our first step to building a component (like a Button) starts in the `agnostic-css` package. Generally, this results in a `component.html` file, and a `component.css` file. For example, `button.html` and `button.css`.

<div class="mbe24"></div>

When we're ready to create a corresponding component (e.g. a React button), we utilize a simple [NodeJS script](https://nodejs.org/en/) that literally copies the `component.css` (e.g. `button.css`) into the framework's component directory and import it directly.

<div class="mbe16"></div>

_For Svelte and Vue's [SFC](https://v3.vuejs.org/guide/single-file-component.html) we instead replace the contents within the `<style></style>` tags._

<div class="mbe24"></div>

The above approach forces our framework-specific implementations to use the same single stylesheet. Ultimately, this means you can make [theme customizations](https://agnosticui.github.io/agnosticui/docs/theming.html#example-of-theming-with-css-custom-properties) once, then use these CSS custom property overrides across your React, Vue, Angular, and Svelte based applications…and they will have a consistent look and feel!

<div class="mbe24"></div>

_If you're curious, there's an article (coming very soon!) ~~on [css-tricks](https://css-tricks.com/) — [The Little Button That Could](https://css-tricks.com/)~~ — that describes exactly how this all gets set up in painstaking details._

### Frameworks

AgnosticUI has 5 packages.

<div class="mbe24"></div>

The `agnostic-css` package is where all component HTML and CSS starts. All styles derive from this package as described earlier.

<div class="mbe24"></div>

The framework-specific implementations available are: `agnostic-react`, `agnostic-vue`, `agnostic-angular`, and `agnostic-svelte`.

<div class="mbe24"></div>

### Primitives

Think of the components AgnosticUI provides as _primitive_ or _presentational components_ that you can build atop. We purposely avoid overly complex components like the [Data Grid](https://www.w3.org/TR/wai-aria-practices/examples/grid/dataGrids.html) in efforts to keep AgnosticUI's core as minimal and maintainable as possible.

<div class="mbe24"></div>

 _We may consider a community-driven `addons` repository in the future for more complex components that don't belong in core if there's support from the community._

### Clean CSS

Broadly-speaking, AgnosticUI's CSS follows [Jonathan Snook's](https://snook.ca/) [SMACSS](http://smacss.com/) and [Nicole Sullivan's](http://www.stubbornella.org/content/) [OOCSS](https://github.com/stubbornella/oocss/tree/master/oocss#overview). [Mark Otto](https://markdotto.com/about/) describes a similar approach in his article on using [chained classes](https://markdotto.com/2012/02/16/scope-css-classes-with-prefixes/).
### No Preprocessing

While preprocessors certainly supply an enjoyable developer experience, AgnosticUI favors the use of standards-based raw CSS. This means structures like loops, maps, and lists, are not available. Essentially, these sorts of structures need to be _unrolled_, and thus the code is a bit more verbose. But, the benefit of coding directly on the platform and moving towards upcoming web standards seems worth it. Of course, we do use `autoprefixer` to help out with any vendor prefix shenanigans.

<div class="mbe24"></div>

### Components + Tokens + Utilities

AgnosticUI mostly consists of UI components and the CSS custom properties mentioned in the Theming section. However, for convenience we've included some minimal [CSS Utilities](https://css-tricks.com/need-css-utility-library/) in [common](https://github.com/AgnosticUI/agnosticui/tree/master/agnostic-css/public/css-src). These are mostly for rapid layout development using [Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox), [margin/padding via logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties). At time of writing, AgnosticUI adds these with some trepidation as we don't want to increase the build size. If you're looking for a full-blown utility-first library you should probably look at TailWind or similar.

<div class="mbe24"></div>

The [utilities page](./utilities.md) shows the available CSS utilities as does the [source code on GitHub](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-css/public/css-dist/common.concat.css#L276).

## Benefits

As AgnosticUI works across many frameworks—one stylesheet…many frameworks—your design system team will be able to generate a &ldquo;single source of truth&rdquo;. This theme will manifest as a single [CSS custom properties theme](https://agnosticui.github.io/agnosticui/docs/theming.html) that can be imported across your various projects.

<div class="mbe24"></div>

For example, let's imagine your company's flagship product is coded in React, an administraction site is coded in Vue 3, and a back-office application is coded in Angular. All of these would share the same [CSS custom properties theme](https://agnosticui.github.io/agnosticui/docs/theming.html), and would therefore have a consistent look and feel.

<div class="mbe24"></div>

Then, your front-end developer &ldquo;rock star&rdquo; decides she wants to use Svelte on that _hackathon project_. Well, she can simply drop in the [custom properties theme](https://agnosticui.github.io/agnosticui/docs/theming.html) and get right to hacking up here Svelte idea.

<div class="mbe24"></div>

_We don't recommend the use of 2+ frameworks in an application with a single HTTP payload due to the increased bundle size sent to your users. However, completely separate applications are fair game for using different frameworks; especially for polyglot teams that long to use new technologies, or letting an outsourced team use the technology they're most proficient in._
