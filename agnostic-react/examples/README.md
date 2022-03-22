# Development Setup

The example app is used to test npm package builds of the agnostic-svelte package before publishing to npm, and for spot checking the components as a final sanity check…

From the `agnostic-react` root directory install the dependencies and build the package:

```shell
npm install
npm run build # this builds the React package
npm pack # this will generate a tarball like agnostic-react-N-N-N.tgz (where N is an arbitrary int)
```

Now, in another shell tab from the `agnostic-react/examples/` directory we will _consume_ the package:

Now, in another tab from the `agnostic-react/examples/` directory we will _consume_ the package:

```shell
cd path/to/agnostic-react/examples
npm install
npm install full/path/to/agnostic-react-N-N-N.tgz
# e.g. on my system:
# $ npm install ~/workspace/opensource/agnosticui/agnostic-react/agnostic-react-1.0.0.tgz
```

You should now see something like this in the example app's `package.json` (but your version number will of course be different):

```json
    "agnostic-react": "file:../agnostic-react-v1.0.2.tgz",
```

Now that you've installed agnostic-react into your example app's package dependencies, you can run the app with:

```shell
npm run start
```

## Why npm pack?

I have found running `npm link <name>` or `npm link path/to/package/project` extremely unreliable with a lot
of false negatives. Utilizing [npm pack](https://docs.npmjs.com/cli/v7/commands/npm-pack) is pretty great because it more closely reflects what happens when you do `npm install agnostic-react` from the npm registry itself.
