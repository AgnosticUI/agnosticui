#!/usr/bin/env sh

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
