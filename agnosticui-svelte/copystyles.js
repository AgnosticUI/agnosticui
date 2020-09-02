/**
 * Node script to copy over CSS from <root>/button.css into ./src/Button.svelte
 */
const fs = require('fs');

/**
 * Buttons
 */
let css = fs.readFileSync('../agnosticui-css/button.css', 'utf8');

// For svelte we have to do a replacement since svg is a global:
css = css.replace(/(.*btn-icon-left )(svg)/, '$1:global($2)'); // :global(svg)
css = css.replace(/(.*btn-icon-right )(svg)/, '$1:global($2)')
css = css.replace(/(.*btn-icon-left )(\.btn-icon)/, '$1:global($2)'); // :global(svg)
css = css.replace(/(.*btn-icon-right )(\.btn-icon)/, '$1:global($2)')

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
