# glob

This is a mirror of [glob](https://www.npmjs.com/package/glob), bundled and exposed as dual publish CJS & ES module.

In addition, it exposes a browser entrypoint that works in browsers without any additional build tool transformations.
This comes with a patch of path-scurry, where we just assume the `fs` option is always passed to glob.

Therefore, with this mirror of `glob`, you MUST always pass the `fs` property in the options parameter when inside browser environment

> In Node environment, we just use a re-export of `glob` origin, as it now exposes both ESM + CJS

## Install

```sh
npm install @bundled-es-modules/glob
```

## Use

```html
<script type="module">
  import glob from '@bundled-es-modules/glob';
</script>
```
