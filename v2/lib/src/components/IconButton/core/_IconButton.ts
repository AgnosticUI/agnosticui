/* v2/lib/src/components/IconButton/core/_IconButton.ts */
import { LitElement, html, css, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import styles from './icon-button-structure.module.css';
import structuralStylesText from './icon-button-structure.module.css?inline';

export interface IconButtonClickEventDetail {
  originalEvent: MouseEvent;
  label: string;
  pressed: boolean;
}

export interface IconButtonActivateEventDetail {
  originalEvent: KeyboardEvent;
  label: string;
  pressed: boolean;
}

export type IconButtonClickEvent = CustomEvent<IconButtonClickEventDetail>;
export type IconButtonActivateEvent = CustomEvent<IconButtonActivateEventDetail>;

export interface IconButtonProps {
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
}

export class AgIconButton extends LitElement implements IconButtonProps {
  static styles = [
    css`${unsafeCSS(structuralStylesText)}`,
    css`
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }

      button:hover { background: var(--ag-background-secondary); }
      button:focus-visible {
        outline: var(--ag-focus-width) solid rgba(var(--ag-focus), 0.5);
        outline-offset: var(--ag-focus-offset);
      }
      button:active {
        background: var(--ag-background-tertiary);
        transform: scale(0.98);
      }
      button:disabled {
        opacity: var(--ag-opacity-disabled);
        cursor: not-allowed;
        pointer-events: none;
      }

      :host([pressed]) button {
        background: var(--ag-primary-subtle);
        color: var(--ag-primary);
      }

      .icon svg, .icon > * {
        width: 100%;
        height: 100%;
        display: block;
      }

      :host([loading]) button { pointer-events: none; }
      :host([loading]) .icon { opacity: 0.5; }

      :host([variant="secondary"]) button { background: var(--ag-neutral-400); }
      :host([variant="secondary"]) button:hover { background: var(--ag-neutral-500); }
      :host([variant="primary"]) button { background: var(--ag-primary); color: var(--ag-white); }
      :host([variant="primary"]) button:hover { background: var(--ag-primary-dark); }
      :host([variant="success"]) button { background: var(--ag-success); color: var(--ag-white); }
      :host([variant="success"]) button:hover { background: var(--ag-success-dark); }
      :host([variant="warning"]) button { background: var(--ag-warning); color: var(--ag-white); }
      :host([variant="warning"]) button:hover { background: var(--ag-warning-dark); }
      :host([variant="danger"]) button { background: var(--ag-danger); color: var(--ag-white); }
      :host([variant="danger"]) button:hover { background: var(--ag-danger-dark); }
      :host([variant="monochrome"]) button { background: var(--ag-background-primary-inverted); color: var(--ag-text-primary-inverted); }
      :host([variant="monochrome"]) button:hover { background: var(--ag-background-secondary-inverted); }
    `
  ];

  @property({ type: String }) declare label: string;
  @property({ type: String }) declare icon: string;
  @property({ type: String }) declare unicode: string;
  @property({ type: String, reflect: true }) declare size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  @property({ type: String, reflect: true }) declare variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'monochrome';
  @property({ type: Boolean, reflect: true }) declare disabled: boolean;
  @property({ type: Boolean, reflect: true }) declare pressed: boolean;
  @property({ type: Boolean, reflect: true }) declare loading: boolean;
  @property({ type: String }) declare type: 'button' | 'submit' | 'reset';

  @property({ attribute: false }) declare onIconButtonClick?: (event: IconButtonClickEvent) => void;
  @property({ attribute: false }) declare onIconButtonActivate?: (event: IconButtonActivateEvent) => void;

  constructor() {
    super();
    this.label = '';
    this.icon = '';
    this.unicode = '';
    this.size = 'md';
    this.variant = 'ghost';
    this.disabled = false;
    this.pressed = false;
    this.loading = false;
    this.type = 'button';
  }

  private _handleClick = (event: MouseEvent) => {
    if (this.disabled || this.loading) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    const iconButtonClickEvent = new CustomEvent<IconButtonClickEventDetail>('icon-button-click', {
      detail: { originalEvent: event, label: this.label, pressed: this.pressed },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(iconButtonClickEvent);
    if (this.onIconButtonClick) this.onIconButtonClick(iconButtonClickEvent);
  };

  private _handleKeyDown = (event: KeyboardEvent) => {
    if ((event.key === ' ' || event.key === 'Enter') && !this.disabled && !this.loading) {
      const iconButtonActivateEvent = new CustomEvent<IconButtonActivateEventDetail>('icon-button-activate', {
        detail: { originalEvent: event, label: this.label, pressed: this.pressed },
        bubbles: true,
        composed: true
      });
      this.dispatchEvent(iconButtonActivateEvent);
      if (this.onIconButtonActivate) this.onIconButtonActivate(iconButtonActivateEvent);
    }
  };

  private _renderIcon() {
    const hasSlottedContent = this.children.length > 0;
    if (hasSlottedContent) {
      return html`<span class="${styles.icon}" part="ag-icon-has-slotted" aria-hidden="true"><slot></slot></span>`;
    }
    if (this.unicode) {
      return html`<span class="${styles.icon} unicode-icon" part="ag-icon-unicode" aria-hidden="true">${this.unicode}</span>`;
    }
    if (this.icon) {
      return html`
        <span class="${styles.icon}" part="ag-icon" aria-hidden="true" data-icon="${this.icon}">
          <slot>
            <svg viewBox="0 0 24 24" fill="currentColor" focusable="false" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>
              <text x="12" y="16" text-anchor="middle" font-size="8" fill="currentColor">${this.icon.slice(0, 3)}</text>
            </svg>
          </slot>
        </span>
      `;
    }
    return html`<span class="${styles.icon}" part="ag-icon-empty-slot" aria-hidden="true"><slot></slot></span>`;
  }

  render() {
    if (!this.label) {
      // eslint-disable-next-line no-console
      console.warn('AgIconButton: label property is required for accessibility.');
    }

    const sizeClass = this.size === 'xs' ? styles.sizeXs :
                      this.size === 'sm' ? styles.sizeSm :
                      this.size === 'lg' ? styles.sizeLg :
                      this.size === 'xl' ? styles.sizeXl : styles.sizeMd;

    return html`
      <button
        class="${styles.iconButton} ${sizeClass}"
        part="ag-icon-button"
        type=${this.type}
        aria-label=${ifDefined(this.label || undefined)}
        aria-pressed=${ifDefined(this.pressed !== undefined ? this.pressed.toString() : undefined)}
        ?disabled=${this.disabled}
        @click=${this._handleClick}
        @keydown=${this._handleKeyDown}
      >
        ${this._renderIcon()}
        ${this.loading ? html`
          <span class="${styles.icon}" aria-hidden="true">
            <slot name="loading">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" focusable="false" aria-hidden="true" style="animation: spin 1s linear infinite;">
                <path d="M21 12a9 9 0 11-6.219-8.56"/>
              </svg>
            </slot>
          </span>
        ` : ''}
      </button>
    `;
  }
}
