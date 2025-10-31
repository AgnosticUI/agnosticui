/**
 * AgnosticUI v2 Avatar - Canonical Implementation
 *
 * ⚠️  IMMUTABLE CANONICAL VERSION ⚠️
 *
 * Avatar component for displaying user profile images, initials, or icons.
 * Supports multiple sizes, shapes, and color variants.
 */

import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type AvatarShape = 'circle' | 'square' | 'rounded';
export type AvatarVariant = 'default' | 'info' | 'warning' | 'success' | 'error' | 'transparent';

/**
 * Props interface for Avatar component
 *
 * @csspart ag-avatar - The main avatar container element
 * @csspart ag-avatar-image - The image element (when imgSrc is provided)
 * @csspart ag-avatar-text - The text/initials container (when text is provided)
 */
export interface AvatarProps {
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
}

export class Avatar extends LitElement implements AvatarProps {
  static styles = css`
    :host {
      display: inline-flex;
    }

    .avatar {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      width: var(--ag-space-10);
      height: var(--ag-space-10);
      max-width: 100%;
      background: var(--ag-background-secondary);
      color: var(--ag-text-primary);
      border-radius: 50%;
      font-size: var(--ag-font-size-base);
      font-weight: 500;
    }

    /* Sizes */
    :host([size="xs"]) .avatar {
      width: var(--ag-space-6);
      height: var(--ag-space-6);
      font-size: var(--ag-font-size-xs);
    }

    :host([size="sm"]) .avatar {
      width: var(--ag-space-8);
      height: var(--ag-space-8);
      font-size: var(--ag-font-size-sm);
    }

    :host([size="md"]) .avatar {
      width: var(--ag-space-10);
      height: var(--ag-space-10);
      font-size: var(--ag-font-size-base);
    }

    :host([size="lg"]) .avatar {
      width: var(--ag-space-12);
      height: var(--ag-space-12);
      font-size: var(--ag-font-size-lg);
    }

    :host([size="xl"]) .avatar {
      width: var(--ag-space-14);
      height: var(--ag-space-14);
      font-size: var(--ag-font-size-xl);
    }

    /* Shapes */
    :host([shape="circle"]) .avatar {
      border-radius: 50%;
    }

    :host([shape="square"]) .avatar {
      border-radius: 0;
    }

    :host([shape="rounded"]) .avatar {
      border-radius: var(--ag-radius-md);
    }

    /* Variants */
    :host([variant="info"]) .avatar {
      background: var(--ag-primary-background);
      color: var(--ag-primary-text);
    }

    :host([variant="warning"]) .avatar {
      background: var(--ag-warning-background);
      color: var(--ag-warning-text);
    }

    :host([variant="success"]) .avatar {
      background: var(--ag-success-background);
      color: var(--ag-success-text);
    }

    :host([variant="error"]) .avatar {
      background: var(--ag-danger-background);
      color: var(--ag-danger-text);
    }

    :host([variant="transparent"]) .avatar {
      background: transparent;
    }

    .avatar-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .avatar-text {
      user-select: none;
    }
  `;

  @property({ type: String })
  declare text: string;

  @property({ type: String, attribute: 'img-src' })
  declare imgSrc: string;

  @property({ type: String, attribute: 'img-alt' })
  declare imgAlt: string;

  @property({ type: String, reflect: true })
  declare size: AvatarSize;

  @property({ type: String, reflect: true })
  declare shape: AvatarShape;

  @property({ type: String, reflect: true })
  declare variant: AvatarVariant;

  @property({ type: String, reflect: true, attribute: 'aria-label' })
  declare ariaLabel: string;

  constructor() {
    super();
    this.text = '';
    this.imgSrc = '';
    this.imgAlt = '';
    this.size = 'md';
    this.shape = 'circle';
    this.variant = 'default';
    this.ariaLabel = '';
  }

  private _renderContent() {
    if (this.imgSrc) {
      return html`<img
        class="avatar-image"
        part="ag-avatar-image"
        src="${this.imgSrc}"
        alt="${this.imgAlt}"
      />`;
    }

    if (this.text) {
      return html`<span class="avatar-text" part="ag-avatar-text">${this.text}</span>`;
    }

    // Slot for custom content (e.g., SVG icons)
    return html`<slot></slot>`;
  }

  render() {
    const role = this.imgSrc && !this.imgAlt ? 'presentation' : 'img';
    const ariaLabel = this.ariaLabel || (this.imgSrc ? this.imgAlt : this.text);

    return html`
      <div
        class="avatar"
        part="ag-avatar"
        role="${role}"
        aria-label="${ariaLabel || 'Avatar'}"
      >
        ${this._renderContent()}
      </div>
    `;
  }
}

if (!customElements.get('ag-avatar')) {
  customElements.define('ag-avatar', Avatar);
}
