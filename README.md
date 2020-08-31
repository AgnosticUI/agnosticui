# AgnosticUI

- Are you tired of having incompatible components because yours are tied to a particular JavaScript framework?
- Are you tired of excluding your more technical Designers and UX experts that happen to be better then your JavaScript devs at CSS and skinning UI but, now have no idea how the hell to make any sorts of code contributions at all?

AgnosticUI takes an HTML/CSS first approach to UI component primitives, but attempts to also deliver framework specific implementations of these primitives. All with as little divergence from the top level HTML/CSS primitives as possible.

The styles are driven from the vanilla html and css, where we've ensured the core component works well
standalone, down into the framework specific examples. For example, `button.css` at the top-level is literally
copied over into React's: `components/react/src/stories/button.css` or Vue's: `components/vue/src/stories/button.css` with the intent that the styles are synchronized.

## Usage

```shell
git clone git@github.com:roblevintennis/agnosticui.git
cd agnosticui
```

### HTML/CSS

You should be able to simply double-click on `components/button.html` to preview locally in your browser.
Currently, this is just a proof of concept page with no fancy layout styles per se. But it does show:

- The raw Buttons are styled properly
- Proof of concept theme toggling -- you will see two buttons at the top of the page 'Fancy' and 'Original'.
If you open devtools and click between the two, you'll notice that the css custom properties and thus the button styles themselves are dynamically updated. This experiment hopefully shows how themable the components are:

```css
:root {
  --agnostic-btn-bgcolor: hotpink;
}
```

So, if you were to place this in your application's top-level stylesheet, it would "override" AgnosticUI's fallback default: `--agnostic-default-btn-bgcolor`, and your default buttons would have a background of hotpink. Note, the only difference between the fallback and override variable names is the `-default-` part. That's the naming convention for all css custom properties in the framework.

### Frameworks

Again, the philosophy of AgnosticUI is to curate the top-level _component.html_ and _component.css_, and then to synchronize the css down into the framework-based variants. This is done via a simple Node script which literally copies the CSS over.

As such, each framework is setup with as its own independent project with a `package.json`. So simply install the dependencies and then fire-up [Storybook](https://storybook.js.org/) to get started:

#### Svelte

To see the Svelte storybook simply do:
```shell
cd src/components/svelte && yarn && yarn storybook
```

#### Vue
To see the Vue storybook simply do:
```shell
cd src/components/svelte && yarn && yarn storybook
```

#### React
To see the React storybook simply do:
```shell
cd src/components/react && yarn && yarn storybook
```

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
