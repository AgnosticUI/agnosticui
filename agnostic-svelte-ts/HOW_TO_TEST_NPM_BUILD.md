# Package Tester

_I created svelte-a11y-dialog using svelte-kit. But the following tester uses Vite `--template svelte` which is a bit different apparently and results in global CSS working differently. As this is just a sanity check, just put the requisite dialog styles in the index.html page ¯\_(ツ)_/¯_

This tests the npm package builds. First generate the build with:

```shell
npm run package
cd package && npm pack
```

That will generate a tarball representation of the npm package. Then, we
can create a tester app:

```shell
yarn create vite package_test --template svelte # from top-level dir
cd package_test # note that package_test is .gitignore'd
yarn
# Note you will need to update the tarball file name to whatever yarn pack created above
npm i /Users/roblevin/workspace/opensource/svelte/svelte-a11y-dialog/package/svelte-a11y-dialog-v0.1.0.tgz
# Copy the requisite dialog styles from svelte-a11y-dialog/src/routes/index.svelte into the package_test/index.html <head> section
yarn dev
```
