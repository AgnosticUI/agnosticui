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

## CSS Custom Properties

AgnosticUI's `common.min.css` contains all of the CSS custom properties, but you can alternatively import the custom properties as an individual module from [agnostic-css/public/css-dist/common.properties.min.css](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-css/public/css-dist/common.properties.min.css)

### Colors

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

_The GitHub-hosted [colors.css](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-css/public/css-src/colors.css) on `master` is the most up-to-date source of truth. AgnosticUI derives these CSS custom properties colors from its [colors design tokens](https://github.com/AgnosticUI/agnosticui/tree/master/agnostic-css/tokens/colors)._

### Sizes

AgnosticUI uses the naming convention of: `--fluid-N` for [rem-based sizes](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-css/public/css-src/sizes.css). AgnosticUI represents `-N` with pixel-size equivalent (if the root font is defined at `16px` which is normally the case); so `--fluid-16` is literally `1rem`, `--fluid-40` is literally `2.5rem` and so on. These are derived from the [size design tokens](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-css/tokens/sizes/sizes.json).

You can see these in use in the [layout docs margins and padding section](https://agnosticui.com/docs/utilities.html#margins-and-padding) _logical properties_.

### Typography

The [typography design tokens](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-css/tokens/typography/typography.json) are used to generate typography [CSS custom properties](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-css/public/css-src/typography.css#L6) which define a light-weight set of type definitions such as: header sizes, the main body font's color, families, etc., and a few other things.

### Focus

AgnosticUI uses a particular _focus ring_ which is defined in [focus design tokens](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-css/tokens/focus/focus.json). As many folks have varying aesthetic preferences for focus rings, you can either override these, or, more drastically redefine the design token values and regenerate.

### Reset

AgnosticUI's `common.min.css` contains a small [reset](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-css/public/css-src/resets/reset.css). If you'd prefer, you can alternatively import the reset as an individual module from [agnostic-css/public/css-dist/common.resets.min.css](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-css/public/css-dist/common.resets.min.css)

### Other Tokens

The generated CSS custom properties are located in `agnostic-css` package's [public/css-src](https://github.com/AgnosticUI/agnosticui/tree/master/agnostic-css/public/css-src) directory. These source files are, in fact, what gets concatenated and minified into the `dist/common.min.css` global CSS file we ask you to `import`.

<div class="mbe24"></div>

The `common` CSS custom properties are themselves derived from standards-based JSON [Design Tokens](https://www.w3.org/community/design-tokens/) in a build process that utilizes [Style Dictionary](https://github.com/amzn/style-dictionary). Read more about the [design tokens spec here](https://design-tokens.github.io/community-group/format/).

<div class="mbe24"></div>

## Overriding AgnosticUI

First ensure that you've imported the common CSS (e.g. `agnostic-PACKAGE/dist/common.min.css'`), and any component-based CSS if applicable.

<div class="mbe24"></div>

Then, override any variables you care about (similar to how we did in the [earlier example](https://agnosticui.com/docs/theming.html#example-of-theming-with-css-custom-properties)).

<div class="mbe24"></div>

_See also the [Utilities page](./utilities) which goes over available CSS utilities for layout._

<div class="mbe24"></div>

## Design Tokens

_Please note that at time of writing we've only recently adopted design tokens. Consider this area a bit of a moving target until we stabilize._

<div class="mbe24"></div>

As previously mentioned, many of the CSS custom properties in `common.min.css` are derived from [design tokens](https://design-tokens.github.io/community-group/format/) using [Style Dictionary](https://github.com/amzn/style-dictionary). Likely, you'll simply want to override these custom properties from within your own scripts as described above. However, it is possible to more aggressively redefine some of the values to your liking and rebuild the properties via the command-line. This might make sense if you're taking an aggressive forking strategy where you use AgnosticUI as a launching point of departure for your own completely customized codebase. Here are the places to look for how we build from design tokens: first look at the [design tokens themselves](https://github.com/AgnosticUI/agnosticui/tree/master/agnostic-css/tokens), and then have a look at the [build script](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-css/package.json#L29) which simply lets Style Dictionary convert the tokens into CSS custom properties [used here](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-css/public/css-dist/common.concat.css#L116).

<div class="mbe24"></div>

_Be forwarned that this sort of approach is probably not &ldquo;upgrade-safe&rdquo; and you should not change the actual variable names used (just the values), as these variable names are referenced from within the AgnosticUI component codebase._
