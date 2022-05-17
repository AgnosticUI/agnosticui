# AgnosticUI Polyglot Signup Page Demo

This is a demonstration playground that is intended to show off how teams
can scale branded components across frameworks. The approach here uses AgnosticUI
and Astro to create a signup page that utilizes various UI frameworks:

- Astro Components: Overall page, hero image, and `Newletter.astro` component.
- Vue: The signup form components and form validation (using [Vest](https://vestjs.dev/))
- Svelte: The `LanguageSelector.svelte` component.

## Running

Install dependencies and run in development mode with:

```shell
npm i && npm run dev
```

## Lighthouse

If you elect to check the demo app against Lighthouse, you should build and preview with:

```shell
npm i && npm run build && npm run preview
```

Doing this will ensure that any build-step optimizations have taken place so Lighthouse can
give a fair assessment.
