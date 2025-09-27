import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';

@customElement('ag-menu-button')
export class MenuButton extends LitElement {
  @query('button')
  declare _button: HTMLButtonElement;

  declare _menu: Menu | null;

  declare _clickOutsideHandler: (event: Event) => void;

  @property({ type: Boolean })
  disabled = false;

  @property({ attribute: 'aria-label' })
  ariaLabel = '';

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

    button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 100%;
      background-color: var(--ag-menubutton-bg);
      color: var(--ag-menubutton-text);
      cursor: pointer;
      text-align: left;
      border-color: var(--ag-menubutton-border);
      border-style: solid;
      border-width: var(--ag-border-width);
      font-size: inherit;
      line-height: 1.25;
      padding: var(--ag-menu-item-padding);
    }

    button:hover {
      background-color: var(--ag-menubutton-bg-hover);
    }

    button[aria-expanded="true"] {
      background-color: var(--ag-menubutton-bg-active);
    }

    button[disabled] {
      background-color: var(--ag-background-tertiary);
      color: var(--ag-menu-item-text-disabled);
      cursor: not-allowed;
      opacity: 0.6;
    }

    button:focus {
      outline: var(--ag-focus-width) solid var(--ag-focus);
      outline-offset: var(--ag-focus-offset);
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
    this._button?.focus();
    this._dispatchEvent('menu-close');
  }

  private _dispatchEvent(type: string) {
    this.dispatchEvent(new CustomEvent(type, {
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <button
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
    if (!this.open) {
      this.setAttribute('hidden', '');
    }
  }

  static styles = css`
    :host {
      position: absolute;
      background-color: var(--ag-menu-bg);
      border: var(--ag-border-width) solid var(--ag-menu-border);
      border-radius: var(--ag-menu-radius);
      box-shadow: var(--ag-menu-shadow);
      padding: var(--ag-menu-padding);
      margin-top: var(--ag-space-1);
      min-width: var(--ag-menu-min-width);
      max-width: var(--ag-menu-max-width);
      z-index: var(--ag-menu-z-index);
      right: initial;
      left: 0;
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

  updated(changedProperties: Map<PropertyKey, unknown>) {
    if (changedProperties.has('open')) {
      if (this.open) {
        this.removeAttribute('hidden');
      } else if (changedProperties.get('open') !== undefined) {
        // Only set hidden if the open property was explicitly changed to false
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
      width: 100%;
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
      border-top: var(--ag-border-width) solid var(--ag-menu-separator-color);
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