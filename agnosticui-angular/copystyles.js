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
