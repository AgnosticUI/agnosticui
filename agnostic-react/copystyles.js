const fs = require('fs');

/**
 * Common (prerequisite css custom properties aka design tokens we need defined first)
 */
let css = fs.readFileSync('../agnostic-css/css-dist/common.min.css', 'utf8');
fs.writeFileSync('./src/css/common.min.css', css, 'utf8');

/**
 * Buttons
 */
css = fs.readFileSync('../agnostic-css/button.css', 'utf8');
fs.writeFileSync('./src/button.css', css, 'utf8');

/**
 * Button Groups
 */
css = fs.readFileSync('../agnostic-css/button-group.css', 'utf8');
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
 * Progress
 */
css = fs.readFileSync('../agnostic-css/progress.css', 'utf8');
fs.writeFileSync('./src/progress.css', css, 'utf8');

/**
 * Tabs
 */
css = fs.readFileSync('../agnostic-css/tabs.css', 'utf8');
fs.writeFileSync('./src/tabs.css', css, 'utf8');

/**
 * Card
 */
css = fs.readFileSync('../agnostic-css/card.css', 'utf8');
fs.writeFileSync('./src/card.css', css, 'utf8');

/**
 * Header
 */
css = fs.readFileSync('../agnostic-css/header.css', 'utf8');
fs.writeFileSync('./src/header.css', css, 'utf8');

/**
 * Header Navigation & Nav Item
 */
css = fs.readFileSync('../agnostic-css/headernav.css', 'utf8');
fs.writeFileSync('./src/headernav.css', css, 'utf8');
css = fs.readFileSync('../agnostic-css/headernavitem.css', 'utf8');
fs.writeFileSync('./src/headernavitem.css', css, 'utf8');

/**
 * Inputs
 */
const inputCss = fs.readFileSync('../agnostic-css/input.css', 'utf8');
const inputAddonCss = fs.readFileSync('../agnostic-css/inputaddonitem.css', 'utf8');
const inputCSSConcatenated = `${inputCss}\n${inputAddonCss}`;
fs.writeFileSync('./src/input.css', inputCSSConcatenated, 'utf8');

/**
 * Choice Inputs (Radios & Checkboxes)
 */
css = fs.readFileSync('../agnostic-css/choice-input.css', 'utf8');
fs.writeFileSync('./src/choice-input.css', css, 'utf8');

/**
 * Switch
 */
css = fs.readFileSync('../agnostic-css/switch.css', 'utf8');
fs.writeFileSync('./src/switch.css', css, 'utf8');
