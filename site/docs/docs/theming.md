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

### Just want to see it in action?

<div class="flex mbe24">
  <p class="is16">Live theming demo using <a href="https://open-props.style/" target="_blank">open-props</a>'s custom properties to theme AgnosticUI 💪🏽 💥</p>
</div>
<div class="playgrounds flex mbe32">
  <a class="btn btn-rounded" style="background-color: var(--agnostic-dark); color: var(--agnostic-light)" href="https://codesandbox.io/s/github/AgnosticUI/agnosticui/tree/master/playgrounds/Theming?file=/README.md" target="_blank">
    <img src="/images/codesandbox.svg" alt="codesandbox logo" class="mie8"> View in CodeSandbox
  </a>
  <a class="btn btn-rounded" style="background-color: var(--agnostic-primary); color: var(--agnostic-light)" href="https://stackblitz.com/github/AgnosticUI/agnosticui/tree/master/playgrounds/Theming?file=/README.md" target="_blank">
    <img src="/images/stackblitz.svg" alt="Stackblitz logo" class="mie4"> View in Stackblitz
  </a>
</div>

## Theming AgnosticUI

AgnosticUI uses [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) to allow for a customized look and feel. These custom properties are prefixed with `--agnostic-` which helps to prevent any potential naming collisions with other stylesheets.

## Color Schemes

AgnosticUI supports light and dark color schemes based on the user's system preferences [by default](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-css/public/css-src/colors.css). However, you'll notice in the linked `colors.css` that we do this by toggling between two variants of the same color based on whether we've detected light or dark mode respectively. A simplified example of how this work follows:

```css
/* First we define values for light and dark modes */
--agnostic-primary-modelight: /* some color value */
--agnostic-primary-modedark: /* some color value */
```

Later, we will assign these values to `--agnostic-primary` based on currently detected color scheme:

```css
/* By default, light mode is assumed */
--agnostic-primary: var(--agnostic-primary-modelight);

/* But, if user's set their OS to prefer dark, we instead use that */
@media (prefers-color-scheme: dark) {
  --agnostic-primary: var(--agnostic-primary-modedark);
}
```


## Example of Theming with CSS Custom Properties

Here's an example of how you might override AgnosticUI's default CSS custom properties to reflect your brand's `primary` colors for both light and dark schemes. We also apply a Google font:

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
:root {
  --agnostic-font-family: font-family: 'Roboto', sans-serif;
  /* In light mode we willl have white text against a dark green background. */
  --agnostic-light-modelight: white;
  --agnostic-primary-modelight: #053337;
  --agnostic-primary-hover-modelight: #0a474c;
  /* In dark mode we'll invert the text color and use a much lighter shade of green */
  --agnostic-primary-modedark: #12adba;
  --agnostic-light-modedark: black;
  --agnostic-primary-hover-modedark: #1ec3d1;
}
```

_The above setup will allow `--agnostic-primary` and `--agnostic-light` to be set in a color scheme compatible way. As such, be sure to set both the `-modelight` and `-modedark` variants for each color you plan to override so you don't unintentionally break color scheme toggling._

## CSS Custom Properties

AgnosticUI's `common.min.css` contains all of the CSS custom properties, but you can alternatively import the custom properties as an individual module from [agnostic-css/public/css-dist/common.properties.min.css](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-css/public/css-dist/common.properties.min.css)

### Colors

Here is a full list of the available color tokens set for light and dark colors schemes (at time of writing):

```css
:root {

[color-scheme="light"] {
  color-scheme: light;

  --agnostic-warning-border-accent: var(--agnostic-warning-border-accent-modelight);
  --agnostic-warning-border: var(--agnostic-warning-border-modelight);
  --agnostic-warning-light: var(--agnostic-warning-light-modelight);
  --agnostic-warning-dark: var(--agnostic-warning-dark-modelight);
  --agnostic-secondary-hover: var(--agnostic-secondary-hover-modelight);
  --agnostic-secondary: var(--agnostic-secondary-modelight);
  --agnostic-primary-light: var(--agnostic-primary-light-modelight);
  --agnostic-primary-dark: var(--agnostic-primary-dark-modelight);
  --agnostic-primary-border: var(--agnostic-primary-border-modelight);
  --agnostic-primary-hover: var(--agnostic-primary-hover-modelight);
  --agnostic-primary: var(--agnostic-primary-modelight);
  --agnostic-light: var(--agnostic-light-modelight);
  --agnostic-dark: var(--agnostic-dark-modelight);
  --agnostic-gray-dark: var(--agnostic-gray-dark-modelight);
  --agnostic-gray-mid-dark: var(--agnostic-gray-mid-dark-modelight);
  --agnostic-gray-mid: var(--agnostic-gray-mid-modelight);
  --agnostic-gray-light: var(--agnostic-gray-light-modelight);
  --agnostic-gray-extra-light: var(--agnostic-gray-extra-light-modelight);
  --agnostic-error: var(--agnostic-error-modelight);
  --agnostic-error-light: var(--agnostic-error-light-modelight);
  --agnostic-error-dark: var(--agnostic-error-dark-modelight);
  --agnostic-error-border: var(--agnostic-error-border-modelight);
  --agnostic-disabled-color: var(--agnostic-gray-dark-modelight);
  --agnostic-disabled-bg: var(--agnostic-gray-light-modelight);
  --agnostic-action-border: var(--agnostic-action-border-modelight);
  --agnostic-action-light: var(--agnostic-action-light-modelight);
  --agnostic-action-dark: var(--agnostic-action-dark-modelight);
  --agnostic-action-hover: var(--agnostic-action-hover-modelight);
  --agnostic-action: var(--agnostic-action-modelight);
}

[color-scheme="dark"] {
  color-scheme: dark;

  --agnostic-warning-border-accent: var(--agnostic-warning-border-accent-modedark);
  --agnostic-warning-border: var(--agnostic-warning-border-modedark);
  --agnostic-warning-light: var(--agnostic-warning-light-modedark);
  --agnostic-warning-dark: var(--agnostic-warning-dark-modedark);
  --agnostic-secondary-hover: var(--agnostic-secondary-hover-modedark);
  --agnostic-secondary: var(--agnostic-secondary-modedark);
  --agnostic-primary-light: var(--agnostic-primary-light-modedark);
  --agnostic-primary-dark: var(--agnostic-primary-dark-modedark);
  --agnostic-primary-border: var(--agnostic-primary-border-modedark);
  --agnostic-primary-hover: var(--agnostic-primary-hover-modedark);
  --agnostic-primary: var(--agnostic-primary-modedark);
  --agnostic-light: var(--agnostic-light-modedark);
  --agnostic-dark: var(--agnostic-dark-modedark);
  --agnostic-gray-dark: var(--agnostic-gray-dark-modedark);
  --agnostic-gray-mid-dark: var(--agnostic-gray-mid-dark-modedark);
  --agnostic-gray-mid: var(--agnostic-gray-mid-modedark);
  --agnostic-gray-light: var(--agnostic-gray-light-modedark);
  --agnostic-gray-extra-light: var(--agnostic-gray-extra-light-modedark);
  --agnostic-error: var(--agnostic-error-modedark);
  --agnostic-error-light: var(--agnostic-error-light-modedark);
  --agnostic-error-dark: var(--agnostic-error-dark-modedark);
  --agnostic-error-border: var(--agnostic-error-border-modedark);
  --agnostic-disabled-color: var(--agnostic-gray-dark-modedark);
  --agnostic-disabled-bg: var(--agnostic-gray-light-modedark);
  --agnostic-action-border: var(--agnostic-action-border-modedark);
  --agnostic-action-light: var(--agnostic-action-light-modedark);
  --agnostic-action-dark: var(--agnostic-action-dark-modedark);
  --agnostic-action-hover: var(--agnostic-action-hover-modedark);
  --agnostic-action: var(--agnostic-action-modedark);
}
```

_The GitHub-hosted [colors.css](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-css/public/css-src/colors.css) on `master` is the most up-to-date source of truth. AgnosticUI derives these CSS custom properties colors from its [colors design tokens](https://github.com/AgnosticUI/agnosticui/tree/master/agnostic-css/tokens/colors)._


## Color Mode Toggling

AgnosticUI supports <span class="quoted">light</span> or <span class="quoted">dark</span> color schemes based on the user's system preferences [by leveraging the prefers-color-scheme](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-css/public/css-src/colors.css) media query. 

If you'd like to additionally support storing user preferences in `localStorage`, you will want to set up a color scheme toggle button. To do this, you will need to add a small script at the top of your
HTML page in your `<head>` so that the color mode is determined as early as possible. This is done to avoid page flashing.

There are many ways you may set this up, but here is one example approach. This script 
is setup to work in a [Vite](https://vitejs.dev/) environment (in our case we've used this script on an [Astro](https://astro.build/) site). As such, we have utilized the `import.meta.env.SSR` guards to ensure we're not attempting to access `localStorage` when we're server-side rendering. Put differently, the guarded code will only execute when being ran on the client:

```javascript
<html>
  <head>
     <!-- ...boilerplate <head> codes omitted for brevity -->
    <script>
    const STORAGE_KEY = "ag-color-scheme";

    // First checks localStorage then system preferences
    const getColorScheme = () => {
      // Only run this if NOT in SSR mode aka on the client
      if (!import.meta.env.SSR) {
        // If we have stored the user's preferences we will prefer that
        if (localStorage.getItem(STORAGE_KEY)) {
          return localStorage.getItem(STORAGE_KEY);
        } else {
          // Otherwise, we check their OS settings
          return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
        }
      }
    };

    const setStoredColorScheme = (colorScheme) => {
      if (!import.meta.env.SSR) {
        localStorage.setItem(STORAGE_KEY, colorScheme);
      }
    };

    const setTheme = (colorScheme) => {
      if (!import.meta.env.SSR) {
        document.firstElementChild.setAttribute("color-scheme", colorScheme);
      }
    };

    // Sets the theme as early as possible to avoid a flash of incorrect theme
    setTheme(getColorScheme());

    if (!import.meta.env.SSR) {
      document.addEventListener('DOMContentLoaded', () => {
        setTheme(getColorScheme());

        requestAnimationFrame(() => {
          // Of course, these could also be SVGs or text labels if you prefer
          let initial = "🔆";
          // The main mechanism is an attribute `color-scheme` placed on <html>
          if (
            document.firstElementChild.hasAttribute("color-scheme") &&
            document.firstElementChild.getAttribute("color-scheme") === "light"
          ) {
            // We're in light mode so show toggle to dark icon
            initial = "🌙";
          }
          // Creates a toggle button element
          const toggle = document.createElement("button");
          toggle.classList.add("item", "toggle");
          toggle.textContent = initial;

          const toggleHandler = (ev) => {
            // Get the current color mode then toggle it and update the store
            const currentMode =
              document.firstElementChild.getAttribute("color-scheme");

            const toggledColorScheme = currentMode === "dark" ? "light" : "dark";

            // Set toggled content and set html `color-scheme` attribute. Also, update local storage.
            toggle.textContent = toggledColorScheme === "dark" ? "🔆" : "🌙";
            setTheme(toggledColorScheme);
            setStoredColorScheme(toggledColorScheme);
          };
          toggle.addEventListener("click", toggleHandler)

          // Get navigation links and inject the toggle button at the end
          let navBars = document.getElementsByClassName("header-nav");
          if (navBars) {
            let headerNavBar = navBars[0];
            if (headerNavBar) {
              headerNavBar.insertAdjacentElement("beforeend", toggle);
            }
          }
        });
      });
    }
```

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

_See also the [Utilities page](./utilities) which goes over available CSS utilities for layout._

<div class="mbe24"></div>

## Design Tokens

Most of the CSS custom properties in `common.min.css` are derived from [design tokens](https://design-tokens.github.io/community-group/format/) using [Style Dictionary](https://github.com/amzn/style-dictionary). Likely, you'll simply want to override these custom properties from within your own scripts as described above. However, it is possible to more aggressively redefine some of the design token values to your liking and then rebuild the properties via the command-line. This might make sense if you're taking an aggressive forking strategy where you use AgnosticUI as a launching point of departure for your own completely customized codebase. Here are the places to look for how we build from design tokens: first look at the [design tokens themselves](https://github.com/AgnosticUI/agnosticui/tree/master/agnostic-css/tokens), and then have a look at the [build script](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-css/package.json#L29) which simply lets Style Dictionary convert the tokens into CSS custom properties [used here](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-css/public/css-dist/common.concat.css#L116).

<div class="mbe24"></div>

_Be forwarned that this sort of approach is probably not <span class="quoted">upgrade-safe</span> and you should not change the actual variable names used (just the values), as these variable names are referenced from within the AgnosticUI component codebase._
