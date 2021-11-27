## Publishing

We'd prefer individual conributors keep version bumps at the patch or minor level so maintainers can coordinate major version bumps with releases and documentation deployments.

Otherwise, we generally follow the [semvar](https://semver.org/#summary) major.minor.patch rules.

## Documentation site


The `site` package houses the [AgnosticUI site](https://agnosticui.github.io/agnosticui/). It uses [VitePress](https://vitepress.vuejs.org/) which is similar in many ways to Docusaurus but uses Vue 3 and the speedy [Vite](https://vitejs.dev/). We chose it for it's simplicity and because its yet another opportunity to practice writing Vue code 🙂

It's currently deployed as a github pages site to the `gh-pages` branch with:

```shell
yarn deploy # from top-level package.json
```

After the deploy finishes, the udpated showcase demo can be viewed [here](https://agnosticui.github.io/agnosticui/)
