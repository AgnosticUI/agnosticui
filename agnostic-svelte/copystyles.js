/**
 * Node script to copy over CSS from <root>/button.css into ./src/Button.svelte
 */
const fs = require("fs");

const styleRegex = /<style>([\s\S]*?)<\/style>/;

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

/**
 * Alert
 */
css = fs.readFileSync("../agnostic-css/src/components/alert/alert.css", "utf8");
const alertSvelte = fs.readFileSync("./src/stories/Alert.svelte", "utf8");
const alertSvelteSynchronized = alertSvelte.replace(
  styleRegex,
  `<style>\n${css}\n</style>`
);
fs.writeFileSync("./src/stories/Alert.svelte", alertSvelteSynchronized, "utf8");

/**
 * Avatar
 */
css = fs.readFileSync('../agnostic-css/src/components/avatar/avatar.css', 'utf8');
const avatarSvelte = fs.readFileSync("./src/stories/Avatar.svelte", "utf8");
const avatarSvelteSynchronized = avatarSvelte.replace(
  styleRegex,
  `<style>\n${css}\n</style>`
);
fs.writeFileSync('./src/stories/Avatar.svelte', avatarSvelteSynchronized, 'utf8');

//  We need to replace .avatar-group > span with .avatar-group > global(span)
 css = css.replace(/(\.avatar-group) > (span)/, "$1 > :global($2)");
//  We need to replace .avatar-group > span:not(:first-child) with .avatar-group:global(span:not(:first-child)),
 css = css.replace(/(\.avatar-group) > (span:not\(:first-child\))/, "$1 > :global($2)");
const avatarGroupSvelte= fs.readFileSync("./src/stories/AvatarGroup.svelte", "utf8");
const avatarGroupSvelteSynchronized = avatarGroupSvelte.replace(
  styleRegex,
  `<style>\n${css}\n</style>`
);
fs.writeFileSync('./src/stories/AvatarGroup.svelte', avatarGroupSvelteSynchronized, 'utf8');

/**
* Breadcrumb
*/
css = fs.readFileSync('../agnostic-css/src/components/breadcrumb/breadcrumb.css', 'utf8');
const breadcrumbSvelte = fs.readFileSync("./src/stories/Breadcrumb.svelte", "utf8");
const breadcrumbSvelteSynchronized = breadcrumbSvelte.replace(
  styleRegex,
  `<style>\n${css}\n</style>`
);
fs.writeFileSync('./src/stories/Breadcrumb.svelte', breadcrumbSvelteSynchronized, 'utf8');
  
/**
 * Buttons
 */
css = fs.readFileSync("../agnostic-css/src/components/button/button.css", "utf8");
const buttonSvelte = fs.readFileSync("./src/stories/Button.svelte", "utf8");
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
* Close
*/
css = fs.readFileSync('../agnostic-css/src/components/close/close.css', 'utf8');
const closeSvelte = fs.readFileSync("./src/stories/Close.svelte", "utf8");
const closesvelteSynchronized = closeSvelte.replace(
  styleRegex,
  `<style>\n${css}\n</style>`
);
fs.writeFileSync('./src/stories/Close.svelte', closesvelteSynchronized, 'utf8');

/**
* Disclose
*/
css = fs.readFileSync('../agnostic-css/src/components/disclose/disclose.css', 'utf8');
const discloseSvelte = fs.readFileSync("./src/stories/Disclose.svelte", "utf8");
const disclosesvelteSynchronized = discloseSvelte.replace(
  styleRegex,
  `<style>\n${css}\n</style>`
);
fs.writeFileSync('./src/stories/Disclose.svelte', disclosesvelteSynchronized, 'utf8');

/**
* Divider
*/
css = fs.readFileSync('../agnostic-css/src/components/divider/divider.css', 'utf8');
const dividerSvelte = fs.readFileSync("./src/stories/Divider.svelte", "utf8");
const dividerSvelteSynchronized = dividerSvelte.replace(
  styleRegex,
  `<style>\n${css}\n</style>`
);
fs.writeFileSync('./src/stories/Divider.svelte', dividerSvelteSynchronized, 'utf8');


/**
* Empty State
*/
css = fs.readFileSync('../agnostic-css/src/components/empty/empty.css', 'utf8');
const emptyStateSvelte = fs.readFileSync("./src/stories/EmptyState.svelte", "utf8");
const emptyStateSvelteSynchronized = emptyStateSvelte.replace(
  styleRegex,
  `<style>\n${css}\n</style>`
);
fs.writeFileSync('./src/stories/EmptyState.svelte', emptyStateSvelteSynchronized, 'utf8');

/**
* Icons — We use global CSS styles for icons because we want the consumer to
* be able to pass in an SVG into a slot, but we can't add classes to slots. So,
* We need CSS like `.icon-24 > svg { width: var(--fluid-24); }` to apply the width
* and have it work properly (in Safari specifically).
*/
css = fs.readFileSync('../agnostic-css/src/components/icon/icon.css', 'utf8');

//  We need to replace .icon* > svg with .icon* > global(svg)
css = css.replace(/(\.icon.* )> (svg)/g, "$1> :global($2)");

const iconSvelte = fs.readFileSync("./src/stories/Icon.svelte", "utf8");
const iconSvelteSynchronized = iconSvelte.replace(
  styleRegex,
  `<style>\n${css}\n</style>`
);
fs.writeFileSync('./src/stories/Icon.svelte', iconSvelteSynchronized, 'utf8');

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
* Loader
*/
css = fs.readFileSync("../agnostic-css/src/components/loaders/loading.css", "utf8");
const loaderSvelte = fs.readFileSync("./src/stories/Loader.svelte", "utf8");
const loaderSvelteSynchronized = loaderSvelte.replace(
  styleRegex,
  `<style>\n${css}\n</style>`
);
fs.writeFileSync(
  "./src/stories/Loader.svelte",
  loaderSvelteSynchronized,
  "utf8"
);

/**
 * Pagination
 */
css = fs.readFileSync("../agnostic-css/src/components/pagination/pagination.css", "utf8");
const paginationSvelte = fs.readFileSync("./src/stories/Pagination.svelte", "utf8");
const paginationSvelteSynchronized = paginationSvelte.replace(
  styleRegex,
  `<style>\n${css}\n</style>`
);
fs.writeFileSync(
  "./src/stories/Pagination.svelte",
  paginationSvelteSynchronized,
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
 * Select
 */
css = fs.readFileSync("../agnostic-css/src/components/select/select.css", "utf8");
const selectSvelte = fs.readFileSync("./src/stories/Select.svelte", "utf8");
const selectSynchronized = selectSvelte.replace(
  styleRegex,
  `<style>\n${css}\n</style>`
);
fs.writeFileSync("./src/stories/Select.svelte", selectSynchronized, "utf8");


/**
 * Spinner
 */
css = fs.readFileSync("../agnostic-css/src/components/loaders/spinner.css", "utf8");
const spinnerSvelte = fs.readFileSync("./src/stories/Spinner.svelte", "utf8");
const spinnerSynchronized = spinnerSvelte.replace(
  styleRegex,
  `<style>\n${css}\n</style>`
);
fs.writeFileSync("./src/stories/Spinner.svelte", spinnerSynchronized, "utf8");

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
 * Tables
 */
 css = fs.readFileSync('../agnostic-css/src/components/table/table.css', 'utf8');
 const tableSvelte = fs.readFileSync("./src/stories/Table.svelte", "utf8");
 const tableSynchronized = tableSvelte.replace(
  styleRegex,
   `<style>\n${css}\n</style>`
 );
 fs.writeFileSync('./src/stories/Table.svelte', tableSynchronized, 'utf8');

 /**
* Tags
*/
css = fs.readFileSync('../agnostic-css/src/components/tag/tag.css', 'utf8');
const tagSvelte = fs.readFileSync("./src/stories/Tag.svelte", "utf8");
const tagSvelteSynchronized = tagSvelte.replace(
  styleRegex,
  `<style>\n${css}\n</style>`
);
fs.writeFileSync('./src/stories/Tag.svelte', tagSvelteSynchronized, 'utf8');
