# AgnosticUI React Example

A React + TypeScript + Vite project pre-configured with AgnosticUI Local.

## Getting started

```bash
npm install
```

This installs all dependencies including the `agnosticui-cli` (`ag`) tool.

## Initialize the reference library

The `agnosticui/` reference library is not checked into git — generate it by running:

```bash
npx agnosticui-cli sync
```

This downloads the latest AgnosticUI core and populates `./agnosticui/`.

## Add components

```bash
npx agnosticui-cli add Button Input Checkbox
```

Components are copied to `./src/components/ag/` where you own and can customize them.

## Run the dev server

```bash
npm run dev
```

## Browse components with Storybook

One-time setup (run once per project):

```bash
npx agnosticui-cli storybook
```

Then start Storybook:

```bash
npm run storybook
```

## Typical workflow

```bash
npm install                          # install deps (first time)
npx agnosticui-cli sync              # get/update the reference library
npx agnosticui-cli add <component>   # eject a component into your project
npm run dev                          # start your app
npm run storybook                    # browse your installed components
```

## More commands

```bash
npx agnosticui-cli list              # see all available components
npx agnosticui-cli remove Button     # remove a component
npx agnosticui-cli context           # generate AI context file (CLAUDE.md etc.)
```

For full CLI documentation see the [agnosticui-cli README](https://github.com/AgnosticUI/agnosticui/tree/master/v2/cli).
