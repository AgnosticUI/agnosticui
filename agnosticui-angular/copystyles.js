/* eslint-env es6 */
/* eslint-disable */
const fs = require("fs");

/**
 * Common (prerequisite css custom properties aka design tokens we need defined first)
 */
let css = fs.readFileSync("../agnosticui-css/css-dist/common.min.css", "utf8");
fs.writeFileSync("./src/css/common.min.css", css, "utf8");

/**
 * Buttons
 */
// agnosticui-angular/src/stories/ag/src/lib/card.css
css = fs.readFileSync("../agnosticui-css/button.css", "utf8");
fs.writeFileSync("./src/stories/ag/src/lib/button.css", css, "utf8");

/**
 * Progress
 */
 css = fs.readFileSync('../agnosticui-css/progress.css', 'utf8');
 fs.writeFileSync('./src/stories/ag/src/lib/progress.css', css, 'utf8');


/**
 * Tabs
 */
css = fs.readFileSync("../agnosticui-css/tabs.css", "utf8");
fs.writeFileSync("./src/stories/ag/src/lib/tabs.css", css, "utf8");

/**
 * Card
 */
css = fs.readFileSync("../agnosticui-css/card.css", "utf8");
fs.writeFileSync("./src/stories/ag/src/lib/card.css", css, "utf8");

/**
 * Header
 */
css = fs.readFileSync("../agnosticui-css/header.css", "utf8");
fs.writeFileSync("./src/stories/ag/src/lib/header.css", css, "utf8");

/**
 * Header Navigation & Nav Item
 */
css = fs.readFileSync("../agnosticui-css/headernav.css", "utf8");
fs.writeFileSync("./src/stories/ag/src/lib/headernav.css", css, "utf8");
css = fs.readFileSync("../agnosticui-css/headernavitem.css", "utf8");
fs.writeFileSync("./src/stories/ag/src/lib/headernavitem.css", css, "utf8");


/**
 * Choice Inputs (Radios & Checkboxes)
 */
 css = fs.readFileSync('../agnosticui-css/choice-input.css', 'utf8');
 fs.writeFileSync('./src/stories/ag/src/lib/choice-input.css', css, 'utf8');

 /**
 * Switch
 */
 css = fs.readFileSync('../agnosticui-css/switch.css', 'utf8');
 fs.writeFileSync('./src/stories/ag/src/lib/switch.css', css, 'utf8');
