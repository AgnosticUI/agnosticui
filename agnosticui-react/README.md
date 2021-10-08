# AgnosticUI React 

This is the [React version](https://github.com/AgnosticUI/agnosticui/tree/master/agnosticui-react) of [AgnosticUI](https://github.com/AgnosticUI/agnosticui).

## Project setup

Install dependencies
```
yarn
```

### Storybook

```
yarn storybook
```

### Build

```
yarn build
```

You can also verify components in `./examples` with `yarn serve`

### Docs

A statically compiled version of the Storybook build can be ran with:

```
open ./docs/index.html
```

## Example app

You can simulate publishing the npm package and testing via the ./examples app…

You're basically going to build, link, and then `pack` the agnosticui-react package (essentially creating a tarball); and then you'll install it from `./examples` which will look something like `npm i ~/workspace/opensource/agnosticui/agnosticui-react/agnosticui-react-0.1.0.tgz`. With that you can start the example app with `yarn start`.

See `agnosticui-react/examples/README.md` for more information.
