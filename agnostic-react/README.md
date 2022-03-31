# AgnosticUI React

This is the [React version](https://github.com/AgnosticUI/agnosticui/tree/master/agnostic-react) of [AgnosticUI](https://github.com/AgnosticUI/agnosticui).

## Project setup

Install dependencies

```
npm run
```

### Storybook

```
npm run storybook
```

### Build

```
npm run build
```

You can also verify components in `./examples` with `npm run serve`

### Docs

A statically compiled version of the Storybook build can be ran with:

```
open ./docs/index.html
```

## Example app

You can simulate publishing the npm package and testing via the ./examples app…

You're basically going to build, link, and then `pack` the agnostic-react package (essentially creating a tarball); and then you'll install it from `./examples` which will look something like `npm i ~/workspace/opensource/agnosticui/agnostic-react/agnostic-react-0.1.0.tgz`. With that you can start the example app with `npm run start`.

See `agnostic-react/examples/README.md` for more information.
