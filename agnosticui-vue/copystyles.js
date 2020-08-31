/**
 * Node script to copy over CSS from <root>/button.css into ./src/Button.svelte
 */
const fs = require('fs');
const css = fs.readFileSync('../button.css', 'utf8');
const svelte = fs.readFileSync('./src/stories/Button.vue', 'utf8');
const styleRegex = /<style>([\s\S]*?)<\/style>/;
const withSynchronizedStyles = svelte.replace(styleRegex, `<style>\n${css}\n</style>`);
fs.writeFileSync('./src/stories/Button.vue', withSynchronizedStyles, 'utf8');