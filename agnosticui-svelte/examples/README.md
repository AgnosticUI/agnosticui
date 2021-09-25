# NPM Link Development Setup

This assumes you've cloned the top-level agnosticui monorepo. To install the dependencies for agnosticui-svelte which is a `yarn workspace`, you need to `yarn install` from the top level of
the monorepo root directory:

```
cd ~/path/to/agnosticui # not agnosticui/agnosticui-svelte!
yarn # installs all dependencies for entire monorepo
```

- From the repository root (directory one up from here where you have top-level agnosticui-svelte cloned to)
run the following commands:

```shell
cd agnosticui-svelte
npm link # yarn link should work too but sometimes it's flaky
yarn build:watch # this builds the dist/ directory which has our compiled library
```

Now, in another tab from the `agnosticui-svelte/examples/` directory running the following:

```shell
cd ~/path/to/agnosticui/agnosticui-svelte/examples
yarn
npm link agnosticui-svelte
yarn dev
```

Navigate to [localhost:5000](http://localhost:5000).
