

<!-- agnosticui:context:start -->
## AgnosticUI Components

This project uses AgnosticUI Local (v0.0.1, vue framework).
Components are installed at `./src/components/ag`.

> Re-run `npx agnosticui-cli context` after adding or updating components.

### Accordion

**Import:** `import VueAccordion from './src/components/ag/Accordion/vue/VueAccordion.vue';`

### Alert

**Import:** `import VueAlert from './src/components/ag/Alert/vue/VueAlert.vue';`

**Props:**
```typescript
variant?: AlertVariant;
bordered?: boolean;
rounded?: boolean;
borderedLeft?: boolean;
dismissible?: boolean;
onAlertDismiss?: (event: AlertDismissEvent) => void;
```

### AspectRatio

**Import:** `import VueAspectRatio from './src/components/ag/AspectRatio/vue/VueAspectRatio.vue';`

**Props:**
```typescript
width: number;
height: number;
maxWidth?: number | undefined;
```

### Avatar

**Import:** `import VueAvatar from './src/components/ag/Avatar/vue/VueAvatar.vue';`

**Props:**
```typescript
/** Text content to display (typically initials like "AB") */
text?: string;
/** Image source URL */
imgSrc?: string;
/** Alt text for the image (required when imgSrc is provided for accessibility) */
imgAlt?: string;
/** Size of the avatar */
size?: AvatarSize;
/** Shape of the avatar */
shape?: AvatarShape;
/** Color variant */
variant?: AvatarVariant;
/** ARIA label for accessibility */
ariaLabel?: string;
```

### Badge

**Import:** `import VueBadge from './src/components/ag/Badge/vue/VueBadge.vue';`

**Props:**
```typescript
variant?: 'default' | 'success' | 'warning' | 'danger' | 'primary' | 'info' | 'neutral' | 'monochrome';
size?: 'xs' | 'sm' | 'md';
dot?: boolean;
value?: number | null;
max?: number;
interactive?: boolean;
statusLabel?: string | null;
live?: 'off' | 'polite' | 'assertive';
hiddenFromAT?: boolean;
```

### BadgeFx

**Import:** `import VueBadgeFx from './src/components/ag/BadgeFx/vue/VueBadgeFx.vue';`

### Breadcrumb

**Import:** `import VueBreadcrumb from './src/components/ag/Breadcrumb/vue/VueBreadcrumb.vue';`

**Props:**
```typescript
items?: BreadcrumbItem[];
type?: 'default' | 'slash' | 'bullet' | 'arrow';
primary?: boolean;
ariaLabel?: string;
onBreadcrumbClick?: (event: BreadcrumbClickEvent) => void;
```

### Button

**Import:** `import VueButton from './src/components/ag/Button/vue/VueButton.vue';`

**Props:**
```typescript
variant?: 'success' | 'primary' | 'secondary' | 'warning' | 'danger' | 'monochrome' | '';
size?: 'x-sm' | 'sm' | 'md' | 'lg' | 'xl';
shape?: 'capsule' | 'rounded' | 'circle' | 'square' | 'rounded-square' | '';
bordered?: boolean;
ghost?: boolean;
link?: boolean;
grouped?: boolean;
fullWidth?: boolean;
type?: 'button' | 'submit' | 'reset';
disabled?: boolean;
loading?: boolean;
toggle?: boolean;
pressed?: boolean;
ariaLabel?: string;
onClick?: (event: MouseEvent) => void;
onFocus?: (event: FocusEvent) => void;
onBlur?: (event: FocusEvent) => void;
onToggle?: (event: ButtonToggleEvent) => void;
```

### ButtonFx

**Import:** `import VueButtonFx from './src/components/ag/ButtonFx/vue/VueButtonFx.vue';`

### Card

**Import:** `import VueCard from './src/components/ag/Card/vue/VueCard.vue';`

**Props:**
```typescript
stacked?: boolean;
shadow?: boolean;
animated?: boolean;
/** Border radius size. Use 'sm', 'md', 'lg' or true (defaults to 'md') */
rounded?: CardRounded | boolean;
variant?: CardVariant;
```

### Checkbox

**Import:** `import VueCheckbox from './src/components/ag/Checkbox/vue/VueCheckbox.vue';`

**Props:**
```typescript
name?: string;
value?: string;
checked?: boolean;
indeterminate?: boolean;
disabled?: boolean;
size?: CheckboxSize;
theme?: CheckboxTheme;
labelText?: string;
labelPosition?: 'end' | 'start';
required?: boolean;
invalid?: boolean;
errorMessage?: string;
helpText?: string;
onClick?: (event: MouseEvent) => void;
onChange?: (event: CheckboxChangeEvent) => void;
```

### Collapsible

**Import:** `import VueCollapsible from './src/components/ag/Collapsible/vue/VueCollapsible.vue';`

**Props:**
```typescript
open?: boolean;
bordered?: boolean;
shadow?: boolean;
useChevron?: boolean;
useX?: boolean;
useMinus?: boolean;
noIndicator?: boolean;
onToggle?: (event: CollapsibleToggleEvent) => void;
```

### Combobox

**Import:** `import VueCombobox from './src/components/ag/Combobox/vue/VueCombobox.vue';`

**Props:**
```typescript
options: ComboboxOption[];
value?: string | string[];
defaultValue?: string | string[];
placeholder?: string;
label?: string;
labelPosition?: LabelPosition;
labelHidden?: boolean;
noLabel?: boolean;
ariaLabel?: string | null;
helpText?: string;
errorMessage?: string;
id?: string;
autocomplete?: 'list' | 'none';
filterMode?: 'startsWith' | 'contains' | 'none';
clearable?: boolean;
disabled?: boolean;
readonly?: boolean;
required?: boolean;
invalid?: boolean;
size?: 'small' | 'default' | 'large';
maxVisibleOptions?: number;
closeOnSelect?: boolean;
variant?: 'default' | 'monochrome';
multiple?: boolean;
maxOptionsVisible?: number;
loading?: boolean;
loadingText?: string;
noResultsText?: string;
onChange?: (event: ComboboxChangeEvent) => void;
onSelect?: (event: ComboboxSelectEvent) => void;
onSearch?: (event: ComboboxSearchEvent) => void;
onOpen?: (event: ComboboxOpenEvent) => void;
onClose?: (event: ComboboxCloseEvent) => void;
onFocus?: (event: FocusEvent) => void;
onBlur?: (event: FocusEvent) => void;
```

### CopyButton

**Import:** `import VueCopyButton from './src/components/ag/CopyButton/vue/VueCopyButton.vue';`

### Dialog

**Import:** `import VueDialog from './src/components/ag/Dialog/vue/VueDialog.vue';`

**Props:**
```typescript
open?: boolean;
heading?: string;
description?: string;
noCloseOnEscape?: boolean;
noCloseOnBackdrop?: boolean;
showCloseButton?: boolean;
drawerPosition?: EdgePosition | undefined;
onDialogOpen?: (event: DialogOpenEvent) => void;
onDialogClose?: (event: DialogCloseEvent) => void;
onDialogCancel?: (event: DialogCancelEvent) => void;
```

### Divider

**Import:** `import VueDivider from './src/components/ag/Divider/vue/VueDivider.vue';`

**Props:**
```typescript
vertical?: boolean;
justify?: DividerJustify;
size?: DividerSize;
variant?: DividerVariant;
```

### Drawer

**Import:** `import VueDrawer from './src/components/ag/Drawer/vue/VueDrawer.vue';`

**Props:**
```typescript
open?: boolean;
heading?: string;
description?: string;
noCloseOnEscape?: boolean;
noCloseOnBackdrop?: boolean;
showCloseButton?: boolean;
position?: 'start' | 'end' | 'top' | 'bottom';
onDrawerOpen?: (event: DrawerOpenEvent) => void;
onDrawerClose?: (event: DrawerCloseEvent) => void;
onDrawerCancel?: (event: DrawerCancelEvent) => void;
```

### EmptyState

**Import:** `import VueEmptyState from './src/components/ag/EmptyState/vue/VueEmptyState.vue';`

### Fieldset

**Import:** `import VueFieldset from './src/components/ag/Fieldset/vue/VueFieldset.vue';`

**Props:**
```typescript
/** Optional legend text for the fieldset. */
legend?: string;
/** Whether to apply borders and padding. */
bordered?: boolean;
/** Layout mode: 'vertical' (default) or 'horizontal'. */
layout?: 'vertical' | 'horizontal';
/** Visually hide the legend while keeping it accessible. */
legendHidden?: boolean;
```

### Flex

**Import:** `import VueFlex from './src/components/ag/Flex/vue/VueFlex.vue';`

### Header

**Import:** `import VueHeader from './src/components/ag/Header/vue/VueHeader.vue';`

**Props:**
```typescript
sticky?: boolean;
contentJustify?: HeaderContentJustify;
```

### Icon

**Import:** `import VueIcon from './src/components/ag/Icon/vue/VueIcon.vue';`

**Props:**
```typescript
size?: IconSize;
type?: IconType;
noFill?: boolean;
```

### IconButton

**Import:** `import VueIconButton from './src/components/ag/IconButton/vue/VueIconButton.vue';`

**Props:**
```typescript
label?: string;
icon?: string;
unicode?: string;
size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'monochrome';
type?: 'button' | 'submit' | 'reset';
disabled?: boolean;
pressed?: boolean;
loading?: boolean;
onIconButtonClick?: (event: IconButtonClickEvent) => void;
onIconButtonActivate?: (event: IconButtonActivateEvent) => void;
```

### IconButtonFx

**Import:** `import VueIconButtonFx from './src/components/ag/IconButtonFx/vue/VueIconButtonFx.vue';`

### Image

**Import:** `import VueImage from './src/components/ag/Image/vue/VueImage.vue';`

**Props:**
```typescript
/** Image source URL */
src: string;
/** Alternative text for accessibility (required) */
alt: string;
/** Array of source configurations for <picture> element */
sources?: AgImageSource[];
/** Intrinsic width in pixels */
width?: number;
/** Intrinsic height in pixels */
height?: number;
/** Aspect ratio in format "16/9" or auto-calculated from width/height */
aspectRatio?: string;
/** CSS object-fit value */
fit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
/** CSS object-position value */
position?: string;
/** Native browser lazy loading */
loading?: 'lazy' | 'eager';
/** Enable simple opacity fade transition */
fade?: boolean;
/** Fade transition duration in milliseconds */
duration?: number;
/** Backup image source if primary fails to load */
fallbackSrc?: string;
```

### Input

**Import:** `import VueInput from './src/components/ag/Input/vue/VueInput.vue';`

**Props:**
```typescript
label?: string;
labelHidden?: boolean;
labelPosition?: LabelPosition;
noLabel?: boolean;
ariaLabel?: string;
type?: InputType;
value?: string;
placeholder?: string;
rows?: number;
cols?: number;
size?: InputSize;
capsule?: boolean;
rounded?: boolean;
underlined?: boolean;
underlinedWithBackground?: boolean;
inline?: boolean;
required?: boolean;
disabled?: boolean;
readonly?: boolean;
invalid?: boolean;
errorMessage?: string;
helpText?: string;
onClick?: (event: MouseEvent) => void;
onInput?: (event: InputEvent) => void;
onChange?: (event: Event) => void;
onFocus?: (event: FocusEvent) => void;
onBlur?: (event: FocusEvent) => void;
```

### IntlFormatter

**Import:** `import VueIntlFormatter from './src/components/ag/IntlFormatter/vue/VueIntlFormatter.vue';`

**Props:**
```typescript
type?: 'date' | 'number' | 'percent' | 'currency';
value?: number | string | Date;
lang?: string;
date?: Date | string;
weekday?: 'narrow' | 'short' | 'long';
era?: 'narrow' | 'short' | 'long';
year?: 'numeric' | '2-digit';
month?: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long';
day?: 'numeric' | '2-digit';
hour?: 'numeric' | '2-digit';
minute?: 'numeric' | '2-digit';
second?: 'numeric' | '2-digit';
timeZoneName?: 'short' | 'long';
timeZone?: string;
hourFormat?: 'auto' | '12' | '24';
dateStyle?: 'full' | 'long' | 'medium' | 'short';
timeStyle?: 'full' | 'long' | 'medium' | 'short';
noGrouping?: boolean;
currency?: string;
currencyDisplay?: 'symbol' | 'narrowSymbol' | 'code' | 'name';
minimumIntegerDigits?: number;
minimumFractionDigits?: number;
maximumFractionDigits?: number;
minimumSignificantDigits?: number;
maximumSignificantDigits?: number;
```

### Kbd

**Import:** `import VueKbd from './src/components/ag/Kbd/vue/VueKbd.vue';`

**Props:**
```typescript
variant?: KbdVariant;
bordered?: boolean;
background?: boolean;
size?: KbdSize;
```

### Link

**Import:** `import VueLink from './src/components/ag/Link/vue/VueLink.vue';`

**Props:**
```typescript
href?: string;
variant?: 'primary' | 'success' | 'warning' | 'danger' | 'monochrome' | '';
isButton?: boolean;
buttonSize?: 'x-sm' | 'sm' | 'md' | 'lg' | 'xl';
buttonShape?: 'capsule' | 'rounded' | 'circle' | 'square' | 'rounded-square' | '';
buttonBordered?: boolean;
external?: boolean;
disabled?: boolean;
ariaLabel?: string;
onClick?: (event: MouseEvent) => void;
onFocus?: (event: FocusEvent) => void;
onBlur?: (event: FocusEvent) => void;
```

### Loader

**Import:** `import VueLoader from './src/components/ag/Loader/vue/VueLoader.vue';`

**Props:**
```typescript
size?: LoaderSize;
ariaLabel?: string;
```

### Mark

**Import:** `import VueMark from './src/components/ag/Mark/vue/VueMark.vue';`

**Props:**
```typescript
variant?: MarkVariant;
search?: string;
caseSensitive?: boolean;
matchAll?: boolean;
```

### Menu

**Import:** `import VueMenu from './src/components/ag/Menu/vue/VueMenu.vue';`

**Props:**
```typescript
value?: string;
disabled?: boolean;
href?: string;
target?: string;
checked?: boolean;
variant?: 'default' | 'monochrome';
onClick?: (event: MouseEvent) => void;
onMenuSelect?: (event: MenuSelectEvent) => void;
```

### MessageBubble

**Import:** `import VueMessageBubble from './src/components/ag/MessageBubble/vue/VueMessageBubble.vue';`

**Props:**
```typescript
from?: 'me' | 'them';
message?: string;
time?: string;
author?: string;
avatarUrl?: string;
footer?: string;
variant?: 'default' | 'success' | 'warning' | 'danger' | 'info' | 'neutral' | 'monochrome';
```

### Pagination

**Import:** `import VuePagination from './src/components/ag/Pagination/vue/VuePagination.vue';`

**Props:**
```typescript
/**
current?: number;
/**
totalPages?: number;
/**
offset?: PaginationOffset;
/**
justify?: PaginationJustify;
/**
ariaLabel?: string;
/**
bordered?: boolean;
/**
firstLastNavigation?: boolean;
/**
navigationLabels?: NavigationLabels;
/**
onPageChange?: (event: PageChangeEvent) => void;
```

### Popover

**Import:** `import VuePopover from './src/components/ag/Popover/vue/VuePopover.vue';`

**Props:**
```typescript
placement?: Placement;
distance?: number;
skidding?: number;
arrow?: boolean;
disabled?: boolean;
/**
triggerType?: 'click' | 'hover' | 'focus';
/** Match the popover's width to the trigger element */
matchTriggerWidth?: boolean;
/** Whether to show the close button in the header */
showCloseButton?: boolean;
/**
showHeader?: boolean;
/** Accessible label for the close button */
closeLabel?: string;
/**
trapFocus?: boolean;
onShow?: (event: PopoverShowEvent) => void;
onHide?: (event: PopoverHideEvent) => void;
```

### Progress

**Import:** `import VueProgress from './src/components/ag/Progress/vue/VueProgress.vue';`

**Props:**
```typescript
/**
value?: number;
/**
max?: number;
/**
label?: string;
/**
size?: 'small' | 'medium' | 'large';
```

### ProgressRing

**Import:** `import VueProgressRing from './src/components/ag/ProgressRing/vue/VueProgressRing.vue';`

**Props:**
```typescript
/** Progress value (0–100) */
value?: number;
/** Size preset */
size?: 'small' | 'medium' | 'large';
/** Color variant */
variant?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
/** Accessible label */
label?: string;
/** Disable animation (also respects prefers-reduced-motion) */
'no-animation'?: boolean;
```

### Radio

**Import:** `import VueRadio from './src/components/ag/Radio/vue/VueRadio.vue';`

**Props:**
```typescript
/**
name?: string;
/**
value?: string;
/**
checked?: boolean;
/**
disabled?: boolean;
/**
size?: RadioSize;
/**
theme?: RadioTheme;
/**
labelText?: string;
/**
labelPosition?: 'end' | 'start';
/**
label?: string;
/**
labelHidden?: boolean;
/**
noLabel?: boolean;
/**
required?: boolean;
/**
invalid?: boolean;
/**
errorMessage?: string;
/**
helpText?: string;
/**
onClick?: (event: MouseEvent) => void;
/**
onChange?: (event: RadioChangeEvent) => void;
```

### Rating

**Import:** `import VueRating from './src/components/ag/Rating/vue/VueRating.vue';`

**Props:**
```typescript
value?: number;
max?: number;
precision?: RatingPrecision;
readonly?: boolean;
allowClear?: boolean;
variant?: RatingVariant;
size?: RatingSize;
name?: string;
label?: string;
labelPosition?: LabelPosition;
labelHidden?: boolean;
noLabel?: boolean;
required?: boolean;
invalid?: boolean;
errorMessage?: string;
helpText?: string;
onRatingChange?: (event: RatingChangeEvent) => void;
onRatingHover?: (event: RatingHoverEvent) => void;
```

### ScrollProgress

**Import:** `import VueScrollProgress from './src/components/ag/ScrollProgress/vue/VueScrollProgress.vue';`

**Props:**
```typescript
/**
mode?: 'bar' | 'dot-trail' | 'badge' | 'ring';
/**
target?: HTMLElement | null;
/**
orientation?: 'top' | 'bottom';
/**
dots?: number;
/**
badgeVariant?: 'default' | 'success' | 'warning' | 'danger' | 'info' | 'neutral' | 'monochrome';
/**
ringSize?: number;
/**
ringStrokeWidth?: number;
/**
ringVariant?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
/**
precision?: number;
```

### ScrollToButton

**Import:** `import VueScrollToButton from './src/components/ag/ScrollToButton/vue/VueScrollToButton.vue';`

**Props:**
```typescript
label?: string;
showLabel?: boolean;
icon?: boolean;
scrollThreshold?: number;
target?: 'top' | 'bottom' | string | HTMLElement;
direction?: 'up' | 'down' | 'auto';
smoothScroll?: boolean;
visible?: boolean;
size?: 'x-sm' | 'sm' | 'md' | 'lg' | 'xl';
shape?: 'capsule' | 'rounded' | 'circle' | 'square' | 'rounded-square' | '';
```

### Select

**Import:** `import VueSelect from './src/components/ag/Select/vue/VueSelect.vue';`

**Props:**
```typescript
size?: SelectSize;
multiple?: boolean;
disabled?: boolean;
name?: string;
multipleSize?: number;
label?: string;
labelPosition?: LabelPosition;
labelHidden?: boolean;
noLabel?: boolean;
required?: boolean;
invalid?: boolean;
errorMessage?: string;
helpText?: string;
onClick?: (event: MouseEvent) => void;
onFocus?: (event: FocusEvent) => void;
onBlur?: (event: FocusEvent) => void;
onChange?: (event: SelectChangeEvent) => void;
```

### Sidebar

**Import:** `import VueSidebar from './src/components/ag/Sidebar/vue/VueSidebar.vue';`

**Props:**
```typescript
/** Whether the sidebar is open or closed */
open?: boolean;
/** Whether the sidebar is collapsed (rail mode) or expanded (desktop mode) */
collapsed?: boolean;
/** Whether the sidebar is on the left or right */
position?: 'left' | 'right';
/** ARIA label for the sidebar */
ariaLabel?: string;
/** Variant of the sidebar */
variant?: 'default' | 'bordered' | 'elevated';
/** Whether to disable transitions */
noTransition?: boolean;
/** Width of the sidebar */
width?: string;
/** Whether to disable compact/rail mode. When true, sidebar is either full-width or hidden (no intermediate collapsed state) */
disableCompactMode?: boolean;
/** Whether to show the mobile toggle button */
showMobileToggle?: boolean;
/** Position of the mobile toggle button. Default: top-left */
mobileTogglePosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
/** Whether to show the header toggle button */
showHeaderToggle?: boolean;
/** Callback function to handle toggle open/close events */
onToggle?: (event: AgSidebarToggleEvent) => void;
/** Callback function to handle expanded/collapsed events */
onCollapse?: (event: AgSidebarCollapseEvent) => void;
```

### SidebarNav

**Import:** `import VueSidebarNav from './src/components/ag/SidebarNav/vue/VueSidebarNav.vue';`

### SkeletonLoader

**Import:** `import VueSkeletonLoader from './src/components/ag/SkeletonLoader/vue/VueSkeletonLoader.vue';`

**Props:**
```typescript
variant?: SkeletonVariant;
effect?: SkeletonEffect;
intensity?: SkeletonIntensity;
width?: string;
height?: string;
```

### Slider

**Import:** `import VueSlider from './src/components/ag/Slider/vue/VueSlider.vue';`

**Props:**
```typescript
label?: string;
labelPosition?: LabelPosition;
labelHidden?: boolean;
noLabel?: boolean;
ariaLabel?: string;
min?: number;
max?: number;
step?: number;
value?: number | [number, number];
dual?: boolean;
vertical?: boolean;
size?: 'small' | 'default' | 'large';
filled?: boolean;
monochrome?: boolean;
disabled?: boolean;
readonly?: boolean;
required?: boolean;
invalid?: boolean;
errorMessage?: string;
helpText?: string;
name?: string;
showTooltip?: boolean;
showTicks?: boolean;
tickStep?: number;
onChange?: (event: CustomEvent<{ value: number | [number, number] }>) => void;
onInput?: (event: CustomEvent<{ value: number | [number, number] }>) => void;
onFocus?: (event: FocusEvent) => void;
onBlur?: (event: FocusEvent) => void;
```

### Spinner

**Import:** `import VueSpinner from './src/components/ag/Spinner/vue/VueSpinner.vue';`

**Props:**
```typescript
size?: SpinnerSize;
ariaLabel?: string;
```

### Tabs

**Import:** `import VueTabs from './src/components/ag/Tabs/vue/VueTabs.vue';`

**Props:**
```typescript
activation?: TabsActivation;
activeTab?: number;
orientation?: TabsOrientation;
ariaLabel?: string;
onTabChange?: (event: TabChangeEvent) => void;
```

### Tag

**Import:** `import VueTag from './src/components/ag/Tag/vue/VueTag.vue';`

**Props:**
```typescript
variant?: TagVariant;
shape?: TagShape;
uppercase?: boolean;
removable?: boolean;
onTagRemove?: (event: TagRemoveEvent) => void;
```

### Timeline

**Import:** `import VueTimeline from './src/components/ag/Timeline/vue/VueTimeline.vue';`

**Props:**
```typescript
/** Orientation of the timeline */
orientation?: 'horizontal' | 'vertical';
/** Visual variant for styling connectors and markers */
variant?: 'primary' | 'success' | 'warning' | 'danger' | 'monochrome' | '';
/** Whether to use compact spacing */
compact?: boolean;
/** ARIA label for the timeline */
ariaLabel?: string | null;
```

### Toast

**Import:** `import VueToast from './src/components/ag/Toast/vue/VueToast.vue';`

**Props:**
```typescript
open?: boolean;
type?: ToastType;
position?: Position;
duration?: number;
autoDismiss?: boolean;
showCloseButton?: boolean;
pauseOnHover?: boolean;
bordered?: boolean;
rounded?: boolean;
borderedLeft?: boolean;
onToastOpen?: (event: ToastOpenEvent) => void;
onToastClose?: (event: ToastCloseEvent) => void;
onToastDismiss?: (event: ToastDismissEvent) => void;
```

### Toggle

**Import:** `import VueToggle from './src/components/ag/Toggle/vue/VueToggle.vue';`

**Props:**
```typescript
label?: string;
labelPosition?: LabelPosition;
labelHidden?: boolean;
noLabel?: boolean;
checked?: boolean;
size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
variant?: 'default' | 'success' | 'warning' | 'danger' | 'monochrome';
disabled?: boolean;
readonly?: boolean;
required?: boolean;
invalid?: boolean;
errorMessage?: string;
helpText?: string;
name?: string;
value?: string;
onClick?: (event: MouseEvent) => void;
onToggleChange?: (event: ToggleChangeEvent) => void;
```

### Tooltip

**Import:** `import VueTooltip from './src/components/ag/Tooltip/vue/VueTooltip.vue';`

**Props:**
```typescript
content?: string;
placement?: Placement;
distance?: number;
skidding?: number;
trigger?: string;
disabled?: boolean;
onShow?: (event: TooltipShowEvent) => void;
onHide?: (event: TooltipHideEvent) => void;
```

### VisuallyHidden

**Import:** `import VueVisuallyHidden from './src/components/ag/VisuallyHidden/vue/VueVisuallyHidden.vue';`

<!-- agnosticui:context:end -->
