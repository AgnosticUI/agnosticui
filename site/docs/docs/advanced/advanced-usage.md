# Advanced Usage

This page will document some of the more advanced uses of AgnosticUI…

## Modular CSS Imports

Generally, we advise that you import AgnosticUI's `common.min.css` for ease of use. However, you may wish to import only certain global CSS files in a more modular way. For example, if you wish to import the reset and custom properties, but not the utilities, you could import just those files:

```javascript
import "agnostic-css/css/common.properties.min.css";
import "agnostic-css/css/common.reset.min.css";
// NOTE no import "agnostic-css/css/common.utilities.min.css";
```

### Fine, but Which Files Are Mandatory to Import?

Since the AgnosticUI components rely on the CSS custom properties to defined, the `common.properties.min.css` import is required.

<div class="mbe24"></div>

If you are already using a standard `reset.css` ([Eric Meyer's reset.css](https://meyerweb.com/eric/tools/css/reset/), [normalize.css](https://necolas.github.io/normalize.css/), or similar), it &ldquo;should be fine&rdquo;, but we leave it to you to test and/or compare the resets to ours.

<div class="mbe24"></div>

The CSS utilities are definitely <u>not</u> a requirement unless you want to use them (e.g. `mbe16`, `flex items-center justify-center`, `text-uppercase`, and so on). So, it's a performance win to use the modular approach described above if you don't plan to leverage those in the first place.
