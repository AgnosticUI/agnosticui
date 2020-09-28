const fs = require('fs');

/**
 * Buttons
 */
let css = fs.readFileSync('../agnosticui-css/button.css', 'utf8');
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
css = css.replace(/(.*btn-group > )(button.* )/, '$1:global($2) ')
css = css.replace(/(.*btn-group > )(button.* )/, '$1:global($2) ')
css = css.replace(/(.*btn-group > )(button.* )/, '$1:global($2) ')
fs.writeFileSync('./src/stories/button-group.css', css, 'utf8');


/**
 * Progress
 */
css = fs.readFileSync('../agnosticui-css/progress.css', 'utf8');
fs.writeFileSync('./src/stories/progress.css', css, 'utf8');

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
 * FlexGrid
 */
css = fs.readFileSync('../agnosticui-css/flexboxgrid-custom.css', 'utf8');
fs.writeFileSync('./src/stories/FlexGrid/FlexBoxGrid2Custom.css', css, 'utf8');


/**
 * FlexGrid (grid, row, col get concatenated together. They're separated for Svelte SFC requirements fwiw.)
 */
const gridCss = fs.readFileSync('../agnosticui-css/flexboxgrid-grid.css', 'utf8');
const rowCss = fs.readFileSync('../agnosticui-css/flexboxgrid-row.css', 'utf8');
const colCss = fs.readFileSync('../agnosticui-css/flexboxgrid-col.css', 'utf8');
const cssConcatenated = `${gridCss}\n${rowCss}\n${colCss}`;
fs.writeFileSync('./src/stories/FlexGrid/FlexBoxGrid2Custom.module.css', cssConcatenated, 'utf8');
