const fs = require('fs');

/**
 * Common (prerequisite css custom properties aka design tokens we need defined first)
 */
let css = fs.readFileSync('../agnostic-css/public/css-dist/common.min.css', 'utf8');
fs.writeFileSync('./src/css/common.min.css', css, 'utf8');

/**
 * Common styles broken up into individual modules so they can be imported individually
 */
css = fs.readFileSync('../agnostic-css/public/css-dist/common.properties.min.css', 'utf8');
fs.writeFileSync('./src/css/common.properties.min.css', css, 'utf8');
css = fs.readFileSync('../agnostic-css/public/css-dist/common.resets.min.css', 'utf8');
fs.writeFileSync('./src/css/common.resets.min.css', css, 'utf8');
css = fs.readFileSync('../agnostic-css/public/css-dist/common.utilities.min.css', 'utf8');
fs.writeFileSync('./src/css/common.utilities.min.css', css, 'utf8');
css = fs.readFileSync('../agnostic-css/public/css-dist/opinions.min.css', 'utf8');
fs.writeFileSync('./src/css/opinions.min.css', css, 'utf8');

/**
 * Alert
 */
css = fs.readFileSync('../agnostic-css/src/components/alert/alert.css', 'utf8');
fs.writeFileSync('./src/alert.css', css, 'utf8');
css = fs.readFileSync('../agnostic-css/src/components/alert/toast.css', 'utf8');
fs.writeFileSync('./src/toast.css', css, 'utf8');

/**
 * Avatar
 */
css = fs.readFileSync('../agnostic-css/src/components/avatar/avatar.css', 'utf8');
fs.writeFileSync('./src/avatar.css', css, 'utf8');

/**
 * Breadcrumb
 */
css = fs.readFileSync('../agnostic-css/src/components/breadcrumb/breadcrumb.css', 'utf8');
fs.writeFileSync('./src/breadcrumb.css', css, 'utf8');

/**
 * Buttons
 */
css = fs.readFileSync('../agnostic-css/src/components/button/button.css', 'utf8');
fs.writeFileSync('./src/button.css', css, 'utf8');

/**
 * Button Groups
 */
css = fs.readFileSync('../agnostic-css/src/components/button/button-group.css', 'utf8');
/*
  Need to match all three of these:
  .btn-group > button {...
  .btn-group > button:not(:last-child) {...
  .btn-group > button:not(:first-child) {...
  */
css = css.replace(/(.*btn-group > )(button.* )/, '$1:global($2) ');
css = css.replace(/(.*btn-group > )(button.* )/, '$1:global($2) ');
css = css.replace(/(.*btn-group > )(button.* )/, '$1:global($2) ');
fs.writeFileSync('./src/button-group.css', css, 'utf8');

/**
 * Card
 */
css = fs.readFileSync('../agnostic-css/src/components/card/card.css', 'utf8');
fs.writeFileSync('./src/card.css', css, 'utf8');

/**
 * Close
 */
css = fs.readFileSync('../agnostic-css/src/components/close/close.css', 'utf8');
fs.writeFileSync('./src/close.css', css, 'utf8');

/**
* Dialog
*/
css = fs.readFileSync('../agnostic-css/src/components/dialog/dialog.css', 'utf8');
fs.writeFileSync('./src/dialog.css', css, 'utf8');
css = fs.readFileSync('../agnostic-css/src/components/dialog/drawer.css', 'utf8');
fs.writeFileSync('./src/drawer.css', css, 'utf8');

/**
 * Disclose
 */
css = fs.readFileSync('../agnostic-css/src/components/disclose/disclose.css', 'utf8');
fs.writeFileSync('./src/disclose.css', css, 'utf8');

/**
 * Divider
 */
css = fs.readFileSync('../agnostic-css/src/components/divider/divider.css', 'utf8');
fs.writeFileSync('./src/divider.css', css, 'utf8');

/**
 * EmptyState
 */
css = fs.readFileSync('../agnostic-css/src/components/empty/empty.css', 'utf8');
fs.writeFileSync('./src/empty-state.css', css, 'utf8');

/**
 * Icons
 */
css = fs.readFileSync('../agnostic-css/src/components/icon/icon.css', 'utf8');
//  We need to replace .icon* > svg with .icon* > global(svg)
css = css.replace(/(\.icon.* )> (svg)/g, '$1> :global($2)');

fs.writeFileSync('./src/icon.module.css', css, 'utf8');

/**
 * Pagination
 */
css = fs.readFileSync('../agnostic-css/src/components/pagination/pagination.css', 'utf8');
fs.writeFileSync('./src/pagination.css', css, 'utf8');

/**
 * Progress
 */
css = fs.readFileSync('../agnostic-css/src/components/progress/progress.css', 'utf8');
fs.writeFileSync('./src/progress.css', css, 'utf8');

/**
 * Loader
 */
css = fs.readFileSync('../agnostic-css/src/components/loaders/loading.css', 'utf8');
fs.writeFileSync('./src/loader.css', css, 'utf8');

/**
 * Spinner
 */
css = fs.readFileSync('../agnostic-css/src/components/loaders/spinner.css', 'utf8');
fs.writeFileSync('./src/spinner.css', css, 'utf8');

/**
 * Tags
 */
css = fs.readFileSync('../agnostic-css/src/components/tag/tag.css', 'utf8');
fs.writeFileSync('./src/tag.css', css, 'utf8');

/**
 * Tables
 */
css = fs.readFileSync('../agnostic-css/src/components/table/table.css', 'utf8');
fs.writeFileSync('./src/table.css', css, 'utf8');

/**
 * Tabs
 */
css = fs.readFileSync('../agnostic-css/src/components/tabs/tabs.css', 'utf8');
fs.writeFileSync('./src/tabs.css', css, 'utf8');

/**
 * Header
 */
css = fs.readFileSync('../agnostic-css/src/components/header/header.css', 'utf8');
fs.writeFileSync('./src/header.css', css, 'utf8');

/**
 * Header Navigation & Nav Item
 */
css = fs.readFileSync('../agnostic-css/src/components/header/headernav.css', 'utf8');
fs.writeFileSync('./src/headernav.css', css, 'utf8');
css = fs.readFileSync('../agnostic-css/src/components/header/headernavitem.css', 'utf8');
fs.writeFileSync('./src/headernavitem.css', css, 'utf8');

/**
 * Inputs
 */
const inputCss = fs.readFileSync('../agnostic-css/src/components/input/input.css', 'utf8');
const inputAddonCss = fs.readFileSync(
  '../agnostic-css/src/components/input/inputaddonitem.css',
  'utf8',
);
const inputCSSConcatenated = `${inputCss}\n${inputAddonCss}`;
fs.writeFileSync('./src/input.css', inputCSSConcatenated, 'utf8');

/**
 * Choice Inputs (Radios & Checkboxes)
 */
css = fs.readFileSync('../agnostic-css/src/components/choice-input/choice-input.css', 'utf8');
fs.writeFileSync('./src/choice-input.css', css, 'utf8');

/**
* Select
*/
css = fs.readFileSync('../agnostic-css/src/components/select/select.css', 'utf8');
fs.writeFileSync('./src/select.css', css, 'utf8');

/**
 * Switch
 */
css = fs.readFileSync('../agnostic-css/src/components/switch/switch.css', 'utf8');
fs.writeFileSync('./src/switch.css', css, 'utf8');
