import { LitElement, html, css, nothing } from 'lit';
import { property, state, query } from 'lit/decorators.js';
import { AgButton } from '../../Button/core/Button.js';
import type { ButtonProps } from '../../Button/core/Button.js';

// Event type definitions
export interface MenuOpenEventDetail {
  open: boolean;
}
export type MenuOpenEvent = CustomEvent<MenuOpenEventDetail>;

export interface MenuCloseEventDetail {
  open: boolean;
}
export type MenuCloseEvent = CustomEvent<MenuCloseEventDetail>;

export interface MenuSelectEventDetail {
  value: string;
}
export type MenuSelectEvent = CustomEvent<MenuSelectEventDetail>;

// Extend ButtonProps and add menu-specific props.
// We rename `variant` from ButtonProps to `buttonVariant` to avoid conflict
// with the structural `variant` prop of the MenuButton.
export interface MenuButtonProps extends Omit<ButtonProps, 'variant'> {
  menuVariant?: 'chevron' | 'button' | 'icon';
  // We bring back `variant` from ButtonProps but rename it to `buttonVariant`
  // to clearly distinguish it as the color/style variant for the button part.
  buttonVariant?: ButtonProps['variant'];
  // Unicode character for icon variant
  unicode?: string;
  menuAlign?: 'left' | 'right';
  // Additional vertical spacing beyond the trigger button's height when positioning the menu
  additionalGutter?: string;
  // Menu-specific event handlers
  onMenuOpen?: (event: MenuOpenEvent) => void;
  onMenuClose?: (event: MenuCloseEvent) => void;
  // We omit some ButtonProps that are controlled by the menu logic
  // e.g. `type`, `toggle`, `pressed`, `onClick` etc. are handled internally.
}


export interface MenuItemProps {
  value?: string;
  disabled?: boolean;
  href?: string;
  target?: string;
  checked?: boolean;
  variant?: 'default' | 'monochrome';
  onClick?: (event: MouseEvent) => void;
  onMenuSelect?: (event: MenuSelectEvent) => void;
}

export interface MenuProps {
  open?: boolean;
  placement?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  selectedValue?: string;
  type?: 'default' | 'single-select';
  onKeyDown?: (event: KeyboardEvent) => void;
}

export class AgMenuButton extends LitElement implements MenuButtonProps {
  @query('ag-button')
  declare _trigger: AgButton;

  declare _menu: AgMenu | null;
  declare _clickOutsideHandler: (event: Event) => void;

  // PROPS FROM ButtonProps
  @property({ type: String, reflect: true })
  declare size: 'x-sm' | 'sm' | 'md' | 'lg' | 'xl';

  @property({ type: String, reflect: true })
  declare shape: 'capsule' | 'rounded' | 'circle' | 'square' | 'rounded-square' | '';

  @property({ type: Boolean, reflect: true })
  declare bordered: boolean;

  @property({ type: Boolean, reflect: true })
  declare ghost: boolean;

  @property({ type: Boolean, reflect: true })
  declare link: boolean;

  @property({ type: Boolean, reflect: true })
  declare grouped: boolean;

  @property({ type: Boolean })
  declare disabled: boolean;

  @property({ type: Boolean })
  declare loading: boolean;

  @property({ type: String, reflect: true, attribute: 'aria-label' })
  declare ariaLabel: string;

  @property({ type: String, reflect: true, attribute: 'aria-describedby' })
  declare ariaDescribedby: string;

  // MENU-SPECIFIC PROPS
  @property({ type: String, reflect: true, attribute: 'menu-variant' })
  declare menuVariant: 'chevron' | 'button' | 'icon';

  @property({ type: String, reflect: true, attribute: 'button-variant' })
  declare buttonVariant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'monochrome' | '';

  @property({ type: String })
  declare unicode: string;

  @property({ type: String, reflect: true, attribute: 'menu-align' })
  declare menuAlign: 'left' | 'right';

  @property({ type: String, reflect: true, attribute: 'additional-gutter' })
  declare additionalGutter: string;

  @property({ attribute: false })
  declare onMenuOpen?: (event: MenuOpenEvent) => void;

  @property({ attribute: false })
  declare onMenuClose?: (event: MenuCloseEvent) => void;

  @property({ attribute: false })
  declare onClick?: (event: MouseEvent) => void;

  @property({ attribute: false })
  declare onFocus?: (event: FocusEvent) => void;

  @property({ attribute: false })
  declare onBlur?: (event: FocusEvent) => void;

  @state()
  declare _menuOpen: boolean;

  constructor() {
    super();
    // Defaults from ButtonProps
    this.size = 'md';
    this.shape = 'rounded';
    this.bordered = false;
    this.ghost = false;
    this.link = false;
    this.grouped = false;
    this.disabled = false;
    this.loading = false;
    this.ariaLabel = '';
    this.ariaDescribedby = '';
    // Defaults for MenuButton
    this.menuVariant = 'chevron';
    this.buttonVariant = '';
    this.unicode = '';
    this._menuOpen = false;
    this.menuAlign = 'left';
    this.additionalGutter = '';
    this._clickOutsideHandler = this._handleClickOutside.bind(this);
  }

  static styles = css`
    :host {
      display: inline-flex;
      position: relative;
      background-color: inherit;
    }

    .chevron-icon {
      width: var(--ag-space-4);
      height: var(--ag-space-4);
      color: var(--ag-text-secondary);
      transition: transform var(--ag-motion-fast) ease;
      flex-shrink: 0;
    }

    :host([button-variant="primary"]) .chevron-icon,
    :host([button-variant="secondary"]) .chevron-icon,
    :host([button-variant="success"]) .chevron-icon,
    :host([button-variant="warning"]) .chevron-icon,
    :host([button-variant="danger"]) .chevron-icon,
    :host([button-variant="monochrome"]) .chevron-icon {
      color: var(--ag-white);
    }

    /* When a button is ghost, we want the chevron to be the variant color */
    :host([ghost][button-variant="primary"]) .chevron-icon {
      color: var(--ag-primary);
    }
    :host([ghost][button-variant="secondary"]) .chevron-icon {
      color: var(--ag-secondary);
    }
    :host([ghost][button-variant="success"]) .chevron-icon {
      color: var(--ag-success);
    }
    :host([ghost][button-variant="warning"]) .chevron-icon {
      color: var(--ag-warning);
    }
    :host([ghost][button-variant="danger"]) .chevron-icon {
      color: var(--ag-danger);
    }
    :host([ghost][button-variant="monochrome"]) .chevron-icon {
      color: var(--ag-text-primary);
    }

    .label {
      display: inline-flex;
      align-items: center;
      gap: var(--ag-space-2);
    }

    ag-button[aria-expanded="true"] .chevron-icon {
      transform: rotate(180deg);
    }

    ::slotted(ag-menu) {
      position: absolute;
      background-color: var(--ag-background-primary);
      margin-top: var(--ag-space-1);
      z-index: var(--ag-z-index-dropdown);
      /*
      right: initial;
      left: 0;
      */
    }
    /* Left alignment - menu left aligns with button left */
    :host([menu-align="left"]) ::slotted(ag-menu) {
      left: 0;
      right: auto;
    }

    /* Right alignment - menu right aligns with button right */
    :host([menu-align="right"]) ::slotted(ag-menu) {
      right: 0;
      left: auto;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('click', this._clickOutsideHandler);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('click', this._clickOutsideHandler);
  }

  firstUpdated() {
    this._updateMenuReference();
  }

  updated(changedProperties: Map<PropertyKey, unknown>) {
    super.updated(changedProperties);
    if (changedProperties.has('_menuOpen')) {
      this._updateMenuReference();
    }
  }

  private _updateMenuReference() {
    this._menu = this.querySelector('ag-menu') as AgMenu;
  }

  private _handleClickOutside(event: Event) {
    if (!this._menuOpen) return;
    const target = event.target as Element;
    if (!this.contains(target)) {
      this._closeMenu();
    }
  }

  private _handleClick(event: MouseEvent) {
    if (this.disabled) return;

    // Invoke onClick callback if provided
    if (this.onClick) {
      this.onClick(event);
    }

    // Re-dispatch click event from host for addEventListener pattern
    const clickEvent = new MouseEvent('click', {
      bubbles: true,
      composed: true,
      cancelable: event.cancelable,
    });
    this.dispatchEvent(clickEvent);

    if (this._menuOpen) {
      this._closeMenu();
    } else {
      this._openMenu();
    }
  }

  private _handleFocus(event: FocusEvent) {
    // Invoke onFocus callback if provided
    if (this.onFocus) {
      this.onFocus(event);
    }

    // Re-dispatch focus event from host for addEventListener pattern
    const focusEvent = new FocusEvent('focus', {
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(focusEvent);
  }

  private _handleBlur(event: FocusEvent) {
    // Invoke onBlur callback if provided
    if (this.onBlur) {
      this.onBlur(event);
    }

    // Re-dispatch blur event from host for addEventListener pattern
    const blurEvent = new FocusEvent('blur', {
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(blurEvent);
  }

  private _handleKeydown(event: KeyboardEvent) {
    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        this._openMenu();
        break;
      case 'ArrowDown':
        event.preventDefault();
        this._openMenu(true);
        break;
      case 'ArrowUp':
        event.preventDefault();
        this._openMenu(false);
        break;
    }
  }
  // Add method to update menu position based on button height:
  private _updateMenuPosition() {
    if (!this._menu || !this._trigger) return;

    const triggerButton = this._trigger.shadowRoot?.querySelector('button');
    if (!triggerButton) return;

    const buttonHeight = triggerButton.offsetHeight;

    // Position menu below button, optionally adding extra gutter
    if (this.additionalGutter) {
      this._menu.style.top = `calc(${buttonHeight}px + ${this.additionalGutter})`;
    } else {
      this._menu.style.top = `${buttonHeight}px`;
    }
  }

  _openMenu(focusFirst = true) {
    if (this._menuOpen) return;
    this._menuOpen = true;
    this._updateMenuReference();

    if (this._menu) {
      this._menu.open = true;
      // Update position before showing
      this._updateMenuPosition();
      this._menu._updateMenuItems();
      requestAnimationFrame(() => {
        if (focusFirst) {
          this._menu?._focusFirstItem();
        } else {
          this._menu?._focusLastItem();
        }
      });
    }
    const menuOpenEvent = new CustomEvent<MenuOpenEventDetail>('menu-open', {
      detail: { open: true },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(menuOpenEvent);
    if (this.onMenuOpen) this.onMenuOpen(menuOpenEvent);
  }

  _closeMenu() {
    if (!this._menuOpen) return;
    this._menuOpen = false;
    if (this._menu) {
      this._menu.open = false;
    }
    this._trigger?.focus();

    const menuCloseEvent = new CustomEvent<MenuCloseEventDetail>('menu-close', {
      detail: { open: false },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(menuCloseEvent);
    if (this.onMenuClose) this.onMenuClose(menuCloseEvent);
  }

  private _renderChevronIcon() {
    return html`
      <svg class="chevron-icon" part="ag-menu-chevron-icon" viewBox="0 0 20 20" fill="currentColor">
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    `;
  }

  render() {
    // For dynamic icon switching, we expose the menu state via a data attribute
    // that consumers can use in their slot content
    this.setAttribute('data-menu-open', this._menuOpen ? 'true' : 'false');

    const content = this.unicode
      ? html`<span class="unicode-icon" part="ag-menu-unicode-icon">${this.unicode}</span>`
      : html`<slot></slot>`;

    const isIconOnly = this.menuVariant === 'icon';

    return html`
      <ag-button
        .variant=${this.buttonVariant}
        .size=${this.size}
        .shape=${isIconOnly ? this.shape || 'square' : this.shape}
        ?bordered=${this.bordered}
        ?ghost=${this.ghost}
        ?link=${this.link}
        ?grouped=${this.grouped}
        ?disabled=${this.disabled}
        ?loading=${this.loading}
        aria-haspopup="menu"
        aria-expanded="${this._menuOpen}"
        .ariaLabel=${this.ariaLabel || 'Menu'}
        @click=${this._handleClick}
        @focus=${this._handleFocus}
        @blur=${this._handleBlur}
        @keydown=${this._handleKeydown}
      >
        ${this.menuVariant === 'chevron'
          ? html`<span class="label" part="ag-menu-label">${content}</span> ${this._renderChevronIcon()}`
          : content}
      </ag-button>
      <slot name="menu"></slot>
    `;
  }
}

// ... (AgMenu, AgMenuItem, AgMenuSeparator classes remain the same)
export class AgMenu extends LitElement implements MenuProps {
  @property({ type: Boolean })
  declare open: boolean;

  @property()
  declare placement: string;

  @property({ reflect: true, attribute: 'aria-label' })
  declare ariaLabel: string;

  @property({ reflect: true, attribute: 'aria-labelledby' })
  declare ariaLabelledBy: string;

  @property({ attribute: 'selected-value' })
  declare selectedValue?: string;

  @property({ type: String })
  declare type: 'default' | 'single-select';

  @property({ attribute: false })
  declare onKeyDown?: (event: KeyboardEvent) => void;

  @state()
  declare _focusedIndex: number;

  @state()
  declare _menuItems: AgMenuItem[];

  constructor() {
    super();
    this.open = false;
    this.placement = 'bottom-start';
    this.ariaLabel = '';
    this.ariaLabelledBy = '';
    this.type = 'default';
    this._focusedIndex = 0;
    this._menuItems = [];
  }

  static styles = css`
    :host {
      position: absolute;
      background-color: var(--ag-background-primary);
      border: 1px solid var(--ag-border-subtle);
      border-radius: var(--ag-radius-md);
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      margin-top: var(--ag-space-1);
      min-width: 12rem;
      max-width: 16rem;
      width: max-content;
      z-index: var(--ag-z-index-dropdown);
      /*
      right: initial;
      left: 0;
      */
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .menu {
      padding: var(--ag-space-2);
    }

    :host([hidden]) {
      display: none;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'menu');
    this.setAttribute('aria-orientation', 'vertical');
    this.addEventListener('keydown', this._handleKeydown);
    this.addEventListener('menu-select', this._handleMenuSelect as EventListener);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('keydown', this._handleKeydown);
    this.removeEventListener('menu-select', this._handleMenuSelect as EventListener);
  }

  firstUpdated() {
    // Ensure menu is hidden by default on first render
    if (!this.open) {
      this.setAttribute('hidden', '');
    }
  }

  updated(changedProperties: Map<PropertyKey, unknown>) {
    if (changedProperties.has('open')) {
      if (this.open) {
        this.removeAttribute('hidden');
      } else {
        // Always set hidden when open is false, regardless of how it was set
        this.setAttribute('hidden', '');
      }
    }
    if (changedProperties.has('selectedValue')) {
      this._updateSelection();
    }
  }

  private _handleMenuSelect(event: CustomEvent) {
    // Handle selection tracking for this menu
    // Note: We allow the event to bubble up to the menuButton
    // so it can also handle the selection event
    const selectedItem = event.target as AgMenuItem;
    this.selectedValue = selectedItem.value;
  }

  private _updateSelection() {
    if (this.selectedValue !== undefined) {
      this._menuItems.forEach(item => {
        item.checked = item.value === this.selectedValue;
      });
    }
  }

  _updateMenuItems() {
    this._menuItems = Array.from(this.querySelectorAll('ag-menu-item')) as AgMenuItem[];
    this._updateTabIndex();
    this._updateSelection();
  }

  private _updateTabIndex() {
    this._menuItems.forEach((item, index) => {
      item.setAttribute('tabindex', index === this._focusedIndex ? '0' : '-1');
    });
  }

  _focusFirstItem() {
    for (let i = 0; i < this._menuItems.length; i++) {
      if (!this._menuItems[i].disabled) {
        this._focusedIndex = i;
        this._updateTabIndex();
        this._menuItems[i]?.focus();
        return;
      }
    }
  }

  _focusLastItem() {
    for (let i = this._menuItems.length - 1; i >= 0; i--) {
      if (!this._menuItems[i].disabled) {
        this._focusedIndex = i;
        this._updateTabIndex();
        this._menuItems[i]?.focus();
        return;
      }
    }
  }

  private _focusNextItem() {
    if (this._menuItems.length === 0) return;
    for (let i = 1; i <= this._menuItems.length; i++) {
      const nextIndex = (this._focusedIndex + i) % this._menuItems.length;
      if (!this._menuItems[nextIndex].disabled) {
        this._focusedIndex = nextIndex;
        this._updateTabIndex();
        this._menuItems[this._focusedIndex]?.focus();
        return;
      }
    }
  }

  private _focusPreviousItem() {
    if (this._menuItems.length === 0) return;
    for (let i = 1; i <= this._menuItems.length; i++) {
      const prevIndex = (this._focusedIndex - i + this._menuItems.length) % this._menuItems.length;
      if (!this._menuItems[prevIndex].disabled) {
        this._focusedIndex = prevIndex;
        this._updateTabIndex();
        this._menuItems[this._focusedIndex]?.focus();
        return;
      }
    }
  }

  private _handleKeydown(event: KeyboardEvent) {
    // Invoke callback if provided (native composed event)
    if (this.onKeyDown) {
      this.onKeyDown(event);
    }

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this._focusNextItem();
        break;
      case 'ArrowUp':
        event.preventDefault();
        this._focusPreviousItem();
        break;
      case 'Home':
        event.preventDefault();
        this._focusFirstItem();
        break;
      case 'End':
        event.preventDefault();
        this._focusLastItem();
        break;
      case 'Enter':
        event.preventDefault();
        this._menuItems[this._focusedIndex]?.click();
        break;
      case 'Escape':
      case 'Tab':
        event.preventDefault();
        this._closeMenu();
        break;
    }
  }

  private _closeMenu() {
    const menuButton = this.closest('ag-menu-button') as AgMenuButton;
    if (menuButton) {
      menuButton._closeMenu();
    }
  }

  render() {
    return html`<div class="menu" part="ag-menu"><slot></slot></div>`;
  }
}

export class AgMenuItem extends LitElement implements MenuItemProps {
  @property()
  declare value: string;

  @property({ type: Boolean })
  declare disabled: boolean;

  @property()
  declare href: string;

  @property()
  declare target: string;

  @property({ type: Boolean })
  declare checked: boolean;

  @property({ type: String, reflect: true })
  declare variant: 'default' | 'monochrome';

  @property({ attribute: false })
  declare onClick?: (event: MouseEvent) => void;

  @property({ attribute: false })
  declare onMenuSelect?: (event: MenuSelectEvent) => void;

  private _menu: AgMenu | null = null;

  constructor() {
    super();
    this.value = '';
    this.disabled = false;
    this.href = '';
    this.target = '';
    this.checked = false;
    this.variant = 'default';
  }

  static styles = css`
    :host {
      display: block;
    }

    button {
      width: 100%;
    }
    button,
    a {
      display: block;
      background-color: transparent;
      color: var(--ag-text-primary);
      border: none;
      border-radius: var(--ag-radius-sm);
      padding: var(--ag-space-2) var(--ag-space-3);
      text-align: left;
      text-decoration: none;
      font-size: inherit;
      line-height: 1.25;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      cursor: pointer;
      transition: all var(--ag-motion-fast) ease;
    }

    button:hover:not([disabled]),
    a:hover:not([disabled]) {
      background-color: var(--ag-background-secondary);
      color: var(--ag-text-primary);
    }

    button:focus,
    a:focus {
      background-color: var(--ag-background-secondary);
      outline: var(--ag-focus-width) solid var(--ag-focus);
      outline-offset: 0;
    }

    button:active:not([disabled]),
    a:active:not([disabled]) {
      background-color: var(--ag-background-tertiary);
    }

    :host([aria-checked='true']) button:not([disabled]),
    :host([aria-checked='true']) a:not([disabled]) {
      background-color: var(--ag-menu-item-selected-bg, var(--ag-primary));
      color: var(--ag-white);
    }

    :host([aria-checked='true']) button:focus:not([disabled]),
    :host([aria-checked='true']) a:focus:not([disabled]),
    :host([aria-checked='true']) button:hover:not([disabled]),
    :host([aria-checked='true']) a:hover:not([disabled]) {
      background-color: var(--ag-menu-item-selected-active-bg, var(--ag-primary-dark));
    }


    :host([variant="monochrome"][aria-checked='true']) button:not([disabled]),
    :host([variant="monochrome"][aria-checked='true']) a:not([disabled]) {
      background-color: var(--ag-background-primary-inverted);
      color: var(--ag-text-primary-inverted);
    }

    /* hover/active + selected gets --ag-background-secondary-inverted affordance */
    :host([variant="monochrome"][aria-checked='true']) button:focus:not([disabled]),
    :host([variant="monochrome"][aria-checked='true']) a:focus:not([disabled]),
    :host([variant="monochrome"][aria-checked='true']) button:hover:not([disabled]),
    :host([variant="monochrome"][aria-checked='true']) a:hover:not([disabled]) {
      background-color: var(--ag-background-secondary-inverted);
    }

    button[disabled],
    a[disabled] {
      background-color: transparent;
      color: var(--ag-text-muted);
      cursor: not-allowed;
      opacity: 0.6;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this._menu = this.closest('ag-menu');
    const role = this._menu?.type === 'single-select' ? 'menuitemradio' : 'menuitem';
    this.setAttribute('role', role);
    this.setAttribute('tabindex', '-1');
    this.addEventListener('click', this._handleClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('click', this._handleClick);
  }

  updated(changedProperties: Map<PropertyKey, unknown>) {
    if (changedProperties.has('checked')) {
      this.setAttribute('aria-checked', this.checked ? 'true' : 'false');
    }
  }

  private _handleClick(event: Event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    // Invoke onClick callback if provided (native composed event)
    if (this.onClick && event instanceof MouseEvent) {
      this.onClick(event);
    }

    const menuButton = this.closest('ag-menu-button') as AgMenuButton;

    // Dual-dispatch pattern for custom event
    const menuSelectEvent = new CustomEvent<MenuSelectEventDetail>('menu-select', {
      detail: { value: this.value },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(menuSelectEvent);

    // Invoke callback if provided
    if (this.onMenuSelect) {
      this.onMenuSelect(menuSelectEvent);
    }

    if (menuButton && !this.href) {
      menuButton._closeMenu();
    }
  }

  focus() {
    const element = this.shadowRoot?.querySelector('button, a') as HTMLElement;
    if (element) {
      element.focus();
    }
  }

  render() {
    if (this.href) {
      return html`
        <a
          href="${this.href}"
          target="${this.target || nothing}"
          part="ag-menu-item-link ag-menu-item"
          ?disabled="${this.disabled}"
        >
          <slot></slot>
        </a>
      `;
    }

    return html`
      <button ?disabled="${this.disabled}" part="ag-menu-item-button ag-menu-item">
        <slot></slot>
      </button>
    `;
  }
}

export class AgMenuSeparator extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .separator {
      border-top: 1px solid var(--ag-border);
      margin: var(--ag-space-2) 0;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'separator');
  }

  render() {
    return html`<div class="separator" part="ag-menu-separator"></div>`;
  }
}
