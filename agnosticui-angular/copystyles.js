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
css = fs.readFileSync("../agnosticui-css/button.css", "utf8");
fs.writeFileSync("./src/stories/button.css", css, "utf8");

/**
 * Tabs
 */
css = fs.readFileSync("../agnosticui-css/tabs.css", "utf8");
fs.writeFileSync("./src/stories/tabs.css", css, "utf8");

/**
 * Card
 */
css = fs.readFileSync("../agnosticui-css/card.css", "utf8");
fs.writeFileSync("./src/stories/card.css", css, "utf8");

/**
 * Header
 */
css = fs.readFileSync("../agnosticui-css/header.css", "utf8");
fs.writeFileSync("./src/stories/header.css", css, "utf8");

/**
 * Header Navigation & Nav Item
 */
css = fs.readFileSync("../agnosticui-css/headernav.css", "utf8");
fs.writeFileSync("./src/stories/headernav.css", css, "utf8");
css = fs.readFileSync("../agnosticui-css/headernavitem.css", "utf8");
fs.writeFileSync("./src/stories/headernavitem.css", css, "utf8");
