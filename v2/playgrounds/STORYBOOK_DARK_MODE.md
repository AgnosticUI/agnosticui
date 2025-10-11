storybook-addon-dark-mode-toggle is a popular Storybook addon that adds a toggle button to the Storybook UI toolbar, allowing users to switch between light and dark themes for their components.
Toggles a data attribute: The addon works by setting a data attribute (e.g., data-theme="dark") on a specified DOM element, typically the <html> or <body> tag. Your app's CSS then uses this attribute to apply the correct styles.
Setup
Add the package: Use npm or yarn to install the addon as a development dependency.
```sh
npm install --save-dev storybook-addon-dark-mode-toggle
```

Register the addon: In your .storybook/main.js file, add 'storybook-addon-dark-mode-toggle' to the addons array.

```javascript
// .storybook/main.js
module.exports = {
  addons: ['storybook-addon-dark-mode-toggle'],
  // ...other config
};
```

Configure in preview.js (optional): To customize the addon's behavior, add a data-theme-toggle key to the parameters export in your .storybook/preview.js file.

```javascript
// .storybook/preview.js
export const parameters = {
  'data-theme-toggle': {
    querySelector: 'html', // The element to add the attribute to
    'data-target': 'theme', // The name of the data attribute
    default: 'light', // The initial theme
    values: {
      dark: 'dark', // The attribute value for dark mode
      light: 'light', // The attribute value for light mode
    },
  },
};
```

## Usage with component styling
For the toggle to affect your components, your CSS must respond to the data attribute.

### Example using CSS variables
Create a global stylesheet that uses CSS variables and targets the data attribute. 
src/styles/theme.css
```css
/* Light theme defaults */
:root {
  --primary-color: #007bff;
  --background-color: #ffffff;
  --text-color: #333333;
}

/* Dark theme overrides */
[data-theme='dark'] {
  --primary-color: #89cff0;
  --background-color: #222222;
  --text-color: #dddddd;
}
```

We're currently doing some of above (in a way appropriate for Lit and web components). See: @v2/lib/src/components/IconButton/core/_IconButton.ts

```css
/* IMPORTANT HOOKS */
@media (prefers-color-scheme: dark)
 [data-theme="dark"]
```

We're already importing the light and dark mode based CSS files which supply the light/dark custom properties in the Storybook's preview.js files for Vue|React|Lit storybooks in their respective .storybook/preview.js files:

```js
import "agnosticui-core/styles/tokens.css";
import "agnosticui-core/styles/tokens-dark.css";
```
