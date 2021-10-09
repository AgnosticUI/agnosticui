# AgnosticUI

- Are you tired of having incompatible components because yours are tied to a particular JavaScript framework?
- Are you tired of building UI component libraries from scratch because all the ones you find are too opinionated?

I was too, and so I've built AgnosticUI with the hopes I'll never have to build
a library of component primitives completely from scratch again.

If you're about to build a Design System, consider using AgnosticUI to scaffold your initial components—it's themable via CSS custom properties, and has React, Vue, and Svelte starter implementations.

## Demo

[AgnosticUI Showcase](https://agnosticui.github.io/agnosticui) is the demo site for AgnosticUI.

## NPM

Most likely, you'll want to npm install one of the sub-packages like `agnostic-react`, `agnostic-angular`, `angularui-svelte`, or `angularui-vue` and then import AgnosticUI into
your project. Generally, this means installing 3 things. A small `common.min.css` to with starter
CSS properties, the component-level CSS, and whichever components you'd like to use. For `agnostic-react` that might look like the following from your `App.tsx`:

```js
// Global AgnosticUI CSS
import "agnostic-react/dist/common.min.css";
// Component-level CSS Modules
import "agnostic-react/dist/esm/index.css";
// Component
import { Button } from "agnostic-react";
```

The other framework implementation work similarly but TBD for instructions on each (meantime, look for an `/examples` directory in framework of choice to get your started).

## Unorthodox but valid usage

You can use something like webpack or rollup and import individual source code files if you'd like. While this is a bit of a hard-core approach, it's certainly valid. Here's how:

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

Here's how I've set up the agnostic-svelte package in my own Svelte project (after adding via `yarn add agnostic-svelte` of course):

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

### Running monorepo

So you should only need to do `yarn install` from the top-level directory.

_Note: if you accidentally do a `yarn install` from one of the package directories, just do `yarn --check-files` to &ldquo;unbork&rdquo; things._

```shell
git clone git@github.com:roblevintennis/agnosticui.git
cd agnosticui
yarn install
```

## Publishing

We're going to try using [np](https://github.com/sindresorhus/np) to do the heavy npm publish lifting. Once we're ready to publish a new version it's simply a matter of running `np` and then following its instructions. Keep bumps at the patch level until a more major bump has been agreed upon.

## Showcase

The showcase package is the demo / site for AgnosticUI. It's actually a Vue application under-the-hood and therefore uses the Vue package of AgnosticUI itself (as well as the CSS package for general defs). It's currently deployed as a github pages site with:

```shell
yarn deploy # see top-level package.json
```

After the deploy finishes, the udpated showcase demo can be viewed [here](https://agnosticui.github.io/agnosticui/)

## Contributing

Contributing guidelines can be found at https://github.com/AgnosticUI/agnosticui/blob/master/CONTRIBUTING.md

## Credits

Full credit list at https://github.com/AgnosticUI/agnosticui/blob/master/CREDITS.md
