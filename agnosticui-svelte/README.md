# AgnosticUI Svelte

# At time of writing, Svelte version 3.43.0 has a bug that prevents successful running of a built library; [see the bug](https://github.com/sveltejs/svelte/issues/6584). As such, I'm locking Svelte to 3.39.0 until that gets resolved.

This is the [Svelte version](https://github.com/AgnosticUI/agnosticui/tree/master/agnosticui-svelte) of [AgnosticUI](https://github.com/AgnosticUI/agnosticui).

## Npm install

- `npm install agnosticui-svelte` or `yarn add agnosticui-svelte`
- In your project's `public/index.html` ensure sure you've included the `bundle.css`
- In your `src/App.svelte` import `agnosticui-svelte/dist/common.min.css` before any `agnosticui-svelte` components; it will look something like:

```svelte
<script>
	import "../node_modules/agnosticui-svelte/dist/common.min.css";
	import { Button, } from 'agnosticui-svelte';
</script>
<!-- In your html section you can now use the agnosticui-svelte component -->
<Button>Go</Button>
```
A complete kitchen sink example is located in `./examples/src/App.svelte`

## Local Development

If you've cloned this repo (as opposed to npm / yarn installing), you can run the agnosticui-svelte Storybook
examples with the following from one directory higher `path/to/agnosticui` (not `agnosticui/agnosticui-svelte`!)

```
yarn && yarn start:svelte
```
