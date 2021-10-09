# NPM Link Development Setup

This assumes you've cloned the top-level agnosticui monorepo. To install the dependencies for agnostic-svelte which is a `yarn workspace`, you need to `yarn install` from the top level of
the monorepo root directory:

```
cd ~/path/to/agnosticui # not agnosticui/agnostic-svelte!
yarn # installs all dependencies for entire monorepo
```

- From the repository root (directory one up from here where you have top-level agnostic-svelte cloned to)
run the following commands:

```shell
cd agnostic-svelte
yarn build:watch # this builds the dist/ directory which has our compiled library
npm link # yarn link should work too but sometimes it's flaky
# You can optionally run `npm pack` to generate a tarball (see below)
```

Now, in another tab from the `agnostic-svelte/examples/` directory running the following:

```shell
cd ~/path/to/agnosticui/agnostic-svelte/examples
yarn
npm link agnostic-svelte # or npm install path/to/packed/agnostic-svelte.n-n-n.tgz
yarn dev
```

Navigate to [localhost:5000](http://localhost:5000).

# npm pack

I have found running `npm link <name>` or `npm link path/to/package/project` extremely unreliable with a lot
of false negatives. Utilizing [npm pack](https://docs.npmjs.com/cli/v7/commands/npm-pack) is pretty great because it more closely reflects what happens when you do `npm install agnostic-vue` from the npm registry itself.
