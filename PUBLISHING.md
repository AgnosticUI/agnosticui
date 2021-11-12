## Publishing

I prefer to keep bumps at the patch level until a more major bump has been agreed upon, but generally try to follow [semvar](https://semver.org/#summary) major.minor.patch rules.

## Showcase

The showcase package is the demo / site for AgnosticUI. It's actually a Vue application under-the-hood and therefore uses the Vue package of AgnosticUI itself (as well as the CSS package for general CSS definitions). It's currently deployed as a github pages site to the `gh-pages` branch with:

```shell
yarn deploy # from top-level package.json
```

After the deploy finishes, the udpated showcase demo can be viewed [here](https://agnosticui.github.io/agnosticui/)
