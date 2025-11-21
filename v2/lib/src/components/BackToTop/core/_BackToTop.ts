import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
// We need to import the core Button component to ensure it's registered
import '../../Button/core/Button.js';

export interface BackToTopProps {
  visible?: boolean;
  threshold?: number;
}

/**
 * @element ag-back-to-top
 * @csspart ag-backtotop-button - The button element that triggers the scroll to top.
 */
export class BackToTop extends LitElement implements BackToTopProps {
  static styles = css`
    :host {
      display: inline-block;
      position: fixed;
      bottom: var(--ag-space-24);
      right: var(--ag-space-24);
      z-index: var(--ag-z-index-sticky);
      opacity: 0;
      visibility: hidden;
      transition: opacity var(--ag-timing-medium) var(--ag-timing-function-standard),
                  visibility var(--ag-timing-medium) var(--ag-timing-function-standard);
    }

    :host([visible]) {
      opacity: 1;
      visibility: visible;
    }
  `;

  @property({ type: Boolean, reflect: true })
  declare visible: boolean;

  @property({ type: Number })
  declare threshold: number;

  constructor() {
    super();
    this.visible = false;
    this.threshold = 400;
  }

  private _handleScroll = () => {
    this.visible = window.scrollY > this.threshold;
  };

  private _scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
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

  render() {
    return html`
      <ag-button
        mode="primary"
        isCircle
        @click="${this._scrollToTop}"
        aria-label="Back to top"
        part="ag-backtotop-button"
      >
        <slot>
          <!-- Default Icon: Arrow Up -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            fill="currentColor"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
          </svg>
        </slot>
      </ag-button>
    `;
  }
}