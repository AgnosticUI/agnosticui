<!-- agnosticui:context:start -->
## AgnosticUI Components

This project uses AgnosticUI Local (v2.0.0-alpha.21, lit framework).
Components are installed at `./src/components/ag`.

> Re-run `npx agnosticui-cli context` after adding or updating components.

### Accordion

**Import:** `import './src/components/ag/Accordion/core/Accordion';`
**Tag:** `<ag-accordion>`

### Alert

**Import:** `import './src/components/ag/Alert/core/Alert';`
**Tag:** `<ag-alert>`

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

**Import:** `import './src/components/ag/AspectRatio/core/AspectRatio';`
**Tag:** `<ag-aspect-ratio>`

**Props:**
```typescript
width: number;
height: number;
maxWidth?: number | undefined;
```

### Avatar

**Import:** `import './src/components/ag/Avatar/core/Avatar';`
**Tag:** `<ag-avatar>`

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

**Import:** `import './src/components/ag/Badge/core/Badge';`
**Tag:** `<ag-badge>`

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

**Import:** `import './src/components/ag/BadgeFx/core/BadgeFx';`
**Tag:** `<ag-badge-fx>`

### Breadcrumb

**Import:** `import './src/components/ag/Breadcrumb/core/Breadcrumb';`
**Tag:** `<ag-breadcrumb>`

**Props:**
```typescript
items?: BreadcrumbItem[];
type?: 'default' | 'slash' | 'bullet' | 'arrow';
primary?: boolean;
ariaLabel?: string;
onBreadcrumbClick?: (event: BreadcrumbClickEvent) => void;
```

### Button

**Import:** `import './src/components/ag/Button/core/Button';`
**Tag:** `<ag-button>`

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

**Import:** `import './src/components/ag/ButtonFx/core/ButtonFx';`
**Tag:** `<ag-button-fx>`

### Card

**Import:** `import './src/components/ag/Card/core/Card';`
**Tag:** `<ag-card>`

**Props:**
```typescript
stacked?: boolean;
shadow?: boolean;
animated?: boolean;
/** Border radius size. Use 'sm', 'md', 'lg' or true (defaults to 'md') */
rounded?: CardRounded | boolean;
variant?: CardVariant;
/** Enables the media slot for edge-to-edge image/video rendering */
hasMedia?: boolean;
/** Whether media renders above or below the header/content/footer */
mediaPosition?: CardMediaPosition;
```

### Checkbox

**Import:** `import './src/components/ag/Checkbox/core/Checkbox';`
**Tag:** `<ag-checkbox>`

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

**Import:** `import './src/components/ag/Collapsible/core/Collapsible';`
**Tag:** `<ag-collapsible>`

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

**Import:** `import './src/components/ag/Combobox/core/Combobox';`
**Tag:** `<ag-combobox>`

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
validationMessages?: ValidationMessages;
```

### CopyButton

**Import:** `import './src/components/ag/CopyButton/core/CopyButton';`
**Tag:** `<ag-copy-button>`

### Dialog

**Import:** `import './src/components/ag/Dialog/core/Dialog';`
**Tag:** `<ag-dialog>`

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

**Import:** `import './src/components/ag/Divider/core/Divider';`
**Tag:** `<ag-divider>`

**Props:**
```typescript
vertical?: boolean;
justify?: DividerJustify;
size?: DividerSize;
variant?: DividerVariant;
```

### Drawer

**Import:** `import './src/components/ag/Drawer/core/Drawer';`
**Tag:** `<ag-drawer>`

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

**Import:** `import './src/components/ag/EmptyState/core/EmptyState';`
**Tag:** `<ag-empty-state>`

### Fieldset

**Import:** `import './src/components/ag/Fieldset/core/Fieldset';`
**Tag:** `<ag-fieldset>`

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

**Import:** `import './src/components/ag/Flex/core/Flex';`
**Tag:** `<ag-flex>`

### Header

**Import:** `import './src/components/ag/Header/core/Header';`
**Tag:** `<ag-header>`

**Props:**
```typescript
sticky?: boolean;
contentJustify?: HeaderContentJustify;
```

### Icon

**Import:** `import './src/components/ag/Icon/core/Icon';`
**Tag:** `<ag-icon>`

**Props:**
```typescript
size?: IconSize;
type?: IconType;
noFill?: boolean;
```

### IconButton

**Import:** `import './src/components/ag/IconButton/core/IconButton';`
**Tag:** `<ag-icon-button>`

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

**Import:** `import './src/components/ag/IconButtonFx/core/IconButtonFx';`
**Tag:** `<ag-icon-button-fx>`

### Image

**Import:** `import './src/components/ag/Image/core/Image';`
**Tag:** `<ag-image>`

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

**Import:** `import './src/components/ag/Input/core/Input';`
**Tag:** `<ag-input>`

**Props:**
```typescript
label?: string;
labelHidden?: boolean;
labelPosition?: LabelPosition;
noLabel?: boolean;
ariaLabel?: string;
name?: string;
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

**Import:** `import './src/components/ag/IntlFormatter/core/IntlFormatter';`
**Tag:** `<ag-intl-formatter>`

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

**Import:** `import './src/components/ag/Kbd/core/Kbd';`
**Tag:** `<ag-kbd>`

**Props:**
```typescript
variant?: KbdVariant;
bordered?: boolean;
background?: boolean;
size?: KbdSize;
```

### Link

**Import:** `import './src/components/ag/Link/core/Link';`
**Tag:** `<ag-link>`

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

**Import:** `import './src/components/ag/Loader/core/Loader';`
**Tag:** `<ag-loader>`

**Props:**
```typescript
size?: LoaderSize;
ariaLabel?: string;
```

### Mark

**Import:** `import './src/components/ag/Mark/core/Mark';`
**Tag:** `<ag-mark>`

**Props:**
```typescript
variant?: MarkVariant;
search?: string;
caseSensitive?: boolean;
matchAll?: boolean;
```

### Menu

**Import:** `import './src/components/ag/Menu/core/Menu';`
**Tag:** `<ag-menu>`

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

**Import:** `import './src/components/ag/MessageBubble/core/MessageBubble';`
**Tag:** `<ag-message-bubble>`

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

**Import:** `import './src/components/ag/Pagination/core/Pagination';`
**Tag:** `<ag-pagination>`

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

**Import:** `import './src/components/ag/Popover/core/Popover';`
**Tag:** `<ag-popover>`

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

**Import:** `import './src/components/ag/Progress/core/Progress';`
**Tag:** `<ag-progress>`

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

**Import:** `import './src/components/ag/ProgressRing/core/ProgressRing';`
**Tag:** `<ag-progress-ring>`

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

**Import:** `import './src/components/ag/Radio/core/Radio';`
**Tag:** `<ag-radio>`

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

**Import:** `import './src/components/ag/Rating/core/Rating';`
**Tag:** `<ag-rating>`

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
validationMessages?: ValidationMessages;
onRatingChange?: (event: RatingChangeEvent) => void;
onRatingHover?: (event: RatingHoverEvent) => void;
```

### ScrollProgress

**Import:** `import './src/components/ag/ScrollProgress/core/ScrollProgress';`
**Tag:** `<ag-scroll-progress>`

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

**Import:** `import './src/components/ag/ScrollToButton/core/ScrollToButton';`
**Tag:** `<ag-scroll-to-button>`

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

**Import:** `import './src/components/ag/Select/core/Select';`
**Tag:** `<ag-select>`

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

**Import:** `import './src/components/ag/Sidebar/core/Sidebar';`
**Tag:** `<ag-sidebar>`

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

**Import:** `import './src/components/ag/SidebarNav/core/SidebarNav';`
**Tag:** `<ag-sidebar-nav>`

### SkeletonLoader

**Import:** `import './src/components/ag/SkeletonLoader/core/SkeletonLoader';`
**Tag:** `<ag-skeleton-loader>`

**Props:**
```typescript
variant?: SkeletonVariant;
effect?: SkeletonEffect;
intensity?: SkeletonIntensity;
width?: string;
height?: string;
```

### Slider

**Import:** `import './src/components/ag/Slider/core/Slider';`
**Tag:** `<ag-slider>`

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

**Import:** `import './src/components/ag/Spinner/core/Spinner';`
**Tag:** `<ag-spinner>`

**Props:**
```typescript
size?: SpinnerSize;
ariaLabel?: string;
```

### Tabs

**Import:** `import './src/components/ag/Tabs/core/Tabs';`
**Tag:** `<ag-tabs>`

**Props:**
```typescript
activation?: TabsActivation;
activeTab?: number;
orientation?: TabsOrientation;
ariaLabel?: string;
onTabChange?: (event: TabChangeEvent) => void;
```

### Tag

**Import:** `import './src/components/ag/Tag/core/Tag';`
**Tag:** `<ag-tag>`

**Props:**
```typescript
variant?: TagVariant;
shape?: TagShape;
uppercase?: boolean;
removable?: boolean;
onTagRemove?: (event: TagRemoveEvent) => void;
```

### Timeline

**Import:** `import './src/components/ag/Timeline/core/Timeline';`
**Tag:** `<ag-timeline>`

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

**Import:** `import './src/components/ag/Toast/core/Toast';`
**Tag:** `<ag-toast>`

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

**Import:** `import './src/components/ag/Toggle/core/Toggle';`
**Tag:** `<ag-toggle>`

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
validationMessages?: ValidationMessages;
onClick?: (event: MouseEvent) => void;
onToggleChange?: (event: ToggleChangeEvent) => void;
```

### Tooltip

**Import:** `import './src/components/ag/Tooltip/core/Tooltip';`
**Tag:** `<ag-tooltip>`

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

**Import:** `import './src/components/ag/VisuallyHidden/core/VisuallyHidden';`
**Tag:** `<ag-visually-hidden>`

<!-- agnosticui:context:end -->
