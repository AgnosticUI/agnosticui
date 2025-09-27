import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';

@customElement('ag-menu-button')
export class MenuButton extends LitElement {
  @query('.menu-trigger')
  declare _trigger: HTMLElement;

  declare _menu: Menu | null;
  declare _clickOutsideHandler: (event: Event) => void;

  @property({ type: String })
  variant: 'chevron' | 'button' | 'icon' = 'chevron';

  @property({ type: String })
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';

  @property({ type: String })
  buttonVariant: 'primary' | 'secondary' | 'ghost' | 'danger' = 'ghost';

  @property({ type: Boolean })
  disabled = false;

  @property({ attribute: 'aria-label' })
  ariaLabel = '';

  @property({ type: String })
  icon = '';

  @property({ type: String })
  unicode = '';

  @property({ type: String })
  label = '';

  @state()
  _menuOpen = false;

  constructor() {
    super();
    this._clickOutsideHandler = this._handleClickOutside.bind(this);
  }

  static styles = css`
    :host {
      display: inline-flex;
      position: relative;
      background-color: inherit;
    }

    .menu-trigger {
      background: none;
      border: none;
      padding: 0;
      margin: 0;
      cursor: pointer;
    }

    .menu-trigger:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }

    /* Chevron variant styles */
    .chevron-button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--ag-space-2);
      background-color: var(--ag-menubutton-bg, var(--ag-background-primary, #ffffff));
      color: var(--ag-menubutton-text, var(--ag-text-primary, #111827));
      border: 1px solid var(--ag-menubutton-border, var(--ag-border-secondary, #d1d5db));
      border-radius: var(--ag-radius-sm);
      padding: var(--ag-space-2) var(--ag-space-3);
      font-size: inherit;
      line-height: 1.25;
      transition: all var(--ag-motion-fast) ease;
    }

    .chevron-button:hover:not(:disabled) {
      background-color: var(--ag-menubutton-bg-hover, var(--ag-background-secondary, #f9fafb));
      color: var(--ag-menubutton-text, var(--ag-text-primary, #111827));
    }

    .chevron-button[aria-expanded="true"] {
      background-color: var(--ag-menubutton-bg-active, var(--ag-background-tertiary, #f3f4f6));
      color: var(--ag-menubutton-text, var(--ag-text-primary, #111827));
    }

    .chevron-button:focus {
      outline: var(--ag-focus-width) solid var(--ag-focus);
      outline-offset: var(--ag-focus-offset);
    }

    .chevron-icon {
      width: var(--ag-space-4);
      height: var(--ag-space-4);
      color: var(--ag-menubutton-indicator-color, var(--ag-text-secondary, #6b7280));
      transition: transform var(--ag-motion-fast) ease;
      flex-shrink: 0;
    }

    .chevron-button[aria-expanded="true"] .chevron-icon {
      transform: rotate(180deg);
    }

    /* Icon button variant styles */
    .icon-button {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--ag-background-primary, #ffffff);
      color: var(--ag-text-primary, #111827);
      border: 1px solid var(--ag-border-secondary, #d1d5db);
      border-radius: var(--ag-radius-sm);
      width: var(--ag-space-10, 2.5rem);
      height: var(--ag-space-10, 2.5rem);
      min-width: 44px;
      min-height: 44px;
      transition: all var(--ag-motion-fast) ease;
    }

    .icon-button:hover:not(:disabled) {
      background-color: var(--ag-background-secondary, #f9fafb);
    }

    .icon-button:focus {
      outline: var(--ag-focus-width) solid var(--ag-focus);
      outline-offset: var(--ag-focus-offset);
    }

    .icon-button[aria-expanded="true"] {
      background-color: var(--ag-background-tertiary, #f3f4f6);
    }

    .unicode-icon {
      font-size: var(--ag-space-6, 1.5rem);
      line-height: 1;
    }

    /* Regular button variant styles */
    .regular-button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--ag-space-2);
      background-color: var(--ag-background-primary, #ffffff);
      color: var(--ag-text-primary, #111827);
      border: 1px solid var(--ag-border-secondary, #d1d5db);
      border-radius: var(--ag-radius-sm);
      padding: var(--ag-space-2) var(--ag-space-3);
      font-size: inherit;
      line-height: 1.25;
      transition: all var(--ag-motion-fast) ease;
    }

    .regular-button:hover:not(:disabled) {
      background-color: var(--ag-background-secondary, #f9fafb);
    }

    .regular-button:focus {
      outline: var(--ag-focus-width) solid var(--ag-focus);
      outline-offset: var(--ag-focus-offset);
    }

    .regular-button[aria-expanded="true"] {
      background-color: var(--ag-background-tertiary, #f3f4f6);
    }

    /* Size variants for chevron */
    :host([size="xs"]) .chevron-button {
      padding: var(--ag-space-1) var(--ag-space-2);
      font-size: var(--ag-text-sm, 0.875rem);
    }

    :host([size="sm"]) .chevron-button {
      padding: calc(var(--ag-space-1) + 2px) var(--ag-space-2);
      font-size: var(--ag-text-sm, 0.875rem);
    }

    :host([size="lg"]) .chevron-button {
      padding: var(--ag-space-3) var(--ag-space-4);
      font-size: var(--ag-text-lg, 1.125rem);
    }

    :host([size="xl"]) .chevron-button {
      padding: var(--ag-space-4) var(--ag-space-5);
      font-size: var(--ag-text-xl, 1.25rem);
    }

    /* Size variants for icon button */
    :host([size="xs"]) .icon-button {
      width: var(--ag-space-6, 1.5rem);
      height: var(--ag-space-6, 1.5rem);
    }

    :host([size="sm"]) .icon-button {
      width: var(--ag-space-8, 2rem);
      height: var(--ag-space-8, 2rem);
    }

    :host([size="md"]) .icon-button {
      width: var(--ag-space-10, 2.5rem);
      height: var(--ag-space-10, 2.5rem);
    }

    :host([size="lg"]) .icon-button {
      width: var(--ag-space-12, 3rem);
      height: var(--ag-space-12, 3rem);
    }

    :host([size="xl"]) .icon-button {
      width: var(--ag-space-14, 3.5rem);
      height: var(--ag-space-14, 3.5rem);
    }

    /* Size variants for regular button */
    :host([size="xs"]) .regular-button {
      padding: var(--ag-space-1) var(--ag-space-2);
      font-size: var(--ag-text-sm, 0.875rem);
    }

    :host([size="sm"]) .regular-button {
      padding: calc(var(--ag-space-1) + 2px) var(--ag-space-2);
      font-size: var(--ag-text-sm, 0.875rem);
    }

    :host([size="lg"]) .regular-button {
      padding: var(--ag-space-3) var(--ag-space-4);
      font-size: var(--ag-text-lg, 1.125rem);
    }

    :host([size="xl"]) .regular-button {
      padding: var(--ag-space-4) var(--ag-space-5);
      font-size: var(--ag-text-xl, 1.25rem);
    }

    ::slotted(ag-menu) {
      position: absolute;
      background-color: var(--ag-menu-bg);
      margin-top: var(--ag-space-1);
      z-index: var(--ag-menu-z-index);
      right: initial;
      left: 0;
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
    // Always update menu reference when menu open state changes
    if (changedProperties.has('_menuOpen')) {
      this._updateMenuReference();
    }
  }

  private _updateMenuReference() {
    this._menu = this.querySelector('ag-menu') as Menu;
  }

  private _handleClickOutside(event: Event) {
    if (!this._menuOpen) return;

    const target = event.target as Element;
    if (!this.contains(target)) {
      this._closeMenu();
    }
  }

  private _handleClick(_event: Event) {
    if (this.disabled) return;

    if (this._menuOpen) {
      this._closeMenu();
    } else {
      this._openMenu();
    }
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

  _openMenu(focusFirst = true) {
    this._menuOpen = true;
    this._updateMenuReference(); // Ensure we have the latest reference
    if (this._menu) {
      this._menu.open = true;
      this._menu._updateMenuItems();
      if (focusFirst) {
        this._menu._focusFirstItem();
      } else {
        this._menu._focusLastItem();
      }
    }
    this._dispatchEvent('menu-open');
  }

  _closeMenu() {
    this._menuOpen = false;
    this.requestUpdate(); // Force a re-render to update aria-expanded
    if (this._menu) {
      this._menu.open = false;
    }
    this._trigger?.focus();
    this._dispatchEvent('menu-close');
  }

  private _dispatchEvent(type: string) {
    this.dispatchEvent(new CustomEvent(type, {
      bubbles: true,
      composed: true
    }));
  }

  private _renderChevronIcon() {
    return html`
      <svg class="chevron-icon" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    `;
  }

  render() {
    // Variant: Icon button
    if (this.variant === 'icon') {
      return html`
        <button
          class="menu-trigger icon-button"
          aria-haspopup="menu"
          aria-expanded="${this._menuOpen}"
          ?disabled="${this.disabled}"
          aria-label="${this.ariaLabel || this.label || 'Menu'}"
          @click="${this._handleClick}"
          @keydown="${this._handleKeydown}"
        >
          ${this.unicode ? html`<span class="unicode-icon">${this.unicode}</span>` : html`<slot></slot>`}
        </button>
        <slot name="menu"></slot>
      `;
    }

    // Variant: Regular button
    if (this.variant === 'button') {
      return html`
        <button
          class="menu-trigger regular-button"
          aria-haspopup="menu"
          aria-expanded="${this._menuOpen}"
          ?disabled="${this.disabled}"
          aria-label="${this.ariaLabel || nothing}"
          @click="${this._handleClick}"
          @keydown="${this._handleKeydown}"
        >
          <slot></slot>
        </button>
        <slot name="menu"></slot>
      `;
    }

    // Variant: Chevron (default)
    return html`
      <button
        class="menu-trigger chevron-button"
        aria-haspopup="menu"
        aria-expanded="${this._menuOpen}"
        ?disabled="${this.disabled}"
        aria-label="${this.ariaLabel || nothing}"
        @click="${this._handleClick}"
        @keydown="${this._handleKeydown}"
      >
        <span class="label">
          <slot></slot>
        </span>
        ${this._renderChevronIcon()}
      </button>
      <slot name="menu"></slot>
    `;
  }
}

@customElement('ag-menu')
export class Menu extends LitElement {
  @property({ type: Boolean })
  open = false;

  @property()
  placement = 'bottom-start';

  @property({ attribute: 'aria-label' })
  ariaLabel = '';

  @property({ attribute: 'aria-labelledby' })
  ariaLabelledBy = '';

  @state()
  _focusedIndex = 0;

  @state()
  _menuItems: MenuItem[] = [];

  constructor() {
    super();
    // Ensure menu starts hidden by default
    this.setAttribute('hidden', '');
  }

  static styles = css`
    :host {
      position: absolute;
      background-color: var(--ag-menu-bg);
      border: 1px solid var(--ag-menu-border);
      border-radius: var(--ag-menu-radius);
      box-shadow: var(--ag-menu-shadow);
      padding: var(--ag-menu-padding);
      margin-top: var(--ag-space-1);
      min-width: var(--ag-menu-min-width, 12rem);
      max-width: var(--ag-menu-max-width, 16rem);
      width: max-content;
      z-index: var(--ag-menu-z-index);
      right: initial;
      left: 0;
      overflow: hidden;
      text-overflow: ellipsis;
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

  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('keydown', this._handleKeydown);
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
  }



  _updateMenuItems() {
    this._menuItems = Array.from(this.querySelectorAll('ag-menu-item')) as MenuItem[];
    this._updateTabIndex();
  }

  private _updateTabIndex() {
    this._menuItems.forEach((item, index) => {
      item.setAttribute('tabindex', index === this._focusedIndex ? '0' : '-1');
    });
  }

  _focusFirstItem() {
    this._focusedIndex = 0;
    this._updateTabIndex();
    this._menuItems[0]?.focus();
  }

  _focusLastItem() {
    this._focusedIndex = this._menuItems.length - 1;
    this._updateTabIndex();
    this._menuItems[this._focusedIndex]?.focus();
  }

  private _focusNextItem() {
    if (this._menuItems.length === 0) return;

    this._focusedIndex = (this._focusedIndex + 1) % this._menuItems.length;
    this._updateTabIndex();
    this._menuItems[this._focusedIndex]?.focus();
  }

  private _focusPreviousItem() {
    if (this._menuItems.length === 0) return;

    this._focusedIndex = this._focusedIndex === 0 ? this._menuItems.length - 1 : this._focusedIndex - 1;
    this._updateTabIndex();
    this._menuItems[this._focusedIndex]?.focus();
  }

  private _handleKeydown(event: KeyboardEvent) {
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
        this._focusedIndex = 0;
        this._updateTabIndex();
        this._menuItems[0]?.focus();
        break;
      case 'End':
        event.preventDefault();
        this._focusedIndex = this._menuItems.length - 1;
        this._updateTabIndex();
        this._menuItems[this._focusedIndex]?.focus();
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
    const menuButton = this.closest('ag-menu-button') as MenuButton;
    if (menuButton) {
      menuButton._closeMenu();
    }
  }

  render() {
    return html`<slot></slot>`;
  }
}

@customElement('ag-menu-item')
export class MenuItem extends LitElement {
  @property()
  value = '';

  @property({ type: Boolean })
  disabled = false;

  @property()
  href = '';

  @property()
  target = '';

  constructor() {
    super();
  }

  static styles = css`
    :host {
      display: block;
    }

    button,
    a {
      display: block;
      background-color: var(--ag-menu-item-bg);
      color: var(--ag-menu-item-text);
      border: none;
      border-radius: var(--ag-radius-sm);
      padding: var(--ag-menu-item-padding);
      text-align: left;
      text-decoration: none;
      font-size: inherit;
      line-height: 1.25;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      cursor: pointer;
      transition: background-color 0.1s ease;
    }

    button:hover:not([disabled]),
    a:hover:not([disabled]) {
      background-color: var(--ag-menu-item-bg-hover);
      color: var(--ag-menu-item-text-hover);
    }

    button:focus,
    a:focus {
      background-color: var(--ag-menu-item-bg-focus);
      outline: var(--ag-focus-width) solid var(--ag-focus);
      outline-offset: var(--ag-focus-offset);
    }

    button:active:not([disabled]),
    a:active:not([disabled]) {
      background-color: var(--ag-menu-item-bg-active);
    }

    button[disabled],
    a[disabled] {
      background-color: var(--ag-background-tertiary);
      color: var(--ag-menu-item-text-disabled);
      cursor: not-allowed;
      opacity: 0.6;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'menuitem');
    this.setAttribute('tabindex', '-1');
    this.addEventListener('click', this._handleClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('click', this._handleClick);
  }

  private _handleClick(event: Event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    const menuButton = this.closest('ag-menu-button') as MenuButton;

    this.dispatchEvent(new CustomEvent('menu-select', {
      detail: { value: this.value },
      bubbles: true,
      composed: true
    }));

    if (menuButton && !this.href) {
      menuButton._closeMenu();
    }
  }

  focus() {
    const element = this.shadowRoot?.querySelector('button, a') as HTMLElement;
    element?.focus();
  }

  render() {
    if (this.href) {
      return html`
        <a
          href="${this.href}"
          target="${this.target || nothing}"
          ?disabled="${this.disabled}"
        >
          <slot></slot>
        </a>
      `;
    }

    return html`
      <button ?disabled="${this.disabled}">
        <slot></slot>
      </button>
    `;
  }
}

@customElement('ag-menu-separator')
export class MenuSeparator extends LitElement {
  static styles = css`
    :host {
      display: block;
      border-top: 1px solid var(--ag-menu-separator-color);
      margin: var(--ag-menu-separator-margin);
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'separator');
  }

  render() {
    return html``;
  }
}
