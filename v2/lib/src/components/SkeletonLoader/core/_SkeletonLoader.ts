import { LitElement, html, css, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './skeleton-loader-structure.module.css';
import structuralStylesText from './skeleton-loader-structure.module.css?inline';

export type SkeletonVariant = 'text' | 'circular' | 'rectangular' | 'rounded';
export type SkeletonEffect = 'sheen' | 'pulse' | 'none';
export type SkeletonIntensity = 'light' | 'medium';

export interface SkeletonProps {
  variant?: SkeletonVariant;
  effect?: SkeletonEffect;
  intensity?: SkeletonIntensity;
  width?: string;
  height?: string;
}

export interface SkeletonLoaderProps extends SkeletonProps {}

export class AgSkeleton extends LitElement implements SkeletonProps {
  @property({ type: String, reflect: true }) declare variant: SkeletonVariant;
  @property({ type: String, reflect: true }) declare effect: SkeletonEffect;
  @property({ type: String, reflect: true }) declare intensity: SkeletonIntensity;
  @property({ type: String, reflect: true }) declare width?: string;
  @property({ type: String, reflect: true }) declare height?: string;

  constructor() {
    super();
    this.variant = 'text';
    this.effect = 'pulse';
    this.intensity = 'light';
  }

  connectedCallback() {
    super.connectedCallback();
    if (!this.hasAttribute('aria-hidden')) {
      this.setAttribute('aria-hidden', 'true');
    }
  }

  static styles = css`
    ${unsafeCSS(structuralStylesText)}

    :host {
      display: block;
      position: relative;
      overflow: hidden;
      width: 100%;
    }

    :host([variant='text']) {
      height: 1em;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }

    @keyframes sheen {
      100% { transform: translateX(100%); }
    }

    :host([effect='sheen'])::after {
      content: "";
      position: absolute;
      inset: 0;
      transform: translateX(-100%);
      background-image: linear-gradient(
        90deg,
        transparent 0%,
        var(--ag-background-primary) 20%,
        var(--ag-background-primary) 60%,
        transparent 100%
      );
      opacity: 0.3;
      animation: sheen 1.5s infinite;
    }

    :host([effect='pulse']) {
      animation: pulse 1.5s infinite ease-in-out;
    }

    :host([effect='none']) {
      animation: none;
    }

    @media (prefers-reduced-motion: reduce) {
      :host([effect='pulse']),
      :host([effect='sheen'])::after {
        animation: none !important;
      }
    }
  `;

  updated(changedProperties: Map<string, unknown>) {
    super.updated(changedProperties);
    if (changedProperties.has('width') || changedProperties.has('height') || changedProperties.has('variant')) {
      this._updateDimensions();
    }
  }

  private _updateDimensions() {
    if (this.variant === 'circular') {
      if (this.width && !this.height) {
        this.style.height = this.width;
        this.style.width = this.width;
      } else if (this.height && !this.width) {
        this.style.width = this.height;
        this.style.height = this.height;
      } else if (this.width && this.height) {
        this.style.width = this.width;
        this.style.height = this.height;
      }
    } else {
      if (this.width) this.style.width = this.width;
      if (this.height) this.style.height = this.height;
    }
  }

  render() {
    return html`<div class="${styles.skeletonLoaderWrapper}" part="ag-skeleton-wrapper"><div class="${styles.skeletonLoaderInner}"></div></div>`;
  }
}
