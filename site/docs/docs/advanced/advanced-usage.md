# Advanced Usage

The documentation below is a work-in-progress as we're still refactoring the `copystyles.js` scripts to import the globals in a more modular way across frameworks. 

## Module CSS

**THIS DOES NOT YET WORK (but will soon)!**

See https://github.com/AgnosticUI/agnosticui/issues/64 for progress.

~~Generally, we advise that you import AgnosticUI's `common.min.css` for ease of use. However, you may have use cases which are better served by importing only certain global CSS as individual modules. For example, let's say you wish to import the reset and CSS custom properties, but not the utilities. In this case you can instead do:~~

```javascript
import "agnostic-css/dist/common.properties.min.css";
import "agnostic-css/dist/common.reset.min.css";
// NOTE no import "agnostic-css/dist/common.utilities.min.css";
```

