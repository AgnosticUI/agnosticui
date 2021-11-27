## Publishing

We prefer to keep bumps at the patch or minor level until a more major bump has been agreed upon, but generally try to follow [semvar](https://semver.org/#summary) major.minor.patch rules.

## Documentation site


The `site` package houses the [AgnosticUI site](https://agnosticui.github.io/agnosticui/). It uses [VitePress](https://vitepress.vuejs.org/) which is similar in many ways to Docusaurus but uses Vue 3 and the speedy [Vite](https://vitejs.dev/). We chose it for it's simplicity and because its yet another opportunity to practice writing Vue code 🙂

It's currently deployed as a github pages site to the `gh-pages` branch with:

```shell
yarn deploy # from top-level package.json
```

After the deploy finishes, the udpated showcase demo can be viewed [here](https://agnosticui.github.io/agnosticui/)
