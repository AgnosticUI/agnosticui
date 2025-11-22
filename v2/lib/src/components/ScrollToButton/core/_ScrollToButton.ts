import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
// Import the core Button component to ensure it's registered
import '../../Button/core/Button.js';

export interface ScrollToButtonProps {
  label?: string;
  showLabel?: boolean;
  icon?: boolean;
  scrollThreshold?: number;
  target?: 'top' | 'bottom' | string | HTMLElement;
  direction?: 'up' | 'down' | 'auto';
  smoothScroll?: boolean;
  visible?: boolean;
  size?: 'x-sm' | 'sm' | 'md' | 'lg' | 'xl';
  shape?: 'capsule' | 'rounded' | 'circle' | 'square' | 'rounded-square' | '';
}

/**
 * @element ag-scroll-to-button
 * @slot icon - Optional slot for custom icon projection
 * 
 * @csspart ag-scrollto-button - The button wrapper element
 * @csspart ag-button - The inner ag-button element (exported from nested component)
 * @csspart ag-button-content - The flex container holding icon and label
 * @csspart ag-icon-wrapper - The wrapper around the icon slot (for flex ordering and positioning)
 * @csspart ag-label - The label text span element
 * 
 * @example Icon and Label Positioning
 * You can control icon placement relative to the label using CSS flex properties on the ag-button-content part:
 * 
 * ```css
 * // Icon on the right side
 * ag-scroll-to-button::part(ag-button-content) {
 *   flex-direction: row-reverse;
 * }
 * 
 * // Icon above label (vertical)
 * ag-scroll-to-button::part(ag-button-content) {
 *   flex-direction: column;
 * }
 * 
 * // Icon below label
 * ag-scroll-to-button::part(ag-button-content) {
 *   flex-direction: column-reverse;
 * }
 * 
 * // Customize spacing between icon and label
 * ag-scroll-to-button::part(ag-button-content) {
 *   gap: 1rem;
 * }
 * 
 * // Style the icon wrapper independently
 * ag-scroll-to-button::part(ag-icon-wrapper) {
 *   background: white;
 *   border-radius: 50%;
 *   padding: 0.5rem;
 * }
 * 
 * // Style the label independently
 * ag-scroll-to-button::part(ag-label) {
 *   font-weight: bold;
 *   text-transform: uppercase;
 * }
 * ```
 */
export class ScrollToButton extends LitElement implements ScrollToButtonProps {
  static styles = css`
    :host {
      display: inline-block;
      position: fixed;
      bottom: var(--ag-space-8, 2rem);
      right: var(--ag-space-8, 2rem);
      z-index: var(--ag-z-index-sticky, 900);
      opacity: 0;
      visibility: hidden;
      transition: opacity var(--ag-motion-slow, 0.4s) ease-in-out,
                  visibility var(--ag-motion-slow, 0.4s) ease-in-out;
    }

    :host([visible]) {
      opacity: 1;
      visibility: visible;
    }

    @media (prefers-reduced-motion: reduce) {
      :host {
        transition: none;
      }
    }

    @media print {
      :host {
        display: none !important;
      }
    }

    /* Ensure button is large enough for touch targets */
    ag-button {
      min-width: 44px;
      min-height: 44px;
    }

    /* Default flex layout for icon + label */
    .button-content {
      display: flex;
      align-items: center;
      gap: var(--ag-space-2, 0.5rem);
      flex-direction: row;
    }

    /* Icon wrapper for part targeting */
    .icon-wrapper {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    /* Label wrapper for part targeting */
    .label {
      display: inline-block;
    }
  `;

  @property({ type: String })
  declare label: string;

  @property({ type: Boolean })
  declare showLabel: boolean;

  @property({ type: Boolean })
  declare icon: boolean;

  @property({ type: Number })
  declare scrollThreshold: number;

  @property({ type: String })
  declare target: 'top' | 'bottom' | string;

  @property({ type: String })
  declare direction: 'up' | 'down' | 'auto';

  @property({ type: Boolean })
  declare smoothScroll: boolean;

  @property({ type: Boolean, reflect: true })
  declare visible: boolean;

  @property({ type: String })
  declare size: 'x-sm' | 'sm' | 'md' | 'lg' | 'xl';

  @property({ type: String })
  declare shape: 'capsule' | 'rounded' | 'circle' | 'square' | 'rounded-square' | '';

  // Private property to store HTMLElement target
  private _targetElement: HTMLElement | null = null;

  constructor() {
    super();
    this.label = 'Back to Top';
    this.showLabel = false;
    this.icon = true;
    this.scrollThreshold = 400;
    this.target = 'top';
    this.direction = 'auto';
    this.smoothScroll = true;
    this.visible = false;
    this.size = 'md';
    this.shape = '';
  }

  private _handleScroll = () => {
    this.visible = window.scrollY > this.scrollThreshold;
  };

  private _getScrollBehavior(): ScrollBehavior {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return this.smoothScroll && !prefersReducedMotion ? 'smooth' : 'auto';
  }

  private _getScrollTarget(): number {
    // If target is an HTMLElement (set programmatically)
    if (this._targetElement) {
      return this._targetElement.offsetTop;
    }

    // Handle string targets
    if (typeof this.target === 'string') {
      switch (this.target) {
        case 'top':
          return 0;
        case 'bottom':
          return document.documentElement.scrollHeight - window.innerHeight;
        default: {
          // Try to find element by ID
          const element = document.getElementById(this.target);
          if (element) {
            return element.offsetTop;
          }
          // Try as selector
          const selected = document.querySelector(this.target);
          if (selected instanceof HTMLElement) {
            return selected.offsetTop;
          }
          // Default to top if target not found
          // eslint-disable-next-line no-console
          console.warn(`ScrollToButton: Target "${this.target}" not found, scrolling to top`);
          return 0;
        }
      }
    }

    return 0;
  }

  private _getDirection(): 'up' | 'down' {
    if (this.direction !== 'auto') {
      return this.direction;
    }

    // Auto-detect based on target
    if (this._targetElement) {
      return this._targetElement.offsetTop < window.scrollY ? 'up' : 'down';
    }

    if (typeof this.target === 'string') {
      switch (this.target) {
        case 'bottom':
          return 'down';
        case 'top':
        default:
          return 'up';
      }
    }

    return 'up';
  }

  private _scrollToTarget() {
    const top = this._getScrollTarget();
    const behavior = this._getScrollBehavior();

    window.scrollTo({
      top,
      behavior,
    });
  }

  // Public method to set HTMLElement target
  public setTargetElement(element: HTMLElement | null) {
    this._targetElement = element;
  }

  override connectedCallback() {
    super.connectedCallback();
    window.addEventListener('scroll', this._handleScroll, { passive: true });
    // Initial check
    this._handleScroll();
  }

  override disconnectedCallback() {
    window.removeEventListener('scroll', this._handleScroll);
    super.disconnectedCallback();
  }

  private _renderDefaultIcon() {
    const direction = this._getDirection();
    
    if (direction === 'down') {
      // Arrow Down
      return html`
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          viewBox="0 0 24 24"
          width="20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
        </svg>
      `;
    }

    // Arrow Up (default)
    return html`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="20"
        viewBox="0 0 24 24"
        width="20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
      </svg>
    `;
  }

  render() {
    // Show label if explicitly enabled OR if icon is disabled (fallback)
    const shouldShowLabel = this.showLabel || !this.icon;
    // Use isCircle only when there's no visible label text and only showing icon
    const isIconOnly = this.icon && !shouldShowLabel;
    
    return html`
      <ag-button
        mode="primary"
        size="${this.size}"
        shape="${this.shape || (isIconOnly ? 'circle' : '')}"
        @click="${this._scrollToTarget}"
        aria-label="${this.label}"
        part="ag-scrollto-button"
        exportparts="ag-button"
        role="button"
      >
        <div class="button-content" part="ag-button-content">
          ${this.icon ? html`
            <span class="ag-icon-wrapper" part="ag-icon-wrapper">
              <slot name="icon">
                ${this._renderDefaultIcon()}
              </slot>
            </span>
          ` : ''}
          ${shouldShowLabel ? html`
            <span class="label" part="ag-label">${this.label}</span>
          ` : ''}
        </div>
      </ag-button>
    `;
  }
}
