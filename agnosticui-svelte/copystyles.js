/**
 * Node script to copy over CSS from <root>/button.css into ./src/Button.svelte
 */
const fs = require('fs');

/**
 * Buttons
 */
let css = fs.readFileSync('../agnosticui-css/button.css', 'utf8');
const buttonSvelte = fs.readFileSync('./src/stories/Button.svelte', 'utf8');
const styleRegex = /<style>([\s\S]*?)<\/style>/;
const buttonSvelteSynchronized = buttonSvelte.replace(styleRegex, `<style>\n${css}\n</style>`);
fs.writeFileSync('./src/stories/Button.svelte', buttonSvelteSynchronized, 'utf8');

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

const buttonGroupSvelte = fs.readFileSync('./src/stories/ButtonGroup.svelte', 'utf8');
const buttonGroupSvelteSynchronized = buttonGroupSvelte.replace(styleRegex, `<style>\n${css}\n</style>`);
fs.writeFileSync('./src/stories/ButtonGroup.svelte', buttonGroupSvelteSynchronized, 'utf8');

/**
 * Progress
 */
css = fs.readFileSync('../agnosticui-css/progress.css', 'utf8');
const progressSvelte = fs.readFileSync('./src/stories/Progress.svelte', 'utf8');
const progressSvelteSynchronized = progressSvelte.replace(styleRegex, `<style>\n${css}\n</style>`);
fs.writeFileSync('./src/stories/Progress.svelte', progressSvelteSynchronized, 'utf8');


/**
 * Card 
 */
css = fs.readFileSync('../agnosticui-css/card.css', 'utf8');
const cardSvelte = fs.readFileSync('./src/stories/Card.svelte', 'utf8');
const cardSvelteSynchronized = cardSvelte.replace(styleRegex, `<style>\n${css}\n</style>`);
fs.writeFileSync('./src/stories/Card.svelte', cardSvelteSynchronized, 'utf8');


/**
 * Header 
 */
css = fs.readFileSync('../agnosticui-css/header.css', 'utf8');
css = css.replace(/(.*header )(img)/, '$1:global($2)')
css = css.replace(/(.*header-base )(img)/, '$1:global($2)')
const headerSvelte = fs.readFileSync('./src/stories/Header.svelte', 'utf8');
const headerSynchronized = headerSvelte.replace(styleRegex, `<style>\n${css}\n</style>`);
fs.writeFileSync('./src/stories/Header.svelte', headerSynchronized, 'utf8');


/**
 * Header Navigation & Header Nav Item
 */
css = fs.readFileSync('../agnosticui-css/headernav.css', 'utf8');
const headerNavSvelte = fs.readFileSync('./src/stories/HeaderNav.svelte', 'utf8');
const headerNavSynchronized = headerNavSvelte.replace(styleRegex, `<style>\n${css}\n</style>`);
fs.writeFileSync('./src/stories/HeaderNav.svelte', headerNavSynchronized, 'utf8');

css = fs.readFileSync('../agnosticui-css/headernavitem.css', 'utf8');
const headerNavItemSvelte = fs.readFileSync('./src/stories/HeaderNavItem.svelte', 'utf8');
const headerNavItemSynchronized = headerNavItemSvelte.replace(styleRegex, `<style>\n${css}\n</style>`);
fs.writeFileSync('./src/stories/HeaderNavItem.svelte', headerNavItemSynchronized, 'utf8');