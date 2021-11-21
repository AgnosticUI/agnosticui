---
title: Theming AgnosticUI
description: Use AgnosticUI's CSS custom properties to craft your own flexible design systems
editLink: true
navbar: true
sidebar: true
head:
  - - meta
    - name: description
      content: hello
  - - meta
    - name: keywords
      content: super duper SEO
---

# Theming AgnosticUI

AgnosticUI uses [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) to allow for a customized look and feel. These custom properties are prefixed with `ag-` which helps to prevent name collisions with other stylesheets.

## How does 1 stylesheet…many frameworks benefit me?

As AgnosticUI works across many frameworks—one stylesheet…many frameworks—your design team will be able to be directly involved in the generating of a &ldquo;single source of truth&rdquo; CSS custom properties theme. This theme setup can then be used and imported across your various projects regardless of the framework used.

<div class="mbe24"></div>


For example, you could have your company's flagship product coded in React, an administraction site coded in Vue 3, and a back-office application coded in Angular. All of these would share the same CSS custom properties values, and thus have the same branded theme.

<div class="mbe24"></div>

Then your FE rock-star decides she now loves Svelte—well, she can build a product in Svelte.

<div class="mbe24"></div>

_Note that while we love the microfrontend approach in general, we do not specifically recommend that you share 2+ frameworks in a single application (or any shared http payload) for obvious performance implications passed down to your users. But, separate apps are totally fair game for using a different framework!_

<div class="mbe24"></div>

This flexibility is helpful for many reasons. Say you have a team that you'd like to outsource an upcoming back-office application to, and they happen to have 3x proficiency in Angular over React. It would be silly to force them to use an uncomfortable framework and slow them down. But if your design system was tied to React—you would have to. With AgnosticUI, just use the same theming tokens and the Angular back-office app will reflect the same branding design choices made for your React-based flagship app.

<div class="mbe24"></div>

It's also, of course, fun for &ldquo;polyglot developers&rdquo; who want to experiment with new technology stacks without straying from already established brand guidelines.

## Theming with CSS custom properties example

Here's an example of how you might override AgnosticUI's default CSS custom properties to reflect your brand's `primary`, `secondary`, and `error` colors while also using a particular Google font:

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
:root {
  --agnostic-font-family: font-family: 'Roboto', sans-serif;
  --agnostic-primary: #12adba;
  /* from / to are used for gradients and things like raised buttons */
  --agnostic-primary-from: #88d6dc;
  --agnostic-primary-to: #109ba7;
  --agnostic-primary-hover: #41bdc7;
  --agnostic-secondary: #1259ba;
  --agnostic-secondary-from: #417ac7;
  --agnostic-secondary-to: #1050a7;
  --agnostic-secondary-hover: #598ace;
  --agnostic-error: #a31818;
  --agnostic-error-dark: #5f0e0e;
  --agnostic-error-light: #f8cdcd;
  --agnostic-error-border: #e6c4c4;
}
```

## Color tokens

Here is a full list of the available color tokens at time of writing:

```css
:root {
  --agnostic-primary: #077acb;

  /* from / to are used for gradients and things like raised buttons */
  --agnostic-primary-from: #0662a2;
  --agnostic-primary-to: #2087d0;
  --agnostic-primary-hover: #2087d0;

  /* Used on Alert background */
  --agnostic-primary-light: #dcf1ff;
  --agnostic-primary-border: #c1d9e9;
  --agnostic-primary-dark: #063f69;
  --agnostic-secondary: #c94d2b;
  --agnostic-secondary-from: #a33e23;
  --agnostic-secondary-to: #bc583d;
  --agnostic-secondary-hover: #bc583d;
  --agnostic-action: #2fb751;
  --agnostic-action-light: #e2ffe9;
  --agnostic-action-border: #c7f0d1;
  --agnostic-action-from: #198333;
  --agnostic-action-to: #41d466;
  --agnostic-action-hover: #3dd262;
  --agnostic-warning-light: #fff5d4;
  --agnostic-warning-border-accent: #ecd386;
  --agnostic-warning-border: #f0e3b9;
  --agnostic-warning-dark: #634902;
  --agnostic-error: #e02e2e;
  --agnostic-error-dark: #771414;
  --agnostic-error-light: #ffe0e0;
  --agnostic-error-border: #eec8c8;
  --agnostic-gray-extra-light: #f8f8f8;
  --agnostic-gray-light: #e9e9e9;
  --agnostic-gray-mid: #d8d8d8;
  --agnostic-gray-mid-dark: #ccc;
  --agnostic-gray-dark: #757575;
  --agnostic-dark: #333;
  --agnostic-light: #fff;
  --agnostic-disabled-bg: var(--agnostic-gray-light);
  --agnostic-disabled-color: var(--agnostic-gray-dark);
```

_See latest colors off `master` branch on GitHub — [colors.css](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-css/public/css-src/colors.css)._

## Other Tokens

Of course colors aren't the only things in AgnosticUI that are themable! The `:root` defined CSS tokens used by AgnosticUI are located in `agnostic-css` package's [public/css-src](https://github.com/AgnosticUI/agnosticui/tree/master/agnostic-css/public/css-src) directory. These source files are, in fact, what gets concatenated and minified into the `dist/common.min.css` global CSS file we ask you to `import`. Simply override variables you care about (same as described above) after importing the `dist/common.min.css'` file, and AgnosticUI components will render according to those customizations.
