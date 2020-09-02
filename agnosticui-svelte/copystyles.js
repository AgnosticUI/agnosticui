/**
 * Node script to copy over CSS from <root>/button.css into ./src/Button.svelte
 */
const fs = require('fs');
let css = fs.readFileSync('../agnosticui-css/button.css', 'utf8');

// For svelte we have to do a replacement since svg is a global:
// .btn-icon-left svg { /* Svelte needs :global(svg) here! */
// .btn-icon-right svg { /* Svelte needs :global(svg) here! *
css = css.replace(/(.*btn-icon-left )(svg)/, '$1:global($2)'); // :global(svg)
css = css.replace(/(.*btn-icon-right )(svg)/, '$1:global($2)')

const svelte = fs.readFileSync('./src/stories/Button.svelte', 'utf8');
const styleRegex = /<style>([\s\S]*?)<\/style>/;
const svelteWithSynchronizedStyles = svelte.replace(styleRegex, `<style>\n${css}\n</style>`);
fs.writeFileSync('./src/stories/Button.svelte', svelteWithSynchronizedStyles, 'utf8');


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

const svelteButtonGroup = fs.readFileSync('./src/stories/ButtonGroup.svelte', 'utf8');
const svelteBtnGroupsSynchronizedStyles = svelteButtonGroup.replace(styleRegex, `<style>\n${css}\n</style>`);
fs.writeFileSync('./src/stories/ButtonGroup.svelte', svelteBtnGroupsSynchronizedStyles, 'utf8');
