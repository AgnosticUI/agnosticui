/**
 * Node script to copy over CSS from <root>/button.css into ./src/Button.svelte
 */
const fs = require('fs');

/**
 * Buttons
 */
let css = fs.readFileSync('../agnosticui-css/button.css', 'utf8');
const vue = fs.readFileSync('./src/stories/Button.vue', 'utf8');
const styleRegex = /<style module>([\s\S]*?)<\/style>/;
let withSynchronizedStyles = vue.replace(styleRegex, `<style module>\n${css}\n</style>`);
fs.writeFileSync('./src/stories/Button.vue', withSynchronizedStyles, 'utf8');

/**
 * Button Groups
 */
css = fs.readFileSync('../agnosticui-css/button-group.css', 'utf8');
const vueButtonGroup = fs.readFileSync('./src/stories/ButtonGroup.vue', 'utf8');
const vueBtnGroupsSynchronizedStyles = vueButtonGroup.replace(styleRegex, `<style module>\n${css}\n</style>`);
fs.writeFileSync('./src/stories/ButtonGroup.vue', vueBtnGroupsSynchronizedStyles, 'utf8');


/**
 * Progress
 */
css = fs.readFileSync('../agnosticui-css/progress.css', 'utf8');
const progressVue = fs.readFileSync('./src/stories/Progress.vue', 'utf8');
const progressSynchronized = progressVue.replace(styleRegex, `<style module>\n${css}\n</style>`);
fs.writeFileSync('./src/stories/Progress.vue', progressSynchronized, 'utf8');


/**
 * Cards 
 */
css = fs.readFileSync('../agnosticui-css/card.css', 'utf8');
const cardVue = fs.readFileSync('./src/stories/Card.vue', 'utf8');
const cardSynchronized = cardVue.replace(styleRegex, `<style module>\n${css}\n</style>`);
fs.writeFileSync('./src/stories/Card.vue', cardSynchronized, 'utf8');


/**
 * Header 
 */
css = fs.readFileSync('../agnosticui-css/header.css', 'utf8');
const headerVue = fs.readFileSync('./src/stories/Header.vue', 'utf8');
const headerSynchronized = headerVue.replace(styleRegex, `<style module>\n${css}\n</style>`);
fs.writeFileSync('./src/stories/Header.vue', headerSynchronized, 'utf8');

/**
 * Header Navigation
 */
css = fs.readFileSync('../agnosticui-css/headernav.css', 'utf8');
const headerNavVue = fs.readFileSync('./src/stories/HeaderNav.vue', 'utf8');
const headerNavSynchronized = headerNavVue.replace(styleRegex, `<style module>\n${css}\n</style>`);
fs.writeFileSync('./src/stories/HeaderNav.vue', headerNavSynchronized, 'utf8');