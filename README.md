# AgnosticUI

AgnosticUI is an agnostic UI component library prioritizing clean HTML and CSS, but built to agnostically work with many popular JavaScript frameworks like React, Vue, and Svelte. Showcase: https://agnosticui.github.io/agnosticui

## Features

- Not tied to a particular JavaScript framework
- 5 packages with component-scoped CSS:
  - agnostic-css—all component CSS starts and comes from this package
  - agnostic-react—a React implementation of AgnosticUI
  - agnostic-vue—a Vue implementation of AgnosticUI
  - agnostic-angular—an Angular implementation of AgnosticUI
  - agnostic-svelte—a Svelte implementation of AgnosticUI
- CSS properties theming
- a11y
- Decoupled CSS

If you're about to build a Design System, consider using AgnosticUI to scaffold your initial components—it's themable via CSS custom properties, and has React, Vue, Angular, and Svelte starter implementations.

## NPM package installation

Most likely, you'll want to npm install one of the sub-packages like `agnostic-react`, `agnostic-angular`, `angularui-svelte`, or `angularui-vue` and then import AgnosticUI into your project. Generally, this means installing 3 things:

- A small `common.min.css` to with starter CSS properties
- the components CSS (these are scoped per module via [CSS Modules](https://github.com/css-modules/css-modules) for React and Vue, [ViewEncapsulation](https://angular.io/api/core/ViewEncapsulation) for Angular, and [scoped styles](https://svelte.dev/docs#style) for Svelte)
- whichever components you'd like to use.

For `agnostic-react` that might look like the following from your `App.tsx`:

```js
// Global AgnosticUI CSS
import "agnostic-react/dist/common.min.css";
// Component-level CSS Modules
import "agnostic-react/dist/esm/index.css";
// Components you'd like to use
import { Button, Input, Tag } from "agnostic-react";
```

## Advanced usage

The following examples are unorthodox but valid if you'd like to incorporate
AgnosticUI directly into your build system. You can use something like [Webpack](https://webpack.js.org/), [Rollup](https://rollupjs.org/guide/en/), [Vite](https://vitejs.dev/), etc., and import individual source code files if you'd like.

Here's one way to do this if you're using webpack:

### Vue example

The AgnosticUI showcase web site uses `agnostic-vue` and `agnostic-css` packages and were added with:

```shell
yarn add agnostic-vue agnostic-css
```

The Vue package was setup to be imported with the following in our `vue.config.js`:

```js
  configureWebpack: {
    resolve: {
      alias: {
        "agnosticui": path.resolve(__dirname, '../node_modules/agnostic-vue/src/stories')
      }
    }
  }
```

### Svelte example

Here's how I've set up the agnostic-svelte package in one of my own Svelte projects (after adding via `yarn add agnostic-svelte` of course):

```js
alias({
  entries: [
    {
      resolve: [".js", ".svelte"],
      find: "agnosticui",
      replacement: path.resolve(
        __dirname,
        "./node_modules/agnostic-svelte/src/stories/"
      ),
    },
  ],
});
```

This allows me to use es6 imports and point directly at `agnosticui`.
## Code of conduct

Our code of conduct can be found at: https://github.com/AgnosticUI/agnosticui/blob/master/CODE_OF_CONDUCT.md

## Contributing

Contributing guidelines can be found at https://github.com/AgnosticUI/agnosticui/blob/master/CONTRIBUTING.md

## Publishing

Publishing instruction can be found at https://github.com/AgnosticUI/agnosticui/blob/master/PUBLISHING.md

## Credits

Full credit list at https://github.com/AgnosticUI/agnosticui/blob/master/CREDITS.md
