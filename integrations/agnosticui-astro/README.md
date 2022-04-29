# agnosticui-astro 🎉

This **[Astro integration][astro-integration]** enables [AgnosticUI's agnostic-astro package](https://agnostic-astro.netlify.app/) in your Astro project.

AgnosticUI's [agnostic-astro package](https://github.com/AgnosticUI/agnosticui/tree/master/agnostic-astro) is the Astro port of AgnosticUI that leverages [XElement](https://xelement-docs.vercel.app/) and [Astro components](https://docs.astro.build/en/core-concepts/astro-components/). These UI components take advantage of the Astro's unique _HTML-only templating with no client-side runtime_ capabilities helping you to create applications with blazingly fast performance and fully passing Lighthouse scores 🔥 💪

## Installation

There are two ways to add integrations to your project. Let's try the most convenient option first!

### (experimental) `astro add` command

Astro includes a CLI tool for adding first party integrations: `astro add`. This command will:
1. (Optionally) Install all necessary dependencies and peer dependencies
2. (Also optionally) Update your `astro.config.*` file to apply this integration

To install `agnosticui-astro`, run the following from your project directory and follow the prompts:

```sh
# Using NPM
npx astro add agnosticui-astro 
# Using Yarn
yarn astro add agnosticui-astro 
# Using PNPM
pnpx astro add agnosticui-astro
```

If you run into any hiccups, [feel free to log an issue on our GitHub](https://github.com/withastro/astro/issues) and try the manual installation steps below.

### Install dependencies manually

First, install the `agnosticui-astro` integration like so:

```
npm install agnosticui-astro
```

Then, apply this integration to your `astro.config.*` file using the `integrations` property:

__astro.config.mjs__

```js
import { defineConfig } from 'astro/config';
import agnosticAstro from 'agnosticui-astro';;

export default defineConfig({
	integrations: [agnosticAstro()]
});
```

## Getting started

Visit AgnosticUI's [agnostic-astro package](https://agnostic-astro.netlify.app/) documentation for configuration options and more usage guidance. Also see the [Astro Integration Documentation][astro-integration] for more on how to use integrations.

## Testing Integration Locally

In one tab and in this same directory, build the integration and use `pack` to generate a tarball:

```shell
npm run build && npm pack
```

In another tab go to `/test` and install the tarball and run the app:

```shell
# of course the tarball name will likely be different
npm i ../agnosticui-astro-0.0.1.tgz && npm run dev
```

```shell
npm run build && npm pack
```
