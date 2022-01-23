# AgnosticUI Svelte

This is the [Svelte version](https://github.com/AgnosticUI/agnosticui/tree/master/agnostic-svelte) of [AgnosticUI](https://github.com/AgnosticUI/agnosticui).

_As earlier versions of Svelte caused binding issues in several of AgnosticUI's components, we've upgraded the library using the latest [Svelte-Kit](https://kit.svelte.dev) and requires `"svelte": "^3.46.0"` and later._

[AgnosticUI Docs](https://www.agnosticui.com/)

## Npm install

- `npm install agnostic-svelte` or `yarn add agnostic-svelte`
- In your project's `public/index.html` ensure sure you've included the `bundle.css`
- In your `src/App.svelte` import `agnostic-svelte/css/common.min.css` before any `agnostic-svelte` components; it will look something like:

```svelte
<script>
	import 'agnostic-svelte/css/common.min.css';
	import { Button } from 'agnostic-svelte';
</script>
<!-- In your html section you can now use the agnostic-svelte component -->
<Button>Go</Button>
```
A complete kitchen sink example is located in `./examples/src/App.svelte`
