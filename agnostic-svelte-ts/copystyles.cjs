/**
 * Node script to copy over CSS from <root>/button-core.css into ./src/Button.svelte
 */
const fs = require('fs');

const styleRegex = /<style>([\s\S]*?)<\/style>/;
// const globalStyleRegex = /<style global>([\s\S]*?)<\/style>/;

/**
 * Common (prerequisite css custom properties aka design tokens we need defined first)
 */
let css = fs.readFileSync(
	'../agnostic-css/public/css-dist/common.min.css',
	'utf8'
);
fs.writeFileSync('./src/lib/css/common.min.css', css, 'utf8');

/**
 * Common styles broken up into individual modules so they can be imported individually
 */
css = fs.readFileSync(
	'../agnostic-css/public/css-dist/common.properties.min.css',
	'utf8'
);
fs.writeFileSync('./src/lib/css/common.properties.min.css', css, 'utf8');
css = fs.readFileSync(
	'../agnostic-css/public/css-dist/common.resets.min.css',
	'utf8'
);
fs.writeFileSync('./src/lib/css/common.resets.min.css', css, 'utf8');
css = fs.readFileSync(
	'../agnostic-css/public/css-dist/common.utilities.min.css',
	'utf8'
);
fs.writeFileSync('./src/lib/css/common.utilities.min.css', css, 'utf8');
css = fs.readFileSync(
	'../agnostic-css/public/css-dist/opinions.min.css',
	'utf8'
);
fs.writeFileSync('./src/lib/css/opinions.min.css', css, 'utf8');

/**
 * Alert
 */
css = fs.readFileSync('../agnostic-css/src/components/alert/alert.css', 'utf8');
// Hack: Basically, we can pin this animation.css and then just append it to the
// dynamically copied alert.css which tracks the CSS package.
const animationCss = fs.readFileSync(
	'./src/lib/components/animation.css',
	'utf8'
);
const alertSvelte = fs.readFileSync(
	'./src/lib/components/Alert/Alert.svelte',
	'utf8'
);
const alertSvelteSynchronized = alertSvelte.replace(
	styleRegex,
	`<style>\n${css}\n${animationCss}\n</style>`
);
fs.writeFileSync(
	'./src/lib/components/Alert/Alert.svelte',
	alertSvelteSynchronized,
	'utf8'
);
// /**
//  * Toasts (these go with and work alongside Alerts hence I've left it here)
//  */
// css = fs.readFileSync('../agnostic-css/src/components/alert/toast.css', 'utf8');
// const toastsSvelte = fs.readFileSync(
// 	'./src/lib/components/Toasts/Toasts.svelte',
// 	'utf8'
// );
// const toastSvelteSynchronized = toastsSvelte.replace(
// 	styleRegex,
// 	`<style>\n${css}\n</style>`
// );
// fs.writeFileSync(
// 	'./src/lib/components/Toasts/Toasts.svelte',
// 	toastSvelteSynchronized,
// 	'utf8'
// );

/**
 * Avatar
 */
css = fs.readFileSync(
	'../agnostic-css/src/components/avatar/avatar.css',
	'utf8'
);
const avatarSvelte = fs.readFileSync(
	'./src/lib/components/Avatar/Avatar.svelte',
	'utf8'
);
const avatarSvelteSynchronized = avatarSvelte.replace(
	styleRegex,
	`<style>\n${css}\n</style>`
);
fs.writeFileSync(
	'./src/lib/components/Avatar/Avatar.svelte',
	avatarSvelteSynchronized,
	'utf8'
);

//  We need to replace .avatar-group > span with .avatar-group > global(span)
css = css.replace(/(\.avatar-group) > (span)/, '$1 > :global($2)');
//  We need to replace .avatar-group > span:not(:first-child) with .avatar-group:global(span:not(:first-child)),
css = css.replace(
	/(\.avatar-group) > (span:not\(:first-child\))/,
	'$1 > :global($2)'
);
const avatarGroupSvelte = fs.readFileSync(
	'./src/lib/components/Avatar/AvatarGroup.svelte',
	'utf8'
);
const avatarGroupSvelteSynchronized = avatarGroupSvelte.replace(
	styleRegex,
	`<style>\n${css}\n</style>`
);
fs.writeFileSync(
	'./src/lib/components/Avatar/AvatarGroup.svelte',
	avatarGroupSvelteSynchronized,
	'utf8'
);

/**
 * Breadcrumb
 */
css = fs.readFileSync(
	'../agnostic-css/src/components/breadcrumb/breadcrumb.css',
	'utf8'
);
const breadcrumbSvelte = fs.readFileSync(
	'./src/lib/components/Breadcrumb/Breadcrumb.svelte',
	'utf8'
);
const breadcrumbSvelteSynchronized = breadcrumbSvelte.replace(
	styleRegex,
	`<style>\n${css}\n</style>`
);
fs.writeFileSync(
	'./src/lib/components/Breadcrumb/Breadcrumb.svelte',
	breadcrumbSvelteSynchronized,
	'utf8'
);

// /**
//  * Buttons
//  */
// css = fs.readFileSync(
// 	'../agnostic-css/src/components/button/button-core.css',
// 	'utf8'
// );
// const btnBaseCSS = fs.readFileSync(
// 	'../agnostic-css/src/components/button/button-base.css',
// 	'utf8'
// );
// const btnBlanksCSS = fs.readFileSync(
// 	'../agnostic-css/src/components/button/button-empty.css',
// 	'utf8'
// );
// const buttonSvelte = fs.readFileSync(
// 	'./src/lib/components/Button/Button.svelte',
// 	'utf8'
// );
// const buttonSvelteSynchronized = buttonSvelte.replace(
// 	styleRegex,
// 	`<style>\n${btnBaseCSS}\n${css}\n${btnBlanksCSS}</style>`
// );
// fs.writeFileSync(
// 	'./src/lib/components/Button/Button.svelte',
// 	buttonSvelteSynchronized,
// 	'utf8'
// );

// /**
//  * Button Groups
//  */
// css = fs.readFileSync(
// 	'../agnostic-css/src/components/button/button-group.css',
// 	'utf8'
// );

// const buttonGroupSvelte = fs.readFileSync(
// 	'./src/lib/components/Button/ButtonGroup.svelte',
// 	'utf8'
// );
// const buttonGroupSvelteSynchronized = buttonGroupSvelte.replace(
// 	styleRegex,
// 	`<style>\n${css}\n</style>`
// );
// fs.writeFileSync(
// 	'./src/lib/components/Button/ButtonGroup.svelte',
// 	buttonGroupSvelteSynchronized,
// 	'utf8'
// );

// /**
//  * Card
//  */
// css = fs.readFileSync('../agnostic-css/src/components/card/card.css', 'utf8');
// const cardSvelte = fs.readFileSync(
// 	'./src/lib/components/Card/Card.svelte',
// 	'utf8'
// );
// const cardSvelteSynchronized = cardSvelte.replace(
// 	styleRegex,
// 	`<style>\n${css}\n</style>`
// );
// fs.writeFileSync(
// 	'./src/lib/components/Card/Card.svelte',
// 	cardSvelteSynchronized,
// 	'utf8'
// );

// /**
//  * Choice Inputs (Radios & Checkboxes)
//  */
// css = fs.readFileSync(
// 	'../agnostic-css/src/components/choice-input/choice-input.css',
// 	'utf8'
// );

// // These match .radio:checked + .radio-label:before {}
// // (and the needed variations for radio/checkbox checked/focused)
// css = css.replace(
// 	/(\.radio:checked \+ )(\.radio-label:before)/,
// 	'$1:global($2)'
// );
// css = css.replace(/(\.radio:focus \+ )(\.radio-label:before)/, '$1:global($2)');
// css = css.replace(
// 	/(\.checkbox:checked \+ )(\.checkbox-label:before)/,
// 	'$1:global($2)'
// );
// css = css.replace(
// 	/(\.checkbox:focus \+ )(\.checkbox-label:before)/,
// 	'$1:global($2)'
// );
// css = css.replace(
// 	/(\.checkbox:checked \+ )(\.checkbox-label:after)/,
// 	'$1:global($2)'
// );

// const choiceInputSvelte = fs.readFileSync(
// 	'./src/lib/components/ChoiceInput/ChoiceInput.svelte',
// 	'utf8'
// );
// const choiceInputSynchronized = choiceInputSvelte.replace(
// 	styleRegex,
// 	`<style>\n${css}\n</style>`
// );
// fs.writeFileSync(
// 	'./src/lib/components/ChoiceInput/ChoiceInput.svelte',
// 	choiceInputSynchronized,
// 	'utf8'
// );

// /**
//  * Close
//  */
// css = fs.readFileSync('../agnostic-css/src/components/close/close.css', 'utf8');
// const closeSvelte = fs.readFileSync(
// 	'./src/lib/components/Close/Close.svelte',
// 	'utf8'
// );
// const closesvelteSynchronized = closeSvelte.replace(
// 	styleRegex,
// 	`<style>\n${css}\n</style>`
// );
// fs.writeFileSync(
// 	'./src/lib/components/Close/Close.svelte',
// 	closesvelteSynchronized,
// 	'utf8'
// );

// /**
//  * Dialog
//  */
// // NO COPYING -- THESE STYLES ARE "LOCKED DOWN" (they require global to work with a11y-dialog)
// // css = fs.readFileSync('../agnostic-css/src/components/dialog/dialog.css', 'utf8');
// // const drawerCss = fs.readFileSync('../agnostic-css/src/components/dialog/drawer.css', 'utf8');
// // const dialogSvelte = fs.readFileSync("./src/lib/components/Dialog/Dialog.svelte", "utf8");
// // const dialogSvelteSynchronized = dialogSvelte.replace(
// //   globalStyleRegex,
// //   `<style global>\n${css}\n${drawerCss}\n</style>`
// // );
// // fs.writeFileSync('./src/lib/components/Dialog/Dialog.svelte', dialogSvelteSynchronized, 'utf8');

// /**
//  * Disclose
//  */
// css = fs.readFileSync(
// 	'../agnostic-css/src/components/disclose/disclose.css',
// 	'utf8'
// );
// const discloseSvelte = fs.readFileSync(
// 	'./src/lib/components/Disclose/Disclose.svelte',
// 	'utf8'
// );
// const disclosesvelteSynchronized = discloseSvelte.replace(
// 	styleRegex,
// 	`<style>\n${css}\n</style>`
// );
// fs.writeFileSync(
// 	'./src/lib/components/Disclose/Disclose.svelte',
// 	disclosesvelteSynchronized,
// 	'utf8'
// );

// /**
//  * Divider
//  */
// css = fs.readFileSync(
// 	'../agnostic-css/src/components/divider/divider.css',
// 	'utf8'
// );
// const dividerSvelte = fs.readFileSync(
// 	'./src/lib/components/Divider/Divider.svelte',
// 	'utf8'
// );
// const dividerSvelteSynchronized = dividerSvelte.replace(
// 	styleRegex,
// 	`<style>\n${css}\n</style>`
// );
// fs.writeFileSync(
// 	'./src/lib/components/Divider/Divider.svelte',
// 	dividerSvelteSynchronized,
// 	'utf8'
// );

// /**
//  * Empty State
//  */
// css = fs.readFileSync('../agnostic-css/src/components/empty/empty.css', 'utf8');
// const emptyStateSvelte = fs.readFileSync(
// 	'./src/lib/components/EmptyState/EmptyState.svelte',
// 	'utf8'
// );
// const emptyStateSvelteSynchronized = emptyStateSvelte.replace(
// 	styleRegex,
// 	`<style>\n${css}\n</style>`
// );
// fs.writeFileSync(
// 	'./src/lib/components/EmptyState/EmptyState.svelte',
// 	emptyStateSvelteSynchronized,
// 	'utf8'
// );

// /**
//  * Icons
//  */
// css = fs.readFileSync('../agnostic-css/src/components/icon/icon.css', 'utf8');
// let iconSvgCss = fs.readFileSync(
// 	'../agnostic-css/src/components/icon/icon-svg.css',
// 	'utf8'
// );
// const iconSvelte = fs.readFileSync(
// 	'./src/lib/components/Icon/Icon.svelte',
// 	'utf8'
// );

// // matches .icon-svg (\b word boundary
// // matches .icon-svg-*
// iconSvgCss = iconSvgCss.replace(/(.icon-svg\b)/, ':global($1)');
// iconSvgCss = iconSvgCss.replace(/(\.icon-svg-.*\b)/g, ':global($1)');

// const iconSvelteSynchronized = iconSvelte.replace(
// 	styleRegex,
// 	`<style>\n${css}\n${iconSvgCss}</style>`
// );
// fs.writeFileSync(
// 	'./src/lib/components/Icon/Icon.svelte',
// 	iconSvelteSynchronized,
// 	'utf8'
// );

// /**
//  * Header
//  */
// css = fs.readFileSync(
// 	'../agnostic-css/src/components/header/header.css',
// 	'utf8'
// );
// css = css.replace(/(.*header )(img)/, '$1:global($2)');
// css = css.replace(/(.*header-base )(img)/, '$1:global($2)');
// const headerSvelte = fs.readFileSync(
// 	'./src/lib/components/Header/Header.svelte',
// 	'utf8'
// );
// const headerSynchronized = headerSvelte.replace(
// 	styleRegex,
// 	`<style>\n${css}\n</style>`
// );
// fs.writeFileSync(
// 	'./src/lib/components/Header/Header.svelte',
// 	headerSynchronized,
// 	'utf8'
// );

// /**
//  * Header Navigation & Header Nav Item
//  */
// css = fs.readFileSync(
// 	'../agnostic-css/src/components/header/headernav.css',
// 	'utf8'
// );
// const headerNavSvelte = fs.readFileSync(
// 	'./src/lib/components/Header/HeaderNav.svelte',
// 	'utf8'
// );
// const headerNavSynchronized = headerNavSvelte.replace(
// 	styleRegex,
// 	`<style>\n${css}\n</style>`
// );
// fs.writeFileSync(
// 	'./src/lib/components/Header/HeaderNav.svelte',
// 	headerNavSynchronized,
// 	'utf8'
// );

// css = fs.readFileSync(
// 	'../agnostic-css/src/components/header/headernavitem.css',
// 	'utf8'
// );
// // .header-nav-item a to .header-nav-item :global(a)
// css = css.replace(/(.*header-nav-item )(a) /, '$1:global($2) ');
// const headerNavItemSvelte = fs.readFileSync(
// 	'./src/lib/components/Header/HeaderNavItem.svelte',
// 	'utf8'
// );
// const headerNavItemSynchronized = headerNavItemSvelte.replace(
// 	styleRegex,
// 	`<style>\n${css}\n</style>`
// );
// fs.writeFileSync(
// 	'./src/lib/components/Header/HeaderNavItem.svelte',
// 	headerNavItemSynchronized,
// 	'utf8'
// );

// /**
//  * Inputs
//  */
// css = fs.readFileSync('../agnostic-css/src/components/input/input.css', 'utf8');
// const inputSvelte = fs.readFileSync(
// 	'./src/lib/components/Input/Input.svelte',
// 	'utf8'
// );
// const inputSynchronized = inputSvelte.replace(
// 	styleRegex,
// 	`<style>\n${css}\n</style>`
// );
// fs.writeFileSync(
// 	'./src/lib/components/Input/Input.svelte',
// 	inputSynchronized,
// 	'utf8'
// );

// css = fs.readFileSync(
// 	'../agnostic-css/src/components/input/inputaddonitem.css',
// 	'utf8'
// );
// const inputAddonItemSvelte = fs.readFileSync(
// 	'./src/lib/components/Input/InputAddonItem.svelte',
// 	'utf8'
// );
// const inputAddonItemSynchronized = inputAddonItemSvelte.replace(
// 	styleRegex,
// 	`<style>\n${css}\n</style>`
// );
// fs.writeFileSync(
// 	'./src/lib/components/Input/InputAddonItem.svelte',
// 	inputAddonItemSynchronized,
// 	'utf8'
// );

// /**
//  * Loader
//  */
// css = fs.readFileSync(
// 	'../agnostic-css/src/components/loaders/loading.css',
// 	'utf8'
// );
// const loaderSvelte = fs.readFileSync(
// 	'./src/lib/components/Loader/Loader.svelte',
// 	'utf8'
// );
// const loaderSvelteSynchronized = loaderSvelte.replace(
// 	styleRegex,
// 	`<style>\n${css}\n</style>`
// );
// fs.writeFileSync(
// 	'./src/lib/components/Loader/Loader.svelte',
// 	loaderSvelteSynchronized,
// 	'utf8'
// );

// /**
//  * Menu & MenuItem & MenuTrigger
//  */
// css = fs.readFileSync('../agnostic-css/src/components/menu/menu.css', 'utf8');
// const menuSvelte = fs.readFileSync(
// 	'./src/lib/components/Menu/Menu.svelte',
// 	'utf8'
// );
// // MenuTrigger
// const menuTriggerCSS = fs.readFileSync(
// 	'../agnostic-css/src/components/menu/menu-trigger.css',
// 	'utf8'
// );
// const kebabBurgerMeatballCSS = fs.readFileSync(
// 	'../agnostic-css/src/components/menu/menu-kebab-burger.css',
// 	'utf8'
// );
// const buttonBaseCSS = fs.readFileSync(
// 	'../agnostic-css/src/components/button/button-base.css',
// 	'utf8'
// );
// const buttonBlanksCSS = fs.readFileSync(
// 	'../agnostic-css/src/components/button/button-empty.css',
// 	'utf8'
// );
// const menuSvelteSynchronized = menuSvelte.replace(
// 	styleRegex,
// 	`<style>\n${css}\n${buttonBaseCSS}\n${buttonBlanksCSS}\n${menuTriggerCSS}\n${kebabBurgerMeatballCSS}\n</style>`
// );
// fs.writeFileSync(
// 	'./src/lib/components/Menu/Menu.svelte',
// 	menuSvelteSynchronized,
// 	'utf8'
// );

// css = fs.readFileSync(
// 	'../agnostic-css/src/components/menu/menu-item.css',
// 	'utf8'
// );
// const menuItemSvelte = fs.readFileSync(
// 	'./src/lib/components/Menu/MenuItem.svelte',
// 	'utf8'
// );
// const menuItemSvelteSynchronized = menuItemSvelte.replace(
// 	styleRegex,
// 	`<style>\n${css}\n</style>`
// );
// fs.writeFileSync(
// 	'./src/lib/components/Menu/MenuItem.svelte',
// 	menuItemSvelteSynchronized,
// 	'utf8'
// );

// /**
//  * Pagination
//  */
// css = fs.readFileSync(
// 	'../agnostic-css/src/components/pagination/pagination.css',
// 	'utf8'
// );
// const paginationSvelte = fs.readFileSync(
// 	'./src/lib/components/Pagination/Pagination.svelte',
// 	'utf8'
// );
// const paginationSvelteSynchronized = paginationSvelte.replace(
// 	styleRegex,
// 	`<style>\n${css}\n</style>`
// );
// fs.writeFileSync(
// 	'./src/lib/components/Pagination/Pagination.svelte',
// 	paginationSvelteSynchronized,
// 	'utf8'
// );

// /**
//  * Progress
//  */
// css = fs.readFileSync(
// 	'../agnostic-css/src/components/progress/progress.css',
// 	'utf8'
// );
// const progressSvelte = fs.readFileSync(
// 	'./src/lib/components/Progress/Progress.svelte',
// 	'utf8'
// );
// const progressSvelteSynchronized = progressSvelte.replace(
// 	styleRegex,
// 	`<style>\n${css}\n</style>`
// );
// fs.writeFileSync(
// 	'./src/lib/components/Progress/Progress.svelte',
// 	progressSvelteSynchronized,
// 	'utf8'
// );

// /**
//  * Select
//  */
// css = fs.readFileSync(
// 	'../agnostic-css/src/components/select/select.css',
// 	'utf8'
// );
// const selectSvelte = fs.readFileSync(
// 	'./src/lib/components/Select/Select.svelte',
// 	'utf8'
// );
// const selectSynchronized = selectSvelte.replace(
// 	styleRegex,
// 	`<style>\n${css}\n</style>`
// );
// fs.writeFileSync(
// 	'./src/lib/components/Select/Select.svelte',
// 	selectSynchronized,
// 	'utf8'
// );

// /**
//  * Spinner
//  */
// css = fs.readFileSync(
// 	'../agnostic-css/src/components/loaders/spinner.css',
// 	'utf8'
// );
// const spinnerSvelte = fs.readFileSync(
// 	'./src/lib/components/Spinner/Spinner.svelte',
// 	'utf8'
// );
// const spinnerSynchronized = spinnerSvelte.replace(
// 	styleRegex,
// 	`<style>\n${css}\n</style>`
// );
// fs.writeFileSync(
// 	'./src/lib/components/Spinner/Spinner.svelte',
// 	spinnerSynchronized,
// 	'utf8'
// );

// /**
//  * Switch
//  */
// css = fs.readFileSync(
// 	'../agnostic-css/src/components/switch/switch.css',
// 	'utf8'
// );
// const switchSvelte = fs.readFileSync(
// 	'./src/lib/components/Switch/Switch.svelte',
// 	'utf8'
// );
// const switchSynchronized = switchSvelte.replace(
// 	styleRegex,
// 	`<style>\n${css}\n</style>`
// );
// fs.writeFileSync(
// 	'./src/lib/components/Switch/Switch.svelte',
// 	switchSynchronized,
// 	'utf8'
// );

// /**
//  * Tabs
//  */
// css = fs.readFileSync('../agnostic-css/src/components/tabs/tabs.css', 'utf8');
// const tabsSvelte = fs.readFileSync(
// 	'./src/lib/components/Tabs/Tabs.svelte',
// 	'utf8'
// );
// const tabsSvelteSynchronized = tabsSvelte.replace(
// 	styleRegex,
// 	`<style>\n${css}\n</style>`
// );
// fs.writeFileSync(
// 	'./src/lib/components/Tabs/Tabs.svelte',
// 	tabsSvelteSynchronized,
// 	'utf8'
// );

// /**
//  * Tables
//  */
// css = fs.readFileSync('../agnostic-css/src/components/table/table.css', 'utf8');
// const tableSvelte = fs.readFileSync(
// 	'./src/lib/components/Table/Table.svelte',
// 	'utf8'
// );
// const tableSynchronized = tableSvelte.replace(
// 	styleRegex,
// 	`<style>\n${css}\n</style>`
// );
// fs.writeFileSync(
// 	'./src/lib/components/Table/Table.svelte',
// 	tableSynchronized,
// 	'utf8'
// );

/**
 * Tags
 */
css = fs.readFileSync('../agnostic-css/src/components/tag/tag.css', 'utf8');
const tagSvelte = fs.readFileSync(
	'./src/lib/components/Tag/Tag.svelte',
	'utf8'
);
const tagSvelteSynchronized = tagSvelte.replace(
	styleRegex,
	`<style>\n${css}\n</style>`
);
fs.writeFileSync(
	'./src/lib/components/Tag/Tag.svelte',
	tagSvelteSynchronized,
	'utf8'
);
