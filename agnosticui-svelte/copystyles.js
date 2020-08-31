/**
 * Node script to copy over CSS from <root>/button.css into ./src/Button.svelte
 */
const fs = require('fs');
const css = fs.readFileSync('../agnosticui-css/button.css', 'utf8');
const svelte = fs.readFileSync('./src/stories/Button.svelte', 'utf8');
const styleRegex = /<style>([\s\S]*?)<\/style>/;
const svelteWithSynchronizedStyles = svelte.replace(styleRegex, `<style>\n${css}\n</style>`);
fs.writeFileSync('./src/stories/Button.svelte', svelteWithSynchronizedStyles, 'utf8');