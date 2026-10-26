/**
 * AgnosticUI v2 Avatar - Canonical Implementation
 *
 * ⚠️  IMMUTABLE CANONICAL VERSION ⚠️
 *
 * Avatar component for displaying user profile images, initials, or icons.
 * Supports multiple sizes, shapes, and color variants.
 */

import { LitElement, html, css, unsafeCSS, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './avatar-structure.module.css';
import structuralStylesText from './avatar-structure.module.css?inline';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type AvatarShape = 'circle' | 'square' | 'rounded';
export type AvatarVariant = 'default' | 'info' | 'warning' | 'success' | 'error' | 'transparent' | 'monochrome';

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
  // Treat inline text as a secure, compile-time static token
  static styles: CSSResultGroup = css`
    ${unsafeCSS(structuralStylesText || '')}

    .avatarWrapper,
    :global(.ag-avatar) {
      background: var(--ag-background-tertiary);
      color: var(--ag-text-primary);
      font-size: var(--ag-font-size-base);
    }

    /* Sizes */
    :host([size="xs"]) .avatarWrapper,
    :host([size="xs"]) :global(.ag-avatar) {
      font-size: var(--ag-font-size-xs);
    }

    :host([size="sm"]) .avatarWrapper,
    :host([size="sm"]) :global(.ag-avatar) {
      font-size: var(--ag-font-size-sm);
    }

    :host([size="md"]) .avatarWrapper,
    :host([size="md"]) :global(.ag-avatar) {
      font-size: var(--ag-font-size-base);
    }

    :host([size="lg"]) .avatarWrapper,
    :host([size="lg"]) :global(.ag-avatar) {
      font-size: var(--ag-font-size-lg);
    }

    :host([size="xl"]) .avatarWrapper,
    :host([size="xl"]) :global(.ag-avatar) {
      font-size: var(--ag-font-size-xl);
    }

    /* Variants */
    :host([variant="info"]) .avatarWrapper,
    :host([variant="info"]) :global(.ag-avatar) {
      background: var(--ag-primary-background);
      color: var(--ag-primary-text);
    }

    :host([variant="warning"]) .avatarWrapper,
    :host([variant="warning"]) :global(.ag-avatar) {
      background: var(--ag-warning-background);
      color: var(--ag-warning-text);
    }

    :host([variant="success"]) .avatarWrapper,
    :host([variant="success"]) :global(.ag-avatar) {
      background: var(--ag-success-background);
      color: var(--ag-success-text);
    }

    :host([variant="error"]) .avatarWrapper,
    :host([variant="error"]) :global(.ag-avatar) {
      background: var(--ag-danger-background);
      color: var(--ag-danger-text);
    }

    :host([variant="transparent"]) .avatarWrapper,
    :host([variant="transparent"]) :global(.ag-avatar) {
      background: transparent;
    }

    :host([variant="monochrome"]) .avatarWrapper,
    :host([variant="monochrome"]) :global(.ag-avatar) {
      background: var(--ag-background-primary-inverted);
      color: var(--ag-text-primary-inverted);
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
  // Update only your template builders within the class wrapper:
  private _renderContent() {
    if (this.imgSrc) {
      return html`<img
        class="${styles.avatarImage} ag-avatar-image avatar-image"
        part="ag-avatar-image"
        src="${this.imgSrc}"
        alt="${this.imgAlt}"
      />`;
    }

    if (this.text) {
      return html`<span class="${styles.avatarText} ag-avatar-text avatar-text" part="ag-avatar-text">${this.text}</span>`;
    }

    return html`<slot></slot>`;
  }

  render() {
    const role = this.imgSrc && !this.imgAlt ? 'presentation' : 'img';
    const ariaLabel = this.ariaLabel || (this.imgSrc ? this.imgAlt : this.text);

    const sizeClassMap = {
      xs: styles.avatarSizeXs,
      sm: styles.avatarSizeSm,
      md: styles.avatarSizeMd,
      lg: styles.avatarSizeLg,
      xl: styles.avatarSizeXl,
    };

    const shapeClassMap = {
      circle: styles.avatarShapeCircle,
      square: styles.avatarShapeSquare,
      rounded: styles.avatarShapeRounded,
    };

    const classes = [
      'ag-avatar',
      'avatar', // <-- BACKWARD-COMPATIBILITY HOOK FOR SUBCLASSES & SPEC SUITES
      styles.avatarWrapper,
      `ag-avatar--${this.size}`,
      sizeClassMap[this.size],
      `ag-avatar--${this.shape}`,
      shapeClassMap[this.shape],
      `ag-avatar--variant-${this.variant}`
    ].filter(Boolean).join(' ');

    return html`
      <div
        class="${classes}"
        part="ag-avatar"
        role="${role}"
        aria-label="${ariaLabel || 'Avatar'}"
      >
        ${this._renderContent()}
      </div>
    `;
  }
}