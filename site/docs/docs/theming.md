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

AgnosticUI uses [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) to allow for a customized look and feel. These custom properties are prefixed with `--agnostic-` which helps to prevent any potential naming collisions with other stylesheets.

## Example of Theming with CSS Custom Properties

Here's an example of how you might override AgnosticUI's default CSS custom properties to reflect your brand's `primary`, `secondary`, and `error` colors while also using a Google font:

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

_The GitHub-hosted [colors.css](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-css/public/css-src/colors.css) on `master` is the most up-to-date source of truth._

## Other Tokens

Colors aren't the only thing that's themable in AgnosticUI. The various `:root` defined CSS tokens are located in `agnostic-css` package's [public/css-src](https://github.com/AgnosticUI/agnosticui/tree/master/agnostic-css/public/css-src) directory. These source files are, in fact, what gets concatenated and minified into the `dist/common.min.css` global CSS file we ask you to `import`. 

<div class="mbe24"></div>

### Overriding AgnosticUI

First ensure that you've imported the common CSS (e.g. `agnostic-PACKAGE/dist/common.min.css'`), and any component-based CSS if applicable.

<div class="mbe24"></div>

Then, override any variables you care about (similar to how we did in the [earlier example](https://agnosticui.github.io/agnosticui/docs/theming.html#example-of-theming-with-css-custom-properties)).

<div class="mbe24"></div>

_See also the [Utilities page](./utilities) which goes over available CSS utilities for layout._
