# Path-unified

This library is Node's built-in `path` module, exposed for usage inside browsers as well as Node, without any build-tooling required whatsoever.

Bit hard to find an NPM name that isn't currently in use for this, so I went with "-unified" because this should cover both Linux & Windows, browser & Node environments.

Mostly due to the alternatives on NPM (`path-browserify`, `path`, `node-path`, `path-esm`, etc.) being:

- CJS-only
- not up-to-date
- unmaintained
- opting out of supporting Windows :(

## Usage

Same as the Node built-in module:

```js
import { resolve } from 'path-unified';

resolve('foo/bar'); // `/absolute/path/to/foo/bar` or with \'s on windows
```

The above usage will internally check whether it's used in Windows or Posix environment and use the correct function accordingly.

Note that the pattern below, if you know which environment (Windows or Posix) you are in, is not great for tree-shaking:

```js
import path from 'path-unified';

path.resolve('foo/bar'); // `/absolute/path/to/foo/bar` or with \'s on windows
```

The reason this isn't great is because bundlers won't be able to know beforehand which environment will be used, and both the win32 and posix functions will be bundled, and it's determined on run-time what the environment is and which half of the functions are actually relevant.

If you know which environment you need beforehand, you should use this instead:

```js
import path from 'path-unified/win32';
// or: import { resolve } from 'path-unified/win32';

path.resolve('foo/bar');
// D:\absolute\path\to\foo\bar
// (depending on drive + home directory)
```

## How?

I just copied https://github.com/nodejs/node/blob/v21.5.0/lib/path.js and made some changes to make it workable in ESM / browser context:

- Convert to ESM -> make sure everything is importable as old, but also as tree-shakeable as possible. Note that `import path from 'path-unified';` and `import { win32, posix } from 'path-unified';` are quite bad for tree-shaking, you're better off importing the path utilities separately `import { resolve } from 'path-unified';`
- Hardcopy Node internal/constants, since node does not expose them
- Refactor Node primordials usage into just regular methods on String/Function prototype, since node does not expose primordials https://github.com/nodejs/node/pull/40733 was unfortunately closed: "not a common ask"
- Hardcopy 2 validators from Node internal/validators, since Node does not expose them. I had to simplify the Error logging a bit, to prevent hard-copying too much and escalating the bundle size of this...
- Use a browser-compatible isWindows check
- Shim `process.cwd()` for browser (should return `'/'`)
- Add type safety where it was missing
- Add separate entrypoints for win32/posix which helps tree-shaking when the consumer already knows what the environment will be

> Disclaimer: the tests are just a few smoke tests that I run in both browser & node context, in both linux & windows.
> Apart from those few tests, I cannot really guarantee that my copy + patch of this built-in module doesn't contain regressions.
> More tests are a welcome contribution, and do let me know if something breaks.
