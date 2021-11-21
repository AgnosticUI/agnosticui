# Understanding AgnosticUI

AgnosticUI is an agnostic UI component library prioritizing clean HTML and CSS, but built to work agnostically with many popular JavaScript frameworks like React, Vue, and Svelte. Let's talk about the project's features and structure. 

## Approach

### Decoupled CSS

AgnosticUI is not tied to a particular JavaScript framework, because our build process complies and even enforces the &ldquo;1 stylesheet…many frameworks&rdquo; approach.

<div class="mbe24"></div>

First we build a component (like a Button) in the `agnostic-css` package. Generally, this results in component `html` and `css` files respectively. For example, `button.html`, and `button.css`.

<div class="mbe24"></div>

When we venture to create a corresponding component (e.g. a React button), we set up a simply `copystyles.js` NodeJS script to literally copy the `button.css` styles into the framework's component directory and import it directly.

<div class="mbe24"></div>

Once copied, we're careful not to add any custom CSS to the component. This forces our framework-specific implementation to be consistent with others that use the same 1 stylesheet approach.

<div class="mbe24"></div>

If you're curious, there's an article on [css-tricks](https://css-tricks.com/) — [The Little Button That Could](tbd) — that describes exactly how this all gets set up in painstaking details.

### Frameworks

AgnosticUI has 5 packages.

<div class="mbe24"></div>

The `agnostic-css` package is where all component HTML and CSS starts. All styles derive from this package as described above.

<div class="mbe24"></div>

The other packages are the framework-specific component implementations: `agnostic-react`, `agnostic-vue`, `agnostic-angular`, and `agnostic-svelte`. These components preserve a11y compliant HTML.

<div class="mbe24"></div>

#### Primitives

AgnosticUI's components are _primitives_ in that they expose only the minimal needed functionality required. For accessibility compliance, this sometimes does mean some fairly involved _keyboard navigation_ code; but otherwise, JavaScript minimized where possible.

<div class="mbe24"></div>

It's probably most useful to think of the components AgnosticUI provide as _primitive components_, or _presentation components_. So, if you need an ultra-sophisticated [Data Grid](https://www.w3.org/TR/wai-aria-practices/examples/grid/dataGrids.html) it will likely never be in AgnosticUI core. Perhaps, we'll consider an _addons_ repository in the future, but for now, this is our approach.

### Clean CSS

AgnosticUI's CSS loosely follows [Jonathan Snook's](https://snook.ca/) [SMACSS](http://smacss.com/) and [Nicole Sullivan's](http://www.stubbornella.org/content/) [OOCSS](https://github.com/stubbornella/oocss/tree/master/oocss#overview). [Mark Otto's](https://markdotto.com/about/) notion of [chained classes](https://markdotto.com/2012/02/16/scope-css-classes-with-prefixes/) seems applicable as well and if you've spent a lot of time in the [Bootstrap SCSS](https://github.com/twbs/bootstrap/tree/main/scss) code, AgnosticUI's should be quite approachable to you.

#### No preprocessing

As long-time Sass enthusiasts, we at some point elected to unroll all Sass loops and maps in favor of standards-based CSS (at times leveraging [PostCSS](https://postcss.org/) to smooth the transition; AgnosticUI just uses CSS so even PostCSS is not needed).

<div class="mbe24"></div>

The reason is similar to how the community embraced ES6 and platform-based JavaScript over [Coffeescript](https://coffeescript.org/) (which itself deserves credit for pushing web standards in its time) years ago—the idea is to &ldquo;code towards the platform&rdquo; where possible. As such, you'll see `.css` files used in AgnosticUI's codebase.

<div class="mbe24"></div>

### Components + Tokens + Utilities

AgnosticUI mostly consists of UI components and the CSS custom properties mentioned in the Theming section. However, for convenience we've included some minimal [CSS Utilities](https://css-tricks.com/need-css-utility-library/) in [common](https://github.com/AgnosticUI/agnosticui/tree/master/agnostic-css/public/css-src). These are mostly for rapid layout development using [Flexbox](), [margin/padding via logical properties](). At time of writing, AgnosticUI adds these with some trepidation as we don't want to increase the build size. If you're looking for a full-blown utility-first library you should probably look at TailWind or similar.

<div class="mbe24"></div>

The [utilities page](./utilities) shows the available CSS utilities as does the [source code on GitHub](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-css/public/css-dist/common.concat.css#L276).




