/* eslint-env es6 */
/* eslint-disable */
const fs = require('fs');

/**
 * Common (prerequisite css custom properties aka design tokens we need defined first)
 */
let css = fs.readFileSync(
  '../agnostic-css/public/css-dist/common.min.css',
  'utf8'
);
fs.writeFileSync('./libs/ag/styles/common.min.css', css, 'utf8');

/**
 * Common styles broken up into individual modules so they can be imported individually
 */
css = fs.readFileSync(
  '../agnostic-css/public/css-dist/common.properties.min.css',
  'utf8'
);
fs.writeFileSync('./libs/ag/styles/common.properties.min.css', css, 'utf8');
css = fs.readFileSync(
  '../agnostic-css/public/css-dist/common.resets.min.css',
  'utf8'
);
fs.writeFileSync('./libs/ag/styles/common.resets.min.css', css, 'utf8');
css = fs.readFileSync(
  '../agnostic-css/public/css-dist/common.utilities.min.css',
  'utf8'
);
fs.writeFileSync('./libs/ag/styles/common.utilities.min.css', css, 'utf8');

/**
 * Alert
 */
css = fs.readFileSync('../agnostic-css/src/components/alert/alert.css', 'utf8');
fs.writeFileSync('./libs/ag/src/lib/alert.css', css, 'utf8');
/**
 * Toasts
 */
 css = fs.readFileSync('../agnostic-css/src/components/alert/toast.css', 'utf8');
 fs.writeFileSync('./libs/ag/src/lib/toasts.css', css, 'utf8');
 
/**
 * Avatar
 */
css = fs.readFileSync(
  '../agnostic-css/src/components/avatar/avatar.css',
  'utf8'
);
fs.writeFileSync('./libs/ag/src/lib/avatar.css', css, 'utf8');

/**
 * Breadcrumb
 */
css = fs.readFileSync(
  '../agnostic-css/src/components/breadcrumb/breadcrumb.css',
  'utf8'
);
fs.writeFileSync('./libs/ag/src/lib/breadcrumb.css', css, 'utf8');

/**
 * Buttons
 */
// agnostic-angular/libs/ag/src/lib/card.css
css = fs.readFileSync(
  '../agnostic-css/src/components/button/button.css',
  'utf8'
);
fs.writeFileSync('./libs/ag/src/lib/button.css', css, 'utf8');

/**
 * Button Groups
 */
// ** These are currently locked **
// Due to the structure differences because of angular's host elements (https://github.com/angular/angular/issues/18877)
// I've customized the button-group.css solution
// TODO -- reconcile above so I can copy these from agnostic-css
// Might be able to replace .btn-group > button by giving the button a class like
// .btn-group-button then can do .btn-group-button:first-of-type and :last-of-type solution
//  css = fs.readFileSync("../agnostic-css/button-group.css", "utf8");
//  fs.writeFileSync("./libs/ag/src/lib/button-group.css", css, "utf8");

/**
 * Card
 */
css = fs.readFileSync('../agnostic-css/src/components/card/card.css', 'utf8');
fs.writeFileSync('./libs/ag/src/lib/card.css', css, 'utf8');

/**
 * Choice Inputs (Radios & Checkboxes)
 */
css = fs.readFileSync(
  '../agnostic-css/src/components/choice-input/choice-input.css',
  'utf8'
);
fs.writeFileSync('./libs/ag/src/lib/choice-input.css', css, 'utf8');

/**
 * Close
 */
css = fs.readFileSync('../agnostic-css/src/components/close/close.css', 'utf8');
fs.writeFileSync('./libs/ag/src/lib/close.css', css, 'utf8');

/**
 * Dialog
 */
css = fs.readFileSync(
  '../agnostic-css/src/components/dialog/dialog.css',
  'utf8'
);
fs.writeFileSync('./libs/ag/src/lib/dialog.css', css, 'utf8');

/**
 * Disclose
 */
css = fs.readFileSync(
  '../agnostic-css/src/components/disclose/disclose.css',
  'utf8'
);
fs.writeFileSync('./libs/ag/src/lib/disclose.css', css, 'utf8');

/**
 * Divider
 */
css = fs.readFileSync(
  '../agnostic-css/src/components/divider/divider.css',
  'utf8'
);
fs.writeFileSync('./libs/ag/src/lib/divider.css', css, 'utf8');

/**
 * EmptyState
 */
 css = fs.readFileSync(
  '../agnostic-css/src/components/empty/empty.css',
  'utf8'
);
fs.writeFileSync('./libs/ag/src/lib/empty-state.css', css, 'utf8');

/**
 * Icons
 */
css = fs.readFileSync('../agnostic-css/src/components/icon/icon.css', 'utf8');
fs.writeFileSync('./libs/ag/src/lib/icon.css', css, 'utf8');

/**
 * Loader
 */
css = fs.readFileSync('../agnostic-css/src/components/loaders/loading.css', 'utf8');
fs.writeFileSync('./libs/ag/src/lib/loader.css', css, 'utf8');

/**
 * Pagination
 */
css = fs.readFileSync(
  '../agnostic-css/src/components/pagination/pagination.css',
  'utf8'
);
fs.writeFileSync('./libs/ag/src/lib/pagination.css', css, 'utf8');

/**
 * Progress
 */
css = fs.readFileSync(
  '../agnostic-css/src/components/progress/progress.css',
  'utf8'
);
fs.writeFileSync('./libs/ag/src/lib/progress.css', css, 'utf8');

/**
 * Header
 */
css = fs.readFileSync(
  '../agnostic-css/src/components/header/header.css',
  'utf8'
);
fs.writeFileSync('./libs/ag/src/lib/header.css', css, 'utf8');

/**
 * Header Navigation & Nav Item
 */
css = fs.readFileSync(
  '../agnostic-css/src/components/header/headernav.css',
  'utf8'
);
fs.writeFileSync('./libs/ag/src/lib/headernav.css', css, 'utf8');
css = fs.readFileSync(
  '../agnostic-css/src/components/header/headernavitem.css',
  'utf8'
);
fs.writeFileSync('./libs/ag/src/lib/headernavitem.css', css, 'utf8');

/**
 * Inputs
 */
let inputCss = fs.readFileSync(
  '../agnostic-css/src/components/input/input.css',
  'utf8'
);
let inputAddonCss = fs.readFileSync(
  '../agnostic-css/src/components/input/inputaddonitem.css',
  'utf8'
);
const inputCSSConcatenated = `${inputCss}\n${inputAddonCss}`;
fs.writeFileSync('./libs/ag/src/lib/input.css', inputCSSConcatenated, 'utf8');

/**
 * Select
 */
css = fs.readFileSync(
  '../agnostic-css/src/components/select/select.css',
  'utf8'
);
fs.writeFileSync('./libs/ag/src/lib/select.css', css, 'utf8');

/**
 * Spinner
 */
css = fs.readFileSync(
  '../agnostic-css/src/components/loaders/spinner.css',
  'utf8'
);
fs.writeFileSync('./libs/ag/src/lib/spinner.css', css, 'utf8');

/**
 * Switch
 */
css = fs.readFileSync(
  '../agnostic-css/src/components/switch/switch.css',
  'utf8'
);
fs.writeFileSync('./libs/ag/src/lib/switch.css', css, 'utf8');

/**
 * Tabs
 */
css = fs.readFileSync('../agnostic-css/src/components/tabs/tabs.css', 'utf8');
fs.writeFileSync('./libs/ag/src/lib/tabs.css', css, 'utf8');

/**
 * Tags
 */
css = fs.readFileSync('../agnostic-css/src/components/tag/tag.css', 'utf8');
fs.writeFileSync('./libs/ag/src/lib/tag.css', css, 'utf8');

/**
 * Tables
 */
css = fs.readFileSync('../agnostic-css/src/components/table/table.css', 'utf8');
fs.writeFileSync('./libs/ag/src/lib/table.css', css, 'utf8');
