# NPM Development Setup

Two paths…

1. If you have `git clone`'d the entire agnosticui monorepo:

* To install the dependencies for agnosticui-vue which is a `yarn workspace`, you need to `yarn install` from the top level of the monorepo root directory:

```
cd ~/path/to/agnosticui # not agnosticui/agnosticui-vue!
npm i # installs all dependencies for entire monorepo
```

2. If you only cloned `agnosticui-vue` just do:

```
yarn # from agnosticui-vue root directory.
```

From that same agnosticui-vue root directory you will now set up the package for local development:

```shell
npm link # yarn link should work too but sometimes it's flaky
npm run build # this builds the dist/ directory which has our compiled library
npm pack # this will generate a tarball like agnosticui-vue-N-N-N.tgz (where N is an arbitrary int)
```
Now, in another tab from the `agnosticui-vue/examples/` directory we will _consume_ the package:

```shell
cd path/to/agnosticui-vue/examples
npm i
npm install full/path/to/agnosticui-vue-N-N-N.tgz
# e.g. on my system:
# $ npm install ~/workspace/opensource/agnosticui/agnosticui-vue/agnosticui-vue-1.0.1-9.tgz
npm run serve
```

Navigate to [localhost:5000](http://localhost:5000).

## Why npm pack?

I have found running `npm link <name>` or `npm link path/to/package/project` extremely unreliable with a lot
of false negatives. Utilizing [npm pack](https://docs.npmjs.com/cli/v7/commands/npm-pack) is pretty great because it more closely reflects what happens when you do `npm install agnosticui-vue` from the npm registry itself.
