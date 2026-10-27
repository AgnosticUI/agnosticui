import { LitElement, html, css, unsafeCSS, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './tag-structure.module.css';
import structuralStylesText from './tag-structure.module.css?inline';

export type TagVariant = 'info' | 'warning' | 'error' | 'success' | 'primary' | 'monochrome' | '';
export type TagShape = 'pill' | 'round' | 'circle' | '';

export interface TagRemoveEventDetail {
  variant: TagVariant;
}

export type TagRemoveEvent = CustomEvent<TagRemoveEventDetail>;

export interface TagProps {
  variant?: TagVariant;
  shape?: TagShape;
  uppercase?: boolean;
  removable?: boolean;
  onTagRemove?: (event: TagRemoveEvent) => void;
}

/**
 * @element ag-tag
 * @csspart tag-wrapper - The main wrapper for the tag component.
 * @fires tag-remove - Fired when the remove button is clicked
 */
export class AgTag extends LitElement implements TagProps {
  static styles: CSSResultGroup = css`${unsafeCSS(structuralStylesText)}`;

  @property({ type: String, reflect: true })
  declare variant: TagVariant;

  @property({ type: String, reflect: true })
  declare shape: TagShape;

  @property({ type: Boolean, reflect: true })
  declare uppercase: boolean;

  @property({ type: Boolean, reflect: true })
  declare removable: boolean;

  @property({ attribute: false })
  declare onTagRemove?: (event: TagRemoveEvent) => void;

  constructor() {
    super();
    this.variant = '';
    this.shape = '';
    this.uppercase = false;
    this.removable = false;
  }

  private _handleRemove = () => {
    const removeEvent = new CustomEvent<TagRemoveEventDetail>('tag-remove', {
      detail: {
        variant: this.variant
      },
      bubbles: true,
      composed: true
    });

    this.dispatchEvent(removeEvent);

    if (this.onTagRemove) {
      this.onTagRemove(removeEvent);
    }
  };

  private _handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Backspace' || e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      this._handleRemove();
    }
  };

  render() {
    return html`
      <!-- Preserved literal tag-wrapper class for downstream sub-component lookups like TagFx -->
      <div class="${styles.tagWrapper} tag-wrapper" part="ag-tag-wrapper">
        <slot></slot>
        <slot name="close"></slot>
        ${this.removable ? html`
          <button
            class="${styles.tagRemoveButton} tag-remove-button ag-tag-remove-button"
            type="button"
            aria-label="Remove tag"
            @click=${this._handleRemove}
            @keydown=${this._handleKeyDown}
          >
            <svg
              xmlns="http://w3.org"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              style="width: 1em; height: 1em;"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        ` : ''}
      </div>
    `;
  }
}
