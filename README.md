# AgnosticUI

- Are you tired of having incompatible components because yours are tied to a particular JavaScript framework?
- Are you tired of excluding your more technical Designers and UX experts that happen to be better then your JavaScript devs at CSS and skinning UI but, now have no idea how the hell to make any sorts of code contributions at all?

AgnosticUI takes an HTML/CSS first approach to UI component primitives, but attempts to also deliver framework specific implementations of these primitives. Every time you run `yarn storybook` in a framework-specific subdirectory it first runs `copystyles.js` to synchronize the top-level CSS! The structure simplified looks like this:

```shell
├── agnosticui-css
│   ├── LICENSE
│   ├── button.css
│   ├── button.html
│   └── package.json
├── agnosticui-react
│   ├── copystyles.js
│   ├── package.json
│   ├── src
│   │   ├── stories
│   │   │   ├── Button.js
│   │   │   ├── Button.stories.js
│   │   │   ├── button.css
│   │   │   └── button.module.css
│   │   └── storybook.test.js
├── agnosticui-svelte
│   ├── copystyles.js
│   ├── package.json
│   ├── src
│   │   └── stories
│   │       ├── Button.stories.js
│   │       ├── Button.svelte
│   │       └── Button.test.js
├── agnosticui-vue
│   ├── copystyles.js
│   ├── package.json
│   ├── src
│   │   └── stories
│   │       ├── Button.stories.js
│   │       ├── Button.test.js
│   │       └── Button.vue
...and so on
```

So, the styles for each framework are driven from the CSS package's component CSS files, where we've tried to ensure that the core component works well standalone. For example, if you run `yarn storybook` from within the React package, we will first run a script
that copies the CSS framework css files over into the React framework ones.
For example, the button component at: `agnosticui-css/button.css` is literally
copied over into React's: `agnosticui-react/src/stories/button.css`. Or, for Vue's button component, that same CSS file is copied over into `agnosticui-vue/src/stories/button.css`. The big idea being that all framework styles are synchronized with the top-level CSS package's styles.

## Usage

AgnosticUI is setup as a monorepo and we are publishing the various packages independently as such. However, if you'd like to install the entire monorepo locally read ahead, otherwise search for those packages via npm search with something like: agnosticui-react, agnosticui-css, agnosticui-vue, agnosticui-svelte, etc....

### Running monorepo

So you should only need to do `yarn install` from the top-level directory.

_Note: if you accidentally do a `yarn install` from one of the package directories, just do `yarn --check-files` to &ldquo;unbork&rdquo; things._

```shell
git clone git@github.com:roblevintennis/agnosticui.git
cd agnosticui
yarn install
```

### Frameworks

Again, the philosophy of AgnosticUI is to curate the top-level _component.html_ and _component.css_, and then to synchronize the css down into the framework-based variants. This is done via a simple Node script which literally copies the CSS over.

As such, each framework is setup with as its own independent project with a `package.json`. So simply install the dependencies and then fire-up [Storybook](https://storybook.js.org/) to get started:

#### HTML/CSS
```shell
yarn start:css # although you can also just double-click agnosticui-css/button.html
```

#### Svelte

To see the Svelte storybook simply do the following from top root directory:
```shell
yarn start:svelte
```

#### Vue
To see the Vue storybook imply do the following from top root directory:
```shell
yarn start:vue
```

#### React
To see the React storybook imply do the following from top root directory:
```shell
yarn start:react
```

### HTML/CSS

You should be able to simply double-click on `components/button.html` to preview locally in your browser.
Currently, this is just a proof of concept page with no fancy layout styles per se. But it does show:

- The raw Buttons are styled properly
- Proof of concept theme toggling -- you will see two buttons at the top of the page 'Fancy' and 'Original'.
If you open devtools and click between the two, you'll notice that the css custom properties and thus the button styles themselves are dynamically updated. This experiment hopefully shows how themable the components are:

```css
:root {
  --agnosticui-btn-bgcolor: hotpink;
}
```

So, if you were to place this in your application's top-level stylesheet, it would "override" AgnosticUI's fallback default: `--agnosticui-default-btn-bgcolor`, and your default buttons would have a background of hotpink. Note, the only difference between the fallback and override variable names is the `-default-` part. That's the naming convention for all css custom properties in the framework.


## Axioms

1. Use traditional CSS as much as possible -- preferably with no preprocessing
1. Use semantic and accessible HTML. Let's be part of the solution not the problem
1. A11y friendly keyboard focus and screen reader compatibility should be considered as much is reasonably possible. Some trade offs may need to be made for things like data grids / tables, but, generally let's not break a11y
1. Leverage CSS custom properties inherent theming capabilities and allow for overriding all defaults
1. Each component has a top level component.html and component.css. Framework-based subdirectories should
attempt to synchronize with the component.css as much as possible. For example, `Button.svelte` component literally copies the top-level `button.css` into its `<style>...</style>` via a node `copystyles.js` script
1. Each component directory is, in a way, it's own dev playground with its own dependencies, but is driven by the top-level component's css
1. Keep code lean and as generic as possible so we can leverage the platform and eventual standards. Within a component's framework example sub-directory, it's fine to use the idioms of that framework to a certain degree. But, let's avoid super exotic code that's overly specific
1. Keep UI Components as presentational and primitive as possible while exposing obvious things like `onClick` so users can choose how to customize and interact with these primitives from container JavaScript
1. Lean testing. All components will be snapshot tested and any event handlers will have coverage to ensure they are firing but that's about all
1. Framework interfaces should mostly be the same within idiomatic reason
1. Separate component base and skin styles. See `button.css` where we have core base and skin styles separated like:

```css
.btn, .btn-base {...}
.btn, .btn-skin {...}
```

Thus, `.btn` is the sensible convenience class that most folks will use. However, if they'd like to have full control of the skinning styles, they can choose to only include the `.btn-base` styles as an alternative to using
css custom property overrides. This is exposed, for example, in the React version's `isSkinned` prop which defaults to `true`. Simply set that to `isSkinned: false` and the React component version will only include `.btn-base`. Same holds true for other frameworks.

## Publishing

We're going to try using [np](https://github.com/sindresorhus/np) to do the heavy npm publish lifting. Once we're ready to publish a new version it's simply a matter of running `np` and then following its instructions. Keep bumps at the patch level until a more major bump has been agreed upon.
