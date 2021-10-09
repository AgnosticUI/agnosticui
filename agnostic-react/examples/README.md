# NPM Development Setup

Two paths…

1. If you have `git clone`'d the entire agnosticui monorepo:

- To install the dependencies for agnostic-react which is a `yarn workspace`, you need to `yarn install` from the top level of the monorepo root directory:

```
cd ~/path/to/agnosticui # not agnosticui/agnostic-react!
yarn # installs all dependencies for entire monorepo
```

2. If you only cloned `agnostic-react` just do:

```
yarn
```

From that same agnostic-react root directory you will now set up the package for local development:

```shell
npm run build # this builds the dist/ directory which has our compiled library
npm link # yarn link should work too but sometimes it's flaky
npm pack # this will generate a tarball like agnostic-react-N-N-N.tgz (where N is an arbitrary int)
```

Now, in another tab from the `agnostic-react/examples/` directory we will _consume_ the package:

```shell
cd path/to/agnostic-react/examples
yarn
npm install full/path/to/agnostic-react-N-N-N.tgz
# e.g. on my system:
# $ npm install ~/workspace/opensource/agnosticui/agnostic-react/agnostic-react-1.0.0.tgz
yarn start
```

Navigate to [localhost:3000](http://localhost:3000).

## Why npm pack?

I have found running `npm link <name>` or `npm link path/to/package/project` extremely unreliable with a lot
of false negatives. Utilizing [npm pack](https://docs.npmjs.com/cli/v7/commands/npm-pack) is pretty great because it more closely reflects what happens when you do `npm install agnostic-react` from the npm registry itself.
