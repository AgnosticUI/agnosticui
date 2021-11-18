/**
 * Node script to copy over CSS from <root>/button.css into ./src/Button.svelte
 */
const fs = require("fs");

const styleRegex = /<style module>([\s\S]*?)<\/style>/;

/**
 * Common (prerequisite css custom properties aka design tokens we need defined first)
 */
let css = fs.readFileSync("../agnostic-css/public/css-dist/common.min.css", "utf8");
fs.writeFileSync("./src/css/common.min.css", css, "utf8");

/**
 * Alert
 */
 css = fs.readFileSync("../agnostic-css/src/components/alert/alert.css", "utf8");
 const alertVue = fs.readFileSync("./src/components/Alert.vue", "utf8");
 const alertVueSynchronized = alertVue.replace(
   styleRegex,
   `<style module>\n${css}\n</style>`
 );
 fs.writeFileSync("./src/components/Alert.vue", alertVueSynchronized, "utf8");

 /**
 * Avatar
 */
 css = fs.readFileSync('../agnostic-css/src/components/avatar/avatar.css', 'utf8');
 const avatarVue = fs.readFileSync("./src/components/Avatar.vue", "utf8");
 const avatarVueSynchronized = avatarVue.replace(
  styleRegex,
  `<style module>\n${css}\n</style>`
);
 fs.writeFileSync('./src/components/Avatar.vue', avatarVueSynchronized, 'utf8');
 const avatarGroupVue = fs.readFileSync("./src/components/AvatarGroup.vue", "utf8");
 const avatarGroupVueSynchronized = avatarGroupVue.replace(
  styleRegex,
  `<style module>\n${css}\n</style>`
);
 fs.writeFileSync('./src/components/AvatarGroup.vue', avatarGroupVueSynchronized, 'utf8');
 
 /**
  * Breadcrumb
  */
 css = fs.readFileSync('../agnostic-css/src/components/breadcrumb/breadcrumb.css', 'utf8');
 const breadcrumbVue = fs.readFileSync("./src/components/Breadcrumb.vue", "utf8");
 const breadcrumbVueSynchronized = breadcrumbVue.replace(
  styleRegex,
  `<style module>\n${css}\n</style>`
);
 fs.writeFileSync('./src/components/Breadcrumb.vue', breadcrumbVueSynchronized, 'utf8');
 
/**
 * Buttons
 */
css = fs.readFileSync("../agnostic-css/src/components/button/button.css", "utf8");
const vue = fs.readFileSync("./src/components/Button.vue", "utf8");
let withSynchronizedStyles = vue.replace(styleRegex, `<style module>\n${css}\n</style>`);
fs.writeFileSync("./src/components/Button.vue", withSynchronizedStyles, "utf8");

/**
 * Button Groups
 */
css = fs.readFileSync("../agnostic-css/src/components/button/button-group.css", "utf8");
const vueButtonGroup = fs.readFileSync("./src/components/ButtonGroup.vue", "utf8");
const vueBtnGroupsSynchronizedStyles = vueButtonGroup.replace(
  styleRegex,
  `<style module>\n${css}\n</style>`
);
fs.writeFileSync("./src/components/ButtonGroup.vue", vueBtnGroupsSynchronizedStyles, "utf8");

/**
* Close
*/
css = fs.readFileSync('../agnostic-css/src/components/close/close.css', 'utf8');
const closeVue = fs.readFileSync("./src/components/Close.vue", "utf8");
const closeVueSynchronized = closeVue.replace(
  styleRegex,
  `<style module>\n${css}\n</style>`
);
fs.writeFileSync('./src/components/Close.vue', closeVueSynchronized, 'utf8');

/**
* Disclose
*/
css = fs.readFileSync('../agnostic-css/src/components/disclose/disclose.css', 'utf8');
const discloseVue = fs.readFileSync("./src/components/Disclose.vue", "utf8");
const discloseVueSynchronized = discloseVue.replace(
  styleRegex,
  `<style module>\n${css}\n</style>`
);
fs.writeFileSync('./src/components/Disclose.vue', discloseVueSynchronized, 'utf8');

/**
* Icons
*/
css = fs.readFileSync('../agnostic-css/src/components/icon/icon.css', 'utf8');
const iconVue = fs.readFileSync("./src/components/Icon.vue", "utf8");
const iconVueSynchronized = iconVue.replace(
  styleRegex,
  `<style module>\n${css}\n</style>`
);
fs.writeFileSync('./src/components/Icon.vue', iconVueSynchronized, 'utf8');

/**
 * Progress
 */
css = fs.readFileSync("../agnostic-css/src/components/progress/progress.css", "utf8");
const progressVue = fs.readFileSync("./src/components/Progress.vue", "utf8");
const progressSynchronized = progressVue.replace(styleRegex, `<style module>\n${css}\n</style>`);
fs.writeFileSync("./src/components/Progress.vue", progressSynchronized, "utf8");

/**
 * Tabs
 */
css = fs.readFileSync("../agnostic-css/src/components/tabs/tabs.css", "utf8");
const tabVue = fs.readFileSync("./src/components/TabPanel.vue", "utf8");
const tabSynchronized = tabVue.replace(styleRegex, `<style module>\n${css}\n</style>`);
fs.writeFileSync("./src/components/TabPanel.vue", tabSynchronized, "utf8");
const tabsVue = fs.readFileSync("./src/components/Tabs.vue", "utf8");
const tabsSynchronized = tabsVue.replace(styleRegex, `<style module>\n${css}\n</style>`);
fs.writeFileSync("./src/components/Tabs.vue", tabsSynchronized, "utf8");

/**
* Tags
*/
css = fs.readFileSync('../agnostic-css/src/components/tag/tag.css', 'utf8');
const tagVue = fs.readFileSync("./src/components/Tag.vue", "utf8");
const tagVueSynchronized = tagVue.replace(
  styleRegex,
  `<style module>\n${css}\n</style>`
);
fs.writeFileSync('./src/components/Tag.vue', tagVueSynchronized, 'utf8');


/**
 * Cards
 */
css = fs.readFileSync("../agnostic-css/src/components/card/card.css", "utf8");
const cardVue = fs.readFileSync("./src/components/Card.vue", "utf8");
const cardSynchronized = cardVue.replace(styleRegex, `<style module>\n${css}\n</style>`);
fs.writeFileSync("./src/components/Card.vue", cardSynchronized, "utf8");

/**
 * Header
 */
css = fs.readFileSync("../agnostic-css/src/components/header/header.css", "utf8");
const headerVue = fs.readFileSync("./src/components/Header.vue", "utf8");
const headerSynchronized = headerVue.replace(styleRegex, `<style module>\n${css}\n</style>`);
fs.writeFileSync("./src/components/Header.vue", headerSynchronized, "utf8");

/**
 * Header Navigation & Header Nav Item
 */
css = fs.readFileSync("../agnostic-css/src/components/header/headernav.css", "utf8");
const headerNavVue = fs.readFileSync("./src/components/HeaderNav.vue", "utf8");
const headerNavSynchronized = headerNavVue.replace(styleRegex, `<style module>\n${css}\n</style>`);
fs.writeFileSync("./src/components/HeaderNav.vue", headerNavSynchronized, "utf8");
css = fs.readFileSync("../agnostic-css/src/components/header/headernavitem.css", "utf8");
const headerNavItemVue = fs.readFileSync("./src/components/HeaderNavItem.vue", "utf8");
const headerNavItemSynchronized = headerNavItemVue.replace(
  styleRegex,
  `<style module>\n${css}\n</style>`
);
fs.writeFileSync("./src/components/HeaderNavItem.vue", headerNavItemSynchronized, "utf8");

/**
 * Inputs
 */
css = fs.readFileSync("../agnostic-css/src/components/input/input.css", "utf8");
const inputVue = fs.readFileSync("./src/components/Input.vue", "utf8");
const inputSynchronized = inputVue.replace(styleRegex, `<style module>\n${css}\n</style>`);
fs.writeFileSync("./src/components/Input.vue", inputSynchronized, "utf8");

css = fs.readFileSync("../agnostic-css/src/components/input/inputaddonitem.css", "utf8");
const inputAddonItemVue = fs.readFileSync("./src/components/InputAddonItem.vue", "utf8");
const inputAddonItemSynchronized = inputAddonItemVue.replace(
  styleRegex,
  `<style module>\n${css}\n</style>`
);
fs.writeFileSync("./src/components/InputAddonItem.vue", inputAddonItemSynchronized, "utf8");

/**
 * Choice Inputs (Radios & Checkboxes)
 */
css = fs.readFileSync("../agnostic-css/src/components/choice-input/choice-input.css", "utf8");
const choiceInputVue = fs.readFileSync("./src/components/ChoiceInput.vue", "utf8");
const choiceInputSynchronized = choiceInputVue.replace(
  styleRegex,
  `<style module>\n${css}\n</style>`
);
fs.writeFileSync("./src/components/ChoiceInput.vue", choiceInputSynchronized, "utf8");

/**
 * Switch
 */
css = fs.readFileSync("../agnostic-css/src/components/switch/switch.css", "utf8");
const switchVue = fs.readFileSync("./src/components/Switch.vue", "utf8");
const switchSynchronized = switchVue.replace(
  styleRegex,
  `<style module>\n${css}\n</style>`
);
fs.writeFileSync("./src/components/Switch.vue", switchSynchronized, "utf8");
