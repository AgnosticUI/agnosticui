# Advanced Usage

This page will document some of the more advanced uses of AgnosticUI…

## Modular CSS Imports

Generally, we advise that you import AgnosticUI's `common.min.css` for ease of use. However, you may wish to import only certain global CSS files in a more modular way. For example, if you wish to import the reset and custom properties, but not the utilities, you could import just those files.

<div class="mbe24"></div>

_Note that the framework implementations (React, Svelte, and so on), all include the common CSS so you do not need to pull in the `agnostic-css` package if you've, for example, installed `agnostic-react`.)_

<div class="mbe24"></div>

The following are example imports which vary slightly for each framework package:

### React
```javascript
import "agnostic-react/dist/common.properties.min.css";
import "agnostic-react/dist/common.reset.min.css";
// NOTE no import "agnostic-css/dist/common.utilities.min.css";
```

### Vue 3

```javascript
import "agnostic-vue/dist/common.properties.min.css";
import "agnostic-vue/dist/common.reset.min.css";
// NOTE no import "agnostic-vue/dist/common.utilities.min.css";
```
### Svelte

```javascript
import "agnostic-svelte/css/common.properties.min.css";
import "agnostic-svelte/css/common.reset.min.css";
// NOTE no import "agnostic-svelte/css/common.utilities.min.css";
```
### Angular

In your Angular configuration (likely `angular.json`) ensure you're including
the common AgnosticUI styles:

<div class="mbe16"></div>

```json
  "styles": ["agnostic-angular/common.properties.css", "agnostic-angular/dist/common.reset.min.css"],
  ...more json
```

### Fine, but Which Files Are Mandatory to Import?

Since the AgnosticUI components rely on the CSS custom properties to defined, the `common.properties.min.css` import is required.

<div class="mbe24"></div>

If you are already using a standard `reset.css` ([Eric Meyer's reset.css](https://meyerweb.com/eric/tools/css/reset/), [normalize.css](https://necolas.github.io/normalize.css/), or similar), it &ldquo;should be fine&rdquo;, but we leave it to you to test and/or compare the resets to ours.

<div class="mbe24"></div>

The CSS utilities are definitely <u>not</u> a requirement unless you want to use them (e.g. `mbe16`, `flex items-center justify-center`, `text-uppercase`, and so on). So, it's a performance win to use the modular approach described above if you don't plan to leverage those in the first place.
