#!/usr/bin/env sh

# While awaiting Vitepress issue to get sorted, I can actually use following workaround (kludgy as it is):
# 1. Remove the `type: module` from agnostic-vue/package.json
# 2. Rename files like `copystyles.js` to `copystyles.mjs` if get errors
# 3. Run `npm run build && npm pack`
# 4. Install in `/site` e.g. `npm i /Users/roblevin/workspace/opensource/agnosticui/agnostic-vue/agnostic-vue-1.0.20.tgz` provided building packed npm per previous step
# 5. `npm run docs:build` should now work as will `./deploy.sh`
# 6. **Do not forget to go back and set `type: module`

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vitepress/dist

# if you are deploying to a custom domain
echo 'www.agnosticui.com' >CNAME

git init
git add -A
git commit -m 'deploy'


# THIS DID NOT WORK FOR ME AFTER SETTING UP CUSTOM DOMAIN!
# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# https://agnosticui.github.io/agnosticui
git push -f git@github.com:AgnosticUI/agnosticui.git master:gh-pages

cd -
