# Getting started

From monorepo top-level root directory, run following to install all dependencies
```shell
yarn
```

The dist library should already be built, but to do so do the following from
here in the `agnosticui-angular` package's top-level directory:

```shell
yarn build:ag # this will output libs to /dist
```

Now fire up the example app (currently a sort of kitchen sink of coponents rendered
to the page):

```shell
yarn start # will serve at: http://localhost:4234/
```
### What to go look at

This set up leverages [nx](https://nx.dev/) and so the first place you should look to understand details about the setup is at: `agnosticui-angular/angular.json` The components in the examples are being rendered in `agnosticui-angular/apps/examples/src/app/app.component.html`.

## Storybook

```
yarn storybook
```
