const fs = require('fs');

const css = fs.readFileSync('../button.css', 'utf8');
// console.log(css);

const svelte = fs.readFileSync('./src/Button.svelte', 'utf8');
// console.log(svelte);
// const styleRegex = /<style>.*?<\/style>/;
const styleRegex = /<style>([\s\S]*?)<\/style>/;
// const match = svelte.match(styleRegex)
const svelteWithSynchronizedStyles = svelte.replace(styleRegex, `<style>\n${css}\n</style>`);
fs.writeFileSync('./src/Button.svelte', svelteWithSynchronizedStyles, 'utf8');