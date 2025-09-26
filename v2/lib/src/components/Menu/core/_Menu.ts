import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { generateUniqueId } from '../../../utils/unique-id.js';

export type MenuPlacement = 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';

// MenuSeparator component
@customElement('ag-menu-separator')
export class MenuSeparator extends LitElement {
  constructor() {
    super();
    this.setAttribute('role', 'separator');
  }

  static styles = css`
    :host {
      display: block;
      border-top: 1px solid var(--ag-menu-separator-color, #e5e7eb);
      margin: var(--ag-menu-separator-margin, 0.25rem 0);
    }
  `;

  render() {
    return html``;
  }
}

// MenuItem component
@customElement('ag-menu-item')
export class MenuItem extends LitElement {
  @property({ type: String })
  declare value: string;

  @property({ type: Boolean })
  declare disabled: boolean;

  @property({ type: String })
  declare href: string;

  @property({ type: String })
  declare target: string;

  constructor() {
    super();
    this.value = '';
    this.disabled = false;
    this.href = '';
    this.target = '';
    this.setAttribute('role', 'menuitem');
    this.setAttribute('tabindex', '-1');
  }

  static styles = css`
    :host {
      display: block;
      padding: var(--ag-menu-item-padding, 0.5rem 0.75rem);
      background: var(--ag-menu-item-bg, transparent);
      color: var(--ag-menu-item-text, #374151);
      cursor: pointer;
      text-decoration: none;
      transition: all 0.15s ease;
    }

    :host(:hover) {
      background: var(--ag-menu-item-bg-hover, #f9fafb);
      color: var(--ag-menu-item-text-hover, #111827);
    }

    :host([tabindex="0"]) {
      background: var(--ag-menu-item-bg-focus, #f3f4f6);
    }

    :host([aria-disabled="true"]) {
      color: var(--ag-menu-item-text-disabled, #9ca3af);
      cursor: not-allowed;
      pointer-events: none;
    }

    :host(:focus-visible) {
      outline: var(--ag-focus-width, 2px) solid var(--ag-focus, #2563eb);
      outline-offset: -2px;
    }

    .content {
      display: flex;
      align-items: center;
      width: 100%;
    }

    .text {
      flex: 1;
    }
  `;

  render() {
    if (this.href) {
      return html`
        <a
          href="${this.href}"
          target="${this.target || ''}"
          class="content"
          @click="${this._handleClick}"
        >
          <span class="text"><slot></slot></span>
        </a>
      `;
    }

    return html`
      <div class="content" @click="${this._handleClick}">
        <span class="text"><slot></slot></span>
      </div>
    `;
  }

  private _handleClick(event: Event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    // Emit custom event for menu to handle
    this.dispatchEvent(new CustomEvent('menu-item-click', {
      detail: {
        value: this.value,
        item: this
      },
      bubbles: true
    }));
  }
}

// Menu component
@customElement('ag-menu')
export class Menu extends LitElement {
  @property({ type: Boolean })
  declare open: boolean;

  @property({ type: String })
  declare placement: MenuPlacement;

  @property({ type: String, attribute: 'aria-label' })
  declare ariaLabel: string;

  @property({ type: String, attribute: 'aria-labelledby' })
  declare ariaLabelledBy: string;

  @state()
  private declare _menuItems: MenuItem[];

  @state()
  private declare _focusedIndex: number;

  constructor() {
    super();
    this.open = false;
    this.placement = 'bottom-start';
    this.ariaLabel = '';
    this.ariaLabelledBy = '';
    this._menuItems = [];
    this._focusedIndex = 0;
    this.setAttribute('role', 'menu');
    this.setAttribute('aria-orientation', 'vertical');
  }

  firstUpdated() {
    this._updateMenuItems();
    this.addEventListener('keydown', this._handleKeyDown.bind(this));
    this.addEventListener('menu-item-click', this._handleItemClick.bind(this));
  }

  updated(changedProperties: Map<string, any>) {
    if (changedProperties.has('open')) {
      if (this.open) {
        this._updateMenuItems();
        this._focusedIndex = 0;
        this._updateFocus();
      }
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('slotchange', () => {
      this._updateMenuItems();
    });
  }

  private _updateMenuItems() {
    this._menuItems = Array.from(this.querySelectorAll('ag-menu-item')) as MenuItem[];
    this._updateFocus();
  }

  private _updateFocus() {
    if (this._menuItems.length === 0) return;

    this._menuItems.forEach((item, index) => {
      item.setAttribute('tabindex', index === this._focusedIndex ? '0' : '-1');
      if (index === this._focusedIndex) {
        item.focus();
      }
    });
  }

  private _handleKeyDown(event: KeyboardEvent) {
    if (this._menuItems.length === 0) return; // Handle empty menu

    const { key } = event;

    switch (key) {
      case 'ArrowDown':
        event.preventDefault();
        this._focusedIndex = (this._focusedIndex + 1) % this._menuItems.length;
        this._updateFocus();
        break;

      case 'ArrowUp':
        event.preventDefault();
        this._focusedIndex = this._focusedIndex === 0
          ? this._menuItems.length - 1
          : this._focusedIndex - 1;
        this._updateFocus();
        break;

      case 'Home':
        event.preventDefault();
        this._focusedIndex = 0;
        this._updateFocus();
        break;

      case 'End':
        event.preventDefault();
        this._focusedIndex = this._menuItems.length - 1;
        this._updateFocus();
        break;

      case 'Enter':
      case ' ':
        event.preventDefault();
        if (this._menuItems[this._focusedIndex]) {
          const menuItem = this._menuItems[this._focusedIndex];
          // Trigger the menu-item-click event directly
          menuItem.dispatchEvent(new CustomEvent('menu-item-click', {
            detail: {
              value: menuItem.value,
              item: menuItem
            },
            bubbles: true
          }));
        }
        break;

      case 'Escape':
        this._closeMenu();
        break;

      case 'Tab':
        this._closeMenu();
        break;
    }
  }

  private _handleItemClick(event: CustomEvent) {
    const { value } = event.detail;

    // Emit menu selection event
    this.dispatchEvent(new CustomEvent('menu-select', {
      detail: { value },
      bubbles: true
    }));

    // Close menu after selection
    this._closeMenu();
  }

  private _closeMenu() {
    this.dispatchEvent(new CustomEvent('menu-close', {
      bubbles: true
    }));
  }

  static styles = css`
    :host {
      position: absolute;
      background: var(--ag-menu-bg, #ffffff);
      border: 1px solid var(--ag-menu-border, #e5e7eb);
      border-radius: var(--ag-menu-radius, 0.5rem);
      box-shadow: var(--ag-menu-shadow, 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05));
      padding: var(--ag-menu-padding, 0.5rem);
      min-width: var(--ag-menu-min-width, 12rem);
      max-width: var(--ag-menu-max-width, 20rem);
      z-index: var(--ag-menu-z-index, 1000);
      opacity: 0;
      transform: scale(0.95);
      transition: opacity 0.15s ease, transform 0.15s ease;
      pointer-events: none;
    }

    :host([open]) {
      opacity: 1;
      transform: scale(1);
      pointer-events: auto;
    }

    :host([hidden]) {
      display: none;
    }

    .menu-container {
      display: flex;
      flex-direction: column;
    }
  `;

  render() {
    return html`
      <div class="menu-container">
        <slot></slot>
      </div>
    `;
  }
}

// MenuButton component
@customElement('ag-menu-button')
export class MenuButton extends LitElement {
  @property({ type: Boolean })
  declare disabled: boolean;

  @property({ type: String, attribute: 'aria-label' })
  declare ariaLabel: string;

  @state()
  private declare _menuOpen: boolean;

  @state()
  private declare _menu: Menu | null;

  constructor() {
    super();
    this.disabled = false;
    this.ariaLabel = '';
    this._menuOpen = false;
    this._menu = null;
  }

  firstUpdated() {
    this._menu = this.querySelector('ag-menu') as Menu;
    if (this._menu) {
      this._menu.addEventListener('menu-close', this._handleMenuClose.bind(this));
      this._menu.addEventListener('menu-select', this._handleMenuSelect.bind(this));
    }
    document.addEventListener('click', this._handleOutsideClick.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('click', this._handleOutsideClick.bind(this));
  }

  private _handleButtonClick() {
    if (this.disabled) return;

    this._toggleMenu();
  }

  private _handleButtonKeyDown(event: KeyboardEvent) {
    if (this.disabled) return;

    const { key } = event;

    switch (key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        this._openMenu();
        break;

      case 'ArrowDown':
        event.preventDefault();
        this._openMenu();
        break;

      case 'ArrowUp':
        event.preventDefault();
        this._openMenu(true); // Focus last item
        break;
    }
  }

  private _toggleMenu() {
    if (this._menuOpen) {
      this._closeMenu();
    } else {
      this._openMenu();
    }
  }

  private _openMenu(focusLast = false) {
    this._menuOpen = true;
    if (this._menu) {
      this._menu.open = true;
      this._menu.removeAttribute('hidden');

      if (focusLast) {
        this._menu._focusedIndex = this._menu._menuItems.length - 1;
      }
    }

    this.dispatchEvent(new CustomEvent('menu-open', {
      bubbles: true
    }));
  }

  private _closeMenu() {
    this._menuOpen = false;
    if (this._menu) {
      this._menu.open = false;
      this._menu.setAttribute('hidden', '');
    }

    // Return focus to button
    this.shadowRoot?.querySelector('button')?.focus();

    this.dispatchEvent(new CustomEvent('menu-close', {
      bubbles: true
    }));
  }

  private _handleMenuClose() {
    this._closeMenu();
  }

  private _handleMenuSelect(event: CustomEvent) {
    this.dispatchEvent(new CustomEvent('menu-select', {
      detail: event.detail,
      bubbles: true
    }));
  }

  private _handleOutsideClick(event: Event) {
    if (!this._menuOpen) return;

    const target = event.target as Node;
    if (!this.contains(target)) {
      this._closeMenu();
    }
  }

  static styles = css`
    :host {
      position: relative;
      display: inline-block;
    }

    button {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: var(--ag-menubutton-bg, transparent);
      border: 1px solid var(--ag-menubutton-border, #d1d5db);
      color: var(--ag-menubutton-text, #374151);
      padding: 0.5rem 0.75rem;
      border-radius: 0.375rem;
      cursor: pointer;
      font: inherit;
      transition: all 0.15s ease;
    }

    button:hover:not(:disabled) {
      background: var(--ag-menubutton-bg-hover, #f9fafb);
    }

    button:focus-visible {
      outline: var(--ag-focus-width, 2px) solid var(--ag-focus, #2563eb);
      outline-offset: 2px;
    }

    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    button[aria-expanded="true"] {
      background: var(--ag-menubutton-bg-active, #f3f4f6);
    }

    .button-content {
      flex: 1;
    }

    .indicator {
      color: var(--ag-menubutton-indicator-color, #6b7280);
      transition: transform 0.15s ease;
    }

    button[aria-expanded="true"] .indicator {
      transform: rotate(180deg);
    }

    .menu-slot {
      position: absolute;
      top: 100%;
      left: 0;
      margin-top: 0.25rem;
    }
  `;

  render() {
    return html`
      <button
        type="button"
        ?disabled="${this.disabled}"
        aria-haspopup="menu"
        aria-expanded="${this._menuOpen}"
        aria-label="${this.ariaLabel || ''}"
        @click="${this._handleButtonClick}"
        @keydown="${this._handleButtonKeyDown}"
      >
        <span class="button-content">
          <slot></slot>
        </span>
        <span class="indicator" aria-hidden="true">▾</span>
      </button>

      <div class="menu-slot">
        <slot name="menu" @slotchange="${this._updateMenuReference}"></slot>
      </div>
    `;
  }

  private _updateMenuReference() {
    this._menu = this.querySelector('ag-menu') as Menu;
    if (this._menu) {
      this._menu.setAttribute('hidden', '');
      this._menu.addEventListener('menu-close', this._handleMenuClose.bind(this));
      this._menu.addEventListener('menu-select', this._handleMenuSelect.bind(this));
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-menu-button': MenuButton;
    'ag-menu': Menu;
    'ag-menu-item': MenuItem;
    'ag-menu-separator': MenuSeparator;
  }
}