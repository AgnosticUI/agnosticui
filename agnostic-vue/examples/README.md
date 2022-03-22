# Development Setup

The example app is used to test npm package builds of the agnostic-svelte package before publishing to npm, and for spot checking the components as a final sanity check…

From the `agnostic-vue` root directory install the dependencies and build the package:

```shell
yarn
# From that same `./agnostic-vue` directory you will now set up the package for local development:
npm run build # this builds the dist/ directory which has our compiled library
npm pack # this will generate a tarball like agnostic-vue-N-N-N.tgz (where N is an arbitrary int)
```

Now, in another shell tab from the `agnostic-vue/examples/` directory we will _consume_ the package:

```shell
cd path/to/agnostic-vue/examples
npm i
npm install full/path/to/agnostic-vue-N-N-N.tgz
# e.g. on my system:
# $ npm install ~/workspace/opensource/agnosticui/agnostic-vue/agnostic-vue-1.0.1-9.tgz
```

You should now see something like this in your package.json (but your version number will of course be different):

```json
    "agnostic-vue": "file:../agnostic-vue-v1.0.2.tgz",
```

Now that you've installed agnostic-vue into your example app's package dependencies, you can run the app with:

```shell
npm run dev
```

Navigate to: [localhost:3002](http://localhost:3002).

## Why npm pack?

I have found running `npm link <name>` or `npm link path/to/package/project` extremely unreliable with a lot
of false negatives. Utilizing [npm pack](https://docs.npmjs.com/cli/v7/commands/npm-pack) is pretty great because it more closely reflects what happens when you do `npm install agnostic-vue` from the npm registry itself.
