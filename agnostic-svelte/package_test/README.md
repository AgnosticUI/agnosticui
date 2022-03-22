# Development Setup

The example app is used to test npm package builds of the agnostic-svelte package before publishing to npm, and for spot checking the components as a final sanity check…

From the `agnostic-svelte` root directory install the dependencies and build the package:

```shell
npm install
# From that same `./agnostic-svelte` directory you will now set up the package for local development:
npm run package # this builds the package/ directory distributable
npm pack # this will generate a tarball like agnostic-svelte-N-N-N.tgz (where N is an arbitrary int)
```

Now, in another shell tab from the `agnostic-svelte/examples/` directory we will _consume_ the package:

```shell
cd path/to/agnostic-svelte/examples
npm i
npm install full/path/to/agnostic-svelte-N-N-N.tgz
# e.g. on my system:
# $ npm install ~/workspace/opensource/agnosticui/agnostic-svelte/agnostic-svelte-1.0.1-9.tgz
```

You should now see something like this in your package.json (but your version number will of course be different):

```json
    "agnostic-svelte": "file:../agnostic-svelte-v1.0.2.tgz",
```

Now that you've installed agnostic-svelte into your example app's package dependencies, you can run the app with:

```shell
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000).

## Why npm pack?

I have found running `npm link <name>` or `npm link path/to/package/project` extremely unreliable with a lot
of false negatives. Utilizing [npm pack](https://docs.npmjs.com/cli/v7/commands/npm-pack) is pretty great because it more closely reflects what happens when you do `npm install agnostic-svelte` from the npm registry itself.
