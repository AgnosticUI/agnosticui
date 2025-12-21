
## VITEPRESS issue

My comment on the issue: https://github.com/vuejs/vitepress/issues/537#issuecomment-1082469466

While we wait for the following Vitepress issue(s) to get resolved, we can use following workaround (kludgy as it is):
1. Remove the `type: module` from agnostic-vue/package.json
2. Rename files like `copystyles.js` to `copystyles.mjs` if get errors
3. Run `npm run build && npm pack` (from Vue package)
4. Install in `/site` (site package) e.g. `npm i /Users/roblevin/workspace/opensource/agnosticui/agnostic-vue/agnostic-vue-1.0.20.tgz` provided building packed npm per previous step
5. `npm run docs:build` should now work as will `./deploy.sh`
6. **Do not forget to go back and set `type: module` and rerun `npm run build` so Vue build is correct.

### Vitepress related issues
https://github.com/vuepress/vuepress-next/issues/585
https://github.com/vuejs/vitepress/issues/476
https://github.com/vuejs/vitepress/issues/537
https://github.com/vuejs/vitepress/pull/512

## Dev

```shell
npm run docs:dev;
```

## Verify Build Locally

```shell
npm run docs:build && npm run docs:serve
```

## Deployment

```shell
./deploy.sh
```
