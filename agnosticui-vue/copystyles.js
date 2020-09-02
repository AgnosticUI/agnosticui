/**
 * Node script to copy over CSS from <root>/button.css into ./src/Button.svelte
 */
const fs = require('fs');

/**
 * Buttons
 */
let css = fs.readFileSync('../agnosticui-css/button.css', 'utf8');
const vue = fs.readFileSync('./src/stories/Button.vue', 'utf8');
const styleRegex = /<style>([\s\S]*?)<\/style>/;
let withSynchronizedStyles = vue.replace(styleRegex, `<style>\n${css}\n</style>`);
fs.writeFileSync('./src/stories/Button.vue', withSynchronizedStyles, 'utf8');

/**
 * Button Groups
 */
css = fs.readFileSync('../agnosticui-css/button-group.css', 'utf8');
const vueButtonGroup = fs.readFileSync('./src/stories/ButtonGroup.vue', 'utf8');
const vueBtnGroupsSynchronizedStyles = vueButtonGroup.replace(styleRegex, `<style>\n${css}\n</style>`);
fs.writeFileSync('./src/stories/ButtonGroup.vue', vueBtnGroupsSynchronizedStyles, 'utf8');
