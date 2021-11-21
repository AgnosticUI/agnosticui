# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

# NPM Development Setup

This is done to test npm package builds of the agnostic-vue package before publishing to npm…

Two paths…

1. If you have `git clone`'d the entire agnosticui monorepo:

- To install the dependencies for agnostic-vue which is a `yarn workspace`, you need to `yarn install` from the top level of the monorepo root directory:

```
cd ~/path/to/agnosticui # not agnosticui/agnostic-vue!
yarn # installs all dependencies for entire monorepo
```

2. If you only cloned `agnostic-vue` just do:

```
yarn # from agnostic-vue root directory.
```

From that same `./agnostic-vue` directory you will now set up the package for local development:

```shell
npm run build # this builds the dist/ directory which has our compiled library
npm link # yarn link should work too but sometimes it's flaky
npm pack # this will generate a tarball like agnostic-vue-N-N-N.tgz (where N is an arbitrary int)
```

Now, in another tab from the `agnostic-vue/examples/` directory we will _consume_ the package:

```shell
cd path/to/agnostic-vue/examples
npm i
npm install full/path/to/agnostic-vue-N-N-N.tgz
# e.g. on my system:
# $ npm install ~/workspace/opensource/agnosticui/agnostic-vue/agnostic-vue-1.0.1-9.tgz
```

You should now see something like this in you rpackage.json:

```json
    "agnosticvue": "file:../agnosticvue-v1.0.2.tgz",
```

Now run vite:

```shell
yarn dev
```

Navigate to [localhost:5000](http://localhost:5000).

## Why npm pack?

I have found running `npm link <name>` or `npm link path/to/package/project` extremely unreliable with a lot
of false negatives. Utilizing [npm pack](https://docs.npmjs.com/cli/v7/commands/npm-pack) is pretty great because it more closely reflects what happens when you do `npm install agnostic-vue` from the npm registry itself.
