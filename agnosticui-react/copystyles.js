const fs = require('fs');

/**
 * Common (prerequisite css custom properties aka design tokens we need defined first)
 */
let css = fs.readFileSync('../agnosticui-css/css-dist/common.min.css', 'utf8');
fs.writeFileSync('./src/css/common.min.css', css, 'utf8');

/**
 * Buttons
 */
css = fs.readFileSync('../agnosticui-css/button.css', 'utf8');
fs.writeFileSync('./src/stories/button.css', css, 'utf8');

/**
 * Button Groups
 */
css = fs.readFileSync('../agnosticui-css/button-group.css', 'utf8');
/*
  Need to match all three of these:
  .btn-group > button {...
  .btn-group > button:not(:last-child) {...
  .btn-group > button:not(:first-child) {...
  */
css = css.replace(/(.*btn-group > )(button.* )/, '$1:global($2) ');
css = css.replace(/(.*btn-group > )(button.* )/, '$1:global($2) ');
css = css.replace(/(.*btn-group > )(button.* )/, '$1:global($2) ');
fs.writeFileSync('./src/stories/button-group.css', css, 'utf8');

/**
 * Progress
 */
css = fs.readFileSync('../agnosticui-css/progress.css', 'utf8');
fs.writeFileSync('./src/stories/progress.css', css, 'utf8');

/**
 * Tabs
 */
css = fs.readFileSync('../agnosticui-css/tabs.css', 'utf8');
fs.writeFileSync('./src/stories/tabs.css', css, 'utf8');

/**
 * Card
 */
css = fs.readFileSync('../agnosticui-css/card.css', 'utf8');
fs.writeFileSync('./src/stories/card.css', css, 'utf8');

/**
 * Header
 */
css = fs.readFileSync('../agnosticui-css/header.css', 'utf8');
fs.writeFileSync('./src/stories/header.css', css, 'utf8');

/**
 * Header Navigation & Nav Item
 */
css = fs.readFileSync('../agnosticui-css/headernav.css', 'utf8');
fs.writeFileSync('./src/stories/headernav.css', css, 'utf8');
css = fs.readFileSync('../agnosticui-css/headernavitem.css', 'utf8');
fs.writeFileSync('./src/stories/headernavitem.css', css, 'utf8');

/**
 * Inputs
 */
let inputCss = fs.readFileSync('../agnosticui-css/input.css', 'utf8');
let inputAddonCss = fs.readFileSync('../agnosticui-css/inputaddonitem.css', 'utf8');
const inputCSSConcatenated = `${inputCss}\n${inputAddonCss}`;
fs.writeFileSync('./src/stories/input.css', inputCSSConcatenated, 'utf8');

/**
 * FlexGrid (grid, row, col get concatenated together. They're separated for Svelte SFC requirements fwiw.)
 */
const gridCss = fs.readFileSync('../agnosticui-css/flexboxgrid-grid.css', 'utf8');
const rowCss = fs.readFileSync('../agnosticui-css/flexboxgrid-row.css', 'utf8');
const colCss = fs.readFileSync('../agnosticui-css/flexboxgrid-col.css', 'utf8');
const cssConcatenated = `${gridCss}\n${rowCss}\n${colCss}`;
fs.writeFileSync('./src/stories/FlexGrid/FlexBoxGrid2Custom.module.css', cssConcatenated, 'utf8');

/**
 * Choice Inputs (Radios & Checkboxes)
 */
css = fs.readFileSync('../agnosticui-css/choice-input.css', 'utf8');
fs.writeFileSync('./src/stories/choice-input.css', css, 'utf8');

/**
 * Switch
 */
css = fs.readFileSync('../agnosticui-css/switch.css', 'utf8');
fs.writeFileSync('./src/stories/switch.css', css, 'utf8');
