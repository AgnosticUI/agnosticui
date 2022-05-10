/**
* Node script to copy over CSS from <root>/button-core.css into ./src/Button.svelte
*/
import fs from "fs";

const styleCssModulesRegex = /<style module>([\s\S]*?)<\/style>/;

// Should be avoided but needed for Icons
const styleGlobalRegex = /<style>([\s\S]*?)<\/style>/;

/**
 * Common (prerequisite css custom properties aka design tokens we need defined first)
 */
let css = fs.readFileSync("../agnostic-css/public/css-dist/common.min.css", "utf8");
fs.writeFileSync("./src/css/common.min.css", css, "utf8");

/**
 * Common styles broken up into individual modules so they can be imported individually
 */
css = fs.readFileSync('../agnostic-css/public/css-dist/common.properties.min.css', 'utf8');
fs.writeFileSync('./src/css/common.properties.min.css', css, 'utf8');
css = fs.readFileSync('../agnostic-css/public/css-dist/common.resets.min.css', 'utf8');
fs.writeFileSync('./src/css/common.resets.min.css', css, 'utf8');
css = fs.readFileSync('../agnostic-css/public/css-dist/common.utilities.min.css', 'utf8');
fs.writeFileSync('./src/css/common.utilities.min.css', css, 'utf8');
css = fs.readFileSync('../agnostic-css/public/css-dist/opinions.min.css', 'utf8');
fs.writeFileSync('./src/css/opinions.min.css', css, 'utf8');

/**
 * Alert
 */
css = fs.readFileSync("../agnostic-css/src/components/alert/alert.css", "utf8");
// Hack: Basically, we can pin this animation.css and then just append it to the
// dynamically copied alert.css which tracks the CSS package.
const animationCss = fs.readFileSync("./src/components/animation.css", "utf8");
const alertVue = fs.readFileSync("./src/components/Alert.vue", "utf8");
const alertVueSynchronized = alertVue.replace(
  styleCssModulesRegex,
  `<style module>\n${css}\n${animationCss}\n</style>`
);
fs.writeFileSync("./src/components/Alert.vue", alertVueSynchronized, "utf8");

/**
* Avatar
*/
css = fs.readFileSync('../agnostic-css/src/components/avatar/avatar.css', 'utf8');
const avatarVue = fs.readFileSync("./src/components/Avatar.vue", "utf8");
const avatarVueSynchronized = avatarVue.replace(
  styleCssModulesRegex,
  `<style module>\n${css}\n</style>`
);
fs.writeFileSync('./src/components/Avatar.vue', avatarVueSynchronized, 'utf8');
const avatarGroupVue = fs.readFileSync("./src/components/AvatarGroup.vue", "utf8");
const avatarGroupVueSynchronized = avatarGroupVue.replace(
  styleCssModulesRegex,
  `<style module>\n${css}\n</style>`
);
fs.writeFileSync('./src/components/AvatarGroup.vue', avatarGroupVueSynchronized, 'utf8');

/**
 * Breadcrumb
 */
css = fs.readFileSync('../agnostic-css/src/components/breadcrumb/breadcrumb.css', 'utf8');
const breadcrumbVue = fs.readFileSync("./src/components/Breadcrumb.vue", "utf8");
const breadcrumbVueSynchronized = breadcrumbVue.replace(
  styleCssModulesRegex,
  `<style module>\n${css}\n</style>`
);
fs.writeFileSync('./src/components/Breadcrumb.vue', breadcrumbVueSynchronized, 'utf8');

/**
 * Buttons
 */
css = fs.readFileSync("../agnostic-css/src/components/button/button-core.css", "utf8");
const btnBaseCSS = fs.readFileSync("../agnostic-css/src/components/button/button-base.css", "utf8");
const btnBlanksCSS = fs.readFileSync("../agnostic-css/src/components/button/button-empty.css", "utf8");
const vue = fs.readFileSync("./src/components/Button.vue", "utf8");
let withSynchronizedStyles = vue.replace(styleCssModulesRegex, `<style module>\n${btnBaseCSS}\n${css}\n${btnBlanksCSS}</style>`);
fs.writeFileSync("./src/components/Button.vue", withSynchronizedStyles, "utf8");

/**
  * Button Groups
  */
css = fs.readFileSync("../agnostic-css/src/components/button/button-group.css", "utf8");
const vueButtonGroup = fs.readFileSync("./src/components/ButtonGroup.vue", "utf8");
const vueBtnGroupsSynchronizedStyles = vueButtonGroup.replace(
  styleCssModulesRegex,
  `<style module>\n${css}\n</style>`
);
fs.writeFileSync("./src/components/ButtonGroup.vue", vueBtnGroupsSynchronizedStyles, "utf8");

/**
 * Cards
 */
css = fs.readFileSync("../agnostic-css/src/components/card/card.css", "utf8");
const cardVue = fs.readFileSync("./src/components/Card.vue", "utf8");
const cardSynchronized = cardVue.replace(styleCssModulesRegex, `<style module>\n${css}\n</style>`);
fs.writeFileSync("./src/components/Card.vue", cardSynchronized, "utf8");

/**
 * Choice Inputs (Radios & Checkboxes)
 */
css = fs.readFileSync("../agnostic-css/src/components/choice-input/choice-input.css", "utf8");
const choiceInputVue = fs.readFileSync("./src/components/ChoiceInput.vue", "utf8");
const choiceInputSynchronized = choiceInputVue.replace(
  styleCssModulesRegex,
  `<style module>\n${css}\n</style>`
);
fs.writeFileSync("./src/components/ChoiceInput.vue", choiceInputSynchronized, "utf8");

/**
* Close
*/
css = fs.readFileSync('../agnostic-css/src/components/close/close.css', 'utf8');
const closeVue = fs.readFileSync("./src/components/Close.vue", "utf8");
const closeVueSynchronized = closeVue.replace(
  styleCssModulesRegex,
  `<style module>\n${css}\n</style>`
);
fs.writeFileSync('./src/components/Close.vue', closeVueSynchronized, 'utf8');

/**
* Dialog
*/
css = fs.readFileSync('../agnostic-css/src/components/dialog/dialog.css', 'utf8');
// Drawers add a bit of CSS sugar to Dialogs. Basically, Drawer delegates to Dialog.
const drawerCss = fs.readFileSync('../agnostic-css/src/components/dialog/drawer.css', 'utf8');
const dialogVue = fs.readFileSync("./src/components/Dialog.vue", "utf8");
const dialogVueSynchronized = dialogVue.replace(
  styleCssModulesRegex,
  `<style module>\n${css}\n${drawerCss}\n</style>`
);
fs.writeFileSync('./src/components/Dialog.vue', dialogVueSynchronized, 'utf8');

/**
* Disclose
*/
css = fs.readFileSync('../agnostic-css/src/components/disclose/disclose.css', 'utf8');
const discloseVue = fs.readFileSync("./src/components/Disclose.vue", "utf8");
const discloseVueSynchronized = discloseVue.replace(
  styleCssModulesRegex,
  `<style module>\n${css}\n</style>`
);
fs.writeFileSync('./src/components/Disclose.vue', discloseVueSynchronized, 'utf8');

/**
* Divider
*/
css = fs.readFileSync('../agnostic-css/src/components/divider/divider.css', 'utf8');
const dividerVue = fs.readFileSync("./src/components/Divider.vue", "utf8");
const dividerVueSynchronized = dividerVue.replace(
  styleCssModulesRegex,
  `<style module>\n${css}\n</style>`
);
fs.writeFileSync('./src/components/Divider.vue', dividerVueSynchronized, 'utf8');

/**
* EmptyState
*/
css = fs.readFileSync('../agnostic-css/src/components/empty/empty.css', 'utf8');
const emptyVue = fs.readFileSync("./src/components/EmptyState.vue", "utf8");
const emptyVueSynchronized = emptyVue.replace(
  styleCssModulesRegex,
  `<style module>\n${css}\n</style>`
);
fs.writeFileSync('./src/components/EmptyState.vue', emptyVueSynchronized, 'utf8');

/**
 * Header
 */
css = fs.readFileSync("../agnostic-css/src/components/header/header.css", "utf8");
const headerVue = fs.readFileSync("./src/components/Header.vue", "utf8");
const headerSynchronized = headerVue.replace(styleCssModulesRegex, `<style module>\n${css}\n</style>`);
fs.writeFileSync("./src/components/Header.vue", headerSynchronized, "utf8");

/**
 * Header Navigation & Header Nav Item
 */
css = fs.readFileSync("../agnostic-css/src/components/header/headernav.css", "utf8");
const headerNavVue = fs.readFileSync("./src/components/HeaderNav.vue", "utf8");
const headerNavSynchronized = headerNavVue.replace(styleCssModulesRegex, `<style module>\n${css}\n</style>`);
fs.writeFileSync("./src/components/HeaderNav.vue", headerNavSynchronized, "utf8");
css = fs.readFileSync("../agnostic-css/src/components/header/headernavitem.css", "utf8");
const headerNavItemVue = fs.readFileSync("./src/components/HeaderNavItem.vue", "utf8");
const headerNavItemSynchronized = headerNavItemVue.replace(
  styleCssModulesRegex,
  `<style module>\n${css}\n</style>`
);
fs.writeFileSync("./src/components/HeaderNavItem.vue", headerNavItemSynchronized, "utf8");

/**
* Icons
 */
css = fs.readFileSync('../agnostic-css/src/components/icon/icon.css', 'utf8');
const iconSvgCss = fs.readFileSync('../agnostic-css/src/components/icon/icon-svg.css', 'utf8');
const iconVue = fs.readFileSync("./src/components/Icon.vue", "utf8");
const iconVueSynchronized = iconVue.replace(
  styleGlobalRegex,
  `<style module>\n${css}\n${iconSvgCss}\n</style>`
);
fs.writeFileSync('./src/components/Icon.vue', iconVueSynchronized, 'utf8');

/**
 * Inputs
 */
css = fs.readFileSync("../agnostic-css/src/components/input/input.css", "utf8");
const inputVue = fs.readFileSync("./src/components/Input.vue", "utf8");
const inputSynchronized = inputVue.replace(styleCssModulesRegex, `<style module>\n${css}\n</style>`);
fs.writeFileSync("./src/components/Input.vue", inputSynchronized, "utf8");

css = fs.readFileSync("../agnostic-css/src/components/input/inputaddonitem.css", "utf8");
const inputAddonItemVue = fs.readFileSync("./src/components/InputAddonItem.vue", "utf8");
const inputAddonItemSynchronized = inputAddonItemVue.replace(
  styleCssModulesRegex,
  `<style module>\n${css}\n</style>`
);
fs.writeFileSync("./src/components/InputAddonItem.vue", inputAddonItemSynchronized, "utf8");

/**
 * Loader
 */
css = fs.readFileSync('../agnostic-css/src/components/loaders/loading.css', 'utf8');
const loaderVue = fs.readFileSync("./src/components/Loader.vue", "utf8");
const loaderVueSynchronized = loaderVue.replace(
  styleCssModulesRegex,
  `<style module>\n${css}\n</style>`
);
fs.writeFileSync('./src/components/Loader.vue', loaderVueSynchronized, 'utf8');

/**
 * Menu
 */
css = fs.readFileSync('../agnostic-css/src/components/menu/menu.css', 'utf8');
const menuItemCSS = fs.readFileSync('../agnostic-css/src/components/menu/menu-item.css', 'utf-8');
const menuVue = fs.readFileSync("./src/components/Menu.vue", "utf8");
const menuVueSynchronized = menuVue.replace(
  styleCssModulesRegex,
  `<style module>\n${css}\n${menuItemCSS}\n</style>`
);
fs.writeFileSync('./src/components/Menu.vue', menuVueSynchronized, 'utf8');

//  MenuTrigger
css = fs.readFileSync('../agnostic-css/src/components/menu/menu-trigger.css', 'utf8');
const kebabBurgerMeatballCSS = fs.readFileSync('../agnostic-css/src/components/menu/menu-kebab-burger.css', 'utf8');
const buttonBaseCSS = fs.readFileSync("../agnostic-css/src/components/button/button-base.css", "utf8");
const buttonBlanksCSS = fs.readFileSync('../agnostic-css/src/components/button/button-empty.css', 'utf8');
const menuTriggerVue = fs.readFileSync("./src/components/MenuTrigger.vue", "utf8");
const menuTriggerVueSynchronized = menuTriggerVue.replace(
  styleCssModulesRegex,
  `<style module>${buttonBaseCSS}\n${buttonBlanksCSS}\n${css}\n${kebabBurgerMeatballCSS}\n</style>`
);
fs.writeFileSync('./src/components/MenuTrigger.vue', menuTriggerVueSynchronized, 'utf8');

//  /**
//   * Pagination
//   */
//  css = fs.readFileSync('../agnostic-css/src/components/pagination/pagination.css', 'utf8');
//  const paginationVue = fs.readFileSync("./src/components/Pagination.vue", "utf8");
//  const paginationVueSynchronized = paginationVue.replace(
//    styleCssModulesRegex,
//    `<style module>\n${css}\n</style>`
//  );
//  fs.writeFileSync('./src/components/Pagination.vue', paginationVueSynchronized, 'utf8');
 
//  /**
//   * Progress
//   */
//  css = fs.readFileSync("../agnostic-css/src/components/progress/progress.css", "utf8");
//  const progressVue = fs.readFileSync("./src/components/Progress.vue", "utf8");
//  const progressSynchronized = progressVue.replace(styleCssModulesRegex, `<style module>\n${css}\n</style>`);
//  fs.writeFileSync("./src/components/Progress.vue", progressSynchronized, "utf8");
 
//  /**
//   * Tabs
//   */
//  css = fs.readFileSync("../agnostic-css/src/components/tabs/tabs.css", "utf8");
//  const tabsVue = fs.readFileSync("./src/components/Tabs.vue", "utf8");
//  const tabsSynchronized = tabsVue.replace(styleCssModulesRegex, `<style module>\n${css}\n</style>`);
//  fs.writeFileSync("./src/components/Tabs.vue", tabsSynchronized, "utf8");
 
//  /**
//  * Tags
//  */
//  css = fs.readFileSync('../agnostic-css/src/components/tag/tag.css', 'utf8');
//  const tagVue = fs.readFileSync("./src/components/Tag.vue", "utf8");
//  const tagVueSynchronized = tagVue.replace(
//    styleCssModulesRegex,
//    `<style module>\n${css}\n</style>`
//  );
//  fs.writeFileSync('./src/components/Tag.vue', tagVueSynchronized, 'utf8');
 
//  /**
//  * Select
//  */
//  css = fs.readFileSync('../agnostic-css/src/components/select/select.css', 'utf8');
//  const selectVue = fs.readFileSync("./src/components/Select.vue", "utf8");
//  const selectVueSynchronized = selectVue.replace(
//    styleCssModulesRegex,
//    `<style module>\n${css}\n</style>`
//  );
//  fs.writeFileSync('./src/components/Select.vue', selectVueSynchronized, 'utf8');

/**
 * Spinner
 */
css = fs.readFileSync('../agnostic-css/src/components/loaders/spinner.css', 'utf8');
const spinnerVue = fs.readFileSync("./src/components/Spinner.vue", "utf8");
const spinnerVueSynchronized = spinnerVue.replace(
  styleCssModulesRegex,
  `<style module>\n${css}\n</style>`
);
fs.writeFileSync('./src/components/Spinner.vue', spinnerVueSynchronized, 'utf8');

//  /**
//   * Switch
//   */
//  css = fs.readFileSync("../agnostic-css/src/components/switch/switch.css", "utf8");
//  const switchVue = fs.readFileSync("./src/components/Switch.vue", "utf8");
//  const switchSynchronized = switchVue.replace(
//    styleCssModulesRegex,
//    `<style module>\n${css}\n</style>`
//  );
//  fs.writeFileSync("./src/components/Switch.vue", switchSynchronized, "utf8");
 
//  /**
//   * Tables
//   */
//  css = fs.readFileSync('../agnostic-css/src/components/table/table.css', 'utf8');
//  const tableVue = fs.readFileSync("./src/components/Table.vue", "utf8");
//  const tableSynchronized = tableVue.replace(
//    styleCssModulesRegex,
//    `<style module>\n${css}\n</style>`
//  );
//  fs.writeFileSync('./src/components/Table.vue', tableSynchronized, 'utf8');

/**
 * Toasts (these go with and work alongside Alerts hence I've left it here)
 */
//  css = fs.readFileSync("../agnostic-css/src/components/alert/toast.css", "utf8");
//  const toastsVue = fs.readFileSync("./src/components/Toasts.vue", "utf8");
//  const toastsVueSynchronized = toastsVue.replace(
//    styleCssModulesRegex,
//    `<style module>\n${css}\n</style>`
//  );
//  fs.writeFileSync("./src/components/Toasts.vue", toastsVueSynchronized, "utf8");
  