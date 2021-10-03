/* eslint-env es6 */
/* eslint-disable */
const fs = require("fs");

/**
 * Common (prerequisite css custom properties aka design tokens we need defined first)
 */
let css = fs.readFileSync("../agnosticui-css/css-dist/common.min.css", "utf8");
fs.writeFileSync("./libs/ui/styles/common.min.css", css, "utf8");

/**
 * Buttons
 */
// agnosticui-angular/libs/ui/src/lib/card.css
css = fs.readFileSync("../agnosticui-css/button.css", "utf8");
fs.writeFileSync("./libs/ui/src/lib/button.css", css, "utf8");


/**
 * Button Groups
 */
// ** These are currently locked **
// Due to the structure differences because of angular's host elements (https://github.com/angular/angular/issues/18877)
// I've customized the button-group.css solution
// TODO -- reconcile above so I can copy these from agnosticui-css
// Might be able to replace .btn-group > button by giving the button a class like
// .btn-group-button then can do .btn-group-button:first-of-type and :last-of-type solution
//  css = fs.readFileSync("../agnosticui-css/button-group.css", "utf8");
//  fs.writeFileSync("./libs/ui/src/lib/button-group.css", css, "utf8");

/**
 * Progress
 */
 css = fs.readFileSync('../agnosticui-css/progress.css', 'utf8');
 fs.writeFileSync('./libs/ui/src/lib/progress.css', css, 'utf8');


/**
 * Tabs
 */
css = fs.readFileSync("../agnosticui-css/tabs.css", "utf8");
fs.writeFileSync("./libs/ui/src/lib/tabs.css", css, "utf8");

/**
 * Card
 */
css = fs.readFileSync("../agnosticui-css/card.css", "utf8");
fs.writeFileSync("./libs/ui/src/lib/card.css", css, "utf8");

/**
 * Header
 */
css = fs.readFileSync("../agnosticui-css/header.css", "utf8");
fs.writeFileSync("./libs/ui/src/lib/header.css", css, "utf8");

/**
 * Header Navigation & Nav Item
 */
css = fs.readFileSync("../agnosticui-css/headernav.css", "utf8");
fs.writeFileSync("./libs/ui/src/lib/headernav.css", css, "utf8");
css = fs.readFileSync("../agnosticui-css/headernavitem.css", "utf8");
fs.writeFileSync("./libs/ui/src/lib/headernavitem.css", css, "utf8");

/**
 * Inputs
 */
 let inputCss = fs.readFileSync('../agnosticui-css/input.css', 'utf8');
 let inputAddonCss = fs.readFileSync('../agnosticui-css/inputaddonitem.css', 'utf8');
 const inputCSSConcatenated = `${inputCss}\n${inputAddonCss}`;
 fs.writeFileSync('./libs/ui/src/lib/input.css', inputCSSConcatenated, 'utf8');

/**
 * Choice Inputs (Radios & Checkboxes)
 */
 css = fs.readFileSync('../agnosticui-css/choice-input.css', 'utf8');
 fs.writeFileSync('./libs/ui/src/lib/choice-input.css', css, 'utf8');

 /**
 * Switch
 */
 css = fs.readFileSync('../agnosticui-css/switch.css', 'utf8');
 fs.writeFileSync('./libs/ui/src/lib/switch.css', css, 'utf8');
