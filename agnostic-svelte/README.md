# AgnosticUI Svelte

# At time of writing, Svelte version 3.43.0 has a bug that prevents successful running of a built library; [see the bug](https://github.com/sveltejs/svelte/issues/6584). As such, I'm locking Svelte to 3.39.0 until that gets resolved.

This is the [Svelte version](https://github.com/AgnosticUI/agnosticui/tree/master/agnostic-svelte) of [AgnosticUI](https://github.com/AgnosticUI/agnosticui).

## Npm install

- `npm install agnostic-svelte` or `yarn add agnostic-svelte`
- In your project's `public/index.html` ensure sure you've included the `bundle.css`
- In your `src/App.svelte` import `agnostic-svelte/dist/common.min.css` before any `agnostic-svelte` components; it will look something like:

```svelte
<script>
	import 'agnostic-svelte/dist/common.min.css';
	import { Button, } from 'agnostic-svelte';
</script>
<!-- In your html section you can now use the agnostic-svelte component -->
<Button>Go</Button>
```
A complete kitchen sink example is located in `./examples/src/App.svelte`

### Static docs

You can also view the static Storybook docs that get distributed in the agnostic-svelte package with:
```shell
open ./node_modules/agnostic-svelte/docs/index.html
```

## Local Development

If you've cloned this repo (as opposed to npm / yarn installing), you can run the agnostic-svelte Storybook
examples with the following from one directory higher `path/to/agnosticui` (not `agnosticui/agnostic-svelte`!)

```
yarn && yarn start:svelte
```
