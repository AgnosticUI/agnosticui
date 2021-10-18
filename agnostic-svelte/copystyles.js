/**
 * Node script to copy over CSS from <root>/button.css into ./src/Button.svelte
 */
const fs = require("fs");

/**
 * Common (prerequisite css custom properties aka design tokens we need defined first)
 */
let css = fs.readFileSync("../agnostic-css/public/css-dist/common.min.css", "utf8");
fs.writeFileSync("./src/css/common.min.css", css, "utf8");

/**
 * Buttons
 */
css = fs.readFileSync("../agnostic-css/src/components/button/button.css", "utf8");
const buttonSvelte = fs.readFileSync("./src/stories/Button.svelte", "utf8");
const styleRegex = /<style>([\s\S]*?)<\/style>/;
const buttonSvelteSynchronized = buttonSvelte.replace(
  styleRegex,
  `<style>\n${css}\n</style>`
);
fs.writeFileSync(
  "./src/stories/Button.svelte",
  buttonSvelteSynchronized,
  "utf8"
);

/**
 * Button Groups
 */
css = fs.readFileSync("../agnostic-css/src/components/button/button-group.css", "utf8");

/*
Need to match all three of these:
.btn-group > button {...
.btn-group > button:not(:last-child) {...
.btn-group > button:not(:first-child) {...
*/
css = css.replace(/(.*btn-group > )(button.* )/, "$1:global($2) ");
css = css.replace(/(.*btn-group > )(button.* )/, "$1:global($2) ");
css = css.replace(/(.*btn-group > )(button.* )/, "$1:global($2) ");

const buttonGroupSvelte = fs.readFileSync(
  "./src/stories/ButtonGroup.svelte",
  "utf8"
);
const buttonGroupSvelteSynchronized = buttonGroupSvelte.replace(
  styleRegex,
  `<style>\n${css}\n</style>`
);
fs.writeFileSync(
  "./src/stories/ButtonGroup.svelte",
  buttonGroupSvelteSynchronized,
  "utf8"
);

/**
 * Progress
 */
css = fs.readFileSync("../agnostic-css/src/components/progress/progress.css", "utf8");
const progressSvelte = fs.readFileSync("./src/stories/Progress.svelte", "utf8");
const progressSvelteSynchronized = progressSvelte.replace(
  styleRegex,
  `<style>\n${css}\n</style>`
);
fs.writeFileSync(
  "./src/stories/Progress.svelte",
  progressSvelteSynchronized,
  "utf8"
);

/**
 * Tabs
 */
 css = fs.readFileSync("../agnostic-css/src/components/tabs/tabs.css", "utf8");
 const tabsSvelte = fs.readFileSync("./src/stories/Tabs.svelte", "utf8");
 const tabsSvelteSynchronized = tabsSvelte.replace(
   styleRegex,
   `<style>\n${css}\n</style>`
 );
 fs.writeFileSync("./src/stories/Tabs.svelte", tabsSvelteSynchronized, "utf8");

/**
 * Card
 */
css = fs.readFileSync("../agnostic-css/src/components/card/card.css", "utf8");
const cardSvelte = fs.readFileSync("./src/stories/Card.svelte", "utf8");
const cardSvelteSynchronized = cardSvelte.replace(
  styleRegex,
  `<style>\n${css}\n</style>`
);
fs.writeFileSync("./src/stories/Card.svelte", cardSvelteSynchronized, "utf8");

/**
 * Header
 */
css = fs.readFileSync("../agnostic-css/src/components/header/header.css", "utf8");
css = css.replace(/(.*header )(img)/, "$1:global($2)");
css = css.replace(/(.*header-base )(img)/, "$1:global($2)");
const headerSvelte = fs.readFileSync("./src/stories/Header.svelte", "utf8");
const headerSynchronized = headerSvelte.replace(
  styleRegex,
  `<style>\n${css}\n</style>`
);
fs.writeFileSync("./src/stories/Header.svelte", headerSynchronized, "utf8");

/**
 * Header Navigation & Header Nav Item
 */
css = fs.readFileSync("../agnostic-css/src/components/header/headernav.css", "utf8");
const headerNavSvelte = fs.readFileSync(
  "./src/stories/HeaderNav.svelte",
  "utf8"
);
const headerNavSynchronized = headerNavSvelte.replace(
  styleRegex,
  `<style>\n${css}\n</style>`
);
fs.writeFileSync(
  "./src/stories/HeaderNav.svelte",
  headerNavSynchronized,
  "utf8"
);

css = fs.readFileSync("../agnostic-css/src/components/header/headernavitem.css", "utf8");
// .header-nav-item a to .header-nav-item :global(a)
css = css.replace(/(.*header-nav-item )(a) /, "$1:global($2) ");
const headerNavItemSvelte = fs.readFileSync(
  "./src/stories/HeaderNavItem.svelte",
  "utf8"
);
const headerNavItemSynchronized = headerNavItemSvelte.replace(
  styleRegex,
  `<style>\n${css}\n</style>`
);
fs.writeFileSync(
  "./src/stories/HeaderNavItem.svelte",
  headerNavItemSynchronized,
  "utf8"
);

/**
 * Inputs
 */
css = fs.readFileSync("../agnostic-css/src/components/input/input.css", "utf8");
const inputSvelte = fs.readFileSync("./src/stories/Input.svelte", "utf8");
const inputSynchronized = inputSvelte.replace(
  styleRegex,
  `<style>\n${css}\n</style>`
);
fs.writeFileSync("./src/stories/Input.svelte", inputSynchronized, "utf8");

css = fs.readFileSync("../agnostic-css/src/components/input/inputaddonitem.css", "utf8");
const inputAddonItemSvelte = fs.readFileSync(
  "./src/stories/InputAddonItem.svelte",
  "utf8"
);
const inputAddonItemSynchronized = inputAddonItemSvelte.replace(
  styleRegex,
  `<style>\n${css}\n</style>`
);
fs.writeFileSync(
  "./src/stories/InputAddonItem.svelte",
  inputAddonItemSynchronized,
  "utf8"
);

/**
 * Choice Inputs (Radios & Checkboxes)
 */
css = fs.readFileSync("../agnostic-css/src/components/choice-input/choice-input.css", "utf8");

// These match .radio:checked + .radio-label:before {}
// (and the needed variations for radio/checkbox checked/focused)
css = css.replace(
  /(\.radio:checked \+ )(\.radio-label:before)/,
  "$1:global($2)"
);
css = css.replace(/(\.radio:focus \+ )(\.radio-label:before)/, "$1:global($2)");
css = css.replace(
  /(\.checkbox:checked \+ )(\.checkbox-label:before)/,
  "$1:global($2)"
);
css = css.replace(
  /(\.checkbox:focus \+ )(\.checkbox-label:before)/,
  "$1:global($2)"
);
css = css.replace(
  /(\.checkbox:checked \+ )(\.checkbox-label:after)/,
  "$1:global($2)"
);

const choiceInputSvelte = fs.readFileSync(
  "./src/stories/ChoiceInput.svelte",
  "utf8"
);
const choiceInputSynchronized = choiceInputSvelte.replace(
  styleRegex,
  `<style>\n${css}\n</style>`
);
fs.writeFileSync(
  "./src/stories/ChoiceInput.svelte",
  choiceInputSynchronized,
  "utf8"
);

/**
 * Switch
 */
css = fs.readFileSync("../agnostic-css/src/components/switch/switch.css", "utf8");
const switchSvelte = fs.readFileSync("./src/stories/Switch.svelte", "utf8");
const switchSynchronized = switchSvelte.replace(
  styleRegex,
  `<style>\n${css}\n</style>`
);
fs.writeFileSync("./src/stories/Switch.svelte", switchSynchronized, "utf8");
