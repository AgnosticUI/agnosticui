import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

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
    // Skeleton loaders are visual placeholders, hide from screen readers
    if (!this.hasAttribute('aria-hidden')) {
      this.setAttribute('aria-hidden', 'true');
    }
  }

  static styles = css`
    :host {
      display: block;
      background-color: var(--ag-background-secondary);
      position: relative;
      overflow: hidden;
      width: 100%;
      height: 1em;
    }

    /* Intensity variants */
    :host([intensity='light']) {
      background-color: var(--ag-background-secondary);
    }

    :host([intensity='medium']) {
      background-color: var(--ag-background-tertiary);
    }

    /* Variants */
    :host([variant='text']) {
      border-radius: var(--ag-radius-sm);
    }

    :host([variant='circular']) {
      border-radius: 50%;
    }

    :host([variant='rectangular']) {
      border-radius: 0;
    }

    :host([variant='rounded']) {
      border-radius: var(--ag-radius-md);
    }

    /* Effects */
    @keyframes pulse {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0.5;
      }
    }

    :host([effect='pulse']) {
      animation: pulse 1.5s infinite ease-in-out;
    }

    :host([effect='sheen'])::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
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

    @keyframes sheen {
      100% {
        transform: translateX(100%);
      }
    }

    :host([effect='none']) {
      animation: none;
    }

    /* Respect prefers-reduced-motion */
    @media (prefers-reduced-motion: reduce) {
      :host([effect='pulse']),
      :host([effect='sheen'])::after {
        animation: none;
      }
    }
  `;

  updated(changedProperties: Map<string, unknown>) {
    super.updated(changedProperties);
    
    // Handle dynamic width/height styling
    if (changedProperties.has('width') || changedProperties.has('height') || changedProperties.has('variant')) {
      this._updateDimensions();
    }
  }

  private _updateDimensions() {
    // For circular variant, ensure dimensions are equal if only one is provided
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
      if (this.width) {
        this.style.width = this.width;
      }
      if (this.height) {
        this.style.height = this.height;
      }
    }
  }

  render() {
    return html`<div class="skeleton-wrapper" part="ag-skeleton-wrapper"></div>`;
  }
}
